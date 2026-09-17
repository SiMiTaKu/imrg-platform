/** 絞り込みの条件を覚えておくキー（同じタブの中だけ） */
const STATE_KEY = 'imrg-calendar-state'

/**
 * タブの中に覚えておいた絞り込みの条件を読む
 * @returns クエリ文字列の形の条件。覚えていなければ null
 *
 * @remarks
 * 条件は URL に書き戻さない。書き戻すと、アクセス解析が絞り込みのたびに1回の閲覧として数えてしまうため。
 * 日本語ページと英語ページで同じキーを使う（クエリの形は言語によらない）
 */
export const loadCalendarState = (): string | null => {
  try {
    return sessionStorage.getItem(STATE_KEY)
  } catch {
    // 保存を止めている設定のブラウザでは覚えないだけにする
    return null
  }
}

/**
 * 絞り込みの条件をタブの中に覚えておく
 * @param query - クエリ文字列の形の条件
 */
export const saveCalendarState = (query: string): void => {
  try {
    sessionStorage.setItem(STATE_KEY, query)
  } catch {
    // 保存を止めている設定のブラウザでは覚えないだけにする
  }
}
