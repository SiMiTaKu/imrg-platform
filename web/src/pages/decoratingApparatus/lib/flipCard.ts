/** 作品カードの状態（表と裏に出す写真と、裏返っているか） */
export type CardFaces = {
  /** 表に出す写真の番号（0 始まり） */
  frontImageIndex: number
  /** 裏に出す写真の番号（0 始まり） */
  backImageIndex: number
  /** 裏返っているか */
  flipped: boolean
}

/**
 * 作品カードを裏返したあとの状態を返す
 * @param faces - 今の状態
 * @param imageCount - 作品の写真の枚数（1 以上）
 * @returns 裏返したあとの状態
 *
 * @remarks
 * 押すたびに次の写真を見せるため、隠れる側の面に、見えている面の次の写真を入れておく
 */
export const flipCard = (faces: CardFaces, imageCount: number): CardFaces => {
  const flipped = !faces.flipped
  if (flipped) {
    return { ...faces, flipped, frontImageIndex: (faces.backImageIndex + 1) % imageCount }
  }
  return { ...faces, flipped, backImageIndex: (faces.frontImageIndex + 1) % imageCount }
}
