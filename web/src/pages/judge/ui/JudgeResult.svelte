<script lang="ts">
  import { CharacterFigure, Character, findCharacter } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import NextActions from './NextActions.svelte'

  type Props = {
    /** 決定点をもう一度出すときに呼ぶ */
    onshowscore: () => void
    /** 最初から採点し直すときに呼ぶ */
    onretry: () => void
  }

  const { onshowscore, onretry }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  /** 採点の案内役 */
  const guide = findCharacter(Character.OSAMU)
</script>

<!-- 採点を終えたあとの行き先。決定点そのものは結果の画面が受け持つ -->
<section class="result" class:mobile={isMobile}>
  <header class="head">
    <div class="guide">
      <CharacterFigure character={guide} size={isMobile ? 80 : 100} />
    </div>
    <div class="words">
      <p class="speaker">{guide.name}（ルール・採点）</p>
      <h2>採点おつかれさま。</h2>
      <p class="say">
        いま出た点が、あなたの決定点です。<strong>正解と見くらべる必要はありません。</strong>
        同じ演技でも、審判によって点は少しずつ違います。次はこの点の意味をたどってみてください。
      </p>
    </div>
  </header>

  <div class="buttons">
    <button class="again" type="button" onclick={onshowscore}>決定点をもう一度見る</button>
    <button class="retry" type="button" onclick={onretry}>最初から採点し直す</button>
  </div>

  <NextActions title="次にすること" description="点を付けたあとに読むと、いちばん入ってきます。" />
</section>

<style lang="scss">
  .result {
    display: flex;
    flex-direction: column;
    gap: $space-size-24;
    padding: $space-size-32;
    border: 2px solid map.get($amber, border);
    border-radius: 10px;

    // 採点を終えたところは黄（希望）で受ける
    background: map.get($amber, background);
  }

  .mobile.result {
    gap: $space-size-20;
    padding: $space-size-20 $space-size-16;
  }

  .head {
    display: flex;
    align-items: flex-start;
    gap: $space-size-24;
  }

  .mobile .head {
    flex-direction: column;
    align-items: center;
    gap: $space-size-12;
    text-align: center;
  }

  .guide {
    flex: none;
  }

  .words {
    min-inline-size: 0;
  }

  .speaker {
    margin: 0 0 $space-size-4;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  h2 {
    margin: 0 0 $space-size-8;
    font-size: $font-size-24;
  }

  .mobile h2 {
    font-size: $font-size-20;
  }

  .say {
    margin: 0;
    font-size: $font-size-14;
    line-height: 1.9;
    color: map.get($gray, 600);
    text-align: left;
  }

  .say strong {
    color: map.get($amber, 800);
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-size-12;
  }

  .again,
  .retry {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 $space-size-24;
    font-family: inherit;
    font-size: $font-size-14;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
  }

  .again {
    color: $white;
    border: none;
    background: map.get($amber, button);
  }

  .retry {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }
</style>
