




### composition API

**动机和目的**
- 更好的逻辑复用和代码组织
- 更好的类型推导 (this 取消)


**mixin的弊端**
- 渲染上下文中暴露的 property 来源不清晰， 很难看出某个 property 是从哪个 mixin 中注入的
- 命名空间冲突. mixin之间的 property 和方法可能有冲突,同时高阶组件也可能和预期的prop有命名冲突
- 性能上, 高阶组件和无渲染组件需要额外的有状态的组件实例, 从而使得性能有所损耗

**composition API**
- 暴露给模板的property来源清晰,因为他们都是被组合逻辑函数返回的值
- 不存在命名空间冲突,可以通过解构任意命名
- 不在需要仅为逻辑复用而创建组件实例

### 特性

- composition API
- fragments
  - vue2 基于 snabbdom ， 每个组件实例对应一个vnode
  - vue3 重写了vdom 机制， 每个组件对应的vnode数量就不那么重要
- 代码结构调整  更利于tree shaking
- 编译优化
  - 静态提升  静态节点会被提升到 render 外 只会渲染一次 
  - patch flag 静态节点  在diff时不做比较
  - 缓存事件监听 开启cacheHandlers 动态事件绑定会被试做 静态标记

### 编译优化

1. 生成 block tree
  - vue 组件越大 渲染越慢， 对一些静态节点 无数据更新 也会遍历
  - 3.0 通过 静态编译阶段 对静态代码模板 分析，生成 block tree(将模板基于动态节点切割的区域)， 个 区块内部的节点结构是固定的，每个区块只需要追踪自身包含的动态节点

2. slot 编译优化
  - 2.0 中父组件更新 slot会强制update
  - 3.0 优化了 slot 的生成， 使得非动态slot中属性的更新只会触发子组件的更新

3. diff 算法优化 增加了静态标记 patchFlag
  - 2.0 深度优先 同级比较 双端比较
  - 3.0 对于不参与更新的元素，做静态标记并提示，只会被创建一次，在渲染时直接复用，不会进行diff
 

### composition API

1. react hook 底层基于链表实现，每次组件 render的时候 都会顺序执行所有 hooks

2. vue 中只会在 注册时 调用一次  
  - 因为 vue 是基于数据响应式的 只要任何一个更改data的地方，相关的function或者template都会被重新计算，因此避开了react可能遇到的性能上的问题


### list

1. fragment
2. teleport
3. suspense
