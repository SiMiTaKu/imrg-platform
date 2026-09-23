<script lang="ts" module>
  import LogoImage from '../images/imrg-logo.png?w=460;920&format=webp&as=meta'
</script>

<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  // TODO(キャラクター): LINE スタンプとキャラクターデザインが固まったら出し直す（docs/TODO.md 5-9）
  // import { CHARACTER_LIST, CharacterFigure } from '@entities/character'
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
      <Button href={localizeHref(ROUTES.calendar.index)} target="_self" width="full" size="medium">
        {m.top_hero_action_calendar()}
      </Button>
      <Button href="#services" target="_self" variant="sky-blue-outline" width="full" size="medium">
        {m.top_hero_action_services()}
      </Button>
    </div>

    <!-- 5人が並ぶ。競技が「団体5人」であることを、言葉より先に見せる -->
    <!-- TODO(キャラクター): LINE スタンプとキャラクターデザインが固まったら出し直す（docs/TODO.md 5-9） -->
    <!--
    <ul class="team">
      {#each CHARACTER_LIST as character (character.id)}
        <li>
          <CharacterFigure {character} size={isMobile ? 56 : 76} />
        </li>
      {/each}
    </ul>
    -->

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

    // ファーストビジュアルは画面の最初に出るので、ほかの節より上下を広く取る
    padding: $space-size-64 var(--content-padding-inline) $space-size-80;
    text-align: center;
  }

  .mobile .inner {
    gap: $space-size-16;
    padding: $space-size-40 var(--content-padding-inline) $space-size-56;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-24;
    margin: 0;

    // ロゴとキャッチコピーの組を、上下に余白を取ってゆったり据える。
    // 上はヘッダーの直下に詰まって見えないよう、下は続く説明文と離してキャッチコピーを立たせるため
    padding-top: $space-size-24;
    padding-bottom: $space-size-24;
    font-size: inherit;
    font-weight: normal;
  }

  .mobile .logo {
    gap: $space-size-16;
    padding-top: $space-size-16;
    padding-bottom: $space-size-16;
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

  // 2つとも同じ重みの入口なので、幅をそろえて並べる。
  // スマホは1列にして、1つずつ横いっぱいにする
  .actions {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    max-width: 540px;
  }

  .mobile .actions {
    grid-template-columns: minmax(0, 1fr);
  }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .team {
  //   display: flex;
  //   justify-content: center;
  //   align-items: flex-end;
  //   gap: $space-size-8;
  //   margin: 0;
  //   padding: 0;
  //   list-style: none;
  // }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .team li {
  //   display: flex;
  //   align-items: flex-end;
  // }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }
</style>
