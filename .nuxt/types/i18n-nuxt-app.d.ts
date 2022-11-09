import type { ExportedGlobalComposer } from 'vue-i18n'
import type { NuxtI18nRoutingCustomProperties } from 'D:/Work/HTML/Project/WS_NUXTWordPress/node_modules/@nuxtjs/i18n/dist/runtime/types'
import type { I18nRoutingCustomProperties } from 'vue-i18n-routing/dist/vue-i18n'

declare module '#app' {
  interface NuxtApp {
    $i18n: ExportedGlobalComposer & NuxtI18nRoutingCustomProperties & I18nRoutingCustomProperties
  }
}