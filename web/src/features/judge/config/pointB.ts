import { m } from '$lib/paraglide/messages'
import { Apparatus } from '@shared/config/apparatus'
import { PointBUnit, type PointBGroup, type PointBItem } from '../model/executionDeduct'

/**
 * 実施のBの、回数や秒数で数える欠点。区分ごとにまとめている。
 *
 * @remarks
 * 出典は『新体操規則2025年版』の実施欠点表（46〜47ページ）。
 * 「欠点基準に準じる」とされている項目はAの減点（`POINT_A_ITEMS`）が受け持つので、
 * ここには回数・歩数・秒数で数える項目だけを置く。
 * 画面・内訳はこの順に並ぶ
 */
export const POINT_B_GROUPS: readonly PointBGroup[] = [
  {
    key: 'apparatus',
    title: m.judge_point_b_group_apparatus,
    items: [
      {
        key: 'apparatusStopped',
        title: m.judge_point_b_apparatus_stopped,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
      {
        key: 'apparatusShape',
        title: m.judge_point_b_apparatus_shape,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
      {
        key: 'apparatusExtension',
        title: m.judge_point_b_apparatus_extension,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
      {
        key: 'droppedSingle',
        title: m.judge_point_b_dropped_single,
        value: 0.3,
        unit: PointBUnit.EACH,
      },
      {
        key: 'droppedDouble',
        title: m.judge_point_b_dropped_double,
        value: 0.4,
        unit: PointBUnit.EACH,
        pairOnly: true,
      },
      {
        key: 'catchPlaceChanged',
        title: m.judge_point_b_catch_place_changed,
        value: 0.05,
        unit: PointBUnit.EACH,
      },
      {
        key: 'catchPlaceKept',
        title: m.judge_point_b_catch_place_kept,
        value: 0.1,
        unit: PointBUnit.SECOND,
      },
      {
        key: 'catchMove12',
        title: m.judge_point_b_catch_move_1_2,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
      {
        key: 'catchMove34',
        title: m.judge_point_b_catch_move_3_4,
        value: 0.2,
        unit: PointBUnit.EACH,
      },
      {
        key: 'catchMove5',
        title: m.judge_point_b_catch_move_5,
        value: 0.3,
        unit: PointBUnit.EACH,
      },
      {
        key: 'ropeShape',
        title: m.judge_point_b_rope_shape,
        value: 0.1,
        unit: PointBUnit.EACH,
        apparatusSlug: Apparatus.ROPE.slug,
      },
      {
        key: 'ropeFloor',
        title: m.judge_point_b_rope_floor,
        value: 0.1,
        unit: PointBUnit.EACH,
        apparatusSlug: Apparatus.ROPE.slug,
      },
      {
        key: 'somersaultApparatus',
        title: m.judge_point_b_somersault_apparatus,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
    ],
  },
  {
    key: 'tumbling',
    title: m.judge_point_b_group_tumbling,
    items: [
      {
        key: 'somersaultHeight',
        title: m.judge_point_b_somersault_height,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
      {
        key: 'somersaultSpeed',
        title: m.judge_point_b_somersault_speed,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
      {
        key: 'somersaultAxis',
        title: m.judge_point_b_somersault_axis,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
      {
        key: 'landingStep',
        title: m.judge_point_b_landing_step,
        value: 0.1,
        unit: PointBUnit.STEP,
      },
      {
        key: 'landingHand',
        title: m.judge_point_b_landing_hand,
        value: 0.2,
        unit: PointBUnit.EACH,
      },
      {
        key: 'landingFall',
        title: m.judge_point_b_landing_fall,
        value: 0.3,
        unit: PointBUnit.EACH,
      },
    ],
  },
  {
    key: 'other',
    title: m.judge_point_b_group_other,
    items: [
      { key: 'posture', title: m.judge_point_b_posture, value: 0.1, unit: PointBUnit.EACH },
      { key: 'flexibility', title: m.judge_point_b_flexibility, value: 0.1, unit: PointBUnit.EACH },
      { key: 'jump', title: m.judge_point_b_jump, value: 0.1, unit: PointBUnit.EACH },
      { key: 'turn', title: m.judge_point_b_turn, value: 0.1, unit: PointBUnit.EACH },
      { key: 'stagger', title: m.judge_point_b_stagger, value: 0.1, unit: PointBUnit.STEP },
      { key: 'pause', title: m.judge_point_b_pause, value: 0.1, unit: PointBUnit.SECOND },
    ],
  },
  {
    key: 'music',
    title: m.judge_point_b_group_music,
    items: [
      {
        key: 'musicRhythm',
        title: m.judge_point_b_music_rhythm,
        value: 0.1,
        unit: PointBUnit.EACH,
      },
    ],
  },
]

/** 区分をまたいだ、数える欠点のすべて */
export const POINT_B_ITEMS: readonly PointBItem[] = POINT_B_GROUPS.flatMap((group) => group.items)

/**
 * 手具の落下にあたる項目のキー。
 *
 * @remarks
 * 決定点の内訳では、手具の落下による減点だけを別に出す
 */
export const POINT_B_DROP_KEYS = [
  'droppedSingle',
  'droppedDouble',
] as const satisfies readonly PointBItem['key'][]
