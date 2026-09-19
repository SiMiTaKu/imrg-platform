<script lang="ts">
  import { LINKS } from '@shared/config/links'
  import { m } from '$lib/paraglide/messages'
  import { localizeHref } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
</script>

<!-- 一覧のあとに出す注意書き・情報提供のお願い・トップへのリンク -->
<p class="caution">
  {m.calendar_caution()}
</p>

<section class="contribute">
  <h3 class="contribute-heading">
    {m.calendar_contribute_title()}
  </h3>
  <p class="contribute-text">
    {m.calendar_contribute_before_link()}<a
      href={LINKS.instagram}
      rel="noopener noreferrer"
      target="_blank">{m.calendar_contribute_link()}</a
    >{m.calendar_contribute_after_link()}
  </p>
</section>

<p class="back"><a href={localizeHref(ROUTES.top)}>{m.calendar_back_to_top()}</a></p>

<style lang="scss">
  .caution {
    margin-top: $space-size-40;
    font-size: 13px;
    color: map.get($gray, 600);
  }

  .contribute {
    display: grid;
    gap: $space-size-8;
    margin-top: $space-size-32;
    padding: $space-size-24;
    border-radius: $border-radius-8;
    background: map.get($sky-blue, background);
  }

  .contribute-heading {
    font-size: $font-size-18;
    line-height: 1.4;
  }

  .contribute-text {
    font-size: $font-size-14;
  }

  .contribute a {
    color: rgb(50, 150, 255);
  }

  .back {
    margin-top: $space-size-64;
    font-size: $font-size-16;
    text-align: center;
  }
</style>
