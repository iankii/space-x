import {getLoadLaunchesUrl} from './defaultUrls';
import {REST_METHODS} from './ApiConsts';
import Store from './../Redux/store';
import {launchDataSelector} from './../Redux/selectors';

export const loadLaunches = (filters) => {
  return fetch(getLoadLaunchesUrl(filters), {
    method: REST_METHODS.GET,
    headers: {
      'Content-Type': "text/html"
    },
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }

    return response.text();
  }).then((respData) => {
    const data = JSON.parse(respData);
    Store.dispatch({type: 'SET_LAUNCH_DATA', payload: data});
    return data;
  });
};

export const getLaunches = () => {
  return launchDataSelector(Store);
}

export default {
  loadLaunches,
  getLaunches
};
