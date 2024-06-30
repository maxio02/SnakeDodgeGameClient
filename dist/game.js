/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ArcSegment.ts":
/*!***************************!*\
  !*** ./src/ArcSegment.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./src/Drawer.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Segment */ "./src/Segment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ArcSegment = /** @class */ (function (_super) {
    __extends(ArcSegment, _super);
    function ArcSegment(center, radius, startAngle, endAngle, counterClockwise, isCollidable) {
        var _this = _super.call(this) || this;
        _this.center = center;
        _this.radius = radius;
        _this.startAngle = startAngle;
        _this.endAngle = endAngle;
        _this._counterClockwise = counterClockwise;
        _this.isCollidable = isCollidable;
        return _this;
    }
    ArcSegment.prototype.draw = function (context, color) {
        var scaleX = context.canvas.width / 2000;
        var scaleY = context.canvas.height / 2000;
        context.lineCap = "round";
        context.strokeStyle = color;
        if (this.isCollidable === true) {
            context.beginPath();
            context.arc(this.center.x * scaleX, this.center.y * scaleY, this.radius * Math.min(scaleX, scaleY), this.startAngle, this.endAngle, this._counterClockwise);
            context.stroke();
            context.closePath();
        }
    };
    ArcSegment.prototype.drawDebug = function (context, color) {
        // context.strokeStyle = '#ff00ffff'
        var tangent_angle = this._counterClockwise ? -Math.PI : Math.PI;
        tangent_angle += this.endAngle;
        context.lineCap = "round";
        (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawDot)(this.center.x, this.center.y, 5, '#000000');
        (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawArrow)(context, new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.endPoint.x, this.endPoint.y), new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.endPoint.x + this.radius * Math.cos(tangent_angle), this.endPoint.y + this.radius * Math.sin(tangent_angle)));
        (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawArc)(this.center.x, this.center.y, this.radius, 0, 0, false);
    };
    Object.defineProperty(ArcSegment.prototype, "endPoint", {
        get: function () {
            return new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.center.x + this.radius * Math.cos(this.endAngle), this.center.y + this.radius * Math.sin(this.endAngle));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArcSegment.prototype, "penpendicularEndAngle", {
        get: function () {
            return this.isCounterClockwise ? this.endAngle - Math.PI / 2 : this.endAngle + Math.PI / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArcSegment.prototype, "penpendicularStartAngle", {
        get: function () {
            return this.isCounterClockwise ? this.startAngle - Math.PI / 2 : this.startAngle + Math.PI / 2;
        },
        enumerable: false,
        configurable: true
    });
    ArcSegment.prototype.isCounterClockwise = function () {
        return this._counterClockwise;
    };
    ArcSegment.prototype.getContinuingSegment = function (transform) {
        return new ArcSegment(this.center.clone().add(transform), this.radius, this.endAngle, this.endAngle, this._counterClockwise, this.isCollidable);
    };
    return ArcSegment;
}(_Segment__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArcSegment);


/***/ }),

/***/ "./src/Drawer.ts":
/*!***********************!*\
  !*** ./src/Drawer.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawArc: () => (/* binding */ drawArc),
/* harmony export */   drawArrow: () => (/* binding */ drawArrow),
/* harmony export */   drawDot: () => (/* binding */ drawDot),
/* harmony export */   drawGrid: () => (/* binding */ drawGrid)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");


function drawGrid() {
    var scaleX = _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.canvas.width / 2000;
    var scaleY = _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.canvas.height / 2000;
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.clearRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.width, _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.height);
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.lineWidth = 2;
    for (var x = _index__WEBPACK_IMPORTED_MODULE_1__.gridSize * scaleX; x < _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.width; x += _index__WEBPACK_IMPORTED_MODULE_1__.gridSize * scaleX) {
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.beginPath();
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.moveTo(x, 0);
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.lineTo(x, _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.height);
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.stroke();
    }
    for (var y = _index__WEBPACK_IMPORTED_MODULE_1__.gridSize * scaleY; y < _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.height; y += _index__WEBPACK_IMPORTED_MODULE_1__.gridSize * scaleY) {
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.beginPath();
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.moveTo(0, y);
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.lineTo(_index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.width, y);
        _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.stroke();
    }
}
function drawDot(dotX, dotY, dotSize, color) {
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.beginPath();
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.arc(dotX, dotY, dotSize, 0, 2 * Math.PI, false);
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.fillStyle = color;
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.fill();
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.closePath();
}
function drawArc(dotX, dotY, radius, startAngle, endAngle, counterClockwise) {
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.lineCap = "round";
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.strokeStyle = "#3466aa";
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.beginPath();
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.arc(dotX, dotY, radius, 0, 2 * Math.PI, counterClockwise);
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.lineWidth = 5;
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.stroke();
    _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.closePath();
}
function drawArrow(ctx, from, to) {
    if (from.x != to.x && from.y != to.y) {
        var angle = Math.atan2(to.y - from.y, to.x - from.x);
        var width = 10;
        var headLength = 10;
        var new_to = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(to.x, to.y);
        // This makes it so the end of the arrow head is located at tox, toy, don't ask where 1.15 comes from
        new_to.x -= Math.cos(angle) * ((width * 1.15));
        new_to.y -= Math.sin(angle) * ((width * 1.15));
        //starting path of the arrow from the start square to the end square and drawing the stroke
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(new_to.x, new_to.y);
        ctx.strokeStyle = "#bbbbbb";
        ctx.lineWidth = width;
        ctx.stroke();
        //starting a new path from the head of the arrow to one of the sides of the point
        ctx.beginPath();
        ctx.moveTo(new_to.x, new_to.y);
        ctx.lineTo(new_to.x - headLength * Math.cos(angle - Math.PI / 7), new_to.y - headLength * Math.sin(angle - Math.PI / 7));
        //path from the side point of the arrow, to the other side point
        ctx.lineTo(new_to.x - headLength * Math.cos(angle + Math.PI / 7), new_to.y - headLength * Math.sin(angle + Math.PI / 7));
        //path from the side point back to the tip of the arrow, and then again to the opposite side point
        ctx.lineTo(new_to.x, new_to.y);
        ctx.lineTo(new_to.x - headLength * Math.cos(angle - Math.PI / 7), new_to.y - headLength * Math.sin(angle - Math.PI / 7));
        //draws the paths created above
        ctx.strokeStyle = "#bbbbbb";
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.fillStyle = "#bbbbbb";
        ctx.fill();
        ctx.closePath();
    }
}


/***/ }),

/***/ "./src/InputManager.ts":
/*!*****************************!*\
  !*** ./src/InputManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebSocketClient/websocket */ "./src/WebSocketClient/websocket.ts");

var InputManager = /** @class */ (function () {
    function InputManager(snake, leftKeys, rightKeys) {
        this._keyMap = {};
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
        this._snake = snake;
        this._leftKeys = leftKeys.map(function (key) { return key.toUpperCase(); });
        this._rightKeys = rightKeys.map(function (key) { return key.toUpperCase(); });
    }
    InputManager.prototype.onKeyDown = function (event) {
        var _this = this;
        //if snake is dead, ignore the key presses
        if (!this._snake.isAlive)
            return;
        var key = event.key.toUpperCase();
        //ignore keys not assigned to self, this would result in the keymap having unnecessary keys and triggering the onkeyUp events
        if (!this._leftKeys.includes(key) && !this._rightKeys.includes(key)) {
            return;
        }
        //switch off the current down key if the other direction is pressed
        if (this._leftKeys.some(function (leftKey) { return _this._keyMap[leftKey]; }) && this._rightKeys.includes(key)) {
            this._leftKeys.forEach(function (leftKey) { return _this._keyMap[leftKey] = false; });
        }
        else if (this._rightKeys.some(function (rightKey) { return _this._keyMap[rightKey]; }) && this._leftKeys.includes(key)) {
            this._rightKeys.forEach(function (rightKey) { return _this._keyMap[rightKey] = false; });
        }
        //return if the key is alraedy in the map, prevents autoclicking
        else if (this._keyMap[key]) {
            return;
        }
        this._keyMap[key] = true;
        (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_0__.sendKeyEventToServer)(this._rightKeys.includes(key) ? 1 /* Dir.RIGHT */ : 0 /* Dir.LEFT */, true);
    };
    InputManager.prototype.onKeyUp = function (event) {
        //if snake is dead, ignore the key presses
        if (!this._snake.isAlive)
            return;
        var key = event.key.toUpperCase();
        //check if the key is in the keymap, if not just ignore it
        if (!this._keyMap[key]) {
            return;
        }
        this._keyMap[key] = false;
        (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_0__.sendKeyEventToServer)(this._rightKeys.includes(key) ? 1 /* Dir.RIGHT */ : 0 /* Dir.LEFT */, false);
    };
    InputManager.prototype.dispose = function () {
        window.removeEventListener('keydown', this.onKeyDown.bind(this));
        window.removeEventListener('keyup', this.onKeyUp.bind(this));
    };
    return InputManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputManager);


/***/ }),

/***/ "./src/LineSegment.ts":
/*!****************************!*\
  !*** ./src/LineSegment.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Segment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Segment */ "./src/Segment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LineSegment = /** @class */ (function (_super) {
    __extends(LineSegment, _super);
    function LineSegment(start, end, isCollidable, angle) {
        var _this = _super.call(this) || this;
        _this.isCollidable = true;
        _this.startPoint = start;
        _this.endPoint = end;
        _this.isCollidable = isCollidable;
        _this.endAngle = angle;
        return _this;
    }
    LineSegment.prototype.draw = function (context, color) {
        var scaleX = context.canvas.width / 2000;
        var scaleY = context.canvas.height / 2000;
        // context.strokeStyle = '#ff00ffff'
        context.strokeStyle = color;
        context.lineCap = "round";
        if (this.isCollidable === true) {
            context.beginPath();
            context.moveTo(this.startPoint.x * scaleX, this.startPoint.y * scaleY);
            context.lineTo(this.endPoint.x * scaleX, this.endPoint.y * scaleY);
            context.stroke();
            context.closePath();
        }
    };
    Object.defineProperty(LineSegment.prototype, "length", {
        get: function () {
            return Math.sqrt(Math.pow((this.startPoint.x - this.endPoint.x), 2) + Math.pow((this.startPoint.y - this.endPoint.y), 2));
        },
        enumerable: false,
        configurable: true
    });
    LineSegment.prototype.getContinuingSegment = function (transform) {
        var transformedEndpoint = this.endPoint.clone().add(transform);
        return new LineSegment(transformedEndpoint, transformedEndpoint, this.isCollidable, this.endAngle);
    };
    return LineSegment;
}(_Segment__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineSegment);


/***/ }),

/***/ "./src/MenuManager/login.ts":
/*!**********************************!*\
  !*** ./src/MenuManager/login.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentPlayer: () => (/* binding */ currentPlayer),
/* harmony export */   currentRoom: () => (/* binding */ currentRoom),
/* harmony export */   handleReadyState: () => (/* binding */ handleReadyState),
/* harmony export */   handleRoomAction: () => (/* binding */ handleRoomAction),
/* harmony export */   showErrorAnimation: () => (/* binding */ showErrorAnimation),
/* harmony export */   showRoomView: () => (/* binding */ showRoomView),
/* harmony export */   switchGameView: () => (/* binding */ switchGameView),
/* harmony export */   updateButton: () => (/* binding */ updateButton),
/* harmony export */   updateColorPicker: () => (/* binding */ updateColorPicker),
/* harmony export */   updatePlayerColor: () => (/* binding */ updatePlayerColor),
/* harmony export */   updateRoomList: () => (/* binding */ updateRoomList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Models_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Player */ "./src/Models/Player.ts");
/* harmony import */ var _Models_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Room */ "./src/Models/Room.ts");
/* harmony import */ var _WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WebSocketClient/websocket */ "./src/WebSocketClient/websocket.ts");




var currentRoom = null;
var currentPlayer = null;
var roomCodeInput = document.getElementById('roomCodeInput');
var usernameInput = document.getElementById('usernameInput');
var roomButton = document.getElementById('joinButton');
var readyButton = document.getElementById('readyButton');
var loginDiv = document.getElementById('login-div');
var roomDiv = document.getElementById('room-div');
var gameDiv = document.getElementById('game-canvas-container');
var endgameDiv = document.getElementById('endgame-div');
var colorPicker = document.getElementById('color-picker');
var roomUsersList = document.getElementById('room-users-list');
var roomCodeSpan = document.getElementById('room-code');
var playerCount = document.getElementById('player-count');
var colorPickerDiv = document.getElementById('color-picker-container');
var startProgressBar = document.getElementById('start-progress-bar');
var lastWinnerSpan = document.getElementById('last-winner');
// src/login.ts
function updateButton() {
    if (usernameInput.value.trim() === '') {
        roomButton.disabled = true;
    }
    else {
        roomButton.disabled = false;
    }
    if (roomCodeInput.value.trim().length === 5) {
        roomButton.textContent = 'JOIN ROOM';
    }
    else {
        roomButton.textContent = 'CREATE ROOM';
    }
}
function handleRoomAction() {
    var username = usernameInput.value;
    if (!username)
        return;
    currentPlayer = new _Models_Player__WEBPACK_IMPORTED_MODULE_1__.Player(username);
    if (roomButton.innerText === 'CREATE ROOM') {
        (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_3__.createRoom)(usernameInput.value);
    }
    else {
        (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_3__.joinRoom)(roomCodeInput.value.toUpperCase(), usernameInput.value);
    }
}
function handleReadyState() {
    currentPlayer.isReady = !currentPlayer.isReady;
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_3__.setPlayerData)(currentPlayer, currentRoom.code);
    updateReadyButton(currentPlayer.isReady);
}
function updateReadyButton(isReady) {
    if (isReady) {
        readyButton.classList.remove('red-button');
        readyButton.classList.add('green-button');
    }
    else {
        readyButton.classList.add('red-button');
        readyButton.classList.remove('green-button');
    }
}
function showRoomView(data) {
    //set the client Model of the room to the servers response
    var roomInfo = JSON.parse(data.toString())['room'];
    var players = {};
    Object.keys(roomInfo.players).forEach(function (username) {
        var playerData = roomInfo.players[username];
        players[username] = new _Models_Player__WEBPACK_IMPORTED_MODULE_1__.Player(username, playerData.isReady, playerData.color);
    });
    currentRoom = new _Models_Room__WEBPACK_IMPORTED_MODULE_2__.Room(roomInfo.code, new _Models_Player__WEBPACK_IMPORTED_MODULE_1__.Player(roomInfo.host.username, roomInfo.host.isReady, roomInfo.host.color), players, roomInfo.maxSize);
    //show startGameButton 
    if (currentPlayer.username === currentRoom.host.username) {
        document.getElementById('startButton').classList.remove('display-none');
    }
    //set a random color for a player
    colorPickerDiv.style.backgroundColor = currentPlayer.color;
    colorPicker.value = currentPlayer.color;
    var colorPickerLabel = document.getElementById('color-label');
    colorPickerLabel.style.color = pickTextColorBasedOnBgColorAdvanced(colorPicker.value, '#FFFFFF', '#000000');
    //show the new element
    loginDiv.classList.add('display-none');
    roomDiv.classList.add('display-flex');
    roomCodeInput.value = currentRoom.code;
    roomCodeSpan.innerHTML = currentRoom.code;
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_3__.setPlayerData)(currentPlayer, currentRoom.code);
    updateRoomList(data);
}
function updateRoomList(data) {
    var roomInfo = JSON.parse(data.toString())['room'];
    // updating the current room players and host
    Object.keys(roomInfo.players).forEach(function (username) {
        if (currentRoom.players[username] == undefined) {
            currentRoom.addPlayer(new _Models_Player__WEBPACK_IMPORTED_MODULE_1__.Player(username, false, roomInfo.players[username].color));
        }
        else {
            currentRoom.players[username].color = roomInfo.players[username].color;
            currentRoom.players[username].isReady = roomInfo.players[username].isReady;
        }
    });
    // Remove players that are no longer in the room
    Object.keys(currentRoom.players).forEach(function (username) {
        if (!roomInfo.players.hasOwnProperty(username)) {
            currentRoom.removePlayer(username);
        }
    });
    currentRoom.host = new _Models_Player__WEBPACK_IMPORTED_MODULE_1__.Player(roomInfo.host.username, roomInfo.host.isReady, roomInfo.host.color);
    currentRoom.maxSize = roomInfo.maxSize;
    playerCount.innerHTML = "".concat(Object.keys(currentRoom.players).length, "/").concat(currentRoom.maxSize);
    roomUsersList.innerHTML = '';
    Object.values(currentRoom.players).forEach(function (player) {
        var playerItem = document.createElement('li');
        playerItem.textContent = player.username + '';
        if (player.username === currentRoom.host.username) {
            playerItem.insertAdjacentHTML('afterbegin', "<i class=\"fa-solid fa-crown\" style=\"color: ".concat(player.color, ";\"></i>"));
        }
        else {
            playerItem.insertAdjacentHTML('afterbegin', "<i class=\"fa-solid fa-circle\" style=\"color: ".concat(player.color, "; margin-left: 4px\"></i>"));
        }
        if (player.isReady) {
            playerItem.insertAdjacentHTML('beforeend', ' <i class="fa-solid fa-circle" style="color: #37cb48;"></i>');
        }
        else {
            playerItem.insertAdjacentHTML('beforeend', ' <i class="fa-solid fa-circle" style="color: #cb3737;"></i>');
        }
        roomUsersList.appendChild(playerItem);
    });
    //show startGameButton 
    if (currentPlayer.username === currentRoom.host.username) {
        document.getElementById('startButton').classList.remove('display-none');
    }
    updateStartButtonProgress(Object.values(currentRoom.players).filter(function (p) { return p.isReady; }).length, currentRoom.maxSize);
}
function updateStartButtonProgress(readyPlayerCount, maxPlayerCount) {
    if (maxPlayerCount === 0) {
        return;
    }
    startProgressBar.style.width = Math.floor(readyPlayerCount / maxPlayerCount * 100) + '%';
}
function showErrorAnimation(reason) {
    console.log(reason);
    roomButton.classList.add('red-button');
    roomButton.classList.add('wiggle');
    setTimeout(function () {
        roomButton.classList.remove('red-button');
        roomButton.classList.remove('wiggle');
    }, 600);
}
function updateColorPicker() {
    colorPickerDiv.style.backgroundColor = colorPicker.value;
}
function updatePlayerColor() {
    currentPlayer.color = colorPicker.value;
    var colorPickerLabel = document.getElementById('color-label');
    colorPickerLabel.style.color = pickTextColorBasedOnBgColorAdvanced(colorPicker.value, '#FFFFFF', '#000000');
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_3__.setPlayerData)(currentPlayer, currentRoom.code);
}
function pickTextColorBasedOnBgColorAdvanced(bgColor, lightColor, darkColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map(function (col) {
        if (col <= 0.03928) {
            return col / 12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.4) ? darkColor : lightColor;
}
function startGame() {
    //verify that the player sending the start request is the host
    if (currentPlayer.username != currentRoom.host.username) {
        return;
    }
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_3__.sendStartCommand)(currentRoom.code);
}
function goBackToLobby() {
    switchGameView({ type: 'GAME_STATE', state: 1 /* GameState.IN_LOBBY */ });
    currentRoom.resetRoomForNewGame();
    currentPlayer.snake = null;
    currentPlayer.isReady = false;
    updateReadyButton(currentPlayer.isReady);
}
function switchGameView(data) {
    switch (data.state) {
        case 0:
            loginDiv.classList.add('display-none');
            roomDiv.classList.add('display-none');
            roomDiv.classList.remove('display-flex');
            gameDiv.classList.remove('display-none');
            gameDiv.classList.add('display-flex');
            //update the game canvas to fit the screen
            (0,___WEBPACK_IMPORTED_MODULE_0__.updateCanvasSize)();
            break;
        case 1:
            loginDiv.classList.add('display-none');
            loginDiv.classList.remove('display-flex');
            roomDiv.classList.add('display-flex');
            endgameDiv.classList.add('display-none');
            endgameDiv.classList.remove('display-flex');
            break;
        case 2:
            lastWinnerSpan.innerHTML = "".concat(currentRoom.lastWinner.username);
            gameDiv.classList.add('display-none');
            gameDiv.classList.remove('display-flex');
            endgameDiv.classList.add('display-flex');
            break;
    }
}
window.onload = function () {
    updateButton();
};
window.updateButton = updateButton;
window.handleRoomAction = handleRoomAction;
window.handleReadyState = handleReadyState;
window.updateColorPicker = updateColorPicker;
window.updatePlayerColor = updatePlayerColor;
window.startGame = startGame;
window.goBackToLobby = goBackToLobby;


/***/ }),

/***/ "./src/Models/Player.ts":
/*!******************************!*\
  !*** ./src/Models/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
var Player = /** @class */ (function () {
    function Player(username, isReady, color) {
        if (isReady === void 0) { isReady = false; }
        this._username = username;
        this.isReady = isReady;
        this.color = color || "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
        this.snake = null;
    }
    Player.prototype.toJSON = function () {
        return {
            username: this.username,
            isReady: this.isReady,
            color: this.color
        };
    };
    Object.defineProperty(Player.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.reset = function () {
        // this.isReady = false;
        this.snake = null;
    };
    return Player;
}());



/***/ }),

/***/ "./src/Models/Room.ts":
/*!****************************!*\
  !*** ./src/Models/Room.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Room: () => (/* binding */ Room)
/* harmony export */ });
var Room = /** @class */ (function () {
    function Room(code, host, players, maxSize) {
        if (maxSize === void 0) { maxSize = 5; }
        this._players = {};
        this._code = code;
        this._host = host;
        this._maxSize = maxSize;
        if (players) {
            this._players = players;
        }
        else {
            this.addPlayer(host);
        }
    }
    Room.prototype.addPlayer = function (player) {
        if (Object.keys(this._players).length >= this._maxSize) {
            return false;
        }
        this._players[player.username] = player;
        return true;
    };
    Room.prototype.removePlayer = function (username) {
        delete this._players[username];
    };
    Room.prototype.resetRoomForNewGame = function () {
        //TODO fix this game state bullshit
        this._gameState = 1 /* GameState.IN_LOBBY */;
        //also reset all the players
        Object.values(this._players).forEach(function (player) {
            player.reset();
        });
    };
    Object.defineProperty(Room.prototype, "host", {
        get: function () {
            return this._host;
        },
        set: function (newHost) {
            if (Object.keys(this._players).some(function (username) { return username === newHost.username; })) {
                this._host = newHost;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "maxSize", {
        get: function () {
            return this._maxSize;
        },
        set: function (newMaxSize) {
            if (newMaxSize > 0) {
                this._maxSize = newMaxSize;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "lastWinner", {
        get: function () {
            return this._lastWinner;
        },
        set: function (newLastWinner) {
            if (Object.keys(this._players).some(function (username) { return username === newLastWinner.username; })) {
                this._lastWinner = newLastWinner;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Room;
}());



/***/ }),

/***/ "./src/ParticleSystem/CircularEmitter.ts":
/*!***********************************************!*\
  !*** ./src/ParticleSystem/CircularEmitter.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ "./src/ParticleSystem/Particle.ts");
/* harmony import */ var _ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleSystemUtils */ "./src/ParticleSystem/ParticleSystemUtils.ts");
/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Emitter */ "./src/ParticleSystem/Emitter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var CircularEmitter = /** @class */ (function (_super) {
    __extends(CircularEmitter, _super);
    function CircularEmitter(emitterRadius, position, canvasCtx, emitterOptions) {
        var _this = _super.call(this, position, canvasCtx, emitterOptions) || this;
        _this._emitterRadius = emitterRadius;
        return _this;
    }
    CircularEmitter.prototype.tick = function (dt) {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0)
            return;
        this._remainingEmitTimeMillis -= dt;
        //emit new particles if the emitter is "alive"
        if (this._ticks % this._emitInterval === 0 && this._remainingEmitTimeMillis > 0) {
            var scaleY = this._canvasCtx.canvas.height / 2000;
            for (var i = 0; i < this._emitAmountPerTick; i++) {
                this._aliveParticles.push(new _Particle__WEBPACK_IMPORTED_MODULE_0__["default"](this.position.clone().add((0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_1__.getPositionInCircle)(this._emitterRadius, this._spawnParticlesOnEdge)), (0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_1__.getBiasedRandomDirection)(this.emitDirection, this._spreadAngle), this._particleSize * scaleY, this._speed, this._particleShape, __assign({}, (0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_1__.hexToRgbA)(this._color)), this._canvasCtx, this._particleMaxAge, this._doFadeColor, this._doFadeSize, this._fadeDirection));
            }
        }
        //move all the particles forward in time
        this._aliveParticles.forEach(function (particle) {
            particle.tick(dt);
        });
        //remove particles that have reached the end of their lifespan
        this._aliveParticles = this._aliveParticles.filter(function (particle) { return particle.age > 0; });
        this._ticks++;
    };
    CircularEmitter.prototype.draw = function () {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0)
            return;
        if (this._drawEmitterZone === true) {
            var color = (0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_1__.hexToRgbA)(this._color);
            var scaleX = this._canvasCtx.canvas.width / 2000;
            var scaleY = this._canvasCtx.canvas.height / 2000;
            this._canvasCtx.moveTo(this.position.x * scaleX, this.position.y * scaleY);
            this._canvasCtx.fillStyle = "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ", ").concat(Math.min(0.2, ((this._remainingEmitTimeMillis + this._particleMaxAge) / this._particleMaxAge / 5)), ")");
            this._canvasCtx.beginPath();
            this._canvasCtx.arc(this.position.x * scaleX, this.position.y * scaleY, this._emitterRadius, 0, 2 * Math.PI);
            this._canvasCtx.fill();
            this._canvasCtx.closePath();
        }
        this._aliveParticles.forEach(function (particle) {
            particle.draw();
        });
    };
    Object.defineProperty(CircularEmitter.prototype, "emitTime", {
        set: function (newEmitTime) {
            this._remainingEmitTimeMillis = newEmitTime;
        },
        enumerable: false,
        configurable: true
    });
    return CircularEmitter;
}(_Emitter__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircularEmitter);


/***/ }),

/***/ "./src/ParticleSystem/Emitter.ts":
/*!***************************************!*\
  !*** ./src/ParticleSystem/Emitter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);

var Emitter = /** @class */ (function () {
    function Emitter(position, canvasCtx, _a) {
        var _b = _a.emitInterval, emitInterval = _b === void 0 ? 2 : _b, _c = _a.emitAmountPerTick, emitAmountPerTick = _c === void 0 ? 5 : _c, _d = _a.particleSize, particleSize = _d === void 0 ? 10 : _d, _e = _a.speed, speed = _e === void 0 ? 2 : _e, _f = _a.particleShape, particleShape = _f === void 0 ? 'circle' : _f, _g = _a.color, color = _g === void 0 ? '#ffffffff' : _g, _h = _a.doFadeColor, doFadeColor = _h === void 0 ? true : _h, _j = _a.doFadeSize, doFadeSize = _j === void 0 ? true : _j, _k = _a.fadeDirection, fadeDirection = _k === void 0 ? 'normal' : _k, _l = _a.particleAge, particleAge = _l === void 0 ? 50 : _l, _m = _a.emitTimeMillis, emitTimeMillis = _m === void 0 ? 0 : _m, _o = _a.drawEmitterZone, drawEmitterZone = _o === void 0 ? false : _o, _p = _a.emitDirection, emitDirection = _p === void 0 ? new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0) : _p, _q = _a.spreadAngle, spreadAngle = _q === void 0 ? Math.PI * 2 : _q, _r = _a.spawnParticlesOnEdge, spawnParticlesOnEdge = _r === void 0 ? false : _r;
        this._aliveParticles = [];
        this._ticks = 0;
        this.position = position;
        this._canvasCtx = canvasCtx;
        this._emitInterval = emitInterval;
        this._emitAmountPerTick = emitAmountPerTick;
        this._particleSize = particleSize;
        this._speed = speed;
        this._particleShape = particleShape;
        this._color = color;
        this._doFadeColor = doFadeColor;
        this._doFadeSize = doFadeSize;
        this._fadeDirection = fadeDirection;
        this._particleMaxAge = particleAge;
        this._spreadAngle = spreadAngle;
        this._remainingEmitTimeMillis = emitTimeMillis;
        this.emitDirection = emitDirection;
        this._drawEmitterZone = drawEmitterZone;
        this._spawnParticlesOnEdge = spawnParticlesOnEdge;
    }
    Object.defineProperty(Emitter.prototype, "emitTime", {
        set: function (newEmitTime) {
            this._remainingEmitTimeMillis = newEmitTime;
        },
        enumerable: false,
        configurable: true
    });
    return Emitter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emitter);


/***/ }),

/***/ "./src/ParticleSystem/Particle.ts":
/*!****************************************!*\
  !*** ./src/ParticleSystem/Particle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleSystemUtils */ "./src/ParticleSystem/ParticleSystemUtils.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Particle = /** @class */ (function () {
    function Particle(position, velocity, size, speed, shape, color, canvasCtx, age, fadeColor, fadeSize, fadeDirection) {
        if (shape === void 0) { shape = 'circle'; }
        this._position = position;
        this._velocity = velocity;
        this._age = age;
        this._colorFadeAmount = color.a / this._age;
        this._sizeFadeAmount = size / this._age;
        if (fadeDirection === 'reverse') {
            this._size = 0;
            this._color = __assign(__assign({}, (0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_0__.getRgbColor)(color)), { a: 0 });
        }
        else {
            this._size = size;
            this._color = color;
        }
        this._speed = speed;
        this._shape = shape;
        this._canvasCtx = canvasCtx;
        this._fadeColor = fadeColor;
        this._fadeSize = fadeSize;
        this._fadeDirection = fadeDirection;
    }
    Particle.prototype.tick = function (dt) {
        this._position.add(this._velocity.clone().multiplyByScalar(dt * this._speed));
        if (this._fadeColor) {
            if (this._fadeDirection === 'normal') {
                this._color.a -= this._colorFadeAmount;
            }
            else {
                this._color.a += this._colorFadeAmount;
            }
        }
        if (this._fadeSize) {
            if (this._fadeDirection === 'normal') {
                this._size -= this._sizeFadeAmount;
            }
            else {
                this._size += this._sizeFadeAmount;
            }
        }
        this._age--;
    };
    Particle.prototype.draw = function () {
        var scaleX = this._canvasCtx.canvas.width / 2000;
        var scaleY = this._canvasCtx.canvas.height / 2000;
        this._canvasCtx.moveTo(this._position.x * scaleX, this._position.y * scaleY);
        this._canvasCtx.fillStyle = "rgba(".concat(this._color.r, ",").concat(this._color.g, ", ").concat(this._color.b, ", ").concat(this._color.a, ")");
        this._canvasCtx.beginPath();
        switch (this._shape) {
            case 'circle':
                this._canvasCtx.arc(this._position.x * scaleX, this._position.y * scaleY, this._size, 0, 2 * Math.PI);
                this._canvasCtx.fill();
                break;
            case 'square':
                this._canvasCtx.fillRect((this._position.x - this._size) * scaleX, (this._position.y - this._size) * scaleY, this._size * 2, this._size * 2);
                break;
        }
        this._canvasCtx.closePath();
    };
    Object.defineProperty(Particle.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Particle;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);


/***/ }),

/***/ "./src/ParticleSystem/ParticleSystemUtils.ts":
/*!***************************************************!*\
  !*** ./src/ParticleSystem/ParticleSystemUtils.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBiasedRandomDirection: () => (/* binding */ getBiasedRandomDirection),
/* harmony export */   getPositionInCircle: () => (/* binding */ getPositionInCircle),
/* harmony export */   getPositionInRectangle: () => (/* binding */ getPositionInRectangle),
/* harmony export */   getRandomDirection: () => (/* binding */ getRandomDirection),
/* harmony export */   getRgbColor: () => (/* binding */ getRgbColor),
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb),
/* harmony export */   hexToRgbA: () => (/* binding */ hexToRgbA)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);

function getRandomDirection() {
    return (new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(Math.random() * 2 - 1, Math.random() * 2 - 1));
}
function getBiasedRandomDirection(direction, spreadAngle) {
    var angle = getAngle(direction) + (Math.random() - 0.5) * spreadAngle;
    return fromAngle(angle);
}
function getPositionInCircle(radius, onEdge) {
    var point;
    do {
        point = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(Math.random() * radius * 2 - radius, Math.random() * radius * 2 - radius);
    } while (Math.pow(point.x, 2) + Math.pow(point.y, 2) > Math.pow(radius, 2));
    if (onEdge) {
        point.normalise().mulS(radius);
    }
    return point;
}
function getPositionInRectangle(width, height) {
    return new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(Math.random() * width, Math.random() * height);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function hexToRgbA(hex) {
    var a = 0;
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
    if (typeof result[4] === "undefined") {
        a = 1;
    }
    else {
        a = parseInt(result[4], 16) / 255;
    }
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: a
    } : null;
}
function getAngle(vector) {
    return Math.atan2(vector.y, vector.x);
}
function fromAngle(angle) {
    return new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(Math.cos(angle), Math.sin(angle));
}
function getRgbColor(color) {
    var r = color.r, g = color.g, b = color.b;
    return { r: r, g: g, b: b };
}


/***/ }),

/***/ "./src/ParticleSystem/RectangularEmitter.ts":
/*!**************************************************!*\
  !*** ./src/ParticleSystem/RectangularEmitter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ "./src/ParticleSystem/Particle.ts");
/* harmony import */ var _ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleSystemUtils */ "./src/ParticleSystem/ParticleSystemUtils.ts");
/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Emitter */ "./src/ParticleSystem/Emitter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var RectangleEmitter = /** @class */ (function (_super) {
    __extends(RectangleEmitter, _super);
    function RectangleEmitter(width, height, position, canvasCtx, emitterOptions) {
        var _this = _super.call(this, position, canvasCtx, emitterOptions) || this;
        _this._width = width;
        _this._height = height;
        return _this;
    }
    RectangleEmitter.prototype.tick = function (dt) {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0)
            return;
        this._remainingEmitTimeMillis -= dt;
        //emit new particles if the emitter is "alive"
        if (this._ticks % this._emitInterval === 0 && this._remainingEmitTimeMillis > 0) {
            var scaleY = this._canvasCtx.canvas.height / 2000;
            for (var i = 0; i < this._emitAmountPerTick; i++) {
                this._aliveParticles.push(new _Particle__WEBPACK_IMPORTED_MODULE_1__["default"](this.position.clone().add((0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_2__.getPositionInRectangle)(this._width, this._height).subtract(new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(this._width / 2, this._height / 2))), (0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_2__.getBiasedRandomDirection)(this.emitDirection, this._spreadAngle), this._particleSize * scaleY, this._speed, this._particleShape, __assign({}, (0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_2__.hexToRgbA)(this._color)), this._canvasCtx, this._particleMaxAge, this._doFadeColor, this._doFadeSize, this._fadeDirection));
            }
        }
        //move all the particles forward in time
        this._aliveParticles.forEach(function (particle) {
            particle.tick(dt);
        });
        //remove particles that have reached the end of their lifespan
        this._aliveParticles = this._aliveParticles.filter(function (particle) { return particle.age > 0; });
        this._ticks++;
    };
    RectangleEmitter.prototype.draw = function () {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0)
            return;
        if (this._drawEmitterZone === true) {
            var scaleX = this._canvasCtx.canvas.width / 2000;
            var scaleY = this._canvasCtx.canvas.height / 2000;
            this._canvasCtx.moveTo((this.position.x - this._width / 2) * scaleX, (this.position.y - this._height / 2) * scaleY);
            this._canvasCtx.fillStyle = "rgba(".concat((0,_ParticleSystemUtils__WEBPACK_IMPORTED_MODULE_2__.hexToRgb)(this._color), ", ").concat(Math.min(0.2, ((this._remainingEmitTimeMillis + this._particleMaxAge) / this._particleMaxAge / 5)), ")");
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(this.position.x - this._width / 2, this.position.y - this._height / 2, this._width, this._height);
            this._canvasCtx.fill();
            this._canvasCtx.closePath();
        }
        this._aliveParticles.forEach(function (particle) {
            particle.draw();
        });
    };
    Object.defineProperty(RectangleEmitter.prototype, "emitTime", {
        set: function (newEmitTime) {
            this._remainingEmitTimeMillis = newEmitTime;
        },
        enumerable: false,
        configurable: true
    });
    return RectangleEmitter;
}(_Emitter__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RectangleEmitter);


/***/ }),

/***/ "./src/PowerupSystem/PowerupHandler.ts":
/*!*********************************************!*\
  !*** ./src/PowerupSystem/PowerupHandler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _ParticleSystem_RectangularEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ParticleSystem/RectangularEmitter */ "./src/ParticleSystem/RectangularEmitter.ts");
/* harmony import */ var _powerup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./powerup */ "./src/PowerupSystem/powerup.ts");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Drawer */ "./src/Drawer.ts");
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MenuManager/login */ "./src/MenuManager/login.ts");







var PowerupHandler = /** @class */ (function () {
    function PowerupHandler() {
        this._powerups = {};
        this._wallEmitters = [];
        this._portalWalls = false;
        this._cameraLock = false;
        this._gameCanvasDiv = document.getElementById("game-canvas-container");
        this.initializeWallEmitters();
    }
    PowerupHandler.prototype.initializeWallEmitters = function () {
        var sizes = [
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(2000, 50),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 2000),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(2000, 50),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 2000),
        ];
        var directions = [
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, -1),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(-1, 0),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 1),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(1, 0),
        ];
        var positions = [
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(1000, 50),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 1000),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(1000, 1950),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(1950, 1000),
        ];
        for (var i = 0; i < 4; i++) {
            this._wallEmitters.push(new _ParticleSystem_RectangularEmitter__WEBPACK_IMPORTED_MODULE_2__["default"](sizes[i].x, sizes[i].y, positions[i], ___WEBPACK_IMPORTED_MODULE_1__.gameCanvasCtx, {
                particleShape: "square",
                color: "#59eeebff",
                emitTimeMillis: 0,
                emitDirection: directions[i],
                spreadAngle: Math.PI / 6,
                speed: 0.8,
                particleSize: 8,
                particleAge: 100,
                emitInterval: 1,
                emitAmountPerTick: 4,
                fadeDirection: "reverse",
            }));
        }
    };
    PowerupHandler.prototype.addPowerup = function (powerup) {
        this._powerups[powerup.id] = powerup;
    };
    PowerupHandler.prototype.removePowerup = function (powerup) {
        delete this._powerups[powerup.id];
    };
    PowerupHandler.prototype.applyPowerup = function (powerup, player) {
        var _this = this;
        switch (powerup.type) {
            case _powerup__WEBPACK_IMPORTED_MODULE_3__.PowerupType.PortalWalls:
                this.flipWallState();
                setTimeout(function () {
                    _this.flipWallState();
                }, powerup.duration);
                break;
            case _powerup__WEBPACK_IMPORTED_MODULE_3__.PowerupType.CameraLockToPlayer:
                if (player.username === _MenuManager_login__WEBPACK_IMPORTED_MODULE_5__.currentPlayer.username) {
                    break;
                }
                this._cameraLock = true;
                //increase the canvas resolution in order to decrease the blur
                ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.width = ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.getBoundingClientRect().width * 2;
                ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.height = ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.getBoundingClientRect().height * 2;
                ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.width = ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.getBoundingClientRect().width * 2;
                ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.height = ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.getBoundingClientRect().height * 2;
                document.getElementById('login-screen-body').style.overflow = 'hidden';
                (0,_Drawer__WEBPACK_IMPORTED_MODULE_4__.drawGrid)();
                setTimeout(function () {
                    _this._cameraLock = false;
                    document.getElementById('game-canvas-container').style.transform = "scale(1) rotate(0rad) translate(0px, 0px)";
                    setTimeout(function () {
                        document.getElementById('login-screen-body').style.overflow = 'visible';
                        (0,___WEBPACK_IMPORTED_MODULE_1__.updateCanvasSize)();
                    }, 200);
                }, powerup.duration);
        }
        this.removePowerup(powerup);
    };
    PowerupHandler.prototype.generateZones = function (type, amount) {
    };
    PowerupHandler.prototype.draw = function () {
        Object.values(this._powerups).forEach(function (powerup) {
            powerup.draw();
        });
        this._wallEmitters.forEach(function (emitter) {
            emitter.tick(1);
            emitter.draw();
        });
    };
    PowerupHandler.prototype.flipWallState = function () {
        var _this = this;
        this._portalWalls = !this._portalWalls;
        this._wallEmitters.forEach(function (emitter) { return (emitter.emitTime = _this._portalWalls ? Infinity : 0); });
        this._gameCanvasDiv.style.borderColor = this._portalWalls
            ? "#34c6dc"
            : "#555555";
    };
    Object.defineProperty(PowerupHandler.prototype, "cameraLock", {
        get: function () {
            return this._cameraLock;
        },
        enumerable: false,
        configurable: true
    });
    return PowerupHandler;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PowerupHandler);


/***/ }),

/***/ "./src/PowerupSystem/powerup.ts":
/*!**************************************!*\
  !*** ./src/PowerupSystem/powerup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PowerupType: () => (/* binding */ PowerupType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParticleSystem_CircularEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ParticleSystem/CircularEmitter */ "./src/ParticleSystem/CircularEmitter.ts");
var _a;


var PowerupType;
(function (PowerupType) {
    PowerupType[PowerupType["SpeedUp"] = 0] = "SpeedUp";
    PowerupType[PowerupType["SpeedDown"] = 1] = "SpeedDown";
    PowerupType[PowerupType["Bomb"] = 2] = "Bomb";
    PowerupType[PowerupType["FlipButtons"] = 3] = "FlipButtons";
    PowerupType[PowerupType["Invisibility"] = 4] = "Invisibility";
    PowerupType[PowerupType["PortalWalls"] = 5] = "PortalWalls";
    PowerupType[PowerupType["CameraLockToPlayer"] = 6] = "CameraLockToPlayer";
})(PowerupType || (PowerupType = {}));
var SVG_PATHS = (_a = {},
    _a[PowerupType.SpeedUp] = "../assets/powerups/speedup.svg",
    _a[PowerupType.SpeedDown] = "../assets/powerups/speeddown.svg",
    _a[PowerupType.Bomb] = "../assets/powerups/bomb.svg",
    _a[PowerupType.FlipButtons] = "../assets/powerups/flipbuttons.svg",
    _a[PowerupType.Invisibility] = "../assets/powerups/invisibility.svg",
    _a[PowerupType.PortalWalls] = "../assets/powerups/portalwalls.svg",
    _a[PowerupType.CameraLockToPlayer] = "../assets/powerups/temp.svg",
    _a);
var Powerup = /** @class */ (function () {
    function Powerup(id, position, canvasCtx, color, type, duration) {
        this._radius = 30;
        this._id = id;
        this._position = position;
        this._canvasCtx = canvasCtx;
        this._color = color;
        this._type = type;
        this._duration = duration;
        this._img = new Image();
        this._img.src = SVG_PATHS[this._type];
        this._emitter = new _ParticleSystem_CircularEmitter__WEBPACK_IMPORTED_MODULE_1__["default"](this._radius * 0.6, this._position, this._canvasCtx, {
            color: this._color,
            particleSize: this._radius / 2.85,
            particleAge: 60,
            speed: this._radius / 20,
            emitAmountPerTick: 3,
            spawnParticlesOnEdge: true,
        });
    }
    Powerup.prototype.draw = function () {
        this._emitter.tick(0.5);
        this._emitter.draw();
        var scaleX = this._canvasCtx.canvas.width / 2000;
        var scaleY = this._canvasCtx.canvas.height / 2000;
        this._canvasCtx.moveTo(this._position.x * scaleX, this._position.y * scaleY);
        this._canvasCtx.fillStyle = this._color;
        this._canvasCtx.beginPath();
        this._canvasCtx.arc(this._position.x * scaleX, this._position.y * scaleY, this._radius * scaleX, 0, 2 * Math.PI);
        this._canvasCtx.fill();
        this._canvasCtx.closePath();
        this.drawSVG();
        this._emitter.emitTime = Infinity;
    };
    Powerup.prototype.drawSVG = function () {
        var scaleX = this._canvasCtx.canvas.width / 2000;
        var scaleY = this._canvasCtx.canvas.height / 2000;
        // this._canvasCtx.fillStyle = "#ffffff";
        var imageScaleFactor = 0.6;
        var aspectRatio = this._img.width / this._img.height;
        // Determine the scaled dimensions based on the aspect ratio
        var drawWidth = this._radius * 2 * imageScaleFactor * scaleX;
        var drawHeight = (this._radius * 2 * imageScaleFactor * scaleX) / aspectRatio;
        // Ensure the image fits within the given radius
        if (drawHeight > this._radius * 2 * imageScaleFactor * scaleX) {
            drawHeight = this._radius * 2 * imageScaleFactor * scaleX;
            drawWidth = drawHeight * aspectRatio;
        }
        this._canvasCtx.drawImage(this._img, this._position.x * scaleX - drawWidth / 2, this._position.y * scaleY - drawHeight / 2, drawWidth, drawHeight);
    };
    Object.defineProperty(Powerup.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Powerup.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Powerup.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Powerup.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Powerup.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Powerup.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Powerup.prototype.toJSON = function () {
        return {
            id: this._id,
            position: { x: this.position.x, y: this.position.y },
            color: this._color,
            type: this._type,
            radius: this._radius,
            duration: this._duration
        };
    };
    Powerup.fromMessagePowerup = function (json, canvasCtx) {
        return new Powerup(json.powerup.id, new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(json.powerup.position.x, json.powerup.position.y), canvasCtx, json.powerup.color, json.powerup.type, json.powerup.duration);
    };
    return Powerup;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Powerup);


/***/ }),

/***/ "./src/Segment.ts":
/*!************************!*\
  !*** ./src/Segment.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Segment = /** @class */ (function () {
    function Segment() {
    }
    return Segment;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Segment);


/***/ }),

/***/ "./src/Snake.ts":
/*!**********************!*\
  !*** ./src/Snake.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ParticleSystem_CircularEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleSystem/CircularEmitter */ "./src/ParticleSystem/CircularEmitter.ts");

var Snake = /** @class */ (function () {
    function Snake(startPos, color, canvasCtx) {
        this.segments = [];
        this.isAlive = true;
        this.turnRadius = 60;
        this._emitter = null;
        this.addSegment(startPos);
        this._color = color;
        this._canvasCtx = canvasCtx;
        this._emitter = new _ParticleSystem_CircularEmitter__WEBPACK_IMPORTED_MODULE_0__["default"](0, this.head.endPoint, this._canvasCtx, { emitInterval: 2,
            emitAmountPerTick: 3,
            particleSize: 7,
            speed: 4,
            color: this._color,
        });
    }
    Snake.prototype.addSegment = function (segment) {
        this.segments.push(segment);
    };
    Object.defineProperty(Snake.prototype, "head", {
        get: function () {
            return this.segments.slice(-1).pop();
        },
        enumerable: false,
        configurable: true
    });
    Snake.prototype.draw = function () {
        var _this = this;
        var scaleX = this._canvasCtx.canvas.width / 2000;
        var scaleY = this._canvasCtx.canvas.height / 2000;
        this._canvasCtx.lineWidth = 12 * Math.min(scaleX, scaleY);
        //TODO fix this to be a single path
        this.segments.forEach(function (segment, index) {
            segment.draw(_this._canvasCtx, _this._color);
            //draw a dot at the head, this is useful if the segment is invisible
            if (_this.head === segment) {
                _this._canvasCtx.beginPath();
                _this._canvasCtx.arc(segment.endPoint.x * scaleX, segment.endPoint.y * scaleY, 0.5 * Math.min(scaleX, scaleY), 0, 2 * Math.PI);
                _this._canvasCtx.stroke();
                _this._canvasCtx.closePath();
            }
        });
    };
    Snake.prototype.kill = function () {
        this.isAlive = false;
        this._emitter.position = this.head.endPoint;
        this._emitter.emitTime = 10;
    };
    Snake.prototype.updateEmitter = function (dt) {
        if (this._emitter) {
            this._emitter.tick(dt);
            this._emitter.draw();
        }
    };
    return Snake;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);


/***/ }),

/***/ "./src/WebSocketClient/websocket.ts":
/*!******************************************!*\
  !*** ./src/WebSocketClient/websocket.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRoom: () => (/* binding */ createRoom),
/* harmony export */   joinRoom: () => (/* binding */ joinRoom),
/* harmony export */   sendKeyEventToServer: () => (/* binding */ sendKeyEventToServer),
/* harmony export */   sendStartCommand: () => (/* binding */ sendStartCommand),
/* harmony export */   setPlayerData: () => (/* binding */ setPlayerData)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuManager/login */ "./src/MenuManager/login.ts");


var socket;
function initWebSocket() {
    // socket = new WebSocket(`ws://${window.location.hostname}:3000`);
    socket = new WebSocket("wss://snakegame-server.maxio.site");
    socket.onopen = function () {
        console.log('WebSocket connection established');
    };
    socket.onmessage = function (event) {
        var data = JSON.parse(event.data);
        console.log('Message from server:', data);
        switch (data.type) {
            case 'JOINED_ROOM':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.showRoomView)(event.data);
                break;
            case 'JOIN_FAIL':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.showErrorAnimation)(data.reason);
                break;
            case 'ROOM_DATA':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.updateRoomList)(event.data);
                break;
            case 'GAME_STATE':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.switchGameView)(data);
                break;
            case 'GAMEPLAY_DATA':
                (0,___WEBPACK_IMPORTED_MODULE_0__.updateGameState)(data);
                break;
            case 'ERROR':
                alert("Error: ".concat(data.message));
                break;
        }
    };
    socket.onclose = function () {
        console.log('WebSocket connection closed');
    };
    socket.onerror = function (error) {
        console.error('WebSocket error:', error);
    };
}
function createRoom(username) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'CREATE_ROOM', username: username }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
function joinRoom(roomCode, username) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'JOIN_ROOM', roomCode: roomCode, username: username }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
function setPlayerData(player, roomCode) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'PLAYER_DATA', player: player, roomCode: roomCode }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
function sendKeyEventToServer(key, pressed) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'KEY_EVENT', roomCode: _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.currentRoom.code, username: _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.currentPlayer.username, key: key, pressed: pressed }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
function sendStartCommand(roomCode) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'BEGIN_GAME', roomCode: roomCode }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
initWebSocket();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundCanvas: () => (/* binding */ backgroundCanvas),
/* harmony export */   backgroundCanvasCtx: () => (/* binding */ backgroundCanvasCtx),
/* harmony export */   fps: () => (/* binding */ fps),
/* harmony export */   gameCanvas: () => (/* binding */ gameCanvas),
/* harmony export */   gameCanvasCtx: () => (/* binding */ gameCanvasCtx),
/* harmony export */   gridSize: () => (/* binding */ gridSize),
/* harmony export */   updateCanvasSize: () => (/* binding */ updateCanvasSize),
/* harmony export */   updateGameState: () => (/* binding */ updateGameState)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArcSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArcSegment */ "./src/ArcSegment.ts");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer */ "./src/Drawer.ts");
/* harmony import */ var _InputManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputManager */ "./src/InputManager.ts");
/* harmony import */ var _LineSegment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineSegment */ "./src/LineSegment.ts");
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Snake */ "./src/Snake.ts");
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuManager/login */ "./src/MenuManager/login.ts");
/* harmony import */ var _PowerupSystem_PowerupHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PowerupSystem/PowerupHandler */ "./src/PowerupSystem/PowerupHandler.ts");
/* harmony import */ var _PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PowerupSystem/powerup */ "./src/PowerupSystem/powerup.ts");









var gameDiv = document.getElementById("game-canvas-container");
var fpsCounter = document.createElement("div");
fpsCounter.style.position = "absolute";
fpsCounter.style.top = "10px";
fpsCounter.style.left = "10px";
fpsCounter.style.color = "black";
var prevGameDivAngle = 0;
document.body.appendChild(fpsCounter);
var fps = 60;
var gameCanvas = document.getElementById("game-canvas");
var gameCanvasCtx = gameCanvas.getContext("2d");
var backgroundCanvas = document.getElementById("background-canvas");
var backgroundCanvasCtx = backgroundCanvas.getContext("2d");
backgroundCanvas.width = backgroundCanvas.getBoundingClientRect().width;
backgroundCanvas.height = backgroundCanvas.getBoundingClientRect().height;
gameCanvas.width = gameCanvas.getBoundingClientRect().width;
gameCanvas.height = gameCanvas.getBoundingClientRect().height;
//2000 / 66.666 ~= 30
var gridSize = 66.666;
var inputManager;
var powerupHandler;
function updateCanvasSize() {
    gameCanvas.width = gameCanvas.getBoundingClientRect().width;
    gameCanvas.height = gameCanvas.getBoundingClientRect().height;
    backgroundCanvas.width = backgroundCanvas.getBoundingClientRect().width;
    backgroundCanvas.height = backgroundCanvas.getBoundingClientRect().height;
    (0,_Drawer__WEBPACK_IMPORTED_MODULE_2__.drawGrid)();
}
function animate() {
    var mult = fps / 60;
    frameCount++;
    if (frameCount % 10 === 0) {
        fps = calculateFPS();
        fpsCounter.innerText = "FPS: ".concat(fps);
    }
    gameCanvasCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    Object.values(_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players).forEach(function (player) {
        player.snake.draw();
        player.snake.updateEmitter((performance.now() / 10 - lastTime) / 15);
    });
    powerupHandler.draw();
}
var frameCount = 0;
var lastTime = performance.now() / 10;
function calculateFPS() {
    var currentTime = performance.now() / 10;
    var timeDiff = currentTime - lastTime;
    var fps = Math.round(1000 / timeDiff);
    lastTime = currentTime;
    return fps;
}
window.addEventListener("resize", updateCanvasSize);
(0,_Drawer__WEBPACK_IMPORTED_MODULE_2__.drawGrid)();
function getClosestAngle(currentAngle, targetAngle) {
    var pi2 = Math.PI * 2;
    var delta = (targetAngle - currentAngle) % pi2;
    if (delta > Math.PI) {
        delta -= pi2;
    }
    else if (delta < -Math.PI) {
        delta += pi2;
    }
    return currentAngle + delta;
}
function updateGameState(gameState) {
    if (_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.snake === null) {
        // Initialize snakes the first time this function is called
        gameState.snakeHeads.forEach(function (headData) {
            var head = headData.lastSegment;
            var username = headData.username;
            var pos = head.endPoint;
            _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[username].snake = new _Snake__WEBPACK_IMPORTED_MODULE_5__["default"](new _LineSegment__WEBPACK_IMPORTED_MODULE_4__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y), new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(pos.x, pos.y), head.isCollidable, head.endAngle), _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[username].color, gameCanvasCtx);
        });
        _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.snake = _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username].snake;
        inputManager = new _InputManager__WEBPACK_IMPORTED_MODULE_3__["default"](_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username].snake, ["A", "ARROWLEFT"], ["D", "ARROWRIGHT"]);
        powerupHandler = new _PowerupSystem_PowerupHandler__WEBPACK_IMPORTED_MODULE_7__["default"]();
    }
    else {
        var currentUsernames_1 = [];
        // Update existing snakes based on the new game state
        gameState.snakeHeads.forEach(function (newHeadData) {
            var head = newHeadData.lastSegment;
            var username = newHeadData.username;
            var endPos = head.endPoint;
            var snakeToUpdate = _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[username].snake;
            if (gameState.powerupList !== null) {
                //update powerups list
                gameState.powerupList.forEach(function (powerupInfo) {
                    switch (powerupInfo.action) {
                        case 0 /* PowerupAction.REMOVE */:
                            powerupHandler.removePowerup(_PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_8__["default"].fromMessagePowerup(powerupInfo, gameCanvasCtx));
                            break;
                        case 1 /* PowerupAction.SPAWN */:
                            powerupHandler.addPowerup(_PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_8__["default"].fromMessagePowerup(powerupInfo, gameCanvasCtx));
                            break;
                        case 2 /* PowerupAction.APPLY */:
                            powerupHandler.applyPowerup(_PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_8__["default"].fromMessagePowerup(powerupInfo, gameCanvasCtx), powerupInfo.player);
                            break;
                    }
                });
            }
            //keep track of the usernames sent by the server in the data
            currentUsernames_1.push(username);
            // translate(${head.endPoint.x * gameCanvas.width / 2000 }px, ${head.endPoint.y * gameCanvas.width / 2000}px)
            if (head.isNewThisTick) {
                if (newHeadData.segmentType === "LineSegment") {
                    head = head;
                    var startPos = head.startPoint;
                    snakeToUpdate.addSegment(new _LineSegment__WEBPACK_IMPORTED_MODULE_4__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(startPos.x, startPos.y), new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(endPos.x, endPos.y), head.isCollidable, head.endAngle));
                }
                else if (newHeadData.segmentType === "ArcSegment") {
                    head = head;
                    var center = head.center;
                    snakeToUpdate.addSegment(new _ArcSegment__WEBPACK_IMPORTED_MODULE_1__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(center.x, center.y), head.radius, head.startAngle, head.endAngle, head.counterClockwise, head.isCollidable));
                }
            }
            else {
                if (newHeadData.segmentType === "LineSegment") {
                    head = head;
                    if (powerupHandler.cameraLock) {
                        if (username === _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username) {
                            var newAngle = -head.endAngle - Math.PI / 2;
                            var closestAngle = getClosestAngle(prevGameDivAngle, newAngle);
                            gameDiv.style.transform = "scale(2) rotate(".concat(closestAngle, "rad) translate(").concat((-head.endPoint.x * window.innerHeight) / 2000 +
                                window.innerHeight / 2, "px, ").concat((-head.endPoint.y * window.innerHeight) / 2000 +
                                window.innerHeight / 2, "px)");
                            prevGameDivAngle = closestAngle;
                        }
                    }
                    var startPos = head.startPoint;
                    snakeToUpdate.segments[snakeToUpdate.segments.length - 1] =
                        new _LineSegment__WEBPACK_IMPORTED_MODULE_4__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(startPos.x, startPos.y), new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(endPos.x, endPos.y), head.isCollidable, head.endAngle);
                }
                else if (newHeadData.segmentType === "ArcSegment") {
                    head = head;
                    if (powerupHandler.cameraLock) {
                        if (username === _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username) {
                            var newAngle = head.counterClockwise
                                ? -head.endAngle
                                : -head.endAngle - Math.PI;
                            var closestAngle = getClosestAngle(prevGameDivAngle, newAngle);
                            gameDiv.style.transform = "scale(2) rotate(".concat(closestAngle, "rad) translate(").concat((-head.endPoint.x * window.innerHeight) / 2000 +
                                window.innerHeight / 2, "px, ").concat((-head.endPoint.y * window.innerHeight) / 2000 +
                                window.innerHeight / 2, "px)");
                            prevGameDivAngle = closestAngle;
                        }
                    }
                    var center = head.center;
                    snakeToUpdate.segments[snakeToUpdate.segments.length - 1] =
                        new _ArcSegment__WEBPACK_IMPORTED_MODULE_1__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(center.x, center.y), head.radius, head.startAngle, head.endAngle, head.counterClockwise, head.isCollidable);
                }
            }
        });
        //when a username that is on the client list is no longer seen in the data from the server, kill him
        Object.values(_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players).forEach(function (player) {
            if (!currentUsernames_1.includes(player.username) && player.snake.isAlive) {
                player.snake.kill();
                //set the last winner if noone is alive now
                if (Object.values(_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players).every(function (player) { return !player.snake.isAlive; }) === true) {
                    _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.lastWinner = player;
                }
            }
        });
    }
    animate();
}


/***/ }),

/***/ "./node_modules/vector2d/src/AbstractVector.js":
/*!*****************************************************!*\
  !*** ./node_modules/vector2d/src/AbstractVector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * These values are used by the `AbstractVector.round` method to increase
 * performance vs. using  Number.toFixed.
 */
var precision = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000,
    10000000000
];
/**
 * The class that all other vector representations are derived from.
 *
 * Contains the core implementation for all methods that will be exposed by
 * vector instances.
 *
 * Example of creating a custom implementation:
 *
 * ```ts
 * import { AbstractVector } from "./AbstractVector"
 *
 * export class MyCustomVector extends AbstractVector {
 *  constructor (x: number, y: number) {
 *    super(CustomVectorType)
 *  }
 * }
 * ```
 */
var AbstractVector = /** @class */ (function () {
    function AbstractVector(ctor) {
        this.ctor = ctor;
    }
    /**
     * Set both x and y axis value
     * @param x   New x val
     * @param y   New y val
     */
    AbstractVector.prototype.setAxes = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    /**
     * Getter for x the axis value
     */
    AbstractVector.prototype.getX = function () {
        return this.x;
    };
    /**
     * Setter for x axis value
     */
    AbstractVector.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    /**
     * Getter for y axis value
     */
    AbstractVector.prototype.getY = function () {
        return this.y;
    };
    /**
     * Setter for y axis.
     */
    AbstractVector.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    /**
     * Return the vector as a formatted string, e.g "(0, 4)"
     */
    AbstractVector.prototype.toString = function (round) {
        if (round === void 0) { round = false; }
        if (round) {
            return "(" + Math.round(this.x) + ", " + Math.round(this.y) + ")";
        }
        return "(" + this.x + ", " + this.y + ")";
    };
    /**
     * Return an Array containing the vector axes, e.g [0, 4]
     */
    AbstractVector.prototype.toArray = function () {
        return [this.x, this.y];
    };
    /**
     * Return an Object containing the vector axes, e.g { x: 0, y: 4 }
     */
    AbstractVector.prototype.toObject = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Add the provided vector to this one
     */
    AbstractVector.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    };
    /**
     * Subtract the provided vector from this one
     */
    AbstractVector.prototype.subtract = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    };
    /**
     * Check if the provided vector equal to this one
     */
    AbstractVector.prototype.equals = function (vec) {
        return vec.x === this.x && vec.y === this.y;
    };
    /**
     * Multiply this vector by the provided vector
     */
    AbstractVector.prototype.multiplyByVector = function (vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    };
    /**
     * Multiply this vector by the provided vector
     */
    AbstractVector.prototype.mulV = function (vec) {
        return this.multiplyByVector(vec);
    };
    /**
     * Divide this vector by the provided vector
     */
    AbstractVector.prototype.divideByVector = function (vec) {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    };
    /**
     * Divide this vector by the provided vector
     */
    AbstractVector.prototype.divV = function (v) {
        return this.divideByVector(v);
    };
    /**
     * Multiply this vector by the provided number
     */
    AbstractVector.prototype.multiplyByScalar = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    /**
     * Multiply this vector by the provided number
     */
    AbstractVector.prototype.mulS = function (n) {
        return this.multiplyByScalar(n);
    };
    /**
     * Divive this vector by the provided number
     */
    AbstractVector.prototype.divideByScalar = function (n) {
        this.x /= n;
        this.y /= n;
        return this;
    };
    /**
     * Divive this vector by the provided number
     */
    AbstractVector.prototype.divS = function (n) {
        return this.divideByScalar(n);
    };
    /**
     * Normalise this vector
     */
    AbstractVector.prototype.normalise = function () {
        return this.divideByScalar(this.magnitude());
    };
    /**
     * For American spelling. Same as unit/normalise function
     */
    AbstractVector.prototype.normalize = function () {
        return this.normalise();
    };
    /**
     * The same as normalise and normalize
     */
    AbstractVector.prototype.unit = function () {
        return this.normalise();
    };
    /**
     * Returns the magnitude (length) of this vector
     */
    AbstractVector.prototype.magnitude = function () {
        var x = this.x;
        var y = this.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Returns the magnitude (length) of this vector
     */
    AbstractVector.prototype.length = function () {
        return this.magnitude();
    };
    /**
     * Returns the squred length of this vector
     */
    AbstractVector.prototype.lengthSq = function () {
        var x = this.x;
        var y = this.y;
        return x * x + y * y;
    };
    /**
     * Returns the dot product of this vector by another
     */
    AbstractVector.prototype.dot = function (vec) {
        return vec.x * this.x + vec.y * this.y;
    };
    /**
     * Returns the cross product of this vector by another.
     */
    AbstractVector.prototype.cross = function (vec) {
        return this.x * vec.y - this.y * vec.x;
    };
    /**
     * Reverses this vector i.e multiplies it by -1
     */
    AbstractVector.prototype.reverse = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    /**
     * Set the vector axes values to absolute values
     */
    AbstractVector.prototype.abs = function () {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    };
    /**
     * Zeroes the vector i.e sets all axes to 0
     */
    AbstractVector.prototype.zero = function () {
        this.x = this.y = 0;
        return this;
    };
    /**
     * Returns the distance between this vector and another
     */
    AbstractVector.prototype.distance = function (v) {
        var x = this.x - v.x;
        var y = this.y - v.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Rotates the vetor by provided radians
     */
    AbstractVector.prototype.rotate = function (rads) {
        var cos = Math.cos(rads);
        var sin = Math.sin(rads);
        var ox = this.x;
        var oy = this.y;
        this.x = ox * cos - oy * sin;
        this.y = ox * sin + oy * cos;
        return this;
    };
    /**
     * Rounds this vector to n decimal places
     */
    AbstractVector.prototype.round = function (n) {
        if (n === void 0) { n = 2; }
        var p = precision[n];
        // This performs waaay better than toFixed and give Float32 the edge again.
        // http://www.dynamicguru.com/javascript/round-numbers-with-precision/
        this.x = ((0.5 + this.x * p) << 0) / p;
        this.y = ((0.5 + this.y * p) << 0) / p;
        return this;
    };
    /**
     * Returns a copy of this vector
     */
    AbstractVector.prototype.clone = function () {
        return new this.ctor(this.x, this.y);
    };
    return AbstractVector;
}());
exports.AbstractVector = AbstractVector;
//# sourceMappingURL=AbstractVector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/ArrayVector.js":
/*!**************************************************!*\
  !*** ./node_modules/vector2d/src/ArrayVector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes in an Array
 *
 * ```
 * const v = new Vec2D.ArrayVector(2, 5)
 * ```
 */
var ArrayVector = /** @class */ (function (_super) {
    __extends(ArrayVector, _super);
    function ArrayVector(x, y) {
        var _this = _super.call(this, ArrayVector) || this;
        _this.axes = [x, y];
        _this.ctor = ArrayVector;
        return _this;
    }
    Object.defineProperty(ArrayVector.prototype, "x", {
        get: function () {
            return this.axes[0];
        },
        set: function (x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayVector.prototype, "y", {
        get: function () {
            return this.axes[1];
        },
        set: function (y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayVector;
}(AbstractVector_1.AbstractVector));
exports.ArrayVector = ArrayVector;
//# sourceMappingURL=ArrayVector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Float32Vector.js":
/*!****************************************************!*\
  !*** ./node_modules/vector2d/src/Float32Vector.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes in a Float32Array
 *
 * ```
 * const v = new Vec2D.Float32Vector(2, 5)
 * ```
 */
var Float32Vector = /** @class */ (function (_super) {
    __extends(Float32Vector, _super);
    function Float32Vector(x, y) {
        var _this = _super.call(this, Float32Vector) || this;
        _this.axes = new Float32Array(2);
        _this.axes[0] = x;
        _this.axes[1] = y;
        return _this;
    }
    Object.defineProperty(Float32Vector.prototype, "x", {
        get: function () {
            return this.axes[0];
        },
        set: function (x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Float32Vector.prototype, "y", {
        get: function () {
            return this.axes[1];
        },
        set: function (y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return Float32Vector;
}(AbstractVector_1.AbstractVector));
exports.Float32Vector = Float32Vector;
//# sourceMappingURL=Float32Vector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Vec2D.js":
/*!********************************************!*\
  !*** ./node_modules/vector2d/src/Vec2D.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js"));
__export(__webpack_require__(/*! ./ArrayVector */ "./node_modules/vector2d/src/ArrayVector.js"));
__export(__webpack_require__(/*! ./Float32Vector */ "./node_modules/vector2d/src/Float32Vector.js"));
__export(__webpack_require__(/*! ./Vector */ "./node_modules/vector2d/src/Vector.js"));
//# sourceMappingURL=Vec2D.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Vector.js":
/*!*********************************************!*\
  !*** ./node_modules/vector2d/src/Vector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes as part of the instance itself
 *
 * ```ts
 * const v = new Vec2D.Vector(2, 5)
 * ```
 */
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector(x, y) {
        var _this = _super.call(this, Vector) || this;
        _this._x = x;
        _this._y = y;
        return _this;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}(AbstractVector_1.AbstractVector));
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsY0FBYztBQUNkOzs7Ozs7VUNuREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL0FyY1NlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9EcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9MaW5lU2VnbWVudC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL01lbnVNYW5hZ2VyL2xvZ2luLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvTW9kZWxzL1BsYXllci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL01vZGVscy9Sb29tLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vQ2lyY3VsYXJFbWl0dGVyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vRW1pdHRlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1BhcnRpY2xlU3lzdGVtL1BhcnRpY2xlLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vUGFydGljbGVTeXN0ZW1VdGlscy50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1BhcnRpY2xlU3lzdGVtL1JlY3Rhbmd1bGFyRW1pdHRlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1Bvd2VydXBTeXN0ZW0vUG93ZXJ1cEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9Qb3dlcnVwU3lzdGVtL3Bvd2VydXAudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9TZWdtZW50LnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvU25ha2UudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9XZWJTb2NrZXRDbGllbnQvd2Vic29ja2V0LnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQWJzdHJhY3RWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQXJyYXlWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvRmxvYXQzMlZlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWMyRC5qcyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRyYXdBcmMsIGRyYXdBcnJvdywgZHJhd0RvdCB9IGZyb20gXCIuL0RyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBWZWMyRCBmcm9tICd2ZWN0b3IyZCc7XHJcbmltcG9ydCBTZWdtZW50IGZyb20gXCIuL1NlZ21lbnRcIjtcclxuaW1wb3J0IHsgZ2FtZUNhbnZhc0N0eCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNTZWdtZW50IGV4dGVuZHMgU2VnbWVudCB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBjZW50ZXI6IFZlYzJELlZlY3RvcjtcclxuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdGFydEFuZ2xlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZW5kQW5nbGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvdW50ZXJDbG9ja3dpc2U6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNDb2xsaWRhYmxlOiBib29sZWFuO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXI6IFZlYzJELlZlY3RvciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY291bnRlckNsb2Nrd2lzZTogYm9vbGVhbiwgaXNDb2xsaWRhYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLnN0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlO1xyXG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSBlbmRBbmdsZTtcclxuICAgICAgICB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlID0gY291bnRlckNsb2Nrd2lzZTtcclxuICAgICAgICB0aGlzLmlzQ29sbGlkYWJsZSA9IGlzQ29sbGlkYWJsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gY29udGV4dC5jYW52YXMud2lkdGggLyAyMDAwO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGNvbnRleHQuY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcblxyXG5cclxuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGlkYWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyh0aGlzLmNlbnRlci54ICogc2NhbGVYLCB0aGlzLmNlbnRlci55ICogc2NhbGVZLCB0aGlzLnJhZGl1cyAqIE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKSwgdGhpcy5zdGFydEFuZ2xlLCB0aGlzLmVuZEFuZ2xlLCB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0RlYnVnKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI2ZmMDBmZmZmJ1xyXG4gICAgICAgIGxldCB0YW5nZW50X2FuZ2xlID0gdGhpcy5fY291bnRlckNsb2Nrd2lzZSA/IC0gTWF0aC5QSSA6IE1hdGguUEk7XHJcblxyXG4gICAgICAgIHRhbmdlbnRfYW5nbGUgKz0gdGhpcy5lbmRBbmdsZTtcclxuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgZHJhd0RvdCh0aGlzLmNlbnRlci54LCB0aGlzLmNlbnRlci55LCA1LCAnIzAwMDAwMCcpO1xyXG4gICAgICAgIGRyYXdBcnJvdyhjb250ZXh0LCBuZXcgVmVjMkQuVmVjdG9yKHRoaXMuZW5kUG9pbnQueCwgdGhpcy5lbmRQb2ludC55KSwgbmV3IFZlYzJELlZlY3Rvcih0aGlzLmVuZFBvaW50LnggKyB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHRhbmdlbnRfYW5nbGUpLCB0aGlzLmVuZFBvaW50LnkgKyB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRhbmdlbnRfYW5nbGUpKSk7XHJcbiAgICAgICAgZHJhd0FyYyh0aGlzLmNlbnRlci54LCB0aGlzLmNlbnRlci55LCB0aGlzLnJhZGl1cywgMCwgMCwgZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW5kUG9pbnQoKTogVmVjMkQuVmVjdG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzJELlZlY3RvcihcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXIueCArIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGhpcy5lbmRBbmdsZSksXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyLnkgKyB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMuZW5kQW5nbGUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGVucGVuZGljdWxhckVuZEFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb3VudGVyQ2xvY2t3aXNlID8gdGhpcy5lbmRBbmdsZSAtIE1hdGguUEkgLyAyIDogdGhpcy5lbmRBbmdsZSArIE1hdGguUEkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwZW5wZW5kaWN1bGFyU3RhcnRBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ291bnRlckNsb2Nrd2lzZSA/IHRoaXMuc3RhcnRBbmdsZSAtIE1hdGguUEkgLyAyIDogdGhpcy5zdGFydEFuZ2xlICsgTWF0aC5QSSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb3VudGVyQ2xvY2t3aXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRpbnVpbmdTZWdtZW50KHRyYW5zZm9ybTogVmVjMkQuVmVjdG9yKTogU2VnbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcmNTZWdtZW50KHRoaXMuY2VudGVyLmNsb25lKCkuYWRkKHRyYW5zZm9ybSkgYXMgVmVjMkQuVmVjdG9yLCB0aGlzLnJhZGl1cywgdGhpcy5lbmRBbmdsZSwgdGhpcy5lbmRBbmdsZSwgdGhpcy5fY291bnRlckNsb2Nrd2lzZSwgdGhpcy5pc0NvbGxpZGFibGUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgeyBiYWNrZ3JvdW5kQ2FudmFzLCBiYWNrZ3JvdW5kQ2FudmFzQ3R4LCBncmlkU2l6ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3R3JpZCgpIHtcblxuICAgIGNvbnN0IHNjYWxlWCA9IGJhY2tncm91bmRDYW52YXNDdHguY2FudmFzLndpZHRoIC8gMjAwMDtcbiAgICBjb25zdCBzY2FsZVkgPSBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xuXG5cbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLCBiYWNrZ3JvdW5kQ2FudmFzLndpZHRoLCBiYWNrZ3JvdW5kQ2FudmFzLmhlaWdodCk7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMyknO1xuICAgIGJhY2tncm91bmRDYW52YXNDdHgubGluZVdpZHRoID0gMjtcbiAgICBmb3IgKGxldCB4ID0gZ3JpZFNpemUgKiBzY2FsZVg7IHggPCBiYWNrZ3JvdW5kQ2FudmFzLndpZHRoOyB4ICs9IGdyaWRTaXplICogc2NhbGVYKSB7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHgubW92ZVRvKHggLCAwKTtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5saW5lVG8oeCAsIGJhY2tncm91bmRDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgeSA9IGdyaWRTaXplICogc2NhbGVZOyB5IDwgYmFja2dyb3VuZENhbnZhcy5oZWlnaHQ7IHkgKz0gZ3JpZFNpemUgKiBzY2FsZVkpIHtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5tb3ZlVG8oMCwgeSk7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHgubGluZVRvKGJhY2tncm91bmRDYW52YXMud2lkdGgsIHkpO1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LnN0cm9rZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdEb3QoZG90WDogbnVtYmVyLCBkb3RZOiBudW1iZXIsIGRvdFNpemU6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguYmVnaW5QYXRoKCk7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5hcmMoXG4gICAgICAgIGRvdFgsXG4gICAgICAgIGRvdFksXG4gICAgICAgIGRvdFNpemUsXG4gICAgICAgIDAsXG4gICAgICAgIDIgKiBNYXRoLlBJLFxuICAgICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguZmlsbCgpO1xuXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5jbG9zZVBhdGgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdBcmMoZG90WDogbnVtYmVyLCBkb3RZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvdW50ZXJDbG9ja3dpc2U6IGJvb2xlYW4pIHtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5zdHJva2VTdHlsZSA9IFwiIzM0NjZhYVwiO1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguYmVnaW5QYXRoKCk7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5hcmMoZG90WCwgZG90WSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSwgY291bnRlckNsb2Nrd2lzZSk7XG5cbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5zdHJva2UoKTtcblxuICAgIGJhY2tncm91bmRDYW52YXNDdHguY2xvc2VQYXRoKCk7XG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3QXJyb3coY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGZyb206IFZlY3RvciwgdG86IFZlY3Rvcikge1xuICAgIGlmIChmcm9tLnggIT0gdG8ueCAmJiBmcm9tLnkgIT0gdG8ueSkge1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHRvLnkgLSBmcm9tLnksIHRvLnggLSBmcm9tLngpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IDEwO1xuICAgICAgICBsZXQgaGVhZExlbmd0aCA9IDEwO1xuICAgICAgICBsZXQgbmV3X3RvID0gbmV3IFZlY3Rvcih0by54LCB0by55KTtcbiAgICAgICAgLy8gVGhpcyBtYWtlcyBpdCBzbyB0aGUgZW5kIG9mIHRoZSBhcnJvdyBoZWFkIGlzIGxvY2F0ZWQgYXQgdG94LCB0b3ksIGRvbid0IGFzayB3aGVyZSAxLjE1IGNvbWVzIGZyb21cbiAgICAgICAgbmV3X3RvLnggLT0gTWF0aC5jb3MoYW5nbGUpICogKCh3aWR0aCAqIDEuMTUpKTtcbiAgICAgICAgbmV3X3RvLnkgLT0gTWF0aC5zaW4oYW5nbGUpICogKCh3aWR0aCAqIDEuMTUpKTtcblxuXG5cbiAgICAgICAgLy9zdGFydGluZyBwYXRoIG9mIHRoZSBhcnJvdyBmcm9tIHRoZSBzdGFydCBzcXVhcmUgdG8gdGhlIGVuZCBzcXVhcmUgYW5kIGRyYXdpbmcgdGhlIHN0cm9rZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpO1xuICAgICAgICBjdHgubGluZVRvKG5ld190by54LCBuZXdfdG8ueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2JiYmJiYlwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvL3N0YXJ0aW5nIGEgbmV3IHBhdGggZnJvbSB0aGUgaGVhZCBvZiB0aGUgYXJyb3cgdG8gb25lIG9mIHRoZSBzaWRlcyBvZiB0aGUgcG9pbnRcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKG5ld190by54LCBuZXdfdG8ueSk7XG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLnggLSBoZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNyksIG5ld190by55IC0gaGVhZExlbmd0aCAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDcpKTtcblxuICAgICAgICAvL3BhdGggZnJvbSB0aGUgc2lkZSBwb2ludCBvZiB0aGUgYXJyb3csIHRvIHRoZSBvdGhlciBzaWRlIHBvaW50XG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLnggLSBoZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNyksIG5ld190by55IC0gaGVhZExlbmd0aCAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDcpKTtcblxuICAgICAgICAvL3BhdGggZnJvbSB0aGUgc2lkZSBwb2ludCBiYWNrIHRvIHRoZSB0aXAgb2YgdGhlIGFycm93LCBhbmQgdGhlbiBhZ2FpbiB0byB0aGUgb3Bwb3NpdGUgc2lkZSBwb2ludFxuICAgICAgICBjdHgubGluZVRvKG5ld190by54LCBuZXdfdG8ueSk7XG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLnggLSBoZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNyksIG5ld190by55IC0gaGVhZExlbmd0aCAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDcpKTtcblxuICAgICAgICAvL2RyYXdzIHRoZSBwYXRocyBjcmVhdGVkIGFib3ZlXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2JiYmJiYlwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2JiYmJiYlwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxufSIsImltcG9ydCBTbmFrZSBmcm9tIFwiLi9TbmFrZVwiO1xyXG5pbXBvcnQgeyBzZW5kS2V5RXZlbnRUb1NlcnZlciB9IGZyb20gXCIuL1dlYlNvY2tldENsaWVudC93ZWJzb2NrZXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIERpcntcclxuICBMRUZULFxyXG4gIFJJR0hUXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBfa2V5TWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gIHByaXZhdGUgX3NuYWtlOiBTbmFrZTtcclxuICBwcml2YXRlIF9sZWZ0S2V5czogc3RyaW5nW107XHJcbiAgcHJpdmF0ZSBfcmlnaHRLZXlzOiBzdHJpbmdbXTtcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3Ioc25ha2U6IFNuYWtlLCBsZWZ0S2V5czogc3RyaW5nW10sIHJpZ2h0S2V5czogc3RyaW5nW10pIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLl9zbmFrZSA9IHNuYWtlO1xyXG4gICAgdGhpcy5fbGVmdEtleXMgPSBsZWZ0S2V5cy5tYXAoa2V5ID0+IGtleS50b1VwcGVyQ2FzZSgpKTtcclxuICAgIHRoaXMuX3JpZ2h0S2V5cyA9IHJpZ2h0S2V5cy5tYXAoa2V5ID0+IGtleS50b1VwcGVyQ2FzZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAvL2lmIHNuYWtlIGlzIGRlYWQsIGlnbm9yZSB0aGUga2V5IHByZXNzZXNcclxuICAgIGlmKCF0aGlzLl9zbmFrZS5pc0FsaXZlKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgLy9pZ25vcmUga2V5cyBub3QgYXNzaWduZWQgdG8gc2VsZiwgdGhpcyB3b3VsZCByZXN1bHQgaW4gdGhlIGtleW1hcCBoYXZpbmcgdW5uZWNlc3Nhcnkga2V5cyBhbmQgdHJpZ2dlcmluZyB0aGUgb25rZXlVcCBldmVudHNcclxuICAgIGlmKCF0aGlzLl9sZWZ0S2V5cy5pbmNsdWRlcyhrZXkpICYmICF0aGlzLl9yaWdodEtleXMuaW5jbHVkZXMoa2V5KSl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL3N3aXRjaCBvZmYgdGhlIGN1cnJlbnQgZG93biBrZXkgaWYgdGhlIG90aGVyIGRpcmVjdGlvbiBpcyBwcmVzc2VkXHJcbiAgICBpZiAodGhpcy5fbGVmdEtleXMuc29tZShsZWZ0S2V5ID0+IHRoaXMuX2tleU1hcFtsZWZ0S2V5XSkgJiYgdGhpcy5fcmlnaHRLZXlzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgdGhpcy5fbGVmdEtleXMuZm9yRWFjaChsZWZ0S2V5ID0+IHRoaXMuX2tleU1hcFtsZWZ0S2V5XSA9IGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHRLZXlzLnNvbWUocmlnaHRLZXkgPT4gdGhpcy5fa2V5TWFwW3JpZ2h0S2V5XSkgJiYgdGhpcy5fbGVmdEtleXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICB0aGlzLl9yaWdodEtleXMuZm9yRWFjaChyaWdodEtleSA9PiB0aGlzLl9rZXlNYXBbcmlnaHRLZXldID0gZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3JldHVybiBpZiB0aGUga2V5IGlzIGFscmFlZHkgaW4gdGhlIG1hcCwgcHJldmVudHMgYXV0b2NsaWNraW5nXHJcbiAgICBlbHNlIGlmICh0aGlzLl9rZXlNYXBba2V5XSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX2tleU1hcFtrZXldID0gdHJ1ZTtcclxuXHJcbiAgICBzZW5kS2V5RXZlbnRUb1NlcnZlcih0aGlzLl9yaWdodEtleXMuaW5jbHVkZXMoa2V5KSA/IERpci5SSUdIVCA6IERpci5MRUZULCB0cnVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAvL2lmIHNuYWtlIGlzIGRlYWQsIGlnbm9yZSB0aGUga2V5IHByZXNzZXNcclxuICAgIGlmKCF0aGlzLl9zbmFrZS5pc0FsaXZlKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgdGhlIGtleSBpcyBpbiB0aGUga2V5bWFwLCBpZiBub3QganVzdCBpZ25vcmUgaXRcclxuICAgIGlmICghdGhpcy5fa2V5TWFwW2tleV0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fa2V5TWFwW2tleV0gPSBmYWxzZTtcclxuXHJcbiAgICBzZW5kS2V5RXZlbnRUb1NlcnZlcih0aGlzLl9yaWdodEtleXMuaW5jbHVkZXMoa2V5KSA/IERpci5SSUdIVCA6IERpci5MRUZULCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCBTZWdtZW50IGZyb20gXCIuL1NlZ21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVTZWdtZW50IGV4dGVuZHMgU2VnbWVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXJ0UG9pbnQ6IFZlY3RvcjtcclxuICAgIHB1YmxpYyBlbmRQb2ludDogVmVjdG9yO1xyXG4gICAgcHVibGljIGVuZEFuZ2xlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNDb2xsaWRhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydDogVmVjdG9yLCBlbmQ6IFZlY3RvciwgaXNDb2xsaWRhYmxlOiBib29sZWFuLCBhbmdsZT86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmRQb2ludCA9IGVuZDtcclxuICAgICAgICB0aGlzLmlzQ29sbGlkYWJsZSA9IGlzQ29sbGlkYWJsZTtcclxuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gYW5nbGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gMjAwMDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG4gICAgICAgIC8vIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI2ZmMDBmZmZmJ1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsaWRhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHRoaXMuc3RhcnRQb2ludC54ICogc2NhbGVYLCB0aGlzLnN0YXJ0UG9pbnQueSAqIHNjYWxlWSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHRoaXMuZW5kUG9pbnQueCAqIHNjYWxlWCwgdGhpcy5lbmRQb2ludC55ICogc2NhbGVZKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHRoaXMuc3RhcnRQb2ludC54IC0gdGhpcy5lbmRQb2ludC54KSAqKiAyICsgKHRoaXMuc3RhcnRQb2ludC55IC0gdGhpcy5lbmRQb2ludC55KSAqKiAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29udGludWluZ1NlZ21lbnQodHJhbnNmb3JtOiBWZWN0b3IpOiBTZWdtZW50IHtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZEVuZHBvaW50ID0gdGhpcy5lbmRQb2ludC5jbG9uZSgpLmFkZCh0cmFuc2Zvcm0pIGFzIFZlY3RvcjtcclxuICAgICAgICByZXR1cm4gbmV3IExpbmVTZWdtZW50KFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1lZEVuZHBvaW50LFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1lZEVuZHBvaW50LFxyXG4gICAgICAgICAgICB0aGlzLmlzQ29sbGlkYWJsZSxcclxuICAgICAgICAgICAgdGhpcy5lbmRBbmdsZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgdXBkYXRlQ2FudmFzU2l6ZSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vTW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUsIFJvb20gfSBmcm9tIFwiLi4vTW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlRGF0YSwgTWVzc2FnZVBsYXllciwgTWVzc2FnZVJvb20gfSBmcm9tIFwiLi4vV2ViU29ja2V0Q2xpZW50L21lc3NhZ2VUeXBlc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb29tLCBqb2luUm9vbSwgc2VuZFN0YXJ0Q29tbWFuZCwgc2V0UGxheWVyRGF0YSB9IGZyb20gXCIuLi9XZWJTb2NrZXRDbGllbnQvd2Vic29ja2V0XCI7XHJcblxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50Um9vbTogUm9vbSB8IG51bGwgPSBudWxsO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRQbGF5ZXI6IFBsYXllciB8IG51bGwgPSBudWxsO1xyXG5cclxuY29uc3Qgcm9vbUNvZGVJbnB1dCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbUNvZGVJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG5jb25zdCB1c2VybmFtZUlucHV0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCk7XHJcbmNvbnN0IHJvb21CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam9pbkJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCByZWFkeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkeUJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBsb2dpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1kaXYnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3Qgcm9vbURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLWRpdicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBnYW1lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzLWNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBlbmRnYW1lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZGdhbWUtZGl2JykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXBpY2tlcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IHJvb21Vc2Vyc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS11c2Vycy1saXN0JykgYXMgSFRNTFVMaXN0RWxlbWVudDtcclxuY29uc3Qgcm9vbUNvZGVTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20tY29kZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5jb25zdCBwbGF5ZXJDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItY291bnQnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuY29uc3QgY29sb3JQaWNrZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcGlja2VyLWNvbnRhaW5lcicpO1xyXG5jb25zdCBzdGFydFByb2dyZXNzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXByb2dyZXNzLWJhcicpO1xyXG5jb25zdCBsYXN0V2lubmVyU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0LXdpbm5lcicpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuLy8gc3JjL2xvZ2luLnRzXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCdXR0b24oKSB7XHJcblxyXG4gICAgaWYgKHVzZXJuYW1lSW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHJvb21CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb29tQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvb21Db2RlSW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gNSkge1xyXG4gICAgICAgIHJvb21CdXR0b24udGV4dENvbnRlbnQgPSAnSk9JTiBST09NJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDUkVBVEUgUk9PTSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSb29tQWN0aW9uKCkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xyXG4gICAgaWYgKCF1c2VybmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBuZXcgUGxheWVyKHVzZXJuYW1lKTtcclxuXHJcbiAgICBpZiAocm9vbUJ1dHRvbi5pbm5lclRleHQgPT09ICdDUkVBVEUgUk9PTScpIHtcclxuICAgICAgICBjcmVhdGVSb29tKHVzZXJuYW1lSW5wdXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgam9pblJvb20ocm9vbUNvZGVJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpLCB1c2VybmFtZUlucHV0LnZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlYWR5U3RhdGUoKSB7XHJcblxyXG4gICAgY3VycmVudFBsYXllci5pc1JlYWR5ID0gIWN1cnJlbnRQbGF5ZXIuaXNSZWFkeTtcclxuICAgIHNldFBsYXllckRhdGEoY3VycmVudFBsYXllciwgY3VycmVudFJvb20uY29kZSk7XHJcbiAgICB1cGRhdGVSZWFkeUJ1dHRvbihjdXJyZW50UGxheWVyLmlzUmVhZHkpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUmVhZHlCdXR0b24oaXNSZWFkeTogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzUmVhZHkpIHtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtYnV0dG9uJyk7XHJcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JlZW4tYnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWQtYnV0dG9uJyk7XHJcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4tYnV0dG9uJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Um9vbVZpZXcoZGF0YTogSlNPTikge1xyXG4gICAgLy9zZXQgdGhlIGNsaWVudCBNb2RlbCBvZiB0aGUgcm9vbSB0byB0aGUgc2VydmVycyByZXNwb25zZVxyXG4gICAgbGV0IHJvb21JbmZvOiBNZXNzYWdlUm9vbSA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKVsncm9vbSddO1xyXG5cclxuICAgIGxldCBwbGF5ZXJzOiB7IFtrZXk6IHN0cmluZ106IFBsYXllciB9ID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhyb29tSW5mby5wbGF5ZXJzKS5mb3JFYWNoKHVzZXJuYW1lID0+IHtcclxuICAgICAgICBsZXQgcGxheWVyRGF0YSA9IHJvb21JbmZvLnBsYXllcnNbdXNlcm5hbWVdO1xyXG4gICAgICAgIHBsYXllcnNbdXNlcm5hbWVdID0gbmV3IFBsYXllcih1c2VybmFtZSwgcGxheWVyRGF0YS5pc1JlYWR5LCBwbGF5ZXJEYXRhLmNvbG9yKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjdXJyZW50Um9vbSA9IG5ldyBSb29tKHJvb21JbmZvLmNvZGUsXHJcbiAgICAgICAgbmV3IFBsYXllcihyb29tSW5mby5ob3N0LnVzZXJuYW1lLCByb29tSW5mby5ob3N0LmlzUmVhZHksIHJvb21JbmZvLmhvc3QuY29sb3IpLFxyXG4gICAgICAgIHBsYXllcnMsXHJcbiAgICAgICAgcm9vbUluZm8ubWF4U2l6ZSk7XHJcblxyXG4gICAgLy9zaG93IHN0YXJ0R2FtZUJ1dHRvbiBcclxuICAgIGlmIChjdXJyZW50UGxheWVyLnVzZXJuYW1lID09PSBjdXJyZW50Um9vbS5ob3N0LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXQgYSByYW5kb20gY29sb3IgZm9yIGEgcGxheWVyXHJcbiAgICBjb2xvclBpY2tlckRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyZW50UGxheWVyLmNvbG9yO1xyXG4gICAgY29sb3JQaWNrZXIudmFsdWUgPSBjdXJyZW50UGxheWVyLmNvbG9yO1xyXG4gICAgbGV0IGNvbG9yUGlja2VyTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbGFiZWwnKTtcclxuICAgIGNvbG9yUGlja2VyTGFiZWwuc3R5bGUuY29sb3IgPSBwaWNrVGV4dENvbG9yQmFzZWRPbkJnQ29sb3JBZHZhbmNlZChjb2xvclBpY2tlci52YWx1ZSwgJyNGRkZGRkYnLCAnIzAwMDAwMCcpO1xyXG5cclxuICAgIC8vc2hvdyB0aGUgbmV3IGVsZW1lbnRcclxuICAgIGxvZ2luRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgcm9vbURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZsZXgnKTtcclxuXHJcblxyXG5cclxuICAgIHJvb21Db2RlSW5wdXQudmFsdWUgPSBjdXJyZW50Um9vbS5jb2RlO1xyXG4gICAgcm9vbUNvZGVTcGFuLmlubmVySFRNTCA9IGN1cnJlbnRSb29tLmNvZGU7XHJcbiAgICBzZXRQbGF5ZXJEYXRhKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRSb29tLmNvZGUpO1xyXG4gICAgdXBkYXRlUm9vbUxpc3QoZGF0YSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm9vbUxpc3QoZGF0YTogSlNPTikge1xyXG4gICAgbGV0IHJvb21JbmZvOiBNZXNzYWdlUm9vbSA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKVsncm9vbSddO1xyXG5cclxuICAgIC8vIHVwZGF0aW5nIHRoZSBjdXJyZW50IHJvb20gcGxheWVycyBhbmQgaG9zdFxyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhyb29tSW5mby5wbGF5ZXJzKS5mb3JFYWNoKHVzZXJuYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSb29tLnBsYXllcnNbdXNlcm5hbWVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJvb20uYWRkUGxheWVyKG5ldyBQbGF5ZXIodXNlcm5hbWUsIGZhbHNlLCByb29tSW5mby5wbGF5ZXJzW3VzZXJuYW1lXS5jb2xvcikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJvb20ucGxheWVyc1t1c2VybmFtZV0uY29sb3IgPSByb29tSW5mby5wbGF5ZXJzW3VzZXJuYW1lXS5jb2xvcjtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSb29tLnBsYXllcnNbdXNlcm5hbWVdLmlzUmVhZHkgPSByb29tSW5mby5wbGF5ZXJzW3VzZXJuYW1lXS5pc1JlYWR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHBsYXllcnMgdGhhdCBhcmUgbm8gbG9uZ2VyIGluIHRoZSByb29tXHJcbiAgICBPYmplY3Qua2V5cyhjdXJyZW50Um9vbS5wbGF5ZXJzKS5mb3JFYWNoKHVzZXJuYW1lID0+IHtcclxuICAgICAgICBpZiAoIXJvb21JbmZvLnBsYXllcnMuaGFzT3duUHJvcGVydHkodXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb29tLnJlbW92ZVBsYXllcih1c2VybmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICBjdXJyZW50Um9vbS5ob3N0ID0gbmV3IFBsYXllcihyb29tSW5mby5ob3N0LnVzZXJuYW1lLCByb29tSW5mby5ob3N0LmlzUmVhZHksIHJvb21JbmZvLmhvc3QuY29sb3IpO1xyXG4gICAgY3VycmVudFJvb20ubWF4U2l6ZSA9IHJvb21JbmZvLm1heFNpemU7XHJcblxyXG5cclxuICAgIHBsYXllckNvdW50LmlubmVySFRNTCA9IGAke09iamVjdC5rZXlzKGN1cnJlbnRSb29tLnBsYXllcnMpLmxlbmd0aH0vJHtjdXJyZW50Um9vbS5tYXhTaXplfWA7XHJcbiAgICByb29tVXNlcnNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCgocGxheWVyOiB7IHVzZXJuYW1lOiBzdHJpbmcgfCBudW1iZXI7IGlzUmVhZHk6IGJvb2xlYW47IGNvbG9yOiBzdHJpbmc7IH0pID0+IHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICAgICAgcGxheWVySXRlbS50ZXh0Q29udGVudCA9IHBsYXllci51c2VybmFtZSArICcnO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyLnVzZXJuYW1lID09PSBjdXJyZW50Um9vbS5ob3N0LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHBsYXllckl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY3Jvd25cIiBzdHlsZT1cImNvbG9yOiAke3BsYXllci5jb2xvcn07XCI+PC9pPmApXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllckl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlXCIgc3R5bGU9XCJjb2xvcjogJHtwbGF5ZXIuY29sb3J9OyBtYXJnaW4tbGVmdDogNHB4XCI+PC9pPmApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxheWVyLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgcGxheWVySXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICcgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGVcIiBzdHlsZT1cImNvbG9yOiAjMzdjYjQ4O1wiPjwvaT4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXJJdGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJyA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZVwiIHN0eWxlPVwiY29sb3I6ICNjYjM3Mzc7XCI+PC9pPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm9vbVVzZXJzTGlzdC5hcHBlbmRDaGlsZChwbGF5ZXJJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2hvdyBzdGFydEdhbWVCdXR0b24gXHJcbiAgICBpZiAoY3VycmVudFBsYXllci51c2VybmFtZSA9PT0gY3VycmVudFJvb20uaG9zdC51c2VybmFtZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXJ0QnV0dG9uUHJvZ3Jlc3MoT2JqZWN0LnZhbHVlcyhjdXJyZW50Um9vbS5wbGF5ZXJzKS5maWx0ZXIocCA9PiBwLmlzUmVhZHkpLmxlbmd0aCwgY3VycmVudFJvb20ubWF4U2l6ZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdGFydEJ1dHRvblByb2dyZXNzKHJlYWR5UGxheWVyQ291bnQ6IG51bWJlciwgbWF4UGxheWVyQ291bnQ6IG51bWJlcikge1xyXG4gICAgaWYgKG1heFBsYXllckNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3RhcnRQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IE1hdGguZmxvb3IocmVhZHlQbGF5ZXJDb3VudCAvIG1heFBsYXllckNvdW50ICogMTAwKSArICclJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Vycm9yQW5pbWF0aW9uKHJlYXNvbjogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xyXG4gICAgcm9vbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWQtYnV0dG9uJyk7XHJcbiAgICByb29tQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3dpZ2dsZScpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtYnV0dG9uJyk7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd3aWdnbGUnKTtcclxuICAgIH0sIDYwMClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb2xvclBpY2tlcigpIHtcclxuICAgIGNvbG9yUGlja2VyRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yUGlja2VyLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyQ29sb3IoKSB7XHJcbiAgICBjdXJyZW50UGxheWVyLmNvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XHJcbiAgICBsZXQgY29sb3JQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1sYWJlbCcpO1xyXG4gICAgY29sb3JQaWNrZXJMYWJlbC5zdHlsZS5jb2xvciA9IHBpY2tUZXh0Q29sb3JCYXNlZE9uQmdDb2xvckFkdmFuY2VkKGNvbG9yUGlja2VyLnZhbHVlLCAnI0ZGRkZGRicsICcjMDAwMDAwJyk7XHJcbiAgICBzZXRQbGF5ZXJEYXRhKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRSb29tLmNvZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwaWNrVGV4dENvbG9yQmFzZWRPbkJnQ29sb3JBZHZhbmNlZChiZ0NvbG9yOiBzdHJpbmcsIGxpZ2h0Q29sb3I6IHN0cmluZywgZGFya0NvbG9yOiBzdHJpbmcpIHtcclxuICAgIHZhciBjb2xvciA9IChiZ0NvbG9yLmNoYXJBdCgwKSA9PT0gJyMnKSA/IGJnQ29sb3Iuc3Vic3RyaW5nKDEsIDcpIDogYmdDb2xvcjtcclxuICAgIHZhciByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDAsIDIpLCAxNik7IC8vIGhleFRvUlxyXG4gICAgdmFyIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgNCksIDE2KTsgLy8gaGV4VG9HXHJcbiAgICB2YXIgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZyg0LCA2KSwgMTYpOyAvLyBoZXhUb0JcclxuICAgIHZhciB1aWNvbG9ycyA9IFtyIC8gMjU1LCBnIC8gMjU1LCBiIC8gMjU1XTtcclxuICAgIHZhciBjID0gdWljb2xvcnMubWFwKChjb2wpID0+IHtcclxuICAgICAgICBpZiAoY29sIDw9IDAuMDM5MjgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbCAvIDEyLjkyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coKGNvbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgTCA9ICgwLjIxMjYgKiBjWzBdKSArICgwLjcxNTIgKiBjWzFdKSArICgwLjA3MjIgKiBjWzJdKTtcclxuICAgIHJldHVybiAoTCA+IDAuNCkgPyBkYXJrQ29sb3IgOiBsaWdodENvbG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcblxyXG4gICAgLy92ZXJpZnkgdGhhdCB0aGUgcGxheWVyIHNlbmRpbmcgdGhlIHN0YXJ0IHJlcXVlc3QgaXMgdGhlIGhvc3RcclxuICAgIGlmIChjdXJyZW50UGxheWVyLnVzZXJuYW1lICE9IGN1cnJlbnRSb29tLmhvc3QudXNlcm5hbWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFN0YXJ0Q29tbWFuZChjdXJyZW50Um9vbS5jb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29CYWNrVG9Mb2JieSgpIHtcclxuICAgIHN3aXRjaEdhbWVWaWV3KHt0eXBlOiAnR0FNRV9TVEFURScsc3RhdGU6IEdhbWVTdGF0ZS5JTl9MT0JCWX0pO1xyXG4gICAgY3VycmVudFJvb20ucmVzZXRSb29tRm9yTmV3R2FtZSgpO1xyXG4gICAgY3VycmVudFBsYXllci5zbmFrZSA9IG51bGw7XHJcbiAgICBjdXJyZW50UGxheWVyLmlzUmVhZHkgPSBmYWxzZTtcclxuICAgIHVwZGF0ZVJlYWR5QnV0dG9uKGN1cnJlbnRQbGF5ZXIuaXNSZWFkeSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hHYW1lVmlldyhkYXRhOiBHYW1lU3RhdGVEYXRhKSB7XHJcbiAgICBzd2l0Y2ggKGRhdGEuc3RhdGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgbG9naW5EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgcm9vbURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICByb29tRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZmxleCcpO1xyXG4gICAgICAgIGdhbWVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgZ2FtZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZsZXgnKTtcclxuICAgICAgICAvL3VwZGF0ZSB0aGUgZ2FtZSBjYW52YXMgdG8gZml0IHRoZSBzY3JlZW5cclxuICAgICAgICB1cGRhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgbG9naW5EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgbG9naW5EaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICAgICAgcm9vbURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZsZXgnKTtcclxuICAgICAgICBlbmRnYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgICAgIGVuZGdhbWVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgbGFzdFdpbm5lclNwYW4uaW5uZXJIVE1MID0gYCR7Y3VycmVudFJvb20ubGFzdFdpbm5lci51c2VybmFtZX1gO1xyXG4gICAgICAgICAgICBnYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICBnYW1lRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZmxleCcpO1xyXG4gICAgICAgICAgICBlbmRnYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZmxleCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVCdXR0b24oKTtcclxufTtcclxuXHJcbih3aW5kb3cgYXMgYW55KS51cGRhdGVCdXR0b24gPSB1cGRhdGVCdXR0b247XHJcbih3aW5kb3cgYXMgYW55KS5oYW5kbGVSb29tQWN0aW9uID0gaGFuZGxlUm9vbUFjdGlvbjtcclxuKHdpbmRvdyBhcyBhbnkpLmhhbmRsZVJlYWR5U3RhdGUgPSBoYW5kbGVSZWFkeVN0YXRlO1xyXG4od2luZG93IGFzIGFueSkudXBkYXRlQ29sb3JQaWNrZXIgPSB1cGRhdGVDb2xvclBpY2tlcjtcclxuKHdpbmRvdyBhcyBhbnkpLnVwZGF0ZVBsYXllckNvbG9yID0gdXBkYXRlUGxheWVyQ29sb3I7XHJcbih3aW5kb3cgYXMgYW55KS5zdGFydEdhbWUgPSBzdGFydEdhbWU7XHJcbih3aW5kb3cgYXMgYW55KS5nb0JhY2tUb0xvYmJ5ID0gZ29CYWNrVG9Mb2JieTsiLCJpbXBvcnQgU25ha2UgZnJvbSBcIi4uL1NuYWtlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICBwcml2YXRlIF91c2VybmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpc1JlYWR5OiBib29sZWFuO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBzbmFrZTogU25ha2UgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VybmFtZTogc3RyaW5nLCBpc1JlYWR5OiBib29sZWFuID0gZmFsc2UsIGNvbG9yPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgdGhpcy5pc1JlYWR5ID0gaXNSZWFkeTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvciB8fCBcIiMwMDAwMDBcIi5yZXBsYWNlKC8wL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuICh+fihNYXRoLnJhbmRvbSgpICogMTYpKS50b1N0cmluZygxNik7IH0pO1xyXG4gICAgdGhpcy5zbmFrZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgaXNSZWFkeTogdGhpcy5pc1JlYWR5LFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAvLyB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuc25ha2UgPSBudWxsO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdhbWVTdGF0ZSB7XHJcbiAgICBSVU5OSU5HLFxyXG4gICAgSU5fTE9CQlksXHJcbiAgICBGSU5JU0hFRFxyXG59XHJcbmV4cG9ydCBjbGFzcyBSb29tIHtcclxuICAgIHByaXZhdGUgX3BsYXllcnM6IHsgW2tleTogc3RyaW5nXTogUGxheWVyOyB9ID0ge307XHJcbiAgICBwcml2YXRlIF9tYXhTaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9nYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgX2hvc3Q6IFBsYXllcjtcclxuICAgIHByaXZhdGUgX2NvZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2xhc3RXaW5uZXI6IFBsYXllcjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoY29kZTogc3RyaW5nLCBob3N0OiBQbGF5ZXIsIHBsYXllcnM/OiB7IFtrZXk6IHN0cmluZ106IFBsYXllcjsgfSwgbWF4U2l6ZTogbnVtYmVyID0gNSkge1xyXG4gICAgICAgIHRoaXMuX2NvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMuX21heFNpemUgPSBtYXhTaXplO1xyXG5cclxuICAgICAgICBpZiAocGxheWVycykge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFBsYXllcihob3N0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX3BsYXllcnMpLmxlbmd0aCA+PSB0aGlzLl9tYXhTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXllcnNbcGxheWVyLnVzZXJuYW1lXSA9IHBsYXllcjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlUGxheWVyKHVzZXJuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wbGF5ZXJzW3VzZXJuYW1lXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlc2V0Um9vbUZvck5ld0dhbWUoKXtcclxuICAgICAgICAvL1RPRE8gZml4IHRoaXMgZ2FtZSBzdGF0ZSBidWxsc2hpdFxyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5JTl9MT0JCWTtcclxuXHJcbiAgICAgICAgLy9hbHNvIHJlc2V0IGFsbCB0aGUgcGxheWVyc1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5fcGxheWVycykuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXIucmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldCBob3N0KG5ld0hvc3Q6IFBsYXllcil7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX3BsYXllcnMpLnNvbWUodXNlcm5hbWUgPT4gdXNlcm5hbWUgPT09IG5ld0hvc3QudXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hvc3QgPSBuZXdIb3N0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllcnMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhvc3QoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9zdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNvZGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29kZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1heFNpemUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1heFNpemUobmV3TWF4U2l6ZTogbnVtYmVyKXtcclxuICAgICAgICBpZiAobmV3TWF4U2l6ZSA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLl9tYXhTaXplID0gbmV3TWF4U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsYXN0V2lubmVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RXaW5uZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsYXN0V2lubmVyKG5ld0xhc3RXaW5uZXI6IFBsYXllcil7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX3BsYXllcnMpLnNvbWUodXNlcm5hbWUgPT4gdXNlcm5hbWUgPT09IG5ld0xhc3RXaW5uZXIudXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RXaW5uZXIgPSBuZXdMYXN0V2lubmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCBQYXJ0aWNsZSwgeyBzaGFwZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcbmltcG9ydCB7IGdldEJpYXNlZFJhbmRvbURpcmVjdGlvbiwgZ2V0UG9zaXRpb25JbkNpcmNsZSwgZ2V0UmFuZG9tRGlyZWN0aW9uLCBoZXhUb1JnYiwgaGV4VG9SZ2JBIH0gZnJvbSAnLi9QYXJ0aWNsZVN5c3RlbVV0aWxzJztcclxuaW1wb3J0IEVtaXR0ZXIsIHsgRW1pdHRlck9wdGlvbnMgfSBmcm9tIFwiLi9FbWl0dGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY3VsYXJFbWl0dGVyIGV4dGVuZHMgRW1pdHRlcntcclxuICAgIHByaXZhdGUgX2VtaXR0ZXJSYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZW1pdHRlclJhZGl1czogbnVtYmVyLFxyXG4gICAgICAgIHBvc2l0aW9uOiBWZWN0b3IsXHJcbiAgICAgICAgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgICAgZW1pdHRlck9wdGlvbnM6IEVtaXR0ZXJPcHRpb25zXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBjYW52YXNDdHgsIGVtaXR0ZXJPcHRpb25zKTtcclxuICAgICAgICB0aGlzLl9lbWl0dGVyUmFkaXVzID0gZW1pdHRlclJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGljayhkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgLT0gZHQ7XHJcblxyXG4gICAgICAgIC8vZW1pdCBuZXcgcGFydGljbGVzIGlmIHRoZSBlbWl0dGVyIGlzIFwiYWxpdmVcIlxyXG4gICAgICAgIGlmICh0aGlzLl90aWNrcyAlIHRoaXMuX2VtaXRJbnRlcnZhbCA9PT0gMCAmJiB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9lbWl0QW1vdW50UGVyVGljazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLnBvc2l0aW9uLmNsb25lKCkuYWRkKGdldFBvc2l0aW9uSW5DaXJjbGUodGhpcy5fZW1pdHRlclJhZGl1cywgdGhpcy5fc3Bhd25QYXJ0aWNsZXNPbkVkZ2UpKSBhcyBWZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Qmlhc2VkUmFuZG9tRGlyZWN0aW9uKHRoaXMuZW1pdERpcmVjdGlvbiwgdGhpcy5fc3ByZWFkQW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlU2l6ZSAqIHNjYWxlWSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZVNoYXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgLi4uaGV4VG9SZ2JBKHRoaXMuX2NvbG9yKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlTWF4QWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvRmFkZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvRmFkZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFkZURpcmVjdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL21vdmUgYWxsIHRoZSBwYXJ0aWNsZXMgZm9yd2FyZCBpbiB0aW1lXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnRpY2soZHQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIHBhcnRpY2xlcyB0aGF0IGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZWlyIGxpZmVzcGFuXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMgPSB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUuYWdlID4gMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl90aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZHJhd0VtaXR0ZXJab25lID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGhleFRvUmdiQSh0aGlzLl9jb2xvcilcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIDIwMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54ICogc2NhbGVYLCB0aGlzLnBvc2l0aW9uLnkgKiBzY2FsZVkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbFN0eWxlID0gYHJnYmEoJHtjb2xvci5yfSwke2NvbG9yLmd9LCR7Y29sb3IuYn0sICR7TWF0aC5taW4oMC4yLCAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIC8gdGhpcy5fcGFydGljbGVNYXhBZ2UgLyA1KSl9KWA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmFyYyh0aGlzLnBvc2l0aW9uLnggKiBzY2FsZVgsIHRoaXMucG9zaXRpb24ueSAqIHNjYWxlWSwgdGhpcy5fZW1pdHRlclJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUuZHJhdygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGVtaXRUaW1lKG5ld0VtaXRUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyA9IG5ld0VtaXRUaW1lO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgUGFydGljbGUsIHsgc2hhcGUgfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbWl0dGVyT3B0aW9ucyB7XHJcbiAgICBlbWl0SW50ZXJ2YWw/OiBudW1iZXI7XHJcbiAgICBlbWl0QW1vdW50UGVyVGljaz86IG51bWJlcjtcclxuICAgIHBhcnRpY2xlU2l6ZT86IG51bWJlcjtcclxuICAgIHNwZWVkPzogbnVtYmVyO1xyXG4gICAgcGFydGljbGVTaGFwZT86IHNoYXBlO1xyXG4gICAgY29sb3I/OiBzdHJpbmc7XHJcbiAgICBkb0ZhZGVDb2xvcj86IGJvb2xlYW47XHJcbiAgICBkb0ZhZGVTaXplPzogYm9vbGVhbjtcclxuICAgIGZhZGVEaXJlY3Rpb24/OiAnbm9ybWFsJyB8ICdyZXZlcnNlJztcclxuICAgIHBhcnRpY2xlQWdlPzogbnVtYmVyO1xyXG4gICAgZW1pdFRpbWVNaWxsaXM/OiBudW1iZXI7XHJcbiAgICBkcmF3RW1pdHRlclpvbmU/OiBib29sZWFuO1xyXG4gICAgZW1pdERpcmVjdGlvbj86IFZlY3RvcjtcclxuICAgIHNwcmVhZEFuZ2xlPzogbnVtYmVyO1xyXG4gICAgc3Bhd25QYXJ0aWNsZXNPbkVkZ2U/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRW1pdHRlcntcclxuICAgIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yO1xyXG4gICAgcHVibGljIGVtaXREaXJlY3Rpb246IFZlY3RvcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2FsaXZlUGFydGljbGVzOiBQYXJ0aWNsZVtdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgX2VtaXRJbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9lbWl0QW1vdW50UGVyVGljazogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9wYXJ0aWNsZVNoYXBlOiBzaGFwZTtcclxuICAgIHByb3RlY3RlZCBfcGFydGljbGVTaXplOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX3NwZWVkOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbG9yOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgX2RvRmFkZUNvbG9yOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIF9mYWRlRGlyZWN0aW9uOiAnbm9ybWFsJyB8ICdyZXZlcnNlJztcclxuICAgIHByb3RlY3RlZCBfZG9GYWRlU2l6ZTogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfcGFydGljbGVNYXhBZ2U6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcm90ZWN0ZWQgX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX3NwcmVhZEFuZ2xlOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX3RpY2tzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIF9kcmF3RW1pdHRlclpvbmU6IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgX3NwYXduUGFydGljbGVzT25FZGdlOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHBvc2l0aW9uOiBWZWN0b3IsXHJcbiAgICAgICAgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbWl0SW50ZXJ2YWwgPSAyLFxyXG4gICAgICAgICAgICBlbWl0QW1vdW50UGVyVGljayA9IDUsXHJcbiAgICAgICAgICAgIHBhcnRpY2xlU2l6ZSA9IDEwLFxyXG4gICAgICAgICAgICBzcGVlZCA9IDIsXHJcbiAgICAgICAgICAgIHBhcnRpY2xlU2hhcGUgPSAnY2lyY2xlJyxcclxuICAgICAgICAgICAgY29sb3IgPSAnI2ZmZmZmZmZmJyxcclxuICAgICAgICAgICAgZG9GYWRlQ29sb3IgPSB0cnVlLFxyXG4gICAgICAgICAgICBkb0ZhZGVTaXplID0gdHJ1ZSxcclxuICAgICAgICAgICAgZmFkZURpcmVjdGlvbiA9ICdub3JtYWwnLFxyXG4gICAgICAgICAgICBwYXJ0aWNsZUFnZSA9IDUwLFxyXG4gICAgICAgICAgICBlbWl0VGltZU1pbGxpcyA9IDAsXHJcbiAgICAgICAgICAgIGRyYXdFbWl0dGVyWm9uZSA9IGZhbHNlLFxyXG4gICAgICAgICAgICBlbWl0RGlyZWN0aW9uID0gbmV3IFZlY3RvcigwLCAwKSxcclxuICAgICAgICAgICAgc3ByZWFkQW5nbGUgPSBNYXRoLlBJKjIsXHJcbiAgICAgICAgICAgIHNwYXduUGFydGljbGVzT25FZGdlID0gZmFsc2UsXHJcbiAgICAgICAgfTogRW1pdHRlck9wdGlvbnNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLl9jYW52YXNDdHggPSBjYW52YXNDdHg7XHJcbiAgICAgICAgdGhpcy5fZW1pdEludGVydmFsID0gZW1pdEludGVydmFsO1xyXG4gICAgICAgIHRoaXMuX2VtaXRBbW91bnRQZXJUaWNrID0gZW1pdEFtb3VudFBlclRpY2s7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVTaXplID0gcGFydGljbGVTaXplO1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVTaGFwZSA9IHBhcnRpY2xlU2hhcGU7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLl9kb0ZhZGVDb2xvciA9IGRvRmFkZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuX2RvRmFkZVNpemUgPSBkb0ZhZGVTaXplO1xyXG4gICAgICAgIHRoaXMuX2ZhZGVEaXJlY3Rpb24gPSBmYWRlRGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlTWF4QWdlID0gcGFydGljbGVBZ2U7XHJcbiAgICAgICAgdGhpcy5fc3ByZWFkQW5nbGUgPSBzcHJlYWRBbmdsZTtcclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyA9IGVtaXRUaW1lTWlsbGlzO1xyXG4gICAgICAgIHRoaXMuZW1pdERpcmVjdGlvbiA9IGVtaXREaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5fZHJhd0VtaXR0ZXJab25lID0gZHJhd0VtaXR0ZXJab25lO1xyXG4gICAgICAgIHRoaXMuX3NwYXduUGFydGljbGVzT25FZGdlID0gc3Bhd25QYXJ0aWNsZXNPbkVkZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IHRpY2soZHQ6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGRyYXcoKTogdm9pZDtcclxuXHJcbiAgICBzZXQgZW1pdFRpbWUobmV3RW1pdFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID0gbmV3RW1pdFRpbWU7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBnZXRSZ2JDb2xvciB9IGZyb20gJy4vUGFydGljbGVTeXN0ZW1VdGlscyc7XHJcbmV4cG9ydCB0eXBlIHNoYXBlID0gJ2NpcmNsZScgfCAnc3F1YXJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIHtcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBWZWN0b3I7XHJcbiAgICBwcml2YXRlIF92ZWxvY2l0eTogVmVjdG9yO1xyXG4gICAgcHJpdmF0ZSBfc2hhcGU6IHNoYXBlO1xyXG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3BlZWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvbG9yOiB7IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciB9O1xyXG4gICAgcHJpdmF0ZSBfZmFkZUNvbG9yOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZmFkZVNpemU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9mYWRlRGlyZWN0aW9uOiAnbm9ybWFsJyB8ICdyZXZlcnNlJztcclxuICAgIHByaXZhdGUgX2FnZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2NhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBfc2l6ZUZhZGVBbW91bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvbG9yRmFkZUFtb3VudDogbnVtYmVyO1xyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IsIHZlbG9jaXR5OiBWZWN0b3IsIHNpemU6IG51bWJlciwgc3BlZWQ6IG51bWJlciwgc2hhcGU6IHNoYXBlID0gJ2NpcmNsZScsIGNvbG9yOiB7IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciB9LCBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgYWdlOiBudW1iZXIsIGZhZGVDb2xvcj86IGJvb2xlYW4sIGZhZGVTaXplPzogYm9vbGVhbiwgZmFkZURpcmVjdGlvbj86ICdub3JtYWwnIHwgJ3JldmVyc2UnKSB7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMuX2FnZSA9IGFnZTtcclxuICAgICAgICB0aGlzLl9jb2xvckZhZGVBbW91bnQgPSBjb2xvci5hIC8gdGhpcy5fYWdlO1xyXG4gICAgICAgIHRoaXMuX3NpemVGYWRlQW1vdW50ID0gc2l6ZSAvIHRoaXMuX2FnZTtcclxuXHJcbiAgICAgICAgaWYgKGZhZGVEaXJlY3Rpb24gPT09ICdyZXZlcnNlJykge1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3IgPSB7IC4uLmdldFJnYkNvbG9yKGNvbG9yKSwgYTogMCB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLl9zaGFwZSA9IHNoYXBlO1xyXG5cclxuICAgICAgICB0aGlzLl9jYW52YXNDdHggPSBjYW52YXNDdHg7XHJcbiAgICAgICAgdGhpcy5fZmFkZUNvbG9yID0gZmFkZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuX2ZhZGVTaXplID0gZmFkZVNpemU7XHJcbiAgICAgICAgdGhpcy5fZmFkZURpcmVjdGlvbiA9IGZhZGVEaXJlY3Rpb247XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGljayhkdDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLmFkZCh0aGlzLl92ZWxvY2l0eS5jbG9uZSgpLm11bHRpcGx5QnlTY2FsYXIoZHQgKiB0aGlzLl9zcGVlZCkpO1xyXG4gICAgICAgIGlmICh0aGlzLl9mYWRlQ29sb3IpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZhZGVEaXJlY3Rpb24gPT09ICdub3JtYWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvci5hIC09IHRoaXMuX2NvbG9yRmFkZUFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yLmEgKz0gdGhpcy5fY29sb3JGYWRlQW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9mYWRlU2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZmFkZURpcmVjdGlvbiA9PT0gJ25vcm1hbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSAtPSB0aGlzLl9zaXplRmFkZUFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gdGhpcy5fc2l6ZUZhZGVBbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWdlLS07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyAyMDAwO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eC5tb3ZlVG8odGhpcy5fcG9zaXRpb24ueCAqIHNjYWxlWCwgdGhpcy5fcG9zaXRpb24ueSAqIHNjYWxlWSk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dGhpcy5fY29sb3Iucn0sJHt0aGlzLl9jb2xvci5nfSwgJHt0aGlzLl9jb2xvci5ifSwgJHt0aGlzLl9jb2xvci5hfSlgO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3NoYXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguYXJjKHRoaXMuX3Bvc2l0aW9uLnggKiBzY2FsZVgsIHRoaXMuX3Bvc2l0aW9uLnkgKiBzY2FsZVksIHRoaXMuX3NpemUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3F1YXJlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsUmVjdCgodGhpcy5fcG9zaXRpb24ueCAtIHRoaXMuX3NpemUpICogc2NhbGVYLCAodGhpcy5fcG9zaXRpb24ueSAtIHRoaXMuX3NpemUpICogc2NhbGVZLCB0aGlzLl9zaXplICogMiwgdGhpcy5fc2l6ZSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWdlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbURpcmVjdGlvbigpOiBWZWN0b3Ige1xyXG5cclxuICByZXR1cm4gKG5ldyBWZWN0b3IoTWF0aC5yYW5kb20oKSAqIDIgLSAxLCBNYXRoLnJhbmRvbSgpICogMiAtIDEpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qmlhc2VkUmFuZG9tRGlyZWN0aW9uKGRpcmVjdGlvbjogVmVjdG9yLCBzcHJlYWRBbmdsZTogbnVtYmVyKTogVmVjdG9yIHtcclxuICBjb25zdCBhbmdsZSA9IGdldEFuZ2xlKGRpcmVjdGlvbikgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBzcHJlYWRBbmdsZTtcclxuICByZXR1cm4gZnJvbUFuZ2xlKGFuZ2xlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uSW5DaXJjbGUocmFkaXVzOiBudW1iZXIsIG9uRWRnZTogYm9vbGVhbikge1xyXG4gIGxldCBwb2ludDtcclxuICBkbyB7XHJcbiAgICBwb2ludCA9IG5ldyBWZWN0b3IoTWF0aC5yYW5kb20oKSpyYWRpdXMqMiAtIHJhZGl1cywgTWF0aC5yYW5kb20oKSpyYWRpdXMqMiAtIHJhZGl1cylcclxuICB9IHdoaWxlIChwb2ludC54KioyICsgcG9pbnQueSoqMiA+IHJhZGl1cyoqMilcclxuXHJcbiAgaWYgKG9uRWRnZSl7XHJcbiAgICBwb2ludC5ub3JtYWxpc2UoKS5tdWxTKHJhZGl1cyk7XHJcbiAgfVxyXG4gIHJldHVybiBwb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uSW5SZWN0YW5nbGUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgKXtcclxuICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpICogd2lkdGgsIE1hdGgucmFuZG9tKCkgKiBoZWlnaHQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXg6IHN0cmluZykge1xyXG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICByZXR1cm4gcmVzdWx0ID8ge1xyXG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXHJcbiAgfSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYkEoaGV4OiBzdHJpbmcpIHtcclxuICBsZXQgYSA9IDA7XHJcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pPyQvaS5leGVjKGhleCk7XHJcbiAgaWYoIHR5cGVvZiByZXN1bHRbNF0gPT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgYSA9IDE7XHJcbiAgfWVsc2V7XHJcbiAgICBhID0gcGFyc2VJbnQocmVzdWx0WzRdLCAxNikvMjU1O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcclxuICAgIGE6IGFcclxuICB9IDogbnVsbDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEFuZ2xlKHZlY3RvcjogVmVjdG9yKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5hdGFuMih2ZWN0b3IueSwgdmVjdG9yLngpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQW5nbGUoYW5nbGU6IG51bWJlcik6IFZlY3RvciB7XHJcbiAgcmV0dXJuIG5ldyBWZWN0b3IoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmdiQ29sb3IoY29sb3I6IHtyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXJ9KSB7XHJcbiAgY29uc3QgeyByLCBnLCBiIH0gPSBjb2xvcjtcclxuICByZXR1cm4geyByLCBnLCBiIH07XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IFBhcnRpY2xlLCB7IHNoYXBlIH0gZnJvbSBcIi4vUGFydGljbGVcIjtcclxuaW1wb3J0IHsgZ2V0Qmlhc2VkUmFuZG9tRGlyZWN0aW9uLCBnZXRQb3NpdGlvbkluQ2lyY2xlLCBnZXRQb3NpdGlvbkluUmVjdGFuZ2xlLCBnZXRSYW5kb21EaXJlY3Rpb24sIGhleFRvUmdiLCBoZXhUb1JnYkEgfSBmcm9tICcuL1BhcnRpY2xlU3lzdGVtVXRpbHMnO1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFbWl0dGVyT3B0aW9ucyB9IGZyb20gXCIuL0VtaXR0ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGVFbWl0dGVyIGV4dGVuZHMgRW1pdHRlcntcclxuICAgIHByaXZhdGUgX3dpZHRoO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHBvc2l0aW9uOiBWZWN0b3IsXHJcbiAgICAgICAgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgICAgZW1pdHRlck9wdGlvbnM6IEVtaXR0ZXJPcHRpb25zXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBjYW52YXNDdHgsIGVtaXR0ZXJPcHRpb25zKTtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGljayhkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgLT0gZHQ7XHJcblxyXG4gICAgICAgIC8vZW1pdCBuZXcgcGFydGljbGVzIGlmIHRoZSBlbWl0dGVyIGlzIFwiYWxpdmVcIlxyXG4gICAgICAgIGlmICh0aGlzLl90aWNrcyAlIHRoaXMuX2VtaXRJbnRlcnZhbCA9PT0gMCAmJiB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9lbWl0QW1vdW50UGVyVGljazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLnBvc2l0aW9uLmNsb25lKCkuYWRkKGdldFBvc2l0aW9uSW5SZWN0YW5nbGUodGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCkuc3VidHJhY3QobmV3IFZlY3Rvcih0aGlzLl93aWR0aC8yLCB0aGlzLl9oZWlnaHQvMikpKSBhcyBWZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Qmlhc2VkUmFuZG9tRGlyZWN0aW9uKHRoaXMuZW1pdERpcmVjdGlvbiwgdGhpcy5fc3ByZWFkQW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlU2l6ZSAqIHNjYWxlWSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZVNoYXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgLi4uaGV4VG9SZ2JBKHRoaXMuX2NvbG9yKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlTWF4QWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvRmFkZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvRmFkZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFkZURpcmVjdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL21vdmUgYWxsIHRoZSBwYXJ0aWNsZXMgZm9yd2FyZCBpbiB0aW1lXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnRpY2soZHQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIHBhcnRpY2xlcyB0aGF0IGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZWlyIGxpZmVzcGFuXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMgPSB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUuYWdlID4gMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl90aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZHJhd0VtaXR0ZXJab25lID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyAyMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHgubW92ZVRvKCh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLl93aWR0aC8yKSAqIHNjYWxlWCwgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMuX2hlaWdodC8yKSAqIHNjYWxlWSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsU3R5bGUgPSBgcmdiYSgke2hleFRvUmdiKHRoaXMuX2NvbG9yKX0sICR7TWF0aC5taW4oMC4yLCAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIC8gdGhpcy5fcGFydGljbGVNYXhBZ2UgLyA1KSl9KWA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LnJlY3QodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fd2lkdGgvMiwgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5faGVpZ2h0LzIsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUuZHJhdygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGVtaXRUaW1lKG5ld0VtaXRUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyA9IG5ld0VtaXRUaW1lO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBiYWNrZ3JvdW5kQ2FudmFzLCBnYW1lQ2FudmFzLCBnYW1lQ2FudmFzQ3R4IH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCBSZWN0YW5ndWxhckVtaXR0ZXIgZnJvbSBcIi4uL1BhcnRpY2xlU3lzdGVtL1JlY3Rhbmd1bGFyRW1pdHRlclwiO1xyXG5pbXBvcnQgUG93ZXJ1cCwgeyBQb3dlcnVwVHlwZSB9IGZyb20gXCIuL3Bvd2VydXBcIjtcclxuaW1wb3J0IHsgUG93ZXJ1cEFjdGlvbiB9IGZyb20gXCIuLi9XZWJTb2NrZXRDbGllbnQvbWVzc2FnZVR5cGVzXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUNhbnZhc1NpemUgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IGRyYXdHcmlkIH0gZnJvbSBcIi4uL0RyYXdlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vTW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBjdXJyZW50UGxheWVyIH0gZnJvbSBcIi4uL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3dlcnVwSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfcG93ZXJ1cHM6IHsgW2tleTogbnVtYmVyXTogUG93ZXJ1cCB9ID0ge307XHJcbiAgcHJpdmF0ZSBfd2FsbEVtaXR0ZXJzOiBSZWN0YW5ndWxhckVtaXR0ZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3BvcnRhbFdhbGxzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY2FtZXJhTG9jayA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2dhbWVDYW52YXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiZ2FtZS1jYW52YXMtY29udGFpbmVyXCJcclxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplV2FsbEVtaXR0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVXYWxsRW1pdHRlcnMoKSB7XHJcbiAgICBsZXQgc2l6ZXMgPSBbXHJcbiAgICAgIG5ldyBWZWN0b3IoMjAwMCwgNTApLFxyXG4gICAgICBuZXcgVmVjdG9yKDUwLCAyMDAwKSxcclxuICAgICAgbmV3IFZlY3RvcigyMDAwLCA1MCksXHJcbiAgICAgIG5ldyBWZWN0b3IoNTAsIDIwMDApLFxyXG4gICAgXTtcclxuICAgIGxldCBkaXJlY3Rpb25zID0gW1xyXG4gICAgICBuZXcgVmVjdG9yKDAsIC0xKSxcclxuICAgICAgbmV3IFZlY3RvcigtMSwgMCksXHJcbiAgICAgIG5ldyBWZWN0b3IoMCwgMSksXHJcbiAgICAgIG5ldyBWZWN0b3IoMSwgMCksXHJcbiAgICBdO1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IFZlY3RvcigxMDAwLCA1MCksXHJcbiAgICAgIG5ldyBWZWN0b3IoNTAsIDEwMDApLFxyXG4gICAgICBuZXcgVmVjdG9yKDEwMDAsIDE5NTApLFxyXG4gICAgICBuZXcgVmVjdG9yKDE5NTAsIDEwMDApLFxyXG4gICAgXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX3dhbGxFbWl0dGVycy5wdXNoKFxyXG4gICAgICAgIG5ldyBSZWN0YW5ndWxhckVtaXR0ZXIoXHJcbiAgICAgICAgICBzaXplc1tpXS54LFxyXG4gICAgICAgICAgc2l6ZXNbaV0ueSxcclxuICAgICAgICAgIHBvc2l0aW9uc1tpXSxcclxuICAgICAgICAgIGdhbWVDYW52YXNDdHgsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlU2hhcGU6IFwic3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1OWVlZWJmZlwiLFxyXG4gICAgICAgICAgICBlbWl0VGltZU1pbGxpczogMCxcclxuICAgICAgICAgICAgZW1pdERpcmVjdGlvbjogZGlyZWN0aW9uc1tpXSxcclxuICAgICAgICAgICAgc3ByZWFkQW5nbGU6IE1hdGguUEkgLyA2LFxyXG4gICAgICAgICAgICBzcGVlZDogMC44LFxyXG4gICAgICAgICAgICBwYXJ0aWNsZVNpemU6IDgsXHJcbiAgICAgICAgICAgIHBhcnRpY2xlQWdlOiAxMDAsXHJcbiAgICAgICAgICAgIGVtaXRJbnRlcnZhbDogMSxcclxuICAgICAgICAgICAgZW1pdEFtb3VudFBlclRpY2s6IDQsXHJcbiAgICAgICAgICAgIGZhZGVEaXJlY3Rpb246IFwicmV2ZXJzZVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRQb3dlcnVwKHBvd2VydXA6IFBvd2VydXApIHtcclxuICAgIHRoaXMuX3Bvd2VydXBzW3Bvd2VydXAuaWRdID0gcG93ZXJ1cDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQb3dlcnVwKHBvd2VydXA6IFBvd2VydXApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9wb3dlcnVwc1twb3dlcnVwLmlkXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBseVBvd2VydXAocG93ZXJ1cDogUG93ZXJ1cCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgIHN3aXRjaCAocG93ZXJ1cC50eXBlKSB7XHJcbiAgICAgIGNhc2UgUG93ZXJ1cFR5cGUuUG9ydGFsV2FsbHM6XHJcbiAgICAgICAgdGhpcy5mbGlwV2FsbFN0YXRlKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mbGlwV2FsbFN0YXRlKCk7XHJcbiAgICAgICAgfSwgcG93ZXJ1cC5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFBvd2VydXBUeXBlLkNhbWVyYUxvY2tUb1BsYXllcjpcclxuICAgICAgICBpZihwbGF5ZXIudXNlcm5hbWUgPT09IGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUpe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUxvY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAvL2luY3JlYXNlIHRoZSBjYW52YXMgcmVzb2x1dGlvbiBpbiBvcmRlciB0byBkZWNyZWFzZSB0aGUgYmx1clxyXG4gICAgICAgIGdhbWVDYW52YXMud2lkdGggPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogMjtcclxuICAgICAgICBnYW1lQ2FudmFzLmhlaWdodCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzLndpZHRoID0gYmFja2dyb3VuZENhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIDI7XHJcbiAgICAgICAgYmFja2dyb3VuZENhbnZhcy5oZWlnaHQgPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIDI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXNjcmVlbi1ib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICBkcmF3R3JpZCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fY2FtZXJhTG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzLWNvbnRhaW5lcicpLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgxKSByb3RhdGUoMHJhZCkgdHJhbnNsYXRlKDBweCwgMHB4KWA7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1zY3JlZW4tYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgdXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9LCBwb3dlcnVwLmR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlUG93ZXJ1cChwb3dlcnVwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVab25lcyh0eXBlOiBQb3dlcnVwVHlwZSwgYW1vdW50OiBudW1iZXIpe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhdygpIHtcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5fcG93ZXJ1cHMpLmZvckVhY2goKHBvd2VydXApID0+IHtcclxuICAgICAgcG93ZXJ1cC5kcmF3KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3dhbGxFbWl0dGVycy5mb3JFYWNoKChlbWl0dGVyKSA9PiB7XHJcbiAgICAgIGVtaXR0ZXIudGljaygxKTtcclxuICAgICAgZW1pdHRlci5kcmF3KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmxpcFdhbGxTdGF0ZSgpIHtcclxuICAgIHRoaXMuX3BvcnRhbFdhbGxzID0gIXRoaXMuX3BvcnRhbFdhbGxzO1xyXG4gICAgdGhpcy5fd2FsbEVtaXR0ZXJzLmZvckVhY2goXHJcbiAgICAgIChlbWl0dGVyKSA9PiAoZW1pdHRlci5lbWl0VGltZSA9IHRoaXMuX3BvcnRhbFdhbGxzID8gSW5maW5pdHkgOiAwKVxyXG4gICAgKTtcclxuICAgIHRoaXMuX2dhbWVDYW52YXNEaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLl9wb3J0YWxXYWxsc1xyXG4gICAgICA/IFwiIzM0YzZkY1wiXHJcbiAgICAgIDogXCIjNTU1NTU1XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNhbWVyYUxvY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FtZXJhTG9jaztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCBDaXJjdWxhckVtaXR0ZXIgZnJvbSBcIi4uL1BhcnRpY2xlU3lzdGVtL0NpcmN1bGFyRW1pdHRlclwiO1xyXG5pbXBvcnQgeyBoZXhUb1JnYiB9IGZyb20gXCIuLi9QYXJ0aWNsZVN5c3RlbS9QYXJ0aWNsZVN5c3RlbVV0aWxzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VQb3dlcnVwIH0gZnJvbSBcIi4uL1dlYlNvY2tldENsaWVudC9tZXNzYWdlVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvd2VydXBUeXBlIHtcclxuICBTcGVlZFVwLFxyXG4gIFNwZWVkRG93bixcclxuICBCb21iLFxyXG4gIEZsaXBCdXR0b25zLFxyXG4gIEludmlzaWJpbGl0eSxcclxuICBQb3J0YWxXYWxscyxcclxuICBDYW1lcmFMb2NrVG9QbGF5ZXIsXHJcbn1cclxuXHJcbmNvbnN0IFNWR19QQVRIUzogeyBba2V5IGluIFBvd2VydXBUeXBlXTogc3RyaW5nIH0gPSB7XHJcbiAgW1Bvd2VydXBUeXBlLlNwZWVkVXBdOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy9zcGVlZHVwLnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5TcGVlZERvd25dOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy9zcGVlZGRvd24uc3ZnXCIsXHJcbiAgW1Bvd2VydXBUeXBlLkJvbWJdOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy9ib21iLnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5GbGlwQnV0dG9uc106IFwiLi4vYXNzZXRzL3Bvd2VydXBzL2ZsaXBidXR0b25zLnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5JbnZpc2liaWxpdHldOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy9pbnZpc2liaWxpdHkuc3ZnXCIsXHJcbiAgW1Bvd2VydXBUeXBlLlBvcnRhbFdhbGxzXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvcG9ydGFsd2FsbHMuc3ZnXCIsXHJcbiAgW1Bvd2VydXBUeXBlLkNhbWVyYUxvY2tUb1BsYXllcl06IFwiLi4vYXNzZXRzL3Bvd2VydXBzL3RlbXAuc3ZnXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3dlcnVwIHtcclxuICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBWZWN0b3I7XHJcbiAgcHJpdmF0ZSBfY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuICBwcml2YXRlIF9yYWRpdXM6IG51bWJlciA9IDMwO1xyXG4gIHByaXZhdGUgX3R5cGU6IFBvd2VydXBUeXBlO1xyXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIF9lbWl0dGVyOiBDaXJjdWxhckVtaXR0ZXI7XHJcbiAgcHJpdmF0ZSBfZHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgcG9zaXRpb246IFZlY3RvcixcclxuICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgY29sb3I6IHN0cmluZyxcclxuICAgIHR5cGU6IFBvd2VydXBUeXBlLFxyXG4gICAgZHVyYXRpb246IG51bWJlclxyXG4gICkge1xyXG4gICAgdGhpcy5faWQgPSBpZDtcclxuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLl9jYW52YXNDdHggPSBjYW52YXNDdHg7XHJcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgdGhpcy5faW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLl9pbWcuc3JjID0gU1ZHX1BBVEhTW3RoaXMuX3R5cGVdO1xyXG4gICAgdGhpcy5fZW1pdHRlciA9IG5ldyBDaXJjdWxhckVtaXR0ZXIoXHJcbiAgICAgIHRoaXMuX3JhZGl1cyAqIDAuNixcclxuICAgICAgdGhpcy5fcG9zaXRpb24sXHJcbiAgICAgIHRoaXMuX2NhbnZhc0N0eCxcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiB0aGlzLl9jb2xvcixcclxuICAgICAgICBwYXJ0aWNsZVNpemU6IHRoaXMuX3JhZGl1cyAvIDIuODUsXHJcbiAgICAgICAgcGFydGljbGVBZ2U6IDYwLFxyXG4gICAgICAgIHNwZWVkOiB0aGlzLl9yYWRpdXMgLyAyMCxcclxuICAgICAgICBlbWl0QW1vdW50UGVyVGljazogMyxcclxuICAgICAgICBzcGF3blBhcnRpY2xlc09uRWRnZTogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgdGhpcy5fZW1pdHRlci50aWNrKDAuNSk7XHJcbiAgICB0aGlzLl9lbWl0dGVyLmRyYXcoKTtcclxuXHJcbiAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gMjAwMDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuXHJcbiAgICB0aGlzLl9jYW52YXNDdHgubW92ZVRvKFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi54ICogc2NhbGVYLFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi55ICogc2NhbGVZXHJcbiAgICApO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxTdHlsZSA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmFyYyhcclxuICAgICAgdGhpcy5fcG9zaXRpb24ueCAqIHNjYWxlWCxcclxuICAgICAgdGhpcy5fcG9zaXRpb24ueSAqIHNjYWxlWSxcclxuICAgICAgdGhpcy5fcmFkaXVzICogc2NhbGVYLFxyXG4gICAgICAwLFxyXG4gICAgICAyICogTWF0aC5QSVxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsKCk7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgdGhpcy5kcmF3U1ZHKCk7XHJcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXRUaW1lID0gSW5maW5pdHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdTVkcoKSB7XHJcbiAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gMjAwMDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuICAgIC8vIHRoaXMuX2NhbnZhc0N0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcclxuICAgIGNvbnN0IGltYWdlU2NhbGVGYWN0b3IgPSAwLjY7XHJcblxyXG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLl9pbWcud2lkdGggLyB0aGlzLl9pbWcuaGVpZ2h0O1xyXG5cclxuICAgIC8vIERldGVybWluZSB0aGUgc2NhbGVkIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlIGFzcGVjdCByYXRpb1xyXG4gICAgbGV0IGRyYXdXaWR0aCA9IHRoaXMuX3JhZGl1cyAqIDIgKiBpbWFnZVNjYWxlRmFjdG9yICogc2NhbGVYO1xyXG4gICAgbGV0IGRyYXdIZWlnaHQgPSAodGhpcy5fcmFkaXVzICogMiAqIGltYWdlU2NhbGVGYWN0b3IgKiBzY2FsZVgpIC8gYXNwZWN0UmF0aW87XHJcblxyXG4gICAgLy8gRW5zdXJlIHRoZSBpbWFnZSBmaXRzIHdpdGhpbiB0aGUgZ2l2ZW4gcmFkaXVzXHJcbiAgICBpZiAoZHJhd0hlaWdodCA+IHRoaXMuX3JhZGl1cyAqIDIgKiBpbWFnZVNjYWxlRmFjdG9yICogc2NhbGVYKSB7XHJcbiAgICAgIGRyYXdIZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyICogaW1hZ2VTY2FsZUZhY3RvciAqIHNjYWxlWDtcclxuICAgICAgZHJhd1dpZHRoID0gZHJhd0hlaWdodCAqIGFzcGVjdFJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuX2ltZyxcclxuICAgICAgdGhpcy5fcG9zaXRpb24ueCAqIHNjYWxlWCAtIGRyYXdXaWR0aCAvIDIsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgKiBzY2FsZVkgLSBkcmF3SGVpZ2h0IC8gMixcclxuICAgICAgZHJhd1dpZHRoLFxyXG4gICAgICBkcmF3SGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwb3NpdGlvbigpOiBWZWN0b3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByYWRpdXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogUG93ZXJ1cFR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHBvc2l0aW9uOiB7IHg6IHRoaXMucG9zaXRpb24ueCwgeTogdGhpcy5wb3NpdGlvbi55IH0sXHJcbiAgICAgIGNvbG9yOiB0aGlzLl9jb2xvcixcclxuICAgICAgdHlwZTogdGhpcy5fdHlwZSxcclxuICAgICAgcmFkaXVzOiB0aGlzLl9yYWRpdXMsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLl9kdXJhdGlvblxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU1lc3NhZ2VQb3dlcnVwKFxyXG4gICAganNvbjogTWVzc2FnZVBvd2VydXAsXHJcbiAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxyXG4gICk6IFBvd2VydXAge1xyXG4gICAgcmV0dXJuIG5ldyBQb3dlcnVwKFxyXG4gICAgICBqc29uLnBvd2VydXAuaWQsXHJcbiAgICAgIG5ldyBWZWN0b3IoanNvbi5wb3dlcnVwLnBvc2l0aW9uLngsIGpzb24ucG93ZXJ1cC5wb3NpdGlvbi55KSxcclxuICAgICAgY2FudmFzQ3R4LFxyXG4gICAgICBqc29uLnBvd2VydXAuY29sb3IsXHJcbiAgICAgIGpzb24ucG93ZXJ1cC50eXBlLFxyXG4gICAgICBqc29uLnBvd2VydXAuZHVyYXRpb25cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTZWdtZW50IHtcbiAgICBhYnN0cmFjdCBpc0NvbGxpZGFibGU6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcpOiB2b2lkO1xuICAgIGFic3RyYWN0IGdldCBlbmRBbmdsZSgpOiBudW1iZXI7XG4gICAgYWJzdHJhY3QgZ2V0IGVuZFBvaW50KCk6IFZlY3RvcjtcbiAgICBhYnN0cmFjdCBnZXRDb250aW51aW5nU2VnbWVudCh0cmFuc2Zvcm06IFZlY3Rvcik6IFNlZ21lbnQ7XG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgQXJjU2VnbWVudCBmcm9tIFwiLi9BcmNTZWdtZW50XCI7XG5pbXBvcnQgTGluZVNlZ21lbnQgZnJvbSBcIi4vTGluZVNlZ21lbnRcIjtcbmltcG9ydCBTZWdtZW50IGZyb20gXCIuL1NlZ21lbnRcIjtcbmltcG9ydCBDaXJjdWxhckVtaXR0ZXIgZnJvbSBcIi4vUGFydGljbGVTeXN0ZW0vQ2lyY3VsYXJFbWl0dGVyXCI7XG5pbXBvcnQgeyBoZXhUb1JnYiB9IGZyb20gXCIuL1BhcnRpY2xlU3lzdGVtL1BhcnRpY2xlU3lzdGVtVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2Uge1xuICAgIHB1YmxpYyBzZWdtZW50czogU2VnbWVudFtdID0gW107XG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHR1cm5SYWRpdXM6IG51bWJlciA9IDYwO1xuICAgIHByaXZhdGUgX2VtaXR0ZXI6IENpcmN1bGFyRW1pdHRlciB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgX2NhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihzdGFydFBvczogTGluZVNlZ21lbnQsIGNvbG9yOiBzdHJpbmcsIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRoaXMuYWRkU2VnbWVudChzdGFydFBvcyk7XG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eCA9IGNhbnZhc0N0eDtcbiAgICAgICAgdGhpcy5fZW1pdHRlciA9IG5ldyBDaXJjdWxhckVtaXR0ZXIoMCwgdGhpcy5oZWFkLmVuZFBvaW50LCB0aGlzLl9jYW52YXNDdHgsIHtlbWl0SW50ZXJ2YWw6IDIsXG4gICAgICAgICAgICBlbWl0QW1vdW50UGVyVGljazogMyxcbiAgICAgICAgICAgIHBhcnRpY2xlU2l6ZTogNyxcbiAgICAgICAgICAgIHNwZWVkOiA0LFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuX2NvbG9yLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBhZGRTZWdtZW50KHNlZ21lbnQ6IFNlZ21lbnQpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgIH1cblxuICAgIGdldCBoZWFkKCk6IFNlZ21lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5zbGljZSgtMSkucG9wKCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIDIwMDA7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcblxuXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eC5saW5lV2lkdGggPSAxMiAqIE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgLy9UT0RPIGZpeCB0aGlzIHRvIGJlIGEgc2luZ2xlIHBhdGhcblxuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZWdtZW50LmRyYXcodGhpcy5fY2FudmFzQ3R4LCB0aGlzLl9jb2xvcik7XG5cbiAgICAgICAgICAgIC8vZHJhdyBhIGRvdCBhdCB0aGUgaGVhZCwgdGhpcyBpcyB1c2VmdWwgaWYgdGhlIHNlZ21lbnQgaXMgaW52aXNpYmxlXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFkID09PSBzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5hcmMoc2VnbWVudC5lbmRQb2ludC54ICogc2NhbGVYLCBzZWdtZW50LmVuZFBvaW50LnkgKiBzY2FsZVksIDAuNSAqIE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxua2lsbCgpIHtcbiAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9lbWl0dGVyLnBvc2l0aW9uID0gdGhpcy5oZWFkLmVuZFBvaW50XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0VGltZSA9IDEwO1xufVxuXG51cGRhdGVFbWl0dGVyKGR0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fZW1pdHRlcikge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLnRpY2soZHQpO1xuICAgICAgICB0aGlzLl9lbWl0dGVyLmRyYXcoKTtcbiAgICB9XG59XG4gICAgXG59IiwiaW1wb3J0IHsgdXBkYXRlR2FtZVN0YXRlIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IERpciB9IGZyb20gXCIuLi9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgY3VycmVudFBsYXllciwgY3VycmVudFJvb20sIHNob3dFcnJvckFuaW1hdGlvbiwgc2hvd1Jvb21WaWV3LCBzd2l0Y2hHYW1lVmlldywgdXBkYXRlUm9vbUxpc3QgfSBmcm9tIFwiLi4vTWVudU1hbmFnZXIvbG9naW5cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL01vZGVscy9QbGF5ZXJcIjtcclxuXHJcbmxldCBzb2NrZXQ6IFdlYlNvY2tldDtcclxuXHJcbmZ1bmN0aW9uIGluaXRXZWJTb2NrZXQoKSB7XHJcbiAgICAvLyBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfTozMDAwYCk7XHJcbiAgICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3c3M6Ly9zbmFrZWdhbWUtc2VydmVyLm1heGlvLnNpdGVgKTtcclxuICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBjb25uZWN0aW9uIGVzdGFibGlzaGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWVzc2FnZSBmcm9tIHNlcnZlcjonLCBkYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdKT0lORURfUk9PTSc6XHJcbiAgICAgICAgICAgICAgICBzaG93Um9vbVZpZXcoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnSk9JTl9GQUlMJzpcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvckFuaW1hdGlvbihkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUk9PTV9EQVRBJzpcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVJvb21MaXN0KGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dBTUVfU1RBVEUnOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoR2FtZVZpZXcoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnR0FNRVBMQVlfREFUQSc6XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVHYW1lU3RhdGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnRVJST1InOlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoYEVycm9yOiAke2RhdGEubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBjbG9zZWQnKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNvY2tldC5vbmVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGVycm9yOicsIGVycm9yKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb29tKHVzZXJuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnQ1JFQVRFX1JPT00nLCB1c2VybmFtZTogdXNlcm5hbWUgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gam9pblJvb20ocm9vbUNvZGU6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdKT0lOX1JPT00nLCByb29tQ29kZTogcm9vbUNvZGUsIHVzZXJuYW1lOiB1c2VybmFtZSB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQbGF5ZXJEYXRhKHBsYXllcjogUGxheWVyLCByb29tQ29kZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ1BMQVlFUl9EQVRBJywgcGxheWVyOiBwbGF5ZXIsIHJvb21Db2RlOiByb29tQ29kZX0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRLZXlFdmVudFRvU2VydmVyKGtleTogRGlyLCBwcmVzc2VkOiBib29sZWFuKXtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnS0VZX0VWRU5UJywgcm9vbUNvZGU6IGN1cnJlbnRSb29tLmNvZGUsIHVzZXJuYW1lOiBjdXJyZW50UGxheWVyLnVzZXJuYW1lLCBrZXk6IGtleSwgcHJlc3NlZDogcHJlc3NlZCB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kU3RhcnRDb21tYW5kKHJvb21Db2RlOiBzdHJpbmcpIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnQkVHSU5fR0FNRScsIHJvb21Db2RlOiByb29tQ29kZX0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuaW5pdFdlYlNvY2tldCgpO1xyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbmltcG9ydCBBcmNTZWdtZW50IGZyb20gXCIuL0FyY1NlZ21lbnRcIjtcbmltcG9ydCB7IGRyYXdHcmlkIH0gZnJvbSBcIi4vRHJhd2VyXCI7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gXCIuL0lucHV0TWFuYWdlclwiO1xuaW1wb3J0IExpbmVTZWdtZW50IGZyb20gXCIuL0xpbmVTZWdtZW50XCI7XG5pbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcbmltcG9ydCBDaXJjdWxhckVtaXR0ZXIgZnJvbSBcIi4vUGFydGljbGVTeXN0ZW0vQ2lyY3VsYXJFbWl0dGVyXCI7XG5pbXBvcnQge1xuICBNZXNzYWdlR2FtZXBsYXksXG4gIFBvd2VydXBBY3Rpb24sXG4gIG1lc3NhZ2VBcmNTZWdtZW50LFxuICBtZXNzYWdlTGluZVNlZ21lbnQsXG59IGZyb20gXCIuL1dlYlNvY2tldENsaWVudC9tZXNzYWdlVHlwZXNcIjtcbmltcG9ydCB7IGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRSb29tIH0gZnJvbSBcIi4vTWVudU1hbmFnZXIvbG9naW5cIjtcbmltcG9ydCBQb3dlcnVwSGFuZGxlciBmcm9tIFwiLi9Qb3dlcnVwU3lzdGVtL1Bvd2VydXBIYW5kbGVyXCI7XG5pbXBvcnQgUG93ZXJ1cCBmcm9tIFwiLi9Qb3dlcnVwU3lzdGVtL3Bvd2VydXBcIjtcbmNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJnYW1lLWNhbnZhcy1jb250YWluZXJcIlxuKSBhcyBIVE1MRGl2RWxlbWVudDtcbnZhciBmcHNDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZwc0NvdW50ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5mcHNDb3VudGVyLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xuZnBzQ291bnRlci5zdHlsZS5sZWZ0ID0gXCIxMHB4XCI7XG5mcHNDb3VudGVyLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xubGV0IHByZXZHYW1lRGl2QW5nbGUgPSAwO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmcHNDb3VudGVyKTtcbmV4cG9ydCB2YXIgZnBzID0gNjA7XG5cbmV4cG9ydCB2YXIgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImdhbWUtY2FudmFzXCJcbikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5leHBvcnQgdmFyIGdhbWVDYW52YXNDdHggPSBnYW1lQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XG5cbmV4cG9ydCB2YXIgYmFja2dyb3VuZENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImJhY2tncm91bmQtY2FudmFzXCJcbikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5leHBvcnQgdmFyIGJhY2tncm91bmRDYW52YXNDdHggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XG5cbmJhY2tncm91bmRDYW52YXMhLndpZHRoID0gYmFja2dyb3VuZENhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbmJhY2tncm91bmRDYW52YXMhLmhlaWdodCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuZ2FtZUNhbnZhcyEud2lkdGggPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuZ2FtZUNhbnZhcyEuaGVpZ2h0ID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4vLzIwMDAgLyA2Ni42NjYgfj0gMzBcbmV4cG9ydCBsZXQgZ3JpZFNpemUgPSA2Ni42NjY7XG5sZXQgaW5wdXRNYW5hZ2VyO1xubGV0IHBvd2VydXBIYW5kbGVyOiBQb3dlcnVwSGFuZGxlcjtcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYW52YXNTaXplKCkge1xuICBnYW1lQ2FudmFzLndpZHRoID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgZ2FtZUNhbnZhcy5oZWlnaHQgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgYmFja2dyb3VuZENhbnZhcy53aWR0aCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIGJhY2tncm91bmRDYW52YXMuaGVpZ2h0ID0gYmFja2dyb3VuZENhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGRyYXdHcmlkKCk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIHZhciBtdWx0ID0gZnBzIC8gNjA7XG4gIGZyYW1lQ291bnQrKztcbiAgaWYgKGZyYW1lQ291bnQgJSAxMCA9PT0gMCkge1xuICAgIGZwcyA9IGNhbGN1bGF0ZUZQUygpO1xuICAgIGZwc0NvdW50ZXIuaW5uZXJUZXh0ID0gYEZQUzogJHtmcHN9YDtcbiAgfVxuICBnYW1lQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLCBnYW1lQ2FudmFzLndpZHRoLCBnYW1lQ2FudmFzLmhlaWdodCk7XG5cbiAgT2JqZWN0LnZhbHVlcyhjdXJyZW50Um9vbS5wbGF5ZXJzKS5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBwbGF5ZXIuc25ha2UuZHJhdygpO1xuICAgIHBsYXllci5zbmFrZS51cGRhdGVFbWl0dGVyKChwZXJmb3JtYW5jZS5ub3coKSAvIDEwIC0gbGFzdFRpbWUpIC8gMTUpO1xuICB9KTtcblxuICBwb3dlcnVwSGFuZGxlci5kcmF3KCk7XG59XG52YXIgZnJhbWVDb3VudCA9IDA7XG52YXIgbGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwO1xuZnVuY3Rpb24gY2FsY3VsYXRlRlBTKCkge1xuICB2YXIgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwO1xuICB2YXIgdGltZURpZmYgPSBjdXJyZW50VGltZSAtIGxhc3RUaW1lO1xuICB2YXIgZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gdGltZURpZmYpO1xuICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICByZXR1cm4gZnBzO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVDYW52YXNTaXplKTtcbmRyYXdHcmlkKCk7XG5cbmZ1bmN0aW9uIGdldENsb3Nlc3RBbmdsZShjdXJyZW50QW5nbGU6IG51bWJlciwgdGFyZ2V0QW5nbGU6IG51bWJlcikge1xuICBjb25zdCBwaTIgPSBNYXRoLlBJICogMjtcbiAgbGV0IGRlbHRhID0gKHRhcmdldEFuZ2xlIC0gY3VycmVudEFuZ2xlKSAlIHBpMjtcbiAgaWYgKGRlbHRhID4gTWF0aC5QSSkge1xuICAgIGRlbHRhIC09IHBpMjtcbiAgfSBlbHNlIGlmIChkZWx0YSA8IC1NYXRoLlBJKSB7XG4gICAgZGVsdGEgKz0gcGkyO1xuICB9XG4gIHJldHVybiBjdXJyZW50QW5nbGUgKyBkZWx0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUdhbWVTdGF0ZShnYW1lU3RhdGU6IE1lc3NhZ2VHYW1lcGxheSkge1xuICBpZiAoY3VycmVudFBsYXllci5zbmFrZSA9PT0gbnVsbCkge1xuICAgIC8vIEluaXRpYWxpemUgc25ha2VzIHRoZSBmaXJzdCB0aW1lIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXG4gICAgZ2FtZVN0YXRlLnNuYWtlSGVhZHMuZm9yRWFjaCgoaGVhZERhdGEpID0+IHtcbiAgICAgIGxldCBoZWFkID0gaGVhZERhdGEubGFzdFNlZ21lbnQ7XG4gICAgICBsZXQgdXNlcm5hbWUgPSBoZWFkRGF0YS51c2VybmFtZTtcblxuICAgICAgbGV0IHBvcyA9IGhlYWQuZW5kUG9pbnQ7XG4gICAgICBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5zbmFrZSA9IG5ldyBTbmFrZShcbiAgICAgICAgbmV3IExpbmVTZWdtZW50KFxuICAgICAgICAgIG5ldyBWZWN0b3IocG9zLngsIHBvcy55KSxcbiAgICAgICAgICBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSksXG4gICAgICAgICAgaGVhZC5pc0NvbGxpZGFibGUsXG4gICAgICAgICAgaGVhZC5lbmRBbmdsZVxuICAgICAgICApLFxuICAgICAgICBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5jb2xvcixcbiAgICAgICAgZ2FtZUNhbnZhc0N0eFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjdXJyZW50UGxheWVyLnNuYWtlID0gY3VycmVudFJvb20ucGxheWVyc1tjdXJyZW50UGxheWVyLnVzZXJuYW1lXS5zbmFrZTtcbiAgICBpbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKFxuICAgICAgY3VycmVudFJvb20ucGxheWVyc1tjdXJyZW50UGxheWVyLnVzZXJuYW1lXS5zbmFrZSxcbiAgICAgIFtcIkFcIiwgXCJBUlJPV0xFRlRcIl0sXG4gICAgICBbXCJEXCIsIFwiQVJST1dSSUdIVFwiXVxuICAgICk7XG4gICAgcG93ZXJ1cEhhbmRsZXIgPSBuZXcgUG93ZXJ1cEhhbmRsZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY3VycmVudFVzZXJuYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICAvLyBVcGRhdGUgZXhpc3Rpbmcgc25ha2VzIGJhc2VkIG9uIHRoZSBuZXcgZ2FtZSBzdGF0ZVxuICAgIGdhbWVTdGF0ZS5zbmFrZUhlYWRzLmZvckVhY2goKG5ld0hlYWREYXRhKSA9PiB7XG4gICAgICBsZXQgaGVhZCA9IG5ld0hlYWREYXRhLmxhc3RTZWdtZW50O1xuICAgICAgbGV0IHVzZXJuYW1lID0gbmV3SGVhZERhdGEudXNlcm5hbWU7XG4gICAgICBsZXQgZW5kUG9zID0gaGVhZC5lbmRQb2ludDtcbiAgICAgIGxldCBzbmFrZVRvVXBkYXRlID0gY3VycmVudFJvb20ucGxheWVyc1t1c2VybmFtZV0uc25ha2U7XG5cbiAgICAgIGlmIChnYW1lU3RhdGUucG93ZXJ1cExpc3QgIT09IG51bGwpIHtcbiAgICAgICAgLy91cGRhdGUgcG93ZXJ1cHMgbGlzdFxuICAgICAgICBnYW1lU3RhdGUucG93ZXJ1cExpc3QuZm9yRWFjaCgocG93ZXJ1cEluZm8pID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHBvd2VydXBJbmZvLmFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBQb3dlcnVwQWN0aW9uLlJFTU9WRTpcbiAgICAgICAgICAgICAgcG93ZXJ1cEhhbmRsZXIucmVtb3ZlUG93ZXJ1cChcbiAgICAgICAgICAgICAgICBQb3dlcnVwLmZyb21NZXNzYWdlUG93ZXJ1cChwb3dlcnVwSW5mbywgZ2FtZUNhbnZhc0N0eClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBvd2VydXBBY3Rpb24uU1BBV046XG4gICAgICAgICAgICAgIHBvd2VydXBIYW5kbGVyLmFkZFBvd2VydXAoXG4gICAgICAgICAgICAgICAgUG93ZXJ1cC5mcm9tTWVzc2FnZVBvd2VydXAocG93ZXJ1cEluZm8sIGdhbWVDYW52YXNDdHgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb3dlcnVwQWN0aW9uLkFQUExZOlxuICAgICAgICAgICAgICBwb3dlcnVwSGFuZGxlci5hcHBseVBvd2VydXAoXG4gICAgICAgICAgICAgICAgUG93ZXJ1cC5mcm9tTWVzc2FnZVBvd2VydXAocG93ZXJ1cEluZm8sIGdhbWVDYW52YXNDdHgpLCBwb3dlcnVwSW5mby5wbGF5ZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy9rZWVwIHRyYWNrIG9mIHRoZSB1c2VybmFtZXMgc2VudCBieSB0aGUgc2VydmVyIGluIHRoZSBkYXRhXG4gICAgICBjdXJyZW50VXNlcm5hbWVzLnB1c2godXNlcm5hbWUpO1xuICAgICAgLy8gdHJhbnNsYXRlKCR7aGVhZC5lbmRQb2ludC54ICogZ2FtZUNhbnZhcy53aWR0aCAvIDIwMDAgfXB4LCAke2hlYWQuZW5kUG9pbnQueSAqIGdhbWVDYW52YXMud2lkdGggLyAyMDAwfXB4KVxuXG4gICAgICBpZiAoaGVhZC5pc05ld1RoaXNUaWNrKSB7XG4gICAgICAgIGlmIChuZXdIZWFkRGF0YS5zZWdtZW50VHlwZSA9PT0gXCJMaW5lU2VnbWVudFwiKSB7XG4gICAgICAgICAgaGVhZCA9IGhlYWQgYXMgbWVzc2FnZUxpbmVTZWdtZW50O1xuICAgICAgICAgIGxldCBzdGFydFBvcyA9IGhlYWQuc3RhcnRQb2ludDtcblxuICAgICAgICAgIHNuYWtlVG9VcGRhdGUuYWRkU2VnbWVudChcbiAgICAgICAgICAgIG5ldyBMaW5lU2VnbWVudChcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcihzdGFydFBvcy54LCBzdGFydFBvcy55KSxcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcihlbmRQb3MueCwgZW5kUG9zLnkpLFxuICAgICAgICAgICAgICBoZWFkLmlzQ29sbGlkYWJsZSxcbiAgICAgICAgICAgICAgaGVhZC5lbmRBbmdsZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZERhdGEuc2VnbWVudFR5cGUgPT09IFwiQXJjU2VnbWVudFwiKSB7XG4gICAgICAgICAgaGVhZCA9IGhlYWQgYXMgbWVzc2FnZUFyY1NlZ21lbnQ7XG4gICAgICAgICAgbGV0IGNlbnRlciA9IGhlYWQuY2VudGVyO1xuICAgICAgICAgIHNuYWtlVG9VcGRhdGUuYWRkU2VnbWVudChcbiAgICAgICAgICAgIG5ldyBBcmNTZWdtZW50KFxuICAgICAgICAgICAgICBuZXcgVmVjdG9yKGNlbnRlci54LCBjZW50ZXIueSksXG4gICAgICAgICAgICAgIGhlYWQucmFkaXVzLFxuICAgICAgICAgICAgICBoZWFkLnN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGhlYWQuZW5kQW5nbGUsXG4gICAgICAgICAgICAgIGhlYWQuY291bnRlckNsb2Nrd2lzZSxcbiAgICAgICAgICAgICAgaGVhZC5pc0NvbGxpZGFibGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV3SGVhZERhdGEuc2VnbWVudFR5cGUgPT09IFwiTGluZVNlZ21lbnRcIikge1xuICAgICAgICAgIGhlYWQgPSBoZWFkIGFzIG1lc3NhZ2VMaW5lU2VnbWVudDtcblxuICAgICAgICAgIGlmIChwb3dlcnVwSGFuZGxlci5jYW1lcmFMb2NrKSB7XG4gICAgICAgICAgICBpZiAodXNlcm5hbWUgPT09IGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld0FuZ2xlID0gLWhlYWQuZW5kQW5nbGUgLSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgICAgbGV0IGNsb3Nlc3RBbmdsZSA9IGdldENsb3Nlc3RBbmdsZShwcmV2R2FtZURpdkFuZ2xlLCBuZXdBbmdsZSk7XG4gICAgICAgICAgICAgIGdhbWVEaXYuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDIpIHJvdGF0ZSgke2Nsb3Nlc3RBbmdsZX1yYWQpIHRyYW5zbGF0ZSgke1xuICAgICAgICAgICAgICAgICgtaGVhZC5lbmRQb2ludC54ICogd2luZG93LmlubmVySGVpZ2h0KSAvIDIwMDAgK1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICAgICAgICAgICAgfXB4LCAke1xuICAgICAgICAgICAgICAgICgtaGVhZC5lbmRQb2ludC55ICogd2luZG93LmlubmVySGVpZ2h0KSAvIDIwMDAgK1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICAgICAgICAgICAgfXB4KWA7XG4gICAgICAgICAgICAgIHByZXZHYW1lRGl2QW5nbGUgPSBjbG9zZXN0QW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzdGFydFBvcyA9IGhlYWQuc3RhcnRQb2ludDtcbiAgICAgICAgICBzbmFrZVRvVXBkYXRlLnNlZ21lbnRzW3NuYWtlVG9VcGRhdGUuc2VnbWVudHMubGVuZ3RoIC0gMV0gPVxuICAgICAgICAgICAgbmV3IExpbmVTZWdtZW50KFxuICAgICAgICAgICAgICBuZXcgVmVjdG9yKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpLFxuICAgICAgICAgICAgICBuZXcgVmVjdG9yKGVuZFBvcy54LCBlbmRQb3MueSksXG4gICAgICAgICAgICAgIGhlYWQuaXNDb2xsaWRhYmxlLFxuICAgICAgICAgICAgICBoZWFkLmVuZEFuZ2xlXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWREYXRhLnNlZ21lbnRUeXBlID09PSBcIkFyY1NlZ21lbnRcIikge1xuICAgICAgICAgIGhlYWQgPSBoZWFkIGFzIG1lc3NhZ2VBcmNTZWdtZW50O1xuICAgICAgICAgIGlmIChwb3dlcnVwSGFuZGxlci5jYW1lcmFMb2NrKSB7XG4gICAgICAgICAgICBpZiAodXNlcm5hbWUgPT09IGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld0FuZ2xlID0gaGVhZC5jb3VudGVyQ2xvY2t3aXNlXG4gICAgICAgICAgICAgICAgPyAtaGVhZC5lbmRBbmdsZVxuICAgICAgICAgICAgICAgIDogLWhlYWQuZW5kQW5nbGUgLSBNYXRoLlBJO1xuICAgICAgICAgICAgICBsZXQgY2xvc2VzdEFuZ2xlID0gZ2V0Q2xvc2VzdEFuZ2xlKHByZXZHYW1lRGl2QW5nbGUsIG5ld0FuZ2xlKTtcbiAgICAgICAgICAgICAgZ2FtZURpdi5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMikgcm90YXRlKCR7Y2xvc2VzdEFuZ2xlfXJhZCkgdHJhbnNsYXRlKCR7XG4gICAgICAgICAgICAgICAgKC1oZWFkLmVuZFBvaW50LnggKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMjAwMCArXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgICAgICAgICB9cHgsICR7XG4gICAgICAgICAgICAgICAgKC1oZWFkLmVuZFBvaW50LnkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMjAwMCArXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgICAgICAgICB9cHgpYDtcbiAgICAgICAgICAgICAgcHJldkdhbWVEaXZBbmdsZSA9IGNsb3Nlc3RBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGNlbnRlciA9IGhlYWQuY2VudGVyO1xuICAgICAgICAgIHNuYWtlVG9VcGRhdGUuc2VnbWVudHNbc25ha2VUb1VwZGF0ZS5zZWdtZW50cy5sZW5ndGggLSAxXSA9XG4gICAgICAgICAgICBuZXcgQXJjU2VnbWVudChcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcihjZW50ZXIueCwgY2VudGVyLnkpLFxuICAgICAgICAgICAgICBoZWFkLnJhZGl1cyxcbiAgICAgICAgICAgICAgaGVhZC5zdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBoZWFkLmVuZEFuZ2xlLFxuICAgICAgICAgICAgICBoZWFkLmNvdW50ZXJDbG9ja3dpc2UsXG4gICAgICAgICAgICAgIGhlYWQuaXNDb2xsaWRhYmxlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL3doZW4gYSB1c2VybmFtZSB0aGF0IGlzIG9uIHRoZSBjbGllbnQgbGlzdCBpcyBubyBsb25nZXIgc2VlbiBpbiB0aGUgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIsIGtpbGwgaGltXG4gICAgT2JqZWN0LnZhbHVlcyhjdXJyZW50Um9vbS5wbGF5ZXJzKS5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgIGlmICghY3VycmVudFVzZXJuYW1lcy5pbmNsdWRlcyhwbGF5ZXIudXNlcm5hbWUpICYmIHBsYXllci5zbmFrZS5pc0FsaXZlKSB7XG4gICAgICAgIHBsYXllci5zbmFrZS5raWxsKCk7XG5cbiAgICAgICAgLy9zZXQgdGhlIGxhc3Qgd2lubmVyIGlmIG5vb25lIGlzIGFsaXZlIG5vd1xuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhjdXJyZW50Um9vbS5wbGF5ZXJzKS5ldmVyeShcbiAgICAgICAgICAgIChwbGF5ZXIpID0+ICFwbGF5ZXIuc25ha2UuaXNBbGl2ZVxuICAgICAgICAgICkgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3VycmVudFJvb20ubGFzdFdpbm5lciA9IHBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFuaW1hdGUoKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUaGVzZSB2YWx1ZXMgYXJlIHVzZWQgYnkgdGhlIGBBYnN0cmFjdFZlY3Rvci5yb3VuZGAgbWV0aG9kIHRvIGluY3JlYXNlXG4gKiBwZXJmb3JtYW5jZSB2cy4gdXNpbmcgIE51bWJlci50b0ZpeGVkLlxuICovXG52YXIgcHJlY2lzaW9uID0gW1xuICAgIDEsXG4gICAgMTAsXG4gICAgMTAwLFxuICAgIDEwMDAsXG4gICAgMTAwMDAsXG4gICAgMTAwMDAwLFxuICAgIDEwMDAwMDAsXG4gICAgMTAwMDAwMDAsXG4gICAgMTAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMDBcbl07XG4vKipcbiAqIFRoZSBjbGFzcyB0aGF0IGFsbCBvdGhlciB2ZWN0b3IgcmVwcmVzZW50YXRpb25zIGFyZSBkZXJpdmVkIGZyb20uXG4gKlxuICogQ29udGFpbnMgdGhlIGNvcmUgaW1wbGVtZW50YXRpb24gZm9yIGFsbCBtZXRob2RzIHRoYXQgd2lsbCBiZSBleHBvc2VkIGJ5XG4gKiB2ZWN0b3IgaW5zdGFuY2VzLlxuICpcbiAqIEV4YW1wbGUgb2YgY3JlYXRpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb246XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEFic3RyYWN0VmVjdG9yIH0gZnJvbSBcIi4vQWJzdHJhY3RWZWN0b3JcIlxuICpcbiAqIGV4cG9ydCBjbGFzcyBNeUN1c3RvbVZlY3RvciBleHRlbmRzIEFic3RyYWN0VmVjdG9yIHtcbiAqICBjb25zdHJ1Y3RvciAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAqICAgIHN1cGVyKEN1c3RvbVZlY3RvclR5cGUpXG4gKiAgfVxuICogfVxuICogYGBgXG4gKi9cbnZhciBBYnN0cmFjdFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBYnN0cmFjdFZlY3RvcihjdG9yKSB7XG4gICAgICAgIHRoaXMuY3RvciA9IGN0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBib3RoIHggYW5kIHkgYXhpcyB2YWx1ZVxuICAgICAqIEBwYXJhbSB4ICAgTmV3IHggdmFsXG4gICAgICogQHBhcmFtIHkgICBOZXcgeSB2YWxcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0QXhlcyA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB4IHRoZSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHggYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHkgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB5IGF4aXMuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGFzIGEgZm9ybWF0dGVkIHN0cmluZywgZS5nIFwiKDAsIDQpXCJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocm91bmQpIHtcbiAgICAgICAgaWYgKHJvdW5kID09PSB2b2lkIDApIHsgcm91bmQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIihcIiArIE1hdGgucm91bmQodGhpcy54KSArIFwiLCBcIiArIE1hdGgucm91bmQodGhpcy55KSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgWzAsIDRdXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIE9iamVjdCBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIHsgeDogMCwgeTogNCB9XG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHByb3ZpZGVkIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0IHRoZSBwcm92aWRlZCB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZlY3RvciBlcXVhbCB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCA9PT0gdGhpcy54ICYmIHZlYy55ID09PSB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICo9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsViA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVZlY3Rvcih2ZWMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC89IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlYgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVZlY3Rvcih2KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAqPSBuO1xuICAgICAgICB0aGlzLnkgKj0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggLz0gbjtcbiAgICAgICAgdGhpcy55IC89IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2UyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIodGhpcy5tYWduaXR1ZGUoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb3IgQW1lcmljYW4gc3BlbGxpbmcuIFNhbWUgYXMgdW5pdC9ub3JtYWxpc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBzYW1lIGFzIG5vcm1hbGlzZSBhbmQgbm9ybWFsaXplXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnVuaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFnbml0dWRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzcXVyZWQgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aFNxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHRoaXMueCArIHZlYy55ICogdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jcm9zcyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYy55IC0gdGhpcy55ICogdmVjLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGlzIHZlY3RvciBpLmUgbXVsdGlwbGllcyBpdCBieSAtMVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVjdG9yIGF4ZXMgdmFsdWVzIHRvIGFic29sdXRlIHZhbHVlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSB2ZWN0b3IgaS5lIHNldHMgYWxsIGF4ZXMgdG8gMFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS56ZXJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgeCA9IHRoaXMueCAtIHYueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2Lnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZXRvciBieSBwcm92aWRlZCByYWRpYW5zXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRzKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWRzKTtcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZHMpO1xuICAgICAgICB2YXIgb3ggPSB0aGlzLng7XG4gICAgICAgIHZhciBveSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0gb3ggKiBjb3MgLSBveSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gb3ggKiBzaW4gKyBveSAqIGNvcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3VuZHMgdGhpcyB2ZWN0b3IgdG8gbiBkZWNpbWFsIHBsYWNlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDI7IH1cbiAgICAgICAgdmFyIHAgPSBwcmVjaXNpb25bbl07XG4gICAgICAgIC8vIFRoaXMgcGVyZm9ybXMgd2FhYXkgYmV0dGVyIHRoYW4gdG9GaXhlZCBhbmQgZ2l2ZSBGbG9hdDMyIHRoZSBlZGdlIGFnYWluLlxuICAgICAgICAvLyBodHRwOi8vd3d3LmR5bmFtaWNndXJ1LmNvbS9qYXZhc2NyaXB0L3JvdW5kLW51bWJlcnMtd2l0aC1wcmVjaXNpb24vXG4gICAgICAgIHRoaXMueCA9ICgoMC41ICsgdGhpcy54ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICB0aGlzLnkgPSAoKDAuNSArIHRoaXMueSAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFic3RyYWN0VmVjdG9yO1xufSgpKTtcbmV4cG9ydHMuQWJzdHJhY3RWZWN0b3IgPSBBYnN0cmFjdFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhbiBBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5BcnJheVZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBBcnJheVZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJyYXlWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXJyYXlWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBBcnJheVZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IFt4LCB5XTtcbiAgICAgICAgX3RoaXMuY3RvciA9IEFycmF5VmVjdG9yO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQXJyYXlWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuQXJyYXlWZWN0b3IgPSBBcnJheVZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhIEZsb2F0MzJBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5GbG9hdDMyVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEZsb2F0MzJWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0MzJWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXQzMlZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEZsb2F0MzJWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgICAgICBfdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgX3RoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmxvYXQzMlZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5GbG9hdDMyVmVjdG9yID0gRmxvYXQzMlZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0MzJWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vQXJyYXlWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vRmxvYXQzMlZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjMkQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGFzIHBhcnQgb2YgdGhlIGluc3RhbmNlIGl0c2VsZlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl94ID0geDtcbiAgICAgICAgX3RoaXMuX3kgPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLlZlY3RvciA9IFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlY3Rvci5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=