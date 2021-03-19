describe('ModeChanging', () => {
  it('changes mode in order', () => {
    cy.visit('/')
      .get('h1')
      .should('have.text', 'check-in')
      .get('button')
      .click()
      .get('h1')
      .should('have.text', 'workout')
      .get('button')
      .click()
      .get('h1')
      .should('have.text', 'check-out')
      .get('button')
      .click()
      .get('h1')
      .should('have.text', 'check-in');
  });
});
