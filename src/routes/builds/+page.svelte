<script>
    const categories = [
        {
            name: 'Cannons - DEW',
            route: 'cannons'
        },
        {
            name: 'Beams - DEW',
            route: 'beams'
        },
        {
            name: 'Beams & Cannons - DEW',
            route: 'dew'
        },
        {
            name: 'Torpedoes - Kinectics',
            route: 'torps'
        },
        {
            name: 'Science - EPG',
            route: 'epg'
        },
        {
            name: 'DewSci - Hybrid',
            route: 'dewsci'
        },
        {
            name: 'SciTorp - Hybrid',
            route: 'scitorp'
        },
        {
            name: 'Tank',
            route: 'tank'
        },
        {
            name: 'Support',
            route: 'support'
        },
        {
            name: 'Carrier',
            route: 'carrier'
        },
        {
            name: 'Ground',
            route: 'ground'
        },
        {
            name: 'PvP',
            route: 'pvp'
        }
    ];
</script>

<style>
    .build-categories {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: var(--margin);
    }

    .category-button {
        align-content: center;
        background-color: var(--mbg);
        box-sizing: border-box;
        border-radius: .3rem;
        box-shadow: none;
        color: var(--light-text);
        display: block;
        font-size: 2rem;
        height: 5.5rem;
        margin: .21rem;
        text-align: center;
    }
    .category-button:hover {
        border: 1px solid var(--accent);
    }
</style>

<h1 class='heading'>Builds</h1>
<div class='build-categories'>
    {#each categories as category}
        <a href='{'/builds/' + category.route}' class='category-button'>
            {category.name}
        </a>
    {/each}
</div>
