import { Video } from "../_lib"
import { writable } from "svelte/store"

function createStore() {
  const { subscribe, update, set } = writable<
  Video.Criteria & { initialized: boolean }
  >({
    contentType: undefined,
    exceptVideos: [],
    apparatuses: [],
    initialized: false,
  })

  return {
    subscribe,
    set: (criteria: Video.Criteria) => {
      set({
        ...criteria,
        initialized: true,
      })
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
