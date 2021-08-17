import React from 'react';
import { connect } from 'react-redux';
import history from 'history';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as createOrdersActions from 'common/actions/createOrders';
import moment from 'moment';
import CreateOrdersComponent from 'pages/CreateOrders';
import Constants from 'common/constants';
import { create } from 'lodash';
// import CreateOrders from '../pages/UploadOrder';

class CreateOrders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };


    }
    componentDidMount() {

    }
    render() {
        return (
            <CreateOrdersComponent

            />
        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.application.isLoading
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrders);