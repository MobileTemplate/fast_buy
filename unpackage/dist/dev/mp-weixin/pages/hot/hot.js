require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{20:function(e,t,s){"use strict";var i=o(s(1)),n=o(s(21));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},21:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(23),n=s.n(i),o=s(24),r=!1;var a=function(e){r||s(22)},u=s(0)(n.a,o.a,a,null,null);u.options.__file="Users/taosiyuan/React/UniAppTP/pages/hot/hot.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] hot.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},22:function(e,t){},23:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{refreshing:!1,lists:[],fetchPageNum:1}},onLoad:function(){var t=this;this.getData(),e.getProvider({service:"share",success:function(e){for(var s=[],i=0;i<e.provider.length;i++)switch(e.provider[i]){case"weixin":s.push({name:"分享到微信好友",id:"weixin"}),s.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":s.push({name:"分享到QQ",id:"qq"})}t.providerList=s},fail:function(e){console.log("获取登录通道失败",e)}})},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},onReachBottom:function(){this.getData()},methods:{getData:function(){var t=this;e.request({url:this.$serverUrl+"/api/picture/posts.php?page="+(this.refreshing?1:this.fetchPageNum)+"&per_page=10",success:function(s){if(200!==s.statusCode)console.log("请求失败:",s);else{if(t.refreshing&&s.data[0].id===t.lists[0][0].id)return e.showToast({title:"已经最新",icon:"none"}),t.refreshing=!1,void e.stopPullDownRefresh();for(var i=[],n=[],o=s.data,r=0,a=o.length;r<a;r++){Math.floor(r/2);i.push(o[r]),r%2==1&&(n.push(i),i=[])}console.log("得到lists",n),t.refreshing?(t.refreshing=!1,e.stopPullDownRefresh(),t.lists=n,t.fetchPageNum=2):(t.lists=t.lists.concat(n),t.fetchPageNum+=1)}}})},goDetail:function(t){e.navigateTo({url:"../detail/detail?data="+encodeURIComponent(JSON.stringify(t))})},share:function(t){var s=this;if(0!==this.providerList.length){var i=this.providerList.map(function(e){return e.name});e.showActionSheet({itemList:i,success:function(i){e.share({provider:s.providerList[i.tapIndex].id,scene:s.providerList[i.tapIndex].type&&"WXSenceTimeline"===s.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:t.title,imageUrl:t.img_src,href:"https://uniapp.dcloud.io",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})}})}})}else e.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}}}).call(t,s(2).default)},24:function(e,t,s){"use strict";var i=function(){var e=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"index"},[t("text",{staticClass:"loadMore"},[this._v("我是购物车")])])}]};t.a=n}},[20]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/hot/hot.js.map