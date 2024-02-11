<script lang="ts" context="module">
  import Radio from "./_component/RadioPC.svelte";
  import ExecutionPointResultModalPC from "./_component/ExecutionPointResultModalPC.svelte";
  import ExecutionPointResultModalSP from "./_component/ExecutionPointResultModalSP.svelte";
  import {
    getResponsiveDesign,
    designOfPC,
    designOfSP,
  } from "../../../ts/common/responsive-design";
</script>

<script lang="ts">
  import { executionDeduct } from "./store/store";
  import { deductionOptions } from "./_service/model";
  import { fly } from "svelte/transition";

  const options = deductionOptions;

  let submitted: boolean = false;
  function submit() {
    submitted = true;
  }

  let screenWidth;
</script>

<svelte:window bind:outerWidth={screenWidth} />

<section
  class="judgement-form"
  class:pc={getResponsiveDesign(screenWidth) === designOfPC}
  class:sp={getResponsiveDesign(screenWidth) === designOfSP}
>
  <div class="form-container">
    <!--    @todo AとBをぱーつとしてHTMLを分ける。-->
    {#if $executionDeduct.pointA.beautifulPose.value === undefined || $executionDeduct.pointA.flexibility.value === undefined || $executionDeduct.pointA.naturalMovement.value === undefined || $executionDeduct.pointA.bendingWeight.value === undefined || $executionDeduct.pointA.jumpingHeight.value === undefined || $executionDeduct.pointA.bodyControl.value === undefined || $executionDeduct.pointA.heelRaise.value === undefined || $executionDeduct.pointA.weaknessAndStrength.value === undefined || $executionDeduct.pointA.connectMovement.value === undefined || $executionDeduct.pointA.apparatusControl.value === undefined || $executionDeduct.pointA.musicImage.value === undefined}
      <!-- Aの最後の回答がされるまで表示 -->
      <div
        class="form-container__radio-area"
        in:fly={{ x: 200, delay: 600 }}
        out:fly={{ x: -200, delay: 200 }}
      >
        <h2>Aの減点項目</h2>
        <div>※あなたが感じた直感を信じて1〜10点満点で選択してください。</div>
        <h3 class="form-container__title">徒手の技術</h3>
        <Radio
          {options}
          title={$executionDeduct.pointA.beautifulPose.title}
          bind:userSelected={$executionDeduct.pointA.beautifulPose.value}
          annotation={$executionDeduct.pointA.beautifulPose.annotation}
          uniqueId="beautifulPose"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.flexibility.title}
          bind:userSelected={$executionDeduct.pointA.flexibility.value}
          annotation={$executionDeduct.pointA.flexibility.annotation}
          uniqueId="flexibility"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.naturalMovement.title}
          bind:userSelected={$executionDeduct.pointA.naturalMovement.value}
          annotation={$executionDeduct.pointA.naturalMovement.annotation}
          uniqueId="naturalMovement"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.bendingWeight.title}
          bind:userSelected={$executionDeduct.pointA.bendingWeight.value}
          annotation={$executionDeduct.pointA.bendingWeight.annotation}
          uniqueId="bendingWeight"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.jumpingHeight.title}
          bind:userSelected={$executionDeduct.pointA.jumpingHeight.value}
          annotation={$executionDeduct.pointA.jumpingHeight.annotation}
          uniqueId="jumpingHeight"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.bodyControl.title}
          bind:userSelected={$executionDeduct.pointA.bodyControl.value}
          annotation={$executionDeduct.pointA.bodyControl.annotation}
          uniqueId="bodyControl"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.heelRaise.title}
          bind:userSelected={$executionDeduct.pointA.heelRaise.value}
          annotation={$executionDeduct.pointA.heelRaise.annotation}
          uniqueId="heelRaise"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.weaknessAndStrength.title}
          bind:userSelected={$executionDeduct.pointA.weaknessAndStrength.value}
          annotation={$executionDeduct.pointA.weaknessAndStrength.annotation}
          uniqueId="weaknessAndStrength"
        />
        <Radio
          {options}
          title={$executionDeduct.pointA.connectMovement.title}
          bind:userSelected={$executionDeduct.pointA.connectMovement.value}
          annotation={$executionDeduct.pointA.connectMovement.annotation}
          uniqueId="connectMovement"
        />
        <h3 class="form-container__title">手具の技術</h3>
        <Radio
          {options}
          title={$executionDeduct.pointA.apparatusControl.title}
          bind:userSelected={$executionDeduct.pointA.apparatusControl.value}
          annotation={$executionDeduct.pointA.apparatusControl.annotation}
          uniqueId="apparatusControl"
        />
        <h3 class="form-container__title">音楽</h3>
        <Radio
          {options}
          title={$executionDeduct.pointA.musicImage.title}
          bind:userSelected={$executionDeduct.pointA.musicImage.value}
          annotation={$executionDeduct.pointA.musicImage.annotation}
          uniqueId="musicImage"
        />
      </div>
    {/if}
    {#if $executionDeduct.pointA.beautifulPose.value !== undefined && $executionDeduct.pointA.flexibility.value !== undefined && $executionDeduct.pointA.naturalMovement.value !== undefined && $executionDeduct.pointA.bendingWeight.value !== undefined && $executionDeduct.pointA.jumpingHeight.value !== undefined && $executionDeduct.pointA.bodyControl.value !== undefined && $executionDeduct.pointA.heelRaise.value !== undefined && $executionDeduct.pointA.weaknessAndStrength.value !== undefined && $executionDeduct.pointA.connectMovement.value !== undefined && $executionDeduct.pointA.apparatusControl.value !== undefined && $executionDeduct.pointA.musicImage.value !== undefined}
      <div
        class="form-container__miss-point-area"
        in:fly={{ x: 200, delay: 600 }}
        out:fly={{ x: -200, delay: 200 }}
      >
        <h2>B</h2>
        <h3>手具を落とした回数</h3>
        <div class="form-dropped-apparatus">
          <h4>1つの手具を落とした回数</h4>
          <input
            type="number"
            step="1"
            min="0"
            class="form-miss-point"
            bind:value={$executionDeduct.pointB.droppedApparatus.singleApparatus
              .value}
          />
        </div>
        <div class="form-dropped-apparatus">
          <h4>2つの手具を同時に落とした回数</h4>
          <input
            type="number"
            step="1"
            min="0"
            class="form-miss-point"
            bind:value={$executionDeduct.pointB.droppedApparatus.doubleApparatus
              .value}
          />
        </div>
        <h3>{$executionDeduct.pointB.miss.title}</h3>
        <div class="form-miss-point-annotation">※数字で入力してください。</div>
        <input
          type="number"
          step="0.05"
          min="0"
          class="form-miss-point"
          bind:value={$executionDeduct.pointB.miss.value}
        />
        <!--  @TODO 値がなくても決定ボタンを押せてしまう。 -->
        <div class="form-submit-container">
          <button class="form-submit-container__button" on:click={submit}
            >決定</button
          >
        </div>
      </div>
    {/if}
    {#if getResponsiveDesign(screenWidth) === designOfPC}
      <ExecutionPointResultModalPC show={submitted} />
    {:else}
      <ExecutionPointResultModalSP show={submitted} />
    {/if}
  </div>
</section>

<style lang="scss">
  .pc {
    --container-width: 720px;
    --container-padding: 40px;
  }

  .sp {
    --container-width: 83%;
    --container-padding: 24px;
  }

  .judgement-form {
    background: #dcecec;

    .form-container {
      width: var(--container-width);
      padding: var(--container-padding);
      margin: 0 auto;
      background: white;
      border-radius: 8px;

      &__title {
        font-weight: bold;
        font-size: 24px;
      }
    }

    .form-dropped-apparatus {
      display: inline-block;
      width: 355px;
    }

    .form-miss-point {
      height: 56px;
      width: 200px;
      margin-bottom: 8px;
      padding-left: 24px;
      font-size: 20px;
      font-weight: bold;
      border: solid 4px #aaaaaa;
      border-radius: 8px;
      outline: none;
      transition: 0.3s;
      box-sizing: border-box;

      &:focus {
        border: solid 4px #32538d;
      }
    }

    .form-miss-point-annotation {
      margin-bottom: 16px;
    }

    .form-submit-container {
      text-align: center;

      &__button {
        width: 100px;
        height: 56px;
        font-weight: bold;
        font-size: 20px;
        color: white;
        border: unset;
        border-radius: 8px;
        background: #32538d;
        transition: 0.3s;

        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }
    }
  }
</style>
