import { LOGIN, LOGIN_FAILED } from './constants';
import fetch from '../../../utils/fetch';
import SERVICES from '../../../utils/services';

export function fetchActionLogin(data) {
  return dispatch => {
    const options = {
      auth: {
        password: 'da1c26y7-37b6-41w2-afi7-42dd4825btpu',
        username: 'tpubekasi',
      },
      data,
      method: 'POST',
      url: SERVICES.LOGIN,
    };
    fetch(options)
      .then(res => {
        console.log(res);
        // if (res.data) {
        //   setToken(res.data.token.replace('Bearer ', ''));
        //   setExpireTime(86400);
        //   setUserData(res.data);
        //   location.href = '/';
        // }
      })
      .catch(err => {
        console.log(err);
        let messageError;
        if (err.code === 404) {
          messageError = err.message;
        } else if (err.code === 401) {
          messageError = err.message;
        } else {
          messageError = err.message;
        }
        dispatch(loginFailedAction(messageError));
      });
  };
}

export function loginFailedAction(messageError) {

  return {
    messageError,
    type: LOGIN_FAILED,
  };
}

