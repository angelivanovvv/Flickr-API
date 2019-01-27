import { getRequest, postRequest } from './api-requests';
import { config } from './api-config';

const Api = Object.freeze({
    collectPhotos: page => getRequest(config.get_url(page)),
    searchPhotos: (page,tags) => getRequest(config.search_url(page,tags))
});

export { Api };