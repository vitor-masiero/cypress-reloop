describe('template spec', () => {
  it('passes', () => {
    cy.login();
    cy.url.should('include', '/home');
  })
})