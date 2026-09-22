<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { LINKS } from '@shared/config/links'
  import { pageData } from '@shared/lib/device'

  const isMobile = $derived($pageData.isMobile)
</script>

<!--
  出典。ページのいちばん最後に置く。
  表ごとの出典は各表の下にも書いてあるが、どの規則集のどの版を写したものかは
  ページ全体で1か所にまとめて示す
-->
<section class="source" class:mobile={isMobile} aria-labelledby="rule-source-heading">
  <h2 class="heading" id="rule-source-heading">{m.rules_source_heading()}</h2>

  <p class="lead">{m.rules_source_lead()}</p>

  <p class="book">{m.rules_source_book()}</p>

  <dl class="detail">
    <dt>{m.rules_source_publisher_label()}</dt>
    <dd>{m.rules_source_publisher()}</dd>
    <dt>{m.rules_source_editor_label()}</dt>
    <dd>{m.rules_source_editor()}</dd>
    <dt>{m.rules_source_published_label()}</dt>
    <dd>{m.rules_source_published()}</dd>
    <dt>{m.rules_source_site_label()}</dt>
    <dd>
      <a href={LINKS.japanGymnastics} target="_blank" rel="noopener noreferrer">
        {LINKS.japanGymnastics}
      </a>
    </dd>
  </dl>

  <p class="note">{m.rules_source_note()}</p>
  <p class="note">{m.rules_source_authority()}</p>
</section>

<style lang="scss">
  .source {
    box-sizing: border-box;
    width: 100%;
    padding: $space-size-24;
    border: $border-size-1 solid map.get($gray, 200);
    border-radius: $border-radius-8;
    background: map.get($gray, background);
  }

  .mobile.source {
    padding: $space-size-16;
  }

  .heading {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, text);
  }

  .lead {
    margin: $space-size-12 0 0;
    font-size: $font-size-12;
    line-height: 1.8;
    color: map.get($gray, light-text);
  }

  // 書名は引用元そのものなので、少し強く出す
  .book {
    margin: $space-size-8 0 0;
    font-size: $font-size-14;
    font-weight: bold;
    line-height: 1.7;
    color: map.get($gray, text);
  }

  // 発行・編集・発行日を、名前と中身の2列で並べる
  .detail {
    display: grid;
    gap: $space-size-4 $space-size-16;
    grid-template-columns: max-content 1fr;
    margin: $space-size-16 0 0;
    font-size: $font-size-12;
    line-height: 1.8;
  }

  .mobile .detail {
    gap: 0;
    grid-template-columns: 1fr;
  }

  dt {
    color: map.get($gray, light-text);
  }

  dd {
    margin: 0;
    color: map.get($gray, text);
    overflow-wrap: anywhere;
  }

  .mobile dd {
    margin-bottom: $space-size-8;
  }

  a {
    color: map.get($sky-blue, text);
  }

  .note {
    margin: $space-size-16 0 0;
    font-size: $font-size-11;
    line-height: 1.8;
    color: map.get($gray, light-text);
  }
</style>
