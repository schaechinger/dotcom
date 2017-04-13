import Prismic from 'prismic.io';
import Post from '../Models/Post';

const ROOT = 'https://schchngr.prismic.io/api';
const PAGE_SIZE = 5;
const PREVIEW_COOKIE = 'io.prismic.preview';

class BlogApi {
  constructor() {
    this.createApi()
  }

  listPostsByTag(page = 1, tag) {
    let options = {
      page: page,
      pageSize: PAGE_SIZE,
      orderings: '[my.post.date desc]'
    };

    return this.queryPosts(
      Prismic.Predicates.at('my.post.tag', tag),
      options
    );
  }

  listPosts(page = 1) {
    let options = {
      page: page,
      pageSize: PAGE_SIZE,
      orderings: '[my.post.date desc]'
    };

    return this.queryPosts(
      Prismic.Predicates.at('document.type', 'post'),
      options
    );
  }

  queryPosts(query, options) {
    let posts = {
      success: false,
      posts: [],
      page: 0,
      pages: 0
    };

    return this.api
      .then((api) => {
        return api.query(query, options);
      })
      .then((response) => {
        if (response.results) {
          posts = {
            success: true,
            posts: [],
            page: response.page,
            pages: response.total_pages
          };

          response.results.forEach((post) => {
            posts.posts.push(new Post(post));
          });
        }

        return posts;
      })
      .catch((error) => {
        return posts;
      });
  }


  getRunningLocations() {
    return new Promise((resolve, reject) => {
      resolve();
    })
      .then(() => {
        return {
          locations: [
            {
              lat: 48.076495,
              lng: 11.472034,
              text: 'München, Deutschland',
              color: 'green',
              link: '/blog/2017-forstenrieder-volkslauf'
            },
            {
              lat: 21.529133,
              lng: -87.373841,
              text: 'Isla Holbox, Méxiko',
              color: 'green',
              link: '/blog/2016-yucatan-mexiko'
            },
            {
              lat: 53.569879,
              lng: 9.951251,
              text: 'Hamburg, Deutschland'
            },
            {
              lat: 53.287982,
              lng: -6.122732,
              text: 'Dublin, Ireland'
            },
            {
              lat: 47.754900,
              lng: 12.465599,
              text: 'Marquartstein, Deutschland'
            },
            {
              lat: 42.201021,
              lng: -85.582955,
              text: 'Portage, MI, USA'
            },
            {
              lat: 49.019168,
              lng: 12.098173,
              text: 'Regensburg, Deutschland'
            }
          ]
        }
      });
  }

  getTravelLocations() {
    return new Promise((resolve, reject) => {
      resolve();
    })
      .then(() => {
        return {
          locations: [
            {
              lat: 48.137515,
              lng: 11.575823,
              text: 'München, Deutschland',
              color: 'red'
            },
            {
              lat: 20.973260,
              lng: -88.179195,
              text: 'Yucatán, Méxiko',
              color: 'green',
              link: '/de/blog/2016-yucatan-mexiko'
            },
            {
              lat: 41.862547,
              lng: -87.611313,
              text: 'Chicago, IL, USA'
            },
            {
              lat: 42.200830,
              lng: -85.581754,
              text: 'Portage, MI, USA'
            },
            {
              lat: 43.656835,
              lng: -79.378065,
              text: 'Toronto, Canada'
            },
            {
              lat: 53.538296,
              lng: 9.993734,
              text: 'Hamburg, Deutschland'
            },
            {
              lat: 51.507194,
              lng: -0.129070,
              text: 'London, England'
            },
            {
              lat: 55.951812,
              lng: -3.187532,
              text: 'Edinburgh, Scotland'
            },
            {
              lat: 39.613162,
              lng: 2.956940,
              text: 'Mallorca, España'
            },
            {
              lat: 53.350478,
              lng: -6.262876,
              text: 'Dublin, Ireland'
            },
            {
              lat: 52.370399,
              lng: 4.895866,
              text: 'Amsterdam, Nederland'
            },
            {
              lat: 39.611584,
              lng: 19.849490,
              text: 'Κέρκυρα, Ελλάδα'
            },
            {
              lat: 43.709494,
              lng: 7.262202,
              text: 'Nice, France'
            },
            {
              lat: 48.207624,
              lng: 16.372505,
              text: 'Wien, Österreich'
            },
            {
              lat: 43.769417,
              lng: 11.255044,
              text: 'Firenze, Italia'
            },
            {
              lat: 45.438832,
              lng: 12.330238,
              text: 'Venezia, Italia'
            },
            {
              lat: 44.128187,
              lng: 9.713299,
              text: 'Cinque Terre, Italia'
            },
            {
              lat: 54.662597,
              lng: 11.357866,
              text: 'Rødbyhavn, Danmark'
            },
            {
              lat: 48.156312,
              lng: 17.107671,
              text: 'Bratislava, Slovenija'
            }/*,
            {
              lat: 
              lng: ,
              text: ''
            }*/
          ]
        };
      });
  }

  getPostContent(uid) {
    let post = {
      success: false,
      errorCode: 'NOT_FOUND'
    };

    return this.api
      .then((api) => {
        return api.getByUID('post', uid);
      })
      .then((response) => {
        if (response) {
          post = {
            success: true,
            post: new Post(response)
          };
        }

        return post;
      })
      .catch((error) => {
        return post;
      });
  }

  enablePreview(token) {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 60 * 1000);
    document.cookie = (
      `${PREVIEW_COOKIE}=${token}; expires=${date.toUTCString()}; path=/`
    );

    this.createApi();
  }

  getPreviewToken() {
    const value = '; ' + document.cookie;
    const parts = value.split(`; ${PREVIEW_COOKIE}=`);
    if (2 === parts.length) {
      return parts.pop().split(';').shift();
    }
    
    return false;
  }

  createApi() {
    this.api = Prismic.api(ROOT);
  }
}

let api = new BlogApi();

// TODO for testing only
window.blogApi = api;

export default api;
