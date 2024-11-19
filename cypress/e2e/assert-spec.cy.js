
describe('Trabalhando com asserts', () => {
  
  
  it('Work with Integer', () => {
    
    const num1 = 10

    expect(num1).to.be.greaterThan(9)
    expect(num1).to.be.equal(10)
    expect(num1).to.be.not.equal(20)
    expect(num1).to.be.lessThan(20)
    
  })

  it('Work with String', () => {
    
    const str1 = 'Automação de testes com Cypress'

    expect(str1).to.be.equal('Automação de testes com Cypress')
    expect(str1).to.be.have.length(31)
    expect(str1).to.be.contains('Cypress')

    //Expressões Regulares
    expect(str1).to.match(/Cypress$/)
    expect(str1).to.match(/^Automação/)
    expect(str1).to.match(/^\D{31}$/)

  })
})