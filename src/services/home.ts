import { http } from '@/utils/http'
import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置(1为首页 2分为类商品页，默认为1)
 * @returns 
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
    // 后端返回要取的数据是数组，所以是BannerItem[]，code和msg已经包含在封装过的http中，我们只需要关注result: T并且定义T
    return http<BannerItem[]>({
        method: 'GET',
        url: "/home/banner",
        data: {
            distributionSite
        }
    })
}

/**
 * 
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url: "/home/category/mutli",
    })
}

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
    return http<HotItem[]>({
        method: 'GET',
        url: '/home/hot/mutli',
    })
}


/**
 * 猜你喜欢-小程序
 * 猜你喜欢接口含有通用分页的结果类型，也有自己的商品类型。
 * 要把global.d.ta中的pageResult<T> 和 home.d.ta中的GuessItem 结合起来
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data,
    })
}

