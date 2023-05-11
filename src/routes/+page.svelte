<script lang="ts">
  import Radio                from "./common/form/Radio.svelte";
  import { executionDeduct }  from '../ts/form/executionDeduct/store';
  import { deductionOptions } from '../ts/form/executionDeduct/model';

  const options = deductionOptions;

  let result: number;

  /** @note 整数値にしてから計算し直すことで、小数点のずれを無くしている*/
  executionDeduct.subscribe(data => {
    result = (
      (data.beautifulPose.value       ? data.beautifulPose.value       : 0) * 100 +
      (data.flexibility.value         ? data.flexibility.value         : 0) * 100 +
      (data.naturalMovement.value     ? data.naturalMovement.value     : 0) * 100 +
      (data.bendingWeight.value       ? data.bendingWeight.value       : 0) * 100 +
      (data.jumpingHeight.value       ? data.jumpingHeight.value       : 0) * 100 +
      (data.bodyControl.value         ? data.bodyControl.value         : 0) * 100 +
      (data.heelRaise.value           ? data.heelRaise.value           : 0) * 100 +
      (data.weaknessAndStrength.value ? data.weaknessAndStrength.value : 0) * 100 +
      (data.connectMovement.value     ? data.connectMovement.value     : 0) * 100 +
      (data.apparatusControl.value    ? data.apparatusControl.value    : 0) * 100 +
      (data.musicImage.value          ? data.musicImage.value          : 0) * 100
    ) / 100
  });
</script>

<svelte:head>
	<title>ホーム</title>
</svelte:head>

<section id="judgement-form-section">
  <div class="form-container">
    A
    <h2 class="form-container__title">徒手の技術</h2>
    <Radio title={$executionDeduct.beautifulPose.title} options={options} bind:userSelected={$executionDeduct.beautifulPose.value}/>
    <Radio title={$executionDeduct.flexibility.title} options={options} bind:userSelected={$executionDeduct.flexibility.value}/>
    <Radio title={$executionDeduct.naturalMovement.title} options={options} bind:userSelected={$executionDeduct.naturalMovement.value}/>
    <Radio title={$executionDeduct.bendingWeight.title} options={options} bind:userSelected={$executionDeduct.bendingWeight.value}/>
    <Radio title={$executionDeduct.jumpingHeight.title} options={options} bind:userSelected={$executionDeduct.jumpingHeight.value}/>
    <Radio title={$executionDeduct.bodyControl.title} options={options} bind:userSelected={$executionDeduct.bodyControl.value}/>
    <Radio title={$executionDeduct.heelRaise.title} options={options} bind:userSelected={$executionDeduct.heelRaise.value}/>
    <Radio title={$executionDeduct.weaknessAndStrength.title} options={options} bind:userSelected={$executionDeduct.weaknessAndStrength.value}/>
    <Radio title={$executionDeduct.connectMovement.title} options={options} bind:userSelected={$executionDeduct.connectMovement.value}/>
    <h2 class="form-container__title">手具の技術</h2>
    <Radio title={$executionDeduct.apparatusControl.title} options={options} bind:userSelected={$executionDeduct.apparatusControl.value}/>
    <h2 class="form-container__title">音楽</h2>
    <Radio title={$executionDeduct.musicImage.title} options={options} bind:userSelected={$executionDeduct.musicImage.value}/>

    <h2>合計減点</h2>
    <div>
      {result}
    </div>

    B
    ミスによる減点（∞）

    １０．００　－　A　ー　B　＝

    決定点
  </div>
</section>
<style>
  #judgement-form-section {
    background: #dcecec;
  }

  .form-container {
    width:         720px;
    padding:       40px;
    margin:        0 auto;
    background:    white;
    border-radius: 8px;
  }

  .form-container__title {
    font-weight: bold;
    font-size:   24px;
  }
</style>
