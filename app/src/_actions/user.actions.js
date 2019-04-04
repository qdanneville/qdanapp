import { userService } from '../_services';

export const userActions = {
    login,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}))

        userService.login(username, password)
        .then(
            user => {
                dispatch(success(user));
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