<script context='module' lang='ts'>
  import { Apparatuses } from "../_model/apparatus"
</script>

<script lang='ts'>
  import { ExecutionDeduct } from "../_model/execution-deduct"
  import { executionDeduct } from "../_store/store.js"

  function handleApparatusChange(event: Event) {
    const target = event.currentTarget as HTMLSelectElement
    ExecutionDeduct.toggleApparatus($executionDeduct, target.value)
  }
</script>

<div>採点する手具を選択してください。</div>
<select name='select-apparatus' on:change={handleApparatusChange}>
  <option value="">採点する手具を選択してください</option>
  {#each Apparatuses as apparatus (apparatus.code)}
    <option value={apparatus.code}>{apparatus.name}</option>
  {/each}
</select>
