<script context='module' lang='ts'>
  import ImageAssets from "../atomic/image/ImageAssets.svelte"
  import MainImage from "./_images/imrg-logo.jpg?w=650;1300&format=webp&as=meta"
  import Hamburger from "$views/layout/_components/Hamburger.svelte"
</script>

<script lang='ts'>
  import { pageData } from "../atomic/device-store/store"

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
          width={$pageData.isMobile ? 80 : 110}
          height={$pageData.isMobile ? 56 : 72}
          alt='男子新体操国際化プロジェクトのロゴ'
          lazy={false}
          srcMeta={MainImage}
          objectFit='cover'
        />
      </div>
    </a>
    <button
      class='hamburger-button'
      type='button'
      on:click={() => (isHamburgerOpen = !isHamburgerOpen)}
    >
      <div class='hamburger-icon' class:open={isHamburgerOpen} />
      <span class='hamburger-text'>{isHamburgerOpen ? "close" : "open"}</span>
    </button>
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
    --image-padding: #{$space-size-4} 0;

    --header-link-grid-column: 1 / 3;
    --humbarger-button-padding: 0;
    --humbarger-grid-column: 2 / 4;
    --hamburger-text-font-size: 20px;
    --hamburger-wrapper-width: 400px;
    --button-icon-size: 32px;
    --button-icon-position-fix: -6px;
  }

  .sp {
    --height: 60px;
    --content-width: 100%;
    --header-link-padding: 0 0 0 #{$space-size-8};
    --image-padding: #{$space-size-2} 0;

    --header-link-grid-column: 2 / 4;
    --humbarger-button-padding: 0 8px 0 0;
    --humbarger-grid-column: 3 / 5;
    --hamburger-text-font-size: 16px;
    --hamburger-wrapper-width: 100vw;
    --button-icon-size: 24px;
    --button-icon-position-fix: -5px;
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

  //#region hamburger
  .hamburger-button {
    display: grid;
    place-items: center;
    grid-template-rows: 1fr var(--button-icon-size) 1fr 1fr;
    width: var(--height);
    height: var(--height);
    padding: var(--humbarger-button-padding);
    transition: 0.25s;
    border: none;
    box-sizing: content-box;
    background: transparent;

    &:active {
      background: map.get($sky-blue, background);
    }

    &:hover {
      background: map.get($sky-blue, background);
    }
  }

  .hamburger-icon {
    display: grid;
    position: relative;
    grid-row: 2;
    grid-column: 1;
    width: var(--button-icon-size);
    height: 3px;
    border-radius: 2em;
    background: #555;
    transition: 0.25s;

    &:before,
    &:after {
      position: absolute;
      content: "";
      width: var(--button-icon-size);
      height: 3px;
      background: #555;
      border-radius: 2em;
      transition: 0.25s;
    }

    &:before {
      top: calc(var(--button-icon-size) / -4);
      right: 0;
    }

    &:after {
      top: calc(var(--button-icon-size) / 4);
      left: 0;
    }
  }

  .hamburger-icon.open {
    transform: rotate(90deg);
    height: 0;

    &:before {
      transform: rotate(45deg);
      top: 50%;
    }

    &:after {
      transform: rotate(135deg);
      top: 50%;
    }
  }

  .hamburger-text {
    grid-row: 3;
    grid-column: 1;
    color: #555;
    font-size: var(--hamburger-text-font-size);
  }
  //#endregion
</style>
