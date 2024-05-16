# How to add a Build

Create a new route by copying the `[new-route]` template to the desired location; for builds this 
must be inside the respective categories folder. Rename the folder to match the route 
you want to use for the build. Short but concise route names are preferred.

Edit the `+page.svelte` file inside the newly created folder. Replace "Title" in the first line 
with the title of your guide (it is not required for the title to match the route). Now add content 
to the page below the first line.

Finally, add the build to the list of builds: Insert the content of `build-object.txt` into 
the `/src/lib/builds/build_list.js` file after the last already existing object, but before the 
closing bracket (`]`). Fill in the gaps of the inserted template, always in between the double 
quotes:
- **title**: title of your build; should match the title set in the `+page.svelte` file
- **category**: name of the category; must be identical to a category name inside 
`/src/lib/builds/category_list.js`
- **description**: build description; will be displayed on the categories page
- **tags**: tags for the build; invisible, but the search will filter them too; key words seperated 
by whitespaces
- **route**: the builds route; must be identical to the folder name (=route) of the build
