const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    includeShadowDom: true,
    experimentalMemoryManagement: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalInteractiveRunEvents: true,
    chromeWebSecurity: false,
    video: false,
    trashAssetsBeforeRuns: true
  },
})
