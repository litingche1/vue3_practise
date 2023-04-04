<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" active-color="#ff9854" route>
      <van-tabbar-item v-for="(item,index) in tabbarData" :key="item.id" :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon>
          <img
            v-if="active !== index"
            :src="getAssetURL(item.image)"
            alt=""
          />
          <img v-else :src="getAssetURL(item.imageActive)" alt="" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {getAssetURL} from '../utils/load_assets'
import tabbarData from "@/assets/data/tabbar";
const active = ref(0);
</script>

<style lang="less" scoped>
  
.tab-bar {
  // 局部定义一个变量: 只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px !important;

  // 找到类, 对类中的CSS属性重写
  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }

  img {
    height: 26px;
  }
}

</style>