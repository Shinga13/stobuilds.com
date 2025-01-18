<script>
    import Close from "$lib/icons/Close.svelte";
    import Hamburger from "$lib/icons/Hamburger.svelte";

    let { open = $bindable(false) } = $props();
</script>

<style>
    .icon-button {
        background-color: var(--mbg);
        border: none;
        cursor: pointer;
        padding: 0;
        stroke: var(--medium-text);
        transition: ease;
    }
</style>

<button class='icon-button' onclick={() => open = !open}>
    {#if open}
        <Close/>
    {:else}
        <Hamburger/>
    {/if}
</button>
