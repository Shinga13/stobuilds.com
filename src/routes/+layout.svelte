<script>
    import '../app.css';
    import '@fontsource-variable/overpass';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    onMount(() => console.log($page.route.id))
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
        /*border: 1px solid red;*/
        box-sizing: border-box;
        margin: 6.5rem auto 0 auto;
        min-height: calc(100vh - 6.5rem - 6rem);
    }

    .selected {
        color: var(--accent);
        text-decoration: underline;
    }
</style>

<div class='header'>
    <a href='/' id='home-button'>STOBuilds</a>
    <nav id='main-navbar'>
        <a href='/guides' class='navlink' class:selected={$page.route.id.startsWith('/guides')}>Guides</a>
        <a href='/builds' class='navlink' class:selected={$page.route.id.startsWith('/builds')}>Builds</a>
        <a href='/links' class='navlink' class:selected={$page.route.id.startsWith('/links')}>Links</a>
        <a href='/apps' class='navlink' class:selected={$page.route.id.startsWith('/apps')}>Apps</a>
    </nav>
    <a href='https://discord.gg/stobuilds' id='discord-link'>
        <img src='discord-icon.svg' alt='Discord' id='discord-icon'>
    </a>
</div>
<!-- <nav>
    <a href="/">HOME</a>
</nav> -->
<div class='page-content content-width'>
    <slot/>
</div>
<div class='footer content-width'>
    <hr>
    <footer class='footer-content'>
        <p class='footer-text'>Content Copyright © 2024 STOBuilds</p>
    </footer>
</div>


