
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

  it('Work with boolean', () => { 
    
    const bool1 = true
    expect(bool1).to.be.true
    expect(bool1).to.be.not.false

  })

  it('Work with Float', () => {
    const float1 = 10.5787

    expect(float1).to.be.equal(10.5787)
    expect(float1).to.be.closeTo(10.5, 0.1)

  })

  it('Work with Array', () => {

    const arr1 = ['Cypress', 'Automação', 'Testes']

    expect(arr1).to.be.deep.equal(['Cypress', 'Automação', 'Testes'])
    expect(arr1).to.be.have.length(3)
    expect(arr1).to.include.members(['Automação', 'Testes'])

  })

  it('Work with Object', () => {

    const obj1 = [1, 2, 3]
    const obj2 = [1, 2, 3]
    //Compara dois objetos
    expect(obj1).to.be.deep.equal(obj2)

  })


})