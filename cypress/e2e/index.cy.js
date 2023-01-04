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

  it('should display the contact section', () => {
    cy.findByRole('heading', { name: 'Contact Us' }).should('exist');
    cy.findByRole('link', { name: 'Facebook Group' }).should('exist');
    cy.findByRole('link', { name: 'hello@gtalumni.la' }).should('exist');
  });

  it('should display the upcoming events', () => {
    cy.findByRole('heading', { name: 'Upcoming Events' }).should('exist');
  });
});
