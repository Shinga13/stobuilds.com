<script>
    import ArrowRight from "$lib/icons/ArrowRight.svelte";
    let { href, children } = $props();
</script>

<style>
    a {
        text-transform: uppercase;
        font-size: 1rem;
    }

    div {
        display: flex;
        align-items: center;
    }

    .spacer{
        width: .2rem;
    }
</style>

<div>
    <a href={href} class='major-link'>{@render children()}</a>
    <span class='spacer'></span>
    <ArrowRight/>
</div>