<script context="module" lang="ts">
  import MainVisual from './_components/MainVisual.svelte'
  import Summary from './_components/Summary.svelte'
  import { Contact } from '@widgets/contact'
  import WorkList from './_components/WorkList.svelte'
</script>

<article>
  <MainVisual />
  <WorkList />
  <Summary />
  <Contact />
</article>
