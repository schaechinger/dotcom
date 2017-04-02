class Post {
  constructor(post) {
    this.data = {};

    if (post.data) {
      this.data.uid = post.uid;
      this.data.status = !!post.firstPublicationDate ? 'published' : 'preview';

      let data = post.data;
      data['post.publishDate'] = post.firstPublicationDate;
      data['post.updateDate'] = post.lastPublicationDate;

      this.import(data);
    }
  }

  get(property) {
    if (this.data.hasOwnProperty(property)) {
      return this.data[property];
    }

    return null;
  }

  set(property, value) {
    this.data[property] = value;
  }

  import(data) {
    const keyRegex = /^post\./;

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let field = data[key];
        
        if (key.match(keyRegex)) {
          key = key.substr(5);
        }

        let value = null;
        if (field instanceof Date) {
          value = field;
        }
        else if ('SliceZone' !== field.type) {
          value = this.convertField(field);
        }
        else {
          value = this.convertSlices(field.value);
        }

        this.data[key] = value;
      }
    }
  }

  export(fields = []) {
    let self = this;

    let data = {};

    if (fields.length) {
      fields.forEach((field) => {
        if (self.data.hasOwnProperty(field)) {
          data[field] = self.data[field];
        }
        else {
          data[field] = null;
        }
      });
    }
    else {
      data = self.data;
    }

    return data;
  }

  convertField(field) {
    field = field.value;

    let jsonFirsts = ['[', '{'];
    if (-1 !== jsonFirsts.indexOf(field[0])) {
      try {
        field = JSON.parse(field);
      }
      catch (e) {
        // TODO warning in dev mode
        console.warn(e);
        field = {};
      }
    }

    return field;
  }

  convertSlices(sliceZone) {
    let self = this;
    
    let slices = [];

    sliceZone.forEach((slice) => {
      if ('text' === slice.slice_type) {
        let text = slice.value.value.map((val) => {
          return val.text;
        });

        let slc = {
          type: slice.slice_type,
          text: text.join('\n\n')
        };

        slices.push(slc);
      }
      else {
        slice.value.value.forEach((slc) => {
          for (let prop in slc) {
            if (slc.hasOwnProperty(prop) && slc[prop].value) {
              slc[prop] = self.convertField(slc[prop]);
            }
          }
          slc.type = slice.slice_type;
          slices.push(slc);
        });
      }
    });

    return slices;
  }
}

export default Post;
