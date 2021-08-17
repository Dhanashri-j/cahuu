import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const isProduction = process.env.NODE_ENV === 'production';

let composeList = [],
    middleWares = [thunk];

if (!isProduction) {
    window.__REDUX_DEVTOOLS_EXTENSION__ && composeList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    middleWares.push(createLogger());
}

const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            ...middleWares
        ),
        ...composeList
    )
);


export default store;