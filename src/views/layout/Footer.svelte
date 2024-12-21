<script context='module' lang='ts'>
  import ImageAssets from "$views/atomic/image/ImageAssets.svelte"
  import YoutubeIcon from "$views/layout/_images/youtube-icon.png?w=256;512&format=webp&as=meta"
  import InstagramIcon from "$views/layout/_images/instagram-icon.png?w=256;512&format=webp&as=meta"
  import XIcon from "$views/layout/_images/x-icon.png?w=256;512&format=webp&as=meta"
  import TiktokIcon from "$views/layout/_images/tiktok-icon.png?w=256;512&format=webp&as=meta"

  export const SNS = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCK-OUvWo6IQz2W6Z-fH27BQ?sub_confirmation=1",
      icon: {
        srcMeta: YoutubeIcon,
        alt: "YouTubeアイコン",
        size: {
          pc: {
            width: 80,
            height: 60,
          },
          sp: {
            width: 40,
            height: 30,
          },
        },
      },
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/takumi.rg/",
      icon: {
        srcMeta: InstagramIcon,
        alt: "Instagramアイコン",
        size: {
          pc: {
            width: 72,
            height: 72,
          },
          sp: {
            width: 36,
            height: 36,
          },
        },
      },
    },
    {
      name: "X(Twitter)",
      href: "https://twitter.com/TakumiShimizu43",
      icon: {
        srcMeta: XIcon,
        alt: "X（Twitter）アイコン",
        size: {
          pc: {
            width: 60,
            height: 60,
          },
          sp: {
            width: 30,
            height: 30,
          },
        },
      },
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@takumishimizu43?lang=ja-JP",
      icon: {
        srcMeta: TiktokIcon,
        alt: "TikTokアイコン",
        size: {
          pc: {
            width: 72,
            height: 72,
          },
          sp: {
            width: 36,
            height: 36,
          },
        },
      },
    },
  ]
</script>

<script lang='ts'>
  import { pageData } from "../atomic/device-store/store"
</script>

<section
  class='contents-footer'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class='container'>
    <div class='sns'>
      {#each SNS as sns, index (index)}
        <a
          class='item'
          href={sns.href}
          rel='noopener noreferrer'
          target='_blank'
        >
          <div class='icon'>
            <ImageAssets
              width={$pageData.isMobile
                ? sns.icon.size.sp.width
                : sns.icon.size.pc.width}
              height={$pageData.isMobile
                ? sns.icon.size.sp.height
                : sns.icon.size.pc.height}
              alt={sns.icon.alt}
              lazy={true}
              srcMeta={sns.icon.srcMeta}
              objectFit='cover'
            />
          </div>
          {sns.name}
        </a>
      {/each}
    </div>
  </div>
</section>

<style lang='scss'>
  .pc {
    --width: 1024px;
    --sns-gap: 16px;
    --item-font-size: 16px;
    --icon-min-height: 72px;
  }

  .sp {
    --width: 90%;
    --sns-gap: 8px;
    --item-font-size: 14px;
    --icon-min-height: 36px;
  }

  .contents-footer {
    padding: 40px 0;
    background-color: #eeeeee;
  }

  .container {
    width: var(--width);
    margin: 0 auto;
  }

  .sns {
    display: flex;
    gap: var(--sns-gap);
    width: 100%;
  }

  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    text-decoration: none;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: #777777;
  }

  .icon {
    display: grid;
    place-items: center;
    min-height: var(--icon-min-height);
  }
</style>
