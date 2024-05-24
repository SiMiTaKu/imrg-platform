<script lang='ts'>
  import { pageData } from "../atomic/device-store/store"
</script>

<footer
  class='footer'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class='content'>
    ©︎ Internationalize Men's Rhythmic Gymnastics Project 2020-2023
  </div>
</footer>

<style lang='scss'>
  .pc {
    --font-size: 12px;
  }

  .sp {
    --font-size: 10px;
  }

  .footer {
    background: #666666;
  }

  .content {
    color: white;
    font-size: var(--font-size);
    text-align: center;
  }
</style>
