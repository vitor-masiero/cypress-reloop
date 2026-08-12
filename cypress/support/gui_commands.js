Cypress.Commands.add('login', (
    email = Cypress.env('email'),
    password = Cypress.env('password'),
    { cacheSession = true } = {}
) => {
    const login = () => {
        cy.visit('/login')

        cy.get('[data-testid="login-email-input"]').type(email)
        cy.get("[data-testid='login-password-input']").type(password, { log: false })
        cy.get("[data-testid='login-submit-button']").click()

        cy.location('pathname').should('eq', '/')
        cy.get('[data-testid="nav-user-menu-button"]').should('be.visible')
    }

    const validate = () => {
        cy.visit('/')
        cy.location('pathname').should('eq', '/')
        cy.get('[data-testid="nav-user-menu-button"]').should('be.visible')
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) {
        cy.session(email, login, options)
        cy.visit('/')
    } else {
        login()
    }
})

Cypress.Commands.add('fillLoginForm', (email, password) => {
    if (email) cy.get('[data-testid="login-email-input"]').clear().type(email)
    if (password) cy.get('[data-testid="login-password-input"]').clear().type(password, { log: false })
    cy.get('[data-testid="login-submit-button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-testid="nav-user-menu-button"]').click()
    cy.get('[data-testid="nav-logout-button"]').click()
    cy.location('pathname').should('eq', '/')
    cy.get('[data-testid="nav-login-button"]').should('be.visible')
})