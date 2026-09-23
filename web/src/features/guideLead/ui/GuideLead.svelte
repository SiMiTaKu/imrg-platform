<script lang="ts" module>
  /** 絵と言葉の間。wide はカレンダーや推しミツ！のように広く取るページ */
  export type GuideLeadGap = 'normal' | 'wide'
  /** PC で絵と言葉をどうそろえるか */
  export type GuideLeadAlign = 'start' | 'center'
  /**
   * スマホで縦に積んだときの置き方。
   *
   * @remarks
   * `center` は絵も文章も真ん中に寄せる。
   * `stretch` は絵だけ真ん中に置き、文章はページの寄せ方（左）に任せる
   */
  export type GuideLeadMobileLayout = 'center' | 'stretch'
</script>

<script lang="ts">
  import type { Snippet } from 'svelte'
  // TODO(キャラクター): LINE スタンプとキャラクターデザインが固まったら出し直す（docs/TODO.md 5-9）
  // import { m } from '$lib/paraglide/messages'
  // import { CharacterFigure } from '@entities/character'
  import type { CharacterProfile } from '@entities/character'
  import { pageData } from '@shared/lib/device'

  /** ページの頭に置く「案内役のひとこと」の引数 */
  interface Props {
    /** そのページの案内役 */
    character: CharacterProfile
    /** 絵の大きさ（PC、px） */
    size?: number
    /** 絵の大きさ（スマホ、px） */
    mobileSize?: number
    /** 絵と言葉の間 */
    gap?: GuideLeadGap
    /** PC で絵と言葉をどうそろえるか */
    align?: GuideLeadAlign
    /** スマホで縦に積んだときの置き方 */
    mobileLayout?: GuideLeadMobileLayout
    /** 名前の下に置く見出しと文章。ページごとに中身が変わる */
    children: Snippet
  }

  const {
    // TODO(キャラクター): 絵を出し直すときに、この3つの取り出しも戻す（docs/TODO.md 5-9）
    // character,
    // size = 124,
    // mobileSize = 96,
    gap = 'normal',
    align = 'start',
    mobileLayout = 'center',
    children,
  }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<!-- 誰が案内しているかを先に出してから、そのページの言葉を並べる -->
<div
  class="guide-lead"
  class:mobile={isMobile}
  class:wide={gap === 'wide'}
  class:centered={align === 'center'}
  class:stretch={mobileLayout === 'stretch'}
>
  <!--
    TODO(キャラクター): 案内役の絵と名乗りを出し直す（docs/TODO.md 5-9）。
    LINE スタンプとキャラクターデザインが固まるまで出さない
  -->
  <!--
  <div class="figure">
    <CharacterFigure {character} size={isMobile ? mobileSize : size} />
  </div>
  -->

  <div class="words">
    <!--
    <p class="speaker">
      {m.character_figure_label({ name: character.name(), specialty: character.specialty() })}
    </p>
    -->
    {@render children()}
  </div>
</div>

<style lang="scss">
  .guide-lead {
    display: flex;
    gap: $space-size-24;
    align-items: flex-start;
  }

  .guide-lead.wide {
    gap: $space-size-32;
  }

  .guide-lead.centered {
    align-items: center;
  }

  // スマホでは縦に積む
  .guide-lead.mobile {
    flex-direction: column;
    gap: $space-size-12;
    align-items: center;
    text-align: center;
  }

  .guide-lead.mobile.wide {
    gap: $space-size-16;
  }

  // 文章は左からそろえ、絵だけ真ん中に置くページ
  .guide-lead.mobile.stretch {
    align-items: stretch;
    text-align: inherit;
  }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .guide-lead.mobile.stretch .figure {
  //   align-self: center;
  // }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .figure {
  //   flex: none;
  // }

  // 長い名前があっても、親より広がらないようにする
  .words {
    min-inline-size: 0;
  }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .speaker {
  //   margin: 0 0 $space-size-4;
  //   font-size: $font-size-12;
  //   font-weight: bold;
  //   color: map.get($sky-blue, text);
  // }
</style>
