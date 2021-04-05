describe('WorkoutPage', () => {
  beforeEach(() => {
    cy.visit('/workout');
  });

  it('shows workout page outline', () => {
    cy.get('#heading-warmup')
      .should('have.text', '준비운동')
      .get('#heading-strengthwork')
      .should('have.text', '근력운동');
  });

  describe('warmup', () => {
    it('can input exercise reps', () => {
      cy.get('input[type="number"]')
        .each((element) => {
          cy.wrap(element).type('10');
        });
    });

    it('activates or deactivates input field by clicking done button', () => {
      cy.get('button[id^=toggle-]')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('input[type="number"]')
        .each((element) => {
          cy.wrap(element)
            .should('be.disabled');
        });

      cy.get('button[id^=toggle-]')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('input[type="number"]')
        .each((element) => {
          cy.wrap(element)
            .should('not.be.disabled');
        });
    });
  });
});
