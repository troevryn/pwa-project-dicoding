import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestorantIdb = {
  async getRestorant(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestorants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestorant(restorant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restorant);
  },
  async deleteRestorant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestorantIdb;
