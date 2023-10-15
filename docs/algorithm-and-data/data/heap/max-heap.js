
class MaxHeap {
    constructor() {
        this.heap = []
    }

    getParentId (n) {
        return Math.floor((n - 1) / 2)
    }

    getLeftId (n) {
        return n * 2 + 1
    }
    getRightId (n) {
        return n * 2 + 2
    }

    getMax () {
        return this.heap[0]
    }

    pop () {
        const tmp = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
        return tmp
    }

    size () {
        return this.heap.length
    }
    insert (val) {
        this.heap.push(val)
        this.shiftUp(this.heap.length - 1)
    }

    shiftUp (index) {
        if (index === 0) return 
        const parentId = this.getParentId(index)
        if (this.heap[parentId] < this.heap[index]) {
            this.swap(parentId, index)
            shiftUp(parentId)
        }
    }

    shiftDown (index) {
        const l = this.getLeftId(index)
        const r = this.getRightId(index)
        if (this.heap[l] > this.heap[index] ) {
            this.swap(l, index)
            this.shiftDown(l)
        }
        if (this.heap[r] > this.heap[index]) {
            this.swap(r, index)
            this.shiftDown(r)
        }
    }

    swap(i1, i2) {
        const tmp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = tmp
    }
}