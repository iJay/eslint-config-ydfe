module.exports = {
    'accessor-pairs': 2, // 在对象和类中强制执行 getter 和 setter 成对出现
    'array-bracket-spacing': 0, // 在数组括号内强制执行一致的间距
    'block-scoped-var': 2, // 在块范围内强制使用var
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }], // 对块强制使用一致的大括号样式
    'camelcase': 0, // 强制执行驼峰命名约定
    'comma-dangle': [2, 'never'], // 不允许在对象和数组字面量中使用尾随逗号。
    'comma-spacing': [2, { 'before': false, 'after': true }], // 在逗号前后强制保持一致的间距
    'comma-style': [2, 'last'], // 强制使用一致的逗号样式
    'complexity': 0, // 指定程序中允许的最大环路复杂度
    'computed-property-spacing': 0, // 在计算的属性括号内强制执行一致的间距
    'consistent-return': 0, // 要求return语句始终或从不指定值
    'consistent-this': 0, // 在捕获当前执行上下文this时强制执行一致的命名
    'constructor-super': 2, // 要求super()在构造函数中调用
    'curly': [2, 'multi-line'], // 对所有控制语句强制使用一致的大括号样式
    'default-case': 0, // 强制 switch 语句中的默认子句放在最后
    'dot-location': [2, 'property'], // 在点之前和之后强制执行一致的换行符
    'dot-notation': 0, // 尽可能强制使用点表示法
    'eol-last': 2, // 在文件末尾要求或禁止换行
    'eqeqeq': 2, // 要求使用===和!==
    'for-direction': 2, // 执行“for”循环更新子句将计数器移动到正确的方向。
    'func-names': 0, // 要求或禁止命名function表达式
    'func-style': 0, // function强制声明或表达式的一致使用
    'generator-star-spacing': [2, { 'before': true, 'after': false }], // *在生成器函数中强制运算符周围的间距一致
    'getter-return': 2, // getter必须有返回值
    'yield-star-spacing': [2, { 'before': true, 'after': false }], // 强制在 yield* 表达式中 * 周围使用空格
    'guard-for-in': 0, // 要求 for-in 循环中有一个 if 语句
    'indent': [1, 2, { 'SwitchCase': 1 }], // 强制使用一致的缩进
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'linebreak-style': 0, // 强制使用一致的换行风格
    'lines-around-comment': 0, // 要求在注释周围有空行
    'max-nested-callbacks': 0, // 强制回调函数最大嵌套深度
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }], // 要求构造函数首字母大写
    'new-parens': 2, // 强制或禁止调用无参构造函数时有圆括号
    'no-alert': 0, // 禁用 alert、confirm 和 prompt
    'no-array-constructor': 2, // 禁用 Array 构造函数
    'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
    'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
    'no-console': 0, // 禁用 console
    'no-constant-condition': 0, // 禁止在条件中使用常量表达式
    'no-continue': 0, // 禁用 continue 语句
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
    'no-debugger': 2, // 禁用 debugger
    'no-delete-var': 2, // 禁止删除变量
    'no-div-regex': 0, // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止出现重复的 case 标签
    'no-else-return': 0, // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty': 0, // 禁止出现空语句块
    'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
    'no-eq-null': 0, // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eval': 2, // 禁用 eval()
    'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2, // 禁止扩展原生类型
    'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'no-extra-parens': 0, // 禁止不必要的括号
    'no-extra-semi': 0, // 禁止不必要的分号
    'no-fallthrough': 2, // 禁止 case 语句落空
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
    'no-inline-comments': 0, // 禁止在代码后使用内联注释
    'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 2, // 禁止不规则的空白
    'no-iterator': 2, // 禁用 __iterator__ 属性
    'no-label-var': 2, // 不允许标签与变量同名
    'no-labels': 0, // 禁用标签语句
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-lonely-if': 0, // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-loop-func': 0, // 禁止在循环语句中出现包含不安全引用的函数声明
    'no-mixed-requires': 0, // 禁止混合常规变量声明和 require 调用
    'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
    'no-multi-spaces': 1, // 禁止使用多个空格
    'no-multi-str': 0, // 禁止使用多行字符串
    'no-multiple-empty-lines': [1, { 'max': 1 }], // 禁止出现多行空行
    'no-nested-ternary': 0, // 禁用嵌套的三元表达式
    'no-new': 2, // 禁止使用 new 以避免产生副作用
    'no-new-func': 0, // 禁止对 Function 对象使用 new 操作符
    'no-new-object': 2, // 禁用 Object 的构造函数
    'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2, // 禁止把全局对象作为函数调用
    'no-octal': 2, // 禁用八进制字面量
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-param-reassign': 0, // 禁止对 function 的参数进行重新赋值
    'no-path-concat': 0, // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-process-env': 0, // 禁用 process.env
    'no-process-exit': 0, // 禁用 process.exit()
    'no-proto': 0, // 禁用 __proto__ 属性
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    'no-restricted-modules': 0, // 禁用通过 require 加载的指定模块
    'no-return-assign': 2, // 禁止在 return 语句中使用赋值语句
    'no-script-url': 0, // 禁止使用 javascript: url
    'no-self-compare': 0, // 禁止自身比较
    'no-sequences': 2, // 禁用逗号操作符
    'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名
    'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
    'no-sparse-arrays': 2, // 禁用稀疏数组
    'no-sync': 0, // 禁用同步方法
    'no-ternary': 0, // 禁用三元操作符
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-throw-literal': 2, // 禁止抛出异常字面量
    'no-trailing-spaces': 1, // 禁用行尾空格
    'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef-init': 2, // 禁止将变量初始化为 undefined
    'no-undefined': 0, // 禁止将 undefined 作为标识符
    'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
    'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
    'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unused-expressions': 0, // 禁止出现未使用过的表达式
    'no-unused-vars': [1], // 禁止出现未使用过的变量
    'no-use-before-define': 0, // 禁止在变量定义之前使用它们
    'no-var': 0, // 要求使用 let 或 const 而不是 var
    'no-void': 0, // 禁用 void 操作符
    'no-warning-comments': 0, // 禁止在注释中使用特定的警告术语
    'no-with': 2, // 禁用 with 语句
    'object-curly-spacing': 0, // 强制在大括号中使用一致的空格
    'object-shorthand': 0, // 要求或禁止对象字面量中方法和属性使用简写语法
    'one-var': [2, { 'initialized': 'never' }], // 强制函数中的变量要么一起声明要么分开声明
    'operator-assignment': 0, // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }], // 强制操作符使用一致的换行符
    'padded-blocks': 0, // 要求或禁止块内填充
    'prefer-const': 0, // 要求使用 const 声明那些声明后不再被修改的变量
    'quote-props': 0, // 要求对象字面量属性名称用引号括起来
    'quotes': [2, 'single', 'avoid-escape'], // 强制使用一致的反勾号、双引号或单引号
    'radix': 2, // 强制在 parseInt() 使用基数参数
    'semi': [2, 'always'], // 要求或禁止使用分号代替 ASI
    'semi-spacing': 0, // 强制分号之前和之后使用一致的空格
    'sort-vars': 0, // 要求同一个声明块中的变量按顺序排列
    'keyword-spacing': 2, // 强制在关键字前后使用一致的空格
    'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'] }], // 强制在注释中 // 或 /* 使用一致的空格
    'strict': 0, // 要求或禁止使用严格模式指令
    'use-isnan': 2, //要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'vars-on-top': 0, // 要求所有的 var 声明出现在它们所在的作用域顶部
    'wrap-iife': [2, 'any'], // 要求 IIFE 使用括号括起来
    'wrap-regex': 0, // 要求正则表达式被括号括起来
    'yoda': [2, 'never'], // 要求或禁止 “Yoda” 条件
    'no-global-assign': 2
  };