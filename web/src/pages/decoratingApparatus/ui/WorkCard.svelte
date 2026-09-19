<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
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

  /**
   * カードを裏返す
   */
  const flip = () => {
    faces = flipCard(faces, images.length)
  }
</script>

<button class="card" class:flipped={faces.flipped} type="button" onclick={flip}>
  {#if !faces.flipped}
    <div class="front" in:fade={{ delay: 250, duration: 200 }} out:fade>
      <ImageAssets
        width={$pageData.isMobile ? 338 : 331}
        height={$pageData.isMobile ? 338 : 331}
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
    <div class="back" in:fade={{ delay: 250, duration: 200 }} out:fade>
      <ImageAssets
        width={$pageData.isMobile ? 338 : 331}
        height={$pageData.isMobile ? 338 : 331}
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

<style lang="scss">
  .card {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    transition: 1s;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 0 8px rgb(0, 0, 0, 0.5);
    transform: rotateY(0);
  }

  .front {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
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
</style>
