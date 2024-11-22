
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

  it('Deveria validar o Radio Button', () => {
    cy.get('input[name=radioGroup1]').first().check().should('be.checked')
    cy.get('input[name=radioGroup1]').check('Radio 2').should('be.checked')

    cy.get('input[name=radioGroup1]').last().check().should('be.checked')

    cy.get('input[name=radioGroup1]').should('have.length', 4)

    cy.get('input[name=radioGroup1]').first().should('be.not.checked')  
    //TODO pesquisar como fazer a validação dos que não estão checkados.
    
  })

  it('Deveria validar o Checkbox', () => {
    cy.get('input[name=chkbox]').first().check().should('be.checked')

    cy.get('input[name=chkbox]')
      .check('Check 1')
      .should('be.checked')

    cy.get('input[name=chkbox]') 
      .check('Check 2')
      .should('be.checked')

    cy.get('input[name=chkbox]') 
      .uncheck('Check 2')
      .should('not.be.checked')

    cy.get('input[name=chkbox]').check( {multiple:true}).should('be.checked')

    cy.get('input[name=chkbox]').last().uncheck().should('not.be.checked')
  })

  it('Deveria validar o Select Single', () => {

    cy.get('select[name=dropdownlist]').select('Item 2').should('have.value', 'item2')
    cy.get('select[name=dropdownlist]').select(0).should('have.value', 'item1')

    cy.get('select[name=dropdownlist] option').first().should('have.value', 'item1')

    cy.get('select[name=dropdownlist] option').should('have.length', 10)

    //TODO pendente, validar quais os 10 itens do select com then()

  })

  it.only('Deveria validar o Select Multiple', () => {

    cy.get('select[name=multiselectdropdown]').select(["Item 2", "Item 5", "Item 8"])

    //TODO validar quais os 3 itens selecionados then()
  })



})