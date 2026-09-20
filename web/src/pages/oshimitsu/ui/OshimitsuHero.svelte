<script lang="ts">
  import { Character, CharacterFigure, findCharacter } from '@entities/character'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { VIDEO_COUNTS } from '../lib/entries'

  const isMobile = $derived($pageData.isMobile)
  /** 推しミツ！の案内役。表現・構成の担当なので、演技を見る楽しさを案内してもらう */
  const guide = findCharacter(Character.AYATO)
</script>

<section class="hero" class:mobile={isMobile}>
  <div class="inner">
    <div class="figure">
      <CharacterFigure character={guide} size={isMobile ? 104 : 148} />
    </div>

    <div class="words">
      <p class="speaker">{guide.name}（{guide.specialty}）</p>

      <!-- 名前の下に「何ができる場所か」を必ず置く。「推しミツ！」だけでは伝わらないため -->
      <h1 class="title">
        <span class="name">{m.oshimitsu_title()}</span>
        <span class="what">男子新体操の演技動画をさがす</span>
      </h1>

      <p class="lead">
        {m.oshimitsu_lead_line1()}<br />
        {m.oshimitsu_lead_line2()}
      </p>

      <p class="say">
        <strong>選手</strong>・<strong>チーム</strong>・<strong class="accent">手具</strong>
        からしぼると、その場で演技が見られます。まずは気になるものを1つ押してみてください。
      </p>

      <div class="actions">
        <a class="primary" href="#search">探し方をえらぶ</a>
        <a class="secondary" href="#recommended">おすすめの演技を見る</a>
      </div>

      <ul class="stats">
        <li>
          <span class="number">{VIDEO_COUNTS.total}</span>
          <span class="unit">本の演技</span>
        </li>
        <li>
          <span class="number">{VIDEO_COUNTS.individual}</span>
          <span class="unit">本 個人（選手）</span>
        </li>
        <li>
          <span class="number">{VIDEO_COUNTS.group}</span>
          <span class="unit">本 団体（チーム）</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    width: 100%;

    // 青（信頼）を両端から差す。トップページと同じ作り
    background:
      radial-gradient(circle at 10% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 90% 8%, rgb(25 134 255 / 16%), transparent 44%), $white;
    border-bottom: 1px solid map.get($gray, 100);
  }

  .inner {
    display: flex;
    gap: $space-size-32;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-56 var(--content-padding-inline) $space-size-48;
    align-items: center;
  }

  .mobile .inner {
    flex-direction: column;
    gap: $space-size-16;
    padding: $space-size-32 var(--content-padding-inline) $space-size-40;
    text-align: center;
    align-items: center;
  }

  .figure {
    display: flex;
    flex: none;
    align-items: flex-end;
  }

  .words {
    // 長い文字列があっても、親より広がらないようにする
    min-inline-size: 0;
  }

  .speaker {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    margin: 0 0 $space-size-16;
  }

  .mobile .title {
    align-items: center;
  }

  .name {
    font-size: $font-size-40;
    line-height: 1.1;
  }

  .mobile .name {
    font-size: $font-size-30;
  }

  .what {
    align-self: flex-start;
    padding-bottom: $space-size-4;
    font-size: $font-size-20;
    font-weight: bold;
    color: map.get($gray, 600);
    letter-spacing: 0.04em;

    // 下線は青で引く
    border-bottom: 3px solid map.get($sky-blue, border);
  }

  .mobile .what {
    align-self: center;
    font-size: $font-size-16;
  }

  .lead {
    margin: 0 0 $space-size-12;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }

  .say {
    margin: 0 0 $space-size-20;
    font-size: $font-size-16;
    color: map.get($gray, text);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }

  .say strong {
    color: map.get($sky-blue, text);
  }

  .say .accent {
    color: map.get($sky-blue, text);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
    margin-bottom: $space-size-20;
  }

  .mobile .actions {
    justify-content: center;
  }

  .actions a {
    display: inline-flex;
    min-height: 54px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    border-radius: 6px;
    transition: transform 0.15s ease;
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

  // 2つめは青の枠のボタン。主な入口（塗り）と役割を分ける
  .secondary {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8 $space-size-12;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .stats {
    justify-content: center;
  }

  .stats li {
    display: flex;
    gap: $space-size-4;
    padding: $space-size-4 $space-size-12;
    border: 1px solid map.get($gray, 100);
    border-radius: 999px;
    background: $white;
    align-items: baseline;
  }

  .number {
    font-size: $font-size-20;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .unit {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }
</style>
