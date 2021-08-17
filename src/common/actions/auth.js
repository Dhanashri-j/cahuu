import { post, get } from '../utils/api';
import Constants from '../constants';
import _ from 'lodash';
import basic from 'basic-authorization-header';
import Config from 'common/config';
import { checkStatus, parseJSON } from 'common/utils/api';
import * as history from 'common/routing';
// import { showSignInScreen, clearUserDetails } from './application';
import { request, requestComplete } from './application';