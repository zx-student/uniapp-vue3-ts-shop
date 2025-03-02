/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
// 为公共组件定义组件类型
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}

// 获取组件实例类型,InstanceType是ts的一个工具方法
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
