/* eslint-disable array-callback-return */
import CONFIG from '../../globals/config';

/* eslint-disable import/prefer-default-export */
const createCardRestaurantTemplate = (restaurant) => `
<div class="content-grid-child">
        <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}"  />
        <div class="item-restaurant">
            <h4><a href="/#/detail/${restaurant.id}">${restaurant.name}</a> </h4>

            <p class="truncate">${restaurant.description}</p>
          
            <strong>Kota ${restaurant.city}</strong>
         
          
        </div>
    </div>

`;
const createMenuTemplate = (menus) => {
  const ulElement = document.createElement('ul');
  // eslint-disable-next-line array-callback-return
  menus.map((menu) => {
    ulElement.innerHTML += `<li>${menu.name}</li>`;
  });
  const ulInnerHTML = ulElement.outerHTML;

  return `${ulInnerHTML}`;
};
const createCustomerReviewTemplate = (customers) => {
  const divElement = document.createElement('div');
  divElement.classList.add('content-grid');
  divElement.classList.add('customer-review');
  divElement.id = 'customer-review';
  customers.map((customer) => {
    const divElementChild = document.createElement('div');
    divElementChild.classList.add('customer-card');
    divElementChild.innerHTML += `<p>${customer.name}</p>`;
    divElementChild.innerHTML += `<p>${customer.review}</p>`;
    divElementChild.innerHTML += `<p>${customer.date}</p>`;
    divElement.innerHTML += divElementChild.outerHTML;
  });
  return `${divElement.outerHTML}`;
};
const createRestaurantTemplateDetail = (restaurant) => `
  <img class="restaurant-img" src="${`${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`}" alt="${
  restaurant.name
}" />
  <div id="restorant-info" class="restaurant-info">
  <h2 class="restaurant__title">${restaurant.name}</h2>

    <h3>Information</h3>
   
   <div>
     <h4>Alamat</h4>
    <p>${restaurant.address}</p>
   </div>
   <div>
    <h4>Kota</h4>
    <p>${restaurant.city} minutes</p> 
   </div>
   <div>
     <h4>Description</h4>
    <p>${restaurant.description}</p>
   </div>
    <div>
    <h4>Menu</h4>
    <div class="content-grid menu">   
   <div>  
     <h5>Food</h5>    
     ${createMenuTemplate(restaurant.menus.foods)}
   </div>
  <div>
   <h5>Drink</h5>
   ${createMenuTemplate(restaurant.menus.drinks)}
  </div>
    </div> 
    </div>
  </div>
  <div >
    <h3>Customer Review</h3>
    <form id="add-customer-review" class="container">
    <div class="form-content">
      <label for="customerNameInput">Name</label>
      <input name="customerNameInput" type="text" required class="form-control" value=""  id="customerNameInput">
    </div>
    <div class="form-content">
      <label for="customerDescriptionInput">Deskripsi</label>
      <input name="customerDescriptionInput" type="text" required class="form-control" value=""  id="customerDescriptionInput">
    </div>
    <button  id="saveReview" class="btn-input btn-primary">Save</button>
  </div>
  
 <div id="customer-review-container">
 ${createCustomerReviewTemplate(restaurant.customerReviews)}
 </div>
   
  </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restorant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restorant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createDataNotFound = () => `
  <p>
    Data tidak Ditemukan
  </p>
`;
export {
  createCardRestaurantTemplate,
  createRestaurantTemplateDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createDataNotFound, createCustomerReviewTemplate,
};
