<script>
  import Header from './common/layout/Header.svelte';
  import './styles.css';
</script>

<div>
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    ふったー
  </footer>
</div>

<style>

</style>