(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2887ee3b"],{1871:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Рекомендации")]),a("v-divider",{staticClass:"my-2"}),a("div",{staticClass:"flex-row d-flex justify-center flex-wrap"},t._l(t.carddata,(function(e,s){return a("v-card",{key:s,staticClass:"ma-3",staticStyle:{width:"23%"},attrs:{href:""}},[a("v-img",{attrs:{src:"https://picsum.photos/200/200?random="+s,"max-width":"30rem","max-height":"30rem"}}),a("v-card",{staticClass:"pa-4"},[a("router-link",{staticClass:"text-decoration-none black--text",attrs:{to:{name:"book"}}},[a("h4",[a("b",[t._v(t._s(e.title))])])]),a("hr",{staticClass:"my-2",attrs:{color:"black"}}),a("h5",[t._v("Автор: "+t._s(e.author))]),a("div",{},[a("h5",{staticClass:"mt-10 mb-3 text-decoration-underline"},[t._v(t._s(e.genre))]),1==e.status?a("div",[a("b",{staticClass:"green--text text--darken-1"},[t._v("В наличии")])]):t._e(),2==e.status?a("div",[a("b",{staticClass:"yellow--text text--darken-1"},[t._v("Нет в наличии")])]):t._e(),3==e.status?a("div",[a("b",{staticClass:"red--text text--darken-1"},[t._v("Отсутствует")])]):t._e()])],1)],1)})),1)],1)},r=[],i=a("487e"),n=i["a"].carddata,c={data:function(){return{carddata:n}},methods:{}},d=c,l=a("2877"),o=a("6544"),v=a.n(o),h=a("b0af"),u=a("ce7e"),m=a("adda"),x=Object(l["a"])(d,s,r,!1,null,null,null);e["default"]=x.exports;v()(x,{VCard:h["a"],VDivider:u["a"],VImg:m["a"]})},"8ce9":function(t,e,a){},ce7e:function(t,e,a){"use strict";var s=a("5530"),r=(a("8ce9"),a("7560"));e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-2887ee3b.58db8026.js.map