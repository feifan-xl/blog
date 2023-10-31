

### iterator 遍历器
数据遍历协议 
为集合对象添加一种接口， 用来遍历操作  

模拟 next
```js
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}
```

默认Iterator接口
每个可遍历对象都有个 Symblo.iterator 接口, 用来供for...of消费

```js
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        };
      }
    };
  }
};
```
原生支持:
  - Array
  - Map
  - Set
  - String
  - TypedArray
  - 函数的 arguments 对象
  - NodeList 对象

对象模拟 iterator 接口
```js
let count = 0
let obj = {
  a: 2,
  [Symbol.iterator]: function () {
    let iterator = { next }
    function next () {
      
      return count < 4 ?
        { value: count++, done: false} :
        { value: undefined, done: true}
    }
    return iterator 
  }
}

for (let i of obj) {
  console.log(i);
}
```


#### 调用 iterator 接口的场合

1. 解构赋值
2. 扩展运算符
3. yield* 后面跟的是一个可遍历的结构



#### 使用 generator 函数实现 iterator

```js
let myIterator = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2
    yield 3
  }
}
console.log([...myIterator])
```


### generator

es6 提供的一种异步编程解决方案  

generator 函数执行后， 返回一个遍历器对象
该对象本身也有 Symbol.iterator 属性， 执行后返回自身

```js
function* gen(){}
var g = gen();
g[Symbol.iterator]() === g  // true
```

不能作为 构造函数使用 


#### for...of
自动遍历 generator 函数运行时时生成的 Iterator 对象


#### 应用

1. 异步操作的同步化表达
2. 控制流管理
3. 部署Iterator接口




### async generator

对象的异步遍历器
[Symbol.asyncIterator]
```js
  for await (const x of asyncIterable) {}
```