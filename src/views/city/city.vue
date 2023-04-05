<template>
  <section class="city top-page">
    <article class="top">
      <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="onCancel"
      />
      <van-tabs v-model:active="active" color="#ff9854">
        <template v-for="(value,key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </article>
    <article class="content">
      <template v-for="(value,key) in allCities">
        <CityGroup v-show="active===key" :city-data="value"/>
      </template>

    </article>


  </section>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";
import useCityStore from '@/store/modules/city'
import {storeToRefs} from 'pinia'
import CityGroup from "@/views/city/cpns/city-group.vue";

const value = ref()
const router = useRouter()
const onCancel = () => {
  router.back()
}
const active = ref(0)
// 从Store中获取数据
const cityData = useCityStore()
cityData.fetchAllCitiesData()
const {allCities} = storeToRefs(cityData)
</script>


<style lang="less" scoped>

.city {
  .top {
    position: relative;
    z-index: 9;
  }

  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>
