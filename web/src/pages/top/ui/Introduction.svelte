<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
</script>

<section class="introduction" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <h1 class="title">{m.top_introduction_title()}</h1>
  <div class="body">
    {m.top_introduction_body_1()}<span class="important">{m.top_introduction_body_2()}</span
    >{m.top_introduction_body_3()}<span class="important">{m.top_introduction_body_4()}</span
    >{m.top_introduction_body_5()}<span class="important">{m.top_introduction_body_6()}</span
    >{m.top_introduction_body_7()}
  </div>
</section>

<style lang="scss">
  .desktop {
    --width: 534px;
    --gap: 24px;
    --title-font-size: 32px;
    --body-font-size: 22px;
    --body-line-height: 40px;
    --important-font-size: 26px;
  }

  .mobile {
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
    text-shadow: 0 0 4px rgb(50, 150, 255, 0.5);
  }

  .body {
    font-size: var(--body-font-size);
    line-height: var(--body-line-height);
  }

  .important {
    padding: 0 4px;
    font-weight: bold;
    text-shadow: 0 0 4px rgb(50, 150, 255, 0.5);
  }
</style>
