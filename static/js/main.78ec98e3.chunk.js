(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),a=n(3),r=n.n(a),l=n(1),c=n(4),o=n(5),u=n(7),b=n(6),v=n(8),p=(n(14),function(t){var e=t.list;return s.a.createElement("ul",{className:"list"},e.map(function(t,e){return s.a.createElement("li",{key:e},t)}))}),d=(n(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),m=function(t){function e(){var t,n;Object(c.a)(this,e);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(n=Object(u.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(s)))).state={list:[],loaded:!1,visibleList:[]},n.handler=function(){n.setState({list:[].concat(d),loaded:!0,visibleList:[].concat(d)})},n.reverseList=function(){n.setState(function(t){return{visibleList:Object(l.a)(t.visibleList).reverse()}})},n.sortAlphabetical=function(){n.setState(function(t){return{visibleList:Object(l.a)(t.visibleList).sort()}})},n.sortListLength=function(){n.setState(function(t){return{visibleList:Object(l.a)(t.visibleList).sort(function(t,e){return t.length-e.length})}})},n.resetList=function(){n.setState(function(t){return{visibleList:Object(l.a)(t.list)}})},n}return Object(v.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"goods_block"},this.state.loaded?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{onClick:this.reverseList,class:"ui purple inverted button"},"Reverse"),s.a.createElement("button",{onClick:this.sortAlphabetical,class:"ui purple inverted button"},"Sort A-Z"),s.a.createElement("button",{onClick:this.sortListLength,class:"ui purple inverted button"},"Sort by length"),s.a.createElement("button",{onClick:this.resetList,class:"ui purple inverted button"},"Reset")),s.a.createElement(p,{list:this.state.visibleList})):s.a.createElement("button",{onClick:this.handler,class:"ui purple inverted button"},"Start"))}}]),e}(s.a.Component);r.a.render(s.a.createElement(m,{test:123}),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.78ec98e3.chunk.js.map