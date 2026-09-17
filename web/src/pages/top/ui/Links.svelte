<script lang="ts">
  import { ButtonLink } from '@imrg-platform/design-system'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { TOP_LINKS } from '../config/links'
</script>

<section class="links" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  {#each TOP_LINKS as { href, label }, index (index)}
    <ButtonLink
      target="_self"
      fontSize={$pageData.isMobile ? 20 : 24}
      width={$pageData.isMobile ? 320 : 400}
      height={56}
      href={localizeHref(href)}
      text={label()}
    />
  {/each}
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --flex-direction: row;
    --item-width: calc((100% - 32px) / 2);
    --item-height: 56px;
  }

  .sp {
    --width: #{calc(100% - 32px)};
    --flex-direction: column;
    --item-width: 100%;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: var(--flex-direction) wrap;
    gap: $space-size-24;
    width: var(--width);
    padding: $space-size-24 0 $space-size-80;
  }
</style>
