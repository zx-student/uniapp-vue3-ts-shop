// 首页类型声明文件

import type { GoodsItem } from "./global"

/** 首页-广告区域数据类型 ，
 * 1.在首页请求轮播图接口中运用到,不然在页面请求返回值的时候，ts可能会报错没有声明类型
 * 2.在页面请求是的变量中运用到，你的返回类型是BannerItem 了，用来存储的变量bannerList也要是这个对等的类型
 * 3.在子组件XtxSwiper中运用到，因为在home中把bannerList传给了子组件。子组件接受后定义类型list为BannerItem 
 * 注：运用前需要引入 import type { BannerItem } from '@/types/home'
 * */
export type BannerItem = {
    /** 跳转链接 */
    hrefUrl: string
    /** id */
    id: string
    /** 图片链接 */
    imgUrl: string
    /** 跳转类型 */
    type: number
}

/** 首页-前台类目数据类型 */
export type CategoryItem = {
    /** 图标路径 */
    icon: string
    /** id */
    id: string
    /** 分类名称 */
    name: string
}

/** 首页-热门推荐数据类型 */
export type HotItem = {
    /** 说明 */
    alt: string
    /** id */
    id: string
    /** 图片集合[ 图片路径 ] */
    pictures: string[]
    /** 跳转地址 */
    target: string
    /** 标题 */
    title: string
    /** 推荐类型 */
    type: string
}


/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem