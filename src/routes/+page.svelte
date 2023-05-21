<script lang="ts">
  import Radio                     from './common/form/Radio.svelte';
  import ExecutionPointResultModal from './ExecutionPointResultModal.svelte';
  import { executionDeduct       } from '../ts/form/executionDeduct/store';
  import { deductionOptions      } from '../ts/form/executionDeduct/model';
  import { fly                   } from 'svelte/transition';

  const options = deductionOptions;

  let submitted: boolean = false;
  function submit() { submitted = true; }


  let aPoint;
  let bPoint;
  let decisionPoint;

  /**
   * @note Aの減点の合計を計算する処理
   * @note 整数値にしてから計算し直すことで、小数点のずれを無くしている
   * @return Aの減点の合計点
   */
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
        <h2 in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>Aの減点項目</h2>
        <div in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>
          ※あなたが感じた直感を信じて1〜10点満点で選択してください。
        </div>
        {#if $executionDeduct.connectMovement.value === undefined } <!-- 徒手の技術の最後の回答がされるまで表示 -->
          <h3 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>徒手の技術</h3>
        {/if}
        {#if $executionDeduct.beautifulPose.value === undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.beautifulPose.title}
                 bind:userSelected = {$executionDeduct.beautifulPose.value}
                 annotation        = {$executionDeduct.beautifulPose.annotation}
          />
        {/if}
        {#if $executionDeduct.flexibility.value === undefined && $executionDeduct.beautifulPose.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.flexibility.title}
                 bind:userSelected = {$executionDeduct.flexibility.value}
                 annotation        = {$executionDeduct.flexibility.annotation}
          />
        {/if}
        {#if $executionDeduct.naturalMovement.value === undefined && $executionDeduct.flexibility.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.naturalMovement.title}
                 bind:userSelected = {$executionDeduct.naturalMovement.value}
                 annotation        = {$executionDeduct.naturalMovement.annotation}
          />
        {/if}
        {#if $executionDeduct.bendingWeight.value === undefined && $executionDeduct.naturalMovement.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.bendingWeight.title}
                 bind:userSelected = {$executionDeduct.bendingWeight.value}
                 annotation        = {$executionDeduct.bendingWeight.annotation}
          />
        {/if}
        {#if $executionDeduct.jumpingHeight.value === undefined && $executionDeduct.bendingWeight.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.jumpingHeight.title}
                 bind:userSelected = {$executionDeduct.jumpingHeight.value}
                 annotation        = {$executionDeduct.jumpingHeight.annotation}
          />
        {/if}
        {#if $executionDeduct.bodyControl.value === undefined && $executionDeduct.jumpingHeight.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.bodyControl.title}
                 bind:userSelected = {$executionDeduct.bodyControl.value}
                 annotation        = {$executionDeduct.bodyControl.annotation}
          />
        {/if}
        {#if $executionDeduct.heelRaise.value === undefined && $executionDeduct.bodyControl.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.heelRaise.title}
                 bind:userSelected = {$executionDeduct.heelRaise.value}
                 annotation        = {$executionDeduct.heelRaise.annotation}
          />
        {/if}
        {#if $executionDeduct.weaknessAndStrength.value === undefined && $executionDeduct.heelRaise.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.weaknessAndStrength.title}
                 bind:userSelected = {$executionDeduct.weaknessAndStrength.value}
                 annotation        = {$executionDeduct.weaknessAndStrength.annotation}
          />
        {/if}
        {#if $executionDeduct.connectMovement.value === undefined && $executionDeduct.weaknessAndStrength.value !== undefined }
          <Radio options           = {options}
                 title             = {$executionDeduct.connectMovement.title}
                 bind:userSelected = {$executionDeduct.connectMovement.value}
                 annotation        = {$executionDeduct.connectMovement.annotation}
          />
        {/if}
        {#if $executionDeduct.apparatusControl.value === undefined && $executionDeduct.connectMovement.value !== undefined }
          <h3 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>手具の技術</h3>
          <Radio options           = {options}
                 title             = {$executionDeduct.apparatusControl.title}
                 bind:userSelected = {$executionDeduct.apparatusControl.value}
                 annotation        = {$executionDeduct.apparatusControl.annotation}
          />
        {/if}
        {#if $executionDeduct.musicImage.value === undefined && $executionDeduct.apparatusControl.value !== undefined }
          <h3 class="form-container__title" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>音楽</h3>
          <Radio options           = {options}
                 title             = {$executionDeduct.musicImage.title}
                 bind:userSelected = {$executionDeduct.musicImage.value}
                 annotation        = {$executionDeduct.musicImage.annotation}
          />
        {/if}
      </div>
    {/if}
    {#if $executionDeduct.musicImage.value !== undefined}
      <div class="form-container__miss-point-area" in:fly={{x: 200, delay: 600}} out:fly={{x: -200, delay: 200}}>
        <h2>B</h2>
        <h3>{$executionDeduct.miss.title}</h3>
        <div class="form-miss-point-annotation">※数字で入力してください。</div>
        <input
          type="number"
          step="0.05"
          max={10 - aPoint}
          class="form-miss-point"
          bind:value={$executionDeduct.miss.value}
        />
        <button class="form-miss-point-submit-button" on:click={submit}>決定</button>
      </div>
    {/if}
    <ExecutionPointResultModal aPoint={aPoint} bPoint={bPoint} decisionPoint={decisionPoint} show={submitted}/>
  </div>
</section>
<style lang="scss">
  #judgement-form-section {
    background: #DCECEC;

    .form-container {
      width:         720px;
      height:        300px;
      padding:       40px;
      margin:        0 auto;
      background:    white;
      border-radius: 8px;

      &__title {
        font-weight: bold;
        font-size:   24px;
      }
    }


    .form-miss-point {
      height:        56px;
      width:         200px;
      margin-bottom: 8px;
      padding-left:  24px;
      font-size:     20px;
      font-weight:   bold;
      border:        solid 4px #AAAAAA;
      border-radius: 8px;
      outline:       none;
      transition:    .3s;
      box-sizing:    border-box;

      &:focus {
        border: solid 4px #32538D;
      }
    }

    .form-miss-point-annotation {
      margin-bottom: 16px;
    }


    .form-miss-point-submit-button {
      width:         100px;
      height:        56px;
      font-weight:   bold;
      font-size:     20px;
      color:         white;
      border:        unset;
      border-radius: 8px;
      background:    #32538D;
      transition:    .3s;

      &:hover {
        cursor:  pointer;
        opacity: .5;
      }
    }
  }
</style>
