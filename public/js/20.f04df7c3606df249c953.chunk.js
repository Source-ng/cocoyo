webpackJsonp([20],{511:function(t,n,a){var s=a(512);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(3)("1f704ca5",s,!0)},512:function(t,n,a){(t.exports=a(2)(!1)).push([t.i,"",""])},513:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{follows:[]}},watch:{$route:function(t,n){this.loadData()}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$http.get("users/"+this.$route.params.name+"/following").then(function(n){t.follows=n.data})}}}},514:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[t.follows.length?a("div",t._l(t.follows,function(n,s){return a("div",{staticClass:"section__3bS4"},[a("router-link",{attrs:{to:"/users/"+n.name}},[a("img",{staticClass:"avatar img-circle",staticStyle:{width:"40px",height:"40px",background:"rgb(255, 255, 255)",padding:"3px",border:"1px solid rgb(197, 197, 197)"},attrs:{src:n.avatar}}),t._v("\n                "+t._s(n.name)+"\n            ")]),t._v(" "),a("span",{staticClass:"introduction"},[t._v("\n                - "+t._s(n.description)+"\n            ")])],1)})):a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"/images/following.png"}})])])},staticRenderFns:[]}},580:function(t,n,a){var s=a(1)(a(513),a(514),!1,function(t){a(511)},"data-v-70fe3fa4",null);t.exports=s.exports}});