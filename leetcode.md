其实有些算法思路挺有意思的，决定开始刷刷leetcode，先从简单的题开始吧！非最优解，仅记录分享

##### [CSDN链接](https://blog.csdn.net/qq_34273059/article/details/117980748)

##### [github leetcode链接](https://github.com/smileyqp/frontend_book/blob/master/leetcode.md)



[TOC]

## 6.16

#### 1、两数之和

![](https://img-blog.csdnimg.cn/20210617091136279.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210617091156151.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = null
    for(let i =0;i<nums.length-1;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                result = [i,j]
                break
            }
        }
    }
    return result;
};
```

## 6.17

#### 28、实现strStr()

![](https://img-blog.csdnimg.cn/2021061709094677.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210617091006468.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let haystacklen = haystack.length;
    let needlelen = needle.length;
    if(haystacklen<needlelen){return -1}
    if(haystack === ''&&needle ===''){return 0}
    let res = -1;
    for(let i = 0;i <= haystacklen-needlelen;i++){
        if(haystack.substr(i,needlelen)===needle){
            res = i;
            break;
        }
    }
    return res;
};
```

## 6.21

#### 26、删除有序数组中的重复项(数组去重)

![](https://img-blog.csdnimg.cn/20210621173616109.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210621173633412.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0;i<=nums.length-1;i++){
        for(let j = i+1;j<=nums.length-1;j++){
            if(nums[i]===nums[j]){
                nums.splice(i,1)
                i--;
                break;
            }
        }
    }
};
```

## 6.23

#### [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)

![](https://img-blog.csdnimg.cn/20210623134755362.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210623134817751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i =0;i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
```



#### [7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)

![](https://img-blog.csdnimg.cn/20210623140106806.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var zhengfu = x>0?true:false;
    x = x > 0?x:-x;
    var res = parseInt(x.toString().split('').reverse().join(''));
    return res > 2147483647 || res < -2147483648 ? 0 :(zhengfu?res:-res)
};
```



#### [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)

![](https://img-blog.csdnimg.cn/20210623214046892.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let res = false;
    x===0?res = true:null;
    if(x>0){
        res =  Number(x.toString().split('').reverse().join('')) === x ? true:false
    }
    return res;
};
```



#### [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

![](https://img-blog.csdnimg.cn/20210623222404367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MjczMDU5,size_16,color_FFFFFF,t_70)

```shell
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortestIndex = 0,
        res = '';
    for(let i = 0;i<strs.length-1;i++){
        strs[i].length > strs[i+1].length ? shortestIndex = i+1:null
    }
    let shortestItem = strs[shortestIndex]

    for(let k = shortestItem.length;k>=0;k--){
        let hasIt = strs.every((item)=>{
            return item.slice(0,k)===shortestItem.slice(0,k)
        })
        if(hasIt){
            res = shortestItem.slice(0,k);
            break;
        }
        
    }
    return res
};
```





