import { m } from '$lib/paraglide/messages'
import type { PointAItem } from '../model/executionDeduct'

/**
 * 実施のAの減点項目。画面・内訳・グラフはこの順に並ぶ
 */
export const POINT_A_ITEMS: readonly PointAItem[] = [
  {
    key: 'beautifulPose',
    title: m.judge_point_a_beautiful_pose_title,
    annotation: m.judge_point_a_beautiful_pose_annotation,
  },
  {
    key: 'flexibility',
    title: m.judge_point_a_flexibility_title,
    annotation: m.judge_point_a_flexibility_annotation,
  },
  {
    key: 'naturalMovement',
    title: m.judge_point_a_natural_movement_title,
    annotation: m.judge_point_a_natural_movement_annotation,
  },
  {
    key: 'bendingWeight',
    title: m.judge_point_a_bending_weight_title,
    annotation: m.judge_point_a_bending_weight_annotation,
  },
  {
    key: 'jumpingHeight',
    title: m.judge_point_a_jumping_height_title,
    annotation: m.judge_point_a_jumping_height_annotation,
  },
  {
    key: 'bodyControl',
    title: m.judge_point_a_body_control_title,
    annotation: m.judge_point_a_body_control_annotation,
  },
  {
    key: 'heelRaise',
    title: m.judge_point_a_heel_raise_title,
    annotation: m.judge_point_a_heel_raise_annotation,
  },
  {
    key: 'weaknessAndStrength',
    title: m.judge_point_a_weakness_and_strength_title,
    annotation: m.judge_point_a_weakness_and_strength_annotation,
  },
  {
    key: 'connectMovement',
    title: m.judge_point_a_connect_movement_title,
    annotation: m.judge_point_a_connect_movement_annotation,
  },
  {
    key: 'apparatusControl',
    title: m.judge_point_a_apparatus_control_title,
    annotation: m.judge_point_a_apparatus_control_annotation,
  },
  {
    key: 'musicImage',
    title: m.judge_point_a_music_image_title,
    annotation: m.judge_point_a_music_image_annotation,
  },
]
