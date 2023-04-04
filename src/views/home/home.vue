<template>
  <main class="home">
    <home-nav-bar/>
    <section class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </section>
    <home-search-box />
  </main>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 100px;
}

.banner {
  img {
    width: 100%;
  }
}
</style>