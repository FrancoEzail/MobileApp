System.register(["./index-legacy-4PI_wSXQ.js"],(function(e,t){"use strict";var i;return{setters:[function(e){i=e.K}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
var t=e("KEYBOARD_DID_OPEN","ionKeyboardDidShow"),n=e("KEYBOARD_DID_CLOSE","ionKeyboardDidHide"),o={},r={},s=!1,a=(e("resetKeyboardAssist",(function(){o={},r={},s=!1})),e("startKeyboardAssist",(function(e){if(i.getEngine())a(e);else{if(!e.visualViewport)return;r=v(e.visualViewport),e.visualViewport.onresize=function(){y(e),f()||c(e)?u(e):h(e)&&d(e)}}})),function(e){e.addEventListener("keyboardDidShow",(function(t){return u(e,t)})),e.addEventListener("keyboardDidHide",(function(){return d(e)}))}),u=e("setKeyboardOpen",(function(e,t){g(e,t),s=!0})),d=e("setKeyboardClose",(function(e){p(e),s=!1})),f=e("keyboardDidOpen",(function(){var e=(o.height-r.height)*r.scale;return!s&&o.width===r.width&&e>150})),c=e("keyboardDidResize",(function(e){return s&&!h(e)})),h=e("keyboardDidClose",(function(e){return s&&r.height===e.innerHeight})),g=function(e,i){var n=i?i.keyboardHeight:e.innerHeight-r.height,o=new CustomEvent(t,{detail:{keyboardHeight:n}});e.dispatchEvent(o)},p=function(e){var t=new CustomEvent(n);e.dispatchEvent(t)},y=e("trackViewportChanges",(function(e){o=Object.assign({},r),r=v(e.visualViewport)})),v=e("copyVisualViewport",(function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}))}}}));
