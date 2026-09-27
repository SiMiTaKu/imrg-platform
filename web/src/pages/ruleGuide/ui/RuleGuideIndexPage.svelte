<script lang="ts">
  import type { GuidePage } from '@entities/ruleGuide'
  import { guideKeyToPath, guideParentKey } from '@entities/ruleGuide'
  import type { GuideKey } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideDisclaimer } from '@widgets/ruleGuide'

  /** ルールの解説の入口 */
  interface Props {
    /** いちばん上の層のページ。本文があるものだけ渡ってくる */
    topPages: readonly GuidePage[]
    /** すべてのページ。木の並び順（親が子より先） */
    allPages: readonly GuidePage[]
  }

  const { topPages, allPages }: Props = $props()

  const isMobile = $derived($pageData.isMobile)

  /**
   * 解説のページへのリンク先を作る
   * @param page - 解説のページ
   * @returns 表示中の言語のパス
   */
  const hrefOf = (page: GuidePage) => localizeHref(ROUTES.rules.page(guideKeyToPath(page.key)))

  /** どこから読むかの入口1つ */
  interface Start {
    /** 一覧を描くときの目印 */
    id: string
    /** だれ向けか */
    title: string
    /** ひと言の説明 */
    body: string
    /** 行き先の名前 */
    to: string
    /** 行き先 */
    href: string
  }

  /**
   * 解説のページへの入口を作る
   * @param key - 行き先のページの鍵
   * @param title - だれ向けか
   * @param body - ひと言の説明
   * @returns 入口。そのページの本文がまだ無ければ `undefined`
   */
  const guideStart = (key: GuideKey, title: string, body: string): Start | undefined => {
    const page = topPages.find((candidate) => candidate.key === key)
    return page === undefined
      ? undefined
      : { id: key, title, body, to: page.title, href: hrefOf(page) }
  }

  /*
    どこから読むかの3つの入口。読み手の目的ごとに分ける。
    検索から来る人の多くは言葉を調べに来るので、用語集への入口も置く。
    用語集はルールの外の言葉も扱うので、解説の外（/words/）にある
  */
  const starts = $derived(
    [
      guideStart('basics', m.rule_guide_index_start_new(), m.rule_guide_index_start_new_body()),
      guideStart('score', m.rule_guide_index_start_watch(), m.rule_guide_index_start_watch_body()),
      {
        id: 'words',
        title: m.rule_guide_index_start_word(),
        body: m.rule_guide_index_start_word_body(),
        to: m.words_title(),
        href: localizeHref(ROUTES.words.index),
      },
    ].filter((start): start is Start => start !== undefined),
  )

  /** 目次の1項目。子の項目を持てる */
  interface TocNode {
    /** そのページ */
    page: GuidePage
    /** すぐ下のページ */
    children: TocNode[]
  }

  /**
   * 目次の木を組み立てる。
   *
   * @remarks
   * 字下げを余白でまねるのではなく、リストを入れ子にする。
   * そうすると「・」の位置も階層ごとに下がり、親子の関係が形で分かる
   * @param parent - 親の鍵。いちばん上なら `undefined`
   * @returns その親のすぐ下の項目
   */
  const buildToc = (parent: GuideKey | undefined): TocNode[] =>
    allPages
      .filter((page) => guideParentKey(page.key) === parent)
      .map((page) => ({ page, children: buildToc(page.key) }))

  const toc = $derived(buildToc(undefined))
</script>

<article class="index" class:mobile={isMobile}>
  <h1>{m.rule_guide_index_title()}</h1>
  <p class="lead">{m.rule_guide_index_lead()}</p>

  {#if starts.length > 0}
    <section class="starts">
      <h2>{m.rule_guide_index_start_heading()}</h2>
      <ul>
        {#each starts as start (start.id)}
          <li>
            <a href={start.href}>
              <span class="who">{start.title}</span>
              <span class="what">{start.body}</span>
              <span class="to">{start.to}</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- 目次。入れ子のリストにして、階層ごとに「・」の位置を下げる -->
  {#snippet tocList(nodes: TocNode[], nested: boolean)}
    <ul class="toc" class:nested>
      {#each nodes as node (node.page.key)}
        <li>
          <a href={hrefOf(node.page)}>{node.page.title}</a>
          {#if node.children.length > 0}
            {@render tocList(node.children, true)}
          {/if}
        </li>
      {/each}
    </ul>
  {/snippet}

  <!-- 以前の規則集のページと同じく、目次は枠で囲んで本文と分ける -->
  <nav class="all" aria-labelledby="rule-guide-toc">
    <h2 id="rule-guide-toc" class="toc-title">{m.rule_guide_index_all_heading()}</h2>
    {@render tocList(toc, false)}
    <p class="writing">{m.rule_guide_index_writing()}</p>
  </nav>

  <GuideDisclaimer />
</article>

<style lang="scss">
  .index {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    width: 100%;
    max-width: 48em;

    /* 中央に寄せる。margin は使わない決まりなので論理プロパティで書く */
    margin-inline: auto;
    padding: $space-size-48 $space-size-16 $space-size-64;
  }

  h1 {
    font-size: $font-size-30;
    line-height: 1.5;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  .lead {
    padding-bottom: $space-size-16;
    font-size: $font-size-18;
    line-height: 1.9;
  }

  .mobile .lead {
    font-size: $font-size-16;
  }

  h2 {
    font-size: $font-size-20;
  }

  .starts {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;

    ul {
      display: flex;
      flex-direction: column;
      gap: $space-size-8;
    }

    a {
      display: flex;
      flex-direction: column;
      gap: $space-size-4;
      padding: $space-size-16;
      color: map.get($gray, text);
      text-decoration: none;
      border: $border-size-1 solid map.get($gray, border);
      border-radius: $border-radius-8;

      &:hover {
        border-color: map.get($sky-blue, border);
      }
    }
  }

  .who {
    font-size: $font-size-16;
    font-weight: bold;
  }

  .what {
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .to {
    font-size: $font-size-14;
    color: map.get($sky-blue, text);
  }

  /* 目次の枠。以前の規則集のページの目次と同じ見た目にそろえる */
  .all {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: $space-size-16 $space-size-20;
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: $border-radius-8;
  }

  .toc-title {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  /*
    目次のリスト。入れ子の ul ごとに左の余白を取るので、
    「・」も文字と一緒に1段ずつ右へ下がる
  */
  .toc {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    padding-left: 1.5em;
    font-size: $font-size-14;
    list-style: disc;

    a {
      display: block;
      padding: $space-size-4 $space-size-8;
      color: map.get($sky-blue, text);
      text-decoration: none;
      border-radius: $border-radius-4;

      &:hover {
        background-color: map.get($sky-blue, background);
      }

      &:focus-visible {
        outline: $border-size-2 solid map.get($sky-blue, button);
        outline-offset: -2px;
      }
    }

    /* いちばん上の階層は太字にして、章の区切りに見せる */
    > li > a {
      font-weight: bold;
    }
  }

  /* 2段目から下は白丸にして、1段目と見分けられるようにする */
  .toc.nested {
    padding-top: $space-size-2;
    list-style: circle;

    > li > a {
      font-weight: normal;
    }
  }

  .writing {
    padding: $space-size-4 $space-size-8 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }
</style>
