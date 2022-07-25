const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  defaultCommandTimeout: 10000,
  pageLoadTimeout : 10000,
  waitForAnimations : true,
  viewportWidth: 1000,
  viewportHeight: 600,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  },
});
