<script lang="ts" context="module">
  import ImageAssets from "../../atomic/image/ImageAssets.svelte";
  import MainImage from "../../../../static/image/common/imrg-logo.jpg?w=681;1363&format=webp;png;jpg&as=meta";
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  let isShowMainVisual = false;

  onMount(() => {
    isShowMainVisual = true;
  });
</script>

<section class="main-visual">
  <div class="first-view">
    {#if isShowMainVisual}
      <div class="image" in:fade={{ duration: 1000 }}>
        <ImageAssets
          srcMeta={MainImage}
          lazy={false}
          alt="男子新体操国際化プロジェクトロゴ"
        />
      </div>
      <div class="label" in:fly={{ y: 32, delay: 500, duration: 1000 }}>
        日本の文化を<br />
        世界のスポーツへ
      </div>
    {/if}
  </div>
  <div class="description-activities">
    <h1 class="description-activities__title">
      『男子新体操国際化プロジェクト』
    </h1>
    とは、
    <span class="description-activities__important-word">男子新体操</span>を
    <span class="description-activities__important-word"
      >オリンピックスポーツ</span
    >にしたいという想いで、 その<span
      class="description-activities__important-word">魅力</span
    >を
    <span class="description-activities__important-word">全世界</span
    >へ発信するための活動です。
  </div>
  <div class="application-link">
    <a class="item" href="/decorating_apparatus">手具装飾を依頼する</a>
    <a class="item" href="/judge">審判を体験する</a>
    <a class="item" href="/rules">ルールを知る</a>
  </div>
</section>

<style lang="scss">
  .main-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    padding: 24px 0 64px;
  }

  .first-view {
    position: relative;
    width: 100vw;
    height: 74vw;
    overflow: hidden;
  }

  .image {
    position: absolute;
    width: 85vw;
    left: 0;
    top: -24px;
    object-fit: cover;
    z-index: 0;
  }

  .label {
    position: absolute;
    top: 104px;
    right: 0;
    padding: 10px 22px;
    font-size: 22px;
    font-weight: bold;
    line-height: 32px;
    background-color: #777777dd;
    color: white;
  }

  .description-activities {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 56px;

    &__title {
      display: inline;
      font-size: 24px;
      font-weight: bold;
    }

    &__important-word {
      font-size: 22px;
      font-weight: bold;
    }
  }

  .application-link {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 320px;
      height: 56px;
      text-decoration: none;
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      text-shadow: 0 0 5px rgba(50, 150, 255, 0.5);
      border-radius: 8px;
      background-color: white;
      border: 2px solid #333333;
      box-shadow: 0 0 5px rgba(50, 150, 255, 0.5);
    }
  }
</style>
