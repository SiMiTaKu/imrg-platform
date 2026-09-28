<script lang="ts">
  import type { GlossaryTerm } from '@entities/glossary'
  import {
    GLOSSARY_GYOU_HEADS,
    GLOSSARY_OTHER_HEAD,
    groupGlossaryByGyou,
    matchesGlossaryTerm,
  } from '@entities/glossary'
  import type { GuideKey } from '@entities/ruleGuide'
  import { guideKeyToPath } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideDisclaimer } from '@widgets/ruleGuide'

  /** 用語集。辞書のように、読みのあいうえお順で引く */
  interface Props {
    /** すべての語 */
    terms: readonly GlossaryTerm[]
    /** 本文のあるルールの解説の鍵。ここにある鍵だけリンクにする */
    publishedKeys: readonly GuideKey[]
  }

  const { terms, publishedKeys }: Props = $props()

  const isMobile = $derived($pageData.isMobile)

  /**
   * 用語が指すルールの解説のリンク先を作る
   * @param to - 用語が持つ解説の鍵
   * @returns 本文のある解説ならそのパス。無ければ `undefined`（リンクを出さない）
   */
  const guideHrefOf = (to: string | undefined): string | undefined => {
    const key = publishedKeys.find((published) => published === to)
    return key === undefined ? undefined : localizeHref(ROUTES.rules.page(guideKeyToPath(key)))
  }

  /* 探す言葉。打つたびに絞り込む。サーバーへは行かない */
  let keyword = $state('')

  /* 読みのあいうえお順に並べ、五十音の行ごとに分ける。絞り込んだあとも同じ並び */
  const gyous = $derived(
    groupGlossaryByGyou(terms.filter((term) => matchesGlossaryTerm(term, keyword))),
  )
  const foundCount = $derived(gyous.reduce((total, gyou) => total + gyou.terms.length, 0))

  /* 索引に並べる行。語の無い行も出し、押せない形にする（辞書の爪と同じ） */
  const indexHeads = $derived(
    gyous.some((gyou) => gyou.head === GLOSSARY_OTHER_HEAD)
      ? [...GLOSSARY_GYOU_HEADS, GLOSSARY_OTHER_HEAD]
      : GLOSSARY_GYOU_HEADS,
  )

  /** 行の頭の文字を、ページの中の位置の目印（ローマ字）にする */
  const GYOU_IDS: Readonly<Record<string, string>> = {
    あ: 'a',
    か: 'ka',
    さ: 'sa',
    た: 'ta',
    な: 'na',
    は: 'ha',
    ま: 'ma',
    や: 'ya',
    ら: 'ra',
    わ: 'wa',
    [GLOSSARY_OTHER_HEAD]: 'other',
  }

  /**
   * 行の見出しの目印を返す
   * @param head - 行の頭の文字
   * @returns ページの中の位置の目印
   */
  const gyouId = (head: string) => `gyou-${GYOU_IDS[head] ?? 'other'}`

  /**
   * 行の見出しの文字を返す
   * @param head - 行の頭の文字
   * @returns 「あ行」など。五十音に入らない行は「英数字・記号」
   */
  const gyouLabel = (head: string) =>
    head === GLOSSARY_OTHER_HEAD ? m.words_other() : m.words_gyou({ head })

  /**
   * 読みを出すかどうか。見出しの語とまったく同じ（「ころがし」など）なら出さない
   * @param term - 語
   * @returns 出すなら true
   */
  const showReading = (term: GlossaryTerm) => term.reading !== term.term
</script>

<article class="words" class:mobile={isMobile}>
  <!-- ─── 帯。辞書として引くか、言葉で探すか ─── -->
  <section class="hero">
    <div class="inner">
      <span class="eyebrow">{m.words_eyebrow()}</span>
      <h1>{m.words_title()}</h1>
      <p class="lead">{m.words_lead()}</p>

      <form class="search" role="search" onsubmit={(event) => event.preventDefault()}>
        <label class="label" for="glossary-search">{m.words_search_label()}</label>
        <div class="field">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <input
            id="glossary-search"
            type="search"
            bind:value={keyword}
            placeholder={m.words_search_placeholder()}
            autocomplete="off"
            enterkeyhint="search"
          />
        </div>
        <p class="found">{m.words_found({ count: foundCount })}</p>
      </form>
    </div>
  </section>

  <!-- ─── 五十音の索引。画面の上に貼り付けて、どこからでも行へ飛べるようにする ─── -->
  <nav class="index" aria-label={m.words_index_label()}>
    <ol>
      {#each indexHeads as head (head)}
        {@const has = gyous.some((gyou) => gyou.head === head)}
        <li>
          {#if has}
            <a href="#{gyouId(head)}">{head}</a>
          {:else}
            <span aria-disabled="true">{head}</span>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>

  <section class="body">
    <div class="inner">
      {#if foundCount === 0}
        <p class="empty">{m.words_empty({ keyword: keyword.trim() })}</p>
      {/if}

      {#each gyous as gyou (gyou.head)}
        <section class="gyou" id={gyouId(gyou.head)}>
          <h2>
            <span class="kana" aria-hidden="true">{gyou.head}</span>
            <span class="gyou-label">{gyouLabel(gyou.head)}</span>
          </h2>
          <dl>
            {#each gyou.terms as term (term.slug)}
              {@const guideHref = guideHrefOf(term.to)}
              <!-- 位置の目印。語ごとのページができるまでは /words/#<slug> で直接開ける -->
              <div class="entry" id={term.slug}>
                <dt>
                  <span class="term">{term.term}</span>
                  {#if showReading(term)}
                    <span class="reading">【{term.reading}】</span>
                  {/if}
                </dt>
                <dd>
                  {term.summary}
                  {#if guideHref}
                    <a href={guideHref}>{m.words_detail()} →</a>
                  {/if}
                </dd>
              </div>
            {/each}
          </dl>
        </section>
      {/each}

      <GuideDisclaimer />
    </div>
  </section>
</article>

<style lang="scss">
  .words {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-20;
    width: 100%;
    max-width: 48em;

    /* 中央に寄せる。margin は使わない決まりなので論理プロパティで書く */
    margin-inline: auto;
    padding: $space-size-48 $space-size-16;
  }

  .mobile .inner {
    padding: $space-size-32 $space-size-16;
  }

  /* ─── 帯 ─── */

  .hero {
    width: 100%;
    background:
      radial-gradient(circle at 8% 0%, rgb(22 160 107 / 12%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 14%), transparent 42%), $white;

    .inner {
      align-items: center;
      padding-top: $space-size-56;
      padding-bottom: $space-size-40;
      text-align: center;
    }
  }

  .eyebrow {
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($theme, green);
    letter-spacing: 0.06em;
  }

  h1 {
    font-size: $font-size-40;
    line-height: 1.3;
  }

  .mobile h1 {
    font-size: $font-size-30;
  }

  .lead {
    max-width: 36em;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, light-text);
  }

  .search {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    width: 100%;
    max-width: 32em;
  }

  .label {
    font-size: $font-size-14;
    font-weight: bold;
    text-align: left;
  }

  .field {
    position: relative;

    input {
      width: 100%;
      padding: $space-size-12 $space-size-16 $space-size-12 $space-size-48;
      font-size: $font-size-16;
      border: $border-size-2 solid map.get($gray, border);
      border-radius: 999px;
      background: $white;

      &:focus-visible {
        border-color: map.get($theme, green);
        outline: none;
      }
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: $space-size-20;
    width: 18px;
    height: 18px;
    fill: none;
    stroke: map.get($theme, green);
    stroke-width: 2.5;
    stroke-linecap: round;
    transform: translateY(-50%);
  }

  .found {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: left;
  }

  /* ─── 五十音の索引（辞書の爪） ─── */

  .index {
    position: sticky;
    top: var(--header-height, 64px);
    z-index: 2;
    width: 100%;
    background: rgb(255 255 255 / 94%);
    border-top: $border-size-1 solid map.get($gray, 100);
    border-bottom: $border-size-1 solid map.get($gray, 100);
    backdrop-filter: blur(6px);

    ol {
      display: flex;
      flex-wrap: wrap;
      gap: $space-size-4;
      justify-content: center;
      max-width: 48em;
      margin-inline: auto;
      padding: $space-size-8 $space-size-16;
      list-style: none;
    }

    a,
    span {
      display: grid;
      place-items: center;
      min-width: 36px;
      height: 36px;
      padding: 0 $space-size-4;
      font-size: $font-size-16;
      font-weight: bold;
      border-radius: 50%;
    }

    a {
      color: map.get($theme, green);
      text-decoration: none;
      background: map.get($theme-background, green);

      &:hover {
        color: $white;
        background: map.get($theme, green);
      }
    }

    span {
      color: map.get($gray, 300);
    }
  }

  /* スマホでは10行が1段に収まるよう、爪を少し小さくする */
  .mobile .index {
    ol {
      flex-wrap: nowrap;
      gap: $space-size-2;
      justify-content: space-between;
      padding: $space-size-8 $space-size-12;
    }

    a,
    span {
      min-width: 30px;
      height: 30px;
      font-size: $font-size-14;
    }
  }

  /* ─── 行と見出し語 ─── */

  .body .inner {
    gap: $space-size-32;
    padding-bottom: $space-size-64;
  }

  .empty {
    padding: $space-size-24 0;
    font-size: $font-size-16;
    text-align: center;
  }

  /* 索引で飛んだとき、貼り付けた索引の下に見出しが隠れないようにする */
  .gyou {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    scroll-margin-top: calc(var(--header-height, 64px) + 72px);

    h2 {
      display: flex;
      gap: $space-size-12;
      align-items: center;
      padding-bottom: $space-size-8;
      border-bottom: $border-size-2 solid map.get($theme, green);
    }
  }

  .kana {
    display: grid;
    width: 44px;
    height: 44px;
    font-size: $font-size-22;
    color: $white;
    border-radius: $border-radius-8;
    background: map.get($theme, green);
    place-items: center;
  }

  .gyou-label {
    font-size: $font-size-18;
    color: map.get($gray, text);
  }

  dl {
    display: flex;
    flex-direction: column;
  }

  /* 見出し語1つ。辞書の1項目のように、語・読み・説明を詰めて並べる */
  .entry {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding: $space-size-12 $space-size-4;
    border-bottom: $border-size-1 solid map.get($gray, 100);
    scroll-margin-top: calc(var(--header-height, 64px) + 72px);

    &:target {
      background: map.get($yellow, 50);
    }
  }

  dt {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4;
    align-items: baseline;
  }

  .term {
    font-size: $font-size-18;
    font-weight: bold;
  }

  .reading {
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  /* ブラウザが dd に付ける字下げを外す。狭い画面で幅を取りすぎるため */
  dd {
    margin-inline-start: 0;
    font-size: $font-size-14;
    line-height: 1.8;

    a {
      padding-left: $space-size-8;
      color: map.get($sky-blue, text);
      white-space: nowrap;
    }
  }
</style>
