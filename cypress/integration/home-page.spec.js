describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('presents starting page', () => {
    const time = new Date();
    const dateString = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;

    cy.get('#header-date')
      .should('have.text', dateString)
      .get('#greeting')
      .should('have.text', 'Welcome to Reddit Bodyweight Recommended Routine')
      .get('#button-next')
      .should('have.text', 'Click to start');
  });

  it('navigates checkin page', () => {
    // 체크인 화면이 잘 나오는지 정의
    cy.get('#button-next')
      .click()
      .url()
      .should('include', '/checkin');
  });

  // it('shows strength workout setting instruction', () => {
  //   cy.get('something');
  // });

  // describe('Warm up', () => {
  //   // checkbox would work
  //   it('displays basic warm ups', () => {
  //     // Yuri's Shoulder Band Warm up
  //     // Squat Sky Reaches
  //     // GMB Wrist Prep
  //     // Deadbugs
  //     cy.get('something');
  //   });

  //   it('can select "Archhangs"', () => {
  //     // tooltip: recommended after reach "Negative Pullups"
  //     cy.get('something');
  //   });

  //   it('can select "Support Hold"', () => {
  //     // tooltip: recommended after reach "Negative Dips"
  //     cy.get('something');
  //   });

  //   it('can select "Easier Squat Progression"', () => {
  //     // tooltip: recommended after reach "Bulgarian Split Squats"
  //     cy.get('something');
  //   });

  //   it('can select "Easier Hinge Progression"', () => {
  //     // tooltip: recommended after reach "Banded Nordic Curls"
  //     cy.get('something');
  //   });
  // });

  // describe('Strength Work', () => {
  //   // radio button would work
  //   describe('1st Pair', () => {
  //     it('selects "Pullup Progression"', () => {
  //       cy.get('something');
  //     });

  //     it('selects "Squat Progression"', () => {
  //       cy.get('something');
  //     });
  //   });

  //   describe('2nd Pair', () => {
  //     it('selects "Dip Progression"', () => {
  //       cy.get('something');
  //     });

  //     it('selects "Hinge Progression"', () => {
  //       cy.get('something');
  //     });
  //   });

  //   describe('3rd Pair', () => {
  //     it('selects "Row Progression"', () => {
  //       cy.get('something');
  //     });

  //     it('selects "Pushup Progression"', () => {
  //       cy.get('something');
  //     });
  //   });

  //   describe('Core Triplet', () => {
  //     it('selects "Anti-Extension Progression"', () => {
  //       cy.get('something');
  //     });

  //     it('selects "Anti-Rotation Progression"', () => {
  //       cy.get('something');
  //     });

  //     it('selects "Extension Progression"', () => {
  //       cy.get('something');
  //     });
  //   });
  // });

  // describe('Check In', () => {
  //   it('turns the mode into workout', () => {
  //     // workout of the day 상태 변경 및 운동 모드 전환
  //     cy.get('something');
  //   });
  // });
});
