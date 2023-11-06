(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{316:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原型与原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链"}},[t._v("#")]),t._v(" 原型与原型链")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("原型、原型链一直都是JS的重难点，其中牵扯的概念多，关系乱，死记硬背根本记不住，我也是学了忘，忘了学😂。这是我参考各种资料并结合自己的理解整理的原型与原型链的学习，希望能帮到大家。")]),t._v(" "),s("h2",{attrs:{id:"一、为什么会有原型和原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么会有原型和原型链"}},[t._v("#")]),t._v(" 一、为什么会有原型和原型链")]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[s("b",[t._v("原型：")])])],1),t._v(" "),s("ol",[s("li",[t._v("为了数据共享，节约内存空间")]),t._v(" "),s("li",[t._v("为了实现继承")])]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[s("b",[t._v("原型链：")])]),t._v("\n其实就是实例化的对象访问一个属性的查找链路。")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("JS设计之初为了实现继承，所以有了原型"),s("br"),t._v("\n实例化对象访问一个属性的查找过程就是原型链")])]),t._v(" "),s("h2",{attrs:{id:"二、前置知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、前置知识"}},[t._v("#")]),t._v(" 二、前置知识")]),t._v(" "),s("ol",[s("li",[t._v("对象是函数创建的， 函数也是一种对象")]),t._v(" "),s("li",[t._v("Object、Function、Array等都是JS的内置函数 "),s("code",[t._v("typeof Object")]),t._v(" 是 'function'")]),t._v(" "),s("li",[s("code",[t._v("__proto__")]),t._v("、 "),s("code",[t._v("constructor")]),t._v("属性是对象所独有的；")]),t._v(" "),s("li",[t._v("prototype属性是函数独有的；")]),t._v(" "),s("li",[t._v("上面说过js中函数也是对象的一种，那么函数同样也有属性"),s("code",[t._v("__proto__")]),t._v("、 "),s("code",[t._v("constructor")]),t._v("；")]),t._v(" "),s("li",[t._v("函数与构造函数的区别\n"),s("ul",[s("li",[t._v("任何函数都可以作为构造函数")]),t._v(" "),s("li",[t._v("但是并不能将任意函数叫做【构造函数】")]),t._v(" "),s("li",[t._v("只有当一个函数通过new关键字调用的时候才可以成为构造函数")])])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Parent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个函数，那它只是一个普通的函数，下面我们让这个函数变得不普通")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这时这个Parent就不是普通的函数了，它现在是一个构造函数。因为通过new关键字调用了它")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建了一个Parent构造函数的实例 p1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"三、prototype属性-原型属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、prototype属性-原型属性"}},[t._v("#")]),t._v(" 三、prototype属性（原型属性）")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("模拟场景：父类当做师父，子类当做徒弟。师父收徒弟，徒弟还可以收徒弟。徒弟可以得到师父传授的武功，然后徒弟再传给自己的徒弟。师父想要传授给徒弟们的武功就放到"),s("code",[t._v("prototype")]),t._v("这个密室中。徒弟徒孙们就去这里学习武功。")]),t._v(" "),s("p",[s("code",[t._v("prototype")]),t._v("属性可以看成是一块特殊的存储空间，存储了供“徒弟”、“徒孙”们使用的方法和属性。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);