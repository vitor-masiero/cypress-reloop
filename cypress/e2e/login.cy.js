import { LOGIN_ELEMENTS, LOGIN_MESSAGES, fillLoginForm } from '../support/elements/Login.elements'

describe('Autenticação', () => {
  context('Login com sucesso', () => {
    it('Deve realizar login com credenciais válidas e ir para o Dashboard', () => {
      cy.login()
    })
  })

  context('Validações de Falha no Login', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    it('Deve mostrar mensagem de erro ao inserir email ou senha errada', () => {
      fillLoginForm(Cypress.env('email'), 'senha_errada')
      cy.get(LOGIN_ELEMENTS.errorAlert).should('contain', LOGIN_MESSAGES.invalidCredentials)
    })

    it('Deve exibir validação ao informar e-mail inválido', () => {
      fillLoginForm('email_errado', 'senha123')
      cy.get(LOGIN_ELEMENTS.emailError).should('contain', LOGIN_MESSAGES.invalidEmailFormat)
    })
  })

  context('Logout', () => {
    beforeEach(() => {
      cy.login()
    })

    it('Deve realizar logout com sucesso e ir para a página de login', () => {
      cy.logout()
      cy.get('[data-testid="nav-register-button"]').should('have.attr', 'href', '/registro');
      cy.get('[data-testid="nav-login-button"]').should('have.attr', 'href', '/login');
    })
  })
})