import RestaurantSource from '../../data/restaurant-source';
import { createCardRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="hero">
        <div class="hero-content">
          <h2>Welcome To My Restorant</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            incidunt ullam ducimus sapiente ab rem pariatur? Quisquam, hic
            incidunt, aliquam illum commodi temporibus expedita, accusamus ullam
            reprehenderit error vitae pariatur?
          </p>
        </div>

        <img src="./images/heros/hero-image_2.jpg" width="450" alt="" />
        <div class="bg"></div>
      </section>

      <section id="menu" class="container">
    <span class="loader d-none" id="loading-pages"></span>

        <article>
          <h3>Daftar Menu</h3>
          <div id="my-menu" class="content-grid"></div>
        </article>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const loadingPages = document.querySelector('#loading-pages');
    loadingPages.classList.remove('d-none');
    const restaurants = await RestaurantSource.lists();
    const restaurantContainer = document.querySelector('#my-menu');
    loadingPages.classList.add('d-none');
    restaurants.forEach(async (restaurant) => {
      restaurantContainer.innerHTML += createCardRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
