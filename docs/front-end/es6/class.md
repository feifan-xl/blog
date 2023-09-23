
### class

继承
```js
class Dog extends Animal {
    constructor (name) {
        super(name)
    }
}
```



### super

1. 作为*函数调用*, 代表父类的构造函数, 作用是形成子类的this对象,  把父类的实例属性和方法放到这个this对象上面, 在 super()前, 是没有this对象的

2. 作为*对象*时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。


### static

static 静态 可被继承， 直接访问 

```js
class Foo {
    constructor (name) {
        this.name = name
    }
    m1 () {
      console.log('m1')
    }
    staic staticM () {
      console.log('static m')
    }
}

class foo extends Foo {
    static ba = '静态属性';
    bar = '实例属性';
    // 私有 es2022添加
    #count = 0;

    constructor (name) {
      // 父类构造函数
        super(name)
    }

    method () {
      // 父类的原型
      super.m1() 
    }
    static staticMethod () {
      // 指向父类
      super.staticM()
    }
    // 私有 es2022添加
    #privateMethod () {

    }
}
a = new foo('aaa')
foo.ba
foo.staticMethod()
```


### new.target

一般在构造函数中， 返回new命令作用于的那个构造函数，
如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined
```js
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错
```