<script context='module' lang='ts'>
  import { Apparatuses } from "../_model/apparatus"
  const OPTIONS = Apparatuses.map((apparatus) => ({
    code: apparatus.code,
    value: apparatus.name,
  }))
</script>

<script lang='ts'>
  import SingleSelect from "../../../common/form/SingleSelect.svelte"
  import { judgementApparatus } from "../_store/apparatus"

  function handleApparatusChange(value: string) {
    judgementApparatus.toggle(value)
  }
</script>

<div class='select-apparatuses'>
  <div class='header'>
    <span class='title'><span class='icon'>Q</span>手具選択</span>
  </div>
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

  .header {
    display: grid;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: 8px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background: #3e7cb7;
    border-radius: 1em;
  }

  .title {
    display: flex;
    flex-direction: row;
    gap: 12px;
    font-size: 22px;
    font-weight: bold;
  }
</style>
