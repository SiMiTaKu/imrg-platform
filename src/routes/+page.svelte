<script lang="ts">
  import Radio                from "./common/form/Radio.svelte";
  import { executionDeduct  } from '../ts/form/executionDeduct/store';
  import { deductionOptions } from '../ts/form/executionDeduct/model';
  import { fly              } from "svelte/transition";

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
    <div class="form-container__radio-area">
      A
      {#if $executionDeduct.connectMovement.value === undefined } <!-- 徒手の技術の最後の回答がされるまで表示 -->
        <h2 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>徒手の技術</h2>
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
        <h2 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>手具の技術</h2>
        <Radio title={$executionDeduct.apparatusControl.title} options={options} bind:userSelected={$executionDeduct.apparatusControl.value}/>
      {/if}
      {#if $executionDeduct.musicImage.value === undefined && $executionDeduct.apparatusControl.value !== undefined }
        <h2 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>音楽</h2>
        <Radio title={$executionDeduct.musicImage.title} options={options} bind:userSelected={$executionDeduct.musicImage.value}/>
      {/if}
    </div>
    
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
  
  .form-container__radio-area {
    display: block;
    height:  300px;
  }
</style>
