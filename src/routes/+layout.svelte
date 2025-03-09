<script>
    import '../app.css';
    import '@fontsource-variable/overpass';
    import '@fontsource-variable/overpass-mono'
    import { page } from '$app/state';
    import { beforeNavigate } from '$app/navigation';
    import { innerWidth } from 'svelte/reactivity/window';
    import Discord from '$lib/icons/Discord.svelte';
    import ExternalLink from '$lib/icons/ExternalLink.svelte';
    import MobileMenuButton from '$lib/layout/MobileMenuButton.svelte';

    let { children } = $props();

    let is_mobile = $derived(innerWidth.current < 800);
    let base_route = $derived(page.route.id?.split('/')[1] ?? '');
    let menu_open = $state(false);

    beforeNavigate(() => menu_open = false);
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
        max-width: max-content;
    }

    #discord-link:hover {
        fill: var(--accent);
    }

    #home-button {
        align-items: center;
        background-image: url('/favicon.webp');
        background-position: 0 45%;
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
        padding-left: 3.5rem;
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
        box-shadow: 0 0.1rem 5px var(--bg);
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        height: 4rem;
        left: 0;
        padding: 0 4rem;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 100;
    }

    .inline-icon {
        display: flex;
        align-items: center;
        height: 1rem;
        margin-left: 0.3rem;
        margin-top: 0.3rem;
        width: 1rem;
    }

    .menu {
        background-color: var(--mbg);
        border-radius: var(--margin);
        box-shadow: 0.2rem 0.2rem 5px var(--bg);
        height: fit-content;
        justify-items: center;
        margin: var(--margin);
        margin-left: auto;
        width: fit-content;
    }

    .menu-button-container {
        align-self: center;
        grid-column: 3;
        justify-self: end;
    }

    .menu-external-link {
        box-shadow: none;
        display: flex;
        fill: none;
        font-size: 1.5rem;
        stroke: var(--medium-text);
        text-align: center;
        margin: .7rem;
    }

    .menu-nav {
        display: block;
    }

    .menu-nav .navlink {
        display: block;
        font-size: 1.5rem;
        text-align: center;
        margin: .7rem;
    }

    .mobile-header {
        padding: 0 2rem;
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
        padding: 0 var(--spacing)
    }

    .popout-container {
        backdrop-filter: blur(2px);
        background: none;
        display: flex;
        height: calc(100dvh - 4rem);
        left: 0;
        position: fixed;
        top: 4rem;
        width: 100%;
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
    <div class='header' class:mobile-header={is_mobile}>
        <a href='/' id='home-button'>STOBuilds</a>
        {#if !is_mobile}
            <nav id='main-navbar'>
                <a href='/guides' class='navlink' class:selected={base_route == 'guides'}>Guides</a>
                <a href='/builds' class='navlink' class:selected={base_route == 'builds'}>Builds</a>
                <a href='/links' class='navlink' class:selected={base_route == 'links'}>Links</a>
                <a href='/apps' class='navlink' class:selected={base_route == 'apps'}>Apps</a>
            </nav>
            <a href='https://discord.gg/stobuilds' id='discord-link' title='STOBuilds Discord' target='_blank' rel='noreferrer'>
                <Discord/>
            </a>
        {:else}
            <div class='menu-button-container'>
                <MobileMenuButton bind:open={menu_open}/>
            </div>
            {#if menu_open}
                <div class='popout-container' onclick={() => menu_open = false} onkeydown={(e) => menu_open = false} role='none'>
                    <div class='menu'>
                        <nav class='menu-nav'>
                            <a href='/guides' class='navlink' class:selected={base_route == 'guides'}>Guides</a>
                            <a href='/builds' class='navlink' class:selected={base_route == 'builds'}>Builds</a>
                            <a href='/links' class='navlink' class:selected={base_route == 'links'}>Links</a>
                            <a href='/apps' class='navlink' class:selected={base_route == 'apps'}>Apps</a>
                        </nav>
                        <hr>
                        <a href='https://discord.gg/stobuilds' class='menu-external-link' title='STOBuilds Discord' target='_blank' rel='noreferrer'>
                            Discord<span class='inline-icon'><ExternalLink/></span>
                        </a>
                    </div>
                </div>
            {/if}
        {/if}
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
