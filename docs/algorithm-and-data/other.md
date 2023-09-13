

### 关于算法复杂度

1. 只要高阶项,不要低阶项,也不要高阶的系数, 如 `T(n) = O(2n² + 2n + 3)`, 时间复杂度即为`O(n²)`


O(logn) 复杂度
```js
let cnt = 1
while (cnt < n) {
    cnt *= 2;
}
```
x = log2n, 也就是 logn


### 增长率

O(1) 常量 
O(log n) 对数
O(n) 线性
O(nlogn) 对数-线性
O(n²) 二次
O(2^n) 指数


### 常见的算法复杂度

*logN*
1. 二分法
2. 欧几里得算法

2^n
1. 斐波那契


> https://blog.csdn.net/qq_34358193/article/details/106469137