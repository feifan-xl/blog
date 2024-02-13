import{_ as a,o as e,c as n,e as s}from"./app-5e6e879c.js";const t={},i=s(`<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><p>成员都是唯一的，没有重复值， Set 本身是一个构造函数，用来生成 set 数据结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const s = new Set()
[2,3,4,5,2,2,3,4].forEach(x =&gt; s.add(x))
// s -&gt; [2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Set 函数可接受数(或具有 iterable 接口的其他数据结构)作为参数，用来初始化</li><li>可通过 add() 方法添加值，不回发生类型转换，判断两个值是否不同，使用的算法类似于 === , 但是 NaN 只能添加一个</li></ul><h5 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h5><ul><li>Set.prototype.constructor 构造函数 默认 Set 函数</li><li>Set.prototype.size 返回 Set 实例成员</li></ul><h5 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h5><p><em>操作数据</em></p><ul><li>add(value) 添加某个值，返回 Set 结构本身</li><li>delete(value) 删除某个值，返回 boolean ， 表示是否成功</li><li>has(value) 返回一个布尔值，表示该值是否为Set的成员。</li><li>clear() 清除所有成员，没有返回值。 <em>遍历操作</em></li><li>keys()：返回键名的遍历器</li><li>values()：返回键值的遍历器</li><li>entries()：返回键值对的遍历器(由于没有键名，只有值名，或者键名等于值名)</li><li>forEach()：使用回调函数遍历每个成员</li><li>for...of</li></ul><h3 id="weakset" tabindex="-1"><a class="header-anchor" href="#weakset" aria-hidden="true">#</a> weakSet</h3><p>弱引用: 即垃圾回收时，不会被算作引用次数</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><h3 id="vs-object" tabindex="-1"><a class="header-anchor" href="#vs-object" aria-hidden="true">#</a> vs object</h3><p>可以记录插入的顺序 并使用 entries 进行遍历 key可以是任意值, 而object不可以 可以使用 for...of 遍历</p><h4 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h4><p>size set get has delete clear</p><h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h4><ul><li>keys</li><li>values</li><li>entries for (let i of map.entries()) console.log(i)</li><li>forEach</li><li>for...of</li></ul><h4 id="与其他数据的转换" tabindex="-1"><a class="header-anchor" href="#与其他数据的转换" aria-hidden="true">#</a> 与其他数据的转换</h4><ol><li>数组 [...map]</li><li>对象</li><li>json</li></ol><h3 id="weakmap" tabindex="-1"><a class="header-anchor" href="#weakmap" aria-hidden="true">#</a> weakMap</h3><p>应用: 在网页的dom元素上添加数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> wm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token string">&#39;some information&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token comment">// &quot;some information&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[i];function o(c,p){return e(),n("div",null,l)}const d=a(t,[["render",o],["__file","set_map.html.vue"]]);export{d as default};
