import { precacheAndRoute } from 'workbox-precaching';
import { Route, registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/config';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const themoviedbApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: CONFIG.CACHE_NAME,
  }),
);

const themoviedbImageApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_IMAGE_URL),
  new StaleWhileRevalidate({
    cacheName: CONFIG.CACHE_NAME,
  }),
);
registerRoute(themoviedbApi);
registerRoute(themoviedbImageApi);
self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});
