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
  <span class="title"><span class="icon">Q</span>{caption}</span>
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

  .header {
    display: flex;
    align-items: baseline;
    flex-direction: var(--header-flex-direction);
    gap: 8px;
  }

  .icon {
    display: flex;
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
    flex-direction: row;
    gap: 12px;
    font-size: 22px;
    font-weight: bold;
  }

  .annotation {
    font-size: 16px;
  }
</style>
