/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/MenuManager/themeSwitch.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applySavedTheme: () => (/* binding */ applySavedTheme),
/* harmony export */   switchTheme: () => (/* binding */ switchTheme)
/* harmony export */ });
function switchTheme() {
    var rootElem = document.documentElement;
    var theme = rootElem.getAttribute('theme');
    var newTheme = (theme === 'light') ? 'dark' : 'light';
    rootElem.setAttribute('theme', newTheme);
    // Save the theme in a cookie
    document.cookie = "theme=".concat(newTheme, "; path=/; max-age=31536000"); // cookie valid for 1 year
}
function getCookie(name) {
    var value = "; ".concat(document.cookie);
    var parts = value.split("; ".concat(name, "="));
    if (parts.length === 2)
        return parts.pop().split(';').shift();
    return null;
}
function applySavedTheme() {
    var savedTheme = getCookie('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('theme', savedTheme);
    }
}
applySavedTheme();
window.switchTheme = switchTheme;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWVfc3dpdGNoLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xPLFNBQVMsV0FBVztJQUN2QixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsSUFBSSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3RELFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXhDLDZCQUE2QjtJQUM3QixRQUFRLENBQUMsTUFBTSxHQUFHLGdCQUFTLFFBQVEsK0JBQTRCLENBQUMsQ0FBQywwQkFBMEI7QUFDaEcsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLElBQVk7SUFDM0IsSUFBTSxLQUFLLEdBQUcsWUFBSyxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7SUFDckMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFLLElBQUksTUFBRyxDQUFDLENBQUM7SUFDeEMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsZUFBZTtJQUMzQixJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRCxDQUFDO0FBQ0wsQ0FBQztBQUNELGVBQWUsRUFBRSxDQUFDO0FBQ2pCLE1BQWMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvTWVudU1hbmFnZXIvdGhlbWVTd2l0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRoZW1lKCkge1xyXG4gICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBsZXQgdGhlbWUgPSByb290RWxlbS5nZXRBdHRyaWJ1dGUoJ3RoZW1lJyk7XHJcbiAgICBsZXQgbmV3VGhlbWUgPSAodGhlbWUgPT09ICdsaWdodCcpID8gJ2RhcmsnIDogJ2xpZ2h0JztcclxuICAgIHJvb3RFbGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCBuZXdUaGVtZSk7XHJcblxyXG4gICAgIC8vIFNhdmUgdGhlIHRoZW1lIGluIGEgY29va2llXHJcbiAgICAgZG9jdW1lbnQuY29va2llID0gYHRoZW1lPSR7bmV3VGhlbWV9OyBwYXRoPS87IG1heC1hZ2U9MzE1MzYwMDBgOyAvLyBjb29raWUgdmFsaWQgZm9yIDEgeWVhclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XHJcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVNhdmVkVGhlbWUoKSB7XHJcbiAgICBjb25zdCBzYXZlZFRoZW1lID0gZ2V0Q29va2llKCd0aGVtZScpO1xyXG4gICAgaWYgKHNhdmVkVGhlbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aGVtZScsIHNhdmVkVGhlbWUpO1xyXG4gICAgfVxyXG59XHJcbmFwcGx5U2F2ZWRUaGVtZSgpO1xyXG4od2luZG93IGFzIGFueSkuc3dpdGNoVGhlbWUgPSBzd2l0Y2hUaGVtZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9