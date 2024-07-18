# NWS Connect Demo UI

## Installing the application

The first time the repo is cloned, you'll need to run an `npm install`.

The install command will download all packages contained in package.json to your local machine, and install into the current folder's node_module directory. Note this directory is also set to .gitignore to prevent packages being captured in the repository.

This assumes you have npm/node.js installed to your local machine. You can [install node](https://nodejs.org/en/download) (if you have admin rights), or add [pre-built binaries](https://nodejs.org/en/download/prebuilt-binaries) to your user profile, and configure your environment variables if needed.

## Running the Application for Development

Currently Vite (pronounced Veet) is used for quick development. To run the application in development mode, you can run the below command, or run it from your NPM Scripts section of your IDE

`npm start`

Upon start, any packages added since the last package upate should be downloaded and installed automatically. Your browser will then auto open to http://localhost:5173/

## Building the Application

@todo

## Testing the Application

The application is using vitest as a test runner.

Since the application is being developed as a react webapp, [JSDOM](https://github.com/jsdom/jsdom) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) are included as libraries to build tests from.

Tests can be run a variety of different ways:

- `npm run test` : This will run all \*.test.\* files across the application.
- `npm run test-coverage` : In addition to the full suite of tests, a 'coverage' report will be generated indicating how much of the application is covered by testing.
- `npm run test-ui` : This will open up an interactive browser based application to run tests. Tests updated while this application is open will allow for hot reloading.
- From [your IDE](https://vitest.dev/guide/ide.html), you can run tests dynamically for just a single file.

# Code Standards

## Linting Code

Code practices need to be consistent across team members. Linting is a method that enforces that consistency across a set of known standards. Any changes to linting rules need to be coordinated with the team. This will eventually be integrated into a git commit hook to enforce validation before commit can happen. Linting rules are configured in the `.eslintrc.cjs` configuration file. Linting can be run manually with the command:

`npm run lint`

## Styling Code

Code practices need to be consistent across team members. The best standard for Javascript style guides is AirBnB's known JS Style Guide. Any changes to agreed upon style need to be coordinated with the team. Reference the below links if you have a question on styling your code.

[AirBnb Javascript Style Guide](https://airbnb.io/javascript/)

[AirBnB React Specific Style Guide](https://airbnb.io/javascript/react/)

## Prettifying Code

Code style should be consistent across team members. It's important that we all agree on a code style to make changes easier for everyone. The `.prettierrc.js` file controls these settings for the team. Any changes to this file should be coordinated with the entire development team. Prettifying code should be configured in your IDE to be autoformatted on save.

## UI Styling

This application is set up with TailwindCSS as the styling mechanism, and React Aria as the components.  Note that the componentLibrary folder will eventually be moved into its own repo, and is only here for example purposes

## Code Documentation

Proper and consistent code documenting standards will allow for more readable code as well as allow for your IDE to properly insert code hints when referencing imported modules.

JSDoc3 is currently a known spec for handling Javascript based code. There is currently no formal TSDoc standard that can be easily integrated.

JSDoc can be set to autocomplete, and should auto populate by typing `/**` and hitting Enter in your IDE

[Getting Started with JSDoc3](https://jsdoc.app/about-getting-started)

## Recommended IDE Settings

### VS Code

#### Recommended settings.json Properties
```json
{
  "typescript.suggest.completeJSDocs": true,
  "typescript.suggest.jsdoc.generateReturns": true,
  "javascript.suggest.completeJSDocs": true
  "javascript.suggest.jsdoc.generateReturns": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
	"files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
  },
	"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
	"tailwindCSS.experimental.classRegex": ["([\"'`][^\"'`]*.*?[\"'`])", "[\"'`]([^\"'`]*).*?[\"'`]"]
}
```

#### Recommended Extensions

- Prettier
- IntelliCode
- Tailwind CSS Intellisense
- Tailwind Fold
- Tailwind Documentation


### IntelliJ

```
¯\_(ツ)_/¯
```
