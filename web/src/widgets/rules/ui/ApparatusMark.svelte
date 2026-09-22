<script lang="ts">
  import { ApparatusKind } from '@entities/rule'

  const {
    kind,
    label,
    size = 28,
  }: {
    /** 手具の種類 */
    kind: ApparatusKind
    /** 読み上げ用の名前 */
    label: string
    /** 一辺の大きさ（px） */
    size?: number
  } = $props()
</script>

<!--
  冊子の採点票に並んでいる手具の絵。
  線画をなぞったものなので、線だけで描いて色は持たせない
-->
<svg
  class="mark"
  width={size}
  height={size}
  viewBox="0 0 40 40"
  role="img"
  aria-label={label}
  fill="none"
>
  {#if kind === ApparatusKind.STICK}
    <!-- 斜めの棒。両端が少し太い -->
    <line x1="10" y1="31" x2="30" y2="9" />
    <line x1="9" y1="32" x2="12" y2="29" stroke-width="3" />
    <line x1="28" y1="11" x2="31" y2="8" stroke-width="3" />
  {:else if kind === ApparatusKind.RING}
    <!-- 2つ重なった輪 -->
    <ellipse cx="17" cy="20" rx="7" ry="11" />
    <ellipse cx="23" cy="20" rx="7" ry="11" />
  {:else if kind === ApparatusKind.ROPE}
    <!-- 先が垂れた、ひと結びの縄 -->
    <path d="M14 8 C 8 18, 10 30, 20 31 C 29 32, 31 22, 24 19 C 18 16, 15 22, 18 26" />
  {:else}
    <!-- クラブ2本。細い柄と丸い頭 -->
    <line x1="14" y1="32" x2="19" y2="12" />
    <circle cx="19.5" cy="10" r="2.5" />
    <line x1="22" y1="32" x2="27" y2="12" />
    <circle cx="27.5" cy="10" r="2.5" />
  {/if}
</svg>

<style lang="scss">
  .mark {
    display: block;
    stroke: map.get($gray, 700);
    stroke-width: 1.4;
    stroke-linecap: round;
  }
</style>
