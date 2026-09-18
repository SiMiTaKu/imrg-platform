<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { formatYen } from '@shared/lib/number'
  import { Contact } from '@widgets/contact'
  import { OrderFlow, OrderMainVisual, OrderPrice } from '@widgets/orderService'
  import {
    FLOW_MESSAGE_LINES,
    FLOW_STEPS,
    MAIN_VISUAL_DESCRIPTIONS,
    PRICE_PER_MUSIC,
  } from '../config/content'
  import MainVisualImage from '../images/main-visual.png?w=1024;2048&format=webp&as=meta'
  import WorkList from './WorkList.svelte'
  const price = formatYen(PRICE_PER_MUSIC, getLocale())
</script>

<article>
  <OrderMainVisual
    title={m.background_music_title()}
    imageAlt={m.background_music_main_visual_alt()}
    slides={MAIN_VISUAL_DESCRIPTIONS.map((description) => ({ description: description() }))}
    backgroundImage={MainVisualImage}
    overlayWidth="85%"
    overlayOpacity={0.5}
  />
  <WorkList />
  <OrderPrice
    title={m.background_music_price_title()}
    unit={m.background_music_price_unit()}
    amount={m.background_music_price_amount({ price })}
    notes={[m.background_music_price_note_1(), m.background_music_price_note_2()]}
  />
  <OrderFlow
    messageLines={FLOW_MESSAGE_LINES.map((line) => line())}
    title={m.background_music_flow_title()}
    steps={FLOW_STEPS.map((step) => ({
      title: step.title(),
      description: step.description(),
    }))}
  />
  <Contact />
</article>
