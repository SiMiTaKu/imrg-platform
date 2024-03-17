<script lang="ts" context="module">
  import Radio from "./_component/Radio.svelte";
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
  import { fly } from "svelte/transition";

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
    {#if !$executionDeduct.pointA.beautifulPose || !$executionDeduct.pointA.flexibility || !$executionDeduct.pointA.naturalMovement || !$executionDeduct.pointA.bendingWeight || !$executionDeduct.pointA.jumpingHeight || !$executionDeduct.pointA.bodyControl || !$executionDeduct.pointA.heelRaise || !$executionDeduct.pointA.weaknessAndStrength || !$executionDeduct.pointA.connectMovement || !$executionDeduct.pointA.apparatusControl || !$executionDeduct.pointA.musicImage}
      <!-- Aの最後の回答がされるまで表示 -->
      <div
        class="form-container__radio-area"
        in:fly={{ x: 200, delay: 600 }}
      >
        <h2>Aの減点項目</h2>
        <div>※あなたが感じた直感を信じて1〜10点満点で選択してください。</div>
        <h3 class="form-container__title">徒手の技術</h3>
        <Radio
          title="美しい姿勢"
          bind:userSelected={$executionDeduct.pointA.beautifulPose}
          annotation="単純にどのくらい綺麗だと感じたか"
          uniqueId="beautifulPose"
        />
        <Radio
          title="柔軟性"
          bind:userSelected={$executionDeduct.pointA.flexibility}
          annotation="どのくらい身体の柔らかさを感じたか"
          uniqueId="flexibility"
        />
        <Radio
          title="動きの技術（自然・幅）"
          bind:userSelected={$executionDeduct.pointA.naturalMovement}
          annotation="どのくらい大きく、自然な動きで演技していたか"
          uniqueId="naturalMovement"
        />
        <Radio
          title="動きの技術（膝の踏み込み）"
          bind:userSelected={$executionDeduct.pointA.bendingWeight}
          annotation="どのくらい屈伸運動に強さを感じたか"
          uniqueId="bendingWeight"
        />
        <Radio
          title="跳躍の高さ"
          bind:userSelected={$executionDeduct.pointA.jumpingHeight}
          annotation="どのくらい高く跳躍していたか\nタンブリングの高さではありません"
          uniqueId="jumpingHeight"
        />
        <Radio
          title="四肢の制御"
          bind:userSelected={$executionDeduct.pointA.bodyControl}
          annotation="どのくらい身体を自在に操っていたか"
          uniqueId="bodyControl"
        />
        <Radio
          title="かかとの引き上げ"
          bind:userSelected={$executionDeduct.pointA.heelRaise}
          annotation="どのくらい踵（かかと）を高い位置で演技できていたか"
          uniqueId="heelRaise"
        />
        <Radio
          title="張りや活気、間、アクセント"
          bind:userSelected={$executionDeduct.pointA.weaknessAndStrength}
          annotation="どのくらい緩急や強弱を感じたか"
          uniqueId="weaknessAndStrength"
        />
        <Radio
          title="運動のつなぎの技術"
          bind:userSelected={$executionDeduct.pointA.connectMovement}
          annotation="どのくらい動きと動きの間が途切れることなく演技できていたか"
          uniqueId="connectMovement"
        />
        <h3 class="form-container__title">手具の技術</h3>
        <Radio
          title="自然な手具操作"
          bind:userSelected={$executionDeduct.pointA.apparatusControl}
          annotation="どのくらい自然に手具を操作していたか"
          uniqueId="apparatusControl"
        />
        <h3 class="form-container__title">音楽</h3>
        <Radio
          title="音楽のイメージ"
          bind:userSelected={$executionDeduct.pointA.musicImage}
          annotation="どのくらい音楽にあった演技をしていたか"
          uniqueId="musicImage"
        />
      </div>
    {/if}
    {#if $executionDeduct.pointA.beautifulPose && $executionDeduct.pointA.flexibility && $executionDeduct.pointA.naturalMovement && $executionDeduct.pointA.bendingWeight && $executionDeduct.pointA.jumpingHeight && $executionDeduct.pointA.bodyControl && $executionDeduct.pointA.heelRaise && $executionDeduct.pointA.weaknessAndStrength && $executionDeduct.pointA.connectMovement && $executionDeduct.pointA.apparatusControl && $executionDeduct.pointA.musicImage}
      <div
        class="form-container__miss-point-area"
        in:fly={{ x: 200, delay: 600 }}
      >
        <h2>Bの減点項目</h2>
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
    --container-width: 1024px;
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
