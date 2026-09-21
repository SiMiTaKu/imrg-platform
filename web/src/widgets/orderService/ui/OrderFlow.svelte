<script lang="ts" module>
  /** 依頼の流れの1段階 */
  export interface OrderFlowStep {
    /** 段階の名前 */
    title: string
    /** 段階の説明 */
    description: string
  }
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import { SectionHeading } from '@features/sectionHeading'

  /** 依頼を受け付けるページ（曲編集・手具装飾）の「依頼の流れ」の引数 */
  interface Props {
    /** 流れの前に大きく出す呼びかけ。1要素を1行にする */
    messageLines: string[]
    /** 見出しの上に出す小さなラベル */
    eyebrow: string
    /** 見出し */
    title: string
    /** 見出しの下に出す英語の見出し。省くと出さない（英語ページ） */
    subtitle?: string
    /** 見出しの下に出す補足 */
    lead: string
    /** 依頼の流れ（順番どおり） */
    steps: OrderFlowStep[]
  }

  const { messageLines, eyebrow, title, subtitle, lead, steps }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="flow" class:mobile={isMobile} style:--step-count={steps.length} id="flow">
  <div class="inner">
    <p class="message">
      {#each messageLines as line, index (index)}
        {#if index > 0}<br />{/if}<span class="message-line">{line}</span>
      {/each}
    </p>

    <SectionHeading {eyebrow} {title} {subtitle} {lead} />

    <ol class="steps">
      {#each steps as step, index (index)}
        {#if index > 0}
          <!-- 段階のつながりを示す矢印。読み上げには要らないので隠す -->
          <li class="arrow" aria-hidden="true">
            <svg viewBox="0 0 24 28" width="22" height="26">
              <path
                d="M5 5 L19 14 L5 23 Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="7"
                stroke-linejoin="round"
              />
            </svg>
          </li>
        {/if}
        <li class="step">
          <span class="index">{index + 1}</span>
          <div class="words">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>

<style lang="scss">
  .flow {
    width: 100%;
    background: map.get($gray, background);
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-80 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-48 var(--content-padding-inline);
  }

  .message {
    margin: 0 0 $space-size-40;
    font-size: $font-size-28;
    font-weight: bold;
    color: map.get($gray, text);
    line-height: 1.6;
    text-align: center;
    overflow-wrap: anywhere;
  }

  .mobile .message {
    margin-bottom: $space-size-32;
    font-size: $font-size-20;
  }

  // 呼びかけの下線は青。蛍光色の影ではなく、読める線で強調する
  .message-line {
    box-decoration-break: clone;
    background: linear-gradient(transparent 70%, map.get($sky-blue, 200) 70%);
  }

  // 段階を詰めて並べ、三角形はその境目に浮かせる。
  // 矢印の列は幅を持たないので、カードどうしはすき間なく並ぶ
  .steps {
    display: grid;
    gap: $space-size-4;
    grid-template-columns: repeat(var(--step-count), minmax(0, 1fr) 0);
    align-items: stretch;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  // カードの境目に浮かせる三角形。角を丸くしてある
  .arrow {
    position: relative;
    z-index: 2;
    display: grid;
    place-items: center;
    color: map.get($gray, 300);
  }

  .arrow svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  // 縦に並ぶときは下を向く
  .mobile .arrow svg {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  // カードの境目にかぶせる。灰色の三角形で、つながりを示す

  .mobile .steps {
    grid-template-columns: 1fr;
  }

  // 縦に並ぶので、三角形も下向きにする

  // 番号・名前・説明を縦に積むだけ。番号を重ねない
  .steps .step {
    display: flex;
    gap: $space-size-12;
    align-items: flex-start;
    height: 100%;
    box-sizing: border-box;
    padding: $space-size-16;
    border-top: 3px solid map.get($sky-blue, border);
    border-radius: 8px;
    background: $white;
  }

  .words {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    min-inline-size: 0;
  }

  .mobile .steps .step {
    padding: $space-size-16;
  }

  .index {
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: $font-size-16;
    font-weight: bold;
    color: $white;
    border-radius: 999px;
    background: map.get($sky-blue, button);
    font-variant-numeric: tabular-nums;
  }

  h3 {
    margin: 0;
    font-size: $font-size-18;
    color: map.get($gray, text);
    overflow-wrap: anywhere;
  }

  .steps p {
    margin: 0;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }
</style>
