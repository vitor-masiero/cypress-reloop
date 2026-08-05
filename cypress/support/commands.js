Cypress.Commands.add('login', (
    email = cy.env('email'),
    password = cy.env('password'),
    { cacheSession = true } = {}
) => {
    const login = () => {
        cy.visit('/login')

        cy.get("#email").type(email)
        cy.get("#password").type(password, { log: false })
        cy.get("button[type='submit']").click()
    }

    const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 1000 }).should('not.eq', '/login')
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) {
        cy.session(email, login, options)
    } else {
        login()
    }
})