<script lang="ts">
  import { pageData } from '../../../atomic/device-store/store'
  import ButtonLink from '../../../atomic/button/ButtonLink.svelte'
  const LINKS = [
    { href: '/calendar', text: '大会・イベントを探す' },
    { href: '/decorating_apparatus', text: '手具装飾を依頼する' },
    { href: '/background_music', text: '曲編集を依頼する' },
    { href: '/judge', text: '審判を体験する' },
    { href: '/rules', text: 'ルールを知る' },
    { href: '/oshimitsu', text: '推しミツ！' },
  ]
</script>

<section class="links" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  {#each LINKS as { href, text }, index (index)}
    <ButtonLink width={$pageData.isMobile ? 320 : 400} height={56} {href} {text} />
  {/each}
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --flex-direction: row;
    --item-width: calc((100% - 32px) / 2);
    --item-height: 56px;
  }

  .sp {
    --width: #{calc(100% - 32px)};
    --flex-direction: column;
    --item-width: 100%;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: var(--flex-direction);
    flex-wrap: wrap;
    gap: $space-size-24;
    width: var(--width);
    padding: $space-size-24 0 $space-size-80;
  }
</style>
