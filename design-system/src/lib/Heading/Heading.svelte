<script lang="ts">
  /** セクションの見出しの引数 */
  interface Props {
    /** 見出し */
    title: string
    /** 見出しの下に小さく出す文言（英語の見出しなど） */
    subtitle: string
    /** スマホ向けの大きさで表示するか */
    isMobile?: boolean
  }

  const { title, subtitle, isMobile = false }: Props = $props()
</script>

<h2 class="title" class:pc={!isMobile} class:sp={isMobile}>
  {title}
  <span class="subtitle">
    {subtitle}
  </span>
</h2>

<style lang="scss">
  .pc {
    --title-font-size: 40px;
    --subtitle-font-size: 20px;
  }

  .sp {
    --title-font-size: 30px;
    --subtitle-font-size: 16px;
  }

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
