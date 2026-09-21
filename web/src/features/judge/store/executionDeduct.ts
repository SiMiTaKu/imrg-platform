import { writable } from 'svelte/store'
import { createExecutionDeduct } from '../lib/calculator'
import type { ExecutionDeduct, PointAKey, PointAOption } from '../model/executionDeduct'

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
     * 手具を落とした回数を変える
     * @param kind - `single`（1つの手具）か `double`（2つの手具を同時に）
     * @param count - 回数
     */
    setDroppedCount: (kind: keyof ExecutionDeduct['pointB']['droppedApparatus'], count: number) =>
      update((data) => ({
        ...data,
        pointB: {
          ...data.pointB,
          droppedApparatus: { ...data.pointB.droppedApparatus, [kind]: count },
        },
      })),
    /**
     * その他ミスによる減点を変える
     * @param miss - 減点
     */
    setMiss: (miss: number) => update((data) => ({ ...data, pointB: { ...data.pointB, miss } })),
    /**
     * 採点を始める前の値へ戻す
     */
    reset: () => set(createExecutionDeduct()),
  }
}

/** 採点項目の入力値 */
export const executionDeduct = createExecutionDeductStore()
