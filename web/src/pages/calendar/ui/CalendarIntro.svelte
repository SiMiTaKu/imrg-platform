<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { Character, CharacterFigure, findCharacter } from '@entities/character'
  import { pageData } from '@shared/lib/device'

  /** ページの冒頭の案内の引数 */
  interface Props {
    /** 載せている大会・イベントの総数 */
    total: number
    /** まだ終わっていないイベントの数 */
    upcoming: number
    /** 「最終更新: 2026年9月16日」の文言 */
    updatedAtText: string
  }

  const { total, upcoming, updatedAtText }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  /** カレンダーの案内役。大会へ跳び込む人 */
  const guide = findCharacter(Character.SORA)
</script>

<!-- 何ができるページかを、いちばん上で言い切る。トップページ・ルールページと同じ「案内役のひとこと」の形 -->
<header class="intro" class:mobile={isMobile}>
  <div class="figure">
    <CharacterFigure character={guide} size={isMobile ? 96 : 124} />
  </div>

  <div class="words">
    <p class="speaker">
      {m.character_figure_label({ name: guide.name(), specialty: guide.specialty() })}
    </p>
    <h1>{m.calendar_title()}</h1>
    <p class="say">{m.calendar_lead()}</p>
    <p class="how">
      <strong>{m.calendar_view_calendar()}</strong>{m.calendar_intro_how_calendar()}<strong
        >{m.calendar_view_list()}</strong
      >{m.calendar_intro_how_list()}
      {m.calendar_intro_how_detail_before()}<strong class="accent"
        >{m.calendar_intro_how_detail_strong()}</strong
      >{m.calendar_intro_how_detail_after()}
    </p>

    <dl class="numbers">
      <div class="number">
        <dt>{m.calendar_intro_stat_total()}</dt>
        <dd>{total}<span class="unit">{m.calendar_count_unit_other()}</span></dd>
      </div>
      <div class="number upcoming">
        <dt>{m.calendar_period_upcoming()}</dt>
        <dd>{upcoming}<span class="unit">{m.calendar_count_unit_other()}</span></dd>
      </div>
      <div class="number updated">
        <dt>{m.calendar_intro_stat_freshness()}</dt>
        <dd class="updated-text">{updatedAtText}</dd>
      </div>
    </dl>

    <p class="caution">{m.calendar_intro_sources_note()}</p>
  </div>
</header>

<style lang="scss">
  .intro {
    display: flex;
    gap: $space-size-24;
    align-items: flex-start;
    padding: $space-size-24;
    border-radius: 10px;

    // 青（信頼）を両端から差す。トップページの見出しと同じ考え方
    background:
      radial-gradient(circle at 6% 0%, rgb(25 134 255 / 10%), transparent 46%),
      radial-gradient(circle at 96% 8%, rgb(25 134 255 / 16%), transparent 44%),
      map.get($gray, background);
  }

  .intro.mobile {
    flex-direction: column;
    align-items: center;
    gap: $space-size-12;
    padding: $space-size-16;
    text-align: center;
  }

  .figure {
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
    line-height: 1.3;
  }

  .mobile h1 {
    font-size: $font-size-22;
  }

  .say,
  .how {
    margin: 0 0 $space-size-12;
    font-size: $font-size-16;
    color: map.get($gray, text);
    line-height: 1.9;
  }

  .how strong {
    color: map.get($sky-blue, text);
  }

  // 行動の入口も青でそろえる
  .how .accent {
    color: map.get($sky-blue, text);
  }

  .numbers {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin: 0 0 $space-size-12;
  }

  .mobile .numbers {
    justify-content: center;
  }

  .number {
    display: flex;
    flex-direction: column;
    gap: $space-size-2;
    padding: $space-size-8 $space-size-16;
    border: $border-size-1 solid map.get($sky-blue, 100);
    border-radius: $border-radius-8;
    background: $white;
    text-align: left;
  }

  .number.upcoming {
    border-color: map.get($sky-blue, border);
    background: map.get($sky-blue, background);
  }

  dt {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
    letter-spacing: 0.06em;
  }

  dd {
    margin: 0;
    font-size: $font-size-22;
    font-weight: bold;
    line-height: 1.2;
    color: map.get($sky-blue, text);
    font-variant-numeric: tabular-nums;
  }

  .upcoming dd {
    color: map.get($sky-blue, text);
  }

  .unit {
    margin-left: $space-size-2;
    font-size: $font-size-12;
    font-weight: normal;
    color: map.get($gray, light-text);
  }

  .updated {
    justify-content: center;
  }

  .updated-text {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, 600);
  }

  .caution {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.8;
  }
</style>
