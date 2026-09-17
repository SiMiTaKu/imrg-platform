<script context="module" lang="ts">
  import { ButtonLink, Heading } from '@imrg-platform/design-system'
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { pageData } from '../../atomic/device-store/store'

  let bigIcon = false

  onMount(() => {
    setInterval(() => {
      bigIcon = !bigIcon
    }, 1000)
  })
</script>

<section class="contact" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <Heading size={$pageData.isMobile ? 'medium' : 'large'} subtitle="Contact" title="問合わせ先" />
  <div class="content">
    お問い合わせはインスタグラムのダイレクトメッセージにて、<br />
    いつでも受け付けております。<br />
    お気軽にお問い合わせください。
    <ButtonLink
      size={$pageData.isMobile ? 'medium' : 'large'}
      width={$pageData.isMobile ? 320 : 400}
      height={56}
      text="問い合わせる"
      href="https://www.instagram.com/takumi.rg/"
      target="_blank"
    />
  </div>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --content-font-size: #{$font-size-24};
  }

  .sp {
    --width: 90%;
    --content-font-size: #{$font-size-18};
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--width);
    margin: 0 auto;
    padding: 0 0 $space-size-80;
    overflow: hidden;
  }

  .content {
    position: relative;
    display: grid;
    place-items: center;
    gap: $space-size-32;
    font-size: var(--content-font-size);
    text-align: center;
    color: map.get($gray, text);
  }
</style>
