const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
  e2e: {
    baseUrl: 'http://localhost:5173',
    env: {
      apiBaseUrl: 'http://localhost:8080/api'
    }
  },
  fixturesFolder: false,
  video: false,
});
