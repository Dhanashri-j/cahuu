import React from 'react';
import { connect } from 'react-redux';
import history from 'history';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as orderActions from 'common/actions/orders';
import moment from 'moment';
import OrdersComponent from 'pages/Orders';
import Constants from 'common/constants';

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listView: false,
            mapView: false
        };

        this.togglelistChecked = this.togglelistChecked.bind(this);
        this.toggleMapChecked = this.toggleMapChecked.bind(this);
    }
    componentDidMount() {

    }
    togglelistChecked() {
        this.setState({ listView: listView == true ? false : true });
        console.log(this.state.listView);
    }
    toggleMapChecked() {
        this.setState({ mapView: !mapView });
    }
    render() {
        return (
            <OrdersComponent
                listView={this.state.listView}
                mapView={this.state.mapView}
                togglelistChecked={this.togglelistChecked}
                toggleMapChecked={this.toggleMapChecked}
            />
        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.application.isLoading
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);