/// <reference types = "cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    // beforeEach(() => {
    //     cy.reload()
    // })
    // it('Text', () => {
        
    //     cy.get('span').should('contain','Cuidado')
    //     cy.get('.facilAchar').should('contain','Cuidado')
    //     cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')

    //     //obs: o 'have.text' requer o texto exato
    //     //obs2: o 'contain' busca por um dos textos selecionados
        
    // })

    // it('Test with links', () => {
        
       
    //     cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    //     cy.get('[href="#"]').click()
    //     cy.get('#resultado').should('contain','Voltou!')

    //     cy.reload()
    //     cy.get('#resultado').should('contain','Nao cadastrado')
        

    // })

    // it('Text fields', () => {
    //     cy.get('#formNome').type('Ruben')
    //     cy.get('#formNome').should('have.value','Ruben')

    //     cy.get('#elementosForm\\:sugestoes')
    //         .type('Cypress test')
    //         .should('have.value','Cypress test')

    //     cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
    //         .type('??????')
    //     cy.get('[data-cy="dataSobrenome"]').type('Teste12345{backspace}{backspace}')
    //         .should('have.value','Teste123')
            

    //     cy.get('#elementosForm\\:sugestoes').clear()
    //         .type('Erro{selectall}acerto', {delay:200})

    // })

    // it('RadioButton', () => {
    //     cy.get('#formSexoFem')
    //         .click()
    //         .should('be.checked')

    //     cy.get('#formSexoMasc')
    //         .should('not.be.checked')


    // })

    // it('Checkbox', () => {
    //     cy.get('#formComidaPizza')
    //         .click()
    //         .should('be.checked')

    //     cy.get('[name="formComidaFavorita"]').click({multiple: true})
    //     cy.get('#formComidaPizza')
    //         .should('not.be.checked')
    // })

    it('Combo box', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('superior')
            .should('have.value', 'superior')

       
    cy.get('[data-test="dataEscolaridade"] option')
        .should('have.length', 8)
    cy.get('[data-test="dataEscolaridade"] option').then($arr => {  //a partir daqui trata-se com array
        const values = []  //nesta função, guarda-se todos os valores que encontrar neste array
        $arr.each(function() {     //o array que recebi a partir da function, para cada um desses elementos encontrados, vou chamar uma função
            values.push(this.innerHTML)     //innerHTML que irá retornar o primeiro valor. O values.push serve para colocar os valores dentro do array 
               
        })
        expect(values).to.include.members(["Superior", "Mestrado"])    //aqui no expect não está mais no contexto do cypress.

    })
        

    


    })
// here you can select multiples options 
beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})
    it.only('Combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['futebol', 'natacao', 'Corrida', 'Karate'])
            ///.select(['Corrida', 'Karate'])
        //cy.get('[data-testid="dataEsportes"]')
          //  .should('have.value', ['futebol', 'natacao', 'Corrida', 'Karate']) //o .should('have.value') nestas circunstâncias não funciona>>> segue

        cy.get('[data-testid=dataEsportes]').then($el => {     //isto é uma promisse
            expect($el.val()).to.be.deep.equal(['futebol', 'natacao', 'Corrida', 'Karate'])  //com os parâmetros to.be.deep.equal, a automação recupera os valores ['futebol', 'natacao', 'Corrida', 'Karate'] e faz uma assertiva em cima delas 
            expect($el.val()).to.have.length(4)

        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql', ['futebol', 'natacao', 'Corrida', 'Karate'])
    })
        
          

    })

})