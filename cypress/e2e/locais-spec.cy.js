/// <reference types="cypress" />

import loc from '../support/locators'

function generateRandomNumber() {
    return Math.floor(Math.random() * 1001); // Math.random() gera números entre 0 e 1
  }

describe('Trabalhando com locais', () => {
    
    beforeEach(() => {
        cy.visit('https://center.umov.me/CenterWeb')
        cy.login('Trindade', 'aluno01', 'trocarasenha')
        cy.get(loc.MENU.LOCALS).click()
    })

    it('Cadastrar um local', () => {
        const randomNumber = generateRandomNumber();
        const nameLocal = 'Target Trust Local - ' + randomNumber

        cy.createLocal(nameLocal, 'Target Trust SA')
        cy.searchLocal(nameLocal)
        cy.get(loc.LISTLOCAL.TD_FIRSTLINE_DESCRIPTION).should('have.text', nameLocal)
    })

    describe('Considera um local criado', () => {        
        let nameLocal = ''

        beforeEach(() => {            
            nameLocal = 'Target Trust Local - ' + generateRandomNumber()

            cy.createLocal(nameLocal, 'Target Trust SA')
            cy.searchLocal(nameLocal)
        })

        it('Edita um local', () => {
            const nameLocalEdit = 'Target Trust Local Editado - ' + generateRandomNumber()

            cy.get(loc.LISTLOCAL.TD_FIRSTLINE_DESCRIPTION).should('have.text', nameLocal)
            cy.get(loc.LISTLOCAL.TD_FIRSTLINE_BTN_EDIT).click()
            cy.get(loc.ADDLOCAL.TF_DESCRIPTION).clear().type(nameLocalEdit)
            cy.get(loc.ADDLOCAL.BTN_SAVE).click()

            cy.searchLocal(nameLocalEdit)
            cy.get(loc.LISTLOCAL.TD_FIRSTLINE_DESCRIPTION).should('have.text', nameLocalEdit)

        })

        it.only('Inativa um local', () => {
            cy.get(loc.LISTLOCAL.TD_FIRSTLINE_DESCRIPTION).should('have.text', nameLocal)
            cy.get(loc.LISTLOCAL.TD_FIRSTLINE_BTN_EDIT).click()

            cy.get(loc.ADDLOCAL.CHK_ACTIVE).uncheck()
            cy.get(loc.ADDLOCAL.BTN_SAVE).click()

            cy.searchLocal(nameLocal)
            cy.get(loc.LISTLOCAL.BODY_SECTION).contains('Nothing found to display.').should('be.visible')
        })
        
    })
    

})