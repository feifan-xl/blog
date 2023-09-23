

### let const

特性:
    - 不存在变量提升
    - 暂时性死区
    - 不允许重复声明
    - var 会与 window 想映射(转换为一个属性) let不在window上

    
*块级作用域*
函数声明类似于 let， 浏览器的实现可以不遵守上面的规定:
- 允许在块级作用域内声明函数。
- 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
- 同时，函数声明还会提升到所在的块级作用域的头部。

