import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "project-layout"
declare module "/Users/jincheng/Projects/HTML/WS_NUXTWordPress/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}