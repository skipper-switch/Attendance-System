// import { defineConfig } from "cypress";

// export default defineConfig({
//   allowCypressEnv: false,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });



// cypress.config.ts
import { defineConfig } from 'cypress';
export default defineConfig({
e2e: {
baseUrl: 'http://localhost:3000',
supportFile: 'cypress/support/e2e.ts',
specPattern: 'cypress/e2e/**/*.cy.ts',
video: false, // disable for local dev, enable for CI
screenshotOnRunFailure: true,
},
});