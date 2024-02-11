<script lang="ts" context="module">
  import Image from "../../atomic/image/Image.svelte";

  const MAIN_IMAGE = {
    src: "image/common/imrg-logo.png",
    alt: "男子新体操国際化プロジェクトロゴ",
  };
</script>

<section id="site-top">
  <div class="main-visual">
    <div class="main-visual__image">
      <Image height="100%" image={MAIN_IMAGE} isLazy={false} />
    </div>
    <div class="main-visual__title">
      日本の文化を<br />
      世界のスポーツへ
    </div>
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
  #site-top {
    width: 1024px;
    margin: 0 auto;

    .main-visual {
      position: relative;
      width: 1024px;
      height: 500px;
      margin-bottom: 80px;

      &__image {
        position: absolute;
        right: -50px;
        height: 100%;
      }

      &__title {
        position: relative;
        display: inline-block;
        top: 200px;
        padding: 24px;
        font-size: 36px;
        font-weight: bold;
        line-height: 64px;
        color: #777777;
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
