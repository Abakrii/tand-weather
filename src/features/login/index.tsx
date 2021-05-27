import { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { DispatchContext, StateContext } from '../../store/context';
import { SET_USER_NAME, SET_PASSWORD } from '../../store/actionTypes';
import { loginUserApi } from '../../network/network';
import { useHistory } from 'react-router';
import { FORECAST_PAGE } from '../../router/config';
import useToken from '../../utils/hooks/useToken';
const baseKey = 'codes.loginPage';
const Login = () => {
    const { t } = useTranslation()
    const history = useHistory();
    const { setToken } = useToken();

    const dispatch = useContext(DispatchContext);
    const onChangeUserName = (event: { target: { value: string; }; }) => {
        let userName = event.target.value;
        dispatch({ type: SET_USER_NAME, userName });
    }

    const onChangePassword = (event: { target: { value: string; }; }) => {
        let password = event.target.value;
        dispatch({ type: SET_PASSWORD, password });
    }
    const { state } = useContext(StateContext) || {};
    const { userName, password } = state;
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const token = await loginUserApi({
            userName,
            password
        });
        setToken(token)
        goToNextScreen()
    }
    const goToNextScreen = () => {
        history.push(FORECAST_PAGE)
    }

    const disableSubmit = () => {
        return (
            !userName || !password
        )
    }

    return (
        <div className="login-wrapper">
            <h1>{t(`${baseKey}.header`)}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>{t(`${baseKey}.loginLabel`)}</p>
                    <input onChange={onChangeUserName} className="input-style" type="text" />
                </label>
                <label>
                    <p>{t(`${baseKey}.passwordLabel`)}</p>
                    <input onChange={onChangePassword} className="input-style" type="password" />
                </label>
                <div className="submit-wrapper" >
                    <button disabled={disableSubmit()} className="submit-style" type="submit">{t(`${baseKey}.submitLabel`)}</button>
                </div>
            </form>
        </div>
    )

};

export default Login;