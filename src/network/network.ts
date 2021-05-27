import axios from 'axios';

import { LOGIN_ENDPOINT, FORECAST_ENDPOINT } from './Endpoints';
import { GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE, GET_FORECAST_REQUEST } from '../store/actionTypes';
export async function loginUserApi(payload: any) {
  let url = LOGIN_ENDPOINT;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(data => data.json())
}
const API_KEY = 'd0343022c668af11b322e4ad0d0e34ee'
export const callforecasApi = (selectedLocation: any, dispatch: any) => {
  dispatch({
    type: GET_FORECAST_REQUEST,
    isLoading: true
  });
  axios
    .get(`${FORECAST_ENDPOINT}?q=${selectedLocation}&APPID=${API_KEY}`)
    .then(res => {
      dispatch({
        type: GET_FORECAST_SUCCESS,
        isLoading: false,
        holeResponse: res.data,
      });
    })
    .catch(error => {
      console.log('error', error)
      dispatch({
        type: GET_FORECAST_FAILURE,
        isLoading: false,
        requestError: error && 'please enter a valid location',
      });
    });
};



