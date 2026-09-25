import { AutoPlayWatcher } from './autoPlay'

/** カード1枚の再生の状態。そのまま `VideoCard` に渡せる */
export interface AutoPlayCardState {
  /** いま再生しているか */
  playing: boolean
  /** 一度でも再生したか */
  played: boolean
  /** 人が押して始めたか。音を出してよいのはこれだけ */
  startedByUser: boolean
}

/** 並んだ動画カードの見張り。使う側は3つの道具を受け取るだけでよい */
export interface AutoPlayGroup {
  /**
   * カードを見張りに加える。`use:watch={番号}` の形で使う
   * @param element - カードの要素
   * @param index - カードの番号
   * @returns 片づけの手続き
   */
  watch: (element: HTMLElement, index: number) => { destroy: () => void }
  /**
   * カード1枚の再生の状態
   * @param index - カードの番号
   * @returns そのカードの状態
   */
  cardState: (index: number) => AutoPlayCardState
  /**
   * 押して再生を頼む
   * @param index - カードの番号
   */
  play: (index: number) => void
}

/**
 * 画面に入ったカードを1つだけ再生する見張りを組み立てる。
 *
 * @remarks
 * 再生の状態を持つのは見張りの側。使う側のページは状態を自分で持たずに済む。
 * ページを組み立てるときに呼ぶこと（中で `$effect` を作り、ページが消えるときに見張りをやめる）。
 *
 * @example
 * ```svelte
 * const { watch, cardState, play } = createAutoPlayGroup()
 *
 * <li use:watch={index}>
 *   <VideoCard {...cardState(index)} onRequestPlay={() => play(index)} … />
 * </li>
 * ```
 *
 * @returns 見張りに加える・状態を読む・押して再生する、の3つ
 */
export const createAutoPlayGroup = (): AutoPlayGroup => {
  /** いま鳴っているカードの番号。-1 は何も鳴っていない */
  let playingIndex = $state(-1)
  /** 一度でも再生したカードの番号 */
  let playedIndexes = $state<readonly number[]>([])
  /** 人が押して始めたカードの番号 */
  let userStartedIndexes = $state<readonly number[]>([])

  const watcher = new AutoPlayWatcher((playing, played, userStarted) => {
    playingIndex = playing
    playedIndexes = [...played]
    userStartedIndexes = [...userStarted]
  })

  // ページが消えるときに見張りをやめる
  $effect(() => () => {
    watcher.destroy()
  })

  /**
   * カードを見張りに加える
   * @param element - カードの要素
   * @param index - カードの番号
   * @returns 片づけの手続き
   */
  const watch = (element: HTMLElement, index: number) => ({
    destroy: watcher.watch(element, index),
  })

  /**
   * カード1枚の再生の状態を読む
   * @param index - カードの番号
   * @returns そのカードの状態
   */
  const cardState = (index: number): AutoPlayCardState => ({
    playing: playingIndex === index,
    played: playedIndexes.includes(index),
    startedByUser: userStartedIndexes.includes(index),
  })

  /**
   * 押して再生を頼む
   * @param index - カードの番号
   */
  const play = (index: number) => {
    watcher.play(index)
  }

  return { watch, cardState, play }
}
