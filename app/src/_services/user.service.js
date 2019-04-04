import { users } from '../_helpers/test_data'

export const userService = {
    login,
}

function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // }

    // Simulating a back
    return new Promise((resolve, reject) => {
        // mimic an async network request
        setTimeout(() => {
            var userFound = users.find(user => {
                return user.firstname === username;
            });

            if (userFound) {
                resolve(userFound);
                localStorage.setItem('user', JSON.stringify(userFound));
            } else {
                reject('Username or password is incorrect');
            }

        }, 2000);
    });
    // return users.find(user => {
    //     return user.firstname === username;
    // })

    // return fetch('/users/authenticate', requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
}