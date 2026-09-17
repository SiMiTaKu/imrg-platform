import { describe, expect, it } from 'vitest'
import {
  Apparatus,
  ContentType,
  PLAYERS,
  RECOMMENDED_VIDEOS,
  TEAMS,
  VIDEOS,
  findApparatus,
  findContentType,
  formatFilmedYear,
  isIndividualVideo,
  localizedName,
} from '@entities/oshimitsuVideo'

describe('findContentType', () => {
  describe('正常系', () => {
    it.each([
      ['individual の場合、個人になること', 'individual', ContentType.INDIVIDUAL],
      ['group の場合、団体になること', 'group', ContentType.GROUP],
    ])('%s', (_, slug, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = findContentType(slug)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('知らない slug の場合、undefined になること', () => {
      // #region Given
      const slug = 'interview'
      // #endregion

      // #region When
      const result = findContentType(slug)
      // #endregion

      // #region Then
      expect(result).toBeUndefined()
      // #endregion
    })
  })
})

describe('findApparatus', () => {
  describe('正常系', () => {
    it.each([
      ['stick の場合、スティックになること', 'stick', Apparatus.STICK],
      ['ring の場合、リングになること', 'ring', Apparatus.RING],
      ['rope の場合、ロープになること', 'rope', Apparatus.ROPE],
      ['club の場合、クラブになること', 'club', Apparatus.CLUB],
    ])('%s', (_, slug, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = findApparatus(slug)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('知らない slug の場合、undefined になること', () => {
      // #region Given
      const slug = 'hoop'
      // #endregion

      // #region When
      const result = findApparatus(slug)
      // #endregion

      // #region Then
      expect(result).toBeUndefined()
      // #endregion
    })
  })
})

describe('isIndividualVideo', () => {
  describe('正常系', () => {
    it('すべての動画の場合、手具を持つ動画だけが個人と判別されること', () => {
      // #region Given
      const videos = VIDEOS
      // #endregion

      // #region When
      const result = videos.map((video) => [isIndividualVideo(video), 'apparatus' in video])
      // #endregion

      // #region Then
      for (const [isIndividual, hasApparatus] of result) expect(isIndividual).toBe(hasApparatus)
      // #endregion
    })
  })
})

describe('localizedName', () => {
  describe('正常系', () => {
    it.each([
      ['日本語の場合、日本語の名前になること', 'ja', '清水琢巳'],
      ['英語の場合、「名 姓」の英語の名前になること', 'en', 'Takumi Shimizu'],
    ] as const)('%s', (_, locale, expected) => {
      // #region Given
      const player = PLAYERS.find((item) => item.nameKana === 'しみずたくみ')!
      // #endregion

      // #region When
      const result = localizedName(player, locale)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })
})

describe('formatFilmedYear', () => {
  describe('正常系', () => {
    it.each([
      ['日本語の場合、「年」が付くこと', 'ja', '2024年'],
      ['英語の場合、数字だけになること', 'en', '2024'],
    ] as const)('%s', (_, locale, expected) => {
      // #region Given
      const filmedAt = new Date('2024-11-08T00:00:00+09:00')
      // #endregion

      // #region When
      const result = formatFilmedYear(filmedAt, locale)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('日本時間の元日の場合、協定世界時では前の年でも日本時間の年になること', () => {
      // #region Given
      const filmedAt = new Date('2024-01-01T00:00:00+09:00')
      // #endregion

      // #region When
      const result = formatFilmedYear(filmedAt, 'en')
      // #endregion

      // #region Then
      expect(result).toBe('2024')
      // #endregion
    })
  })
})

describe('データ', () => {
  describe('正常系', () => {
    it.each([
      ['選手の場合、英語の名前が「名 姓」のローマ字で入っていること', PLAYERS],
      ['チームの場合、英語の名前が英字で入っていること', TEAMS],
    ])('%s', (_, resources) => {
      // #region Given
      const englishName = /^[A-Za-z][A-Za-z .]*[A-Za-z]$/
      // #endregion

      // #region When
      const invalid = resources.filter((resource) => !englishName.test(resource.nameEnglish))
      // #endregion

      // #region Then
      expect(invalid).toEqual([])
      // #endregion
    })

    it('おすすめ動画の場合、すべての動画に含まれていること', () => {
      // #region Given
      const videos = RECOMMENDED_VIDEOS
      // #endregion

      // #region When
      const result = videos.every((video) => VIDEOS.includes(video))
      // #endregion

      // #region Then
      expect(result).toBe(true)
      // #endregion
    })
  })
})
