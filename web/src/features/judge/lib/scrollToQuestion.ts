/**
 * 設問の札まで画面を動かす。
 *
 * @remarks
 * 選び終えたら次の設問へ、決定を押して未回答が残っていればその設問へ、と
 * どちらも「いま答えるべき場所」を画面の中に入れるために使う。
 * 札が開くのを待ってから測りたいので、描き直しのあとに動かす
 *
 * @param bodyId - 設問の中身の id（札の見出しが aria-controls で指しているもの）
 */
export const scrollToQuestion = (bodyId: string): void => {
  if (typeof document === 'undefined') return
  requestAnimationFrame(() => {
    const body = document.getElementById(bodyId)
    const card = body?.closest('[data-question-card]') ?? document.getElementById(bodyId)
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
}
