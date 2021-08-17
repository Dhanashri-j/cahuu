import { combineReducers } from 'redux';
import application from './application';
import auth from './auth';
import dashboard from './dashboard';
import orders from './orders';
import createOrder from './createOrder';
import uploadOrder from './uploadOrder';

export default combineReducers({
    application,
    auth,
    dashboard,
    orders,
    createOrder,
    uploadOrder
});