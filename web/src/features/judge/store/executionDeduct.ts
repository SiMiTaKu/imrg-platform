import { writable } from 'svelte/store'
import { createExecutionDeduct } from '../lib/calculator'
import type {
  ExecutionDeduct,
  PointAKey,
  PointAOption,
  PointBScaleCode,
  PointBScaleKey,
} from '../model/executionDeduct'

/**
 * 採点項目の入力値を持つストアを作る
 * @returns 採点項目のストア
 */
const createExecutionDeductStore = () => {
  const { subscribe, set, update } = writable<ExecutionDeduct>(createExecutionDeduct())

  return {
    subscribe,
    /**
     * Aの減点項目の選択肢を選ぶ
     * @param key - 項目のキー
     * @param option - 選んだ選択肢
     */
    selectPointA: (key: PointAKey, option: PointAOption) =>
      update((data) => ({ ...data, pointA: { ...data.pointA, [key]: option } })),
    /**
     * 手具を落とした回数を変える。0 未満にはしない
     * @param drops - 落とした回数
     */
    setDrops: (drops: number) =>
      update((data) => ({ ...data, pointB: { ...data.pointB, drops: Math.max(0, drops) } })),
    /**
     * Bの設問に答える
     * @param key - 設問のキー
     * @param code - 選んだ段階
     */
    selectScale: (key: PointBScaleKey, code: PointBScaleCode) =>
      update((data) => ({
        ...data,
        pointB: { ...data.pointB, scales: { ...data.pointB.scales, [key]: code } },
      })),
    /**
     * 採点を始める前の値へ戻す
     */
    reset: () => set(createExecutionDeduct()),
  }
}

/** 採点項目の入力値 */
export const executionDeduct = createExecutionDeductStore()
