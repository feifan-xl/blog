import{_ as n,o as s,c as a,e}from"./app-5e6e879c.js";const t={},i=e(`<h2 id="mobile" tabindex="-1"><a class="header-anchor" href="#mobile" aria-hidden="true">#</a> mobile</h2><h3 id="移动端自适应的常见手段" tabindex="-1"><a class="header-anchor" href="#移动端自适应的常见手段" aria-hidden="true">#</a> 移动端自适应的常见手段</h3><ol><li>viewport 元标签配置视口 <code>width=device-width, initial-scale=1.0</code></li><li>使用现代响应式布局方式 flex grid</li><li>media query</li><li>rem em vw/vh 相对单位, 工程化 postcss-px-to-viewport</li><li>响应式图片 picture, 以便为不同的显示/设备场景提供图像的替代版本</li></ol><h3 id="适配安全区域" tabindex="-1"><a class="header-anchor" href="#适配安全区域" aria-hidden="true">#</a> 适配安全区域</h3><p>适配不同厂商刘海 圆角等</p><ol><li>viewport <code>&lt;meta name=&quot;viewport&quot; content=&quot;viewport-fit=cover&quot; /&gt;</code> 设置可视视窗大小</li><li>通过预设的环境变量，对元素应用padding</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 例子：兼容刘海屏 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token comment">/* constant 函数兼容 iOS 11.2 以下*/</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token function">constant</span><span class="token punctuation">(</span>safe-area-inset-top<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* env 函数兼容 iOS 11.2 */</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-top<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[i];function c(l,p){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","responsive.html.vue"]]);export{r as default};