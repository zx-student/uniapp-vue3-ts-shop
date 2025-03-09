import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

// 热门推荐的接口参数有pageSize、page、和可选的subType。PageParams是通用参数类型type包含pageSize、page
// 此时可以用交叉类型&去添加多一个subype可选参数
// export const hetHotRecommendAPI = (url: string, data: PageParams & { subType?: string }) => {
//     return http({
//         method: 'GET',
//         url,
//         data
//     })

type HotParams = PageParams & { subType?: string }
/**
 * 通用热门推荐类型
 * @param url  请求地址
 * @param data 请求参数
 * @returns 
 */
export const getHotRecommendAPI = (url: string, data: HotParams) => {
    return http<HotResult>({
        method: 'GET',
        url,
        data
    })
}