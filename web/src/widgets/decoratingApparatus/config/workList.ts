import { Apparatus } from '@shared/config/apparatus'
import type { ImageSourceMeta } from '@shared/ui'
import Image1_1 from '../images/work-list-image-1-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image1_2 from '../images/work-list-image-1-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image1_3 from '../images/work-list-image-1-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image2_1 from '../images/work-list-image-2-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image2_2 from '../images/work-list-image-2-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image2_3 from '../images/work-list-image-2-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image3_1 from '../images/work-list-image-3-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image3_2 from '../images/work-list-image-3-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image3_3 from '../images/work-list-image-3-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image4_1 from '../images/work-list-image-4-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image4_2 from '../images/work-list-image-4-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image4_3 from '../images/work-list-image-4-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image5_1 from '../images/work-list-image-5-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image5_2 from '../images/work-list-image-5-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image5_3 from '../images/work-list-image-5-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image6_1 from '../images/work-list-image-6-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image6_2 from '../images/work-list-image-6-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image6_3 from '../images/work-list-image-6-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image7_1 from '../images/work-list-image-7-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image7_2 from '../images/work-list-image-7-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image7_3 from '../images/work-list-image-7-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image8_1 from '../images/work-list-image-8-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image8_2 from '../images/work-list-image-8-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image8_3 from '../images/work-list-image-8-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image9_1 from '../images/work-list-image-9-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image9_2 from '../images/work-list-image-9-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image9_3 from '../images/work-list-image-9-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image10_1 from '../images/work-list-image-10-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image10_2 from '../images/work-list-image-10-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image10_3 from '../images/work-list-image-10-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image11_1 from '../images/work-list-image-11-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image11_2 from '../images/work-list-image-11-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image11_3 from '../images/work-list-image-11-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image12_1 from '../images/work-list-image-12-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image12_2 from '../images/work-list-image-12-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image12_3 from '../images/work-list-image-12-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image13_1 from '../images/work-list-image-13-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image13_2 from '../images/work-list-image-13-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image13_3 from '../images/work-list-image-13-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image14_1 from '../images/work-list-image-14-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image14_2 from '../images/work-list-image-14-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image14_3 from '../images/work-list-image-14-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image15_1 from '../images/work-list-image-15-1.jpg?w=512;1024;1600&format=webp&as=meta'
import Image15_2 from '../images/work-list-image-15-2.jpg?w=512;1024;1600&format=webp&as=meta'
import Image15_3 from '../images/work-list-image-15-3.jpg?w=512;1024;1600&format=webp&as=meta'
import Image15_4 from '../images/work-list-image-15-4.jpg?w=512;1024;1600&format=webp&as=meta'

/** 手具装飾の作品1件 */
export type DecoratingWork = {
  /** どの手具か。一覧の絞り込みと並び順に使う */
  apparatus: (typeof Apparatus)[keyof typeof Apparatus]
  /** 作品の写真（1作品に複数枚。カードを押すたびに切り替える） */
  images: ImageSourceMeta[][]
}

/**
 * 手具装飾の作品（写真だけで、説明文は無い）。
 *
 * @remarks
 * 手具ごと（競技で使う順：スティック・リング・ロープ・クラブ）にまとめて並べる。この並びのまま画面に出す。
 * 新しい作品は、同じ手具のいちばん後ろに足す
 */
export const WORK_LIST: readonly DecoratingWork[] = [
  { apparatus: Apparatus.STICK, images: [Image7_1, Image7_2, Image7_3] },
  { apparatus: Apparatus.STICK, images: [Image8_1, Image8_2, Image8_3] },
  { apparatus: Apparatus.STICK, images: [Image13_3, Image13_1, Image13_2] },
  { apparatus: Apparatus.RING, images: [Image1_1, Image1_2, Image1_3] },
  { apparatus: Apparatus.RING, images: [Image2_1, Image2_2, Image2_3] },
  { apparatus: Apparatus.RING, images: [Image3_1, Image3_2, Image3_3] },
  { apparatus: Apparatus.RING, images: [Image4_1, Image4_2, Image4_3] },
  { apparatus: Apparatus.RING, images: [Image5_1, Image5_2, Image5_3] },
  { apparatus: Apparatus.RING, images: [Image6_1, Image6_2, Image6_3] },
  { apparatus: Apparatus.RING, images: [Image11_2, Image11_1, Image11_3] },
  { apparatus: Apparatus.CLUB, images: [Image9_2, Image9_1, Image9_3] },
  { apparatus: Apparatus.CLUB, images: [Image10_1, Image10_2, Image10_3] },
  { apparatus: Apparatus.CLUB, images: [Image12_1, Image12_2, Image12_3] },
  { apparatus: Apparatus.CLUB, images: [Image14_1, Image14_2, Image14_3] },
  { apparatus: Apparatus.CLUB, images: [Image15_1, Image15_2, Image15_3, Image15_4] },
]
