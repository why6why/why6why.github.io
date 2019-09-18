(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{410:function(a,s,n){"use strict";n.r(s);var t=n(0),e=Object(t.a)({},function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"_01jsp脚本元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01jsp脚本元素","aria-hidden":"true"}},[a._v("#")]),a._v(" 01JSP脚本元素")]),a._v(" "),n("h3",{attrs:{id:"_1-1jsp脚本元素及其组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1jsp脚本元素及其组成","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1JSP脚本元素及其组成")]),a._v(" "),n("p",[a._v("在JSP中嵌入的服务端（即web后端）运行的小程序称为脚本，而JSP支持的服务端脚本语言是Java，所以"),n("strong",[a._v("这些脚本其实就是Java程序")]),a._v("。通常把脚本元素分为“表达式、声明、scriptlet”。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("graph LR\nA[长方形] -- 链接 --\x3e B((圆))\nA --\x3e C(圆角长方形)\nB --\x3e D{菱形}\nC --\x3e D\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("div",{staticClass:"language-mermaid line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("graph LR\nA(JSP脚本元素) --\x3e B(表达式)\nA --\x3e C(scriptlet)\nA --\x3e D(声明)\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("h3",{attrs:{id:"_1-2表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2表达式","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2表达式")]),a._v(" "),n("ol",[n("li",[a._v("作用：")])]),a._v(" "),n("p",[a._v("表达式是计算java表达式的值，得到的结果转化为字符串，并在jsp页面中表达式位置进行显示。Java表达式是指由操作数（变量、常量、方法）和运算符（算术运算符、比较运算符、位移运算符）组成的且符合Java语法规则的公式。")]),a._v(" "),n("p",[a._v("表达式的计算在运行时进行（即JSP页面被请求时），因此在表达式中可以访问与请求有关的全部信息，其中与请求有关的信息被封装在request隐式对象中。")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("语法格式")]),a._v(" "),n("blockquote",[n("p",[a._v("<%= Java表达式 %>")])]),a._v(" "),n("ul",[n("li",[a._v('"<%=" 和 "%>"符号中间不能有空格。')]),a._v(" "),n("li",[a._v("不可以插入语句。")]),a._v(" "),n("li",[a._v("表达式必须能求值。")])])]),a._v(" "),n("li",[n("p",[a._v("实例：")]),a._v(" "),n("div",{staticClass:"language-jsp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n  <head>\n    <title>Title</title>\n  </head>\n  <body>\n  <%=3+3%>\n  </body>\n</html>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])])])]),a._v(" "),n("h3",{attrs:{id:"_1-3scriptlet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3scriptlet","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.3Scriptlet")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("作用")]),a._v(" "),n("p",[a._v("Scriptlet就是在JSP页面中嵌入一段有效的Java程序段，此程序段可以是变量的声明、方法的调用。")])]),a._v(" "),n("li",[n("p",[a._v("格式")]),a._v(" "),n("blockquote",[n("p",[a._v("<%= Java表达式 %>")])]),a._v(" "),n("ul",[n("li",[a._v('"<%" 和 "%>"符号中间不能有空格。')]),a._v(" "),n("li",[a._v('"<%" 和 "%>"中除了不能定义类和方法，不能用import引入类外，可以包含任何有效的Java代码、可以定义变量、调用方法和进行各种表达式运算。')]),a._v(" "),n("li",[a._v("Scriptlet中定义的变量在当前的整个页面内都有效，但不会被其他的线程共享。")])])]),a._v(" "),n("li",[n("p",[a._v("实例")]),a._v(" "),n("div",{staticClass:"language-jsp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n  <title>数字逐层递加</title>\n</head>\n<body>\n<%\n  for(int i = 1;i<10;i++){\n    for(int j=1;j<=i;j++){\n%>\n<%=j%>\n<%\n  }\n%>\n<%="</br>"%>\n<%\n  }\n%>\n</body>\n</html>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br")])]),n("div",{staticClass:"language-jsp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n  <title>显示当前系统时间</title>\n</head>\n<body>\n<%\n  for(int i = 1;i<10;i++){\n    for(int j=1;j<=i;j++){\n%>\n<%=j%>\n<%\n  }\n%>\n<%="</br>"%>\n<%\n  }\n%>\n</body>\n</html>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br")])])])]),a._v(" "),n("h3",{attrs:{id:"_1-4声明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4声明","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.4声明")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("作用")]),a._v(" "),n("p",[a._v("声明就是在JPS页中声明Java方法或变量等，用于定义JPS代表的Servlet类的成员变量和方法。")])]),a._v(" "),n("li",[n("p",[a._v("格式")]),a._v(" "),n("blockquote",[n("p",[a._v("<%!  Java表达式  %>")])]),a._v(" "),n("ul",[n("li",[a._v('"<%" 和 "%>"符号中间不能有空格。')]),a._v(" "),n("li",[a._v('"<%" 和 "%>"中除了不能定义类和方法，不能用import引入类外，可以包含任何有效的Java代码、可以定义变量、调用方法和进行各种表达式运算。')]),a._v(" "),n("li",[a._v("在页面中声明的变量和方法在当前的整个页面内都有效，而且它们会被多个线程所共享。")])])]),a._v(" "),n("li",[n("p",[a._v("实例")]),a._v(" "),n("div",{staticClass:"language-jsp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n  <title>Title</title>\n</head>\n<%!\n  int num = 3;\n  public String sayHello(String name){\n    return "Hello" + name + "!";\n  }\n%>\n<body>\n<%=num%>\n<%=sayHello("Tony")%>\n</body>\n</html>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br")])])])]),a._v(" "),n("h3",{attrs:{id:"_1-5思考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5思考","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.5思考")]),a._v(" "),n("p",[a._v("JSP声明和JSP Scriptlet的区别？")]),a._v(" "),n("div",{staticClass:"language-jsp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<html>\n<head>\n  <title>Title</title>\n</head>\n<body>\n<%!\n  int count1 = 1;\n%>\n<%\n  int count2 = 2;\n%>\ncount1==<%=count1++%><br>\ncount2==<%=count2++%>\n</body>\n</html>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br")])]),n("p",[a._v("根据页面显示效果得知count1的值每次刷新进行累加，而count2的值始终为1。原因是count1是java类的成员变量，被多个线程所共享；count2是方法的局部变量，不能被线程共享。")]),a._v(" "),n("h2",{attrs:{id:"_02jsp指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02jsp指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 02JSP指令")]),a._v(" "),n("p",[a._v("2.1 概念和分类")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("概念")]),a._v(" "),n("p",[a._v("JSP指令相当于在编译期间的命令，用来设置与整个JSP页面相关的属性，它并不产生任何可见的输出，用来设置全局变量、声明类、要实现的方法和输出内容的类型等。")])]),a._v(" "),n("li",[n("p",[a._v("分类")]),a._v(" "),n("p",[a._v("3种，page指令、include指令、taglib指令。")]),a._v(" "),n("div",{staticClass:"language-mermaid line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("graph LR\nA:(JSP指令) --\x3e B:(page指令)\nA: --\x3e C:(include指令)\nA: --\x3e D:(taglib指令)\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])])]),a._v(" "),n("li",[n("p",[a._v("语法：")]),a._v(" "),n("p",[a._v("写法一：")]),a._v(" "),n("blockquote",[n("p",[a._v('<%@ 指令名称 属性1 = "属性值1" 属性2 = "属性值2" …… 属性n = "属性值n" %>')])]),a._v(" "),n("p",[a._v("写法二：")]),a._v(" "),n("blockquote",[n("p",[a._v('<%@ 指令名称 属性1 = "属性值1"  %>\n<%@ 指令名称 属性2 = "属性值2"  %>\n<%@ 指令名称 属性n = "属性值n"  %>')])])]),a._v(" "),n("li",[n("p",[a._v("说明")]),a._v(" "),n("p",[a._v("属性值两边的双引号可以用单引号代替，但不能省略。如果要在属性值中使用引号，则在要在他们之前加反斜杠“\\”。")])])]),a._v(" "),n("h3",{attrs:{id:"_2-2page指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2page指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2page指令")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("概念")]),a._v(" "),n("p",[a._v("page指令即页面指令，用来定义整个JSP页面的一些属性和这些属性的值。page指令可以定义MIME类型、定义需要导入的包、错误页的制定、页面编码、脚本语言等。")]),a._v(" "),n("ul",[n("li",[a._v("格式一：")]),a._v(" "),n("li",[a._v("格式二：")])]),a._v(" "),n("p",[n("strong",[a._v("page指令")]),a._v("的作用对整个JSP页面有效，"),n("strong",[a._v("与其书写位置无关")]),a._v("，可以放在文档中的任何地方，但通常把page指令放在JSP页面的最前面。")])]),a._v(" "),n("li",[n("p",[a._v("实例")])])]),a._v(" "),n("h3",{attrs:{id:"_2-3include指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3include指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3include指令")]),a._v(" "),n("ol",[n("li",[a._v("概念")]),a._v(" "),n("li",[a._v("实例")])]),a._v(" "),n("h3",{attrs:{id:"_2-4taglib指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4taglib指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4taglib指令")]),a._v(" "),n("ol",[n("li",[a._v("概念")]),a._v(" "),n("li",[a._v("自定义")]),a._v(" "),n("li",[a._v("标准定义")]),a._v(" "),n("li",[a._v("实例")])])])},[],!1,null,null,null);s.default=e.exports}}]);