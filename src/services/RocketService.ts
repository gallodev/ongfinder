const request = require('request');
const { getURL } = require('./RocketConfig');

const RocketService = () => {

  const fetchPromise = (requestURL : string) => {
    return new Promise((resolve,reject) => {
      request.get(requestURL,(error,response, body) => {
        if(response.statusCode !== 200) {
          return reject(response);
        }
        return resolve(JSON.parse(response.body))
      });
    });
  }

  const getLatestLaunch = (): Promise<any> => {
    const resource = "latest"
    const requestURL = getURL + resource;

    return fetchPromise(requestURL);
  }

  const getNextLaunch = (): Promise<any> => {
    const resource = 'next';
    const requestURL = getURL + resource;

    return fetchPromise(requestURL);   
  }

  const getUpcomingLaunch = (): Promise<any> => {
    const resource = 'upcoming';
    const requestURL = getURL + resource;

    return fetchPromise(requestURL);   
  }

  const getPastLaunch = (): Promise<any> => {
    const resource = 'past';
    const requestURL = getURL + resource;

    return fetchPromise(requestURL);   
  }

  return {
      getNextLaunch,
      getLatestLaunch,
      getUpcomingLaunch,
      getPastLaunch,
  }
}

export { RocketService };