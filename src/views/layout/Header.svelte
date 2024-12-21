<script context='module' lang='ts'>
  import ImageAssets from "../atomic/image/ImageAssets.svelte"
  import MainImage from "./_images/imrg-logo.jpg?w=650;1300&format=webp&as=meta"
  import Hamburger from "$views/layout/_components/Hamburger.svelte"
  import YoutubeIcon from "$views/layout/_images/youtube-icon.png?w=256;512&format=webp&as=meta"
  import InstagramIcon from "$views/layout/_images/instagram-icon.png?w=256;512&format=webp&as=meta"
  import XIcon from "$views/layout/_images/x-icon.png?w=256;512&format=webp&as=meta"
  import TiktokIcon from "$views/layout/_images/tiktok-icon.png?w=256;512&format=webp&as=meta"

  export const SNS = [
    {
      href: "https://www.youtube.com/channel/UCK-OUvWo6IQz2W6Z-fH27BQ?sub_confirmation=1",
      icon: {
        srcMeta: YoutubeIcon,
        alt: "YouTubeアイコン",
        size: {
          pc: {
            width: 41,
            height: 29,
          },
          sp: {
            width: 34,
            height: 24,
          },
        },
      },
    },
    {
      href: "https://www.instagram.com/takumi.rg/",
      icon: {
        srcMeta: InstagramIcon,
        alt: "Instagramアイコン",
        size: {
          pc: {
            width: 34,
            height: 34,
          },
          sp: {
            width: 28,
            height: 28,
          },
        },
      },
    },
    {
      href: "https://twitter.com/TakumiShimizu43",
      icon: {
        srcMeta: XIcon,
        alt: "X（Twitter）アイコン",
        size: {
          pc: {
            width: 28,
            height: 28,
          },
          sp: {
            width: 23,
            height: 23,
          },
        },
      },
    },
    {
      href: "https://www.tiktok.com/@takumishimizu43?lang=ja-JP",
      icon: {
        srcMeta: TiktokIcon,
        alt: "TikTokアイコン",
        size: {
          pc: {
            width: 30,
            height: 35,
          },
          sp: {
            width: 26,
            height: 29,
          },
        },
      },
    },
  ]
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
      class='top-link'
      href='/'
      on:click={() =>
        isHamburgerOpen ? (isHamburgerOpen = !isHamburgerOpen) : undefined}
    >
      <ImageAssets
        width={$pageData.isMobile ? 80 : 100}
        height={$pageData.isMobile ? 56 : 64}
        alt='男子新体操国際化プロジェクトのロゴ'
        lazy={false}
        srcMeta={MainImage}
        objectFit='cover'
      />
    </a>
    <ul class='sns'>
      {#each SNS as sns, index (index)}
        <li class='sns-row'>
          <a
            class='sns-link'
            href={sns.href}
            rel='noopener noreferrer'
            target='_blank'
          >
            <ImageAssets
              width={$pageData.isMobile
                ? sns.icon.size.sp.width
                : sns.icon.size.pc.width}
              height={$pageData.isMobile
                ? sns.icon.size.sp.height
                : sns.icon.size.pc.height}
              alt={sns.icon.alt}
              lazy={false}
              srcMeta={sns.icon.srcMeta}
              objectFit='cover'
            />
          </a>
        </li>
      {/each}
    </ul>
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
    --content-grid-template-columns: 1fr auto 80px;
    --top-link-padding: #{$space-size-4} 0 #{$space-size-4} #{$space-size-20};
    --sns-link-padding: 0 #{$space-size-16};
  }

  .sp {
    --height: 64px;
    --content-width: 100%;
    --content-grid-template-columns: 1fr auto 64px;
    --top-link-padding: #{$space-size-4} 0 #{$space-size-4} #{$space-size-12};
    --sns-link-padding: 0 #{$space-size-8};
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
    grid-template-columns: var(--content-grid-template-columns);
    place-items: center;
    width: var(--content-width);
    height: 100%;
    box-sizing: border-box;
  }

  .top-link {
    display: grid;
    align-items: center;
    padding: var(--top-link-padding);
    box-sizing: border-box;
    pointer-events: none;
    height: 100%;
    width: 100%;
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
    padding: var(--sns-link-padding);
    height: 100%;
  }
</style>
