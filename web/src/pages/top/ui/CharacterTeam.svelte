<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { CHARACTERS, CharacterFigure } from '@entities/character'
  import { pageData } from '@shared/lib/device'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="team" class:mobile={isMobile}>
  <div class="inner">
    <header>
      <h2>{m.top_team_title()}</h2>
      <p>{m.top_team_lead()}</p>
    </header>

    <ul class="members">
      {#each CHARACTERS as character (character.id)}
        <li style:--accent={character.color}>
          <div class="figure">
            <CharacterFigure {character} size={isMobile ? 96 : 108} />
          </div>
          <p class="specialty">{character.specialty()}</p>
          <h3>{character.name()}</h3>
          <p class="reading">
            {m.top_team_profile({
              reading: character.reading(),
              height: character.heightCentimeter,
            })}
          </p>
          <p class="role">{character.role()}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  .team {
    width: 100%;
    background: map.get($gray, background);
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
    max-width: 40em;
    margin: 0 auto;
    font-size: $font-size-16;
    color: map.get($gray, light-text);
    line-height: 1.9;
  }

  .members {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .members {
    gap: $space-size-12;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .members li {
    display: flex;
    padding: $space-size-16 $space-size-8;
    border-radius: 8px;
    background: $white;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-bottom: 3px solid var(--accent);
  }

  // 絵の高さで頭がそろう。絵より高い箱にしない
  .figure {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 108px;
  }

  .mobile .figure {
    min-height: 96px;
  }

  .specialty {
    margin: 0 0 $space-size-2;
    font-size: $font-size-12;
    font-weight: bold;
    color: var(--accent);
  }

  h3 {
    margin: 0;
    font-size: $font-size-16;
  }

  .reading {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .role {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, 600);
    line-height: 1.7;
  }
</style>
