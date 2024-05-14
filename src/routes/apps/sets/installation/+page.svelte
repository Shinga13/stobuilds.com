<h1 class='heading'>SETS Installation Guide</h1>
<h1>Installing python</h1>
<p>
    At first install the newest version of python 3. The installer can be downloaded from the 
    <a href='https://www.python.org/downloads/' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>python website</a>. 
    During installation make sure to install python to PATH by selecting the according checkbox at 
    the bottom of the very first window of the installer. Follow the instructions of the installer 
    to complete the installation.
</p>

<h1>Downloads & Preperations</h1>
<p>
    Once the python installation is complete, create a new folder on your PC that will contain 
    the app. This folder may not be a subfolder of the Downloads folder. Installing SETS to a non 
    local location like OneDrive may or may not work, using a local folder is therefore recommmended.
    In this walkthrough this folder will be called <code>SETS</code> and is located directly on 
    drive <code>D:\</code>. From the GitHub repository download the following files and folders 
    with all the files they contain and put them into the just created SETS folder.
</p>
<ul>
    <li>
        Folders to download:
        <ul>
            <li>
                <code>local</code>
            </li>
            <li>
                <code>src</code>
            </li>
        </ul>
    </li>
    <li>
        Files to download:
        <ul>
            <li>
                <code>main.py</code>
            </li>
            <li>
                <code>requirements.txt</code>
            </li>
        </ul>
    </li>
</ul>

<h1>Installation</h1>
<p>
    With those files in place, open a command line. This can be done by pressing 
    <code>WindowsButton+R</code>, typing <code>cmd</code> and hitting <code>Enter</code> or by 
    searching for <code>cmd</code> in the start menu. 
    Navigate the command line path to be identical with your SETS folder path by using 
    <code>pushd&nbsp;"D:\SETS"</code>. Replace <code>D:\SETS</code> with your path without 
    removing the quotation marks. The path can be retrieved by clicking into the navigation bar of 
    the Windows Explorer while inside the correct folder.
</p>
<p>
    Use the command <code>python&nbsp;-m&nbsp;pip&nbsp;install&nbsp;-r&nbsp;requirements.txt</code> 
    to install the requirements for this app. Wait for the execution to be finished, indicated by 
    seeing the current path again at the bottom of the command line. During execution various 
    statements will appear on the command line. Unless there are entire red paragraphs titled 
    "Error" or "Failure" the installation was successful.
</p>

<h1>Download Images</h1>
<p>
    Now download the images archive from the 
    <a href='https://github.com/STOCD/SETS/releases' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'> GitHub page</a> 
    and extract it. If you choose the 
    self-extracting archive (<code>.exe</code> extension), just execute it and select a path for 
    it to unpack to. Otherwise you need to extract the archive manually. It is preferred to do that 
    with a dedicated archiving software, but windows default extraction works as well. In your 
    app directory create a folder named <code>.config</code> and put the extracted images folder 
    into it. You can run SETS without this step, but first start can take extremely long due to
    thousands of images being downloaded.
</p>

<h1>Checkpoint</h1>
<p>With this step done, your folder should have the following structure:</p>
<pre>SETS
 +- .config
 |  `- images
 |    `- &lt;lots of images&gt;
 +- local
 |  `- &lt;some files&gt;
 +- src
 |  `- &lt;some more files&gt;
 +- main.py
 +- requirements.txt</pre>

<h1>Starting the app</h1>
<p>To start the app complete the following steps:</p>
<ul>
    <li>
        Open a command line: use <code>WindowsButton+R</code>, type <code>cmd</code> and hit <code>Enter</code>
    </li>
    <li>
        Navigate the command line path to your app folder: <code>pushd&nbsp;"&lt;YourFolderName&gt;"</code>
    </li>
    <li>
        Start the app by using the following command in your command line: <code>python main.py</code>
    </li>
</ul>
<p>
    If you want to automate this step, download 
    <a href='https://raw.githubusercontent.com/STOCD/SETS_LOADER/main/RUN.bat' target="_blank" rel="noopener norreferrer">
        this batch file</a> from the SETS Loader Github Repository and put it into your app folder. Double-clicking this will open the app as well.
</p>