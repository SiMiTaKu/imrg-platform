<script lang="ts">
  /** セクションの見出しの引数 */
  interface Props {
    /** 見出し */
    title: string
    /** 見出しの下に小さく出す文言（英語の見出しなど） */
    subtitle: string
    /** 見出しの文字の大きさ（px）。行の高さも同じにする */
    fontSize: number
    /** 補助の文言の文字の大きさ（px）。行の高さも同じにする */
    subtitleFontSize: number
  }

  const { title, subtitle, fontSize, subtitleFontSize }: Props = $props()
</script>

<h2
  class="title"
  style:--title-font-size={`${fontSize}px`}
  style:--subtitle-font-size={`${subtitleFontSize}px`}
>
  {title}
  <span class="subtitle">
    {subtitle}
  </span>
</h2>

<style lang="scss">
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    // 後ろの要素との間隔。置き換えは TODO 5-5
    margin: 0 0 40px;
    font-size: var(--title-font-size);
    line-height: var(--title-font-size);
    color: #333;
    text-shadow: 0 0 10px rgb(50, 150, 255, 0.5);
  }

  .subtitle {
    margin-top: 8px;
    font-size: var(--subtitle-font-size);
    line-height: var(--subtitle-font-size);
  }
</style>
