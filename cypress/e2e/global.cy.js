describe('Global Elements', () => {
  beforeEach(() => {
    cy.visit('/404', { failOnStatusCode: false });
  });

  it('should have the site banner', () => {
    cy.findByRole('banner')
      .findByAltText('Georgia Tech Alumni Association of Los Angeles')
      .parent()
      .click();

    cy.location('pathname').should('eq', '/');
  });

  it('it should display the site navigation', () => {
    cy.findByRole('navigation').should('exist');

    cy.findByRole('link', { name: 'Events' }).click();

    cy.location('pathname').should('eq', '/events');

    cy.findByRole('link', { name: 'About' }).click();

    cy.location('pathname').should('eq', '/');
    cy.location('hash').should('eq', '#about');

    cy.findByRole('link', { name: 'Contact Us' }).click();

    cy.location('pathname').should('eq', '/');
    cy.location('hash').should('eq', '#contact');
  });

  it('should display the footer', () => {
    cy.findByRole('contentinfo').should('exist');

    cy.findByRole('link', { name: 'Facebook' }).should('exist');
    cy.findByRole('link', { name: 'Email' }).should('exist');
    cy.findByRole('link', { name: 'GitHub' }).should('exist');

    const year = new Date().getFullYear();

    cy.findByText(`© ${year} Georgia Tech Alumni Association of Los Angeles`).should('exist');

    cy.findByText('Neighbor Alumni Associations').should('exist');
    cy.findByRole('link', { name: 'Orange County' }).should('exist');
    cy.findByRole('link', { name: 'San Diego' }).should('exist');
  });
});
