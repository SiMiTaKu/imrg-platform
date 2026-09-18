<script lang="ts">
  import { ButtonLink } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
</script>

<footer class="sticky-footer">
  <ButtonLink
    target="_self"
    fontSize={$pageData.isMobile ? 20 : 24}
    width={$pageData.isMobile ? 320 : 400}
    height={56}
    text={m.layout_sticky_footer_cta()}
    href={localizeHref(ROUTES.calendar.index)}
  />
</footer>

<style lang="scss">
  .sticky-footer {
    position: fixed;
    bottom: -80px;
    display: grid;
    place-items: center;
    width: 100%;
    height: 80px;
    animation: sticky-footer-animation 0.5s 1.5s forwards;
  }

  @keyframes sticky-footer-animation {
    0% {
      bottom: -80px;
    }

    100% {
      bottom: 0;
    }
  }
</style>
