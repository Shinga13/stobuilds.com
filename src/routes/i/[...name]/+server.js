import fs from 'node:fs';
import path from 'node:path';
import { error } from '@sveltejs/kit';

const IMG_DIR = 'src/lib/assets';

export async function GET({ params }) {
    const file_path = path.normalize(path.join(IMG_DIR, params.name));
    let ext = ''
    if (params.name.includes('.')) {
        ext = '/' + params.name.split('.').pop();
    }

    const headers = {
        'Content-Type': `image${ext}`,
        'Cache-Control': 'public, max-age=2678400, immutable'
    };

    try {
        return new Response(fs.readFileSync(file_path), {status: 200, headers});
    }
    catch {
        error(404, 'This image is not available.');
    }
}
