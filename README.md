# Sauce Labs Starter Repo

A minimal repository to get you up-and-running quickly with end-to-end WebDriverIO tests on Sauce Labs in just minutes.

Simply fork this repo and follow along with this README...

## Requirements

This project requires NodeJS/NPM so [download it here](https://nodejs.dev/) if you don't have it already

## Get a FREE account

Before you do anything, go to "saucelabs.com/sign-up" and get yourself a free trial account.

Go to https://app.saucelabs.com/user-settings and copy your access key to a safe place. We'll need this in the next step!

## Run the tests locally

```bash
export SAUCE_USERNAME=<your-username>
export SAUCE_ACCESS_KEY=<your-access-key>
export HOME_PAGE="http://www.example.com/" # URL to your website. Can even be 'localhost'
npm ci
npm run test
```

Congratulations! You just ran your first successful Selenium test on our Sauce Labs cloud. Now visit https://app.saucelabs.com/dashboard/tests and have a look at your test results.

## Run your tests in GitHub Actions CI/CD

### Add your Sauce Labs credentials to GitHub
1. Go to https://github.com/<your-organization>/saucelabs-nodejs-sample/settings/secrets/actions
1. Click "New Repository Secret"
1. Set `SAUCE_USERNAME` as your Sauce Labs username
1. Click "New Repository Secret" again
1. Set `SAUCE_ACCESS_KEY` as your Sauce Labs access key

### Add your GitHub Actions workflows

This project already has GitHub Actions.

Run the command `npm run make-pull-request` to get a close look at how Sauce Labs works with your CI/CD workflows.

## Run your tests in CI/CD

If you want to run these in a CI/CD provider other than GitHub Actions (CircleCI, Travis, AppVeyor, ...) you will need to consult the documentation for those providers on how to add secrets and how to write the YAML files needed to run the test script in that platform.

## Upgrade your plan

The free trial gets you 28 days free with 2 parallel sessions. 

Visit https://app.saucelabs.com/billing/purchase to upgrade your plan and take advantage of parallel, cross-browser, cross-platform testing.

## Feedback

Any feedback on this GitHub repository is more than welcome! If you have any ideas or questions feel free to make an issue at https://github.com/dpgraham/saucelabs-nodejs-sample/issues
