<script lang="ts">
  import { localizeHref } from '@shared/lib/i18n'
  import { ImageAssets } from '@shared/ui'
  import { pageData } from '@shared/lib/device'
  import { MENU_ITEM_HEIGHT, MENU_SNS_HEIGHT, MENU_VERTICAL_SPACE } from '../config/layout'
  import { NAVIGATION_LINKS } from '../config/navigation'
  import { SNS_LINKS } from '../config/sns'

  /** メニューの引数 */
  interface Props {
    /** 開いているか */
    open: boolean
    /** 閉じるときの処理 */
    onclose: () => void
  }

  const { open, onclose }: Props = $props()

  const menuHeight = $derived(
    NAVIGATION_LINKS.length * MENU_ITEM_HEIGHT + MENU_SNS_HEIGHT + MENU_VERTICAL_SPACE,
  )
</script>

<div
  style:--open-height={`${menuHeight}px`}
  class="wrapper"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  class:open
>
  <ul class="links">
    {#each NAVIGATION_LINKS as link, index (index)}
      <li>
        <a class="link" href={localizeHref(link.href)} onclick={onclose}>{link.label()}</a>
      </li>
    {/each}
  </ul>
  <ul class="sns">
    {#each SNS_LINKS as sns, index (index)}
      <li>
        <a class="sns-link" href={sns.href} rel="noopener noreferrer" target="_blank">
          <ImageAssets
            width={sns.size.header.desktop.width}
            height={sns.size.header.desktop.height}
            alt={sns.alt()}
            lazy={false}
            imageSourceMeta={sns.imageSourceMeta}
            objectFit="cover"
          />
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .desktop {
    --wrapper-width: 400px;
  }

  .mobile {
    --wrapper-width: 100vw;
  }

  .wrapper {
    position: absolute;
    top: var(--height);
    right: 0;
    display: grid;
    width: var(--wrapper-width);
    height: 0;
    border-radius: 0 0 $border-radius-8 $border-radius-8;
    background-color: map.get($sky-blue, background);
    transition: 0.3s;
    overflow: hidden;
  }

  .open {
    height: var(--open-height);
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

  .sns {
    display: flex;
    gap: $space-size-24;
    place-content: center;
    align-items: center;
    height: $space-size-80;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sns-link {
    display: grid;
    place-items: center;
    transition: 0.25s;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
