<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'

  const isMobile = $derived($pageData.isMobile)
</script>

<!--
  知っておいてほしい話だが、頼むかどうかを決める材料ではない。
  ページの終わりの方に、控えめなカードとして置く
-->
<aside
  class="live-notice"
  class:mobile={isMobile}
  aria-label={m.decorating_apparatus_live_notice_label()}
>
  <div class="inner">
    <div class="card">
      <!-- 「お知らせ」の札の代わりに、案内を表す i の印を出す -->
      <svg class="icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <circle cx="12" cy="12" r="9.25" fill="none" stroke="currentColor" stroke-width="1.5" />
        <circle cx="12" cy="7.75" r="1.15" fill="currentColor" />
        <path
          d="M12 11v6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <p class="body">{m.decorating_apparatus_live_notice_body()}</p>
    </div>
  </div>
</aside>

<style lang="scss">
  .live-notice {
    width: 100%;
    background: $white;
  }

  .inner {
    box-sizing: border-box;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-48 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-32 var(--content-padding-inline);
  }

  // 目を引かせる帯ではなく、読み飛ばしてもよいカード。枠と淡い地だけで囲む
  .card {
    display: flex;
    align-items: flex-start;
    gap: $space-size-12;
    box-sizing: border-box;
    width: 100%;
    padding: $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: map.get($gray, background);
  }

  // 案内の印は青。注意ではなく情報だと分かる色にする
  .icon {
    flex: none;
    color: map.get($sky-blue, light-text);
  }

  .body {
    min-inline-size: 0;
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.85;
    overflow-wrap: anywhere;
  }
</style>
