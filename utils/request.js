const qs = require('qs');
const config = require('../config');
const cookie = require('js-cookie');

function request(params = {}, ctx = {}) {
  let query = '';

  const headers = {
    'Content-Type': 'application/json',
  };

  const auth = {
    token: ctx.token || cookie.get('token'),
    csrfToken: ctx.csrfToken || cookie.get('csrf_token'),
  };

  if (auth.token) {
    headers['Authorization'] = `${auth.token}`;
  }

  if (auth.csrfToken) {
    headers['X-CSRF-Token'] = auth.csrfToken;
  }

  const options = {
    method: 'GET',
    dataType: 'json',
    ...params,
    headers: {
      ...headers,
      ...params.headers,
    },
  };

  if (params.data) {
    options.body = JSON.stringify(params.data);
  }

  if (params.params) {
    query = qs.stringify(
      {
        _format: 'json',
        ...params.params,
      },
      {
        encodeValuesOnly: true,
        addQueryPrefix: true,
      }
    );
  }

  return fetch(config.host + params.url + query, options)
    .then(async (res) => {
      if (options.dataType === 'json') {
        const json = await res.json();

        return {data: json, res};
      }

      if (options.dataType === 'text') {
        const text = await res.text();

        return {data: text, res};
      }
      const blob = await res.blob();
      return {data: blob, res};
    })
    .then(({res, data}) => {
      if (res.ok) {
        return {data, config: options};
      }
      if (res.status === 401) {
        return {data: params.default || {}, config: options, res};
      }
      console.log('HTTP error:', res);
      return {data: params.default || {}, config: options, res};
    })
    .catch((error) => {
      console.log(error);
      return {data: params.default || {}};
    });
}

module.exports = {
  request,
};
