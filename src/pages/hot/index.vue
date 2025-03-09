<!-- // /src/pages/hot/hot.vue -->
<script setup lang="ts">
// 引入封装好的接口请求API
import { getHotRecommendAPI } from '@/services/hot'
import type { SubTypeItem } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
// 热门推荐页 标题和url
const hotMap = [
  { type: '5', title: '特惠推荐', url: '/hot/preference' },
  { type: '6', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '7', title: '一站买全', url: '/hot/oneStop' },
  { type: '8', title: '新鲜好物', url: '/hot/new' },
]

// uniapp 获取页面参数方法，也可以在onLoad((options)=> {})中小程序方式获取
const query = defineProps<{
  type: string;
}>();
// 打印跳转的页面参数
console.log("打印跳转的页面参数", query.type);
const currUrlMap = hotMap.find((v) => v.type === query.type);
// 打印到页面参数type和设定hotMap数组对象参数type一致的对象
console.log("打印到页面参数type和设定hotMap数组对象参数type一致的对象", currUrlMap);
// 动态设置标题
if (currUrlMap) {
  uni.setNavigationBarTitle({ title: currUrlMap.title });
}

// 推荐封面图
const bannerPicture = ref('')
// 推荐选项，需要给数组指定类型
const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([])
//高亮的下标
const activeIndex = ref(0)
// 获取动态热门推荐数据
const getHotRecommendData = async () => {
  const res = await getHotRecommendAPI(currUrlMap!.url, {})
  console.log("res", res)
  bannerPicture.value = res.result.bannerPicture
  // 后端返回的res.result.subTypes没有finish，但是我们当前页面渲染有需要fihish，所以我们可以用联合类型添加一个可选参数finish
  subTypes.value = res.result.subTypes
}

// 页面加载
onLoad(() => {
  console.log("页面加载。。。")
  getHotRecommendData()
})

// 滚动触底
const onScrolltolower = async () => {
  // 获取当前选项
  const currsubTypes = subTypes.value[activeIndex.value]
  console.log("当前选项值", currsubTypes)
  // 分页条件
  if (currsubTypes.goodsItems.page < currsubTypes.goodsItems.pages) {
    //当前页码累加
    currsubTypes.goodsItems.page++
  } else {
    // 标记已经结束
    currsubTypes.finish = true
    // 轻提示
    return uni.showToast({ icon: "none", title: "没有更多数据了~" })
  }
  // 调用请求函数
  const res = await getHotRecommendAPI(currUrlMap!.url, {
    subType: currsubTypes.id,
    page: currsubTypes.goodsItems.page,
    pageSize: currsubTypes.goodsItems.pageSize
  })
  console.log("页码加一再请求", currsubTypes)
  // 新的列表选项
  const newsubTypes = res.result.subTypes[activeIndex.value]
  // 数组追加
  currsubTypes.goodsItems.items.push(...newsubTypes.goodsItems.items)
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture">
      </image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text class="text" @tap="activeIndex = index" :class="{ active: index === activeIndex }"
        v-for="(item, index) in subTypes" :key="item.id">{{ item.title }}</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view v-for="(item, index) in subTypes" :key="item.id" scroll-y class="scroll-view"
      v-show="activeIndex === index" @scrolltolower="onScrolltolower">
      <view class="goods">
        <navigator hover-class="none" class="navigator" v-for="goods in item.goodsItems.items" :key="goods"
          :url="`/pages/goods/goods?id=${goods.id}`">
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? "没有更多数据了~" : "正在加载..." }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.scroll-view {
  flex: 1;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;

  .text {
    margin: 0 20rpx;
    position: relative;
  }

  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;

  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  .thumb {
    width: 305rpx;
    height: 305rpx;
  }

  .name {
    height: 88rpx;
    font-size: 26rpx;
  }

  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }

  .symbol {
    font-size: 70%;
  }

  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>