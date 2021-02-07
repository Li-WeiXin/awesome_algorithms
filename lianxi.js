// Promise
var findMedianSortedArrays = function(nums1,nums2){
  let num = nums1.concat(nums2)
  num = num.sort((a,b)=>a-b);
  let len = num.length;
  return len>0 && (len & 1)==0? (num[len/2-1]+num[len/2]/2):num[(len-1)/2]
};

// 两个有序列表的合并
var mergeTwoLists = function(l1,l2) {
  if(l1===null){
    return l2;
  }
  if(l2===null){
    return l1;
  }
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next,l2);
    return l1;
  }else{
    l2.next = mergeTwoLists(l1,l2.next);
    return l2;
  }
}

// 娱乐
console.log("幕字上能还尾片，误不两乐娱作工".split('').reverse().join(''));
// let:70
var climbStairs = function(n) {
  if(n<2) return n;
  let first = 1;
  let second = 2;
  let result = 0;
  for(let i = 3;i<n;i++){
    result = first + second;
    first = second;
    second = result;
  }
  return result;
}

// 兑换零钱问题;
var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(amount+1);
  dp[0]=0;
  for (let i=0;i<dp.length;i++) {
    for (let coin in coins) {
      if (i-coin<0) continue;
      dp[i] = Math.min(dp[i],dp[i-coin]+1);
    }
  }
  return (dp[amount]===amount+1)? -1:dp[amount]
}