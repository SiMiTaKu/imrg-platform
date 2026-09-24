<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { PUBLIC_BASE_URL } from '$env/static/public'
  import { m } from '$lib/paraglide/messages'
  import type { Chart } from 'chart.js/auto'
  import { CHARACTERS, Character } from '@entities/character'
  import { GuideLead } from '@features/guideLead'
  import {
    JudgeThemeColor,
    POINT_A_ITEMS,
    buildShareUrl,
    downloadImage,
    executionDeduct,
    getDecisionPoints,
    judgementApparatus,
    renderDetailChart,
    toChartImageUrl,
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
  const guide = CHARACTERS[Character.OSAMU]

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

  /** グラフの画像を保存するときのファイル名 */
  const CHART_FILE_NAME = 'imrg-judge-score.png'

  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
  let canvas: HTMLCanvasElement | undefined = $state()
  let chart: Chart | undefined = undefined

  // 採点の値や手具の色が変わるたびに、結果の中のグラフを描き直す
  $effect(() => {
    const values = POINT_A_ITEMS.map((item) => $executionDeduct.pointA[item.key].code)
    const current = color
    const showsPointLabels = !isMobile
    if (!canvas) return undefined
    chart = renderDetailChart(canvas, {
      labels: POINT_A_ITEMS.map((item) => item.title()),
      values,
      color: current,
      showsPointLabels,
    })
    return () => chart?.destroy()
  })

  /**
   * いま描かれているグラフを PNG にして保存させる
   */
  const saveChartImage = () => {
    if (!canvas) return
    downloadImage(toChartImageUrl(canvas), CHART_FILE_NAME)
  }
</script>

<!-- 採点を終えたあとの行き先。決定点そのものは結果の画面が受け持つ -->
<section class="result" class:mobile={isMobile}>
  <header>
    <GuideLead character={guide} size={100} mobileSize={80}>
      <h2>{m.judge_result_thanks_title()}</h2>
      <p class="say">
        {m.judge_result_thanks_1()}<strong>{m.judge_result_thanks_emphasis()}</strong
        >{m.judge_result_thanks_2()}
      </p>
    </GuideLead>
  </header>

  <!-- 決定点の画面を閉じたあとも内訳が見えるように、ここにもグラフを置く -->
  <figure class="chart-figure">
    <figcaption class="chart-title">{m.judge_result_chart_title()}</figcaption>
    <div class="chart">
      <!-- canvas の中身は、グラフを描けないときの代わりとして読み上げられる -->
      <canvas width="320" height="320" bind:this={canvas}>{m.judge_result_chart_alt()}</canvas>
    </div>
  </figure>

  <div class="buttons">
    <Button
      width={isMobile ? 'full' : 'auto'}
      onclick={onshowscore}
      size="medium"
      variant="sky-blue">{m.judge_result_show_score()}</Button
    >
    <!-- Xの投稿画面を新しいタブで開く。文は得点と手具の名前が入ったもの -->
    <Button
      href={shareHref}
      target="_blank"
      variant="sky-blue-outline"
      width={isMobile ? 'full' : 'auto'}
      size="medium">{m.judge_share_x()}</Button
    >
    <Button
      variant="sky-blue-outline"
      width={isMobile ? 'full' : 'auto'}
      onclick={saveChartImage}
      size="medium">{m.judge_result_chart_save()}</Button
    >
    <Button
      variant="sky-blue-outline"
      width={isMobile ? 'full' : 'auto'}
      onclick={onretry}
      size="medium">{m.judge_result_restart()}</Button
    >
  </div>
  <p class="share-note">{m.judge_result_chart_share_note()}</p>

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

  // PC では中央にそろえて横に並べ、スマホでは縦に積んで1つずつ横いっぱいにする
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-12;
    justify-content: center;
  }

  .mobile .buttons {
    flex-direction: column;
  }

  .chart-figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-12;
    margin: 0;
    padding: $space-size-20;
    border-radius: 10px;
    background: $white;
  }

  .chart-title {
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($gray, text);
  }

  // グラフは正方形。狭い画面では画面の幅に収める
  .chart {
    width: 100%;
    max-width: 320px;
  }

  .chart canvas {
    width: 100%;
    height: auto;
  }

  .share-note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
