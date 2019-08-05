<template lang="pug">
  v-carousel(continuous cycle hide-delimiters width='100%' height='100%').ecommerce
    v-carousel-item
      v-img(src='/img/home/ecommerce.png' alt='ecommerce')
    v-carousel-item
      v-img(src='/img/home/ecommerce.png' alt='ecommerce')

</template>
<script>
export default {
  props: {
    images: Array
  },
  computed: {}
}
</script>
<style lang="sass">
@import '@/assets/styles/components/ecommerce-carousel.sass'
</style>


