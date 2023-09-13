
## 性能优化

## debounce & throttle

debounce 防抖:ns内只执行一次, 如果触发重新计算时间
    - 服务端校验
    - 提交按钮 防止多次提交

throttle 节流: ns内只触发一次
    - 拖拽 短时间内只执行一次
    - 缩放 resize
    - 动画 短时间内多次影响性能

*debounce*
```js
function debounce (fn, time) {
    let timer
    return function (...args) {
        let context = this
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(context, ...args)
        }, time)   
    }
}
```

*throttle*
```js
function throttle (fn, time) {
    let timer 
    return function (...args) {
        let context = this
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, time)
    }
}
```

## 多图站点性能优化 

主要策略:
1. 图片优化: 图片压缩/缩放和选择正确的格式
2. 网络传输优化: 使用http2和 CDN 服务
3. 图片加载策略优化: 按需使用 懒加载，预加载，响应式图片加载等策略 


### 图片优化 

1. 合适的图片格式
    - jpeg 有损压缩 但不影响
    - png 透明
    - gif
    - webp
    - svg

2. 图片压缩


### 网络传输优化

1. 减少请求数量
    - sprite
    - base64
    - 多个域名，开启多个TCP链接, 突破浏览器同源最大并发连接数限制
2. http2 支持多路复用
3. 使用CDN


### 图片加载策略优化 


1. 懒加载
    - img 标签的 loading 属性，lazy 在可见后加载， 兼容性ie否
    - intersection Observer API  兼容性
    - scroll resize 等事件
2. 预加载
    - `<link rel="preload" as="image" href="important.png" />`  允许开发者在 HTML 的 head 标签中声明资源请求，指定页面需要预加载的资源，并且在浏览器的主要渲染机制启动之前加载，避免阻塞页面渲染且保证资源尽早可用
    - 动态场景
    ```js
        // 动态创建 Image
        function preloadImage(url) {
        var img = new Image();
        img.src = url;
        }
    ```

3. 响应式图片加载: 根据屏幕分辨率 选择对应大小的图片
    ```html
        <picture>
            <source srcset="hzfe-avatar-desktop.png" media="(min-width: 990px)" />
            <source srcset="hzfe-avatar-tablet.png" media="(min-width: 750px)" />
            <img src="hzfe-avatar.png" alt="hzfe-default-avatar" />
        </picture>
    ```


## 减少白屏时间 

### 性能指标

Navigation Timing API and Lighthouse Performance

Lighthouse Performance:
1. TTFB:time for First Byte 首字节时间
2. FP(first paint) 首次内容绘制，仅有一个div根节点
3. FCP(first content paint) 首次有内容的绘制，页面基本框架，但没有数据
4. FMP(first meaning paint) 首次有意义的绘制
5. TTI:Time To interactive 可交互时间
6. Long tasks:超过50ms的任务
7. SSR && CSR:服务端渲染和客户端渲染
8. Isomorphic JS:同构化