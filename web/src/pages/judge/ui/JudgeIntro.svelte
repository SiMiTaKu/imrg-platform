<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { CharacterFigure, Character, findCharacter } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  type Props = {
    /** 「採点をはじめる」を押したときに呼ぶ */
    onstart: () => void
  }

  const { onstart }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  /** 採点の案内役。ルールのページと同じ人が案内する */
  const guide = findCharacter(Character.OSAMU)

  /**
   * 採点をやってみる前に伝えること。身構えずに1つ試せることを先に言う。
   * 文言は言語が決まってから取り出したいので、関数にして遅らせている
   */
  const POINTS = [
    {
      id: 'time',
      label: () => m.judge_intro_point_time_label({ minutes: 3 }),
      title: () => m.judge_intro_point_time_title(),
      body: () => m.judge_intro_point_time_body(),
    },
    {
      id: 'items',
      label: () => m.judge_intro_point_items_label({ count: 11 }),
      title: () => m.judge_intro_point_items_title(),
      body: () => m.judge_intro_point_items_body(),
    },
    {
      id: 'score',
      label: () => m.judge_intro_point_score_label({ score: 10 }),
      title: () => m.judge_intro_point_score_title(),
      body: () => m.judge_intro_point_score_body(),
    },
  ]
</script>

<section class="intro" class:mobile={isMobile}>
  <div class="inner">
    <header class="lead">
      <div class="guide">
        <CharacterFigure character={guide} size={isMobile ? 96 : 124} />
      </div>
      <div class="words">
        <p class="speaker">
          {m.character_figure_label({ name: guide.name(), specialty: guide.specialty() })}
        </p>
        <h1>{m.judge_intro_title()}</h1>
        <p class="say">
          {m.judge_intro_lead_1()}<strong>{m.judge_intro_lead_emphasis()}</strong
          >{m.judge_intro_lead_2()}<strong class="accent">{m.judge_intro_lead_accent()}</strong
          >{m.judge_intro_lead_3()}
        </p>
      </div>
    </header>

    <ul class="points">
      {#each POINTS as point (point.id)}
        <li>
          <!-- 数と見出しは1行に並べる。札を上に積むと card が縦に伸びる -->
          <div class="point-head">
            <span class="label">{point.label()}</span>
            <h2>{point.title()}</h2>
          </div>
          <p>{point.body()}</p>
        </li>
      {/each}
    </ul>

    <div class="actions">
      <button class="start" type="button" onclick={onstart}>{m.judge_intro_start()}</button>
      <a class="sub" href={localizeHref(ROUTES.rules)}>{m.judge_intro_read_rules()}</a>
    </div>
    <p class="note">{m.judge_intro_note()}</p>
  </div>
</section>

<style lang="scss">
  .intro {
    width: 100%;

    // 青（信頼）を両端から差す。トップページと同じ作り
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 16%), transparent 42%), $white;
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-48 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-32 var(--content-padding-inline);
  }

  /* ─── 案内役のひとこと ─── */

  .lead {
    display: flex;
    gap: $space-size-24;
    align-items: flex-start;
    margin-bottom: $space-size-32;
  }

  .mobile .lead {
    flex-direction: column;
    align-items: center;
    gap: $space-size-12;
    text-align: center;
  }

  .guide {
    flex: none;
  }

  .words {
    min-inline-size: 0;
  }

  .speaker {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  h1 {
    margin: 0 0 $space-size-12;
    font-size: $font-size-30;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  .say {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, 600);
  }

  .mobile .say {
    text-align: left;
  }

  .say strong {
    color: map.get($gray, text);
  }

  .say .accent {
    color: map.get($sky-blue, text);
  }

  /* ─── できることを3つ ─── */

  .points {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 0 $space-size-32;
    padding: 0;
    list-style: none;
  }

  .mobile .points {
    gap: $space-size-12;
    grid-template-columns: 1fr;
  }

  .points li {
    // 重ねずに縦へ積む
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding: $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-top: 3px solid map.get($sky-blue, border);
    border-radius: 8px;
    background: $white;
  }

  // 数の札と見出しの行
  .point-head {
    display: flex;
    gap: $space-size-8;
    align-items: center;
  }

  .label {
    flex: none;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    letter-spacing: 0.06em;
  }

  .points h2 {
    margin: 0;
    font-size: $font-size-18;
    min-inline-size: 0;
  }

  .points p {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.8;
    color: map.get($gray, 600);
  }

  /* ─── 始める ─── */

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: $space-size-12;
    margin-bottom: $space-size-12;
  }

  .start,
  .sub {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 0 $space-size-32;
    font-family: inherit;
    font-size: $font-size-16;
    font-weight: bold;
    border-radius: 6px;
    text-decoration: none;
    transition: transform 0.15s ease;
    cursor: pointer;
  }

  .start:hover,
  .sub:hover {
    transform: translateY(-1px);
  }

  // いちばん押してほしいところは青で塗る
  .start {
    color: $white;
    border: none;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 40%);
  }

  .sub {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
