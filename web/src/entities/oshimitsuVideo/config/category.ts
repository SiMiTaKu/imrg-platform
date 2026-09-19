import { m } from '$lib/paraglide/messages'

/**
 * 動画の種類（個人・団体）。
 *
 * @remarks
 * `label` は表示中の言語の表記を返す関数。サーバーからブラウザーへ渡すデータ（load の戻り値）には入れられないので、
 * 渡すときは `slug` だけにする。
 */
export const ContentType = {
  INDIVIDUAL: {
    slug: 'individual',
    label: m.oshimitsu_content_type_individual,
  },
  GROUP: {
    slug: 'group',
    label: m.oshimitsu_content_type_group,
  },
} as const
