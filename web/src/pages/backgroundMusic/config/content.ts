import { m } from '$lib/paraglide/messages'

/**
 * メインビジュアルで切り替えて見せるキャッチコピー。
 *
 * @remarks
 * 表示中の言語で取り出せるように、文言の関数のまま持つ
 */
export const MAIN_VISUAL_DESCRIPTIONS = [
  m.background_music_main_visual_description_1,
  m.background_music_main_visual_description_2,
  m.background_music_main_visual_description_3,
  m.background_music_main_visual_description_4,
  m.background_music_main_visual_description_5,
] as const

/** 「編曲の流れ」の呼びかけ（1要素を1行にする） */
export const FLOW_MESSAGE_LINES = [
  m.background_music_message_line1,
  m.background_music_message_line2,
] as const

/** 編曲の流れ（段階の名前と説明） */
export const FLOW_STEPS = [
  {
    title: m.background_music_flow_inquiry_title,
    description: m.background_music_flow_inquiry_description,
  },
  {
    title: m.background_music_flow_meeting_title,
    description: m.background_music_flow_meeting_description,
  },
  {
    title: m.background_music_flow_editing_title,
    description: m.background_music_flow_editing_description,
  },
  {
    title: m.background_music_flow_delivery_title,
    description: m.background_music_flow_delivery_description,
  },
] as const
