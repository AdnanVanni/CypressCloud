describe('New  Search Tests', () => {
    it('ashould load Google homepage', () => {
      cy.visit('https://www.google.com');
      cy.title().should('include','Google');
    });
  
    it('bshould display the search input field', () => {
      cy.visit('https://www.google.com');
      cy.get('textarea[name="q"]').should('be.visible');
    });
  
    it('cshould display the search input field', () => {
      cy.visit('https://www.google.com');
      cy.get('textarea[name="q"]').should('be.visible');
    });
    it('dshould display the search input field', () => {
      cy.visit('https://www.google.com');
      cy.get('textarea[name="q"]').should('be.visible');
    });
    it('eshould display the search input field', () => {
      cy.visit('https://www.google.com');
      cy.get('textarea[name="q"]').should('be.visible');
    });
  });