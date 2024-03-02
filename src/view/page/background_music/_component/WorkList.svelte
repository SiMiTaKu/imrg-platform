<script lang="ts" context="module">
  import YoutubeIcon from "./_image/youtube-icon.png?w=120;240&format=webp;jpg&as=meta";
  import TapIcon from "./_image/tap-icon.png?w=60;120&format=webp;jpg&as=meta";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";
</script>

<script lang="ts">
  import WithEnglishHeading from "../../../atomic/heading/WithEnglishHeading.svelte";
  import { WORK_LIST } from "./_data/work-list";
  import ImageAssets from "../../../atomic/image/ImageAssets.svelte";

  let screenWidth;
  let tapped = false;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="work-list"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <WithEnglishHeading title="過去の実績" englishTitle="Work List" />
  <ul class="cards">
    {#each WORK_LIST as work}
      <li class="card">
        <a class="link" href={work.youtube} target="_blank">
          <span class="name">{work.customerName}</span>
          <span class="apparatus">{work.apparatus}</span>
          <div class="youtube">
            <ImageAssets
              srcMeta={YoutubeIcon}
              alt="Youtubeアイコン"
              lazy={true}
            />
          </div>
          {#if !tapped}
            <button
              class="tap-icon"
              on:click={() => (tapped = true)}
              type="button"
            >
              <ImageAssets srcMeta={TapIcon} alt="タップアイコン" lazy={true} />
            </button>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --card-width: calc((100% - 16px * 4) / 5);
    --name-font-size: 30px;
    --apparatus-font-size: 20px;
  }

  .sp {
    --width: 90%;
    --card-width: calc((100% - 16px) / 2);
    --name-font-size: 20px;
    --apparatus-font-size: 16px;
  }

  .work-list {
    width: var(--width);
    margin: 0 auto;
  }

  .cards {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .card {
    width: var(--card-width);
    padding: 24px 0 8px;
    box-shadow: 0 0 10px #00000055;
    border-radius: 8px;
  }

  .link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-decoration: none;
  }

  .name {
    font-size: var(--name-font-size);
    line-height: var(--name-font-size);
    font-weight: bold;
    color: #333333;
  }

  .apparatus {
    font-size: var(--apparatus-font-size);
    line-height: var(--apparatus-font-size);
    font-weight: bold;
    color: #555555;
  }

  .youtube {
    display: block;
    width: 40px;
  }

  .tap-icon {
    position: absolute;
    border: none;
    background: transparent;
    animation: tap-icon-animation 2s infinite;

    :global(img) {
      object-fit: cover;
    }
  }

  @keyframes tap-icon-animation {
    0% {
      width: 40px;
      height: 40px;
      bottom: -4px;
      right: 0;
    }

    50% {
      width: 30px;
      height: 30px;
      bottom: 0;
      right: 4px;
    }

    100% {
      width: 40px;
      height: 40px;
      bottom: -4px;
      right: 0;
    }
  }
</style>
