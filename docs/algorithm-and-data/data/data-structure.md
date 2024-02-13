

## 线性与非线性

线性: 一对一, 栈 队列 数组
非线性: 集合 图 树

### stack and queue

栈: 先进后出, 可用来实现一个逆序数处理的问题, 如 '{}()[]' 问题
队列: 先进先出, 按顺序处理数据,  如广度优先搜索,遍历二叉树节点


### linked list

插入删除效率极高 O(1), 适用于不需要搜索但变动频繁且无法预知数量上限的数据   
例 LRU: 链表+Set

### set


### tree

### heap

堆是一个完全二叉树, 有如下特性:
- 数组索引 0 表示堆顶元素
- 一个节点的父节点坐标为其坐标除以2的整数部分 
- 左节点为 *2 + 1
- 右节点为 *2 + 2


堆: 最大堆 最小堆 


插入删除 时间复杂度都为 Olog(n)
```js
class MiniHeap {
    constructor () {
        this.heap = []
    }

    getParentIndex (i) {
        return (i - 1) >> 1
    }
    getLeftIndex (i) {
        return i * 2 +1
    }
    getRightIndex (i) {
        return i * 2 + 2
    }

    swap (i1, i2) {
        const tmp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
    }

    peek () {
        return this.heap[0]
    }
    size () {
        return this.heap.length
    }
    insert(value) {
        this.heap.push(value)
        this.shifUp(this.heap.length - 1)
    }
    shifUp(index) {
        if (index === 0) return
        const parentId = this.getParentIndex(index)
        if (this.heap[parentId] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
      }
      
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
}
```