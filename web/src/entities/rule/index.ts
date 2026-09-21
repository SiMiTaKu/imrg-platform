export { RULE_BOOK } from './api/ruleBook'
export { loadRuleBook } from './api/ruleSource'
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
export {
  RULE_FORMS,
  RULE_SEATINGS,
  RULE_SHAPE_FIGURES,
  RULE_TABLES,
  RULE_TREES,
  findRuleSeating,
  findRuleShapeFigure,
  findRuleTable,
  findRuleTree,
} from './api/tables'
export { hasRowHeader, narrowColumnCount, normalizeRuleTableCell } from './model/ruleTable'
export type {
  RuleSeat,
  RuleSeatRow,
  RuleSeating,
  RuleShape,
  RuleShapeFigure,
  RuleShapeKind,
  RuleTable,
  RuleTableCell,
  RuleTableCellSource,
  RuleTableLayout,
  RuleTablePurpose,
  RuleTableRow,
  RuleTree,
  RuleTreeNode,
} from './model/ruleTable'

// 骨格と本文を分けて持つための仕組み
export { buildRuleBook } from './lib/buildRuleBook'
export { fingerprint, isFresh } from './lib/fingerprint'
export { checkTranslations, formatTranslationStatus } from './lib/translationStatus'
export type {
  RuleContent,
  RuleEntry,
  RuleItem,
  RuleKey,
  RuleNode,
  RuleStructure,
  TranslationStatus,
} from './model/ruleSource'
