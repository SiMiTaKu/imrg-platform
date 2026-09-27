<script lang="ts">
  import FormationVToInvertedV from './figures/FormationVToInvertedV.svelte'

  /** 本文に出す絵 */
  interface Props {
    /** どの絵か */
    figureKey: string
  }

  const { figureKey }: Props = $props()

  /*
    鍵から絵を引く。ここに無い鍵の絵は、まだ描いていないということ。
    描いていない絵は出さない（呼ぶ側が hasGuideFigure で見る）
  */
  const FIGURES: Record<string, typeof FormationVToInvertedV> = {
    'formation-v-to-inverted-v': FormationVToInvertedV,
  }

  const Figure = $derived(FIGURES[figureKey])
</script>

{#if Figure}
  <Figure />
{/if}
