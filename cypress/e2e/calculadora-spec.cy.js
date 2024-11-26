/// <reference types="cypress" />

const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

describe('Testes relacionados a calculadora', () => {

    beforeEach(() => {
        cy.visit('/desafiosoma.html')
        cy.viewport('ipad-mini')
    })

    sizes.forEach((size) => {
        it('Realiza a soma de dois valores', () => {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }

            cy.get('#number1').type(10)
            cy.get('#number2').type(8)
            cy.get('#somar').click()
            
            //cy.wait(2000)

            cy.get('#total', {timeout: 4000}).should('have.value', 18)
            //cy.get('#total').should('have.value', 18)

        })
    })

})