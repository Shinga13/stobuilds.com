import fs from 'node:fs';
import categories from '../builds/_categories.js';
import showdown from "showdown";


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

function update_builds() {
    const classMap = {
        img: 'center',
    }
      
    const bindings = Object.keys(classMap)
    .map(key => ({
        type: 'output',
        regex: new RegExp(`<${key}(.*)>`, 'g'),
        replace: `<${key} class="${classMap[key]}" $1>`
    }));

    const conv = new showdown.Converter({ metadata: true, strikethrough: true, extensions: [...bindings] })

    let source_folder;
    let build_text;
    let page_meta;
    let source_files;
    const build_index = {};
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
                if (page_meta.title === '') {
                    page_meta.title = get_file_name(build_file);
                }
                if (page_meta.route === '') {
                    page_meta.route = get_file_name(build_file);
                }
                page_meta.category = categories[category];
                build_index[category][page_meta.route] = page_meta;
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
        build_data[example_cat] = {
            example: '<p>Page content will appear here.</p>'
        };
    }

    fs.writeFileSync('src/lib/builds/_build_index.json', JSON.stringify(build_index));
    fs.writeFileSync('src/lib/builds/_build_data.json', JSON.stringify(build_data));
}

update_builds();
