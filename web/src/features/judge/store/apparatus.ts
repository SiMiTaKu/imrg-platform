import { writable } from 'svelte/store'
import { JUDGE_APPARATUSES } from '../config/apparatus'
import { findApparatus } from '../lib/apparatus'
import type { JudgeApparatus } from '../model/apparatus'

/**
 * 採点中の手具を持つストアを作る。未選択のときは undefined
 * @returns 手具のストア
 */
const createApparatusStore = () => {
  const { subscribe, set } = writable<JudgeApparatus | undefined>(undefined)

  return {
    subscribe,
    /**
     * 手具のコードから手具を選び直す。該当する手具が無ければ未選択になる
     * @param code - 手具のコード（選択肢の value）
     */
    select: (code: string) => set(findApparatus(JUDGE_APPARATUSES, code)),
    /**
     * 手具を選ぶ前の状態へ戻す
     */
    reset: () => set(undefined),
  }
}

/** 採点中の手具 */
export const judgementApparatus = createApparatusStore()
