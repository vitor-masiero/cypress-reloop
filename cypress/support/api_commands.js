Cypress.Commands.add('loginApi', (
    email = Cypress.env('email'),
    password = Cypress.env('password')
) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/auth/login`,
        body: { email, senha: password }
    }).then((response) => {
        window.localStorage.setItem('reloop_token', response.body.token)
        window.localStorage.setItem('reloop_user', JSON.stringify({
            id: response.body.userId,
            nome: response.body.nome,
            perfil: response.body.perfil
        }))
    })
})
