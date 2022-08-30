describe('Search functionality', () => {
  it('redirect to catalog page', () => {
    cy.visit('/');
    cy.get('button[type="submit"]').contains('Найти').click();
    cy.url().should('include', '/catalog');
  })
  it('filtering', () => {
    cy.get('.MuiTypography-root').contains('Марса Алам').click();
    cy.get('cite').should('not.contain.text', 'Шарм-ель-Шейх');
    cy.get('.MuiTypography-root').contains('Марса Алам').click();
    cy.get('cite').should('contain.text', 'Шарм-ель-Шейх');
  })
})