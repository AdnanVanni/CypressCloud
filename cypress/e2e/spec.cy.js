describe('Google Search Tests', () => {
  it('should load Google homepage', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include','Google');
  });

  it('should display the search input field', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').should('be.visible');
  });

  it('should perform a search and show results', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').type('Cypress Testing{enter}');
    cy.get('h3').should('contain', 'Cypress');
  });
});