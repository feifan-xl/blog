---
sidebarDepth: 2
---


## CommonJS

CommonJS 模块是为 Node.js 打包 JavaScript 代码的原始方式 
通过 `.cjs` `type=commonjs` `require('*.js')` 等方式引入


```js
  module.exports.hello = true; // Exported from require of module
  exports = { hello: false };  // Not exported, only available in the module

  const b = require('./b.js');
```

## EMS

ECMAScript 模块是 官方标准格式  
用于打包 JavaScript 代码以供重用。 模块使用各种 import 和 export 语句定义。

- es6 新增 浏览器原生支持 模块
- 静态语法  编译阶段就可以确定模块的导入导出哪些变量
- 输出的是值的绑定 指向内存地址


## difference between CommonJS and EMS

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
- CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段
- CommonJS 支持动态导入, 也就是 require(`${path}/xx.js`)


## other Module

`AMD` 异步模块规范 
- 异步加载模块
- 依赖前置
- requireJS 实现
```js
  require([module], callback);
  // 
  require(['math'], function (math) {
    math.add(2,3)
  })
```

`CMD` 公共模块规范
- 异步加载
- 依赖就近
- seaJS

`UMD` 通用模块定义
- AMD + Commonjs 合体， 保证模块被 amd commonjs 调用

## circular dependency

加载机制上的不同  
- CommonJS 加载时执行 出现循环式 只输出已执行部分
- EMS 动态引入，加载为引用地址

### CommonJS

CommonJS 模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

  ```js
    //a.js
    exports.done = false;
    var b = require('./b.js');
    console.log('在 a.js 之中，b.done = %j', b.done);
    exports.done = true;
    console.log('a.js 执行完毕');

    //b.js
    exports.done = false;
    var a = require('./a.js');  // a已经输出变量done, b继续执行
    console.log('在 b.js 之中，a.done = %j', a.done);
    exports.done = true;
    console.log('b.js 执行完毕');

    // main.js
    var a = require('./a.js');
    var b = require('./b.js');
    console.log('在 main.js 之中, a.done=%j, b.done=%j', a.done, b.done);
  ```
运行结果
  ```js
    $ node main.js

    在 b.js 之中，a.done = false
    b.js 执行完毕
    在 a.js 之中，b.done = true
    a.js 执行完毕
    在 main.js 之中, a.done=true, b.done=true
  ```
### ESM

ES6 模块是`动态引用`，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。

```js
  // a.mjs
  import {bar} from './b';
  console.log('a.mjs');
  console.log(bar);
  export let foo = 'foo';

  // b.mjs
  import {foo} from './a';
  console.log('b.mjs');
  console.log(foo);
  export let bar = 'bar';

  $ node --experimental-modules a.mjs
  b.mjs
  ReferenceError: foo is not defined
```

更改后:
```js
  // a.mjs
  import {bar} from './b';
  console.log('a.mjs');
  console.log(bar());
  function foo() { return 'foo' }
  export {foo};

  // b.mjs
  import {foo} from './a';
  console.log('b.mjs');
  console.log(foo());
  function bar() { return 'bar' }
  export {bar};

  $ node --experimental-modules a.mjs
  b.mjs
  foo
  a.mjs
  bar
```
