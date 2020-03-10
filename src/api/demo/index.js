import { extendApi } from '@common/http';

const common = extendApi({
  login: {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    params: {
      type: 'yuantong',
      postid: '11111111111',
    },
    data: {
      type: '1',
    },
  },
});

export default common;
