<script lang="ts">
  import { CharacterFigure, Character, findCharacter } from '@entities/character'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  type Props = {
    /** 「採点をはじめる」を押したときに呼ぶ */
    onstart: () => void
  }

  const { onstart }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
  /** 採点の案内役。ルールのページと同じ人が案内する */
  const guide = findCharacter(Character.OSAMU)

  /** 採点をやってみる前に伝えること。身構えずに1つ試せることを先に言う */
  const POINTS = [
    {
      label: '3分',
      title: '知識はいらない',
      body: '見た演技を思い出して、つまみを動かすだけ。専門の言葉は出てこない。',
    },
    {
      label: '11項目',
      title: '審判と同じ項目',
      body: '実際の採点で見ている項目をそのまま使う。姿勢、柔軟性、跳躍の高さ……。',
    },
    {
      label: '10点満点',
      title: 'あなたの点が出る',
      body: '決定点と、どの項目でいくつ引いたかの内訳が出る。演技の見方が変わる。',
    },
  ]
</script>

<section class="intro" class:mobile={isMobile}>
  <div class="inner">
    <header class="lead">
      <div class="guide">
        <CharacterFigure character={guide} size={isMobile ? 96 : 124} />
      </div>
      <div class="words">
        <p class="speaker">{guide.name}（ルール・採点）</p>
        <h1>審判をやってみる</h1>
        <p class="say">
          男子新体操の個人競技を、<strong>審判と同じ採点表で</strong>採点してみるページです。 最後に<strong
            class="accent">あなたが付けた決定点</strong
          >と、その内訳が出ます。 採点の記録は残らないので、気楽に試してください。
        </p>
      </div>
    </header>

    <ul class="points">
      {#each POINTS as point (point.title)}
        <li>
          <span class="label">{point.label}</span>
          <h2>{point.title}</h2>
          <p>{point.body}</p>
        </li>
      {/each}
    </ul>

    <div class="actions">
      <button class="start" type="button" onclick={onstart}>まず手具を1つ選ぶ</button>
      <a class="sub" href={localizeHref(ROUTES.rules)}>先にルールを読む</a>
    </div>
    <p class="note">途中でやめても大丈夫です。何度でもやり直せます。</p>
  </div>
</section>

<style lang="scss">
  .intro {
    width: 100%;

    // 青（信頼）を両端から差す。トップページと同じ作り
    background:
      radial-gradient(circle at 8% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 92% 6%, rgb(25 134 255 / 16%), transparent 42%), $white;
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-48 var(--content-padding-inline);
  }

  .mobile .inner {
    padding: $space-size-32 var(--content-padding-inline);
  }

  /* ─── 案内役のひとこと ─── */

  .lead {
    display: flex;
    gap: $space-size-24;
    align-items: flex-start;
    margin-bottom: $space-size-32;
  }

  .mobile .lead {
    flex-direction: column;
    align-items: center;
    gap: $space-size-12;
    text-align: center;
  }

  .guide {
    flex: none;
  }

  .words {
    min-inline-size: 0;
  }

  .speaker {
    margin: 0 0 $space-size-4;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  h1 {
    margin: 0 0 $space-size-12;
    font-size: $font-size-30;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  .say {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, 600);
  }

  .mobile .say {
    text-align: left;
  }

  .say strong {
    color: map.get($gray, text);
  }

  .say .accent {
    color: map.get($sky-blue, text);
  }

  /* ─── できることを3つ ─── */

  .points {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 0 $space-size-32;
    padding: 0;
    list-style: none;
  }

  .mobile .points {
    gap: $space-size-12;
    grid-template-columns: 1fr;
  }

  .points li {
    // 重ねずに縦へ積む
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding: $space-size-20;
    border: 1px solid map.get($gray, 100);
    border-top: 3px solid map.get($sky-blue, border);
    border-radius: 8px;
    background: $white;
  }

  .label {
    align-self: flex-start;
    margin-bottom: $space-size-4;
    padding: $space-size-4 $space-size-8;
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    letter-spacing: 0.06em;
  }

  .points h2 {
    margin: 0;
    font-size: $font-size-18;
  }

  .points p {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.85;
    color: map.get($gray, 600);
  }

  /* ─── 始める ─── */

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: $space-size-12;
    margin-bottom: $space-size-12;
  }

  .start,
  .sub {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 0 $space-size-32;
    font-family: inherit;
    font-size: $font-size-16;
    font-weight: bold;
    border-radius: 6px;
    text-decoration: none;
    transition: transform 0.15s ease;
    cursor: pointer;
  }

  .start:hover,
  .sub:hover {
    transform: translateY(-1px);
  }

  // いちばん押してほしいところは青で塗る
  .start {
    color: $white;
    border: none;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 40%);
  }

  .sub {
    color: map.get($sky-blue, text);
    border: 1px solid map.get($sky-blue, border);
    background: $white;
  }

  .note {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
