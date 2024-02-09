<script lang="ts" context="module">
  import type { Image } from '../../../ts/common/image'
</script>

<script lang="ts">
  import { toggleImageOpacityOnInterSection } from './_service/fade-in-image'
  export let image: Image
  export let width: string = 'auto'
  export let height: string = 'auto'
  export let isLazy: boolean = true // lazyloadのフラグ
  /** 画像をフェードインさせるかどうか */
  export let fadeIn: boolean = false

  const fadeInImage = fadeIn
    ? toggleImageOpacityOnInterSection
    : () => {}
</script>

<img
  {width}
  {height}
  src={image.url}
  loading={isLazy ? 'lazy' : 'eager'}
  alt={image.alt}
  style:transition={fadeIn ? '1s' : 'none'}
  style:opacity={fadeIn ? 0 : 1}
  use:fadeInImage
/>
