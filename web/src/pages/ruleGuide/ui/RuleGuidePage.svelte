<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import type { GuidePage } from '@entities/ruleGuide'
  import { guideKeyToPath, guideUpKey } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideBlocks, GuideDisclaimer } from '@widgets/ruleGuide'

  /** ルールの解説の1ページ */
  interface Props {
    /** 出すページ */
    page: GuidePage
    /** すぐ下にぶら下がるページ。本文があるものだけ渡ってくる */
    children: readonly GuidePage[]
  }

  const { page, children }: Props = $props()

  const isMobile = $derived($pageData.isMobile)

  /*
    上へ戻る先。まだ書いていない親を飛ばして、本文のあるいちばん近い先祖へ戻す。
    見つからなければ解説の入口へ。書いていないページへのリンクを出さないための決まり
  */
  const up = $derived(guideUpKey(page.key))
  const upHref = $derived(
    up === undefined
      ? localizeHref(ROUTES.rules.index)
      : localizeHref(ROUTES.rules.page(guideKeyToPath(up))),
  )
</script>

<article class="guide" class:mobile={isMobile}>
  <nav class="up">
    <a href={upHref}>{m.rule_guide_breadcrumb_top()}</a>
  </nav>

  <h1>{page.title}</h1>

  <!-- 最初の答え。検索から来た人はここだけ読んで帰れるようにする -->
  <p class="lead">{page.lead}</p>

  <GuideBlocks blocks={page.blocks} />

  {#if children.length > 0}
    <section class="children">
      <h2>{m.rule_guide_children_heading()}</h2>
      <ul>
        {#each children as child (child.key)}
          <li>
            <a href={localizeHref(ROUTES.rules.page(guideKeyToPath(child.key)))}>{child.title}</a>
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  <!-- 断り書き。ページの型（GuidePage.disclaimer）で必須にしてある -->
  <GuideDisclaimer />

  <div class="back">
    <Button
      href={localizeHref(ROUTES.rules.index)}
      target="_self"
      width={isMobile ? 'full' : 'auto'}
      size="medium"
      variant="sky-blue">{m.rule_guide_breadcrumb_top()}</Button
    >
  </div>
</article>

<style lang="scss">
  /* 縦の間隔は gap で作る。margin はこのリポジトリーでは使わない決まり */
  .guide {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    width: 100%;
    max-width: 44em;

    /* 中央に寄せる。margin は使わない決まりなので論理プロパティで書く */
    margin-inline: auto;
    padding: $space-size-40 $space-size-16 $space-size-64;
  }

  .up {
    font-size: $font-size-14;

    a {
      color: map.get($gray, light-text);
    }
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
    font-weight: bold;
    line-height: 1.9;
  }

  .mobile .lead {
    font-size: $font-size-16;
  }

  .children {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    padding-top: $space-size-24;

    h2 {
      font-size: $font-size-20;
    }

    ul {
      padding-left: $space-size-20;
      line-height: 2;
    }

    a {
      color: map.get($sky-blue, text);
    }
  }

  .back {
    display: flex;
    justify-content: center;
    padding-top: $space-size-24;
  }
</style>
