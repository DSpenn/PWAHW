# Unit 19 PWA Homework: Text Editor

## Table of Contents

  * [Description](#Description)
  * [Technologies-Used](#Technologies-Used)
  * [User-Story](#User-Story)
  * [Acceptance-Criteria](#Acceptance-criteria)
  * [Images](#Images)
  * [Grading-Requirements](#Grading-Requirements)

## Description

A text editor that runs in the browser. The editor will be a single page application that meets the PWA criteria. Additionally the application will feature a number of data persistence techniques that will serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.
Getting and storing data to an IndexedDB database. using `idb`.

## Technologies Used
```md
express
mongoose
morgan
Babel
webpack (-cli, -dev-server, -pwa-manifest, -webpack-plugin)
idb
```

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Image



## Grading Requirements


```md
### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:
  [X] Uses IndexedDB to create an object store and includes both GET and PUT methods
  [x] The application works without an internet connection
  [X] Automatically saves content inside the text editor when the DOM window is unfocused
  [X] Bundled with webpack
  [X] Create a service worker with workbox that Caches static assets
  [X] The application should use babel in order to use async / await
  [X] Application must have a generated `manifest.json` using the `WebpackPwaManifest` plug-in
  [X] Can be installed as a Progressive Web Application
### Deployment: 32%
[X] Application deployed to Heroku at live URL with build scripts
[X] Application loads with no errors
[X] Application GitHub URL submitted
[X] GitHub repo contains application code
### Application Quality: 15%
[X] Application user experience is intuitive and easy to navigate
[X] Application user interface style is clean and polished
[X] Application resembles the mock-up functionality provided in the homework instructions
### Repository Quality: 13%
[X] Repository has a unique name
[X] Repository follows best practices for file structure and naming conventions
[X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
[X] Repository contains multiple descriptive commit messages
[X] Repository contains quality README file with description, screenshot, and link to deployed application
## Review
You are required to submit the following for review:
[X] The URL of the deployed application
[X] The URL of the GitHub repository, with a unique name and a README describing the project
```