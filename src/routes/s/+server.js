import guides_index from '$lib/builds_guides/_guides_index.json';
import builds_index_flat from '$lib/builds_guides/_build_index_flat.json';

const guides_index_str = JSON.stringify(guides_index);
const builds_index_str = JSON.stringify(builds_index_flat);

export async function GET({ url }) {
    const param_page = url.searchParams.get('page');
    if (param_page == 'guides') {
        return new Response(
            guides_index_str,
            {status: 200, headers: {'Content-type': 'application/json'}}
        );
    }
    else if (param_page == 'builds') {
        return new Response(
            builds_index_str,
            {status: 200, headers: {'Content-type': 'application/json'}}
        );
    }
    else {
        return new Response(
            'Invalid "page" parameter.',
            {status: 400, headers: {'Content-type': 'text/plain'}}
        );
    }
}
