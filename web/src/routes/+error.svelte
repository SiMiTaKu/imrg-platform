<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
</script>

<svelte:head>
  <title>{m.meta_error_title()}</title>
</svelte:head>

<article class="wrapper" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <h1 class="title">{m.error_title()}</h1>
  <div class="content">
    <div class="text">{m.error_not_found()}</div>
    <div class="link">
      <Button href={localizeHref(ROUTES.top)} target="_self" block>{m.error_back_to_top()}</Button>
    </div>
  </div>
</article>

<style lang="scss">
  .desktop {
    --title-font-size: 40px;
  }

  .mobile {
    --title-font-size: 30px;
  }

  .wrapper {
    display: grid;
    gap: 40px;
    grid-template-rows: 1fr auto auto 1fr;
    height: 75dvh;
    place-items: center center;
  }

  .title {
    grid-row: 2 / 3;
    font-size: var(--title-font-size);
    color: #555;
  }

  .content {
    display: grid;
    gap: 24px;
    grid-row: 3 / 4;
    justify-items: center;
  }

  .text {
    color: #555;
  }

  .link {
    display: grid;
    width: 300px;
    max-width: 100%;
  }

  .mobile .link {
    width: 100%;
  }
</style>
