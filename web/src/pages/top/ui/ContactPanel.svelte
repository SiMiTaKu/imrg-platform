<script lang="ts">
  import { pageData } from '@shared/lib/device'
  import { CONTACTS } from '../config/sections'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="contact" class:mobile={isMobile} id="contact">
  <div class="inner">
    <header>
      <h2>連絡する</h2>
      <p>
        曲編集や手具装飾の相談、大会情報の訂正、取材や講習の依頼まで。
        <strong>Instagram のメッセージがいちばん早く届きます。</strong>
        返事は数日いただくことがあります。
      </p>
    </header>

    <ul class="channels">
      {#each CONTACTS as contact (contact.label)}
        <li>
          <a href={contact.href} target="_blank" rel="noopener noreferrer">
            <span class="label">{contact.label}</span>
            <span class="description">{contact.description}</span>
          </a>
        </li>
      {/each}
    </ul>

    <p class="operator">
      運営：男子新体操国際化プロジェクト（清水 拓海）／2022年から活動しています
    </p>
  </div>
</section>

<style lang="scss">
  .contact {
    width: 100%;
    background: $white;
    border-top: 1px solid map.get($gray, 100);
  }

  .inner {
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-48 $space-size-16;
  }

  header {
    text-align: center;
    margin-bottom: $space-size-32;
  }

  h2 {
    margin: 0 0 $space-size-12;
    font-size: $font-size-30;
  }

  .mobile h2 {
    font-size: $font-size-24;
  }

  header p {
    max-width: 38em;
    margin: 0 auto;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.9;
  }

  header strong {
    color: map.get($sky-blue, text);
  }

  .channels {
    display: grid;
    gap: $space-size-12;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0 0 $space-size-24;
    padding: 0;
    list-style: none;
  }

  .mobile .channels {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .channels a {
    display: flex;
    gap: $space-size-4;
    height: 100%;
    padding: $space-size-16;
    color: inherit;
    border: 1px solid map.get($gray, 100);
    border-radius: 8px;
    transition: border-color 0.15s ease;
    flex-direction: column;
    text-decoration: none;
  }

  .channels a:hover {
    border-color: map.get($sky-blue, border);
  }

  .label {
    font-size: $font-size-16;
    font-weight: bold;
  }

  .description {
    font-size: $font-size-11;
    color: map.get($gray, light-text);
    line-height: 1.7;
  }

  .operator {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
