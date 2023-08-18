<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>SvelteKit + D1(DrizzleORM)</h1>

<ul>
  {#each data.todos as todo}
    <li>{todo.name}</li>
  {:else}
    <li>Empty...</li>
  {/each}
</ul>
