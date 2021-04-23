export default function () {
// 没有参数的处理
  const paramsType = (val) => {
    if (val !== undefined) {
      return val;
    }
    return '-';
  };
  // 金额类型
  const moneyType = (val) => {
    if (val) return val >= 0 ? `￥${val}` : `-￥${Math.abs(val)}`;
    return `￥${0}`;
  };
  // 金额浮点类型
  const moneyPoint = (val, arg) => {
    if (val) return val.toFixed(2);
    if (arg) return 0;
    return '0.00';
  };

  // 数据类型
  const dataType = (val) => {
    if (val) return val;
    return 0;
  };

  // 限制小数点后两位
  const rounding = (val) => val.toFixed(2);
  return {
    paramsType, moneyType, moneyPoint, dataType, rounding,
  };
}
