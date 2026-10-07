import { writable } from 'svelte/store'
import { browser } from '$app/env'

/**
 * 読んだレッスンの記録。
 *
 * @remarks
 * Udemy のように「読んだ」印と「続きから読む」を出すための、その人だけの記録。
 * ブラウザの中（localStorage）にだけ残し、サーバーには送らない。
 * プライベートウィンドウなどで保存できないときは、記録なしとして動く
 */
const STORAGE_KEY = 'imrg.ruleGuide.read'

/**
 * 保存してある記録を読む
 * @returns 読んだレッスンの鍵
 */
const load = (): string[] => {
  if (!browser) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed: unknown = raw === null ? [] : JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : []
  } catch {
    return []
  }
}

/**
 * 記録を保存する。保存できなくても画面は動かし続ける
 * @param keys - 読んだレッスンの鍵
 */
const save = (keys: readonly string[]) => {
  if (!browser) return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(keys))
  } catch {
    // 保存できない環境（プライベートウィンドウ・容量切れ）では、その場かぎりの記録にする
  }
}

/** 読んだレッスンの鍵。画面はこれを見て印を出す */
export const readLessons = writable<string[]>([])

/**
 * 保存してある記録を読み込む。画面が出たあと（onMount）に呼ぶ。
 *
 * @remarks
 * 書き出した HTML には記録が無いので、最初は「何も読んでいない」で描かれ、読み込んだあとに印が付く
 */
export const loadReadLessons = () => {
  readLessons.set(load())
}

/**
 * レッスンを読んだことにする
 * @param key - レッスンの鍵
 */
export const markLessonRead = (key: string) => {
  const current = load()
  if (current.includes(key)) {
    readLessons.set(current)
    return
  }
  const next = [...current, key]
  save(next)
  readLessons.set(next)
}

/** 記録を消す。「最初から読み直す」ときに使う */
export const resetReadLessons = () => {
  save([])
  readLessons.set([])
}
