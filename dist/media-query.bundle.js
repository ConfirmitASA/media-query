!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;n(this,t);var o=e.query,u=e.full,s=void 0!==u&&u;this._matches=!1,this.full=s,this._mq=null,this._callback=r,this._context=i,this._bound=this._onMatch.bind(this),this.query=o}return r(t,[{key:"_onMatch",value:function(t){return this._matches=t.matches,this._callback.call(this._context,t.matches)}},{key:"matches",get:function(){return this._matches}},{key:"query",get:function(){return this._query},set:function(t){this._query=t,this.constructor.remove(this._mq,this._bound);var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._onMatch(this._mq),this.constructor.add(this._mq,this._bound))}}],[{key:"add",value:function(t,e){t&&t.addListener(e)}},{key:"remove",value:function(t,e){t&&t.removeListener(e),t=null}}]),t}();e.default=i,t.exports=e.default}]);
//# sourceMappingURL=media-query.bundle.js.map