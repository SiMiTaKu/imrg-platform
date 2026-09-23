<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  // TODO(キャラクター): LINE スタンプとキャラクターデザインが固まったら出し直す（docs/TODO.md 5-9）
  // 色（--accent）はカードの配色として使い続けるので CHARACTERS は残す
  import { CHARACTERS } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { SERVICES } from '../config/sections'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="services" class:mobile={isMobile} id="services">
  <div class="inner">
    <header>
      <p class="eyebrow">{m.top_services_eyebrow()}</p>
      <h2>{m.top_services_title()}</h2>
      <p class="description">{m.top_services_description()}</p>
    </header>

    <ul class="cards">
      {#each SERVICES as service (service.id)}
        {@const character = CHARACTERS[service.character]}
        <li style:--accent={character.color}>
          <div class="head">
            <!-- <CharacterFigure {character} size={isMobile ? 84 : 100} /> -->
            <div class="naming">
              <h3>{service.title()}</h3>
              <!-- 金額と単位のあいだで折り返さないよう、値段は1つずつ箱にする -->
              <p class="price">
                {#each service.price as part, index (part)}{#if index > 0}{m.top_service_price_separator()}{/if}<span
                    class="phrase">{part()}</span
                  >{/each}
              </p>
            </div>
          </div>
          <!-- 意味のまとまりごとに箱にする。まとまりの途中では折り返さない -->
          <p class="body">
            {#each service.body as phrase (phrase)}<span class="phrase">{phrase()}</span>{/each}
          </p>
          <div class="actions">
            <Button
              href={localizeHref(service.href)}
              target="_self"
              variant="sky-blue-outline"
              width="full"
              size="medium"
            >
              {service.action()}
            </Button>
            <Button href="#contact" target="_self" variant="yellow" width="full" size="medium">
              {m.top_services_order()}
            </Button>
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

  // 日本語・中国語は単語の切れ目が無く、金額や文の意味の途中で折り返してしまう。
  // 意味のまとまりを箱にすると、まとまりごと次の行へ送られる
  .phrase {
    display: inline-block;
  }

  // 単語を空白で区切る言語では、まとまりのあいだに空白1つぶんを置く
  .body:not(:lang(ja), :lang(zh)) .phrase + .phrase {
    margin-inline-start: 0.25em;
  }

  // 「くわしく見る」と「相談する」を同じ幅で並べる。
  // 相談への一歩だけ黄にして、情報を見る側（白抜き）と役割を分ける
  .actions {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mobile .actions {
    grid-template-columns: minmax(0, 1fr);
  }
</style>
