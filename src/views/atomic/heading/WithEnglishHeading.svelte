<script lang="ts">
  import { pageData } from '../device-store/store'

  export let title: string
  export let englishTitle: string
</script>

<h2 class="title" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  {title}
  <span class="english-title">
    {englishTitle}
  </span>
</h2>

<style lang="scss">
  .pc {
    --title-font-size: 40px;
    --english-title-font-size: 20px;
  }

  .sp {
    --title-font-size: 30px;
    --english-title-font-size: 16px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 40px;
    font-size: var(--title-font-size);
    line-height: var(--title-font-size);
    color: #333333;
    text-shadow: 0 0 10px rgba(50, 150, 255, 0.5);
  }

  .english-title {
    margin-top: 8px;
    font-size: var(--english-title-font-size);
    line-height: var(--english-title-font-size);
  }
</style>
