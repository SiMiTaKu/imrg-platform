import { describe, expect, it } from 'vitest'
import { flipCard, type CardFaces } from '@pages/decoratingApparatus/lib/flipCard'

describe('flipCard', () => {
  describe('正常系', () => {
    it.each<[string, CardFaces, number, CardFaces]>([
      [
        '表を向いている場合、裏返り、表に裏の次の写真が入ること',
        { frontImageIndex: 0, backImageIndex: 1, flipped: false },
        3,
        { frontImageIndex: 2, backImageIndex: 1, flipped: true },
      ],
      [
        '裏を向いている場合、表に戻り、裏に表の次の写真が入ること',
        { frontImageIndex: 2, backImageIndex: 1, flipped: true },
        3,
        { frontImageIndex: 2, backImageIndex: 0, flipped: false },
      ],
    ])('%s', (_, faces, imageCount, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = flipCard(faces, imageCount)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
      // #endregion
    })

    it('押し続けた場合、写真が1枚目から順に巡回して見えること', () => {
      // #region Given
      let faces: CardFaces = { frontImageIndex: 0, backImageIndex: 1, flipped: false }
      const shown: number[] = [faces.frontImageIndex]
      // #endregion

      // #region When
      for (let count = 0; count < 5; count++) {
        faces = flipCard(faces, 3)
        shown.push(faces.flipped ? faces.backImageIndex : faces.frontImageIndex)
      }
      // #endregion

      // #region Then
      expect(shown).toEqual([0, 1, 2, 0, 1, 2])
      // #endregion
    })
  })

  describe('境界値', () => {
    it('写真が1枚の場合、表と裏に同じ写真が入ること', () => {
      // #region Given
      const faces: CardFaces = { frontImageIndex: 0, backImageIndex: 0, flipped: false }
      // #endregion

      // #region When
      const flipped = flipCard(faces, 1)
      const restored = flipCard(flipped, 1)
      // #endregion

      // #region Then
      expect(flipped).toEqual({ frontImageIndex: 0, backImageIndex: 0, flipped: true })
      expect(restored).toEqual({ frontImageIndex: 0, backImageIndex: 0, flipped: false })
      // #endregion
    })
  })
})
