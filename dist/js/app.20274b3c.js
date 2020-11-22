(function(e){function n(n){for(var i,s,l=n[0],o=n[1],u=n[2],m=0,d=[];m<l.length;m++)s=l[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);c&&c(n);while(d.length)d.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,l=1;l<t.length;l++){var o=t[l];0!==r[o]&&(i=!1)}i&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var i={},r={app:0},a=[];function s(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=i,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var c=o;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Sunburst Demo")]),t("div",{staticClass:"sunburst-parent"},[t("sunburst",{attrs:{data:e.tree},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.on,r=n.actions;return[t("highlightOnHover",e._b({},"highlightOnHover",{on:i,actions:r},!1)),t("zoomOnClick",e._b({},"zoomOnClick",{on:i,actions:r},!1))]}},{key:"legend",fn:function(e){var n=e.nodes,i=e.colorGetter;return t("breadcrumbTrail",{attrs:{current:n.mouseOver,root:n.root,colorGetter:i,from:n.clicked,width:2e3}})}}])})],1),t("ul",{attrs:{id:"tree"}},[t("treeItem",{staticClass:"item",attrs:{item:e.tree}})],1),e._m(0)])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Ich habe mit der "),t("a",{attrs:{href:"https://github.com/David-Desmaisons/Vue.D3.sunburst"}},[e._v("Vue.D3.sunburst von David Desmaisons")]),e._v(" angefangen, aber es hat mir einen sehr komischen Graph angezeigt. Als ich noch eine zweite Library ausprobiert habe ("),t("a",{attrs:{href:"http://www.d2bjs.org/"}},[e._v("d2b")]),e._v(") und das gleiche angezeigt war kam mir in Sinn, dass bei einem Sunburst Diagramm nur die Blätter des Datenbaums einen Wert haben sollten. Als ich meinen Test-Dataset entsprechend verändert habe hat alles korrekt funktioniert. Das Diagramm auf dieser Seite benutzt Vue.D3.sunburst. Ich habe entschieden die eingebaute onhover übersicht zu entfernen, da die Breadcrumbs diese Information besser präsertieren. "),t("br"),e._v(" Für die Tree-Ansicht wo man die Daten bearbeiten kann habe ich entschieden einen Component zu bauen. Ich habe mit dem "),t("a",{attrs:{href:"https://vuejs.org/v2/examples/tree-view.html"}},[e._v("Beispiel auf der Vue.js Seite")]),e._v(" angefangen und habe es angepasst um die Daten bearbeiten zu können. "),t("br"),t("br"),e._v(" Beim 2. Teil der Aufgabe habe ich probiert einen interaktiven Graph in D3.js umzusetzen. Mir fehlen aber die Kenntnisse um das in 2 Stunden in D3 machen zu können. Ich habe experimentiert aber habe da nichts zu zeigen. ")])}],s=t("4449"),l=(t("59c2"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",[t("div",[e._v(" "+e._s(e.item.name)+" "),void 0===e.item.children?t("input",{directives:[{name:"model",rawName:"v-model",value:e.item.size,expression:"item.size"}],attrs:{placeholder:e.item.size},domProps:{value:e.item.size},on:{input:function(n){n.target.composing||e.$set(e.item,"size",n.target.value)}}}):e._e(),void 0!==e.item.children?t("span",{on:{click:e.toggle}},[e._v("["+e._s(e.isOpen?"-":"+")+"]")]):e._e()]),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}]},e._l(e.item.children,(function(e,n){return t("tree-item",{key:n,staticClass:"item",attrs:{item:e}})})),1)])}),o=[],u={name:"treeItem",props:{item:Object},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen}}},c=u,m=t("2877"),d=Object(m["a"])(c,l,o,!1,null,null,null),h=d.exports,b={name:"App",data:function(){return{tree:{name:"Home",children:[{name:"Documents",children:[{name:"file1",size:50},{name:"file2",size:100},{name:"file3",size:5},{name:"file4",size:45}]},{name:"Downloads",children:[{name:"file1",size:20},{name:"file2",size:10},{name:"file3",size:5},{name:"file4",size:30},{name:"file5",size:15}]},{name:"Music",children:[{name:"file1",size:12},{name:"file2",size:8}]}]},treeford2b:{label:"Home",size:300,children:[{label:"Documents",size:200,children:[{label:"file1",size:50},{label:"file2",size:100},{label:"file3",size:5},{label:"file4",size:45}]},{label:"Downloads",size:80,children:[{label:"file1",size:20},{label:"file2",size:10},{label:"file3",size:5},{label:"file4",size:30},{label:"file5",size:15}]},{label:"Music",size:20,children:[{label:"file1",size:12},{label:"file2",size:8}]}]}}},components:{treeItem:h,breadcrumbTrail:s["breadcrumbTrail"],highlightOnHover:s["highlightOnHover"],sunburst:s["sunburst"],zoomOnClick:s["zoomOnClick"]}},f=b,p=Object(m["a"])(f,r,a,!1,null,null,null),v=p.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.20274b3c.js.map