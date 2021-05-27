import { useEffect } from 'react';
import useToken from '../../utils/hooks/useToken';
import { useHistory } from 'react-router';
import { LOGIN_PAGE } from '../../router/config';
import { locations } from './utils/lists'
import Selector from './components/selector';
import Grid from './components/grid';
import { useContext } from 'react';
import { DispatchContext, StateContext } from '../../store/context';
import { SET_LOCATION } from '../../store/actionTypes';
import { callforecasApi } from '../../network/network';

const ForeCast = () => {
    const { token } = useToken();
    const history = useHistory();
    const { state } = useContext(StateContext) || {};
    useEffect(() => {
        if (!token) history.push(LOGIN_PAGE)
    }, [token])
    const dispatch = useContext(DispatchContext);
    const updateLocation = (value: any) => {
        const { location } = value;
        dispatch({ type: SET_LOCATION, selectedLocation: location });
    }
    const { selectedLocation, holeResponse, isLoading } = state;
    console.log('isLoading', isLoading)
    const onGetForecast = () => {
        callforecasApi(selectedLocation, dispatch)
    }
    console.log('holeResponse in the screen', holeResponse)
    return isLoading ? <div><h2>
        loading....
        </h2></div> :
        <div>
            <h2>weather app</h2>
            <Selector
                label='Select a location'
                onChange={updateLocation}
                name="location"
                options={locations}
                value={selectedLocation}
            />
            <button className="btn btn-success" onClick={onGetForecast}>
                Get forecast for 5 days
                </button>
            {holeResponse ?
                <Grid
                    forecast={holeResponse.list}
                    location={holeResponse.city.name}
                    columns={8}
                />
                : null}

        </div>
};

export default ForeCast;