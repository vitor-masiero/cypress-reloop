import { LOGIN_ELEMENTS } from './elements/Login.elements'

Cypress.Commands.add('login', (
    userRole = 'designer',
    { cacheSession = true } = {}
) => {
    const users = Cypress.env('users') || {}
    const user = users[userRole] || {
        email: Cypress.env('email'),
        password: Cypress.env('password')
    }

    const { email, password } = user
    const environment = Cypress.env('environment') || 'local'

    const login = () => {
        cy.visit('/login')

        cy.get(LOGIN_ELEMENTS.emailInput).type(email)
        cy.get(LOGIN_ELEMENTS.passwordInput).type(password, { log: false })
        cy.get(LOGIN_ELEMENTS.submitButton).click()

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
        cy.session([environment, userRole, email], login, options)
        cy.visit('/')
    } else {
        login()
    }
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-testid="nav-user-menu-button"]').click()
    cy.get('[data-testid="nav-logout-button"]').click()
    cy.location('pathname').should('eq', '/')
    cy.get('[data-testid="nav-login-button"]').should('be.visible')
})