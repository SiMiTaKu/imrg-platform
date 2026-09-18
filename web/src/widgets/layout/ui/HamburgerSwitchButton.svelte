<script lang="ts">
  import { MenuIcon, XIcon } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'

  /** メニューの開閉ボタンの引数 */
  interface Props {
    /** メニューが開いているか */
    isOpen: boolean
    /** 押したときの処理 */
    onclick: () => void
  }

  const { isOpen, onclick }: Props = $props()

  const iconSize = $derived($pageData.isMobile ? 24 : 28)
</script>

<button
  class="button"
  type="button"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  aria-expanded={isOpen}
  aria-label={isOpen ? m.layout_menu_close() : m.layout_menu_open()}
  {onclick}
>
  {#if isOpen}
    <XIcon size={iconSize} color="gray" />
  {:else}
    <MenuIcon size={iconSize} color="gray" />
  {/if}
</button>

<style lang="scss">
  .desktop {
    --height: 80px;
  }

  .mobile {
    --height: 64px;
  }

  .button {
    display: grid;
    place-items: center;
    width: var(--height);
    height: var(--height);
    padding: 0;
    border: none;
    background: transparent;
    transition: 0.25s;

    &[aria-expanded='true'] {
      background: map.get($sky-blue, background);
    }
  }

  .desktop:hover {
    background: map.get($sky-blue, background);
  }
</style>
