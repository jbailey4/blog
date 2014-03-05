---
layout: post
title: Automating Deployment using the Git Post-Receive hook
---
Deployment has been a step in my workflow I never really given any time or thought to improve, where before I used [FileZilla](https://filezilla-project.org/) or [Sublime SFTP](http://wbond.net/sublime_packages/sftp). Using FileZilla to FTP files to a remote location has some huge downfalls, such as having to keep up with files changed and navigating through folders on the local machine and the remote server. After creating this blog and constantly adding content it made since to automate deployment.

They're numerous ways to deploy a website and it all depends on your workflow, if there is team development, and the amount of access to the remote server. Chris Coyier of CSS-Tricks has an [awesome article](http://css-tricks.com/deployment/ "CSS-Tricks Deployment article") on the subject. If you are using Jekyll for any reason like me the documentation there has some neat [deployment options](http://jekyllrb.com/docs/deployment-methods/). After playing and looking around at the different options I choose to use Git as a way to deploy changes. Following is how I did just that.

<strong>On your remote machine:</strong>  
Create a remote repository (somewhere that makes sense relative to the live folder you are serving you website from), this will be the location you push changes to from your local machine. Then add git to that directory.
{% highlight bash %}
remote:$ mkdir ~/public/myRepo.git && cd ~/public/myRepo.git
remote:$ git init --bare
{% endhighlight %} 
Using ``--bare`` means that this repository will not contain a working directory and only the version history of your code. More can about a bare git repository can be found [here](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/).  
<strong>On your local machine:</strong>  
I'm going to assume you already have a directory with some files that you would like to serve up on your server, or a local copy of your website. So in your project directory add Git and add a remote repository pointing to the repository you made earlier.
{% highlight bash %}
local:$ cd path/to/project/
local:$ git init
local:$ git add remote live ssh://username@server/path/to/myRepo.git
{% endhighlight %}  
At this point you should be able to push changes, with ``git push live master``. Of course this will not update anything else such as your website on your server, it will just contain what you push to it. Luckily though Git repositories have a directory named *hooks*, and in that directory are sample files for possible actions that you can hook and perform custom actions set by you. The [Git Docs](http://git-scm.com/book/en/Customizing-Git-Git-Hooks "Git Documentation on possible hooks") list three possible server hooks: *pre-receive*, *post-receive*, and *update*. Post-Receive takes all the data you push to the repository and after the process is complete this hook can be used to update other services, just what we are looking for. Here is how you set that up.  
<strong>On your remote machine:</strong>  
Navigate to the bare repository you created earlier, add some configuration settings, and create the post-receive file in the hooks directory.
{% highlight bash %}
remote:$ cd /path/to/myRepo.git
remote:$ git config core.worktree /path/to/project
remote:$ git config core.bare false
remote:$ git config receive.denycurrentbranch ignore
{% endhighlight %}  
Now all we have to do is create the post-receive file and make it executable!
{% highlight bash %}
remote:$ cd /path/to/myRepo.git/hooks
remote:$ cat > post-receive
#!/bin/sh
git checkout -f
#Thats it! press *control-d* to save
remote:$ chmod +x post-receive
{% endhighlight %} 

Now the next time you push changes from your local repository to the remote you should see the changes on your live site (the worktree you configured on the remote repository)
{% highlight bash %}
local:$ cd path/to/project/
local:$ git push live master
{% endhighlight %}
<aside>Its worth mentioning that "live" can be named anything that makes sense to you or your team, it's just a friendly name for your remote repository. When you clone a repository the name defaults to "origin".</aside>

<strong>Some common pitfalls</strong>
<ul>
	<li>Make sure you have the correct permissions to ssh into your remote server</li>
	<li>Making sure your paths are identical and correspond correctly! Navigating to the **.git** folder and opening the **config** file will show you all your settings and the default ones.</li>
	<li>Be sure that you actually make changes locally, add those changes to the next commit, run commit, and finally push to the remote repository</li>
</ul>