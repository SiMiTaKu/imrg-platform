import { ContentType } from "$views/page/oshimitsu/_models"

/**
 * パラメータが動画タイプに含まれているか判定する
 * @param param
 * @returns boolean
 */
export function match(param: string) {
  return Object.values(ContentType).some((type) => type.slug === param)
}
