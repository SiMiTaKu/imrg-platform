import { Video } from '../_lib'
import { writable } from 'svelte/store'

/**
 * 動画の絞り込み条件を持つストアを作る
 */
function createStore() {
  const { subscribe, update, set } = writable<Video.Criteria>({
    contentType: undefined,
    exceptVideos: [],
    apparatuses: [],
  })

  return {
    subscribe,
    /** 絞り込み条件をまるごと置き換える */
    set: (criteria: Video.Criteria) => {
      set(criteria)
    },
    update(newCriteria: Video.Criteria) {
      update((beforeValue) => ({
        ...beforeValue,
        ...newCriteria,
      }))
    },
  }
}

export const criteria = createStore()
