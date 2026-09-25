<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import type { JudgeThemeColorKey } from '../model/apparatus'

  type Props = {
    /** 設問の見出し */
    caption: string
    /** 設問の補足。無ければ出さない */
    annotation?: string
    /** テーマの色（手具の色） */
    color: JudgeThemeColorKey
  }

  const { caption, annotation = undefined, color }: Props = $props()
</script>

<div class="header {color}">
  <span class="title"><span class="icon">Q</span><span class="caption">{caption}</span></span>
  {#if annotation}
    <span class="annotation">{m.judge_annotation({ annotation })}</span>
  {/if}
</div>

<style lang="scss">
  .gray {
    --icon-background: #{map.get($theme, gray)};
  }

  .blue {
    --icon-background: #{map.get($theme, blue)};
  }

  .red {
    --icon-background: #{map.get($theme, red)};
  }

  .yellow {
    --icon-background: #{map.get($theme, yellow)};
  }

  .green {
    --icon-background: #{map.get($theme, green)};
  }

  /*
    設問の見出し。Q の印・設問の文・補足を縦に積む。

    横に並べると、設問の文と補足が狭い幅を取り合って細切れに折り返す。
    包んでいる札が幅を決めるので、ここでは向きを固定してよい
  */
  .header {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    min-width: 0;
  }

  // Q の印。縮むと丸がつぶれるので、幅は固定にする
  .icon {
    display: flex;
    flex: none;
    width: 36px;
    height: 36px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border-radius: 1em;
    background: var(--icon-background);
    align-items: center;
    justify-content: center;
  }

  .title {
    display: flex;
    gap: $space-size-12;
    align-items: center;
    min-width: 0;
    font-size: $font-size-18;
    font-weight: bold;
    line-height: 1.5;
  }

  /*
    設問の文。
    「投げのキャッチは綺麗だった？」のような文は、読点の無いひとまとまりなので、
    途中では折らずに札の幅いっぱいまで使う
  */
  .caption {
    min-width: 0;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  .annotation {
    font-size: $font-size-14;
    color: map.get($gray, light-text);
  }
</style>
