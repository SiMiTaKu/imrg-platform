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
  .site-top {
    width: 1024px;
    margin: 0 auto;

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
      &__item {
        display: inline-block;
        width: 49%;
        height: 64px;
        font-size: 20px;
        line-height: 64px;
        text-align: center;

        &:not(:last-child) {
          border-right: solid 4px #777777;
        }
      }

      &__route {
        color: #333333;
        text-decoration: none;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
</style>
