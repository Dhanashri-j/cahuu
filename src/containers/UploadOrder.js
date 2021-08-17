import React from 'react';
import { connect } from 'react-redux';
import history from 'history';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as UploadOrderActions from 'common/actions/UploadOrder';
import moment from 'moment';
import UploadOrdersComponent from 'pages/UploadOrder';
import Constants from 'common/constants';

class UploadOrder extends React.Component {
    constructor(props) {
        fileObj = [];
        fileArray = [];
        super(props);

        this.state = {
            file: [null]
        };
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.zoomin = this.zoomin.bind(this);
        this.zoomout = this.zoomout.bind(this);
    }
    componentDidMount() {

    }
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files);
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
        }
        this.setState({ file: this.fileArray });
    }
    uploadFiles(e) {
        e.preventDefault();
        console.log(this.state.file);
    }
    zoomin() {
        var GFG = document.getElementById("myImg");
        var currWidth = GFG.clientWidth;
        GFG.style.width = (currWidth + 100) + "px";
    }

    zoomout() {
        var GFG = document.getElementById("myImg");
        var currWidth = GFG.clientWidth;
        GFG.style.width = (currWidth - 100) + "px";
    }
    render() {
        return (
            <UploadOrdersComponent
                file={this.state.file}
                uploadMultipleFiles={this.uploadMultipleFiles}
                uploadFiles={this.uploadFiles}
                zoomin={this.zoomin}
                zoomout={this.zoomout}
            />
        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.application.isLoading
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UploadOrder);