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
      <div class="image" transition:fade={{ duration: 1000 }}>
        <ImageAssets
          srcMeta={MainImage}
          width="100%"
          height="100%"
          lazy={false}
          alt="男子新体操国際化プロジェクトロゴ"
        />
      </div>
      <div class="label" transition:fly={{ y: 32, delay: 500, duration: 1000 }}>
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
    <div class="application-link__item">
      <a class="application-link__route" href="/judge">
        <span class="application-link__text">審判を体験したい</span>
      </a>
    </div>
    <div class="application-link__item">
      <a class="application-link__route" href="/rules">
        <span class="application-link__text">ルールが知りたい</span>
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  .main-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    padding-top: 0;
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
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    background-color: #777777dd;
    color: white;
  }

  .description-activities {
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 24px;

    &__title {
      display: inline;
      font-size: 16px;
      font-weight: bold;
    }

    &__important-word {
      font-size: 14px;
      font-weight: bold;
    }
  }

  .application-link {
    width: 100%;

    &__item {
      border-bottom: 1px solid #aaaaaa;
      text-align: center;

      &:first-child {
        border-top: 1px solid #aaaaaa;
      }
    }

    &__route {
      color: inherit;
      text-decoration: none;
    }

    &__text {
      display: block;
      padding: 16px 0;
    }
  }
</style>
