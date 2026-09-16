<script context="module" lang="ts">
  import { createEventDispatcher } from 'svelte'

  const LINKS = [
    { href: '/', text: 'トップページ' },
    { href: '/calendar', text: '大会・イベントを探す' },
    { href: '/decorating_apparatus', text: '手具装飾を依頼する' },
    { href: '/background_music', text: '曲編集を依頼する' },
    { href: '/judge', text: '審判を体験する' },
    { href: '/rules', text: 'ルールを知る' },
    { href: '/oshimitsu', text: '推しミツ！' },
  ]
</script>

<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'

  const dispatch = createEventDispatcher<{ close: void }>()

  export let open: boolean
</script>

<div class="wrapper" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile} class:open>
  <ul class="links">
    {#each LINKS as { href, text }, index (index)}
      <li>
        <a class="link" {href} on:click={() => dispatch('close')}>{text}</a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .pc {
    --wrapper-width: 400px;
  }

  .sp {
    --wrapper-width: 100vw;
  }

  .wrapper {
    position: absolute;
    display: grid;
    width: var(--wrapper-width);
    height: 0;
    border-radius: 0 0 $border-radius-8 $border-radius-8;
    background-color: map.get($sky-blue, background);
    transition: 0.3s;
    top: var(--height);
    right: 0;
    overflow: hidden;
  }

  // 1項目あたり約44px。項目を増やしたらここも増やす
  .open {
    height: 328px;
  }

  .links {
    display: grid;
    height: min-content;
    padding: $space-size-8 $space-size-16;
    font-size: 18px;
    font-weight: bold;
    list-style: none;
  }

  .links > li {
    transition: 0.3s;

    &:not(:last-child) {
      border-bottom: $border-size-1 solid map.get($sky-blue, border);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .link {
    display: grid;
    padding: $space-size-8 $space-size-16;
  }
</style>
