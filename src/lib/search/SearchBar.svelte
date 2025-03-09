<script>
    import { onMount } from 'svelte';
    import flexsearch from 'flexsearch';

    const { page, category = null } = $props();
    let search_term = $state('');
    let search_ready = false;
    let search_results = $derived(search(search_term));
    let search_data = {};
    const search_index = new flexsearch.Index({ tokenize: 'forward' });

    function search(term) {
        if (search_ready && term !== '') {
            const result = search_index.search(term);
            return result.map(route => {return {title: search_data[route].title, route: route}});
        }
        else {
            return [];
        }
    }

    function clear_search(blur_event) {
        if (!(blur_event.relatedTarget !== null && blur_event.relatedTarget.classList.contains('search_result'))) {
            search_term = '';
        }
    }

    onMount(() => {
        fetch(`/s?page=${page}`).then(resp => resp.json()).then(data => {
            search_data = data;
            for (let route in search_data) {
                const meta = search_data[route];
                search_index.add(route, `${meta.title} ${meta.description} ${meta.tags}`);
            }
            search_ready = true;
        });
    });

</script>

<style>
    li {
        border-radius: 0.35rem;
        list-style: none;
        margin: 0;
        width: 100%;
    }

    ul {
        margin: 0;
        padding: 0;
        max-height: 25rem;
        overflow-y: auto;
        width: 100%;
    }


    .results {
        background-color: #202020;
        border: 1px solid var(--lbg);
        border-radius: 0.35rem;
        margin-top: 2px;
        padding: 0.35rem;
    }
    
    .search_bar {
        background-color: var(--bg);
        border: var(--seperator) solid var(--border);
        border-radius: 0.35rem;
        font-family: var(--font);
        font-size: 0.9rem;
        padding: 0.35rem 0.35rem 0.25rem 0.35rem;
        width: 100%;
    }
    .search_bar:focus {
        border-color: var(--accent);
        outline: none;
    }
    
    .search_container {
        position: absolute;
        width: 100%;
        z-index: 1;
    }
    
    .search_result {
        border-radius: 0.35rem;
        box-shadow: none;
        box-sizing: border-box;
        display: block;
        padding: 0.2rem 0.2rem 0.1rem 0.2rem;
        width: 100%;
    }
    .search_result:hover {
        background-color: var(--lbg);
    }
    
    .spacer {
        height: 2rem;
        width: 100%;
    }
    
    .search_positioner {
        max-width: 25rem;
        margin: var(--margin) auto;
        position: relative;
        width: 100%;
    }
</style>

<div class='spacer'>
    <div class='search_positioner'>
        <div class='search_container'>
            <input class='search_bar' type='search' placeholder='Search' bind:value={search_term} onblur={clear_search}>
            {#if search_results.length > 0}
                <div class='results'>
                    <ul>
                        {#each search_results as result}
                            <li><a class='search_result' href='/{page}/{result.route}'>{result.title}</a></li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </div>
</div>
