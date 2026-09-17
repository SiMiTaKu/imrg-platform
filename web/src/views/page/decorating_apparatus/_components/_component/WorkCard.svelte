<script context="module" lang="ts">
  import ImageAssets from '$views/atomic/image/ImageAssets.svelte'
  import type { SrcMeta } from '$views/atomic/image/ImageAssets.svelte'
</script>

<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'
  import { fade } from 'svelte/transition'

  export let images: SrcMeta[][] = []
  export let workIndex: number

  let frontImageIndex = 0
  let backImageIndex = (frontImageIndex + 1) % images.length
  let flipped = false

  const flip = () => {
    flipped = !flipped

    if (flipped) {
      frontImageIndex = (backImageIndex + 1) % images.length
    } else {
      backImageIndex = (frontImageIndex + 1) % images.length
    }
  }
</script>

<button class="card" class:flipped type="button" on:click={flip}>
  {#if !flipped}
    <div class="front" in:fade={{ delay: 250, duration: 200 }} out:fade>
      <ImageAssets
        width={$pageData.isMobile ? 338 : 331}
        height={$pageData.isMobile ? 338 : 331}
        alt={`過去の作品${workIndex + 1}_${frontImageIndex + 1}画像`}
        lazy={true}
        srcMeta={images[frontImageIndex]}
        objectFit="cover"
      />
    </div>
  {:else}
    <div class="back" in:fade={{ delay: 250, duration: 200 }} out:fade>
      <ImageAssets
        width={$pageData.isMobile ? 338 : 331}
        height={$pageData.isMobile ? 338 : 331}
        alt={`過去の作品${workIndex}_${frontImageIndex + 2}画像`}
        srcMeta={images[backImageIndex]}
        objectFit="cover"
      />
    </div>
  {/if}
</button>

<style lang="scss">
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    transition: 1s;
    cursor: pointer;
    transform: rotateY(0);
    overflow: hidden;
    box-shadow: 0 0 8px rgb(0, 0, 0, 0.5);
  }

  .front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    z-index: 0;
  }

  .card.flipped {
    transform: rotateY(180deg);

    .front {
      z-index: 0;
    }

    .back {
      z-index: 1;
    }
  }

  @keyframes tap-icon-animation {
    0% {
      width: 64px;
      bottom: 0;
      right: 0;
    }

    50% {
      width: 40px;
      bottom: 4px;
      right: 4px;
    }

    100% {
      width: 64px;
      bottom: 0;
      right: 0;
    }
  }
</style>
