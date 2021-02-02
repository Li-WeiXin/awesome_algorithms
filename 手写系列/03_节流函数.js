// 在规定时间内，只能触发一次函数，单位时间内多次触发，只有一次有效

const throttle = (func, wait=50) => {
  let lastTime = 0;
  return function(...args) {
    let now = +new Date()
    if(now-lastTime > wait) {
      lastTime = now
      func.apply(this,args)
    }
  }
}

setInterval(
  throttle(() => {
    console.log(1);
  },500),
  1
)