import superAgent from 'superagent';

export const getRequest = route => {
  return new Promise((resolve, reject) => {
    superAgent
      .get(route)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export const postRequest = (route, details) => {
  return new Promise((resolve, reject) => {
    superAgent
      .post(route)
      .send(details)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};
