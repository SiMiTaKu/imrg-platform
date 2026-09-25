<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { ImageAssets } from '@shared/ui'
  import type { ImageSourceMeta } from '@shared/ui'

  const {
    images,
    alt,
    onOpen,
  }: {
    /** 作品の写真 */
    images: ImageSourceMeta[][]
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

    <!-- 押せることが分かるように、指でタップする印を写真の上部に重ねる -->
    <span class="tap" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          fill="currentColor"
          d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"
        />
      </svg>
    </span>
  </button>
</li>

<style lang="scss">
  .tile {
    display: flex;
    min-width: 0;
  }

  // 写真と印は grid の同じマス目に重ねる。position: absolute で重ねない
  button {
    display: grid;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: map.get($gray, 50);
    cursor: zoom-in;

    // 隣とぴったり並ぶよう、どのタイルも同じ正方形にする
    aspect-ratio: 1;
  }

  .photo {
    display: block;
    grid-area: 1 / 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  button:hover .photo {
    transform: scale(1.04);
  }

  // ImageAssets の img は高さが auto になるので、ここで枠いっぱいに伸ばす
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */
  .photo :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-pseudo-class-disallowed-list */

  .tap {
    display: grid;
    grid-area: 1 / 1;
    place-items: center;
    place-self: start end;
    width: 30px;
    height: 30px;
    margin: $space-size-8;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: rgb(255 255 255 / 88%);
    box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
  }
</style>
