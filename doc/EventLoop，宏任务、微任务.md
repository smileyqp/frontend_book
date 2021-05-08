```shell
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');


script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout


```
> 浏览器多线程，js单线程。时间队列EventQueue。微任务队列，宏任务队列。主线程代码先执行。

> 定时器、事件绑定、ajax都是宏任务，async、promise等是微任务