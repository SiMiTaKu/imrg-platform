<script lang="ts" module>
  import LogoImage from '../images/imrg-logo.png?w=460;920&format=webp&as=meta'
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
        width={isMobile ? 260 : 380}
        height={isMobile ? 188 : 275}
        alt={m.top_main_visual_logo_alt()}
        lazy={false}
        imageSourceMeta={LogoImage}
        objectFit="cover"
      />
      <span class="catchphrase">{m.top_main_visual_catchphrase()}</span>
    </h1>

    <p class="summary">
      <strong class="accent">{m.top_hero_summary_accent()}</strong
      >{m.top_hero_summary_body_1()}<strong>{m.top_hero_summary_emphasis_olympic()}</strong
      >{m.top_hero_summary_body_2()}<strong>{m.top_hero_summary_emphasis_world()}</strong
      >{m.top_hero_summary_body_3()}
    </p>

    <div class="actions">
      <a class="primary" href={localizeHref(ROUTES.calendar.index)}
        >{m.top_hero_action_calendar()}</a
      >
      <a class="secondary" href="#services">{m.top_hero_action_services()}</a>
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
      {m.top_hero_note_lead()}<a href="#contact">Instagram</a>{m.top_hero_note_tail()}
    </p>
  </div>
</section>

<style lang="scss">
  .hero {
    width: 100%;

    // 青（信頼）を両端から差す
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 14%), transparent 42%), $white;
    border-bottom: 1px solid map.get($gray, 100);
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-24;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-40 var(--content-padding-inline) $space-size-48;
    text-align: center;
  }

  .mobile .inner {
    gap: $space-size-16;
    padding: $space-size-32 var(--content-padding-inline) $space-size-40;
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

    // 下線は青。黄は相談のボタンにだけ残す
    border-bottom: 3px solid map.get($sky-blue, border);
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
    width: 100%;
    max-width: 540px;
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

  // 2つとも同じ重みの入口なので、大きさをそろえて並べる
  .primary,
  .secondary {
    flex: 1 1 240px;
  }

  .primary {
    color: $white;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(0 89 184 / 25%);
  }

  // 依頼の入口は白抜き。押す先が違うことを見た目でも分ける
  .secondary {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
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
