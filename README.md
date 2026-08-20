# Cypress Reloop — E2E Automation Suite

End-to-end testing framework for **Reloop**, a SaaS platform for industrial waste management. Built with **Cypress**, featuring **Page Object Model**, custom commands, multi-environment config, API mocking, accessibility testing, and SAST integration.

---

## Architecture

```
cypress-reloop/
├── cypress/
│   ├── config/                  # Environment-specific configs (local.json, reloop.json)
│   ├── e2e/                     # Test specs (login, auth validation, etc.)
│   ├── support/
│   │   ├── elements/            # Page Object element maps
│   │   ├── gui_commands.js      # GUI custom commands (login, logout, session)
│   │   └── api_commands.js      # API custom commands (bypass UI auth)
│   └── e2e.js                   # Support file — plugins & command imports
├── cypress.config.js            # Main config with multi-env support
├── eslint.config.js             # Linting (ESLint + eslint-plugin-cypress)
└── .semgrepignore               # SAST exclusion rules
```

---

## Features

- **Multi-environment config**: Switch between `local` and `reloop` via `--env configFile=<name>`
- **Page Object Model**: Element maps in `cypress/support/elements/` for maintainable selectors
- **Session caching**: `cy.session()` to avoid re-login across specs
- **Custom commands**: `cy.login()`, `cy.logout()`, `cy.loginApi()` (API bypass)
- **Accessibility testing**: `cypress-axe` for WCAG compliance checks
- **API mocking**: `cypress-plugin-api` for intercepting and validating API calls
- **Visual assertions**: `cypress-real-events` for native browser event simulation
- **Mochawesome reports**: Rich HTML reports with embedded screenshots
- **SAST**: Semgrep integration via `npm run sast`
- **Linting**: ESLint with `eslint-plugin-cypress`

---

## Tech Stack

| Tool | Purpose |
|:---|:---|
| `Cypress` | E2E test runner |
| `@testing-library/cypress` | DOM query best practices |
| `cypress-axe` | Accessibility (a11y) audit |
| `cypress-real-events` | Native browser events |
| `cypress-plugin-api` | API testing & mocking |
| `cypress-mochawesome-reporter` | HTML test reports |
| `ESLint` | Code quality |
| `Semgrep` | Static analysis (SAST) |

---

## Getting Started

```bash
git clone https://github.com/vitor-masiero/cypress-reloop.git
cd cypress-reloop
npm install
```

### Environment Setup

```bash
cp cypress.env.example.json cypress.env.json
```

Edit `cypress.env.json` with valid credentials:

```json
{
  "users": {
    "designer": {
      "email": "user@reloop.eco.br",
      "password": "user123",
      "nome": "Clara"
    },
    "industria": {
      "email": "admin@reloop.eco.br",
      "password": "admin123",
      "nome": "Indústria"
    }
  }
}
```

---

## Running Tests

```bash
# Open Cypress UI
npm run cy:open:local          # Local environment
npm run cy:open:reloop         # Staging environment

# Headless
npm run cy:run:local           # Local environment
npm run cy:run:reloop          # Staging environment

# Browser options
npm run cy:run:chrome          # Chrome-specific
npm run cy:run:headless        # Headless mode
```

---

## Custom Commands

| Command | Description |
|:---|:---|
| `cy.login(role)` | GUI login with session caching. Accepts `'designer'` or `'industria'` |
| `cy.logout()` | Clear session and navigate to login |
| `cy.loginApi(email, pass)` | API-only auth bypass — sets `localStorage` token directly |

---

## Adding New Tests

1. Create spec in `cypress/e2e/`
2. Use element maps from `cypress/support/elements/` for selectors
3. Use custom commands (`cy.login()`, etc.) to avoid boilerplate
4. Run `npm run lint` before commit

---

## Scripts

| Script | Description |
|:---|:---|
| `npm run cy:open` | Open Cypress UI |
| `npm run cy:run` | Run all specs headless |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | ESLint auto-fix |
| `npm run sast` | Semgrep static analysis |

---

## License

ISC
