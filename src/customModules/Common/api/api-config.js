const BASE_URL = {
  public: 'https://api.flickr.com/services/feeds/photos_public.gne?',
  service: 'https://api.flickr.com/services/rest/'
};

const KEYS = {
  apiKey: 'api_key=14995cbf3511e5aec79db6ed0e3832ba',
  secretKey: '1a2bf1c8603dc492'
};

const PARAMS = {
  format: 'format=json',
  noJsonCallback: 'nojsoncallback=1',
  extras: 'extras=description%2Cowner_name%2Ctags%2Curl_m+',
  itemsPerPage: 'per_page=15',
  page: 'page=',
  search: 'tags='
};

const METHODS = {
  photos: {
    get: 'method=flickr.photos.getRecent',
    search: 'method=flickr.photos.search'
  }
};

const config = {
  get_url: page => {
    let URL = '';
    if (typeof page !== 'undefined') {
      URL = `${BASE_URL.service}?${METHODS.photos.get}&${KEYS.apiKey}&${PARAMS.extras}&${PARAMS.itemsPerPage}&${PARAMS.page}${page}&${PARAMS.format}&${PARAMS.noJsonCallback}`;
    } else {
      URL = `${BASE_URL.service}?${METHODS.photos.get}&${KEYS.apiKey}&${PARAMS.extras}&${PARAMS.itemsPerPage}&${PARAMS.format}&${PARAMS.noJsonCallback}`;
    }
    return URL;
  },
  search_url: (page, tags) => {
    let URL = '';
    if (typeof tags !== 'undefined') {
      URL = `${BASE_URL.service}?${METHODS.photos.get}&${KEYS.apiKey}&${PARAMS.extras}&${PARAMS.search}${tags}&${PARAMS.itemsPerPage}&${PARAMS.format}&${PARAMS.noJsonCallback}`;
    } else {
      URL = `${BASE_URL.service}?${METHODS.photos.get}&${KEYS.apiKey}&${PARAMS.extras}&${PARAMS.itemsPerPage}&${PARAMS.format}&${PARAMS.noJsonCallback}`;
    }
    return URL;
  }
};

export { config };

// const generateUrl = (methods, params) => {
//   const URL = `${BASE_URL.service}?${METHODS.photos.get}&${KEYS.apiKey}&${PARAMS.extras}&${PARAMS.format}&${PARAMS.noJsonCallback}`;
//   return URL;
// };
//
// export { generateUrl };

//https://www.flickr.com/photos/{onwer_id_from response} - path to user profile in flickr
//https://www.flickr.com/photos/{onwer_name_from_response}/{photo_id_from_response}/ - path to photo in flickr

//example url
// 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=14995cbf3511e5aec79db6ed0e3832ba&format=json&nojsoncallback=1';

// title
// link
// media
// date_taken
// description
// published
// author
// author_id
// tags

// date_taken - yes
// owner_name - yes
// icon_server - no
// original_format - yes
// description - yes
// last_update - no
// geo - no
// tags - no
// machine_tags - no
// o_dims - no
// views - no
// media - no
// path_alias
// url_sq
// url_t
// url_s
// url_q
// url_m
// url_n
// url_z
// url_c
// url_l
// url_o
