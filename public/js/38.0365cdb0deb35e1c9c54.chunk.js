webpackJsonp([38],{450:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{loading:!1,tableData:[],meta:{current_page:1,total:0,per_page:10},tableColumns:[{title:"id",key:"id"},{title:"logo",key:"image",render:function(t,e){return t("Avatar",{props:{src:e.row.image}})}},{title:"名字",key:"name"},{title:"链接",key:"link"},{title:"状态",key:"status",render:function(t,e){return t("span",[t("Icon",{props:{type:"record"},style:{color:1==e.row.status?"rgb(142, 180, 203)":"color: rgb(191, 83, 41)"}})])}},{title:"创建时间",key:"created_at"},{title:"操作",key:"action",align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",shape:"circle",icon:1==a.row.status?"load-c":"ios-circle-outline"},style:{marginRight:"5px"},on:{click:function(){t.handleStatus(a.row.id,a.row.status)}}}),e("router-link",{props:{to:"/links/"+a.row.id+"/edit"}},[e("Button",{props:{type:"success",shape:"circle",icon:"edit"},style:{marginRight:"5px"}})]),e("Button",{props:{type:"error",shape:"circle",icon:"android-delete"},on:{click:function(){t.handleDelete(a)}}})])}}]}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.loading=!0;var e="links";if(this.meta.current_page>1){var a="";e=e+(a=-1!=e.indexOf("?")?"&page=":"?page=")+this.meta.current_page,this.$router.push(a+this.meta.current_page)}this.$http.get(e).then(function(e){t.loading=!1,t.tableData=e.data,t.meta=e.meta})},handleCurrentChange:function(t){this.meta.current_page=t,this.loadData()},handleDelete:function(t){var e=this;this.$Modal.confirm({title:"是否删除该友链?",content:"该友链会永久删除，请三思!",okText:"是,删除它!",cancelText:"取消",loading:!0,onOk:function(){e.$http.delete("links/"+t.row.id).then(function(t){e.$Modal.remove(),e.loadData(),e.$Message.success("删除成功")})}})},handleStatus:function(t,e){var a=this,n="是否启用该友链?";1==e&&(n="是否禁用该友链?"),this.$Modal.confirm({title:n,content:"该动作可能会影响一些数据，请三思!",okText:"是,改变它!",cancelText:"取消",loading:!0,onOk:function(){a.$http.put("links/"+t+"/status").then(function(t){a.$Modal.remove(),a.loadData(),a.$Message.success("修改成功")})}})}}}},451:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Col",{attrs:{span:24}},[a("Card",[a("p",{staticStyle:{height:"100%","text-align":"right"},attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:"/links/add"}},[a("Button",{attrs:{type:"primary",icon:"android-add-circle"}},[t._v("添加友链")])],1)],1),t._v(" "),a("Table",{attrs:{loading:t.loading,data:t.tableData,columns:t.tableColumns,stripe:""}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:t.meta.total,current:t.meta.current_page},on:{"on-change":t.handleCurrentChange}})],1)])],1)],1)],1)],1)},staticRenderFns:[]}},565:function(t,e,a){var n=a(1)(a(450),a(451),!1,null,null,null);t.exports=n.exports}});