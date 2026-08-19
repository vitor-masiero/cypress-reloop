# Directives for OpenCode AI Agents - Cypress Reloop

## Architecture & Conventions
- Element selectors: Keep in `cypress/support/elements/<Feature>.elements.js`.
- Prefer `data-testid` attributes or Testing Library queries (`cy.findByRole`, `cy.findByLabelText`).
- Custom Commands: Place GUI commands in `cypress/support/gui_commands.js` and API commands in `cypress/support/api_commands.js`.
- Always use `cy.session()` for login caching.

## Best Practices
- **NO `cy.wait(<number>)`**: Never use fixed delays. Use `cy.intercept()` aliases or assertion retryability instead.
- **NO `cy.pause()`**: Keep tests clean for CI execution.
- Use `cypress-plugin-api` (`cy.api()`) for API interactions to render visual feedback.
- Use `cypress-axe` for accessibility testing (`cy.injectAxe()` and `cy.checkA11y()`).
