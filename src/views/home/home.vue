<template>
  <main class="home" ref="homeRef">
    <home-nav-bar/>
    <section class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </section>
    <home-search-box/>
    <home-categories/>
    <section class="search-bar" v-if="isShow">
      <search-bar/>
    </section>

    <home-content/>
  </main>
</template>
<script>
export default {
  name: "home",
}
</script>
<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue';
import HomeContent from "@/views/home/cpns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";
import useHomeStore from '@/store/modules/home'
import {computed, watch, ref, onActivated} from "vue";
import useScroll from "@/hooks/useScroll";

const homeStore = useHomeStore()
homeStore.getHomeCategoriesData()
homeStore.fetchHotSuggestData();
homeStore.fetchHouseListData()
const homeRef = ref()
const {scrollTop, isReachBottom} = useScroll(homeRef)
watch(isReachBottom, async value => {
  if (value) {
    await homeStore.fetchHouseListData()
    isReachBottom.value = false

  }
})
const isShow = computed(() => {
  return scrollTop.value >= 360
})
onActivated(() => {
  homeRef.value.scrollTo({
    top: scrollTop.value,
  })
})
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 100px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
