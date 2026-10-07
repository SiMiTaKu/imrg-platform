<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { APPARATUSES } from '@shared/config/apparatus'
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@features/sectionHeading'
  import { WORKS_HEADING } from '../config/content'
  import { WORK_LIST } from '../config/workList'
  import { apparatusCounts, filterByApparatus, groupByApparatus, numberWorks } from '../lib/works'
  import WorkTile from './WorkTile.svelte'
  import WorkViewer from './WorkViewer.svelte'

  const isMobile = $derived($pageData.isMobile)

  /** 番号は WORK_LIST の並びで決まり、手具ごとに並べ替えても変えない */
  const WORKS = groupByApparatus(numberWorks(WORK_LIST), APPARATUSES)
  /** 作品のある手具だけをボタンにする（作品の無い手具は出さない） */
  const FILTERS = apparatusCounts(WORKS, APPARATUSES)

  /** 絞り込んでいる手具。null はすべて */
  let selected = $state<string | null>(null)
  const shown = $derived(filterByApparatus(WORKS, selected))

  /** 大きく見ている作品。null は閉じている */
  let opened = $state<(typeof WORKS)[number] | null>(null)
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
          {m.decorating_apparatus_filter_all()}<span class="count">{WORKS.length}</span>
        </button>
      </li>
      {#each FILTERS as { apparatus, count } (apparatus.slug)}
        {@const current = selected === apparatus.slug}
        <li>
          <button
            type="button"
            class="chip"
            class:current
            aria-pressed={current}
            onclick={() => (selected = apparatus.slug)}
          >
            {apparatus.label()}<span class="count">{count}</span>
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <!-- 作例は写真だけを隙間なく並べる。左右の余白も取らず、画面の端まで敷き詰める -->
  <ul class="list">
    {#each shown as work (work.number)}
      <WorkTile
        images={work.images}
        alt={m.decorating_apparatus_work_image_alt({ work: work.number, image: 1 })}
        onOpen={() => (opened = work)}
      />
    {/each}
  </ul>

  {#if opened !== null}
    <WorkViewer
      images={opened.images}
      alt={m.decorating_apparatus_work_image_alt({ work: opened.number, image: 1 })}
      workNumber={opened.number}
      onClose={() => (opened = null)}
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
    gap: $space-size-8;
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

  .count {
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .chip.current .count {
    color: map.get($sky-blue, 100);
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
