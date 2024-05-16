# How to add a Guide

Create a new route by copying the `[new-route]` template to the desired location; for guides this 
should be inside the "guides" folder (`/src/routes/guides`). Rename the folder to match the route 
you want to use for the guide. Short but concise route names are preferred.

Edit the `+page.svelte` file inside the newly created folder. Replace "Title" in the first line 
with the title of your guide (it is not required for the title to match the route). Now add content 
to the page below the first line.

Finally, to add the guide to the list of guides, copy the content of `guide-link.txt` and insert
it in the desired location inside the `/src/routes/guides/+page.svelte` file. The guide links will 
be displayed in the order they are placed in the file. In the copied template replace 
`[route]`, `[Title]` and `[Description]` to match the new guide. The final code segment could look 
like this: 
```
<div class='pane'>
    <a href='/guides/boff-layout' class='pane-title'>Building Bridge Officer Layouts</a>
    <p class='pane-desc'>
        Basic guide covering the creation of bridge officer layouts. Presents important rules and 
        patterns as well as dos and donts for your every-day boff layout.
    </p>
</div>
```
