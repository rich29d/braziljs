<template lang='pug'>
  #app
    Header
    router-view
    Footer
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style lang='stylus'>
@import 'assets/styles/all.styl'
</style>
