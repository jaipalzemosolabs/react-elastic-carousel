(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/docs/components/SimpleItem.js":function(e,t,n){"use strict";var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  transition: transform 200ms ease;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  padding: 15px;\n  margin: 5px;\n  border: 1px solid\n    ",";\n  color: #fff;\n  background-color: #673ab7;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return o=function(){return e},e}var i=r.a.div(o(),function(e){return e.active?"rgba(0,0,0,.2)":"rgba(0,0,0,.02)"});function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-family: Comic Sans MS, Comic Sans, cursive;\n  font-weight: 100;\n  display: flex;\n  min-height: 100px;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5em;\n  max-width: ",";\n"]);return a=function(){return e},e}var l=Object(r.a)(i)(a(),function(e){return e.maxWidth});t.a=l},"./src/react-elastic-carousel/index.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n.n(r),i=n("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),a=n("./node_modules/react-only-when/dist/index.es.js"),l=n("./node_modules/react-swipeable/lib/Swipeable.js"),u=n.n(l);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(){},d=function(e){return c(Array(e).keys())},p=function(e){return"rec rec-".concat(e)},f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce(function(e,t){return t(e)},e)}},m=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function b(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  transition: all 0.3s ease;\n  font-size: 1.6em;\n  background-color: rgba(103, 58, 183, 0.1);\n  color: #333;\n  box-shadow: 0 0 2px 0px #333;\n  border-radius: 50%;\n  border: none;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  line-height: 50px;\n  align-self: center;\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    color: #fff;\n    background-color: rgba(103, 58, 183, 1);\n    box-shadow: 0 0 2px 0px #333;\n  }\n"]);return b=function(){return e},e}var v=m.a.button(b());function y(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  box-sizing: border-box;\n  display: flex;\n  overflow: hidden;\n  user-select: none;\n  justify-content: ",";\n"]);return y=function(){return e},e}var h=m.a.div.attrs({style:function(e){return{padding:e.padding,width:e.width,height:e.height}}})(y(),function(e){return e.itemPosition});function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  margin: 0 10px;\n"]);return g=function(){return e},e}var w=m.a.div(g());function S(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  display: flex;\n  flex-direction: ",";\n  min-height: 100%;\n  transition: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n"]);return S=function(){return e},e}var P=m.a.div(S(),function(e){return e.verticalMode?"column":"row"},function(e){var t=e.isSwiping,n=e.transitionMs,r=e.easing,o=e.tiltEasing,i=t?o:r;return"all ".concat(t?250:n,"ms ").concat(i)},function(e){var t=e.isRTL,n=e.verticalMode,r=e.isSwiping,o=e.swipedSliderPosition,i=e.sliderPosition;return n||t?"auto":"".concat(r?o:i,"px")},function(e){var t=e.isRTL,n=e.verticalMode,r=e.isSwiping,o=e.swipedSliderPosition,i=e.sliderPosition;return!n&&t?"".concat(r?o:i,"px"):"auto"},function(e){var t=e.verticalMode,n=e.isSwiping,r=e.swipedSliderPosition,o=e.sliderPosition;return t?"".concat(n?r:o,"px"):"auto"});function O(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: ",";\n"]);return O=function(){return e},e}var x=m.a.div(O(),function(e){var t=e.height;return"".concat(t,"px")});function j(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  direction: ",";\n"]);return j=function(){return e},e}var k=m.a.div(j(),function(e){return e.isRTL?"rtl":"ltr"}),E={PREV:"PREV",NEXT:"NEXT",START:"flex-start",CENTER:"center",END:"flex-end"};function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){var e,n,r,o,i,a,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return r=this,o=(e=C(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==I(o)&&"function"!==typeof o?N(r):o,i=N(n),l=function(){var e=n.props;(0,e.onClick)(e.id)},(a="onClick")in i?Object.defineProperty(i,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[a]=l,n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.child,n=e.style,r=e.itemPosition;return o.a.createElement(h,{onClick:this.onClick,className:p("item-wrapper"),itemPosition:r,style:n},t)}}])&&T(n.prototype,r),i&&T(n,i),t}();_.defaultProps={style:{},itemPosition:E.CENTER,onClick:s};var R=_;_.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ItemWrapperContainer",props:{style:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemPosition:{defaultValue:{value:"consts.CENTER",computed:!0},type:{name:"enum",value:[{value:"consts.START",computed:!0},{value:"consts.CENTER",computed:!0},{value:"consts.END",computed:!0}]},required:!1,description:""},onClick:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:""},child:{type:{name:"element"},required:!0,description:""},id:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""}}};var V=function(e){var t=e.children,n=e.childWidth,r=e.enableSwipe,i=e.enableMouseSwipe,a=e.itemPosition,l=e.itemPadding,c=e.onSwipedLeft,s=e.onSwipedRight,d=e.onSwipedUp,f=e.onSwipedDown,m=e.onItemClick,b="".concat(n,"px"),v="".concat(l.join("px "),"px"),y=o.a.Children.map(t,function(e,t){var n=o.a.createElement(R,{id:t,itemPosition:a,child:e,style:{width:b,padding:v},key:"".concat(e.key).concat(t),onClick:m});return r?o.a.createElement(u.a,{stopPropagation:!0,preventDefaultTouchmoveEvent:!0,trackMouse:i,onSwipedLeft:c,onSwipedRight:s,onSwipedUp:d,onSwipedDown:f,className:p("swipable-".concat(e.key))},n):n});return o.a.createElement(o.a.Fragment,null,y)},A=V;V.__docgenInfo={description:"",methods:[],displayName:"Track",props:{children:{type:{name:"array"},required:!0,description:""},itemPosition:{type:{name:"string"},required:!1,description:""},itemPadding:{type:{name:"array"},required:!1,description:""},childWidth:{type:{name:"number"},required:!1,description:""},enableSwipe:{type:{name:"bool"},required:!1,description:""},enableMouseSwipe:{type:{name:"bool"},required:!1,description:""},onSwipedLeft:{type:{name:"func"},required:!1,description:""},onSwipedRight:{type:{name:"func"},required:!1,description:""},onSwipedUp:{type:{name:"func"},required:!1,description:""},onSwipedDown:{type:{name:"func"},required:!1,description:""},onItemClick:{type:{name:"func"},required:!1,description:""}}};var M=n("./node_modules/classnames/index.js"),z=n.n(M);function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){W(e,t,n[t])})}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var H={left:"\u276e",right:"\u276f",up:"\u276e",down:"\u276f"},U=p("arrow"),X=function(e){var t=e.direction,n=e.onClick,r=e.icons,i=e.style,a=L(e,["direction","onClick","icons","style"]),l=D({},H,r),u=D({},function(e){var t={};return e!==X.up&&e!==X.down||(t.transform="rotate(90deg)"),t}(t),i);return o.a.createElement(v,Object.assign({onClick:n,className:z()(U,"".concat(U,"-").concat(t)),style:u},a),l[t])};X.left="left",X.right="right",X.up="up",X.down="down";var B=X;X.__docgenInfo={description:"",methods:[],displayName:"Arrow",props:{direction:{type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1},{value:'"up"',computed:!1},{value:'"down"',computed:!1}]},required:!0,description:""},icons:{type:{name:"object"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""}}};var F=function(e,t){var n=t.limit,r=t.itemsToScroll;switch(t.type){case"NEXT_ITEM":var o=e+r;return n>=o?o:n;case"PREV_ITEM":var i=e-r;return i>=n?i:n;default:return e}},J=function(e,t){return{type:"NEXT_ITEM",limit:e,itemsToScroll:t}},G=function(e,t){return{type:"PREV_ITEM",limit:e,itemsToScroll:t}};function Y(e){return(Y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  transition: all 250ms ease;\n  margin: 5px;\n  background-color: ",';\n  font-size: 1.3em;\n  content: "";\n  height: 10px;\n  width: 10px;\n  box-shadow: ',";\n  border-radius: 50%;\n  &:hover {\n    cursor: pointer;\n    box-shadow: ",";\n  }\n"]);return ee=function(){return e},e}var te=m.a.div(ee(),function(e){return e.active?"rgba(103,58,183,.5)":"transparent"},function(e){return e.active?"0 0 1px 3px rgba(103,58,183,1)":"0 0 1px 2px rgba(0, 0, 0, 0.5)"},function(e){return e.active?"0 0 1px 3px rgba(103,58,183,1)":"0 0 1px 3px rgba(103,58,183,.5)"}),ne=function(e){function t(){var e,n,r,o,i,a,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return r=this,o=(e=Q(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==Y(o)&&"function"!==typeof o?Z(r):o,i=Z(n),l=function(){var e=n.props;(0,e.onClick)(e.id)},(a="onClick")in i?Object.defineProperty(i,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[a]=l,n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.active;return o.a.createElement(te,{onClick:this.onClick,active:e,className:"".concat(p("dot")," ").concat(e?p("dot_active"):"")})}}])&&K(n.prototype,r),i&&K(n,i),t}(),re=ne;function oe(e){return(oe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return!t||"object"!==oe(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n"]);return ce=function(){return e},e}ne.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DotContainer",props:{id:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""},active:{type:{name:"bool"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""}}};var se=m.a.div(ce()),de=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,le(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.numOfPages,n=e.activePage,r=e.onClick,i=d(t);return o.a.createElement(se,{className:p("pagination")},i.map(function(e,t){return o.a.createElement(re,{key:t,id:t,active:t===n,onClick:r})}))}}])&&ie(n.prototype,r),i&&ie(n,i),t}();de.defaultProps={onClick:s};var pe=de;function fe(e){return(fe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}de.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onClick:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:""},numOfPages:{type:{name:"number"},required:!0,description:""},activePage:{type:{name:"number"},required:!0,description:""}}};var ge=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return r=this,o=(e=be(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==fe(o)&&"function"!==typeof o?ve(r):o,he(ve(n),"state",{rootHeight:0,rootWidth:0,childWidth:0,childHeight:0,sliderPosition:0,swipedSliderPosition:0,isSwiping:!1,transitioning:!1,firstItem:n.props.initialFirstItem,activePage:0,sliderContainerWidth:0}),he(ve(n),"setRef",function(e){return function(t){return n[e]=t}}),he(ve(n),"initResizeObserver",function(){n.ro=new i.a(function(e,t){var r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;u.target===n.sliderContainer&&n.onContainerResize(u),u.target===n.slider&&n.onSliderResize(u)}}catch(c){o=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}}),n.ro.observe(n.sliderContainer),n.ro.observe(n.slider)}),he(ve(n),"unSubscribeObserver",function(){return n.ro.disconnect()}),he(ve(n),"setAutoPlay",function(){var e=n.props.autoPlaySpeed;n.autoPlayIntervalId=setInterval(function(){n.state.transitioning||n.slideNext()},e)}),he(ve(n),"removeAutoPlay",function(){n.autoPlayIntervalId&&(clearInterval(n.autoPlayIntervalId),n.autoPlayIntervalId=null)}),he(ve(n),"onSliderTransitionEnd",function(e){n.slider.addEventListener("transitionend",e)}),he(ve(n),"removeSliderTransitionHook",function(e){n.slider.removeEventListener("transitionend",e)}),he(ve(n),"getCurrentBreakpoint",function(){var e=n.props,t=e.breakPoints,r=e.itemsToShow,o=e.itemsToScroll,i=n.state.sliderContainerWidth,a={itemsToScroll:o,itemsToShow:r};return t&&t.length>0&&((a=t.slice().reverse().find(function(e){return e.width<=i}))||(a=t[0])),a}),he(ve(n),"getNumOfVisibleItems",function(){var e=n.props.itemsToShow,t=n.getCurrentBreakpoint();return t&&(e=t.itemsToShow),e}),he(ve(n),"getItemsToScroll",function(){var e=n.props.itemsToScroll,t=n.getCurrentBreakpoint(),r=e;return t&&t.itemsToScroll&&(r=t.itemsToScroll),r}),he(ve(n),"updateSliderPosition",function(){n.setState(function(e,t){var r=t.children,o=t.verticalMode,i=e.childWidth,a=e.childHeight,l=e.firstItem,u=r.length,c=n.getNumOfVisibleItems(),s=-1*l,d=c-(u-l);d>0&&u-c>0&&(s=d+-1*l);var p=d>0?l-d:l;return{sliderPosition:(o?a:i)*s,firstItem:p<0?0:p}})}),he(ve(n),"onSliderResize",function(e){var t=n.props,r=t.verticalMode,o=t.children,i=e.contentRect.height,a={};if(r){var l=n.getNumOfVisibleItems(),u=i/o.length;a.rootHeight=u*l,a.childHeight=u}else a.rootHeight=i;n.setState(a)}),he(ve(n),"onContainerResize",function(e){var t=n.props,r=t.onResize,o=t.verticalMode,i=e.contentRect.width;n.setState({sliderContainerWidth:i},function(){var e=n.getNumOfVisibleItems(),t=o?i:i/e;n.setState(function(e){return{childWidth:t}},function(){n.updateSliderPosition();var e=n.getCurrentBreakpoint();r(e)})})}),he(ve(n),"tiltMoveMent",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150;n.setState(function(n){return{isSwiping:!0,swipedSliderPosition:e-t}}),setTimeout(function(){n.setState({isSwiping:!1,swipedSliderPosition:0})},r)}),he(ve(n),"convertChildToCbObj",function(e){return{item:n.props.children[e].props,index:e}}),he(ve(n),"getNextItemIndex",function(e,t){var r=n.props.children,o=n.getItemsToScroll(),i=n.getNumOfVisibleItems(),a=i>r.length,l=t?0:r.length-i;a&&(l=0);var u=t?G(0,o):J(l,o);return F(e,u)}),he(ve(n),"getNextItemObj",function(e){var t=n.props.children,r=n.state.firstItem,o=n.getNextItemIndex(r,e);return{item:t[o].props,index:o}}),he(ve(n),"onNextStart",function(){var e=n.props.onNextStart,t=n.state.firstItem,r=n.getNextItemObj();e(n.convertChildToCbObj(t),r),n.slideNext()}),he(ve(n),"onPrevStart",function(){var e=n.props.onPrevStart,t=n.state.firstItem,r=n.getNextItemObj(!0);e(n.convertChildToCbObj(t),r),n.slidePrev()}),he(ve(n),"slideNext",function(){var e=n.props.enableTilt,t=n.state,r=t.firstItem,o=t.sliderPosition,i=n.getNextItemIndex(r,!1);r!==i?n.goTo(i):e&&n.tiltMoveMent(o,20,150)}),he(ve(n),"slidePrev",function(){var e=n.state.firstItem,t=n.props.enableTilt,r=n.getNextItemIndex(e,!0);e!==r?n.goTo(r):t&&n.tiltMoveMent(0,-20,150)}),he(ve(n),"onNextEnd",function(){var e=n.props.onNextEnd,t=n.state.firstItem,r=n.convertChildToCbObj(t);n.removeSliderTransitionHook(n.onNextEnd),n.setState({transitioning:!1}),e(r)}),he(ve(n),"onPrevEnd",function(){var e=n.props.onPrevEnd,t=n.state.firstItem,r=n.convertChildToCbObj(t);n.removeSliderTransitionHook(n.onPrevEnd),n.setState({transitioning:!1}),e(r)}),he(ve(n),"generatePositionUpdater",function(e,t,n,r){return function(o){var i=o.sliderPosition,a=o.childWidth,l=o.childHeight,u=o.firstItem,c=n?l:a;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){he(e,t,n[t])})}return e}({sliderPosition:e===E.NEXT?i-c*(t-u):i+c*(u-t),firstItem:t,swipedSliderPosition:0,isSwiping:!1},r)}}),he(ve(n),"goTo",function(e){var t=n.props,r=t.children,o=t.verticalMode,i=n.state.firstItem,a=i>e,l=n.getNextItemIndex(i,a),u=n.getNumOfVisibleItems(),c=l===i,s=e+u>=r.length;if(!c){s&&(e=r.length-u>0?r.length-u:Math.max(r.length-1,r.length-u));var d=E.NEXT,p=n.onNextEnd;a&&(d=E.PREV,p=n.onPrevEnd);var m=n.generatePositionUpdater(d,e,o,{transitioning:!0});n.setState(m,function(){f(n.updateActivePage(),n.onSliderTransitionEnd(p))})}}),he(ve(n),"getNumOfPages",function(){var e=n.props.children,t=n.getNumOfVisibleItems();return Math.ceil(e.length/t)||1}),he(ve(n),"updateActivePage",function(){n.setState(function(e){var t=e.firstItem,r=e.activePage,o=n.getNumOfVisibleItems(),i=Math.ceil(t/o);if(r!==i)return{activePage:i}})}),he(ve(n),"onIndicatorClick",function(e){var t=e*n.getNumOfVisibleItems();n.setState({activePage:e}),n.goTo(t)}),n}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.initResizeObserver(),this.updateActivePage()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.enableAutoPlay,r=this.state.firstItem;r===this.getNextItemIndex(r,!1)?this.removeAutoPlay():n&&!this.autoPlayIntervalId?this.setAutoPlay():!n&&this.autoPlayIntervalId&&this.removeAutoPlay()}},{key:"componentWillUnmount",value:function(){this.unSubscribeObserver()}},{key:"render",value:function(){var e=this.state,t=e.childWidth,n=e.activePage,r=e.isSwiping,i=e.sliderPosition,l=e.swipedSliderPosition,u=e.rootHeight,c=this.props,f=c.className,m=c.style,b=c.verticalMode,v=c.isRTL,y=c.easing,h=c.tiltEasing,g=c.transitionMs,S=c.children,O=c.focusOnSelect,j=c.itemPosition,I=c.itemPadding,T=c.enableSwipe,C=c.enableMouseSwipe,N=c.pagination,q=c.showArrows,_=c.renderArrow,R=c.renderPagination,V=b?s:v?this.onPrevStart:this.onNextStart,M=b?s:v?this.onNextStart:this.onPrevStart,z=b?this.onNextStart:s,D=b?this.onPrevStart:s,W=this.getNumOfPages();return o.a.createElement(k,{isRTL:v,className:"".concat(p("carousel-wrapper")," ").concat(f),style:m},o.a.createElement(x,{className:p("carousel"),height:u},o.a.createElement(a.a,{when:q},_?_({type:E.PREV,onClick:this.onPrevStart}):o.a.createElement(B,{onClick:this.onPrevStart,direction:b?B.up:B.left})),o.a.createElement(w,{className:p("slider-container"),ref:this.setRef("sliderContainer")},o.a.createElement(P,{verticalMode:b,isRTL:v,easing:y,sliderPosition:i,swipedSliderPosition:l,isSwiping:r,transitionMs:g,tiltEasing:h,className:p("slider"),ref:this.setRef("slider")},o.a.createElement(A,{children:S,childWidth:t,itemPosition:j,itemPadding:I,enableSwipe:T,enableMouseSwipe:C,onSwipedLeft:V,onSwipedRight:M,onSwipedUp:z,onSwipedDown:D,onItemClick:O?this.goTo:void 0}))),o.a.createElement(a.a,{when:q},_?_({type:E.NEXT,onClick:this.onNextStart}):o.a.createElement(B,{onClick:this.onNextStart,direction:b?B.down:B.right}))),o.a.createElement(a.a,{when:N},R?R({pages:d(W),activePage:n,onClick:this.onIndicatorClick}):o.a.createElement(pe,{numOfPages:W,activePage:n,onClick:this.onIndicatorClick})))}}])&&me(n.prototype,r),l&&me(n,l),t}();ge.defaultProps={className:"",style:{},verticalMode:!1,isRTL:!1,initialFirstItem:0,showArrows:!0,pagination:!0,easing:"ease",tiltEasing:"ease",transitionMs:500,enableTilt:!0,enableSwipe:!0,enableMouseSwipe:!0,focusOnSelect:!1,itemsToShow:1,itemsToScroll:1,itemPosition:E.CENTER,itemPadding:[0,0,0,0],enableAutoPlay:!1,autoPlaySpeed:2e3,onNextEnd:s,onPrevEnd:s,onNextStart:s,onPrevStart:s,onResize:s};var we=ge;ge.__docgenInfo={description:"",methods:[{name:"setRef",docblock:null,modifiers:[],params:[{name:"name",type:null}],returns:null},{name:"initResizeObserver",docblock:null,modifiers:[],params:[],returns:null},{name:"unSubscribeObserver",docblock:null,modifiers:[],params:[],returns:null},{name:"setAutoPlay",docblock:null,modifiers:[],params:[],returns:null},{name:"removeAutoPlay",docblock:null,modifiers:[],params:[],returns:null},{name:"onSliderTransitionEnd",docblock:null,modifiers:[],params:[{name:"fn",type:null}],returns:null},{name:"removeSliderTransitionHook",docblock:null,modifiers:[],params:[{name:"fn",type:null}],returns:null},{name:"getCurrentBreakpoint",docblock:null,modifiers:[],params:[],returns:null},{name:"getNumOfVisibleItems",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemsToScroll",docblock:null,modifiers:[],params:[],returns:null},{name:"updateSliderPosition",docblock:null,modifiers:[],params:[],returns:null},{name:"onSliderResize",docblock:null,modifiers:[],params:[{name:"sliderNode",type:null}],returns:null},{name:"onContainerResize",docblock:null,modifiers:[],params:[{name:"sliderContainerNode",type:null}],returns:null},{name:"tiltMoveMent",docblock:null,modifiers:[],params:[{name:"position",type:null},{name:"distance",type:null},{name:"duration",type:null}],returns:null},{name:"convertChildToCbObj",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"getNextItemIndex",docblock:null,modifiers:[],params:[{name:"currentIndex",type:null},{name:"getPrev",type:null}],returns:null},{name:"getNextItemObj",docblock:null,modifiers:[],params:[{name:"getPrev",type:null}],returns:null},{name:"onNextStart",docblock:null,modifiers:[],params:[],returns:null},{name:"onPrevStart",docblock:null,modifiers:[],params:[],returns:null},{name:"slideNext",docblock:null,modifiers:[],params:[],returns:null},{name:"slidePrev",docblock:null,modifiers:[],params:[],returns:null},{name:"onNextEnd",docblock:null,modifiers:[],params:[],returns:null},{name:"onPrevEnd",docblock:null,modifiers:[],params:[],returns:null},{name:"generatePositionUpdater",docblock:null,modifiers:[],params:[{name:"direction",type:null},{name:"nextItemId",type:null},{name:"verticalMode",type:null},{name:"rest",type:null}],returns:null},{name:"goTo",docblock:null,modifiers:[],params:[{name:"nextItemId",type:null}],returns:null},{name:"getNumOfPages",docblock:null,modifiers:[],params:[],returns:null},{name:"updateActivePage",docblock:null,modifiers:[],params:[],returns:null},{name:"onIndicatorClick",docblock:null,modifiers:[],params:[{name:"indicatorId",type:null}],returns:null}],displayName:"Carousel",props:{className:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"The css class for the root element"},style:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:"The style object for the root element"},verticalMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Display the Carousel in a vertical layout"},isRTL:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Flip right to left"},initialFirstItem:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:"The first items when the component mounts"},showArrows:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Show the arrow buttons"},pagination:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Show dots for paging"},easing:{defaultValue:{value:'"ease"',computed:!1},type:{name:"string"},required:!1,description:"transition easing pattern"},tiltEasing:{defaultValue:{value:'"ease"',computed:!1},type:{name:"string"},required:!1,description:"transition easing pattern for the tilt"},transitionMs:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:"Animation speed"},enableTilt:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:'The "bump" animation when reaching the last item'},enableSwipe:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Enable or disable swipe"},enableMouseSwipe:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Enable or disable mouse swipe"},focusOnSelect:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Go to item on click"},itemsToShow:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:"Number of visible items"},itemsToScroll:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:"Number of items to scroll"},itemPosition:{defaultValue:{value:"consts.CENTER",computed:!0},type:{name:"enum",value:[{value:"consts.START",computed:!0},{value:"consts.CENTER",computed:!0},{value:"consts.END",computed:!0}]},required:!1,description:"Position the element relative to it's wrapper (use the consts object) - consts.START | consts.CENTER | consts.END"},itemPadding:{defaultValue:{value:"[0, 0, 0, 0]",computed:!1},type:{name:"array"},required:!1,description:"A padding for each element"},enableAutoPlay:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Enable or disable auto play"},autoPlaySpeed:{defaultValue:{value:"2000",computed:!1},type:{name:"number"},required:!1,description:"Set auto play speed (ms)"},onNextEnd:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:"A callback for the end of the next transition\r\n- onNextEnd(nextItemObj) => {}"},onPrevEnd:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:"A callback for the end of the prev transition\r\n- onPrevEnd(nextItemObj) => {}"},onNextStart:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:"A callback for the begining of the next transition\r\n- onNextStart(prevItemObj, nextItemObj) => {}"},onPrevStart:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:"A callback for the begining of the prev transition\r\n- onPrevStart(prevItemObj, nextItemObj) => {}"},onResize:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:'A callback for the "slider-container" resize\r\n- onResize(currentBreakPoint) => {}'},children:{type:{name:"node"},required:!0,description:"Items to render"},breakPoints:{type:{name:"arrayOf",value:{name:"shape",value:{width:{name:"number",required:!1},itemsToShow:{name:"number",required:!1},itemsToScroll:{name:"number",required:!1}}}},required:!1,description:"Collection of objects with a width, itemsToShow and itemsToScroll"},renderArrow:{type:{name:"func"},required:!1,description:"A render prop for the arrow component\r\n- ({type, onClick}) => <div onClick={onClick}>{type === 'prev' ? '<-' : '->'}</div>"},renderPagination:{type:{name:"func"},required:!1,description:"A render prop for the pagination component\r\n- ({ pages, activePage, onClick }) =>  <YourComponent/>"}}},n.d(t,"b",function(){return we}),n.d(t,"a",function(){return E})}}]);
//# sourceMappingURL=mdx-breakpoints~mdx-easing~mdx-enable-auto-play~mdx-focus-on-select~mdx-go-to~mdx-index~mdx-initial-~7647ae80.72c49dd5ebc6be8b8be2.js.map