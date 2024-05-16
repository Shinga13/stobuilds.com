# How to add a Build Category

Create an new category route by copying the `[category-route]` template into the "builds" folder 
(`/src/routes/guides`). It is required for the category folder to be a direct subfolder of the 
"builds" folder. Rename the folder to match the route you want to use for the category. Short but 
concise names are preferred.

Now edit the `+page.svelte` file inside the newly created folder. Replace `[Category Title]` in the 
fourth line of this file with your category title (it is not required for the title to match the 
route). Line four could look like this now: `const category = 'Cannons - DEW'; // <--- Insert category title here!`

Finally add the category to the list of categories: Insert the content of `category-object.txt` into 
the `/src/lib/builds/category_list.js` file after, before or in between already existing objects. 
Put the category name and route in between the single quotes. The name should match the title of 
the new category, though this is not required. The route has to match the folder name of the route 
without leading or trailing slashes and omitting the path to the folder.
