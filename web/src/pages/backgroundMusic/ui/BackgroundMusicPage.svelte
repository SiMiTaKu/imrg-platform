<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { SECONDARY_LOCALE, showsSecondaryText } from '@shared/lib/i18n'
  import { Contact } from '@widgets/contact'
  import { OrderFlow, OrderMainVisual } from '@widgets/orderService'
  import { FLOW_MESSAGE_LINES, FLOW_STEPS, MAIN_VISUAL_DESCRIPTIONS } from '../config/content'
  import MainVisualImage from '../images/main-visual.png?w=1024;2048&format=webp&as=meta'
  import WorkList from './WorkList.svelte'

  // 日本語ページだけ、見出しの下に英語を小さく併記する
  const showsBoth = showsSecondaryText()
</script>

<article>
  <OrderMainVisual
    title={m.background_music_title()}
    subtitle={showsBoth ? m.background_music_title({}, { locale: SECONDARY_LOCALE }) : undefined}
    imageAlt={m.background_music_main_visual_alt()}
    slides={MAIN_VISUAL_DESCRIPTIONS.map((description) => ({ description: description() }))}
    backgroundImage={MainVisualImage}
    overlayWidth="85%"
    overlayOpacity={0.5}
  />
  <WorkList />
  <OrderFlow
    messageLines={FLOW_MESSAGE_LINES.map((line) => line())}
    title={m.background_music_flow_title()}
    subtitle={showsBoth
      ? m.background_music_flow_title({}, { locale: SECONDARY_LOCALE })
      : undefined}
    steps={FLOW_STEPS.map((step) => ({
      title: step.title(),
      description: step.description(),
    }))}
  />
  <Contact />
</article>
