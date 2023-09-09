import RestaurantSource from '../../data/restaurant-source';
import { createCardRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="hero">
       
      <picture>
          <source media="(max-width: 600px)" srcset="/images/heros/hero-image_2-small.jpg">
          <source  type="image/jpeg" srcset="/images/heros/hero-image_2.jpg">
          <img class="lazyload" data-src="/images/heros/hero-image_2.jpg"  alt="hero-images" crossorigin="anonymous"/>

      </picture>
        
        <div class="bg"></div>
        <div class="hero-content">
        <h2>Welcome To My Restorant</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          incidunt ullam ducimus sapiente ab rem pariatur? Quisquam, hic
          incidunt, aliquam illum commodi temporibus expedita, accusamus ullam
          reprehenderit error vitae pariatur?
        </p>
      </div>
      </section>

      <section id="menu" class="container">

        <article>
          <h3>Daftar Menu</h3>
    <card-loading id="card-loading"></card-loading>
          <div id="my-menu" class="content-grid"></div>
        </article>
      </section>
      `;
  },

  async afterRender() {
    const cardLaoding = document.querySelector('#card-loading');
    // loadingPages.classList.remove('d-none');
    const restaurants = await RestaurantSource.lists();
    const restaurantContainer = document.querySelector('#my-menu');
    // loadingPages.classList.add('d-none');
    cardLaoding.classList.add('d-none');
    restaurants.forEach(async (restaurant) => {
      restaurantContainer.innerHTML += createCardRestaurantTemplate(restaurant);
    });
  },
};

export default Home;
