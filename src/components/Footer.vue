<template lang='pug'>
  footer.W12
    .Row
      .Footer__Menu.W12.Flex.SpaceBetween.Center
        .Footer__Column
          .Footer__MenuTitle SOBRE NÓS
          .Flex
            ul( v-for = 'column in menu.sobreNos' )
              li( v-for = 'link in column' )
                a( :href = 'link.url' ) {{ link.description }}
        .Footer__Column.ContentLinks
          .Footer__MenuTitle CONTEÚDO
          .Flex
            ul( v-for = 'column in menu.conteudo' )
              li( v-for = 'link in column' )
                a( :href = 'link.url' ) {{ link.description }}
        .Footer__Column.ExternalLinks
          .IconGroup
            .Footer__MenuTitle PAGAMENTO
            img(src = '//www.empiricus.com.br/wp-content/themes/empiricus_v2/assets/images/icons/ico-payment.png')
          .IconGroup
            .Footer__MenuTitle.W12 SEGURANÇA
            .Flex.Middle
              a(
                v-for = 'link in menu.seguranca'
                :href = 'link.url'
              )
                img( :src = 'link.image' )
          .IconGroup.IconSocial
            .Footer__MenuTitle EMPIRICUS NAS REDES
            .Flex.Middle
              a(
                v-for = 'link in menu.socialMidia'
                :href = 'link.url'
              )
                img( :src = 'link.image' )
    .Row.Footer__Endereco
      | © 2017 - Empiricus Research - Todos os direitos reservados - Av. Brigadeiro Faria Lima, 3.477 -
      | Torre B - 10º  Andar - CEP 04538-133 - Itaim Bibi - São Paulo
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      menu: {
        sobreNos: [
          [
            {
              description: 'Home',
              url: 'javascript:void(0)',
            },
            {
              description: 'A Empiricus',
              url: 'javascript:void(0)',
            },
            {
              description: 'Analistas',
              url: 'javascript:void(0)',
            },
            {
              description: 'Assinaturas',
              url: 'javascript:void(0)',
            },
          ],
          [
            {
              description: 'Atendimentos',
              url: 'javascript:void(0)',
            },
            {
              description: 'Disclosure',
              url: 'javascript:void(0)',
            },
            {
              description: 'Política de Privacidade',
              url: 'javascript:void(0)',
            },
            {
              description: 'Trabalhe na Empiricus',
              url: 'javascript:void(0)',
            },
          ],
        ],
        conteudo: [
          [
            {
              description: 'Começamos a investir',
              url: 'javascript:void(0)',
            },
            {
              description: 'Ações',
              url: 'javascript:void(0)',
            },
            {
              description: 'Renda Fixa',
              url: 'javascript:void(0)',
            },
            {
              description: 'Cripmoedas',
              url: 'javascript:void(0)',
            },
          ],
          [
            {
              description: 'Dividendos',
              url: 'javascript:void(0)',
            },
            {
              description: 'Fundos',
              url: 'javascript:void(0)',
            },
            {
              description: 'Em Imóveis',
              url: 'javascript:void(0)',
            },
            {
              description: 'No Exterior',
              url: 'javascript:void(0)',
            },
          ],
          [
            {
              description: 'Newletter',
              url: 'javascript:void(0)',
            },
            {
              description: 'Daily',
              url: 'javascript:void(0)',
            },
            {
              description: 'Vídeos',
              url: 'javascript:void(0)',
            },
            {
              description: 'Cotações',
              url: 'javascript:void(0)',
            },
            {
              description: 'Dicionários de Economia',
              url: 'javascript:void(0)',
            },
          ],
        ],
        seguranca: [
          {
            url: 'https://www.rapidssl.com/',
            image: '//www.empiricus.com.br/wp-content/themes/empiricus_v2/assets/images/icons/ico-rapidssl.png',
          },
          {
            url: 'https://www.fcontrol.com.br/',
            image: '//www.empiricus.com.br/wp-content/themes/empiricus_v2/assets/images/icons/FControl_Logo.gif',
          },
          {
            url: 'https://safeweb.norton.com/report/show?url=www.empiricus.com.br',
            image: '//www.empiricus.com.br/wp-content/themes/empiricus_v2/assets/images/icons/ico-norton.png',
          },
          {
            url: 'https://transparencyreport.google.com/safe-browsing/search?url=www.empiricus.com.br&hl=pt-PT',
            image: '//www.empiricus.com.br/wp-content/themes/empiricus_v2/assets/images/icons/ico-google-safe.png',
          },
        ],
        socialMidia: [
          {
            url: 'https://www.youtube.com/c/empiricus',
            image: require('@/assets/images/youtube.svg'),
          },
          {
            url: 'https://facebook.com/empiricus',
            image: require('@/assets/images/linkedin.svg'),
          },
          {
            url: 'https://www.linkedin.com/company/empiricus_/',
            image: require('@/assets/images/instagram.svg'),
          },
          {
            url: 'https://www.instagram.com/empiricus/',
            image: require('@/assets/images/facebook.svg'),
          },
          {
            url: 'https://twitter.com/empiricus/',
            image: require('@/assets/images/twitter.svg'),
          },
        ],
      },
    }
  }
}
</script>

<style lang='stylus'>
@import '../assets/styles/variables.styl'

footer
  background $secundary
  padding-top 20px

  @media screen and (max-width $small)
    padding-bottom 80px

  .Footer__Menu
    max-width 1260px

  .Footer__MenuTitle
    color $primary
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
