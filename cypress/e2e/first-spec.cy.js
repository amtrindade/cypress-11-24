
describe('WebElements Tests', () => {

  it('Deveria validar textField com texto Hello World ', () => {

    cy.visit('https://antoniotrindade.com.br/treinoautomacao/elementsweb.html')

    //1 - Identifica um elemento
    //2 - Interage com esse elemento
    //3 - Valida o resultado
    cy.get('input[name=txtbox1]').type("Hello World!").should('have.value', 'Hello World!')

  })

})