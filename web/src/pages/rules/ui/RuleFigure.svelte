<script lang="ts">
  import type { Image as RuleImage } from '@shared/model'
  import { Image } from '@shared/ui'

  const {
    image,
    caption,
  }: {
    /** 表や図の画像 */
    image: RuleImage
    /** 図の下に出す説明。無ければ画像の代替テキストを使う */
    caption?: string
  } = $props()

  let dialog = $state<HTMLDialogElement>()

  const open = () => dialog?.showModal()
  const close = () => dialog?.close()
</script>

<figure class="rule-figure">
  <!-- 表は細かいので、押したら大きく見られるようにする -->
  <button type="button" class="thumbnail" onclick={open} aria-label="{image.alt}を大きく見る">
    <Image {image} isLazy={true} />
    <span class="zoom" aria-hidden="true">＋ 拡大</span>
  </button>
  <figcaption>{caption ?? image.alt}</figcaption>
</figure>

<dialog bind:this={dialog} class="viewer" onclick={close} onclose={close}>
  <div class="viewer-inner">
    <p class="viewer-caption">{caption ?? image.alt}</p>
    <div class="viewer-image">
      <img src={image.src} alt={image.alt} />
    </div>
    <button type="button" class="viewer-close" onclick={close}>閉じる</button>
  </div>
</dialog>

<style lang="scss">
  .rule-figure {
    margin: 0;
    padding: $space-size-16 0 0;
  }

  .thumbnail {
    position: relative;
    display: block;
    width: 100%;
    padding: $space-size-12;
    border: 1px solid map.get($gray, 200);
    border-radius: 6px;
    background: $white;
    cursor: zoom-in;

    // 表は横に長い。縮めずに横へ送れるようにする
    overflow-x: auto;
  }

  .thumbnail:hover {
    border-color: map.get($sky-blue, border);
  }

  .zoom {
    position: absolute;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-10;
    color: $white;
    border-radius: 4px;
    background: rgb(0 0 0 / 55%);
    right: $space-size-8;
    bottom: $space-size-8;
  }

  figcaption {
    padding-top: $space-size-8;
    font-size: $font-size-12;
    line-height: 1.7;
    color: map.get($gray, light-text);
    text-align: center;
  }

  /* ─── 拡大して見る ─── */

  .viewer {
    width: min(96vw, 1400px);
    max-width: none;
    max-height: 92vh;
    padding: 0;
    border: 0;
    border-radius: 10px;
    background: $white;
  }

  .viewer::backdrop {
    background: rgb(0 0 0 / 70%);
  }

  .viewer-inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-12;
    max-height: 92vh;
    padding: $space-size-20;
  }

  .viewer-caption {
    margin: 0;
    font-size: $font-size-14;
    font-weight: bold;
  }

  .viewer-image {
    flex: 1;
    min-block-size: 0;
    overflow: auto;
  }

  .viewer-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .viewer-close {
    min-height: 44px;
    padding: 0 $space-size-32;
    font-size: $font-size-14;
    border: 1px solid map.get($gray, 200);
    border-radius: 6px;
    background: $white;
    align-self: center;
    cursor: pointer;
  }
</style>
