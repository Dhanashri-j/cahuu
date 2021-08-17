import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'common/store';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'containers/Login';
import Notification from 'containers/Notification';
import Dashboard from 'containers/DashboardPage';
// import 'flag-icon-css/css/flag-icon.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'simple-line-icons/css/simple-line-icons.css';
// import 'css/scss/style.scss';
// import 'css/scss/core/_dropdown-menu-right.scss';
// import 'font-awesome/css/font-awesome.min.css';
// import 'simple-line-icons/css/simple-line-icons.css';
// import 'react-dates/lib/css/_datepicker.css';
// import 'css/style.css';
import history from './history';
// import LoadingMask from 'containers/LoadingMask';
import PageSpinner from 'containers/PageSpinner';

render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Router history={history} >
                    <Switch>
                        <Route path="/" render={props => {
                            return localStorage.token
                                ?
                                <Dashboard {...props} />
                                :
                                <Redirect to='' />;
                        }} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Router>
                <PageSpinner />
                {/* <LoadingMask /> */}
                <Notification />
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));
