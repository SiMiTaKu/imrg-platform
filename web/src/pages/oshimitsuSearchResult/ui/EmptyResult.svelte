<script lang="ts">
  import { Character, CharacterFigure, findCharacter } from '@entities/character'
  import { ContentType } from '@entities/oshimitsuVideo'
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
  /** 推しミツ！の案内役 */
  const guide = findCharacter(Character.AYATO)
</script>

<!-- 0件で行き止まりにしない。必ず次の一手を並べる -->
<section class="empty" class:mobile={isMobile}>
  <div class="figure">
    <CharacterFigure character={guide} size={isMobile ? 88 : 112} />
  </div>
  <div class="words">
    <p class="speaker">{guide.name}（{guide.specialty}）</p>
    <h2>{title}</h2>
    <p class="description">{description}</p>
    <div class="actions">
      {#if actions}
        {@render actions()}
      {:else}
        <a class="primary" href={localizeHref(ROUTES.oshimitsu.searchResult)}>すべての動画を見る</a>
        <a
          class="secondary"
          href={localizeHref(ROUTES.oshimitsu.contentType(ContentType.INDIVIDUAL.slug))}
        >
          {ContentType.INDIVIDUAL.label()}（選手）を見る
        </a>
        <a
          class="secondary"
          href={localizeHref(ROUTES.oshimitsu.contentType(ContentType.GROUP.slug))}
        >
          {ContentType.GROUP.label()}（チーム）を見る
        </a>
      {/if}
    </div>
    <a class="back" href={localizeHref(ROUTES.oshimitsu.index)}>探し方をもう一度えらぶ →</a>
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

  .figure {
    flex: none;
  }

  .words {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    min-inline-size: 0;
  }

  .speaker {
    margin: 0;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  h2 {
    margin: 0;
    font-size: $font-size-20;
  }

  .description {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8;
    margin-top: $space-size-8;
  }

  .mobile .actions {
    justify-content: center;
  }

  .actions a {
    display: inline-flex;
    min-height: 48px;
    padding: 0 $space-size-20;
    font-size: $font-size-14;
    font-weight: bold;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .actions .primary {
    color: $white;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 30%);
  }

  .actions .secondary {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  .back {
    margin-top: $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($gray, light-text);
  }
</style>
