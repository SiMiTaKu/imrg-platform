<script lang="ts">
  import { page } from "$app/stores";
</script>

<section
  class="introduction"
  class:pc={!$page.data.isMobile}
  class:sp={$page.data.isMobile}
>
  <h1 class="title">男子新体操国際化プロジェクト</h1>
  <div class="body">
    は<span class="important">男子新体操</span>を<span class="important"
      >オリンピックスポーツ</span
    >にするため、その魅力を<span class="important">全世界</span
    >へ発信するための活動です。
  </div>
</section>

<style lang="scss">
  .pc {
    --width: 534px;
    --gap: 24px;
    --title-font-size: 32px;
    --body-font-size: 22px;
    --body-line-height: 40px;
    --important-font-size: 26px;
  }

  .sp {
    --width: #{calc(100% - 32px)};
    --gap: 16px;
    --title-font-size: 24px;
    --body-font-size: 18px;
    --body-line-height: 36px;
    --important-font-size: 20px;
  }

  .introduction {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    max-width: var(--width);
    padding: 40px 0;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--title-font-size);
    text-shadow: 0 0 4px rgba(50, 150, 255, 0.5);
  }

  .body {
    font-size: var(--body-font-size);
    line-height: var(--body-line-height);
  }

  .important {
    font-weight: bold;
    padding: 0 4px;
    text-shadow: 0 0 4px rgba(50, 150, 255, 0.5);
  }
</style>
