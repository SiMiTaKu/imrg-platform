<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'
</script>

<svelte:head>
  <title>エラーページ|男子新体操国際化プロジェクト</title>
</svelte:head>

<article class="wrapper" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <h1 class="title">エラーが発生しました</h1>
  <div class="content">
    <div class="text">※リクエストされたページは存在しません。</div>
    <a class="link" href="/">トップに戻る</a>
  </div>
</article>

<style lang="scss">
  .pc {
    --title-font-size: 40px;
  }

  .sp {
    --title-font-size: 30px;
  }

  .wrapper {
    display: grid;
    grid-template-rows: 1fr auto auto 1fr;
    justify-items: center;
    align-items: center;
    height: 75dvh;
    gap: 40px;
  }

  .title {
    grid-row: 2 / 3;
    font-size: var(--title-font-size);
    color: #555555;
  }

  .content {
    grid-row: 3 / 4;
    display: grid;
    gap: 24px;
    justify-items: center;
  }

  .text {
    color: #555555;
  }

  .link {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 300px;
    height: 48px;
    font-weight: bold;
    border-radius: 8px;
    background-color: #555555;
    color: white;
  }
</style>
