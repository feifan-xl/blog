

### 装饰器模式
动态的给对象添加一些额外职责, 注入一些属性方法等 


```js
function Person () {}
Person.prototype.skill = ''

function MusicDecorator (person) {
  this.person = person
}
MusicDecorator.prototype.music = 'music'
var person1 = new MusicDecorator(person);
person1 = new RunDecorator(person1);
```

### 使用场景
1. aop
2. react hoc
3. koa 洋葱模型 

