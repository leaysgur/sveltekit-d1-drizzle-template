<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>SvelteKit + D1(DrizzleORM)</h1>

<form method="POST" use:enhance>
  <input type="text" name="name" />
  <input type="number" min="0" name="points" />
  <button>Add</button>
</form>

<ul>
  {#each data.todos as todo}
    <li>[{todo.points}] {todo.name}</li>
  {:else}
    <li>Empty...</li>
  {/each}
</ul>
