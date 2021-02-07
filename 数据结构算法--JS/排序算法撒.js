/**
 * 冒泡排序 插入排序 选择排序
 */

//  冒泡排序
const bubbleSort = (arr)=>{
  if (arr.length <=1)  return
    for(let i=0;i<arr.length;i++) {
      let hasChange = false;
      for (let j=0;j<arr.length-i-1;j++) {
        if (arr[j] > arr[j+1]) {
          const temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
          hasChange = true
        }
      }
    //   当hasChange为false时，所有元素已到位
      if(!hasChange) break
    }
    console.log(arr);
};

// 插入排序
const insertSort = (arr)=>{
  if(arr.length<=1) return
  for (let i=1;i<arr.length;i++) {
    const temp = arr[i]
    let j = i-1;
    for (j;j>=0;j--) {
      if(arr[j] > temp) {
        arr[j+1] = arr[i]
      }else{
        break
      }
    }
    arr[j+1] = temp
  }
  console.log(arr);
}

// 选择排序

// test
const test = [1, 0, 4, 5, 6, 3, 2, 1]
// bubbleSort(test)
insertSort(test)