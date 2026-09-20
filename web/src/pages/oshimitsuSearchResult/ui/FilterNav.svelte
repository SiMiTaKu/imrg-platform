<script lang="ts">
  import { ContentType } from '@entities/oshimitsuVideo'
  import type { Criteria } from '@features/oshimitsuSearch'
  import { APPARATUSES } from '@shared/config/apparatus'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  interface Props {
    /** いま表示している絞り込み条件 */
    criteria: Criteria
  }

  const { criteria }: Props = $props()

  const isMobile = $derived($pageData.isMobile)

  /** 何も絞り込んでいないか */
  const isAll = $derived(!criteria.contentType && criteria.apparatuses.length === 0)
  /** 手具を付けずに種類だけを選んでいるときの、その種類の slug */
  const selectedContentType = $derived(
    criteria.apparatuses.length === 0 ? criteria.contentType?.slug : undefined,
  )
  /** 手具を1つだけ選んでいるときの、その手具の slug */
  const selectedApparatus = $derived(
    criteria.apparatuses.length === 1 ? criteria.apparatuses[0].slug : undefined,
  )
</script>

<!-- いまの条件を示しつつ、ここから別の条件へ移れるようにする。0件のときの逃げ道にもなる -->
<nav class="filters" class:mobile={isMobile} aria-label="絞り込み">
  <div class="row">
    <span class="row-label">種類</span>
    <ul>
      <li>
        <a
          class="chip"
          class:current={isAll}
          aria-current={isAll ? 'page' : undefined}
          href={localizeHref(ROUTES.oshimitsu.searchResult)}
        >
          すべて
        </a>
      </li>
      {#each Object.values(ContentType) as contentType (contentType.slug)}
        {@const current = selectedContentType === contentType.slug}
        <li>
          <a
            class="chip"
            class:current
            aria-current={current ? 'page' : undefined}
            href={localizeHref(ROUTES.oshimitsu.contentType(contentType.slug))}
          >
            {contentType.label()}
            <span class="hint">
              {contentType.slug === ContentType.INDIVIDUAL.slug ? '選手' : 'チーム'}
            </span>
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="row">
    <span class="row-label">手具</span>
    <ul>
      {#each APPARATUSES as apparatus (apparatus.slug)}
        {@const current = selectedApparatus === apparatus.slug}
        <li>
          <a
            class="chip apparatus"
            class:current
            aria-current={current ? 'page' : undefined}
            href={localizeHref(ROUTES.oshimitsu.apparatus(apparatus.slug))}
          >
            {apparatus.label()}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style lang="scss">
  .filters {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    width: 100%;
    padding: $space-size-16 $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    box-sizing: border-box;
  }

  .mobile.filters {
    padding: $space-size-12;
  }

  .row {
    display: flex;
    gap: $space-size-12;
    align-items: baseline;
  }

  .mobile .row {
    flex-direction: column;
    gap: $space-size-8;
    align-items: stretch;
  }

  .row-label {
    flex: none;
    width: 3em;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .chip {
    display: inline-flex;
    gap: $space-size-4;
    min-height: 40px;
    padding: 0 $space-size-16;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, 600);
    border: 1px solid map.get($gray, 200);
    border-radius: 999px;
    background: $white;
    transition:
      border-color 0.15s ease,
      background 0.15s ease;
    align-items: center;
    text-decoration: none;
    box-sizing: border-box;
  }

  .chip:hover {
    border-color: map.get($sky-blue, border);
    background: map.get($sky-blue, background);
  }

  // いま見ている条件は青で塗る。信頼・情報の色
  .chip.current {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }

  .hint {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .chip.current .hint {
    color: map.get($sky-blue, 100);
  }

  // 手具も種類と同じ青でそろえる
  .chip.apparatus:hover {
    border-color: map.get($sky-blue, border);
    background: map.get($sky-blue, background);
  }

  .chip.apparatus.current {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }
</style>
