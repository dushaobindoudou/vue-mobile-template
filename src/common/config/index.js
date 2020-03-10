const httpConf = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: '',
  },
};

export default {
  storage: {
    userToken: 'c_sale_token',
  },
  http: httpConf,
};
