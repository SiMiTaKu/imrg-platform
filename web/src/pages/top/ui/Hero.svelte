<script lang="ts" module>
  import LogoImage from '../images/imrg-logo.jpg?w=520;1040&format=webp&as=meta'
</script>

<script lang="ts">
  import { CHARACTERS, CharacterFigure } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { ImageAssets } from '@shared/ui'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="hero" class:mobile={isMobile}>
  <div class="inner">
    <div>
      <p class="eyebrow">男子新体操 ／ Men's Rhythmic Gymnastics</p>
      <h1>
        日本で生まれた競技を、<br />世界のスポーツへ。
      </h1>
      <p class="summary">
        男子新体操は、日本で生まれ、日本でいちばん盛んな競技です。
        大会の情報、ルールの解説、演技の動画を1か所にまとめ、
        <strong>8つの言語</strong>で世界へ届けています。
      </p>

      <div class="actions">
        <a class="primary" href={localizeHref(ROUTES.calendar.index)}>大会・イベントを探す</a>
        <a class="secondary" href="#services">曲編集・手具装飾を頼む</a>
      </div>

      <p class="note">
        個人で運営しています。連絡は <a href="#contact">Instagram</a> がいちばん早く届きます。
      </p>
    </div>

    <div class="visual">
      <div class="logo">
        <ImageAssets
          width={isMobile ? 280 : 360}
          height={isMobile ? 185 : 238}
          alt="男子新体操国際化プロジェクトのロゴ"
          lazy={false}
          imageSourceMeta={LogoImage}
          objectFit="cover"
        />
      </div>
      <!-- 5人が並ぶ。競技が「団体5人」であることを、言葉より先に見せる -->
      <ul class="team">
        {#each CHARACTERS as character (character.id)}
          <li>
            <CharacterFigure {character} size={isMobile ? 62 : 84} />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    width: 100%;
    background:
      radial-gradient(circle at 12% 18%, rgb(25, 134, 255, 0.1), transparent 55%),
      radial-gradient(circle at 88% 8%, rgb(14, 154, 167, 0.08), transparent 45%),
      map.get($gray, background);
    border-bottom: 1px solid map.get($gray, 100);
  }

  .inner {
    display: grid;
    gap: $space-size-48;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
    align-items: center;
  }

  .mobile .inner {
    gap: $space-size-32;
    grid-template-columns: 1fr;
    padding: $space-size-40 $space-size-16;
  }

  .eyebrow {
    margin: 0 0 $space-size-8;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    letter-spacing: 0.12em;
  }

  h1 {
    margin: 0 0 $space-size-16;
    font-size: $font-size-40;
    line-height: 1.35;
    text-wrap: balance;
  }

  .mobile h1 {
    font-size: $font-size-28;
  }

  .summary {
    max-width: 34em;
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.9;
  }

  .summary strong {
    color: map.get($sky-blue, text);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
    padding-block: $space-size-24 $space-size-12;
  }

  .actions a {
    display: inline-flex;
    min-height: 52px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    border-radius: 6px;
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .actions a:hover {
    transform: translateY(-1px);
  }

  .primary {
    color: $white;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25, 134, 255, 0.3);
  }

  .secondary {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-24;
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  .team {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: $space-size-4;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .team li {
    // 並んだときに一列に見えるよう、下端を揃える
    display: flex;
    align-items: flex-end;
  }
</style>
