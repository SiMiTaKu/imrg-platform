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
            <span class="badge">{feature.badge}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
            <span class="arrow" aria-hidden="true">→</span>
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
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-48 $space-size-16;
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
    font-size: $font-size-14;
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
    position: relative;
    display: block;
    height: 100%;
    padding: $space-size-24;
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

  .badge {
    display: inline-block;
    margin-bottom: $space-size-8;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-10;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    letter-spacing: 0.06em;
  }

  h3 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-20;
  }

  .cards p {
    margin: 0;
    padding-right: $space-size-24;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.85;
  }

  .arrow {
    position: absolute;
    right: $space-size-20;
    bottom: $space-size-20;
    font-size: $font-size-18;
    color: map.get($sky-blue, button);
  }
</style>
