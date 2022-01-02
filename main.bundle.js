(()=>{"use strict";var e={976:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(81),s=n.n(r),i=n(645),a=n.n(i)()(s());a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Heebo&display=swap);"]),a.push([e.id,"body {\r\n  display: block;\r\n  background-color: rgb(180 202 217);\r\n  box-sizing: border-box;\r\n  font-size: 1em;\r\n  font-weight: 700;\r\n  font-family: 'Heebo';\r\n  overflow: scroll;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ncanvas {\r\n  border: 5px black solid;\r\n  border-radius: 15px;\r\n}\r\n\r\n.menu_title {\r\n  font-size: 4em;\r\n}\r\n\r\n.action_button {\r\n  background: #fff;\r\n  backface-visibility: hidden;\r\n  border-radius: .5rem;\r\n  border-style: solid;\r\n  border-width: .125rem;\r\n  box-sizing: border-box;\r\n  color: #212121;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: 'Heebo';\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  line-height: 1.3;\r\n  padding: .875rem 1.125rem;\r\n  position: relative;\r\n  text-decoration: none;\r\n  transform: translateZ(0) scale(1);\r\n  transition: transform .2s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  width: 25%;\r\n}\r\n\r\n.action_button:not(:disabled):hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.action_button:not(:disabled):hover:active {\r\n  transform: scale(1.05) translateY(.125rem);\r\n}\r\n\r\n.action_button:focus {\r\n  outline: 0 solid transparent;\r\n}\r\n\r\n.action_button:focus:before {\r\n  content: \"\";\r\n  left: calc(-1*.375rem);\r\n  pointer-events: none;\r\n  position: absolute;\r\n  top: calc(-1*.375rem);\r\n  transition: border-radius;\r\n  user-select: none;\r\n}\r\n\r\n.action_button:focus:not(:focus-visible) {\r\n  outline: 0 solid transparent;\r\n}\r\n\r\n.action_button:focus:not(:focus-visible):before {\r\n  border-width: 0;\r\n}\r\n\r\n.action_button:not(:disabled):active {\r\n  transform: translateY(.125rem);\r\n}\r\n\r\n.title {\r\n  align-self: flex-start;\r\n  margin-left: 5%;\r\n  width: fit-content;\r\n}\r\n\r\n.score {\r\n  position: relative;\r\n  top: 60px;\r\n  align-self: flex-start;\r\n  margin: 5px 0px 5px 5%;\r\n  width: 20rem;\r\n  margin-bottom: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.scoreText {\r\n  margin: 0px;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.titleText {\r\n  font-size: 3rem;\r\n}",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},405:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(379),s=n.n(r),i=n(795),a=n.n(i),o=n(569),c=n.n(o),u=n(565),l=n.n(u),d=n(216),h=n.n(d),f=n(589),m=n.n(f),p=n(976),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=h(),s()(p.Z,v);const g=p.Z&&p.Z.locals?p.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],o=0;o<e.length;o++){var c=e[o],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var h=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var m=s(f,r);r.byIndex=o,t.splice(o,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=r(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var o=n(i[a]);t[o].references--}for(var c=r(e,s),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},738:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(309),c=i(n(802)),u=a(n(612));function l(e){switch(e){case o.LanePositionsTypes.TOP:return c.CacheKey.TOP_CONE;case o.LanePositionsTypes.MIDDLE:return c.CacheKey.MIDDLE_CONE;case o.LanePositionsTypes.BOTTOM:default:return c.CacheKey.BOTTOM_CONE}}class d extends u.default{constructor(e,t,n,r){super(e,c.default.getImage(l(t)).width,-325+r,t,n)}draw(){const e=c.default.getImage(l(this.lane));this.ctx.drawImage(e,this.x,this.y-e.height)}update(e=1){this.x+=this.velocity*e}}t.default=d},309:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LanePositionsTypes=t.SPRITE_WIDTHS=t.SPRITE_HEIGHT=t.SPRITE_WIDTH=t.FRAME_COUNT=t.BOTTOM_OBSTACLE=t.TOP_OBSTACLE=t.BOTTOM_FLOOR=t.TOP_FLOOR=t.ZERO_X_POS=void 0,t.ZERO_X_POS=150,t.TOP_FLOOR=200,t.BOTTOM_FLOOR=250,t.TOP_OBSTACLE=355,t.BOTTOM_OBSTACLE=390,t.FRAME_COUNT=18,t.SPRITE_WIDTH=280,t.SPRITE_HEIGHT=430,t.SPRITE_WIDTHS=[246,180,211,211,197,277,216,191,230,234,208,207,273,208,195,234,185,243],(n=t.LanePositionsTypes||(t.LanePositionsTypes={}))[n.TOP=0]="TOP",n[n.MIDDLE=1]="MIDDLE",n[n.BOTTOM=2]="BOTTOM"},120:function(e,t,n){var r,s=this&&this.__classPrivateFieldSet||function(e,t,n,r,s){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,n):s?s.value=n:t.set(e,n),n},i=this&&this.__classPrivateFieldGet||function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(761)),c="Touch",u=new Map([["KeyW",o.default.UP],["ArrowUp",o.default.UP],["KeyS",o.default.DOWN],["ArrowDown",o.default.DOWN],["Space",o.default.SPACE],[c,o.default.SPACE]]);t.default=class{constructor(e){r.set(this,void 0),s(this,r,new Set,"f"),e.addEventListener("touchstart",(e=>{e.preventDefault(),u.has(c)&&0===i(this,r,"f").size&&!i(this,r,"f").has(u.get(c))&&i(this,r,"f").add(u.get(c))})),e.addEventListener("touchmove",(e=>{e.preventDefault()})),e.addEventListener("touchend",(e=>{e.preventDefault(),u.has(c)&&1===i(this,r,"f").size&&i(this,r,"f").has(u.get(c))&&i(this,r,"f").delete(u.get(c))})),window.addEventListener("keydown",(e=>{const{code:t}=e;u.has(t)&&0===i(this,r,"f").size&&!i(this,r,"f").has(u.get(t))&&i(this,r,"f").add(u.get(t))})),window.addEventListener("keyup",(e=>{const{code:t}=e;u.has(t)&&1===i(this,r,"f").size&&i(this,r,"f").has(u.get(t))&&i(this,r,"f").delete(u.get(t))}))}get buttonPressed(){return i(this,r,"f")}},r=new WeakMap},746:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(309),c=i(n(802)),u=a(n(761));t.default=class{constructor(e,t){this.ctx=e,this.currentFrame=0,this.frameCycle=0,this.currentLane=o.LanePositionsTypes.BOTTOM,this.yPos=t[o.LanePositionsTypes.BOTTOM],this.moved=!1,this.created=!1,this.currentImageInAnimation=null,this.xPos=o.ZERO_X_POS,this.lanePositions=t}get lane(){return this.currentLane}checkCollision(e){if(null!==this.currentImageInAnimation&&void 0!==e){const t=e.x-(this.xPos+this.currentImageInAnimation.width);if(t>=-this.currentImageInAnimation.width&&t<=0&&e.lane===this.currentLane)return!0}return!1}passedObstacle(e){return null!==this.currentImageInAnimation&&void 0!==e&&this.xPos-(e.x+e.w)>0&&e.lane!==this.currentLane&&!e.isPassed&&(e.isPassed=!0,!0)}reset(){this.frameCycle=0,this.currentFrame=0,this.yPos=this.lanePositions[o.LanePositionsTypes.BOTTOM]-(this.currentImageInAnimation?.height||0),this.moved=!1,this.currentImageInAnimation=null,this.xPos=o.ZERO_X_POS}draw(){this.frameCycle+=1;const e=c.default.getImage(c.CacheKey.SPRITES);this.currentImageInAnimation=e[this.currentFrame%o.FRAME_COUNT],null!==this.ctx&&this.ctx.drawImage(this.currentImageInAnimation,this.xPos,this.yPos),this.frameCycle>.7*o.FRAME_COUNT&&(this.currentFrame+=1,this.frameCycle=0)}update(e){const t=this.currentImageInAnimation?.height;if(!this.created&&t&&(this.created=!0,this.yPos=this.lanePositions[this.currentLane]-(t||0)),e.has(u.default.SPACE))this.moved||(this.currentLane=(this.currentLane+1)%this.lanePositions.length,this.yPos=this.lanePositions[this.currentLane]-(t||0),this.moved=!0);else if(e.has(u.default.DOWN))this.moved||(this.currentLane=(this.currentLane+1)%this.lanePositions.length,this.yPos=this.lanePositions[this.currentLane]-(t||0),this.moved=!0);else if(e.has(u.default.UP)){if(!this.moved){const e=this.lanePositions.length;this.currentLane=(this.currentLane+e-1)%e,this.yPos=this.lanePositions[this.currentLane]-(t||0),this.moved=!0}}else this.moved=!1}}},352:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.score=0,this.highscore=parseInt(localStorage.getItem("highscore")??"0",10),this.isGameRunning=!1,this.isGameOver=!1,this.isGameScreenDrawn=!1,this.isGameMenuDrawn=!1,this.isGameOverDrawn=!1,this.isInMenu=!0}}},455:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=i(n(802));t.default=class{constructor(e,t){this.ctx=e,this.xPos=t,[,this.startingX]=t}reset(){null!==this.ctx&&(this.xPos=[0,this.ctx.canvas.width])}draw(){const e=a.default.getImage(a.CacheKey.BACKGROUND),t=a.default.getImage(a.CacheKey.CLOUDS);null!==this.ctx&&(this.ctx.drawImage(t,0,0),this.ctx.drawImage(e,this.xPos[0],0),this.ctx.drawImage(e,this.xPos[1],0))}update(e=1){this.xPos[1]<=0&&([this.xPos[1],this.xPos[0]]=[this.xPos[0],this.xPos[1]],this.xPos[1]=this.startingX),this.xPos[0]+=-75*e,this.xPos[1]+=-75*e}}},802:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CacheKey=void 0;const s=r(n(40)),i=r(n(745)),a=r(n(54)),o=r(n(17)),c=n(882),u=n(309);var l;!function(e){e[e.TOP_CONE=0]="TOP_CONE",e[e.MIDDLE_CONE=1]="MIDDLE_CONE",e[e.BOTTOM_CONE=2]="BOTTOM_CONE",e[e.BACKGROUND=3]="BACKGROUND",e[e.SPRITES=4]="SPRITES",e[e.CLOUDS=5]="CLOUDS"}(l=t.CacheKey||(t.CacheKey={}));const d=new Map;t.default=class{static async loadAllImages(e){d.set(l.TOP_CONE,await(0,c.loadImage)(s.default,0,0,321,400,{resizeQuality:"high",resizeHeight:e.height/10})),d.set(l.MIDDLE_CONE,await(0,c.loadImage)(s.default,0,0,321,400,{resizeQuality:"high",resizeHeight:e.height/9})),d.set(l.BOTTOM_CONE,await(0,c.loadImage)(s.default,0,0,321,400,{resizeQuality:"high",resizeHeight:e.height/8})),d.set(l.BACKGROUND,await(0,c.loadImage)(a.default,0,0,2560,706,{resizeQuality:"high",resizeWidth:e.width+60,resizeHeight:e.height/16*13})),d.set(l.CLOUDS,await(0,c.loadImage)(o.default,0,0,397,189,{resizeQuality:"high",resizeWidth:e.width+60,resizeHeight:e.height/16*13})),d.set(l.SPRITES,await Promise.all(Array.from({length:u.FRAME_COUNT},((t,n)=>(0,c.loadImage)(i.default,n%u.FRAME_COUNT*u.SPRITE_WIDTH,0,u.SPRITE_WIDTHS[n%u.FRAME_COUNT],u.SPRITE_HEIGHT,{resizeQuality:"high",resizeHeight:e.height/4})))))}static getImage(e){return d.get(e)}}},607:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(405);const s=n(309),i=r(n(120)),a=r(n(746)),o=r(n(455)),c=r(n(352)),u=r(n(802)),l=r(n(122)),d=n(882),h=document.createElement("canvas"),f=h.getContext("2d");h.width=document.body.clientWidth/1.1,h.height=document.body.clientHeight/1.2;const m=[h.height/16*14,h.height/16*15,h.height/16*16],p=new c.default,v=new i.default(h),g=new a.default(f,m),O=new o.default(f,[0,h.width]),y=new l.default(f,m);let P,T,w,b=0;async function _(e){e?(P||(P=e),T=(e-P)/1e3,p.isGameRunning?(p.isGameScreenDrawn||(w=e,function(){document.body.firstElementChild?.remove();const e=document.createElement("div");e.className="container";const t=document.createElement("div");t.className="score";const n=document.createElement("p");n.className="scoreText",n.id="_score";const r=document.createElement("p");r.className="scoreText",r.id="_highscore",t.appendChild(n),t.appendChild(r),e.appendChild(t),e.appendChild(h),document.body.appendChild(e)}(),p.isGameScreenDrawn=!0),function(){const e=y.getClosestObstacle();return g.checkCollision(e)}()?(localStorage.setItem("highscore",Math.max(p.score,p.highscore).toString(10)),p.score=0,p.highscore=parseInt(localStorage.getItem("highscore")??"0",10),g.reset(),O.reset(),y.reset(),p.isGameOver=!0,p.isGameRunning=!1):(function(){const e=y.getClosestObstacle(),t=g.passedObstacle(e),n=g.checkCollision(e);t&&!n&&(p.score+=1);const r=document.createElement("span");r.textContent=p.highscore.toString(10);const s=document.getElementById("_highscore");s&&(s.innerHTML=`High Score: ${r.innerHTML}`);const i=document.createElement("span");i.textContent=p.score.toString(10);const a=document.getElementById("_score");a&&(a.innerHTML=`Score: ${i.innerHTML}`)}(),y.deleteOldestObstacles(),e-w>=1e4&&(w=e,b-=10),function(e=1){g.update(v.buttonPressed),O.update(e),y.update(e)}(Math.min(T,.1)),y.create((0,d.randomNumber)(0,1e3)%3,b),await async function(){if(null!==f)switch(f.clearRect(0,0,h.width,h.height),f.save(),f.fillStyle="#b7ada3",f.rect(0,0,h.width,h.height),f.fill(),f.restore(),O.draw(),g.lane){case s.LanePositionsTypes.TOP:y.draw(s.LanePositionsTypes.TOP),g.draw(),y.draw(s.LanePositionsTypes.MIDDLE),y.draw(s.LanePositionsTypes.BOTTOM);break;case s.LanePositionsTypes.MIDDLE:y.draw(s.LanePositionsTypes.TOP),y.draw(s.LanePositionsTypes.MIDDLE),g.draw(),y.draw(s.LanePositionsTypes.BOTTOM);break;default:y.draw(s.LanePositionsTypes.TOP),y.draw(s.LanePositionsTypes.MIDDLE),y.draw(s.LanePositionsTypes.BOTTOM),g.draw()}}())):p.isGameOver?p.isGameOverDrawn||(function(){document.body.firstElementChild?.remove();const e=document.createElement("div");e.className="container";const t=document.createElement("p");t.className="menu_title",t.innerText="GAME OVER!!!!";const n=document.createElement("button");n.className="action_button",n.textContent="PLAY AGAIN",n.addEventListener("mouseover",(()=>{n.textContent="BING BONG"})),n.addEventListener("mouseleave",(()=>{n.textContent="PLAY AGAIN"})),n.addEventListener("click",(()=>{p.isGameMenuDrawn=!1,p.isGameScreenDrawn=!1,p.isGameOverDrawn=!1,p.isInMenu=!1,p.isGameRunning=!0,p.isGameOver=!1})),n.addEventListener("touchstart",(e=>{e.preventDefault(),n.textContent="BING BONG"})),n.addEventListener("touchmove",(e=>{e.preventDefault()})),n.addEventListener("touchend",(e=>{e.preventDefault(),p.isGameMenuDrawn=!1,p.isGameScreenDrawn=!1,p.isGameOverDrawn=!1,p.isInMenu=!1,p.isGameRunning=!0,p.isGameOver=!1})),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}(),p.isGameOverDrawn=!0):p.isInMenu&&(p.isGameMenuDrawn||(function(){document.body.firstElementChild?.remove();const e=document.createElement("div");e.className="container";const t=document.createElement("p");t.className="menu_title",t.innerText="INVISIBLE FRIENDS RUNNER";const n=document.createElement("button");n.className="action_button",n.textContent="START",n.addEventListener("mouseover",(()=>{n.textContent="BING BONG"})),n.addEventListener("mouseleave",(()=>{n.textContent="START"})),n.addEventListener("click",(()=>{p.isGameMenuDrawn=!1,p.isGameScreenDrawn=!1,p.isGameOverDrawn=!1,p.isInMenu=!1,p.isGameRunning=!0,p.isGameOver=!1})),n.addEventListener("touchstart",(e=>{e.preventDefault(),n.textContent="BING BONG"})),n.addEventListener("touchmove",(e=>{e.preventDefault()})),n.addEventListener("touchend",(e=>{e.preventDefault(),p.isGameMenuDrawn=!1,p.isGameScreenDrawn=!1,p.isGameOverDrawn=!1,p.isInMenu=!1,p.isGameRunning=!0,p.isGameOver=!1})),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}(),p.isGameMenuDrawn=!0)),P=e,window.requestAnimationFrame(_)):window.requestAnimationFrame(_)}(async()=>{await u.default.loadAllImages(h),await _()})()},761:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.UP="UP",e.DOWN="DOWN",e.SPACE="SPACE"}(n||(n={})),t.default=n},612:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t,n,r,s){this.ctx=e,this.width=t,this.dx=n,this.currentLane=r,this.yPos=s,this.xPos=e?.canvas.width,this.passed=!1}get w(){return this.width}get x(){return this.xPos}set x(e){this.xPos=e}get y(){return this.yPos}get velocity(){return this.dx}set velocity(e){this.dx=e}get lane(){return this.currentLane}set lane(e){this.currentLane=e}get isPassed(){return this.passed}set isPassed(e){this.passed=e}}},122:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(738)),i=n(309);t.default=class{constructor(e,t){this.ctx=e,this.lanePositions=t,this.queues=new Map([[i.LanePositionsTypes.TOP,[]],[i.LanePositionsTypes.MIDDLE,[]],[i.LanePositionsTypes.BOTTOM,[]]])}reset(){this.queues.set(i.LanePositionsTypes.TOP,[]),this.queues.set(i.LanePositionsTypes.MIDDLE,[]),this.queues.set(i.LanePositionsTypes.BOTTOM,[])}create(e,t){if(null!==this.ctx&&void 0!==this.queues.get(e)){const n=new s.default(this.ctx,e,this.lanePositions[e],t),r=this.queues.get(e),i=[...this.queues.values()].flat(),a=Math.max(...i.map((e=>e.x)));n.x-a>=270&&r.push(n)}}draw(e){this.queues.get(e)?.forEach((e=>{e.draw()}))}update(e=1){[...this.queues.values()].flat().forEach((t=>{t.update(e)}))}getClosestObstacle(){const e=[...this.queues.values()].map((e=>e[0])).filter(Boolean);let t,n=Number.MAX_SAFE_INTEGER;if(e.length)for(const r of e)r.x<n&&(n=r.x,t=r);return t}deleteOldestObstacles(){[...this.queues.values()].flat().forEach((e=>{e.x<-e.w&&this.queues.get(e.lane)?.shift()}))}}},882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomNumber=t.loadImage=void 0,t.loadImage=async function(e,t,n,r,s,i){const a=new Image;return a.src=e,new Promise((e=>{a.onload=async()=>{const o=await createImageBitmap(a,t,n,r,s,i);e(o)}}))},t.randomNumber=function(e,t){const n=e>t?t:e,r=e>t?e:t;return Math.floor(Math.random()*(r-n+1)+n)}},54:(e,t,n)=>{e.exports=n.p+"76299800b8f82d775292.png"},17:(e,t,n)=>{e.exports=n.p+"bdadf97e183d33fa02a9.png"},40:(e,t,n)=>{e.exports=n.p+"dea2d66c0f8cc8724c80.png"},745:(e,t,n)=>{e.exports=n.p+"298ab93140d520acc404.png"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(607)})();