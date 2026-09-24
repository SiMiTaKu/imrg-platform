<script lang="ts">
  import { OshimitsuSearchForm } from '@features/oshimitsuSearch'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { apparatusEntries, contentTypeEntries } from '../lib/entries'

  const isMobile = $derived($pageData.isMobile)
  /** 個人・団体の入口 */
  const contentTypes = $derived(contentTypeEntries())
  /** 手具の入口 */
  const apparatuses = $derived(apparatusEntries())

  /**
   * 本数の表記を返す
   * @param count - 動画の本数
   * @returns 表示中の言語での本数の表記（1本のときの言い方が別にある言語に合わせる）
   */
  const videoCount = (count: number): string =>
    count === 1 ? m.oshimitsu_ways_count_one({ count }) : m.oshimitsu_ways_count_other({ count })
</script>

<section class="ways" class:mobile={isMobile} id="search">
  <div class="inner">
    <header class="head">
      <h2>{m.oshimitsu_ways_title()}</h2>
      <p>{m.oshimitsu_ways_lead()}</p>
    </header>

    <h3 class="label">
      <span class="step">1</span>
      <span class="text">{m.oshimitsu_ways_step_content_type()}</span>
    </h3>
    <ul class="types">
      {#each contentTypes as entry (entry.id)}
        <li>
          <a href={localizeHref(entry.href)}>
            <!-- 札と名前は1行に。札を上に積むと card が縦に伸びる -->
            <span class="card-head">
              {#if entry.badge}
                <span class="badge">{entry.badge}</span>
              {/if}
              <span class="name">{entry.label}</span>
            </span>
            <span class="description">{entry.description}</span>
            <!-- 本数と矢印は、本文の下に置く。重ねない -->
            <span class="foot">
              <span class="count">{videoCount(entry.count)}</span>
              <span class="arrow" aria-hidden="true"></span>
            </span>
          </a>
        </li>
      {/each}
    </ul>

    <h3 class="label">
      <span class="step">2</span>
      <span class="text">{m.oshimitsu_ways_step_apparatus()}</span>
    </h3>
    <ul class="apparatuses">
      {#each apparatuses as entry (entry.id)}
        <li>
          <a href={localizeHref(entry.href)}>
            <!-- 名前・本数・矢印を1行に。行が減った分だけ card が縮む -->
            <span class="card-head">
              <span class="name">{entry.label}</span>
              <span class="count">{videoCount(entry.count)}</span>
              <span class="arrow" aria-hidden="true"></span>
            </span>
            <span class="description">{entry.description}</span>
          </a>
        </li>
      {/each}
    </ul>

    <h3 class="label">
      <span class="step">3</span>
      <span class="text">{m.oshimitsu_ways_step_form()}</span>
    </h3>
    <div class="form">
      <p class="form-note">{m.oshimitsu_ways_form_note()}</p>
      <div class="form-body">
        <OshimitsuSearchForm />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .ways {
    width: 100%;
    background: $white;
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-64 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-40 var(--content-padding-inline);
  }

  .head {
    margin-bottom: $space-size-32;
    text-align: center;
  }

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-30;
  }

  .mobile h2 {
    font-size: $font-size-24;
  }

  .head p {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, light-text);
  }

  /* ─── 「1」「2」「3」の見出し ─── */

  .label {
    display: flex;
    gap: $space-size-8;
    margin: $space-size-32 0 $space-size-16;
    font-size: $font-size-18;
    align-items: center;
  }

  .mobile .label {
    font-size: $font-size-16;
  }

  .step {
    display: grid;
    flex: none;
    width: 28px;
    height: 28px;
    font-size: $font-size-14;
    color: $white;

    // 順番は青で塗って示す
    border-radius: 999px;
    background: map.get($sky-blue, button);
    place-items: center;
  }

  .label .text {
    min-inline-size: 0;
  }

  /* ─── 個人・団体のカード ─── */

  .types {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .types {
    grid-template-columns: 1fr;
  }

  // カードは縦積みにする。重ねると崩れるので position で重ねない
  .types a {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    height: 100%;
    padding: $space-size-20;
    color: inherit;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
    text-decoration: none;
    box-sizing: border-box;
  }

  // カードの名前の行。手具のほうは本数と矢印も同じ行へ送る
  // 節の見出しの .head とは別物なので名前を分ける
  .card-head {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-8;
    align-items: baseline;
  }

  .apparatuses .count {
    margin-left: auto;
  }

  .types a:hover {
    border-color: map.get($sky-blue, border);
    transform: translateY(-2px);
  }

  .badge {
    flex: none;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    letter-spacing: 0.06em;
  }

  .types .name {
    font-size: $font-size-24;
    font-weight: bold;
    min-inline-size: 0;
  }

  .types .description {
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.85;
    overflow-wrap: anywhere;
  }

  /* ─── 手具のカード ─── */

  .apparatuses {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .apparatuses {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .apparatuses a {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    height: 100%;
    padding: $space-size-16;
    color: inherit;
    border: 1px solid map.get($gray, 100);

    // 上辺だけ濃い青を差して、種類のカードと見分ける
    border-top: 3px solid map.get($sky-blue, border);
    border-radius: 8px;
    background: $white;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
    text-decoration: none;
    box-sizing: border-box;
  }

  .apparatuses a:hover {
    border-color: map.get($sky-blue, button);
    transform: translateY(-2px);
  }

  .apparatuses .name {
    font-size: $font-size-18;
    font-weight: bold;
    min-inline-size: 0;
  }

  .apparatuses .description {
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  /* ─── 本数と矢印（カードのいちばん下） ─── */

  .foot {
    display: flex;
    gap: $space-size-8;

    // カードの高さが違っても、下辺で揃える（重ねずに下へ送る）
    margin-top: auto;
    padding-top: $space-size-8;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  // 右を向いた三角。枠線だけで描くので、字体によって形が変わらない
  .arrow {
    flex: none;
    align-self: center;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid map.get($sky-blue, button);
  }

  /* ─── 条件を組み合わせるフォーム ─── */

  .form {
    padding: $space-size-24;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: map.get($gray, background);
  }

  .mobile .form {
    padding: $space-size-16;
  }

  .form-note {
    margin: 0 0 $space-size-16;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }

  .form-body {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    align-items: flex-start;
  }

  .mobile .form-body {
    align-items: center;
  }
</style>
