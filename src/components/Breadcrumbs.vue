<template lang='pug'>
  .Row
    .Breacrumb.MaxWidth.Center
      span Página inícial
      span( @click = 'goToList' ) {{ pageCurrent }}
      span( v-if = 'videoCurrent' ) {{ videoCurrent }}
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    videoCurrent: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      pageCurrent: this.$route.name,
    }
  },
  methods: {
    goToList() {
      this.$router.replace(`/`);
    },
  }
}
</script>

<style lang='stylus'>
  .Breacrumb
    margin-top 30px
    font-size 12px

    span
      cursor pointer

      &:after
        content: '»'
        font-size 15px
        margin 0 3px

      &:last-child
        cursor auto
        font-weight bold
        padding-right 0

        &:after
          content: ''
</style>
