const DrawerInitiator = {
  init({
    button, drawer, bgOverlay,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, bgOverlay);
    });

    bgOverlay.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, bgOverlay);
    });
    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, bgOverlay);
    });
  },

  _toggleDrawer(event, drawer, bgOverlay) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    bgOverlay.classList.add('bg-overlay');
  },

  _closeDrawer(event, drawer, bgOverlay) {
    event.stopPropagation();
    drawer.classList.remove('open');
    bgOverlay.classList.remove('bg-overlay');
  },
};

export default DrawerInitiator;
