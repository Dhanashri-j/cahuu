import createReducer from '../utils/createReducer';
import Constants from '../constants';

const initialState = {
    notification: {},
    isLoading: false,
    genders: [],
    bloodgroups: {}
};

export default createReducer(initialState, {
    [Constants.SHOW_SUCCESS](state, payload) {
        return Object.assign({}, state, {
            notification: { ...state.notification, success: payload.message }
        });
    },
    [Constants.SHOW_ERROR](state, payload) {
        return Object.assign({}, state, {
            notification: { ...state.notification, error: payload.message }
        });
    },
    [Constants.SHOW_INFO](state, payload) {
        return Object.assign({}, state, {
            notification: { ...state.notification, info: payload.message }
        });
    },
    [Constants.CLEAR_NOTIFICATION](state, payload) {
        return Object.assign({}, state, {
            notification: { ...state.notification, [payload.type]: undefined }
        });
    },

    [Constants.LOADING_START](state, payload) {
        return Object.assign({}, state, {
            loadingMessage: payload.loadingMessage,
            isLoading: true
        });
    },
    [Constants.LOADING_COMPLETE](state) {
        return Object.assign({}, state, {
            isLoading: false
        });
    },

});
