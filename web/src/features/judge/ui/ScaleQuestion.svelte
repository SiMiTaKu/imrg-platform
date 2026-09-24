<script lang="ts" generics="Code extends number">
  import { JudgeThemeColor } from '../config/themeColor'
  import { pageData } from '@shared/lib/device'
  import { judgementApparatus } from '../store/apparatus'
  import QuestionCard from './QuestionCard.svelte'

  type Option = {
    /** 選択肢の値 */
    code: Code
    /** 選択肢の言葉（表示中の言語） */
    label: string
  }

  type Props = {
    /** 設問の見出し */
    title: string
    /** 設問の補足。無ければ出さない */
    annotation?: string
    /** 選べる段階 */
    options: readonly Option[]
    /** 選んでいる段階。まだ答えていなければ undefined */
    selected?: Code
    /** 開いているか */
    open: boolean
    /** input の id と name の頭に付ける値 */
    uniqueId: string
    /** 選択肢のまとまりの読み上げ用の名前 */
    groupLabel: string
    /** まだ答えていないときに見出しの右へ出す言葉 */
    untouchedLabel: string
    /** 見出しを押して開け閉めするときに呼ぶ */
    ontoggle: () => void
    /** 選び直したときに呼ぶ */
    onchange: (code: Code) => void
  }

  const {
    title,
    annotation = undefined,
    options,
    selected = undefined,
    open,
    uniqueId,
    groupLabel,
    untouchedLabel,
    ontoggle,
    onchange,
  }: Props = $props()

  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
  const answered = $derived(selected !== undefined)
  /** 閉じているときに見出しの右へ出す言葉。減点の数は出さない */
  const summary = $derived(
    options.find((option) => option.code === selected)?.label ?? untouchedLabel,
  )
</script>

<QuestionCard
  {annotation}
  {answered}
  {open}
  {ontoggle}
  {summary}
  {title}
  bodyId={`${uniqueId}-body`}
>
  <div
    class="options {color}"
    class:desktop={!$pageData.isMobile}
    class:mobile={$pageData.isMobile}
    aria-label={groupLabel}
    role="radiogroup"
  >
    {#each options as option (option.code)}
      <input
        id={`${uniqueId}-${option.code}`}
        checked={selected === option.code}
        name={uniqueId}
        type="radio"
        value={option.code}
        onchange={() => onchange(option.code)}
      />
      <label class="option" for={`${uniqueId}-${option.code}`}>{option.label}</label>
    {/each}
  </div>
</QuestionCard>

<style lang="scss">
  .desktop {
    --option-font-size: #{$font-size-14};
    --option-padding: #{$space-size-8} #{$space-size-4};
  }

  /*
    狭い画面でも5つを横1列に並べる。
    2列に折り返すと3行2列の欠けた形になり、段階の並びが読み取れなくなる。
    1つ 60px ほどになるので、字を小さくして余白を詰める
  */
  .mobile {
    --option-font-size: #{$font-size-11};
    --option-padding: #{$space-size-4} #{$space-size-2};
  }

  .options {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .gray {
    --option-color: #{map.get($theme, gray)};
  }

  .blue {
    --option-color: #{map.get($theme, blue)};
  }

  .red {
    --option-color: #{map.get($theme, red)};
  }

  .yellow {
    --option-color: #{map.get($theme, yellow)};
  }

  .green {
    --option-color: #{map.get($theme, green)};
  }

  input[type='radio'] {
    display: none;
  }

  // 選択肢は言葉だけを出す。減点の数は出さない（点の付け方を知らなくても選べるように）
  .option {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    padding: var(--option-padding);
    font-size: var(--option-font-size);
    font-weight: bold;
    line-height: 1.4;
    text-align: center;
    border: $border-size-2 solid map.get($gray, 200);
    border-radius: 8px;
    background: $white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border-color: var(--option-color);
    }
  }

  input[type='radio']:checked + .option {
    color: $white;
    border-color: var(--option-color);
    background: var(--option-color);
  }
</style>
