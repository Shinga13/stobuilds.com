import guides_index from '$lib/builds_guides/_guides_index.json';
import guides_data from '$lib/builds_guides/_guides_data.json';
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    if (params.guide_route in guides_index && params.guide_route in guides_data) {
        return {
            title: guides_index[params.guide_route].title,
            body: guides_data[params.guide_route]
        }
    }
    else {
        error(404, 'This guide does not exist.');
    }
}
