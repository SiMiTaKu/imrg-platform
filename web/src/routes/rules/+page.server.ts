import { GLOSSARY_JA } from '@entities/glossary'
import {
  GUIDE_QUIZ_JA,
  guideChapterKeys,
  guideKeyToPath,
  guideLessonKeys,
  guideReadingMinutes,
  guideSearchText,
  loadGuidePage,
} from '@entities/ruleGuide'
import type { GuideSearchDocument } from '@features/guideSearch'
import { META_DATA } from '@shared/config/meta'
import { getLocale, localizePath } from '@shared/lib/i18n'
import { ROUTES } from '@shared/routes'
import type { PageServerLoad } from './$types'

/*
  ルールの解説の入口。「講座を順に進む」と「ルールを検索する」の2つの入り方を用意する。
  検索は画面の中で絞り込むので、レッスンと用語をまとめて渡す（全部で数十件）
*/
export const load: PageServerLoad = () => {
  const locale = getLocale()

  const chapters = guideChapterKeys().map((chapterKey, index) => {
    const lessons = guideLessonKeys(chapterKey)
      .map((key) => loadGuidePage(key, locale))
      .filter((page) => page !== undefined)
      .map((page) => ({ key: page.key, title: page.title, minutes: guideReadingMinutes(page) }))
    const top = loadGuidePage(chapterKey, locale)
    return {
      number: index + 1,
      key: chapterKey,
      title: top?.title ?? '',
      lead: top?.lead ?? '',
      lessons,
      minutes: lessons.reduce((total, lesson) => total + lesson.minutes, 0),
      quizCount: GUIDE_QUIZ_JA[chapterKey]?.length ?? 0,
    }
  })

  // 検索の対象。レッスンは講座の順番、用語は用語集の順番で並べる
  const lessonDocuments: GuideSearchDocument[] = chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => {
      const page = loadGuidePage(lesson.key, locale)
      return {
        id: `lesson:${lesson.key}`,
        kind: 'lesson' as const,
        title: lesson.title,
        // 章の最初のレッスンは章の名前と同じなので、補足に章の名前を重ねない
        subtitle: lesson.key === chapter.key ? undefined : chapter.title,
        text: page === undefined ? '' : guideSearchText(page),
        href: ROUTES.rules.page(guideKeyToPath(lesson.key)),
        chapter: chapter.number,
      }
    }),
  )
  const wordDocuments: GuideSearchDocument[] = GLOSSARY_JA.map((term) => ({
    id: `word:${term.slug}`,
    kind: 'word' as const,
    title: term.term,
    subtitle: term.reading,
    text: term.summary,
    aliases: [...(term.aliases ?? []), term.reading],
    href: ROUTES.words.term(term.slug),
  }))
  const documents = [...lessonDocuments, ...wordDocuments].map((document) => ({
    ...document,
    href: localizePath(document.href, locale),
  }))

  return {
    meta: META_DATA.rules(),
    chapters,
    documents,
    stats: {
      chapters: chapters.length,
      lessons: lessonDocuments.length,
      questions: chapters.reduce((total, chapter) => total + chapter.quizCount, 0),
      words: wordDocuments.length,
    },
  }
}
