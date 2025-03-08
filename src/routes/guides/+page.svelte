<script>
    import guides_index from '$lib/builds_guides/_guides_index.json';
</script>

<h1 class='heading'>Guides</h1>

{#each Object.entries(guides_index) as [_, guide]}
    <div class='pane'>
        <a href='/guides/{guide.route}' class='pane-title'>{guide.title}</a>
        <p class='pane-desc'>
            {guide.description}
        </p>
    </div>
{/each}
