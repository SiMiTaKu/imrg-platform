<script context='module' lang='ts'>
  import IndividualVideoCard from "./_components/IndividualVideoCard.svelte"
  import GroupVideoCard from "./_components/GroupVideoCard.svelte"
  import Button from "$views/atomic/button/Button.svelte"
  import { Video } from "./_lib"
  import { ContentType } from "$views/page/oshimitsu/_models"

  const ContentTypes = Object.values(ContentType)
</script>

<script lang='ts'>
  import { pageData } from "$views/atomic/device-store/store"

  let videos = Video.filterVideos().items

  let criteria: Video.Criteria = { contentType: undefined }

  const clickSearchButton = () => {
    const href = criteria.contentType
      ? `/oshimitsu/content_type/${criteria.contentType.slug}`
      : "/oshimitsu/search_result"
    window.location.href = href
  }
</script>

<article class='article'>
  <h1>推しミツ！</h1>
  <p>
    推しミツは、男子新体操に関する動画専用の検索機能です。<br />
    あなたがまだ知らない男子新体操の世界や魅力を見つけに行こう！
  </p>
  <fieldset>
    <legend>動画種別</legend>
    {#each ContentTypes as type, index (index)}
      <label>
        <input
          name='contentType'
          type='radio'
          value={type.slug}
          on:change={() => {
            criteria.contentType = type
          }}
        />
        {type.label}
      </label>
    {/each}
  </fieldset>
  <Button
    width={$pageData.isMobile ? 320 : 400}
    height={56}
    text='この条件で推しを見つける！'
    on:click={clickSearchButton}
  />
  <div class='cards'>
    {#each videos as video, index (index)}
      {#if Video.isIndividualVideoResource(video)}
        <IndividualVideoCard {video} />
      {:else}
        <GroupVideoCard {video} />
      {/if}
    {/each}
  </div>
  {#if Video.filterVideos().total > videos.length}
    <Button
      width={$pageData.isMobile ? 280 : 340}
      height={56}
      text='もっと見る'
      on:click={() => {
        videos = videos.concat(
          Video.filterVideos({ exceptVideos: videos }).items
        )
      }}
    />
  {:else}
    <p>※現在これ以上表示する動画はありません</p>
  {/if}
</article>

<style lang='scss'>
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
