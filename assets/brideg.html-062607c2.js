import{_ as n,o as s,c as a,e as t}from"./app-5e6e879c.js";const p={},e=t(`<h3 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式" aria-hidden="true">#</a> 桥接模式</h3><p>将抽象部分与实现部分分离，两部分都可以独立变化</p><p>将实现部分和抽象部分解耦</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>color</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color 
    <span class="token punctuation">}</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试</span>
<span class="token keyword">let</span> red <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> yellow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span> red<span class="token punctuation">)</span>
circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> triangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token string">&#39;triangle&#39;</span><span class="token punctuation">,</span> yellow<span class="token punctuation">)</span>
triangle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","brideg.html.vue"]]);export{r as default};