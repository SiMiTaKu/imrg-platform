<script context='module' lang='ts'>
  import { Apparatuses } from "../_model/apparatus"
  const OPTIONS = Apparatuses.map((apparatus) => ({
    code: apparatus.code,
    value: apparatus.name,
  }))
</script>

<script lang='ts'>
  import SingleSelect from "../../../atomic/form/input/SingleSelect.svelte"
  import { judgementApparatus } from "../_store/apparatus"
  import QuestionLabel from "../../../atomic/form/label/QuestionLabel.svelte"

  function handleApparatusChange(value: string) {
    judgementApparatus.toggle(value)
  }
</script>

<div class='select-apparatuses'>
  <QuestionLabel caption='手具の選択' />
  <SingleSelect
    id='select-apparatus'
    options={OPTIONS}
    placeholder='採点する手具を選択してください'
    on:change={(event) => handleApparatusChange(event.detail.value)}
  />
</div>

<style lang='scss'>
  .select-apparatuses {
    display: grid;
    gap: 16px;
  }
</style>
