
describe('WebElements Tests', () => {

  it('Deveria escrever Hello World', () => {
    cy.visit('https://antoniotrindade.com.br/treinoautomacao/elementsweb.html')
    cy.get('input[name=txtbox1]').type('Hello World')
  })

})