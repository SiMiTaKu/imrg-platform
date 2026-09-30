import { describe, expect, it } from 'vitest'
import { EventSchedule } from '@entities/calendarEvent'
import {
  googleCalendarUrl,
  googleMapsUrl,
  mapQueryOf,
} from '@pages/calendarDetail/lib/externalLinks'
import { makeEvent } from '../../entities/calendarEvent/fixtures'

const PAGE_URL = 'https://imrg.work/calendar/2026-10-30-abcdef/'

describe('mapQueryOf', () => {
  describe('正常系', () => {
    it.each([
      [
        '日本の会場の場合、括弧を空白にした日本語の名前になること',
        { name: { ja: '高崎アリーナ（群馬県）', en: 'Takasaki Arena' } },
        '高崎アリーナ 群馬県',
      ],
      [
        '括弧が続く場合も、空白は1つにまとまること',
        { name: { ja: '長野市真島総合スポーツアリーナ（ホワイトリング）（長野県）' } },
        '長野市真島総合スポーツアリーナ ホワイトリング 長野県',
      ],
      [
        '海外の会場で英語の名前がある場合、英語の名前になること',
        {
          name: {
            ja: 'ポリデポルティーボ・ガジュール（マドリード）（スペイン）',
            en: 'Polideportivo Gallur, Madrid',
          },
        },
        'Polideportivo Gallur, Madrid',
      ],
      [
        '国名が都市名と「・」でつながる海外の会場の場合も、英語の名前になること',
        {
          name: {
            ja: 'イタリア・リッチョーネ（クロージングはArena Roma）',
            en: 'Riccione, Italy',
          },
        },
        'Riccione, Italy',
      ],
      [
        '住所がある場合、住所になること',
        { name: { ja: '高崎アリーナ（群馬県）' }, address: '群馬県高崎市下和田町4-1-18' },
        '群馬県高崎市下和田町4-1-18',
      ],
    ])('%s', (_, venue, expected) => {
      // #region Given
      const event = makeEvent({ venue })
      // #endregion

      // #region When
      const result = mapQueryOf(event)
      // #endregion

      // #region Then
      expect(result).toBe(expected)
      // #endregion
    })
  })

  describe('異常系', () => {
    it.each([
      ['会場が無い場合、undefined になること', undefined],
      ['都道府県名だけの場合、undefined になること', { name: { ja: '東京都' } }],
      ['国名だけの場合、undefined になること', { name: { ja: 'スペイン' } }],
      ['オンライン開催の場合、undefined になること', { name: { ja: 'オンライン', en: 'Online' } }],
      [
        'オンラインのあとに配信先や地域が続く場合も、undefined になること',
        { name: { ja: 'オンライン（YouTube）（佐賀県）', en: 'Online (YouTube)' } },
      ],
    ])('%s', (_, venue) => {
      // #region Given
      const event = makeEvent({ venue })
      // #endregion

      // #region When
      const result = mapQueryOf(event)
      // #endregion

      // #region Then
      expect(result).toBeUndefined()
      // #endregion
    })
  })
})

describe('googleMapsUrl', () => {
  describe('正常系', () => {
    it('会場名で探す Google マップの URL になること', () => {
      // #region Given
      const event = makeEvent({ venue: { name: { ja: '高崎アリーナ（群馬県）' } } })
      // #endregion

      // #region When
      const url = new URL(googleMapsUrl(event) ?? '')
      // #endregion

      // #region Then
      expect(url.origin + url.pathname).toBe('https://www.google.com/maps/search/')
      expect(url.searchParams.get('api')).toBe('1')
      expect(url.searchParams.get('query')).toBe('高崎アリーナ 群馬県')
      // #endregion
    })
  })

  describe('異常系', () => {
    it('地図で探せる会場が無い場合、undefined になること', () => {
      // #region Given
      const event = makeEvent({ venue: { name: { ja: '埼玉県' } } })
      // #endregion

      // #region When
      const result = googleMapsUrl(event)
      // #endregion

      // #region Then
      expect(result).toBeUndefined()
      // #endregion
    })
  })
})

describe('googleCalendarUrl', () => {
  describe('正常系', () => {
    it.each([
      [
        '複数日の場合、終了日の翌日までの終日の予定になること',
        { startDate: '2026-10-30', endDate: '2026-11-01' },
        '20261030/20261102',
      ],
      [
        '1日だけの場合、翌日までの終日の予定になること',
        { startDate: '2026-10-30' },
        '20261030/20261031',
      ],
      [
        '年をまたぐ場合も、翌日の日付が正しいこと',
        { startDate: '2026-12-30', endDate: '2026-12-31' },
        '20261230/20270101',
      ],
    ])('%s', (_, dates, expected) => {
      // #region Given
      const event = makeEvent(dates)
      // #endregion

      // #region When
      const url = new URL(
        googleCalendarUrl(event, { title: 'テスト大会', pageUrl: PAGE_URL }) ?? '',
      )
      // #endregion

      // #region Then
      expect(url.searchParams.get('dates')).toBe(expected)
      // #endregion
    })

    it('大会名・場所・詳細ページの URL が入ること', () => {
      // #region Given
      const event = makeEvent({
        venue: { name: { ja: '高崎アリーナ（群馬県）', en: 'Takasaki Arena' } },
      })
      // #endregion

      // #region When
      const url = new URL(
        googleCalendarUrl(event, {
          title: 'Test Championships',
          location: 'Takasaki Arena',
          pageUrl: PAGE_URL,
        }) ?? '',
      )
      // #endregion

      // #region Then
      expect(url.origin + url.pathname).toBe('https://calendar.google.com/calendar/render')
      expect(url.searchParams.get('action')).toBe('TEMPLATE')
      expect(url.searchParams.get('text')).toBe('Test Championships')
      expect(url.searchParams.get('location')).toBe('高崎アリーナ 群馬県')
      expect(url.searchParams.get('details')).toBe(PAGE_URL)
      // #endregion
    })

    it('地図で探せない会場の場合、場所には表示の会場名が入ること', () => {
      // #region Given
      const event = makeEvent({ venue: { name: { ja: '東京都' } } })
      // #endregion

      // #region When
      const url = new URL(
        googleCalendarUrl(event, { title: 'テスト大会', location: 'Tokyo', pageUrl: PAGE_URL }) ??
          '',
      )
      // #endregion

      // #region Then
      expect(url.searchParams.get('location')).toBe('Tokyo')
      // #endregion
    })
  })

  describe('異常系', () => {
    it('日付が未定の場合、undefined になること', () => {
      // #region Given
      const event = makeEvent({ schedule: EventSchedule.MONTH_ONLY, month: '2027-03' })
      // #endregion

      // #region When
      const result = googleCalendarUrl(event, { title: 'テスト大会', pageUrl: PAGE_URL })
      // #endregion

      // #region Then
      expect(result).toBeUndefined()
      // #endregion
    })
  })
})
