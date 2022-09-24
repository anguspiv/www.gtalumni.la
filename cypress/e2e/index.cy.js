describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the site banner', () => {
    cy.findByRole('banner')
      .findByAltText('Georgia Tech Alumni Association of Los Angeles')
      .parent()
      .click();

    cy.location('pathname').should('eq', '/');
  });

  it('should display the about section', () => {
    cy.findByRole('heading', { name: 'About Us' }).should('exist');

    cy.findAllByRole('link', { name: 'Facebook group' }).first().should('exist');
  });
});
