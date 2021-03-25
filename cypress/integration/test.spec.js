describe('Test', () => {
  it('simple test', () => {
    cy.visit('/')
      .get('p')
      .should('have.text', 'Hello, React');
  });
});
