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

<style lang="scss">
  .select-apparatuses {
    display: grid;
    gap: 16px;
  }
</style>
