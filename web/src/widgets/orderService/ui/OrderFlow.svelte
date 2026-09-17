<script lang="ts" module>
  /** 依頼の流れの1段階 */
  export interface OrderFlowStep {
    /** 段階の名前 */
    title: string
    /** 段階の説明 */
    description: string
  }

  /** 段階の間の間隔（px） */
  const STEP_GAP = 20
  /** 段階の内側の余白の合計（px） */
  const STEP_PADDING = 16

  /**
   * PC で段階を横に並べるときの、1段階の幅
   * @param stepCount - 段階の数
   * @returns CSS の幅の値
   */
  const pcStepWidth = (stepCount: number): string =>
    `calc(((100% - ${STEP_GAP}px * ${stepCount - 1}) / ${stepCount}) - ${STEP_PADDING}px)`
</script>

<script lang="ts">
  import { Heading } from '@imrg-platform/design-system'
  import { pageData } from '@shared/lib/device'

  /** 依頼を受け付けるページ（曲編集・手具装飾）の「依頼の流れ」の引数 */
  interface Props {
    /** 流れの前に大きく出す呼びかけ。1要素を1行にする */
    messageLines: string[]
    /** 見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 依頼の流れ（順番どおり） */
    steps: OrderFlowStep[]
  }

  const { messageLines, title, subtitle, steps }: Props = $props()
</script>

<section
  class="flow-section"
  class:desktop={!$pageData.isMobile}
  class:mobile={$pageData.isMobile}
  style:--item-width={$pageData.isMobile ? undefined : pcStepWidth(steps.length)}
>
  <div class="message">
    {#each messageLines as line, index (index)}
      {#if index > 0}<br />{/if}{line}
    {/each}
  </div>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    {subtitle}
    {title}
  />
  <ul class="flow">
    {#each steps as step, index (index)}
      <li class="item">
        <div class="item-index">{index + 1}</div>
        <h3 class="item-label">{step.title}</h3>
        <p class="item-description">{step.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  // PC の --item-width は段階の数で変わるので、要素の style で渡す
  .desktop {
    --width: 1024px;
    --message-font-size: 36px;
    --message-margin-bottom: 80px;
    --flow-flex-direction: row;
    --item-flex-direction: column;
    --item-gap: 20px;
    --item-padding: 16px;
    --item-label-width: 100%;
    --item-label-height: 40px;
    --item-label-font-size: 24px;
    --item-label-after-width: 50px;
    --item-label-after-height: 3px;
    --item-label-after-top: 64px;
    --item-label-after-left: 50%;
    --item-label-after-transform: translateX(-50%);
    --item-description-width: 100%;
  }

  .mobile {
    --width: 90%;
    --message-font-size: 30px;
    --message-margin-bottom: 60px;
    --flow-flex-direction: column;
    --item-flex-direction: row;
    --item-gap: 24px;
    --item-width: calc(100% - 24px);
    --item-padding: 8px 8px 8px 16px;
    --item-label-width: 36%;
    --item-label-font-size: 20px;
    --item-label-after-width: 2px;
    --item-label-after-height: 30px;
    --item-label-after-top: 50%;
    --item-label-after-left: 38%;
    --item-label-after-transform: translateY(-50%);
    --item-description-width: 64%;
  }

  .flow-section {
    width: var(--width);
    margin: 0 auto;
    padding: 0 0 80px;
    text-align: center;
  }

  .message {
    margin-bottom: var(--message-margin-bottom);
    font-size: var(--message-font-size);
    font-weight: bold;
    color: #666;
    text-shadow: 3px 3px #ffa;
  }

  .flow {
    display: flex;
    flex-direction: var(--flow-flex-direction);
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item {
    position: relative;
    display: flex;
    flex-direction: var(--item-flex-direction);
    gap: var(--item-gap);
    width: var(--item-width);
    padding: var(--item-padding);
    border-radius: 8px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
  }

  .item-index {
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;
    font-weight: bold;
    color: white;
    border-radius: 1em;
    background: rgb(50, 150, 255);
    top: -10px;
    left: -10px;
    align-items: center;
    justify-content: center;
  }

  .item-label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--item-label-width);
    height: var(--item-label-height);
    margin: 0;
    font-size: var(--item-label-font-size);
    font-weight: bold;
    text-shadow: 0 0 10px rgb(50, 150, 255, 0.5);

    &::after {
      position: absolute;
      top: var(--item-label-after-top);
      left: var(--item-label-after-left);
      display: block;
      width: var(--item-label-after-width);
      height: var(--item-label-after-height);
      content: '';
      background: rgb(50, 150, 255);
      transform: var(--item-label-after-transform);
    }
  }

  // スマホでは段階の名前の幅が狭く、英語の長い名前（Consultation など）が区切り線にかかるため小さくする。
  // 日本語ページの見た目（計算済みスタイル）を変えないよう、変数を足さずに言語で当てる
  .mobile .item-label:lang(en) {
    font-size: 16px;
  }

  .item-description {
    width: var(--item-description-width);
    margin: 0;
    text-align: left;
  }
</style>
