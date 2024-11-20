
describe('WebElements Tests', () => {

  it('Deveria validar textField com texto Hello World ', () => {

    cy.visit('https://antoniotrindade.com.br/treinoautomacao/elementsweb.html')

    //1 - Identifica um elemento
    //2 - Interage com esse elemento
    //3 - Valida o resultado
    cy.get('input[name=txtbox1]').type("Hello World!").should('have.value', 'Hello World!')

  })

  it('Deveria validar o title do site', () => {
    cy.visit('https://antoniotrindade.com.br/treinoautomacao/elementsweb.html')
    cy.title().should('eq', 'WebElements Test Page Lab')

  })

  it('Deveria validar o textfield habilitado', () => {
    cy.visit('https://antoniotrindade.com.br/treinoautomacao/elementsweb.html')

    cy.get('input[name=txtbox1]').should('be.enabled')
    cy.get('input[name=txtbox2]').should('be.disabled')
  })

})