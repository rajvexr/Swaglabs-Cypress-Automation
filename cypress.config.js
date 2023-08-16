const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: 'cypress/integration/e2e/*js',
    screenshotsFolder: 'cypress/failure/screenshots',
    baseUrl: 'https://www.saucedemo.com/',
    
    
  },
});
