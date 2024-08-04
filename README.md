# NWS Connect Demo UI

## Installing the Application

The first time the repo is cloned, you'll need to run an `npm install`.

The install command will download all packages contained in package.json to your local machine, and install into the current folder's node_module directory. Note this directory is also set to .gitignore to prevent packages being captured in the repository. This should be the only time you'll need to run this.

This assumes you have npm/node.js installed to your local machine. You can [install node](https://nodejs.org/en/download) (if you have admin rights), or add [pre-built binaries](https://nodejs.org/en/download/prebuilt-binaries) to your user profile, and configure your environment variables if needed.

## Running the Application for Development

Currently Vite (pronounced Veet) is used for quick development. To run the application in development mode, you can run the below command, or run it from your NPM Scripts section of your IDE

`npm start`

Upon application development startup, any packages added since the last package upate should be downloaded and installed automatically. Your browser will then auto open to http://localhost:5173/

## Building the Application

@todo

## Folder Structure

Project folder structure can be quite subjective. This is a recommended starting point for the team as well as a possible organization. That being said, there are [always better ways](https://react-file-structure.surge.sh/).

| Folder               | Purpose                                                                                                                                                                      |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .husky               | Configuration information for commit hooks                                                                                                                                   |
| dist                 | The location of the latest built distribution of this application.                                                                                                           |
| node_modules         | Dynamic directory for package management. This is .gitignored.                                                                                                               |
| public               |                                                                                                                                                                              |
| src/app              | Application pieces dealing with the global application                                                                                                                       |
| src/app/routes       | Configuration on routing the browser to different pages inside the application                                                                                               |
| src/assets           | Static files that can be served up as is (.e.g images)                                                                                                                       |
| src/componentLibrary | A placeholder for the NWS Connect Atmosphere Design System                                                                                                                   |
| src/components       | Molocule or smaller level components that are not included in the component library and are shared across features                                                           |
| src/features         | Full featured pieces of the applications built from components. This folder should be substructed out with feature specific pieces (components, api, hooks, utils, etc )     |
| src/mocks            | Tooling to allow mocking of API or other data that may not be available during early development                                                                             |
| src/types            | A container to include type information for broadly shared objects. Type information for specific components that are not needed elsewhere should be kept with the component |
| src/utilities        | Shared utility functions that would be leveraged throughout the application                                                                                                  |
| tests                | End to End tests for the entire application - Tests for individual features or components should be colocated with them                                                      |

## UI Styling

This application is set up with TailwindCSS as the styling solution. Tailwind is a utility approach to CSS, and is one the most popular libraries for styling. NWS Connect will also be using its own custom component library using React Aria as its headless components. Atomic components included in the application, should be developed in the Atmophere Design System, and imported into this application. Note that the componentLibrary folder currently available here will eventually be moved into its own repo, installed separately into various applications using npm install, and is only here for example purposes.

It is recommended to install certain Tailwind extensions to aid in styling (See Recommended IDE Settings )

## Specific Tools

While the tools used in various applications will grow and diverge differently, the following tools are included here as recommendations to use for their specific use case

### Client State - Zustand vs React Context vs Prop Drilling

Maintaining proper state is an important piece of React. When state of a component changes, all children components may be impacted (ignoring useMemo here). While most data flow in React should be done through props, maintaining that state across multiple levels of heiarchy can be challenging.

**Prop Drilling** Prop drilling is the method for moving props up and down the compoent tree. However drilling more than a couple of levels may get quite challenging to keep track of.

**Zustand** This is where tools such as Zustand will help. Zustand helps maintain state across components in different part of your application that may be in vastly different places. It is most useful when those components change routinely.

**React Context** This can also be helpful for maintaining client state. It is recommended to only be used for broad global states that do not or rarely change. Things like an office ID or perhaps a color scheme would be helpful to be defined/stored in React Context.

### React Router

Browser navigation in React is handled by a "Router". A Router's role is to handle navigation in an application directly instead of fully ceding that control to the browser itself. This allows things like Single Page Apps (SPAs) to have different URLs shown in the browser address bar even if the user never leaves the application. This application uses "React Router" as its Router of choice. This router is also connected to React-Aria so that linking in the components is properly handled in an accessible way.

### Mock Service Worker

Currently the application is set up to use a mock service to allow developers to test out API configurations before they're available to be served up in development. This may need to be removed in the future, and is truly here to show how / why it could be done (to speed up development)

## Testing the Application

The application is using Playwright as a test runner. Playwright can run unit, integration, and end-to-end tests. Testing strategies for different tests, browsers, devices, etc can be configured int he `playwrite.config.ts` file. If this is the first time using playwright, you may need to run the `npx playwright install` command to download additional playwright tools.

Tests can be run a variety of different ways:

- `npm run test` : This will run all \*.test.\* files across the application.
- `npm run test-coverage` : `@todo` In addition to the full suite of tests, a 'coverage' report will be generated indicating how much of the application is covered by testing. These reports are then processed by `@todo`
- `npm run test-ui` : This will open up an interactive browser based application to run tests. Tests updated while this application is open will allow for hot reloading.
- Directly from the IDE. The playwright plugin for VSCode allow you to click the yellow arrow next to a test to run tests dynamically for just a single file, single test, or group of tests.

### Writing Tests

Unit tests files for individual components should be included directly in the same directory as the component itself. These files will be ignored by the bundler if they match the following naming convention: `MyReactComponent.test.ts`. Keeping components bundled with the test files ensures that test files can be easily found and referenced during refactor work.

End-to-end tests should be captured in the `/tests` directory. This allows them to be run separately if desired.

# Code Standards

Code standards are enforced using a variety of different tools. Information on each of these tools are explained below. Pre-commit hooks that ensure that these tools are run are configured by Husky.

## Typescript

Javascript can be written quite easily, however because of it's ability to dynamically define variables, its up to the developers to keep track of what a variable's type is. Typescript is a superset of the Javascript language. Typescript adds the ability to define variable types during creation as well as add support for extending classes with Interfaces. Typescript's requirement to define types allows the IDE to alert developers on when a variable is incorrectly translated, and find possible errors immediately during the development process. Note that type information is not included in the application build

### Where & How to Define Types

Typescript types should be captured as much as possible with the component or class they represent. This allows finding of the type information easier during the development process. However for types that may need to be imported in mupltiple places across the application should be caputred in the /types folder as a `TypeName.ts`. Always define types using the `type` keyword.

```ts
type Person = {
  id: integer; // Integer
  emails: string[]; // Array of strings
  lastName: string | null; // Can be either a string or null
};

// Extend types to build on other types
type Partner = Person & {
  partnerId: string;
};
```

## Linting Code

Code practices need to be consistent across team members. Linting is a automated process that enforces that consistency across a set of team defined standards. Any changes to linting rules need to be coordinated with the team. Linting rules should not hinder the developer experience, but are designed to catch code smells early during the process. Linting rules are configured in eslint.config.js

Linting can be run manually using the `npx elsint` command or using the `lint` command in your IDE. In addition, the IDE should highlight linting issues it recognizes as you code. Many linting checks can be automatically fixed by the linter directly by running it as `npx eslint --fix`, or by choosing the `lint:fix` command in your IDE.

Some IDEs like VS Code also have extensions for ESLint (see Recommended IDE Settings below)

### Pre-commit hooks

Linting is automatically run with the fix flag on any staged files during a commit. Code should not be commited to the repository if it does not pass linting checks, and this check ensures that happens.

## Styling Code

### Recommended Practices

Code styles need to be consistent across team members. One of the higher standards for Javascript style guides is AirBnB's JS Style Guide. If there are questions about how to style, name, capitalize, etc, it is recomended to look towards this style guide. In order to not be too overly restrictive on developers early on, AirBnB's lint rules were not applied. However, our team may want to add individual ones in over time if inconsistencies are noticed.

Reference the below links if you have questions on how best to style your code.

[AirBnb Javascript Style Guide](https://airbnb.io/javascript/)

[AirBnB React Specific Style Guide](https://airbnb.io/javascript/react/)

### Formatting Code

Tabs or spaces?!? There will always be disagreements on how best to format code. Tastes are individualized. However, it's important to keep a consistent format between developers. Prettier is one of the most popular code formatters in use today, and is strongly opinionated (for good reason). Prettifier will automatically format your code on save. Prettier is also run during a pre-commit hook. The `.prettier.config.js` file controls any prettier overrides settings for the team. Any changes to this file should be coordinated with the entire development team. The .prettierignore file can be configured with files or file types that prettier should ignore.

Prettifying code works best when it is configured in your IDE to be autoformatted on save, however you may prefer to disable this if you only wan the reformatting to be done on commit. Some IDEs like VS Code also have extensions for Prettier (see Recommended IDE Settings below)

## Code Documentation

Proper and consistent code documenting standards will allow for more readable code as well as allow for your IDE to properly insert code hints when referencing imported modules. The most well known JS documentation spec is JSDoc3. TSDoc (the typescript version of JSDoc) is still in its infancy. Because of typescript's typing capability, the need to fully document every property isn't fully needed, however it's still important to use the JSDoc spec to document classes and methods in order for developers to easily see the documentation using intellisense. Defining the @param variable type isn't needed when developing in typescript as the IDE will relay that to the developer using intellisense

JSDoc can be set to autocomplete, and should auto populate by typing `/**` and hitting Enter in your IDE.

_Example_

```ts
/**
 * Filters an array based on a property and the value of that property
 *
 * @param myArray - The array that will be filtered
 * @param myProp - The property that will be filtered against
 * @param myValue - The value that the property will be filtered against
 * @returns a filtered subset of the original array
 */
function filterOnPropertyValue(myArray: { myProp: string }[], myProp: string, myValue: string) {
  let filteredArray = myArray.filter((arrItem) => {
    if (myArray?.myProp === myString) {
      return arrItem;
    }
  });
  return filteredArray;
}
```

More information on JSDoc can be found here: [Getting Started with JSDoc3](https://jsdoc.app/about-getting-started)

## Recommended IDE Settings

### Visual Studio (VS) Code

This IDE is one that can be installed on your local machine without having full administrative rights. Visit the [Setup Page](https://code.visualstudio.com/docs/setup/windows) for install instructions .

#### Recommended settings.json Properties

These recommended settings are captured in the `.vscode/settings.json` part of this repository. These setting are specific to this project, and should override any local preferences you have set from a User level.

#### Recommended Extensions

VS Code allows developers to share recommeneded extensions. You can find this by opening up the extensions pane on the left hand side of your IDE, and expanding the Recommended Workspace option. Recommended team plugins are included in this repo via the included `.vscode/extensions.json` file, they're also included below

- Prettier
- ESLint
- Docker
- IntelliCode
- Tailwind CSS Intellisense
- Tailwind Fold
- Tailwind Documentation
- Playwright Test for VSCode
- Gitlab Workflow

### IntelliJ

Need someone to help build this out

```
¯\_(ツ)_/¯
```
