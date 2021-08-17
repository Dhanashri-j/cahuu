import PropTypes from 'prop-types';
import React from 'react';
import { Spinner, Media } from 'reactstrap';
import loaderImage from './images/loading_spinner1.png';
import 'styles/loader.scss';

const PageSpinner = props => {
  const splash = document.querySelector('.splash');
  // document.addEventListener('DOMContentLoaded', (e) => {
  //   setTimeout(() => {
  //     // splash.addClass('display-none');
  //   }, 2000);
  // });
  return (
    <div className="cr-page-spinner splash">
      {/* <div class="loading" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> */}
      {/* <Spinner >
      </Spinner>*/}
      <div className="fade-in col-sm-4" >
        <img src={loaderImage} width="300px" alt="loader" />
        <h5>because time is priceless</h5>
      </div>
    </div >
  );
};

PageSpinner.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};

export default PageSpinner;
