if(/^u/.test(typeof define)){var def={};this.define=function(e,q){def[e]=q()};this.require=function(e){return def[e]}}
define("minifiedUtil",function(){function e(f){return null!=f?""+f:""}function q(f){return"string"==typeof f}function m(f){return"function"==typeof f}function l(f){return!!f&&"object"==typeof f}function j(f){return"number"==typeof f}function t(f){return l(f)&&!!f.getDay}function w(f){return!0===f||!1===f}function g(f){var a=typeof f;return"object"==a?!(!f||!f.getDay):"string"==a||"number"==a||w(f)}function d(f){return!!f&&null!=f.length&&!q(f)&&!(f&&f.nodeType)&&!m(f)}function u(f){return f}function v(f,
a,b){return e(f).replace(a,null!=b?b:"")}function F(f){return v(f,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function x(f,a){for(var b in f)f.hasOwnProperty(b)&&a(b,f[b]);return f}function D(f,a){if(f)for(var b=0;b<f.length;b++)a(f[b],b);return f}function N(f,a){var b=[];D(f,function(f,c){a(f,c)&&b.push(f)});return b}function Q(f,a,b){var c=[];f(a,function(f,a){d(f=b(f,a))?D(f,function(f){c.push(f)}):null!=f&&c.push(f)});return c}function E(f,a){return Q(D,f,a)}function G(f){var a=[];x(f,function(f){a.push(f)});
return new O(a)}function B(f,a){var b=[];D(f,function(f,c){b.push(a(f,c))});return b}function A(f,a,b){var c=a;x(f,function(f,a){c=b(c,f,a)});return c}function C(f,a,b){if(d(f)){var c=a;D(f,function(f,a){c=b(c,f,a)});return c}return A(f,a,b)}function H(f,a){if(d(f)){var c=P(a);return b(P(f).sub(0,c.length),c)}return null!=a&&f.substr(0,a.length)==a}function J(f,a){if(d(f)){var b=P(a);return P(f).sub(-b.length).equals(b)||!b.length}return null!=a&&f.substr(f.length-a.length)==a}function T(f,a,b){if(!d(f))return[];
var c=f.length,h=0>a?c+a:a,n=null==b?c:0<=b?b:c+b;return N(f,function(f,a){return a>=h&&a<n})}function I(f,a){var b={},c=d(a);D(f,function(f,d){b[f]=c?a[d]:a});return b}function L(f,a){for(var b=m(a)?a:function(f,b){if(a===f)return b},c,d=0;d<f.length;d++)if(null!=(c=b(f[d],d)))return c}function a(f,a){if(d(f))for(var b=0;b<f.length;b++)if(f[b]==a)return!0;return!1}function b(f,a){if(f==a)return!0;if(null==f||null==a)return!1;if(g(f)||g(a))return t(f)&&t(a)&&f.getTime()==a.getTime();if(d(f))return d(a)?
f.length!=a.length?!1:!L(f,function(f,c){if(!b(f,a[c]))return!0}):!1;if(d(a))return!1;var c=G(f),h=c.length,n=0;x(a,function(){n++});return h!=n?!1:!L(c,function(c){if(!b(f[c],a[c]))return!0})}function c(a,b,c){return a.apply(c&&b,B(c||b,u))}function h(a,b,d,h){return function(){return c(a,b,E([d,arguments,h],u))}}function n(a,b,c,d){setTimeout(h(b,c,d),a)}function p(a,b,c){"undefined"!=typeof process&&process.nextTick?process.nextTick(h(a,b,c)):n(0,a,b,c)}function z(a,b){return y(b,0,0,0,a)}function y(a,
b,c,d,h,n,p){function g(a){var f=a.length;return f>p?g(a.substring(0,f-p))+(n||",")+a.substr(f-p):a}var e=0>a,y=/(\d+)(\.(.*))?/.exec((e?-a:a).toFixed(b));a=y[1];for(d=(d||".")+y[3];a.length<(h||1);)a="0"+a;p&&(a=g(a));return(e?"-":"")+a+(b?c?v(d,/[.,]?0+$/):d:"")}function W(a,b,c){c=c.getTimezoneOffset();return 60*parseInt(a[b])+parseInt(a[b+1])+c}function aa(a,b){if(t(b)){var c,h,n=a,p=b,g={y:"FullYear",M:["Month",function(a){return a+1}],n:["Month",function(a,b){return(b||ba)[a]}],N:["Month",function(a,
b){return(b||X)[a]}],d:"Date",m:"Minutes",H:"Hours",h:["Hours",function(a){return a%12}],K:["Hours",function(a){return a+1}],k:["Hours",function(a){return a%12+1}],s:"Seconds",S:"Milliseconds",a:["Hours",function(a,b){return(b||ca)[12>a?0:1]}],w:["Day",function(a,b){return(b||"Sun Mon Tue Wed Thu Fri Sat".split(" "))[a]}],W:["Day",function(a,b){return(b||"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "))[a]}],z:["TimezoneOffset",function(a){if(c)return c;var b=0<a?a:-a;return(0>
a?"+":"-")+z(2,Math.floor(b/60))+z(2,b%60)}]};if(h=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(a))c=h[1],p=Y(b,"minutes",W(h,2,b)),n=h[4];return v(n,/(y+|M+|n+|N+|d+|m+|H+|h+|K+|k+|s+|S+|a+|w+|W+|z+)(?:\[([^\]]+)\])?/g,function(a,b,f){a=b.length;b=g[b.charAt(0)];var c=p["get"+(d(b)?b[0]:b)].call(p);d(b)&&(f=f?f.split(","):null,c=b[1](c,f));null!=c&&!q(c)&&(c=z(a,c));return c})}return L(a.split(/\s*\|\s*/),function(a){var f,c;if(f=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){a=b;var d=parseFloat(f[3]);if(isNaN(d)||
!j(a))a=null==a?"null":e(a),d=f[3];if(f[1]){if(!f[2]&&a==d||"<"==f[1]&&a>d||">"==f[1]&&a<d)return null}else if(a!=d)return null;a=f[4]}if(j(b)&&(f=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(a))){c=e(f[1])+e(f[2]);var d=e(f[1]).length?v(c,/[.,]/g).length:1,h=v(v(c,/^.*[0#]/),/[^,.]/g),n=e(f[3]).length+e(f[4]).length,p,g;if(c=/([.,])[^.,]+[.,]/.exec(f[0]))p=c[1],g=c[0].length-2;p=y(b,n,e(f[3]).length,h,d,p,g);g=a;a=f.index;f=e(f[0]).length;return g.substr(0,a)+p+g.substr(a+f)}return a})}function da(a,b){if(1==
arguments.length)return da(null,a);var c,d=(c=/[0#]([.,])[_9]/.exec(a))?c[1]:(c=/^[.,]$/.exec(a))?c[0]:".";c=parseFloat(v(v(v(b,","==d?/\./g:/,/g),d,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(c)?U:c}function ea(a){return new Date(a.getTime())}function R(a,b,c){a["set"+b].call(a,a["get"+b].call(a)+c)}function Y(a,b,c){if(3>arguments.length)return Y(new Date,a,b);var d=ea(a),h=b.charAt(0).toUpperCase()+b.substr(1);R(d,h,c);return d}function fa(a,b,c){var d=b.getTime(),h=c.getTime(),n=h-d;if(0>n)return-fa(a,
c,b);if(b={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5}[a])return n/b;b=a.charAt(0).toUpperCase()+a.substr(1);a=Math.floor(n/{fullYear:31536E6,month:2628E6,date:864E5}[a]-2);d=new Date(d);R(d,b,a);for(n=a;n<1.2*a+4;n++)if(R(d,b,1),d.getTime()>h)return n}function Z(a,b,c){var d=/([^.]+)\.(.*)/.exec(a);if(d){var h=b[d[1]];return Z(d[2],m(h)?h():h,c)}h=b[a];return c===U?m(h)?h():h:m(h)?h(c):b[a]=c}function O(a,b){for(var c=0,h=0;h<a.length;h++){var n=a[h];if(b&&d(n))for(var p=0;p<n.length;p++)this[c++]=
n[p];else this[c++]=n}this.length=c;this._=!0}function P(){return new O(arguments,!0)}function V(a){return function(b,c){return new O(a(this,b,c))}}function M(a){return function(b,c){return a(this,b,c)}}function S(a){return function(b,c,d){return new O(a(b,c,d))}}var U,X="January February March April May June July August September October November December".split(" "),ba=B(X,function(a){return a.substr(0,3)}),ca=["am","pm"];x({each:M(D),filter:V(N),collect:V(E),map:V(B),reduce:M(C),toObject:M(I),
equals:M(b),sub:V(T),find:M(L),startsWith:M(H),endsWith:M(J),contains:M(a),array:function(){return B(this,u)},join:function(a){return B(this,u).join(a)},sort:function(a){return new O(B(this,u).sort(a))},uniq:function(){var a={};return this.filter(function(b){if(a[b])return!1;a[b]=1;return!0})},intersection:function(a){var b=I(a,1);return this.filter(function(a){var c=b[a];b[a]=0;return c})},onlyLeft:function(a){var b=I(a,1);return this.filter(function(a){return!b[a]})},tap:function(a){a(this);return this},
toString:function(){return"["+this.map(function(a){return q(a)?"'"+v(a,/'/g,"\\'")+"'":a}).join(", ")+"]"}},function(a,b){O.prototype[a]=b});x({bind:h,partial:function(a,b,c){return h(a,null,b,c)},once:function(a){var b=0;return function(){if(!b++)return c(a,this,arguments)}},selfFunc:u,each:D,eachObj:x,toObject:I,filter:S(N),filterObj:function(a,b){var c={};x(a,function(a,f){b(a,f)&&(c[a]=f)});return c},collect:S(E),collectObj:S(function(a,b){return Q(x,a,b)}),map:S(B),mapObj:function(a,b){var c=
{};x(a,function(a,f){c[a]=b(a,f)});return c},reduce:C,reduceObj:A,find:L,contains:a,sub:S(T),startsWith:H,endsWith:J,equals:b,toString:e,isList:d,isFunction:m,isObject:l,isNumber:j,isBool:w,isDate:t,isValue:g,isString:q,toString:e,prop:Z,escapeRegExp:F,defer:p,delay:n,dateClone:ea,dateAdd:Y,dateDiff:fa,dateMidnight:function(a){a=a||new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatNumber:y,pad:z,formatValue:aa,parseDate:function(a,b){var c={y:0,M:[1,1],n:[1,ba],N:[1,X],d:2,
m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ca]},h={},n=1,p=0,g,e;(e=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))?(p=W(e,1,new Date),e=e[3]):e=a;if(!(e=RegExp(e.replace(/(m+|y+|d+|h+|k+|s+|z+|\s+|n+|a+|w+)(?:\[([^\]]*)\])?/ig,function(a,b,c){a=b.charAt(0);return/[dmhkyhs]/i.test(a)?(h[n++]=a,b=b.length,"(\\d"+(2>b?"+":"{1,"+b+"}")+")"):"z"==a?(g=n,n+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(a)?(h[n++]=[a,c&&c.split(",")],"(\\w+)"):/w/i.test(a)?"\\w+":/\s/.test(a)?"\\s+":F(b)})).exec(b)))return U;null!=g&&(p=
W(e,g,new Date));for(var p=[0,0,0,0,-p,0,0],y=1;y<n;y++){var j=e[y],l=h[y];if(d(l)){var m=l[0],z=c[m],u=z[0],l=L(l[1]||z[1],function(a,b){return H(j.toLowerCase(),a.toLowerCase())?b:null});if(null==l)return U;p[u]="a"==m?p[u]+12*l:l}else l&&(m=parseInt(j),z=c[l],d(z)?p[z[0]]+=m-z[1]:p[z]+=m)}return new Date(p[0],p[1],p[2],p[3],p[4],p[5],p[6])},parseNumber:da,keys:G,values:function(a){var b=[];x(a,function(a,c){b.push(c)});return new O(b)},equalsRight:function(a,b){var c=!0;x(b,function(b,d){c=c&&
d==a[b]});return c},copyObj:function(a,b){x(a,function(a,c){b[a]=c});return b},defaults:function(a,b){x(a,function(a,c){null==b[a]&&(b[a]=c)});return b},trim:function(a){return v(a,/^\s+|\s+$/g)},coal:function(){for(var a=arguments,b=0;b<a.length;b++)if(null!=a[b])return a[b];return null},promise:function ga(){function a(c,g){null==b&&(b=c,h=d(g)?g:[g],p(function(){D(n,function(a){a()})}))}var b,h=[],n=[],g=arguments,e=g.length,y=0,h=[];D(g,function ha(b,c){try{b.then(function(b){b&&m(b.then)?ha(b.then,
c):(h[c]=B(arguments,u),++y==e&&a(!0,2>e?h[c]:h))},function(b){h[c]=B(arguments,u);a(!1,2>e?h[c]:[h[c][0],h,c])})}catch(d){a(!1,[d,h,c])}});a.then=function(a,d){var g=ga(),e=function(){try{var n=b?a:d;if(m(n)){var p=c(n,h);p&&m(p.then)?p.then(function(a){g(!0,[a])},function(a){g(!1,[a])}):g(!0,[p])}else g(b,h)}catch(e){g(!1,[e])}};null!=b?p(e):n.push(e);return g};a.always=function(a){return then(a,a)};a.error=function(a){return then(0,a)};return a},format:function(a,b){return v(a,/{([^,}]*)(,([^}]*))?}/g,
function(a,c,d,h){a=""==c?b:Z(c,b);return d?aa(h,a):e(a)})}},function(a,b){P[a]=b});return{_:P}});var k=!0,r=null,s=!1;if(/^u/.test(typeof define)){var K={};this.define=function(e,q){K[e]=q()};this.require=function(e){return K[e]}}
define("minified",function(){function e(a){return a!=r?""+a:""}function q(a){return"string"==typeof a}function m(a){return"function"==typeof a}function l(a){return a&&a.length!=r&&!q(a)&&!(a&&a.nodeType)&&!m(a)}function j(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function t(a,b){if(a)for(var c=0;c<a.length;c++)b(a[c],c);return a}function w(a,b){var c=[];t(a,function(a,d){b(a,d)&&c.push(a)});return c}function g(a,b,c){var d=[];(c||t)(a,function(a,c){l(a=b(a,c))?t(a,function(a){d.push(a)}):
a!=r&&d.push(a)});return d}function d(a,b,c){return e(a).replace(b,c||"")}function u(a){return parseFloat(d(a,/^[^\d-]/))}function v(a){var b={o:"absolute",g:"hidden",d:"block",f:r},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function F(a){a()}function x(){t(H,F);H=r}function D(a){H?H.push(a):A.setTimeout(a,0)}function N(){function a(a,n){b==r&&(b=a,c=n,A.setTimeout(function(){t(d,F)},0))}var b,c=[],d=[],n=a.then=function(a,n){function g(){try{var d=b?a:n;if(m(d)){var h=d.apply(r,c);
h&&m(h.then)?h.then(function(a){e(k,[a])},function(a){e(s,[a])}):e(k,[h])}else e(b,c)}catch(y){e(s,[y])}}var e=N();b!=r?A.setTimeout(g,0):d.push(g);return e};a.always=function(a){return n(a,a)};a.error=function(a){return n(0,a)};return a}function Q(a){return L[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function E(a,b,c){return m(a)?D(a):new B(G(a,b,c))}function G(a,b,c){function h(a){return l(a)?g(a,h):a}function n(a){a=h(a);return p?w(a,function(a){for(;a=a.parentNode;){if(a===p)return k;
if(c)return s}}):a}var p,e,y,j,m;if(b&&1!=(b=G(b)).length)return g(b,function(b){return G(a,b)});p=b&&b[0];if(!q(a))return n(l(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return g(b,function(a){return G(a,p)});if(b=/(\S+)\s+(.+)$/.exec(a))return G(b[2],G(b[1],p));if(a!=(b=d(a,/^#/)))return n([C.getElementById(b)]);p=p||C;e=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];j=b[2];b=(y=p.getElementsByClassName&&j)?p.getElementsByClassName(j):p.getElementsByTagName(e||"*");if(e=y?e:j)m=RegExp("\\b"+e+"\\b","i"),b=
w(b,function(a){return m.test(a[y?"nodeName":"className"])});return c?n(b):b}function B(a){for(var b=0;b<a.length;b++)this[b]=a[b];this.length=a.length}var A=this,C=document,H=[],J=[],T=g(["msR","webkitR","mozR","r"],function(a){return A[a+"equestAnimationFrame"]})[0]||function(a){A.setTimeout(a,33)},I=!!C.all&&!H.map,L={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};j({each:function(a){t(this,a);return this},filter:function(a){return new B(w(this,a))},collect:function(a){return new B(g(this,
a))},sub:function(a,b){var c=this.length,d=0>a?c+a:a,n=b==r?c:0<=b?b:c+b;return this.filter(function(a,b){return b>=d&&b<n})},find:function(a){for(var b=m(a)?a:function(b,c){if(a===b)return c},c,d=0;d<this.length;d++)if((c=b(this[d],d))!=r)return c},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:r})},remove:function(){this.each(function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,h=c[0];if(h){if(q(a)){var n=d(a,/^[$@]/),
e,g=/^\$\$/.test(a)&&("hidden"==c.get("$visibility")||"none"==c.get("$display"));e="$"==a?h.className:"$$"==a?I?h.style.cssText:h.getAttribute("style"):"$$fade"==a?isNaN(e=g?0:I?u(c.get("$filter"))/100:u(c.get("$opacity")))?1:e:"$$slide"==a?(g?0:h.offsetHeight)+"px":/^\$/.test(a)?A.getComputedStyle?A.getComputedStyle(h,r).getPropertyValue(d(n,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):h.currentStyle[n]:/^@/.test(a)?h.getAttribute(n):h[n];return b?u(e):e}var y={};(l(a)?t:j)(a,function(a){y[a]=
c.get(a,b)});return y}},set:function(a,b,c){var h=this,e;void 0!==b?"$$fade"==a||"$$slide"==a?h.set({g:0<(e=u(b))?"visible":"hidden",d:"block"}).set("$$fade"==a?I?{k:"alpha(opacity = "+100*e+")",p:1}:{l:e}:{f:/px$/.test(b)?b:function(a,b,c){return e*(e&&v($(c)))+"px"},m:"hidden"}):h.each(function(h,e){var g=m(b)?b:c,n=d(a,/^[@$]/),l=h.className||"",j=/^\$/.test(a)?h.style:h,g=g?g(E(h).get(a),e,h,b):b;"$"==a?(t(g.split(/\s+/),function(a){var b=d(a,/^[+-]/),c=l;l=d(l,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||
b==a&&c==l)l+=" "+b}),h.className=d(l,/^\s+|\s+(?=\s|$)/g)):"$$"==a?I?j.cssText=g:h.setAttribute("style",g):/^@/.test(a)?g!=r&&j.setAttribute(n,g):j[n]=g}):q(a)||m(a)?h.set("$",a):j(a,function(a,b){h.set(a,b,c)});return h},append:function(a,b){return this.set(a,b,function(a,b,d,g){return e(a)+g})},prepend:function(a,b){return this.set(a,b,function(a,b,d,g){return g+e(a)})},add:function(a,b){return this.each(function(c,d){var g;(function z(a){l(a)?t(a,z):m(a)?z(a(c,d)):a!=r&&(a=a&&a.nodeType?a:C.createTextNode(a),
g?g.parentNode.insertBefore(a,g.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),g=a)})(a&&a.nodeType&&d?r:a)})},fill:function(a){return this.each(function(a){E(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,
c,d){d.replaceChild(a,c)})},clone:function(){return this.collect(function(a){var b={},c,d=a&&a.nodeType;return 1==d?(t(a.attributes,function(a){c=a.name;"id"!=c&&(b["style"==c?"$$":"class"==c?"$":"@"+c]=a.value)}),E.EE(a.tagName,b,E(a.childNodes).clone())):5>d?a.textContent:r})},animate:function(a,b,c,h){var g=this,e=[],l=/-?[\d.]+/,m,q=N();h=h||{};h.time=0;h.stop=function(){m();q(s)};b=b||500;c=c||0;g.each(function(b){var c={b:E(b),a:{},c:{}};j(c.a=c.b.get(a),function(b,g){var h=a[b];"$$slide"==
b&&(h=h*v(c.b)+"px");c.c[b]=/^[+-]=/.test(h)?d(h.substr(2),l,u(g)+u(d(h,/\+?=/))):h});e.push(c)});m=E.loop(function(a){function v(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(d(a,/[^\d,]+/g).split(",")[b])}function w(d,h){return d+a/b*(h-d)*(c+(1-c)*a/b*(3-2*a/b))}h.time=a;a>=b||0>a?(t(e,function(a){a.b.set(a.c)}),m(),h.time=r,q(k,[g])):t(e,function(a){j(a.a,function(b,c){var h="rgb(",g=a.c[b];if(/^#|rgb\(/.test(g))for(var e=0;3>e;e++)h+=Math.round(w(v(c,
e),v(g,e)))+(2>e?",":")");else h=d(g,l,w(u(c),u(g)));a.b.set(b,h)})})});return q},toggle:function(a,b,c,h){var g={},e=s,l=/\b(?=\w)/g,j=this;return!b?j.toggle(d(a,l,"-"),d(a,l,"+")):j.set(a)&&function(d){d!==e&&(e="boolean"==typeof d?d:!e,c?j.q(e?b:a,g.stop?g.stop()||g.time:c,h,g):j.set(e?b:a))}},on:function(a,b,c,d){return this.each(function(g,e){function l(a){a=a||A.event;if(!b.apply(d?c:a.target,d||c||[a,e])||d)a.stopPropagation&&(a.preventDefault(),a.stopPropagation()),a.returnValue=s,a.cancelBubble=
k}(b.M=b.M||[]).push({e:g,h:l,n:a});g.addEventListener?g.addEventListener(a,l,k):g.attachEvent("on"+a,l)})},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b}},function(a,b){B.prototype[a]=b});j({$$:function(a){return G(a)[0]},EE:function(a,b,c,d){return function(){var g=C.documentElement.namespaceURI,g=E(g?C.createElementNS(g,a):C.createElement(a));l(b)||"object"!=typeof b?g.add(b):g.set(b).add(c);d&&d(g);return g}},request:function(a,
b,c,d,n,m){var u,v=c,t=0,w=N();try{return u=A.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=r&&(d=d||{},!q(c)&&!(c&&c.nodeType)&&(v=g(c,function R(a,b){return l(b)?g(b,function(b){return R(a,b)}):encodeURIComponent(a)+(b!=r?"="+encodeURIComponent(b):"")},j).join("&")),/post/i.test(a)?!(c&&c.nodeType)&&!q(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+v,v=r)),u.open(a,b,k,n,m),j(d,function(a,b){u.setRequestHeader(a,b)}),u.onreadystatechange=
function(){4==u.readyState&&!t++&&(200==u.status?w(k,[u.responseText,u.responseXML]):w(s,[u.status,u.statusText,u.responseText]))},u.send(v),w}catch(x){t||w(s,[0,r,e(x)])}},toJSON:function b(c){return c==r?""+c:q(c=c.valueOf())?'"'+d(c,/[\\\"\x00-\x1f\x22\x5c]/g,Q)+'"':l(c)?"["+g(c,b).join()+"]":"object"==typeof c?"{"+g(c,function(c,d){return b(c)+":"+b(d)},j).join()+"}":e(c)},parseJSON:A.JSON?A.JSON.parse:function(b){b=d(b,/[\x00\xad\u0600-\uffff]/g,Q);if(/^[[\],:{}\s]*$/.test(d(d(b,/\\["\\\/bfnrtu]/g),
/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:D,setCookie:function(b,c,d,g,e,l){C.cookie=b+"="+(l?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864E5*d)).toUTCString():"")+"; path="+(g?escapeURI(g):"/")+(e?"; domain="+escape(e):"")},getCookie:function(b,c){var d,g=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(C.cookie))&&d[2];return c?g:g&&unescape(g)},loop:function(b){var c={i:b,j:(new Date).getTime(),a:function(){for(var b=0;b<J.length;b++)J[b]===
c&&J.splice(b--,1)}};2>J.push(c)&&function n(){t(J,function(b){b.i(Math.max(0,(new Date).getTime()-b.j),b.a)}).length&&T(n)}();return c.a},off:function(b){t(b.M,function(b){b.e.addEventListener?b.e.removeEventListener(b.n,b.h,k):b.e.detachEvent("on"+b.n,b.h)});b.M=r}},function(b,c){E[b]=c});A.onload=x;C.addEventListener&&C.addEventListener("DOMContentLoaded",x,s);return{$:E}});var _=require("minifiedUtil")._;
function parseSourceSections(e){function q(){return{id:"anon"+m++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}e=e.split("\n");var m=100,l=[],j=q(),t=!1;_.each(e,function(e){if(t&&/^.*\*\/\s*$/.test(e))t=!1;else if(t){var g=e.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),d=g.match(/^\s*@([a-z]+)/);d?(d=d[1],g=_.trim(g.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==d||"example"==d?j[d].push(g):"requires"==d?g.length&&_.each(g.split(/\s+/),function(d){j.requires[d]=1}):"param"==
d?j.params.push({name:g.replace(/\s.*$/,""),desc:g.replace(/^\S+\s+/,"")}):"return"==d?j.params.push({name:"@return",desc:g}):"function"==d?j.params[j.params.length-1].funcs.push(g):j[d]=""!=g?g:1):j.params.length?j.params[j.params.length-1].desc+="\n"+_.trim(g):j.example.length?j.example[j.example.length-1]+="\n"+g:j.desc+=g+"\n"}else/^\s*\/\*\$/.test(e)&&!/\*\/\s*$/.test(e)&&(t=!0,l.push(j),j=q());j.src.push(e)});l.push(j);return l}
function createSectionMap(e){var q={};_.each(e,function(e){q[e.id]=e});return q}function completeRequirements(e,q){var m=0;_.each(e,function(e){_.eachObj(e.requires,function(j){var t=q[j];if(!t)throw Error('Unknown id in requirement: "'+j+'"');_.eachObj(t.requires,function(j){e.requires[j]||(m++,e.requires[j]=1)})})});0<m?completeRequirements(e,q):_.each(e,function(e){_.eachObj(e.requires,function(j){q[j].requiredBy[e.id]=1})})}
function calculateDependencies(e,q){var m={};_.eachObj(q,function(l){q[l]&&(m[l]=1,_.eachObj(e[l].requires,function(e){m[e]=1}))});return m}function createDefaultConfigurationMap(e,q){var m={};_.each(e,function(e){if(e.configurable&&("default"==e.configurable||q))m[e.id]=1});return m}
function compile(e,q,m){var l="",j=calculateDependencies(q,m),t=[],w=!0;_.filter(e,function(e){return j[e.id]||!(e.configurable||e.dependency)}).each(function(e){_.each(e.src,function(d){if(/^\s*$/.test(d))w||(l+="\n"),w=!0;else{var e=d.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(e&&"cond"==e[2]&&!!j[e[4]]!=("!"==e[3]))l+=e[1]+e[5]+"\n";else if(e&&"condblock"==e[2])t.unshift(!!j[e[4]]!=("!"==e[3]));else if(t.length&&/^\s*\/\/\s*@condend(\s|$)/.test(d))t.shift();else if(0==t.length||
t[0])l+=d+"\n";w=!1}})});return l}function prepareSections(e){e=parseSourceSections(e);var q=createSectionMap(e);completeRequirements(e,q);var m=createDefaultConfigurationMap(e);return{sections:e,sectionMap:q,enabledSections:m}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(e,q){var m=_.filter(e,function(d){return d.configurable}),l=_.filter(_.keys(q),function(d){return q[d]}),j,t=[];l.length==m.length?(j=CONFIG_COMMENT+CONFIG_ALL,t=[]):l.length>m.length/2?(j=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,t=_.filter(m,function(d){return!q[d.id]}).collect(function(d){return d.id})):(j=CONFIG_COMMENT+CONFIG_ONLY,t=l);var w="// "+CONFIG_START+" use this comment to re-create your build configuration\n"+j,g=50;_(t).sort().each(function(d){g<d.length?(g=
70,w+="\n// - "+d+", "):(w+=d+", ",g-=d.length+2)});return w=w.replace(/,\s*$/,".\n")}
function deserializeEnabledSections(e,q){function m(d){return RegExp("^"+d.replace(/ /g,"\\s+"))}for(var l=m(CONFIG_START+".*"),j=m(CONFIG_ALL+"\\s*\\."),t=m(CONFIG_ALL_EXCEPT+"\\s*"),w=m(CONFIG_ONLY+"\\s*"),g=m(CONFIG_COMMENT),d=q.split("\n"),u=0;u<d.length;u++){var v=d[u];if(/^\s*\/\/s*/.test(v)&&(v=v.replace(/^\s*\/\/\s*/,""),l.test(v)&&u+1<d.length)){for(var v="",F=u+1;F<d.length;F++)if(g.test(d[F])){if(v+=d[F].replace(g,""),/\s*\.\s*$/.test(d[F]))break}else break;if(j.test(v))return createDefaultConfigurationMap(e,
!0);v=v.replace(/\s*\.\s*$/,"");if(t.test(v)){var x=createDefaultConfigurationMap(e,!0);_.each(v.replace(t,"").split(/\s*,\s*/),function(d){delete x[d]});return x}if(w.test(v))return x={},_.each(v.replace(w,"").split(/\s*,\s*/),function(d){x[d]=1}),x}}return null};var $=require("minified").$,$$=$.$$,EE=$.EE,_=require("minifiedUtil")._,SRC="minified-src.js",MODULES="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(e,q,m){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:e,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:q?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(e){m&&m($.parseJSON(e))},function(e,j,q){window.console&&console.log("error",e,j,q);m&&m(null)}).error(function(e){window.console&&console.log(e)})}
function setUpConfigurationUI(e){function q(){$(".modCheck").each(function(e){var d=0;$(".secCheck",e.parentNode.parentNode).each(function(e){e.checked&&d++});e.checked=0<d})}function m(g){var d=e.sectionMap[g.id.substr(4)];g.checked?_.eachObj(d.requires,function(d){$("#sec-"+d).set("checked",!0)}):_.eachObj(d.requiredBy,function(d){$("#sec-"+d).set("checked",!1)})}$("#compile").on("click",function(){var g={};$(".secCheck").each(function(d){d.checked&&(g[d.id.substr(4)]=1)});var d=compile(e.sections,
e.sectionMap,g),j=serializeEnabledSections(e.sections,g);$$("#compressionAdvanced").checked||$$("#compressionSimple").checked?($$("#compile").disabled=!0,closureCompile(d,$$("#compressionAdvanced").checked,function(d){$$("#compile").disabled=!1;d?($$("#compile").disabled=!1,$("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=j+"\n"+d.compiledCode,$("#resultPlain").fill((d.statistics.compressedSize/1024).toFixed(2)+"kb ("+d.statistics.compressedSize+" bytes)"),$("#resultGzipped").fill((d.statistics.compressedGzipSize/
1024).toFixed(2)+"kb ("+d.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+d.outputFilePath)):alert("Google Closure Service not availble. Try again later.")})):($$("#resultSrc").value=j+d,$("#resultPlain").fill((d.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"}));return!1});for(var l=1;l<MODULES.length;l++){var j,t;$("#sectionCheckboxes").add(t=EE("div",{"@id":"divMod-"+l},EE("div",{className:"moduleDescriptor"},
[j=EE("input",{"@id":"mod-"+l,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+l},MODULES[l])]))());$(j).on("change",function(){var e=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(d){d.checked=e;m(d)});q();return!0});var w;_.filter(e.sections,function(e){return e.module==MODULES[l]&&e.configurable}).sort(function(e,d){var j=e.name||e.id,l=d.name||d.id;return j==l?0:j>l?1:-1}).each(function(g){function d(d,g){var j=_.filter(_.keys(g),function(d){return!!g[d].name});
if(!j.length)return null;var l=0,m=d;_.each(j,function(d){l++<Math.min(j.length,8)&&(1<l&&(m=l==Math.min(j.length,8)?m+" and ":m+", "),m=8==l&&8<j.length?m+"more":m+(e.sectionMap[d].name||e.sectionMap[d].id))});return m+="."}var j=d("Required by ",g.requiredBy),l=d("Requires ",g.requires);t.add(EE("div",{className:"sectionDescriptor"},[w=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+g.id,checked:"default"==g.configurable?"checked":null})(),EE("label",{"@for":"sec-"+g.id},g.name||
g.id),EE("div",{className:"requirements"},[j?[j,EE("br")]:null,l])]));$(w).on("change",function(){m(this);q();return!0})})}}$(function(){$.request("get",SRC,null).then(function(e){setUpConfigurationUI(prepareSections(e))}).error(function(e){window.console&&console.log(e)})});