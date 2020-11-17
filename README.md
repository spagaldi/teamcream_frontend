# teamcream_frontend
**Before Starting Assignment:**
* Make sure to pull any updated changes from the master. A good tip is to always pull from the master and resolve any merge conflicts.
* Then, create another branch using “git checkout -b your_name_branch” only if a branch without this name has been created. Note: the -b option creates a new branch.
* If you want to check what branches are already created, use “git branch -a” to reveal all branches.
* Next, you want to switch from the main (otherwise known as master) branch to your branch using “git checkout your_name_branch”.
* If you want to check which branch you’re already on, run “git branch” 

**Pulling from branch:**
* Before pulling from a branch, you have to “git add .” and “git commit -m “some_message”” all your changes. 
* Then run a “git pull origin branch_name” to the branch you want to pull from. 
* Note: you should always pull from master (“git pull” defaults to pulling from master).

**Creating a branch with a partner:**
* Run a “git pull” from the main to update your code
* “git checkout -b your_name_and_partner’s_name_branch”
* Make sure you’re in the right branch using “git branch”, to switch branches, use “git checkout target_branch_name” 

**How to go back to a commit:**
* If you messed up for whatever reason and want to go back to a commit version that you want, do a “git log --oneline” and copy the git id (ex: 9ef9173 ) of the commit that you want. 
* Then run a “git reset id” 

**Submitting Assignment:**
* When you want to submit your changes to the current branch you’re currently working on, you need to add/commit your changes using “git add .” THEN “git commit -m “some_detailed_commit_changes”” You can add specific files using “git add file_name”
* Before pushing changes, make sure you pull all the changes already made in your branch using “git pull origin branch_name“.

**Normal Workflow:**
1. Get up to date repo on your local device
    1. Git pull
                1. Npm install
    2. Git clone <repo>
                1. Npm install
2. Create branch or move into your own branch
  2. (new) git checkout -b <branchname>
  2. (existing) git checkout <branchname>
3. Merge your existing branch with master
  3. (new branch) you dont need to do anything
  3. (existing) git merge main
    3. Fix conflicts
4. Now you are ready to code. Do tasking, once you finish working on a page
  4. Git add .
  4. Git commit -m “msg”
  4. Rinse n repeat go back to step 4 each time you work on a new page
5. Once you have finished your tasking
  5. Make sure you are on your branch
  5. Git push
6. Before code review or if everything is done
  6. Go to github, and do a pull request

