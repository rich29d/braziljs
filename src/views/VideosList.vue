<template lang='pug'>
  main
    Breadcrumbs
    PageTitle    
    List
</template>

<script>
import List from '@/components/List';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageTitle from '@/components/PageTitle';

export default {
  name: 'VideosList',
  components: {
    List,
    Breadcrumbs,
    PageTitle,
  },
}
</script>

<style lang='stylus'>
  @import '../assets/styles/variables.styl'
  @import '../assets/styles/video.styl'

  .Videos__List .Video
    @media screen and (max-width 900px)
      width calc(50% - 20px)
      
    @media screen and (max-width 500px)
      width 100%
</style>
