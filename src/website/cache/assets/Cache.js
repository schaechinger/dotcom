const Cache = require('../Cache');

class AssetsCache extends Cache {
  getAssets() {

  }

  _loadCacheData(slug) {
    return Api.getPostContent(slug)
      .then((data) => {
        if (data.success) {
          this._updatePostDates(data.post);
          return data.post;
        }

        return null;
      });
  }
}

module.exports = AssetsCache;
