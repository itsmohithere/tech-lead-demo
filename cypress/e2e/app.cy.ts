describe('Tech Lead Demo application', () => {
  it('renders the component showcase', () => {
    cy.visit('/');

    cy.contains('h1', 'Tech Lead Demo').should('be.visible');

    cy.get('button').contains('Primary').should('be.visible');

    cy.get('button').contains('Secondary').should('be.visible');

    cy.get('input').should('be.visible');
  });

  it('allows the user to interact with the input', () => {
    cy.visit('/');

    cy.get('input')
      .should('be.visible')
      .type('Mohit')
      .should('have.value', 'Mohit');
  });
});
