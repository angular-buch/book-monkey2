# angular-cli-github-pages

Angular CLI addon for deploying apps to GitHub pages.

If you need to quickly deploy and redeploy a small Angular 2 app via GitHub pages this angular-cli
addon is for you!

This addon does the following:

- creates GitHub repo for the current project if one doesn't exist
- rebuilds the app at the current `HEAD`
- creates a local `gh-pages` branch if one doesn't exist
- moves your app to the `gh-pages` branch and creates a commit
- pushes the `gh-pages` branch to github
- returns back to the original `HEAD`


## Installation & Setup

This addon has the following prerequisites:

- Node.js 4.x
- SSH keys setup for authentication with GitHub (see "Authentication" section below)
- Angular project created via [angular-cli](https://github.com/angular/angular-cli)

To install this addon all you need to do is install angular-cli-github-pages via npm:

```sh
npm install --save-dev angular-cli-github-pages
```

## Usage

Once that's done, you can checkout the branch you want to create the gh-page
from (likely master) and run the command to build and commit it.

Then run `ng github-pages:deploy` in order to rebuild gh-pages branch and deploy it.

```sh
git checkout master
ng github-pages:deploy --message "Optional commit message"
```

## Authentication

This addon relies on ssh authentication for all git operations that communicate with github.com.
To simplify the authentication, be sure to [setup your ssh keys](https://help.github.com/articles/generating-ssh-keys/).

For repository creation, the addon needs to make a single https call to the GitHub api, for this
user name and password are requested when the repo is being created.

*Note: Two factor authentication is currently not supported by this addon.*


## Authors

- [Igor Minar](http://twitter.com/IgorMinar)
- Based on [ember-cli-github-pages](https://github.com/poetic/ember-cli-github-pages) by [Jake Craige](http://twitter.com/jakecraige)

## License

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
