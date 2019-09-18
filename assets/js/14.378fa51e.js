(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(s,n,a){s.exports=a.p+"assets/img/08shuju.868c3f29.png"},263:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"数据完整性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据完整性","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据完整性")]),s._v(" "),e("p",[e("img",{attrs:{src:a(216),alt:"08数据完整性"}})]),s._v(" "),e("p",[s._v("域完整性和实体完整性在之前的内容中都已经涵盖了，自定义完整性为了解内容。下面重点说明一下引用完整性，外键。")]),s._v(" "),e("h2",{attrs:{id:"引用完整性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用完整性","aria-hidden":"true"}},[s._v("#")]),s._v(" 引用完整性")]),s._v(" "),e("p",[s._v("如果有两个表，都有主键，且两者的主键是公共字段，从表的主键是主表的外键。"),e("strong",[s._v("只有innodb引擎能创建外键，myisam等引擎不支持外键")])]),s._v(" "),e("ol",[e("li",[s._v("外键约束的特点\n"),e("ol",[e("li",[s._v("主表中没有的，从表中不允许插入。")]),s._v(" "),e("li",[s._v("从表中有的，主表不允许删除。")]),s._v(" "),e("li",[s._v("不能改主表中的值，而导致从表孤立存在。")]),s._v(" "),e("li",[s._v("先删从表，才能删主表。")])])]),s._v(" "),e("li",[s._v("外键（foreign key）\n"),e("ol",[e("li",[e("strong",[s._v("外键是从表中的公共字段，公共字段名字可以不一样，但是数据类型必须一样。")])]),s._v(" "),e("li",[s._v("外键约束用来保证引用完整性。")])])]),s._v(" "),e("li",[e("strong",[s._v("外键的创建，添加和删除")]),s._v(" "),e("ol",[e("li",[s._v("建表时添加外键：使用语句 "),e("code",[s._v("foreign key (从表要添加外键的字段名) references 主表名(主表字段名)")]),s._v("。")]),s._v(" "),e("li",[s._v("修改表时添加外键： "),e("code",[s._v("altre table 从表表名 add foreign key (从表字段名) references 主表名 (主表字段名);")])]),s._v(" "),e("li",[s._v("通过外键名(使用查询创建表的语句查看外键名)删除外键："),e("code",[s._v("alter table 从表表名 drop foreign key 外键名;")]),s._v("。")])])])]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/*\n\t创建外键\n*/\n# 创建主表,学生信息(student inforence)表\ncreate table stuinf(\n\tid int,\n\tstuid char(11) not null primary key, # 必须是主键\n\tname varchar(10)\n);\n# 创建从表，学生分数(student score)表\ncreate table stusco(\n\tstuid char(11) not null,\n\tscore decimal(4,1),\n\tforeign key (stuid) references stuinf(stuid) #添加外键，通过两个表的stuid建立联系\n);\n/*\n\t添加外键\n*/\n# 创建主表,学生信息(student inforence)表\ncreate table stuinf(\n\tid int,\n\tstuid char(11) not null primary key,\n\tname varchar(10)\n);\n# 创建从表，学生分数(student score)表\ncreate table stusco(\n\tstuid char(11) not null,\n\tscore decimal(4,1),\n);\n# 添加外键\nalter table stusco add foreign key(stuid) reference stuinf(stuid);\n/*\n\t删除外键\n*/\nalter table stusco drop foreign key 外键名;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br")])]),e("h2",{attrs:{id:"外键操作-了解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外键操作-了解","aria-hidden":"true"}},[s._v("#")]),s._v(" 外键操作(了解)")]),s._v(" "),e("ol",[e("li",[s._v("严格操作，以上讲的都是严格操作。")]),s._v(" "),e("li",[s._v("置空操作(set null)；如果主表记录删除或更新，从表置空。")]),s._v(" "),e("li",[s._v("级联操作(cascade)；如果主表记录删除或更新，从表级联。")])]),s._v(" "),e("p",[s._v("一般来说，主表某数据删除时，从表对应数据置空；主表数据更新时，从表对应数据级联。")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 语法\nforeign key (外键) references 主表(关键字段) [主表删除时的动作] [主表数据更新时的动作];\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("例子：")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建主表\ncreate table stuinf(\n\tstuno char(4) primary key,\n\tname varchar(10) not null\n);\n# 从表\ncreate table stusco(\n\tstuid char(4),  # 不能做主键，否则无法置空\n\tscore tinyint unsigned,\n\tforeign key (stuid) references stuinf(stuno) on delete ste null on update cascade\n);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("这样，如果你改动了主表中的某些数据，从表也会发生相应的改变。")]),s._v(" "),e("h2",{attrs:{id:"保证实体完整性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保证实体完整性","aria-hidden":"true"}},[s._v("#")]),s._v(" 保证实体完整性")]),s._v(" "),e("ol",[e("li",[s._v("主键约束")]),s._v(" "),e("li",[s._v("唯一约束")]),s._v(" "),e("li",[s._v("自动增长")])]),s._v(" "),e("h2",{attrs:{id:"保证域完整性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保证域完整性","aria-hidden":"true"}},[s._v("#")]),s._v(" 保证域完整性")]),s._v(" "),e("ol",[e("li",[s._v("数据类型约束")]),s._v(" "),e("li",[s._v("非空类型约束")]),s._v(" "),e("li",[s._v("默认值约束")])]),s._v(" "),e("h2",{attrs:{id:"保证引用完整性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保证引用完整性","aria-hidden":"true"}},[s._v("#")]),s._v(" 保证引用完整性")]),s._v(" "),e("ul",[e("li",[s._v("外键约束，从表中的公共字段是主表中的外键。")])]),s._v(" "),e("h2",{attrs:{id:"保证自定义完整性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保证自定义完整性","aria-hidden":"true"}},[s._v("#")]),s._v(" 保证自定义完整性")]),s._v(" "),e("ol",[e("li",[s._v("存储过程")]),s._v(" "),e("li",[s._v("触发器")])])])},[],!1,null,null,null);n.default=t.exports}}]);