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
  GuideTopKey,
} from './model'
export { GUIDE_CONTENT_JA } from './api/content/ja'
export { guideUpKey, loadGuideChildren, loadGuidePage, publishedGuideKeys } from './lib/loadGuide'
