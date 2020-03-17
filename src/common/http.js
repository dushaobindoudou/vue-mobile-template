import axios from 'axios';
import { Dialog } from 'vant';
import storage from './utils/storage';
import config from './config';

const http = axios.create(config.http);

http.interceptors.request.use(
  (configReq) => {
    // eslint-disable-next-line no-param-reassign
    const token = storage.read(config.storage.userToken);
    if (token) {
      // eslint-disable-next-line no-param-reassign
      configReq.headers.Authorization = token;
    }
    return configReq;
  },
  (error) => {
    Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.headers.status === 401) {
      // console.log('登录已过期，请重新登录哦！')
      // router.push({ path: '/login' })
      storage.remove(config.storage.userToken);
      window.location.href = '#/login';
      return null;
    }
    if (response.status === 200) {
      if (res.code === 0) {
        return res.data;
      }
      Dialog({ message: res.message });
      return Promise.reject(res);
    }
    return Promise.reject(res);
  },
  (error) => {
    console.log(`err:${error}`);
    // Toast(error.message || 'unknown error')
    return Promise.reject(error);
  },
);

export function extendApi(apiConf) {
  const result = {};
  if (!apiConf) {
    return result;
  }
  Object.keys(apiConf).forEach((v) => {
    if (!apiConf[v]) {
      return;
    }
    // eslint-disable-next-line max-len
    result[v] = (params, data, extConfig) => http.request({
      ...apiConf[v],
      ...(params
        ? {
          params: {
            ...apiConf[v].params,
            ...params,
          },
        }
        : null),
      ...(data
        ? {
          data: {
            ...apiConf[v].data,
            ...data,
          },
        }
        : null),
      ...(extConfig || null),
    });
  });
  return result;
}

export default {
  http,
  get: http.get,
  post: http.post,
};
