<script lang="ts">
  import { STICK_SKELETONS } from '@entities/rule'
  import type { StickPoint, StickPose } from '@entities/rule'

  const {
    frames,
    label,
    frameSize = 52,
  }: {
    /** 左から右へ並べる姿勢。コマ送りの1コマずつにあたる */
    frames: readonly StickPose[]
    /** 読み上げ用の技名。絵の代わりに読まれる */
    label: string
    /** 1コマの大きさ（px）。縦横は同じで、横はコマの数だけ伸びる */
    frameSize?: number
  } = $props()

  /*
    冊子の線画の代わりに出す、仮の棒人間。
    冊子の図解は技の動きを左から右へ数コマ並べたコマ送りなので、ここも同じように並べる。
    いずれプロジェクトのキャラクターのイラストに差し替えるので、
    本物の絵と見まちがえないよう、細い線1本の単色で描く。
    関節の位置は `STICK_SKELETONS` が持っていて、ここは描くだけにしてある
  */

  /** 1コマぶんの幅（viewBox の中での大きさ）。骨組みの座標がこの中に収まっている */
  const FRAME_WIDTH = 100

  /** 床の線を引く高さ */
  const GROUND_Y = 94

  /** コマの数。1つも無いときでも枠がつぶれないように、最低1つは置く */
  const frameCount = $derived(Math.max(frames.length, 1))

  /** コマごとの骨組み */
  const skeletons = $derived(frames.map((pose) => STICK_SKELETONS[pose]))

  /**
   * 床の線を引くか。
   *
   * @remarks
   * 跳んでいる途中のコマだけ床が消えると、絵が宙に浮いて見える。
   * 1コマでも床に触れていれば、冊子と同じく**端から端まで通しで**1本引く
   */
  const showsGround = $derived(skeletons.some((skeleton) => skeleton.onGround))

  /**
   * 関節の並びを、SVG の `points` に渡せる文字列にする
   * @param points - 付け根から先へ並べた関節
   * @returns 「x,y x,y」の形にした関節の並び
   */
  const toPoints = (points: readonly StickPoint[]): string =>
    points.map(({ x, y }) => `${x},${y}`).join(' ')

  /**
   * 何コマ目かを、そのコマを置く横のずれに直す
   * @param frameIndex - 左から何コマ目か（0 から数える）
   * @returns SVG の `transform` に渡すずらし方
   */
  const shiftOf = (frameIndex: number): string => `translate(${frameIndex * FRAME_WIDTH} 0)`
</script>

<svg
  class="stick-figure"
  width={frameSize * frameCount}
  height={frameSize}
  viewBox="0 0 {FRAME_WIDTH * frameCount} 100"
  role="img"
  aria-label={label}
>
  <!-- 床。倒立や座位で、どちらが上か分かるようにする。コマをまたいで1本引く -->
  {#if showsGround}
    <line class="ground" x1="6" y1={GROUND_Y} x2={FRAME_WIDTH * frameCount - 6} y2={GROUND_Y} />
  {/if}

  {#each skeletons as skeleton, frameIndex (frameIndex)}
    <g transform={shiftOf(frameIndex)}>
      <circle class="head" cx={skeleton.head.x} cy={skeleton.head.y} r={skeleton.headRadius} />
      <polyline class="limb" points={toPoints(skeleton.spine)} />

      {#each skeleton.arms as arm, armIndex (armIndex)}
        <polyline class="limb" points={toPoints(arm)} />
      {/each}

      {#each skeleton.legs as leg, legIndex (legIndex)}
        <polyline class="limb" points={toPoints(leg)} />
      {/each}
    </g>
  {/each}
</svg>

<style lang="scss">
  /*
    コマ送りの絵。ます目の中で中央に寄せたいので、行の中に置ける形にしてある。
    横はコマの数だけ伸びるが、列に入らないときは縦横の比を保ったまま縮む
  */
  .stick-figure {
    display: inline-block;
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
