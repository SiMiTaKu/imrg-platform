<script context='module' lang='ts'>
  import ImageAssets from "../atomic/image/ImageAssets.svelte"
  import MainImage from "../../../static/image/common/imrg-logo.jpg?w=681;1363&format=webp;png;jpg&as=meta"

  const LINKS = [
    { href: "/decorating_apparatus", text: "手具装飾を依頼する" },
    { href: "/background_music", text: "曲編集を依頼する" },
    { href: "/judge", text: "審判を体験する" },
    { href: "/rules", text: "ルールを知る" },
  ]
</script>

<script lang='ts'>
  import { pageData } from "../atomic/device-store/store"
  import { slide } from "svelte/transition"

  let show = false
</script>

<div class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <header class='header-main'>
    <div class='content'>
      <a
        class='header-link'
        href='/'
        on:click={() => (show ? (show = !show) : undefined)}
      >
        <div class='image'>
          <ImageAssets
            alt='男子新体操国際化プロジェクトロゴ'
            height='100%'
            lazy={false}
            srcMeta={MainImage}
            width='100%'
          />
        </div>
        <div class='title'>
          <span class='main'>男子新体操国際化プロジェクト</span>
          <span class='sub'>Internationalize Men's Rhythmic Gymnastics</span>
        </div>
      </a>
      <div class='hamburger'>
        <button
          class='hamburger-icon'
          type='button'
          on:click={() => (show = !show)}
        />
        {#if show}
          <div class='hamburger-wrapper' transition:slide={{ duration: 500 }}>
            <ul class='links'>
              {#each LINKS as { href, text }, index (index)}
                <li>
                  <a class='link'
                     {href}
                     on:click={() => (show = !show)}
                  >{text}</a
                  >
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </header>
</div>

<style lang='scss'>
  .pc {
    --height: 80px;
    --image-size: 128px;
    --content-width: 1024px;
    --title-margin-top: 8px;
    --main-font-size: 30px;
    --sub-font-size: 12px;
    --hamberger-icon-size: 40px;
  }

  .sp {
    --height: 64px;
    --image-size: 102px;
    --content-width: 90%;
    --title-margin-top: 10px;
    --main-font-size: 22px;
    --sub-font-size: 11px;
    --hamberger-icon-size: 24px;
  }

  .header-main {
    position: fixed;
    display: grid;
    align-items: center;
    top: 0;
    width: 100vw;
    height: var(--height);
    z-index: 1000;

    &:before {
      content: "";
      position: fixed;
      top: 0;
      width: 100vw;
      height: var(--height);
      background: white;
      box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
      opacity: 0.8;
    }
  }

  .content {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto var(--hamberger-icon-size);
    grid-template-rows: auto auto;
    width: var(--content-width);
    height: 100%;
    margin: 0 auto;
  }

  .header-link {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    text-decoration: none;
    overflow: hidden;
  }

  .image {
    position: absolute;
    top: 0;
    width: var(--image-size);
    height: var(--height);
    opacity: 0.1;
    pointer-events: none;

    :global(img) {
      object-fit: cover;
    }
  }

  .title {
    display: grid;
    margin-top: var(--title-margin-top);
    font-weight: bold;
    color: #555;
    pointer-events: none;
  }

  .main {
    display: block;
    font-size: var(--main-font-size);
    text-shadow: 0 0 4px rgba(50, 150, 255, 0.5);
  }

  .sub {
    display: block;
    font-size: var(--sub-font-size);
    text-shadow: 0 0 4px rgba(50, 150, 255, 0.5);
  }

  //#region hamburger
  .hamburger {
    display: grid;
    justify-items: right;
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }

  .hamburger-icon {
    position: relative;
    width: var(--hamberger-icon-size);
    height: var(--height);
    transition: 0.3s;
    border: none;
    background: white;

    &:active {
      background-color: #f0f0f0;
    }

    &:hover {
      background-color: #f0f0f0;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 62%;
      height: 4px;
      transform: rotate(45deg);
      background: #555;
      border-radius: 2em;
      transition: 0.3s;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      transform: rotate(-45deg);
      width: 62%;
      height: 4px;
      background: #555;
      border-radius: 2em;
      transition: 0.3s;
    }
  }

  .hamburger-wrapper {
    display: grid;
    overflow: hidden;
    border-radius: 0 0 8px 8px;
    background-color: #ddd;
    height: 191px;
  }

  .links {
    display: grid;
    height: min-content;
    list-style: none;
    font-size: 18px;
    font-weight: bold;
    padding: 8px 16px;
  }

  .links > li {
    transition: 0.3s;

    &:not(:last-child) {
      border-bottom: 1px solid #999;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .link {
    display: grid;
    padding: 8px 16px;
  }
  //#endregion
</style>
