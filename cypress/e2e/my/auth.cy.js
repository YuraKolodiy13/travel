describe('Auth flow', () => {

  it('login success flow', () => {
    cy.visit('/');
    cy.contains('Увійти').click();
    cy.get('input[name="email"]').type('yy@yy.yy');
    cy.get('input[name="password"]').type('111111');
    cy.get('button[type="submit"]').contains('Увійти').click();
    cy.get('a[href="/cabinet"]').click();
    cy.url().should('contain', '/cabinet')
  })

  it('login failed flow', () => {
    cy.visit('/');
    cy.contains('Увійти').click();
    cy.get('input[name="email"]').type('y@y.y');
    cy.get('input[name="password"]').type('111111');
    cy.get('button[type="submit"]').contains('Увійти').click();
    cy.get('.error').should('contain', 'EMAIL_NOT_FOUND');
    cy.get('input[name="email"]').clear().type('yy@yy.yy');
    cy.get('input[name="password"]').clear().type('1');
    cy.get('button[type="submit"]').contains('Увійти').click();
    cy.get('.error').should('contain', 'INVALID_PASSWORD');
  })
})