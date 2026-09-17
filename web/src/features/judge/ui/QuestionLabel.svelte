<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import type { JudgeThemeColor } from '../model/apparatus'

  type Props = {
    /** 設問の見出し */
    caption: string
    /** 設問の補足。無ければ出さない */
    annotation?: string
    /** テーマの色（手具の色） */
    color: JudgeThemeColor
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
    --icon-background: #707070;
  }

  .blue {
    --icon-background: #0065a4;
  }

  .red {
    --icon-background: #d30000;
  }

  .yellow {
    --icon-background: #ecc200;
  }

  .green {
    --icon-background: #219300;
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
