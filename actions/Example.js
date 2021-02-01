import {request} from '../utils/request';
import {actions} from '../store';
import cookie from 'js-cookie';

async function getAuth(ctx) {
  return request(
    {
      method: 'GET',
      url: '/api/profile',
    },
    ctx
  ).then((response) => {
    actions.setAuth(response.data);
    return response.data;
  });
}

function destroy(ctx) {
  return request(
    {
      method: 'DELETE',
      url: '/api/auth/logout',
    },
    ctx
  ).then(() => {
    cookie.remove('token');

    window && window.localStorage.setItem('logout', Date.now());

    window && window.location.reload();
  });
}

function authLoginPassword(data, ctx) {
  return request(
    {
      method: 'POST',
      url: '/api/auth/login',
      data,
    },
    ctx
  )
    .then((response) => {
      if (response.data.token) {
        cookie.set('token', response.data.token, {expires: data.remember ? 365 : 1});
        window && window.location.reload();
      }
      return response.res.status;
    })
    .catch((resolve) => {
      return resolve;
    });
}

function authLoginCode(data, ctx) {
  return request(
    {
      method: 'PATCH',
      url: '/api/auth/login',
      data,
    },
    ctx
  ).then((response) => {
    if (response.data.access_token) {
      cookie.set('token', response.data.access_token, {expires: 1});
    }
    return response.data;
  });
}

function authRegisterCode(data, ctx) {
  return request(
    {
      method: 'POST',
      url: '/api/v1/user/register',
      data,
    },
    ctx
  ).then((response) => response.data);
}

export default {
  getAuth,
  destroy,
  authLoginPassword,
  authLoginCode,
  authRegisterCode,
};
