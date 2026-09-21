/**
 * 画面に入ったカードを1つだけ再生する仕組み。
 *
 * @remarks
 * 守ること
 * - 同時に鳴るのは1つだけ。別のカードが始まったら、前のカードは止める
 * - 一度再生したカードは、画面に入っても勝手に始めない（押したときだけ再生する）
 * - 画面の真ん中にいちばん近いカードを選ぶ。上下に複数入っていても迷わない
 * - **勝手に始めたときは音を消す。** 消さないとブラウザーが再生そのものを止める。
 *   音を出してよいのは、人が押して始めたときだけ
 */
export class AutoPlayWatcher {
  /** いま再生しているカードの番号。-1 は何も再生していない */
  #playingIndex = -1
  /** 一度でも再生したカードの番号 */
  readonly #playedIndexes = new Set<number>()
  /** 人が押して始めたカードの番号。音を出してよいのはこれだけ */
  readonly #userStartedIndexes = new Set<number>()
  /** 画面に入っているカードの、真ん中からの距離 */
  readonly #visible = new Map<number, number>()
  readonly #observer: IntersectionObserver | undefined
  readonly #notify: (
    playingIndex: number,
    playedIndexes: ReadonlySet<number>,
    userStartedIndexes: ReadonlySet<number>,
  ) => void

  /**
   * @param notify - 再生の状態が変わったときに呼ぶ
   */
  constructor(
    notify: (
      playingIndex: number,
      playedIndexes: ReadonlySet<number>,
      userStartedIndexes: ReadonlySet<number>,
    ) => void,
  ) {
    this.#notify = notify

    // ブラウザーの外（書き出しのとき）では動かさない
    if (typeof IntersectionObserver === 'undefined') return

    this.#observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect
            const middle = rect.top + rect.height / 2
            this.#visible.set(index, Math.abs(middle - window.innerHeight / 2))
          } else {
            this.#visible.delete(index)
          }
        }
        this.#chooseOne()
      },
      // カードの半分以上が見えたら候補にする
      { threshold: 0.5 },
    )
  }

  /**
   * カードを見張りに加える
   * @param element - カードの要素
   * @param index - カードの番号
   * @returns 見張りをやめる関数
   */
  watch(element: HTMLElement, index: number): () => void {
    element.setAttribute('data-index', String(index))
    this.#observer?.observe(element)
    return () => {
      this.#observer?.unobserve(element)
      this.#visible.delete(index)
    }
  }

  /**
   * 押して再生を頼まれたとき。すでに見たものでも、もう一度再生する
   * @param index - カードの番号
   */
  play(index: number): void {
    this.#playingIndex = index
    this.#playedIndexes.add(index)
    this.#userStartedIndexes.add(index)
    this.#notify(this.#playingIndex, this.#playedIndexes, this.#userStartedIndexes)
  }

  /** 見張りをやめる */
  destroy(): void {
    this.#observer?.disconnect()
  }

  /** 画面の真ん中にいちばん近い、まだ見ていないカードを選んで再生する */
  #chooseOne(): void {
    const candidates = [...this.#visible.entries()]
      .filter(([index]) => !this.#playedIndexes.has(index))
      .sort((a, b) => a[1] - b[1])

    const next = candidates[0]?.[0]

    // 再生中のカードが画面から出たら止める
    if (this.#playingIndex !== -1 && !this.#visible.has(this.#playingIndex)) {
      this.#playingIndex = -1
    }

    if (next === undefined) {
      this.#notify(this.#playingIndex, this.#playedIndexes, this.#userStartedIndexes)
      return
    }

    // すでに何か再生しているなら、そのままにする（勝手に切り替えない）
    if (this.#playingIndex !== -1) {
      this.#notify(this.#playingIndex, this.#playedIndexes, this.#userStartedIndexes)
      return
    }

    this.#playingIndex = next
    this.#playedIndexes.add(next)
    this.#notify(this.#playingIndex, this.#playedIndexes, this.#userStartedIndexes)
  }
}
