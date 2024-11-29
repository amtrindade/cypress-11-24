const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://antoniotrindade.com.br/treinoautomacao',
    screenshotOnRunFailure: true,
    video: false,
    //defaultCommandTimeout: 1000,
    // viewportWidth: 480,
    // viewportHeight: 1000,
  },
});
