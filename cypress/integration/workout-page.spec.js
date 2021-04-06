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
    it('displays category, exercise, level, range, and reps for 3 of the sets', () => {
      cy.get('strengthwork header')
        .should('have.text', '계열')
        .and('have.text', '운동')
        .and('have.text', '난이도')
        .and('have.text', '범위')
        .and('have.text', '1세트')
        .and('have.text', '2세트')
        .and('have.text', '3세트');
    });

    it('can input exercise reps', () => {
      cy.get('#fieldset-strengthwork')
        .find('exercise rep inputs')
        .each((element) => {
          cy.wrap(element)
            .type(10);
        });
    });
    it('activates or deactivates a input field by clicking the button', () => {
      cy.get('#fieldset-strengthwork')
        .find('all the buttons')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('#fieldset-strengthwork')
        .find('all the inputs')
        .each((element) => {
          cy.wrap(element)
            .should('be.disabled');
        });

      cy.get('#fieldset-strengthwork')
        .find('all the buttons')
        .each((element) => {
          cy.wrap(element)
            .click();
        })
        .get('#fieldset-strengthwork')
        .find('all the inputs')
        .each((element) => {
          cy.wrap(element)
            .should('not.be.disabled');
        });
    });
  });
});
