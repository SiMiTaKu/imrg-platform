<script lang="ts">
  import { page } from "$app/stores";
</script>

<footer
  class="footer"
  class:pc={!$page.data.isMobile}
  class:sp={$page.data.isMobile}
>
  <div class="content">
    ©︎ Internationalize Men's Rhythmic Gymnastics Project 2020-2023
  </div>
</footer>

<style>
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
