/* eslint-disable no-undef */
import FavoriteRestorantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helper/testFactories';

describe('Unliking A Restorant ', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestorantIdb.putRestorant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestorantIdb.deleteRestorant(1);
  });

  it('should display unlike widget when the restorant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restorant"]')).toBeTruthy();
  });

  it('should not display like widget when the restorant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restorant"]')).toBeFalsy();
  });

  it('should be able to remove liked restorant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    document.querySelector('[aria-label="unlike this restorant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestorantIdb.getAllRestorants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restorant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestorantIdb.deleteRestorant(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restorant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestorantIdb.getAllRestorants()).toEqual([]);
  });
});
