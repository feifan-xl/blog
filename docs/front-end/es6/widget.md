

## 赋值解构

1. 默认值 取值时惰性求值
2. 解构可以是对象， 也可以给对象赋值
    ```js
    let obj = {};
    let arr = [];
    ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
    obj // {prop:123}
    arr // [true]
    ```


原理:
本质是ES6提供的语法糖, 针对 *可迭代对象* 的 *Interator* 接口, 通过遍历器按顺序进行赋值


## 数组扩展

1. 数组扩展运算符 `...`, 实现iterator接口
2.Array.from 将 array-like 数据转为数组



## 对象扩展


属性的遍历:
1. `for...in` 循环遍历对象自身的和继承的可枚举属性(不含 Symbol 属性)
2. `Object.keys(obj)` 返回一个数组，包括对象自身的(不含继承的)所有可枚举属性（不含 Symbol 属性）的键名
3. `Object.getOwnPropertyNames(obj)` 包含自己所有属性(不含symbol)
4. `Object.getOwnPropertySymbols(obj)` 包含对象自身的所有 Symbol 属性的键名
5. `Reflect.ownKeys(obj)` 返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举


### super

指向当前对象的原型对象。
```js
const proto = {
  foo: 'hello'
};
const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};
Object.setPrototypeOf(obj, proto);
obj.find() // "hello"

const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};
const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}
Object.setPrototypeOf(obj, proto);
obj.foo() // "world"
```


## symbol


### Symbol.prototype.description
es2019新增 

```js
const sym = Symbol('foo');
sym.description // "foo"
```


### Symbol.for Symbol.keyFor
Symbol.for 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局  

```js
a = Symbol('foo')
b = Symbol.for('foo')
c = Symbol.for('foo')
a === b // false
b === c // true
```
*Symbol.keyFor()* 方法返回一个已登记的 Symbol 类型值的key

```js
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```


### proxy

ownKeys() 拦截对自身属性的读取操作:
    - Object.getOwnPropertyNames()
    - Object.getOwnPropertySymbols()
    - Object.keys()
    - for...in循环

this: 指向 Proxy 代理


## reflect

设计目的：
- 可以从 Reflect 对象上拿到语言内部的方法
- 修改某些 Object 方法的返回结果
  ```
    // 老写法
    try {
      Object.defineProperty(target, property, attributes);
      // success
    } catch (e) {
      // failure
    }

    // 新写法
    if (Reflect.defineProperty(target, property, attributes)) {
      // success
    } else {
      // failure
    }
  ```
- 让 Object 的操作变成函数行为
    ```
    // 老写法
    'assign' in Object // true

    // 新写法
    Reflect.has(Object, 'assign') // true
    ```
- Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Porxy 对象的方法，Reflect 对象上就能找到对应的方法




## generator

```js
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }
```