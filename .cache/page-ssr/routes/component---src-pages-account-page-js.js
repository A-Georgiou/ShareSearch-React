"use strict";
exports.id = 18;
exports.ids = [18];
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

/***/ 5491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ account_page)
});

// EXTERNAL MODULE: external "/Users/georgioua/Projects/ShareSearch-React/node_modules/react/index.js"
var index_js_ = __webpack_require__(5232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Navigation.js
var Navigation = __webpack_require__(8747);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Form.js
var Form = __webpack_require__(3370);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/FormGroup.js
var FormGroup = __webpack_require__(3239);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/utils.js
var utils = __webpack_require__(6331);
;// ./node_modules/reactstrap/esm/Label.js
var _excluded = ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp = prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]);
var columnProps = prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string, (prop_types_default()).number, prop_types_default().shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  children: (prop_types_default()).node,
  hidden: (prop_types_default()).bool,
  check: (prop_types_default()).bool,
  size: (prop_types_default()).string,
  "for": (prop_types_default()).string,
  tag: utils/* tagPropType */.Wx,
  className: (prop_types_default()).string,
  cssModule: (prop_types_default()).object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: (prop_types_default()).array
};
var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-".concat(colWidth);
  }
  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-".concat(colWidth, "-auto");
  }
  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};
function Label(props) {
  var className = props.className,
    cssModule = props.cssModule,
    hidden = props.hidden,
    _props$widths = props.widths,
    widths = _props$widths === void 0 ? colWidths : _props$widths,
    _props$tag = props.tag,
    Tag = _props$tag === void 0 ? 'label' : _props$tag,
    check = props.check,
    size = props.size,
    htmlFor = props["for"],
    attributes = _objectWithoutProperties(props, _excluded);
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];
    if (!columnProp && columnProp !== '') {
      return;
    }
    var isXs = !i;
    var colClass;
    if ((0,utils/* isObject */.Gv)(columnProp)) {
      var _classNames;
      var colSizeInterfix = isXs ? '-' : "-".concat(colWidth, "-");
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0,utils/* mapToCssModules */.qO)(classnames_default()((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var colFormLabel = size || colClasses.length;
  var formLabel = !(check || colFormLabel);
  var classes = (0,utils/* mapToCssModules */.qO)(classnames_default()(className, hidden ? 'visually-hidden' : false, check ? 'form-check-label' : false, size ? "col-form-label-".concat(size) : false, colClasses, colFormLabel ? 'col-form-label' : false, formLabel ? 'form-label' : false), cssModule);
  return /*#__PURE__*/index_js_default().createElement(Tag, _extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
}
Label.propTypes = propTypes;
/* harmony default export */ const esm_Label = (Label);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Input.js
var Input = __webpack_require__(8210);
;// ./node_modules/reactstrap/esm/FormFeedback.js
var FormFeedback_excluded = ["className", "cssModule", "valid", "tooltip", "tag"];
function FormFeedback_extends() { FormFeedback_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FormFeedback_extends.apply(this, arguments); }
function FormFeedback_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormFeedback_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function FormFeedback_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var FormFeedback_propTypes = {
  children: (prop_types_default()).node,
  tag: utils/* tagPropType */.Wx,
  className: (prop_types_default()).string,
  cssModule: (prop_types_default()).object,
  valid: (prop_types_default()).bool,
  tooltip: (prop_types_default()).bool
};
function FormFeedback(props) {
  var className = props.className,
    cssModule = props.cssModule,
    _props$valid = props.valid,
    valid = _props$valid === void 0 ? undefined : _props$valid,
    tooltip = props.tooltip,
    _props$tag = props.tag,
    Tag = _props$tag === void 0 ? 'div' : _props$tag,
    attributes = FormFeedback_objectWithoutProperties(props, FormFeedback_excluded);
  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = (0,utils/* mapToCssModules */.qO)(classnames_default()(className, valid ? "valid-".concat(validMode) : "invalid-".concat(validMode)), cssModule);
  return /*#__PURE__*/index_js_default().createElement(Tag, FormFeedback_extends({}, attributes, {
    className: classes
  }));
}
FormFeedback.propTypes = FormFeedback_propTypes;
/* harmony default export */ const esm_FormFeedback = (FormFeedback);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Button.js + 1 modules
var Button = __webpack_require__(7917);
;// ./src/components/VerifyUserDetails.js
const VerifyUserDetails=props=>{(0,index_js_.useEffect)(()=>{if(typeof localStorage!=="undefined"){/*
        axios.get('https://167.172.57.114:3000/api/user/user_info', {withCredentials: true})
            .then(res =>{
                const user = {_id: res.data._id, name: res.data.name, email: res.data.email};
                localStorage.setItem('userInformation', JSON.stringify(user));
            })*/}},[]);return/*#__PURE__*/index_js_default().createElement("div",null);};/* harmony default export */ const components_VerifyUserDetails = (VerifyUserDetails);
;// ./src/components/Login.js
const Login=props=>{const{0:email,1:setEmail}=(0,index_js_.useState)('');const{0:password,1:setPassword}=(0,index_js_.useState)('');const{0:loggedIn,1:setLoggedIn}=(0,index_js_.useState)(false);const{0:validAccount,1:setValidAccount}=(0,index_js_.useState)(true);function handleEmailChange(e){setEmail(e.target.value);}function handlePasswordChange(e){setPassword(e.target.value);}function handleLogin(){if(email!=''&&password!=''){/*
            axios.post('https://167.172.57.114:3000/api/user/login', {email: email, password: password}, {withCredentials: true})
                .then(res => {
                    setValidAccount(true);
                    setLoggedIn(true);
                }).catch(err => {
                    setValidAccount(false);
                })
            */}}return/*#__PURE__*/index_js_default().createElement(Form/* default */.A,{style:{width:'40em',margin:'auto',marginTop:'2em',border:'.4em solid rgba(55, 55, 55, 0.7)',borderRadius:'10px',padding:'2em 2em .6em 2em'}},/*#__PURE__*/index_js_default().createElement("h4",null,"Login:"),/*#__PURE__*/index_js_default().createElement("hr",null),/*#__PURE__*/index_js_default().createElement(FormGroup/* default */.A,null,/*#__PURE__*/index_js_default().createElement(esm_Label,{for:"email"},"Email:"),/*#__PURE__*/index_js_default().createElement(Input/* default */.A,{placeholder:"Email Address",value:email,onChange:handleEmailChange,invalid:validAccount?false:true}),/*#__PURE__*/index_js_default().createElement(esm_FormFeedback,null,"Email or Password Incorrect.")),/*#__PURE__*/index_js_default().createElement(FormGroup/* default */.A,null,/*#__PURE__*/index_js_default().createElement(esm_Label,{for:"password"},"Password:"),/*#__PURE__*/index_js_default().createElement(Input/* default */.A,{placeholder:"Password",type:"password",value:password,onChange:handlePasswordChange}),/*#__PURE__*/index_js_default().createElement(esm_FormFeedback,null)),/*#__PURE__*/index_js_default().createElement("div",{style:{margin:'auto',textAlign:'center'}},/*#__PURE__*/index_js_default().createElement(Button/* default */.A,{style:{padding:'.5em',marginTop:'.6em'},onClick:()=>handleLogin()},!loggedIn?'Log in':/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("h6",{style:{margin:'auto',textAlign:'center',paddingBottom:'.5em'}},"Successfully Logged In."),/*#__PURE__*/index_js_default().createElement(components_VerifyUserDetails,null),/*#__PURE__*/index_js_default().createElement("meta",{"http-equiv":"refresh",content:"1; url = /"}))),/*#__PURE__*/index_js_default().createElement("p",{style:{color:'blue',marginTop:'.2em',cursor:'pointer'},onClick:()=>{props.handleLogin(false);}},"Not have an account?")));};/* harmony default export */ const components_Login = (Login);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Row.js
var Row = __webpack_require__(5826);
// EXTERNAL MODULE: ./node_modules/reactstrap/esm/Col.js
var Col = __webpack_require__(9704);
;// ./node_modules/reactstrap/esm/FormText.js
var FormText_excluded = ["className", "cssModule", "inline", "color", "tag"];
function FormText_extends() { FormText_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FormText_extends.apply(this, arguments); }
function FormText_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormText_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function FormText_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var FormText_propTypes = {
  children: (prop_types_default()).node,
  inline: (prop_types_default()).bool,
  tag: utils/* tagPropType */.Wx,
  color: (prop_types_default()).string,
  className: (prop_types_default()).string,
  cssModule: (prop_types_default()).object
};
function FormText(props) {
  var className = props.className,
    cssModule = props.cssModule,
    inline = props.inline,
    _props$color = props.color,
    color = _props$color === void 0 ? 'muted' : _props$color,
    _props$tag = props.tag,
    Tag = _props$tag === void 0 ? 'small' : _props$tag,
    attributes = FormText_objectWithoutProperties(props, FormText_excluded);
  var classes = (0,utils/* mapToCssModules */.qO)(classnames_default()(className, !inline ? 'form-text' : false, color ? "text-".concat(color) : false), cssModule);
  return /*#__PURE__*/index_js_default().createElement(Tag, FormText_extends({}, attributes, {
    className: classes
  }));
}
FormText.propTypes = FormText_propTypes;
/* harmony default export */ const esm_FormText = (FormText);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 53 modules
var axios = __webpack_require__(6268);
;// ./src/components/Register.js
const Register=props=>{const{0:firstName,1:setFirstName}=(0,index_js_.useState)('');const{0:surname,1:setSurname}=(0,index_js_.useState)('');const{0:email,1:setEmail}=(0,index_js_.useState)('');const{0:password,1:setPassword}=(0,index_js_.useState)('');const{0:validEmail,1:setValidEmail}=(0,index_js_.useState)('');const{0:validPassword,1:setValidPassword}=(0,index_js_.useState)('');const{0:emailFeedback,1:setEmailFeedback}=(0,index_js_.useState)('');const{0:registered,1:setRegistered}=(0,index_js_.useState)(false);function handleFirstChange(e){setFirstName(e.target.value);}function handleSurnameChange(e){setSurname(e.target.value);}function handleEmailChange(e){setEmail(e.target.value);/*
        axios.post('http://167.172.57.114:3000/api/user/register/validateEmail', {email: e.target.value}, {withCredentials: true})
        .then(res => {
            setEmailFeedback(res.data.responseText);
            setValidEmail(res.data.valid);
        })
        */}function handlePasswordChange(e){setPassword(e.target.value);const passwordRegex=/^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;if(e.target.value.length===0){setValidPassword('');}else if(e.target.value.length<6||!passwordRegex.test(e.target.value)){setValidPassword('invalid');}else{setValidPassword('valid');}}function handleSubmit(){if(email!==''&&password!==''&&firstName!==''&&surname!==''){var name=firstName+' '+surname;axios/* default */.A.post('http://167.172.57.114:3000/api/user/register',{name:name,email:email,password:password}).then(res=>{setRegistered(true);});}}const registerForm=/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("h4",null,"Register:"),/*#__PURE__*/index_js_default().createElement("hr",null),/*#__PURE__*/index_js_default().createElement(Row/* default */.A,{form:true},/*#__PURE__*/index_js_default().createElement(Col/* default */.A,{md:6},/*#__PURE__*/index_js_default().createElement(FormGroup/* default */.A,null,/*#__PURE__*/index_js_default().createElement(esm_Label,{for:"name"},"First Name:"),/*#__PURE__*/index_js_default().createElement(Input/* default */.A,{placeholder:"First Name",value:firstName,onChange:handleFirstChange}),/*#__PURE__*/index_js_default().createElement(esm_FormFeedback,null))),/*#__PURE__*/index_js_default().createElement(Col/* default */.A,{md:6},/*#__PURE__*/index_js_default().createElement(FormGroup/* default */.A,null,/*#__PURE__*/index_js_default().createElement(esm_Label,{for:"name"},"Last Name:"),/*#__PURE__*/index_js_default().createElement(Input/* default */.A,{placeholder:"Surname",value:surname,onChange:handleSurnameChange}),/*#__PURE__*/index_js_default().createElement(esm_FormFeedback,null)))),/*#__PURE__*/index_js_default().createElement(FormGroup/* default */.A,null,/*#__PURE__*/index_js_default().createElement(esm_Label,{for:"email"},"Email:"),/*#__PURE__*/index_js_default().createElement(Input/* default */.A,{placeholder:"Enter Email Address",value:email,onChange:handleEmailChange,valid:validEmail==='valid'?true:false,invalid:validEmail==='invalid'?true:false}),/*#__PURE__*/index_js_default().createElement(esm_FormFeedback,null,emailFeedback)),/*#__PURE__*/index_js_default().createElement(FormGroup/* default */.A,null,/*#__PURE__*/index_js_default().createElement(esm_Label,{for:"password"},"Password:"),/*#__PURE__*/index_js_default().createElement(Input/* default */.A,{type:"password",placeholder:"Enter Password",value:password,onChange:handlePasswordChange,valid:validPassword==='valid'?true:false,invalid:validPassword==='invalid'?true:false}),/*#__PURE__*/index_js_default().createElement(esm_FormFeedback,null),/*#__PURE__*/index_js_default().createElement(esm_FormText,null,"Min Character Length: 8 / Must include capital letter and number.")),/*#__PURE__*/index_js_default().createElement("div",{style:{margin:'auto',textAlign:'center'}},/*#__PURE__*/index_js_default().createElement(Button/* default */.A,{style:{padding:'.5em',marginTop:'.6em'},onClick:()=>handleSubmit()},"Register Account"),/*#__PURE__*/index_js_default().createElement("p",{style:{color:'blue',marginTop:'.2em',cursor:'pointer'},onClick:()=>{props.handleLogin(true);}},"Already have an account?")));const successfullyRegistered=/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("h1",{style:{margin:'auto',textAlign:'center',paddingBottom:'.5em'}},"Successfully Registered."),/*#__PURE__*/index_js_default().createElement("meta",{"http-equiv":"refresh",content:"1; url = /account_page"}));return/*#__PURE__*/index_js_default().createElement(Form/* default */.A,{style:{width:'40em',margin:'auto',marginTop:'2em',border:'.4em solid rgba(55, 55, 55, 0.7)',borderRadius:'10px',padding:'2em 2em .6em 2em'}},!registered?registerForm:successfullyRegistered);};/* harmony default export */ const components_Register = (Register);
;// ./src/components/AccountForm.js
const AccountForm=props=>{const{0:loginForm,1:setLoginForm}=(0,index_js_.useState)(true);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,loginForm?/*#__PURE__*/index_js_default().createElement(components_Login,{handleLogin:setLoginForm}):/*#__PURE__*/index_js_default().createElement(components_Register,{handleLogin:setLoginForm}));};/* harmony default export */ const components_AccountForm = (AccountForm);
;// ./src/pages/account_page.js
class Profile extends (index_js_default()).Component{render(){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Navigation/* default */.A,null),/*#__PURE__*/index_js_default().createElement(components_AccountForm,null));}}/* harmony default export */ const account_page = (Profile);

/***/ }),

/***/ 9704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getColumnClasses */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6331);
var _excluded = ["className", "cssModule", "widths", "tag"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]);
var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .Wx,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  widths: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-".concat(colWidth);
  }
  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-".concat(colWidth, "-auto");
  }
  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};
var getColumnClasses = function getColumnClasses(attributes, cssModule) {
  var widths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : colWidths;
  var modifiedAttributes = attributes;
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = modifiedAttributes[colWidth];
    delete modifiedAttributes[colWidth];
    if (!columnProp && columnProp !== '') {
      return;
    }
    var isXs = !i;
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Gv)(columnProp)) {
      var _classNames;
      var colSizeInterfix = isXs ? '-' : "-".concat(colWidth, "-");
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .qO)(classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });
  return {
    colClasses: colClasses,
    modifiedAttributes: modifiedAttributes
  };
};
function Col(props) {
  var className = props.className,
    cssModule = props.cssModule,
    _props$widths = props.widths,
    widths = _props$widths === void 0 ? colWidths : _props$widths,
    _props$tag = props.tag,
    Tag = _props$tag === void 0 ? 'div' : _props$tag,
    attributes = _objectWithoutProperties(props, _excluded);
  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
    modifiedAttributes = _getColumnClasses.modifiedAttributes,
    colClasses = _getColumnClasses.colClasses;
  if (!colClasses.length) {
    colClasses.push('col');
  }
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .qO)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, colClasses), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
}
Col.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ 5826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6331);
var _excluded = ["className", "cssModule", "noGutters", "tag", "widths"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var rowColsPropType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]);
var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .Wx,
  noGutters: (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .deprecated */ .io)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), 'Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/'),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType,
  widths: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
function Row(props) {
  var className = props.className,
    cssModule = props.cssModule,
    noGutters = props.noGutters,
    _props$tag = props.tag,
    Tag = _props$tag === void 0 ? 'div' : _props$tag,
    _props$widths = props.widths,
    widths = _props$widths === void 0 ? rowColWidths : _props$widths,
    attributes = _objectWithoutProperties(props, _excluded);
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];
    if (!colSize) {
      return;
    }
    var isXs = !i;
    colClasses.push(isXs ? "row-cols-".concat(colSize) : "row-cols-".concat(colWidth, "-").concat(colSize));
  });
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .qO)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, noGutters ? 'gx-0' : null, 'row', colClasses), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
Row.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-account-page-js.js.map