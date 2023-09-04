/* eslint-disable no-alert */
import RestaurantSource from '../data/restaurant-source';
import { createCustomerReviewTemplate } from '../views/templates/template-creator';

const FormInputReviewInitiator = {
  async init({
    buttonSubmit, inputName, inputDescription, id,
  }) {
    this._buttonSubmit = buttonSubmit;
    this._inputName = inputName;
    this._inputDescription = inputDescription;
    this._id = id;
    this._name = '';
    this._description = '';
    this._initialChangeInput();
    await this._initialListener();
  },

  async _initialListener() {
    this._buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      this._sendPost();
    });
  },

  async _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData({ ...formData })) {
      try {
        this._buttonSubmit.disabled = true;
        this._buttonSubmit.innerHTML = 'loading...';
        const result = await RestaurantSource.addReview({ ...formData, id: this._id });
        const customerReview = document.querySelector('#customer-review');
        customerReview.remove();
        const restorantInfo = document.querySelector('#customer-review-container');
        restorantInfo.innerHTML += createCustomerReviewTemplate(result.customerReviews);
        this._name = '';
        this._description = '';
        this._inputDescription.value = '';
        this._inputName.value = '';
        this._buttonSubmit.disabled = false;
        this._buttonSubmit.innerHTML = 'save';
        alert('berhasil menambahkan data');
      } catch (error) {
        alert(error);
      }
    } else {
      alert('silahkan isi formnya');
    }
  },

  _getFormData() {
    return {
      name: this._name,
      review: this._description,
    };
  },
  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },
  _initialChangeInput() {
    this._inputName.addEventListener('input', async (event) => {
      this._name = event.target.value;
    });

    this._inputDescription.addEventListener('input', async (event) => {
      this._description = event.target.value;
    });
  },
};

export default FormInputReviewInitiator;
