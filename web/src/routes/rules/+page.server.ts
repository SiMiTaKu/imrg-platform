import { PUBLIC_RULES_PUBLISHED } from '$env/static/public'
import { loadRuleBook } from '@entities/rule'
import { META_DATA } from '@shared/config/meta'
import { getLocale } from '@shared/lib/i18n'
import type { PageServerLoad } from './$types'

/**
 * 規則集を出すか。
 *
 * @remarks
 * 冊子の条文をそのまま写しているので、掲載の許可が取れるまで本番では出さない。
 * ステージングでは出す（配るときに true を渡している）。
 * 許可が取れたら `.env` の既定を true にする
 */
const published = PUBLIC_RULES_PUBLISHED === 'true'

/*
  本文は量が多いので、ビルド時に表示する言語だけに絞って渡す（ブラウザーへ全部の言語を送らない）。

  出さないときは読み込みもしない。画面に出さないだけだと、書き出した HTML の中に
  条文がそのまま残ってしまう
*/
export const load: PageServerLoad = () => ({
  meta: META_DATA.rules(),
  ruleBook: published ? loadRuleBook(getLocale()) : undefined,
})
