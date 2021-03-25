describe('SettingPage', () => {
  beforeEach(() => {
    cy.visit('/');
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
      // 기본값 준비운동은 4개가 있다.

      cy.get('#form-warmup')
        .find(':checked')
        .should('have.length', 4);
    });

    it('can select 0 warmup exercise', () => {
      // 준비운동을 선택하지 않으면, 운동 페이지에서도 안보인다.

      cy.get('#form-warmup')
        .check({ force: false })
        .should('not.be.checked')
        .visit('/workout')
        .get('#warmup')
        .should('not.be.visible');
    });

    it('can select multiple warm up exercise', () => {
      // 준비운동을 선택하면 운동페이지에도 반영된다.

      cy.get('#form-warmup')
        .check({ force: true })
        .should('not.be.checked')
        .visit('/workout')
        .get('#warmup')
        .should('be.visible'); // 전체 항목 찾아서 길이 체크하는 부분 구현
    });
  });

  describe('StrengthWork', () => {
    it('has default selection', () => {
      // 풀업, 스쿼트, 딥, 힌지, 로우, 푸쉬업, 플랭크, 팔롭, 리버스 하이퍼익스텐션

      cy.get('#pick-pullup :checked')
        .should('be.checked')
        .and('have.value', 'pullup')
        .get('#pick-squat :checked')
        .should('be.checked')
        .and('have.value', 'squat'); // 1페어: 풀업, 스쿼트 기본값 확인

      cy.get('#pick-dip :checked')
        .should('be.checked')
        .and('have.value', 'dip')
        .get('#pick-hinge :checked')
        .should('be.checked')
        .and('have.value', 'single-legged-deadlift'); // 2페어: 딥, 힌지 기본값 확인

      cy.get('#pick-row :checked')
        .should('be.checked')
        .and('have.value', 'horizontal-row')
        .get('#pick-pushup :checked')
        .should('be.checked')
        .and('have.value', 'pushup'); // 3페어: 로우, 푸쉬업 기본값 확인

      cy.get('#pick-anti-extension :checked')
        .should('be.checked')
        .and('have.value', 'plank')
        .get('#pick-anti-rotation :checked')
        .should('be.checked')
        .and('have.value', 'banded-pallof-press')
        .get('#pick-extension :checked')
        .should('be.checked')
        .and('have.value', 'reverse-hyperextension'); // 코어 트리플릿: anti-extension, anti-rotation, extension 기본값 확인
    });

    it('can change selected exercise', () => {
      // 다른 운동으로 변경해본다.

      cy.get('#pick-pullup')
        .find('[name="scapular-pull"]')
        .check()
        .should('be.checked')
        .and('have.value', 'scapular-pull')
        .get('#pick-squat')
        .find('[name="assisted-squat"]')
        .check()
        .should('be.checked')
        .and('have.value', 'assisted-squat'); // 1페어 변경

      cy.get('#pick-dip')
        .find('[name="negative-dip"]')
        .check()
        .should('be.checked')
        .and('have.value', 'negative-dip')
        .get('#pick-hinge')
        .find('[name="romanian-deadlift"]')
        .check()
        .should('be.checked')
        .and('have.value', 'romanian-deadlift'); // 2페어 변경

      cy.get('#pick-row')
        .find('[name="vertical-row"]')
        .check()
        .should('be.checked')
        .and('have.value', 'vertical-row')
        .get('#pick-pushup')
        .find('[name="vertical-pushup"]')
        .check()
        .should('be.checked')
        .and('have.value', 'vertical-pushup'); // 3페어 변경

      cy.get('#pick-anti-extension')
        .find('[name="rollout"]')
        .check()
        .should('be.checked')
        .and('have.value', 'rollout'); // 코어 변경
    });
  });
});
