## React Ultimate Course


- libs, frameworks
- first render, re-render (next render)
- SPA, MPA (multiple page app)
- first render : component render with initial state -> useEffect -> call api -> update new state -> component re-render with new state

## Git branch
- master/main: Stable branch
- develop: unstable branch, used for development, can be reset anytime with an announcement
- qc/staging: unstable branch, used for QC team, can be reset anytime with an announcement
- uat: Used for sanity testing before release to production
- feature: feature branch, used for developing a story
- hotfix: Hotfix branch when an incident occurs or bug fix on production env
- bugfix: bugfix branch when QC team detect on qc/uat
- release: Release branch used for release flow (release/1.5.2)


## Gitflow
```bash
# get lasted code from remote branch
$ git pull

# create new branch
$ git checkout -b {name branch}

# add file changes
$ git add .

# commit node
$ git commit -m "message ..."

# push code to remote branch
$ git push

# create new PR (pull request)
```