<script lang="ts">
  export let title: string;
  export let userSelected: number;
  export let annotation: string;
  export let uniqueId: string;

  interface RadioDeduction {
    label: string;
    value: number;
  }

  const OPTIONS: RadioDeduction[] = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
</script>

<div class="radio-question">
  <div class="radio-question__title">{title}</div>
  <div class="radio-question__annotation">※{annotation}</div>
  <div
    role="radio"
    class="radio-group"
    aria-checked="false"
    aria-labelledby="label-${uniqueId}"
  >
    {#each OPTIONS as option}
      <input
        id={option.label + uniqueId}
        type="radio"
        value={option.value}
        aria-checked="false"
        bind:group={userSelected}
      />
      <label for={option.label + uniqueId}>{option.label}</label>
    {/each}
  </div>
</div>

<style lang="scss">
  .radio-question {
    margin-bottom: 24px;

    &__title {
      margin-bottom: 4px;
      font-size: 20px;
      font-weight: bold;
    }

    &__annotation {
      font-size: 15px;
      margin-bottom: 12px;
      font-weight: normal;
    }
  }

  .radio-group {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: #2c567e;
    color: white;
    opacity: 1;
  }

  label {
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    border-radius: 8px;
    background: #e1e1e1;
    color: #333333;
    text-align: center;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    &:focus {
      transition: 0.2s;
      opacity: 1;
    }
  }
</style>
