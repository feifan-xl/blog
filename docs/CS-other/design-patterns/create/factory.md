
### 工厂模式

定义一个用于创建对象的接口,

```js
class Product {
  constructor (name) {}

  init () {}
}

class Factory {
  constructor () {
    return new Product()
  }
}
```