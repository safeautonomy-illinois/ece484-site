# Resources - Spring 2026

## Course material and references

- The [course reader](/ece484-site/assets/pdfs/coursereader.pdf) and the lecture slides will serve as the primary source material. There is no required textbook. We will also use material from the following reference texts:

- [Probabilistic Robotics](http://www.probabilistic-robotics.org/) by Sebastian Thrun, Wolfram Burgard, Dieter Fox.  MIT press, 2017. Slides are available from the book's page.
- [Verifying Cyberphysical Systems: A Path to Safe Autonomy](https://www.amazon.com/Verifying-Cyber-Physical-Systems-Autonomy-Physical/dp/0262044803) by Sayan Mitra,  MIT press, 2021. [Slides](https://sayanmitracode.github.io/cpsbooksite/slides.html).

## Software

Additional resources will be posted here.


## Github

[Git](https://docs.github.com/en/get-started/start-your-journey/hello-world) is a version-control tool that helps you manage code changes over time and collaborate reliably. A **repository** in git parlance is a version-controlled, shared, public or private folder. In this course you will work with two kinds of GitHub **repositories**: a release repo that contains the official starter code we publish for each MP, and your personal submission repo where you will do your work and turn it in. The basic workflow is: **clone** (download) the MPX release repo to get the starter files, copy those files into your submission repo on your computer, then as you make changes you repeatedly **add → commit** (save a snapshot with a message) → **push** (upload) to GitHub. Our graders will look at the latest version you have pushed to your submission repo, so pushing your commits is what actually submits your work.

### Getting started with Github Org for ECE484 

You will have to do **Steps 1-4** at most once to setup your account and SSH key.

**Step 1** Create a [Github account](https://github.com/)  with your Illinois email address. Skip this step if you already have one.

**Step 2** Once signed in, navigate to the [ECE484 Students organization](https://github.com/safeautonomy-illinois-students) and accept our invite to join our organization. It should be in a yellow box. You may have also received an email where you can join the organization. _Welcome onboard!_

**Step 3** Once you join the ECE484 Students organization, navigate to the **Repositories** tab where you will be able to view your submission repo `sp26_ece484_YOUR_NETID` and the MP0 release repo with your starter code `sp26-ece484-release`.

**Step 4** To securely clone the release repo and to upload code to your submission repo, you will need to set up an **SSH key**. Follow these steps

a. In a terminal on your computer run

    ```ssh-keygen -t ed25519 -C "YOUR_NETID@illinois.edu```

b. Hit Enter 3 times (the defaults are OK)

c. Retrieve your public key
    
    ```cat /home/$USER/.ssh/id_ed25519.pub```

It should look something like `ssh-ed25519 YOUR_KEY YOUR_NETID@illinois.edu`. Copy this to clipboard.

d. On github.com click on your profile picture in the top right to open a drop down menu and select _Settings_.

e. On the left hand side of the page click on _SSH and GPG keys_ under the _Access_ tab. Click on _New SSH key_.

f. Title your key something memorable. E.g. ECE484Key

g. Paste the whole line found in step 4c into the "Key" text box and click _Add SSH key_.

h. Click on _Configure SSO_ dropdown under your newly added key.

i. Authorize for organization "safeautonomy-illinois-students". 

Now you have an SSH key and you can use it to securely commit and push (save) code to the git repositories. The remaining steps are MP-specific.


**Step 5** Clone the MP0 release repo
	
    ```git clone git@github.com:safeautonomy-illinois-students/sp26-ece484-release.git```

**Step 6** Clone your submission repo

	```git clone git@github.com:safeautonomy-illinois-students/mp0-sp26-ece484-YOUR_NETID.git```

**Step 7** Copy release code into your submission repo

**Step 8** Navigate to within your release repo

	```cd mp0-sp26-ece484-YOUR_NETID```

**Step 9** Commit your files
```
	git status
	git add -A
	git commit -m "initial commit" # you may need to specify your user.email and user.name
	git push
```

**Step 10** Verify your files are in your repository via the web browser: https://github.com/safeautonomy-illinois-students/sp26_ece484_YOUR_NETID

When you are done with your MP. Make sure to "git add" all files you changed before creating a commit and pushing. 