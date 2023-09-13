


### perfix

通过变量、嵌套、简单的程序逻辑、计算、函数等特性，通过工程化的手段让 CSS 更易维护，提升开发效率

sass less stylus postcss


### css modules

增加作用域和模块依赖，用解决全局污染的痛点以及为了解决全局污染而嵌套过深的问题 

```css
/* style.css */
.hzfeTitle {
  color: #666;
  font-size: 20px;
}

import style from "./style.css";

document.body.innerHTML = `<h1 class="${style.hzfeTitle}">HZFEStudio</h1>`;
```


### css in js

```css
import React from "react";
import styled from "styled-components";

function hzfe() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #666;
  `;
  return <Title>HZFEStudio</Title>;
}
```


### Tailwind

不用考虑 class 的命名。
CSS 文件大小增长可控，通过 purge 可生成非常小的 CSS 文件。
统一设计系统下的样式与布局。
IDE 集成优秀。