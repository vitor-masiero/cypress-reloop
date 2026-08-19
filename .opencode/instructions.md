# OpenCode Instructions - Cypress Reloop

- Consult Context7 MCP server for latest Cypress documentation and best practices.
- Follow element mapping structure under `cypress/support/elements/`.
- Ensure all new tests adhere to Cypress best practices: no fixed waits, use Testing Library / data-testid attributes, use cy.session for state reuse.
- Validate code changes with `npm run lint` and SAST scan with `npm run sast`.
