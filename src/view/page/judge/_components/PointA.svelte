<script context='module' lang='ts'>
  import Radio from "./Radio.svelte";
</script>

<script lang='ts'>
  import { executionDeduct } from "../_store/store";
  import { fly } from "svelte/transition";
  import { pageData } from "../../../atomic/device-store/store";
</script>

<div
  class='point-a'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
  in:fly={$pageData.isMobile ? { y: 50 } : { x: 200 }}
>
  <header class='header'>
    <h2>Aの減点項目</h2>
    <div>※あなたが感じた直感を信じて1〜10点満点で選択してください。</div>
  </header>
  <div class='section'>
    <h3 class='section-title'>徒手の技術</h3>
    <div class='question-list'>
      <Radio
        annotation='単純にどのくらい綺麗だと感じたか'
        title='美しい姿勢'
        uniqueId='beautifulPose'
        bind:userSelected={$executionDeduct.pointA.beautifulPose}
      />
      <Radio
        annotation='どのくらい身体の柔らかさを感じたか'
        title='柔軟性'
        uniqueId='flexibility'
        bind:userSelected={$executionDeduct.pointA.flexibility}
      />
      <Radio
        annotation='どのくらい大きく、自然な動きで演技していたか'
        title='動きの技術（自然・幅）'
        uniqueId='naturalMovement'
        bind:userSelected={$executionDeduct.pointA.naturalMovement}
      />
      <Radio
        annotation='どのくらい屈伸運動に強さを感じたか'
        title='動きの技術（膝の踏込み）'
        uniqueId='bendingWeight'
        bind:userSelected={$executionDeduct.pointA.bendingWeight}
      />
      <Radio
        annotation='どのくらい高く跳躍していたか（タンブリングの高さではありません）'
        title='跳躍の高さ'
        uniqueId='jumpingHeight'
        bind:userSelected={$executionDeduct.pointA.jumpingHeight}
      />
      <Radio
        annotation='どのくらい身体を自在に操っていたか'
        title='四肢の制御'
        uniqueId='bodyControl'
        bind:userSelected={$executionDeduct.pointA.bodyControl}
      />
      <Radio
        annotation='どのくらい踵（かかと）を高い位置で演技できていたか'
        title='かかとの引き上げ'
        uniqueId='heelRaise'
        bind:userSelected={$executionDeduct.pointA.heelRaise}
      />
      <Radio
        annotation='どのくらい緩急や強弱を感じたか'
        title='張り, 活気, 間, アクセント'
        uniqueId='weaknessAndStrength'
        bind:userSelected={$executionDeduct.pointA.weaknessAndStrength}
      />
      <Radio
        annotation='どのくらい動きと動きの間が途切れることなく演技できていたか'
        title='運動のつなぎの技術'
        uniqueId='connectMovement'
        bind:userSelected={$executionDeduct.pointA.connectMovement}
      />
    </div>
  </div>
  <div class='section'>
    <h3 class='section-title'>手具の技術</h3>
    <Radio
      annotation='どのくらい自然に手具を操作していたか'
      title='自然な手具操作'
      uniqueId='apparatusControl'
      bind:userSelected={$executionDeduct.pointA.apparatusControl}
    />
  </div>
  <div class='section'>
    <h3 class='section-title'>音楽</h3>
    <Radio
      annotation='どのくらい音楽にあった演技をしていたか'
      title='音楽のイメージ'
      uniqueId='musicImage'
      bind:userSelected={$executionDeduct.pointA.musicImage}
    />
  </div>
</div>

<style lang='scss'>
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
