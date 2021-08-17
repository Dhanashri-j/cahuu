import React from 'react';
import { connect } from 'react-redux';
import history from 'history';
import { bindActionCreators } from 'redux';
import * as HomeComponent from 'pages/DashboardPage';
import * as dashboardActions from 'common/actions/dashboard';
import Constants from 'common/constants';
import PropTypes from 'prop-types';
import moment from 'moment';
import PageSpinner from 'components/PageSpinner';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dhanashri',
            isLoading: true
        };
    }
    componentDidMount() {
        this.setState({ isLoading: false });
    }
    render() {
        return (
            this.state.isLoading ? <PageSpinner /> : <PageSpinner />,
            <HomeComponent
                name={this.state.name}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.application.isLoading
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);