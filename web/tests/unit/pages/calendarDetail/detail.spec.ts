import { describe, expect, it } from 'vitest'
import {
  buildSportsEventJsonLd,
  calendarDetailMetaInput,
  findCalendarEvent,
} from '@pages/calendarDetail/lib/detail'
import { NotFoundError } from '@shared/errors'
import { makeEvent } from '../../entities/calendarEvent/fixtures'

const event = makeEvent({
  id: '2026-10-30-abcdef',
  titleJa: '全日本新体操選手権大会',
  titleEn: 'All Japan Rhythmic Gymnastics Championships',
  startDate: '2026-10-30',
  endDate: '2026-11-01',
  venueJa: '高崎アリーナ（群馬県）',
  venueEn: 'Takasaki Arena',
})

describe('calendarDetailMetaInput', () => {
  describe('正常系', () => {
    it.each([
      [
        '日本語の場合、日本語の大会名・日程・会場と英語の大会名になること',
        'ja',
        {
          id: '2026-10-30-abcdef',
          title: '全日本新体操選手権大会',
          alternateTitle: 'All Japan Rhythmic Gymnastics Championships',
          dateRange: '2026年10月30日（金）〜11月1日（日）',
          venue: '高崎アリーナ（群馬県）',
        },
      ],
      [
        '英語の場合、英語の大会名・日程・会場と日本語の大会名になること',
        'en',
        {
          id: '2026-10-30-abcdef',
          title: 'All Japan Rhythmic Gymnastics Championships',
          alternateTitle: '全日本新体操選手権大会',
          dateRange: 'Fri, Oct 30 – Sun, Nov 1, 2026',
          venue: 'Takasaki Arena',
        },
      ],
    ] as const)('%s', (_, locale, expected) => {
      // #region Given
      // 引数は it.each の表で渡す
      // #endregion

      // #region When
      const result = calendarDetailMetaInput(event, locale)
      // #endregion

      // #region Then
      expect(result).toEqual(expected)
      // #endregion
    })
  })
})

describe('buildSportsEventJsonLd', () => {
  describe('正常系', () => {
    it.each([
      [
        '日本語の場合、名前と会場が日本語で、別名が英語になること',
        'ja',
        '/calendar/2026-10-30-abcdef/',
        {
          name: '全日本新体操選手権大会',
          alternateName: 'All Japan Rhythmic Gymnastics Championships',
          url: 'https://imrg.work/calendar/2026-10-30-abcdef/',
          location: { '@type': 'Place', name: '高崎アリーナ（群馬県）' },
        },
      ],
      [
        '英語の場合、名前と会場が英語で、別名が日本語になること',
        'en',
        '/en/calendar/2026-10-30-abcdef/',
        {
          name: 'All Japan Rhythmic Gymnastics Championships',
          alternateName: '全日本新体操選手権大会',
          url: 'https://imrg.work/en/calendar/2026-10-30-abcdef/',
          location: { '@type': 'Place', name: 'Takasaki Arena' },
        },
      ],
    ] as const)('%s', (_, locale, path, expected) => {
      // #region Given
      const baseUrl = 'https://imrg.work'
      // #endregion

      // #region When
      const result = buildSportsEventJsonLd(event, locale, baseUrl, path)
      // #endregion

      // #region Then
      expect(result).toEqual({
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        startDate: '2026-10-30',
        endDate: '2026-11-01',
        sport: "Men's Rhythmic Gymnastics",
        ...expected,
      })
      // #endregion
    })
  })

  describe('準正常系', () => {
    it('会場が無い場合、場所を持たないこと', () => {
      // #region Given
      const noVenue = makeEvent({ venueJa: undefined, venueEn: undefined })
      // #endregion

      // #region When
      const result = buildSportsEventJsonLd(
        noVenue,
        'en',
        'https://imrg.work',
        '/en/calendar/test/',
      )
      // #endregion

      // #region Then
      expect(result.location).toBeUndefined()
      // #endregion
    })
  })
})

describe('findCalendarEvent', () => {
  describe('異常系', () => {
    it('存在しない ID の場合、NotFoundError になること', () => {
      // #region Given
      const id = 'no-such-event'
      // #endregion

      // #region When
      const find = () => findCalendarEvent(id)
      // #endregion

      // #region Then
      expect(find).toThrow(NotFoundError)
      // #endregion
    })
  })
})
