<script lang="ts" context="module">
  import ImageAssets from "../../../atomic/image/ImageAssets.svelte";
  import Image1 from "./_image/main-visual-1.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image2 from "./_image/main-visual-3.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image3 from "./_image/main-visual-5.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image4 from "./_image/main-visual-2.jpg?w=1028;2048&format=webp;jpg&as=meta";
  import Image5 from "./_image/main-visual-4.jpg?w=1028;2048&format=webp;jpg&as=meta";

  const MAIN_IMAGES = [Image1,
Image2,
Image3,
Image4,
Image5];
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let currentIndex = 0;
  let currentImage = MAIN_IMAGES[currentIndex];
  let isShow = true;

  onMount(() => {
    setInterval(() => {
      changeImage();
    }, 5000);
  });

  function changeImage() {
    isShow = false;
    setTimeout(() => {
      isShow = true;
    }, 1250);

    if (currentIndex === MAIN_IMAGES.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    currentImage = MAIN_IMAGES[currentIndex];
  }
</script>

<section class="main-visual">
  {#if isShow}
    <div class="image" transition:fade={{ duration: 1000 }}>
      <ImageAssets srcMeta={currentImage} lazy={false} alt="メインビジュアル" />
    </div>
  {/if}
</section>

<style lang="scss">
  .main-visual {
    padding: 0;
    width: 100%;
    height: calc(100vh - 80px);
  }

  .image {
    width: 100%;
    height: 100%;

    :global(img) {
      object-fit: cover;
      opacity: 0.8;
    }
  }
</style>
