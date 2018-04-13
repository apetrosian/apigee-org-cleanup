# Apigee Org Cleanup

## Usage

Install dependencies

```bash
npm install
```

Create apigee config file.

```bash
touch apigee.config.js
```

Open and edit `apigee.config.js` file then add following code and replace string values with your your apigee configuration.

```javascript
var config = {
  org: 'your-org-name',
  user: 'your@user.name',
  password: 'YourPassword'
}

module.exports = config;

```

Start local web server

```bash
npm start
```

Open a web browser and navigate to `http://localhost:3000/`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
