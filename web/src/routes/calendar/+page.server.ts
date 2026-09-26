import { UPDATED_AT } from '@entities/calendarEvent'
import { META_DATA } from '@shared/config/meta'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => ({
  // 掲載内容を確認した日の年を出す。年が変われば、作り直したときに自動で変わる
  meta: META_DATA.calendar(Number(UPDATED_AT.slice(0, 4))),
})
