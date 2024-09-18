
  it('Login test', () => {
    cy.visit('https://kavyabhishek.github.io/Bankist/')
    cy.get('.login__input--user').type('rg')
    cy.get('.login__input--pin').type('1111')
    cy.get('.login__btn').click()
  })
  
