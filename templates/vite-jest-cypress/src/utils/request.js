/**
 * @file axios请求封装
 */
import axios from 'axios';
import { ElMessage } from 'element-plus';
// import { store } from '../store';

// 请求失败错误信息提示
function checkCode(message) {
  // 弹出错误信息
  ElMessage.closeAll();
  ElMessage({ message, type: 'error', customClass: 'deep-message' });
  // ElMessage.error(message)
}

// 响应时间
axios.defaults.timeout = 10000;
// `withCredentails`选项表明了是否是跨域请求
axios.defaults.withCredentials = true;
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=UTF-8',
};

const pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const cancelToken = axios.CancelToken;
const removePending = (config) => {
  const resUrl = `${config.url}&${config.method}`;
  // eslint-disable-next-line no-restricted-syntax
  for (const p in pending) {
    if (pending[p].url === resUrl) { // 当当前请求在数组中存在时执行函数体
      pending[p].fn(); // 执行取消操作
      pending.splice(p, 1); // 把这条记录从数组中移除
    }
  }
};

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 获取token
    // if (store.state.common.token) {
    //   // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = store.state.common.token;
    // }
    removePending(config); // 在一个ajax发送前执行一下取消操作
    // eslint-disable-next-line new-cap
    config.cancelToken = new cancelToken((cf) => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({ url: `${config.url}&${config.method}`, fn: cf });
    });
    return config;
  },
  (error) =>
  // endLoading()
  // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error),

);

// 添加返回拦截器
axios.interceptors.response.use(
  (response) => {
    // endLoading()
    removePending(response.config); // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    const { data, data: { code } } = response || {};
    const listCode = [0, 1001, 1000, 1100];
    if (typeof response !== 'undefined') {
      if (listCode.includes(code)) return data;
      if (response.data.msg) return response.data;
      checkCode(response.data.message);
    }
    return '';
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break;
        case 401:
          error.message = '登录过期，请重新登录';
          // 跳到登录界面
          localStorage.clear();
          sessionStorage.clear();
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求失败';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器内部错误';
          break;
        case 501:
          error.message = '服务未实现';
          break;
        case 502:
          error.message = '无法连接服务器';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '连接服务器超时';
          break;
        case 505:
          error.message = 'HTTP版本不受支持';
          break;
        default:
      }
    } else {
      // error.message = '无法连接服务器'
    }
    // 对返回的错误处理
    return Promise.reject(error);
  },
);

export default {
  async get(url, params) {
    try {
      const res = await axios.get(url, { params });
      return typeof res.data !== 'undefined' && res.data;
    } catch (err) {
      return checkCode(err.message);
    }
  },
  async post(url, params) {
    try {
      const res = await axios({
        method: 'post',
        url,
        data: params,
      });
      return typeof res.data !== 'undefined' && res.data;
    } catch (err) {
      return checkCode(err.message);
    }
  },
  async put(url, params) {
    try {
      const res = await axios({
        method: 'put',
        url,
        data: params,
      });
      return typeof res.data !== 'undefined' && res.data;
    } catch (err) {
      return checkCode(err.message);
    }
  },
  async delete(url, params) {
    try {
      const res = await axios.delete(url, { params });
      return typeof res.data !== 'undefined' && res.data;
    } catch (err) {
      return checkCode(err.message);
    }
  },
  async all(url, params) {
    try {
      const res = await axios.all(url, { params });
      return typeof res.data !== 'undefined' && res.data;
    } catch (err) {
      return checkCode(err.message);
    }
  },
};
