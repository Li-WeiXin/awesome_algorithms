// 非递归的二分查找
function binary_search(nums, target) {
  let left = 0;
  let right = nums.length -1;
  while(left<=right){
    mid = left + ((right-left) >>1);
    if (target === nums[mid]) {
      return mid
    }else if (target <nums[mid]) {
      right = mid -1;
    }else {
      left = mid+1
    }
  }
  return -1
}

// 递归算法
function binary_search1(arr,low,high,key) {
  if(low>high) return -1;
  let mid = low+((high-low)>>1);
  if  (arr[mid]===key) {
    return key
  }else if (arr[mid]>key){
    high = mid-1
    return binary_search1(arr,low,high,key);
  }else if(arr[mid]<key){
    low = mid+1
    return binary_search1(arr,low,high,key)
  }
}