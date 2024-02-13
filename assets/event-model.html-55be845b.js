import{_ as n,o as a,c as s,e}from"./app-5e6e879c.js";const t={},p=e(`<h2 id="event-and-event" tabindex="-1"><a class="header-anchor" href="#event-and-event" aria-hidden="true">#</a> event and event</h2><p>事件流都会经历三个阶段：</p><ul><li>事件捕获阶段(capture phase)</li><li>处于目标阶段(target phase)</li><li>事件冒泡阶段(bubbling phase)</li></ul><h2 id="event-model" tabindex="-1"><a class="header-anchor" href="#event-model" aria-hidden="true">#</a> event model</h2><p>事件模型可以分为三种：</p><ul><li>原始事件模型（DOM0级）</li><li>标准事件模型（DOM2级）</li><li>IE事件模型（基本不用）</li></ul><h3 id="origin-event" tabindex="-1"><a class="header-anchor" href="#origin-event" aria-hidden="true">#</a> origin event</h3><p>事件绑定监听:</p><ul><li>HTML代码中直接绑定</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span> onclick<span class="token operator">=</span><span class="token string">&quot;fun()&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过<code>JS</code>代码绑定</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;.btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> fun<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h4><ol><li>绑定事件快</li><li>只支持冒泡，不支持捕获</li><li>同一类型事件只能绑定一次</li></ol><h3 id="standard-event" tabindex="-1"><a class="header-anchor" href="#standard-event" aria-hidden="true">#</a> standard event</h3><p>该模型中， 一共三个过程:</p><ol><li>capture</li><li>target</li><li>bubble</li></ol><p>事件绑定监听函数的方式如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>addEventListener(eventType, handler, useCapture)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>事件移除监听函数的方式如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>removeEventListener(eventType, handler, useCapture)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ie-event" tabindex="-1"><a class="header-anchor" href="#ie-event" aria-hidden="true">#</a> ie event</h3><p>非标准</p><ul><li><code>attachEvent(eventType, handler)</code></li><li><code>detachEvent(eventType, handler)</code></li></ul><h2 id="event-proxy" tabindex="-1"><a class="header-anchor" href="#event-proxy" aria-hidden="true">#</a> event proxy</h2><p>事件代理，俗地来讲，就是把一个元素响应事件（<code>click</code>、<code>keydown</code>......）的函数委托到另一个元素</p><h3 id="event-proxy-demo" tabindex="-1"><a class="header-anchor" href="#event-proxy-demo" aria-hidden="true">#</a> event proxy demo</h3><p>如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  ......
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给父层元素绑定事件</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 兼容性处理</span>
    <span class="token keyword">var</span> event <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token keyword">var</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target <span class="token operator">||</span> event<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
    <span class="token comment">// 判断是否匹配目标元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span>toLocaleLowerCase <span class="token operator">===</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;the content is: &#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h3><p>适合事件委托的事件有：<code>click</code>，<code>mousedown</code>，<code>mouseup</code>，<code>keydown</code>，<code>keyup</code>，<code>keypress</code></p><ul><li>减少整个页面所需的内存，提升整体性能</li><li>动态绑定，减少重复工作</li><li><code>focus</code>、<code>blur </code>这些事件没有事件冒泡机制，所以无法进行委托绑定事件</li><li><code>mousemove</code>、<code>mouseout </code>这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的</li></ul>`,33),o=[p];function l(c,i){return a(),s("div",null,o)}const d=n(t,[["render",l],["__file","event-model.html.vue"]]);export{d as default};
