export { CalendarView, EVENT_PERIODS, EventPeriod, PER_PAGE } from './config/period'
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
  CalendarViewKey,
  EventFilter,
  EventPeriodKey,
  MonthGroup,
  PageSlice,
} from './model'
export { default as CalendarSearchPanel } from './ui/CalendarSearchPanel.svelte'
