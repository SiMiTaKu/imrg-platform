import { m } from '$lib/paraglide/messages'

/**
 * 採点体験の段階。
 *
 * @remarks
 * 文言は言語が決まってから取り出したいので、関数にして遅らせている。
 * 番号は画面に出る通し番号で、進み具合の表示（`JudgeSteps`）と
 * 各段階の枠（`StepPanel`）が同じ値を使う
 */
export const JUDGE_STEPS = [
  {
    number: 1,
    /**
     *
     */
    title: () => m.judge_step_apparatus_title(),
    /** 進み具合の表示に出す短い名前 */
    short: () => m.judge_step_apparatus_short(),
    /** 見出しの下に出す、短い手引き */
    note: () => m.judge_step_apparatus_note(),
    /** まだその段階に来ていないときに出す文 */
    waiting: () => '',
  },
  {
    number: 2,
    /**
     *
     */
    title: () => m.judge_step_point_a_title(),
    /**
     *
     */
    short: () => m.judge_step_point_a_short(),
    /**
     *
     */
    note: () => m.judge_step_point_a_note(),
    /**
     *
     */
    waiting: () => m.judge_step_point_a_waiting(),
  },
  {
    number: 3,
    /**
     *
     */
    title: () => m.judge_step_point_b_title(),
    /**
     *
     */
    short: () => m.judge_step_point_b_short(),
    /**
     *
     */
    note: () => m.judge_step_point_b_note(),
    /**
     *
     */
    waiting: () => m.judge_step_point_b_waiting(),
  },
  {
    number: 4,
    /**
     *
     */
    title: () => m.judge_step_score_title(),
    /**
     *
     */
    short: () => m.judge_step_score_short(),
    /**
     *
     */
    note: () => m.judge_step_score_note(),
    /**
     *
     */
    waiting: () => m.judge_step_score_waiting(),
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
