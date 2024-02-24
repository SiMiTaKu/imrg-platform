<script lang="ts" context="module">
  import { SNS } from "./_data/contents-footer-data";
  import ImageAssets from "../atomic/image/ImageAssets.svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../ts/common/responsive-design";
</script>

<script lang="ts">
  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="contents-footer"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <div class="container">
    <div class="sns">
      {#each SNS as sns}
        <a
          class="item"
          href={sns.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="icon">
            <ImageAssets
              srcMeta={sns.icon.srcMeta}
              height="auto"
              alt={sns.icon.alt}
              lazy={true}
            />
          </div>
          {sns.name}
        </a>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --icon-size: 64px;
    --sns-gap: 16px;
    --item-font-size: 16px;
  }

  .sp {
    --width: 90%;
    --icon-size: 32px;
    --sns-gap: 8px;
    --item-font-size: 14px;
  }

  .contents-footer {
    padding: 40px 0;
    background-color: #eeeeee;
  }

  .container {
    width: var(--width);
    margin: 0 auto;
  }

  .sns {
    display: flex;
    gap: var(--sns-gap);
    width: 100%;
  }

  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    text-decoration: none;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: #777777;
  }

  .icon {
    display: flex;
    align-items: center;
    width: var(--icon-size);
    height: var(--icon-size);
  }
</style>
