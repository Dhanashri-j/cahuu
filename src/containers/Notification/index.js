import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import * as applicationActions from 'common/actions/application';
import { bindActionCreators } from 'redux';

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.errorID = null;
        this.successId = null;
        this.infoId = null;
    }

    componentWillReceiveProps(nextProps) {
        let { success, info, error } = nextProps.notification;

        success && !toast.isActive(this.successId) && this.notifySuccess(success);
        info && !toast.isActive(this.infoId) && this.notifyInfo(info);
        error && !toast.isActive(this.errorID) && this.notifyError(error);

    }

    notifySuccess = (message) => {
        this.successId = toast.success(message, { onClose: () => this.onCloseToast('success') });
    };

    notifyInfo = (message) => {
        this.infoId = toast.info(message, { onClose: () => this.onCloseToast('info') });
    };

    notifyError = (message) => {
        this.errorID = toast.error(message, { onClose: () => this.onCloseToast('error') });
    };

    //@Todo - add check for dulpication
    checkDuplicate = () => {

    }

    onCloseToast = (type) => {
        // type == 'error' ? this.errorID = null : '';
        // type == 'info' ? this.infoId = null : '';
        // type == 'success' ? this.successId = null : '';

        this.props.applicationActions.clearNotifications(type);
    }

    render() {
        return (
            <ToastContainer
                hideProgressBar={true}
                position="top-right"
                autoClose={5000}
                style={{ zIndex: 1999 }}
            />
        );
    }
}

const mapStateToProps = state => ({
    // notification: state.application.notification
});

const mapDispatchToProps = dispatch => ({
    applicationActions: bindActionCreators(applicationActions, dispatch),
});

Notification.propTypes = {
    notification: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
