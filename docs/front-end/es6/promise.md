

## 手写promise

主要功能:
1. 基础框架 异步，三种状态
2. then方法，主要promiseResolution
3. promiseResolution，返回可能是promise对象 复杂对象 普通对象

### base

``` javascript
function Promise (exector) {
    this.state = 'pending'
    this.onfulfilledCallback = []
    this.onRejectedCallback = []
    const self = this
    function resolve (value) {
        if (self.state === 'pending') {
            self.state = 'fulfilled'
            self.data = value
            for (let i = 0; i < self.onfulfilledCallback.length; i++) {
                self.onfulfilledCallback[i](value)
            }
        }
    }
    
    function reject (reason) {
        self.state = 'rejected'
        self.data = reason
        self.onfulfilledCallback(reason)
    }

    try {
        exector(resolve, reject)
    }catch (reason) {
        reject(reason)
    }

}
```

### then 

```javascript
Promise.prototype.then = function (onFulfilled, onRejected) {
    const self = this
    let promise2
    promise2 = new Promise(function (resolve, reject) {
        if (self.state === 'fulfilled') {
            if (typeof onFulfilled === 'function') {
                try {
                    const x = resolve(self.data)
                    promiseResolution(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }else {
                resolve(self.data)
            }
        } else if (self.state === 'rejected') {
            if (typeof onRejected === 'function') {
                try {
                    const x = onRejected(self.data)
                    promiseResolution(promise2, x, resolve, reject)
                }catch(e) {
                    reject(e)
                }
            }else {
                reject(self.data)
            }
        } else if (self.state === 'pending') {
            self.onfulfilledCallback.push(function (promise1Value) {
                if (typeof onFulfilled === "function") {
                  try {
                    const x = onFulfilled(self.data);
        
                    promiseResolutionProcedure(promise2, x, resolve, reject);
                  } catch (e) {
                    reject(e);
                  }
                } else {
                  resolve(promise1Value);
                }
            })
            self.onRejectedCallback.push(function (promise1Reason) {
                if (typeof onRejected === "function") {
                  try {
                    const x = onRejected(self.data);
        
                    promiseResolutionProcedure(promise2, x, resolve, reject);
                  } catch (e) {
                    reject(e);
                  }
                } else {
                  reject(promise1Reason);
                }
            })
        }
    })

    return promise2
}

```

### prommiseResolution

```javascript
function promiseResolution (promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError("chaining cycle"))
    }
    // 如果也是promise对象
    if (x instanceof Promise) {
        if (x.state === 'pending') {
            x.then(function (value) {
                promiseResolution(promise2, value, resolve, reject)
            }, reject)
        } else if (x.state === 'fulfilled') {
            resolve(x.data)
        } else if (x.state === 'rejected') {
            reject(x.data)
        }
        return;
    }
    // 如果是复制对象 需要执行下
    if (x && (typeof x === 'object' || typeof x === 'function')) {
        // 防止多次执行
        let isCalled = false
        try {
            let then = x.then
            if ( typeof then === 'function') {

                then.call(
                    x,
                    function resolvePromise (y) {
                        if (isCalled) return
                        isCalled = true
                        return promiseResolution(promise2, y, resolve, reject)
                    },
                    function rejectPromise (r) {
                        if (isCalled) return
                        isCalled = true
                        return reject(r)
                    })
            } else {
                resolve(x)
            }
        } catch(e) {
            if (isCalled) return
            isCalled = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}
```

## promise 其他方法

1. promise.all
2. promise.race
3. promise.resolve, reject
4. promise.finally
5. promise.catch

```javascript
promise.all = function (promises) {
    let result = []
    let count = 0
    return new Promise((resolve, reject) => {
        promise.forEach((i, index) => {
            Promise.resolve(i).then(
                res => {
                    reject[index] = res
                    count++
                    if (count === promises.length) {
                        resolve(result)
                    }
                },
                err => {
                    reject(err)
                }
            )
        })
    })
}

```

```js
promise.race = function (promiseList) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseList.length; i++) {
            promise.resolve(promiseList(i)).then(
                res => resolve(res),
                req => reject(req)
            )
        }
    })
}


```