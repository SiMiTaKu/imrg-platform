/**
 * 採点体験の段階。
 *
 * @remarks
 * デザイン案のため文言は日本語で直書きしている。採用するときに messages へ移す。
 * 番号は画面に出る通し番号で、進み具合の表示（`JudgeSteps`）と
 * 各段階の枠（`StepPanel`）が同じ値を使う
 */
export const JUDGE_STEPS = [
  {
    number: 1,
    title: '手具を選ぶ',
    /** 進み具合の表示に出す短い名前 */
    short: '手具',
    /** 見出しの下に出す、短い手引き */
    note: '見た演技の手具を1つ選ぶ。選ぶと画面の色が手具の色に変わり、採点表が出てくる。',
    /** まだその段階に来ていないときに出す文 */
    waiting: '',
  },
  {
    number: 2,
    title: 'Aの減点 ─ 演技の出来ばえ',
    short: 'Aの減点',
    note: '11の項目を「低い・高い」のつまみで選ぶだけ。正解はないので、直感のままでいい。',
    waiting: '手具を選ぶと、ここに11項目の採点表が出てくる。',
  },
  {
    number: 3,
    title: 'Bの減点 ─ 落下とミス',
    short: 'Bの減点',
    note: '手具を落とした回数と、その他のミスの減点を入れる。落としていなければ0のままでいい。',
    waiting: 'Aの減点を決めると、ここに落下とミスの入力が出てくる。',
  },
  {
    number: 4,
    title: '決定点が出る',
    short: '決定点',
    note: '10点満点から、AとBの減点を引いた点数が出る。内訳のグラフで、どこで引いたかも見られる。',
    waiting: 'Bの減点を決めると、あなたが付けた点数が出る。',
  },
] as const

/** 段階1つ分の定義 */
export type JudgeStep = (typeof JUDGE_STEPS)[number]

/** 段階の進み具合 */
export const JudgeStepState = {
  /** 入力が済んだ段階 */
  DONE: 'done',
  /** いま入力している段階 */
  CURRENT: 'current',
  /** まだ来ていない段階 */
  WAITING: 'waiting',
} as const

/** 段階の進み具合のどれか1つ */
export type JudgeStepState = (typeof JudgeStepState)[keyof typeof JudgeStepState]

/**
 * 段階の進み具合を返す
 * @param number - 見たい段階の通し番号
 * @param current - いる段階の通し番号
 * @returns 過ぎていれば `done`、いまいれば `current`、まだなら `waiting`
 */
export const getStepState = (number: number, current: number): JudgeStepState => {
  if (number < current) return JudgeStepState.DONE
  if (number === current) return JudgeStepState.CURRENT
  return JudgeStepState.WAITING
}
