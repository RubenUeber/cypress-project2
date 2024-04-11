/// <reference types = "cypress" />
describe('Esperas...', () => {
    
        
    
    it('Access the page', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').type('Funciona!')
        cy.get('#novoCampo').should('exist')

    })


     it('Using find', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonDelay').click()
        // cy.wait(5000)
        cy.get('#novoCampo', {timeout: 30000}).should('exist')
    })

    it('Click retry', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
        
    })

    it.only('Should vs Then', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonList').click()
        cy.get('#lista li').should($el => {     //should fica atrelado com o get e faz retentativas de busca de elemento. Then tem flexibilidade e não faz retentativas. 
            expect($el).to.have.length(1)
            //console.log($el)
            return 1

        }).and('not.have.id', 'buttonList')
            

    

})

// beforeEach(() => {
//     cy.reload()
// })

// it('Deve aguardar elemento estar disponível', () => {
//     
})
