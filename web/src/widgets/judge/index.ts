// 審判の採点ページを組み立てる大きなかたまり。ページ本体はここから取り込んで並べるだけ
export { JUDGE_STEPS, getStepState } from './config/steps'
export type { JudgeStep } from './config/steps'
export { default as JudgeIntro } from './ui/JudgeIntro.svelte'
export { default as JudgeResult } from './ui/JudgeResult.svelte'
export { default as JudgeSteps } from './ui/JudgeSteps.svelte'
export { default as NextActions } from './ui/NextActions.svelte'
export { default as StepPanel } from './ui/StepPanel.svelte'
