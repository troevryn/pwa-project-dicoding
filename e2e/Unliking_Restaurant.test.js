/* eslint-disable no-undef */

Feature('Unliking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing on liked restaurants', async ({ I }) => {
  I.see('Data tidak Ditemukan');

  I.amOnPage('/');

  // pause();

  I.seeElement('.item-restaurant h4 a');
  const firstRestorant = locate('.item-restaurant h4 a').first();
  I.click(firstRestorant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.item-restaurant');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Data tidak Ditemukan');

  I.amOnPage('/');

  // pause();

  I.seeElement('.item-restaurant h4 a');
  const firstRestorant = locate('.item-restaurant h4 a').first();
  I.click(firstRestorant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const firstRestorantFavorite = locate('.item-restaurant h4 a').first();
  I.click(firstRestorantFavorite);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Data tidak Ditemukan');
});
