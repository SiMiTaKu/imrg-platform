<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { CONTACTS } from '../config/sections'

  const isMobile = $derived($pageData.isMobile)
</script>

<section class="contact" class:mobile={isMobile} id="contact">
  <div class="inner">
    <header>
      <h2>{m.top_contact_title()}</h2>
      <p>
        {m.top_contact_body_1()}
        <strong>{m.top_contact_body_strong()}</strong>
        {m.top_contact_body_2()}
      </p>
    </header>

    <ul class="channels">
      {#each CONTACTS as contact (contact.label)}
        <li>
          <a href={contact.href} target="_blank" rel="noopener noreferrer">
            <span class="label">{contact.label}</span>
            <span class="description">{contact.description()}</span>
          </a>
        </li>
      {/each}
    </ul>

    <p class="operator">{m.top_contact_operator()}</p>
  </div>
</section>

<style lang="scss">
  .contact {
    width: 100%;
    background: $white;
    border-top: 1px solid map.get($gray, 100);
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
    font-size: $font-size-16;
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
    font-size: $font-size-12;
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
