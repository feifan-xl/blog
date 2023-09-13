

### fiber

本质是一个任务调和器  
特点:
    - 实现时间切片(分片)
    - 可中断渲染(优先级)


*核心*
RIC: window.requestIdleCallback() 方法将在浏览器的空闲时段内调用的函数排队




实现
1. render 阶段: 构建Fiber对象(DFS)，构建链表，在链表中标记要执行的DOM操作，可中断
2. commit 阶段: 根据构建好的链表进行DOM操作，不可终端  



### why not vue

响应式原理不同, react需要调用setState方法，而vue直接修改变量就行

vue更加精确  
react整个组件都需要重新渲染 父组件的状态更新了，所有的子组件得跟着一起渲染 

