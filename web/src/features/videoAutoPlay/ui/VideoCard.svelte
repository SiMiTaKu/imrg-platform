<script lang="ts" module>
  /**
   * カードの外枠の見せ方。
   *
   * @remarks
   * `outlined` は細い枠で地に置く（曲編集・指導）。
   * `raised` は枠を透かして影で浮かせる（推しミツ！）
   */
  export type VideoCardAppearance = 'outlined' | 'raised'
</script>

<script lang="ts">
  import type { Snippet } from 'svelte'
  import { m } from '$lib/paraglide/messages'
  import { youtubeEmbedUrl, youtubeThumbnail } from '../lib/youtube'

  const {
    videoId,
    title,
    label,
    playing,
    played,
    startedByUser = false,
    aspectRatio = '16 / 9',
    appearance = 'outlined',
    words,
    onRequestPlay,
  }: {
    /** 動画の ID */
    videoId: string
    /** 誰の演技か */
    title: string
    /** 名前の前に出す小さな札（手具の名前、年など）。無いときは出さない */
    label?: string
    /** いま再生しているか */
    playing: boolean
    /** 一度でも再生したか。したものは、画面に入っても勝手に始めない */
    played: boolean
    /**
     * 人が押して始めたか。
     *
     * @remarks
     * 音を出してよいのは押して始めたときだけ。勝手に始めたのに音を出すと、
     * ブラウザーが再生そのものを止めてしまう
     */
    startedByUser?: boolean
    /**
     * 動画を映す枠の縦横比（CSS の `aspect-ratio` に渡す形）。
     *
     * @remarks
     * 枠と動画の比がずれると、YouTube の再生機が動画を枠の内側に収めるため、
     * 余った側が黒く残る（横に広い枠なら左右、縦に長い枠なら上下）。
     * 横向きの動画は `16 / 9`、縦型のショート動画は `9 / 16`。
     * 使う側のページが載せている動画に合わせて渡す。既定は横向き
     */
    aspectRatio?: string
    /** カードの外枠の見せ方。既定は細い枠 */
    appearance?: VideoCardAppearance
    /**
     * 動画の下に出す言葉。渡すとこちらを丸ごと使う。
     *
     * @remarks
     * 既定は「札＋名前」。それ以外の並べ方（名前・手具と年・団体の出場選手など）を
     * 出したいページが、自分のところで組み立てて渡す
     */
    words?: Snippet
    /**
     * 再生を頼む
     * @param byUser - 押して頼んだか。押したときだけ音を出す
     */
    onRequestPlay: (byUser: boolean) => void
  } = $props()
</script>

<article class="card" class:playing class:raised={appearance === 'raised'}>
  <div class="screen" style:aspect-ratio={aspectRatio}>
    {#if playing}
      <!-- 勝手に始まるときは音を消す。消さないと、ブラウザーが再生を止める -->
      <iframe
        src={youtubeEmbedUrl(videoId, !startedByUser)}
        title={m.video_card_title({ name: title })}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    {:else}
      <button
        type="button"
        onclick={() => onRequestPlay(true)}
        aria-label={m.video_card_play({ name: title })}
      >
        <img src={youtubeThumbnail(videoId)} alt="" loading="lazy" />
        <!-- 止まっているカードには、押せば見られることが分かる印を出す -->
        <span class="mark" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="54" height="38">
            <path
              d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.5C4 2.3 2.3 4.8 1.5 7.7 0 13 0 24 0 24s0 11 1.5 16.3c.8 2.9 2.5 5.4 5.4 6.2C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.5c2.9-.8 4.6-3.3 5.4-6.2C68 35 68 24 68 24s0-11-1.5-16.3z"
              fill="#f00"
            />
            <path d="M45 24 27 14v20" fill="#fff" />
          </svg>
        </span>
        {#if played}
          <span class="again">{m.video_card_again()}</span>
        {/if}
      </button>
    {/if}
  </div>

  {#if words}
    {@render words()}
  {:else}
    <div class="words">
      {#if label}
        <span class="label">{label}</span>
      {/if}
      <h3>{title}</h3>
    </div>
  {/if}
</article>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    transition: border-color 0.15s ease;
  }

  // 影で浮かせるときは枠を透かす。枠の幅は残すので、再生中に色がついても寸法は動かない
  .card.raised {
    box-sizing: border-box;
    width: 100%;
    border-color: transparent;
    box-shadow: $black-box-shadow;
  }

  .card.playing {
    border-color: map.get($sky-blue, border);
  }

  // 縦横比は aspectRatio から差し込む。動画に合わない比にすると黒い余白が出る
  // flex: none を外すと、card の高さが足りないときに枠だけ縦に潰れ、
  // 動画が枠の内側に収まりきらずに左右が黒くなる
  .screen {
    position: relative;
    flex: none;
    width: 100%;
    background: map.get($gray, 900);
  }

  iframe,
  .screen button {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .screen button {
    display: grid;
    place-items: center;
    padding: 0;
    background: none;
    cursor: pointer;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mark {
    position: relative;
    display: grid;
    place-items: center;
    transition: transform 0.15s ease;
  }

  .screen button:hover .mark {
    transform: scale(1.08);
  }

  .again {
    position: absolute;
    right: $space-size-8;
    bottom: $space-size-8;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    color: $white;
    border-radius: 4px;
    background: rgb(0 0 0 / 60%);
  }

  // 手具の札と名前を同じ行に並べる。札だけで1行を使うと card が縦に伸びる
  // 入りきらない言語では折り返して2行になるだけで、はみ出しはしない
  .words {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-4 $space-size-8;
    align-items: baseline;
    padding: $space-size-12 $space-size-16;
  }

  .label {
    flex: none;
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
  }

  h3 {
    min-inline-size: 0;
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }
</style>
