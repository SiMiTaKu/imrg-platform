import { error } from '@sveltejs/kit'
import {
  guideChapterKeys,
  guideCoursePosition,
  guideKeyToPath,
  guideLessonKeys,
  guidePathToKey,
  isChapterEnd,
  loadGuideChildren,
  loadGuidePage,
  loadGuideQuiz,
  publishedGuideKeys,
} from '@entities/ruleGuide'
import type { GuideKey } from '@entities/ruleGuide'
import { META_DATA } from '@shared/config/meta'
import { getLocale } from '@shared/lib/i18n'
import type { EntryGenerator, PageServerLoad } from './$types'

/*
  書き出す URL は、本文を書いた鍵から作る。
  鍵の木（GUIDE_KEY_TREE）に足しただけでは URL は生えず、
  本文（api/content/ja）を書いた時点で生える。
  だからページを1枚書くたびに、ここを直さなくてよい
*/
export const entries: EntryGenerator = () =>
  publishedGuideKeys().map((key) => ({ guide: guideKeyToPath(key) }))

export const load: PageServerLoad = ({ params }) => {
  const key = guidePathToKey(params.guide)
  if (key === undefined) error(404, 'Not Found')

  const locale = getLocale()
  const page = loadGuidePage(key, locale)
  const position = guideCoursePosition(key)
  if (page === undefined || position === undefined) error(404, 'Not Found')

  /**
   * 前後のレッスンを、リンクに要る分だけ取り出す
   * @param target - 前後のレッスンの鍵
   * @returns 鍵と見出し。無ければ `undefined`
   */
  const lessonLink = (target: GuideKey | undefined) => {
    const found = target === undefined ? undefined : loadGuidePage(target, locale)
    return found === undefined ? undefined : { key: found.key, title: found.title }
  }

  /*
    講座全体の目次。どのレッスンからでも章を選べるよう、ページの横（スマホでは右端のつまみ）に出す
  */
  const outline = guideChapterKeys().map((chapterKey, index) => ({
    number: index + 1,
    key: chapterKey,
    title: loadGuidePage(chapterKey, locale)?.title ?? '',
    lessons: guideLessonKeys(chapterKey)
      .map((lessonKey) => loadGuidePage(lessonKey, locale))
      .filter((lesson) => lesson !== undefined)
      .map((lesson) => ({ key: lesson.key, title: lesson.title })),
  }))

  const prev = lessonLink(position.prev)
  const next = lessonLink(position.next)

  return {
    meta: META_DATA.ruleGuide({
      title: page.title,
      lead: page.lead,
      path: guideKeyToPath(key),
    }),
    page,
    children: loadGuideChildren(key, locale),
    course: {
      chapter: position.chapter,
      chapterTitle: loadGuidePage(position.chapterKey, locale)?.title ?? '',
      lesson: position.lesson,
      lessonCount: position.lessonCount,
      prev,
      next,
      // 次が別の章なら「次の章へ」と出す
      nextIsNewChapter: next !== undefined && !next.key.startsWith(`${position.chapterKey}.`),
    },
    outline,
    // 理解度チェックは章の最後のレッスンで出す
    quiz: isChapterEnd(position) ? loadGuideQuiz(position.chapterKey, locale) : [],
  }
}
