<script lang="ts" context="module">
  import TapIcon from "./_image/tap-icon.png?w=200;400&format=webp;png;jpg&as=meta";
  import ImageAssets from "../../../atomic/image/ImageAssets.svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../../ts/common/responsive-design";
</script>

<script lang="ts">
  import { onMount } from "svelte";

  let screenWidth;

  let bigIcon = false;

  onMount(() => {
    setInterval(() => {
      bigIcon = !bigIcon;
    }, 1000);
  });
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="contact"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <h2 class="title">お問合せ先<span class="english-title">Contact</span></h2>
  <a
    href="https://www.instagram.com/takumi.rg/"
    class="content"
    target="_blank"
  >
    <div class="description">
      お問い合わせはインスタグラムのダイレクトメッセージにて、<br />
      いつでも受け付けております。<br />
      お気軽にお問い合わせください。
      <div class="button">
        問い合わせる
        <div class="tap-icon" class:big-icon={bigIcon}>
          <ImageAssets srcMeta={TapIcon} lazy={true} alt="タップアイコン" />
        </div>
      </div>
    </div>
  </a>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --title-font-size: 40px;
    --english-title-font-size: 20px;
    --description-font-size: 28px;
    --button-width: 320px;
    --button-height: 64px;
    --button-font-size: 32px;
  }

  .sp {
    --width: 90%;
    --title-font-size: 30px;
    --english-title-font-size: 16px;
    --description-font-size: 24px;
    --button-width: 280px;
    --button-height: 56px;
    --button-font-size: 28px;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--width);
    margin: 0 auto;
    padding: 0 0 80px;
    overflow: hidden;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 40px;
    color: #333333;
    text-shadow: 0 0 10px rgba(50, 150, 255, 0.5);
    font-size: var(--title-font-size);
  }

  .english-title {
    font-size: var(--english-title-font-size);
  }

  .content {
    text-decoration: none;
    position: relative;
  }

  .description {
    font-size: var(--description-font-size);
    text-align: center;
    color: #333333;
    cursor: pointer;
  }

  .button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--button-width);
    height: var(--button-height);
    margin: 32px auto 0;
    font-size: var(--button-font-size);
    font-weight: bold;
    text-shadow: 0 0 5px rgba(50, 150, 255, 0.5);
    border-radius: 8px;
    background-color: white;
    border: 2px solid #333333;
    box-shadow: 0 0 5px rgba(50, 150, 255, 0.5);
  }

  .tap-icon {
    position: absolute;
    bottom: -40px;
    right: -30px;
    width: 80px;
    height: 80px;
    transition: 1s;

    :global(img) {
      object-fit: cover;
    }
  }

  .big-icon {
    bottom: -55px;
    right: -50px;
    width: 110px;
    height: 110px;
  }
</style>
