<template>
  <div id="app">
    <router-view />
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from "../src/components/FooterGuide/FooterGuide";
export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
