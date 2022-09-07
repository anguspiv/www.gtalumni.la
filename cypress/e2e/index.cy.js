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
});
