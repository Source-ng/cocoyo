webpackJsonp([28],{491:function(t,e,o){var n=o(492);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(3)("7dfc88a0",n,!0)},492:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".login .login_con h3[data-v-198314fc]{margin:5px 0 22px;font-size:20px;line-height:34px;color:#0e1726}.login h3[data-v-198314fc]{font-size:20px;line-height:20px;color:#222;text-align:center}.login .login_con .jump_link[data-v-198314fc]{height:17px;line-height:17px;font-size:12px;margin-top:16px}.login .login_con .jump_link .register[data-v-198314fc]{float:left;color:#2878ff;cursor:pointer}.login .login_con .jump_link .forget[data-v-198314fc]{float:right;cursor:pointer;color:#9fa2a8}.login .main .send_suc_box[data-v-198314fc]{width:310px;margin:0 auto}.login .main .send_suc_box .text[data-v-198314fc]{color:#797d85;font-size:14px;line-height:23px;padding-top:50px}.login .main .send_suc_box .back[data-v-198314fc]{font-size:14px;text-align:center;margin-top:26px;line-height:20px;color:#2878ff;cursor:pointer}",""])},493:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{valid:!0,form:{name:"",password:"",password_confirmation:""},nameRules:[function(t){return!!t||"请输入昵称"},function(t){return t.length<=10||"名称必须少于8个字符"},function(t){return t.length>=3||"名称必须大于3个字符"}],emailRule:[function(t){return!!t||"请输入邮箱"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"邮箱格式不正确"}],passwordRule:[function(t){return!!t||"请输入密码"},function(t){return t.length<=16||"密码必须少于16个字符"},function(t){return t.length>=6||"密码必须大于6个字符"}],passwordConfirmationRule:[function(t){return!!t||"请输入确认密码"},function(e){return e==t.form.password||"两次密码不一致"}]}},methods:{submit:function(){var t=this;this.$refs.form.validate()&&this.$http.post("register",this.form).then(function(e){t.$router.push({path:"/register_success",query:{email:t.form.email}})})}}}},494:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"main"},[o("h3",[t._v("注册")]),t._v(" "),o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{label:"用户名",rules:t.nameRules,required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),o("v-text-field",{attrs:{label:"邮箱",rules:t.emailRule,required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),o("v-text-field",{attrs:{label:"密码",rules:t.passwordRule,required:"",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),o("v-text-field",{attrs:{label:"确认密码",rules:t.passwordConfirmationRule,required:"",type:"password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}}),t._v(" "),o("v-btn",{attrs:{block:"",color:"primary",dark:""},on:{click:t.submit}},[t._v("注册")])],1),t._v(" "),o("div",{staticClass:"jump_link"},[o("router-link",{attrs:{to:"/login"}},[o("span",{staticClass:"register"},[t._v("已有账号?")])]),t._v(" "),o("router-link",{attrs:{to:"/forgetpassword"}},[o("span",{staticClass:"forget"},[t._v("找回密码")])])],1)],1)])},staticRenderFns:[]}},575:function(t,e,o){var n=o(1)(o(493),o(494),!1,function(t){o(491)},"data-v-198314fc",null);t.exports=n.exports}});