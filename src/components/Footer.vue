<template lang='pug'>
  footer.W12
    .Row
      .Footer__Menu.W12.Flex.SpaceBetween.Center
        .Footer__Column( v-for = 'column in menu' )
          .Footer__MenuTitle {{ column.title }}
          .Flex
            ul
              li( v-for = 'link in column.links' )
                a( :href = 'link.url' ) {{ link.description }}     
    .Row.Footer__Endereco Todos os direitos reservados
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      menu: [
        {
          title: 'CONF',
          links: [
            {
              url: 'https://braziljs.org/edicoes-anteriores/',
              description: 'Edições anteriores',
            },
            {
              url: 'https://braziljs.org/por-que-devo-ir-braziljs/',
              description: 'Por que devo ir na BrazilJS',
            },
            {
              url: 'https://braziljs.org/codigo-de-conduta/',
              description: 'Código de Conduta',
            },
          ],
        },
        {
          title: 'NOSSAS INICIATIVAS',
          links: [
            {
              url: 'https://braziljs.org/eventos',
              description: 'Eventos',
            },
            {
              url: 'https://braziljs.org/artigos/',
              description: 'Portal e blog de notícias',
            },
            {
              url: 'https://loja.braziljs.org/',
              description: 'Loja',
            },
            {
              url: 'https://braziljs.org/newsletter/',
              description: 'Newsletter',
            },
          ],
        },
        {
          title: 'NA COMUNIDADE',
          links: [
            {
              url: 'https://braziljs.org/artigos/',
              description: 'Artigos',
            },
            {
              url: 'https://github.com/braziljs',
              description: 'Github',
            },
            {
              url: 'https://now-examples-slackin-vvjogtwzcf.now.sh/',
              description: 'Discussão',
            },
          ],
        },
        {
          title: 'INSTITUCIONAL',
          links: [
            {
              url: 'https://braziljs.org/sobre/',
              description: 'Sobre',
            },
            {
              url: 'https://braziljs.org/patrocine/',
              description: 'Patrocine',
            },
            {
              url: 'https://braziljs.org/contato/',
              description: 'Contato',
            },
            {
              url: 'https://nasc.io/',
              description: 'Nasc',
            },
          ],
        },
      ],
    }
  }
}
</script>

<style lang='stylus'>
@import '../assets/styles/variables.styl'

footer
  background $primary
  padding-top 20px

  @media screen and (max-width $small)
    padding-bottom 80px

  .Footer__Menu
    max-width 960px

  .Footer__MenuTitle
    color $secundary
    font-family Lato
    font-size 12px
    font-weight bold
    margin-bottom 15px

  ul
    margin-right 85px
    margin-bottom 30px

    @media screen and (max-width 1200px)
      margin-right 50px

    &:last-child
      margin-right 0

    li
      a
        color #727272
        display block
        font-size 12px
        font-weight 600
        margin-bottom 10px
        transition color .3s ease

        &:hover
          color #626262

  .ContentLinks
    max-width 38%

    @media screen and (max-width $medium)
      max-width none

  .IconGroup
    margin-bottom 20px
    width 340px

    img
      max-width 100%

    @media screen and (max-width $medium)
      width auto

    @media screen and (max-width $small)
      width 100%
    
    a
      margin-right 15px
      
      &:last-child
        margin-right 0

      img
        max-height 30px
        max-width 80px
    
  .IconSocial a img
      height 13px

  .Footer__Endereco
    border-top 1px solid rgba(225, 225, 225, 0.24)
    color #727272
    font-size 12px
    text-align center
    padding 20px

  @media screen and (max-width $medium)  
    .ExternalLinks
      display flex
      flex-wrap wrap
      justify-content space-between
      margin auto
      width 100%
</style>
