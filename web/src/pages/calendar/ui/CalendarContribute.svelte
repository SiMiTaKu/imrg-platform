<script lang="ts">
  import { LINKS } from '@shared/config/links'
  import { m } from '$lib/paraglide/messages'
  import { UPDATED_AT } from '@entities/calendarEvent'
  import { formatDay } from '@shared/lib/date'
  import { pageData } from '@shared/lib/device'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ROUTES } from '@shared/routes'
  import { ActionButton } from '@shared/ui'

  const locale = getLocale() as SiteLocale
  const isMobile = $derived($pageData.isMobile)
</script>

<!--
  一覧のあとに置く2枚。左は「どこから集めた情報か」、右は「誤りを教えてもらう入口」。
  どちらも信頼に関わる話なので、並べて出す
-->
<section class="footer-cards" class:mobile={isMobile}>
  <div class="card trust">
    <h3 class="card-title">{m.calendar_about_title()}</h3>
    <ul class="points">
      <li>{m.calendar_trust_verified()}</li>
      <li>{m.calendar_trust_source()}</li>
      <li>{m.calendar_updated_at({ date: formatDay(UPDATED_AT, locale) })}</li>
    </ul>
    <p class="caution">{m.calendar_caution()}</p>
  </div>

  <div class="card contribute">
    <h3 class="card-title">{m.calendar_contribute_title()}</h3>
    <p class="contribute-text">
      {m.calendar_contribute_before_link()}<a
        href={LINKS.instagram}
        rel="noopener noreferrer"
        target="_blank">{m.calendar_contribute_link()}</a
      >{m.calendar_contribute_after_link()}
    </p>
    <!-- 下にそろえる。重ねずに、余った高さを margin で押し下げる -->
    <a class="contribute-button" href={LINKS.instagram} rel="noopener noreferrer" target="_blank"
      >{m.calendar_contribute_button()}</a
    >
  </div>
</section>

<p class="back">
  <ActionButton href={localizeHref(ROUTES.top)}>{m.calendar_back_to_top()}</ActionButton>
</p>

<style lang="scss">
  .footer-cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: $space-size-48;
  }

  .footer-cards.mobile {
    grid-template-columns: minmax(0, 1fr);
  }

  // 縦に積むだけ。位置をずらして重ねない
  .card {
    display: flex;
    flex-direction: column;
    gap: $space-size-8;
    box-sizing: border-box;
    padding: $space-size-20;
    border-radius: 10px;
  }

  // 情報の出どころは青（信頼）
  .trust {
    border: $border-size-1 solid map.get($sky-blue, 100);
    background: map.get($sky-blue, background);
  }

  // 行動してほしい側は灰。青（出どころ）の札と見分ける
  .contribute {
    border: $border-size-1 solid map.get($gray, 200);
    background: map.get($gray, background);
  }

  .card-title {
    margin: 0;
    font-size: $font-size-18;
    line-height: 1.4;
  }

  .trust .card-title {
    color: map.get($sky-blue, text);
  }

  .contribute .card-title {
    color: map.get($gray, text);
  }

  .points {
    display: grid;
    gap: $space-size-4;
    margin: 0;
    padding-left: $space-size-20;
    font-size: $font-size-14;
    color: map.get($gray, 600);
    line-height: 1.7;
  }

  .caution {
    margin: 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    line-height: 1.7;
  }

  .contribute-text {
    margin: 0;
    font-size: $font-size-16;
    line-height: 1.8;
  }

  .contribute-text a {
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .contribute-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    min-height: 44px;
    margin-top: auto;
    padding: 0 $space-size-24;
    font-size: $font-size-14;
    font-weight: bold;
    color: $white;
    border-radius: 6px;
    background: map.get($sky-blue, button);
    box-shadow: 0 2px 8px rgb(25 134 255 / 30%);
  }

  .contribute-button:hover {
    background: map.get($sky-blue, text);
  }

  .back {
    margin-top: $space-size-64;
    font-size: $font-size-16;
    text-align: center;
  }
</style>
