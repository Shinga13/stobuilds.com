<script>
    import { page } from '$app/state';
</script>
<h1>{page.status}</h1>
<p>{page.error.message}</p>
<p><a href='/'>Home Page</a></p>
