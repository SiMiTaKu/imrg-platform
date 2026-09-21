<script lang="ts">
  import { Button } from '@imrg-platform/design-system'
  import { Character, findCharacter } from '@entities/character'
  import { GuideLead } from '@features/guideLead'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { VIDEO_COUNTS } from '../lib/entries'

  const isMobile = $derived($pageData.isMobile)
  /** 推しミツ！の案内役。表現・構成の担当なので、演技を見る楽しさを案内してもらう */
  const guide = findCharacter(Character.AYATO)

  // 本数の単位は言語で付け方が変わる。1本のときだけ言い方が変わる言語があるので、数で出し分ける
  const totalUnit = $derived(
    VIDEO_COUNTS.total === 1
      ? m.oshimitsu_hero_stat_total_one()
      : m.oshimitsu_hero_stat_total_other(),
  )
  const individualUnit = $derived(
    VIDEO_COUNTS.individual === 1
      ? m.oshimitsu_hero_stat_individual_one()
      : m.oshimitsu_hero_stat_individual_other(),
  )
  const groupUnit = $derived(
    VIDEO_COUNTS.group === 1
      ? m.oshimitsu_hero_stat_group_one()
      : m.oshimitsu_hero_stat_group_other(),
  )
</script>

<section class="hero" class:mobile={isMobile}>
  <div class="inner">
    <GuideLead character={guide} size={148} mobileSize={104} gap="wide" align="center">
      <!-- 名前の下に「何ができる場所か」を必ず置く。「推しミツ！」だけでは伝わらないため -->
      <h1 class="title">
        <span class="name">{m.oshimitsu_title()}</span>
        <span class="what">{m.oshimitsu_hero_what()}</span>
      </h1>

      <p class="lead">
        {m.oshimitsu_lead_line1()}<br />
        {m.oshimitsu_lead_line2()}
      </p>

      <p class="say">
        <strong class="accent">{m.oshimitsu_hero_say_axes()}</strong>
        {m.oshimitsu_hero_say_body()}
      </p>

      <div class="actions">
        <Button href="#search" target="_self" width={isMobile ? 'full' : 'auto'}
          >{m.oshimitsu_hero_action_ways()}</Button
        >
        <Button
          href="#recommended"
          target="_self"
          variant="outline"
          width={isMobile ? 'full' : 'auto'}
        >
          {m.oshimitsu_hero_action_recommended()}
        </Button>
      </div>

      <ul class="stats">
        <li>
          <span class="number">{VIDEO_COUNTS.total}</span>
          <span class="unit">{totalUnit}</span>
        </li>
        <li>
          <span class="number">{VIDEO_COUNTS.individual}</span>
          <span class="unit">{individualUnit}</span>
        </li>
        <li>
          <span class="number">{VIDEO_COUNTS.group}</span>
          <span class="unit">{groupUnit}</span>
        </li>
      </ul>
    </GuideLead>
  </div>
</section>

<style lang="scss">
  .hero {
    width: 100%;

    // 青（信頼）を両端から差す。トップページと同じ作り
    background:
      radial-gradient(circle at 10% 0%, rgb(25 134 255 / 10%), transparent 45%),
      radial-gradient(circle at 90% 8%, rgb(25 134 255 / 16%), transparent 44%), $white;
    border-bottom: 1px solid map.get($gray, 100);
  }

  .inner {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: $space-size-56 var(--content-padding-inline) $space-size-48;
  }

  .mobile .inner {
    padding: $space-size-32 var(--content-padding-inline) $space-size-40;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    margin: 0 0 $space-size-16;
  }

  .mobile .title {
    align-items: center;
  }

  .name {
    font-size: $font-size-40;
    line-height: 1.1;
  }

  .mobile .name {
    font-size: $font-size-30;
  }

  .what {
    align-self: flex-start;
    padding-bottom: $space-size-4;
    font-size: $font-size-20;
    font-weight: bold;
    color: map.get($gray, 600);
    letter-spacing: 0.04em;

    // 下線は青で引く
    border-bottom: 3px solid map.get($sky-blue, border);
  }

  .mobile .what {
    align-self: center;
    font-size: $font-size-16;
  }

  .lead {
    margin: 0 0 $space-size-12;
    font-size: $font-size-16;
    color: map.get($gray, 600);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }

  .say {
    margin: 0 0 $space-size-20;
    font-size: $font-size-16;
    color: map.get($gray, text);
    line-height: 1.9;
    overflow-wrap: anywhere;
  }

  .say strong {
    color: map.get($sky-blue, text);
  }

  .say .accent {
    color: map.get($sky-blue, text);
  }

  // 探し方へ進む主な入口（塗り）と、おすすめを見る道（白抜き）を横に並べる。
  // スマホでは縦に積んで、1つずつ横いっぱいにする
  .actions {
    display: flex;
    gap: $space-size-12;
    margin-bottom: $space-size-20;
  }

  .mobile .actions {
    flex-direction: column;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: $space-size-8 $space-size-12;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .stats {
    justify-content: center;
  }

  .stats li {
    display: flex;
    gap: $space-size-4;
    padding: $space-size-4 $space-size-12;
    border: 1px solid map.get($gray, 100);
    border-radius: 999px;
    background: $white;
    align-items: baseline;
  }

  .number {
    font-size: $font-size-20;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .unit {
    font-size: $font-size-12;
    color: map.get($gray, light-text);
  }
</style>
