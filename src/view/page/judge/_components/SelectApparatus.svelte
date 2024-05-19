<script context='module' lang='ts'>
  import { Apparatuses } from "../_model/apparatus";
</script>

<div>採点する手具を選択してください。</div>
<select name='select-apparatus'>
  <option value="">採点する手具を選択してください</option>
  {#each Apparatuses as apparatus (apparatus.code)}
    <option value={apparatus.code}>{apparatus.name}</option>
  {/each}
</select>
