<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { ImageAssets } from '@shared/ui'
  import type { ImageSourceMeta } from '@shared/ui'

  const {
    images,
    workNumber,
    alt,
    onOpen,
  }: {
    /** 作品の写真 */
    images: ImageSourceMeta[][]
    /** 何番目の作品か（1 始まり） */
    workNumber: number
    /** 写真の代わりに読む文 */
    alt: string
    /** 押して大きく見るときに呼ぶ */
    onOpen: () => void
  } = $props()
</script>

<li class="tile">
  <button
    type="button"
    onclick={onOpen}
    aria-label={m.decorating_apparatus_work_zoom_label({ alt })}
  >
    <span class="photo">
      <ImageAssets
        width="100%"
        height="100%"
        {alt}
        lazy={true}
        imageSourceMeta={images[0]}
        objectFit="cover"
      />
    </span>
    <span class="foot">
      <span class="number">{m.decorating_apparatus_work_number({ number: workNumber })}</span>
      {#if images.length > 1}
        <span class="sheets">{m.decorating_apparatus_work_sheets({ count: images.length })}</span>
      {/if}
      <span class="zoom" aria-hidden="true">{m.decorating_apparatus_work_zoom()}</span>
    </span>
  </button>
</li>

<style lang="scss">
  .tile {
    display: flex;
  }

  button {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    overflow: hidden;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    cursor: zoom-in;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
  }

  button:hover {
    border-color: map.get($sky-blue, border);
    transform: translateY(-2px);
  }

  .photo {
    display: block;
    width: 100%;

    // 手具の写真は正方形に近い。切り取らずに並べる
    aspect-ratio: 1;
    overflow: hidden;
    background: map.get($gray, 50);
  }

  .foot {
    display: flex;
    align-items: center;
    gap: $space-size-8;
    padding: $space-size-12 $space-size-16;
  }

  .number {
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($gray, text);
  }

  .sheets {
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
  }

  .zoom {
    margin-left: auto;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }
</style>
