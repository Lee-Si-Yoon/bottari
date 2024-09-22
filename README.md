# Release & commit rules

[automatic releases with conventional commits](https://nx.dev/recipes/nx-release/automatically-version-with-conventional-commits)

[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

- feat(...): triggering a minor version bump (1.?.0)
- fix(...): triggering a patch version bump (1.?.x)
- BREAKING CHANGE in the footer of the commit message or with an exclamation mark after the commit type (fix(...)!) triggers a major version bump (?.0.0)

if the git history looks like this:

```md
- fix(pkg-1): fix something
- feat(pkg-2): add a new feature
```

nx will select the minor version bump and elect to release version 1.1.0
