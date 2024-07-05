(()=>{"use strict";var t={671:(t,n,i)=>{i.d(n,{CI:()=>c,Xw:()=>o,ls:()=>h,w2:()=>u});var e=i(565),s=i(547),r=i(195);function o(){var t=s.K7.canvas.width/(r.JC?r.JC.settings.arenaSize:2e3),n=s.K7.canvas.height/(r.JC?r.JC.settings.arenaSize:2e3);s.K7.clearRect(0,0,s.Ze.width,s.Ze.height),s.K7.strokeStyle="rgba(0, 0, 0, 0.3)",s.K7.lineWidth=2;for(var i=s.oZ*t;i<s.Ze.width;i+=s.oZ*t)s.K7.beginPath(),s.K7.moveTo(i,0),s.K7.lineTo(i,s.Ze.height),s.K7.stroke();for(var e=s.oZ*n;e<s.Ze.height;e+=s.oZ*n)s.K7.beginPath(),s.K7.moveTo(0,e),s.K7.lineTo(s.Ze.width,e),s.K7.stroke()}function u(t,n,i,e){s.K7.beginPath(),s.K7.arc(t,n,i,0,2*Math.PI,!1),s.K7.fillStyle=e,s.K7.fill(),s.K7.closePath()}function h(t,n,i,e,r,o){s.K7.lineCap="round",s.K7.strokeStyle="#3466aa",s.K7.beginPath(),s.K7.arc(t,n,i,0,2*Math.PI,o),s.K7.lineWidth=5,s.K7.stroke(),s.K7.closePath()}function c(t,n,i,s,r){if(n.x!=i.x&&n.y!=i.y){var o=Math.atan2(i.y-n.y,i.x-n.x),u=10,h=new e.Vector(i.x,i.y);h.x-=Math.cos(o)*(1.15*r),h.y-=Math.sin(o)*(1.15*r),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(h.x,h.y),t.strokeStyle=s,t.lineWidth=r,t.stroke(),t.beginPath(),t.moveTo(h.x,h.y),t.lineTo(h.x-u*Math.cos(o-Math.PI/7),h.y-u*Math.sin(o-Math.PI/7)),t.lineTo(h.x-u*Math.cos(o+Math.PI/7),h.y-u*Math.sin(o+Math.PI/7)),t.lineTo(h.x,h.y),t.lineTo(h.x-u*Math.cos(o-Math.PI/7),h.y-u*Math.sin(o-Math.PI/7)),t.strokeStyle=s,t.lineWidth=r,t.stroke(),t.fillStyle=s,t.fill(),t.closePath()}}},626:(t,n,i)=>{i.d(n,{X:()=>h,Z:()=>u});var e=document.getElementById("countdown-three"),s=document.getElementById("countdown-two"),r=document.getElementById("countdown-one"),o=document.getElementById("countdown-go");function u(){setTimeout((function(){e.classList.add("move-left")}),500),setTimeout((function(){s.classList.add("move-top")}),900),setTimeout((function(){r.classList.add("move-right")}),1300),setTimeout((function(){o.classList.add("move-down")}),1700)}function h(){e.classList.remove("move-left"),s.classList.remove("move-top"),r.classList.remove("move-right"),o.classList.remove("move-down")}},195:(t,n,i)=>{i.d(n,{DA:()=>b,JC:()=>m,Wu:()=>P,QI:()=>J,Ym:()=>G,xv:()=>L});var e=i(547),s=function(){function t(t,n,i){void 0===n&&(n=!1),this.t=t,this.isReady=n,this.color=i||"#000000".replace(/0/g,(function(){return(~~(16*Math.random())).toString(16)})),this.snake=null}return t.prototype.toJSON=function(){return{username:this.username,isReady:this.isReady,color:this.color}},Object.defineProperty(t.prototype,"username",{get:function(){return this.t},enumerable:!1,configurable:!0}),t.prototype.reset=function(){this.snake=null},t}(),r=i(565),o=i(946),u=i(366),h=i(671);const c=function(){function t(t){this.i={},this.u=[],this.h=!1,this.l=!1,this.m=document.getElementById("game-canvas-container"),this.initializeWallEmitters(t)}return t.prototype.initializeWallEmitters=function(t){for(var n=[new r.Vector(t,50),new r.Vector(50,t),new r.Vector(t,50),new r.Vector(50,t)],i=[new r.Vector(0,-1),new r.Vector(-1,0),new r.Vector(0,1),new r.Vector(1,0)],s=[new r.Vector(t/2,50),new r.Vector(50,t/2),new r.Vector(t/2,t-50),new r.Vector(t-50,t/2)],u=0;u<4;u++)this.u.push(new o.A(n[u].x,n[u].y,s[u],e.C0,{particleShape:"square",color:"#59eeebff",emitTimeMillis:0,emitDirection:i[u],spreadAngle:Math.PI/6,speed:.8,particleSize:8,particleAge:100,emitInterval:1,emitAmountPerTick:4,fadeDirection:"reverse"}))},t.prototype.addPowerup=function(t){this.i[t.id]=t},t.prototype.removePowerup=function(t){delete this.i[t.id]},t.prototype.applyPowerup=function(t,n){var i=this;switch(t.type){case u.d.PortalWalls:this.setWallState(!this.h);break;case u.d.CameraLockToPlayer:if(n.username===b.username||!b.snake.isAlive)break;this.v?clearTimeout(this.v):(e.jG.width=2*e.jG.getBoundingClientRect().width,e.jG.height=2*e.jG.getBoundingClientRect().height,e.Ze.width=2*e.Ze.getBoundingClientRect().width,e.Ze.height=2*e.Ze.getBoundingClientRect().height,(0,h.Xw)()),this.l=!0,this.v=setTimeout((function(){i.l=!1,document.getElementById("game-canvas-container").style.transform="scale(1) rotate(0rad) translate(0px, 0px)",setTimeout((function(){(0,e.Pp)()}),200)}),t.duration)}this.removePowerup(t)},t.prototype.generateZones=function(t,n){},t.prototype.draw=function(){Object.values(this.i).forEach((function(t){t.draw()})),this.u.forEach((function(t){t.tick(1),t.draw()}))},t.prototype.setWallState=function(t){this.h=t,this.u.forEach((function(n){return n.emitTime=t?1/0:0})),this.m.style.borderColor=t?"#34c6dc":"#555555"},t.prototype.reset=function(){this.i={},clearTimeout(this.v),this.l=!1,document.getElementById("game-canvas-container").style.transform=null,this.setWallState(!1)},Object.defineProperty(t.prototype,"cameraLock",{get:function(){return this.l},enumerable:!1,configurable:!0}),t}();var a=function(){function t(t,n,i,e){this.p={},this.O=t,this.M=n,this.j=i,e?this.p=e:this.addPlayer(n)}return t.prototype.addPlayer=function(t){return!(Object.keys(this.p).length>=this.settings.roomSize)&&(this.p[t.username]=t,!0)},t.prototype.removePlayer=function(t){delete this.p[t]},t.prototype.resetRoomForNewGame=function(){this._=1,this.powerupHandler.reset(),Object.values(this.p).forEach((function(t){t.reset()}))},Object.defineProperty(t.prototype,"host",{get:function(){return this.M},set:function(t){Object.keys(this.p).some((function(n){return n===t.username}))&&(this.M=t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"players",{get:function(){return this.p},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.O},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this.settings.roomSize},set:function(t){t>0&&(this.settings.roomSize=t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastWinner",{get:function(){return this.S},set:function(t){Object.keys(this.p).some((function(n){return n===t.username}))&&(this.S=t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"settings",{get:function(){return this.j},set:function(t){this.j=t,this.powerupHandler=new c(this.settings.arenaSize)},enumerable:!1,configurable:!0}),t}(),f=i(440),l=i(626),m=null,b=null,d=document.getElementById("roomCodeInput"),v=document.getElementById("usernameInput"),w=document.getElementById("joinButton"),p=document.getElementById("readyButton"),g=document.getElementById("login-div"),O=document.getElementById("room-div"),M=document.getElementById("game-canvas-container"),j=document.getElementById("endgame-div"),y=document.getElementById("color-picker"),_=document.getElementById("room-users-list"),A=document.getElementById("room-code"),S=document.getElementById("player-count"),k=document.getElementById("color-picker-container"),T=document.getElementById("start-progress-bar"),I=document.getElementById("last-winner"),F=(document.getElementById("room-settings-button"),document.getElementById("settings-div")),E=document.getElementById("color-label");function x(){""===v.value.trim()?w.disabled=!0:w.disabled=!1,5===d.value.trim().length?w.textContent="JOIN ROOM":w.textContent="CREATE ROOM"}function R(){var t=v.value;t&&(b=new s(t),"CREATE ROOM"===w.innerText?(0,f.ab)(v.value):(0,f.O3)(d.value.toUpperCase(),v.value))}function N(t){"Enter"===t.key&&R()}function C(t){t?(p.classList.remove("red-button"),p.classList.add("green-button")):(p.classList.add("red-button"),p.classList.remove("green-button"))}function J(t){var n=JSON.parse(t.toString()).room,i={};Object.keys(n.players).forEach((function(t){var e=n.players[t];i[t]=new s(t,e.isReady,e.color)})),(m=new a(n.code,new s(n.host.username,n.host.isReady,n.host.color),n.settings,i)).powerupHandler=new c(m.settings.arenaSize),b.username===m.host.username&&document.getElementById("startButton").classList.remove("display-none"),k.style.backgroundColor=b.color,y.value=b.color,document.getElementById("color-label").style.color=z(y.value,"#FFFFFF","#000000"),G({type:"GAME_STATE",state:1}),d.value=m.code,A.innerHTML=m.code,(0,f.AQ)(b),L(t)}function L(t){var n=JSON.parse(t.toString()).room;(Object.keys(n.players).forEach((function(t){null==m.players[t]?m.addPlayer(new s(t,!1,n.players[t].color)):(m.players[t].color=n.players[t].color,m.players[t].isReady=n.players[t].isReady)})),Object.keys(m.players).forEach((function(t){n.players.hasOwnProperty(t)||m.removePlayer(t)})),m.host=new s(n.host.username,n.host.isReady,n.host.color),m.maxSize=n.settings.roomSize,S.innerHTML="".concat(Object.keys(m.players).length,"/").concat(m.maxSize),_.innerHTML="",Object.values(m.players).forEach((function(t){var n=document.createElement("li");n.textContent=t.username+"",t.username===m.host.username?n.insertAdjacentHTML("afterbegin",'<i class="fa-solid fa-crown" style="color: '.concat(t.color,';"></i>')):n.insertAdjacentHTML("afterbegin",'<i class="fa-solid fa-circle" style="color: '.concat(t.color,'; margin-left: 4px"></i>')),t.isReady?n.insertAdjacentHTML("beforeend",' <i class="fa-solid fa-circle" style="color: #37cb48;"></i>'):n.insertAdjacentHTML("beforeend",' <i class="fa-solid fa-circle" style="color: #cb3737;"></i>'),_.appendChild(n)})),b.username===m.host.username)&&(document.getElementById("startButton").classList.remove("display-none"),document.getElementById("settings-list").querySelectorAll("input").forEach((function(t){t.removeAttribute("disabled")})));m.settings=n.settings,document.querySelector('input[name="room-size"]').value=n.settings.roomSize.toString(),document.querySelector('input[name="max-powerups"]').value=n.settings.maxPowerups.toString(),document.querySelector('input[name="powerup-interval"]').value=n.settings.powerupInterval.toString(),document.querySelector('input[name="self-collision"]').checked=n.settings.selfCollision,document.querySelector('input[name="arena-size"]').value=n.settings.arenaSize.toString(),function(t,n){if(0===n)return;T.style.clipPath="inset(0 ".concat(100-Math.floor(t/n*100)+"%"," 0 0")}(Object.values(m.players).filter((function(t){return t.isReady})).length,m.maxSize)}function P(t){var n=null,i="";switch(t){case 0:n=d;break;case 1:n=w,i="ROOM FULL";break;case 2:n=w,i="GAME RUNNING";break;case 3:n=v}n.classList.add("red-button"),n.classList.add("wiggle"),""!==i&&(n.innerText=i),setTimeout((function(){n.classList.remove("red-button"),n.classList.remove("wiggle"),""!==i&&(n.innerText="JOIN ROOM")}),600)}function W(t){E.style.opacity=t?"100":"0"}function z(t,n,i){var e="#"===t.charAt(0)?t.substring(1,7):t,s=[parseInt(e.substring(0,2),16)/255,parseInt(e.substring(2,4),16)/255,parseInt(e.substring(4,6),16)/255].map((function(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}));return.2126*s[0]+.7152*s[1]+.0722*s[2]>.4?i:n}function D(t,n,i){var e,s;(e=t.classList).add.apply(e,n),(s=t.classList).remove.apply(s,i)}function G(t){switch(t.state){case 0:(0,e.Pp)(),D(M,["center-menu-element"],["right-menu-element","left-menu-element","display-none"]),D(O,["left-menu-element"],["center-menu-element","shift-left"]),D(F,["settings-top"],[]),D(j,["right-menu-element"],["center-menu-element"]);break;case 1:D(O,["center-menu-element"],["right-menu-element","left-menu-element","display-none"]),D(g,["left-menu-element"],["center-menu-element"]),D(j,["right-menu-element"],["center-menu-element"]);break;case 2:D(j,["center-menu-element"],["right-menu-element","display-none"]),D(M,["left-menu-element"],["center-menu-element"]),I.innerHTML="".concat(m.lastWinner.username),m.resetRoomForNewGame(),b.snake=null,b.isReady=!1,C(b.isReady),(0,l.X)()}}document.addEventListener("DOMContentLoaded",(function(){x(),v.addEventListener("keydown",N),d.addEventListener("keydown",N),navigator.userAgent.toLowerCase().includes("firefox")||(y.onblur=function(){W(!0)})})),window.updateButton=x,window.handleRoomAction=R,window.handleReadyState=function(){b.isReady=!b.isReady,(0,f.AQ)(b),C(b.isReady)},window.updateColorPicker=function(){k.style.backgroundColor=y.value},window.updatePlayerColor=function(){b.color=y.value,E.style.color=z(y.value,"#FFFFFF","#000000"),W(!0),(0,f.AQ)(b)},window.startGame=function(){b.username==m.host.username&&(0,f.w4)()},window.goBackToLobby=function(){G({type:"GAME_STATE",state:1})},window.toggleSettingsDisplay=function(){F.classList.toggle("settings-top"),O.classList.toggle("shift-left")},window.changeColorPickerLabelState=W,window.enforceMinMax=function(t){""!=t.value&&(parseInt(t.value)<parseInt(t.min)&&(t.value=t.min),parseInt(t.value)>parseInt(t.max)&&(t.value=t.max))},window.sendSettingsToServer=function(){var t={roomSize:parseInt(document.querySelector('input[name="room-size"]').value),maxPowerups:parseInt(document.querySelector('input[name="max-powerups"]').value),powerupInterval:parseInt(document.querySelector('input[name="powerup-interval"]').value),selfCollision:document.querySelector('input[name="self-collision"]').checked,arenaSize:parseInt(document.querySelector('input[name="arena-size"]').value)};(0,f.if)(t)}},703:(t,n,i)=>{i.d(n,{A:()=>a});var e,s=i(822),r=i(210),o=i(836),u=i(195),h=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),c=function(){return c=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},c.apply(this,arguments)};const a=function(t){function n(n,i,e,s){var r=t.call(this,i,e,s)||this;return r.k=n,r}return h(n,t),n.prototype.tick=function(t){if(!(this.T+this.I<0)){if(this.T-=t,this.F%this.R==0&&this.T>0)for(var n=this.N.canvas.height/u.JC.settings.arenaSize,i=0;i<this.C;i++)this.J.push(new s.A(this.position.clone().add((0,r.Ds)(this.k,this.L)),(0,r.Ru)(this.emitDirection,this.P),this.W*n,this.D,this.G,c({},(0,r.xK)(this.B)),this.N,this.I,this.K,this.U,this.Y));this.J.forEach((function(n){n.tick(t)})),this.J=this.J.filter((function(t){return t.age>0})),this.F++}},n.prototype.draw=function(){if(!(this.T+this.I<0)){if(!0===this.q){var t=(0,r.xK)(this.B),n=this.N.canvas.width/u.JC.settings.arenaSize,i=this.N.canvas.height/u.JC.settings.arenaSize;this.N.moveTo(this.position.x*n,this.position.y*i),this.N.fillStyle="rgba(".concat(t.r,",").concat(t.g,",").concat(t.b,", ").concat(Math.min(.2,(this.T+this.I)/this.I/5),")"),this.N.beginPath(),this.N.arc(this.position.x*n,this.position.y*i,this.k,0,2*Math.PI),this.N.fill(),this.N.closePath()}this.J.forEach((function(t){t.draw()}))}},Object.defineProperty(n.prototype,"emitTime",{set:function(t){this.T=t},enumerable:!1,configurable:!0}),n}(o.A)},836:(t,n,i)=>{i.d(n,{A:()=>s});var e=i(565);const s=function(){function t(t,n,i){var s=i.emitInterval,r=void 0===s?2:s,o=i.emitAmountPerTick,u=void 0===o?5:o,h=i.particleSize,c=void 0===h?10:h,a=i.speed,f=void 0===a?2:a,l=i.particleShape,m=void 0===l?"circle":l,b=i.color,d=void 0===b?"#ffffffff":b,v=i.doFadeColor,w=void 0===v||v,p=i.doFadeSize,g=void 0===p||p,O=i.fadeDirection,M=void 0===O?"normal":O,j=i.particleAge,y=void 0===j?50:j,_=i.emitTimeMillis,A=void 0===_?0:_,S=i.drawEmitterZone,k=void 0!==S&&S,T=i.emitDirection,I=void 0===T?new e.Vector(0,0):T,F=i.spreadAngle,E=void 0===F?2*Math.PI:F,x=i.spawnParticlesOnEdge,R=void 0!==x&&x;this.J=[],this.F=0,this.position=t,this.N=n,this.R=r,this.C=u,this.W=c,this.D=f,this.G=m,this.B=d,this.K=w,this.U=g,this.Y=M,this.I=y,this.P=E,this.T=A,this.emitDirection=I,this.q=k,this.L=R}return Object.defineProperty(t.prototype,"emitTime",{set:function(t){this.T=t},enumerable:!1,configurable:!0}),t}()},822:(t,n,i)=>{i.d(n,{A:()=>o});var e=i(210),s=i(195),r=function(){return r=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},r.apply(this,arguments)};const o=function(){function t(t,n,i,s,o,u,h,c,a,f,l){void 0===o&&(o="circle"),this.$=t,this.H=n,this.V=c,this.tt=u.a/this.V,this.nt=i/this.V,"reverse"===l?(this.it=0,this.B=r(r({},(0,e.Ln)(u)),{a:0})):(this.it=i,this.B=u),this.D=s,this.et=o,this.N=h,this.st=a,this.rt=f,this.Y=l}return t.prototype.tick=function(t){this.$.add(this.H.clone().multiplyByScalar(t*this.D)),this.st&&("normal"===this.Y?this.B.a-=this.tt:this.B.a+=this.tt),this.rt&&("normal"===this.Y?this.it-=this.nt:this.it+=this.nt),this.V--},t.prototype.draw=function(){var t=this.N.canvas.width/s.JC.settings.arenaSize,n=this.N.canvas.height/s.JC.settings.arenaSize;switch(this.N.moveTo(this.$.x*t,this.$.y*n),this.N.fillStyle="rgba(".concat(this.B.r,",").concat(this.B.g,", ").concat(this.B.b,", ").concat(this.B.a,")"),this.N.beginPath(),this.et){case"circle":this.N.arc(this.$.x*t,this.$.y*n,this.it,0,2*Math.PI),this.N.fill();break;case"square":this.N.fillRect((this.$.x-this.it)*t,(this.$.y-this.it)*n,2*this.it,2*this.it)}this.N.closePath()},Object.defineProperty(t.prototype,"age",{get:function(){return this.V},enumerable:!1,configurable:!0}),t}()},210:(t,n,i)=>{i.d(n,{Ds:()=>r,E2:()=>u,Ln:()=>c,Ru:()=>s,cn:()=>o,xK:()=>h});var e=i(565);function s(t,n){var i;return function(t){return new e.Vector(Math.cos(t),Math.sin(t))}((i=t,Math.atan2(i.y,i.x)+(Math.random()-.5)*n))}function r(t,n){var i;do{i=new e.Vector(Math.random()*t*2-t,Math.random()*t*2-t)}while(Math.pow(i.x,2)+Math.pow(i.y,2)>Math.pow(t,2));return n&&i.normalise().mulS(t),i}function o(t,n){return new e.Vector(Math.random()*t,Math.random()*n)}function u(t){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function h(t){var n=0,i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);return n=void 0===i[4]?1:parseInt(i[4],16)/255,i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16),a:n}:null}function c(t){return{r:t.r,g:t.g,b:t.b}}},946:(t,n,i)=>{i.d(n,{A:()=>f});var e,s=i(565),r=i(822),o=i(210),u=i(836),h=i(195),c=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),a=function(){return a=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},a.apply(this,arguments)};const f=function(t){function n(n,i,e,s,r){var o=t.call(this,e,s,r)||this;return o.ot=n,o.ut=i,o}return c(n,t),n.prototype.tick=function(t){if(!(this.T+this.I<0)){if(this.T-=t,this.F%this.R==0&&this.T>0)for(var n=this.N.canvas.height/h.JC.settings.arenaSize,i=0;i<this.C;i++)this.J.push(new r.A(this.position.clone().add((0,o.cn)(this.ot,this.ut).subtract(new s.Vector(this.ot/2,this.ut/2))),(0,o.Ru)(this.emitDirection,this.P),this.W*n,this.D,this.G,a({},(0,o.xK)(this.B)),this.N,this.I,this.K,this.U,this.Y));this.J.forEach((function(n){n.tick(t)})),this.J=this.J.filter((function(t){return t.age>0})),this.F++}},n.prototype.draw=function(){if(!(this.T+this.I<0)){if(!0===this.q){var t=this.N.canvas.width/h.JC.settings.arenaSize,n=this.N.canvas.height/h.JC.settings.arenaSize;this.N.moveTo((this.position.x-this.ot/2)*t,(this.position.y-this.ut/2)*n),this.N.fillStyle="rgba(".concat((0,o.E2)(this.B),", ").concat(Math.min(.2,(this.T+this.I)/this.I/5),")"),this.N.beginPath(),this.N.rect(this.position.x-this.ot/2,this.position.y-this.ut/2,this.ot,this.ut),this.N.fill(),this.N.closePath()}this.J.forEach((function(t){t.draw()}))}},Object.defineProperty(n.prototype,"emitTime",{set:function(t){this.T=t},enumerable:!1,configurable:!0}),n}(u.A)},366:(t,n,i)=>{i.d(n,{A:()=>c,d:()=>s});var e,s,r=i(565),o=i(703),u=i(195);!function(t){t[t.SpeedUp=0]="SpeedUp",t[t.SpeedDown=1]="SpeedDown",t[t.Invisibility=2]="Invisibility",t[t.PortalWalls=3]="PortalWalls",t[t.CameraLockToPlayer=4]="CameraLockToPlayer"}(s||(s={}));var h=((e={})[s.SpeedUp]="../assets/powerups/speedup.svg",e[s.SpeedDown]="../assets/powerups/speeddown.svg",e[s.Invisibility]="../assets/powerups/invisibility.svg",e[s.PortalWalls]="../assets/powerups/portalwalls.svg",e[s.CameraLockToPlayer]="../assets/powerups/temp.svg",e);const c=function(){function t(t,n,i,e,s,r){this.ht=30,this.ct=t,this.$=n,this.N=i,this.B=e,this.ft=s,this.lt=r,this.bt=new Image,this.bt.src=h[this.ft],this.dt=new o.A(.6*this.ht,this.$,this.N,{color:this.B,particleSize:this.ht/2.85,particleAge:60,speed:this.ht/20,emitAmountPerTick:3,spawnParticlesOnEdge:!0})}return t.prototype.draw=function(){this.dt.tick(.5),this.dt.draw();var t=this.N.canvas.width/u.JC.settings.arenaSize,n=this.N.canvas.height/u.JC.settings.arenaSize;this.N.moveTo(this.$.x*t,this.$.y*n),this.N.fillStyle=this.B,this.N.beginPath(),this.N.arc(this.$.x*t,this.$.y*n,this.ht*t,0,2*Math.PI),this.N.fill(),this.N.closePath(),this.drawSVG(),this.dt.emitTime=1/0},t.prototype.drawSVG=function(){var t=this.N.canvas.width/u.JC.settings.arenaSize,n=this.N.canvas.height/u.JC.settings.arenaSize,i=.6,e=this.bt.width/this.bt.height,s=2*this.ht*i*t,r=2*this.ht*i*t/e;r>2*this.ht*i*t&&(s=(r=2*this.ht*i*t)*e),this.N.drawImage(this.bt,this.$.x*t-s/2,this.$.y*n-r/2,s,r)},Object.defineProperty(t.prototype,"id",{get:function(){return this.ct},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this.$},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this.ht},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this.ft},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this.B},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this.lt},enumerable:!1,configurable:!0}),t.prototype.toJSON=function(){return{id:this.ct,position:{x:this.position.x,y:this.position.y},color:this.B,type:this.ft,radius:this.ht,duration:this.lt}},t.fromMessagePowerup=function(n,i){return new t(n.powerup.id,new r.Vector(n.powerup.position.x,n.powerup.position.y),i,n.powerup.color,n.powerup.type,n.powerup.duration)},t}()},440:(t,n,i)=>{i.d(n,{AQ:()=>h,O3:()=>u,Uj:()=>c,ab:()=>o,if:()=>f,w4:()=>a});var e,s=i(547),r=i(195);function o(t){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"CREATE_ROOM",username:t}))}function u(t,n){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"JOIN_ROOM",roomCode:t,username:n}))}function h(t){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"PLAYER_DATA",player:t,roomCode:r.JC.code}))}function c(t,n){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"KEY_EVENT",roomCode:r.JC.code,username:r.DA.username,key:t,pressed:n}))}function a(){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"BEGIN_GAME",roomCode:r.JC.code}))}function f(t){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"ROOM_SETTINGS",roomCode:r.JC.code,settings:t}))}(e=new WebSocket("wss://snakegame-server.maxio.site")).onopen=function(){},e.onmessage=function(t){var n=JSON.parse(t.data);switch(n.type){case"JOINED_ROOM":(0,r.QI)(t.data);break;case"JOIN_FAIL":(0,r.Wu)(n.reason);break;case"ROOM_DATA":(0,r.xv)(t.data);break;case"GAME_STATE":(0,r.Ym)(n);break;case"GAMEPLAY_DATA":(0,s.XK)(n);break;case"ERROR":alert("Error: ".concat(n.message))}},e.onclose=function(){},e.onerror=function(t){}},547:(t,n,i)=>{i.d(n,{Ze:()=>_,K7:()=>A,jG:()=>j,C0:()=>y,oZ:()=>S,Pp:()=>k,XK:()=>x});var e=i(565),s=i(671);const r=function(){};var o,u=i(195),h=(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});const c=function(t){function n(n,i,e,s,r,o){var u=t.call(this)||this;return u.center=n,u.radius=i,u.startAngle=e,u.endAngle=s,u.vt=r,u.isCollidable=o,u}return h(n,t),n.prototype.draw=function(t,n){var i=t.canvas.width/u.JC.settings.arenaSize,e=t.canvas.height/u.JC.settings.arenaSize;t.lineCap="round",t.strokeStyle=n,!0===this.isCollidable&&(t.beginPath(),t.arc(this.center.x*i,this.center.y*e,this.radius*Math.min(i,e),this.startAngle,this.endAngle,this.vt),t.stroke(),t.closePath())},n.prototype.drawDebug=function(t,n){var i=this.vt?-Math.PI:Math.PI;i+=this.endAngle,t.lineCap="round",(0,s.w2)(this.center.x,this.center.y,5,"#000000"),(0,s.CI)(t,new e.Vector(this.endPoint.x,this.endPoint.y),new e.Vector(this.endPoint.x+this.radius*Math.cos(i),this.endPoint.y+this.radius*Math.sin(i)),"#bbbbbb",12),(0,s.ls)(this.center.x,this.center.y,this.radius,0,0,!1)},Object.defineProperty(n.prototype,"endPoint",{get:function(){return new e.Vector(this.center.x+this.radius*Math.cos(this.endAngle),this.center.y+this.radius*Math.sin(this.endAngle))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"penpendicularEndAngle",{get:function(){return this.isCounterClockwise?this.endAngle-Math.PI/2:this.endAngle+Math.PI/2},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"penpendicularStartAngle",{get:function(){return this.isCounterClockwise?this.startAngle-Math.PI/2:this.startAngle+Math.PI/2},enumerable:!1,configurable:!0}),n.prototype.isCounterClockwise=function(){return this.vt},n.prototype.getContinuingSegment=function(t){return new n(this.center.clone().add(t),this.radius,this.endAngle,this.endAngle,this.vt,this.isCollidable)},n}(r);var a=i(440);const f=function(){function t(t,n,i){this.wt={},window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),this.gt=t,this.Ot=n.map((function(t){return t.toUpperCase()})),this.Mt=i.map((function(t){return t.toUpperCase()}))}return t.prototype.onKeyDown=function(t){var n=this;if(this.gt.isAlive){var i=t.key.toUpperCase();if(this.Ot.includes(i)||this.Mt.includes(i)){if(this.Ot.some((function(t){return n.wt[t]}))&&this.Mt.includes(i))this.Ot.forEach((function(t){return n.wt[t]=!1}));else if(this.Mt.some((function(t){return n.wt[t]}))&&this.Ot.includes(i))this.Mt.forEach((function(t){return n.wt[t]=!1}));else if(this.wt[i])return;this.wt[i]=!0,(0,a.Uj)(this.Mt.includes(i)?1:0,!0)}}},t.prototype.onKeyUp=function(t){if(this.gt.isAlive){var n=t.key.toUpperCase();this.wt[n]&&(this.wt[n]=!1,(0,a.Uj)(this.Mt.includes(n)?1:0,!1))}},t.prototype.dispose=function(){window.removeEventListener("keydown",this.onKeyDown.bind(this)),window.removeEventListener("keyup",this.onKeyUp.bind(this))},t}();var l=function(){var t=function(n,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},t(n,i)};return function(n,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function e(){this.constructor=n}t(n,i),n.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}();const m=function(t){function n(n,i,e,s){var r=t.call(this)||this;return r.isCollidable=!0,r.startPoint=n,r.endPoint=i,r.isCollidable=e,r.endAngle=s,r}return l(n,t),n.prototype.draw=function(t,n){var i=t.canvas.width/u.JC.settings.arenaSize,e=t.canvas.height/u.JC.settings.arenaSize;t.lineCap="round",t.strokeStyle=n,!0===this.isCollidable&&(t.beginPath(),t.moveTo(this.startPoint.x*i,this.startPoint.y*e),t.lineTo(this.endPoint.x*i,this.endPoint.y*e),t.stroke(),t.closePath())},Object.defineProperty(n.prototype,"length",{get:function(){return Math.sqrt(Math.pow(this.startPoint.x-this.endPoint.x,2)+Math.pow(this.startPoint.y-this.endPoint.y,2))},enumerable:!1,configurable:!0}),n.prototype.getContinuingSegment=function(t){var i=this.endPoint.clone().add(t);return new n(i,i,this.isCollidable,this.endAngle)},n}(r);var b=i(703);const d=function(){function t(t,n,i){this.segments=[],this.isAlive=!0,this.turnRadius=60,this.dt=null,this.addSegment(t),this.B=n,this.N=i,this.dt=new b.A(0,this.head.endPoint,this.N,{emitInterval:2,emitAmountPerTick:3,particleSize:7,speed:4,color:this.B})}return t.prototype.addSegment=function(t){this.segments.push(t)},Object.defineProperty(t.prototype,"head",{get:function(){return this.segments.slice(-1).pop()},enumerable:!1,configurable:!0}),t.prototype.draw=function(){var t=this,n=this.N.canvas.width/u.JC.settings.arenaSize,i=this.N.canvas.height/u.JC.settings.arenaSize;this.N.lineWidth=12*Math.min(n,i),this.segments.forEach((function(e,s){e.draw(t.N,t.B),t.head===e&&(t.N.beginPath(),t.N.arc(e.endPoint.x*n,e.endPoint.y*i,.5*Math.min(n,i),0,2*Math.PI),t.N.stroke(),t.N.closePath())}))},t.prototype.drawHeadingDir=function(){var t=this.N.canvas.width/u.JC.settings.arenaSize,n=this.N.canvas.height/u.JC.settings.arenaSize,i=this.head,r=170*Math.cos(i.endAngle),o=170*Math.sin(i.endAngle),h=12*Math.min(t,n),c=new e.Vector(i.endPoint.x+r,i.endPoint.y+o);(0,s.CI)(this.N,this.head.endPoint.clone().mulS(t),c.mulS(t),this.B,.6*h)},t.prototype.kill=function(){this.isAlive=!1,this.dt.position=this.head.endPoint,this.dt.emitTime=10},t.prototype.updateEmitter=function(t){this.dt&&(this.dt.tick(t),this.dt.draw())},t}();var v=i(366),w=i(626),p=document.getElementById("game-canvas-container"),g=document.createElement("div");g.style.position="absolute",g.style.top="10px",g.style.left="10px",g.style.color="black";var O=0;document.body.appendChild(g);var M=60,j=document.getElementById("game-canvas"),y=j.getContext("2d"),_=document.getElementById("background-canvas"),A=_.getContext("2d");_.width=_.getBoundingClientRect().width,_.height=_.getBoundingClientRect().height,j.width=j.getBoundingClientRect().width,j.height=j.getBoundingClientRect().height;var S=66.666;function k(){j.width=1.5*j.getBoundingClientRect().width,j.height=1.5*j.getBoundingClientRect().height,_.width=1.5*_.getBoundingClientRect().width,_.height=1.5*_.getBoundingClientRect().height,(0,s.Xw)()}function T(){++I%10==0&&(M=function(){var t=performance.now()/10,n=t-F,i=Math.round(1e3/n);return F=t,i}(),g.innerText="FPS: ".concat(M)),y.clearRect(0,0,j.width,j.height),Object.values(u.JC.players).forEach((function(t){t.snake.draw(),t.snake.updateEmitter((performance.now()/10-F)/15)})),u.JC.powerupHandler.draw()}var I=0,F=performance.now()/10;function E(t,n){var i=2*Math.PI,e=(n-t)%i;return e>Math.PI?e-=i:e<-Math.PI&&(e+=i),t+e}function x(t){if(null===u.DA.snake)return t.snakeHeads.forEach((function(t){var n=t.lastSegment,i=t.username,s=n.endPoint;u.JC.players[i].snake=new d(new m(new e.Vector(parseFloat(s.x),parseFloat(s.y)),new e.Vector(parseFloat(s.x),parseFloat(s.y)),n.isCollidable,parseFloat(n.endAngle)),u.JC.players[i].color,y)})),u.DA.snake=u.JC.players[u.DA.username].snake,new f(u.JC.players[u.DA.username].snake,["A","ARROWLEFT"],["D","ARROWRIGHT"]),(0,w.Z)(),T(),void Object.values(u.JC.players).forEach((function(t){t.snake.drawHeadingDir()}));var n=[];t.snakeHeads.forEach((function(i){var s=i.lastSegment,r=i.username,o=u.JC.players[r].snake;if(null!==t.powerupList&&t.powerupList.forEach((function(t){switch(t.action){case 0:u.JC.powerupHandler.removePowerup(v.A.fromMessagePowerup(t,y));break;case 1:u.JC.powerupHandler.addPowerup(v.A.fromMessagePowerup(t,y));break;case 2:u.JC.powerupHandler.applyPowerup(v.A.fromMessagePowerup(t,y),t.player)}})),n.push(r),s.isNewThisTick){if("LineSegment"===i.segmentType){var h=s;o.addSegment(new m(new e.Vector(parseFloat(h.startPoint.x),parseFloat(h.startPoint.y)),new e.Vector(parseFloat(h.endPoint.x),parseFloat(h.endPoint.y)),h.isCollidable,parseFloat(h.endAngle)))}else if("ArcSegment"===i.segmentType){var a=s,f=a.center;o.addSegment(new c(new e.Vector(parseFloat(f.x),parseFloat(f.y)),parseFloat(a.radius),parseFloat(a.startAngle),parseFloat(a.endAngle),a.counterClockwise,a.isCollidable))}}else if("LineSegment"===i.segmentType){if((d=o.segments[o.segments.length-1]).endPoint=new e.Vector(parseFloat(s.endPoint.x),parseFloat(s.endPoint.y)),u.JC.powerupHandler.cameraLock&&r===u.DA.username){var l=-d.endAngle-Math.PI/2,b=E(O,l);p.style.transform="scale(2) rotate(".concat(b,"rad) translate(").concat(-s.endPoint.x*window.innerHeight/u.JC.settings.arenaSize+window.innerHeight/2,"px, ").concat(-s.endPoint.y*window.innerHeight/u.JC.settings.arenaSize+window.innerHeight/2,"px)"),O=b}}else if("ArcSegment"===i.segmentType){var d;if((d=o.segments[o.segments.length-1]).endAngle=parseFloat(s.endAngle),u.JC.powerupHandler.cameraLock&&r===u.DA.username){l=d.isCounterClockwise()?-d.endAngle:-d.endAngle-Math.PI,b=E(O,l);p.style.transform="scale(2) rotate(".concat(b,"rad) translate(").concat(-d.endPoint.x*window.innerHeight/u.JC.settings.arenaSize+window.innerHeight/2,"px, ").concat(-d.endPoint.y*window.innerHeight/u.JC.settings.arenaSize+window.innerHeight/2,"px)"),O=b}}})),Object.values(u.JC.players).forEach((function(t){!n.includes(t.username)&&t.snake.isAlive&&(t.snake.kill(),!0===Object.values(u.JC.players).every((function(t){return!t.snake.isAlive}))&&(u.JC.lastWinner=t))})),T()}window.addEventListener("resize",k),(0,s.Xw)()},120:(t,n)=>{Object.defineProperty(n,"jt",{value:!0});var i=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10],e=function(){function t(t){this.ctor=t}return t.prototype.setAxes=function(t,n){return this.x=t,this.y=n,this},t.prototype.getX=function(){return this.x},t.prototype.setX=function(t){return this.x=t,this},t.prototype.getY=function(){return this.y},t.prototype.setY=function(t){return this.y=t,this},t.prototype.toString=function(t){return void 0===t&&(t=!1),t?"("+Math.round(this.x)+", "+Math.round(this.y)+")":"("+this.x+", "+this.y+")"},t.prototype.toArray=function(){return[this.x,this.y]},t.prototype.toObject=function(){return{x:this.x,y:this.y}},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},t.prototype.multiplyByVector=function(t){return this.x*=t.x,this.y*=t.y,this},t.prototype.mulV=function(t){return this.multiplyByVector(t)},t.prototype.divideByVector=function(t){return this.x/=t.x,this.y/=t.y,this},t.prototype.divV=function(t){return this.divideByVector(t)},t.prototype.multiplyByScalar=function(t){return this.x*=t,this.y*=t,this},t.prototype.mulS=function(t){return this.multiplyByScalar(t)},t.prototype.divideByScalar=function(t){return this.x/=t,this.y/=t,this},t.prototype.divS=function(t){return this.divideByScalar(t)},t.prototype.normalise=function(){return this.divideByScalar(this.magnitude())},t.prototype.normalize=function(){return this.normalise()},t.prototype.unit=function(){return this.normalise()},t.prototype.magnitude=function(){var t=this.x,n=this.y;return Math.sqrt(t*t+n*n)},t.prototype.length=function(){return this.magnitude()},t.prototype.lengthSq=function(){var t=this.x,n=this.y;return t*t+n*n},t.prototype.dot=function(t){return t.x*this.x+t.y*this.y},t.prototype.cross=function(t){return this.x*t.y-this.y*t.x},t.prototype.reverse=function(){return this.x=-this.x,this.y=-this.y,this},t.prototype.abs=function(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this},t.prototype.zero=function(){return this.x=this.y=0,this},t.prototype.distance=function(t){var n=this.x-t.x,i=this.y-t.y;return Math.sqrt(n*n+i*i)},t.prototype.rotate=function(t){var n=Math.cos(t),i=Math.sin(t),e=this.x,s=this.y;return this.x=e*n-s*i,this.y=e*i+s*n,this},t.prototype.round=function(t){void 0===t&&(t=2);var n=i[t];return this.x=(.5+this.x*n<<0)/n,this.y=(.5+this.y*n<<0)/n,this},t.prototype.clone=function(){return new this.ctor(this.x,this.y)},t}();n.AbstractVector=e},51:function(t,n,i){var e,s=this&&this.yt||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(n,"jt",{value:!0});var r=function(t){function n(i,e){var s=t.call(this,n)||this;return s.axes=[i,e],s.ctor=n,s}return s(n,t),Object.defineProperty(n.prototype,"x",{get:function(){return this.axes[0]},set:function(t){this.axes[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.axes[1]},set:function(t){this.axes[1]=t},enumerable:!0,configurable:!0}),n}(i(120).AbstractVector);n.ArrayVector=r},725:function(t,n,i){var e,s=this&&this.yt||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(n,"jt",{value:!0});var r=function(t){function n(i,e){var s=t.call(this,n)||this;return s.axes=new Float32Array(2),s.axes[0]=i,s.axes[1]=e,s}return s(n,t),Object.defineProperty(n.prototype,"x",{get:function(){return this.axes[0]},set:function(t){this.axes[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.axes[1]},set:function(t){this.axes[1]=t},enumerable:!0,configurable:!0}),n}(i(120).AbstractVector);n.Float32Vector=r},565:(t,n,i)=>{function e(t){for(var i in t)n.hasOwnProperty(i)||(n[i]=t[i])}Object.defineProperty(n,"jt",{value:!0}),e(i(120)),e(i(51)),e(i(725)),e(i(974))},974:function(t,n,i){var e,s=this&&this.yt||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(n,"jt",{value:!0});var r=function(t){function n(i,e){var s=t.call(this,n)||this;return s._t=i,s.At=e,s}return s(n,t),Object.defineProperty(n.prototype,"x",{get:function(){return this._t},set:function(t){this._t=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.At},set:function(t){this.At=t},enumerable:!0,configurable:!0}),n}(i(120).AbstractVector);n.Vector=r}},n={};function i(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,i),r.exports}i.n=t=>{var n=t&&t.jt?()=>t.default:()=>t;return i.d(n,{a:n}),n},i.d=(t,n)=>{for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n);i(440)})();