/**
 * @file axios请求封装
 * @author liukai
 */
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 请求失败错误信息提示
function checkCode(message) {
  if (!message) return;
  // 弹出错误信息
  ElMessage.closeAll();
  ElMessage({ message, type: 'error', customClass: 'deep-message' });
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
    // 设置请求头信息
    // const { url, params, data } = config;
    removePending(config); // 在一个ajax发送前执行一下取消操作
    // eslint-disable-next-line new-cap
    config.cancelToken = new cancelToken((cf) => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({ url: `${config.url}&${config.method}`, fn: cf });
    });
    return config;
  },
  (error) => Promise.reject(error),
);

// 添加返回拦截器
axios.interceptors.response.use(
  (response) => {
    removePending(response.config); // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    const { data, data: { code } } = response || {};
    if (code === 0) return data;
    return checkCode(response.message);
  },
  (error) => {
    if (error && error.response) {
      const { data, status } = error.response;
      if (data.errors && data.errors.length) error.message = data.errors[0].message || data.message;
      else {
        const errorStatus = {
          400: '请求错误', 401: '登录过期，请重新登录', 403: '拒绝访问', 404: '请求失败', 408: '请求超时', 500: '服务器内部错误', 501: '服务未实现', 502: '无法连接服务器', 503: '服务不可用', 504: '连接服务器超时', 505: 'HTTP版本不受支持',
        };
        error.message = errorStatus[status];
      }
    } else {
      // error.message = '无法连接服务器';
    }
    if (error.message === 'timeout of 10000ms exceeded') error.message = '网络超时, 请检查网络！';
    // 对返回的错误处理
    return Promise.reject(error);
  },
);

// eslint-disable-next-line consistent-return
const requestHandle = async (url, params, method) => {
  try {
    const res = ['post', 'put'].includes(method)
      ? await axios({ method, url, data: params })
      : await axios[method](url, { params });
    return typeof res.data !== 'undefined' && res.data
  } catch (err) {
    checkCode(err.message);
  }
};

export default {
  get: (url, params) => requestHandle(url, params, 'get'),
  post: (url, params) => requestHandle(url, params, 'post'),
  put: (url, params) => requestHandle(url, params, 'put'),
  delete: (url, params) => requestHandle(url, params, 'delete'),
  all: (url, params) => requestHandle(url, params, 'all'),
};
