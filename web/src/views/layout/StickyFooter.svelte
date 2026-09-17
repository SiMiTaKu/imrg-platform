<script context="module" lang="ts">
  import { ButtonLink } from '@imrg-platform/design-system'
</script>

<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'
</script>

<footer class="sticky-footer">
  <ButtonLink
    size={$pageData.isMobile ? 'medium' : 'large'}
    width={$pageData.isMobile ? 320 : 400}
    height={56}
    text="推しを見つける！"
    href="/oshimitsu"
  />
</footer>

<style lang="scss">
  .sticky-footer {
    position: fixed;
    display: grid;
    place-items: center;
    width: 100%;
    height: 80px;
    bottom: -80px;
    animation: stickyFooterAnimation 0.5s 1.5s forwards;
  }

  @keyframes stickyFooterAnimation {
    0% {
      bottom: -80px;
    }

    100% {
      bottom: 0;
    }
  }
</style>
