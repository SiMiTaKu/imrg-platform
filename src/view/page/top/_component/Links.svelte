<script lang="ts">
  import { page } from "$app/stores";
  import ButtonLink from "../../../atomic/button/ButtonLink.svelte";
  const LINKS = [
    { href: "/decorating_apparatus", text: "手具装飾を依頼する" },
    { href: "/background_music", text: "曲編集を依頼する" },
    { href: "/judge", text: "審判を体験する" },
    { href: "/rules", text: "ルールを知る" },
  ];
</script>

<section
  class="links"
  class:pc={!$page.data.isMobile}
  class:sp={$page.data.isMobile}
>
  {#each LINKS as { href, text }}
    <div class="item">
      <ButtonLink width="100%" height="100%" {href} {text} />
    </div>
  {/each}
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --flex-direction: row;
    --item-width: calc((100% - 32px) / 2);
    --item-height: 56px;
  }

  .sp {
    --width: #{calc(100% - 32px)};
    --flex-direction: column;
    --item-width: 100%;
    --item-height: 48px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: var(--flex-direction);
    flex-wrap: wrap;
    gap: 16px;
    width: var(--width);
    padding: 40px 0 80px;
  }

  .item {
    width: var(--item-width);
    height: var(--item-height);
  }
</style>
