


//  链表翻转
function reverseList (head) {
    
    let current = head
    let pre = null
    while (current) {
        const tmp = current.next
        current.next = pre
        pre = current
        current = tmp
    }
    return pre
}

// 列表转树
const list = [
    { pid: null, id: 1, data: "1" },
    { pid: 1, id: 2, data: "2-1" },
    { pid: 1, id: 3, data: "2-2" },
    { pid: 2, id: 4, data: "3-1" },
    { pid: 3, id: 5, data: "3-2" },
    { pid: 4, id: 6, data: "4-1" },
  ];


function listToTree (list) {
    // 1.暴力解法 O(n2)
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
console.log(list)

// 二叉树遍历
function fn (root) {
    
    let res = [];
    function wfs (root, level) {

        if (!root) return
        wfs(root.left, level + 1)
        res[level].push(root.val)
        wfs(root.right, level + 1)
    }
    wfs(root, 0)
    return res
}

function levelOrder (root) {

    if (!root) return []
    const res = []
    const queue = [[root, 0]]
    while (queue.length) {

        const n = queue.shift()
        const [node, level] = n
        res[level].push(node.val)
        if (node.left) {
            queue.push([node.left, level + 1])
        }
    }
}

// 最小堆
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


// 快排
function quickSort (arr) {
    function rec (arr) {
        if (arr.length <= 1) return arr
        const left = []
        const right = []
        const mid = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return [...rec(left), mid, ...rec(right)]
    }
    return rec(arr)
}

// 二分查找
function BinarySearch (arr, target) {
    if (arr.length <= 1) return -1
    let start = 0
    let end = target.length - 1
    while(start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (target < arr[mid]) {
            end = mid - 1
        } else if (target > arr[mid]) {
            start = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

// 斐波那契数列
function fib (n) {
    if (n == 1 || n == 0) return 1
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(5))

function fib (n) {
    
    prev = 1
    cur = 1
    if (n <= 1) return arr[n - 1]
    for (let i =2; i < n; i++) {
        cur = cur + prev
        
    }
    return arr[n - 1]
}