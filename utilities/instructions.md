# General
## Folder structure
The `/src` and `/static` folders contain the actual content of the site. `/src` contains *routes* 
and a *lib* (=library). Routes are the url components leading to the different pages of the site. 
Inside the `routes` folder a subfolder represents a route; nested folder structures represent 
nested routes. Because of that folder names here should be lowercase, without spaces and special 
characters; dashes or underscores can be used as word seperators if necessary. The library primarily 
contains data for easy access.

`/static` contains page assets - images in our case. These can be organized in folders. These 
folders as well as the images must have url-safe names. It is advised not to use spaces or special 
characters (except for dashes and underscores). To access these files somewhere in the app, just 
use their filename including file extension after a slash. Examples: `/favicon.webp`, 
`/VGER/howto1.webp`

## .svelte files
These files contain the individual pages, or page components. A `+page.svelte` file inside the 
routes folder (or any subfolder) contains the page content of that route. A route is not complete 
and cannot be visited without this file. *.svelte* files can be 
treated like *.html* files; they use the same syntax, but can do more. This site is set up in a way 
to keep the `+page.svelte` as simple as possible - they should only contain the *content*, for 
example a guide or build, the bar at the top as well as the footer are defined in the 
`/src/routes/+layout.svelte` file and apply to each page.

# Styling
The `+` symbol in examples marks the location where text or child elements should be inserted.

### Paragraphs
The `<p>` tag is used for paragraphs of text. Below each paragraph a spacing is added to keep 
different paragraphs seperated. If a line break is desired, consider starting a new paragraph. If 
that is not an option, insert `<br>` where the line break should be placed. 

Template:
```
<p>+</p>
```
or
```
<p>
    +
</p>
```

### Links
The `<a>` tag is used for internal and external links. The *href* attribute contains the target 
link. External links must be full urls including the protocol 
(i.e. `https://sites.google.com/view/stobetter`). Internal links are relative to the root of the 
site and start with a slash (`/`). The slash on its own links to the root page (= home page). Links 
are *inline*, meaning they are supposed to be used inside `<p>` tags and will not break the flow of 
the text. To make a link stand on its own wrap a `<p>` tag around it.

Internal link template (replace `%` with route):
```
<a href='%'>+</a>
```
External link template (replace `%` with url):
```
<a href='%' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>+</a>
```

### Headings
The `<h1>`, `<h2>`, `<h3>` and `<h4>` tags are used for different levels of headings. These should 
not be inside other tags.

Templates:
```
<h1>+</h1>
<h2>+</h2>
<h3>+</h3>
<h4>+</h4>
```

### Bold & Italic
For bold or italic text, wrap a portion of your text with the respective tag.

Bold:
```
<b>+</b>
```
Italic:
```
<i>+</i>
```

### Lists
Lists are created using the `<ul>` (unordered list) and `<ol>` (ordered list) tags. Inside these, 
each `<li>` tag represents a single element in the list. To create nested lists, just create a new 
`<ul>` or `<ol>` tag inside an already existing one.

Templates (additional tags may be inserted):
```
<ul>
    <li>+</li>
    
</ul>
```
```
<ol>
    <li>+</li>
    
</ol>
```

### Images
Images can be inserted using the `<img>` tag. Three different styles are predefined: A centered 
image, a left and a right floating image. Optionally you can set an alternative text that will be 
shown when the image fails to load. The source is inserted into the *src* attribute as described 
at the top of this document. The images should be uploaded at the actual size that they are supposed 
to be displayed.

Centered image (enter source path at `%`):
```
<img class='center' alt='' src='%'>
```
Right floating image (enter source path at `%`):
```
<img class='right' alt='' src='%'>
```
Left floating image (enter source path at `%`):
```
<img class='left' alt='' src='%'>
```

If you want text to stop float around the image, add `<div style='clear:both;'></div>` after the 
last item that is allowed to float.

### Seperation line
`<hr>` creates an horizontal seperation line.

### Preformatted text
`<pre>` and `<code>` can be used to display preformatted text. The former is used to display 
multiple lines also preserving indentation and linebreaks, while the latter is used inline for 
single words or phrases.

Templates:
```
<pre>+</pre>
```
```
<code>+</code>
```
