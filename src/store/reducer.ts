
import { SET_USER_NAME, SET_PASSWORD, SET_LOCATION, GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE } from './actionTypes';
export default (state: any, action: any) => {
    const { userName, password, selectedLocation, isLoading, holeResponse, requestError } = action;
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                userName,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password,
            };
        case SET_LOCATION:
            return {
                ...state,
                selectedLocation,
            };

        case GET_FORECAST_REQUEST:
            return {
                ...state,
                isLoading
            }

        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                isLoading,
                holeResponse
            }
        case GET_FORECAST_FAILURE:
            return {
                ...state,
                isLoading,
                requestError
            }

        default:
            return state;
    }
};
