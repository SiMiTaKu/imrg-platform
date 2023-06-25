<script>
  import Header from './common/layout/Header.svelte';
  import Footer from './common/layout/Footer.svelte';
  import './styles.css';
</script>

<div>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>

</style>