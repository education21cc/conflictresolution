(this.webpackJsonpconflictresolution=this.webpackJsonpconflictresolution||[]).push([[0],{46:function(e,t,a){e.exports=a(81)},51:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n,r,c,o=a(0),i=a.n(o),s=a(31),l=a.n(s),u=(a(51),a(12)),m=a(43),p=a(23),d=a(8),f=a(7),g=a(13),v=function(e){var t=Object(o.useRef)(null),a=Object(o.useRef)(),n=Object(o.useState)(e.position||new f.Point),r=Object(u.a)(n,2),c=r[0],s=(r[1],e.bounce?"".concat(".","/images/ui/marker.svg"):"".concat(".","/images/ui/marker-green.svg"));Object(o.useEffect)((function(){g.a.from(t.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}}).delay(e.delay||0)}),[e.delay]),Object(o.useEffect)((function(){var a;return!1!==e.bounce&&(a=g.a.to(t.current,{duration:.5,yoyo:!0,repeat:-1,pixi:{y:"-=40"}}).delay(1+Math.random())),function(){var e;null===(e=a)||void 0===e||e.kill()}}),[e.bounce]);var l=function(e){},m=function(){a.current=void 0},p=function(){};return i.a.createElement(d.Sprite,Object.assign({},e,{anchor:[.5,.5],position:c,ref:t,interactive:!0,image:s,mousedown:l,touchstart:l,mouseup:m,mouseupoutside:m,mousemove:p,touchmove:p}))},b=a(25),E=a.n(b);a(74);!function(e){e.sprite="sprite",e.avatar="avatar"}(n||(n={})),function(e){e.angle="angle",e.front="front",e.side="side",e.angry="angry"}(r||(r={})),function(e){e.caption="caption",e.speech="speech",e.image="image"}(c||(c={}));var h=a(5),y=a(83),w=a(44);var O=function(e){var t=e.sceneConfig,a=e.avatar,r=Object(w.a)(e,["sceneConfig","avatar"]);return i.a.createElement(d.Stage,{width:1280,height:720,className:"scene",options:{backgroundColor:16777215}},i.a.createElement(d.Container,r,t.map((function(e){return function(e){var t=[e.scale||1,e.scale||1];switch(e.flipped&&(t[0]=-t[0]),e.type){case n.avatar:return i.a.createElement(d.Sprite,{image:"".concat(".","/images/avatars/").concat(a,"-").concat(e.pose||"front",".png"),key:"avatar",position:e.position||[0,0],scale:t,anchor:[.5,0]});default:return i.a.createElement(d.Sprite,{image:"".concat(".","/").concat(e.image),key:e.image,position:e.position||[0,0]})}}(e)}))))};a(75);g.a.registerPlugin(y.a);var x,j=function(e){var t=e.content,a=e.translations,n=e.avatar,r=e.selectedAnswer,s=void 0===r?null:r,l=Object(o.useState)(s),m=Object(u.a)(l,2),d=m[0],f=m[1],v=Object(o.useMemo)((function(){return null===d?null:e.content.reactions[d]}),[e.content.reactions,d]),b=Object(o.useState)(null!=s),E=Object(u.a)(b,2),y=E[0],w=E[1],x=Object(o.useState)((null===v||void 0===v?void 0:v.scene)||e.content.scene),j=Object(u.a)(x,2),k=j[0],S=j[1],N=Object(o.useRef)(null),C=Object(o.useRef)(null),A=Object(o.useRef)(null),R=Object(o.useRef)(null),W=Object(o.useRef)(null),M=Object(o.useRef)(null);Object(o.useEffect)((function(){p.a.add("correct","".concat(".","/sound/correct.mp3")),p.a.add("wrong","".concat(".","/sound/wrong.mp3"))}),[]);var P=Object(o.useRef)(),H=Object(o.useCallback)((function(){var e=g.a.timeline();P.current=e;var n=A.current,r=R.current;g.a.killTweensOf(n),g.a.killTweensOf(N.current),g.a.killTweensOf(r),M.current&&M.current.removeAttribute("style"),N.current.removeAttribute("style"),C.current.removeAttribute("style"),r.removeAttribute("style"),n.innerHTML=a[t.sequence[0].text],t.sequence.forEach((function(t,r){var o=function(){C.current&&(C.current.style.visibility=t.type===c.speech?"visible":"hidden"),t.type!==c.image&&(N.current&&(N.current.className="balloon ".concat(t.type)),n.innerHTML=a[t.text],t.balloonArrowPos&&C.current&&(C.current.style.right="".concat(t.balloonArrowPos,"%")),T()),t.scene&&S(t.scene)};switch(e.add("seq-".concat(r)),t.type){case c.caption:e.to(n,{onStart:o,duration:.025*a[t.text].length/1,text:{value:a[t.text],oldClass:"hidden",newClass:"visible"},ease:h.b.easeNone}),e.to(n,{duration:3});break;case c.speech:e.to(n,{onStart:o,duration:.045*a[t.text].length/1,ease:h.b.easeNone});break;case c.image:e.to(N.current,{onStart:o,duration:.25,autoAlpha:0,ease:h.b.easeNone}),e.to(C.current,{duration:.25,autoAlpha:0,ease:h.b.easeNone},"-=.25")}})),e.add("seq-".concat(t.sequence.length)),e.to(N.current,{delay:1,duration:.5,autoAlpha:0,ease:h.b.easeNone}),e.add("end"),e.to(r,{onStart:function(){M.current&&(M.current.style.display="none"),C.current&&(C.current.style.visibility="hidden")},duration:.5,left:0,ease:h.d.easeInOut},"-=1")}),[t.sequence,a]),T=function(){if(N.current&&C.current){var e=N.current.getBoundingClientRect();C.current.style.top="".concat(N.current.offsetTop+e.height,"px")}};Object(o.useEffect)((function(){return window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}}),[]);var q=function(){if(P.current){var e=parseInt(P.current.currentLabel().substring("seq-".length));isNaN(e)||P.current.seek("seq-".concat(e+1),!1)}};Object(o.useEffect)((function(){s?(R.current.style.left="0px",N.current.style.visibility="hidden"):H()}),[t.sequence,H,s]);var B=function(){w(!0),S(v.scene),v.correct?(p.a.play("correct"),e.setCorrectAnswer(d)):p.a.play("wrong")},D=function(){P.current&&(S(e.content.scene),f(null),w(!1),P.current.seek("end",!1))},I=function(e,t){if(null===d)return i.a.createElement("li",{key:e,className:"normal",onClick:function(e){return function(e,t){if(e.className="animating",W.current){var a=W.current.querySelectorAll(".options .normal");g.a.to(a,{duration:.5,opacity:0,ease:h.b.easeNone});var n=W.current.querySelector(".options").getBoundingClientRect().top,r=e.getBoundingClientRect().top,c=Math.abs(n-r);g.a.to(e,{duration:.5,top:-c,ease:h.b.easeNone,onComplete:function(){setTimeout((function(){e.className="",f(t)}),250)}})}}(e.currentTarget,t)}},i.a.createElement("div",{className:"text"},a[e]));if(d===t){var n="selected";return y&&(n=(null===v||void 0===v?void 0:v.correct)?"correct":"wrong"),i.a.createElement("li",{key:e,className:n},i.a.createElement("div",{className:"text"},a[e]))}};return i.a.createElement("div",{className:"modal-content modal-conflict",ref:W},i.a.createElement("div",{className:"situation",onClick:q},e.content.scene&&i.a.createElement(O,{sceneConfig:k,avatar:n}),i.a.createElement("div",{className:"inset",ref:R},i.a.createElement("p",null,a[t.description]),i.a.createElement("ul",{className:"options"},t.options.map((function(e,t){return I(e,t)}))),v?y?i.a.createElement(i.a.Fragment,null,(null===v||void 0===v?void 0:v.correct)&&i.a.createElement("p",{className:"right-option"},a["right-option"]),a[v.text].split("\n").map((function(e){return i.a.createElement("p",{key:e.substring(0,10)},e)})),!(null===v||void 0===v?void 0:v.correct)&&i.a.createElement("button",{onClick:D,className:"button-replay"},a["try-again-button"])):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,a[v.confirmText]),i.a.createElement("p",{className:"yesno"},i.a.createElement("button",{onClick:B},a.yes),i.a.createElement("span",{className:"motivation"},a[v.yesText])),i.a.createElement("p",{className:"yesno"},i.a.createElement("button",{onClick:D},a.no),i.a.createElement("span",{className:"motivation"},a[v.noText]))):null),i.a.createElement("div",{className:"balloon",ref:N},i.a.createElement("span",{ref:A})),i.a.createElement("div",{className:"balloon-arrow",ref:C,style:{visibility:"hidden"}})),!d&&i.a.createElement("div",{className:"controls-bottomright"},i.a.createElement("button",{className:"button-replay",onClick:function(){S(e.content.scene),f(null),w(!1),H()}},a["replay-button"]),i.a.createElement("button",{className:"button-next",ref:M,onClick:q},">")))},k=function(e){var t=e.content,a=e.translations,n=e.onClose,r=e.setCorrectAnswer,c=e.selectedAnswer,o=e.avatar,s=function(){n()};return i.a.createElement(E.a,{isOpen:!0,ariaHideApp:!1,portalClassName:"modal-portal",overlayClassName:"modal-overlay",className:"modal",onRequestClose:s},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,a[t.header]," "),i.a.createElement("div",{className:"modal-close",onClick:function(){return s()}})),i.a.createElement(j,{content:t,translations:a,setCorrectAnswer:r,selectedAnswer:c,avatar:o})))},S=a(41),N=Object(o.forwardRef)((function(e,t){var a=Object(d.useApp)();if(a){var n="url('".concat(".","/img/cursors/dwarven_gauntlet_extra_6.png'), auto");a.renderer.plugins.interaction.cursorStyles.pointer=n}return i.a.createElement(C,Object.assign({app:a},e,{ref:t}))})),C=Object(d.PixiComponent)("Viewport",{create:function(e){var t=new S.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker,interaction:e.app.renderer.plugins.interaction}),a=e.minScale,n=void 0===a?.5:a,r=e.maxScale,c=void 0===r?1:r;return t.drag().pinch().wheel().clamp({direction:"all"}).clampZoom({minScale:n,maxScale:c}).decelerate(),t}}),A=N,R=a(82),W="".concat(".","/images/map/conveyor-box.png"),M=function(e){var t=Object(o.useRef)(null),a=Object(o.useState)(),n=Object(u.a)(a,2),r=n[0],c=n[1],s=Object(d.useApp)();return Object(o.useEffect)((function(){s.loader.resources[W]?c(s.loader.resources[W].texture):s.loader.add(W).load((function(e,t){c(t[W].texture)}))}),[s]),Object(o.useEffect)((function(){if(r){var e=function(e){var a,n=new f.Sprite(r);null===(a=t.current)||void 0===a||a.addChild(n),n.x=568,n.y=160;var c=g.a.timeline({delay:e,repeat:-1,repeatDelay:1});c.to(n,{ease:h.b.easeNone,pixi:{x:956,y:256},duration:5}),c.to(n,{ease:h.b.easeNone,pixi:{x:959,y:278},duration:.5}),c.to(n,{ease:h.b.easeNone,pixi:{x:541,y:473},duration:6}),c.to(n,{delay:1,ease:h.b.easeNone,pixi:{alpha:0},duration:1})};e(0),e(3),e(5.5),e(7),e(9.5)}}),[r]),i.a.createElement(d.Container,e,i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-small.png")}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/conveyor-right.png"),x:87,y:152}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-small.png"),x:160,y:39}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/conveyor-right.png"),x:251,y:192}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/conveyor-left.png"),x:520,y:234}),i.a.createElement(d.Container,{ref:t}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-small.png"),x:320,y:78}))};!function(e){e[e.northEast=0]="northEast",e[e.southEast=1]="southEast",e[e.southWest=2]="southWest",e[e.northWest=3]="northWest"}(x||(x={}));var P=Object(o.forwardRef)((function(e,t){return i.a.createElement(d.Container,Object.assign({},e,{ref:t}),e.orientation===x.northEast&&i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/forklift-up.png"),anchor:[.5,0]}),e.orientation===x.southEast&&i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/forklift-down.png"),anchor:[.5,0]}),e.orientation===x.southWest&&i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/forklift-down.png"),scale:[-1,1],anchor:[.5,0]}),e.orientation===x.northWest&&i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/forklift-up.png"),scale:[-1,1],anchor:[.5,0]}))})),H=function(e){var t=Object(o.useRef)(null),a=Object(o.useState)(x.southWest),n=Object(u.a)(a,2),r=n[0],c=n[1],s=Object(o.useState)(1),l=Object(u.a)(s,2),m=l[0],p=l[1];return Object(o.useEffect)((function(){var e=g.a.timeline({repeat:-1,repeatDelay:1});e.to(t.current,{onStart:function(){c(x.southEast),p(1)},ease:h.b.easeNone,pixi:{x:1135,y:148},duration:5}),e.to(t.current,{onStart:function(){c(x.southWest),p(0)},ease:h.b.easeNone,pixi:{x:782,y:330},duration:3.5}),e.to(t.current,{onStart:function(){c(x.northWest),p(3)},ease:h.b.easeNone,pixi:{x:42,y:130},duration:5}),e.to(t.current,{onStart:function(){c(x.northEast),p(0)},ease:h.b.easeNone,pixi:{x:306,y:58},duration:2}),e.to(t.current,{onStart:function(){c(x.southEast),p(2)},ease:h.b.easeNone,pixi:{x:906,y:241},duration:4}),e.to(t.current,{onStart:function(){c(x.southWest),p(0)},ease:h.b.easeNone,pixi:{x:782,y:330},duration:2}),e.to(t.current,{onStart:function(){c(x.northWest),p(3)},ease:h.b.easeNone,pixi:{x:42,y:130},duration:5})}),[]),i.a.createElement(d.Container,e,i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-big.png"),x:385,y:-172}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-big.png"),x:191,y:-84}),i.a.createElement(P,{orientation:r,ref:t,x:484,y:72}),1===m&&i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-big.png"),x:385,y:-172}),m>0&&m<3&&i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-big.png"),x:191,y:-84}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/rack-big.png"),y:0,x:0,name:"racks closest"}))};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var B=i.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;stroke:#3FA548;stroke-width:32;}\n"),D=i.a.createElement("defs",null),I=i.a.createElement("g",{id:"Page-1"},i.a.createElement("polyline",{id:"checkmark",className:"st0",points:"11.33,88.97 88.95,166.87 244.67,11.32  "})),L=function(e){var t=e.svgRef,a=e.title,n=q(e,["svgRef","title"]);return i.a.createElement("svg",T({id:"m-check-mark",x:"0px",y:"0px",width:"255.97px",height:"189.51px",viewBox:"0 0 255.97 189.51",style:{enableBackground:"new 0 0 255.97 189.51"},xmlSpace:"preserve",ref:t},n),a?i.a.createElement("title",null,a):null,B,D,I)},F=i.a.forwardRef((function(e,t){return i.a.createElement(L,T({svgRef:t},e))})),G=(a.p,a(76),function(e){var t=e.content,a=e.translations;return i.a.createElement("div",{className:"legenda"},i.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(".","/images/avatars/").concat(e.avatar,"-front.png)")}}),i.a.createElement("ul",null,t.map((function(t,n){return function(t,n){return void 0===e.answers[n]?i.a.createElement("li",{className:"",onClick:function(){e.setSituationSelected(n)},key:t.header},a[t.header]):i.a.createElement("li",{className:"completed",key:t.header},i.a.createElement(F,{className:"check"}),a[t.header])}(t,n)}))))});R.a.registerPIXI(f),g.a.registerPlugin(R.a);var z=function(e){var t=e.content,a=e.translations,n=e.avatar,r=e.answers,c=e.setSituationOpen,s=Object(o.useRef)(null),l=Object(o.useState)(null),b=Object(u.a)(l,2),E=b[0],h=b[1],y=Object(o.useState)(1200),w=Object(u.a)(y,2),O=w[0],x=w[1],j=Object(o.useState)(600),S=Object(u.a)(j,2),N=S[0],C=S[1];Object(o.useEffect)((function(){var e=function(){var e=Math.min(window.innerWidth,window.outerWidth),t=Math.min(window.innerHeight,window.outerHeight);x(e),C(t)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(o.useEffect)((function(){if(s.current){var e=s.current;e.moveCenter(1748.5,709.5),e.scale=new f.Point(.5,.5)}}),[O,N]),Object(o.useEffect)((function(){E?g.a.to(s.current,{duration:.5,pixi:{blur:20}}):g.a.to(s.current,{duration:.5,pixi:{blur:0}}),c(null!==E)}),[E,c]),Object(o.useEffect)((function(){p.a.add("plops",{url:"".concat(".","/sound/plops.wav"),autoPlay:!0})}),[]);var R=Object(o.useMemo)((function(){return null===E?null:null===t||void 0===t?void 0:t[E]}),[t,E]),W=function(e,t){var a=.5*t,n=new f.Point(e.position[0],e.position[1]),c=void 0===r[t];return i.a.createElement(v,{position:n,pointerdown:function(){return function(e,t){h(t)}(0,t)},delay:a,bounce:c,key:e.position.join("-")})};return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.Stage,{width:O,height:N,options:{transparent:!0}},i.a.createElement(A,{screenWidth:O,screenHeight:N,worldWidth:3497,worldHeight:1419,ref:s},i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/warehouse-back.png")},i.a.createElement(H,{x:1153,y:207}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/safe.png"),x:2086,y:296}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/middle.png"),x:806,y:334}),i.a.createElement(M,{name:"Conveyor",x:269,y:498}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/packing.png"),x:995,y:848,name:"packing-table"}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/map/warehouse-front-wall.png"),y:705,name:"front-wall"}),t.map((function(e,t){return W(e,t)}))))),i.a.createElement(G,{avatar:e.avatar,translations:a,content:t,answers:r,setSituationSelected:h}),R&&i.a.createElement(k,{content:R,translations:a,onClose:function(){h(null)},avatar:n,setCorrectAnswer:function(t){var a=Object(m.a)(r);a[E]=t,e.setAnswers(a)},selectedAnswer:r[E]}))},_=a(42),J=(a(77),function(e){switch(e){case"avatar1":return"avatar1-angle";case"avatar2":return"avatar2-front";case"avatar3":return"avatar3-front";case"avatar4":return"avatar4-angle"}}),V=function(e){var t=e.selectedAvatar,a=e.translations,n=function(a,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=t===a?[new _.a(4,16763904)]:[],o=t===a?.7:.6,s=t===a?2:0,l="".concat(".","/images/avatars/").concat(J(a),".png");return i.a.createElement(d.Sprite,{image:l,filters:c,anchor:[.5,.5],scale:[r?-o:o,o],y:360,x:256+256*n,zIndex:s,interactive:!0,pointerdown:function(){return e.onChangeAvatar(a)}})};return i.a.createElement(E.a,{isOpen:!0,ariaHideApp:!1,portalClassName:"modal-portal",overlayClassName:"modal-overlay modal-intro-overlay",className:"modal modal-intro",onRequestClose:e.onClose},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h1",{className:"header"},a["intro-header"]),i.a.createElement("div",{className:"avatar-selection"},i.a.createElement(d.Stage,{width:1280,height:720,options:{backgroundColor:16777215}},i.a.createElement(d.Sprite,{image:"".concat(".","/images/avatars/background.png"),scale:1,anchor:.5,y:360,x:640}),i.a.createElement(d.Container,{sortableChildren:!0},n("avatar1",0),n("avatar2",1),n("avatar3",2),n("avatar4",3,!0))),i.a.createElement("div",{className:"footer"},i.a.createElement("p",{className:"subtext"},a["intro-subtext"],i.a.createElement("br",null),a["intro-choose-avatar"]),i.a.createElement("button",{onClick:e.onClose,disabled:void 0===e.selectedAvatar},a["intro-start"])))))},X=(a(78),function(e){var t=e.translations;return i.a.createElement(E.a,{isOpen:!0,ariaHideApp:!1,portalClassName:"modal-portal",overlayClassName:"modal-overlay modal-complete-overlay",className:"modal modal-complete"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h1",{className:"header"},t["complete-header"]),i.a.createElement("div",{className:"avatar-selection"},i.a.createElement(d.Stage,{width:1280,height:720,options:{backgroundColor:16777215}},i.a.createElement(d.Sprite,{image:"".concat(".","/images/avatars/background.png"),scale:1,anchor:.5,y:360,x:640}),i.a.createElement(d.Sprite,{image:"".concat(".","/images/avatars/").concat(e.avatar,"-happy.png"),anchor:[.5,.5],scale:.8,y:360,x:640})),i.a.createElement("div",{className:"footer"},i.a.createElement("p",{className:"subtext"},t["complete-congrats"],i.a.createElement("br",null),i.a.createElement("button",{onClick:e.restart},t["replay-button"]))))))});a(79);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var K=i.a.createElement("defs",null,i.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),Q=i.a.createElement("title",null,"Back"),U=i.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),Y=i.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),ee=i.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),te=i.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),ae=i.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),ne=i.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),re=function(e){var t=e.svgRef,a=e.title,n=$(e,["svgRef","title"]);return i.a.createElement("svg",Z({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},n),K,void 0===a?Q:a?i.a.createElement("title",null,a):null,U,Y,ee,te,ae,ne)},ce=i.a.forwardRef((function(e,t){return i.a.createElement(re,Z({svgRef:t},e))})),oe=(a.p,function(e){var t=e.gameDataReceived,a=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};return Object(o.useEffect)((function(){window.setGameData=function(e){a({type:"setGameData",data:e})},window.GAMEDATA=null,window.getGameData=function(){return window.GAMEDATA},window.addEventListener("message",(function(e){e.data.hasOwnProperty("userId")&&(window.GAMEDATA=e.data,t(e.data))}),!1)}),[t]),i.a.createElement("div",{className:"close"},i.a.createElement(ce,{onClick:function(){a({type:"exit"})}}))});a(80);var ie=function(){var e=Object(o.useState)(!0),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)([]),c=Object(u.a)(r,2),s=c[0],l=c[1],m=Object(o.useState)("avatar1"),p=Object(u.a)(m,2),d=p[0],f=p[1],g=Object(o.useState)(!1),v=Object(u.a)(g,2),b=v[0],E=v[1],h=Object(o.useState)({}),y=Object(u.a)(h,2),w=y[0],O=y[1],x=Object(o.useState)(),j=Object(u.a)(x,2),k=j[0],S=j[1],N=Object(o.useMemo)((function(){return null===k||void 0===k?void 0:k.content}),[k]),C=Object(o.useCallback)((function(e){if(S(e),e.translations){var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});O(t)}}),[]);Object(o.useEffect)((function(){0}),[N,C]);var A=Object(o.useMemo)((function(){return s.filter(Boolean).length===(null===N||void 0===N?void 0:N.length)}),[s,N]),R=Object(o.useMemo)((function(){return A&&!b}),[A,b]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,{gameDataReceived:C}),a&&i.a.createElement(V,{translations:w,selectedAvatar:d,onClose:function(){n(!1)},onChangeAvatar:f}),!R&&!a&&d&&N&&i.a.createElement(z,{content:N,translations:w,avatar:d,answers:s,setAnswers:l,setSituationOpen:E}),R&&d&&i.a.createElement(X,{avatar:d,restart:function(){l([])},translations:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(o.StrictMode,null,i.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.755b3d38.chunk.js.map