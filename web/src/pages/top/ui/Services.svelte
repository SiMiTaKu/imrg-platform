<script lang="ts">
  import { CharacterFigure, findCharacter } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { SERVICES } from '../config/sections'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="services" class:mobile={isMobile} id="services">
  <div class="inner">
    <header>
      <p class="eyebrow">依頼できます</p>
      <h2>指導・曲編集・手具装飾を承っています</h2>
      <p class="description">
        選手・指導者の方から直接お受けしています。まずは相談だけでも構いません。
      </p>
    </header>

    <ul class="cards">
      {#each SERVICES as service (service.title)}
        {@const character = findCharacter(service.character)}
        <li style:--accent={character.color}>
          <div class="head">
            <CharacterFigure {character} size={isMobile ? 84 : 100} />
            <div class="naming">
              <h3>{service.title}</h3>
              <p class="price">{service.price}</p>
            </div>
          </div>
          <p class="body">{service.body}</p>
          <div class="actions">
            <a class="detail" href={localizeHref(service.href)}>{service.action}</a>
            <a class="order" href="#contact">相談する</a>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  .services {
    width: 100%;
    background: map.get($sky-blue, background);
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

  .eyebrow {
    display: inline-block;
    margin: 0 0 $space-size-12;
    padding: $space-size-4 $space-size-12;
    font-size: $font-size-12;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
    letter-spacing: 0.1em;
  }

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-30;
  }

  .mobile h2 {
    font-size: $font-size-22;
  }

  .description {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    gap: $space-size-16;
    grid-template-columns: 1fr;
  }

  .cards li {
    display: flex;
    gap: $space-size-16;
    padding: $space-size-24;
    border: 1px solid map.get($sky-blue, 100);
    border-radius: 10px;
    background: $white;
    flex-direction: column;
  }

  .head {
    display: flex;
    align-items: center;
    gap: $space-size-16;
  }

  .naming {
    min-inline-size: 0;
  }

  h3 {
    margin: 0 0 $space-size-4;
    font-size: $font-size-24;
  }

  .price {
    display: inline-block;
    margin: 0;
    font-size: $font-size-18;
    font-weight: bold;
    color: var(--accent);
  }

  .body {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.9;
    flex: 1;
  }

  .actions {
    display: flex;
    gap: $space-size-8;
  }

  .actions a {
    display: inline-flex;
    min-height: 46px;
    font-size: $font-size-14;
    font-weight: bold;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-decoration: none;
  }

  .detail {
    color: map.get($gray, text);
    border: 1px solid map.get($gray, 200);
    background: $white;
  }

  // 相談への一歩は黄。青（情報を見る）と役割を分ける
  .order {
    color: map.get($amber, 900);
    background: map.get($amber, 300);
  }
</style>
