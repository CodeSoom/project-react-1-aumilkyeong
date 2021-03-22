describe('Check In Mode', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Instruction Sequence', () => {
    it('shows welcome message with current date', () => {
      cy.get('something');
    });

    it('shows warm up setting instruction', () => {
      cy.get('something');
    });

    it('shows strength workout setting instruction', () => {
      cy.get('something');
    });

    it('shows check-in instruction', () => {
      cy.get('something');
    });
  });

  describe('Warm up', () => {
    // checkbox would work
    it('displays basic warm ups', () => {
      // Yuri's Shoulder Band Warm up
      // Squat Sky Reaches
      // GMB Wrist Prep
      // Deadbugs
      cy.get('somthing');
    });

    it('can select "Archhangs"', () => {
      // tooltip: recommended after reach "Negative Pullups"
      cy.get('something');
    });

    it('can select "Support Hold"', () => {
      // tooltip: recommended after reach "Negative Dips"
      cy.get('something');
    });

    it('can select "Easier Squat Progression"', () => {
      // tooltip: recommended after reach "Bulgarian Split Squats"
      cy.get('something');
    });

    it('can select "Easier Hinge Progression"', () => {
      // tooltip: recommended after reach "Banded Nordic Curls"
      cy.get('something');
    });
  });

  describe('Strength Work', () => {
    // radio button would work
    describe('1st Pair', () => {
      it('selects "Pullup Progression"', () => {
        cy.get('something');
      });

      it('selects "Squat Progression"', () => {
        cy.get('something');
      });
    });

    describe('2nd Pair', () => {
      it('selects "Dip Progression"', () => {
        cy.get('something');
      });

      it('selects "Hinge Progression"', () => {
        cy.get('something');
      });
    });

    describe('3rd Pair', () => {
      it('selects "Row Progression"', () => {
        cy.get('something');
      });

      it('selects "Pushup Progression"', () => {
        cy.get('something');
      });
    });

    describe('Core Triplet', () => {
      it('selects "Anti-Extension Progression"', () => {
        cy.get('something');
      });

      it('selects "Anti-Rotation Progression"', () => {
        cy.get('something');
      });

      it('selects "Extension Progression"', () => {
        cy.get('something');
      });
    });
  });

  describe('Check In', () => {
    it('turns the mode into workout', () => {
      // workout of the day 상태 변경 및 운동 모드 전환
      cy.get('something');
    });
  });
});
