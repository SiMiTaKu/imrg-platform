<script context="module" lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import IndividualVideoCard from '../_components/IndividualVideoCard.svelte'
  import GroupVideoCard from '../_components/GroupVideoCard.svelte'
  import { type VideoResource } from '$views/page/oshimitsu/_models'
  import { onMount } from 'svelte'
  import { Video } from '../_lib'
</script>

<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'
  import { criteria } from '../_store/criteria'
  import { ContentType, findApparatus, findContentType } from '$views/page/oshimitsu/_models'

  let isLaunched = false
  let videos: VideoResource[] = []
  let totalVideos: number | undefined

  export let initCriteria: Video.Criteria | undefined = undefined

  onMount(() => {
    if (initCriteria) {
      criteria.set(initCriteria)
    } else {
      criteria.set(getCriteria(new URL(location.href)))
      const redirectUrl = getRedirectUrl($criteria, new URL(location.href))
      if (redirectUrl) {
        location.href = redirectUrl.href
      }
    }
    isLaunched = true
    videos = Video.filterVideos($criteria).items
    totalVideos = Video.filterVideos($criteria).total
  })

  /**
   * リダイレクト先URL取得
   * @param current 検索条件
   * @param url URL
   * @return リダイレクト先のURL | undefined
   * @remarks
   * URLから取得した検索条件が以下の条件を満たす場合、リダイレクト先のurlを返します。
   * 1. 手具が1つのみ選択されている
   *   - /oshimitsu/content_type/individual/apparatus/${apparatus.slug} にリダイレクト
   */
  const getRedirectUrl = (current: Video.Criteria, url: URL): URL | undefined => {
    if (current.apparatuses.length === 1) {
      return new URL(
        `/oshimitsu/content_type/individual/apparatus/${current.apparatuses[0].slug}`,
        url.origin,
      )
    }
    return undefined
  }

  /**
   * URLから検索条件を取得します。
   * @param url URL
   * @return 検索条件
   */
  const getCriteria = (url: URL): Video.Criteria => {
    const queryParams = {
      contentTypeSlug: url.searchParams.get('ct'), // ct = content type
      apparatusSlugs: url.searchParams.get('app')?.split(','), // app = apparatus
    }

    if (
      queryParams.apparatusSlugs &&
      queryParams.apparatusSlugs.some((slug) => findApparatus(slug))
    ) {
      return {
        contentType: ContentType.INDIVIDUAL,
        apparatuses: queryParams.apparatusSlugs.flatMap((slug) => findApparatus(slug) ?? []),
        exceptVideos: [],
      }
    }

    return {
      contentType: queryParams.contentTypeSlug
        ? findContentType(queryParams.contentTypeSlug)
        : undefined,
      apparatuses: [],
      exceptVideos: [],
    }
  }

  const getMoreVideos = () => {
    criteria.update({
      ...$criteria,
      exceptVideos: videos,
    })
    videos = videos.concat(Video.filterVideos($criteria).items)
  }

  const getTitle = () => {
    const oshimitsu = '推しミツ！'
    if ($criteria.apparatuses.length === 1) {
      return `${oshimitsu}（${$criteria.apparatuses[0].label}）`
    } else if ($criteria.apparatuses.length > 1) {
      return oshimitsu
    }
    return `${oshimitsu}${$criteria.contentType ? `（${$criteria.contentType.label}）` : ''}`
  }
</script>

<article class="article">
  <h1>{getTitle()}</h1>
  {#if isLaunched}
    <div class="cards">
      {#each videos as video, index (index)}
        {#if Video.isIndividualVideoResource(video)}
          <IndividualVideoCard {video} />
        {:else}
          <GroupVideoCard {video} />
        {/if}
      {/each}
    </div>
    {#if totalVideos && totalVideos > videos.length}
      <Button
        isMobile={$pageData.isMobile}
        width={$pageData.isMobile ? 280 : 340}
        height={56}
        text="もっと見る"
        onclick={getMoreVideos}
      />
    {:else}
      <p>※現在これ以上表示する動画はありません</p>
    {/if}
  {:else}
    <p>読み込み中...</p>
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
