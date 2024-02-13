<script lang="ts" context="module">
  import { toggleImageOpacityOnInterSection } from "./_service/fade-in-image";
  export type SrcMeta = {
    format: string;
    src: string;
    width: number;
  };
</script>

<script lang="ts">
  export let srcMeta: SrcMeta[];
  export let lazy: boolean;
  export let width: string = "100%";
  export let height: string = "100%";
  export let alt: string;

  /** formatのデフォルト値 */
  const imgFormats = ["webp",
"jpg",
"png"];

  function getSrc(): string {
    const filterByJpg = srcMeta.filter((meta) => meta.format === "jpg");
    return filterByJpg.sort((a, b) => a.width - b.width)[0].src;
  }

  function getSrcSet(): string | undefined {
    const groupedSrcByFormat = imgFormats.map((format) => {
      return srcMeta.filter((m) => m.format === format);
    });
    return groupedSrcByFormat
      .flatMap((groupedSrc) =>
        groupedSrc.map((src, j) => `${src?.src} ${j + 1}x`)
      )
      .join(", ");
  }

  const fadeInImage = lazy ? toggleImageOpacityOnInterSection : () => {};
</script>

<img
  {alt}
  loading={lazy ? "lazy" : "eager"}
  src={getSrc()}
  srcset={getSrcSet()}
  style="width: {width}; height: {height};"
  use:fadeInImage
/>
