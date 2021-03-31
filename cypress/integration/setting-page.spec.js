describe('SettingPage', () => {
  beforeEach(() => {
    cy.visit('/setting');
  });

  it('contains setting page outline', () => {
    cy.get('h1')
      .should('have.text', '운동 설정하기')
      .get('#setting-warmup')
      .contains('h2', '준비운동')
      .get('#setting-strengthwork')
      .contains('h2', '근력운동');
  });

  describe('WarmUp', () => {
    it('has default selection', () => {
      cy.get('[data-testid="form-warmup"]')
        .find(':checked')
        .should('have.length', 4);
    });

    it('can select multiple warm up exercise', () => {
      cy.get('input[type="checkbox"]')
        .check()
        .should('have.length', 8);
    });
  });

  describe('StrengthWork', () => {
    it('has default selection', () => {
      cy.get('[data-testid="form-strengthwork"]')
        .within(() => {
          const defaults = [
            'pullup',
            'squat',
            'dip',
            'singleLeggedDeadlift',
            'horizontalRow',
            'pushup',
            'plank',
            'bandedPallofPress',
            'reverseHyperextension',
          ];

          const checkDefault = (exercise) => {
            cy.get(`[id=${exercise}]`)
              .should('be.checked');
          };

          defaults.map((exercise) => checkDefault(exercise));
        });
    });

    it('can change the selected exercise by category', () => {
      const categories = [
        'pullup',
        'squat',
        'dip',
        'hinge',
        'row',
        'pushup',
        'antiExtension',
        'antiRotation',
        'extension',
      ];

      const checkRadioSelection = (category) => {
        cy.get(`[name=${category}]`)
          .click({ multiple: true })
          .get(`[name=${category}]:checked`)
          .should('have.length', 1);
      };

      categories.map((category) => checkRadioSelection(category));
    });
  });
});
