// new操作符的作用：
// 1. 创建了一个全新的对象，这个对象的__proto__要指向构造函数的原型对象
// 2. 执行构造函数
// 3. 返回值为Object类型则作为new方法的返回值返回。否则返回上述全新对象

function myNew(fn, ...args) {
  let instance = Object.create(fn.prototype);
  let res = fn.apply(instance, args);
  return typeof res === 'object' ? res: instance;
}