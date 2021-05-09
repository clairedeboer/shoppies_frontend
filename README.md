# Shoppies Frontend

This application was built in React and allows users to search OMDB's API and nominate movies. I created a Rails backend [Rails backend](https://github.com/clairedeboer/shoppies_backend) that allows a user to save their nominations list if they leave the page. I used Semantic UI for styling. 

Shoppies is deployed via Netlify at: 

https://zen-bell-153a5b.netlify.app/

The component tree is outlined below

![React component tree hierarchy](/public/component_tree.png "React Hierarchy")

## Prerequisites

Before you continue, make sure you have met the following requirements: 

* You have installed the latest version of React

## Developing Shoppies Locally

To install Shoppies, follow these steps: 

Linux and macOS: 
```
yarn install
yarn start
```

## Deployment

This app uses Continuous Delivery to deploy to Netlify on every commit to the main branch

## Using Shoppies

To use Shoppies, follow these steps: 

* Search movies by title
* Nominate up to 5 movies
* Remove movies from your nominations list

## Contact

If you want to contact me, you can reach me at claire.deboer@gmail.com


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\