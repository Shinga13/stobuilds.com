<script>
    import { page } from '$app/stores';
    import { build_list } from '$lib/builds/build_list.js';

    const category = 'Carrier'; // <--- Insert category title here!

    const builds = build_list.filter(build_obj => build_obj.category == category).toSorted((obj1, obj2) => obj1.title < obj2.title ? -1 : 1 );
</script>

<h1 class='heading'>{category}</h1>

{#each builds as build}
    <div class='pane'>
        <a href='{$page.route.id + '/' + build.route}' class='pane-title'>{build.title}</a>
        <p class='pane-desc'>
            {build.description}
        </p>
    </div>
{/each}