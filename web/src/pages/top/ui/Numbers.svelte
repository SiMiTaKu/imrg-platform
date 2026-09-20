<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import { NUMBERS } from '../config/sections'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="numbers" class:mobile={isMobile}>
  <div class="inner">
    <h2>数字で見る</h2>
    <ul>
      {#each NUMBERS as number (number.label)}
        <li>
          <span class="value">{number.value}<span class="unit">{number.unit}</span></span>
          <span class="label">{number.label}</span>
        </li>
      {/each}
    </ul>
    <p class="source">
      掲載している大会は、主催団体の発表と公式の要項を確かめて載せています。
      誤りを見つけたら知らせてください。直します。
    </p>
  </div>
</section>

<style lang="scss">
  .numbers {
    width: 100%;
    color: $white;
    background: map.get($gray, 800);
  }

  .inner {
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-56 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-40 $space-size-16;
  }

  h2 {
    margin: 0 0 $space-size-24;
    font-size: $font-size-18;
    font-weight: normal;
    color: map.get($gray, 300);
    letter-spacing: 0.08em;
    text-align: center;
  }

  ul {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0 0 $space-size-24;
    padding: 0;
    list-style: none;
  }

  .mobile ul {
    gap: $space-size-24;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-4;
    text-align: center;
  }

  .value {
    font-size: $font-size-40;
    font-weight: bold;
    line-height: 1.1;
    font-variant-numeric: tabular-nums;
  }

  .mobile .value {
    font-size: $font-size-30;
  }

  .unit {
    margin-left: 2px;
    font-size: $font-size-14;
    font-weight: normal;
    color: map.get($gray, 300);
  }

  .label {
    font-size: $font-size-12;
    color: map.get($gray, 300);
  }

  .source {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, 300);
    line-height: 1.9;
    text-align: center;
  }
</style>
