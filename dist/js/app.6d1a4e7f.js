(function(t){function e(e){for(var r,n,l=e[0],i=e[1],c=e[2],u=0,d=[];u<l.length;u++)n=l[u],o[n]&&d.push(o[n][0]),o[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o={app:0},s=[];function l(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-60178df8":"b579a0fd","chunk-6bf4579e":"e8f1edf3","chunk-6e103abf":"c19eb489","chunk-8c480d48":"b2e2f9bc","chunk-9b604784":"cc335c9c"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-60178df8":1,"chunk-6bf4579e":1,"chunk-6e103abf":1,"chunk-8c480d48":1,"chunk-9b604784":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-60178df8":"fa1cb3c4","chunk-6bf4579e":"6d2fb1a1","chunk-6e103abf":"ababbf45","chunk-8c480d48":"8d69bc63","chunk-9b604784":"49a7b144"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],f.parentNode.removeChild(f),a(s)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){n[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,a){r=o[t]=[e,a]});e.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");s.type=r,s.request=n,a[1](s)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01fc":function(t,e,a){"use strict";var r=a("3c5c"),n=a.n(r);e["default"]=n.a},"0b89":function(t,e,a){},"365c":function(t,e,a){"use strict";var r=a("6f9c"),n=a.n(r);n.a},"3c5c":function(t,e){},4112:function(t,e,a){"use strict";var r=a("680a"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s=a("2877"),l={},i=Object(s["a"])(l,n,o,!1,null,null,null),c=i.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"layout-default"},[a("el-header",{attrs:{height:""}},[a("index-header")],1),a("el-main",[a("router-view")],1),a("el-footer",{attrs:{height:""}},[a("m-footer")],1)],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("el-row",[a("top-bar")],1),a("el-row",[a("search-bar")],1)],1)},p=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"top-bar"},[a("el-col",{attrs:{span:10}},[a("geo")],1),a("el-col",{attrs:{span:14}},[a("m-nav")],1)],1)},_=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-geo"},[a("div",{staticClass:"city"},[a("i",{staticClass:"el-icon-location"}),a("span",{staticClass:"current-city"},[t._v(t._s(t.city))]),a("router-link",{staticClass:"change-city",attrs:{to:{name:"changeCity"}}},[t._v("切换城市")]),a("div",{staticClass:"near-city"},[t._v("\n            [\n            "),t._l(t.nearCity,function(e){return a("router-link",{attrs:{to:{name:"index",params:{name:e},query:{name:e}}}},[t._v("\n                "+t._s(e)+"\n            ")])}),t._v("\n            ]\n        ")],2)],1),a("div",{staticClass:"user-enter"},[a("router-link",{staticClass:"login",attrs:{to:"/"}},[t._v("立即登录")]),a("router-link",{staticClass:"register",attrs:{to:"/"}},[t._v("注册")])],1)])},b=[],g={name:"geo",data:function(){return{}},computed:{city:function(){return this.$store.state.userInfo.city},nearCity:function(){return["大厂回族","自治县","门头沟"]}}},k=g,w=(a("7c18"),Object(s["a"])(k,v,b,!1,null,"50a73100",null)),y=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-nav"},[a("ul",[a("li",{staticClass:"list"},[a("router-link",{attrs:{to:"/"}},[t._v("我的美团")]),a("dl",[a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的订单")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的收藏")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("抵用券")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("账户设置")])],1)])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("手机APP")])],1),a("li",{staticClass:"list bd"},[t._v("\n            商家中心\n            "),a("dl",[a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("登录商家中心")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("美团智能收银")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我想合作")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("账户设置")])],1)])]),a("li",{staticClass:"site"},[t._v("\n            网站导航\n            "),a("div",{staticClass:"subContainer"},[a("dl",{staticClass:"hotel"},[a("dt",[t._v("酒店旅游")]),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的订单")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的收藏")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("抵用券")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("账户设置")])],1)]),a("dl",{staticClass:"food"},[a("dt",[t._v("吃美食")]),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的订单")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的收藏")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("抵用券")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("账户设置")])],1)]),a("dl",{staticClass:"movie"},[a("dt",[t._v("看电影")]),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的订单")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("我的收藏")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("抵用券")])],1),a("dd",[a("router-link",{attrs:{to:{path:"/"}}},[t._v("账户设置")])],1)]),t._m(0)])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dl",{staticClass:"app"},[a("dt",[t._v("手机应用")]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png",title:"美团app",alt:"美团app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png",title:"美团app",alt:"美团app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png",title:"美团app",alt:"美团app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png",title:"美团app",alt:"美团app"}})]),a("dd",[a("img",{staticClass:"appicon",attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png",title:"美团app",alt:"美团app"}})])])}],j={name:"m-nav"},S=j,E=(a("365c"),Object(s["a"])(S,C,x,!1,null,"771d363d",null)),O=E.exports,P={name:"topBar",components:{MNav:O,Geo:y}},F=P,$=(a("4112"),Object(s["a"])(F,m,_,!1,null,"7539bf06",null)),q=$.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-bar"},[a("el-row",[a("el-col",{staticClass:"m-logo",attrs:{span:3}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png",alt:"美团"}})])],1),a("el-col",{staticClass:"search-content",attrs:{span:15}},[a("div",{staticClass:"search-input"},[a("el-input",{attrs:{placeholder:"搜索商家或地点",value:t.search},on:{focus:t.changeFocus,blur:t.changeFocus,input:t.updateSearch}},[a("el-button",{staticClass:"search-btn",attrs:{slot:"append",type:"primary",icon:"el-icon-search"},slot:"append"})],1),a("dl",{directives:[{name:"show",rawName:"v-show",value:t.ifInputFocus&&!t.search,expression:"ifInputFocus && !search"}],staticClass:"hot-search"},[a("dt",[t._v("热门搜索")]),t._l(t.hotSearch,function(e,r){return a("dd",{key:r},[a("router-link",{attrs:{to:{name:"search",query:{s:e}}}},[t._v(t._s(e))])],1)})],2),a("dl",{directives:[{name:"show",rawName:"v-show",value:t.ifInputFocus&&t.search,expression:"ifInputFocus && search"}],staticClass:"search-sug"},t._l(t.hotSearch,function(e,r){return a("dd",{key:r},[a("router-link",{attrs:{to:{name:"search",query:{s:e}}}},[t._v(t._s(e))])],1)}),0)],1),a("p",{staticClass:"suggest"},[a("router-link",{attrs:{to:{name:"search",query:{s:"北京欢乐谷"}}}},[t._v(" 北京欢乐谷")]),a("router-link",{attrs:{to:{name:"search",query:{s:"尚隐·泉都市生活馆"}}}},[t._v(" 尚隐·泉都市生活馆")]),a("router-link",{attrs:{to:{name:"search",query:{s:"故宫珍宝馆"}}}},[t._v("故宫珍宝馆")]),a("router-link",{attrs:{to:{name:"search",query:{s:"北京连升商务酒店"}}}},[t._v("北京连升商务酒店")])],1)])],1)],1)},T=[],B=(a("386d"),{name:"searchBar",data:function(){return{hotSearch:["故宫博物院","北京欢乐谷","故宫珍宝馆","尚隐·泉都市生活馆","八达岭长城","北京连升商务酒店"],searchSug:[],ifInputFocus:!1}},computed:{search:function(){return this.$store.state.search.searchWord}},methods:{changeFocus:function(){var t=this;setTimeout(function(){t.ifInputFocus=!t.ifInputFocus},100)},updateSearch:function(t){this.$store.commit("search/setSearch",{search:t})}}}),z=B,A=(a("c883"),Object(s["a"])(z,I,T,!1,null,null,null)),N=A.exports,M={name:"index",components:{SearchBar:N,TopBar:q},comments:{TopBar:q,SearchBar:N}},L=M,W=(a("56db"),Object(s["a"])(L,h,p,!1,null,"6bef768e",null)),D=W.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-content"},[a("div",{staticClass:"footer-link"},[a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("用户帮助")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/help/selfservice",target:"_blank"}},[t._v("申请退款")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/help/selfservice?tab=2",target:"_blank"}},[t._v("查看美团券密码")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/help/faq",target:"_blank"}},[t._v("常见问题")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/rules-detail/4",target:"_blank"}},[t._v("用户协议")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/rules-detail/2",target:"_blank"}},[t._v("隐私政策")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.meituan.com/about/anticheat",target:"_blank"}},[t._v("反诈骗公告")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/customer-rights",target:"_blank"}},[t._v("消费者权益保障")])])]),a("dl",[a("dt",[t._v("美团服务")]),a("dd",[a("a",{attrs:{href:"http://waimai.meituan.com/",target:"_blank"}},[t._v("美团外卖")])]),a("dd",[a("a",{attrs:{href:"http://hotel.meituan.com/",target:"_blank"}},[t._v("美团酒店")])]),a("dd",[a("a",{attrs:{href:"http://maoyan.com/",target:"_blank"}},[t._v("猫眼电影")])]),a("dd",[a("a",{attrs:{href:"https://peisong.meituan.com/",target:"_blank"}},[t._v("美团配送")])]),a("dd",[a("a",{attrs:{href:"https://www.mtyun.com/",target:"_blank"}},[t._v("美团云")])]),a("dd",[a("a",{attrs:{href:"http://www.dianping.com/",target:"_blank"}},[t._v("大众点评")])]),a("dd",[a("a",{attrs:{href:"https://phoenix.meituan.com/",target:"_blank"}},[t._v("榛果民宿")])]),a("dd",[a("a",{attrs:{href:"https://mad.meituan.com",target:"_blank"}},[t._v("无人配送")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("商家合作")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://ecom.meituan.com/bizsettle/settle?utm_source=mt_C_my",target:"_blank"}},[t._v("美食商家入驻(非外卖)")])]),a("dd",[a("a",{attrs:{href:"https://kd.meituan.com/",target:"_blank"}},[t._v("美团外卖开店申请")])]),a("dd",[a("a",{attrs:{href:"http://shouyin.meituan.com?utm_source=inner&utm_medium=mtpc",target:"_blank"}},[t._v("美团收银官网")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://page.peisong.meituan.com/apply/join",target:"_blank"}},[t._v("外卖配送加盟申请")])]),a("dd",[a("a",{attrs:{href:"https://xue.meituan.com/?from=mtpc",target:"_blank"}},[t._v("美团点评餐饮学院")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://ruzhu.meituan.com/ruzhu/index.html",target:"_blank"}},[t._v("酒店商家入驻")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://i.meituan.com/awp/h5/trip/business/cooperation/index.html?client=pc",target:"_blank"}},[t._v("境内度假商家入驻")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://e.dianping.com/claimcpc/page/index?source=mt",target:"_blank"}},[t._v("综合商家入驻")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://phoenix.meituan.com/about/",target:"_blank"}},[t._v("榛果民宿房东商家入驻")])]),a("dd",[a("a",{attrs:{href:"http://pc.meituan.com/?activity_code=mtpcdb",target:"_blank"}},[t._v("商家开票申请")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://h5.youzan.com/v2/feature/nALm22bkFF?dc_ps=2039811416638097413.200001",target:"_blank"}},[t._v("美团点评智能收银机")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://developer.meituan.com/",target:"_blank"}},[t._v("聚宝盆餐饮开放平台")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://recommend-zc.meituan.com/opportunity?channel=1",target:"_blank"}},[t._v("美团点评收单")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://paidui.meituan.com/?activity_code=167_00038050",target:"_blank"}},[t._v("免费使用美团排队")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html",target:"_blank"}},[t._v("快驴进货商家合作")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://shangou.meituan.com/joinin",target:"_blank"}},[t._v("美团闪购商家入驻")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("代理商加盟")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://mfe.waimai.meituan.com/mfepro/client-h5/#/login",target:"_blank"}},[t._v("美团外卖代理商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://daili.meituan.com/?comeFrom=mtwebBusinesscoopd",target:"_blank"}},[t._v("到店餐饮代理商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://www.dianping.com/apollo/agent/index?source=mtpcd",target:"_blank"}},[t._v("非餐饮代理商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://union.meituan.com/",target:"_blank"}},[t._v("美团联盟")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://store.meituan.com/distribution/broadcast",target:"_blank"}},[t._v("美团收银招募线上分销商")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://agent.meituan.com/zhaoshang?entry=5",target:"_blank"}},[t._v("美团点评5S服务商招募")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://i.meituan.com/awp/hfe/block/index.html?cube_h=62493758737055c4373c&cube_i=37498",target:"_blank"}},[t._v("美团收单渠道代理商招募")])])]),a("dl",[a("dt",[t._v("美团规则")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/",target:"_blank"}},[t._v("规则中心")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/rules",target:"_blank"}},[t._v("规则目录")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://rules-center.meituan.com/advices",target:"_blank"}},[t._v("规则评议院")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("关注美团")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://weibo.com/meituan",target:"_blank"}},[t._v("美团新浪微博")])])]),a("dl",[a("dt",[t._v("公司信息")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://about.meituan.com/",target:"_blank"}},[t._v("关于我们")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://about.meituan.com/investor.html",target:"_blank"}},[t._v("投资者关系")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"http://zhaopin.meituan.com/",target:"_blank"}},[t._v("加入我们")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://dpapp-appeal.meituan.com/#/shopCreditRegulationPC",target:"_blank"}},[t._v("商户诚信公约及管理办法")])]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"https://i.meituan.com/awp/ffe/insurance-website/index.html#/",target:"_blank"}},[t._v("保险经纪资质")])])]),a("dl",[a("dt",[t._v("廉正举报")]),a("dd",[a("a",{attrs:{rel:"nofollow",href:"mailto:lianzheng@meituan.com",target:"_self"}},[t._v("廉政邮箱")])])])]),a("div",{staticClass:"footer-column"},[a("dl",[a("dt",[t._v("消费者服务热线")]),a("dd",[t._v("外卖消费者："),a("a",{attrs:{rel:"nofollow",href:"tel:10109777",target:"_blank"}},[t._v("10109777")])]),a("dd",[t._v("猫眼消费者："),a("a",{attrs:{rel:"nofollow",href:"tel:10105335",target:"_blank"}},[t._v("10105335")])]),a("dd",[t._v("其他消费者："),a("a",{attrs:{rel:"nofollow",href:"tel:10107888",target:"_blank"}},[t._v("10107888")])])]),a("dl",[a("dt",[t._v("商家服务热线")]),a("dd",[t._v("外卖&餐饮商家："),a("a",{attrs:{rel:"nofollow",href:"tel:10105557",target:"_blank"}},[t._v("10105557")])]),a("dd",[t._v("休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家："),a("a",{attrs:{rel:"nofollow",href:"tel:10100107",target:"_blank"}},[t._v("10100107")])])]),a("dl",[a("dt",[t._v("投诉举报热线")]),a("dd",[t._v("违法和不良信息举报电话："),a("a",{attrs:{rel:"nofollow",href:"tel:4006018900",target:"_blank"}},[t._v("4006018900")])]),a("dd",[t._v("举报邮箱："),a("a",{attrs:{rel:"nofollow",href:"mailto:tousujubao@meituan.com",target:"_self"}},[t._v("tousujubao@meituan.com")])])]),a("dl",[a("dt",[a("a",{attrs:{rel:"nofollow",href:"https://ecom.meituan.com/bizsettle/settle/merchantsSettle",target:"_blank"}},[t._v("商家自助入驻美团入口")])])])])]),a("div",{staticClass:"footer-copyright"},[a("div",{staticClass:"footer-copyright-left"},[a("p",[t._v("©美团网团购 meituan.com"),a("a",{staticStyle:{"margin-left":"20px"},attrs:{href:"http://www.beian.miit.gov.cn/"}},[t._v("京ICP证070791号")]),a("a",{attrs:{href:"http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"}},[t._v("京ICP备10211739号")])]),a("p",[a("a",{attrs:{href:"https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/tv",target:"_blank"}},[t._v("广播电视节目制作经营许可证（京）字第03889号")])]),a("p",[a("a",{attrs:{href:"https://portal-portm.meituan.com/webpc/protocolmanage/foodlicense",target:"_blank"}},[t._v("食品经营许可证")]),a("a",{attrs:{href:"https://portal-portm.meituan.com/webpc/protocolmanage/medicalcertificate",target:"_blank"}},[t._v("互联网药品信息服务资格证")])]),a("p",[a("a",{attrs:{href:"http://portal-portm.meituan.com/webpc/protocolmanage/medicalapparatus",target:"_blank"}},[t._v("医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号")])])]),a("div",{staticClass:"footer-copyright-right"},[a("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545",target:"_blank"}},[t._v("京公网安备11010502025545号")]),a("div",{staticClass:"footer-copyright-cert"},[a("a",{staticClass:"sp-ft sp-ft--record",attrs:{href:"https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/sankuai",title:"备案信息",target:"_blank"}},[t._v("备案信息")]),a("a",{staticClass:"sp-ft sp-ft--knet",attrs:{href:"http://t.knet.cn/index_new.jsp",title:"可信网站认证",target:"_blank"}},[t._v("可信网站")]),a("a",{staticClass:"sp-ft sp-ft--12315",attrs:{href:"http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq",title:"12315消费争议",target:"_blank"}},[t._v("12315消费争议")])])])])])}],G={name:"m-footer"},K=G,R=(a("ea59"),Object(s["a"])(K,H,J,!1,null,null,null)),U=R.exports,Q={components:{IndexHeader:D,MFooter:U}},V=Q,X=(a("ee33"),Object(s["a"])(V,d,f,!1,null,null,null)),Y=X.exports,Z=a("6204");r["default"].use(u["a"]);var tt=new u["a"]({base:"",routes:[{path:"/",name:"default",component:Y,redirect:"/index",children:[{path:"/index",name:"index",component:function(){return Promise.all([a.e("chunk-6e103abf"),a.e("chunk-9b604784")]).then(a.bind(null,"1e4b"))}},{path:"/changecity",name:"changeCity",component:function(){return a.e("chunk-6bf4579e").then(a.bind(null,"a424"))}},{path:"/s",name:"search",component:function(){return a.e("chunk-60178df8").then(a.bind(null,"4e22"))}}]},{path:"/blank",name:"blank",component:Z["default"]},{path:"/test",name:"test",component:function(){return Promise.all([a.e("chunk-6e103abf"),a.e("chunk-8c480d48")]).then(a.bind(null,"2762"))}}]}),et=a("2f62"),at={city:"北京",historyCity:[]},rt={},nt={},ot={setCity:function(t,e){var a=e.city;if(a&&a!==t.city){t.city=a;for(var r=0,n=t.historyCity.length;r<n;r++)if(t.historyCity[r]===a){t.historyCity.splice(r,1);break}t.historyCity.unshift(a),t.historyCity.splice(11)}}},st={namespaced:!0,state:at,getters:rt,actions:nt,mutations:ot},lt=(a("7f7f"),a("ac6a"),a("5df3"),a("f400"),{searchCategory:{key:0,data:new Map},searchWord:""}),it={},ct={},ut={addSearch:function(t,e){var a=e.search;t.searchCategory.data.set(a.name,a),t.searchCategory.key++},setSearch:function(t,e){var a=e.search;t.searchWord=a}},dt={namespaced:!0,state:lt,getters:it,actions:ct,mutations:ut};r["default"].use(et["a"]);var ft=new et["a"].Store({state:{},mutations:{},actions:{},modules:{userInfo:st,search:dt}}),ht=a("5c96"),pt=a.n(ht);a("0fae"),a("5aea");r["default"].use(pt.a),r["default"].config.productionTip=!1,new r["default"]({router:tt,store:ft,render:function(t){return t(c)}}).$mount("#app")},"56db":function(t,e,a){"use strict";var r=a("0b89"),n=a.n(r);n.a},"5aea":function(t,e,a){},"5d47":function(t,e,a){},6204:function(t,e,a){"use strict";var r=a("66b9"),n=a("01fc"),o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"66b9":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-blank"},[t._v("\n    blank\n")])},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},"680a":function(t,e,a){},"6f9c":function(t,e,a){},"7c18":function(t,e,a){"use strict";var r=a("b663"),n=a.n(r);n.a},b278:function(t,e,a){},b663:function(t,e,a){},c883:function(t,e,a){"use strict";var r=a("b278"),n=a.n(r);n.a},d192:function(t,e,a){},ea59:function(t,e,a){"use strict";var r=a("d192"),n=a.n(r);n.a},ee33:function(t,e,a){"use strict";var r=a("5d47"),n=a.n(r);n.a}});
//# sourceMappingURL=app.6d1a4e7f.js.map