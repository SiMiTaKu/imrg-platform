<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { VideoCard, type VideoResource } from '@entities/oshimitsuVideo'
  import {
    filterVideos,
    parseSearchQuery,
    redirectPath,
    toCriteria,
    type Criteria,
    type SearchQuery,
  } from '@features/oshimitsuSearch'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { onMount } from 'svelte'
  import { filterByName } from '../lib/keyword'
  import { searchResultTitle } from '../lib/title'
  import EmptyResult from './EmptyResult.svelte'
  import FilterNav from './FilterNav.svelte'

  interface Props {
    /**
     * 種類・手具のページの検索条件。検索結果のページ（`/oshimitsu/search_result/`）では渡さず、
     * ブラウザーで URL のクエリから読む
     */
    initialQuery?: SearchQuery
  }

  const { initialQuery }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  const locale = getLocale()

  /** 絞り込み条件。サーバーで書き出す HTML では空（見出しは「推しミツ！」、一覧は読み込み中） */
  let criteria = $state.raw<Criteria>({ apparatuses: [], exceptVideos: [] })
  let isLaunched = $state(false)
  let videos = $state.raw<VideoResource[]>([])
  let totalVideos = $state<number>()
  /** 選手・チーム名でさらにしぼるときの言葉。空ならしぼらない */
  let keyword = $state('')

  const title = $derived(searchResultTitle(criteria))
  /** 表示中の動画のうち、名前の言葉に合うもの */
  const visibleVideos = $derived(filterByName(videos, keyword, locale))
  /** まだ読み込んでいない動画が残っているか */
  const hasMore = $derived(totalVideos !== undefined && totalVideos > videos.length)

  // 並べ替えに乱数を使うので、一覧はブラウザーでだけ作る
  onMount(() => {
    const query = initialQuery ?? parseSearchQuery(new URL(location.href).searchParams)
    if (!initialQuery) {
      const redirect = redirectPath(query)
      if (redirect) location.href = localizeHref(redirect)
    }
    criteria = toCriteria(query)
    const result = filterVideos(criteria)
    videos = result.items
    totalVideos = result.total
    isLaunched = true
  })

  /** 表示済みの動画を除いて、次の動画を足す */
  const getMoreVideos = () => {
    criteria = { ...criteria, exceptVideos: videos }
    videos = [...videos, ...filterVideos(criteria).items]
  }
</script>

{#snippet keywordActions()}
  <button type="button" class="primary" onclick={() => (keyword = '')}>言葉を消して戻す</button>
  {#if hasMore}
    <button type="button" class="secondary" onclick={getMoreVideos}>
      {m.oshimitsu_load_more()}
    </button>
  {/if}
{/snippet}

<article class="result" class:mobile={isMobile}>
  <nav class="breadcrumb" aria-label="現在地">
    <a href={localizeHref(ROUTES.oshimitsu.index)}>
      <span aria-hidden="true">←</span>
      {m.oshimitsu_title()}
    </a>
  </nav>

  <header class="head">
    <!-- 見出しだけでは何の一覧か分からないので、上に一言置く -->
    <p class="kicker">男子新体操の演技動画</p>
    <h1>{title}</h1>
    {#if isLaunched && totalVideos !== undefined && totalVideos > 0}
      <p class="count">
        <strong>{totalVideos}</strong>本の動画が見つかりました。 いま{videos.length}本を表示しています。
      </p>
    {/if}
  </header>

  <FilterNav {criteria} />

  {#if !isLaunched}
    <p class="loading">{m.oshimitsu_loading()}</p>
    <ul class="cards" aria-hidden="true">
      {#each [0, 1, 2] as placeholder (placeholder)}
        <li><span class="skeleton"></span></li>
      {/each}
    </ul>
  {:else if totalVideos === 0}
    <EmptyResult
      title="この条件の動画は、まだありません"
      description="動画は少しずつ足しています。上の「手具」を変えるか、下から選び直せます。"
    />
  {:else}
    <div class="narrow">
      <label class="narrow-label" for="oshimitsu-keyword">選手・チーム名でしぼる</label>
      <input
        id="oshimitsu-keyword"
        class="narrow-input"
        type="search"
        bind:value={keyword}
        placeholder="例：青森大学、清水"
        autocomplete="off"
      />
      <span class="narrow-note">
        {#if keyword.trim() === ''}
          表示中の{videos.length}本から探します
        {:else}
          {visibleVideos.length}本が一致しました
        {/if}
      </span>
    </div>

    {#if visibleVideos.length === 0}
      <EmptyResult
        title="「{keyword}」は、表示中の動画にありません"
        description="名字だけ、学校名だけでも探せます。「もっと見る」で増やしてからも探せます。"
        actions={keywordActions}
      />
    {:else}
      <ul class="cards">
        {#each visibleVideos as video, index (index)}
          <li><VideoCard {video} /></li>
        {/each}
      </ul>
    {/if}

    <footer class="foot">
      {#if hasMore}
        <Button
          fontSize={isMobile ? 20 : 24}
          width={isMobile ? 280 : 340}
          height={56}
          text={m.oshimitsu_load_more()}
          onclick={getMoreVideos}
        />
      {:else}
        <p class="no-more">{m.oshimitsu_no_more_videos()}</p>
        <a class="other" href={localizeHref(ROUTES.oshimitsu.index)}>ほかの探し方を見る →</a>
      {/if}
    </footer>
  {/if}
</article>

<style lang="scss">
  .result {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-24 var(--content-padding-inline) $space-size-80;
    box-sizing: border-box;
  }

  .mobile.result {
    gap: $space-size-16;
    padding: $space-size-16 var(--content-padding-inline) $space-size-48;
  }

  /* ─── 現在地と見出し ─── */

  .breadcrumb a {
    display: inline-flex;
    gap: $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    align-items: center;
    text-decoration: none;
  }

  .head {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
  }

  .kicker {
    margin: 0;
    padding-left: $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);

    // 見出しの上の一言に、青の線を添える
    border-left: 3px solid map.get($sky-blue, border);
  }

  h1 {
    margin: 0;
    font-size: $font-size-30;
    overflow-wrap: anywhere;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  .count {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, 600);
  }

  .count strong {
    font-size: $font-size-18;
    color: map.get($sky-blue, text);
  }

  /* ─── 名前でしぼる ─── */

  .narrow {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8 $space-size-12;
    align-items: center;
  }

  .narrow-label {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }

  .narrow-input {
    flex: 1;
    min-inline-size: 0;
    min-height: 44px;
    padding: 0 $space-size-16;
    font-size: $font-size-16;
    border: 1px solid map.get($gray, 200);
    border-radius: 6px;
    background: $white;
    box-sizing: border-box;
  }

  .narrow-input:focus-visible {
    outline: 2px solid map.get($sky-blue, button);
    outline-offset: 1px;
  }

  .narrow-note {
    flex: none;
    font-size: $font-size-12;
    color: map.get($sky-blue, text);
  }

  /* ─── 0件のときに EmptyResult へ渡すボタン ─── */

  .primary,
  .secondary {
    display: inline-flex;
    min-height: 48px;
    padding: 0 $space-size-20;
    font-size: $font-size-14;
    font-weight: bold;
    border: 0;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .primary {
    color: $white;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 30%);
  }

  .secondary {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  /* ─── 動画の一覧 ─── */

  .cards {
    display: grid;
    gap: $space-size-24 $space-size-16;

    // 画面の幅に合わせて列を増やす。狭い画面でも横にはみ出さないよう min() で止める
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-items: center;
  }

  .cards li {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .loading {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
    text-align: center;
  }

  // 読み込み中の場所取り。高さを動画カードに合わせて、出たときにずれないようにする
  .skeleton {
    display: block;
    width: 343px;
    max-width: 100%;
    height: 194px;
    border-radius: 8px;
    background: map.get($gray, 100);
  }

  /* ─── 一覧の下 ─── */

  .foot {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    margin-top: $space-size-8;
    align-items: center;
  }

  .no-more {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .other {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }
</style>
