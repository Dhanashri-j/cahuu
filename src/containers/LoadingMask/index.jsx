import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingMask from 'components/LoadingMask';

class LoadingMaskContainer extends React.Component {

    render() {
        return (
            <LoadingMask
                {...this.props} isLoading={this.props.isLoading}
            />
        );
    }
}
LoadingMaskContainer.propTypes = {
    isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
    loadingMessage: state.application.loadingMessage,
    isLoading: state.application.isLoading
});

export default connect(mapStateToProps, null)(LoadingMaskContainer);
