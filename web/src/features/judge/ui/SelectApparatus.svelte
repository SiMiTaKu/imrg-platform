<script lang="ts">
  import { JudgeThemeColor } from '../config/themeColor'
  import { m } from '$lib/paraglide/messages'
  import { JUDGE_APPARATUSES } from '../config/apparatus'
  import { judgementApparatus } from '../store/apparatus'

  const color = $derived($judgementApparatus?.imageColor ?? JudgeThemeColor.GRAY)
</script>

{#if $judgementApparatus}
  <!--
    選んだあとは、選んだ手具だけを出す。
    採点のあいだ何の手具を見ているかが分かればよく、
    問いかけと選択肢を残しておくと画面が長くなる
  -->
  <p class="chosen {color}">
    <span class="mark" aria-hidden="true"></span>
    <span class="name">{$judgementApparatus.name()}</span>
  </p>
{:else}
  <div class="select-apparatuses">
    <!--
      選択肢は4つしかないので、畳んだ一覧から選ばせるより札で並べるほうが早い。
      札には手具ごとの色を当てて、選んだあとの画面の色とつながるようにする
    -->
    <div class="choices" aria-label={m.judge_select_apparatus_caption()} role="radiogroup">
      {#each JUDGE_APPARATUSES as apparatus (apparatus.code)}
        <!-- ここに来るのは、まだ選んでいないときだけ。選んだ札の見た目は要らない -->
        <input
          id={`apparatus-${apparatus.code}`}
          name="select-apparatus"
          type="radio"
          value={apparatus.code}
          onchange={() => judgementApparatus.select(String(apparatus.code))}
        />
        <label class="choice {apparatus.imageColor}" for={`apparatus-${apparatus.code}`}>
          {apparatus.name()}
        </label>
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  .select-apparatuses {
    display: grid;
    gap: 16px;
  }

  // 手具の札。狭い画面でも4つを横1列に並べる
  .choices {
    display: grid;
    gap: $space-size-8;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  input[type='radio'] {
    display: none;
  }

  .choice {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    padding: $space-size-8 $space-size-4;
    font-size: $font-size-14;
    font-weight: bold;
    line-height: 1.4;
    text-align: center;
    border: $border-size-2 solid map.get($gray, 200);
    border-radius: 8px;
    background: $white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border-color: var(--chosen-color);
    }
  }

  input[type='radio']:checked + .choice {
    color: $white;
    border-color: var(--chosen-color);
    background: var(--chosen-color);
  }

  .gray {
    --chosen-color: #{map.get($theme, gray)};
  }

  .blue {
    --chosen-color: #{map.get($theme, blue)};
  }

  .red {
    --chosen-color: #{map.get($theme, red)};
  }

  .yellow {
    --chosen-color: #{map.get($theme, yellow)};
  }

  .green {
    --chosen-color: #{map.get($theme, green)};
  }

  // 選んだ手具。色の丸と名前だけを出す
  .chosen {
    display: flex;
    gap: $space-size-12;
    align-items: center;
    margin: 0;
  }

  .mark {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: var(--chosen-color);
  }

  .name {
    font-size: $font-size-20;
    font-weight: bold;
    color: map.get($gray, text);
  }
</style>
