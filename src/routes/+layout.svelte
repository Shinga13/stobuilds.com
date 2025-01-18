<script>
    import '../app.css';
    import '@fontsource-variable/overpass';
    import '@fontsource-variable/overpass-mono'
    import { page } from '$app/state';
    import Discord from '$lib/icons/Discord.svelte';

    let { children } = $props();

    let base_route = $derived(page.route.id.split('/')[1] ?? '');
</script>

<style>
    main {
        height:100%;
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
    }

    #discord-link {
        align-items: center;
        align-self: center;
        box-shadow: none;
        display: flex;
        fill: var(--medium-text);
        grid-column: 3;
        height: fit-content;
        justify-self: end;
        margin-right: 4rem;
        max-width: max-content;
    }

    #discord-link:hover {
        fill: var(--accent);
    }

    #home-button {
        align-items: center;
        background-image: url('/favicon.webp');
        background-position: 3.5rem 45%;
        background-repeat: no-repeat;
        background-size: 2.7rem;
        box-shadow: none;
        color: var(--light-text);
        display: flex;
        font-size: 1.7rem;
        font-weight: 300;
        grid-column: 1;
        height: 100%;
        letter-spacing: .05em;
        max-width: max-content;
        padding-left: 7rem;
        text-decoration: none;
    }

    #main-navbar {
        align-items: center;
        display: flex;
        grid-column: 2;
        padding-top: .1rem;
    }

    .content-width {
        max-width: 55rem;
    }

    .footer {
        margin: 0 auto;
    }

    .footer-content {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .footer-text {
        color: var(--medium-text);
    }

    .header {
        background-color: var(--mbg);
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        height: 4rem;
        left: 0;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 100;
    }

    .navlink {
        box-shadow: none;
        color: var(--light-text);
        font-size: 1.2rem;
        margin: 0 .5rem;
        text-decoration: none;
    }
    .navlink:hover {
        text-decoration: underline;
    }

    .page-content {
        margin: 4.5rem auto 0 auto;
        min-height: calc(100vh - 10rem); /* 4rem (header), 2rem (navbar), ~4rem (footer) */
        padding: 0 var(--margin)
    }

    .selected {
        color: var(--accent);
        text-decoration: underline;
    }

    .seperator {
        padding-top: 1px;
    }
</style>

<svelte:head>
    <title>STOBuilds</title>
</svelte:head>

<main>
    <div class='header'>
        <a href='/' id='home-button'>STOBuilds</a>
        <nav id='main-navbar'>
            <a href='/guides' class='navlink' class:selected={base_route == 'guides'}>Guides</a>
            <a href='/builds' class='navlink' class:selected={base_route == 'builds'}>Builds</a>
            <a href='/links' class='navlink' class:selected={base_route == 'links'}>Links</a>
            <a href='/apps' class='navlink' class:selected={base_route == 'apps'}>Apps</a>
        </nav>
        <a href='https://discord.gg/stobuilds' id='discord-link' title='STOBuilds Discord'>
            <Discord/>
        </a>
    </div>

    <div class='page-content content-width'>
        <div class='seperator'><!-- seperator --></div>
        {@render children()}
    </div>

    <div class='footer content-width'>
        <hr>
        <footer class='footer-content'>
            <p class='footer-text'>Content Copyright © 2024 STOBuilds</p>
        </footer>
    </div>
</main>
