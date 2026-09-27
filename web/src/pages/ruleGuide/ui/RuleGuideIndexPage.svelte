<script lang="ts">
  import type { GuidePage } from '@entities/ruleGuide'
  import { guideKeyToPath } from '@entities/ruleGuide'
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

  /*
    どこから読むかの3つの入口。読み手の目的ごとに分ける。
    検索から来る人の多くは言葉を調べに来るので、その入口も置く
  */
  const starts = $derived(
    [
      {
        key: 'basics',
        title: m.rule_guide_index_start_new(),
        body: m.rule_guide_index_start_new_body(),
      },
      {
        key: 'score',
        title: m.rule_guide_index_start_watch(),
        body: m.rule_guide_index_start_watch_body(),
      },
      {
        key: 'toshu',
        title: m.rule_guide_index_start_word(),
        body: m.rule_guide_index_start_word_body(),
      },
    ]
      .map((start) => ({ ...start, page: topPages.find((page) => page.key === start.key) }))
      .filter((start) => start.page !== undefined),
  )

  /**
   * 階層の深さを返す。子のページを1段下げて、親子の関係が見えるようにする
   * @param page - 解説のページ
   * @returns いちばん上なら 0、その子なら 1
   */
  const depthOf = (page: GuidePage) => page.key.split('.').length - 1
</script>

<article class="index" class:mobile={isMobile}>
  <h1>{m.rule_guide_index_title()}</h1>
  <p class="lead">{m.rule_guide_index_lead()}</p>

  {#if starts.length > 0}
    <section class="starts">
      <h2>{m.rule_guide_index_start_heading()}</h2>
      <ul>
        {#each starts as start (start.key)}
          {#if start.page}
            <li>
              <a href={hrefOf(start.page)}>
                <span class="who">{start.title}</span>
                <span class="what">{start.body}</span>
                <span class="to">{start.page.title}</span>
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    </section>
  {/if}

  <section class="all">
    <h2>{m.rule_guide_index_all_heading()}</h2>
    <ul>
      {#each allPages as page (page.key)}
        <li class:child={depthOf(page) === 1}>
          <a href={hrefOf(page)}>{page.title}</a>
        </li>
      {/each}
    </ul>
    <p class="writing">{m.rule_guide_index_writing()}</p>
  </section>

  <GuideDisclaimer />
</article>

<style lang="scss">
  .index {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    width: 100%;
    max-width: 44em;

    /* 中央に寄せる。margin は使わない決まりなので論理プロパティで書く */
    margin-inline: auto;
    padding: $space-size-40 $space-size-16 $space-size-64;
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

  .all {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    padding-top: $space-size-24;

    ul {
      display: flex;
      flex-direction: column;
      gap: $space-size-4;
      line-height: 1.9;
      list-style: disc;
    }

    /* 子のページは1段下げて、親子の関係が見えるようにする */
    li {
      padding-left: $space-size-20;
    }

    li.child {
      padding-left: $space-size-40;
    }

    a {
      color: map.get($sky-blue, text);
    }
  }

  .writing {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }
</style>
