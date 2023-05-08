<script>
  import Header from './common/Header.svelte';
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