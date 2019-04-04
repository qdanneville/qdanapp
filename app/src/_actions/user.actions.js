import { userService } from '../_services';
import  {history} from '../_helpers'

export const userActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}))

        userService.login(username, password)
        .then(
            user => {
                dispatch(success(user));
                history.push('/');
            },
            error => {
                dispatch(failure(error));
            }
        )
    };

    function request(user) { return { type: 'USERS_LOGIN_REQUEST', user } }
    function success(user) { return { type: 'USERS_LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'USERS_LOGIN_FAILURE', error } }
}

function logout() {
    userService.logout();
    return { type: 'USERS_LOGOUT'};
}