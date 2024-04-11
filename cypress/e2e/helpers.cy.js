/// <reference types="cypress"/>
// o WRAP serve para que se trabalhe com alguma entidade qualquer para deixa-la gerenciável pelo cypress


describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = {nome:'User', idade: 20}
        expect(obj).to.have.property('nome')
    })

    it('Test', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonList').then(() => console.log('Encontrei o elemento'))
        
    })
    

    

})