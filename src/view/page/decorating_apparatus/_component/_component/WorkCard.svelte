<script lang="ts" context="module">
  import ImageAssets from "../../../../atomic/image/ImageAssets.svelte";
  import type { SrcMeta } from "../../../../atomic/image/type";
  import TapIcon from "../_image/tap-icon.png?w=200;400&format=webp;png;jpg&as=meta";
</script>

<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  export let images: SrcMeta[] = [];
  export let workIndex: number;
  let frontImageIndex = 0;
  let backImageIndex = (frontImageIndex + 1) % images.length;
  let flipped = false;

  let showTapIcon = true;
  let tapped = false;

  onMount(() => {
    setInterval(() => {
      if (!tapped) {
        showTapIcon = true;
      }
      setTimeout(() => {
        showTapIcon = false;
      }, 2500);
    }, 4000);
  });

  const flip = () => {
    flipped = !flipped;

    if (flipped) {
      frontImageIndex = (backImageIndex + 1) % images.length;
      tapped = true;
      showTapIcon = false;
    } else {
      backImageIndex = (frontImageIndex + 1) % images.length;
    }
  };
</script>

<button class="card" class:flipped on:click={flip}>
  {#if !flipped}
    <div class="front" out:fade in:fade={{ delay: 250, duration: 200 }}>
      <ImageAssets
        srcMeta={images[frontImageIndex]}
        lazy={true}
        alt={`過去の作品${workIndex + 1}_${frontImageIndex + 1}画像`}
      />
    </div>
  {:else}
    <div class="back" out:fade in:fade={{ delay: 250, duration: 200 }}>
      <ImageAssets
        srcMeta={images[backImageIndex]}
        lazy={true}
        alt={`過去の作品${workIndex}_${frontImageIndex + 2}画像`}
      />
    </div>
  {/if}
  {#if showTapIcon}
    <div class="tap-icon" transition:fade>
      <ImageAssets srcMeta={TapIcon} lazy={true} alt="タップアイコン" />
    </div>
  {/if}
</button>

<style lang="scss">
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

    :global(img) {
      object-fit: cover;
    }
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
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    z-index: 2;

    :global(img) {
      object-fit: cover;
    }
  }
</style>
