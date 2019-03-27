(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/docs/mdx/onNextStart.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),m=n("./src/react-elastic-carousel/index.js"),s=n("./src/docs/components/SimpleItem.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,f(t).call(this,e))).layout=null,n}var n,o,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=i(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"onnextstart"}},"onNextStart"),r.a.createElement(a.MDXTag,{name:"h4",components:t,props:{id:"onnextstart-will-pass-both-the-current-and-next-item-object"}},r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"onNextStart")," will pass both the ",r.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"h4"},"current")," and ",r.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"h4"},"next")," ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"item-object"),":"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"(currentItem, nextItem) => {/*...*/}\n")),r.a.createElement(a.MDXTag,{name:"ul",components:t},r.a.createElement(a.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"item-object")," has the shape of:")),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"{\n    item: {/* your item */},\n    index: // the item's index number \n}\n")),r.a.createElement(c.e,{__codesandbox:"undefined",__position:0,__code:'<Carousel\n  itemsToShow={2}\n  onNextStart={(currentItem, nextItem) =>\n    alert(JSON.stringify(currentItem) + `\\n` + JSON.stringify(nextItem))\n  }\n>\n  <Item someProp="cool1">1</Item>\n  <Item someProp="cool2">2</Item>\n  <Item someProp="cool3">3</Item>\n  <Item someProp="cool4">4</Item>\n  <Item someProp="cool5">5</Item>\n  <Item someProp="cool6">6</Item>\n</Carousel>',__scope:{props:this?this.props:n,Carousel:m.b,Item:s.a}},r.a.createElement(m.b,{itemsToShow:2,onNextStart:function(e,t){return alert(JSON.stringify(e)+"\n"+JSON.stringify(t))}},r.a.createElement(s.a,{someProp:"cool1"},"1"),r.a.createElement(s.a,{someProp:"cool2"},"2"),r.a.createElement(s.a,{someProp:"cool3"},"3"),r.a.createElement(s.a,{someProp:"cool4"},"4"),r.a.createElement(s.a,{someProp:"cool5"},"5"),r.a.createElement(s.a,{someProp:"cool6"},"6"))))}}])&&l(n.prototype,o),p&&l(n,p),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=mdx-on-next-start.72c49dd5ebc6be8b8be2.js.map