
## catalog

### 1. call


### 2. apply


### 3. bind


### 4. instanceof
检测构造函数的 原型对象 是否在 某个实例的原型链上  
Object.getPrototypeOf(left) === right.prototype

### 5. object.create
创建空对象 并绑定原型

### 6. promise
注意点:
1. then 的链式调用&值穿透特性，主要promiseResolution
2. promiseResolution，返回
    - promise 对象 pending 执行then方法, 其他状态直接返回
    - 引用对象 需要执行 then 方法
    - 基本对象 直接返回


### 7. new


### 8. deepclone shollowClone


### 9. es5 继承


### 10. 二分查找


### 11. quick sorting


### 12. bubble sort


### 13. select sort


### 14. ajax xhr


### 15. 订阅发布


### 16. fibonacci


### 17. 去重


### 18. debounce 防抖


### 19. throttle 节流


### 20. 类型判断


### 21. flatten


### 22. currying


### 23. async / await


### 24. list to tree



### list to tree

```js

const list = [
    { pid: null, id: 1, data: "1" },
    { pid: 1, id: 2, data: "2-1" },
    { pid: 1, id: 3, data: "2-2" },
    { pid: 2, id: 4, data: "3-1" },
    { pid: 3, id: 5, data: "3-2" },
    { pid: 4, id: 6, data: "4-1" },
  ];

function listToTree (list) {
    const map = {}
    const res = []
    list.forEach(i => {
        map[i.id] = i
        i.children = []
    })

    list.forEach(i => {
        if (i.pid === null) {
            res.push(i)
        } else {
            map[i.pid].children.push(i)
        }
    })
    return res
}
```

