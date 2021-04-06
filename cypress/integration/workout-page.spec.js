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
      cy.get('#fieldset-warmup')
        .find('input[type="number"]')
        .each((element) => {
          cy.wrap(element).type('10');
        });
    });

    it('activates or deactivates a input field by clicking the button', () => {
      cy.get('#fieldset-warmup')
        .find('button[id^=toggle-]')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('#fieldset-warmup')
        .find('input[type="number"]')
        .each((element) => {
          cy.wrap(element)
            .should('be.disabled');
        });

      cy.get('#fieldset-warmup')
        .find('button[id^=toggle-]')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('#fieldset-warmup')
        .find('input[type="number"]')
        .each((element) => {
          cy.wrap(element)
            .should('not.be.disabled');
        });
    });
  });

  describe('strengthwork', () => {
    it('can input exercise reps', () => {
      cy.get('#fieldset-strengthwork')
        .find('input[type="number"]')
        .each((element) => {
          cy.wrap(element)
            .type(10);
        });
    });
    it('activates or deactivates a input field by clicking the button', () => {
      cy.get('#fieldset-strengthwork')
        .find('button')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('#fieldset-strengthwork')
        .find('input')
        .each((element) => {
          cy.wrap(element)
            .should('be.disabled');
        });

      cy.get('#fieldset-strengthwork')
        .find('button')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('#fieldset-strengthwork')
        .find('input')
        .each((element) => {
          cy.wrap(element)
            .should('not.be.disabled');
        });
    });
  });
});
