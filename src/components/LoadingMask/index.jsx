import React from 'react';
import 'components/LoadingMask/css-loader.css'

const LoadingMask = props => (
    props.isLoading ?
        <div className="container"><div className="loader-default loader is-active" data-text={props.loadingMessage} data-blink></div></div>
        : null
);
export default LoadingMask;