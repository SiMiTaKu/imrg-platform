<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  // TODO(キャラクター): LINE スタンプとキャラクターデザインが固まったら出し直す（docs/TODO.md 5-9）
  // 色（--accent）はカードの配色として使い続けるので CHARACTERS は残す
  import { CHARACTERS } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { HIGHLIGHTS } from '../config/sections'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="highlights" class:mobile={isMobile} id="about">
  <div class="inner">
    <header>
      <h2>{m.top_highlights_title()}</h2>
      <p>{m.top_highlights_lead()}</p>
    </header>

    <ul class="cards">
      {#each HIGHLIGHTS as highlight (highlight.id)}
        {@const character = CHARACTERS[highlight.character]}
        <li style:--accent={character.color}>
          <!--
          <div class="figure">
            <CharacterFigure
              {character}
              size={isMobile ? 84 : 96}
              showApparatus={highlight.showApparatus}
            />
          </div>
          -->
          <h3>{highlight.title()}</h3>
          <p class="summary">{highlight.summary()}</p>
          <p class="body">{highlight.body()}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  .highlights {
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
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;

    // 上辺だけ、その人の色を差す
    border-top: 3px solid var(--accent);
    background: $white;
  }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .figure {
  //   // 姿勢が違っても頭の高さが揃うよう、箱の高さを決める。絵の分だけで、余白は足さない
  //   display: flex;
  //   align-items: flex-end;
  //   justify-content: center;
  //   min-height: 100px;
  //   margin-bottom: $space-size-4;
  // }

  h3 {
    margin: 0 0 $space-size-4;
    font-size: $font-size-20;
  }

  .summary {
    margin: 0 0 $space-size-8;
    font-size: $font-size-14;
    font-weight: bold;
    color: var(--accent);
  }

  .body {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.75;
    text-align: left;
  }
</style>
