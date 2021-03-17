Feature('App');

Scenario('제목을 볼 수 있다', (I) => {
  I.amOnPage('/');
  I.see('Sanchack: Random Street');
});

Scenario('메뉴를 볼 수 있다', (I) => {
  I.amOnPage('/');
  I.see('Home');
  I.see('History');
  I.see('Gallery');
  I.see('FAQ');
});
