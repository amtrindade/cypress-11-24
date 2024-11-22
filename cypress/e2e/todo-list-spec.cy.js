
describe('Teste de todo list', () => {

    before(() => { 
        cy.visit('https://example.cypress.io/todo#/')
    })

    it('Adicionar tarefa', () => {
        cy.get('[data-test="new-todo"]').type('Lavar a louça{enter}')

        cy.get('.todo-list').contains('Lavar a louça').should('be.visible')

        cy.get('.todo-list li').should('have.length', 3)
    })

})