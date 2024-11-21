
describe('WebElements Tests', () => {

  beforeEach(() => {
    cy.visit('/elementsweb.html')
  })

  it('Deveria validar textField com texto Hello World ', () => {
    //1 - Identifica um elemento
    //2 - Interage com esse elemento
    //3 - Valida o resultado
    cy.get('input[name=txtbox1]').type('Hello World!').should('have.value', 'Hello World!')

  })

  it('Deveria validar o title do site', () => {
    cy.title().should('eq', 'WebElements Test Page Lab')

  })

  it('Deveria validar o textfield habilitado', () => {
    cy.get('input[name=txtbox1]').should('be.enabled')
    cy.get('input[name=txtbox2]').should('be.disabled')
  })

  it('Deveria validar o label', () => {  
    cy.get('form > :nth-child(1) > .text-muted').should('have.text', 'TextField:')
  })

})