# Login portal

## Actions

[![AutoImage](https://github.com/Carelyo/loginui/actions/workflows/createimage.yml/badge.svg)](https://github.com/Carelyo/loginui/actions/workflows/createimage.yml)
[![Create Branch Image](https://github.com/Carelyo/loginui/actions/workflows/branchimage.yml/badge.svg)](https://github.com/Carelyo/loginui/actions/workflows/branchimage.yml)

## Creating Docker Images

[Read More](https://github.com/Carelyo/loginui/blob/develop/.github/workflows/README.md)

### Create Branch Image

[Click to create an image for your branch](https://github.com/Carelyo/loginui/actions/workflows/branchimage.yml)

## Getting started

### Begin [here](https://gitlab.com/carelyo/docs/-/blob/main/docs/gettingstarted/getstarted/frontend.md)

## Prerequisites
- Docker
- Node.js
## Getting started

### Begin [here](https://gitlab.com/carelyo/docs/-/blob/main/docs/gettingstarted/getstarted/frontend.md)
## Installation

### App Setup
Clone the repo
```bash
# SSH
git clone https://github.com/Carelyo/care-login-portal.git
cd care-login-portal
```
Install the dependencies
```sh
yarn install
```
Create your `.env` file and replace the defaults as required

Make sure environment variables and certificates are set.
```sh
# CUSTOMER SPECIFIC
VITE_API_URL=http://localhost:8080 # URL to backend API
VITE_PATIENT_URL=http://localhost:5511 # URL to patient page
VITE_DOCTOR_URL=http://localhost:5513  
VITE_DOMAIN=carelyo.top    # Domain name where it's hosted.
PORT=5510      # Port number for login portal
GENERATE_SOURCEMAP=false  #force https
VITE_SLOGAN=add_slogan
VITE_SYSADMIN_URL=http://localhost:5516 # URL to system admin page
VITE_TITLE=add_provider_title
VITE_CLIENT_URL=link_provider_website
VITE_CARELYO_URL=https://carelyo.com
VITE_GOOGLE_CLIENT_ID=check_google_console
VITE_PROVIDER_NAME=Trinity Care
VITE_PROVIDER_COUNTRY=Nigeria
VITE_BACKGROUND_IMAGE_URL=public/assets/images/drike.jpg


```
### Access

Run locally
```sh
yarn dev
```
Access the app on
http://localhost:5510/

## Production build
Use the `.env` file in the project's root folder.
Then run `yarn run build` to create a production build.

If you get this error message

```
openssl Error Stack: [ 'error:03000086:digital envelope routines::initialization error' ], library: 'digital envelope routines', reason: 'unsupported', code: 'ERR_OSSL_EVP_UNSUPPORTED'
```
Use this quick fix

```
export NODE_OPTIONS=--openssl-legacy-provider
```

### Testing
```sh
#Run Playwright Tests: This stage runs your Playwright tests using the command npx playwright test.
```
```sh
By using Playwright, you ensure that your web application provides a consistent user experience across different browsers and devices, reducing the risk of bugs and improving the overall quality of the product.
Given the scripts in package.json, it looks like using Vite for development and building, and release-it for managing releases.
To run Playwright tests, Need to add a script to package.json for running the tests in this format
{
"scripts": {
"dev": "vite --host",
"build": "vite build",
"preview": "vite preview",
"release": "release-it",
"prettier-watch": "onchange "/*" -- prettier --write --ignore-unknown {{changed}}",
"test": "playwright test" // Add this line
}
}
This configuration specifies the directory where test files are located and the pattern to match test files.
TrY running yarn playwright test
yarn run test
The result i got is as follows:
yarn run test
yarn run v1.22.22
$ playwright test

Running 3 tests using 3 workers

##Start the Application

To start the Application in the browser  install yarn with command yarn install in git bash/terminal.
Then by using command yarn dev we will be able to open local host:5510 then see the application.
 but cannot sign in
Changes made to sign in
Do the changes in the .env file in the deploy branch as follows:
VITE_API_URL=https://api-uzochukwustaging.carelyo.io
VITE_PATIENT_URL=https://p-uzochukwustaging.carelyo.io
VITE_DOCTOR_URL=https://d-uzochukwustaging.carelyo.io
VITE_DOMAIN=carelyo.top
PORT=5510
GENERATE_SOURCEMAP=false
VITE_SLOGAN=add_slogan
VITE_SYSADMIN_URL=https://a-uzochukwustaging.carelyo.io
VITE_TITLE=add_provider_title
VITE_CLIENT_URL=link_provider_website
VITE_CARELYO_URL=https://carelyo.com
VITE_GOOGLE_CLIENT_ID=794623894467-1aa200c1jjsu5hj84u7cqe9d5chb3lc6.apps.googleusercontent.com
VITE_PROVIDER_NAME=Trinity Care
VITE_PROVIDER_COUNTRY=Nigeria
VITE_BACKGROUND_IMAGE_URL=public/assets/images/drike.jpg
Then sign up with the Google and open the carelyo web page.
##building and deploying Docker images using Jenkins 
#Prerequisites
Install Jenkins: Ensure Jenkins is installed and running on your system or server.
Install Docker: Docker should also be installed on the same machine as Jenkins.
Verify Docker installation with docker --version.
Configure Jenkins User Permissions: Jenkins needs permission to run Docker commands. If Jenkins is running as a system user, you may need to add the Jenkins user to the Docker group:
```sh
sudo usermod -aG docker jenkins
```sh