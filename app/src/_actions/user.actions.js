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
                console.log(user);
            },
            error => {
                console.error('no user found', error)
            }
        )
    };

    function request(user) { return { type: 'USERS_LOGIN_REQUEST', user } }
}