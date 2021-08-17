import React from 'react';
import { connect } from 'react-redux';
import history from 'history';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as orderActions from 'common/actions/CreateOrder';
import moment from 'moment';
import CreateOrdersComponent from 'pages/CreateOrder';
import Constants from 'common/constants';

class CreateOrder extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);