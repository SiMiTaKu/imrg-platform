import { m } from '$lib/paraglide/messages'

/**
 * 実績の動画を映す枠の縦横比。
 *
 * @remarks
 * WORK_LIST の10本を実際に調べたところ、いずれも横向きで
 * 848x480・844x480・1280x720・1920x1080（比は 1.76〜1.78）だった。
 * 縦型のショート動画は1本も無いので 16:9 にする。
 * 9:16 にすると動画が枠の内側に縮んで入り、左右が黒く残る
 */
export const WORK_VIDEO_ASPECT_RATIO = '16 / 9'

/**
 * これまでに編集した曲の総数（この数以上、という下限）。
 *
 * @remarks
 * 運営者からの申告値。WORK_LIST は動画を見せられる作例だけを並べたものなので、
 * その件数は実績の総数ではない。作例が増え減りしてもこの数は変わらないため、
 * 数え上げずに定数として持つ。実績が伸びたら運営者に確かめて直す
 */
export const EDITED_MUSIC_TOTAL = 300

/** 「過去の実績」の見出しまわり */
export const WORKS_HEADING = {
  eyebrow: m.background_music_works_eyebrow,
  lead: m.background_music_works_lead,
} as const
