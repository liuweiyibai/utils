/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  lw1140@163.com
 * @return {Boolean} return true or false;
 */

export default isEmail = (str) => {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
}