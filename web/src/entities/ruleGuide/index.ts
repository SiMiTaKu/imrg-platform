// 男子新体操のルールの解説。自分の言葉で書いたもので、公式の規則集ではない。
// 書き方の決まりは docs/rules-guide.md
export {
  GUIDE_KEYS,
  GUIDE_KEY_TREE,
  guideBlockTexts,
  guideChildKeys,
  guideKeyToPath,
  guideParentKey,
  guidePathToKey,
} from './model'
export type {
  GuideBlock,
  GuideChildKey,
  GuideContent,
  GuideDisclaimer,
  GuideKey,
  GuidePage,
  GuideQuiz,
  GuideQuizQuestion,
  GuideTopKey,
} from './model'
export { GUIDE_CONTENT_JA } from './api/content/ja'
export {
  guideUpKey,
  loadAllGuidePages,
  loadGuideChildren,
  loadGuidePage,
  loadGuideQuiz,
  loadTopGuidePages,
  publishedGuideKeys,
} from './lib/loadGuide'
export {
  guideChapterKeyOf,
  guideChapterKeys,
  guideCoursePosition,
  guideLessonKeys,
  isChapterEnd,
} from './lib/course'
export type { GuideCoursePosition } from './lib/course'
export { GUIDE_QUIZ_JA } from './api/quiz/ja'
