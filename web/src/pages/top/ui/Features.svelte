<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { FEATURES } from '../config/sections'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="features" class:mobile={isMobile}>
  <div class="inner">
    <header>
      <h2>このサイトでできること</h2>
      <p>大会を探す、ルールを知る、採点を体験する、演技を見る。</p>
    </header>

    <ul class="cards">
      {#each FEATURES as feature (feature.title)}
        <li>
          <a href={localizeHref(feature.href)}>
            <!-- 印・見出し・矢印を1行に並べる。縦に積むと card が間延びする -->
            <span class="head">
              <span class="badge">{feature.badge}</span>
              <h3>{feature.title}</h3>
              <span class="arrow" aria-hidden="true">→</span>
            </span>
            <p>{feature.body}</p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  .features {
    width: 100%;
    background: $white;
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline);
  }

  header {
    text-align: center;
    margin-bottom: $space-size-40;
  }

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-30;
  }

  .mobile h2 {
    font-size: $font-size-24;
  }

  header p {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, light-text);
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    grid-template-columns: 1fr;
  }

  .cards a {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    height: 100%;
    padding: $space-size-20;
    color: inherit;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
    text-decoration: none;
  }

  .cards a:hover {
    border-color: map.get($sky-blue, border);
    transform: translateY(-2px);
  }

  // 印・見出し・矢印の行。矢印は行の右端へ送る
  .head {
    display: flex;
    gap: $space-size-12;
    align-items: center;
  }

  .badge {
    flex: none;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    letter-spacing: 0.06em;
  }

  h3 {
    margin: 0;
    font-size: $font-size-20;
    min-inline-size: 0;
  }

  .cards p {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.8;
  }

  // 見出しと同じ行の右端。重ねない
  .arrow {
    flex: none;
    margin-left: auto;
    font-size: $font-size-18;
    color: map.get($sky-blue, button);
  }
</style>
