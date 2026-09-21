<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public'
  import { m } from '$lib/paraglide/messages'
  import { CharacterFigure, Character, findCharacter } from '@entities/character'
  import {
    buildShareUrl,
    executionDeduct,
    getDecisionPoints,
    judgementApparatus,
  } from '@features/judge'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import { formatNumber } from '@shared/lib/number'
  import { ROUTES } from '@shared/routes'
  import NextActions from './NextActions.svelte'

  type Props = {
    /** 決定点をもう一度出すときに呼ぶ */
    onshowscore: () => void
    /** 最初から採点し直すときに呼ぶ */
    onretry: () => void
  }

  const { onshowscore, onretry }: Props = $props()

  const locale = getLocale()
  const isMobile = $derived($pageData.isMobile)
  /** 採点の案内役 */
  const guide = findCharacter(Character.OSAMU)

  /** 得点と手具の名前を入れた、Xへの共有のリンク */
  const shareHref = $derived(
    buildShareUrl(
      m.judge_share_x_text({
        apparatus: $judgementApparatus?.name() ?? '',
        score: formatNumber(getDecisionPoints($executionDeduct), locale, 2),
      }),
      `${PUBLIC_BASE_URL}${localizeHref(ROUTES.judge)}`,
    ),
  )
</script>

<!-- 採点を終えたあとの行き先。決定点そのものは結果の画面が受け持つ -->
<section class="result" class:mobile={isMobile}>
  <header class="head">
    <div class="guide">
      <CharacterFigure character={guide} size={isMobile ? 80 : 100} />
    </div>
    <div class="words">
      <p class="speaker">
        {m.character_figure_label({ name: guide.name(), specialty: guide.specialty() })}
      </p>
      <h2>{m.judge_result_thanks_title()}</h2>
      <p class="say">
        {m.judge_result_thanks_1()}<strong>{m.judge_result_thanks_emphasis()}</strong
        >{m.judge_result_thanks_2()}
      </p>
    </div>
  </header>

  <div class="buttons">
    <button class="again" type="button" onclick={onshowscore}>{m.judge_result_show_score()}</button>
    <!-- Xの投稿画面を新しいタブで開く。文は得点と手具の名前が入ったもの -->
    <a class="share" href={shareHref} rel="noopener noreferrer" target="_blank">
      {m.judge_share_x()}
    </a>
    <button class="retry" type="button" onclick={onretry}>{m.judge_result_restart()}</button>
  </div>

  <NextActions
    title={m.judge_next_actions_title()}
    description={m.judge_next_actions_description()}
  />
</section>

<style lang="scss">
  .result {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    padding: $space-size-32;
    border: 2px solid map.get($sky-blue, border);
    border-radius: 10px;

    // 採点を終えたところは青の淡い地で受ける
    background: map.get($sky-blue, background);
  }

  .mobile.result {
    gap: $space-size-20;
    padding: $space-size-20 $space-size-16;
  }

  .head {
    display: flex;
    align-items: flex-start;
    gap: $space-size-24;
  }

  .mobile .head {
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

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-24;
  }

  .mobile h2 {
    font-size: $font-size-20;
  }

  .say {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, 600);
    text-align: left;
  }

  .say strong {
    color: map.get($sky-blue, text);
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-size-12;
  }

  .again,
  .share,
  .retry {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 $space-size-24;
    font-family: inherit;
    font-size: $font-size-14;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
  }

  .again {
    color: $white;
    border: none;
    background: map.get($sky-blue, button);
  }

  .share {
    color: $white;
    border: none;
    background: map.get($gray, text);
    text-decoration: none;
  }

  .retry {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }
</style>
