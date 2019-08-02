<template lang='pug'>

  v-container(login-page fill-height column :class='{xl}')
    v-toolbar.py-12
      v-toolbar-title
        nuxt-link(to='/'): img.logo(src='/img/logo.png')

    v-layout.main-part.wrap
      v-flex(md4 sm12 px-4 order-xs2 order-md1) 
        v-form.login-page__form
          .form-group.mb-4
            input(type='text' placeholder='Email').text-input
          .form-group.mb-4
            input(type='text' placeholder='Password').text-input
          v-checkbox(label='Remember Me' outlined dark)
          v-btn(color='primary').form__submit-btn Login

      v-flex(login-page__welcome lg6 md7 sm12 offset-md1 px-4 order-xs1 order-md2 :class='{smAndDown}')
        .welcome__text
          p.subtitle-1.font-weight-regular.mb-2 Discover The Treasures
          h1.display-2.font-weight-bold.pb-2.carousel-text 
            v-carousel(vertical hide-delimiters :show-arrows='false' cycle interval='2000' continuous height='57') 
              v-carousel-item Turkey
              v-carousel-item North Cyprus
                
            span Expert
          h1(v-text='$t("login.welcome.st2")').display-2.font-weight-light.mb-5
          .discover-group(:class='{smAndDown}')
            v-btn(color='primary').mr-8
              | Discover 
              v-icon mdi-chevron-right
            span.mt-2 The system is a nutshell
        .welcome__play.align-center.flex(v-if='!smAndDown')
          v-btn(icon color='white' height='80' width='80')
            v-icon(size='60') mdi-play

    v-footer.py-12.align-start
      v-flex.md3.col
        p.col__title Turkey Expert, Easier than ever!
        p.col__content Get instant access to the best prices and products via one platform. Compact and simply professional.
        .social-icons
          a.circle: v-icon mdi-facebook
          a.circle: v-icon mdi-instagram
          a.circle: v-icon mdi-linkedin
          a.circle: v-icon mdi-twitter
          a.circle: v-icon mdi-youtube
          a.circle: v-icon mdi-pinterest
      
      v-flex.md1.offset-md2.col
        p.col__title Navigation
        ul.col__content
          li: a(href='#') Homepage
          li: a(href='#') Membership
          li: a(href='#') About
          li: a(href='#') Contact

      v-flex(:class='{"pl-8": !smAndDown}').md4.col
        p.col__title Navigation
        ul.col__content
          li: a(href='#') inventumglobal.in
          li: a(href='#') hello@inventumglobal.in
          li: a(href='#') +90 242 324 11 65

</template>

<script>
export default {
  computed: {
    xs() {
      return this.$vuetify.breakpoint.xs
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
    xl() {
      return this.$vuetify.breakpoint.xl
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/styles/pages/login.sass'
@import '@/assets/styles/components/inputs.sass'
@import '@/assets/styles/components/footer.sass'

</style>
