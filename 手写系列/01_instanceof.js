// 核心：原型链的向上查找
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  while(true) {
    if(proto == null) return false;
    if(proto === right.prototype) return true;
    ptoto = Object.getPrototypeOf(ptoto);
  }
}



