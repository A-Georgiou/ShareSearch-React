"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 4936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ updateStock),
/* harmony export */   j: () => (/* binding */ removeStock)
/* harmony export */ });
const updateStock=payload=>{return{type:'STOCK_UPDATE',payload};};const removeStock=payload=>{return{type:'REMOVE_STOCK',payload};};

/***/ }),

/***/ 4812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6784);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7107);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6188);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__/* .library */ .Yv.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faUser */ .X46);const Avatar=props=>{const colors=["#00AA55","#009FD4","#B381B3","#939393","#E3BC00","#D47500","#DC2A2A"];const{0:bgCol,1:setBgCol}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#009FD4");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setBgCol(getColour(props.name));});function calcNumber(text){const charCodes=text.split('').map(char=>char.charCodeAt(0)).join('');return parseInt(charCodes,10);}function getColour(text){return colors[calcNumber(text)%colors.length];}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"avatar",style:{backgroundColor:bgCol,width:props.width,height:props.height}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:props.textSize}},props.name===''?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__/* .FontAwesomeIcon */ .g,{icon:['fa','user']}):props.name));};//  : <FontAwesomeIcon icon={['fa', 'user']} color='white' />}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ }),

/***/ 8747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4812);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1468);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2960);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4936);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(650);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4005);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(298);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1247);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4035);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3370);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3239);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8210);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7917);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4583);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(600);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4394);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2290);
const Navigation=props=>{const{0:isOpen,1:setIsOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:loggedIn,1:setLoggedIn}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const{0:searchBar,1:setSearchBar}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const toggle=()=>setIsOpen(!isOpen);var currUser='';if(typeof localStorage!=="undefined"){if(localStorage.getItem("userInformation")!==null){currUser=JSON.parse(localStorage.getItem("userInformation")).name.split(" ").map(n=>n[0]).join("");}}const logoutUser=()=>{if(typeof localStorage!=="undefined"){/*
            axios.post('http://localhost:3000/api/user/logout', {}, {withCredentials: true})
                .then(res => {
                    localStorage.clear();
                    setLoggedIn(false);
                }).catch(err=>{console.log('cannot log user out')})
            */}};const handleChange=e=>{setSearchBar(e.target.value);};const handleSubmit=async e=>{props.updateStock(searchBar.toUpperCase());};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{dark:true,expand:"md",className:"navigation-bar"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{href:"/",className:"d-flex justify-content-start"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"brand-text"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"ShareSearch"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{onClick:toggle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{isOpen:isOpen,navbar:true,className:"d-flex justify-content-end"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{navbar:true},props.displaySearch?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{inline:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"text",placeholder:"Search Stock",className:"mr-sm-2 p-3",id:"search-bar",value:searchBar,onChange:handleChange}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{variant:"outline-success",className:"mr-sm-3",onClick:handleSubmit},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Search")))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{nav:true,inNavbar:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{nav:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{name:currUser?currUser:''})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{right:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{tag:"a",href:"/ShareSearch-React/"},"Home"),currUser!==''?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{tag:"a",href:"/ShareSearch-React/profile_page"},"Profile Page"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{tag:"a",href:"/ShareSearch-React/my_stocks"},"My Stocks")):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{divider:true}),currUser===''?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{tag:"a",href:"/ShareSearch-React/account_page"},"Log in"):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{tag:"a",href:"/ShareSearch-React/",onClick:logoutUser},"Logout"))))));};const mapDispatchToProps=dispatch=>{return (0,redux__WEBPACK_IMPORTED_MODULE_15__/* .bindActionCreators */ .zH)({updateStock: _actions_index__WEBPACK_IMPORTED_MODULE_16__/* .updateStock */ .U},dispatch);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_17__/* .connect */ .Ng)(null,mapDispatchToProps)(Navigation));

/***/ }),

/***/ 1695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_WatchList)
});

// EXTERNAL MODULE: external "/Users/georgioua/Projects/ShareSearch-React/node_modules/react/index.js"
var index_js_ = __webpack_require__(5232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/ResponsiveContainer.js
var ResponsiveContainer = __webpack_require__(4653);
// EXTERNAL MODULE: ./node_modules/recharts/es6/chart/LineChart.js + 20 modules
var LineChart = __webpack_require__(4754);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/CartesianGrid.js
var CartesianGrid = __webpack_require__(9107);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/YAxis.js
var YAxis = __webpack_require__(3495);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Line.js
var Line = __webpack_require__(6279);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Badge.js
var Badge = __webpack_require__(6477);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js + 9 modules
var useDrag = __webpack_require__(8410);
// EXTERNAL MODULE: ./src/utils/items.js
var items = __webpack_require__(6314);
;// ./src/components/WatchStocks.js
const WatchStocks=props=>{const[{isDragging},drag]=(0,useDrag/* useDrag */.i)({item:{type:items/* ItemTypes */.l.STOCK_LIST,stock_list:props.data,index:props.index},collect:monitor=>({isDragging:!!monitor.isDragging()})});return/*#__PURE__*/index_js_default().createElement("div",{className:"watch-data",ref:drag,style:isDragging?{opacity:'0.1'}:{}},/*#__PURE__*/index_js_default().createElement("div",{className:"watch-list-info"},/*#__PURE__*/index_js_default().createElement(Badge/* default */.A,{color:"secondary",style:{fontSize:'1.5em'}},props.data.symbol,":"),/*#__PURE__*/index_js_default().createElement("h5",null,"P",/*#__PURE__*/index_js_default().createElement("p",null,props.data.historicalStock[props.data.historicalStock.length-1].adjClose.toFixed(2)))),/*#__PURE__*/index_js_default().createElement(ResponsiveContainer/* ResponsiveContainer */.u,{width:"100%",height:"45%"},/*#__PURE__*/index_js_default().createElement(LineChart/* LineChart */.b,{height:1,width:1,data:props.data.historicalStock,aspect:undefined},/*#__PURE__*/index_js_default().createElement(CartesianGrid/* CartesianGrid */.d,{strokeDasharray:"1 1"}),/*#__PURE__*/index_js_default().createElement(YAxis/* YAxis */.h,{domain:['dataMin','dataMax']}),/*#__PURE__*/index_js_default().createElement(Line/* Line */.N,{type:"monotone",dataKey:"adjClose",stroke:"#82ca9d",dot:false}))),/*#__PURE__*/index_js_default().createElement(ResponsiveContainer/* ResponsiveContainer */.u,{width:"100%",height:"45%"},/*#__PURE__*/index_js_default().createElement(LineChart/* LineChart */.b,{height:1,width:1,data:props.data.historicalGoogle,aspect:undefined},/*#__PURE__*/index_js_default().createElement(CartesianGrid/* CartesianGrid */.d,{strokeDasharray:"1 1"}),/*#__PURE__*/index_js_default().createElement(YAxis/* YAxis */.h,{domain:['dataMin','dataMax']}),/*#__PURE__*/index_js_default().createElement(Line/* Line */.N,{type:"monotone",dataKey:"value",stroke:"#8884d8",dot:false}))));};/* harmony default export */ const components_WatchStocks = (WatchStocks);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(1468);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(2960);
// EXTERNAL MODULE: ./src/actions/index.js
var actions = __webpack_require__(4936);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js + 9 modules
var useDrop = __webpack_require__(7460);
;// ./src/components/WatchList.js
const WatchList=props=>{const{0:stockArray,1:setStockArray}=(0,index_js_.useState)([]);const{0:updatedVal,1:setUpdatedVal}=(0,index_js_.useState)(0);(0,index_js_.useEffect)(()=>{if(typeof localStorage!=="undefined"){async function fetchData(){/*
				const result = await axios.get('http://localhost:3000/api/posts/favourites', {withCredentials: true})
				localStorage.setItem('favourites', JSON.stringify(result.data.favourites))
				const favourites = result.data.favourites;
				let stock = [];
				for(var i = 0; i < favourites.length; i++){
					const apiUrl = `http://localhost:3001/api/getBothData?symbol=${favourites[i]}`;
					const resultAPI = await axios.get(apiUrl);
					resultAPI.data.historicalStock = resultAPI.data.historicalStock.reverse();
					stock.push(resultAPI.data);
				}
				
				setStockArray(stock);
				*/}fetchData();}},[updatedVal,props.stock.stocks]);async function toggleFavourite(data){if(typeof localStorage!=="undefined"){if(stockArray.filter(e=>e.symbol===data.stock.symbol).length>0){console.log('value already exists');}else{/*
			const result = await axios.post('http://localhost:3000/api/posts/stock_favourite', {favourite: data.stock.symbol}, {withCredentials: true});
			var localData = JSON.parse(localStorage.getItem("searched-stocks"));
            localData = localData.filter(symbol =>  symbol !== data.stock.symbol)
            localStorage.setItem("searched-stocks", JSON.stringify(localData));
			await props.removeStock(data.stock.symbol);
			await setUpdatedVal(updatedVal+1);
			*/}}}const[{isOver},drop]=(0,useDrop/* useDrop */.H)({accept:items/* ItemTypes */.l.STOCK,drop:(item,monitor)=>toggleFavourite(item),collect:monitor=>({isOver:!!monitor.isOver()})});return/*#__PURE__*/index_js_default().createElement("div",{className:"watch-list",ref:drop,style:isOver?{backgroundColor:'rgb(244,244,255)',opacity:'0.2'}:{}},/*#__PURE__*/index_js_default().createElement("div",{className:"header"},/*#__PURE__*/index_js_default().createElement("p",{style:{display:'inline'},className:"chevron"}),/*#__PURE__*/index_js_default().createElement("p",null,"My Watchlist")),/*#__PURE__*/index_js_default().createElement("hr",{style:{borderWidth:"1px"}}),stockArray.map((data,id)=>/*#__PURE__*/index_js_default().createElement("div",{key:id,onClick:()=>{props.setSelectedFavourite&&props.setSelectedFavourite(data.symbol);}},/*#__PURE__*/index_js_default().createElement(components_WatchStocks,{borderCol:'red',data:data,index:id}),/*#__PURE__*/index_js_default().createElement("hr",null))));};const mapStateToProps=state=>({stock:state.stock});const mapDispatchToProps=dispatch=>{return (0,redux/* bindActionCreators */.zH)({updateStock: actions/* updateStock */.U,removeStock: actions/* removeStock */.j},dispatch);};/* harmony default export */ const components_WatchList = ((0,react_redux/* connect */.Ng)(mapStateToProps,mapDispatchToProps)(WatchList));

/***/ }),

/***/ 2745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/georgioua/Projects/ShareSearch-React/node_modules/react/index.js"
var index_js_ = __webpack_require__(5232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Navigation.js
var Navigation = __webpack_require__(8747);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var fontawesome_svg_core = __webpack_require__(7107);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(6188);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.mjs
var free_regular_svg_icons = __webpack_require__(7897);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Button.js + 1 modules
var Button = __webpack_require__(7917);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(6784);
;// ./src/components/StockInfo.js
fontawesome_svg_core/* library */.Yv.add(free_solid_svg_icons/* faChevronRight */.XkK);const StockInfo=props=>{let starsArray=[];var rating=props.starsCount;var type='fa';var color='orange';for(var i=0;i<5;i++){if(rating<=0){type='far';}rating--;starsArray.push(/*#__PURE__*/index_js_default().createElement(index_es/* FontAwesomeIcon */.g,{icon:[type,'star'],color:color,key:i}));}return/*#__PURE__*/index_js_default().createElement("div",{className:"stock-info"},/*#__PURE__*/index_js_default().createElement("h2",null,"Stock Information:"),/*#__PURE__*/index_js_default().createElement("hr",null),"Correlation Rating: ",starsArray.map(function(item,i){return item;}),/*#__PURE__*/index_js_default().createElement("br",null),"Stock Current Price: $",props.dataDisplay.historicalStock[props.dataDisplay.historicalStock.length-1].adjClose.toFixed(2),/*#__PURE__*/index_js_default().createElement("br",null),"Predicted Trend: ",/*#__PURE__*/index_js_default().createElement("div",{className:"predictive-text",style:{color:'red'}},"Negative"),/*#__PURE__*/index_js_default().createElement("br",null));};/* harmony default export */ const components_StockInfo = (StockInfo);
// EXTERNAL MODULE: ./node_modules/recharts/es6/component/ResponsiveContainer.js
var ResponsiveContainer = __webpack_require__(4653);
// EXTERNAL MODULE: ./node_modules/recharts/es6/chart/LineChart.js + 20 modules
var LineChart = __webpack_require__(4754);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/CartesianGrid.js
var CartesianGrid = __webpack_require__(9107);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/XAxis.js
var XAxis = __webpack_require__(7984);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/YAxis.js
var YAxis = __webpack_require__(3495);
// EXTERNAL MODULE: ./node_modules/recharts/es6/cartesian/Line.js
var Line = __webpack_require__(6279);
;// ./src/components/StockNewBody.js
fontawesome_svg_core/* library */.Yv.add(free_solid_svg_icons/* faStar */.yy,free_regular_svg_icons/* faStar */.yy);const StockNewBody=props=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"scatter-data"},/*#__PURE__*/index_js_default().createElement("div",{className:"header-information"},/*#__PURE__*/index_js_default().createElement("h1",{className:"stock-name"},props.data.name),/*#__PURE__*/index_js_default().createElement(Button/* default */.A,{style:{fontSize:'1em'},className:"favourite-button",onClick:()=>props.addFavourite({stock:props.data})},"Add to favourites"),/*#__PURE__*/index_js_default().createElement(Button/* default */.A,{style:{fontSize:'1em'},className:"favourite-button",onClick:()=>props.removeItem({stock_list:props.data})},"Close Stock Window")),/*#__PURE__*/index_js_default().createElement("div",{className:"stock-main-body"},/*#__PURE__*/index_js_default().createElement(ResponsiveContainer/* ResponsiveContainer */.u,{width:"98.5%",height:"50%"},/*#__PURE__*/index_js_default().createElement(LineChart/* LineChart */.b,{height:1,width:1,data:props.data.historicalStock,aspect:undefined},/*#__PURE__*/index_js_default().createElement(CartesianGrid/* CartesianGrid */.d,{strokeDasharray:"1 1"}),/*#__PURE__*/index_js_default().createElement(XAxis/* XAxis */.W,{dataKey:"date",interval:25}),/*#__PURE__*/index_js_default().createElement(YAxis/* YAxis */.h,{domain:['dataMin','dataMax'],allowDecimals:false,dataKey:"adjClose"}),/*#__PURE__*/index_js_default().createElement(Line/* Line */.N,{type:"monotone",dataKey:"adjClose",stroke:"#82ca9d"}))),/*#__PURE__*/index_js_default().createElement(ResponsiveContainer/* ResponsiveContainer */.u,{width:"98.5%",height:"50%"},/*#__PURE__*/index_js_default().createElement(LineChart/* LineChart */.b,{height:1,width:1,data:props.data.historicalGoogle,aspect:undefined},/*#__PURE__*/index_js_default().createElement(CartesianGrid/* CartesianGrid */.d,{strokeDasharray:"1 1"}),/*#__PURE__*/index_js_default().createElement(XAxis/* XAxis */.W,{dataKey:"formattedAxisTime"}),/*#__PURE__*/index_js_default().createElement(YAxis/* YAxis */.h,{domain:['dataMin','dataMax'],allowDecimals:false}),/*#__PURE__*/index_js_default().createElement(Line/* Line */.N,{type:"monotone",dataKey:"value",stroke:"#8884d8"})))),/*#__PURE__*/index_js_default().createElement(components_StockInfo,{dataDisplay:props.data,starsCount:props.starsCount}));};/* harmony default export */ const components_StockNewBody = (StockNewBody);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Nav.js
var Nav = __webpack_require__(4035);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/TabContent.js
var TabContent = __webpack_require__(1336);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/TabPane.js
var TabPane = __webpack_require__(8995);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Row.js
var Row = __webpack_require__(5826);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(2960);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/NavItem.js
var NavItem = __webpack_require__(432);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/NavLink.js
var NavLink = __webpack_require__(8547);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js + 9 modules
var useDrag = __webpack_require__(8410);
// EXTERNAL MODULE: ./src/utils/items.js
var items = __webpack_require__(6314);
;// ./src/components/NavComp.js
const NavComp=props=>{const toggle=tab=>{if(props.activeTab!==tab)props.toggleFunc(tab);};const[{isDragging},drag]=(0,useDrag/* useDrag */.i)({item:{type:items/* ItemTypes */.l.STOCK,stock:props.stockItem,index:props.index},collect:monitor=>({isDragging:!!monitor.isDragging()})});return/*#__PURE__*/index_js_default().createElement("div",{ref:drag,style:isDragging?{opacity:'0.1'}:{}},/*#__PURE__*/index_js_default().createElement(NavItem/* default */.A,null,/*#__PURE__*/index_js_default().createElement(NavLink/* default */.A,{className:classnames_default()({active:props.activeTab===props.index}),onClick:()=>{toggle(props.index);},style:{cursor:'pointer',padding:'.3em .3em',fontSize:'1.2em'}},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("b",null,props.stockItem.symbol)))));};/* harmony default export */ const components_NavComp = (NavComp);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(1468);
// EXTERNAL MODULE: ./src/actions/index.js
var actions = __webpack_require__(4936);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js + 9 modules
var useDrop = __webpack_require__(7460);
;// ./src/static/5613.jpg
/* harmony default export */ const _5613 = ("/static/5613-d0db91d3c18e064ea4abd040998d643d.jpg");
;// ./src/components/StockTabs.js
const StockTabs=props=>{/*
    stockArray: Current stock list
    updatedVal: Handles updating windows to re-render DOM (default 0)
    activeTab: sets current active stock tab (default 0)
    */const{0:stockArray,1:setStockArray}=(0,index_js_.useState)([]);const{0:updatedVal,1:setUpdatedVal}=(0,index_js_.useState)(0);const{0:activeTab,1:setActiveTab}=(0,index_js_.useState)(0);//On Load Handle populating stock body data from local storage searches (cache'd)
(0,index_js_.useEffect)(()=>{if(typeof localStorage!=="undefined"){var newLocal=[];if(localStorage.getItem("searched-stocks")){const localStorageStocks=JSON.parse(localStorage.getItem("searched-stocks"));const propStocks=props.stock.stocks;newLocal=localStorageStocks.concat(propStocks.filter(item=>localStorageStocks.indexOf(item)<0));}else{newLocal=props.stock.stocks;}localStorage.setItem("searched-stocks",JSON.stringify(newLocal));async function fetchData(){/*
                const result = JSON.parse(localStorage.getItem("searched-stocks"));
                let stock = [];
                for(var i = 0; i < result.length; i++){
                    const apiUrl = `http://localhost:3001/api/getBothData?symbol=${result[i]}`;
                    try{
                        const resultAPI = await axios.get(apiUrl);
                        resultAPI.data.historicalStock = resultAPI.data.historicalStock.reverse();
                        stock.push(resultAPI.data);
                    }catch(err){
                        console.log('removing invalid request: ', result[i]);
                        const localStorageTemp = JSON.parse(localStorage.getItem("searched-stocks"));
                        newLocal = localStorageTemp.filter(symbol => symbol !== result[i]);
                        localStorage.setItem("searched-stocks", JSON.stringify(newLocal));
                        props.removeStock(result[i]);
                    }
                }
                setStockArray(stock);
                */}fetchData();}},[props.stock.stocks]);async function removeFavourite(data){if(stockArray.filter(e=>e.symbol===data.stock_list.symbol).length>0){console.log('value already exists');}else{/*
            const result = await axios.post('http://localhost:3000/api/posts/stock_remove', {favourite: data.stock_list.symbol}, {withCredentials: true});
            props.updateStock(data.stock_list.symbol);
            */}}async function addFavourite(data){if(typeof localStorage!=="undefined"){setActiveTab(0);if(!JSON.parse(localStorage.getItem("favourites"))){localStorage.setItem("favourites",JSON.stringify([]));}const currFavourites=JSON.parse(localStorage.getItem("favourites"));if(currFavourites.filter(e=>e.symbol===data.stock.symbol).length>0){console.log('value already exists');}else{/*
                const result = await axios.post('http://localhost:3000/api/posts/stock_favourite', {favourite: data.stock.symbol}, {withCredentials: true});
                var localData = JSON.parse(localStorage.getItem("searched-stocks"));
                localData = localData.filter(symbol =>  symbol !== data.stock.symbol)
                localStorage.setItem("searched-stocks", JSON.stringify(localData));
                await props.removeStock(data.stock.symbol);
                await setUpdatedVal(updatedVal+1);
                */}}}async function removeItem(data){if(typeof localStorage!=="undefined"){if(localStorage.getItem("searched-stocks")){setActiveTab(0);var localData=JSON.parse(localStorage.getItem("searched-stocks"));localData=localData.filter(symbol=>symbol!==data.stock_list.symbol);localStorage.setItem("searched-stocks",JSON.stringify(localData));props.removeStock(data.stock_list.symbol);}}}const[{isOver},drop]=(0,useDrop/* useDrop */.H)({accept:items/* ItemTypes */.l.STOCK_LIST,drop:(item,monitor)=>removeFavourite(item),collect:monitor=>({isOver:!!monitor.isOver()})});if(stockArray.length>0){return/*#__PURE__*/index_js_default().createElement("div",{className:"stock-tabs",ref:drop,style:isOver?{backgroundColor:'rgb(244,244,255)',opacity:'0.2'}:{}},/*#__PURE__*/index_js_default().createElement(Nav/* default */.A,{tabs:true},stockArray.map((stockItem,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:index},/*#__PURE__*/index_js_default().createElement(components_NavComp,{toggleFunc:setActiveTab,stockItem:stockItem,index:index,activeTab:activeTab}))),/*#__PURE__*/index_js_default().createElement(TabContent/* default */.A,{activeTab:activeTab},stockArray.map((stockItem,index)=>/*#__PURE__*/index_js_default().createElement(TabPane/* default */.A,{tabId:index,key:index},/*#__PURE__*/index_js_default().createElement(Row/* default */.A,null,/*#__PURE__*/index_js_default().createElement(components_StockNewBody,{starsCount:4,data:stockItem,index:index,removeItem:removeItem,addFavourite:addFavourite})))))));}else{return/*#__PURE__*/index_js_default().createElement("div",{className:"missing-stock",ref:drop,style:isOver?{backgroundColor:'white',opacity:'0.2'}:{}},/*#__PURE__*/index_js_default().createElement("img",{src:_5613}),/*#__PURE__*/index_js_default().createElement("h2",{style:{padding:'1em'}},"Search for a stock to get started."));}};const mapStateToProps=state=>({stock:state.stock});const mapDispatchToProps=dispatch=>{return (0,redux/* bindActionCreators */.zH)({updateStock: actions/* updateStock */.U,removeStock: actions/* removeStock */.j},dispatch);};/* harmony default export */ const components_StockTabs = ((0,react_redux/* connect */.Ng)(mapStateToProps,mapDispatchToProps)(StockTabs));
// EXTERNAL MODULE: ./src/components/WatchList.js + 1 modules
var WatchList = __webpack_require__(1695);
;// ./src/pages/index.js
class Index extends (index_js_default()).Component{render(){return/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"}),/*#__PURE__*/index_js_default().createElement(Navigation/* default */.A,{displaySearch:true}),/*#__PURE__*/index_js_default().createElement("div",{className:"stock-container"},/*#__PURE__*/index_js_default().createElement(WatchList/* default */.A,null),/*#__PURE__*/index_js_default().createElement(components_StockTabs,null)));}}/* harmony default export */ const pages = (Index);

/***/ }),

/***/ 6314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ItemTypes)
/* harmony export */ });
const ItemTypes={STOCK:'stock',STOCK_LIST:'stock_list'};

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map