<template lang='pug'>
  v-app(align-start)
    header-component(logo-style='dark')

    v-content
      v-container(home-page)
        v-layout(search-part row)
          v-flex(xs12)
            h2.display-2.font-weight-bold Discover now,
            h2.display-2.font-weight-light Easier than ever.
          v-flex(xs12)
            .search-panel
              .search-group
                .search-item.text 
                  v-icon mdi-airplane-takeoff
                  input(placeholder='From').input
                  v-icon mdi-chevron-right
                .search-item.text 
                  v-icon mdi-airplane-landing
                  input(placeholder='To').input
                  v-icon mdi-chevron-right
              .search-group
                .search-item.button
                  span.label Dates
                  v-icon mdi-calendar-multiple
                .search-item.button
                  span.label Event size
                  v-icon mdi-human-male
                .search-item.button.submit
                  span.label Search

    footer-component(:bg='true')
              



    

</template>

<script>
import HeaderComponent from "@/components/Header"
import FooterComponent from "@/components/Footer"

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
<style lang="sass" scoped>
@import '@/assets/styles/pages/home.sass'

</style>
