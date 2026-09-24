<script lang="ts">
  import type { Snippet } from 'svelte'
  import { JudgeThemeColor } from '../config/themeColor'
  import { pageData } from '@shared/lib/device'
  import { judgementApparatus } from '../store/apparatus'
  import QuestionLabel from './QuestionLabel.svelte'

  type Props = {
    /** 設問の見出し */
    title: string
    /** 設問の補足。無ければ出さない */
    annotation?: string
    /** 開いているか。閉じているときは見出しだけを出す */
    open: boolean
    /** もう答えたか。答えた札は地を灰色にして、済んだことが一目で分かるようにする */
    answered: boolean
    /** 閉じているときに見出しの右へ出す言葉。答えた内容か「未回答」 */
    summary: string
    /** 中身の id。見出しの aria-controls とつなぐ */
    bodyId: string
    /** 見出しを押して開け閉めするときに呼ぶ */
    ontoggle: () => void
    /** 開いたときに出す中身 */
    children: Snippet
  }

  const {
    title,
    annotation = undefined,
    open,
    answered,
    summary,
    bodyId,
    ontoggle,
    children,
  }: Props = $props()

  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
</script>

<!--
  設問1つ分の札。見出しを押すと開け閉めできる。
  答え終わった札は自動で閉じ、地が灰色になる
-->
<div
  class="question-card {color}"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  class:open
  class:done={answered && !open}
  data-question-card
>
  <button class="head" aria-controls={bodyId} aria-expanded={open} type="button" onclick={ontoggle}>
    <QuestionLabel {annotation} caption={title} {color} />
    <span class="state">
      <span class="summary" class:answered>{summary}</span>
      <span class="mark" aria-hidden="true"></span>
    </span>
  </button>

  {#if open}
    <div class="body" id={bodyId}>
      {@render children()}
    </div>
  {/if}
</div>

<style lang="scss">
  .desktop {
    --head-gap: #{$space-size-16};
  }

  .mobile {
    --head-gap: #{$space-size-8};
  }

  .question-card {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    padding: $space-size-12 $space-size-16;
    border: $border-size-1 solid map.get($gray, 100);
    border-radius: 10px;
    background: $white;
    transition: background 0.2s ease;
  }

  .question-card.open {
    border-color: var(--card-color);
  }

  // 答え終わった札。地を灰色にして、残りがどれかを見分けやすくする
  .question-card.done {
    background: map.get($gray, background);
  }

  .gray {
    --card-color: #{map.get($theme, gray)};
  }

  .blue {
    --card-color: #{map.get($theme, blue)};
  }

  .red {
    --card-color: #{map.get($theme, red)};
  }

  .yellow {
    --card-color: #{map.get($theme, yellow)};
  }

  .green {
    --card-color: #{map.get($theme, green)};
  }

  // 見出しは左、答えは右。狭い画面でも横に並べる
  .head {
    display: flex;
    gap: var(--head-gap);
    align-items: center;
    width: 100%;
    padding: 0;
    font-family: inherit;
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
  }

  // 答えと開け閉めの三角。縮めずに右端へ寄せる
  .state {
    display: flex;
    gap: $space-size-8;
    align-items: center;
    flex: none;
    margin-left: auto;
  }

  .summary {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, light-text);

    // 答えの言葉は途中で折らない。「やや当てはまらない」が2行に割れると読みにくい
    white-space: nowrap;
  }

  .summary.answered {
    color: var(--card-color);
  }

  // 開け閉めの向きを示す三角
  .mark {
    display: block;
    width: 0;
    height: 0;
    border-top: 6px solid map.get($gray, light-text);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    transition: transform 0.2s;
  }

  .open .mark {
    transform: rotate(180deg);
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
  }
</style>
