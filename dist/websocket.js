/*! For license information please see websocket.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/MenuManager/login.ts":(e,t,o)=>{o.r(t),o.d(t,{handleReadyState:()=>O,handleRoomAction:()=>g,showErrorAnimation:()=>E,showRoomView:()=>b,updateButton:()=>S,updateRoomList:()=>p});var n=o("./src/WebSocketClient/websocket.ts"),r=document.getElementById("roomCodeInput"),a=document.getElementById("usernameInput"),s=document.getElementById("joinButton"),c=document.getElementById("readyButton"),i=document.getElementById("login-div"),d=document.getElementById("room-div"),l=document.getElementById("room-users-list"),u=document.getElementById("room-title"),m=document.getElementById("player-count"),y=!1;function S(){""==a.value.trim()?s.disabled=!0:s.disabled=!1,5==r.value.trim().length?s.textContent="JOIN ROOM":s.textContent="CREATE ROOM"}function g(){"CREATE ROOM"===s.innerText?(0,n.createRoom)(a.value):(0,n.joinRoom)(r.value.toUpperCase(),a.value)}function O(){y=!y,(0,n.setReadyState)(a.value,r.value,y),y?(c.classList.remove("red-button"),c.classList.add("green-button")):(c.classList.add("red-button"),c.classList.remove("green-button"))}function b(e){var t=JSON.parse(e.toString());i.classList.add("display-none"),d.classList.add("display-flex"),r.value=t.room.code,u.innerHTML="WELCOME TO<br>".concat(t.room.code),p(e)}function p(e){var t=JSON.parse(e.toString()),o=t.room.players;m.innerHTML="".concat(o.length,"/").concat(t.room.maxSize),l.innerHTML="",o.forEach((function(e){var t=document.createElement("li");t.textContent=e.username+(e.isReady?" 🟢":" 🔴"),l.appendChild(t)}))}function E(){s.classList.add("red-button"),s.classList.add("wiggle"),setTimeout((function(){s.classList.remove("red-button"),s.classList.remove("wiggle")}),600)}window.updateButton=S,window.handleRoomAction=g,window.handleReadyState=O},"./src/WebSocketClient/websocket.ts":(e,t,o)=>{o.r(t),o.d(t,{createRoom:()=>a,getReadyState:()=>i,joinRoom:()=>s,setReadyState:()=>c});var n,r=o("./src/MenuManager/login.ts");function a(e){n&&n.readyState===WebSocket.OPEN?n.send(JSON.stringify({type:"CREATE_ROOM",username:e})):console.error("WebSocket connection is not open")}function s(e,t){n&&n.readyState===WebSocket.OPEN?n.send(JSON.stringify({type:"JOIN_ROOM",roomCode:e,username:t})):console.error("WebSocket connection is not open")}function c(e,t,o){n&&n.readyState===WebSocket.OPEN?n.send(JSON.stringify({type:"SET_READY",username:e,roomCode:t,readyState:o})):console.error("WebSocket connection is not open")}function i(e){n&&n.readyState===WebSocket.OPEN?n.send(JSON.stringify({type:"GET_READY",username:e})):console.error("WebSocket connection is not open")}(n=new WebSocket("ws://".concat(window.location.hostname,":8080"))).onopen=function(){console.log("WebSocket connection established")},n.onmessage=function(e){var t=JSON.parse(e.data);switch(console.log("Message from server:",t),t.type){case"JOINED_ROOM":(0,r.showRoomView)(e.data);break;case"ROOM_DOES_NOT_EXIST":(0,r.showErrorAnimation)();break;case"ROOM_DATA":(0,r.updateRoomList)(e.data);break;case"ERROR":alert("Error: ".concat(t.message))}},n.onclose=function(){console.log("WebSocket connection closed")},n.onerror=function(e){console.error("WebSocket error:",e)}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o("./src/WebSocketClient/websocket.ts")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LmpzIiwibWFwcGluZ3MiOiI7aVFBRU1BLEVBQWlCQyxTQUFTQyxlQUFlLGlCQUN6Q0MsRUFBaUJGLFNBQVNDLGVBQWUsaUJBQ3pDRSxFQUFhSCxTQUFTQyxlQUFlLGNBQ3JDRyxFQUFjSixTQUFTQyxlQUFlLGVBQ3RDSSxFQUFVTCxTQUFTQyxlQUFlLGFBQ2xDSyxFQUFTTixTQUFTQyxlQUFlLFlBQ2pDTSxFQUFnQlAsU0FBU0MsZUFBZSxtQkFDeENPLEVBQVlSLFNBQVNDLGVBQWUsY0FDcENRLEVBQWNULFNBQVNDLGVBQWUsZ0JBQ3hDUyxHQUFVLEVBRVAsU0FBU0MsSUFHc0IsSUFBOUJULEVBQWNVLE1BQU1DLE9BQ3BCVixFQUFXVyxVQUFXLEVBRXRCWCxFQUFXVyxVQUFXLEVBR2UsR0FBckNmLEVBQWNhLE1BQU1DLE9BQU9FLE9BQzNCWixFQUFXYSxZQUFjLFlBRXpCYixFQUFXYSxZQUFjLGFBRWpDLENBRU8sU0FBU0MsSUFDaUIsZ0JBQXpCZCxFQUFXZSxXQUNYLElBQUFDLFlBQVdqQixFQUFjVSxRQUd6QixJQUFBUSxVQUFTckIsRUFBY2EsTUFBTVMsY0FBZW5CLEVBQWNVLE1BRWxFLENBRU8sU0FBU1UsSUFDWlosR0FBV0EsR0FDWCxJQUFBYSxlQUFjckIsRUFBY1UsTUFBT2IsRUFBY2EsTUFBT0YsR0FDckRBLEdBQ0NOLEVBQVlvQixVQUFVQyxPQUFPLGNBQzdCckIsRUFBWW9CLFVBQVVFLElBQUksa0JBRzFCdEIsRUFBWW9CLFVBQVVFLElBQUksY0FDMUJ0QixFQUFZb0IsVUFBVUMsT0FBTyxnQkFHckMsQ0FFTyxTQUFTRSxFQUFhQyxHQUV6QixJQUFJQyxFQUFXQyxLQUFLQyxNQUFNSCxFQUFLSSxZQUMvQjNCLEVBQVNtQixVQUFVRSxJQUFJLGdCQUN2QnBCLEVBQVFrQixVQUFVRSxJQUFJLGdCQUN0QjNCLEVBQWNhLE1BQVFpQixFQUFlLEtBQVEsS0FDN0NyQixFQUFVeUIsVUFBYSx3QkFBaUJKLEVBQWUsS0FBUSxNQUMvREssRUFBZU4sRUFDbkIsQ0FFTyxTQUFTTSxFQUFlTixHQUMzQixJQUFJQyxFQUFXQyxLQUFLQyxNQUFNSCxFQUFLSSxZQUMzQkcsRUFBVU4sRUFBZSxLQUFXLFFBQ3hDcEIsRUFBWXdCLFVBQVksVUFBR0UsRUFBUXBCLE9BQU0sWUFBSWMsRUFBZSxLQUFXLFNBQ3ZFdEIsRUFBYzBCLFVBQVksR0FFMUJFLEVBQVFDLFNBQVEsU0FBQ0MsR0FDYixJQUFNQyxFQUFhdEMsU0FBU3VDLGNBQWMsTUFDMUNELEVBQVd0QixZQUFjcUIsRUFBT0csVUFBWUgsRUFBTzNCLFFBQVUsTUFBUSxPQUNyRUgsRUFBY2tDLFlBQVlILEVBQzlCLEdBQ0osQ0FFTyxTQUFTSSxJQUNadkMsRUFBV3FCLFVBQVVFLElBQUksY0FDekJ2QixFQUFXcUIsVUFBVUUsSUFBSSxVQUN6QmlCLFlBQVcsV0FDWHhDLEVBQVdxQixVQUFVQyxPQUFPLGNBQzVCdEIsRUFBV3FCLFVBQVVDLE9BQU8sU0FDNUIsR0FBRyxJQUNQLENBRUNtQixPQUFlakMsYUFBZUEsRUFDOUJpQyxPQUFlM0IsaUJBQW1CQSxFQUNsQzJCLE9BQWV0QixpQkFBbUJBLDhJQ3BGL0J1QixvQ0FzQ0csU0FBUzFCLEVBQVdxQixHQUNuQkssR0FBVUEsRUFBT0MsYUFBZUMsVUFBVUMsS0FDMUNILEVBQU9JLEtBQUtuQixLQUFLb0IsVUFBVSxDQUFFQyxLQUFNLGNBQWVYLFNBQVVBLEtBRTVEWSxRQUFRQyxNQUFNLG1DQUV0QixDQUVPLFNBQVNqQyxFQUFTa0MsRUFBa0JkLEdBQ25DSyxHQUFVQSxFQUFPQyxhQUFlQyxVQUFVQyxLQUMxQ0gsRUFBT0ksS0FBS25CLEtBQUtvQixVQUFVLENBQUVDLEtBQU0sWUFBYUcsU0FBVUEsRUFBVWQsU0FBVUEsS0FFOUVZLFFBQVFDLE1BQU0sbUNBRXRCLENBRU8sU0FBUzlCLEVBQWNpQixFQUFrQmMsRUFBa0JSLEdBQzFERCxHQUFVQSxFQUFPQyxhQUFlQyxVQUFVQyxLQUMxQ0gsRUFBT0ksS0FBS25CLEtBQUtvQixVQUFVLENBQUVDLEtBQU0sWUFBYVgsU0FBVUEsRUFBVWMsU0FBVUEsRUFBVVIsV0FBWUEsS0FFcEdNLFFBQVFDLE1BQU0sbUNBRXRCLENBRU8sU0FBU0UsRUFBY2YsR0FDdEJLLEdBQVVBLEVBQU9DLGFBQWVDLFVBQVVDLEtBQzFDSCxFQUFPSSxLQUFLbkIsS0FBS29CLFVBQVUsQ0FBRUMsS0FBTSxZQUFhWCxTQUFVQSxLQUUxRFksUUFBUUMsTUFBTSxtQ0FFdEIsRUFqRUlSLEVBQVMsSUFBSUUsVUFBVSxlQUFRSCxPQUFPWSxTQUFTQyxTQUFRLFdBRWhEQyxPQUFTLFdBQ1pOLFFBQVFPLElBQUksbUNBQ2hCLEVBRUFkLEVBQU9lLFVBQVksU0FBQ0MsR0FDaEIsSUFBTWpDLEVBQU9FLEtBQUtDLE1BQU04QixFQUFNakMsTUFHOUIsT0FGQXdCLFFBQVFPLElBQUksdUJBQXdCL0IsR0FFNUJBLEVBQUt1QixNQUNULElBQUssZUFDRCxJQUFBeEIsY0FBYWtDLEVBQU1qQyxNQUNuQixNQUNKLElBQUssdUJBQ0QsSUFBQWMsc0JBQ0EsTUFDSixJQUFLLGFBQ0QsSUFBQVIsZ0JBQWUyQixFQUFNakMsTUFDckIsTUFDSixJQUFLLFFBQ0RrQyxNQUFNLGlCQUFVbEMsRUFBS21DLFVBR2pDLEVBRUFsQixFQUFPbUIsUUFBVSxXQUNiWixRQUFRTyxJQUFJLDhCQUNoQixFQUVBZCxFQUFPb0IsUUFBVSxTQUFDWixHQUNkRCxRQUFRQyxNQUFNLG1CQUFvQkEsRUFDdEMsSUNwQ0FhLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDQ3JCQUosRUFBb0JPLEVBQUksQ0FBQ0gsRUFBU0ksS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYUixFQUFvQlUsRUFBRUYsRUFBWUMsS0FBU1QsRUFBb0JVLEVBQUVOLEVBQVNLLElBQzVFRSxPQUFPQyxlQUFlUixFQUFTSyxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsSUFFMUUsRUNORFQsRUFBb0JVLEVBQUksQ0FBQ0ssRUFBS0MsSUFBVUwsT0FBT00sVUFBVUMsZUFBZUMsS0FBS0osRUFBS0MsR0NDbEZoQixFQUFvQm9CLEVBQUtoQixJQUNILG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDWCxPQUFPQyxlQUFlUixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFN0UsTUFBTyxXQUU3RGtFLE9BQU9DLGVBQWVSLEVBQVMsYUFBYyxDQUFFM0QsT0FBTyxHQUFPLEVDRnBDdUQsRUFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL01lbnVNYW5hZ2VyL2xvZ2luLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvV2ViU29ja2V0Q2xpZW50L3dlYnNvY2tldC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm9vbSwgZ2V0UmVhZHlTdGF0ZSwgam9pblJvb20sIHNldFJlYWR5U3RhdGUgfSBmcm9tIFwiLi4vV2ViU29ja2V0Q2xpZW50L3dlYnNvY2tldFwiO1xyXG5cclxuY29uc3Qgcm9vbUNvZGVJbnB1dCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbUNvZGVJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG5jb25zdCB1c2VybmFtZUlucHV0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCk7XHJcbmNvbnN0IHJvb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam9pbkJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCByZWFkeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkeUJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBsb2dpbkRpdj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWRpdicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCByb29tRGl2PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1kaXYnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3Qgcm9vbVVzZXJzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLXVzZXJzLWxpc3QnKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG5jb25zdCByb29tVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS10aXRsZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5jb25zdCBwbGF5ZXJDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItY291bnQnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxubGV0IGlzUmVhZHkgPSBmYWxzZTtcclxuLy8gc3JjL2xvZ2luLnRzXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCdXR0b24oKSB7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZS50cmltKCkgPT0gJycpIHtcclxuICAgICAgICByb29tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb29tQ29kZUlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gNSkge1xyXG4gICAgICAgIHJvb21CdXR0b24udGV4dENvbnRlbnQgPSAnSk9JTiBST09NJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDUkVBVEUgUk9PTSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSb29tQWN0aW9uKCkge1xyXG4gICAgaWYgKHJvb21CdXR0b24uaW5uZXJUZXh0ID09PSAnQ1JFQVRFIFJPT00nKSB7XHJcbiAgICAgICAgY3JlYXRlUm9vbSh1c2VybmFtZUlucHV0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgam9pblJvb20ocm9vbUNvZGVJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpLCB1c2VybmFtZUlucHV0LnZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlYWR5U3RhdGUoKSB7XHJcbiAgICBpc1JlYWR5ID0gIWlzUmVhZHk7XHJcbiAgICBzZXRSZWFkeVN0YXRlKHVzZXJuYW1lSW5wdXQudmFsdWUsIHJvb21Db2RlSW5wdXQudmFsdWUsIGlzUmVhZHkpXHJcbiAgICBpZihpc1JlYWR5KXtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtYnV0dG9uJyk7XHJcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JlZW4tYnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZC1idXR0b24nKTtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbi1idXR0b24nKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Jvb21WaWV3KGRhdGE6IEpTT04pe1xyXG4gICAgXHJcbiAgICBsZXQgcm9vbUluZm8gPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICBsb2dpbkRpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgIHJvb21EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICByb29tQ29kZUlucHV0LnZhbHVlID0gcm9vbUluZm9bJ3Jvb20nXVsnY29kZSddO1xyXG4gICAgcm9vbVRpdGxlLmlubmVySFRNTCAgPSBgV0VMQ09NRSBUTzxicj4ke3Jvb21JbmZvWydyb29tJ11bJ2NvZGUnXX1gO1xyXG4gICAgdXBkYXRlUm9vbUxpc3QoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb29tTGlzdChkYXRhOiBKU09OKXtcclxuICAgIGxldCByb29tSW5mbyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKTtcclxuICAgIGxldCBwbGF5ZXJzID0gcm9vbUluZm9bJ3Jvb20nXVsncGxheWVycyddO1xyXG4gICAgcGxheWVyQ291bnQuaW5uZXJIVE1MID0gYCR7cGxheWVycy5sZW5ndGh9LyR7cm9vbUluZm9bJ3Jvb20nXVsnbWF4U2l6ZSddfWA7XHJcbiAgICByb29tVXNlcnNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHBsYXllcnMuZm9yRWFjaCgocGxheWVyOiB7IHVzZXJuYW1lOiBzdHJpbmcgfCBudW1iZXI7IGlzUmVhZHk6IGJvb2xlYW47IH0pID0+IHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBwbGF5ZXJJdGVtLnRleHRDb250ZW50ID0gcGxheWVyLnVzZXJuYW1lICsgKHBsYXllci5pc1JlYWR5ID8gJyDwn5+iJyA6ICcg8J+UtCcpO1xyXG4gICAgICAgIHJvb21Vc2Vyc0xpc3QuYXBwZW5kQ2hpbGQocGxheWVySXRlbSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFcnJvckFuaW1hdGlvbigpIHtcclxuICAgIHJvb21CdXR0b24uY2xhc3NMaXN0LmFkZCgncmVkLWJ1dHRvbicpO1xyXG4gICAgcm9vbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd3aWdnbGUnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcm9vbUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtYnV0dG9uJyk7XHJcbiAgICByb29tQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZ2dsZScpO1xyXG4gICAgfSwgNjAwKVxyXG59XHJcblxyXG4od2luZG93IGFzIGFueSkudXBkYXRlQnV0dG9uID0gdXBkYXRlQnV0dG9uO1xyXG4od2luZG93IGFzIGFueSkuaGFuZGxlUm9vbUFjdGlvbiA9IGhhbmRsZVJvb21BY3Rpb247XHJcbih3aW5kb3cgYXMgYW55KS5oYW5kbGVSZWFkeVN0YXRlID0gaGFuZGxlUmVhZHlTdGF0ZTsiLCJpbXBvcnQgeyBzaG93RXJyb3JBbmltYXRpb24sIHNob3dSb29tVmlldywgdXBkYXRlUm9vbUxpc3QgfSBmcm9tIFwiLi4vTWVudU1hbmFnZXIvbG9naW5cIjtcclxuXHJcbmxldCBzb2NrZXQ6IFdlYlNvY2tldDtcclxuXHJcbmZ1bmN0aW9uIGluaXRXZWJTb2NrZXQoKSB7XHJcbiAgICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfTo4MDgwYCk7XHJcbiAgICBcclxuICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBjb25uZWN0aW9uIGVzdGFibGlzaGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWVzc2FnZSBmcm9tIHNlcnZlcjonLCBkYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdKT0lORURfUk9PTSc6XHJcbiAgICAgICAgICAgICAgICBzaG93Um9vbVZpZXcoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUk9PTV9ET0VTX05PVF9FWElTVCc6XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3JBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdST09NX0RBVEEnOlxyXG4gICAgICAgICAgICAgICAgdXBkYXRlUm9vbUxpc3QoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnRVJST1InOlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoYEVycm9yOiAke2RhdGEubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBjbG9zZWQnKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNvY2tldC5vbmVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGVycm9yOicsIGVycm9yKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb29tKHVzZXJuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnQ1JFQVRFX1JPT00nLCB1c2VybmFtZTogdXNlcm5hbWUgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gam9pblJvb20ocm9vbUNvZGU6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdKT0lOX1JPT00nLCByb29tQ29kZTogcm9vbUNvZGUsIHVzZXJuYW1lOiB1c2VybmFtZSB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWFkeVN0YXRlKHVzZXJuYW1lOiBzdHJpbmcsIHJvb21Db2RlOiBzdHJpbmcsIHJlYWR5U3RhdGU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnU0VUX1JFQURZJywgdXNlcm5hbWU6IHVzZXJuYW1lLCByb29tQ29kZTogcm9vbUNvZGUsIHJlYWR5U3RhdGU6IHJlYWR5U3RhdGV9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFkeVN0YXRlKHVzZXJuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnR0VUX1JFQURZJywgdXNlcm5hbWU6IHVzZXJuYW1lIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmluaXRXZWJTb2NrZXQoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9XZWJTb2NrZXRDbGllbnQvd2Vic29ja2V0LnRzXCIpO1xuIl0sIm5hbWVzIjpbInJvb21Db2RlSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlcm5hbWVJbnB1dCIsInJvb21CdXR0b24iLCJyZWFkeUJ1dHRvbiIsImxvZ2luRGl2Iiwicm9vbURpdiIsInJvb21Vc2Vyc0xpc3QiLCJyb29tVGl0bGUiLCJwbGF5ZXJDb3VudCIsImlzUmVhZHkiLCJ1cGRhdGVCdXR0b24iLCJ2YWx1ZSIsInRyaW0iLCJkaXNhYmxlZCIsImxlbmd0aCIsInRleHRDb250ZW50IiwiaGFuZGxlUm9vbUFjdGlvbiIsImlubmVyVGV4dCIsImNyZWF0ZVJvb20iLCJqb2luUm9vbSIsInRvVXBwZXJDYXNlIiwiaGFuZGxlUmVhZHlTdGF0ZSIsInNldFJlYWR5U3RhdGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzaG93Um9vbVZpZXciLCJkYXRhIiwicm9vbUluZm8iLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsImlubmVySFRNTCIsInVwZGF0ZVJvb21MaXN0IiwicGxheWVycyIsImZvckVhY2giLCJwbGF5ZXIiLCJwbGF5ZXJJdGVtIiwiY3JlYXRlRWxlbWVudCIsInVzZXJuYW1lIiwiYXBwZW5kQ2hpbGQiLCJzaG93RXJyb3JBbmltYXRpb24iLCJzZXRUaW1lb3V0Iiwid2luZG93Iiwic29ja2V0IiwicmVhZHlTdGF0ZSIsIldlYlNvY2tldCIsIk9QRU4iLCJzZW5kIiwic3RyaW5naWZ5IiwidHlwZSIsImNvbnNvbGUiLCJlcnJvciIsInJvb21Db2RlIiwiZ2V0UmVhZHlTdGF0ZSIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJvbm9wZW4iLCJsb2ciLCJvbm1lc3NhZ2UiLCJldmVudCIsImFsZXJ0IiwibWVzc2FnZSIsIm9uY2xvc2UiLCJvbmVycm9yIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIl0sInNvdXJjZVJvb3QiOiIifQ==