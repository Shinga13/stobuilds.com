<script>
    import MajorLink from "$lib/layout/MajorLink.svelte";
    import G1 from '$lib/assets/SETS/Hirogen_Phaser_CSV.webp';
    import G2 from '$lib/assets/SETS/space_skill_tree.webp';
    import G3 from '$lib/assets/SETS/Qowat_Milat_ground.webp';
</script>

<h1 class='heading'>STO Equipment and Trait Selector</h1>
<h1>Introduction</h1>
<p>
    STO Equipment and Build Selector, called SETS, is a new and innovative planning tool for ship and ground builds as well as space and ground skill trees for Star Trek Online, developed by the STO Community Developers. 
    Our main goal is to provide an easy and intuitive platform for optimizing every single aspect of a space or ground build, aimed at brand new and experienced players likewise. 
    You can also save and share your builds as JavaScript Object Notation (.json) or Portable Network Graphic (.png) file and even an in markdown pre-formatted text export is included. 
    Its unique connection to the STO Wiki almost guarantees an up-to-date database without the need of manual additions to the app itself.
</p>
<h2>Features</h2>
<ul>
    <li>Plan space and ground builds on any ship.</li>
    <li>Build without being restricted to owned items.</li>
    <li>Share builds and edit shared builds (JSON and PNG format).</li>
    <li>Convenient skill tree experience: SETS allows you to select and deselect skill points at will, which is not possible in game.</li>
    <li>Export builds in markdown format.</li>
    <li>Open the wiki page of any item using the context menu.</li>
</ul>
<h2>Caveats</h2>
<ul>
    <li>SETS isn't a performance calculator tool. <a href='https://sites.google.com/view/stobetter/tools' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>TRINITY</a>, developed by STOBetter, can be used instead.</li>
    <li>Certain equipment restrictions are not in effect using SETS, for example Dual Cannons can be equipped on any ship as well as an arbitrary number of Omni-Directional Beam Arrays.</li>
    <li>Builds created using SETS cannot be imported into STO directly.</li>
</ul>
<h2>Examples</h2>
<p>These example builds were generously provided by the community and can be imported into SETS when being downloaded using the download button. Although all examples are competent builds, these don't serve as universal recommendations on how to build the specific ships.</p>
<MajorLink href='/apps/sets/gallery'>Browse Example Builds</MajorLink>
<h1>Downloads & Installation</h1>
<p>
    SETS is available as script version and executable for windows. You can download the executable <a href='https://github.com/STOCD/SETS/releases' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>here</a>.
    The script version is available from the <a href='https://github.com/STOCD/SETS' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>GitHub repository</a>. Check out the <a href='/apps/sets/installation'>installation guide</a> for a detailed description on how to install the app manually.
</p>

<!-- <h1>Manual</h1>
<p>The manual for SETS covering detailed descriptions of all features can be downloaded 
<a href='/apps/sets' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>here</a>.</p> -->

<h1>Gallery</h1>
<img class='center' src={G1} alt='Space build section showing a Hirogen Hunter Phaser CSV build' loading='lazy'>
<img class='center' src={G2} alt='Space Skill Tree' loading='lazy'>
<img class='center' src={G3} alt='Ground build section' loading='lazy'>
