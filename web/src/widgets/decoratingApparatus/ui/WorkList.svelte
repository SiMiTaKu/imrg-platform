<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { Apparatus } from '@shared/config/apparatus'
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@features/sectionHeading'
  import { WORKS_HEADING } from '../config/content'
  import { WORK_LIST } from '../config/workList'
  import WorkTile from './WorkTile.svelte'
  import WorkViewer from './WorkViewer.svelte'

  const isMobile = $derived($pageData.isMobile)

  /** 絞り込みのボタン（すべて・スティック・リング・クラブ） */
  const FILTERS = [Apparatus.STICK, Apparatus.RING, Apparatus.CLUB]

  /** 絞り込んでいる手具。null はすべて */
  let selected = $state<string | null>(null)

  /** 大きく見ている作品の番号（0 始まり）。null は閉じている */
  let openedIndex = $state<number | null>(null)
</script>

<section class="work-list" class:mobile={isMobile} id="works">
  <div class="inner">
    <SectionHeading
      eyebrow={WORKS_HEADING.eyebrow()}
      title={m.decorating_apparatus_work_list_title()}
      lead={WORKS_HEADING.lead()}
    />
  </div>

  <!-- 手具ごとに絞り込む。絞り込みは画面の中だけで、URL は変えない -->
  <div class="filters" role="group" aria-label={m.decorating_apparatus_filter_label()}>
    <ul>
      <li>
        <button
          type="button"
          class="chip"
          class:current={selected === null}
          aria-pressed={selected === null}
          onclick={() => (selected = null)}
        >
          {m.decorating_apparatus_filter_all()}
        </button>
      </li>
      {#each FILTERS as apparatus (apparatus.slug)}
        {@const current = selected === apparatus.slug}
        <li>
          <button
            type="button"
            class="chip"
            class:current
            aria-pressed={current}
            onclick={() => (selected = apparatus.slug)}
          >
            {apparatus.label()}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <!-- 作例は写真だけを隙間なく並べる。左右の余白も取らず、画面の端まで敷き詰める -->
  <ul class="list">
    {#each WORK_LIST as work, index (index)}
      {#if selected === null || work.apparatus.slug === selected}
        <WorkTile
          images={work.images}
          alt={m.decorating_apparatus_work_image_alt({ work: index + 1, image: 1 })}
          onOpen={() => (openedIndex = index)}
        />
      {/if}
    {/each}
  </ul>

  {#if openedIndex !== null}
    <WorkViewer
      images={WORK_LIST[openedIndex].images}
      alt={m.decorating_apparatus_work_image_alt({ work: openedIndex + 1, image: 1 })}
      workNumber={openedIndex + 1}
      onClose={() => (openedIndex = null)}
    />
  {/if}
</section>

<style lang="scss">
  .work-list {
    width: 100%;
    background: map.get($sky-blue, background);
  }

  // 見出しだけが、サイトの決まりどおりの余白を持つ
  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline) 0;
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline) 0;
  }

  .filters {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-24 var(--content-padding-inline) $space-size-24;
    box-sizing: border-box;
  }

  .mobile .filters {
    padding: $space-size-16 var(--content-padding-inline);
  }

  // 見出しが中央寄せなので、ボタンも中央にそろえる
  .filters ul {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  // 推しミツ！の絞り込み（FilterNav）と同じ見た目にそろえる
  .chip {
    display: inline-flex;
    min-height: 40px;
    padding: 0 $space-size-16;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, 600);
    border: 1px solid map.get($gray, 200);
    border-radius: 999px;
    background: $white;
    cursor: pointer;
    transition:
      border-color 0.15s ease,
      background 0.15s ease;
    align-items: center;
    box-sizing: border-box;
  }

  .chip:hover {
    border-color: map.get($sky-blue, border);
    background: map.get($sky-blue, background);
  }

  .chip.current {
    color: $white;
    border-color: map.get($sky-blue, button);
    background: map.get($sky-blue, button);
  }

  .list {
    display: grid;
    gap: 0;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
