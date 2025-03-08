import build_data from '$lib/builds/_build_data.json';
import build_index from '$lib/builds/_build_index.json';
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    if (params.category in build_data
        && params.build_route in build_data[params.category]
        && params.category in build_index
        && params.build_route in build_index[params.category]) {
        return {
            title: build_index[params.category][params.build_route].title,
            body: build_data[params.category][params.build_route]
        }
    }
    else {
        error(404, 'This build does not exist.');
    }
}
