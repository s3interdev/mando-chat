webpackJsonp([1],{"05/H":function(t,e){},"47zC":function(t,e){},"4AJA":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},s,!1,function(t){a("47zC")},null,null).exports,i=a("/ocq"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container welcome"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content center-align"},[a("h2",{staticClass:"teal-text"},[t._v("Welcome")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.enterChat()}}},[a("label",{attrs:{for:"name"}},[t._v("Enter Your Name:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),t.feedback?a("p",{staticClass:"red-text"},[t._v(t._s(t.feedback))]):t._e(),t._v(" "),a("button",{staticClass:"btn teal"},[t._v("Enter Chat")])])])])])},staticRenderFns:[]};var o=a("VU/8")({name:"Welcome",data:function(){return{name:null,feedback:null}},methods:{enterChat:function(){this.name?this.$router.push({name:"Chat",params:{name:this.name}}):this.feedback="You must enter a name to join."}}},c,!1,function(t){a("05/H")},null,null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container chat"},[e("h2",{staticClass:"center teal-text"},[this._v("Mando Chat for "+this._s(this.name))]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("ul",{staticClass:"messages"},[e("li",[e("span",{staticClass:"teal-text"},[this._v("Name:")]),this._v(" "),e("span",{staticClass:"grey-text text-darken-3"},[this._v("message")]),this._v(" "),e("span",{staticClass:"grey-text time"},[this._v("time")])])])]),this._v(" "),e("div",{staticClass:"card-action"},[e("input",{attrs:{type:"text"}})])])}]};var u=a("VU/8")({name:"Chat",props:["name"],data:function(){return{}}},l,!1,function(t){a("4AJA")},null,null).exports;n.a.use(i.a);var m=new i.a({mode:"history",routes:[{path:"/",name:"Welcome",component:o},{path:"/chat",name:"Chat",component:u,props:!0,beforeEnter:function(t,e,a){t.params.name?a():a({name:"Welcome"})}}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:m,components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.09637af84b29a732b6b4.js.map