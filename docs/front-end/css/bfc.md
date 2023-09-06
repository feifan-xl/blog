

### BFC
块级格式化上下文  
指页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上 影响外面的元素 

### 使用场景 

  - 去除浮动
  - 自适应布局
  <!-- 修复浮动元素造成的高度塌陷问题。
  避免非期望的外边距折叠。
  实现灵活健壮的自适应布局。 -->

### 布局规则及触发条件



bfc 布局规则:
- 内部的box会垂直方向，一个接一个地放置
- box 垂直方向距离由margin决定，同一个bfc的两个相邻box的margin会发生重叠
- bfc区域不会与float box 重叠  -> (自适应两栏布局)
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。-> 清除浮动
- 计算BFC的高度时，浮动元素也参与计算。

*创建bfc*
1. float的值不是none。
2. position的值不是static或者relative。
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4. overflow的值不是visibl


