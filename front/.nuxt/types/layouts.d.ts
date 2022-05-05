import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "F:/ProjetsDev/ProjetsEnCours/blog_game/front/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}