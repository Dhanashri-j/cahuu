import Config from '../config';
import basic from 'basic-authorization-header';
import history from '../../../src/history';
import { request, requestComplete } from '../actions/application';
import Constants from 'common/constants';


Config.accessToken = Config.accessToken ? Config.accessToken : localStorage.getItem('token');
const BaseURL = Config.baseURL;

export function checkStatus(response) {
    if (!response.ok) {   // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText);
        error.response = response;
        error.statusCode = response.status;
        throw error;
    }
    return response;
}

export function parseJSON(response) {
    return response.json().catch(() => ({}));
}

export function refreshToken(dispatch) {
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    //dispatch(request());
    const data = new FormData();
    data.append('refresh_token', userToken.refresh_token);
    data.append('grant_type', 'refresh_token');
    const config = {
        method: 'post',
        headers: {
            'Authorization': basic('qup-business', 'bus$6web$#')
        },
        body: data
    };
    return fetch(BaseURL + '/userauth/oauth/token', config)
        .then(checkStatus)
        .then(parseJSON)
        .then(result => {
            const access_token = result.access_token;
            const token_type = result.token_type;
            Config.accessToken = `${token_type} ${access_token}`;
            Config.refresh_token = result.refresh_token;
            Config.jti = result.jti;
            Config.scope = result.scope;
            Config.token_type = result.token_type;
            localStorage.setItem('token', Config.accessToken);
            localStorage.setItem('userToken', JSON.stringify(result));
            dispatch(requestComplete());
            return true;
        })
        .catch(error => {
            history.push('/');
            dispatch({
                type: Constants.LOGOUT_USER
            });
            dispatch({
                type: Constants.SHOW_ERROR,
                payload: { message: 'Session Expired! Re-login Again' }
            });
            dispatch(requestComplete());
            throw error;
        });
};


export function handleError(dispatch, error, callback) {
    if (error.statusCode === 401) {
        refreshToken(dispatch).then((result) => {
            callback();
        }).catch(tokenError => {
            callback(tokenError);
        });
    } else {
        callback(error);
    }
}

export function get(nodeURL, dispatch) {
    dispatch(request());

    return new Promise(function (resolve, reject) {
        return fetch(BaseURL + nodeURL, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: Config.accessToken
            }

        }).then(checkStatus)
            .then(parseJSON)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                handleError(dispatch, error, (err) => {
                    if (err) {
                        err.statusCode != 401 && reject(error);
                    } else {
                        get(nodeURL, dispatch).then(result => {
                            resolve(result);
                        })
                            .catch(error => {
                                reject(error);
                            });
                    }
                });
            });
    });
}

export function postImage(nodeURL, data, dispatch) {
    return new Promise(function (resolve, reject) {
        return fetch(BaseURL + nodeURL, {
            method: 'post',
            headers: {
                Authorization: `${Config.accessToken}`
            },
            body: data

        }).then(checkStatus)
            .then(parseJSON)
            .then(result => { resolve(result) })
            .catch(error => {
                handleError(dispatch, error, (err) => {
                    if (err) {
                        err.statusCode != 401 && reject(error);
                    } else {
                        postImage(nodeURL, data, dispatch).then(result => {
                            resolve(result);
                        })
                            .catch(error => {
                                reject(error);
                            });
                    }
                });
            });
    });
}

export function post(nodeURL, data, dispatch) {
    dispatch(request());
    return new Promise(function (resolve, reject) {
        return fetch(BaseURL + nodeURL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                crossDomain: true,
                Authorization: Config.accessToken
            },
            body: JSON.stringify(data)

        }).then(checkStatus)
            .then(parseJSON)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                handleError(dispatch, error, (err) => {
                    if (err) {
                        err.statusCode !== 401 && reject(error);
                    } else {
                        post(nodeURL, data, dispatch).then(result => {
                            resolve(result);
                        })
                            .catch(error => {
                                reject(error);
                            });
                    }
                });
            });
    });
}

export function put(nodeURL, data, dispatch) {
    return new Promise(function (resolve, reject) {
        return fetch(BaseURL + nodeURL, {
            method: 'put',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Config.accessToken
            },
            body: JSON.stringify(data)

        }).then(checkStatus)
            .then(parseJSON)
            .then(result => { resolve(result) })
            .catch(error => {
                handleError(dispatch, error, (err) => {
                    if (err) {
                        err.statusCode != 401 && reject(error);
                    } else {
                        put(nodeURL, data, dispatch).then(result => {
                            resolve(result);
                        })
                            .catch(error => {
                                reject(error);
                            });
                    }
                });
            });
    });
}

export function deleteRequest(nodeURL, dispatch) {
    return new Promise(function (resolve, reject) {
        const url = nodeURL;
        return fetch(BaseURL + nodeURL, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                Authorization: Config.accessToken
            }
        }).then(checkStatus)
            .then(parseJSON)
            .then(result => { resolve(result) })
            .catch(error => {
                handleError(dispatch, error, (err) => {
                    if (err) {
                        err.statusCode != 401 && reject(error);
                    } else {
                        deleteRequest(nodeURL, dispatch).then(result => {
                            resolve(result);
                        })
                            .catch(error => {
                                reject(error);
                            });
                    }
                });
            });
    });
}