const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/generateCv-GwBIsnlB.js","assets/rolldown-runtime-QTnfLwEv.js","assets/mui-vendor-D49jQm7l.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,B as n,C as r,D as i,E as a,F as o,I as s,L as c,M as l,N as u,O as d,P as f,R as p,S as m,T as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,i as ee,j as te,k as ne,l as re,m as ie,n as ae,o as oe,p as se,r as ce,s as le,t as ue,u as de,v as fe,w as pe,x as me,y as he}from"./mui-vendor-D49jQm7l.js";import{a as ge,c as _e,d as ve,f as ye,i as be,l as xe,n as Se,o as Ce,r as we,s as Te,t as w,u as Ee}from"./react-vendor-DCXnYGBX.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var T=`-ms-`,De=`-moz-`,E=`-webkit-`,Oe=`comm`,ke=`rule`,Ae=`decl`,je=`@import`,Me=`@namespace`,Ne=`@keyframes`,Pe=`@layer`,Fe=Math.abs,Ie=String.fromCharCode,Le=Object.assign;function Re(e,t){return k(e,0)^45?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}function ze(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Be(e,t,n){return e.indexOf(t,n)}function k(e,t){return e.charCodeAt(t)|0}function A(e,t,n){return e.slice(t,n)}function j(e){return e.length}function Ve(e){return e.length}function He(e,t){return t.push(e),e}function Ue(e,t){return e.map(t).join(``)}function We(e,t){return e.filter(function(e){return!D(e,t)})}var Ge=1,Ke=1,qe=0,M=0,N=0,Je=``;function Ye(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ge,column:Ke,length:o,return:``,siblings:s}}function P(e,t){return Le(Ye(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=P(e.root,{children:[e]});He(e,e.siblings)}function Xe(){return N}function Ze(){return N=M>0?k(Je,--M):0,Ke--,N===10&&(Ke=1,Ge--),N}function I(){return N=M<qe?k(Je,M++):0,Ke++,N===10&&(Ke=1,Ge++),N}function L(){return k(Je,M)}function Qe(){return M}function $e(e,t){return A(Je,e,t)}function et(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tt(e){return Ge=Ke=1,qe=j(Je=e),M=0,[]}function nt(e){return Je=``,e}function rt(e){return ze($e(M-1,ot(e===91?e+2:e===40?e+1:e)))}function it(e){for(;(N=L())&&N<33;)I();return et(e)>2||et(N)>3?``:` `}function at(e,t){for(;--t&&I()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return $e(e,Qe()+(t<6&&L()==32&&I()==32))}function ot(e){for(;I();)switch(N){case e:return M;case 34:case 39:e!==34&&e!==39&&ot(N);break;case 40:e===41&&ot(e);break;case 92:I();break}return M}function st(e,t){for(;I()&&e+N!==57&&!(e+N===84&&L()===47););return`/*`+$e(t,M-1)+`*`+Ie(e===47?e:I())}function ct(e){for(;!et(L());)I();return $e(e,M)}function lt(e){return nt(ut(``,null,null,null,[``],e=tt(e),0,[0],e))}function ut(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=I()){case 40:if(m!=108&&k(C,d-1)==58){Be(C+=O(rt(v),`&`,`&\f`),`&\f`,Fe(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=rt(v);break;case 9:case 10:case 13:case 32:C+=it(m);break;case 92:C+=at(Qe()-1,7);continue;case 47:switch(L()){case 42:case 47:He(ft(st(I(),Qe()),t,n,c),c),(et(m||1)==5||et(L()||1)==5)&&j(C)&&A(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=j(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=O(C,/\f/g,``)),p>0&&(j(C)-d||h===0&&m===47)&&He(p>32?pt(C+`;`,r,n,d-1,c):pt(O(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(He(S=dt(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)ut(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(k(C,3)===110)break;case 108:if(k(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?ut(e,S,S,r&&He(dt(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):ut(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+j(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Ze()==125)continue}switch(C+=Ie(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(j(C)-1)*_,_=1;break;case 64:L()===45&&(C+=rt(I())),f=L(),u=d=j(y=C+=ct(Qe())),v++;break;case 45:m===45&&j(C)==2&&(h=0)}}return a}function dt(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Ve(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=A(e,f+1,f=Fe(g=o[h])),b=e;v<m;++v)(b=ze(g>0?p[v]+` `+y:O(y,/&\f/g,p[v])))&&(c[_++]=b);return Ye(e,t,n,i===0?ke:s,c,l,u,d)}function ft(e,t,n,r){return Ye(e,t,n,Oe,Ie(Xe()),A(e,2,-2),0,r)}function pt(e,t,n,r,i){return Ye(e,t,n,Ae,A(e,0,r),A(e,r+1,-1),r,i)}function mt(e,t,n){switch(Re(e,t)){case 5103:return E+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return E+e+e;case 4855:return E+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return De+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+De+e+T+e+e;case 5936:switch(k(e,t+11)){case 114:return E+e+T+O(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return E+e+T+O(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return E+e+T+O(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return E+e+T+e+e;case 6165:return E+e+T+`flex-`+e+e;case 5187:return E+e+O(e,/(\w+).+(:[^]+)/,E+`box-$1$2`+T+`flex-$1$2`)+e;case 5443:return E+e+T+`flex-item-`+O(e,/flex-|-self/g,``)+(D(e,/flex-|baseline/)?``:T+`grid-row-`+O(e,/flex-|-self/g,``))+e;case 4675:return E+e+T+`flex-line-pack`+O(e,/align-content|flex-|-self/g,``)+e;case 5548:return E+e+T+O(e,`shrink`,`negative`)+e;case 5292:return E+e+T+O(e,`basis`,`preferred-size`)+e;case 6060:return E+`box-`+O(e,`-grow`,``)+E+e+T+O(e,`grow`,`positive`)+e;case 4554:return E+O(e,/([^-])(transform)/g,`$1`+E+`$2`)+e;case 6187:return O(O(O(e,/(zoom-|grab)/,E+`$1`),/(image-set)/,E+`$1`),e,``)+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,E+`box-pack:$3`+T+`flex-pack:$3`),/space-between/,`justify`)+E+e+e;case 4200:if(!D(e,/flex-|baseline/))return T+`grid-column-align`+A(e,t)+e;break;case 2592:case 3360:return T+O(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,D(e.props,/grid-\w+-end/)})?~Be(e+(n=n[t].value),`span`,0)?e:T+O(e,`-start`,``)+e+T+`grid-row-span:`+(~Be(n,`span`,0)?D(n,/\d+/):D(n,/\d+/)-+D(e,/\d+/))+`;`:T+O(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return D(e.props,/grid-\w+-start/)})?e:T+O(O(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,E+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(e)-1-t>6)switch(k(e,t+1)){case 109:if(k(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,`$1`+E+`$2-$3$1`+De+(k(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Be(e,`stretch`,0)?mt(O(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return T+n+`:`+r+s+(i?T+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(k(e,t+6)===121)return O(e,`:`,`:`+E)+e;break;case 6444:switch(k(e,k(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+E+(k(e,14)===45?`inline-`:``)+`box$3$1`+E+`$2$3$1`+T+`$2box$3`)+e;case 100:return O(e,`:`,`:`+T)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,`scroll-`,`scroll-snap-`)+e}return e}function ht(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function gt(e,t,n,r){switch(e.type){case Pe:if(e.children.length)break;case je:case Me:case Ae:return e.return=e.return||e.value;case Oe:return``;case Ne:return e.return=e.value+`{`+ht(e.children,r)+`}`;case ke:if(!j(e.value=e.props.join(`,`)))return``}return j(n=ht(e.children,r))?e.return=e.value+`{`+n+`}`:``}function _t(e){var t=Ve(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function vt(e){return function(t){t.root||(t=t.return)&&e(t)}}function yt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ae:e.return=mt(e.value,e.length,n);return;case Ne:return ht([P(e,{value:O(e.value,`@`,`@`+E)})],r);case ke:if(e.length)return Ue(n=e.props,function(t){switch(D(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:F(P(e,{props:[O(t,/:(read-\w+)/,`:`+De+`$1`)]})),F(P(e,{props:[t]})),Le(e,{props:We(n,r)});break;case`::placeholder`:F(P(e,{props:[O(t,/:(plac\w+)/,`:`+E+`input-$1`)]})),F(P(e,{props:[O(t,/:(plac\w+)/,`:`+De+`$1`)]})),F(P(e,{props:[O(t,/:(plac\w+)/,T+`input-$1`)]})),F(P(e,{props:[t]})),Le(e,{props:We(n,r)});break}return``})}}var bt=e(ye()),R=e(n()),z=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,xt=`active`,St=`data-styled-version`,Ct=`6.4.4`,wt=`/*!sc*/
`,Tt=typeof window<`u`&&typeof document<`u`;function Et(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Dt=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Et(`REACT_APP_SC_DISABLE_SPEEDY`)??Et(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Ot=`sc-keyframes-`,kt={};function B(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var At=new Map,jt=new Map,Mt=1,Nt=e=>{if(At.has(e))return At.get(e);for(;jt.has(Mt);)Mt++;let t=Mt++;return At.set(e,t),jt.set(t,e),t},Pt=e=>jt.get(e),Ft=(e,t)=>{Mt=t+1,At.set(e,t),jt.set(t,e)},It=Object.freeze([]),V=Object.freeze({});function Lt(e,t,n=V){return e.theme!==n.theme&&e.theme||t||n.theme}var Rt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zt=/(^-|-$)/g;function Bt(e){return e.replace(Rt,`-`).replace(zt,``)}var Vt=/(a)(d)/gi,Ht=e=>String.fromCharCode(e+(e>25?39:97));function Ut(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Ht(t%52)+n;return(Ht(t%52)+n).replace(Vt,`$1-$2`)}var Wt=5381,H=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Gt=e=>H(Wt,e);function Kt(e){return Ut(Gt(e)>>>0)}function qt(e){return e.displayName||e.name||`Component`}function Jt(e){return typeof e==`string`&&!0}function Yt(e){return Jt(e)?`styled.${e}`:`Styled(${qt(e)})`}var Xt=Symbol.for(`react.memo`),Zt=Symbol.for(`react.forward_ref`),Qt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},$t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},en={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tn={[Zt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Xt]:en};function nn(e){return(`type`in(t=e)&&t.type.$$typeof)===Xt?en:`$$typeof`in e?tn[e.$$typeof]:Qt;var t}var rn=Object.defineProperty,an=Object.getOwnPropertyNames,on=Object.getOwnPropertySymbols,sn=Object.getOwnPropertyDescriptor,cn=Object.getPrototypeOf,ln=Object.prototype;function un(e,t,n){if(typeof t!=`string`){let r=cn(t);r&&r!==ln&&un(e,r,n);let i=an(t).concat(on(t)),a=nn(e),o=nn(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in $t||n&&n[s]||o&&s in o||a&&s in a)){let n=sn(t,s);try{rn(e,s,n)}catch{}}}}return e}function U(e){return typeof e==`function`}var dn=Symbol.for(`react.forward_ref`);function fn(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===dn&&`styledComponentId`in e}function pn(e,t){return e&&t?e+` `+t:e||t||``}function mn(e,t){return e.join(t||``)}function hn(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function gn(e,t,n=!1){if(!n&&!hn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=gn(e[n],t[n]);else if(hn(t))for(let n in t)e[n]=gn(e[n],t[n]);return e}function _n(e,t){Object.defineProperty(e,"toString",{value:t})}var vn=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw B(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+wt;return t}},yn=`style[${z}][${St}="${Ct}"]`,bn=RegExp(`^${z}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),xn=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Sn=e=>{if(!e)return document;if(xn(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(xn(t))return t}return document},Cn=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},wn=(e,t)=>{let n=(t.textContent??``).split(wt),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(bn);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Ft(n,t),Cn(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Tn=e=>{let t=Sn(e.options.target).querySelectorAll(yn);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(z)!==xt&&(wn(e,r),r.parentNode&&r.parentNode.removeChild(r))}},En=!1;function Dn(){if(!1!==En)return En;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return En=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return En=t.getAttribute(`content`)||void 0}return En=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var On=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${z}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(z,xt),i.setAttribute(St,Ct);let s=t||Dn();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},kn=class{constructor(e,t){this.element=On(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw B(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},An=class{constructor(e,t){this.element=On(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},jn=Tt,Mn={isServer:!Tt,useCSSOMInjection:!Dt},Nn=class e{static registerId(e){return Nt(e)}constructor(e=V,t={},n){this.options=Object.assign(Object.assign({},Mn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Tt&&jn&&(jn=!1,Tn(this)),_n(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Pt(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=z+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Tt&&Tn(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Tt&&t.target!==this.options.target&&Sn(this.options.target)!==Sn(t.target)&&Tn(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new kn(t,n):new An(t,n))(this.options),new vn(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Nt(e),e.startsWith(Ot)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Nt(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Nt(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Pn=new WeakSet,Fn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function In(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Fn||e.startsWith(`--`)?String(t).trim():t+`px`}var W=47;function Ln(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Rn=Symbol.for(`sc-keyframes`);function zn(e){return typeof e==`object`&&!!e&&Rn in e}function Bn(e){return U(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Vn=e=>e==null||!1===e||e===``,Hn=Symbol.for(`react.client.reference`);function Un(e){return e.$$typeof===Hn}function Wn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Vn(r)&&(Array.isArray(r)&&Pn.has(r)||U(r)?t.push(Ln(n)+`:`,r,`;`):hn(r)?(t.push(n+` {`),Wn(r,t),t.push(`}`)):t.push(Ln(n)+`: `+In(n,r)+`;`))}}function G(e,t,n,r,i=[]){if(Vn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Un(e)?i:Bn(e)&&t?G(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)G(e[a],t,n,r,i);return i}return fn(e)?(i.push(`.${e.styledComponentId}`),i):zn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Un(e)?i:hn(e)&&e.toString===Object.prototype.toString?(Wn(e,i),i):(i.push(e.toString()),i)}var Gn=Gt(Ct),Kn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=H(Gn,t),this.baseStyle=n,Nn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(Bn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=mn(G(r,e,t,n)))}else i+=mn(G(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Ut(H(H(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=pn(r,a)}}return r}},qn=/&/g;function Jn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Yn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==W||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===W&&(o=!1,c++);else if(l!==34&&l!==39||Jn(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Xn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Xn(a.children,t)}return e}function Zn({options:e=V,plugins:t=It}=V){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(qn,r).replace(i,a))}),e.prefix&&o.push(yt),o.push(gt);let s=[],c=_t(o.concat(vt(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Yn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Jn(e,o))if(s===0)if(t===W&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==W);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===W)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===W&&o+1<r&&e.charCodeAt(o+1)===W){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Yn(i)):l===0?e:Yn(e)}(t),d=lt(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Xn(d,e.namespace)),s=[],ht(d,c),s},u=e,d=Wt;for(let e=0;e<t.length;e++)t[e].name||B(15),d=H(d,t[e].name);return u!=null&&u.namespace&&(d=H(d,u.namespace)),u!=null&&u.prefix&&(d=H(d,`p`)),l.hash=d===Wt?``:d.toString(),l}var Qn=new Nn,$n=Zn(),er=R.createContext({shouldForwardProp:void 0,styleSheet:Qn,stylis:$n,stylisPlugins:void 0});er.Consumer;function tr(){return R.useContext(er)}var nr=R.createContext(void 0);nr.Consumer;function rr(e){let t=R.useContext(nr),n=R.useMemo(()=>function(e,t){if(!e)throw B(14);if(U(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw B(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?R.createElement(nr.Provider,{value:n},e.children):null}var ir=Object.prototype.hasOwnProperty,ar={};function or(e,t){let n=typeof e==`string`?Bt(e):`sc`;ar[n]=(ar[n]||0)+1;let r=n+`-`+Kt(Ct+n+ar[n]);return t?t+`-`+r:r}function sr(e,t,n){let r=fn(e),i=e,a=!Jt(e),{attrs:o=It,componentId:s=or(t.displayName,t.parentComponentId),displayName:c=Yt(e)}=t,l=t.displayName&&t.componentId?Bt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Kn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=R.useContext(nr),u=tr(),d=e.shouldForwardProp||u.shouldForwardProp,f=Lt(t,l,a)||V,p,m;{let e=R.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(ir.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=U(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=pn(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=pn(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)ir.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=pn(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[Jt(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,R.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=R.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?pn(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)gn(e,n,!0);return e}({},i.defaultProps,e):e}}),_n(m,()=>`.${m.styledComponentId}`),a&&un(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var cr=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function lr(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ur=e=>(Pn.add(e),e);function dr(e,...t){if(U(e)||hn(e))return ur(G(lr(It,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?G(n):ur(G(lr(n,t)))}function fr(e,t,n=V){if(!t)throw B(1,t);let r=(r,...i)=>e(t,n,dr(r,...i));return r.attrs=r=>fr(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>fr(e,t,Object.assign(Object.assign({},n),r)),r}var pr=e=>fr(sr,e),K=pr;cr.forEach(e=>{K[e]=pr(e)});var mr=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(U(n)&&!fn(n))return!1}return!0}(e),Nn.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=mn(G(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function hr(e,...t){let n=dr(e,...t),r=`sc-global-${Kt(JSON.stringify(n))}`,i=new mr(n,r),a=e=>{let t=tr(),n=R.useContext(nr),a;{let e=R.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=R.useRef(i);R.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),R.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,kt,n,o);else{let s=Object.assign(Object.assign({},t),{theme:Lt(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return R.memo(a)}`${z}`,`${z}`,`${z}`;var gr=`820px`,_r=K.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${e=>e.theme.header_height};
  padding: 0.5rem clamp(1rem, 4vw, 2rem);
`,vr=K.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: ${e=>e.theme.content_width};
`,yr=K(Ce)`
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: ${e=>e.theme.color_primary};
  &:hover {
    color: ${e=>e.theme.color_accent};
  }
`,br=K.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1.15rem;

  a {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: ${e=>e.theme.color_primary};
    &:hover {
      color: ${e=>e.theme.color_accent};
    }
    &.active {
      color: ${e=>e.theme.color_accent};
      font-weight: 700;
    }
  }

  @media only screen and (max-width: ${gr}) {
    display: none;
  }
`,xr=K.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Sr=K.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  @media only screen and (max-width: ${gr}) {
    display: none;
  }
`,Cr=K.div`
  display: none;
  @media only screen and (max-width: ${gr}) {
    display: inline-flex;
    align-items: center;
  }
`,wr=K.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,Tr=K.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0.65;
  transition:
    opacity ${e=>e.theme.transition},
    transform ${e=>e.theme.transition};

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  img {
    width: 26px;
    height: auto;
    display: block;
  }
`,Er=K.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0.5rem;
  background: ${e=>e.theme.color_surface};
  color: ${e=>e.theme.color_primary};
  height: 100%;

  a {
    display: block;
    padding: 0.75rem 1rem;
    border-radius: ${e=>e.theme.radius_sm};
    font-weight: 600;
    color: ${e=>e.theme.color_primary};
    &:hover {
      background: ${e=>e.theme.color_surface_alt};
      color: ${e=>e.theme.color_accent};
    }
  }
`,Dr=K.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  margin-top: auto;
  border-top: 1px solid ${e=>e.theme.color_border};
`,q=e(p()),J=c();function Or({image:e,alt:t=``,...n}){return(0,J.jsx)(`img`,{src:e,loading:`lazy`,alt:t,...n})}Or.propTypes={image:q.default.string.isRequired,alt:q.default.string};var kr=[{id:1,title:`work-experience.title`,url:`/#work-experience`},{id:2,title:`education.title`,url:`/#education`},{id:3,title:`skills.title`,url:`/#skills`},{id:4,title:`projects.title`,url:`/#projects`},{id:5,title:`conferences.title`,url:`/#conferences`},{id:6,title:`associativism.title`,url:`/#associativism`},{id:7,title:`hobbies.title`,url:`/#hobbies`},{id:8,title:`contact.title`,url:`/#contact`}];function Y({path:e}){return w(),(0,J.jsx)(Se,{i18nKey:e,components:{bold:(0,J.jsx)(`strong`,{}),italic:(0,J.jsx)(`i`,{})}})}Y.propTypes={path:q.default.string.isRequired};var{slice:Ar,forEach:jr}=[];function Mr(e){return jr.call(Ar.call(arguments,1),t=>{if(t)for(let n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Nr(e){return typeof e==`string`&&[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(e))}var Pr=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Fr=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:`/`},r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){let e=n.maxAge-0;if(Number.isNaN(e))throw Error(`maxAge should be a Number`);r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!Pr.test(n.domain))throw TypeError(`option domain is invalid`);r+=`; Domain=${n.domain}`}if(n.path){if(!Pr.test(n.path))throw TypeError(`option path is invalid`);r+=`; Path=${n.path}`}if(n.expires){if(typeof n.expires.toUTCString!=`function`)throw TypeError(`option expires is invalid`);r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+=`; HttpOnly`),n.secure&&(r+=`; Secure`),n.sameSite)switch(typeof n.sameSite==`string`?n.sameSite.toLowerCase():n.sameSite){case!0:r+=`; SameSite=Strict`;break;case`lax`:r+=`; SameSite=Lax`;break;case`strict`:r+=`; SameSite=Strict`;break;case`none`:r+=`; SameSite=None`;break;default:throw TypeError(`option sameSite is invalid`)}return n.partitioned&&(r+=`; Partitioned`),r},Ir={create(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:`/`,sameSite:`strict`};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=Fr(e,t,i)},read(e){let t=`${e}=`,n=document.cookie.split(`;`);for(let e=0;e<n.length;e++){let r=n[e];for(;r.charAt(0)===` `;)r=r.substring(1,r.length);if(r.indexOf(t)===0)return r.substring(t.length,r.length)}return null},remove(e,t){this.create(e,``,-1,t)}},Lr={name:`cookie`,lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<`u`)return Ir.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:a}=t;n&&typeof document<`u`&&Ir.create(n,e,r,i,a)}},Rr={name:`querystring`,lookup(e){let{lookupQuerystring:t}=e,n;if(typeof window<`u`){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf(`?`)>-1&&(e=window.location.hash.substring(window.location.hash.indexOf(`?`)));let r=e.substring(1).split(`&`);for(let e=0;e<r.length;e++){let i=r[e].indexOf(`=`);i>0&&r[e].substring(0,i)===t&&(n=r[e].substring(i+1))}}return n}},zr={name:`hash`,lookup(e){let{lookupHash:t,lookupFromHashIndex:n}=e,r;if(typeof window<`u`){let{hash:e}=window.location;if(e&&e.length>2){let i=e.substring(1);if(t){let e=i.split(`&`);for(let n=0;n<e.length;n++){let i=e[n].indexOf(`=`);i>0&&e[n].substring(0,i)===t&&(r=e[n].substring(i+1))}}if(r)return r;if(!r&&n>-1){let t=e.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?t[typeof n==`number`?n:0]?.replace(`/`,``):void 0}}}return r}},Br=null,Vr=()=>{if(Br!==null)return Br;try{if(Br=typeof window<`u`&&window.localStorage!==null,!Br)return!1;let e=`i18next.translate.boo`;window.localStorage.setItem(e,`foo`),window.localStorage.removeItem(e)}catch{Br=!1}return Br},Hr={name:`localStorage`,lookup(e){let{lookupLocalStorage:t}=e;if(t&&Vr())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&Vr()&&window.localStorage.setItem(n,e)}},Ur=null,Wr=()=>{if(Ur!==null)return Ur;try{if(Ur=typeof window<`u`&&window.sessionStorage!==null,!Ur)return!1;let e=`i18next.translate.boo`;window.sessionStorage.setItem(e,`foo`),window.sessionStorage.removeItem(e)}catch{Ur=!1}return Ur},Gr={name:`sessionStorage`,lookup(e){let{lookupSessionStorage:t}=e;if(t&&Wr())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Wr()&&window.sessionStorage.setItem(n,e)}},Kr={name:`navigator`,lookup(e){let t=[];if(typeof navigator<`u`){let{languages:e,userLanguage:n,language:r}=navigator;if(e)for(let n=0;n<e.length;n++)t.push(e[n]);n&&t.push(n),r&&t.push(r)}return t.length>0?t:void 0}},qr={name:`htmlTag`,lookup(e){let{htmlTag:t}=e,n,r=t||(typeof document<`u`?document.documentElement:null);return r&&typeof r.getAttribute==`function`&&(n=r.getAttribute(`lang`)),n}},Jr={name:`path`,lookup(e){let{lookupFromPathIndex:t}=e;if(typeof window>`u`)return;let n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(Array.isArray(n))return n[typeof t==`number`?t:0]?.replace(`/`,``)}},Yr={name:`subdomain`,lookup(e){let{lookupFromSubdomainIndex:t}=e,n=typeof t==`number`?t+1:1,r=typeof window<`u`&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}},Xr=!1;try{document.cookie,Xr=!0}catch{}var Zr=[`querystring`,`cookie`,`localStorage`,`sessionStorage`,`navigator`,`htmlTag`];Xr||Zr.splice(1,1);var Qr=()=>({order:Zr,lookupQuerystring:`lng`,lookupCookie:`i18next`,lookupLocalStorage:`i18nextLng`,lookupSessionStorage:`i18nextLng`,caches:[`localStorage`],excludeCacheFor:[`cimode`],convertDetectedLanguage:e=>e}),$r=class{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type=`languageDetector`,this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Mr(t,this.options||{},Qr()),typeof this.options.convertDetectedLanguage==`string`&&this.options.convertDetectedLanguage.indexOf(`15897`)>-1&&(this.options.convertDetectedLanguage=e=>e.replace(`-`,`_`)),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Lr),this.addDetector(Rr),this.addDetector(Hr),this.addDetector(Gr),this.addDetector(Kr),this.addDetector(qr),this.addDetector(Jr),this.addDetector(Yr),this.addDetector(zr)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let n=this.detectors[e].lookup(this.options);n&&typeof n==`string`&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(e=>e!=null&&!Nr(e)).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}};$r.type=`languageDetector`;var ei=[{language:`pt`,locale:`pt-PT`,label:`Português`,img:`/portfolio/assets/portugal-flag-Dn66ejfH.png`,translation:{translations:{role:`Engenheiro de Software`,profile:`Como engenheiro de software, trabalhei com várias empresas de TI, colaborando com pessoas de todo o mundo.<br/><br/>Comecei num ambiente dinâmico, a construir componentes de um sistema holandês de administração de pensões, onde desenvolvi sólidas competências técnicas, de flexibilidade e de adaptabilidade. Em busca de novos desafios, juntei-me a uma empresa de software para contact centers na cloud, trabalhando ao lado de centenas de engenheiros de topo para entregar soluções inovadoras em grande escala. Mais recentemente, tenho concebido serviços de gestão de identidade e acessos e plataformas digitais para clientes empresariais, com foco em sistemas back-end seguros e fiáveis.<br/><br/>Ao longo dos últimos 8 anos, trabalhei com muitas tecnologias, com particular foco em Java e no seu ecossistema de frameworks e boas práticas. Como alguém que valoriza o trabalho em equipa, acredito que a colaboração e uma atitude positiva trazem sempre os melhores resultados.`,actions:{viewCode:`Código`,liveDemo:`Ver online`,downloadCv:`Descarregar CV`,emailMe:`Enviar email`,viewWork:`Ver o meu trabalho`},hero:{tagline:`Engenheiro de software focado na construção de sistemas back-end fiáveis e escaláveis com Java e tecnologias web modernas.`},theme:{light:`Mudar para modo claro`,dark:`Mudar para modo escuro`},"work-experience":{title:`Experiência Profissional`,diconium:{role:`Engenheiro de Software`,title:`diconium`,date:`Nov 2023 - Presente`,summary:`Produtos e plataformas digitais para clientes empresariais.`,details:`Conceção e desenvolvimento de serviços de gestão de identidade e acessos com Java, Spring e Keycloak; <br/><br/> Integração de fluxos de autenticação seguros em várias aplicações cliente.`,skills:[`Java`,`Spring Boot`,`Keycloak`],projects:[{name:`One Business ID`,description:`Identidade e single sign-on centralizados para clientes empresariais do Grupo Volkswagen, dando acesso seguro aos serviços digitais do Grupo.`,url:`https://www.volkswagen-nutzfahrzeuge.de/de/branchenloesungen-und-gewerbekunden/exklusive-vorteile-fuer-gewerbekunden.html`},{name:`myFleetHub`,description:`Plataforma digital de gestão de frotas que dá aos clientes empresariais do Grupo Volkswagen um único lugar para gerir veículos e contratos, acompanhar encomendas e gerir atualizações de software.`,url:`https://www.groupfleet.com/en/my-fleet-hub/`}]},talkdesk:{role:`Engenheiro de Software`,title:`Talkdesk`,date:`Jul 2021 - Mai 2023`,summary:`Soluções de Workforce Engagement and Management para contact centers.`,details:`Desenvolvimento de serviços core para uma arquitetura de microsserviços orientada a eventos com Java 17 e Quarkus; <br/><br/> Desenvolvimento de uma solução de armazenamento multi-storage em Java e Ruby e integração com Azure Storage.`,skills:[`Java`,`Quarkus`,`Azure Storage`],projects:[{name:`Talkdesk Performance Management`,description:`Aplicação para contact centers que motiva os agentes com objetivos orientados por dados, leaderboards e coaching, combinando métricas de produtividade com indicadores de qualidade.`,url:`https://support.talkdesk.com/hc/en-us/articles/4407628119451-Performance-Management-Overview`}]},cgi:{role:`Engenheiro de Software`,title:`CGI`,date:`Jan 2021 - Jun 2021`,summary:`Aquisição da RiskCo por um consórcio que inclui a CGI.<br/><br/>Mesmas responsabilidades do cargo anterior.`,details:``},riskco:{role:`Engenheiro de Software`,title:`InAdmin RiskCo`,date:`Fev 2018 - Dez 2020`,summary:`Soluções administrativas para instituições de pensões holandesas. Ambiente dinâmico que exige grande sentido de resiliência e adaptabilidade a múltiplas tecnologias e projetos.`,details:`Desenvolvimento de componentes cliente-servidor para um sistema PaaS, essencialmente baseado em Java, Spring Boot e ReactJS com uma API GraphQL, para visualizar e tratar grandes conjuntos de dados de pensões; <br/><br/> Desenvolvimento e manutenção de bibliotecas em Groovy; <br/><br/>Apoio ao cliente numa aplicação cliente-servidor para Windows (C#) usada no cálculo de preços teóricos de produtos bancários; <br/><br/>Apoio ao cliente em aplicações móveis (Android e iOS) e manutenção de macros de Excel existentes; <br/><br/>Implementação de modelos BPMN para integração no sistema PaaS.`,skills:[`Java`,`Spring Boot`,`ReactJS`,`GraphQL`,`Groovy`,`C#`],projects:[{name:`RiskCo Administration Platform`,description:`Plataforma de administração de pensões (PaaS) para fundos de pensões holandeses como o Achmea Pensioenfonds PGB, usada para processar e visualizar grandes conjuntos de dados de pensões.`,url:`https://news.achmea.nl/achmea-pensioenfonds-pgb-and-cgi-to-launch-pension-administration-platform/`}]}},education:{title:`Educação`,languagesTitle:`Idiomas`,languages:{pt:{title:`Português`,level:`Nativo`},en:{title:`Inglês`,level:`Fluente`},de:{title:`Alemão`,level:`Iniciante`}},masters:{title:`Mestrado em Engenharia Eletrotécnica e de Computadores`,local:`FCTUC - Universidade de Coimbra`,date:`Set 2012 - Set 2017`,details:[`Dissertação: Fusão de dados inerciais em AGVs industriais`,`Especialização em Automação`,`Prémio 3% melhores alunos 2012/2013`]},curricular_internship:{title:`Estágio Curricular`,local:`Active Space Technologies`,date:`Março 2017 - Agosto 2017`,details:[`Desenvolvimento de firmware e conceção de hardware para um sistema inercial de apoio à navegação de AGVs industriais`]},summer_internship:{title:`Estágio de Verão`,local:`Active Space Technologies`,date:`Julho 2016 - Set 2016`,details:[`Desenvolvimento de software para uma máquina Pick & Place com QT Creator`]}},skills:{title:`Competências`,subtitle:`Tecnologias e ferramentas com que trabalho.`,legend:{strong:`Proficiente`,familiar:`Familiarizado`},categories:{languages:`Linguagens`,frameworks:`Frameworks e Bibliotecas`,tools:`Ferramentas e Plataformas`,cloud:`Cloud e DevOps`}},projects:{title:`Projetos`,subtitle:`Uma seleção de projetos que construí ou para os quais contribuí.`,items:[{title:`Portefólio Pessoal`,description:`Um portefólio de página única e responsivo, construído com React e Vite.`,tags:[`React`,`Vite`,`i18next`],repo:`https://github.com/brunomsilvaf/portfolio`,demo:`https://brunomsilvaf.github.io/portfolio/`},{title:`Website do CMUC`,description:`Website do Coro Misto da Universidade de Coimbra (CMUC), que apresenta o coro, a sua história e as suas digressões.`,tags:[`React`,`Vite`,`i18next`],demo:`https://www.cmuc.pt/`}]},conferences:{title:`Conferências`,subtitle:`Eventos em que participei.`,items:[{name:`JNation 2024`,date:`Junho 2024 · Coimbra`,description:`7.ª edição da conferência anual de desenvolvimento de software, com dezenas de talks técnicos sobre Java, JavaScript, infraestrutura cloud e um novo foco em inteligência artificial e machine learning.`},{name:`JNation 2022`,date:`Junho 2022 · Coimbra`,description:`Conferência internacional de programadores no Convento São Francisco, reunindo cerca de 900 participantes e 40 oradores de empresas como Google, Oracle e Red Hat, em torno de Java, JavaScript, cloud, IA/ML e segurança.`}]},associativism:{title:`Associativismo`,description:`Ao longo do meu percurso académico, participei em várias edições de competições de engenharia e robótica — como as Bot Olympics e o EBEC Coimbra — tanto como participante como organizador. Fui também membro da direção do Ramo de Estudantes IEEE UC, onde organizei vários workshops e o Leadership Camp de 2016.<br/><br/>Para além das associações de engenharia, foi membro de num coro universitário (CMUC) durante vários anos, tendo sido vice-presidente durante um ano, desenvolvendo fortes competências de trabalho em equipa e de liderança.<br/><br/>No passado, também participei em atividades de voluntariado, como apoiar um abrigo local de gatos e a recuperação da floresta nativa da Serra do Buçaco.`},hobbies:{title:`Passatempos`,items:[{icon:`music`,name:`Música`,description:`Cantar em coros e tocar um pouco de piano ou guitarra.`},{icon:`puzzling`,name:`Puzzles`,description:`Maratonas de grandes puzzles e diversas competições internacionais de speed puzzle.`},{icon:`sports`,name:`Desporto`,description:`Padel e CrossFit casualmente para me manter ativo.`},{icon:`games`,name:`Jogos de Vídeo e de Tabuleiro`,description:`Qualquer jogo desde Catan a Mario Kart ou Xadrez. Monopólio não, por favor.`}]},contact:{title:`Contacto`,heading:`Entra em contacto`,description:`Estou sempre disponível para conversar — seja sobre um projeto, uma oportunidade, ou apenas para dizer olá.`,rights:`Todos os direitos reservados.`}}}},{language:`en`,locale:`en-GB`,label:`English`,img:`data:image/png;base64,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`,translation:{translations:{role:`Software Engineer`,profile:`As a software engineer, I have worked with IT companies across Europe, collaborating with people from all over the world.<br/><br/>I started out in a fast-moving environment building components of a Dutch pension administration system, where I developed strong technical, flexibility and adaptability skills. Looking for new challenges, I joined a cloud contact centre software company, working alongside hundreds of talented engineers to deliver innovative solutions at scale. More recently, I have been designing identity and access management services and digital platforms for enterprise clients, with a focus on secure and reliable back-end systems.<br/><br/>Over the past 8 years I have worked across many technologies, with a particular focus on Java and its ecosystem of frameworks and best practices. As a team player, I believe that collaboration and a positive attitude always bring the best results.`,actions:{viewCode:`Code`,liveDemo:`Live demo`,downloadCv:`Download CV`,emailMe:`Email me`,viewWork:`View my work`},hero:{tagline:`Software engineer focused on building reliable, scalable back-end systems with Java and modern web technologies.`},theme:{light:`Switch to light mode`,dark:`Switch to dark mode`},"work-experience":{title:`Work Experience`,diconium:{role:`Software Engineer`,title:`diconium`,date:`Nov 2023 - Present`,summary:`Digital products and platforms for enterprise clients.`,details:`Design and development of identity and access management services using Java, Spring and Keycloak; <br/><br/> Integration of secure authentication flows across multiple client applications.`,skills:[`Java`,`Spring Boot`,`Keycloak`],projects:[{name:`One Business ID`,description:`Central identity and single sign-on for Volkswagen Group business customers, giving secure access to the Group's digital services.`,url:`https://www.volkswagen-nutzfahrzeuge.de/de/branchenloesungen-und-gewerbekunden/exklusive-vorteile-fuer-gewerbekunden.html`},{name:`myFleetHub`,description:`Digital fleet management platform giving Volkswagen Group business customers a single place to oversee vehicles and contracts, track orders and manage online software updates.`,url:`https://www.groupfleet.com/en/my-fleet-hub/`}]},talkdesk:{role:`Software Engineer`,title:`Talkdesk`,date:`Jul 2021 - May 2023`,summary:`Workforce Engagement and Management solutions for contact  centers.`,details:`Development of core services for an event-driven microservice architecture using Java 17 and Quarkus; <br/><br/> Development of a multi-storage solution in Java and Ruby and integration with Azure Storage.`,skills:[`Java`,`Quarkus`,`Azure Storage`],projects:[{name:`Talkdesk Performance Management`,description:`A contact centre app that motivates agents with data-driven goals, leaderboards and coaching, combining productivity metrics with quality scores.`,url:`https://support.talkdesk.com/hc/en-us/articles/4407628119451-Performance-Management-Overview`}]},cgi:{role:`Software Engineer`,title:`CGI`,date:`Jan 2021 - Jun 2021`,summary:`Acquisition of RiskCo by a consortium which includes CGI.<br/><br/>Same responsibilities as in the previous role.`,details:``},riskco:{role:`Software Engineer`,title:`InAdmin RiskCo`,date:`Feb 2018 - Dec 2020`,summary:`Administrative solutions for Dutch pension institutions. Fast-moving environment requiring a great sense of resilience and adaptability to multiple technologies and projects.`,details:`Development of client-server components for a PaaS system, mainly based on Java, Spring Boot and ReactJS with a GraphQL API, to visualize and treat of big sets of pension data; <br/><br/> Development and maintenance of Groovy libraries; <br/><br/>Customer support to a client-server Windows based application (C#) used in the calculation of theoretical prices for bank products; <br/><br/>Customer support for mobile (Android and iOS) applications and maintenance of existing Excel Macros; <br/><br/>Implementation of BPMN models to be integrated in the PaaS system.`,skills:[`Java`,`Spring Boot`,`ReactJS`,`GraphQL`,`Groovy`,`C#`],projects:[{name:`RiskCo Administration Platform`,description:`A pension administration platform (PaaS) for Dutch pension funds such as Achmea Pensioenfonds PGB, used to process and visualise large sets of pension data.`,url:`https://news.achmea.nl/achmea-pensioenfonds-pgb-and-cgi-to-launch-pension-administration-platform/`}]}},education:{title:`Education`,languagesTitle:`Languages`,languages:{pt:{title:`Portuguese`,level:`Native`},en:{title:`English`,level:`Fluent`},de:{title:`German`,level:`Beginner`}},masters:{title:`Masters in Electrical and Computer Engineering`,local:`FCTUC - University of Coimbra`,date:`Sep 2012 - Sep 2017`,details:[`Dissertation: Fusion of inertial data in industrial AGVs`,`Specialization in Automation`,`3% best students award 2012/2013`]},curricular_internship:{title:`Curricular Internship`,local:`Active Space Technologies`,date:`March 2017 - August 2017`,details:[`Firmware development and hardware design for an inertial system to assist in the navigation of industrial AGVs`]},summer_internship:{title:`Summer Internship`,local:`Active Space Technologies`,date:`July 2016 - Sep 2016`,details:[`Software development for a Pick & Place machine using QT Creator`]}},skills:{title:`Skills`,subtitle:`Technologies and tools I work with.`,legend:{strong:`Proficient`,familiar:`Familiar`},categories:{languages:`Languages`,frameworks:`Frameworks & Libraries`,tools:`Tools & Platforms`,cloud:`Cloud & DevOps`}},projects:{title:`Projects`,subtitle:`A selection of projects I have built or contributed to.`,items:[{title:`Personal Portfolio`,description:`A responsive single-page portfolio built with React and Vite, featuring internationalization and a component-driven design.`,tags:[`React`,`Vite`,`styled-components`,`i18next`],repo:`https://github.com/brunomsilvaf/portfolio`,demo:`https://brunomsilvaf.github.io/portfolio/`},{title:`CMUC Website`,description:`Website for the Coro Misto da Universidade de Coimbra (CMUC), presenting the choir, its history and its tours.`,tags:[`React`,`Vite`],demo:`https://www.cmuc.pt/`}]},conferences:{title:`Conferences`,subtitle:`Events I have attended.`,items:[{name:`JNation 2024`,date:`June 2024 · Coimbra`,description:`7th edition of the annual software development conference, with dozens of technical talks on Java, JavaScript, cloud infrastructure and a new focus on artificial intelligence and machine learning.`},{name:`JNation 2022`,date:`June 2022 · Coimbra`,description:`International software developer conference at Convento São Francisco, gathering around 900 attendees and 40 speakers from companies like Google, Oracle and Red Hat around Java, JavaScript, cloud, AI/ML and security.`}]},associativism:{title:`Associativism`,description:`Throughout my academic path I took part in several editions of engineering and robotics competitions — such as Bot Olympics and EBEC Coimbra — both as a participant and as an organiser. I was also a board member of the IEEE UC Student Branch, where I organised numerous workshops and the 2016 Leadership Camp.<br/><br/>Beyond engineering associations, I was a member of a university choir (CMUC) for many years, serving as vice-president for a year and developing strong teamwork and leadership skills.<br/><br/>In the past, I also took part in volunteering activities, such as helping at a local cat shelter and supporting the restoration of the native forest of Serra do Buçaco.`},hobbies:{title:`Hobbies`,items:[{icon:`music`,name:`Music`,description:`Singing in choirs, with a bit of piano or guitar on the side.`},{icon:`puzzling`,name:`Puzzling`,description:`Big jigsaw puzzle marathons and many international speed-puzzling competitions.`},{icon:`sports`,name:`Sports`,description:`Casual padel and CrossFit to stay active.`},{icon:`games`,name:`Video & Board Games`,description:`Anything from Catan to Mario Kart or Chess. Just no Monopoly please.`}]},contact:{title:`Contact`,heading:`Get in touch`,description:`I am always happy to connect — whether it is about a project, an opportunity, or just to say hello.`,rights:`All rights reserved.`}}}}],ti={resources:ei.reduce((e,{language:t,locale:n,translation:r})=>({...e,[t]:r,[n]:r}),{}),supportedLngs:ei.flatMap(({language:e,locale:t})=>[e,t]),nonExplicitSupportedLngs:!0,fallbackLng:`en-GB`,defaultNS:`translations`,detection:{order:[`localStorage`,`navigator`],caches:[`localStorage`]}};be.use($r).use(we).init(ti);var ni=e=>{typeof document<`u`&&e&&(document.documentElement.lang=e)};ni(be.resolvedLanguage||be.language),be.on(`languageChanged`,ni);var ri=hr`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    background-color: ${e=>e.theme.color_background};
    font-family: ${e=>e.theme.font_family};
    font-size: ${e=>e.theme.font_size};
    line-height: ${e=>e.theme.line_height};
    color: ${e=>e.theme.color_primary};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    transition: background-color ${e=>e.theme.transition_slow},
      color ${e=>e.theme.transition_slow};
    @media only screen and (max-width: 600px) {
      font-size: ${e=>e.theme.font_size_mobile};
    }
  }

  h1, h2, h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.15;
  }

  h4, h5, h6 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: color ${e=>e.theme.transition},
      opacity ${e=>e.theme.transition};
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${e=>e.theme.color_accent};
    outline-offset: 2px;
    border-radius: 2px;
  }

  ul, li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  hr {
    height: 1px;
    background-color: ${e=>e.theme.color_border};
    border: none;
    margin: ${e=>e.theme.space_lg} auto;
    width: min(90%, ${e=>e.theme.content_width});
  }

  header {
    left: 0;
    right: 0;
    z-index: 999;
    position: fixed;
    background: ${e=>e.theme.color_header_bg};
    color: ${e=>e.theme.color_primary};
    border-bottom: 1px solid ${e=>e.theme.color_header_border};
    backdrop-filter: saturate(180%) blur(12px);
    -webkit-backdrop-filter: saturate(180%) blur(12px);
  }

  footer {
    left: 0;
    right: 0;
    background: ${e=>e.theme.color_footer_bg};
    color: ${e=>e.theme.color_footer_text};
  }

  ::selection {
    background: ${e=>e.theme.color_accent};
    color: ${e=>e.theme.color_on_accent};
  }
`,ii=K.div``,ai=K.h1`
  font-size: ${e=>e.theme.fs_hero};
  text-align: center;
  line-height: 1.05;
`,oi=K.h2`
  font-size: ${e=>e.theme.fs_subtitle};
  letter-spacing: 3px;
  color: ${e=>e.theme.color_accent};
`,X=K.section`
  scroll-margin-top: 90px;
  width: min(100%, ${e=>e.theme.content_width});
  margin: 0 auto;
  padding: ${e=>e.theme.space_section}
    ${e=>e.theme.space_md};
`,Z=K.h3`
  font-size: ${e=>e.theme.fs_section};
  margin-bottom: ${e=>e.theme.space_md};
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 48px;
    height: 3px;
    border-radius: 3px;
    background: ${e=>e.theme.color_accent};
  }
`,si=K.h5`
  margin-top: ${e=>e.theme.space_md};
  margin-bottom: ${e=>e.theme.space_xs};
`,ci=K.p`
  max-width: ${e=>e.theme.reading_width};
  color: ${e=>e.theme.color_primary};
`,li={font_family:`'Open Sans', 'Segoe UI', system-ui, sans-serif`,font_size:`16px`,font_size_mobile:`15px`,fs_hero:`clamp(2.5rem, 6vw, 4rem)`,fs_section:`clamp(1.4rem, 3vw, 1.9rem)`,fs_subtitle:`clamp(1.05rem, 2vw, 1.3rem)`,line_height:`1.65`,space_xs:`0.5rem`,space_sm:`1rem`,space_md:`1.5rem`,space_lg:`2.5rem`,space_xl:`4rem`,space_section:`clamp(3rem, 7vw, 5rem)`,radius_sm:`8px`,radius_md:`12px`,radius_lg:`20px`,transition:`0.2s ease`,transition_slow:`0.45s ease`,content_width:`1080px`,reading_width:`70ch`,header_height:`64px`},ui={...li,mode:`light`,color_primary:`#1F2933`,color_secondary:`#FFFFFF`,color_background:`#F7F8FA`,color_surface:`#FFFFFF`,color_surface_alt:`#F0F2F5`,color_border:`#E4E7EB`,color_muted:`#616E7C`,color_accent:`#2563EB`,color_accent_hover:`#1D4ED8`,color_on_accent:`#FFFFFF`,color_header_bg:`rgba(247, 248, 250, 0.8)`,color_header_border:`rgba(0, 0, 0, 0.08)`,color_footer_bg:`#111827`,color_footer_text:`#E5E7EB`,color_hero_gradient:`radial-gradient(1200px 500px at 50% -10%, rgba(37, 99, 235, 0.12), transparent), linear-gradient(180deg, #EEF2FF 0%, #F7F8FA 70%)`,shadow_card:`0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)`},di={...li,mode:`dark`,color_primary:`#E5E7EB`,color_secondary:`#0F172A`,color_background:`#0F172A`,color_surface:`#1E293B`,color_surface_alt:`#182235`,color_border:`#334155`,color_muted:`#94A3B8`,color_accent:`#60A5FA`,color_accent_hover:`#3B82F6`,color_on_accent:`#0B1220`,color_header_bg:`rgba(15, 23, 42, 0.7)`,color_header_border:`rgba(255, 255, 255, 0.08)`,color_footer_bg:`#0B1220`,color_footer_text:`#CBD5E1`,color_hero_gradient:`radial-gradient(1200px 500px at 50% -10%, rgba(96, 165, 250, 0.15), transparent), linear-gradient(180deg, #1E293B 0%, #0F172A 70%)`,shadow_card:`0 1px 2px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.4)`};function fi(e,t){return s({palette:{mode:e,primary:{main:t.color_accent},background:{default:t.color_background,paper:t.color_surface},text:{primary:t.color_primary,secondary:t.color_muted},divider:t.color_border},shape:{borderRadius:12},typography:{fontFamily:t.font_family},components:{MuiChip:{styleOverrides:{root:{fontWeight:600}}},MuiButton:{styleOverrides:{root:{textTransform:`none`,fontWeight:600,borderRadius:10}}}}})}var pi=`color-mode`,mi=(0,R.createContext)({mode:`light`,toggle:()=>{}}),hi=()=>(0,R.useContext)(mi);function gi(){try{let e=window.localStorage.getItem(pi);if(e===`light`||e===`dark`)return e}catch{}return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function _i({children:e}){let[t,n]=(0,R.useState)(gi);(0,R.useEffect)(()=>{try{window.localStorage.setItem(pi,t)}catch{}},[t]);let r=t===`dark`?di:ui,i=(0,R.useMemo)(()=>fi(t,r),[t,r]),a=(0,R.useMemo)(()=>({mode:t,toggle:()=>n(e=>e===`dark`?`light`:`dark`)}),[t]);return(0,J.jsx)(mi.Provider,{value:a,children:(0,J.jsx)(rr,{theme:r,children:(0,J.jsxs)(d,{theme:i,children:[(0,J.jsx)(ri,{}),e]})})})}_i.propTypes={children:q.default.node.isRequired};function vi(e,t=100){let[n,r]=(0,R.useState)(``);return(0,R.useEffect)(()=>{if(!e||e.length===0)return;let n=0,i=()=>{n=0;let i=e.filter(e=>{let n=document.getElementById(e);return n&&n.getBoundingClientRect().top<=t}).pop()||``;r(i)},a=()=>{n||=window.requestAnimationFrame(i)};return i(),window.addEventListener(`scroll`,a,{passive:!0}),()=>{window.removeEventListener(`scroll`,a),n&&window.cancelAnimationFrame(n)}},[e,t]),n}var yi=kr.map(e=>e.url.split(`#`).pop());function bi(){let{i18n:e,t:n}=w(),{mode:r,toggle:i}=hi(),[a,s]=(0,R.useState)(!1),c=vi(yi);function d(t){e.changeLanguage(t)}return(0,J.jsxs)(_r,{children:[(0,J.jsxs)(vr,{children:[(0,J.jsx)(yr,{to:`/#home`,children:`Bruno Fernandes`}),(0,J.jsx)(br,{children:kr.map(e=>(0,J.jsx)(`li`,{children:(0,J.jsx)(Ce,{to:e.url,className:c===e.url.split(`#`).pop()?`active`:``,children:(0,J.jsx)(Y,{path:e.title})})},e.id))}),(0,J.jsxs)(xr,{children:[(0,J.jsx)(f,{title:n(r===`dark`?`theme.light`:`theme.dark`),children:(0,J.jsx)(o,{color:`inherit`,onClick:i,size:`small`,"aria-label":`Toggle color mode`,children:r===`dark`?(0,J.jsx)(l,{fontSize:`small`}):(0,J.jsx)(te,{fontSize:`small`})})}),(0,J.jsx)(Sr,{children:(0,J.jsx)(wr,{children:ei.map(e=>(0,J.jsx)(Tr,{type:`button`,onClick:()=>d(e.locale),"aria-label":e.label,children:(0,J.jsx)(Or,{image:e.img,alt:e.label})},e.locale))})}),(0,J.jsx)(Cr,{children:(0,J.jsx)(o,{color:`inherit`,onClick:()=>s(!0),"aria-label":`Open menu`,children:(0,J.jsx)(t,{})})})]})]}),(0,J.jsx)(u,{anchor:`right`,open:a,onClose:()=>s(!1),children:(0,J.jsxs)(Er,{children:[(0,J.jsx)(o,{onClick:()=>s(!1),"aria-label":`Close menu`,sx:{alignSelf:`flex-end`},children:(0,J.jsx)(ne,{})}),kr.map(e=>(0,J.jsx)(Ce,{to:e.url,onClick:()=>s(!1),children:(0,J.jsx)(Y,{path:e.title})},e.id)),(0,J.jsx)(Dr,{children:ei.map(e=>(0,J.jsx)(Tr,{type:`button`,onClick:()=>d(e.locale),"aria-label":e.label,children:(0,J.jsx)(Or,{image:e.img,alt:e.label})},e.locale))})]})})]})}var Q={email:`brunomsilvaf@gmail.com`,linkedin:`https://linkedin.com/in/brunomsilvaf`,github:`https://github.com/brunomsilvaf`,portfolio:`https://brunomsilvaf.github.io/portfolio/`,location:`Coimbra, Portugal`},xi=[{key:`languages`,items:[{name:`Java`,level:`strong`},{name:`SQL`,level:`strong`},{name:`Kotlin`,level:`familiar`},{name:`Go`,level:`familiar`},{name:`C#`,level:`familiar`},{name:`Groovy`,level:`familiar`},{name:`Ruby`,level:`familiar`},{name:`JavaScript`,level:`familiar`},{name:`TypeScript`,level:`familiar`}]},{key:`frameworks`,items:[{name:`Spring Boot`,level:`strong`},{name:`Quarkus`,level:`strong`},{name:`GraphQL`,level:`strong`},{name:`React`,level:`familiar`},{name:`Node.js`,level:`familiar`}]},{key:`tools`,items:[{name:`Docker`,level:`strong`},{name:`Git`,level:`strong`},{name:`GitHub`,level:`strong`},{name:`Keycloak`,level:`strong`},{name:`Kafka`,level:`strong`},{name:`Maven`,level:`strong`},{name:`Gradle`,level:`strong`}]},{key:`cloud`,items:[{name:`CI/CD`,level:`familiar`},{name:`Azure`,level:`familiar`},{name:`AWS`,level:`familiar`},{name:`Kubernetes`,level:`familiar`}]}],Si=[`diconium`,`talkdesk`,`cgi`,`riskco`],Ci=[`curricular_internship`,`summer_internship`,`masters`],wi=[`pt`,`en`,`de`];function Ti(e){return e?String(e).split(/(?:<br\s*\/?>\s*){2,}/i).map(e=>e.replace(/<br\s*\/?>/gi,` `).replace(/\s+/g,` `).trim()).filter(Boolean):[]}function Ei(e){let t=t=>{let n=e(t,{returnObjects:!0,defaultValue:[]});return Array.isArray(n)?n:[]};return{name:`Bruno Fernandes`,role:e(`role`),tagline:e(`hero.tagline`),contact:{email:Q.email,location:Q.location,linkedin:Q.linkedin,github:Q.github,portfolio:Q.portfolio},profile:Ti(e(`profile`)),experience:{title:e(`work-experience.title`),jobs:Si.map(n=>{let r=`work-experience.${n}`;return{key:n,company:e(`${r}.title`),role:e(`${r}.role`),date:e(`${r}.date`),summary:Ti(e(`${r}.summary`)),details:Ti(e(`${r}.details`)),skills:t(`${r}.skills`),projects:t(`${r}.projects`)}})},education:{title:e(`education.title`),entries:Ci.map(n=>{let r=`education.${n}`;return{key:n,title:e(`${r}.title`),local:e(`${r}.local`),date:e(`${r}.date`),details:t(`${r}.details`)}}),languagesTitle:e(`education.languagesTitle`),languages:wi.map(t=>({key:t,title:e(`education.languages.${t}.title`),level:e(`education.languages.${t}.level`)}))},skills:{title:e(`skills.title`),categories:xi.map(t=>({name:e(`skills.categories.${t.key}`),items:t.items.map(e=>e.name)}))},projects:{title:e(`projects.title`),items:t(`projects.items`)},conferences:{title:e(`conferences.title`),items:t(`conferences.items`)},associativism:{title:e(`associativism.title`),description:Ti(e(`associativism.description`))},hobbies:{title:e(`hobbies.title`),items:t(`hobbies.items`)}}}function Di(){let{t:e,i18n:t}=w(),[n,r]=(0,R.useState)(!1);return{downloadCv:(0,R.useCallback)(async()=>{r(!0);try{let n=Ei(e),r=(t.resolvedLanguage||t.language||`en`).split(`-`)[0],{default:i}=await ve(async()=>{let{default:e}=await import(`./generateCv-GwBIsnlB.js`);return{default:e}},__vite__mapDeps([0,1,2]));await i(n,`Bruno-Fernandes-CV-${r}.pdf`)}finally{r(!1)}},[e,t]),loading:n}}var Oi=K.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 20% 2rem 20%;
  scroll-margin-top: 80px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding: 2.5rem 2rem;
  }
`,ki=K.h3`
  margin-bottom: 0.25rem;
`,Ai=K.p`
  text-align: center;
  max-width: 520px;
  opacity: 0.85;
`,ji=K.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  opacity: 0.85;
`,Mi=K.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,Ni=K.small`
  margin-top: 1rem;
  opacity: 0.7;
`;function Pi(){let{t:e}=w(),{downloadCv:t,loading:n}=Di(),s=new Date().getFullYear();return(0,J.jsxs)(Oi,{id:`contact`,children:[(0,J.jsx)(ki,{children:(0,J.jsx)(Y,{path:`contact.heading`})}),(0,J.jsx)(Ai,{children:(0,J.jsx)(Y,{path:`contact.description`})}),(0,J.jsxs)(ji,{children:[(0,J.jsx)(r,{fontSize:`small`}),(0,J.jsx)(`span`,{children:Q.location})]}),(0,J.jsxs)(Mi,{children:[(0,J.jsx)(f,{title:e(`actions.emailMe`),children:(0,J.jsx)(o,{color:`inherit`,component:`a`,href:`mailto:${Q.email}`,"aria-label":`Email`,children:(0,J.jsx)(a,{})})}),(0,J.jsx)(f,{title:`LinkedIn`,children:(0,J.jsx)(o,{color:`inherit`,component:`a`,href:Q.linkedin,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,J.jsx)(h,{})})}),(0,J.jsx)(f,{title:`GitHub`,children:(0,J.jsx)(o,{color:`inherit`,component:`a`,href:Q.github,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,children:(0,J.jsx)(pe,{})})}),(0,J.jsx)(i,{variant:`outlined`,color:`inherit`,startIcon:(0,J.jsx)(m,{}),onClick:t,disabled:n,children:e(`actions.downloadCv`)})]}),(0,J.jsxs)(Ni,{children:[`© ${s} Bruno Fernandes. `,(0,J.jsx)(Y,{path:`contact.rights`})]})]})}var Fi=K.section`
  scroll-margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${e=>e.theme.space_md};
  padding: calc(
      ${e=>e.theme.header_height} +
        ${e=>e.theme.space_xl}
    )
    ${e=>e.theme.space_md} ${e=>e.theme.space_xl};
  background: ${e=>e.theme.color_hero_gradient};
`,Ii=K.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  object-position: center bottom;
  border-radius: 50%;
  border: 4px solid ${e=>e.theme.color_surface};
  background: linear-gradient(
    160deg,
    ${e=>e.theme.color_surface_alt},
    ${e=>e.theme.color_surface}
  );
  box-shadow: ${e=>e.theme.shadow_card};
`,Li=K.p`
  max-width: 620px;
  color: ${e=>e.theme.color_muted};
  font-size: 1.1rem;
`,Ri=K.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.space_sm};
  justify-content: center;
  margin-top: ${e=>e.theme.space_sm};
`,zi=K.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  @media only screen and (max-width: 600px) {
    padding-left: 0;
  }
`,Bi=K.img`
  display: inline-block;
  filter: ${e=>e.theme.mode===`dark`?`brightness(0) invert(1)`:`none`};
`,Vi=K.a`
  display: inline-block;
  transition:
    opacity ${e=>e.theme.transition},
    transform ${e=>e.theme.transition};
  &:hover {
    opacity: 0.75;
    transform: translateY(-1px);
  }
`,Hi=K.p`
  color: ${e=>e.theme.color_muted};
  margin: -0.5rem 0 1.5rem 0;
`,Ui=K.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`,Wi=K.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`,Gi=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`,Ki=K.div`
  background: ${e=>e.theme.color_surface};
  border: 1px solid ${e=>e.theme.color_border};
  border-radius: 12px;
  padding: 1.25rem;
`,qi=K.h4`
  margin-bottom: 0.75rem;
  color: ${e=>e.theme.color_accent};
`,Ji=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`,Yi=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`,Xi=K.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: ${e=>e.theme.color_surface};
  border: 1px solid ${e=>e.theme.color_border};
  border-radius: 12px;
  svg {
    color: ${e=>e.theme.color_accent};
    flex-shrink: 0;
  }
`,Zi=K.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Qi=K.h4`
  text-transform: none;
`,$i=K.span`
  color: ${e=>e.theme.color_muted};
  font-size: 0.85rem;
`,ea=K.p`
  color: ${e=>e.theme.color_muted};
  font-size: 0.9rem;
`,ta=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`,na=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: ${e=>e.theme.color_surface};
  border: 1px solid ${e=>e.theme.color_border};
  border-radius: 12px;
  svg {
    color: ${e=>e.theme.color_accent};
  }
`,ra=K.h4`
  text-transform: none;
`,ia=K.p`
  color: ${e=>e.theme.color_muted};
  font-size: 0.9em;
  text-align: center;
`,aa=K.ul`
  margin-top: 0.5rem;
  li {
    list-style: disc;
    margin-left: 1.25rem;
    text-align: left;
  }
`,oa=K.div`
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
  will-change: opacity, transform;

  &.is-visible {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;function $({children:e,as:t=void 0}){let n=(0,R.useRef)(null),[r,i]=(0,R.useState)(!1);return(0,R.useEffect)(()=>{let e=n.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(i(!0),t.disconnect())},{threshold:.12});return t.observe(e),()=>t.disconnect()},[]),(0,J.jsx)(oa,{ref:n,as:t,className:r?`is-visible`:``,children:e})}$.propTypes={children:q.default.node.isRequired,as:q.default.elementType};var sa=`/portfolio/assets/profile_photo-O5jCyR-l.png`,ca=`/portfolio/assets/cgi-CZobhwNE.png`,la=`/portfolio/assets/diconium-B8YBGUUE.png`,ua=`/portfolio/assets/riskco-BkwFHls5.png`,da=`/portfolio/assets/talkdesk-v03Nsw03.png`,fa=[{key:`diconium`,logo:la,height:`40px`,url:`https://diconium.com/`},{key:`talkdesk`,logo:da,height:`30px`,url:`https://www.talkdesk.com/`},{key:`cgi`,logo:ca,height:`30px`,url:`https://www.cgi.com/portugal/pt-pt`},{key:`riskco`,logo:ua,height:`40px`}];function pa(){let{t:e}=w();return(0,J.jsx)(me,{position:`right`,sx:{px:{xs:0,sm:2}},children:fa.map((t,n)=>{let r=`work-experience.${t.key}`,i=e(`${r}.skills`,{returnObjects:!0,defaultValue:[]}),a=e(`${r}.projects`,{returnObjects:!0,defaultValue:[]});return(0,J.jsxs)(g,{children:[(0,J.jsx)(fe,{variant:`body2`,color:`text.secondary`,sx:{display:{xs:`none`,sm:`block`},flex:.3},children:(0,J.jsx)(Y,{path:`${r}.date`})}),(0,J.jsxs)(S,{children:[(0,J.jsx)(ie,{}),n<fa.length-1&&(0,J.jsx)(C,{})]}),(0,J.jsxs)(he,{sx:{pb:`40px`},children:[t.url?(0,J.jsx)(Vi,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e(`${r}.title`),children:(0,J.jsx)(Bi,{src:t.logo,alt:e(`${r}.title`),height:t.height,loading:`lazy`,decoding:`async`})}):(0,J.jsx)(Bi,{src:t.logo,alt:e(`${r}.title`),height:t.height,loading:`lazy`,decoding:`async`}),(0,J.jsx)(`br`,{}),(0,J.jsx)(v,{variant:`body2`,color:`text.secondary`,sx:{display:{xs:`block`,sm:`none`},mt:.5},children:(0,J.jsx)(Y,{path:`${r}.date`})}),(0,J.jsx)(v,{variant:`h6`,component:`span`,children:(0,J.jsx)(Y,{path:`${r}.role`})}),(0,J.jsx)(v,{children:(0,J.jsx)(Y,{path:`${r}.summary`})}),(0,J.jsx)(v,{children:(0,J.jsx)(Y,{path:`${r}.details`})}),Array.isArray(a)&&a.length>0&&(0,J.jsxs)(b,{sx:{mt:2},children:[(0,J.jsx)(v,{variant:`overline`,color:`text.secondary`,sx:{display:`block`,lineHeight:1.6},children:e(`projects.title`)}),(0,J.jsx)(se,{spacing:1,children:a.map(e=>(0,J.jsxs)(b,{children:[(0,J.jsxs)(de,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,variant:`subtitle2`,sx:{display:`inline-flex`,alignItems:`center`,gap:.5,fontWeight:700},children:[e.name,(0,J.jsx)(re,{sx:{fontSize:14}})]}),(0,J.jsx)(v,{variant:`body2`,color:`text.secondary`,children:e.description})]},e.name))})]}),Array.isArray(i)&&i.length>0&&(0,J.jsx)(se,{direction:`row`,spacing:1,useFlexGap:!0,sx:{flexWrap:`wrap`,mt:1.5},children:i.map(e=>(0,J.jsx)(x,{label:e,size:`small`,variant:`outlined`},e))})]})]},t.key)})})}var ma=`/portfolio/assets/fctuc-DzboTw-3.png`,ha=`/portfolio/assets/activespacetech-Cb5ThI8A.png`,ga=[{key:`curricular_internship`,logo:ha,height:`30px`,url:`https://www.activespacetech.com/`},{key:`summer_internship`,logo:ha,height:`30px`,url:`https://www.activespacetech.com/`},{key:`masters`,logo:ma,height:`40px`,url:`https://www.uc.pt/fctuc/`}],_a=[`pt`,`en`,`de`];function va(){let{t:e}=w();return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(me,{position:`right`,sx:{px:{xs:0,sm:2}},children:ga.map((t,n)=>{let r=`education.${t.key}`,i=e(`${r}.details`,{returnObjects:!0,defaultValue:[]});return(0,J.jsxs)(g,{children:[(0,J.jsx)(fe,{variant:`body2`,color:`text.secondary`,sx:{display:{xs:`none`,sm:`block`},flex:.3},children:e(`${r}.date`)}),(0,J.jsxs)(S,{children:[(0,J.jsx)(ie,{}),n<ga.length-1&&(0,J.jsx)(C,{})]}),(0,J.jsxs)(he,{sx:{pb:`40px`},children:[(0,J.jsx)(Vi,{href:t.url,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e(`${r}.local`),children:(0,J.jsx)(Bi,{src:t.logo,alt:e(`${r}.title`),height:t.height,loading:`lazy`,decoding:`async`})}),(0,J.jsx)(`br`,{}),(0,J.jsx)(v,{variant:`body2`,color:`text.secondary`,sx:{display:{xs:`block`,sm:`none`},mt:.5},children:e(`${r}.date`)}),(0,J.jsx)(v,{variant:`h6`,component:`span`,children:e(`${r}.title`)}),Array.isArray(i)&&i.length>0&&(0,J.jsx)(aa,{children:i.map(e=>(0,J.jsx)(`li`,{children:e},e))})]})]},t.key)})}),(0,J.jsx)(si,{children:e(`education.languagesTitle`)}),(0,J.jsx)(Ui,{children:_a.map(t=>(0,J.jsx)(x,{variant:`outlined`,label:`${e(`education.languages.${t}.title`)} — ${e(`education.languages.${t}.level`)}`},t))})]})}function ya(){let{t:e}=w();return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Wi,{children:[(0,J.jsx)(x,{label:e(`skills.legend.strong`),size:`small`,color:`primary`}),(0,J.jsx)(x,{label:e(`skills.legend.familiar`),size:`small`,variant:`outlined`})]}),(0,J.jsx)(Gi,{children:xi.map(t=>(0,J.jsxs)(Ki,{children:[(0,J.jsx)(qi,{children:e(`skills.categories.${t.key}`)}),(0,J.jsx)(Ui,{children:t.items.map(e=>(0,J.jsx)(x,{label:e.name,size:`small`,variant:e.level===`strong`?`filled`:`outlined`,color:e.level===`strong`?`primary`:`default`},e.name))})]},t.key))})]})}function ba(){let{t:e}=w();return(0,J.jsx)(Ji,{children:e(`projects.items`,{returnObjects:!0,defaultValue:[]}).map(t=>(0,J.jsxs)(y,{variant:`outlined`,sx:{display:`flex`,flexDirection:`column`,borderRadius:3},children:[(0,J.jsxs)(le,{sx:{flexGrow:1},children:[(0,J.jsx)(v,{variant:`h6`,gutterBottom:!0,children:t.title}),(0,J.jsx)(v,{variant:`body2`,color:`text.secondary`,sx:{mb:1.5,textAlign:`left`},children:t.description}),(0,J.jsx)(se,{direction:`row`,spacing:1,useFlexGap:!0,sx:{flexWrap:`wrap`},children:t.tags.map(e=>(0,J.jsx)(x,{label:e,size:`small`,variant:`outlined`},e))})]}),(0,J.jsxs)(oe,{children:[t.repo&&(0,J.jsx)(i,{size:`small`,startIcon:(0,J.jsx)(pe,{}),href:t.repo,target:`_blank`,rel:`noopener noreferrer`,children:e(`actions.viewCode`)}),t.demo&&(0,J.jsx)(i,{size:`small`,startIcon:(0,J.jsx)(re,{}),href:t.demo,target:`_blank`,rel:`noopener noreferrer`,children:e(`actions.liveDemo`)})]})]},t.title))})}function xa(){let{t:e}=w();return(0,J.jsx)(Yi,{children:e(`conferences.items`,{returnObjects:!0,defaultValue:[]}).map(e=>(0,J.jsxs)(Xi,{children:[(0,J.jsx)(_,{fontSize:`large`}),(0,J.jsxs)(Zi,{children:[(0,J.jsx)(Qi,{children:e.name}),e.date&&(0,J.jsx)($i,{children:e.date}),e.description&&(0,J.jsx)(ea,{children:e.description})]})]},e.name))})}var Sa={music:ee,puzzling:ce,sports:ae,games:ue};function Ca(){let{t:e}=w();return(0,J.jsx)(ta,{children:e(`hobbies.items`,{returnObjects:!0,defaultValue:[]}).map(e=>(0,J.jsxs)(na,{children:[(0,J.jsx)(Sa[e.icon]||ce,{fontSize:`large`}),(0,J.jsx)(ra,{children:e.name}),(0,J.jsx)(ia,{children:e.description})]},e.name))})}function wa(){let{t:e}=w(),{downloadCv:t,loading:n}=Di();return(0,J.jsxs)(ii,{children:[(0,J.jsxs)(Fi,{id:`home`,children:[(0,J.jsx)(Ii,{src:sa,alt:`Bruno Fernandes`,width:`160`,height:`160`,decoding:`async`,fetchPriority:`high`}),(0,J.jsx)(ai,{children:`Bruno Fernandes`}),(0,J.jsx)(oi,{children:(0,J.jsx)(Y,{path:`role`})}),(0,J.jsx)(Li,{children:(0,J.jsx)(Y,{path:`hero.tagline`})}),(0,J.jsx)(Ri,{children:(0,J.jsx)(i,{variant:`text`,size:`large`,startIcon:(0,J.jsx)(m,{}),onClick:t,disabled:n,children:e(`actions.downloadCv`)})})]}),(0,J.jsx)($,{children:(0,J.jsx)(X,{id:`biography`,children:(0,J.jsx)(ci,{children:(0,J.jsx)(Y,{path:`profile`})})})}),(0,J.jsx)($,{children:(0,J.jsxs)(X,{id:`work-experience`,children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Y,{path:`work-experience.title`})}),(0,J.jsx)(zi,{children:(0,J.jsx)(pa,{})})]})}),(0,J.jsx)($,{children:(0,J.jsxs)(X,{id:`education`,children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Y,{path:`education.title`})}),(0,J.jsx)(va,{})]})}),(0,J.jsx)($,{children:(0,J.jsxs)(X,{id:`skills`,children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Y,{path:`skills.title`})}),(0,J.jsx)(Hi,{children:(0,J.jsx)(Y,{path:`skills.subtitle`})}),(0,J.jsx)(ya,{})]})}),(0,J.jsx)($,{children:(0,J.jsxs)(X,{id:`projects`,children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Y,{path:`projects.title`})}),(0,J.jsx)(Hi,{children:(0,J.jsx)(Y,{path:`projects.subtitle`})}),(0,J.jsx)(ba,{})]})}),(0,J.jsx)($,{children:(0,J.jsxs)(X,{id:`conferences`,children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Y,{path:`conferences.title`})}),(0,J.jsx)(Hi,{children:(0,J.jsx)(Y,{path:`conferences.subtitle`})}),(0,J.jsx)(xa,{})]})}),(0,J.jsx)($,{children:(0,J.jsxs)(X,{id:`associativism`,children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Y,{path:`associativism.title`})}),(0,J.jsx)(ci,{children:(0,J.jsx)(Y,{path:`associativism.description`})})]})}),(0,J.jsx)($,{children:(0,J.jsxs)(X,{id:`hobbies`,children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Y,{path:`hobbies.title`})}),(0,J.jsx)(Ca,{})]})})]})}function Ta(){let{pathname:e,hash:t,key:n}=Ee();return(0,R.useEffect)(()=>{t===``?window.scrollTo(0,0):setTimeout(()=>{let e=t.replace(`#`,``),n=document.getElementById(e);n&&n.scrollIntoView()},0)},[e,t,n]),(0,J.jsxs)(_i,{children:[(0,J.jsx)(bi,{}),(0,J.jsxs)(xe,{children:[(0,J.jsx)(_e,{path:`/`,element:(0,J.jsx)(wa,{})}),(0,J.jsx)(_e,{path:`*`,element:(0,J.jsx)(Te,{to:`/`})})]}),(0,J.jsx)(Pi,{})]})}bt.createRoot(document.getElementById(`root`)).render((0,J.jsx)(ge,{children:(0,J.jsx)(Ta,{})}));export{sa as a,ca as i,ua as n,la as r,da as t};