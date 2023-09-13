

### babel

js 编译器, 按需转换代码, 将ts jsx 或新的语言特性 转换为想要的js代码  

原理: 先转换为 AST, 对 AST 应用各种插件进行处理， 最终输出编译后的js代码

*解析步骤*
1. 解析 parse : 将输入的代码 通过babylon 进行解析 得到 AST  
    - 解析过程： 
      - 词法分析  字符串-> token（类似于AST中的节点）
      - 语法分析  token -> AST

2. 转译 transform : 通过 plugin babel-traverse 对 AST 树进行深度优先遍历 转译 得到新的 AST 树

3. 生成 generate : 通过 babel-generator 将 AST 转换成新的 js 代码, 深度遍历整个 AST
