<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  // TODO(キャラクター): LINE スタンプとキャラクターデザインが固まったら出し直す（docs/TODO.md 5-9）
  // import { CHARACTERS, Character, CharacterFigure } from '@entities/character'
  import { ContentType } from '@entities/oshimitsuVideo'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import type { Snippet } from 'svelte'

  interface Props {
    /** 見出し（何が無かったのか） */
    title: string
    /** 次に何をすればよいかの説明 */
    description: string
    /** 既定の行き先リンクの代わりに出すもの。渡さなければ「すべて／個人／団体」を出す */
    actions?: Snippet
  }

  const { title, description, actions }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  // /** 推しミツ！の案内役 */
  // const guide = CHARACTERS[Character.AYATO]
</script>

<!-- 0件で行き止まりにしない。必ず次の一手を並べる -->
<section class="empty" class:mobile={isMobile}>
  <!-- TODO(キャラクター): LINE スタンプとキャラクターデザインが固まったら出し直す（docs/TODO.md 5-9） -->
  <!--
  <div class="figure">
    <CharacterFigure character={guide} size={isMobile ? 88 : 112} />
  </div>
  -->
  <div class="words">
    <!--
    <p class="speaker">
      {m.character_figure_label({ name: guide.name(), specialty: guide.specialty() })}
    </p>
    -->
    <h2>{title}</h2>
    <p class="description">{description}</p>
    <div class="actions">
      {#if actions}
        {@render actions()}
      {:else}
        <Button
          href={localizeHref(ROUTES.oshimitsu.searchResult)}
          target="_self"
          width={isMobile ? 'full' : 'auto'}
          size="medium"
        >
          {m.oshimitsu_all_videos()}
        </Button>
        <Button
          href={localizeHref(ROUTES.oshimitsu.contentType(ContentType.INDIVIDUAL.slug))}
          target="_self"
          variant="sky-blue-outline"
          width={isMobile ? 'full' : 'auto'}
          size="medium"
        >
          {m.oshimitsu_empty_see_individual({ contentType: ContentType.INDIVIDUAL.label() })}
        </Button>
        <Button
          href={localizeHref(ROUTES.oshimitsu.contentType(ContentType.GROUP.slug))}
          target="_self"
          variant="sky-blue-outline"
          width={isMobile ? 'full' : 'auto'}
          size="medium"
        >
          {m.oshimitsu_empty_see_group({ contentType: ContentType.GROUP.label() })}
        </Button>
      {/if}
    </div>
    <a class="back" href={localizeHref(ROUTES.oshimitsu.index)}>{m.oshimitsu_empty_back()} →</a>
  </div>
</section>

<style lang="scss">
  .empty {
    display: flex;
    gap: $space-size-24;
    width: 100%;
    padding: $space-size-32 $space-size-24;
    border: 1px solid map.get($sky-blue, 100);
    border-radius: 10px;

    // 行き止まりに見せない。青の淡い背景にする
    background: map.get($sky-blue, background);
    align-items: flex-start;
    box-sizing: border-box;
  }

  .mobile.empty {
    flex-direction: column;
    gap: $space-size-16;
    padding: $space-size-24 $space-size-16;
    align-items: center;
    text-align: center;
  }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .figure {
  //   flex: none;
  // }

  .words {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    min-inline-size: 0;
  }

  // TODO(キャラクター): 絵を出し直すときに、この見た目の指定も戻す（docs/TODO.md 5-9）
  // .speaker {
  //   margin: 0;
  //   font-size: $font-size-12;
  //   font-weight: bold;
  //   color: map.get($sky-blue, text);
  // }

  h2 {
    margin: 0;
    font-size: $font-size-20;
  }

  .description {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }

  // PC では文言の幅のまま横に並べ、スマホでは縦に積んで1つずつ横いっぱいにする
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin-top: $space-size-8;
  }

  .mobile .actions {
    flex-direction: column;
  }

  .back {
    margin-top: $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }
</style>
