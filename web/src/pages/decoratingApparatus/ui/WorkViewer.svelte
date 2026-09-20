<script lang="ts">
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

  const move = (step: number) => {
    index = (index + step + images.length) % images.length
  }

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
      <p class="count">作品 {workNumber}／{index + 1} 枚目（全 {images.length} 枚）</p>
      <button type="button" class="close" onclick={() => dialog?.close()}>閉じる</button>
    </header>

    <div
      class="stage"
      ontouchstart={onTouchStart}
      ontouchend={onTouchEnd}
      role="group"
      aria-label="作品の写真"
    >
      {#if images.length > 1}
        <button type="button" class="step back" onclick={() => move(-1)} aria-label="前の写真">
          ‹
        </button>
      {/if}

      <div class="photo">
        <ImageAssets
          width="100%"
          height="100%"
          {alt}
          lazy={false}
          imageSourceMeta={images[index]}
          objectFit="fill"
        />
      </div>

      {#if images.length > 1}
        <button type="button" class="step next" onclick={() => move(1)} aria-label="次の写真">
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
              aria-label="{dotIndex + 1} 枚目を見る"
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
    width: 100%;
    max-height: 74vh;
    overflow: hidden;
    border-radius: 6px;

    // 写真の縦横の比を保ったまま、入る大きさで見せる
    aspect-ratio: 1;
  }

  // 送る矢印は写真の左右に浮かせる
  .step {
    position: absolute;
    top: 50%;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    font-size: $font-size-30;
    line-height: 1;
    color: map.get($gray, text);
    border: 1px solid map.get($gray, 200);
    border-radius: 999px;
    background: rgb(255 255 255 / 92%);
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
