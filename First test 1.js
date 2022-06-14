describe ('Test suite 1' , function()
{
    it ('verify first test case', function()
    {
        cy.visit('www.google.com')
        cy.title().should('eq', 'Google')
        cy.get('.SDkEP')
        cy.get('.gLFyf')
        cy.get('.gLFyf')
        cy.get('www.google.com')
    })
})