(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{EiGA:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("7pXE"),c=n("A0e1"),i=(n("VRzm"),n("Btvt"),n("o0o1")),u=n.n(i),o=(n("ls82"),n("vDqi")),s=n.n(o);function v(e,t,n,a,r,l,c){try{var i=e[l](c),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(a,r)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var l=e.apply(t,n);function c(e){v(l,a,r,c,i,"next",e)}function i(e){v(l,a,r,c,i,"throw",e)}c(void 0)}))}}var d=function(e){var t=Object(a.useState)(null),n=t[0],l=t[1];return Object(a.useEffect)((function(){if(null!==e.getSelectedFavourite){function t(){return(t=m(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("http://localhost:3001/api/stock_quote?symbol="+e.getSelectedFavourite,{withCredentials:!0});case 2:200==(n=t.sent).request.status&&l(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}}),[e.getSelectedFavourite]),r.a.createElement("div",{className:"watch-list-information"},null!=n?r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("u",null,n.price.shortName)," [",n.price.symbol,"]"),r.a.createElement("br",null),r.a.createElement("h3",null,r.a.createElement("b",null,"Exchange:")," ",n.price.exchange),r.a.createElement("h3",null,r.a.createElement("b",null,"Currency:")," ",n.price.currency),r.a.createElement("h3",null,r.a.createElement("b",null,"Day Low:")," ",n.price.currencySymbol,n.summaryDetail.dayLow,", ",r.a.createElement("b",null,"Day High:")," ",n.price.currencySymbol,n.summaryDetail.dayHigh)):r.a.createElement("div",null,r.a.createElement("h1",null,"No Data")))};var p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={selectedFavourite:null},n.setSelectedFavourite=n.setSelectedFavourite.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.setSelectedFavourite=function(e){this.setState({selectedFavourite:e})},i.render=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("div",{className:"stock-container"},r.a.createElement(c.a,{setSelectedFavourite:this.setSelectedFavourite,getSelectedFavourite:this.state.selectedFavourite}),r.a.createElement(d,{getSelectedFavourite:this.state.selectedFavourite})))},a}(r.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-my-stocks-js-340829de73d523af2dd1.js.map