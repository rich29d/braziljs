<template lang='pug'>
  div
    .Row
      .Videos__List.MaxWidth.Flex.SpaceBetween.Center
        .Video(
          v-for = '(video, index) in videos'
          :class = '{ Current: video.id === videoId }'
          :style = 'delayFadeIn(index)'
          @click = 'goToVideo(video.id)'
        )
          img.Video__Image( :src = 'video.image' )
          .Video__Title {{ video.title }}
          .Video__Channel {{ video.channel }}
          .Video__Views( v-show = 'video.views' ) {{ video.views }} views
    .Row( v-show = 'showButtonLoadMore' )
      .Videos__ListButton
        Loading.Center( v-show = 'loading' )
        button(
          @click = 'mountList'
          v-show = '!loading'
        ) Carregar mais
</template>

<script>
const { get } = require('lodash');
import { mapState, mapMutations, mapActions } from 'vuex';
import Loading from '@/components/Loading';

export default {
  name: 'List',
  components: {
    Loading,
  },
  props: {
    videoId: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      showButtonLoadMore: true,      
      loading: false,
    }
  },
  computed: {
    ...mapState([
      'videos',
      'nextPage',
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_VIDEO',
      'SET_NEXT_PAGE',
      ]),
    ...mapActions([
      'addVideo',
      'setNextPage'
      ]),
    delayFadeIn(index) {
      return `animation-delay: .${index}s;`
    },
    goToVideo(videoId) {
      this.$router.replace(`/play/${videoId}`);
    },
    async loadList() {
      const params = {
        part: 'snippet',
        maxResults: 6,
        playlistId: 'PLvjvRuk_jw5KDnbg8VtLrQ94zWOcc3yac',
      };

      if ( this.nextPage ) {
        params.pageToken = this.nextPage;
      }

      return await this.$http.get('/playlistItems', { params });
    },
    async loadStatistics(id) {
      let params = {
        part: 'statistics',        
      };

      if ( id ) {
        params.id = id;
      } else return null

      return await this.$http.get('/videos', { params });
    },
    async mountList() {
      this.loading = true;
      const resp = await this.loadList();
      this.setNextPage(get(resp, 'data.nextPageToken', null));
      this.showButtonLoadMore = !!this.nextPage;

      for (const video of resp.data.items) {
        const info = video.snippet;
        const videoId = get(info, 'resourceId.videoId', null);
        const views = await this.getViews(videoId);

        this.addVideo({
          image: info.thumbnails.medium.url,
          title: info.title,
          description: info.description,
          channel: info.channelTitle,
          id: videoId,
          views,
        });
      }

      this.loading = false;
    },
    async getViews(videoId) {
      const resp = await this.loadStatistics(videoId);
      const viewCount = get(resp, 'data.items[0].statistics.viewCount', null);

      if (viewCount) {
        const formatMilllion = (+viewCount - (+viewCount % 1000)) / 1000;
        return formatMilllion ? `${formatMilllion}k` : viewCount;
      } else return null
    }
  },
  async mounted() {
    if (this.videos.length === 0) {
      await this.mountList();
    }

    this.$emit('loaded');
  }
}
</script>
