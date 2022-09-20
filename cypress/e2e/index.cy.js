describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have cool styles', () => {
    cy.findByText('Cool Styles').should('exist');
  });

  it('should have a hover display', () => {
    cy.findByText(':hover').should('exist');
  });

  it("should have a let's bounce display", () => {
    cy.findByText("Let's bounce.").should('exist');
  });

  it('should have the site banner', () => {
    cy.findByRole('banner')
      .findByAltText('Georgia Tech Alumni Association of Los Angeles')
      .parent()
      .click();

    cy.location('pathname').should('eq', '/');
  });
});
