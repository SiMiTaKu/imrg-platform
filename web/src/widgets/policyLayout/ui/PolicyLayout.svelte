<script lang="ts">
  import type { Snippet } from 'svelte'
  import { m } from '$lib/paraglide/messages'
  import { LINKS } from '@shared/config/links'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { policyLabels } from '../config/policyLabels'

  /** 文章だけのページの枠の引数 */
  interface Props {
    /** 見出し */
    title: string
    /** 見出しの下に小さく出す文言。省くと出さない */
    subtitle?: string
    /** 制定日・改定日の表記 */
    enactedAt: string
    /** 本文 */
    children: Snippet
  }

  /** 目次の1項目 */
  interface PolicySection {
    /** 飛び先の id */
    id: string
    /** 条の番号。本文の見出しの先頭にある数字を取る */
    number: string
    /** 番号を除いた見出し */
    label: string
  }

  const { title, subtitle, enactedAt, children }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  const labels = policyLabels(getLocale() as SiteLocale)

  /** 本文を入れる箱。ここから見出しを拾って目次を作る */
  let bodyElement = $state<HTMLElement | null>(null)
  /** 目次の項目。本文が描かれたあとに埋まる */
  let sections = $state<PolicySection[]>([])
  /** いま読んでいる条の id。目次の印に使う */
  let currentId = $state('')

  /** 「1. 運営者」のような見出しから、番号と見出しを分ける */
  const SECTION_NUMBER = /^([0-9０-９]+)[.．、:：]?\s*(.+)$/u

  /** 画面の上端からこの高さ（px）より上に出た見出しを「読み終えた」とみなす。固定のヘッダーの下 */
  const READING_LINE = 120

  /**
   * 見出しの文字から目次の1項目を作る。
   * 本文の文字は書き換えず、目次に出す用の値を取り出すだけ
   * @param heading - 本文の見出し
   * @param index - 上から数えた順番（0 始まり）
   * @returns 目次の1項目
   */
  const toSection = (heading: HTMLHeadingElement, index: number): PolicySection => {
    const text = (heading.textContent ?? '').trim()
    const matched = SECTION_NUMBER.exec(text)
    return {
      id: heading.id,
      number: matched ? matched[1] : String(index + 1),
      label: matched ? matched[2] : text,
    }
  }

  // 本文の見出しに id を振って目次を作り、いま画面にある条を追いかける。
  // 本文は言語ごとの Body コンポーネントが持っているので、描かれたあとの見出しから拾う
  $effect(() => {
    const body = bodyElement
    if (!body) return

    const headings = [...body.querySelectorAll('h3')]
    headings.forEach((heading, index) => {
      heading.id = `policy-section-${index + 1}`
    })
    sections = headings.map(toSection)
    currentId = headings[0]?.id ?? ''

    // 読んでいる位置を追う。読みかけの線より上に出た見出しのうち、いちばん下のものを「いま読んでいる条」とみなす。
    // 見出しがこの線をまたいだときだけ IntersectionObserver が呼ばれるので、スクロールのたびに計算しない
    const updateCurrent = () => {
      const passed = headings.filter(
        (heading) => heading.getBoundingClientRect().top <= READING_LINE,
      )
      currentId = (passed.at(-1) ?? headings[0])?.id ?? ''
    }
    const observer = new IntersectionObserver(updateCurrent, {
      rootMargin: `-${READING_LINE}px 0px 0px 0px`,
    })
    headings.forEach((heading) => observer.observe(heading))

    // id は描かれたあとに付くので、#policy-section-3 のような URL で開いたときは自分で飛ぶ
    const hash = window.location.hash.slice(1)
    if (hash) document.getElementById(hash)?.scrollIntoView()

    return () => observer.disconnect()
  })
</script>

<!-- プライバシーポリシー・利用規約など、文章だけのページの共通の枠 -->
<article class="policy" class:mobile={isMobile}>
  <header class="head">
    <h1>{title}</h1>
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
    <p class="enacted-at">{enactedAt}</p>
  </header>

  {#if sections.length > 0}
    <nav class="toc" aria-labelledby="policy-toc-title">
      <p class="toc-title" id="policy-toc-title">{labels.tableOfContents}</p>
      <ol>
        {#each sections as section (section.id)}
          <li>
            <a href="#{section.id}" class:current={currentId === section.id}>
              <span class="number">{section.number}</span>
              <span class="label">{section.label}</span>
            </a>
          </li>
        {/each}
      </ol>
    </nav>
  {/if}

  <div class="body" bind:this={bodyElement}>
    {@render children()}
  </div>

  <!-- 読み終えた人が連絡できるように、問い合わせ先を最後に置く -->
  <aside class="contact">
    <p class="contact-title">{m.contact_title()}</p>
    <p class="contact-body">
      {m.contact_body_line1()}<br />
      {m.contact_body_line2()}<br />
      {m.contact_body_line3()}
    </p>
    <a class="contact-button" href={LINKS.instagram} rel="noopener noreferrer" target="_blank">
      {m.contact_button()}
    </a>
  </aside>

  <p class="back"><a href={localizeHref(ROUTES.top)}>{m.layout_back_to_top()}</a></p>
</article>

<style lang="scss">
  .policy {
    --max-width: 720px;
    --heading-font-size: #{$font-size-22};
    --title-font-size: #{$font-size-30};
    --anchor-offset: 96px;

    // 固定幅だと、画面がそれより狭いときに横へはみ出す
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: $space-size-48 var(--content-padding-inline) $space-size-80;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, text);
    overflow-wrap: anywhere;
  }

  .mobile {
    --heading-font-size: #{$font-size-18};
    --title-font-size: #{$font-size-24};
    --anchor-offset: 80px;

    padding: $space-size-32 var(--content-padding-inline) $space-size-64;
  }

  /* ─── 見出しと最終更新日 ─── */

  .head {
    margin-bottom: $space-size-32;
    padding-bottom: $space-size-24;
    border-bottom: 1px solid map.get($gray, 100);
  }

  h1 {
    margin: 0 0 $space-size-12;
    font-size: var(--title-font-size);
    line-height: 1.4;
    color: map.get($gray, 800);
  }

  .subtitle {
    margin: 0 0 $space-size-12;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  // 制定日・改定日。いつの文面かが最初に分かるよう、見出しのすぐ下に札の形で出す
  .enacted-at {
    display: inline-block;
    margin: 0;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    line-height: 1.6;
    color: map.get($sky-blue, text);
    border-radius: 20px;
    background: map.get($sky-blue, background);
  }

  /* ─── 目次 ─── */

  .toc {
    margin-bottom: $space-size-40;
    padding: $space-size-20 $space-size-24;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: map.get($gray, background);
  }

  .toc-title {
    margin: 0 0 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .toc ol {
    display: grid;
    gap: $space-size-4;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .toc ol {
    grid-template-columns: 1fr;
  }

  .toc a {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-8;
    font-size: $font-size-14;
    line-height: 1.6;
    color: map.get($gray, text);
    border-radius: 4px;
    align-items: baseline;
    text-decoration: none;
  }

  .toc a:hover {
    background: map.get($sky-blue, background);
  }

  // いま読んでいる条。目次のどこにいるかが分かる
  .toc a.current {
    font-weight: bold;
    color: map.get($sky-blue, text);
    background: map.get($sky-blue, background);
  }

  .toc .number {
    flex: none;
    min-width: 1.5em;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: right;
  }

  .toc a.current .number {
    color: map.get($sky-blue, text);
  }

  .toc .label {
    flex: 1;
    min-inline-size: 0;
  }

  /* ─── 問い合わせ先 ─── */

  .contact {
    margin-top: $space-size-64;
    padding: $space-size-24;
    border: 1px solid map.get($sky-blue, 100);
    border-radius: 8px;
    background: map.get($sky-blue, background);
    text-align: center;
  }

  .contact-title {
    margin: 0 0 $space-size-8;
    font-size: $font-size-18;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .contact-body {
    margin: 0 0 $space-size-20;
    font-size: $font-size-16;
    line-height: 1.9;
  }

  .contact-button {
    display: inline-flex;
    box-sizing: border-box;
    max-width: 100%;
    min-height: 44px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    color: $white;
    border-radius: 22px;
    background: map.get($sky-blue, button);
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .contact-button:hover {
    background: map.get($sky-blue, text);
  }

  .back {
    margin-top: $space-size-48;
    font-size: $font-size-14;
    text-align: center;
  }

  .back a {
    color: map.get($sky-blue, text);
  }

  // 本文は各ページから children で渡すため、ここから :global で体裁を当てる。
  // .body の中だけに効くので、ほかのページへは漏れない
  .body {
    color: map.get($gray, text);
  }

  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */

  // 条の見出し。上に区切りの線を引き、頭に青い印を置いて、条の変わり目を目で分かるようにする。
  // 固定のヘッダーに隠れないよう、飛び先の余白（scroll-margin-top）も取る
  .body :global(h3) {
    margin: $space-size-48 0 $space-size-16;
    padding-top: $space-size-24;
    font-size: var(--heading-font-size);
    line-height: 1.5;
    color: map.get($gray, 800);
    border-top: 1px solid map.get($gray, 100);
    scroll-margin-top: var(--anchor-offset);
  }

  .body :global(h3::before) {
    display: inline-block;
    width: 4px;
    height: 0.9em;
    margin-right: $space-size-12;
    border-radius: 2px;
    background: map.get($sky-blue, button);
    content: '';
    vertical-align: -0.05em;
  }

  // 段落。行の高さを広めに取り、段落どうしの間も空けて、壁のように見えないようにする
  .body :global(p) {
    margin: 0 0 $space-size-16;
    line-height: 2;
  }

  // 前書きの一文（最初の段落）。何についての文面かが最初に分かるよう、青の札にする
  .body > :global(p:first-child) {
    margin-bottom: $space-size-32;
    padding: $space-size-20 $space-size-24;
    border-left: 4px solid map.get($sky-blue, border);
    border-radius: 4px;
    background: map.get($sky-blue, background);
  }

  // サイト全体のリセットで黒丸が消えているので付け直す
  .body :global(ul) {
    margin: 0 0 $space-size-16;
    padding-left: $space-size-24;
    list-style: disc;
  }

  .body :global(li) {
    margin-bottom: $space-size-8;
    line-height: 1.9;
  }

  .body :global(a) {
    color: map.get($sky-blue, text);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .body :global(a:hover) {
    color: map.get($sky-blue, button);
  }

  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
</style>
