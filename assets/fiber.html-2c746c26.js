import{_ as e,o as r,c as t,e as a}from"./app-5e6e879c.js";const i={},c=a('<h3 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> fiber</h3><p>本质是一个任务调和器<br> 特点: - 实现时间切片(分片) - 可中断渲染(优先级)</p><p><em>核心</em> RIC: window.requestIdleCallback() 方法将在浏览器的空闲时段内调用的函数排队</p><p>实现</p><ol><li>render 阶段: 构建Fiber对象(DFS)，构建链表，在链表中标记要执行的DOM操作，可中断</li><li>commit 阶段: 根据构建好的链表进行DOM操作，不可终端</li></ol><h3 id="why-not-vue" tabindex="-1"><a class="header-anchor" href="#why-not-vue" aria-hidden="true">#</a> why not vue</h3><p>响应式原理不同, react需要调用setState方法，而vue直接修改变量就行</p><p>vue更加精确<br> react整个组件都需要重新渲染 父组件的状态更新了，所有的子组件得跟着一起渲染</p>',8),o=[c];function n(d,h){return r(),t("div",null,o)}const s=e(i,[["render",n],["__file","fiber.html.vue"]]);export{s as default};
