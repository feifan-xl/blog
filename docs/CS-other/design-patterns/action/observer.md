
###  观察者模式 

一种一对多的依赖关系， 被观察者发生变化时， 通知观察者

松耦合 


```js
// 被观察者
class Subject {
  constructor(name) {
    // 观察者队列
    this.observers = [];
  }
  // 注册观察者到被观察者上
  attach(observer) {
    this.observers.push(observer);
  }
  // 执行所有观察者的 update 方法
  notify(nextState) {
    this.observers.forEach((o) => o.update(nextState));
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update(nextState) {
    console.log('通知：被观察已更新');
  }
}

// 创建被观察者
const subject = new Subject();
// 收到广播时要执行的方法
const update = () => console.log('被观察者发出通知');
// 观察者 1
const obs1 = new Observer(update);
// 观察者 2
const obs2 = new Observer(update);

// 观察者 1 订阅 subject 的通知
subject.attach(obs1);
// 观察者 2 订阅 subject 的通知
subject.attach(obs2);

// 发出广播，执行所有观察者的 update 方法
subject.notify();
```