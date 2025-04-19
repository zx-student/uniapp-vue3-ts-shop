<!--
此文件为开发者工具生成，生成时间: 2025/4/19下午2:13:12
使用方法：
在 D:\Person\study\uniapp\uniapp-vue3-ts-shop\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\Person\study\uniapp\uniapp-vue3-ts-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
    <view class="sk-container">
        <view class="viewport viewport">
            <view class="search search">
                <view class="input input">
                    <text
                        class="icon-search sk-transparent sk-text-14-2857-922 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
                </view>
            </view>
            <view class="categories categories">
                <scroll-view :scroll-y="true" class="primary primary">
                    <view class="item active sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-811 sk-text">居家</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-409 sk-text">美食</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-437 sk-text">服饰</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-190 sk-text">母婴</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-872 sk-text">个护</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-564 sk-text">严选</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-460 sk-text">数码</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-447 sk-text">运动</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-82 sk-text">杂项</text>
                    </view>
                </scroll-view>
                <scroll-view scroll-y="true" class="secondary secondary">
                    <view is="components/XtxSwiper" class="banner banner">
                        <view class="carousel XtxSwiper--carousel">
                            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                            </swiper>
                            <view class="indicator XtxSwiper--indicator">
                                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                            </view>
                        </view>
                    </view>
                    <view class="panel panel">
                        <view class="title title">
                            <text class="name sk-transparent sk-text-27-4194-581 sk-text">居家生活用品</text>
                            <navigator
                                class="more sk-transparent sk-text-30-6452-449 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none">全部</navigator>
                        </view>
                        <view class="section section">
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-140 sk-text">极光限定 珠光蓝珐琅锅
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-24 sk-text">199.00</text>
                                </view>
                            </navigator>
                        </view>
                    </view>
                    <view class="panel panel">
                        <view class="title title">
                            <text class="name sk-transparent sk-text-27-4194-561 sk-text">收纳</text>
                            <navigator
                                class="more sk-transparent sk-text-30-6452-909 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none">全部</navigator>
                        </view>
                        <view class="section section">
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-890 sk-text">给衣柜减减肥，真空防潮压缩袋
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-48 sk-text">79.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-629 sk-text">爆款明星好物，抽屉式透明储物柜
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-512 sk-text">129.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-874 sk-text">衣柜省空间神器，棉麻涤·收纳挂袋
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-285 sk-text">55.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-807 sk-text">换季好帮手，大容量防尘衣物收纳袋
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-662 sk-text">69.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-301 sk-text">可水洗的布艺收纳盒</view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-678 sk-text">29.90</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-582 sk-text">开发员自留款，带滚轮双层脏衣篓
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-246 sk-text">125.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                            </navigator>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2025/4/19下午2:13:12

在 D:\Person\study\uniapp\uniapp-vue3-ts-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-922 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 37.6923rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-811 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-409 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-437 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-190 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-872 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-564 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-460 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-447 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-82 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.0000rpx;
    position: relative !important;
}

.sk-text-27-4194-581 {
    background-image: linear-gradient(transparent 27.4194%, #EEEEEE 0%, #EEEEEE 72.5806%, transparent 0%) !important;
    background-size: 100% 59.6154rpx;
    position: relative !important;
}

.sk-text-30-6452-449 {
    background-image: linear-gradient(transparent 30.6452%, #EEEEEE 0%, #EEEEEE 69.3548%, transparent 0%) !important;
    background-size: 100% 59.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-140 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.6154rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-24 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
}

.sk-text-27-4194-561 {
    background-image: linear-gradient(transparent 27.4194%, #EEEEEE 0%, #EEEEEE 72.5806%, transparent 0%) !important;
    background-size: 100% 59.6154rpx;
    position: relative !important;
}

.sk-text-30-6452-909 {
    background-image: linear-gradient(transparent 30.6452%, #EEEEEE 0%, #EEEEEE 69.3548%, transparent 0%) !important;
    background-size: 100% 59.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-890 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-48 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
}

.sk-text-14-2857-629 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-512 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
}

.sk-text-14-2857-874 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-285 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
}

.sk-text-14-2857-807 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-662 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
}

.sk-text-14-2857-301 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-678 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
}

.sk-text-14-2857-582 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.6154rpx;
    position: relative !important;
}

.sk-text-14-2857-246 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.3077rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>