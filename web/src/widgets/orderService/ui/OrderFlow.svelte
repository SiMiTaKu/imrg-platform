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
  import SectionHeading from './SectionHeading.svelte'

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
        <li>
          <span class="index">{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
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
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-48 $space-size-16;
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

  // 呼びかけの下線は黄。蛍光色の影ではなく、読める線で強調する
  .message-line {
    box-decoration-break: clone;
    background: linear-gradient(transparent 70%, map.get($amber, 200) 70%);
  }

  .steps {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(var(--step-count), minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .steps {
    grid-template-columns: 1fr;
  }

  // 番号・名前・説明を縦に積むだけ。番号を重ねない
  .steps li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-8;
    height: 100%;
    box-sizing: border-box;
    padding: $space-size-20 $space-size-12;
    border-top: 3px solid map.get($amber, border);
    border-radius: 8px;
    background: $white;
    text-align: center;
  }

  .mobile .steps li {
    align-items: flex-start;
    padding: $space-size-16;
    text-align: left;
  }

  .index {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: $font-size-16;
    font-weight: bold;
    color: map.get($amber, 800);
    border-radius: 999px;
    background: map.get($amber, 300);
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
    font-size: $font-size-12;
    color: map.get($gray, 600);
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  .mobile .steps p {
    font-size: $font-size-14;
  }
</style>
