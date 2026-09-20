<script lang="ts">
  import { CHARACTERS, CharacterFigure } from '@entities/character'
  import { pageData } from '@shared/lib/device'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="team" class:mobile={isMobile}>
  <div class="inner">
    <header>
      <h2>案内役の5人</h2>
      <p>
        団体競技と同じ5人組です。得意分野が違うので、ページごとに担当が変わります。 LINE
        スタンプとしても準備中です。
      </p>
    </header>

    <ul class="members">
      {#each CHARACTERS as character (character.id)}
        <li style:--accent={character.color}>
          <div class="figure">
            <CharacterFigure {character} size={isMobile ? 104 : 132} />
          </div>
          <p class="specialty">{character.specialty}</p>
          <h3>{character.name}</h3>
          <p class="reading">{character.reading}／{character.heightCentimeter}cm</p>
          <p class="role">{character.role}</p>
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
    padding: $space-size-16 $space-size-8 $space-size-20;
    border-radius: 8px;
    background: $white;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-bottom: 3px solid var(--accent);
  }

  .figure {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 136px;
  }

  .mobile .figure {
    min-height: 108px;
  }

  .specialty {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: var(--accent);
  }

  h3 {
    margin: 0 0 $space-size-2;
    font-size: $font-size-16;
  }

  .reading {
    margin: 0 0 $space-size-8;
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
