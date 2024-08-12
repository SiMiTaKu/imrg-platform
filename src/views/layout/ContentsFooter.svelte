<script context='module' lang='ts'>
  import { SNS } from "./_data/contents-footer-data"
  import ImageAssets from "../atomic/image/ImageAssets.svelte"
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
              alt={sns.icon.alt}
              height='auto'
              lazy={true}
              srcMeta={sns.icon.srcMeta}
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
    --icon-size: 64px;
    --sns-gap: 16px;
    --item-font-size: 16px;
  }

  .sp {
    --width: 90%;
    --icon-size: 32px;
    --sns-gap: 8px;
    --item-font-size: 14px;
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
    display: flex;
    align-items: center;
    width: var(--icon-size);
    height: var(--icon-size);
  }
</style>
