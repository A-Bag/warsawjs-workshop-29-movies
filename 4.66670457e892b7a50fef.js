(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"16fj":function(e,t,n){"use strict";n.r(t);var r=n("CcnG"),o=function(){return function(){}}(),i=n("pMnS"),s=n("ZYCi"),u=n("Ip0R"),l=function(){function e(){this.movie=null}return e.prototype.ngOnInit=function(){},e}(),a=r.lb({encapsulation:0,styles:[[""]],data:{}});function c(e){return r.xb(0,[(e()(),r.nb(0,0,null,null,9,"div",[["class","card"]],null,null,null,null,null)),(e()(),r.nb(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(e()(),r.nb(2,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(e()(),r.nb(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(e()(),r.wb(4,null,["",""])),(e()(),r.nb(5,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(e()(),r.wb(6,null,["",""])),(e()(),r.nb(7,0,null,null,2,"a",[["class","btn btn-primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,n){var o=!0;return"click"===t&&(o=!1!==r.ub(e,8).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&o),o},null,null)),r.mb(8,671744,null,0,s.l,[s.k,s.a,u.g],{routerLink:[0,"routerLink"]},null),(e()(),r.wb(-1,null,[" Details "]))],function(e,t){e(t,8,0,"/movies/"+t.component.movie.id)},function(e,t){var n=t.component;e(t,1,0,n.movie.imageUrl),e(t,4,0,n.movie.title),e(t,6,0,n.movie.description),e(t,7,0,r.ub(t,8).target,r.ub(t,8).href)})}var p=function(){function e(){this.movies=[]}return e.prototype.ngOnInit=function(){},e}(),h=r.lb({encapsulation:0,styles:[[""]],data:{}});function d(e){return r.xb(0,[(e()(),r.nb(0,0,null,null,1,"app-video-list-item",[],null,null,null,c,a)),r.mb(1,114688,null,0,l,[],{movie:[0,"movie"]},null)],function(e,t){e(t,1,0,t.context.$implicit)},null)}function f(e){return r.xb(0,[(e()(),r.nb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.wb(-1,null,[" Lista wszystkich film\xf3w:\n"])),(e()(),r.eb(16777216,null,null,1,null,d)),r.mb(3,278528,null,0,u.h,[r.N,r.K,r.s],{ngForOf:[0,"ngForOf"]},null)],function(e,t){e(t,3,0,t.component.movies)},null)}var y=n("AytR"),b=function(){function e(e){this.http=e}return e.prototype.fetchMovies=function(){return this.http.get(y.a.moviesUrl).toPromise()},e.prototype.fetchMovie=function(e){return t=this,void 0,r=function(){return function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,function(t){switch(t.label){case 0:return[4,this.fetchMovies()];case 1:return[2,t.sent().find(function(t){return t.id===e})]}})},new((n=void 0)||(n=Promise))(function(e,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r.throw(e))}catch(t){o(t)}}function u(t){t.done?e(t.value):new n(function(e){e(t.value)}).then(i,s)}u((r=r.apply(t,[])).next())});var t,n,r},e}(),v=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{l(r.next(e))}catch(t){i(t)}}function u(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}l((r=r.apply(e,t||[])).next())})},m=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},w=function(){function e(e){this.moviesService=e,this.movies=[]}return e.prototype.ngOnInit=function(){return v(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:return e=this,[4,this.moviesService.fetchMovies()];case 1:return e.movies=t.sent(),[2]}})})},e.prototype.getMovies=function(){return v(this,void 0,void 0,function(){var e;return m(this,function(t){switch(t.label){case 0:return[4,this.moviesService.fetchMovies()];case 1:return e=t.sent(),console.log(e),[2,e]}})})},e}(),g=r.lb({encapsulation:0,styles:[[""]],data:{}});function x(e){return r.xb(0,[(e()(),r.nb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.wb(-1,null,[" Lista film\xf3w\n"])),(e()(),r.nb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.getMovies()&&r),r},null,null)),(e()(),r.wb(-1,null,["Wy\u015bwietl filmy w konsoli"])),(e()(),r.nb(4,0,null,null,1,"app-video-list",[],null,null,null,f,h)),r.mb(5,114688,null,0,p,[],{movies:[0,"movies"]},null)],function(e,t){e(t,5,0,t.component.movies)},null)}function T(e){return r.xb(0,[(e()(),r.nb(0,0,null,null,1,"app-page-video-list",[],null,null,null,x,g)),r.mb(1,114688,null,0,w,[b],null,null)],function(e,t){e(t,1,0)},null)}var k=r.jb("app-page-video-list",w,T,{},{},[]),O=function(){function e(e,t){this.route=e,this.moviesService=t,this.movie=null}return e.prototype.ngOnInit=function(){this.setupMovie()},e.prototype.setupMovie=function(){var e=this;this.route.params.subscribe(function(t){return n=e,void 0,o=function(){var e;return function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,function(n){switch(n.label){case 0:return e=this,[4,this.moviesService.fetchMovie(t.id)];case 1:return e.movie=n.sent(),[2]}})},new((r=void 0)||(r=Promise))(function(e,t){function i(e){try{u(o.next(e))}catch(n){t(n)}}function s(e){try{u(o.throw(e))}catch(n){t(n)}}function u(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(i,s)}u((o=o.apply(n,[])).next())});var n,r,o})},e}(),E=r.lb({encapsulation:0,styles:[[""]],data:{}});function C(e){return r.xb(0,[(e()(),r.nb(0,0,null,null,6,"div",[["class","card"]],null,null,null,null,null)),(e()(),r.nb(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(e()(),r.nb(2,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(e()(),r.nb(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(e()(),r.wb(4,null,["",""])),(e()(),r.nb(5,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(e()(),r.wb(6,null,["",""]))],null,function(e,t){var n=t.component;e(t,1,0,n.movie.imageUrl),e(t,4,0,n.movie.title),e(t,6,0,n.movie.description)})}function j(e){return r.xb(0,[(e()(),r.eb(16777216,null,null,1,null,C)),r.mb(1,16384,null,0,u.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null)],function(e,t){e(t,1,0,t.component.movie)},null)}function S(e){return r.xb(0,[(e()(),r.nb(0,0,null,null,1,"app-page-video-profile",[],null,null,null,j,E)),r.mb(1,114688,null,0,O,[s.a,b],null,null)],function(e,t){e(t,1,0)},null)}var N=r.jb("app-page-video-profile",O,S,{},{},[]),P=n("mrSG"),R=n("F/XL"),z=n("6blF"),A=n("Phjn"),L=n("VnD/"),U=n("67Y/"),F=function(){return function(){}}(),M=function(){return function(){}}(),H=function(){function e(e){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?function(){t.headers=new Map,e.split("\n").forEach(function(e){var n=e.indexOf(":");if(n>0){var r=e.slice(0,n),o=r.toLowerCase(),i=e.slice(n+1).trim();t.maybeSetNormalizedName(r,o),t.headers.has(o)?t.headers.get(o).push(i):t.headers.set(o,[i])}})}:function(){t.headers=new Map,Object.keys(e).forEach(function(n){var r=e[n],o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(t.headers.set(o,r),t.maybeSetNormalizedName(n,o))})}:this.headers=new Map}return e.prototype.has=function(e){return this.init(),this.headers.has(e.toLowerCase())},e.prototype.get=function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null},e.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},e.prototype.getAll=function(e){return this.init(),this.headers.get(e.toLowerCase())||null},e.prototype.append=function(e,t){return this.clone({name:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({name:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({name:e,value:t,op:"d"})},e.prototype.maybeSetNormalizedName=function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)},e.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))},e.prototype.copyFrom=function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))})},e.prototype.clone=function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n},e.prototype.applyUpdate=function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,Object(P.g)(n)),this.headers.set(t,r);break;case"d":var o=e.value;if(o){var i=this.headers.get(t);if(!i)return;0===(i=i.filter(function(e){return-1===o.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}else this.headers.delete(t),this.normalizedNames.delete(t)}},e.prototype.forEach=function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(n){return e(t.normalizedNames.get(n),t.headers.get(n))})},e}(),I=function(){function e(){}return e.prototype.encodeKey=function(e){return q(e)},e.prototype.encodeValue=function(e){return q(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}();function q(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var K=function(){function e(e){void 0===e&&(e={});var t,n,r,o=this;if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new I,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=e.fromString,n=this.encoder,r=new Map,t.length>0&&t.split("&").forEach(function(e){var t=e.indexOf("="),o=Object(P.f)(-1==t?[n.decodeKey(e),""]:[n.decodeKey(e.slice(0,t)),n.decodeValue(e.slice(t+1))],2),i=o[0],s=o[1],u=r.get(i)||[];u.push(s),r.set(i,u)}),r)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(function(t){var n=e.fromObject[t];o.map.set(t,Array.isArray(n)?n:[n])})):this.map=null}return e.prototype.has=function(e){return this.init(),this.map.has(e)},e.prototype.get=function(e){this.init();var t=this.map.get(e);return t?t[0]:null},e.prototype.getAll=function(e){return this.init(),this.map.get(e)||null},e.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},e.prototype.append=function(e,t){return this.clone({param:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({param:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({param:e,value:t,op:"d"})},e.prototype.toString=function(){var e=this;return this.init(),this.keys().map(function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return n+"="+e.encoder.encodeValue(t)}).join("&")}).join("&")},e.prototype.clone=function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n},e.prototype.init=function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],o=r.indexOf(t.value);-1!==o&&r.splice(o,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}}),this.cloneFrom=null)},e}();function B(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function D(e){return"undefined"!=typeof Blob&&e instanceof Blob}function J(e){return"undefined"!=typeof FormData&&e instanceof FormData}var X=function(){function e(e,t,n,r){var o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new H),this.params){var i=this.params.toString();if(0===i.length)this.urlWithParams=t;else{var s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+i}}else this.params=new K,this.urlWithParams=t}return e.prototype.serializeBody=function(){return null===this.body?null:B(this.body)||D(this.body)||J(this.body)||"string"==typeof this.body?this.body:this.body instanceof K?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},e.prototype.detectContentTypeHeader=function(){return null===this.body?null:J(this.body)?null:D(this.body)?this.body.type||null:B(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof K?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},e.prototype.clone=function(t){void 0===t&&(t={});var n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,s=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,u=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,l=t.headers||this.headers,a=t.params||this.params;return void 0!==t.setHeaders&&(l=Object.keys(t.setHeaders).reduce(function(e,n){return e.set(n,t.setHeaders[n])},l)),t.setParams&&(a=Object.keys(t.setParams).reduce(function(e,n){return e.set(n,t.setParams[n])},a)),new e(n,r,i,{params:a,headers:l,reportProgress:u,responseType:o,withCredentials:s})},e}(),G=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),V=function(){return function(e,t,n){void 0===t&&(t=200),void 0===n&&(n="OK"),this.headers=e.headers||new H,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}(),W=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=G.ResponseHeader,n}return Object(P.c)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(V),_=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=G.Response,n.body=void 0!==t.body?t.body:null,n}return Object(P.c)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(V),Y=function(e){function t(t){var n=e.call(this,t,0,"Unknown Error")||this;return n.name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for "+(t.url||"(unknown url)"):"Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,n.error=t.error||null,n}return Object(P.c)(t,e),t}(V);function Z(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var $=function(){function e(e){this.handler=e}return e.prototype.request=function(e,t,n){var r,o=this;if(void 0===n&&(n={}),e instanceof X)r=e;else{var i;i=n.headers instanceof H?n.headers:new H(n.headers);var s=void 0;n.params&&(s=n.params instanceof K?n.params:new K({fromObject:n.params})),r=new X(e,t,void 0!==n.body?n.body:null,{headers:i,params:s,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}var u=Object(R.a)(r).pipe(Object(A.a)(function(e){return o.handler.handle(e)}));if(e instanceof X||"events"===n.observe)return u;var l=u.pipe(Object(L.a)(function(e){return e instanceof _}));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(Object(U.a)(function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return l.pipe(Object(U.a)(function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return l.pipe(Object(U.a)(function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return l.pipe(Object(U.a)(function(e){return e.body}))}case"response":return l;default:throw new Error("Unreachable: unhandled observe type "+n.observe+"}")}},e.prototype.delete=function(e,t){return void 0===t&&(t={}),this.request("DELETE",e,t)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.request("GET",e,t)},e.prototype.head=function(e,t){return void 0===t&&(t={}),this.request("HEAD",e,t)},e.prototype.jsonp=function(e,t){return this.request("JSONP",e,{params:(new K).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},e.prototype.options=function(e,t){return void 0===t&&(t={}),this.request("OPTIONS",e,t)},e.prototype.patch=function(e,t,n){return void 0===n&&(n={}),this.request("PATCH",e,Z(n,t))},e.prototype.post=function(e,t,n){return void 0===n&&(n={}),this.request("POST",e,Z(n,t))},e.prototype.put=function(e,t,n){return void 0===n&&(n={}),this.request("PUT",e,Z(n,t))},e}(),Q=function(){function e(e,t){this.next=e,this.interceptor=t}return e.prototype.handle=function(e){return this.interceptor.intercept(e,this.next)},e}(),ee=new r.p("HTTP_INTERCEPTORS"),te=function(){function e(){}return e.prototype.intercept=function(e,t){return t.handle(e)},e}(),ne=/^\)\]\}',?\n/,re=function(){return function(){}}(),oe=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e}(),ie=function(){function e(e){this.xhrFactory=e}return e.prototype.handle=function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new z.a(function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach(function(e,t){return r.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&r.setRequestHeader("Content-Type",o)}if(e.responseType){var i=e.responseType.toLowerCase();r.responseType="json"!==i?i:"text"}var s=e.serializeBody(),u=null,l=function(){if(null!==u)return u;var t=1223===r.status?204:r.status,n=r.statusText||"OK",o=new H(r.getAllResponseHeaders()),i=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return u=new W({headers:o,status:t,statusText:n,url:i})},a=function(){var t=l(),o=t.headers,i=t.status,s=t.statusText,u=t.url,a=null;204!==i&&(a=void 0===r.response?r.responseText:r.response),0===i&&(i=a?200:0);var c=i>=200&&i<300;if("json"===e.responseType&&"string"==typeof a){var p=a;a=a.replace(ne,"");try{a=""!==a?JSON.parse(a):null}catch(h){a=p,c&&(c=!1,a={error:h,text:a})}}c?(n.next(new _({body:a,headers:o,status:i,statusText:s,url:u||void 0})),n.complete()):n.error(new Y({error:a,headers:o,status:i,statusText:s,url:u||void 0}))},c=function(e){var t=l().url,o=new Y({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error",url:t||void 0});n.error(o)},p=!1,h=function(t){p||(n.next(l()),p=!0);var o={type:G.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&r.responseText&&(o.partialText=r.responseText),n.next(o)},d=function(e){var t={type:G.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",a),r.addEventListener("error",c),e.reportProgress&&(r.addEventListener("progress",h),null!==s&&r.upload&&r.upload.addEventListener("progress",d)),r.send(s),n.next({type:G.Sent}),function(){r.removeEventListener("error",c),r.removeEventListener("load",a),e.reportProgress&&(r.removeEventListener("progress",h),null!==s&&r.upload&&r.upload.removeEventListener("progress",d)),r.abort()}})},e}(),se=new r.p("XSRF_COOKIE_NAME"),ue=new r.p("XSRF_HEADER_NAME"),le=function(){return function(){}}(),ae=function(){function e(e,t,n){this.doc=e,this.platform=t,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return e.prototype.getToken=function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(u.r)(e,this.cookieName),this.lastCookieString=e),this.lastToken},e}(),ce=function(){function e(e,t){this.tokenService=e,this.headerName=t}return e.prototype.intercept=function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)},e}(),pe=function(){function e(e,t){this.backend=e,this.injector=t,this.chain=null}return e.prototype.handle=function(e){if(null===this.chain){var t=this.injector.get(ee,[]);this.chain=t.reduceRight(function(e,t){return new Q(e,t)},this.backend)}return this.chain.handle(e)},e}(),he=function(){function e(){}var t;return t=e,e.disable=function(){return{ngModule:t,providers:[{provide:ce,useClass:te}]}},e.withOptions=function(e){return void 0===e&&(e={}),{ngModule:t,providers:[e.cookieName?{provide:se,useValue:e.cookieName}:[],e.headerName?{provide:ue,useValue:e.headerName}:[]]}},e}(),de=function(){return function(){}}(),fe=function(){return function(){}}();n.d(t,"LogicModuleNgFactory",function(){return ye});var ye=r.kb(o,[],function(e){return r.sb([r.tb(512,r.j,r.Z,[[8,[i.a,k,N]],[3,r.j],r.x]),r.tb(4608,le,ae,[u.c,r.B,se]),r.tb(4608,ce,ce,[le,ue]),r.tb(5120,ee,function(e){return[e]},[ce]),r.tb(4608,oe,oe,[]),r.tb(6144,re,null,[oe]),r.tb(4608,ie,ie,[re]),r.tb(6144,M,null,[ie]),r.tb(4608,F,pe,[M,r.q]),r.tb(4608,$,$,[F]),r.tb(4608,u.k,u.j,[r.u,[2,u.q]]),r.tb(4608,b,b,[$]),r.tb(1073742336,he,he,[]),r.tb(1073742336,de,de,[]),r.tb(1073742336,u.b,u.b,[]),r.tb(1073742336,s.m,s.m,[[2,s.s],[2,s.k]]),r.tb(1073742336,fe,fe,[]),r.tb(1073742336,o,o,[]),r.tb(256,se,"XSRF-TOKEN",[]),r.tb(256,ue,"X-XSRF-TOKEN",[]),r.tb(1024,s.i,function(){return[[{path:"",component:w},{path:":id",component:O}]]},[])])})}}]);