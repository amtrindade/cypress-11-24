
describe('Teste de todo list', () => {

    beforeEach(() => { 
        cy.visit('https://example.cypress.io/todo#/')
    })

    it('Adicionar tarefa', () => {
        cy.get('[data-test="new-todo"]').type('Lavar a louça{enter}')

        cy.get('.todo-list').contains('Lavar a louça').should('be.visible')

        cy.get('.todo-list li').should('have.length', 3)
    })

    it.only('Marcar tarefa como concluida', () => {

        cy.get('[data-test="new-todo"]').type('Lavar a louça{enter}')
        cy.get('.todo-list li').contains('Lavar a louça').parent().find('input').check()
        cy.get('.filters').contains('Completed').click()
        
        cy.get('.todo-list').contains('Lavar a louça').should('be.visible')
        cy.get('.todo-list li').should('have.length', 1)
    })

})