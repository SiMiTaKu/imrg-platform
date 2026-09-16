import { designOfSP, getResponsiveDesign } from '$lib/common/responsive-design'
import { writable } from 'svelte/store'

type PageData = {
  isMobile: boolean
}

/**
 * 表示中の端末がスマホかどうかを持つストアを作る。初期値はスマホ扱い
 */
function createStore() {
  const defaultPageData: PageData = { isMobile: true }

  const { subscribe, update } = writable<PageData>(defaultPageData)

  return {
    subscribe,
    update(windowWidth: number) {
      const isMobile = getResponsiveDesign(windowWidth) === designOfSP
      update(() => ({ isMobile }))
    },
  }
}

export const pageData = createStore()
