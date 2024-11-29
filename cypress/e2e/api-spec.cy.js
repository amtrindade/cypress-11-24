describe('Tests API Star Wars', () => {
    
    it('Get People Star Wars', () => {
    
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/'
        
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.count).to.eq(82)
            expect(response.body.results[0].name).to.eq('Luke Skywalker')
            expect(response.body.results[1].name).to.eq('C-3PO')
        })
        
    })

    it('Get People Luke Skywalker', () => {
    
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/1'
        
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Luke Skywalker')
            
        })
        
    })

})