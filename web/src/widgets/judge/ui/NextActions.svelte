<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { JUDGE_NEXT_ACTIONS } from '../config/nextActions'

  type Props = {
    /** 見出し */
    title: string
    /** 見出しの下に出す一文 */
    description: string
  }

  const { title, description }: Props = $props()

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="next" class:mobile={isMobile}>
  <header>
    <h2>{title}</h2>
    <p>{description}</p>
  </header>

  <ul class="cards">
    {#each JUDGE_NEXT_ACTIONS as next (next.id)}
      <li>
        <a href={localizeHref(next.href)}>
          <h3>{next.title()}</h3>
          <p>{next.body()}</p>
          <span class="action">{next.action()} →</span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .next {
    display: flex;
    flex-direction: column;
    gap: $space-size-20;
  }

  header {
    text-align: center;
  }

  h2 {
    margin: 0 0 $space-size-4;
    font-size: $font-size-22;
  }

  .mobile h2 {
    font-size: $font-size-20;
  }

  header p {
    margin: 0;
    font-size: $font-size-16;
    color: map.get($gray, light-text);
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    gap: $space-size-12;
    grid-template-columns: 1fr;
  }

  .cards a {
    // 重ねずに縦へ積み、最後の行（進み先）だけ下へ寄せる
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    height: 100%;
    padding: $space-size-20;
    color: inherit;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    background: $white;
    text-decoration: none;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
  }

  .cards a:hover {
    border-color: map.get($sky-blue, border);
    transform: translateY(-2px);
  }

  h3 {
    margin: 0;
    font-size: $font-size-18;
  }

  .cards p {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.8;
    color: map.get($gray, 600);
  }

  .action {
    margin-top: auto;
    padding-top: $space-size-4;
    font-size: $font-size-14;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }
</style>
