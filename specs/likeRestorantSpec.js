/* eslint-disable no-undef */
import FavoriteRestorantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helper/testFactories';

describe('Liking A Restorant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restorant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restorant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restorant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restorant"]')).toBeFalsy();
  });

  it('should be able to like the restorant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const restorant = await FavoriteRestorantIdb.getRestorant(1);
    expect(restorant).toEqual({ id: 1 });

    await FavoriteRestorantIdb.deleteRestorant(1);
  });

  it('should not add a restorant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestorantIdb.putRestorant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteRestorantIdb.getAllRestorants()).toEqual([{ id: 1 }]);

    await FavoriteRestorantIdb.deleteRestorant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestorant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestorantIdb.getAllRestorants()).toEqual([]);
  });
});
