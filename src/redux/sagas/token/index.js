import {call, put} from 'redux-saga/effects';

import api, {apikey} from '../../../config/config';

const url = `3/authentication/token/new?api_key=${apikey}`;

import * as appAction from '../../actions/appActions';

export function* getToken() {
  try {
    const response = yield call(api.get, url);

    let {success} = response.data;
    if (success) {
      yield put(appAction.AppTokenSuccess(response.data));
    } else {
      yield put(appAction.AppTokenFailed(response.data));
    }
  } catch (error) {
    yield put(appAction.AppTokenFailed(error));
  }
}