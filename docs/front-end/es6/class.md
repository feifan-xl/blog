
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