describe("Validação de Autenticação", () => {
    context("Ao tentar acessar rotas restritas pela página inicial sem autenticação", () => {
        beforeEach(() => {
            cy.visit('/')
        })
        
        const rotasRestritas = [
            { nome: 'Link Buscar Materiais', selector: '[data-testid="nav-link-buscar"]' },
            { nome: 'Link Cadastrar Resíduos', selector: '[data-testid="nav-link-cadastrar"]' },
            { nome: 'Botão Buscar Materiais', selector: '[data-testid="hero-btn-buscar"]' },
            { nome: 'Botão Cadastrar Resíduos', selector: '[data-testid="hero-btn-cadastrar"]'}
        ]

        rotasRestritas.forEach(({ nome, selector }) => {
            it(`Deve redirecionar à tela de login ao clicar em "${nome}"`, () => {
                cy.get(selector).should('exist').click()
                cy.url().should('include', '/login')
            })
        })
    })
})