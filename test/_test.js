Feature('App');

Scenario('제목을 볼 수 있다', (I) => {
  I.amOnPage('/');
  I.see('Sanchack: Random Street');
});
