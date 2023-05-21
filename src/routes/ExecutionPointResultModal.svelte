<script lang="ts">
  import { fade } from 'svelte/transition';
  export let aPoint:        number;
  export let bPoint:        number;
  export let decisionPoint: number;
  export let show;
</script>

{#if show}
  <section id="execution-point-result-modal" transition:fade>
    <div class="modal-overlay" on:click={close} />
    <div class="decision-point-container">
      <h2 class="decision-point-container__title">決定点</h2>
      <div class="decision-point-container__format">10.00　-　( {aPoint.toFixed(3)} + {bPoint.toFixed(3)} )</div>
      <div class="decision-point-container__result">{decisionPoint.toFixed(3)}</div>
    </div>
  </section>
{/if}

<style lang="scss">
  #execution-point-result-modal {
    position: fixed;
    top:      0;
    left:     0;
    right:    0;
    bottom:   0;
  }

  .modal-overlay {
    position:         fixed;
    top:              0;
    left:             0;
    right:            0;
    bottom:           0;
    background-color: #333333;
    opacity:          0.7;
  }

  .decision-point-container {
    position:         relative;
    top:              50%;
    left:             50%;
    width:            400px;
    padding:          100px 50px;
    transform:        translate(-50%, -50%);
    background-color: white;
    border-radius:    8px;

    &__title {
      display:       inline-block;
      padding:       0 24px;
      font-size:     24px;
      font-weight:   bold;
      color:         white;
      margin:        0 0 16px;
      border-radius: 8px;
      background:    #32538D;
    }

    &__format {
      font-size:     24px;
      margin-bottom: 16px;
    }

    &__result {
      padding-left: 20px;
      font-size:    40px;
      font-weight:  bold;
    }

    &__result:after {
      content:    "";
      position:   absolute;
      display:    block;
      width:      200px;
      height:     4px;
      left:       40px;
      background: #AAAAAA;
    }
  }
</style>