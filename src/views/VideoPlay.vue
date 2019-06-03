<template lang='pug'>
  main.Video__Play
    Breadcrumbs( :videoCurrent = 'videoCurrent.title' )
    PageTitle
    .Row
      .MaxWidth.Center
        button.ButtonToBack( @click = 'goToList' ) Voltar
    .Row
      .Flex.MaxWidth.Center
        .W9.Video__Current
          .Video
            .IFrame
              youtube.W12(
                fitParent = true
                ref = 'youtube'
                resize = true
                :video-id = 'videoId'
              )
            .Video__Title {{ videoCurrent.title }}
            .Video__Views {{ videoCurrent.views }} views
            .Video__Description( v-html = 'videoCurrent.description' )
        .W3.Sidebar
          aside.CustomScroll
            List(
              :videoId = 'videoId'
              @loaded = 'scrollToSelected'
            )
</template>

<script>
const { get } = require('lodash');
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
import List from '@/components/List';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageTitle from '@/components/PageTitle';

Vue.use(VueYoutube);

export default {
  name: 'Videos',
  components: {
    VueYoutube,
    List,
    Breadcrumbs,
    PageTitle,
  },
  props: {
    videoId: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      videoCurrent: {},
    }
  },
  watch: {
    videoId() {
      setTimeout(() => {
        this.scrollToVideo();
        this.mountVideo();
        this.playVideo();
      }, 50);
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
  methods: {
    async loadVideo(part = 'snippet') {
      if ( !this.videoId ) {
        return null
      }

      return await this.$http.get('/videos', {
        params: {
          part,
          id: this.videoId,
        }
      });
    },
    async mountVideo() {
      const resp = await this.loadVideo('snippet');
      const info = get(resp, 'data.items[0].snippet', null);
      const videoId = get(info, 'resourceId.videoId', null);
      const views = await this.getViews(videoId);

      this.videoCurrent = {
        image: get(info, 'thumbnails.medium.url', null),
        title: info.title,
        description: this.enterToBr(info.description),
        views,
      }
    },
    async getViews(videoId) {
      const resp = await this.loadVideo('statistics');
      const viewCount = get(resp, 'data.items[0].statistics.viewCount', null);
      return this.numberWithCommas(viewCount);
    },
    scrollToSelected() {
      const container = document.querySelector(".Sidebar .CustomScroll");
      const current = document.querySelector(".Sidebar .CustomScroll .Current");
      container.scrollTop = get(current, 'offsetTop', 0);
    },
    scrollToVideo() {
      const body = document.querySelector('body, html');
      const top = document.querySelector(".Video__Current").offsetTop

      body.scrollTop = body.clientWidth > 765 ? top - 100 : top;
    },
    numberWithCommas(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(string) {
      return string.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    },
    delayFadeIn(index) {
      return `animation-delay: .${index}s;`
    },
    playVideo() {
      this.player.playVideo()
    },
    goToList() {
      this.$router.replace(`/`);
    }, 
  },
  async mounted() {    
    await this.mountVideo();
    await this.playVideo();
    this.scrollToVideo();
  }
}
</script>

<style lang='stylus'>
  @import '../assets/styles/variables.styl'

  .ButtonToBack
    background transparent
    border 1px solid currentColor
    border-radius 15px
    color $grey
    cursor pointer
    float right
    margin-top -56px
    outline none
    padding 5px 15px

  .Video__Play
    .Video__Current,
    .Sidebar
      margin-bottom 60px
      margin-top 30px

    .IFrame
      border-radius 10px
      overflow hidden
      display flex

    .Video__Current
      animation fadeInTop .5s ease
      padding-right 40px

      @media screen and (max-width $small)
        padding-right 0
        width 100%

        .IFrame
          margin 0 -30px

      +prefix-classes('Video__')
        @media screen and (max-width $small)
          .Image
            margin: 0 -30px;
            width calc(100% + 60px)

        .Title
          font-size 19px
          margin-top 25px

        .Views,
        .Description
          font-size 18px

        .Views
          margin-top 10px

        .Description
          margin-top 20px

    .Sidebar
      position relative

      @media screen and (max-width $small)
        width 100%

    aside
      left 0
      height 100%
      max-height calc(100vh - 200px)
      overflow-y auto
      overflow-x hidden
      padding-right 10px
      position absolute
      top 0

      @media screen and (max-width $small)
        max-height none
        overflow visible
        padding-right 0
        position relative

      .Row
        padding 0

    .Videos__List
      margin-top 0
    
      .Video
        animation-name fadeInRight
        width 100%
        transition background .3s ease, padding .3s ease

        &.Current
          background $primary
          border-radius 15px
          padding 10px

        +prefix-classes('Video__')
          .Title
            font-size 14px

          .Views
            font-size 13px
</style>
