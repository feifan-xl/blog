---
sidebarDepth: 2
---

### GC
GC(garbage collection) 垃圾回收，指程序中不再需要使用某个变量，需要对这些对象进行销毁，释放其所占用的内存资源，

无用变量仍占用内存空间，造成资源浪费



### GC catalog

#### 引用计数类型 reference GC

引用计数(reference-counting): 每个对象配置一个 计数器 ， 用于记录指向该对象的引用个数，GC触发时会回收计数为 0 的对象

IE8 以前版本 

#### 追溯类型 Tracing GC

标记-清除(mark-sweep): 扫描整个 heap，标出可到达对象，然后执行 sweep 操作回收不可到达的对象  

标记-压缩(mark-compact): 扫描整个 heap，标出可到达对象，然后执行 compact(重新安排课达到对象，再更新指向可达对象的指针)操作回收

复制(copying): 同 stop-copy,把所有可到达对象移动到一个区域，heap 中剩余的空间全部清除

non-copying implicit(隐性的)


#### 增量类型 incremental GC

垃圾回收的线程 分多个小批次执行。这样每次造成的 应用程序的线程 停顿都很小。


#### 分代类型 generational gc

对于大多数应用来说，多数对象在创建不久即会成为垃圾。因此，需要针对不同 age 的对象来划分不同区域，并采用不同的回收策略。一般情况下，可以简单的分为两个代：younger、older。

younger： 存放活跃的对象，需要经常进行垃圾回收
older： 存放不活跃的独享，回收频率低。

晋升: 在一定条件下，将处在新生代的对象转移到老生代的过程。


#### v8 gc

从全局看，V8 使用了 Generational GC， 而在 new space 中又采用了 Copying GC，在 old space 中采用 incremental marking + lazy sweeping



> link： http://newhtml.net/v8-garbage-collection/

### memory

有关垃圾回收:
1. 引用计数垃圾收集， 两个相互引用的对象 就不会被回收
2. 标记清除算法  由根部出发触及不到的对象被标记为不再使用，进行回收 

---

js 内存的垃圾回收机制为 标记清除(mark-and-sweep)， 变量进入环境时标记， 离开环境时，标记为离开环境

1. 意外的全局变量
  ```
    function foo(arg) {
      a = '1'
    }
  ```

2. 循环引用
  ```
    function func () {
      let obj1 = {}
      let obj2 = {}

      obj1.a = obj2
      obj2.a = obj1
    }
  ```

3. 被遗忘的计时器和回调
  ```
    let someResource = getData();  
    setInterval(() => {  
        const node = document.getElementById('Node');  
        if(node) {  
            node.innerHTML = JSON.stringify(someResource));  
        }  
    }, 1000);
  ```
4. DOM 泄露
  a. 没有清理的DOM元素引用
    ```
      var refA = document.getElementById('refA');
      document.body.removeChild(refA);
      // #refA不能回收，因为存在变量refA对它的引用。将其对#refA引用释放，但还是无法回收#refA。
    ```
  b. 给DOM对象添加的属性是一个对象的引用
  c. DOM对象与js对象相互引用
  d. 从外到内执行appendChild。这时即使调用removeChild也无法释放:

5. closure
闭包会引起内存泄露，但不是必然 



### notica

1. 减少不必要去全局变量
2. 使用完数据后，及时解除引用(闭包中的变量， dom的引用， 定时器清除)
3. 组织好逻辑，避免死循环等造成的浏览器卡顿 崩溃问题


#### 识别方法

pc: 通过 devlopment tool 中 performance 面板， 
node: 通过 process.memoryUsage 方法查看内存
```
console.log(process.memoryUsage());
// { 
//     rss: 27709440,
//     heapTotal: 5685248,
//     heapUsed: 3449392,
//     external: 8772 
// }
```
- rss（resident set size）：所有内存占用，包括指令区和堆栈。
- heapTotal："堆"占用的内存，包括用到的和没用到的。
- heapUsed：用到的堆的部分。 (判断内存泄露以此为准)
- external： V8 引擎内部的 C++ 对象占用的内存。





## sum


- 旧版采用 引用计数  ie8前 无法解决循环引用
- 标记清除 
  - 从根(window)开始, 标记所有可访问到的对象
  - 对未访问到的对象进行清除
- V8 分代回收
  - 新生代
    - 活跃对象，经常进行垃圾回收
    - from/to 两个区域, 放入 from, 当 from 被占满时, 新生代GC启动, 算法会检查 from 空间中存活的对象并复制到 to 空间，失活对象就会摧毁,然后from to空间互换 本次gc结束
      - 晋升 
        1. 新生代中对象已经经历过一次 垃圾会送， 会被晋升到老生代空间
        2. to空间对象占比大小超过25% 为了不影响到内存分配，会将对象从新生代空间移到老生代空间中
  - 老生代
    - 不活跃对象，回收频率低 标记压缩 标记清除
      - 触发时机
        - 某一个空间没有分块的时候
        - 空间中被对象超过一定限制  
        - 空间不能保证新生代中的对象移动到老生代中
      1. 标记清除算法, 且会出现内存碎片
        - 从引用根节点开始遍历 标记所有被引用的对象
        - 对 堆内存从头到尾进行线性遍历，没有标记就被回收
      2. 当碎片超国一定限制，会自动压缩算法，在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存
- v8 最新 并行 增量 并发， 减少主线程挂起的时间
  - 并行是主线程和协助线程同时执行同样的工作
  - 增量式垃圾回收是主线程间歇性的去做少量的垃圾回收的方式
  - 并发是主线程一直执行 JavaScript，而辅助线程在后台完全的执行垃圾回收





