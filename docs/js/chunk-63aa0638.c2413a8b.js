(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63aa0638"],{"0821":function(t,e,a){"use strict";a("1986")},"16c0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home-root"},[a("div",{ref:"bg",staticClass:"bg"}),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v("JParticles")]),a("div",{staticClass:"description"},[t._v("\n      "+t._s(t.homeData.description)+"\n      "),a("x-link",{staticClass:"see-more",attrs:{to:t.homeData.seeMore.href}},[t._v("\n        "+t._s(t.homeData.seeMore.text)+"\n      ")])],1),a("div",{staticClass:"btn-box"},[a("x-link",{staticClass:"btn btn-success",attrs:{to:t.generatePath("/examples/quick-start")}},[a("span",{staticClass:"text"},[t._v(t._s(t.homeData.quickStart))])])],1)])])},r=[],c=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("bd86")),s=a("2f62"),i=function(t){var e=window.$store.state;return e.routeHasLanguage?"/".concat(e.routeLanguage).concat(t):t},o=a("8f73");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"Home",computed:l(l({},Object(s["b"])(["language","isSmallScreen"])),{},{homeData:function(){return this.language.home}}),watch:{isSmallScreen:function(){this.createEffect()}},methods:{generatePath:function(t){return i(t)},createEffect:function(){var t=this.isSmallScreen?{proximity:50,num:.25,maxSpeed:.7}:{proximity:100};new o["Particle"](this.$refs.bg,Object.assign({opacity:.3,eventElem:document,range:3e3,parallax:!0,parallaxStrength:1,parallaxLayer:[1,3,5,7]},t))}},mounted:function(){this.createEffect()}},b=f,p=(a("e9bb"),a("0821"),a("2877")),m=Object(p["a"])(b,n,r,!1,null,"b2093672",null);e["default"]=m.exports},1986:function(t,e,a){},ca69:function(t,e,a){},e9bb:function(t,e,a){"use strict";a("ca69")}}]);