// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('login', (workspace, username, password) => {
    cy.get(loc.LOGIN.WORKSPACE).type(workspace)
    cy.get(loc.LOGIN.USERNAME).type(username)
    cy.get(loc.LOGIN.PASSOWRD).type(password)

    cy.get(loc.LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('createLocal', (description, corporateName) => {
    cy.get(loc.LISTLOCAL.BTN_INSERT).click()
       
    cy.get(loc.ADDLOCAL.TF_DESCRIPTION).type(description)
    cy.get(loc.ADDLOCAL.TF_CORPORTE_NAME).type(corporateName)

    cy.get(loc.ADDLOCAL.BTN_SAVE).click()
})

Cypress.Commands.add('searchLocal', (description) => {
    cy.get(loc.LISTLOCAL.TF_SEARCH).type(description)
    cy.get(loc.LISTLOCAL.BTN_SEARCH).click()
})