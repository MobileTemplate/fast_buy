require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{40:function(e,t,n){"use strict";var s=i(n(1)),a=i(n(41));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(a.default))},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(43),a=n.n(s),i=n(44),o=!1;var r=function(e){o||n(42)},c=n(0)(a.a,i.a,r,null,null);c.options.__file="Users/taosiyuan/React/UniAppTP/pages/userinfo/userinfo.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] userinfo.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},42:function(e,t){},43:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{userinfo:{},orderTypeLise:[{name:"待付款",icon:"l1.png",badge:1},{name:"待发货",icon:"l2.png",badge:2},{name:"待收货",icon:"l3.png",badge:6},{name:"待评价",icon:"l4.png",badge:9},{name:"退换货",icon:"l5.png",badge:0}],severList:[[{name:"我的收藏",icon:"point.png"},{name:"优惠券",icon:"quan.png"},{name:"红包",icon:"momey.png"},{name:"任务",icon:"renw.png"}],[{name:"积分明细",icon:"mingxi.png"},{name:"抽奖",icon:"choujiang.png"},{name:"收货地址",icon:"addr.png"},{name:"银行卡",icon:"bank.png"},{name:"安全中心",icon:"security.png"},{name:"在线客服",icon:"kefu.png"}]]}},onLoad:function(){this.init()},methods:{init:function(){this.userinfo={face:"../../static/HM-PersonalCenter/face.jpeg",username:"VIP会员10240",integral:"1435"}},toOrderType:function(t){e.showToast({title:this.orderTypeLise[t].name})},toPage:function(t,n){e.showToast({title:this.severList[t][n].name})}}}}).call(t,n(2).default)},44:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("view",{staticClass:"header",class:{status:e.isH5Plus}},[n("view",{staticClass:"userinfo"},[n("view",{staticClass:"face"},[n("image",{attrs:{src:e.userinfo.face}})]),n("view",{staticClass:"info"},[n("view",{staticClass:"username"},[e._v(e._s(e.userinfo.username))]),n("view",{staticClass:"integral"},[e._v("积分:"+e._s(e.userinfo.integral))])])]),e._m(0)]),n("view",{staticClass:"orders"},[n("view",{staticClass:"box"},e._l(e.orderTypeLise,function(t,s){return n("view",{staticClass:"label",attrs:{"wx:key":"row.name","hover-class":"hover","hover-stay-time":"50",eventid:"0u1-0-"+s},on:{tap:function(t){e.toOrderType(s)}}},[n("view",{staticClass:"icon"},[t.badge>0?n("view",{staticClass:"badge"},[e._v(e._s(t.badge))]):e._e(),n("image",{attrs:{src:"../../static/HM-PersonalCenter/"+t.icon}})]),e._v("\n\t\t\t\t"+e._s(t.name)+"\n\t\t\t")])}))]),e._l(e.severList,function(t,s){return n("view",{staticClass:"list",attrs:{"wx:key":"list"}},e._l(t,function(a,i){return n("view",{staticClass:"li",class:{noborder:i==t.length-1},attrs:{"hover-class":"hover","hover-stay-time":"50","wx:key":"li.name",eventid:"o3j-1-"+s+"-"+i},on:{tap:function(t){e.toPage(s,i)}}},[n("view",{staticClass:"icon"},[n("image",{attrs:{src:"../../static/HM-PersonalCenter/sever/"+a.icon}})]),n("view",{staticClass:"text"},[e._v(e._s(a.name))]),n("image",{staticClass:"to",attrs:{src:"../../static/HM-PersonalCenter/to.png"}})])}))})],2)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"setting"},[t("image",{attrs:{src:"../../static/HM-PersonalCenter/setting.png"}})])}]};t.a=a}},[40]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/userinfo/userinfo.js.map