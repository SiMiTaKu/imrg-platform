<script lang="ts" module>
  /** vite-imagetools の `&as=meta` で読み込んだ画像の情報 */
  export interface ImageSourceMeta {
    /** 画像のパス */
    src: string
    /** 幅（px） */
    width: number
    /** 高さ（px） */
    height: number
    /** 形式（webp など） */
    format: string
  }

  /** srcset に並べる形式 */
  const IMAGE_FORMATS = ['webp', 'png']
</script>

<script lang="ts">
  /** 画像（複数の大きさ・形式）の引数 */
  interface Props {
    /** 画像の情報。大きさと形式ごとに複数 */
    imageSourceMeta: ImageSourceMeta[]
    /** 画面に入ってから読み込むか */
    lazy?: boolean
    /** 幅（px か `100%`） */
    width: number | '100%'
    /** 高さ（px か `100%`） */
    height: number | '100%'
    /** 代替テキスト */
    alt: string
    /** 枠に合わせる方法 */
    objectFit?: 'cover' | 'fill'
  }

  const { imageSourceMeta, lazy = true, width, height, alt, objectFit = 'cover' }: Props = $props()

  // 一番小さい webp を src にする
  const src = $derived(
    imageSourceMeta.filter((meta) => meta.format === 'webp').sort((a, b) => a.width - b.width)[0]
      ?.src,
  )
  // 形式ごとに、小さい順に 1x, 2x … を付ける
  const srcset = $derived(
    IMAGE_FORMATS.map((format) => imageSourceMeta.filter((meta) => meta.format === format))
      .flatMap((group) => group.map((meta, index) => `${meta.src} ${index + 1}x`))
      .join(', '),
  )
</script>

<img
  {width}
  {height}
  {src}
  {alt}
  loading={lazy ? 'lazy' : 'eager'}
  {srcset}
  style:object-fit={objectFit}
  style:vertical-align="top"
/>
