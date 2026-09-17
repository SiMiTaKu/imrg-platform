import { m } from '$lib/paraglide/messages'
import type { SrcMeta } from '@shared/ui'
import MainVisual1 from '../images/main-visual-1.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual2 from '../images/main-visual-2.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual3 from '../images/main-visual-3.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual4 from '../images/main-visual-4.jpg?w=1024;2048&format=webp&as=meta'
import MainVisual5 from '../images/main-visual-5.jpg?w=1024;2048&format=webp&as=meta'

/** メインビジュアルの1枚（背景画像とキャッチコピー） */
type MainVisualSlide = {
  /** 背景画像 */
  image: SrcMeta[]
  /** キャッチコピー。表示中の言語で取り出せるように、文言の関数のまま持つ */
  description: typeof m.decorating_apparatus_main_visual_description_1
}

/**
 * メインビジュアルで切り替えて見せる背景画像とキャッチコピー。
 *
 * @remarks
 * 画像の並び（1・3・5・2・4）は、移す前のページと同じ
 */
export const MAIN_VISUAL_SLIDES: readonly MainVisualSlide[] = [
  { image: MainVisual1, description: m.decorating_apparatus_main_visual_description_1 },
  { image: MainVisual3, description: m.decorating_apparatus_main_visual_description_2 },
  { image: MainVisual5, description: m.decorating_apparatus_main_visual_description_3 },
  { image: MainVisual2, description: m.decorating_apparatus_main_visual_description_4 },
  { image: MainVisual4, description: m.decorating_apparatus_main_visual_description_5 },
]

/** 「装飾の流れ」の呼びかけ（1要素を1行にする） */
export const FLOW_MESSAGE_LINES = [
  m.decorating_apparatus_message_line1,
  m.decorating_apparatus_message_line2,
] as const

/** 装飾の流れ（段階の名前と説明） */
export const FLOW_STEPS = [
  {
    title: m.decorating_apparatus_flow_inquiry_title,
    description: m.decorating_apparatus_flow_inquiry_description,
  },
  {
    title: m.decorating_apparatus_flow_meeting_title,
    description: m.decorating_apparatus_flow_meeting_description,
  },
  {
    title: m.decorating_apparatus_flow_design_title,
    description: m.decorating_apparatus_flow_design_description,
  },
  {
    title: m.decorating_apparatus_flow_decorating_title,
    description: m.decorating_apparatus_flow_decorating_description,
  },
  {
    title: m.decorating_apparatus_flow_delivery_title,
    description: m.decorating_apparatus_flow_delivery_description,
  },
] as const
