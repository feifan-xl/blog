

### 适配器模式

```js

class Adapter {
  constructor () {}
  test () {return '旧接口'}
}
class Target {
  constructor () { this.adapter = new Adapter() }
  test () {
    let info = this.adapter.test()
    return `适配 ${info}`
  }
}
const targret = new Target()
console.log(targret.test())
```