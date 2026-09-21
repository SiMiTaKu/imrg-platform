<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { ImageAssets } from '@shared/ui'
  import type { ImageSourceMeta } from '@shared/ui'

  const {
    images,
    workNumber,
    alt,
    onClose,
  }: {
    /** 見せる作品の写真 */
    images: ImageSourceMeta[][]
    /** 何番目の作品か（1 始まり） */
    workNumber: number
    /** 写真の代わりに読む文 */
    alt: string
    /** 閉じるときに呼ぶ */
    onClose: () => void
  } = $props()

  // 開いたときは1枚目から見せる
  let index = $state(0)
  let dialog = $state<HTMLDialogElement>()

  $effect(() => {
    dialog?.showModal()
  })

  /**
   * 写真を送る。端まで行ったら反対の端へ回り、終わりなく送れる
   * @param step - 送る枚数（戻るときは負の数）
   */
  const move = (step: number) => {
    index = (index + step + images.length) % images.length
  }

  /**
   * いちばん大きい変換結果を返す
   * @param sources - 1枚の写真の、大きさ違いの変換結果
   * @returns いちばん幅の広い変換結果
   *
   * @remarks
   * 写真そのものの縦横の比を `width` と `height` に渡すために使う。
   * 枠の比に合わせて引き伸ばさないようにする
   */
  const largest = (sources: ImageSourceMeta[]) =>
    sources.reduce((max, source) => (source.width > max.width ? source : max), sources[0])

  /**
   * 左右の矢印の鍵で写真を送る
   * @param event - 鍵の出来事
   */
  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') move(1)
    if (event.key === 'ArrowLeft') move(-1)
  }

  // 指でなぞって送る。横に 40px 以上動いたら1枚送る
  let touchStartX = 0
  const onTouchStart = (event: TouchEvent) => {
    touchStartX = event.changedTouches[0].clientX
  }
  const onTouchEnd = (event: TouchEvent) => {
    const distance = event.changedTouches[0].clientX - touchStartX
    if (Math.abs(distance) >= 40) move(distance < 0 ? 1 : -1)
  }
</script>

<dialog bind:this={dialog} class="viewer" onclose={onClose} onkeydown={onKeydown}>
  <div class="inner">
    <header>
      <p class="count">
        {m.decorating_apparatus_viewer_count({
          work: workNumber,
          index: index + 1,
          total: images.length,
        })}
      </p>
      <button type="button" class="close" onclick={() => dialog?.close()}>
        {m.decorating_apparatus_viewer_close()}
      </button>
    </header>

    <div
      class="stage"
      ontouchstart={onTouchStart}
      ontouchend={onTouchEnd}
      role="group"
      aria-label={m.decorating_apparatus_viewer_stage_label()}
    >
      {#if images.length > 1}
        <button
          type="button"
          class="step back"
          onclick={() => move(-1)}
          aria-label={m.decorating_apparatus_viewer_prev()}
        >
          ‹
        </button>
      {/if}

      <!--
        写真は全部を同じ場所に重ねて置き、いま見せる1枚だけを前に出して透過を解く。
        最後の次が最初に戻るときも、入れ替わりの合間に中が白く抜けない
      -->
      {#each images as image, photoIndex (photoIndex)}
        <div class="photo" class:showing={photoIndex === index}>
          <ImageAssets
            width={largest(image).width}
            height={largest(image).height}
            alt={photoIndex === index ? alt : ''}
            lazy={photoIndex !== 0}
            imageSourceMeta={image}
          />
        </div>
      {/each}

      {#if images.length > 1}
        <button
          type="button"
          class="step next"
          onclick={() => move(1)}
          aria-label={m.decorating_apparatus_viewer_next()}
        >
          ›
        </button>
      {/if}
    </div>

    {#if images.length > 1}
      <ol class="dots">
        {#each images as _, dotIndex (dotIndex)}
          <li>
            <button
              type="button"
              class:current={dotIndex === index}
              onclick={() => (index = dotIndex)}
              aria-label={m.decorating_apparatus_viewer_dot_label({ index: dotIndex + 1 })}
              aria-current={dotIndex === index}
            ></button>
          </li>
        {/each}
      </ol>
    {/if}
  </div>
</dialog>

<style lang="scss">
  .viewer {
    width: min(96vw, 1100px);
    max-width: none;
    max-height: 94vh;
    padding: 0;
    border: 0;
    border-radius: 10px;
    background: $white;
  }

  .viewer::backdrop {
    background: rgb(0 0 0 / 80%);
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    max-height: 94vh;
    padding: $space-size-16;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-size-16;
  }

  .count {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
    font-variant-numeric: tabular-nums;
  }

  .close {
    min-height: 40px;
    padding: 0 $space-size-20;
    font-size: $font-size-14;
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    border-radius: 6px;
    background: $white;
  }

  .stage {
    position: relative;
    display: grid;
    place-items: center;
    min-block-size: 0;
  }

  .photo {
    display: flex;
    grid-area: 1 / 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    border-radius: 6px;

    // 送るたびに写真を入れ替える。下の写真は消さずに残す
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .photo.showing {
    opacity: 1;
  }

  // 写真の縦横の比は変えない。枠に入る大きさまで縮めるだけにする
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
  .photo :global(img) {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 74vh;
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */

  // 送る矢印は写真の左右に浮かせる。
  // 重ねた写真は透過の途中で前に出るため、矢印はそれより前に置く。
  // z-index を外すと、戻る矢印だけが写真の裏に回って押せなくなる
  .step {
    position: absolute;
    z-index: 1;
    top: 50%;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    font-size: $font-size-30;
    line-height: 1;

    // 写真を隠しすぎないよう地を透かす。矢印は白にして、透けた青の上でも読めるようにする
    color: $white;
    border: none;
    border-radius: 999px;
    background: rgba(map.get($sky-blue, button), 0.7);
    transform: translateY(-50%);
  }

  .back {
    left: $space-size-8;
  }

  .next {
    right: $space-size-8;
  }

  .dots {
    display: flex;
    gap: $space-size-8;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .dots button {
    width: 10px;
    height: 10px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: map.get($gray, 200);
  }

  .dots button.current {
    background: map.get($sky-blue, button);
  }
</style>
