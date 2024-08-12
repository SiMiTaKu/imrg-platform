import { type Writable, writable } from "svelte/store"
import { Apparatus } from "../_model/apparatus"

function createApparatusStore() {
  const { subscribe, set }: Writable<Apparatus | undefined> =
    writable(undefined)

  return {
    subscribe: subscribe,
    init: () => set(undefined),
    toggle: (code: string) => set(Apparatus.fromCode(code)),
  }
}

export const judgementApparatus = createApparatusStore()
