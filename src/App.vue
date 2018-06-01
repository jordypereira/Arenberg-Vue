<template>
  <div id="app">
    <TheNavbar></TheNavbar>
    <router-view/>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'
import TheNavbar from '@/components/TheNavbar'
export default {
  components: {
    TheFooter,
    TheNavbar
  }
}
</script>

<style lang="scss">
@import './assets/scss/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './assets/scss/style.scss';
</style>
