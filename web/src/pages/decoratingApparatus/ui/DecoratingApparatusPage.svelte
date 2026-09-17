<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { SECONDARY_LOCALE, showsSecondaryText } from '@shared/lib/i18n'
  import { Contact } from '@widgets/contact'
  import { OrderFlow, OrderMainVisual } from '@widgets/orderService'
  import { FLOW_MESSAGE_LINES, FLOW_STEPS, MAIN_VISUAL_SLIDES } from '../config/content'
  import WorkList from './WorkList.svelte'

  // 日本語ページだけ、見出しの下に英語を小さく併記する
  const showsBoth = showsSecondaryText()
</script>

<article>
  <OrderMainVisual
    title={m.decorating_apparatus_title()}
    subtitle={showsBoth
      ? m.decorating_apparatus_title({}, { locale: SECONDARY_LOCALE })
      : undefined}
    imageAlt={m.decorating_apparatus_main_visual_alt()}
    slides={MAIN_VISUAL_SLIDES.map((slide) => ({
      image: slide.image,
      description: slide.description(),
    }))}
    overlayWidth="75%"
    overlayOpacity={0.3}
  />
  <WorkList />
  <OrderFlow
    messageLines={FLOW_MESSAGE_LINES.map((line) => line())}
    title={m.decorating_apparatus_flow_title()}
    subtitle={showsBoth
      ? m.decorating_apparatus_flow_title({}, { locale: SECONDARY_LOCALE })
      : undefined}
    steps={FLOW_STEPS.map((step) => ({
      title: step.title(),
      description: step.description(),
    }))}
  />
  <Contact />
</article>
