<script context='module' lang='ts'>
  import ImageAssets from "../atomic/image/ImageAssets.svelte"
  import MainImage from "./_images/imrg-logo.jpg?w=650;1300&format=webp&as=meta"
  import Hamburger from "$views/layout/_components/Hamburger.svelte"
</script>

<script lang='ts'>
  import { pageData } from "../atomic/device-store/store"
  import HamburgerSwitchButton from "$views/layout/_components/HamburgerSwitchButton.svelte"

  let isHamburgerOpen = false
</script>

<header
  class='header-main'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class='content'>
    <a
      class='header-link'
      href='/'
      on:click={() =>
        isHamburgerOpen ? (isHamburgerOpen = !isHamburgerOpen) : undefined}
    >
      <div class='image'>
        <ImageAssets
          width={$pageData.isMobile ? 80 : 100}
          height={$pageData.isMobile ? 56 : 64}
          alt='男子新体操国際化プロジェクトのロゴ'
          lazy={false}
          srcMeta={MainImage}
          objectFit='cover'
        />
      </div>
    </a>
    <HamburgerSwitchButton
      isOpen={isHamburgerOpen}
      on:click={() => (isHamburgerOpen = !isHamburgerOpen)}
    />
    <Hamburger
      open={isHamburgerOpen}
      on:close={() => (isHamburgerOpen = !isHamburgerOpen)}
    />
  </div>
</header>

<style lang='scss'>
  .pc {
    --height: 80px;
    --content-width: 1024px;
    --header-link-padding: 0;
    --image-padding: #{$space-size-8} 0;
  }

  .sp {
    --height: 64px;
    --content-width: 100%;
    --header-link-padding: 0 0 0 #{$space-size-8};
    --image-padding: #{$space-size-4} 0;
  }

  .header-main {
    position: fixed;
    display: grid;
    place-items: center;
    top: 0;
    width: 100vw;
    height: var(--height);
    background: white;
    z-index: 1000;

    &:before {
      content: "";
      position: fixed;
      top: 0;
      width: 100vw;
      height: var(--height);
      background: transparent;
      box-shadow: $black-box-shadow;
      pointer-events: none;
      user-select: none;
    }
  }

  .content {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    place-items: center;
    gap: 8px;
    width: var(--content-width);
    height: 100%;
    box-sizing: border-box;
  }

  .header-link {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 8px auto 1fr;
    grid-template-areas: "logo ." "logo sub-title" "logo title";
    gap: 0 8px;
    align-items: center;
    justify-items: left;
    padding: var(--header-link-padding);
    width: 100%;
    height: 100%;
    text-decoration: none;
    box-sizing: border-box;
  }

  .image {
    padding: var(--image-padding);
    box-sizing: border-box;
    grid-area: logo;
    pointer-events: none;
  }
</style>
