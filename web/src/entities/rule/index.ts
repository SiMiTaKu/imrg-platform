export { loadRuleBook } from './api/ruleSource'
export { leafNumber } from './lib/ruleNumber'
export type {
  LocalizedRuleArticle,
  LocalizedRuleBlock,
  LocalizedRuleBook,
  LocalizedRuleChapter,
  LocalizedRuleSection,
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
export { ApparatusKind } from './model/ruleTable'
export {
  hasRowHeader,
  hasShortRowHeader,
  headerColumnCount,
  mergeEmptyCellsDownward,
  narrowColumnCount,
  normalizeRuleTableCell,
} from './model/ruleTable'
export type {
  RulePaper,
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
