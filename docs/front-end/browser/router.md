


## router: hash / history


### hash 
 onHashChange 事件, 对window.location.hash 进行监控 

`window.addEventListener("hashchange", onHashChange);`

### history

 history: h5 新提供的 Api, pushState(), replaceState() 可以对浏览器历史记录栈进行修改， 以及 popState 事件 监听到状态变更
 
popState:
    - 用户点击浏览器的前进和后退操作
    - 手动调用 history 的 back、forward和 go方法 监听不到


使用 `onpopstate` 监听history路由的变化， 但是只能监听到 history.go forward back. 无法监听到pushState

