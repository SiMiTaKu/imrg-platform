<script lang="ts">
  import { Button, Heading } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { LINKS } from '@shared/config/links'
  import { pageData } from '@shared/lib/device'
</script>

<section class="contact" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    title={m.contact_title()}
  />
  <div class="content">
    {m.contact_body_line1()}<br />
    {m.contact_body_line2()}<br />
    {m.contact_body_line3()}
    <Button
      href={LINKS.instagram}
      target="_blank"
      size="large"
      width={$pageData.isMobile ? 'full' : 'auto'}
      variant="sky-blue">{m.contact_button()}</Button
    >
  </div>
</section>

<style lang="scss">
  .desktop {
    --content-font-size: #{$font-size-24};
  }

  .mobile {
    --content-font-size: #{$font-size-18};
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 var(--content-padding-inline) $space-size-80;
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
