<script lang="ts">
  import { JudgeThemeColor } from '../config/themeColor'
  import { m } from '$lib/paraglide/messages'
  import { JUDGE_APPARATUSES } from '../config/apparatus'
  import { judgementApparatus } from '../store/apparatus'
  import QuestionLabel from './QuestionLabel.svelte'
  import SingleSelect from './SingleSelect.svelte'

  // 手具の名前は表示中の言語で出すので、読み込み時ではなく描画時に作る
  const options = JUDGE_APPARATUSES.map((apparatus) => ({
    code: apparatus.code,
    value: apparatus.name(),
  }))
  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
</script>

{#if $judgementApparatus}
  <!--
    選んだあとは、選んだ手具だけを出す。
    採点のあいだ何の手具を見ているかが分かればよく、
    問いかけと選択肢を残しておくと画面が長くなる
  -->
  <p class="chosen {color}">
    <span class="mark" aria-hidden="true"></span>
    <span class="name">{$judgementApparatus.name()}</span>
  </p>
{:else}
  <div class="select-apparatuses">
    <QuestionLabel caption={m.judge_select_apparatus_caption()} {color} />
    <SingleSelect
      id="select-apparatus"
      label={m.judge_select_apparatus_caption()}
      {color}
      {options}
      placeholder={m.judge_select_apparatus_placeholder()}
      onchange={judgementApparatus.select}
    />
  </div>
{/if}

<style lang="scss">
  .select-apparatuses {
    display: grid;
    gap: 16px;
  }

  .gray {
    --chosen-color: #{map.get($theme, gray)};
  }

  .blue {
    --chosen-color: #{map.get($theme, blue)};
  }

  .red {
    --chosen-color: #{map.get($theme, red)};
  }

  .yellow {
    --chosen-color: #{map.get($theme, yellow)};
  }

  .green {
    --chosen-color: #{map.get($theme, green)};
  }

  // 選んだ手具。色の丸と名前だけを出す
  .chosen {
    display: flex;
    gap: $space-size-12;
    align-items: center;
    margin: 0;
  }

  .mark {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: var(--chosen-color);
  }

  .name {
    font-size: $font-size-20;
    font-weight: bold;
    color: map.get($gray, text);
  }
</style>
