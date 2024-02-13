


### singleton 
保证全局仅有一个实例， 并提供一个访问它的全局访问点 


```js
let single = (function () {
  let instance = {}

  return function () {
    return instance
  }
})()


let s1 = single()
let s2 = single()
s1 == s2
```