import Constants from '../constants';
import { get } from '../utils/api';
import { checkStatus, parseJSON } from 'common/utils/api';
import Config from 'common/config';
import _ from 'lodash';

export function request(msg, skipLoadingFlag) {

    if (2 === arguments.length && 'boolean' === typeof skipLoadingFlag && skipLoadingFlag) {
        return;
    }

    return {
        type: Constants.LOADING_START,
        payload: {
            loadingMessage: msg
        }
    };
}

export function requestComplete() {
    return {
        type: Constants.LOADING_COMPLETE
    };
}

export const showSignInScreen = () => dispatch => {
    dispatch({
        type: Constants.SHOW_SIGN_IN_SCREEN
    })
}

export const clearNotifications = (type) => dispatch => {
    dispatch({
        type: Constants.CLEAR_NOTIFICATION,
        payload: { type }
    });
};

export const showSuccessNotification = message => dispatch => {
    dispatch({
        type: Constants.SHOW_SUCCESS,
        payload: { message }
    })
}


