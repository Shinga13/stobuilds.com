<script>
    const { data } = $props();
</script>

<h1 class='heading'>{data.title}</h1>

{@html data.body}
