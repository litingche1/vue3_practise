<template>
  <section class="search-box">
    <!-- 位置信息 -->
    <article class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </article>
    <!-- 日期范围 -->
    <article
      class="section date-range bottom-gray-line"
      @click="showCalendar = true"
    >
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </article>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm"
    />
    <!-- 价格/人数选择 -->
    <article class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </article>
    <!-- 关键字 -->
    <article class="section keyword bottom-gray-line">
      关键字/位置/民宿名
    </article>

    <!-- 热门建议 -->
    <article class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </article>
    <!-- 搜索按钮 -->
    <article class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </article>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import { formatMonthDay, getDiffDays, addTime } from "@/utils/format_date";
import useHomeStore from "@/store/modules/home";
const router = useRouter();
const cityClick = () => {
  router.push("/city");
};
const positionClick = () => {};
// 从Store中获取数据
const cityData = useCityStore();
const { currentCity } = storeToRefs(cityData);
//日期范围
const startDate = ref(formatMonthDay(new Date()));
const endDate = ref(addTime(new Date(), 1));
const stayCount = ref(1);
const showCalendar = ref(false);
const onConfirm = (values) => {
  const [start, end] = values;
  startDate.value = formatMonthDay(start);
  endDate.value = formatMonthDay(end);
  stayCount.value = getDiffDays(start, end);
  showCalendar.value = false;
};
//热门建议
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
const { hotSuggests } = storeToRefs(homeStore);

//搜索
const searchBtnClick=()=>{
  router.push({
    path:'/search',
    query:{
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  });
}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
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

  .section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    height: 44px;

    .start {
      flex: 1;
      display: flex;
      height: 44px;
      align-items: center;
    }

    .end {
      min-width: 30%;
      padding-left: 20px;
    }

    .date {
      display: flex;
      flex-direction: column;

      .tip {
        font-size: 12px;
        color: #999;
      }

      .time {
        margin-top: 3px;
        color: #333;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  .date-range {
    height: 44px;

    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  }
  .price-counter {
    .start {
      border-right: 1px solid var(--line-color);
    }
  }
  .hot-suggests {
    margin: 10px 0;
    height: auto;
    .item {
      padding: 4px 8px;
      margin: 4px;
      border-radius: 14px;
      font-size: 12px;
      line-height: 1;
    }
  }
  .search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
}
</style>
