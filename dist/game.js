(()=>{"use strict";var t={671:(t,n,i)=>{i.d(n,{CI:()=>u,Xw:()=>r,ls:()=>h,w2:()=>o});var e=i(565),s=i(547);function r(){var t=s.K7.canvas.width/2e3,n=s.K7.canvas.height/2e3;s.K7.clearRect(0,0,s.Ze.width,s.Ze.height),s.K7.strokeStyle="rgba(0, 0, 0, 0.3)",s.K7.lineWidth=2;for(var i=s.oZ*t;i<s.Ze.width;i+=s.oZ*t)s.K7.beginPath(),s.K7.moveTo(i,0),s.K7.lineTo(i,s.Ze.height),s.K7.stroke();for(var e=s.oZ*n;e<s.Ze.height;e+=s.oZ*n)s.K7.beginPath(),s.K7.moveTo(0,e),s.K7.lineTo(s.Ze.width,e),s.K7.stroke()}function o(t,n,i,e){s.K7.beginPath(),s.K7.arc(t,n,i,0,2*Math.PI,!1),s.K7.fillStyle=e,s.K7.fill(),s.K7.closePath()}function h(t,n,i,e,r,o){s.K7.lineCap="round",s.K7.strokeStyle="#3466aa",s.K7.beginPath(),s.K7.arc(t,n,i,0,2*Math.PI,o),s.K7.lineWidth=5,s.K7.stroke(),s.K7.closePath()}function u(t,n,i,s,r){if(n.x!=i.x&&n.y!=i.y){var o=Math.atan2(i.y-n.y,i.x-n.x),h=10,u=new e.Vector(i.x,i.y);u.x-=Math.cos(o)*(1.15*r),u.y-=Math.sin(o)*(1.15*r),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(u.x,u.y),t.strokeStyle=s,t.lineWidth=r,t.stroke(),t.beginPath(),t.moveTo(u.x,u.y),t.lineTo(u.x-h*Math.cos(o-Math.PI/7),u.y-h*Math.sin(o-Math.PI/7)),t.lineTo(u.x-h*Math.cos(o+Math.PI/7),u.y-h*Math.sin(o+Math.PI/7)),t.lineTo(u.x,u.y),t.lineTo(u.x-h*Math.cos(o-Math.PI/7),u.y-h*Math.sin(o-Math.PI/7)),t.strokeStyle=s,t.lineWidth=r,t.stroke(),t.fillStyle=s,t.fill(),t.closePath()}}},626:(t,n,i)=>{i.d(n,{X:()=>u,Z:()=>h});var e=document.getElementById("countdown-three"),s=document.getElementById("countdown-two"),r=document.getElementById("countdown-one"),o=document.getElementById("countdown-go");function h(){setTimeout((function(){e.classList.add("move-left")}),500),setTimeout((function(){s.classList.add("move-top")}),900),setTimeout((function(){r.classList.add("move-right")}),1300),setTimeout((function(){o.classList.add("move-down")}),1700)}function u(){e.classList.remove("move-left"),s.classList.remove("move-top"),r.classList.remove("move-right"),o.classList.remove("move-down")}},183:(t,n,i)=>{i.d(n,{DA:()=>O,JC:()=>p,Wu:()=>K,QI:()=>B,Ym:()=>Z,xv:()=>z});var e,s=i(547),r=function(){function t(t,n,i){void 0===n&&(n=!1),this.t=t,this.isReady=n,this.color=i||"#000000".replace(/0/g,(function(){return(~~(16*Math.random())).toString(16)})),this.snake=null}return t.prototype.toJSON=function(){return{username:this.username,isReady:this.isReady,color:this.color}},Object.defineProperty(t.prototype,"username",{get:function(){return this.t},enumerable:!1,configurable:!0}),t.prototype.reset=function(){this.snake=null},t}(),o=i(565),h=i(822),u=i(210),c=i(836),a=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),f=function(){return f=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},f.apply(this,arguments)};const l=function(t){function n(n,i,e,s,r){var o=t.call(this,e,s,r)||this;return o.i=n,o.h=i,o}return a(n,t),n.prototype.tick=function(t){if(!(this.u+this.l<0)){if(this.u-=t,this.v%this.m==0&&this.u>0)for(var n=this.p.canvas.height/2e3,i=0;i<this.O;i++)this.M.push(new h.A(this.position.clone().add((0,u.cn)(this.i,this.h).subtract(new o.Vector(this.i/2,this.h/2))),(0,u.Ru)(this.emitDirection,this.j),this._*n,this.k,this.T,f({},(0,u.xK)(this.S)),this.p,this.l,this.I,this.R,this.F));this.M.forEach((function(n){n.tick(t)})),this.M=this.M.filter((function(t){return t.age>0})),this.v++}},n.prototype.draw=function(){if(!(this.u+this.l<0)){if(!0===this.N){var t=this.p.canvas.width/2e3,n=this.p.canvas.height/2e3;this.p.moveTo((this.position.x-this.i/2)*t,(this.position.y-this.h/2)*n),this.p.fillStyle="rgba(".concat((0,u.E2)(this.S),", ").concat(Math.min(.2,(this.u+this.l)/this.l/5),")"),this.p.beginPath(),this.p.rect(this.position.x-this.i/2,this.position.y-this.h/2,this.i,this.h),this.p.fill(),this.p.closePath()}this.M.forEach((function(t){t.draw()}))}},Object.defineProperty(n.prototype,"emitTime",{set:function(t){this.u=t},enumerable:!1,configurable:!0}),n}(c.A);var b=i(366),d=i(671);const v=function(){function t(){this.C={},this.J=[],this.L=!1,this.D=!1,this.P=document.getElementById("game-canvas-container"),this.initializeWallEmitters()}return t.prototype.initializeWallEmitters=function(){for(var t=[new o.Vector(2e3,50),new o.Vector(50,2e3),new o.Vector(2e3,50),new o.Vector(50,2e3)],n=[new o.Vector(0,-1),new o.Vector(-1,0),new o.Vector(0,1),new o.Vector(1,0)],i=[new o.Vector(1e3,50),new o.Vector(50,1e3),new o.Vector(1e3,1950),new o.Vector(1950,1e3)],e=0;e<4;e++)this.J.push(new l(t[e].x,t[e].y,i[e],s.C0,{particleShape:"square",color:"#59eeebff",emitTimeMillis:0,emitDirection:n[e],spreadAngle:Math.PI/6,speed:.8,particleSize:8,particleAge:100,emitInterval:1,emitAmountPerTick:4,fadeDirection:"reverse"}))},t.prototype.addPowerup=function(t){this.C[t.id]=t},t.prototype.removePowerup=function(t){delete this.C[t.id]},t.prototype.applyPowerup=function(t,n){var i=this;switch(t.type){case b.d.PortalWalls:this.setWallState(!this.L);break;case b.d.CameraLockToPlayer:if(n.username===O.username||!O.snake.isAlive)break;this.W?clearTimeout(this.W):(s.jG.width=2*s.jG.getBoundingClientRect().width,s.jG.height=2*s.jG.getBoundingClientRect().height,s.Ze.width=2*s.Ze.getBoundingClientRect().width,s.Ze.height=2*s.Ze.getBoundingClientRect().height,(0,d.Xw)()),this.D=!0,this.W=setTimeout((function(){i.D=!1,document.getElementById("game-canvas-container").style.transform="scale(1) rotate(0rad) translate(0px, 0px)",setTimeout((function(){(0,s.Pp)()}),200)}),t.duration)}this.removePowerup(t)},t.prototype.generateZones=function(t,n){},t.prototype.draw=function(){Object.values(this.C).forEach((function(t){t.draw()})),this.J.forEach((function(t){t.tick(1),t.draw()}))},t.prototype.setWallState=function(t){this.L=t,this.J.forEach((function(n){return n.emitTime=t?1/0:0})),this.P.style.borderColor=t?"#34c6dc":"#555555"},t.prototype.reset=function(){this.C={},clearTimeout(this.W),this.D=!1,document.getElementById("game-canvas-container").style.transform=null,this.setWallState(!1)},Object.defineProperty(t.prototype,"cameraLock",{get:function(){return this.D},enumerable:!1,configurable:!0}),t}();var m=function(){function t(t,n,i,e){void 0===e&&(e=5),this.G={},this.B=t,this.K=n,this.U=e,i?this.G=i:this.addPlayer(n),this.powerupHandler=new v}return t.prototype.addPlayer=function(t){return!(Object.keys(this.G).length>=this.U)&&(this.G[t.username]=t,!0)},t.prototype.removePlayer=function(t){delete this.G[t]},t.prototype.resetRoomForNewGame=function(){this.Y=1,this.powerupHandler.reset(),Object.values(this.G).forEach((function(t){t.reset()}))},Object.defineProperty(t.prototype,"host",{get:function(){return this.K},set:function(t){Object.keys(this.G).some((function(n){return n===t.username}))&&(this.K=t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"players",{get:function(){return this.G},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.B},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this.U},set:function(t){t>0&&(this.U=t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastWinner",{get:function(){return this.q},set:function(t){Object.keys(this.G).some((function(n){return n===t.username}))&&(this.q=t)},enumerable:!1,configurable:!0}),t}(),w=i(440),g=i(626),p=null,O=null,M=document.getElementById("roomCodeInput"),j=document.getElementById("usernameInput"),y=document.getElementById("joinButton"),_=document.getElementById("readyButton"),A=document.getElementById("login-div"),k=document.getElementById("room-div"),T=document.getElementById("game-canvas-container"),S=document.getElementById("endgame-div"),E=document.getElementById("color-picker"),I=document.getElementById("room-users-list"),x=document.getElementById("room-code"),R=document.getElementById("player-count"),F=document.getElementById("color-picker-container"),N=document.getElementById("start-progress-bar"),C=document.getElementById("last-winner"),J=(document.getElementById("room-settings-button"),document.getElementById("settings-div")),L=document.getElementById("color-label");function D(){""===j.value.trim()?y.disabled=!0:y.disabled=!1,5===M.value.trim().length?y.textContent="JOIN ROOM":y.textContent="CREATE ROOM"}function P(){var t=j.value;t&&(O=new r(t),"CREATE ROOM"===y.innerText?(0,w.ab)(j.value):(0,w.O3)(M.value.toUpperCase(),j.value))}function W(t){"Enter"===t.key&&P()}function G(t){t?(_.classList.remove("red-button"),_.classList.add("green-button")):(_.classList.add("red-button"),_.classList.remove("green-button"))}function B(t){var n=JSON.parse(t.toString()).room,i={};Object.keys(n.players).forEach((function(t){var e=n.players[t];i[t]=new r(t,e.isReady,e.color)})),p=new m(n.code,new r(n.host.username,n.host.isReady,n.host.color),i,n.maxSize),O.username===p.host.username&&document.getElementById("startButton").classList.remove("display-none"),F.style.backgroundColor=O.color,E.value=O.color,document.getElementById("color-label").style.color=Y(E.value,"#FFFFFF","#000000"),Z({type:"GAME_STATE",state:1}),M.value=p.code,x.innerHTML=p.code,(0,w.AQ)(O,p.code),z(t)}function z(t){var n=JSON.parse(t.toString()).room;Object.keys(n.players).forEach((function(t){null==p.players[t]?p.addPlayer(new r(t,!1,n.players[t].color)):(p.players[t].color=n.players[t].color,p.players[t].isReady=n.players[t].isReady)})),Object.keys(p.players).forEach((function(t){n.players.hasOwnProperty(t)||p.removePlayer(t)})),p.host=new r(n.host.username,n.host.isReady,n.host.color),p.maxSize=n.maxSize,R.innerHTML="".concat(Object.keys(p.players).length,"/").concat(p.maxSize),I.innerHTML="",Object.values(p.players).forEach((function(t){var n=document.createElement("li");n.textContent=t.username+"",t.username===p.host.username?n.insertAdjacentHTML("afterbegin",'<i class="fa-solid fa-crown" style="color: '.concat(t.color,';"></i>')):n.insertAdjacentHTML("afterbegin",'<i class="fa-solid fa-circle" style="color: '.concat(t.color,'; margin-left: 4px"></i>')),t.isReady?n.insertAdjacentHTML("beforeend",' <i class="fa-solid fa-circle" style="color: #37cb48;"></i>'):n.insertAdjacentHTML("beforeend",' <i class="fa-solid fa-circle" style="color: #cb3737;"></i>'),I.appendChild(n)})),O.username===p.host.username&&document.getElementById("startButton").classList.remove("display-none"),function(t,n){if(0===n)return;N.style.clipPath="inset(0 ".concat(100-Math.floor(t/n*100)+"%"," 0 0")}(Object.values(p.players).filter((function(t){return t.isReady})).length,p.maxSize)}function K(t){var n=null,i="";switch(t){case 0:n=M;break;case 1:n=y,i="ROOM FULL";break;case 2:n=y,i="GAME RUNNING";break;case 3:n=j}n.classList.add("red-button"),n.classList.add("wiggle"),""!==i&&(n.innerText=i),setTimeout((function(){n.classList.remove("red-button"),n.classList.remove("wiggle"),""!==i&&(n.innerText="JOIN ROOM")}),600)}function U(t){L.style.opacity=t?"100":"0"}function Y(t,n,i){var e="#"===t.charAt(0)?t.substring(1,7):t,s=[parseInt(e.substring(0,2),16)/255,parseInt(e.substring(2,4),16)/255,parseInt(e.substring(4,6),16)/255].map((function(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}));return.2126*s[0]+.7152*s[1]+.0722*s[2]>.4?i:n}function X(t,n,i){var e,s;(e=t.classList).add.apply(e,n),(s=t.classList).remove.apply(s,i)}function Z(t){switch(t.state){case 0:(0,s.Pp)(),X(T,["center-menu-element"],["right-menu-element","left-menu-element","display-none"]),X(k,["left-menu-element"],["center-menu-element","shift-left"]),X(J,["settings-top"],[]);break;case 1:X(k,["center-menu-element"],["right-menu-element","left-menu-element","display-none"]),X(A,["left-menu-element"],["center-menu-element"]),X(S,["right-menu-element"],["center-menu-element"]);break;case 2:X(S,["center-menu-element"],["right-menu-element","display-none"]),X(T,["left-menu-element"],["center-menu-element"]),C.innerHTML="".concat(p.lastWinner.username),p.resetRoomForNewGame(),O.snake=null,O.isReady=!1,G(O.isReady),(0,g.X)()}}document.addEventListener("DOMContentLoaded",(function(){D(),j.addEventListener("keydown",W),M.addEventListener("keydown",W),navigator.userAgent.toLowerCase().includes("firefox")||(E.onblur=function(){U(!0)})})),window.updateButton=D,window.handleRoomAction=P,window.handleReadyState=function(){O.isReady=!O.isReady,(0,w.AQ)(O,p.code),G(O.isReady)},window.updateColorPicker=function(){F.style.backgroundColor=E.value},window.updatePlayerColor=function(){O.color=E.value,L.style.color=Y(E.value,"#FFFFFF","#000000"),U(!0),(0,w.AQ)(O,p.code)},window.startGame=function(){O.username==p.host.username&&(0,w.w4)(p.code)},window.goBackToLobby=function(){Z({type:"GAME_STATE",state:1})},window.toggleSettingsDisplay=function(){J.classList.toggle("settings-top"),k.classList.toggle("shift-left")},window.changeColorPickerLabelState=U,window.enforceMinMax=function(t){""!=t.value&&(parseInt(t.value)<parseInt(t.min)&&(t.value=t.min),parseInt(t.value)>parseInt(t.max)&&(t.value=t.max))}},703:(t,n,i)=>{i.d(n,{A:()=>c});var e,s=i(822),r=i(210),o=i(836),h=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),u=function(){return u=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},u.apply(this,arguments)};const c=function(t){function n(n,i,e,s){var r=t.call(this,i,e,s)||this;return r.$=n,r}return h(n,t),n.prototype.tick=function(t){if(!(this.u+this.l<0)){if(this.u-=t,this.v%this.m==0&&this.u>0)for(var n=this.p.canvas.height/2e3,i=0;i<this.O;i++)this.M.push(new s.A(this.position.clone().add((0,r.Ds)(this.$,this.H)),(0,r.Ru)(this.emitDirection,this.j),this._*n,this.k,this.T,u({},(0,r.xK)(this.S)),this.p,this.l,this.I,this.R,this.F));this.M.forEach((function(n){n.tick(t)})),this.M=this.M.filter((function(t){return t.age>0})),this.v++}},n.prototype.draw=function(){if(!(this.u+this.l<0)){if(!0===this.N){var t=(0,r.xK)(this.S),n=this.p.canvas.width/2e3,i=this.p.canvas.height/2e3;this.p.moveTo(this.position.x*n,this.position.y*i),this.p.fillStyle="rgba(".concat(t.r,",").concat(t.g,",").concat(t.b,", ").concat(Math.min(.2,(this.u+this.l)/this.l/5),")"),this.p.beginPath(),this.p.arc(this.position.x*n,this.position.y*i,this.$,0,2*Math.PI),this.p.fill(),this.p.closePath()}this.M.forEach((function(t){t.draw()}))}},Object.defineProperty(n.prototype,"emitTime",{set:function(t){this.u=t},enumerable:!1,configurable:!0}),n}(o.A)},836:(t,n,i)=>{i.d(n,{A:()=>s});var e=i(565);const s=function(){function t(t,n,i){var s=i.emitInterval,r=void 0===s?2:s,o=i.emitAmountPerTick,h=void 0===o?5:o,u=i.particleSize,c=void 0===u?10:u,a=i.speed,f=void 0===a?2:a,l=i.particleShape,b=void 0===l?"circle":l,d=i.color,v=void 0===d?"#ffffffff":d,m=i.doFadeColor,w=void 0===m||m,g=i.doFadeSize,p=void 0===g||g,O=i.fadeDirection,M=void 0===O?"normal":O,j=i.particleAge,y=void 0===j?50:j,_=i.emitTimeMillis,A=void 0===_?0:_,k=i.drawEmitterZone,T=void 0!==k&&k,S=i.emitDirection,E=void 0===S?new e.Vector(0,0):S,I=i.spreadAngle,x=void 0===I?2*Math.PI:I,R=i.spawnParticlesOnEdge,F=void 0!==R&&R;this.M=[],this.v=0,this.position=t,this.p=n,this.m=r,this.O=h,this._=c,this.k=f,this.T=b,this.S=v,this.I=w,this.R=p,this.F=M,this.l=y,this.j=x,this.u=A,this.emitDirection=E,this.N=T,this.H=F}return Object.defineProperty(t.prototype,"emitTime",{set:function(t){this.u=t},enumerable:!1,configurable:!0}),t}()},822:(t,n,i)=>{i.d(n,{A:()=>r});var e=i(210),s=function(){return s=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},s.apply(this,arguments)};const r=function(){function t(t,n,i,r,o,h,u,c,a,f,l){void 0===o&&(o="circle"),this.V=t,this.tt=n,this.nt=c,this.it=h.a/this.nt,this.et=i/this.nt,"reverse"===l?(this.st=0,this.S=s(s({},(0,e.Ln)(h)),{a:0})):(this.st=i,this.S=h),this.k=r,this.rt=o,this.p=u,this.ot=a,this.ht=f,this.F=l}return t.prototype.tick=function(t){this.V.add(this.tt.clone().multiplyByScalar(t*this.k)),this.ot&&("normal"===this.F?this.S.a-=this.it:this.S.a+=this.it),this.ht&&("normal"===this.F?this.st-=this.et:this.st+=this.et),this.nt--},t.prototype.draw=function(){var t=this.p.canvas.width/2e3,n=this.p.canvas.height/2e3;switch(this.p.moveTo(this.V.x*t,this.V.y*n),this.p.fillStyle="rgba(".concat(this.S.r,",").concat(this.S.g,", ").concat(this.S.b,", ").concat(this.S.a,")"),this.p.beginPath(),this.rt){case"circle":this.p.arc(this.V.x*t,this.V.y*n,this.st,0,2*Math.PI),this.p.fill();break;case"square":this.p.fillRect((this.V.x-this.st)*t,(this.V.y-this.st)*n,2*this.st,2*this.st)}this.p.closePath()},Object.defineProperty(t.prototype,"age",{get:function(){return this.nt},enumerable:!1,configurable:!0}),t}()},210:(t,n,i)=>{i.d(n,{Ds:()=>r,E2:()=>h,Ln:()=>c,Ru:()=>s,cn:()=>o,xK:()=>u});var e=i(565);function s(t,n){var i;return function(t){return new e.Vector(Math.cos(t),Math.sin(t))}((i=t,Math.atan2(i.y,i.x)+(Math.random()-.5)*n))}function r(t,n){var i;do{i=new e.Vector(Math.random()*t*2-t,Math.random()*t*2-t)}while(Math.pow(i.x,2)+Math.pow(i.y,2)>Math.pow(t,2));return n&&i.normalise().mulS(t),i}function o(t,n){return new e.Vector(Math.random()*t,Math.random()*n)}function h(t){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function u(t){var n=0,i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);return n=void 0===i[4]?1:parseInt(i[4],16)/255,i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16),a:n}:null}function c(t){return{r:t.r,g:t.g,b:t.b}}},366:(t,n,i)=>{i.d(n,{A:()=>u,d:()=>s});var e,s,r=i(565),o=i(703);!function(t){t[t.SpeedUp=0]="SpeedUp",t[t.SpeedDown=1]="SpeedDown",t[t.Bomb=2]="Bomb",t[t.FlipButtons=3]="FlipButtons",t[t.Invisibility=4]="Invisibility",t[t.PortalWalls=5]="PortalWalls",t[t.CameraLockToPlayer=6]="CameraLockToPlayer"}(s||(s={}));var h=((e={})[s.SpeedUp]="../assets/powerups/speedup.svg",e[s.SpeedDown]="../assets/powerups/speeddown.svg",e[s.Bomb]="../assets/powerups/bomb.svg",e[s.FlipButtons]="../assets/powerups/flipbuttons.svg",e[s.Invisibility]="../assets/powerups/invisibility.svg",e[s.PortalWalls]="../assets/powerups/portalwalls.svg",e[s.CameraLockToPlayer]="../assets/powerups/temp.svg",e);const u=function(){function t(t,n,i,e,s,r){this.ut=30,this.ct=t,this.V=n,this.p=i,this.S=e,this.ft=s,this.lt=r,this.bt=new Image,this.bt.src=h[this.ft],this.dt=new o.A(.6*this.ut,this.V,this.p,{color:this.S,particleSize:this.ut/2.85,particleAge:60,speed:this.ut/20,emitAmountPerTick:3,spawnParticlesOnEdge:!0})}return t.prototype.draw=function(){this.dt.tick(.5),this.dt.draw();var t=this.p.canvas.width/2e3,n=this.p.canvas.height/2e3;this.p.moveTo(this.V.x*t,this.V.y*n),this.p.fillStyle=this.S,this.p.beginPath(),this.p.arc(this.V.x*t,this.V.y*n,this.ut*t,0,2*Math.PI),this.p.fill(),this.p.closePath(),this.drawSVG(),this.dt.emitTime=1/0},t.prototype.drawSVG=function(){var t=this.p.canvas.width/2e3,n=this.p.canvas.height/2e3,i=.6,e=this.bt.width/this.bt.height,s=2*this.ut*i*t,r=2*this.ut*i*t/e;r>2*this.ut*i*t&&(s=(r=2*this.ut*i*t)*e),this.p.drawImage(this.bt,this.V.x*t-s/2,this.V.y*n-r/2,s,r)},Object.defineProperty(t.prototype,"id",{get:function(){return this.ct},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this.V},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"radius",{get:function(){return this.ut},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this.ft},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this.S},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this.lt},enumerable:!1,configurable:!0}),t.prototype.toJSON=function(){return{id:this.ct,position:{x:this.position.x,y:this.position.y},color:this.S,type:this.ft,radius:this.ut,duration:this.lt}},t.fromMessagePowerup=function(n,i){return new t(n.powerup.id,new r.Vector(n.powerup.position.x,n.powerup.position.y),i,n.powerup.color,n.powerup.type,n.powerup.duration)},t}()},440:(t,n,i)=>{i.d(n,{AQ:()=>u,O3:()=>h,Uj:()=>c,ab:()=>o,w4:()=>a});var e,s=i(547),r=i(183);function o(t){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"CREATE_ROOM",username:t}))}function h(t,n){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"JOIN_ROOM",roomCode:t,username:n}))}function u(t,n){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"PLAYER_DATA",player:t,roomCode:n}))}function c(t,n){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"KEY_EVENT",roomCode:r.JC.code,username:r.DA.username,key:t,pressed:n}))}function a(t){e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({type:"BEGIN_GAME",roomCode:t}))}(e=new WebSocket("wss://snakegame-server.maxio.site")).onopen=function(){},e.onmessage=function(t){var n=JSON.parse(t.data);switch(n.type){case"JOINED_ROOM":(0,r.QI)(t.data);break;case"JOIN_FAIL":(0,r.Wu)(n.reason);break;case"ROOM_DATA":(0,r.xv)(t.data);break;case"GAME_STATE":(0,r.Ym)(n);break;case"GAMEPLAY_DATA":(0,s.XK)(n);break;case"ERROR":alert("Error: ".concat(n.message))}},e.onclose=function(){},e.onerror=function(t){}},547:(t,n,i)=>{i.d(n,{Ze:()=>_,K7:()=>A,jG:()=>j,C0:()=>y,oZ:()=>k,Pp:()=>T,XK:()=>R});var e=i(565),s=i(671);const r=function(){};var o,h=(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});const u=function(t){function n(n,i,e,s,r,o){var h=t.call(this)||this;return h.center=n,h.radius=i,h.startAngle=e,h.endAngle=s,h.vt=r,h.isCollidable=o,h}return h(n,t),n.prototype.draw=function(t,n){var i=t.canvas.width/2e3,e=t.canvas.height/2e3;t.lineCap="round",t.strokeStyle=n,!0===this.isCollidable&&(t.beginPath(),t.arc(this.center.x*i,this.center.y*e,this.radius*Math.min(i,e),this.startAngle,this.endAngle,this.vt),t.stroke(),t.closePath())},n.prototype.drawDebug=function(t,n){var i=this.vt?-Math.PI:Math.PI;i+=this.endAngle,t.lineCap="round",(0,s.w2)(this.center.x,this.center.y,5,"#000000"),(0,s.CI)(t,new e.Vector(this.endPoint.x,this.endPoint.y),new e.Vector(this.endPoint.x+this.radius*Math.cos(i),this.endPoint.y+this.radius*Math.sin(i)),"#bbbbbb",12),(0,s.ls)(this.center.x,this.center.y,this.radius,0,0,!1)},Object.defineProperty(n.prototype,"endPoint",{get:function(){return new e.Vector(this.center.x+this.radius*Math.cos(this.endAngle),this.center.y+this.radius*Math.sin(this.endAngle))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"penpendicularEndAngle",{get:function(){return this.isCounterClockwise?this.endAngle-Math.PI/2:this.endAngle+Math.PI/2},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"penpendicularStartAngle",{get:function(){return this.isCounterClockwise?this.startAngle-Math.PI/2:this.startAngle+Math.PI/2},enumerable:!1,configurable:!0}),n.prototype.isCounterClockwise=function(){return this.vt},n.prototype.getContinuingSegment=function(t){return new n(this.center.clone().add(t),this.radius,this.endAngle,this.endAngle,this.vt,this.isCollidable)},n}(r);var c=i(440);const a=function(){function t(t,n,i){this.wt={},window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),this.gt=t,this.Ot=n.map((function(t){return t.toUpperCase()})),this.Mt=i.map((function(t){return t.toUpperCase()}))}return t.prototype.onKeyDown=function(t){var n=this;if(this.gt.isAlive){var i=t.key.toUpperCase();if(this.Ot.includes(i)||this.Mt.includes(i)){if(this.Ot.some((function(t){return n.wt[t]}))&&this.Mt.includes(i))this.Ot.forEach((function(t){return n.wt[t]=!1}));else if(this.Mt.some((function(t){return n.wt[t]}))&&this.Ot.includes(i))this.Mt.forEach((function(t){return n.wt[t]=!1}));else if(this.wt[i])return;this.wt[i]=!0,(0,c.Uj)(this.Mt.includes(i)?1:0,!0)}}},t.prototype.onKeyUp=function(t){if(this.gt.isAlive){var n=t.key.toUpperCase();this.wt[n]&&(this.wt[n]=!1,(0,c.Uj)(this.Mt.includes(n)?1:0,!1))}},t.prototype.dispose=function(){window.removeEventListener("keydown",this.onKeyDown.bind(this)),window.removeEventListener("keyup",this.onKeyUp.bind(this))},t}();var f=function(){var t=function(n,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},t(n,i)};return function(n,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function e(){this.constructor=n}t(n,i),n.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}();const l=function(t){function n(n,i,e,s){var r=t.call(this)||this;return r.isCollidable=!0,r.startPoint=n,r.endPoint=i,r.isCollidable=e,r.endAngle=s,r}return f(n,t),n.prototype.draw=function(t,n){var i=t.canvas.width/2e3,e=t.canvas.height/2e3;t.strokeStyle=n,t.lineCap="round",!0===this.isCollidable&&(t.beginPath(),t.moveTo(this.startPoint.x*i,this.startPoint.y*e),t.lineTo(this.endPoint.x*i,this.endPoint.y*e),t.stroke(),t.closePath())},Object.defineProperty(n.prototype,"length",{get:function(){return Math.sqrt(Math.pow(this.startPoint.x-this.endPoint.x,2)+Math.pow(this.startPoint.y-this.endPoint.y,2))},enumerable:!1,configurable:!0}),n.prototype.getContinuingSegment=function(t){var i=this.endPoint.clone().add(t);return new n(i,i,this.isCollidable,this.endAngle)},n}(r);var b=i(703);const d=function(){function t(t,n,i){this.segments=[],this.isAlive=!0,this.turnRadius=60,this.dt=null,this.addSegment(t),this.S=n,this.p=i,this.dt=new b.A(0,this.head.endPoint,this.p,{emitInterval:2,emitAmountPerTick:3,particleSize:7,speed:4,color:this.S})}return t.prototype.addSegment=function(t){this.segments.push(t)},Object.defineProperty(t.prototype,"head",{get:function(){return this.segments.slice(-1).pop()},enumerable:!1,configurable:!0}),t.prototype.draw=function(){var t=this,n=this.p.canvas.width/2e3,i=this.p.canvas.height/2e3;this.p.lineWidth=12*Math.min(n,i),this.segments.forEach((function(e,s){e.draw(t.p,t.S),t.head===e&&(t.p.beginPath(),t.p.arc(e.endPoint.x*n,e.endPoint.y*i,.5*Math.min(n,i),0,2*Math.PI),t.p.stroke(),t.p.closePath())}))},t.prototype.drawHeadingDir=function(){var t=this.p.canvas.width/2e3,n=this.p.canvas.height/2e3,i=this.head,r=170*Math.cos(i.endAngle),o=170*Math.sin(i.endAngle),h=12*Math.min(t,n),u=new e.Vector(i.endPoint.x+r,i.endPoint.y+o);(0,s.CI)(this.p,this.head.endPoint.clone().mulS(t),u.mulS(t),this.S,.6*h)},t.prototype.kill=function(){this.isAlive=!1,this.dt.position=this.head.endPoint,this.dt.emitTime=10},t.prototype.updateEmitter=function(t){this.dt&&(this.dt.tick(t),this.dt.draw())},t}();var v=i(183),m=i(366),w=i(626),g=document.getElementById("game-canvas-container"),p=document.createElement("div");p.style.position="absolute",p.style.top="10px",p.style.left="10px",p.style.color="black";var O=0;document.body.appendChild(p);var M=60,j=document.getElementById("game-canvas"),y=j.getContext("2d"),_=document.getElementById("background-canvas"),A=_.getContext("2d");_.width=_.getBoundingClientRect().width,_.height=_.getBoundingClientRect().height,j.width=j.getBoundingClientRect().width,j.height=j.getBoundingClientRect().height;var k=66.666;function T(){j.width=1.5*j.getBoundingClientRect().width,j.height=1.5*j.getBoundingClientRect().height,_.width=1.5*_.getBoundingClientRect().width,_.height=1.5*_.getBoundingClientRect().height,(0,s.Xw)()}function S(){++E%10==0&&(M=function(){var t=performance.now()/10,n=t-I,i=Math.round(1e3/n);return I=t,i}(),p.innerText="FPS: ".concat(M)),y.clearRect(0,0,j.width,j.height),Object.values(v.JC.players).forEach((function(t){t.snake.draw(),t.snake.updateEmitter((performance.now()/10-I)/15)})),v.JC.powerupHandler.draw()}var E=0,I=performance.now()/10;function x(t,n){var i=2*Math.PI,e=(n-t)%i;return e>Math.PI?e-=i:e<-Math.PI&&(e+=i),t+e}function R(t){if(null===v.DA.snake)return t.snakeHeads.forEach((function(t){var n=t.lastSegment,i=t.username,s=n.endPoint;v.JC.players[i].snake=new d(new l(new e.Vector(s.x,s.y),new e.Vector(s.x,s.y),n.isCollidable,n.endAngle),v.JC.players[i].color,y)})),v.DA.snake=v.JC.players[v.DA.username].snake,new a(v.JC.players[v.DA.username].snake,["A","ARROWLEFT"],["D","ARROWRIGHT"]),(0,w.Z)(),S(),void Object.values(v.JC.players).forEach((function(t){t.snake.drawHeadingDir()}));var n=[];t.snakeHeads.forEach((function(i){var s=i.lastSegment,r=i.username,o=v.JC.players[r].snake;if(null!==t.powerupList&&t.powerupList.forEach((function(t){switch(t.action){case 0:v.JC.powerupHandler.removePowerup(m.A.fromMessagePowerup(t,y));break;case 1:v.JC.powerupHandler.addPowerup(m.A.fromMessagePowerup(t,y));break;case 2:v.JC.powerupHandler.applyPowerup(m.A.fromMessagePowerup(t,y),t.player)}})),n.push(r),s.isNewThisTick){if("LineSegment"===i.segmentType){var h=s;o.addSegment(new l(new e.Vector(h.startPoint.x,h.startPoint.y),new e.Vector(h.endPoint.x,h.endPoint.y),h.isCollidable,h.endAngle))}else if("ArcSegment"===i.segmentType){var c=s,a=c.center;o.addSegment(new u(new e.Vector(a.x,a.y),c.radius,c.startAngle,c.endAngle,c.counterClockwise,c.isCollidable))}}else if("LineSegment"===i.segmentType){if((d=o.segments[o.segments.length-1]).endPoint=new e.Vector(s.endPoint.x,s.endPoint.y),v.JC.powerupHandler.cameraLock&&r===v.DA.username){var f=-d.endAngle-Math.PI/2,b=x(O,f);g.style.transform="scale(2) rotate(".concat(b,"rad) translate(").concat(-s.endPoint.x*window.innerHeight/2e3+window.innerHeight/2,"px, ").concat(-s.endPoint.y*window.innerHeight/2e3+window.innerHeight/2,"px)"),O=b}}else if("ArcSegment"===i.segmentType){var d;if((d=o.segments[o.segments.length-1]).endAngle=s.endAngle,v.JC.powerupHandler.cameraLock&&r===v.DA.username){f=d.isCounterClockwise?-d.endAngle:-d.endAngle-Math.PI,b=x(O,f);g.style.transform="scale(2) rotate(".concat(b,"rad) translate(").concat(-d.endPoint.x*window.innerHeight/2e3+window.innerHeight/2,"px, ").concat(-d.endPoint.y*window.innerHeight/2e3+window.innerHeight/2,"px)"),O=b}}})),Object.values(v.JC.players).forEach((function(t){!n.includes(t.username)&&t.snake.isAlive&&(t.snake.kill(),!0===Object.values(v.JC.players).every((function(t){return!t.snake.isAlive}))&&(v.JC.lastWinner=t))})),S()}window.addEventListener("resize",T),(0,s.Xw)()},120:(t,n)=>{Object.defineProperty(n,"jt",{value:!0});var i=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10],e=function(){function t(t){this.ctor=t}return t.prototype.setAxes=function(t,n){return this.x=t,this.y=n,this},t.prototype.getX=function(){return this.x},t.prototype.setX=function(t){return this.x=t,this},t.prototype.getY=function(){return this.y},t.prototype.setY=function(t){return this.y=t,this},t.prototype.toString=function(t){return void 0===t&&(t=!1),t?"("+Math.round(this.x)+", "+Math.round(this.y)+")":"("+this.x+", "+this.y+")"},t.prototype.toArray=function(){return[this.x,this.y]},t.prototype.toObject=function(){return{x:this.x,y:this.y}},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},t.prototype.multiplyByVector=function(t){return this.x*=t.x,this.y*=t.y,this},t.prototype.mulV=function(t){return this.multiplyByVector(t)},t.prototype.divideByVector=function(t){return this.x/=t.x,this.y/=t.y,this},t.prototype.divV=function(t){return this.divideByVector(t)},t.prototype.multiplyByScalar=function(t){return this.x*=t,this.y*=t,this},t.prototype.mulS=function(t){return this.multiplyByScalar(t)},t.prototype.divideByScalar=function(t){return this.x/=t,this.y/=t,this},t.prototype.divS=function(t){return this.divideByScalar(t)},t.prototype.normalise=function(){return this.divideByScalar(this.magnitude())},t.prototype.normalize=function(){return this.normalise()},t.prototype.unit=function(){return this.normalise()},t.prototype.magnitude=function(){var t=this.x,n=this.y;return Math.sqrt(t*t+n*n)},t.prototype.length=function(){return this.magnitude()},t.prototype.lengthSq=function(){var t=this.x,n=this.y;return t*t+n*n},t.prototype.dot=function(t){return t.x*this.x+t.y*this.y},t.prototype.cross=function(t){return this.x*t.y-this.y*t.x},t.prototype.reverse=function(){return this.x=-this.x,this.y=-this.y,this},t.prototype.abs=function(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this},t.prototype.zero=function(){return this.x=this.y=0,this},t.prototype.distance=function(t){var n=this.x-t.x,i=this.y-t.y;return Math.sqrt(n*n+i*i)},t.prototype.rotate=function(t){var n=Math.cos(t),i=Math.sin(t),e=this.x,s=this.y;return this.x=e*n-s*i,this.y=e*i+s*n,this},t.prototype.round=function(t){void 0===t&&(t=2);var n=i[t];return this.x=(.5+this.x*n<<0)/n,this.y=(.5+this.y*n<<0)/n,this},t.prototype.clone=function(){return new this.ctor(this.x,this.y)},t}();n.AbstractVector=e},51:function(t,n,i){var e,s=this&&this.yt||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(n,"jt",{value:!0});var r=function(t){function n(i,e){var s=t.call(this,n)||this;return s.axes=[i,e],s.ctor=n,s}return s(n,t),Object.defineProperty(n.prototype,"x",{get:function(){return this.axes[0]},set:function(t){this.axes[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.axes[1]},set:function(t){this.axes[1]=t},enumerable:!0,configurable:!0}),n}(i(120).AbstractVector);n.ArrayVector=r},725:function(t,n,i){var e,s=this&&this.yt||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(n,"jt",{value:!0});var r=function(t){function n(i,e){var s=t.call(this,n)||this;return s.axes=new Float32Array(2),s.axes[0]=i,s.axes[1]=e,s}return s(n,t),Object.defineProperty(n.prototype,"x",{get:function(){return this.axes[0]},set:function(t){this.axes[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.axes[1]},set:function(t){this.axes[1]=t},enumerable:!0,configurable:!0}),n}(i(120).AbstractVector);n.Float32Vector=r},565:(t,n,i)=>{function e(t){for(var i in t)n.hasOwnProperty(i)||(n[i]=t[i])}Object.defineProperty(n,"jt",{value:!0}),e(i(120)),e(i(51)),e(i(725)),e(i(974))},974:function(t,n,i){var e,s=this&&this.yt||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(n,"jt",{value:!0});var r=function(t){function n(i,e){var s=t.call(this,n)||this;return s._t=i,s.At=e,s}return s(n,t),Object.defineProperty(n.prototype,"x",{get:function(){return this._t},set:function(t){this._t=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.At},set:function(t){this.At=t},enumerable:!0,configurable:!0}),n}(i(120).AbstractVector);n.Vector=r}},n={};function i(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,i),r.exports}i.n=t=>{var n=t&&t.jt?()=>t.default:()=>t;return i.d(n,{a:n}),n},i.d=(t,n)=>{for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n);i(547)})();
