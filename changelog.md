# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[2.0.2] - 2021-03-30](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/14a7257221ee626a9728da5c3f4155ddba7ffdcc)

### Added

- changelog.md

## [[2.0.1] - 2021-03-28](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/411c50c153d65ed4b54d3dda2266de52cadb9cc5)

### Added

- Modules:
  - eslint-watch

### Changed

- package.json:
  - To add `lint:watch` script -> To run live linter checking

## [2.0.0] - 2021-03-23

_Note: Maintainer said to have a clean canvas (start from scratch)._

### Added

- Available Example Pages:
  - Dashboard -> `/dashboard`
  - Home -> `/`
  - Todo -> `/todo`
- Dockerfile
- Jenkinsfile
- Jest config & Test cases
- NextJs 12 Create Next App Boilerplate
- Modules:
  - @testing-library/jest-dom
  - @testing-library/react
  - autoprefixer
  - axios
  - eslint
  - eslint-config-next
  - eslint-config-import
  - eslint-plugin-react
  - eslint-plugin-sonarjs
  - jest
  - next
  - next-redux-wrapper
  - postcss
  - prop-types
  - react
  - react-dom
  - react-test-renderer
  - redux
  - redux-thunk
  - sharp
  - tailwindcss
- postcss.config.js
- React Redux setup
- sonar-project.properties
- tailwind.config.js

### Changed

- .gitignore to follow suggested options from NextJs
- Move compiler from Babel to Next Compiler (Rust based)
- Move CSS framework from MUI to Tailwindcss (only for example)
- Move static files to `/public` folder in root directory
- Readjust some ESLint rules, in particular the removal of babel as a compiler impacts how linter checks code too

### Removed

- Everything from previous version

## [[1.1.7] - 2019-10-12](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/5963c0e1a2026198a3ef7ab958c1bf40d04d3154)

### Added

- jest.config.json
- Module:
  - @babel/core
  - @babel/jest
  - enzyme
  - enzyme-adapter-react-16
  - jest-cli
- Reproduce Jest test cases

### Changed

- Move ESLint rules config from package.json to its dedicated file
- Modify sets of ESLint rules
- Files:
  - .babelrc -> babel.config.js
- Module:
  - @material-ui/core to 4.5.0
  - @material-ui/icons to 4.4.3
  - @babel/core to 7.0.0-bridge.0
  - jest to 24.3.1
  - next to 9.1.1
  - react to 16.8.0
  - react-dom to 16.8.0
- Syntax changes to follow new ESLint rules

### Removed

- .babelrc

## [[1.1.6] - 2019-01-15](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/f7a8eede06f52bed54196fcfee597ab4d418d481)

### Added

- Dockerfile
- Jenkinsfile
- sonar-project.properties

## [[1.1.5.3] - 2018-11-29](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/96f5caa6b5ea5f7cf3cfb868597f5b0df1d3c76f)

### Added

- ESLint rules
- Module:
  - autoprefixer
  - eslint-loader
- next.config.js to include:
  - Built in CSS Minify config
  - eslint-loader

### Changed

- Modify README to use port 4000 instead of 3000
- Module:
  - eslint to 5.9.0
  - eslint-plugin-react to 7.11.1
- package.json:
  - Modify `start` script to use default NextJs settings

## [[1.1.5.2] - 2018-11-29](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/c87afd2b1b12e7506c553679f7e0fa85914ba8ca)

### Changed

- configureStore.js
  - Now to init `redux-thunk` for Redux middleware

## [[1.1.5.1] - 2018-11-29](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/4304e2ffd4c245826e211b51d08ad163a4380e36)

### Changed

- Modify README to include instalation, development, testing, and production instruction

## [[1.1.5] - 2018-08-25](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/1bd8b19bf006f8ba3a2b97b7185b6237ebd260bb)

### Added

- Module:
  - @babel/runtime
  - clean-css
  - fs
- Page Example: Dashboard
  - Elements
  - Components
  - Layout setup
  - Redux setup
  - Pages
  - Styles

### Changed

- Modify `_document.js` to include env setup
- Module:
  - @material-ui-icons to 2.0.3
  - react to 16.4.2
  - react-dom to 16.4.2

## [[1.1.4] - 2018-08-24](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/c743e01be91f7385ce1ccb96cf3ee682f879a8fd)

### Added

- \_app.js
- Create static image config
- Module:
  - @storybook/addon-actions
  - @storybook/addon-links
  - @storybook/addons
  - @storybook/react
  - axios
  - codemirror
  - babel-core
  - moment
  - query-string
  - react-codemirror
  - react-popper
  - react-syntax-highlighter
  - redux-form
- Page Context for Material UI SSR
- Preparing `.env` support
- server.js

### Changed

- .gitignore:
  - Remove package-lock.json from ignore list
- \_document.js
- Jest rules:
  - react/no-danger: true -> false
  - react/no-did-mount-set-state: true -> false
- Material UI setup:
  - Change how modules distributed with files and folder restructure
- Module:
  - babel-eslint to 8.2.5
  - eslint to 5.0.1
  - eslint-plugin-import to 2.13.0
  - eslint-plugin-react to 7.10.0
  - eslint-watch to 4.0.0
  - jest to 23.3.0
  - jss to 9.8.7
  - material-ui -> @material-ui/core (replacement)
  - material-ui-icons -> @material-ui/icons (replacement)
  - next to 6.1.1
  - next-redux-wrapper to 2.0.0-beta.6
  - postcss to 6.0.23
  - prop-types to 15.6.2
  - react to 16.4.1
  - react-dom to 16.4.1
  - react-jss to 8.6.0
  - react-test-renderer to 16.4.1
  - redux to 4.0.0
  - redux-thunk to 2.3.0
- package.json:
  - Add back again Next custom server
  - Add `storybook` and `build-storybook` script
  - Modify `dev`, `lint`, `lint:watch`, and `start` script

## [[1.1.3] - 2018-04-04](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/f3baa9dc53fd8bff6e402e396a8666bac96ee6d4)

### Changed

- package.json:
  - Remove Next custom server

### Removed

- server.js

## [[1.1.2.6] - 2018-04-03](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/923feeb892117986ddc5f004e3fce6d45b9c4f03)

### Added

- Todo index page, to map global state into props and serve given state

### Changed

- Change index files main purpose to link export function
- Folder structure (splitting components, elements, and pages)

## [[1.1.2.5] - 2018-03-31](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/bcebccaf576c5715deedfce6931e54b2af208e09)

### Added

- Dedicated JSS files to style components:
  - Todo
  - TodoItem

### Changed

- Move file structures (Latter files (Removed) -> New files):
  - `src/components/Todo/index.js` -> `src/pages/todo/component.js`
  - `src/pages/todo.js` -> `src/pages/todo/component.js`
  - `src/reducers/todos.js` -> `src/pages/todo/reducer.js`

## [[1.1.2.4] - 2018-03-30](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/2243f80ef681cc8c22d1ccae32f311b9df1282fc)

### Changed

- Home page files

## [[1.1.2.3] - 2018-03-30](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/5f019a1c489990c928374630b7d80383b7394021)

### Added

- NextJs custom server (server.js)

### Changed

- .gitignore list:
  - Add .next
- Move files to `/src` directory instead of `/`
- Move `assetTransformer.js` to `tools` directory
- package.json:
  - Modify commands to run `lint` command

## [[1.1.2.2] - 2018-03-30](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/fb2a95e49ce99f39ec9247b85033c51491c1d31e)

### Added

- Module:
  - eslint-watch

## [[1.1.2.1] - 2018-03-30](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/66494bd68696de6ae9ee56558bd0eae57776101d)

## Added

- assetsTransformer.js
- enzymeTestAdapterSetup.js

### Changed

- Modify Jest config to package.json, ensuring consistency to match the other codebase

### Removed

- jest.config.js
- jest.setup.js

## [[1.1.1] - 2018-03-29](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/32a0613449dbb295343972a6bcbe2b6a9032b52b)

### Added

- Modules:
  - babel-eslint
  - eslint
  - eslint-plugin-import
  - eslint-plugin-react
- ESLint config file

### Changed

- Modified to follow given ESLint rules (single quote, tabs/indent rule, etc.):
  - Components
  - Pages
  - Test cases
  - Utils

## [[1.1.0] - 2018-03-29](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/8b113b2f9bf9218fa4906275c2b347f3bcbfbfea)

### Added

- .gitignore
- Babel config
- Jest config & Test cases
- Modules:
  - cssnano
  - enzyme
  - enzyme-adapter-react-16
  - jest
  - jss
  - material-ui
  - material-ui-icons
  - next
  - next-redux-wrapper
  - postcss
  - prop-types
  - react
  - react-addons-test-utils
  - react-dom
  - react-jss
  - react-redux
  - react-test-renderer
  - redux
  - redux-thunk
- Page Examples: Todo
- React Redux setup

### Changed

- README to have installation instructions

## [[1.0.0] - 2018-03-23](https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr/-/commit/f3cb9116fe4c8c7b0377d983a8c616f05c5eabce)

### Added

- README
