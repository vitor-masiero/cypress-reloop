describe('Autenticação', () => {
  context('Login com sucesso', () => {
    it('Deve realizar login com credenciais válidas e ir para o Dashboard', () => {
      cy.login()
      cy.get('[data-testid=nav-user-menu-button]').should('be.visible')
    })
  })

  context('Validações de Falha no Login', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    it('Deve mostrar mensagem de erro ao inserir email ou senha errada', () => {
      cy.fillLoginForm(Cypress.env('email'), 'senha_errada')
      cy.get('[data-testid="login-error-alert"]').should('contain', 'Email ou senha incorretos')
    })

    it('Deve exibir validação ao informar e-mail inválido', () => {
      cy.fillLoginForm('email_errado', 'senha123')
      cy.get('[data-testid="login-email-error"]').should('contain', 'Por favor, insira um e-mail válido')
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