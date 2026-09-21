<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'

  const isMobile = $derived($pageData.isMobile)
</script>

<!-- 頼んでから知ると困る話なので、最初の画面のすぐ下に置いて見落とされないようにする -->
<aside class="live-notice" class:mobile={isMobile}>
  <div class="inner">
    <p class="label">{m.decorating_apparatus_live_notice_label()}</p>
    <p class="body">{m.decorating_apparatus_live_notice_body()}</p>
  </div>
</aside>

<style lang="scss">
  // 注意を引くための黄。読ませるための札なので、地は淡い 50、文字は濃い 900 で組む
  .live-notice {
    width: 100%;
    background: map.get($amber, background);
    border-bottom: 1px solid map.get($amber, border);
  }

  .inner {
    display: flex;
    align-items: center;
    gap: $space-size-16;
    box-sizing: border-box;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-20 var(--content-padding-inline);
  }

  .mobile .inner {
    flex-direction: column;
    align-items: flex-start;
    gap: $space-size-8;
    padding: $space-size-16 var(--content-padding-inline);
  }

  .label {
    flex: none;
    margin: 0;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($amber, 900);
    border-radius: 999px;
    background: map.get($amber, 300);
    letter-spacing: 0.08em;
  }

  .body {
    min-inline-size: 0;
    margin: 0;
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($gray, text);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }
</style>
