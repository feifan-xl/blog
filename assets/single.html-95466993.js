import{_ as n,o as s,c as a,e}from"./app-5e6e879c.js";const t={},p=e(`<h3 id="singleton" tabindex="-1"><a class="header-anchor" href="#singleton" aria-hidden="true">#</a> singleton</h3><p>保证全局仅有一个实例， 并提供一个访问它的全局访问点</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> single <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">single</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">single</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s1 <span class="token operator">==</span> s2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","single.html.vue"]]);export{r as default};
