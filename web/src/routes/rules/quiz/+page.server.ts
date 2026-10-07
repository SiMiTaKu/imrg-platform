import { guideChapterKeys, loadGuidePage, loadGuideQuiz } from '@entities/ruleGuide'
import { META_DATA } from '@shared/config/meta'
import { getLocale } from '@shared/lib/i18n'
import type { PageServerLoad } from './$types'

/*
  問題集。章ごとの理解度チェックを、講座の順番に並べる。
  問題の無い章は出さない
*/
export const load: PageServerLoad = () => {
  const locale = getLocale()
  const chapters = guideChapterKeys()
    .map((key, index) => ({
      number: index + 1,
      title: loadGuidePage(key, locale)?.title ?? '',
      questions: loadGuideQuiz(key, locale),
    }))
    .filter((chapter) => chapter.questions.length > 0)

  return { meta: META_DATA.ruleGuideQuiz(), chapters }
}
