import FavoriteRestorantIdb from '../data/favorite-restaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restorant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restorant = restorant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restorant;

    if (await this._isRestorantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestorantExist(id) {
    const restorant = await FavoriteRestorantIdb.getRestorant(id);
    return !!restorant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestorantIdb.putRestorant(this._restorant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestorantIdb.deleteRestorant(this._restorant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
