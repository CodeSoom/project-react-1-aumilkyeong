describe('HomePage', () => {
  it('shows introduction of recommended routine', () => {
    cy.visit('/')
      .get('h1')
      .should('have.text', 'Reddit Bodyweight Recommended Routine')
      .get('#instruction-scheduling')
      .contains('h2', '스케쥴 정하기')
      .get('#instruction-progression')
      .contains('h2', '난이도 조절하기');
  });
});
