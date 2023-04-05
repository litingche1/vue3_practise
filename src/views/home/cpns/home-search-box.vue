<template>
  <section class="search-box">
    <!-- 位置信息 -->
    <article class="location bottom-gray-line ">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </article>
  </section>
</template>

<script setup>
import {useRouter} from 'vue-router'
import useCityStore from "@/store/modules/city";
import {storeToRefs} from "pinia";

const router = useRouter()
const cityClick = () => {
  router.push('/city')
}
const positionClick = () => {

}
// 从Store中获取数据
const cityData = useCityStore()
const {currentCity} = storeToRefs(cityData)
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
