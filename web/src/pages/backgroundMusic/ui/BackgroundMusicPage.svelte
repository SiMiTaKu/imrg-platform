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
    FLOW_HEADING,
    FLOW_MESSAGE_LINES,
    FLOW_STEPS,
    HERO,
    MAIN_VISUAL_DESCRIPTIONS,
    ORDER_POINTS,
    POINTS_HEADING,
    PRICE_HEADING,
    PRICE_PER_MUSIC,
  } from '../config/content'
  import MainVisualImage from '../images/main-visual.png?w=1024;2048&format=webp&as=meta'
  import WorkList from './WorkList.svelte'

  const locale = getLocale()
  // 個人と団体で長さも手数も違うので、値段を分けて出す
  const individualPrice = formatYen(PRICE_PER_MUSIC.individual, locale)
  const groupPrice = formatYen(PRICE_PER_MUSIC.group, locale)
  const price = `個人 ${individualPrice}／団体 ${groupPrice}`
  // 表現・構成が得意な彩人が、曲編集の案内役
  const guide = findCharacter(Character.AYATO)
</script>

<article>
  <!-- 何を頼めて・いくらで・どこから相談するのかを、最初の画面に全部出す -->
  <OrderMainVisual
    title={m.background_music_title()}
    eyebrow={HERO.eyebrow}
    summary={HERO.summary}
    priceUnit={HERO.priceUnit}
    priceAmount={m.background_music_price_amount({ price })}
    points={HERO.points}
    character={guide}
    contactHref={LINKS.instagram}
    contactLabel="DM で相談する"
    worksHref="#works"
    worksLabel="作例を見る"
    note={HERO.note}
    imageAlt={m.background_music_main_visual_alt()}
    slides={MAIN_VISUAL_DESCRIPTIONS.map((description) => ({ description: description() }))}
    backgroundImage={MainVisualImage}
  />

  <OrderPoints
    eyebrow={POINTS_HEADING.eyebrow}
    title={POINTS_HEADING.title}
    lead={POINTS_HEADING.lead}
    items={ORDER_POINTS}
  />

  <WorkList />

  <OrderPrice
    eyebrow={PRICE_HEADING.eyebrow}
    title={m.background_music_price_title()}
    lead={PRICE_HEADING.lead}
    unit={m.background_music_price_unit()}
    amount={m.background_music_price_amount({ price })}
    notes={[m.background_music_price_note_1(), m.background_music_price_note_2()]}
    contactHref={LINKS.instagram}
    contactLabel="この内容で相談する"
  />

  <OrderFlow
    messageLines={FLOW_MESSAGE_LINES.map((line) => line())}
    eyebrow={FLOW_HEADING.eyebrow}
    title={m.background_music_flow_title()}
    lead={FLOW_HEADING.lead}
    steps={FLOW_STEPS.map((step) => ({
      title: step.title(),
      description: step.description(),
    }))}
  />

  <OrderContact
    eyebrow={CONTACT.eyebrow}
    title={m.contact_title()}
    lead={CONTACT.lead}
    bodyLines={[m.contact_body_line1(), m.contact_body_line2(), m.contact_body_line3()]}
    contactHref={LINKS.instagram}
    contactLabel={m.contact_button()}
    note={CONTACT.note}
    character={guide}
    crossLink={{
      label: CROSS_LINK.label,
      href: localizeHref(CROSS_LINK.href),
      body: CROSS_LINK.body,
    }}
  />
</article>

<style lang="scss">
  article {
    width: 100%;
    overflow-x: hidden;
  }
</style>
