Using React with TypeScript and Firestore (Google's NoSQL database), implement a Github "user saver" app. The app should meet the following criteria:


1. There is a search bar at the top of the page in which users can enter Github usernames. Upon hitting the "enter" button the application will search for username.
2. Upon pressing enter in the textbox, the application retrieves this URL https://api.github.com/users/<username>;
3. If there is a result, the application displays a success message to the user and saves data. If there is an error, the application displays an error message.
4. Below the search box there are rows of data corresponding to users in the database. A mock design is attached on the next page.
Each row contains this information:
  - Username w/ link to Github profile 
  - name
  - public_repos
  - public_gists
  - followers
  - following
  - created_at in MM/DD/YYYY format


The app does not need to worry about authentication or user-specific lists of any kind. The FireStore credentials can be hardcoded and don't need to be hidden in a .env file. Please use best practices when creating this application (such as separate out concerns/basic architecture) and provide a ReadMe markdown with explanations of your architecture decisions and other decisions you made about your app. Decisions may include use of third party libraries, a problem that came up and how you decided to solve it and/or reasons why you decided to structure your app a specific way. Unit testing will not be required for this challenge but is highly encouraged. As a baseline for bootstrapping, using the create react app with typescript is encouraged. For the parties reviewing your code, please include documentation in the ReadMe on how to get your up and running. Even if it is only a ‘npm i’ and ‘npm run start’, please make sure the scripts are correct and are documented on how to use your app. Below is a UX mock that should be followed for your build.

____________________________________
#### Plan: 
 
  - search input
  - button
    - retrieves user's url
    - updates state
      - on state update, success message & save data in state arr db
      - on error, display error message
      - display state arr of db

firebase: https://console.firebase.google.com/u/1/project/js-take-home/overview


file structure: 
  - views / Layout
  - Components / Search & List & Item & Header?Footer?
  - Services || utils / fetch-utils & helpers

      app
    |     |
search     list
              |
              item
App: 
  - holds (list state) & passes down to List Component
  - holds fetchFunction & passes down to Search Component

Search: 
  - on form submit, new username is created in Firebase (MUST UPDATE LIST VIEW)

custom hooks?
context?
constants?
---------------------------------
initalized with npx create-react-app

Libraries:

React External Link (https://github.com/acelaya/react-external-link) used in Item Component for default "rel='noopener noreferer'"