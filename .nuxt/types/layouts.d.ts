import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "D:/Work/HTML/Project/WS_NUXTWordPress/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}