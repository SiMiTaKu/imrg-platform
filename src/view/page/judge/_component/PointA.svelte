<script context="module" lang="ts">
  import Radio from "./Radio.svelte";
</script>

<script lang="ts">
  import { executionDeduct } from "../_store/store";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
</script>

<div
  class="point-a"
  class:pc={!$page.data.isMobile}
  class:sp={$page.data.isMobile}
  in:fly={$page.data.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class="header">
    <h2 class="header-title">Aの減点項目</h2>
    <div class="header-annotation">
      ※あなたが感じた直感を信じて1〜10点満点で選択してください。
    </div>
  </header>
  <div class="section">
    <h3 class="section-title">徒手の技術</h3>
    <div class="question-list">
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
        title="動きの技術（膝の踏込み）"
        bind:userSelected={$executionDeduct.pointA.bendingWeight}
        annotation="どのくらい屈伸運動に強さを感じたか"
        uniqueId="bendingWeight"
      />
      <Radio
        title="跳躍の高さ"
        bind:userSelected={$executionDeduct.pointA.jumpingHeight}
        annotation="どのくらい高く跳躍していたか（タンブリングの高さではありません）"
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
        title="張り, 活気, 間, アクセント"
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
    </div>
  </div>
  <div class="section">
    <h3 class="section-title">手具の技術</h3>
    <Radio
      title="自然な手具操作"
      bind:userSelected={$executionDeduct.pointA.apparatusControl}
      annotation="どのくらい自然に手具を操作していたか"
      uniqueId="apparatusControl"
    />
  </div>
  <div class="section">
    <h3 class="section-title">音楽</h3>
    <Radio
      title="音楽のイメージ"
      bind:userSelected={$executionDeduct.pointA.musicImage}
      annotation="どのくらい音楽にあった演技をしていたか"
      uniqueId="musicImage"
    />
  </div>
</div>

<style lang="scss">
  .pc {
    --header-flex-direction: row;
    --gap: 16px;
    --section-font-size: 26px;
  }

  .sp {
    --header-flex-direction: column;
    --gap: 8px;
    --section-font-size: 24px;
  }

  .point-a {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .header {
    display: flex;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: var(--gap);
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .question-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section-title {
    font-size: var(--section-font-size);
  }
</style>
