<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'

  const isMobile = $derived($pageData.isMobile)
</script>

<article class="coming-soon" class:mobile={isMobile}>
  <div class="inner">
    <h1>{m.rules_coming_soon_title()}</h1>
    <p>{m.rules_coming_soon_body()}</p>
    <a href={localizeHref(ROUTES.top)}>{m.rules_coming_soon_back()}</a>
  </div>
</article>

<style lang="scss">
  .coming-soon {
    display: grid;
    place-items: center;
    min-height: 60dvh;
    padding: $space-size-64 $space-size-16;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: $space-size-16;
    align-items: center;
    max-width: 34em;
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: $font-size-30;
  }

  .mobile h1 {
    font-size: $font-size-24;
  }

  p {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.9;
    color: map.get($gray, light-text);
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 $space-size-24;
    font-size: $font-size-16;
    font-weight: bold;
    color: $white;
    text-decoration: none;
    border-radius: 6px;
    background: map.get($sky-blue, button);
  }
</style>
