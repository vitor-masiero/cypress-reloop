export const LOGIN_ELEMENTS = {
    emailInput: '[data-testid="login-email-input"]',
    passwordInput: '[data-testid="login-password-input"]',
    submitButton: '[data-testid="login-submit-button"]',
    errorAlert: '[data-testid="login-error-alert"]',
    emailError: '[data-testid="login-email-error"]',
}

export const LOGIN_MESSAGES = {
    invalidCredentials: 'Email ou senha incorretos',
    invalidEmailFormat: 'Por favor, insira um e-mail válido',
}

export function fillLoginForm(email, password) {
    if (email) {
        cy.get(LOGIN_ELEMENTS.emailInput).clear()
        cy.get(LOGIN_ELEMENTS.emailInput).type(email)
    }
    if (password) {
        cy.get(LOGIN_ELEMENTS.passwordInput).clear()
        cy.get(LOGIN_ELEMENTS.passwordInput).type(password, { log: false })
    }
    cy.get(LOGIN_ELEMENTS.submitButton).click()
}
