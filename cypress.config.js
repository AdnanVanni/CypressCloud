const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'Sample', // Replace with your Cypress Cloud projectId
  e2e: {
    baseUrl: 'https://www.google.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
});
