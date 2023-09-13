


## mobile

### 移动端自适应的常见手段

1. viewport 元标签配置视口 `width=device-width, initial-scale=1.0`  
2. 使用现代响应式布局方式 flex grid
3. media query
4. rem em vw/vh 相对单位, 工程化 postcss-px-to-viewport
5. 响应式图片 picture, 以便为不同的显示/设备场景提供图像的替代版本


### 适配安全区域

适配不同厂商刘海 圆角等  
1. viewport `<meta name="viewport" content="viewport-fit=cover" />` 设置可视视窗大小 
2. 通过预设的环境变量，对元素应用padding
```css
/* 例子：兼容刘海屏 */
body {
  /* constant 函数兼容 iOS 11.2 以下*/
  padding-top: constant(safe-area-inset-top);
  /* env 函数兼容 iOS 11.2 */
  padding-top: env(safe-area-inset-top);
}
```
