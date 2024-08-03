<script context='module' lang='ts'>
  import type { Image } from "$lib/common/image"
  import { toggleImageOpacityOnInterSection } from "./_service/fade-in-image"
</script>

<script lang='ts'>
  export let image: Image
  export let width: string = "auto"
  export let height: string = "auto"
  export let isLazy: boolean = true
  export let fadeIn: boolean = false

  const fadeInImage = fadeIn ? toggleImageOpacityOnInterSection : () => {}
</script>

<img
  style:transition={fadeIn ? "1s" : "none"}
  style:opacity={fadeIn ? 0 : 1}
  alt={image.alt}
  {height}
  loading={isLazy ? "lazy" : "eager"}
  src={image.src}
  {width}
  use:fadeInImage
/>
