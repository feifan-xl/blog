

### ts

js的超集,
它添加了静态类型系统和一些其他的语言特性 如:类型 接口 面向对象 

主要特点：
1. 跨平台
2. 新的es特性
3. oop
4. 静态类型检查


### 相关面试题 

- TypeScript 的主要优点是什么？
    类型安全 类型检查
    一些面向对象等高级功能


- TypeScript 中控制成员可见性有哪些方法？

在 TypeScript 中，可以通过访问修饰符（public, private, protected, internal）来控制成员（类、接口、函数、变量等）的可见性。

- TypeScript 支持静态类吗？
TypeScript 支持静态类，因为静态类是 TypeScript 为了更好地描述业务逻辑而引入的一个概念，它在编译为 JavaScript 代码后不会产生任何运行时开销，因此非常适合用来组织和管理代码。


- 什么是枚举，在 TypeScript 中是如何工作的？

枚举是一种特殊的类型，是一组具名的常量值，


- 你能解释一下 TypeScript 中的原始类型吗？比如什么是 any 类型，什么时候使用

- 什么是 void 类型，什么时候使用 void 类型？
     一个特殊类型，表示没有返回值


1. 命名空间和模块
    命名空间是为了解决重名问题
    区别:
        - 全局命名空间下带有普通名字的js对象
        - 模块除了包含代码和声明， 还可以声明它的依赖
        - 命名空间开发不建议用， 一般都是库 主要作用是给编译器编写代码的时候参考使用
2. decorator:
    特殊的类型声明，可以注入到类 方法 属性参数上 来扩展功能

3. never void unknown any
    - never 永远存在的值 error
    - void 无任何类型， 可被赋值为 undefined null
    - unknown 表示不确定性 
    - any 任何
    

4. 泛型 高级类型, 为了创建可复用的组件

5. interface type
    - 相同 都可以描述一个对象或函数, 允许扩展(extend)
    1. type 可以声明基本类型，联合类型，元组
    2. type 可以使用 typeof 获取实例的类型进行赋值
    3. 多个相同的 interface 声明可以自动合并

6. 模块加载机制
    - 先导入模块 
    - 解析失败 尝试定位 外部模块声明 (.d.ts)

7. declare, declare global
    - declare 是用来定义全局变量、全局函数、全局命名空间、js modules、class等
    - declare global 为全局对象 window 增加新的属性




