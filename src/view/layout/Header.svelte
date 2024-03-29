<script context='module' lang='ts'>
  import ImageAssets from "../atomic/image/ImageAssets.svelte";
  import MainImage from "../../../static/image/common/imrg-logo.jpg?w=681;1363&format=webp;png;jpg&as=meta";
</script>

<script lang='ts'>
  import { pageData } from "../atomic/device-store/store";
</script>

<div class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <header class='header-main'>
    <div class='content'>
      <a class='header-link' href='/'>
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
  }

  .sp {
    --height: 64px;
    --image-size: 102px;
    --content-width: 90%;
    --title-margin-top: 10px;
    --main-font-size: 22px;
    --sub-font-size: 11px;
  }

  .header-main {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    width: 100vw;
    height: var(--height);
    z-index: 1000;
    overflow: hidden;

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

  .header-link {
    text-decoration: none;
  }

  .content {
    position: relative;
    width: var(--content-width);
    height: 100%;
    margin: 0 auto;
  }

  .image {
    position: absolute;
    top: -25%;
    width: var(--image-size);
    height: var(--image-size);
    opacity: 0.1;
    object-fit: cover;
  }
  .title {
    display: flex;
    flex-direction: column;
    margin-top: var(--title-margin-top);
    font-weight: bold;
    color: #555;
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
</style>
