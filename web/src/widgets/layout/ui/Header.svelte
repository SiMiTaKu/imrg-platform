<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { ImageAssets } from '@shared/ui'
  import { SNS_LINKS } from '../config/sns'
  import MainImage from '../images/imrg-logo.jpg?w=650;1300&format=webp&as=meta'
  import Hamburger from './Hamburger.svelte'
  import HamburgerSwitchButton from './HamburgerSwitchButton.svelte'

  let isHamburgerOpen = $state(false)

  const closeHamburger = () => {
    isHamburgerOpen = false
  }
</script>

<header class="header-main" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <div class="content">
    <a class="top-link" href={localizeHref(ROUTES.top)} onclick={closeHamburger}>
      <ImageAssets
        width={$pageData.isMobile ? 80 : 100}
        height={$pageData.isMobile ? 56 : 64}
        alt={m.layout_logo_alt()}
        lazy={false}
        imageSourceMeta={MainImage}
        objectFit="cover"
      />
    </a>
    <ul class="sns">
      {#each SNS_LINKS as sns, index (index)}
        <li class="sns-row">
          <a class="sns-link" href={sns.href} rel="noopener noreferrer" target="_blank">
            <ImageAssets
              width={$pageData.isMobile
                ? sns.size.header.mobile.width
                : sns.size.header.desktop.width}
              height={$pageData.isMobile
                ? sns.size.header.mobile.height
                : sns.size.header.desktop.height}
              alt={sns.alt()}
              lazy={false}
              imageSourceMeta={sns.imageSourceMeta}
              objectFit="cover"
            />
          </a>
        </li>
      {/each}
    </ul>
    <HamburgerSwitchButton
      isOpen={isHamburgerOpen}
      onclick={() => (isHamburgerOpen = !isHamburgerOpen)}
    />
    <Hamburger open={isHamburgerOpen} onclose={closeHamburger} />
  </div>
</header>

<style lang="scss">
  .desktop {
    --height: 80px;
    --content-width: 1024px;
    --content-grid-template-columns: 1fr auto 80px;
    --top-link-padding: #{$space-size-4} 0 #{$space-size-4} #{$space-size-20};
    --sns-link-padding: 0 #{$space-size-16};
  }

  .mobile {
    --height: 64px;
    --content-width: 100%;
    --content-grid-template-columns: 1fr auto 64px;
    --top-link-padding: #{$space-size-4} 0 #{$space-size-4} #{$space-size-12};
    --sns-link-padding: 0 #{$space-size-8};
  }

  .header-main {
    position: fixed;
    top: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    width: 100vw;
    height: var(--height);
    background: white;

    &::before {
      position: fixed;
      top: 0;
      width: 100vw;
      height: var(--height);
      background: transparent;
      box-shadow: $black-box-shadow;
      content: '';
      pointer-events: none;
      user-select: none;
    }
  }

  .content {
    position: relative;
    display: grid;
    grid-template-columns: var(--content-grid-template-columns);
    place-items: center;
    box-sizing: border-box;
    width: var(--content-width);
    height: 100%;
  }

  .top-link {
    display: grid;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: var(--top-link-padding);
  }

  .sns {
    display: flex;
    box-sizing: border-box;
    height: 100%;
  }

  .sns-row {
    display: grid;
    place-items: center;
    height: 100%;
  }

  .sns-link {
    display: grid;
    place-items: center;
    height: 100%;
    padding: var(--sns-link-padding);
  }
</style>
