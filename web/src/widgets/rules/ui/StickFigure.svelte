<script lang="ts">
  import { STICK_SKELETONS } from '@entities/rule'
  import type { StickPoint, StickPose } from '@entities/rule'

  const {
    pose,
    label,
    size = 48,
  }: {
    /** 描く姿勢 */
    pose: StickPose
    /** 読み上げ用の技名。絵の代わりに読まれる */
    label: string
    /** 描く大きさ（px）。縦横は同じ */
    size?: number
  } = $props()

  /*
    冊子の線画の代わりに出す、仮の棒人間。
    いずれプロジェクトのキャラクターのイラストに差し替えるので、
    本物の絵と見まちがえないよう、細い線1本の単色で描く。
    関節の位置は `STICK_SKELETONS` が持っていて、ここは描くだけにしてある
  */
  const skeleton = $derived(STICK_SKELETONS[pose])

  /**
   * 関節の並びを、SVG の `points` に渡せる文字列にする
   * @param points - 付け根から先へ並べた関節
   * @returns 「x,y x,y」の形にした関節の並び
   */
  const toPoints = (points: readonly StickPoint[]): string =>
    points.map(({ x, y }) => `${x},${y}`).join(' ')
</script>

<svg
  class="stick-figure"
  width={size}
  height={size}
  viewBox="0 0 100 100"
  role="img"
  aria-label={label}
>
  <!-- 床。倒立や座位で、どちらが上か分かるようにする -->
  {#if skeleton.onGround}
    <line class="ground" x1="12" y1="94" x2="88" y2="94" />
  {/if}

  <circle class="head" cx={skeleton.head.x} cy={skeleton.head.y} r={skeleton.headRadius} />
  <polyline class="limb" points={toPoints(skeleton.spine)} />

  {#each skeleton.arms as arm, armIndex (armIndex)}
    <polyline class="limb" points={toPoints(arm)} />
  {/each}

  {#each skeleton.legs as leg, legIndex (legIndex)}
    <polyline class="limb" points={toPoints(leg)} />
  {/each}
</svg>

<style lang="scss">
  .stick-figure {
    display: block;
    max-width: 100%;
    height: auto;

    // 仮の絵なので、本文より一段淡い線の色にする
    color: map.get($gray, 600);
  }

  .head {
    fill: none;
    stroke: currentcolor;
    stroke-width: 3;
  }

  .limb {
    fill: none;
    stroke: currentcolor;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  // 床はさらに淡く、体の線と見分けられるように
  .ground {
    stroke: map.get($gray, 300);
    stroke-width: 2;
  }
</style>
