# My Portfolio

A React single-page application for my personal portfolio, deployed at
[brunomsilvaf.github.io/portfolio](https://brunomsilvaf.github.io/portfolio).

## Tech stack

- **React 19** with **React Router** (hash routing for GitHub Pages)
- **Vite** for the dev server and production builds
- **MUI** (Material UI) + **styled-components** for UI and theming
- **i18next** / **react-i18next** for internationalisation (English & Portuguese)
- Light/dark colour mode with system-preference detection

## Local development & build

Requires Node.js and npm. Install dependencies once with `npm install`.

### `npm run dev`

Runs the app in development mode with hot module replacement.
Open [http://localhost:3000/portfolio/](http://localhost:3000/portfolio/) to view it.

### `npm run build`

Builds the app for production into the `build/` folder (minified, hashed
filenames, vendor chunks split for caching).

### `npm run preview`

Serves the production build locally to verify it before deploying.

### `npm run deploy`

Runs `npm run build` and publishes the `build/` folder to GitHub Pages via
`gh-pages`.

## Project structure

```
portfolio
│   index.html            entry HTML (SEO + Open Graph tags)
│   vite.config.js        Vite config (base path, dev server, chunking)
│   package.json
│
└───public                static assets served as-is (favicon, manifest, og-image)
│
└───src
    │   index.jsx         app bootstrap + HashRouter
    │   App.jsx           routes, layout, scroll handling
    │
    └───assets            flags, images, company logos
    └───components
    │   └───common        shared UI (Reveal on-scroll animation)
    │   └───header        top navigation, language & theme switches
    │   └───home          page sections (work, education, skills, projects, hobbies)
    │   └───footer        contact section
    └───data              static data (nav items, social links)
    └───hooks             custom hooks (useActiveSection)
    └───i18n              i18next setup + locale JSON files
    └───theme             design tokens, MUI theme, global styles, colour mode
```
