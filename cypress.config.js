const { defineConfig } = require("Cypress");
const fs = require('fs-extra');
const path = require('path');


function getConfigurationByFile(file, projectRoot) {
  const configPath = path.join(
    projectRoot,
    'cypress',
    'config',
    `${file}.json`
  );

  if (!fs.existsSync(configPath)) {
    console.log('No custom config found.');
    return {};
  }

  return fs.readJsonSync(configPath);
}

module.exports = defineConfig({
  // video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
   
      const envName = config.env.configFile || 'dev';
      const projectRoot = config.projectRoot;

      const customConfig = getConfigurationByFile(envName, projectRoot);

      return { ...config, ...customConfig };
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,   //10 sec
    pageLoadTimeout: 120000, //wait for 2 min for the URL to be loaded, otherwise it will fail after 2 min -  applicable for cy.visit() command
    screenshotOnRunFailure: true,     //Whether Cypress will take a screenshot when a test fails during cypress run
    trashAssetsBeforeRuns: true,      // clear the previous screenshots, before test run with cypress run
    //viewportWidth: 1080,
    //viewportHeight: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries: {
      runMode: 1,
      openMode: 1
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com/"
    }

  },
});
