import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/jincheng/Projects/HTML/WS_NUXTWordPress/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}