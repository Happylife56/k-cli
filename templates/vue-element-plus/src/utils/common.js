import { ElMessage as message } from 'element-plus';

export default function () {
  /**
   * message 提示
   * @param {string} level 类别
   * @param {string} content 文本
   * @param {string} duration 显示时间
   */
  const mesasgePoint = (level, content, duration = 3000) => {
    message.closeAll();
    // message[level](content,duration)
    message({
      type: level,
      message: content,
      duration,
    });
  };

  // 获取当前的时间
  const formatTime = (val) => {
    if (val < 10) {
      return `0${val}`;
    }
    return val;
  };
  /**
   *
   * @param {string} type month: 年-月 day：年-月-日
   */
  const getNowTime = (type) => {
    const nowTime = new Date();
    const year = nowTime.getFullYear();
    const month = formatTime(nowTime.getMonth() + 1);
    const day = formatTime(nowTime.getDate());
    const hours = formatTime(nowTime.getHours());
    const minutes = formatTime(nowTime.getMinutes());
    const seconds = formatTime(nowTime.getSeconds());
    if (type === 'month') return `${year}-${month}`;
    if (type === 'day') return `${year}-${month}-${day}`;
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  /**
 *
 * @param {function} fn
 * @param {number} wait
 * @param {object} options
 *  leading：false 表示禁用第一次执行   trailing: false 表示禁用停止触发的回调
 */
  const throttle = (fn, wait, options = {}) => {
    let timer;
    let previous = 0;
    const throttled = function () {
      const now = +new Date();
      // remaining 不触发下一次函数的剩余时间
      if (!previous && options.leading === false) previous = now;
      const remaining = wait - (now - previous);
      if (remaining < 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        previous = now;
        // eslint-disable-next-line prefer-rest-params
        fn.apply(this, arguments);
      } else if (!timer && options.trailing !== false) {
        timer = setTimeout(() => {
          previous = options.leading === false ? 0 : new Date().getTime();
          timer = null;
          // eslint-disable-next-line prefer-rest-params
          fn.apply(this, arguments);
        }, remaining);
      }
    };
    return throttled;
  };

  return { mesasgePoint, getNowTime, throttle };
}
