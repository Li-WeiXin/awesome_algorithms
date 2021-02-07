// 实现数组得扁平化
// 就是将多维数组转换为一维数组
let ary = [1,[2,[3,[4,5]]],6]
let str = JSON.stringify(ary)

// arr_flat = ary.flat(Infinity); //不知道要扁平的数组的具体深度，只想完全扁平这个嵌套数组里的成员话，可以使用 Infinity 这个值
// // flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
// console.log(arr_flat);

// 递归
// 递归的遍历每一项，若为数组则继续遍历，否则concat
// let ary = [1,[2,[3,[4,5]]],6]
// let fn = function(ary) {
//   let result = [];
//   ary.map(item =>{
//     if(Array.isArray(item)){
//         result = result.concat(flatten(item));
//       }else{
//         result.push(item)
//       }
//   })
//   return result
// }
// console.log(fn());

function flatten(arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flatten(ary));


// 和上面的toString一样，join也可以将数组转换为字符串
function flatten(arr) {
    return arr.join(',').split(',').map(function(item) {
        return parseInt(item);
    })
}

console.log(flatten(ary));