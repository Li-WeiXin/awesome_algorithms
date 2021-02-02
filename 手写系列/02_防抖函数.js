// 防抖函数：在事件被触发n秒后再进行回调，如果在这n秒内触发，则重新计时

const debounce = (func,wait=50)=>{
  let timer = 0;
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this, args)
    },wait)
  }
}

