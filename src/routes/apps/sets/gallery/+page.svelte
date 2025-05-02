<script>
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { innerWidth } from 'svelte/reactivity/window';
    import builds from '$lib/build_gallery/gallery_index.json';
    import Close from '$lib/icons/Close.svelte';
    const build_len = builds.length;
    let show_build = $derived.by(() => {
        const num = Number(page.url.searchParams.get('build'));
        if (num > 0 && num <= build_len) {
            return num - 1;
        }
        return null;
    });
    let is_mobile = $derived(innerWidth.current < 800);
</script>

<style>
    #popout-viewer {
        backdrop-filter: blur(2px) saturate(20%);
        box-sizing: border-box;
        height: calc(100vh - 4rem);
        left: 0;
        padding: 2rem;
        position: fixed;
        top: 4rem;
        width: 100vw;
    }

    .download-link {
        margin-top: var(--margin);
        height: min-content;
    }

    
    .flexbar {
        display: flex;
        width: 100%;
    }

    .gallery-grid {
        display: grid;
        gap: var(--margin);
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: var(--spacing);
        max-width: 100%;
    }

    .img-container {
        margin: var(--margin) auto 0 auto;
        width: fit-content;
    }

    .mobile {
        grid-template-columns: 1fr;
    }

    .popout-author {
        margin-left: auto;
        margin-top: var(--margin);
        white-space: nowrap;
    }

    .popout-desc {
        margin: 0;
    }

    .popout-img {
        display: block;
        object-fit: scale-down;
        max-width: 100%;
        max-height: calc(100vh - 16rem);
    }

    .popout-title {
        margin: 0 auto 0 0;
    }

    .thumb {
        aspect-ratio: 16/9;
        object-fit: cover;
        width: 100%;
    }

    .thumb-button {
        border: none;
        cursor: pointer;
        font: inherit;
        margin: 0;
        overflow: hidden;
    }

    .thumb-title {
        margin: 0;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        width: 100%;
        white-space: nowrap;
    }

    .tool-button {
        background: none;
        cursor: pointer;
        border: none;
        stroke: var(--medium-text);
    }
</style>

{#if show_build !== null}
    <div id='popout-viewer'>
        <div class='flexbar'>
            <h3 class='popout-title'>{builds[show_build].title}</h3>
            <button class='tool-button' onclick={() => goto('?')}>
                <Close/>
            </button>
        </div>
        <p class='popout-desc'>{builds[show_build].desc}</p>
        <div class='img-container'>
            <img class='popout-img' src='/i/SETS/gallery_builds/{builds[show_build].file}.png' alt={builds[show_build].title} loading="lazy">
            <div class='flexbar'>
                <a class='download-link' href='/i/SETS/gallery_builds/{builds[show_build].file}.png' download>Download</a>
                <p class='popout-author'>Author: {builds[show_build].author}</p>
            </div>
        </div>
    </div>
{/if}

<h1 class='heading'>Gallery</h1>

<div class='gallery-grid' class:mobile={is_mobile}>
    {#each builds as build, i}
        <button class='pane thumb-button' onclick={() => goto(`?build=${i + 1}`)}>
            <img class='thumb' src='/i/SETS/gallery_thumbs/{build.file}.webp' alt={build.title}>
            <p class='thumb-title' title={build.title}>{build.title}</p>
        </button>
    {/each}
</div>

<a href='/apps/sets'>Back to SETS</a>
