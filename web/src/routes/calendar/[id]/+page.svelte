<script lang="ts">
  import { CalendarDetailPage } from '@pages/calendarDetail'
  import { PageHead } from '@widgets/layout'
  import type { PageData } from './$types'

  const { data }: { data: PageData } = $props()
</script>

<PageHead meta={data.meta} />
<CalendarDetailPage event={data.event} />
