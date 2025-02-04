describe('Google Search Tests', () => {
  it('should load Google homepage', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include','Google');
  });

  it('should display the search input field', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').should('be.visible');
  });

  it('1should display the search input field', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').should('be.visible');
  });
  it('2should display the search input field', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').should('be.visible');
  });
  it('3should display the search input field', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').should('be.visible');
  });
});