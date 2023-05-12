<script lang="ts">
  import Radio                     from './common/form/Radio.svelte';
  import ExecutionPointResultModal from './ExecutionPointResultModal.svelte'
  import { executionDeduct       } from '../ts/form/executionDeduct/store';
  import { deductionOptions      } from '../ts/form/executionDeduct/model';
  import { fly                   } from 'svelte/transition';

  const options = deductionOptions;

  let submitted: boolean = false;
  function submit() { submitted = true; }

  /**
   * @note Aの減点の合計を計算する処理
   * @note 整数値にしてから計算し直すことで、小数点のずれを無くしている
   * @return Aの減点の合計点
   */

  let aPoint;
  let bPoint;
  let decisionPoint;

  executionDeduct.subscribe(data => {
    aPoint = (
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
    bPoint        = data.miss.value ? data.miss.value : 0
    decisionPoint = 10.00 - (aPoint + bPoint);
  });
</script>

<svelte:head>
	<title>ホーム</title>
</svelte:head>

<section id="judgement-form-section">
  <div class="form-container">
    {#if $executionDeduct.musicImage.value === undefined } <!-- Aの最後の回答がされるまで表示 -->
      <div class="form-container__radio-area">
        <h2 in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>A</h2>
        {#if $executionDeduct.connectMovement.value === undefined } <!-- 徒手の技術の最後の回答がされるまで表示 -->
          <h3 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>徒手の技術</h3>
        {/if}
        {#if $executionDeduct.beautifulPose.value === undefined }
          <Radio title={$executionDeduct.beautifulPose.title} options={options} bind:userSelected={$executionDeduct.beautifulPose.value}/>
        {/if}
        {#if $executionDeduct.flexibility.value === undefined && $executionDeduct.beautifulPose.value !== undefined }
          <Radio title={$executionDeduct.flexibility.title} options={options} bind:userSelected={$executionDeduct.flexibility.value}/>
        {/if}
        {#if $executionDeduct.naturalMovement.value === undefined && $executionDeduct.flexibility.value !== undefined }
          <Radio title={$executionDeduct.naturalMovement.title} options={options} bind:userSelected={$executionDeduct.naturalMovement.value}/>
        {/if}
        {#if $executionDeduct.bendingWeight.value === undefined && $executionDeduct.naturalMovement.value !== undefined }
          <Radio title={$executionDeduct.bendingWeight.title} options={options} bind:userSelected={$executionDeduct.bendingWeight.value}/>
        {/if}
        {#if $executionDeduct.jumpingHeight.value === undefined && $executionDeduct.bendingWeight.value !== undefined }
          <Radio title={$executionDeduct.jumpingHeight.title} options={options} bind:userSelected={$executionDeduct.jumpingHeight.value}/>
        {/if}
        {#if $executionDeduct.bodyControl.value === undefined && $executionDeduct.jumpingHeight.value !== undefined }
          <Radio title={$executionDeduct.bodyControl.title} options={options} bind:userSelected={$executionDeduct.bodyControl.value}/>
        {/if}
        {#if $executionDeduct.heelRaise.value === undefined && $executionDeduct.bodyControl.value !== undefined }
          <Radio title={$executionDeduct.heelRaise.title} options={options} bind:userSelected={$executionDeduct.heelRaise.value}/>
        {/if}
        {#if $executionDeduct.weaknessAndStrength.value === undefined && $executionDeduct.heelRaise.value !== undefined }
          <Radio title={$executionDeduct.weaknessAndStrength.title} options={options} bind:userSelected={$executionDeduct.weaknessAndStrength.value}/>
        {/if}
        {#if $executionDeduct.connectMovement.value === undefined && $executionDeduct.weaknessAndStrength.value !== undefined }
          <Radio title={$executionDeduct.connectMovement.title} options={options} bind:userSelected={$executionDeduct.connectMovement.value}/>
        {/if}
        {#if $executionDeduct.apparatusControl.value === undefined && $executionDeduct.connectMovement.value !== undefined }
          <h3 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>手具の技術</h3>
          <Radio title={$executionDeduct.apparatusControl.title} options={options} bind:userSelected={$executionDeduct.apparatusControl.value}/>
        {/if}
        {#if $executionDeduct.musicImage.value === undefined && $executionDeduct.apparatusControl.value !== undefined }
          <h3 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>音楽</h3>
          <Radio title={$executionDeduct.musicImage.title} options={options} bind:userSelected={$executionDeduct.musicImage.value}/>
        {/if}
      </div>
    {/if}
    {#if $executionDeduct.musicImage.value !== undefined && submitted === false}
      <h2 in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>B</h2>
      <h3 in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>{$executionDeduct.miss.title}</h3>
      <input in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}
        type="number"
        step="0.05"
        max={10 - aPoint}
        class="form-miss-point"
        bind:value={$executionDeduct.miss.value}
      />
      <button in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}} type="button" on:click={submit()}>決定</button>
    {/if}
    <ExecutionPointResultModal aPoint={aPoint} bPoint={bPoint} decisionPoint={decisionPoint} show={submitted}/>
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
  
  .form-container__radio-area {
    display: block;
    height:  300px;
  }
  
  .form-miss-point {
    height:        40px;
    width:         200px;
    padding-left:  24px;
    font-size:     20px;
    font-weight:   bold;
    border:        solid 4px #AAAAAA;
    border-radius: 8px;
    outline:       none;
    transition:    .3s;
  }
  
  .form-miss-point:focus {
    border: solid 4px #32538D;
  }
</style>
