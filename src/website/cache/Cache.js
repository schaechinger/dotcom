const caches = {};

class Cache {
  static getCache(type) {
    if (!caches[type]) {
      try {
        const CacheType = require(`./${type}/Cache`);
        caches[type] = new CacheType();
      }
      catch (e) {
        console.log(e);
        return false;
      }
    }

    return caches[type];
  }

  constructor() {
    this.reset();
  }

  reset() {
    this.data = {};
  }

  get(id, forced = false) {
    let promise = null;

    if (!this.data[id] || forced) {
      promise = this._loadCacheData(id)
        .then((data) => {
          if (data) {
            this.data[id] = data;
          }
          else if (forced && this.data[id]) {
            delete this.data[id];
          }

          return true;
        });
    }
    else {
      promise = Promise.resolve(true);
    }

    return promise
      .then(() => {
        return this.data[id] || false;
      });
  }

  _loadCacheData(id) {
    return Promise.resolve(true);
  }
}

module.exports = Cache;
