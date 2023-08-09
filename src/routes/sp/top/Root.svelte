<script lang="ts">

</script>

<section id="site-top">
  <img class="main-image" src="image/top/main-image.png" alt="男子新体操国際化プロジェクト"/>
  <div class="description-activities">
    <div class="description-activities__sub-title">
      日本の文化を<br>
      世界のスポーツへ
    </div>
    <h1 class="description-activities__title">『男子新体操国際化プロジェクト』</h1> とは、
    <span class="description-activities__important-word">男子新体操</span>を
    <span class="description-activities__important-word">オリンピックスポーツ</span>にしたいという想いで、
    その<span class="description-activities__important-word">魅力</span>を
    <span class="description-activities__important-word">全世界</span>へ発信するための活動です。
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
    .main-image {
      width: 100%;
    }

    .description-activities {
      font-size:   12px;
      font-weight: normal;
      margin:      0 0 40px;
      padding:     0 16px;

      &__sub-title {
        font-size:   24px;
        font-weight: bold;
        text-align:  center;
        padding:     16px 0 32px;
      }

      &__title {
        display:     inline;
        font-size:   16px;
        font-weight: bold;
      }

      &__important-word {
        font-size:   14px;
        font-weight: bold;
      }
    }

    .application-link {
      padding: 0 16px;

      &__item {
        border-bottom: 1px solid #AAAAAA;
        text-align:    center;

        &:first-child {
          border-top: 1px solid #AAAAAA;
        }
      }

      &__route {
        color:           inherit;
        text-decoration: none;
      }

      &__text {
        display: block;
        padding: 16px 0;
      }
    }
  }
</style>
