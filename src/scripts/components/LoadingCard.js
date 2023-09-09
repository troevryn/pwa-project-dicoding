/* eslint-disable no-plusplus */
class LoadingCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    let html = `
      <div id="my-menu-loading" class="content-grid">
    `;

    for (let i = 0; i < 20; i++) {
      html += `
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <p></p>
            <strong></strong>
          </div>
        </div>
      `;
    }

    html += `
      </div>
    `;

    this.innerHTML = html;
  }
}

customElements.define('card-loading', LoadingCard);
