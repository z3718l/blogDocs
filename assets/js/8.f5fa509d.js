(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{276:function(t,s,a){t.exports=a.p+"assets/img/1.b587498f.png"},339:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原始值与引用值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原始值与引用值"}},[t._v("#")]),t._v(" 原始值与引用值")]),t._v(" "),s("h2",{attrs:{id:"一、简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[t._v("#")]),t._v(" 一、简介")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("原始值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("引用值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("别称")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("简单数据类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("复杂数据类型")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined、null、boolean、 number、string、symbol")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("object")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("存储位置")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("b",[s("font",{attrs:{color:"red"}},[t._v("栈")])],1),t._v("：存储在栈中的简单数据段，他们的值直接存储在变量访问的位置。")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("b",[s("font",{attrs:{color:"red"}},[t._v("堆")])],1),t._v("：存储在堆中的对象，存储在变量处的值是一个指针，指向存储对象的内存处。")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("注意："),s("code",[t._v("typeof null")]),t._v("虽然是"),s("code",[t._v("object")]),t._v("，但是null依然是简单数据类型，并不是复杂数据类型"),s("br"),t._v("\n原因：不同的对象在底层都表现为二进制，在"),s("code",[t._v("JavaScript")]),t._v("中二进制前三位都为 "),s("strong",[t._v("0")]),t._v(" 的话，会被判断为 "),s("code",[t._v("object")]),t._v(" 类型，而"),s("code",[t._v("null")]),t._v("的二进制全是 "),s("strong",[t._v("0")]),t._v("，所以"),s("code",[t._v("typeof")]),t._v("返回的是"),s("code",[t._v("object")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这两个都表示无，但是实际类型却不一样。")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"二、栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、栈"}},[t._v("#")]),t._v(" 二、栈")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/hmohvc/smr5n4/mcpg7b",target:"_blank",rel:"noopener noreferrer"}},[t._v("栈"),s("OutboundLink")],1),t._v("是一种"),s("font",{attrs:{color:"red"}},[t._v("后进先出")]),t._v("的数据结构。")],1),t._v(" "),s("h2",{attrs:{id:"三、堆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、堆"}},[t._v("#")]),t._v(" 三、堆")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.yuque.com/hmohvc/smr5n4/gqkinh",target:"_blank",rel:"noopener noreferrer"}},[t._v("堆"),s("OutboundLink")],1),t._v("里面存的是复杂数据结构的值，指针存在栈内存中。")]),t._v(" "),s("h2",{attrs:{id:"四、示意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、示意图"}},[t._v("#")]),t._v(" 四、示意图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(276),alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"五、值的复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、值的复制"}},[t._v("#")]),t._v(" 五、值的复制")]),t._v(" "),s("p",[t._v("原始值和引用值在通过变量复制时也有所不同，原始值会被复制到一个新的变量，而引用值实际上是复制了值的指针。示例")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhangsan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "zhangsan"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("blockquote",[s("p",[t._v("当 myName 初始化为 name 时，“zhangsan”也会被复制到 myName 中，与 name 相互独立，互不干扰，可以理解为 myName 是 name 的副本。")])]),t._v(" "),s("p",[t._v("引用值的复制，实际是复制了一个指针，指向堆内存中的对象，对复制后的变量进行属性操作，实际也是操作的被复制的对象，两个变量实际上是指同一对象。示例")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" me "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" you "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" me"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lisi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("you"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "lisi"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);