import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LOGIN_PAGE, FORECAST_PAGE } from './config';
import { Login, ForeCast } from '../features';
function Router() {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Switch>
                    <Route path={LOGIN_PAGE}>
                        <Login />
                    </Route>
                    <Route path={FORECAST_PAGE}>
                        <ForeCast />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Router;