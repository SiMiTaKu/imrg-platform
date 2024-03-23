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

<section class="site-top">
  <div class="main-visual">
    {#if isShowMainVisual}
      <div class="main-visual__image" in:fade={{ duration: 1000 }}>
        <ImageAssets
          srcMeta={MainImage}
          lazy={false}
          alt="男子新体操国際化プロジェクトロゴ"
        />
      </div>
      <div
        class="main-visual__title"
        in:fly={{ y: 56, delay: 500, duration: 1000 }}
      >
        日本の文化を<br />
        世界のスポーツへ
      </div>
    {/if}
  </div>
  <div class="description-activities">
    <h1 class="description-activities__title">
      『男子新体操国際化プロジェクト』
    </h1>
    とは、<br />
    <span class="description-activities__important-word">男子新体操</span>を
    <span class="description-activities__important-word"
      >オリンピックスポーツ</span
    >にしたいという想いで、<br />
    その<span class="description-activities__important-word">魅力</span>を
    <span class="description-activities__important-word">全世界</span
    >へ発信するための活動です。
  </div>
  <div class="application-link">
    <a class="item" href="/decorating_apparatus">手具装飾を依頼する</a>
    <a class="item" href="/background_music">曲編集を依頼する</a>
    <a class="item" href="/judge">審判を体験する</a>
    <a class="item" href="/rules">ルールを知る</a>
  </div>
</section>

<style lang="scss">
  .site-top {
    width: 1024px;
    margin: 0 auto;
    padding: 80px 0;

    .main-visual {
      position: relative;
      width: 1024px;
      height: 536px;
      margin-bottom: 80px;
      overflow: hidden;

      &__image {
        position: absolute;
        width: 856px;
        left: -40px;
        top: -160px;
        object-fit: cover;
        z-index: 0;
      }

      &__title {
        position: absolute;
        top: 200px;
        right: 0;
        padding: 24px 56px;
        font-size: 36px;
        font-weight: bold;
        line-height: 64px;
        background-color: #777777dd;
        color: white;
      }
    }

    .description-activities {
      font-size: 20px;
      width: 700px;
      margin: 0 auto 80px;
      line-height: 48px;
      text-align: center;

      &__title {
        display: inline;
        font-size: 24px;
        font-weight: bold;
      }

      &__important-word {
        font-size: 24px;
        font-weight: bold;
      }
    }

    .application-link {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 16px;
      width: 100%;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc((100% - 16px) / 3);
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
  }
</style>
