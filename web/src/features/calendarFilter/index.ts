export { PER_PAGE, PERIODS } from './config/period'
export type { PeriodOption } from './config/period'
export {
  filterEvents,
  groupByMonth,
  isEveryCategory,
  matchesKeyword,
  normalizeText,
  paginate,
} from './lib/filter'
export { defaultState, parseState, serializeState } from './lib/state'
export type {
  CalendarState,
  CalendarView,
  EventFilter,
  EventPeriod,
  MonthGroup,
  PageSlice,
} from './model'
export { default as CalendarSearchPanel } from './ui/CalendarSearchPanel.svelte'
