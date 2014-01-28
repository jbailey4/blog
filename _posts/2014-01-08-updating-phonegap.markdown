---
layout: 	post
title:  	Updating PhoneGap and PhoneGap Apps An How to
tags: 		PhoneGap Mobile Apps iOS Android
---
PhoneGap version 3.0.0 was the first version to use and support the CLI (Command Line Interface), a whole new way to create apps. If updating from a version prior to 3.0.0 more effort will be necessary such as: installing node (if your computer doesn't already have it), installing the PhoneGap CLI as mentioned above, installing the latest PhoneGap release, and some more. Once upgraded, keeping your app updated will no longer require the effort previously mentioned and will be simple as running commands in your project's directory.

Current stable release of PhoneGap (as of the time of this writing): 3.3.0  
<a href="http://docs.phonegap.com/en/edge/guide_platforms_index.md.html" target="_blank">Official PhoneGap documentation</a> 

**Updating an old App, PhoneGap version &lt; 3.0.0**  
PhoneGap recommends updating only one version increment!  
And upgrading can vary between platform and rather or not you have the CLI installed, a possible, easy way is as follows:  
Step 1: Check and/or install nodel.js  
<ul>
	<li>In your computer's command line run the following command: <code>node --version</code></li>
	<li>If your computer doesn't have node, you will not get a version # or you could just type node and get a command not found error. Otherwise if node is installed, skip to the next step.</li>
	<li>Select the link and click the install button to install <a href="http://www.nodejs.org" target="_blank">Node.js</a></li>
</ul>
Step 2: Install PhoneGap  
<ul>
	<li>Once node is installed you can run the following command: <code>sudo npm install -g phonegap</code></li>
	<li>Once the PhoneGap install completes you can use the command line to rapidly create apps, install platforms, add plugins, etc.</a></li>
</ul>
Step 3: Create a brand new app  
<ul>
	<li>Go to the directory for your project, and run the following commands:
		<ul>
			<li><code>phonegap create {name of your app}
</code></li>
			<li><code>cd {name of your app}</code></li>
			<li><code>phonegap build ios</code></li>
			<li><code>phonegap build android</code></li>
		</ul>
	</li>
	<li>You now have a skeleton app to develop on and the necessary files to build an iOS and Android app. Optionally you can build other platforms such as <a href="http://docs.phonegap.com/en/edge/guide_platforms_blackberry10_index.md.html#BlackBerry%2010%20Platform%20Guide" target="_blank">BlackBerry 10</a> and <a href="http://docs.phonegap.com/en/edge/guide_platforms_amazonfireos_index.md.html#Amazon%20Fire%20OS%20Platform%20Guide" target="_blank">Amazon Fire OS using the CLI. </a></li>
	<li>Now you can essentially copy the contents from your old apps www folder to the new app you just created.
			<ul>
				<li>Some plugins may need to be installed and/or updated if you used any in your old app</li>
				<li>And make sure you have/install the latest <a href="https://developer.apple.com/devcenter/ios/index.action" target="_blank">iOS</a> and <a href="http://developer.android.com/sdk/index.html" target="_blank">Android</a> SDKs</li>
			</ul>
	</li>
</ul>
<aside>
	Some helpful resources: <a href="http://phonegap.com/install/
" target="_blank">Installing PhoneGap</a>, <a href="http://docs.phonegap.com/en/2.3.0/guide_upgrading_index.md.html#Upgrading%20Guides" target="_blank">Upgrading Guides</a>, <a href="http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface" target="_blank">Use of the Command Line Interface</a>
</aside>  
**Updating PhoneGap version > 3.0.0 on your computer**  
Step 1: Check current version  
<ul>
	<li>change to your phonegap project in the command line</li>
	<li>run the command and make note of the number returned: <code>phonegap -v</code></li>
</ul>
Step 2: Compare your version to the latest  
<ul>
	<li>run the command: <code>npm info phonegap version</code></li>
	<li>if the returned number matches the number from the previous command then you the latest PhoneGap version, otherwise read on...</li>
</ul>
Step 3: Updating PhoneGap
<ul>
	<li>run the command: <code>sudo npm update -g phonegap</code></li>
	<li>the command will do its business and update PhoneGap on your computer</li>
</ul>
Step 4: Extra steps may be necessary to upgrade each platform
<ul>
	<li><a href="http://docs.phonegap.com/en/edge/guide_platforms_android_upgrading.md.html#Upgrading%20Android" target="_blank">Upgrading Android</a></li>
	<li><a href="http://docs.phonegap.com/en/edge/guide_platforms_ios_upgrading.md.html#Upgrading%20iOS" target="_blank">Upgrading iOS</a></li>
</ul>
<aside>
	Basically once you run the commands as described in the links above, core platform specific files and phonegap JavaScript files are being replaced with the latest releases. Thats it, your app is updated with just a few commands. Always run and check the app to make sure it still runs properly!
</aside>

**Other helpful Information**  
<ul>
	<li>Anytime you upgrade, check to make sure you have the latest version of Xcode, Eclipse, the iOS SDK, and the Android SDK.</li>
	<li>Do a quick check to see what the latest version of each OS is and what has changed.
		<ul>
			<li>iOS 7 changed a number of things that forced App developers to make some changes to their apps. One example is iOS7 changed the way the status bar is rendered, it is now transparent and uses the standard status-bar size (20points) of your view.
  			<a href="http://www.doubleencore.com/2013/09/developers-guide-to-the-ios-7-status-bar/" target="_blank">Article on the changes in iOS7</a>
			</li>
		</ul>
	</li>
	<li>If developing in an IDE try to take advantage of what it can do for you, such as in Xcode you can set all your necessary app icons and splash screen.</li>
</ul> 




	