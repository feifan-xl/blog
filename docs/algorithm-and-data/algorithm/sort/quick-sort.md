

### 01
```js
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
```


### 02

```js
var sortArray = function(nums) {
    function partition (l, r) {
        let pivot = nums[l]
        while (l < r) {
            while(l < r && nums[r] > pivot) {
                r--
            }
            nums[l] = nums[r]
            while (l < r && nums[l] <= pivot) {
                l++
            }
            nums[r] = nums[l]
        }
        nums[l] = pivot
        return l
    }

    function quickSort (l, r) {
        if (l >= r) return 
        let index = partition(l, r)
        quickSort(0, index - 1)
        quickSort(index + 1, r)
    }
    quickSort(0, nums.length - 1)
    return nums
};
```