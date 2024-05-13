<script>
    import '../app.css';
    import '@fontsource-variable/overpass';
    import { page } from '$app/stores';

    let page_route;
    $: {
        try {
            page_route = $page.route.id.split('/').slice(1);
        }
        catch {
            page_route = [];
        }
        console.log(page_route);
    }
</script>

<style>
    #discord-icon {
        height: 2rem;
    }

    #discord-link {
        align-items: center;
        display: flex;
        grid-column: 3;
        justify-self: end;
        margin-right: 4rem;
        max-width: max-content;
    }

    #home-button {
        align-items: center;
        background-image: url('favicon.webp');
        background-position: 3.5rem 45%;
        background-repeat: no-repeat;
        background-size: 2.7rem;
        color: var(--light-text);
        display: flex;
        font-size: 1.7rem;
        font-weight: 200;
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
        max-width: 84rem;
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
        color: var(--border);
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

    .link-button {
        text-decoration: none;
    }

    .navbar {
        align-items: center;
        display: flex;
        margin: 4rem auto 0 auto;
    }

    .navlink {
        color: var(--light-text);
        font-size: 1.2rem;
        font-weight: 300;
        margin: 0 .5rem;
        text-decoration: none;
    }
    .navlink:hover {
        text-decoration: underline;
    }

    .page-content {
        box-sizing: border-box;
        margin: .5rem auto 0 auto;
        min-height: calc(100vh - 6.5rem - 6rem);
    }

    .selected {
        color: var(--accent);
        text-decoration: underline;
    }

    .path-seperator {
        font-weight: bold;
        margin: 0 1rem;
    }
</style>

<div class='header'>
    <a href='/' id='home-button'>STOBuilds</a>
    <nav id='main-navbar'>
        <a href='/guides' class='navlink' class:selected={page_route[0] == 'guides'}>Guides</a>
        <a href='/builds' class='navlink' class:selected={page_route[0] == 'builds'}>Builds</a>
        <a href='/links' class='navlink' class:selected={page_route[0] == 'links'}>Links</a>
        <a href='/apps' class='navlink' class:selected={page_route[0] == 'apps'}>Apps</a>
    </nav>
    <a href='https://discord.gg/stobuilds' id='discord-link'>
        <img src='discord-icon.svg' alt='Discord' id='discord-icon'>
    </a>
</div>
<nav class='navbar content-width'>
    {#each page_route as route_element, i}
        <span class='path-seperator'>/</span>
        <a href='/{page_route.slice(0, i + 1).join('/')}' class='link-button'>{route_element}</a>
    {/each}
</nav>
<div class='page-content content-width'>
    <slot/>
</div>
<div class='footer content-width'>
    <hr>
    <footer class='footer-content'>
        <p class='footer-text'>Content Copyright © 2024 STOBuilds</p>
    </footer>
</div>


