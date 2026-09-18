<script lang="ts">
  import type { Image } from '@shared/model'
  import { toggleImageOpacityOnInterSection } from './lib/fadeInImage'

  /** 画像の引数 */
  interface Props {
    /** 画像のパスと代替テキスト */
    image: Image
    /** 幅（`img` の width 属性の値） */
    width?: string
    /** 高さ（`img` の height 属性の値） */
    height?: string
    /** 画面に入ってから読み込むか */
    isLazy?: boolean
    /** 画面に入ったときにふわっと表示するか */
    fadeIn?: boolean
  }

  const { image, width = 'auto', height = 'auto', isLazy = true, fadeIn = false }: Props = $props()

  /**
   * フェードインを指定したときだけ、画面に入ったら表示する
   * @param element - 画像の要素
   */
  const fadeInImage = (element: HTMLImageElement) => {
    if (fadeIn) toggleImageOpacityOnInterSection(element)
  }
</script>

<img
  style:transition={fadeIn ? '1s' : 'none'}
  style:opacity={fadeIn ? 0 : 1}
  {width}
  {height}
  src={image.src}
  alt={image.alt}
  loading={isLazy ? 'lazy' : 'eager'}
  use:fadeInImage
/>
