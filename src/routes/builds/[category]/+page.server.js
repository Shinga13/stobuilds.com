import categories from "$lib/builds_guides/_categories";
import build_index from '$lib/builds_guides/_build_index.json';
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    if (params.category in categories) {
        let build_list = null;
        if (params.category in build_index) {
            build_list = build_index[params.category];
        }
        return {
            title: categories[params.category],
            builds: build_list
        }
    }
    else {
        error(404, 'This category does not exist.');
    }
}
