<script context='module' lang='ts'>
  import IndividualVideoCard from "./_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "./_components/GroupVideoCard.svelte"
  import ButtonLink from "$views/atomic/button/ButtonLink.svelte"
  import RadioFieldset from "./_components/RadioFieldset.svelte"
  import { Video } from "./_lib"
  import { Apparatus, ContentType } from "$views/page/oshimitsu/_models"

  const CONTENT_TYPE_OPTIONS = Object.values(ContentType).map((type) => ({
    label: type.label,
    value: type.slug,
  }))

  const APPARATUS_OPTIONS = Object.values(Apparatus).map((apparatus) => ({
    label: apparatus.label,
    value: apparatus.slug,
  }))
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"
  import {
    findApparatus,
    // findApparatus,
    findContentType,
  } from "$views/page/oshimitsu/_models/index.js"
  import CheckBoxFieldset from "$views/page/oshimitsu/_components/CheckBoxFieldset.svelte"

  let criteria: Video.Criteria = {
    contentType: undefined,
    apparatuses: [],
    exceptVideos: [],
  }

  $: searchHref =
    criteria.contentType === ContentType.INDIVIDUAL
      ? criteria.apparatuses
        ? criteria.apparatuses.length === 1
          ? `/oshimitsu/content_type/${criteria.contentType.slug}/apparatus/${criteria.apparatuses[0].slug}`
          : `/oshimitsu/search_result?ct=${criteria.contentType.slug}&app=${criteria.apparatuses.map((apparatus) => apparatus.slug).join(",")}`
        : `/oshimitsu/content_type/${criteria.contentType.slug}`
      : "/oshimitsu/search_result"

  const onChangeApparatus = (
    event: CustomEvent<{ value: string; checked: boolean }>
  ) => {
    criteria.apparatuses = event.detail.checked
      ? [ ...criteria.apparatuses, findApparatus(event.detail.value)! ]
      : criteria.apparatuses.filter(
        (apparatus) => apparatus.slug !== event.detail.value
      )
  }
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
      options={CONTENT_TYPE_OPTIONS}
      on:change={(event) => {
        criteria.contentType = findContentType(event.detail.value)
      }}
    />
    {#if criteria.contentType === ContentType.INDIVIDUAL}
      <CheckBoxFieldset
        legendText='手具'
        name='apparatus'
        options={APPARATUS_OPTIONS}
        on:change={onChangeApparatus}
      />
    {/if}
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
