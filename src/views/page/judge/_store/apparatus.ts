import { type Writable, writable } from 'svelte/store'
import { Apparatus } from '../_model/apparatus'

/**
 * 採点中の手具を持つストアを作る。未選択のときは undefined
 */
function createApparatusStore() {
  const { subscribe, set }: Writable<Apparatus | undefined> = writable(undefined)

  return {
    subscribe: subscribe,
    /** 手具を未選択に戻す */
    init: () => set(undefined),
    /** 手具のコードから手具を選び直す。該当する手具が無ければ未選択になる */
    toggle: (code: string) => set(Apparatus.fromCode(code)),
  }
}

export const judgementApparatus = createApparatusStore()
