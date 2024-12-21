<script context='module' lang='ts'>
  export type SrcMeta = {
    src: string;
    width: number;
    height: number;
    format: string;
  };
</script>

<script lang='ts'>
  export let srcMeta: SrcMeta[]
  export let lazy: boolean = true
  export let width: number
  export let height: number
  export let alt: string
  export let objectFit: "cover" | "fill" = "cover"

  /** formatのデフォルト値 */
  const imgFormats = [ "webp", "png" ]

  function getSrc(): string {
    const filterByJpg = srcMeta.filter((meta) => meta.format === "webp")
    return filterByJpg.sort((a, b) => a.width - b.width)[0].src
  }

  function getSrcSet(): string | undefined {
    const groupedSrcByFormat = imgFormats.map((format) => {
      return srcMeta.filter((m) => m.format === format)
    })
    return groupedSrcByFormat
      .flatMap((groupedSrc) =>
        groupedSrc.map((src, j) => `${src?.src} ${j + 1}x`)
      )
      .join(", ")
  }
</script>

<img
  {width}
  {height}
  src={getSrc()}
  {alt}
  loading={lazy ? "lazy" : "eager"}
  srcset={getSrcSet()}
  style:object-fit={objectFit}
  style:vertical-align='top'
/>
