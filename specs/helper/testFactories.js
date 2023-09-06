/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestorant = async (restorant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restorant,
  });
};

export { createLikeButtonPresenterWithRestorant };
