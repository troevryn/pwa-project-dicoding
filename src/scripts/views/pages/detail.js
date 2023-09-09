import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FormInputReviewInitiator from '../../utils/form-input-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createLikeButtonTemplate,
  createRestaurantTemplateDetail,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    
    <div id="restaurant" class="container">
    <span class="loader d-none" id="loading-pages"></span>
    </div>

    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingPages = document.querySelector('#loading-pages');
    loadingPages.classList.remove('d-none');
    const restaurantResult = await RestaurantSource.detail(url.id);
    loadingPages.classList.add('d-none');
    const restaurantContainer = document.querySelector('#restaurant');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    const restorant = restaurantResult.restaurant;
    restaurantContainer.innerHTML = createRestaurantTemplateDetail(restorant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restorant: {
        ...restorant,
      },
    });
    FormInputReviewInitiator.init({
      buttonSubmit: document.querySelector('#saveReview'),
      inputDescription: document.querySelector('#customerDescriptionInput'),
      inputName: document.querySelector('#customerNameInput'),
      id: url.id,
    });
  },
};

export default Detail;
