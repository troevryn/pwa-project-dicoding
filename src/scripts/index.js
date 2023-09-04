import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import './components';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: {
    drawer: document.querySelector('#nav-mobile'),
    bgOverlay: document.querySelector('#bg-overlay'),
  },
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  document.querySelectorAll('a, button, input').forEach((e) => {
    if (e.offsetWidth < 44 || e.offsetHeight < 44) {
      console.log(e);
    }
  });
  app.renderPage();
  await swRegister();
});
