// 返回当前url地址
export const currentURL = () => window.location.href;

// 返回当前传入的url中的参数，按照键值对返回
export const getURLParameters = url => (url.match(/([^?=&]+)(=([^&]*))/g).reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}));

// 重定向到url
export const redirect = (url, asLink = true) => asLink
  ? window.location.href = url
  : window
    .location
    .replace(url);

// 类型判断
export const typeIs = (obj) => {
  return Object
    .prototype
    .toString
    .call(obj)
    .slice(8, -1)
};

// 数组求和：通过reduce方法来进行计算
const arraySum = arr => arr.reduce((acc, val) => acc + val, 0);

// 数组或者对象深复制
const copy = item => {
  if (typeIs(item) === "Object") {
    return {
      ...item
    }
  } else if (typeIs(item) === "Array") {
    return [...item]
  } else {
    throw new Error('item must be a Array or Object')
  }
}