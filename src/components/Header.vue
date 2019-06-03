<template lang='pug'>
  header.W12
    .Header__Box.W12
      .Wrap.W12
        .Wrap__Top.Center
          .Menu__Utils
            ul.Flex.Middle
              li
                .Menu__Search        
                  input(
                    type = 'text'
                    placeholder = 'O que está procurando?'
                  )
              li( v-for = 'link in menu.utils' )
                a( :href = 'link.url' ) {{ link.description }}
        .Row
          .Wrap__Bottom.Center.Flex.Middle
            .Header__Logo.Flex.Middle
              a.Logo( href = 'https://braziljs.org/' )
            .Menu__Pages
              ul.Flex.Middle
                li( v-for = 'link in menu.pages' )
                  a( :href = 'link.url' ) {{ link.description }}
      .Menu__Mobile.Mobile.W12
        ul.Flex.Middle.W12
          li( v-for = 'link in menu.mobile' )
            a.Flex.Middle( :href = 'link.url' )
              span.Center( :class = 'link.className' )
              span {{ link.description }}
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: {
        pages: [
          {
            description: 'EVENTOS',
            url: 'https://braziljs.org/eventos/',
          },
          {
            description: 'ARTIGOS',
            url: 'https://braziljs.org/artigos/',
          },
          {
            description: 'VÍDEOS',
            url: 'javascript:void(0)',
          },
          {
            description: 'LOJA',
            url: 'https://loja.braziljs.org/',
          },
        ],
        utils: [
          {
            description: 'SOBRE',
            url: 'https://braziljs.org/sobre/',
          },
          {
            description: 'CONTATO',
            url: 'https://braziljs.org/contato/',
          },
        ],
        mobile: [
          {
            description: 'Menu',
            className: 'Menu__MobileImage--menu',
            url: 'javascript:void(0)',
          },
          {
            description: 'Pesquisa',
            className: 'Menu__MobileImage--search',
            url: 'javascript:void(0)',
          },
          {
            description: 'SOBRE',
            className: 'Menu__MobileImage--signIn',
            url: 'https://braziljs.org/sobre/',
          },
          {
            description: 'CONTATO',
            className: 'Menu__MobileImage--login',
            url: 'https://braziljs.org/contato/',
          },
        ]
      }
    }
  }
}
</script>

<style lang='stylus'>
@import '../assets/styles/variables.styl'

header
  height 80px

  @media screen and (max-width $medium)
    height 101px

  @media screen and (max-width $small)
    height 0

  .Header__Box
    background $primary
    box-shadow 0 1px 4px rgba(0,0,0,0.1)
    left 0
    position fixed
    top 0
    z-index 2  

    @media screen and (max-width $small)
      background none
      bottom 15px
      box-shadow none
      top auto

    ul
      padding 0
      margin 20px 0

      @media screen and (max-width $medium)
        margin 10px 0

      li
        padding 0 15px

        &:last-child
          padding-right 0

        a
          color $secundary
          display block
          font-size 14px
          font-weight bold
          line-height 40px
          text-decoration none
          transition color .2s ease

          &:hover
            color #b8b8b8

          @media screen and (max-width $medium)
            line-height 40px

    .Wrap
      @media screen and (max-width $small)
        display none
      
      .Wrap__Top
        height 0      
        position relative

        @media screen and (min-width $medium)
          max-width 1260px
        
        @media screen and (max-width $medium)
          background #f3f3f3
          height: 41px;
          position relative

          ul
            margin 0

            li a
              font-size 12px
              font-weight normal
              line-height 40px

        @media screen and (max-width $small)
          display none

      .Wrap__Bottom
        max-width 1260px

      .Header__Logo .Logo
        background url('../assets/images/braziljs-horizontal-logo-white.png') left center / contain no-repeat transparent
        display block
        height 43px
        margin-right 70px
        width 140px

        @media screen and (max-width $medium)
          height 35px

      .Menu__Utils
        margin-left auto
        position absolute
        right 0
        top 0

        @media screen and (max-width $medium)
          right 15px

        ul li
          padding 0 20px

          @media screen and (min-width $medium)
            border-left 1px solid $grey

            &:first-child
              border-left none            

        .Menu__Search
          height 40px
          position relative
          width 40px
          z-index 2

          @media screen and (max-width $medium)
            height 30px
            width 250px

          input
            background url(../assets/images/ico-search.svg) center right 12px / 16px no-repeat $grey
            border 1px solid $grey
            border-radius 20px
            height inherit
            left 0
            outline none
            padding 0 25px 0 15px
            position absolute
            top 0
            transition width .5s ease
            width inherit

            @media screen and (min-width $medium)
              cursor pointer

              &:focus
                width 275px
                cursor auto
            
            @media screen and (max-width: $medium)
              background-size 12px
              padding 0 25px 0 12px

    @media screen and (max-width $medium)
      .Menu__Pages
        margin-left auto
    
    @media screen and (max-width $small)
      .Menu__Mobile
        background $primary
        box-shadow 0px 4px 32px 1px rgba(0,0,0,0.14)
        width calc(100% - 30px)
        margin auto
        border-radius 15px

        ul
          margin 0

          li
            width 25%
            padding 0

            a
              text-align center
              font-size 11px
              line-height normal
              padding 15px 0

              span
                width 100%

                &:first-child
                  background center center / contain no-repeat transparent
                  display block
                  margin-bottom 5px
                  height 20px

                &.Menu__MobileImage--
                  &menu
                    background-image url(../assets/images/ico-menu.svg)
                  
                  &search
                    background-image url(../assets/images/ico-search.svg)
                  
                  &signIn
                    background-image url(../assets/images/ico-sign-in.svg)
                  
                  &login
                    background-image url(../assets/images/ico-login.svg)
</style>
