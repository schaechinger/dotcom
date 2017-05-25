const fs = require('fs');
const path = require('path');
const Cache = require('../Cache');

const baseDir = path.resolve(__dirname, '../../../../public/assets/js');

class AssetsCache extends Cache {
  _loadCacheData(id) {
    return new Promise((resolve, reject) => {

      fs.readdir(baseDir, (err, files) => {
        files.forEach(file => {
          const parts = file.split('.');

          if (id === parts[0]) {
            resolve(4 <= parts.length ? parts[1] : parts[0]);
          }
        });
      });
    });
  }
}

module.exports = AssetsCache;
