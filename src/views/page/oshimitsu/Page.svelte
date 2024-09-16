<script lang='ts'>
  import type { Schema } from "$amplify/data/resource"
  import { generateClient } from "aws-amplify/data"
  import { onMount } from "svelte"

  const client = generateClient<Schema>()

  let players

  onMount(async () => {
    players = await client.models.Player.list()
  })
</script>

<div class='padding'>
  おしみつ
  {#if players}
    <ul>
      {#each players.data as player (player.id)}
        <li>{player.name}</li>
      {/each}
    </ul>
  {:else}
    <p>loading...</p>
  {/if}
</div>

<style lang='scss'>
  .padding {
    padding: 500px 0 0;
  }
</style>
