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
  import { localizeHref } from '@shared/lib/i18n'
  import { onMount } from 'svelte'
  import { searchResultTitle } from '../lib/title'

  interface Props {
    /**
     * 種類・手具のページの検索条件。検索結果のページ（`/oshimitsu/search_result/`）では渡さず、
     * ブラウザーで URL のクエリから読む
     */
    initialQuery?: SearchQuery
  }

  const { initialQuery }: Props = $props()

  /** 絞り込み条件。サーバーで書き出す HTML では空（見出しは「推しミツ！」、一覧は読み込み中） */
  let criteria = $state.raw<Criteria>({ apparatuses: [], exceptVideos: [] })
  let isLaunched = $state(false)
  let videos = $state.raw<VideoResource[]>([])
  let totalVideos = $state<number>()

  const title = $derived(searchResultTitle(criteria))

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

<article class="article">
  <h1>{title}</h1>
  {#if isLaunched}
    <div class="cards">
      {#each videos as video, index (index)}
        <VideoCard {video} />
      {/each}
    </div>
    {#if totalVideos && totalVideos > videos.length}
      <Button
        fontSize={$pageData.isMobile ? 20 : 24}
        width={$pageData.isMobile ? 280 : 340}
        height={56}
        text={m.oshimitsu_load_more()}
        onclick={getMoreVideos}
      />
    {:else}
      <p>{m.oshimitsu_no_more_videos()}</p>
    {/if}
  {:else}
    <p>{m.oshimitsu_loading()}</p>
  {/if}
</article>

<style lang="scss">
  .article {
    display: grid;
    gap: $space-size-16;
    place-items: center;
    padding: $space-size-40 $space-size-16;
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    place-items: center;
  }
</style>
