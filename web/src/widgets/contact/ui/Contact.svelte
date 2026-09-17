<script lang="ts" module>
  /** 問い合わせ先（Instagram のダイレクトメッセージ） */
  const CONTACT_URL = 'https://www.instagram.com/takumi.rg/'
</script>

<script lang="ts">
  import { ButtonLink, Heading } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { SECONDARY_LOCALE, showsSecondaryText } from '@shared/lib/i18n'
</script>

<section class="contact" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    subtitle={showsSecondaryText() ? m.contact_title({}, { locale: SECONDARY_LOCALE }) : undefined}
    title={m.contact_title()}
  />
  <div class="content">
    {m.contact_body_line1()}<br />
    {m.contact_body_line2()}<br />
    {m.contact_body_line3()}
    <ButtonLink
      fontSize={$pageData.isMobile ? 20 : 24}
      width={$pageData.isMobile ? 320 : 400}
      height={56}
      text={m.contact_button()}
      href={CONTACT_URL}
      target="_blank"
    />
  </div>
</section>

<style lang="scss">
  .desktop {
    --width: 1024px;
    --content-font-size: #{$font-size-24};
  }

  .mobile {
    --width: 90%;
    --content-font-size: #{$font-size-18};
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--width);
    margin: 0 auto;
    padding: 0 0 $space-size-80;
    overflow: hidden;
  }

  .content {
    position: relative;
    display: grid;
    gap: $space-size-32;
    place-items: center;
    font-size: var(--content-font-size);
    color: map.get($gray, text);
    text-align: center;
  }
</style>
