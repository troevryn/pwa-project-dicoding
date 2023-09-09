/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add Review to a Restaurant');

const timestamp = new Date().toISOString();
const ROBOT_NAME = 'Bot Reviewer';
const ROBOT_REVIEW = `Review ini diberikan oleh robot pada ${timestamp}`;

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add Review in a restaurant', async ({ I }) => {
  I.seeElement('.item-restaurant h4 a');
  const firstRestorant = locate('.item-restaurant h4 a').first();
  const firstRestorantTitle = await I.grabTextFrom(firstRestorant);
  I.click(firstRestorant);
  const restaurantName = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestorantTitle, restaurantName);
  I.see('Customer Review');
  I.fillField('#customerNameInput', ROBOT_NAME);
  I.fillField('#customerDescriptionInput', ROBOT_REVIEW);
  I.seeElement('#saveReview');
  I.click('#saveReview');
  I.seeInPopup('berhasil menambahkan data');
  I.acceptPopup();
  I.seeElement('#customer-review');
  const lastNameReview = locate('#customer-review .customer-card .customer-name').last();
  const lastDescriptionReview = locate('#customer-review .customer-card .customer-description').last();
  const lastNameReviewText = await I.grabTextFrom(lastNameReview);
  const lastDescriptionReviewText = await I.grabTextFrom(lastDescriptionReview);
  assert.strictEqual(lastNameReviewText, ROBOT_NAME);
  assert.strictEqual(lastDescriptionReviewText, ROBOT_REVIEW);
});
