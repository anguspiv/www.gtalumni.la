describe('Error Page', () => {
  beforeEach(() => {
    cy.visit('/error', {
      failOnStatusCode: false,
    });
  });

  it('should have the site banner', () => {
    cy.findByRole('banner')
      .findByAltText('Georgia Tech Alumni Association of Los Angeles')
      .parent()
      .click();

    cy.location('pathname').should('eq', '/');
  });

  it('should display the site meta', () => {
    cy.title().should('eq', 'Georgia Tech Alumni Association of Los Angeles');
    cy.get('meta[name="description"]').should('have.attr', 'content');
    cy.get('meta[name="keywords"]').should(
      'have.attr',
      'content',
      'Georgia Tech,Georiga Institute of Technology,Alumni,Alumni Association,Georgia Tech Alumni Association,Yellow Jackets,George P. Burdell',
    );
    cy.get('meta[property="og:title"]').should(
      'have.attr',
      'content',
      'Georgia Tech Alumni Association of Los Angeles',
    );
    cy.get('meta[property="og:description"]').should('have.attr', 'content');
  });

  it('should display the error information', () => {
    cy.findByRole('heading', { name: '404' }).should('exist');
    cy.findByRole('heading', { name: 'Page Not Found' }).should('exist');
  });
});
