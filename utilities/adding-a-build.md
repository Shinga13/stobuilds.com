# How to add a Build

Create a markdown file with a short, but precise name in `builds/[category-route]` where `[category-route]` is the route of the category as found in [_categories.js](/src/lib/builds/_categories.js). *Example*: `builds/dewsci/titan_phaser_secdef.md`

Add the following metadata section to the top of the file:
```
---
title:
description:
tags:
route:
---
```

- `title`: Expressive title for the build.
- `description`: Short description of the build.
- `tags`: Used to add hidden terms that can be searched for (optional).
- `route`: Route to this build, must be unique within this category. Make sure this is valid in URLs (Rule of thumb: only use ascii letters, dashes and underscores). If omitted, the file name will be used as route. In this case the file name (without extension) must be valid in URLs.

*Note*: If you want to use a colon in the title or description, escape it using `&#58;`.

Now add your build below the metadata section using markdown syntax.

Images should be added like this: `![alt](/assets/path)`
- `alt` should be a short description of the image in case it cannot be displayed.
- `path` is the path to the image in [/static/assets/](/static/assets/). Arbitrary subfolders can be created to organize the images. Images and folders must be valid in URLs. Make sure to retain the `/assets/` in the beginning of the path.
*Example*: `![Space Skill Tree](/assets/gallery_builds/space skill tree.png)` will show [this](/static/assets/gallery_builds/space%20skill%20tree.png) image
