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
          cy.get('input[id="pullup"]')
            .should('be.checked')
            .get('input[id="squat"]')
            .should('be.checked')
            .get('input[id="dip"]')
            .should('be.checked')
            .get('input[id="singleLeggedDeadlift"]')
            .should('be.checked')
            .get('input[id="horizontalRow"]')
            .should('be.checked')
            .get('input[id="pushup"]')
            .should('be.checked')
            .get('input[id="plank"]')
            .should('be.checked')
            .get('input[id="bandedPallofPress"]')
            .should('be.checked')
            .get('input[id="reverseHyperextension"]')
            .should('be.checked');
        });
    });

    it('can change the selected exercise by category', () => {
      cy.get('input[id="scapularPull"]')
        .click()
        .should('be.checked')
        .get('input[id="weightedPullup"]')
        .click()
        .should('be.checked')
        .get('input[name="pullup"]:checked')
        .should('have.length', 1); // 풀업 계열 체크

      cy.get('input[id="assistedSquat"]')
        .click()
        .should('be.checked')
        .get('input[id="shrimpSquat"]')
        .click()
        .should('be.checked')
        .get('input[name="squat"]:checked')
        .should('have.length', 1); // 스쿼트 계열 체크

      cy.get('input[id="negativeDip"]')
        .click()
        .should('be.checked')
        .get('input[id="weightedDip"]')
        .click()
        .should('be.checked')
        .get('input[name="dip"]:checked')
        .should('have.length', 1); // 딥 계열 체크

      cy.get('input[id="romanianDeadlift"]')
        .click()
        .should('be.checked')
        .get('input[id="nordicCurl"]')
        .click()
        .should('be.checked')
        .get('input[name="hinge"]:checked')
        .should('have.length', 1); // 힌지 계열 체크

      cy.get('input[id="verticalRow"]')
        .click()
        .should('be.checked')
        .get('input[id="weightedInvertedRow"]')
        .click()
        .should('be.checked')
        .get('input[name="row"]:checked')
        .should('have.length', 1); // 로우 계열 체크

      cy.get('input[id="verticalPushup"]')
        .click()
        .should('be.checked')
        .get('input[id="pseudoPlanchePushup"]')
        .click()
        .should('be.checked')
        .get('input[name="pushup"]:checked')
        .should('have.length', 1); // 로우 계열 체크

      cy.get('input[id="ringAbRollout"]')
        .click()
        .should('be.checked')
        .get('input[id="plank"]')
        .click()
        .should('be.checked')
        .get('input[name="row"]:checked')
        .should('have.length', 1); // anti-extension 계열 체크

      // anti-rotation, extension 계열은 운동이 하나라서 생략
    });
  });
});
