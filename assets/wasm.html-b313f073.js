import{_ as e,o as l,c as a,e as i}from"./app-5e6e879c.js";const s={},t=i('<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>wasm 是一种底层类汇编语言, 在web平台上以趋近原生应用的速度运行</p><p>Wasm 目前已经在浏览器端的图像处理、音视频处理、游戏、IDE、可视化、科学计算等，以及非浏览器端的Serverless、区块链、IoT 等领域有一定的应用</p><p>wasm模块:</p><ol><li>二进制 即.wasm 后缀, 编译器生成 或者文本格式编译生成</li><li>文本格式 .wat , 相当于汇编语言 直接编写 或二进制反编译</li><li>内存格式 模块加载到内存的表现</li><li>模块实例</li></ol><p>解释器实现阶段</p><ol><li>解码 二进制格式转为内存格式</li><li>验证 静态分析, 确保满足规范要求， 且没有不良代码</li><li>执行 实例化和函数调用阶段</li></ol><p>调用帧和调用栈</p>',8),o=[t];function c(r,n){return l(),a("div",null,o)}const p=e(s,[["render",c],["__file","wasm.html.vue"]]);export{p as default};