import { Video } from '../_lib'
import { writable } from 'svelte/store'

function createStore() {
  const { subscribe, update, set } = writable<Video.Criteria>({
    contentType: undefined,
    exceptVideos: [],
    apparatuses: [],
  })

  return {
    subscribe,
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
