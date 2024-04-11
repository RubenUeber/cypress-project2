/// <reference types = "cypress" />

describe('Work with alerts', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    // beforeEach(() => { 
    //     cy.reload()
    // })

    // it('Alert', () => {
    //     cy.get('#alert').click()
    //     cy.on('window:alert', alert => {
    //         console.log('alert')
    //         expect(alert).to.be.equal('Alert Simples')  //serve para verificar o popup que aparece na página
    //     })

    // it('Alert', () => {
    //     const stub = cy.stub().as('Alert')  //criar um objeto stub. O stub substitui uma função, armazena o uso e permite o controle do seu comportamento.
    //     cy.on('window:alert', stub)
    //     cy.get('#alert').click().then(() => {
    //         expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
    //     })

    // it('Confirm', () => {
    //     cy.get('#confirm').click()
    //     cy.on('window:confirm', msg => {
    //         console.log('Confirmar')
    //         expect(msg).to.be.equal('Confirm Simples')
    //     cy.on('window:alert', msg => {
    //         console.log('Confirmado')
    //         expect(msg).to.be.equal('Confirmado')
    //     })

    //  it('Deny', () => {
    //     cy.on('window:confirm', msg => {
    //         expect(msg).to.be.equal('Confirm Simples')
    //         return false
    //     cy.on('window:alert', msg => {
    //         console.log('Confirmado')
    //         expect(msg).to.be.equal('Confirmado')

    //     })      

        
    it.only('Prompt', () => { //criando um mock do método prompt do window, para sobrescrever o comportamento do prompt e testar
        cy.window().then(win => {
            cy.stub(win, 'prompt').as('stub').returns('42') //o stub cria um método muito parecido com o real, porém esse método é genérico. 

        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')

        // cy.on('windows:alert', msg => {
        //     expect(msg).to.be.equal(':D')
        // })
                
        cy.get('#prompt').click()
        

     })
    })
})
