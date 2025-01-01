<script context='module' lang='ts'>
  import IndividualVideoCard from "./_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "./_components/GroupVideoCard.svelte"
  import ButtonLink from "$views/atomic/button/ButtonLink.svelte"
  import RadioFieldset from "./_components/RadioFieldset.svelte"
  import { Video } from "./_lib"
  import { ContentType } from "$views/page/oshimitsu/_models"

  const contentTypeOptions = Object.values(ContentType).map((type) => ({
    label: type.label,
    value: type.slug,
  }))
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
  import { findContentType } from "$views/page/oshimitsu/_models/index.js"

  let criteria: Video.Criteria = { contentType: undefined }

  $: searchHref = criteria.contentType
    ? `/oshimitsu/content_type/${criteria.contentType.slug}`
    : "/oshimitsu/search_result"
</script>

<article class='article'>
  <section class='section'>
    <h1>推しミツ！</h1>
    <p>
      推しミツは、男子新体操に関する動画専用の検索機能です。<br />
      あなたがまだ知らない男子新体操の世界や魅力を見つけに行こう！
    </p>
  </section>
  <section class='section'>
    <RadioFieldset
      legendText='動画種別'
      name='contentType'
      options={contentTypeOptions}
      on:change={(event) => {
        criteria.contentType = findContentType(event.detail.value)
      }}
    />
    <ButtonLink
      width={$pageData.isMobile ? 320 : 343}
      height={56}
      text='この条件で推しミツ！'
      href={searchHref}
    />
  </section>
  <section class='section'>
    <h2 class='h2'>おすすめ動画</h2>
    {#each Video.getRecommendedVideos() as video, index (index)}
      {#if Video.isIndividualVideoResource(video)}
        <IndividualVideoCard {video} />
      {:else}
        <GroupVideoCard {video} />
      {/if}
    {/each}
  </section>
</article>

<style lang='scss'>
  .article {
    display: grid;
    gap: $space-size-40;
    place-items: center;
    padding: $space-size-40 $space-size-16;
  }

  .section {
    display: grid;
    gap: $space-size-16;
    place-items: center;
  }

  .h2 {
    font-size: $font-size-30;
    font-weight: bold;
  }
</style>
