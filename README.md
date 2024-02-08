# My Portfolio

This project is a React Single Page Application that contains my personal portfolio, located at [brunomsilvaf.github.io](https://brunomsilvaf.github.io/portfolio).

<br/>

## Local development & Build

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses npm to manage dependencies. Run `npm install` to set up your local environment or fetch new dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds the app for production (via `npm run build`) and deploys to GitHub Pages.

<br/>

## Project structure

```
portfolio
│   README.md
|   package.json
|   ...
|
└───public
│   │   favicon.ico
│   │   index.html
|
└───src
│   │   index.js
│   │   App.js
|   |
│   └───assets
│   |     └───flags
│   |     └───images
│   |     └───logos
|   |
│   └───components
|   |     └───header
|   |     └───home
|   |
│   └───data (helper data objects)
|   |
│   └───i18n (internacionalization)
|   |     |
|   |     │   ...
|   |     └───locales
|   |
│   └───theme (global styling)
```

### Styling using styled-components

- This project uses styled-components for simple and reusable component customization.
