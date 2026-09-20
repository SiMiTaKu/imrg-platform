<script lang="ts" module>
  import LogoImage from '../images/imrg-logo.png?w=560;1120&format=webp&as=meta'
</script>

<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { CHARACTERS, CharacterFigure } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { ImageAssets } from '@shared/ui'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="hero" class:mobile={isMobile}>
  <div class="inner">
    <!-- ロゴを最初に置く。何のサイトかを言葉より先に見せる -->
    <h1 class="logo">
      <ImageAssets
        width={isMobile ? 300 : 460}
        height={isMobile ? 217 : 333}
        alt={m.top_main_visual_logo_alt()}
        lazy={false}
        imageSourceMeta={LogoImage}
        objectFit="cover"
      />
      <span class="catchphrase">{m.top_main_visual_catchphrase()}</span>
    </h1>

    <p class="summary">
      男子新体操を<strong>オリンピックスポーツ</strong>にするため、その魅力を<strong>全世界</strong
      >へ発信しています。大会の情報、ルールの解説、演技の動画を1か所にまとめ、
      <strong class="accent">8つの言語</strong>で届けています。
    </p>

    <div class="actions">
      <a class="primary" href={localizeHref(ROUTES.calendar.index)}>大会・イベントを探す</a>
      <a class="secondary" href="#services">曲編集・手具装飾を頼む</a>
    </div>

    <!-- 5人が並ぶ。競技が「団体5人」であることを、言葉より先に見せる -->
    <ul class="team">
      {#each CHARACTERS as character (character.id)}
        <li>
          <CharacterFigure {character} size={isMobile ? 56 : 76} />
        </li>
      {/each}
    </ul>

    <p class="note">
      個人で運営しています。連絡は <a href="#contact">Instagram</a> がいちばん早く届きます。
    </p>
  </div>
</section>

<style lang="scss">
  .hero {
    width: 100%;

    // 青（信頼）と黄（希望）を両端から差す
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(240 165 0 / 14%), transparent 42%), $white;
    border-bottom: 1px solid map.get($gray, 100);
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-24;
    max-width: 780px;
    margin: 0 auto;
    padding: $space-size-56 $space-size-24 $space-size-48;
    text-align: center;
  }

  .mobile .inner {
    gap: $space-size-16;
    padding: $space-size-32 $space-size-16 $space-size-40;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-16;
    margin: 0;
    font-size: inherit;
    font-weight: normal;
  }

  .catchphrase {
    display: inline-block;
    padding-bottom: $space-size-4;
    font-family: inherit;
    font-size: $font-size-26;
    font-weight: bold;
    letter-spacing: 0.04em;

    // 下線を黄で引く。青一色にしない
    border-bottom: 3px solid map.get($amber, border);
  }

  .mobile .catchphrase {
    font-size: $font-size-18;
  }

  .summary {
    max-width: 34em;
    margin: 0;
    font-size: $font-size-16;
    line-height: 2;
    color: map.get($gray, 600);
    text-align: left;
  }

  .mobile .summary {
    font-size: $font-size-14;
  }

  .summary strong {
    color: map.get($gray, text);
  }

  .summary .accent {
    color: map.get($sky-blue, text);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-size-12;
  }

  .actions a {
    display: inline-flex;
    min-height: 54px;
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
    box-shadow: 0 2px 8px rgb(25 134 255 / 30%);
  }

  // 依頼の入口は黄。青と役割を分ける
  .secondary {
    color: map.get($amber, 800);
    background: map.get($amber, 300);
    box-shadow: 0 2px 8px rgb(240 165 0 / 30%);
  }

  .team {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: $space-size-8;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .team li {
    display: flex;
    align-items: flex-end;
  }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }
</style>
