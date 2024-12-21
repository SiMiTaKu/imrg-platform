<script context='module' lang='ts'>
  import ImageAssets from "$views/atomic/image/ImageAssets.svelte"
  import type { SrcMeta } from "$views/atomic/image/ImageAssets.svelte"
  import TapIcon from "../_image/tap-icon.png?w=200;400&format=webp&as=meta"
</script>

<script lang='ts'>
  import { fade } from "svelte/transition"

  export let images: SrcMeta[][] = []
  export let workIndex: number

  let frontImageIndex = 0
  let backImageIndex = (frontImageIndex + 1) % images.length
  let flipped = false
  let tapped = false

  const flip = () => {
    flipped = !flipped

    if (flipped) {
      frontImageIndex = (backImageIndex + 1) % images.length
      tapped = true
    } else {
      backImageIndex = (frontImageIndex + 1) % images.length
    }
  }
</script>

<button class='card'
        class:flipped
        type='button'
        on:click={flip}>
  {#if !flipped}
    <div class='front'
         in:fade={{ delay: 250, duration: 200 }}
         out:fade>
      <ImageAssets
        width={200}
        height={200}
        alt={`過去の作品${workIndex + 1}_${frontImageIndex + 1}画像`}
        lazy={true}
        srcMeta={images[frontImageIndex]}
        objectFit='cover'
      />
    </div>
  {:else}
    <div class='back'
         in:fade={{ delay: 250, duration: 200 }}
         out:fade>
      <ImageAssets
        width={200}
        height={200}
        alt={`過去の作品${workIndex}_${frontImageIndex + 2}画像`}
        lazy={true}
        srcMeta={images[backImageIndex]}
        objectFit='cover'
      />
    </div>
  {/if}
  {#if !tapped}
    <div class='tap-icon'>
      <ImageAssets
        width={64}
        height={64}
        alt='タップアイコン'
        lazy={true}
        srcMeta={TapIcon}
        objectFit='cover'
      />
    </div>
  {/if}
</button>

<style lang='scss'>
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transform: rotateY(0);
    transition: 1s;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
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

  .tap-icon {
    position: absolute;
    border: none;
    background: transparent;
    animation: tap-icon-animation 2s infinite;
    z-index: 2;
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
