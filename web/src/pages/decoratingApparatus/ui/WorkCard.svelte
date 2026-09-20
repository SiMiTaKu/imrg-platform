<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { ImageAssets } from '@shared/ui'
  import type { ImageSourceMeta } from '@shared/ui'
  import { fade } from 'svelte/transition'
  import { flipCard, type CardFaces } from '../lib/flipCard'

  /** 作品カード（押すと裏返って次の写真を見せる）の引数 */
  interface Props {
    /** 作品の写真 */
    images: ImageSourceMeta[][]
    /** 作品の番号（0 始まり） */
    workIndex: number
  }

  const { images, workIndex }: Props = $props()

  // 裏の写真は、表の次の写真から始める
  let faces: CardFaces = $state({ frontImageIndex: 0, backImageIndex: 1, flipped: false })
  // 写真が1枚だけの作品でも、裏に同じ写真を出せるようにする
  const backImageIndex = $derived(faces.backImageIndex % images.length)
  // 何枚目を見ているか（1 始まり）
  const currentNumber = $derived((faces.flipped ? backImageIndex : faces.frontImageIndex) + 1)

  /**
   * カードを裏返す
   */
  const flip = () => {
    faces = flipCard(faces, images.length)
  }
</script>

<div class="work-card">
  <button class="card" class:flipped={faces.flipped} type="button" onclick={flip}>
    {#if !faces.flipped}
      <div class="face front" in:fade={{ delay: 250, duration: 200 }} out:fade>
        <ImageAssets
          width="100%"
          height="100%"
          alt={m.decorating_apparatus_work_image_alt({
            work: workIndex + 1,
            image: faces.frontImageIndex + 1,
          })}
          lazy={true}
          imageSourceMeta={images[faces.frontImageIndex]}
          objectFit="cover"
        />
      </div>
    {:else}
      <div class="face back" in:fade={{ delay: 250, duration: 200 }} out:fade>
        <ImageAssets
          width="100%"
          height="100%"
          alt={m.decorating_apparatus_work_image_alt({
            work: workIndex + 1,
            image: backImageIndex + 1,
          })}
          imageSourceMeta={images[backImageIndex]}
          objectFit="cover"
        />
      </div>
    {/if}
  </button>

  <!-- 押せることが分かるように、何枚目かを写真の下に置く。写真には重ねない -->
  <p class="hint">
    <span class="counter">{currentNumber} / {images.length}</span>
    押すと別の角度
  </p>
</div>

<style lang="scss">
  .work-card {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    width: 100%;
    min-width: 0;
  }

  .card {
    // 表と裏は grid の同じマス目に置く。position: absolute で重ねない
    display: grid;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border: 1px solid map.get($sky-blue, 100);
    border-radius: 8px;
    background-color: $white;
    transition: transform 1s ease;
    aspect-ratio: 1;
    overflow: hidden;
    cursor: pointer;
    transform: rotateY(0);
  }

  .card:hover {
    border-color: map.get($sky-blue, border);
  }

  .face {
    grid-area: 1 / 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  // ImageAssets の img は高さが auto になるので、ここで枠いっぱいに伸ばす
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
  .face :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */

  .front {
    z-index: 1;
  }

  .back {
    z-index: 0;
    transform: rotateY(180deg);
  }

  .card.flipped {
    transform: rotateY(180deg);

    .front {
      z-index: 0;
    }

    .back {
      z-index: 1;
    }
  }

  .hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $space-size-4;
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }

  .counter {
    padding: $space-size-2 $space-size-8;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
    font-variant-numeric: tabular-nums;
  }
</style>
