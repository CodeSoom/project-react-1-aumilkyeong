describe('Test', () => {
  it('shows introduction of recommended routine', () => {
    cy.visit('/')
      .get('p')
      .should('have.text', 'Hello, React');
  });
});
