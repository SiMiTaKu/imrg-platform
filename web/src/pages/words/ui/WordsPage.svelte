<script lang="ts">
  import type { GlossaryGroup } from '@entities/glossary'
  import { matchesGlossaryTerm } from '@entities/glossary'
  import type { GuideKey } from '@entities/ruleGuide'
  import { guideKeyToPath } from '@entities/ruleGuide'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { GuideDisclaimer } from '@widgets/ruleGuide'

  /** 用語集 */
  interface Props {
    /** まとまりごとの用語 */
    groups: readonly GlossaryGroup[]
    /** 本文のあるルールの解説の鍵。ここにある鍵だけリンクにする */
    publishedKeys: readonly GuideKey[]
  }

  const { groups, publishedKeys }: Props = $props()

  /**
   * 用語が指すルールの解説のリンク先を作る
   * @param to - 用語が持つ解説の鍵
   * @returns 本文のある解説ならそのパス。無ければ `undefined`（リンクを出さない）
   */
  const guideHrefOf = (to: string | undefined): string | undefined => {
    const key = publishedKeys.find((published) => published === to)
    return key === undefined ? undefined : localizeHref(ROUTES.rules.page(guideKeyToPath(key)))
  }

  const isMobile = $derived($pageData.isMobile)

  /* 探す言葉。打つたびに絞り込む。サーバーへは行かない */
  let keyword = $state('')

  const filtered = $derived(
    groups
      .map((group) => ({
        ...group,
        terms: group.terms.filter((term) => matchesGlossaryTerm(term, keyword)),
      }))
      .filter((group) => group.terms.length > 0),
  )

  const foundCount = $derived(filtered.reduce((total, group) => total + group.terms.length, 0))
</script>

<article class="words" class:mobile={isMobile}>
  <h1>{m.words_title()}</h1>
  <p class="lead">{m.words_lead()}</p>

  <div class="search">
    <label for="glossary-search">{m.words_search_label()}</label>
    <div class="field">
      <input
        id="glossary-search"
        type="search"
        bind:value={keyword}
        placeholder={m.words_search_placeholder()}
        autocomplete="off"
      />
      {#if keyword !== ''}
        <button type="button" onclick={() => (keyword = '')}>
          {m.words_clear()}
        </button>
      {/if}
    </div>
    <p class="found">{m.words_found({ count: foundCount })}</p>
  </div>

  {#if foundCount === 0}
    <p class="empty">{m.words_empty({ keyword })}</p>
  {/if}

  {#each filtered as group (group.name)}
    <section class="group">
      <h2>{group.name}</h2>
      <dl>
        {#each group.terms as term (term.slug)}
          {@const guideHref = guideHrefOf(term.to)}
          <!-- 位置の目印。語ごとのページができるまでは /words/#<slug> で直接開ける -->
          <div class="term" id={term.slug}>
            <dt>
              {term.term}
              {#if term.reading}<span class="reading">{term.reading}</span>{/if}
            </dt>
            <dd>
              {term.summary}
              {#if guideHref}
                <a href={guideHref}>{m.words_detail()}</a>
              {/if}
            </dd>
          </div>
        {/each}
      </dl>
    </section>
  {/each}

  <GuideDisclaimer />
</article>

<style lang="scss">
  .words {
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
    font-size: $font-size-16;
    line-height: 1.9;
  }

  .search {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-16;
    border-radius: $border-radius-8;
    background-color: map.get($sky-blue, background);
    flex-direction: column;

    label {
      font-size: $font-size-14;
      font-weight: bold;
    }
  }

  .field {
    display: flex;
    gap: $space-size-8;

    input {
      min-width: 0;
      padding: $space-size-12;
      font-size: $font-size-16;
      border: $border-size-1 solid map.get($gray, border);
      border-radius: $border-radius-4;
      background-color: $white;
      flex: 1 1 auto;

      &:focus-visible {
        outline: $border-size-2 solid map.get($sky-blue, button);
      }
    }

    button {
      padding: 0 $space-size-12;
      font-size: $font-size-14;
      color: map.get($sky-blue, text);
      border: $border-size-1 solid map.get($gray, border);
      border-radius: $border-radius-4;
      background-color: $white;
      cursor: pointer;
    }
  }

  .found {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .empty {
    padding: $space-size-24;
    font-size: $font-size-16;
    text-align: center;
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding-top: $space-size-16;

    h2 {
      font-size: $font-size-20;
    }
  }

  dl {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
  }

  .term {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    padding: $space-size-12 $space-size-16;
    border: $border-size-1 solid map.get($gray, border);
    border-radius: $border-radius-8;
  }

  dt {
    font-size: $font-size-16;
    font-weight: bold;
  }

  .reading {
    padding-left: $space-size-8;
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  dd {
    font-size: $font-size-14;
    line-height: 1.8;

    a {
      padding-left: $space-size-4;
      color: map.get($sky-blue, text);
      white-space: nowrap;
    }
  }
</style>
