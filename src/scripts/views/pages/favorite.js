import FavoriteRestorantIdb from '../../data/favorite-restaurant-idb';
import { createCardRestaurantTemplate, createDataNotFound } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `

      <section id="menu" class="container">
        <article>
          <h3>Daftar Menu</h3>
          <div id="my-menu" class="content-grid"></div>
        </article>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestorantIdb.getAllRestorants();
    const restaurantContainer = document.querySelector('#my-menu');
    if (restaurants.length > 0) {
      restaurants.forEach(async (restaurant) => {
        restaurantContainer.innerHTML += createCardRestaurantTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML += createDataNotFound();
    }
  },
};

export default Favorite;
