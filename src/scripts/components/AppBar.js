class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` 
        <navbar>
        <nav id="nav">
          <h1>Hunger Apps</h1>
          <button id="hamburger" >☰</button>

          <ul class="nav-item">
            <li><a href="/#home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li>
              <a href="https://www.linkedin.com/in/robbychua98" target="_blank"
                >About Us</a
              >
            </li>
          </ul>
        </nav>
        <div id="nav-mobile">
          <h1>Hunger Apps</h1>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li>
              <a href="https://www.linkedin.com/in/robbychua98" target="_blank"
                >About Us</a
              >
            </li>
          </ul>
        </div>
      </navbar>`;
  }
}

customElements.define('app-bar', AppBar);
