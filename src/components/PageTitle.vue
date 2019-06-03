<template lang='pug'>
  .Row
    .Page__Title.MaxWidth.Center
      h1 {{ title }}
      .detail
</template>

<script>
export default {
  name: 'PageTitle',
  data() {
    return {
      title: this.$route.name,
    }
  },
}
</script>

<style lang='stylus'>
  @import '../assets/styles/variables.styl'

  .Page__Title
    margin-top 30px

    h1
      font-size 30px
      margin 0

    .detail
      background-color #CF294B
      border-radius 10px
      height 6px
      margin-top 25px
      width 20px
</style>
