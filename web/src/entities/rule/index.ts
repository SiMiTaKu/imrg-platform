export { RULE_BOOK } from './api/ruleBook'
export { calculateArticleNumber } from './lib/articleNumber'
export type { NumberableChapter } from './lib/articleNumber'
export { localizeRuleBook } from './lib/localizeRuleBook'
export type {
  LocalizedRuleArticle,
  LocalizedRuleBlock,
  LocalizedRuleBook,
  LocalizedRuleChapter,
  LocalizedRuleSection,
  RuleArticle,
  RuleBlock,
  RuleBook,
  RuleChapter,
  RuleImage,
  RuleSection,
} from './model/ruleBook'
export { RULE_TABLES, findRuleTable } from './api/tables'
export { hasRowHeader, normalizeRuleTableCell } from './model/ruleTable'
export type {
  RuleTable,
  RuleTableCell,
  RuleTableCellSource,
  RuleTableLayout,
  RuleTableRow,
} from './model/ruleTable'
