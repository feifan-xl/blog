import{_ as s,o as n,c as a,e}from"./app-5e6e879c.js";const t={},i=e(`<h3 id="perfix" tabindex="-1"><a class="header-anchor" href="#perfix" aria-hidden="true">#</a> perfix</h3><p>通过变量、嵌套、简单的程序逻辑、计算、函数等特性，通过工程化的手段让 CSS 更易维护，提升开发效率</p><p>sass less stylus postcss</p><h3 id="css-modules" tabindex="-1"><a class="header-anchor" href="#css-modules" aria-hidden="true">#</a> css modules</h3><p>增加作用域和模块依赖，用解决全局污染的痛点以及为了解决全局污染而嵌套过深的问题</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* style.css */</span>
<span class="token selector">.hzfeTitle</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

import style from <span class="token string">&quot;./style.css&quot;</span><span class="token punctuation">;</span>

document.body.innerHTML = \`&lt;h1 class=<span class="token string">&quot;\${style.hzfeTitle}&quot;</span>&gt;HZFEStudio&lt;/h1&gt;\`<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> css in js</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>import React from <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
import styled from <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token selector">function hzfe()</span> <span class="token punctuation">{</span>
  const Title = styled.h1\`
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
  \`<span class="token punctuation">;</span>
  return &lt;Title&gt;HZFEStudio&lt;/Title&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tailwind" tabindex="-1"><a class="header-anchor" href="#tailwind" aria-hidden="true">#</a> Tailwind</h3><p>不用考虑 class 的命名。 CSS 文件大小增长可控，通过 purge 可生成非常小的 CSS 文件。 统一设计系统下的样式与布局。 IDE 集成优秀。</p>`,10),c=[i];function l(p,o){return n(),a("div",null,c)}const r=s(t,[["render",l],["__file","prefix.html.vue"]]);export{r as default};
