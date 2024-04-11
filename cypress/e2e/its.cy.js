
// o its trabalha com as propriedades
it('its...', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    const obj = {nome: 'User', idade: 20}
    cy.wrap(obj).should('have.property', 'nome', 'User')
    cy.wrap(obj).its('nome').should('be.equal', 'User')

    const obj2= {nome: 'User', idade:20, endereco: {rua: 'dos bobos'}}
    cy.wrap(obj2).its('endereco').should('have.property', 'rua')

    cy.title().its('length').should('be.equal', 20)

    
})

it('Invoke...', () => {
    const getValue = () => 1;   //aqui foi criado uma função chamada getValue, e esta função retorna o valor 1
    cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)

})

it('Example 2', () => {
    const getNumber = () => 5;
    cy.wrap({fn: getNumber}).invoke('fn').should('be.equal', 5)
})


it.only('Exemple 3', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    const soma = (a, b) => a + b
    cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)
    cy.window().invoke('alert', 'Do you see that?')
    cy.get('#resultado')
        .invoke('html', '<input type="button" value="hackei o botão!"/>')
})
