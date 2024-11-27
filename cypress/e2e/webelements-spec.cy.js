
describe('WebElements Tests', () => {

  beforeEach(() => {
    cy.visit('/elementsweb.html')
  })

  it.only('Deveria validar textField com texto Hello World ', () => {
    //1 - Identifica um elemento
    //2 - Interage com esse elemento
    //3 - Valida o resultado
    cy.get('input[name=txtbox1]').type('Hello World!').should('have.value', 'Hello World!')

    cy.xpath('//input[@name="txtbox1"]').clear().type('Hello World!').should('have.value', 'Hello World!')

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

    cy.get('select[name=dropdownlist] option').then(($options) => {
        const list = []
        $options.each(function() {
           list.push(this.innerText)
        })

        expect(list).to.include.members(['Item 1', 'Item 2', 'Item 3', 
          'Item 4', 'Item 5', 'Item 6', 'Item 7', 
          'Item 8', 'Item 9', 'Item 10'])
    }) 
  })

  it('Deveria validar o Select Multiple', () => {

    cy.get('select[name=multiselectdropdown]').select(["Item 2", "Item 5", "Item 8"])

    cy.get('select[name=multiselectdropdown]').then($list => {
        expect($list.val()).to.have.length(3)
        expect($list.val()).to.have.members(['item2', 'item5', 'item8'])
      })
    })

    it('Utilizar do wrap', () => {
      
      cy.get('input[name=txtbox1]').then($el => {
        cy.wrap($el).type('WebElements Test Page Lab').should('have.value', 'WebElements Test Page Lab')
      })
    })
})


