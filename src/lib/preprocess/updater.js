import fs from 'node:fs';
import categories from '../builds_guides/_categories.js';
import showdown from "showdown";
import flexsearch from "flexsearch";


function get_file_name(file_name) {
    if (file_name.includes('.')) {
        let parts = file_name.split('.');
        parts.pop();
        return parts.join('_');
    }
    else {
        return file_name;
    }
}

function empty_build_meta() {
    return {
        title: '',
        category: '',
        description: '',
        tags: '',
        route: ''
    }
}

function empty_guide_meta() {
    return {
        title: '',
        description: '',
        tags: '',
        route: ''
    }
}

function update_builds_and_guides() {
    const classMap = {
        img: 'center',
    }
      
    const bindings = Object.keys(classMap)
    .map(key => ({
        type: 'output',
        regex: new RegExp(`<${key}(.*)>`, 'g'),
        replace: `<${key} class="${classMap[key]}" $1>`
    }));

    const conv = new showdown.Converter({
        metadata: true,
        strikethrough: true,
        tables: true,
        extensions: [...bindings]
    });

    // builds
    let source_folder;
    let build_text;
    let page_meta;
    let source_files;
    const build_index = {};
    const build_index_flat = {};
    const build_data = {};

    for (let category in categories) {
        source_folder = `builds/${category}`;
        if (fs.existsSync(source_folder) && fs.lstatSync(source_folder).isDirectory()) {
            source_files = fs.readdirSync(source_folder);
            if (source_files.length < 1) {
                continue;
            }

            build_index[category] = {};
            build_data[category] = {};
            for (let build_file of source_files) {
                build_text = fs.readFileSync(`${source_folder}/${build_file}`, 'utf-8');
                build_text = conv.makeHtml(build_text);
                page_meta = {...empty_build_meta(), ...conv.getMetadata()};
                Object.keys(page_meta).forEach(key => page_meta[key] = page_meta[key].replaceAll('&amp;#58;', ':'));
                if (page_meta.title === '') {
                    page_meta.title = get_file_name(build_file);
                }
                if (page_meta.route === '') {
                    page_meta.route = get_file_name(build_file);
                }
                page_meta.category = categories[category];
                build_index[category][page_meta.route] = page_meta;
                build_index_flat[page_meta.route] = {
                    title: page_meta.title,
                    description: page_meta.description,
                    tags: page_meta.tags,
                    route: `${category}/${page_meta.route}`
                };
                build_data[category][page_meta.route] = build_text;
            }
        }
    }

    if (Object.keys(build_index).length < 1) {
        const example_cat = Object.keys(categories)[0]
        build_index[example_cat] = {
            example: {
                title: 'Example Build Title',
                category: categories[example_cat],
                description: 'Description goes here. Description goes here. Description goes here. Description goes here. Description goes here. Description goes here. Description goes here. Description goes here.',
                tags: '',
                route: 'example'
            }
        };
        const example_route = `${example_cat}/example`;
        build_index_flat[example_route] = {
            title: 'Example Build Title',
            description: 'Description goes here. Description goes here. Description goes here. Description goes here. Description goes here. Description goes here. Description goes here. Description goes here.',
            tags: 'tag',
            route: example_route
        }
        build_data[example_cat] = {
            example: '<p>Page content will appear here.</p>'
        };
    }

    fs.writeFileSync('src/lib/builds_guides/_build_index.json', JSON.stringify(build_index));
    fs.writeFileSync('src/lib/builds_guides/_build_index_flat.json', JSON.stringify(build_index_flat));
    fs.writeFileSync('src/lib/builds_guides/_build_data.json', JSON.stringify(build_data));

    // guides
    const guide_index = {};
    const guide_data = {};
    let guide_text;
    source_folder = 'guides';
    source_files = fs.readdirSync(source_folder).filter(file_name => file_name.endsWith('.md'));
    if (source_files.length > 0) {
        for (let guide_file of source_files) {
            guide_text = fs.readFileSync(`${source_folder}/${guide_file}`, 'utf-8');
            guide_text = conv.makeHtml(guide_text);
            page_meta = {...empty_guide_meta(), ...conv.getMetadata()};
            Object.keys(page_meta).forEach(key => page_meta[key] = page_meta[key].replaceAll('&amp;#58;', ':'));
            if (page_meta.title === '') {
                page_meta.title = get_file_name(guide_file);
            }
            if (page_meta.route === '') {
                page_meta.route = get_file_name(guide_file);
            }
            guide_index[page_meta.route] = page_meta;
            guide_data[page_meta.route] = guide_text;
        }
    }
    else {
        guide_index.example = {
            title: 'Example Guide Title',
            description: 'Example Guide Description Example Guide Description Example Guide Description Example Guide Description Example Guide Description Example Guide Description Example Guide Description',
            tags: '',
            route: 'example'
        };
        guide_data.example = '<p>Page content will appear here.</p>';
    }
    
    fs.writeFileSync('src/lib/builds_guides/_guides_index.json', JSON.stringify(guide_index));
    fs.writeFileSync('src/lib/builds_guides/_guides_data.json', JSON.stringify(guide_data));
}

update_builds_and_guides();
