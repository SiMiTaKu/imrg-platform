<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { Character, findCharacter } from '@entities/character'
  import { LINKS } from '@shared/config/links'
  import { getLocale, localizeHref } from '@shared/lib/i18n'
  import { formatYen } from '@shared/lib/number'
  import {
    OrderContact,
    OrderFlow,
    OrderMainVisual,
    OrderPoints,
    OrderPrice,
  } from '@widgets/orderService'
  import {
    CONTACT,
    CROSS_LINK,
    CROSS_LINK_PRICE_PER_MUSIC,
    FLOW_HEADING,
    FLOW_MESSAGE_LINES,
    FLOW_STEPS,
    HERO,
    MAIN_VISUAL_SLIDES,
    ORDER_POINTS,
    POINTS_HEADING,
    PRICE_HEADING,
    PRICE_PER_HOUR,
  } from '../config/content'
  import WorkList from './WorkList.svelte'

  const locale = getLocale()
  const price = formatYen(PRICE_PER_HOUR, locale)
  // 手具の手入れにも詳しい柔凪が、手具装飾の案内役
  const guide = findCharacter(Character.YAWANA)
</script>

<article>
  <!-- 何を頼めて・いくらで・どこから相談するのかを、最初の画面に全部出す -->
  <OrderMainVisual
    title={m.decorating_apparatus_title()}
    eyebrow={HERO.eyebrow()}
    summary={HERO.summary()}
    priceUnit={HERO.priceUnit()}
    priceAmount={m.decorating_apparatus_price_amount({ price })}
    points={HERO.points.map((point) => point())}
    character={guide}
    contactHref={LINKS.instagram}
    contactLabel={m.order_contact_dm()}
    worksHref="#works"
    worksLabel={m.order_works_button()}
    note={HERO.note()}
    imageAlt={m.decorating_apparatus_main_visual_alt()}
    slides={MAIN_VISUAL_SLIDES.map((slide) => ({
      image: slide.image,
      description: slide.description(),
    }))}
  />

  <OrderPoints
    eyebrow={POINTS_HEADING.eyebrow()}
    title={POINTS_HEADING.title()}
    lead={POINTS_HEADING.lead()}
    items={ORDER_POINTS.map((point) => ({ title: point.title(), body: point.body() }))}
  />

  <WorkList />

  <OrderPrice
    eyebrow={PRICE_HEADING.eyebrow()}
    title={m.decorating_apparatus_price_title()}
    lead={PRICE_HEADING.lead()}
    unit={m.decorating_apparatus_price_unit()}
    amount={m.decorating_apparatus_price_amount({ price })}
    notes={[
      m.decorating_apparatus_price_note_1(),
      m.decorating_apparatus_price_note_2(),
      m.decorating_apparatus_price_note_3(),
    ]}
    freeNote={m.order_price_free_note()}
    contactHref={LINKS.instagram}
    contactLabel={m.order_price_contact()}
  />

  <OrderFlow
    messageLines={FLOW_MESSAGE_LINES.map((line) => line())}
    eyebrow={FLOW_HEADING.eyebrow()}
    title={m.decorating_apparatus_flow_title()}
    lead={FLOW_HEADING.lead()}
    steps={FLOW_STEPS.map((step) => ({
      title: step.title(),
      description: step.description(),
    }))}
  />

  <OrderContact
    eyebrow={CONTACT.eyebrow()}
    title={m.contact_title()}
    lead={CONTACT.lead()}
    bodyLines={[m.contact_body_line1(), m.contact_body_line2(), m.contact_body_line3()]}
    contactHref={LINKS.instagram}
    contactLabel={m.contact_button()}
    note={CONTACT.note()}
    character={guide}
    crossLink={{
      label: CROSS_LINK.label(),
      href: localizeHref(CROSS_LINK.href),
      body: CROSS_LINK.body({ price: formatYen(CROSS_LINK_PRICE_PER_MUSIC, locale) }),
    }}
  />
</article>

<style lang="scss">
  article {
    width: 100%;
    overflow-x: hidden;
  }
</style>
