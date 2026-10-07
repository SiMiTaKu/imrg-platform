<script lang="ts">
  /*
    演技面を上から見た図。V字の隊形が、逆V字に変わるまでを2コマで見せる。

    左の3人はその列のまま右へ、右の2人はその列のまま左へ動く。
    すれ違うので、2人が3人の列の中から出てくるように見える。

    絵は自分で描いたもので、冊子の図は見ていない（docs/rules-guide.md の 3-1）
  */

  /** 演技面の1辺。男子新体操は13m四方 */
  const SIDE = 100

  /** 動く前。V字（谷の形）。左の辺に3人、右の辺に2人 */
  const BEFORE = [
    { x: 20, y: 22, group: 'left' },
    { x: 35, y: 46, group: 'left' },
    { x: 50, y: 70, group: 'left' },
    { x: 65, y: 46, group: 'right' },
    { x: 80, y: 22, group: 'right' },
  ]

  /*
    動いた後。逆V字（山の形）。
    3人はその並びのまま右へ動いて右の辺になり、2人は左へ動いて左の辺になる。
    すれ違うので、2人が3人の列の中から出てくるように見える
  */
  const AFTER = [
    { x: 50, y: 22, group: 'left' },
    { x: 65, y: 46, group: 'left' },
    { x: 80, y: 70, group: 'left' },
    { x: 35, y: 46, group: 'right' },
    { x: 20, y: 70, group: 'right' },
  ]
</script>

<div class="figure">
  <div class="panel">
    <p class="label">動く前（V字）</p>
    <svg viewBox="0 0 {SIDE} {SIDE}" role="img" aria-label="V字に並んだ5人">
      <rect class="floor" x="1" y="1" width={SIDE - 2} height={SIDE - 2} rx="2" />
      <polyline class="line" points="20,22 35,46 50,70" />
      <polyline class="line" points="50,70 65,46 80,22" />
      {#each BEFORE as person, index (index)}
        <circle class="person {person.group}" cx={person.x} cy={person.y} r="6" />
      {/each}
      <!-- 左の3人は右へ、右の2人は左へ -->
      <path class="arrow left" d="M 30 88 L 58 88" marker-end="url(#head-left)" />
      <path class="arrow right" d="M 88 12 L 62 12" marker-end="url(#head-right)" />
      <defs>
        <marker
          id="head-left"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path class="head left" d="M 0 0 L 8 4 L 0 8 z" />
        </marker>
        <marker
          id="head-right"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path class="head right" d="M 0 0 L 8 4 L 0 8 z" />
        </marker>
      </defs>
    </svg>
  </div>

  <p class="between" aria-hidden="true">→</p>

  <div class="panel">
    <p class="label">動いた後（逆V字）</p>
    <svg viewBox="0 0 {SIDE} {SIDE}" role="img" aria-label="逆V字に並んだ5人">
      <rect class="floor" x="1" y="1" width={SIDE - 2} height={SIDE - 2} rx="2" />
      <polyline class="line" points="50,22 65,46 80,70" />
      <polyline class="line" points="20,70 35,46 50,22" />
      {#each AFTER as person, index (index)}
        <circle class="person {person.group}" cx={person.x} cy={person.y} r="6" />
      {/each}
    </svg>
  </div>
</div>

<style lang="scss">
  .figure {
    display: flex;
    gap: $space-size-8;
    align-items: center;
    justify-content: center;
  }

  .panel {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: $space-size-4;
    max-width: 240px;
  }

  .label {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }

  .between {
    font-size: $font-size-20;
    color: map.get($gray, light-text);
  }

  svg {
    width: 100%;
    height: auto;
  }

  .floor {
    fill: map.get($gray, background);
    stroke: map.get($gray, border);
    stroke-width: 1;
  }

  .line {
    fill: none;
    stroke: map.get($gray, border);
    stroke-dasharray: 3 3;
    stroke-width: 1;
  }

  /* 左の列と右の列を色で分けて、どちらがどう動いたか追えるようにする */
  .person.left {
    fill: map.get($sky-blue, button);
  }

  .person.right {
    fill: map.get($yellow, 400);
    stroke: map.get($gray, text);
    stroke-width: 1;
  }

  .arrow {
    fill: none;
    stroke-width: 2;
  }

  .arrow.left,
  .head.left {
    stroke: map.get($sky-blue, button);
    fill: map.get($sky-blue, button);
  }

  .arrow.right,
  .head.right {
    stroke: map.get($yellow, 600);
    fill: map.get($yellow, 600);
  }
</style>
