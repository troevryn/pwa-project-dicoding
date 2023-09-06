/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Data tidak Ditemukan');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Data tidak Ditemukan');

  I.amOnPage('/');

  // pause();

  I.seeElement('.item-restaurant h4 a');
  const firstRestorant = locate('.item-restaurant h4 a').first();
  const firstRestorantTitle = await I.grabTextFrom(firstRestorant);
  I.click(firstRestorant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.item-restaurant');
  const firstLikeRestorant = locate('.item-restaurant h4 a').first();

  const likedRestorantTitle = await I.grabTextFrom(firstLikeRestorant);
  assert.strictEqual(firstRestorantTitle, likedRestorantTitle);
});
