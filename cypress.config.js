const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigFile(env) {
  const configFile = env || "local";
  const pathToConfigFile = path.resolve("cypress", "config", `${configFile}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    throw new Error(`Arquivo de configuração não encontrado: ${pathToConfigFile}`);
  }

  return fs.readJsonSync(pathToConfigFile);
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    env: {
      apiBaseUrl: 'http://localhost:8080/api'
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      const environmentConfig = getConfigFile(config.env.configFile);

      return {
        ...config,
        ...environmentConfig,
        env: {
          ...config.env,
          ...environmentConfig.env,
        },
      };
    },
  },
  fixturesFolder: false,
  video: false,
});

