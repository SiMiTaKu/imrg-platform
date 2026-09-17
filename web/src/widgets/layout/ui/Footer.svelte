<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { ImageAssets } from '@shared/ui'
  import { SNS_LINKS } from '../config/sns'
</script>

<section class="contents-footer" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <div class="container">
    <div class="sns">
      {#each SNS_LINKS as sns, index (index)}
        <a class="item" href={sns.href} rel="noopener noreferrer" target="_blank">
          <div class="icon">
            <ImageAssets
              width={$pageData.isMobile ? sns.size.footer.sp.width : sns.size.footer.pc.width}
              height={$pageData.isMobile ? sns.size.footer.sp.height : sns.size.footer.pc.height}
              alt={sns.alt()}
              lazy={true}
              srcMeta={sns.srcMeta}
              objectFit="cover"
            />
          </div>
          {sns.name}
        </a>
      {/each}
    </div>
    <nav class="policy-links">
      <a href={localizeHref(ROUTES.privacy)}>{m.layout_footer_privacy()}</a>
      <a href={localizeHref(ROUTES.terms)}>{m.layout_footer_terms()}</a>
    </nav>
  </div>
</section>

<style lang="scss">
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
    padding: $space-size-40 0 $space-size-120;
    background-color: #eee;
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
    flex-direction: column;
    gap: 8px;
    align-items: center;
    width: 100%;
    font-size: var(--item-font-size);
    font-weight: bold;
    color: #777;
    text-decoration: none;
  }

  .policy-links {
    display: flex;
    gap: $space-size-24;
    justify-content: center;
    margin-top: $space-size-40;
    font-size: 14px;

    a {
      color: #777;
    }
  }

  .icon {
    display: grid;
    place-items: center;
    min-height: var(--icon-min-height);
  }
</style>
