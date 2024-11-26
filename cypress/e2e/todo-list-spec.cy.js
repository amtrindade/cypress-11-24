
describe('Teste de todo list', () => {

    const task = 'Wash the dishes'

    beforeEach(() => { 
        cy.visit('https://example.cypress.io/todo#/')
    })

    it('Adicionar tarefa', () => {
        cy.get('[data-test="new-todo"]').type(`${task}{enter}`)

        cy.get('.todo-list').contains(`${task}`).should('be.visible')

        cy.get('.todo-list li').should('have.length', 3)
    })

    describe('Testes que consideram o setup tarefa adicionada', () => {
    
        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${task}{enter}`)
        })

        it('Marcar tarefa como concluida', () => {
           
            cy.get('.todo-list li').contains(`${task}`).parent().find('input').check()
            cy.get('.filters').contains('Completed').click()
            
            cy.get('.todo-list').contains(`${task}`).should('be.visible')
            cy.get('.todo-list li').should('have.length', 1)
        })

        it.only('Remover nova tarefa adcionada', () => {
            cy.get('.todo-list li').contains(`${task}`).parent().find('input').check()

            // 1 - Usando o trigger para simular o click do mouse
            // cy.get('.todo-list li')
            //     .contains(`${task}`)
            //     .parent().find('button')
            //     .trigger('mouseover').click()

            //2 - Usando o invoke para simular o click do mouse
            cy.get('.todo-list li')
                .contains(`${task}`)
                .parent().find('button')                
                .invoke('show')
                .click()
            
            // 3 - Usando o force para simular o click do mouse
            // cy.get('.todo-list li')
            //     .contains(`${task}`)
            //     .parent().find('button')
            //     .click( {force: true} )
            
            cy.get('.todo-list li')
                .should('have.length', 2)
                .should('not.contain', `${task}`)
            
        })

    })

})