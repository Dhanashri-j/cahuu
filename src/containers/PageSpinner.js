import React from 'react';
import { connect } from 'react-redux';
import history from 'history';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import * as orderActions from 'common/actions/orders';
import moment from 'moment';
import PageSpinnerComponent from 'components/PageSpinner';
import Constants from 'common/constants';

class PageSpinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <PageSpinnerComponent

            />
        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.application.isLoading
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PageSpinner);