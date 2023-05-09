<script lang="ts">

  type radioDeduction = {
    label:     string,
    deduction: number,
  };

  const options: radioDeduction[] = [
    { label: "0",  deduction: 0.5  },
    { label: "1",  deduction: 0.45 },
    { label: "2",  deduction: 0.4  },
    { label: "3",  deduction: 0.35 },
    { label: "4",  deduction: 0.3  },
    { label: "5",  deduction: 0.25 },
    { label: "6",  deduction: 0.2  },
    { label: "7",  deduction: 0.15 },
    { label: "8",  deduction: 0.1  },
    { label: "9",  deduction: 0.05 },
    { label: "10", deduction: 0    },
  ];

  const uniqueID = Math.floor(Math.random() * 100);
  let userSelected;
</script>

<svelte:head>
	<title>ホーム</title>
</svelte:head>

<section>
	<div
    role            = "radio"
    class           = "group-container"
    aria-labelledby = "label-${uniqueID}">
    {#each options as option}
      <input
        id           = {option.label}
        type         = "radio"
        value        = {option.deduction}
        aria-checked = false
        bind:group   = {userSelected}
      />
      <label for={option.label}>{option.label}</label>
    {/each}
  </div>

  {#if userSelected !== undefined}
    <div>減点：{userSelected}</div>
  {/if}
  A
  徒手の技術
  美しい姿勢 ～0.5
  柔軟性 ～0.5
  動きの技術（自然・幅） ～0.5
  動きの技術（膝の踏み込み） ～0.5
  跳躍の高さ ～0.5
  四肢の制御 ～0.5
  かかとの引き上げ ～0.5
  張りや活気、間、アクセント ～0.5
  運動のつなぎの技術 ～0.5

  手具の技術
  自然な手具操作に欠ける ～0.5

  音楽
  音楽のイメージ ～0.5

  B
  ミスによる減点（∞）

  １０．００　－　A　ー　B　＝

  決定点
</section>

<style>

</style>
