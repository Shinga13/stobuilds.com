<h1 class='heading'>SETS Installation Guide</h1>
<i>Throughout this walkthrough, commands are given for Windows before and for Linux after the "slash".</i>
<h1>Installing python</h1>
<p>
    To check whether python is already installed, open a command line / terminal and enter the <code>python --version</code> / <code>python3 --version</code> command. If this command is recognized, python is already installed.
</p>
<p>
    For Windows, the installer can be downloaded from the 
    <a href='https://www.python.org/downloads/' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>python website</a>. 
    During installation make sure to install python to PATH by selecting the according checkbox at 
    the bottom of the very first window of the installer. Follow the instructions of the installer 
    to complete the installation.
</p>

<h1>Downloads & Preperations</h1>
<p>
    Once the python installation is complete, create a new folder on your PC that will contain 
    the app. On Windows, this folder may not be a subfolder of the Downloads folder.
    In this walkthrough, this folder will be called <code>SETS</code> and is located directly on 
    drive <code>D:\</code> or your home directory <code>~</code> respectively.
<p>
    <ul>
        <li>
            From the <a href='https://github.com/STOCD/SETS'>GitHub repository</a>, download the source code and assets by clicking on the green "CODE" button and selecting "Download ZIP". Unpack the zipped folder into your SETS folder.
        </li>
        <li>
            Alternatively, clone the git repository by running <code>git clone https://github.com/STOCD/SETS.git .</code> in your SETS folder.
        </li>
    </ul>
<p>
    After this step, the files and folders from the top level of the repository should be directly in your SETS folder.
</p>

<h1>Installation</h1>
<p>
    If you haven't already, open a command line or terminal. On Windows, open your SETS folder in the file explorer, type <code>cmd</code> in the address bar and hit <code>Enter</code>. Make sure, that your command line / terminal is opened in your SETS folder, showing the path to the folder (including the folder name).
</p>
<p>
    Use the command <code>python&nbsp;-m&nbsp;pip&nbsp;install&nbsp;.</code> / <code>python3&nbsp;-m&nbsp;pip&nbsp;install&nbsp;.</code>
    to install the requirements for this app. Wait for the execution to be finished, indicated by 
    seeing the current path again at the bottom of the command line / terminal. During execution various 
    statements will appear on the command line / terminal, which can be ignored, unless the line at the very bottom indicates an error.
</p>

<h1>Download Images</h1>
<p>
    Now download the images archive from the 
    <a href='https://github.com/STOCD/SETS/releases' target='_blank' referrerpolicy='no-referrer' rel='noopener noreferrer'>GitHub page</a> 
    and unpack it. It is preferred to do that
    with a dedicated archiving software (like 7-zip), but operating system specific preinstalled software works as well. In your 
    app directory create a folder named <code>.config</code> and put the extracted images folder 
    into it. You can run SETS without this step, but first start can take extremely long due to
    thousands of images being downloaded.
</p>

<h1>Checkpoint</h1>
<p>With this step done, your folder should have the following structure (additional files may be present):</p>
<pre>SETS
 +- .config
 |  `- images
 |    `- &lt;lots of images&gt;
 +- local
 |  `- &lt;some files&gt;
 +- src
 |  `- &lt;some more files&gt;
 +- main.py
 +- pyproject.toml
 +- README.md</pre>

<h1>Starting the app</h1>
<p>To start the app complete the following steps:</p>
<ul>
    <li>
        Open a command line / terminal at the location of the main.py.
    </li>
    <li>
        Start the app by running <code>python main.py</code> / <code>python3 main.py</code>.
    </li>
</ul>
