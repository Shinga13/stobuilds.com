<script>
    import { page } from '$app/state';
    const { data } = $props();
</script>

<h1 class='heading'>{data.title}</h1>

{#if data.builds != null}
    {#each Object.entries(data.builds) as [_, build]}
        <div class='pane'>
            <a href='/builds/{page.params.category}/{build.route}' class='pane-title'>{build.title}</a>
            <p class='pane-desc'>
                {build.description}
            </p>
        </div>
    {/each}
{:else}
    <p>This category does not yet contain any builds.</p>
    <p>Return to <a href='/builds'>Builds</a>.</p>
{/if}
