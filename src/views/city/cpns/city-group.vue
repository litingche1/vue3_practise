<template>
  <van-index-bar :index-list="indexList" highlight-color="#ff9854">
    <van-index-anchor index="热门" />
    <div class="list">
      <template v-for="(city, index) in cityData.hotCities" :key="index">
        <div class="city" @click="setCityName(city)">{{ city.cityName }}</div>
      </template>
    </div>
    <template v-for="(item,index) in cityData?.cities" :key="index">
      <van-index-anchor :index="item.group">{{ item.group }}</van-index-anchor>
      <template v-for="(child,idx) in item.cities" :key="idx">
        <van-cell :title="child.cityName" @click="setCityName(child)"/>
      </template>

    </template>

  </van-index-bar>

</template>

<script setup>
// import {computed} from 'vue'
import { computed } from 'vue'
import useCityStore from "@/store/modules/city";
import {useRouter} from "vue-router";
let props = defineProps({
  cityData: {
    type: Object,
    default: () => ({})
  }
})
const router = useRouter()
const indexList = computed(() => {
  let list = props.cityData.cities.map(item => {
    return item.group
  })
  list?.unshift('#')
  return list
})
const allCityData = useCityStore()
const setCityName=city=>{
  allCityData.currentCity=city
  router.back()
}


</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 25px 0 0;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
