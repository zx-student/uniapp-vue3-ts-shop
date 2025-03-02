<script setup lang="ts">
// 引入非公共子组件
import CustomNavbar from '../index/components/CustomNavbar.vue'
import CategoryPanel from '../index/components/CategoryPanel.vue'
import HotPanel from '../index/components/HotPanel.vue';
// 引入封装好的接口请求API
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
// 引入类型声明文件
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component';
// 引入页面请求onLoad函数
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
// 引入骨架屏vue文件
import PageSkeleton from './components/PageSkeleton.vue'

// 获取轮播图数据
// 在ts里，如果给变量赋值没有类型的空数组，那以后一直是空数组，不能存放任何数据，所以这里BannerItem[]
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log("res", res)
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 获取猜你喜欢组件实例,XtxGuessInstance组件实例的类型
const guessRef = ref<XtxGuessInstance>()
// 滚动触底
const onScrolltolower = () => {
  console.log("滚动触底啦~")
  //获取子组件的请求数据的事件，给子组件一个ref。 注：子组件需要将这个事件defineProps暴露出来  
  guessRef.value?.getMore()

}

// 当前下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 加载数据
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  // 关闭动画
  isTriggered.value = false
}


// 是否加载中标记
const isLoading = ref(false)

// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏,非公共组件，需要引入 -->
  <CustomNavbar />
  <scroll-view enable-back-to-top refresher-enabled @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered" scroll-y class="scroll-view" @scrolltolower="onScrolltolower">
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图，公共组件，不引入就需要在pages.json中设置 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- 分类模板 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :list="hotList"></HotPanel>
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
