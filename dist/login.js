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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/MenuManager/login.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNELGNBQWM7QUFDZDs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9BcmNTZWdtZW50LnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvRHJhd2VyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvSW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvTGluZVNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9NZW51TWFuYWdlci9sb2dpbi50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL01vZGVscy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9Nb2RlbHMvUm9vbS50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1BhcnRpY2xlU3lzdGVtL0NpcmN1bGFyRW1pdHRlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1BhcnRpY2xlU3lzdGVtL0VtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9QYXJ0aWNsZVN5c3RlbS9QYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1BhcnRpY2xlU3lzdGVtL1BhcnRpY2xlU3lzdGVtVXRpbHMudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9QYXJ0aWNsZVN5c3RlbS9SZWN0YW5ndWxhckVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9Qb3dlcnVwU3lzdGVtL1Bvd2VydXBIYW5kbGVyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUG93ZXJ1cFN5c3RlbS9wb3dlcnVwLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvU2VnbWVudC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1NuYWtlLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvV2ViU29ja2V0Q2xpZW50L3dlYnNvY2tldC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL0Fic3RyYWN0VmVjdG9yLmpzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL0FycmF5VmVjdG9yLmpzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL0Zsb2F0MzJWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvVmVjMkQuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvVmVjdG9yLmpzIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkcmF3QXJjLCBkcmF3QXJyb3csIGRyYXdEb3QgfSBmcm9tIFwiLi9EcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgVmVjMkQgZnJvbSAndmVjdG9yMmQnO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi9TZWdtZW50XCI7XHJcbmltcG9ydCB7IGdhbWVDYW52YXNDdHggfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjU2VnbWVudCBleHRlbmRzIFNlZ21lbnQge1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY2VudGVyOiBWZWMyRC5WZWN0b3I7XHJcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RhcnRBbmdsZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGVuZEFuZ2xlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb3VudGVyQ2xvY2t3aXNlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGlzQ29sbGlkYWJsZTogYm9vbGVhbjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2VudGVyOiBWZWMyRC5WZWN0b3IsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvdW50ZXJDbG9ja3dpc2U6IGJvb2xlYW4sIGlzQ29sbGlkYWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBjZW50ZXI7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5zdGFydEFuZ2xlID0gc3RhcnRBbmdsZTtcclxuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gZW5kQW5nbGU7XHJcbiAgICAgICAgdGhpcy5fY291bnRlckNsb2Nrd2lzZSA9IGNvdW50ZXJDbG9ja3dpc2U7XHJcbiAgICAgICAgdGhpcy5pc0NvbGxpZGFibGUgPSBpc0NvbGxpZGFibGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gMjAwMDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG5cclxuXHJcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBpZiAodGhpcy5pc0NvbGxpZGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5hcmModGhpcy5jZW50ZXIueCAqIHNjYWxlWCwgdGhpcy5jZW50ZXIueSAqIHNjYWxlWSwgdGhpcy5yYWRpdXMgKiBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSksIHRoaXMuc3RhcnRBbmdsZSwgdGhpcy5lbmRBbmdsZSwgdGhpcy5fY291bnRlckNsb2Nrd2lzZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdEZWJ1Zyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyNmZjAwZmZmZidcclxuICAgICAgICBsZXQgdGFuZ2VudF9hbmdsZSA9IHRoaXMuX2NvdW50ZXJDbG9ja3dpc2UgPyAtIE1hdGguUEkgOiBNYXRoLlBJO1xyXG5cclxuICAgICAgICB0YW5nZW50X2FuZ2xlICs9IHRoaXMuZW5kQW5nbGU7XHJcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgIGRyYXdEb3QodGhpcy5jZW50ZXIueCwgdGhpcy5jZW50ZXIueSwgNSwgJyMwMDAwMDAnKTtcclxuICAgICAgICBkcmF3QXJyb3coY29udGV4dCwgbmV3IFZlYzJELlZlY3Rvcih0aGlzLmVuZFBvaW50LngsIHRoaXMuZW5kUG9pbnQueSksIG5ldyBWZWMyRC5WZWN0b3IodGhpcy5lbmRQb2ludC54ICsgdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyh0YW5nZW50X2FuZ2xlKSwgdGhpcy5lbmRQb2ludC55ICsgdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0YW5nZW50X2FuZ2xlKSkpO1xyXG4gICAgICAgIGRyYXdBcmModGhpcy5jZW50ZXIueCwgdGhpcy5jZW50ZXIueSwgdGhpcy5yYWRpdXMsIDAsIDAsIGZhbHNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuZFBvaW50KCk6IFZlYzJELlZlY3RvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMyRC5WZWN0b3IoXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyLnggKyB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHRoaXMuZW5kQW5nbGUpLFxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlci55ICsgdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGlzLmVuZEFuZ2xlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBlbnBlbmRpY3VsYXJFbmRBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ291bnRlckNsb2Nrd2lzZSA/IHRoaXMuZW5kQW5nbGUgLSBNYXRoLlBJIC8gMiA6IHRoaXMuZW5kQW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGVucGVuZGljdWxhclN0YXJ0QW5nbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvdW50ZXJDbG9ja3dpc2UgPyB0aGlzLnN0YXJ0QW5nbGUgLSBNYXRoLlBJIC8gMiA6IHRoaXMuc3RhcnRBbmdsZSArIE1hdGguUEkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ291bnRlckNsb2Nrd2lzZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRlckNsb2Nrd2lzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250aW51aW5nU2VnbWVudCh0cmFuc2Zvcm06IFZlYzJELlZlY3Rvcik6IFNlZ21lbnQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJjU2VnbWVudCh0aGlzLmNlbnRlci5jbG9uZSgpLmFkZCh0cmFuc2Zvcm0pIGFzIFZlYzJELlZlY3RvciwgdGhpcy5yYWRpdXMsIHRoaXMuZW5kQW5nbGUsIHRoaXMuZW5kQW5nbGUsIHRoaXMuX2NvdW50ZXJDbG9ja3dpc2UsIHRoaXMuaXNDb2xsaWRhYmxlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IHsgYmFja2dyb3VuZENhbnZhcywgYmFja2dyb3VuZENhbnZhc0N0eCwgZ3JpZFNpemUgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dyaWQoKSB7XG5cbiAgICBjb25zdCBzY2FsZVggPSBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIDIwMDA7XG4gICAgY29uc3Qgc2NhbGVZID0gYmFja2dyb3VuZENhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcblxuXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCwgYmFja2dyb3VuZENhbnZhcy53aWR0aCwgYmFja2dyb3VuZENhbnZhcy5oZWlnaHQpO1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjMpJztcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgZm9yIChsZXQgeCA9IGdyaWRTaXplICogc2NhbGVYOyB4IDwgYmFja2dyb3VuZENhbnZhcy53aWR0aDsgeCArPSBncmlkU2l6ZSAqIHNjYWxlWCkge1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4Lm1vdmVUbyh4ICwgMCk7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHgubGluZVRvKHggLCBiYWNrZ3JvdW5kQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIGZvciAobGV0IHkgPSBncmlkU2l6ZSAqIHNjYWxlWTsgeSA8IGJhY2tncm91bmRDYW52YXMuaGVpZ2h0OyB5ICs9IGdyaWRTaXplICogc2NhbGVZKSB7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHgubW92ZVRvKDAsIHkpO1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmxpbmVUbyhiYWNrZ3JvdW5kQ2FudmFzLndpZHRoLCB5KTtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5zdHJva2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3RG90KGRvdFg6IG51bWJlciwgZG90WTogbnVtYmVyLCBkb3RTaXplOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguYXJjKFxuICAgICAgICBkb3RYLFxuICAgICAgICBkb3RZLFxuICAgICAgICBkb3RTaXplLFxuICAgICAgICAwLFxuICAgICAgICAyICogTWF0aC5QSSxcbiAgICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmZpbGwoKTtcblxuICAgIGJhY2tncm91bmRDYW52YXNDdHguY2xvc2VQYXRoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3QXJjKGRvdFg6IG51bWJlciwgZG90WTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb3VudGVyQ2xvY2t3aXNlOiBib29sZWFuKSB7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguc3Ryb2tlU3R5bGUgPSBcIiMzNDY2YWFcIjtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguYXJjKGRvdFgsIGRvdFksIHJhZGl1cywgMCwgMiAqIE1hdGguUEksIGNvdW50ZXJDbG9ja3dpc2UpO1xuXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5saW5lV2lkdGggPSA1O1xuICAgIGJhY2tncm91bmRDYW52YXNDdHguc3Ryb2tlKCk7XG5cbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0Fycm93KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcm9tOiBWZWN0b3IsIHRvOiBWZWN0b3IpIHtcbiAgICBpZiAoZnJvbS54ICE9IHRvLnggJiYgZnJvbS55ICE9IHRvLnkpIHtcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih0by55IC0gZnJvbS55LCB0by54IC0gZnJvbS54KTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxMDtcbiAgICAgICAgbGV0IGhlYWRMZW5ndGggPSAxMDtcbiAgICAgICAgbGV0IG5ld190byA9IG5ldyBWZWN0b3IodG8ueCwgdG8ueSk7XG4gICAgICAgIC8vIFRoaXMgbWFrZXMgaXQgc28gdGhlIGVuZCBvZiB0aGUgYXJyb3cgaGVhZCBpcyBsb2NhdGVkIGF0IHRveCwgdG95LCBkb24ndCBhc2sgd2hlcmUgMS4xNSBjb21lcyBmcm9tXG4gICAgICAgIG5ld190by54IC09IE1hdGguY29zKGFuZ2xlKSAqICgod2lkdGggKiAxLjE1KSk7XG4gICAgICAgIG5ld190by55IC09IE1hdGguc2luKGFuZ2xlKSAqICgod2lkdGggKiAxLjE1KSk7XG5cblxuXG4gICAgICAgIC8vc3RhcnRpbmcgcGF0aCBvZiB0aGUgYXJyb3cgZnJvbSB0aGUgc3RhcnQgc3F1YXJlIHRvIHRoZSBlbmQgc3F1YXJlIGFuZCBkcmF3aW5nIHRoZSBzdHJva2VcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcbiAgICAgICAgY3R4LmxpbmVUbyhuZXdfdG8ueCwgbmV3X3RvLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNiYmJiYmJcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgLy9zdGFydGluZyBhIG5ldyBwYXRoIGZyb20gdGhlIGhlYWQgb2YgdGhlIGFycm93IHRvIG9uZSBvZiB0aGUgc2lkZXMgb2YgdGhlIHBvaW50XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhuZXdfdG8ueCwgbmV3X3RvLnkpO1xuICAgICAgICBjdHgubGluZVRvKG5ld190by54IC0gaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDcpLCBuZXdfdG8ueSAtIGhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA3KSk7XG5cbiAgICAgICAgLy9wYXRoIGZyb20gdGhlIHNpZGUgcG9pbnQgb2YgdGhlIGFycm93LCB0byB0aGUgb3RoZXIgc2lkZSBwb2ludFxuICAgICAgICBjdHgubGluZVRvKG5ld190by54IC0gaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDcpLCBuZXdfdG8ueSAtIGhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA3KSk7XG5cbiAgICAgICAgLy9wYXRoIGZyb20gdGhlIHNpZGUgcG9pbnQgYmFjayB0byB0aGUgdGlwIG9mIHRoZSBhcnJvdywgYW5kIHRoZW4gYWdhaW4gdG8gdGhlIG9wcG9zaXRlIHNpZGUgcG9pbnRcbiAgICAgICAgY3R4LmxpbmVUbyhuZXdfdG8ueCwgbmV3X3RvLnkpO1xuICAgICAgICBjdHgubGluZVRvKG5ld190by54IC0gaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDcpLCBuZXdfdG8ueSAtIGhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA3KSk7XG5cbiAgICAgICAgLy9kcmF3cyB0aGUgcGF0aHMgY3JlYXRlZCBhYm92ZVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNiYmJiYmJcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNiYmJiYmJcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcclxuaW1wb3J0IHsgc2VuZEtleUV2ZW50VG9TZXJ2ZXIgfSBmcm9tIFwiLi9XZWJTb2NrZXRDbGllbnQvd2Vic29ja2V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBEaXJ7XHJcbiAgTEVGVCxcclxuICBSSUdIVFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG4gIHByaXZhdGUgX2tleU1hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICBwcml2YXRlIF9zbmFrZTogU25ha2U7XHJcbiAgcHJpdmF0ZSBfbGVmdEtleXM6IHN0cmluZ1tdO1xyXG4gIHByaXZhdGUgX3JpZ2h0S2V5czogc3RyaW5nW107XHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHNuYWtlOiBTbmFrZSwgbGVmdEtleXM6IHN0cmluZ1tdLCByaWdodEtleXM6IHN0cmluZ1tdKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5fc25ha2UgPSBzbmFrZTtcclxuICAgIHRoaXMuX2xlZnRLZXlzID0gbGVmdEtleXMubWFwKGtleSA9PiBrZXkudG9VcHBlckNhc2UoKSk7XHJcbiAgICB0aGlzLl9yaWdodEtleXMgPSByaWdodEtleXMubWFwKGtleSA9PiBrZXkudG9VcHBlckNhc2UoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgLy9pZiBzbmFrZSBpcyBkZWFkLCBpZ25vcmUgdGhlIGtleSBwcmVzc2VzXHJcbiAgICBpZighdGhpcy5fc25ha2UuaXNBbGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIC8vaWdub3JlIGtleXMgbm90IGFzc2lnbmVkIHRvIHNlbGYsIHRoaXMgd291bGQgcmVzdWx0IGluIHRoZSBrZXltYXAgaGF2aW5nIHVubmVjZXNzYXJ5IGtleXMgYW5kIHRyaWdnZXJpbmcgdGhlIG9ua2V5VXAgZXZlbnRzXHJcbiAgICBpZighdGhpcy5fbGVmdEtleXMuaW5jbHVkZXMoa2V5KSAmJiAhdGhpcy5fcmlnaHRLZXlzLmluY2x1ZGVzKGtleSkpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9zd2l0Y2ggb2ZmIHRoZSBjdXJyZW50IGRvd24ga2V5IGlmIHRoZSBvdGhlciBkaXJlY3Rpb24gaXMgcHJlc3NlZFxyXG4gICAgaWYgKHRoaXMuX2xlZnRLZXlzLnNvbWUobGVmdEtleSA9PiB0aGlzLl9rZXlNYXBbbGVmdEtleV0pICYmIHRoaXMuX3JpZ2h0S2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgIHRoaXMuX2xlZnRLZXlzLmZvckVhY2gobGVmdEtleSA9PiB0aGlzLl9rZXlNYXBbbGVmdEtleV0gPSBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0S2V5cy5zb21lKHJpZ2h0S2V5ID0+IHRoaXMuX2tleU1hcFtyaWdodEtleV0pICYmIHRoaXMuX2xlZnRLZXlzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgdGhpcy5fcmlnaHRLZXlzLmZvckVhY2gocmlnaHRLZXkgPT4gdGhpcy5fa2V5TWFwW3JpZ2h0S2V5XSA9IGZhbHNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9yZXR1cm4gaWYgdGhlIGtleSBpcyBhbHJhZWR5IGluIHRoZSBtYXAsIHByZXZlbnRzIGF1dG9jbGlja2luZ1xyXG4gICAgZWxzZSBpZiAodGhpcy5fa2V5TWFwW2tleV0pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9rZXlNYXBba2V5XSA9IHRydWU7XHJcblxyXG4gICAgc2VuZEtleUV2ZW50VG9TZXJ2ZXIodGhpcy5fcmlnaHRLZXlzLmluY2x1ZGVzKGtleSkgPyBEaXIuUklHSFQgOiBEaXIuTEVGVCwgdHJ1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgLy9pZiBzbmFrZSBpcyBkZWFkLCBpZ25vcmUgdGhlIGtleSBwcmVzc2VzXHJcbiAgICBpZighdGhpcy5fc25ha2UuaXNBbGl2ZSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSBrZXkgaXMgaW4gdGhlIGtleW1hcCwgaWYgbm90IGp1c3QgaWdub3JlIGl0XHJcbiAgICBpZiAoIXRoaXMuX2tleU1hcFtrZXldKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2tleU1hcFtrZXldID0gZmFsc2U7XHJcblxyXG4gICAgc2VuZEtleUV2ZW50VG9TZXJ2ZXIodGhpcy5fcmlnaHRLZXlzLmluY2x1ZGVzKGtleSkgPyBEaXIuUklHSFQgOiBEaXIuTEVGVCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi9TZWdtZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lU2VnbWVudCBleHRlbmRzIFNlZ21lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGFydFBvaW50OiBWZWN0b3I7XHJcbiAgICBwdWJsaWMgZW5kUG9pbnQ6IFZlY3RvcjtcclxuICAgIHB1YmxpYyBlbmRBbmdsZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzQ29sbGlkYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IFZlY3RvciwgZW5kOiBWZWN0b3IsIGlzQ29sbGlkYWJsZTogYm9vbGVhbiwgYW5nbGU/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kUG9pbnQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5pc0NvbGxpZGFibGUgPSBpc0NvbGxpZGFibGU7XHJcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IGFuZ2xlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBzY2FsZVggPSBjb250ZXh0LmNhbnZhcy53aWR0aCAvIDIwMDA7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gY29udGV4dC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuICAgICAgICAvLyBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyNmZjAwZmZmZidcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGlkYWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh0aGlzLnN0YXJ0UG9pbnQueCAqIHNjYWxlWCwgdGhpcy5zdGFydFBvaW50LnkgKiBzY2FsZVkpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh0aGlzLmVuZFBvaW50LnggKiBzY2FsZVgsIHRoaXMuZW5kUG9pbnQueSAqIHNjYWxlWSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnN0YXJ0UG9pbnQueCAtIHRoaXMuZW5kUG9pbnQueCkgKiogMiArICh0aGlzLnN0YXJ0UG9pbnQueSAtIHRoaXMuZW5kUG9pbnQueSkgKiogMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbnRpbnVpbmdTZWdtZW50KHRyYW5zZm9ybTogVmVjdG9yKTogU2VnbWVudCB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRFbmRwb2ludCA9IHRoaXMuZW5kUG9pbnQuY2xvbmUoKS5hZGQodHJhbnNmb3JtKSBhcyBWZWN0b3I7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaW5lU2VnbWVudChcclxuICAgICAgICAgICAgdHJhbnNmb3JtZWRFbmRwb2ludCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtZWRFbmRwb2ludCxcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxpZGFibGUsXHJcbiAgICAgICAgICAgIHRoaXMuZW5kQW5nbGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IHVwZGF0ZUNhbnZhc1NpemUgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL01vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlLCBSb29tIH0gZnJvbSBcIi4uL01vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZURhdGEsIE1lc3NhZ2VQbGF5ZXIsIE1lc3NhZ2VSb29tIH0gZnJvbSBcIi4uL1dlYlNvY2tldENsaWVudC9tZXNzYWdlVHlwZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vbSwgam9pblJvb20sIHNlbmRTdGFydENvbW1hbmQsIHNldFBsYXllckRhdGEgfSBmcm9tIFwiLi4vV2ViU29ja2V0Q2xpZW50L3dlYnNvY2tldFwiO1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFJvb206IFJvb20gfCBudWxsID0gbnVsbDtcclxuZXhwb3J0IGxldCBjdXJyZW50UGxheWVyOiBQbGF5ZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbmNvbnN0IHJvb21Db2RlSW5wdXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb21Db2RlSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KTtcclxuY29uc3QgdXNlcm5hbWVJbnB1dCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWVJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG5jb25zdCByb29tQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvaW5CdXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgcmVhZHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZHlCdXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgbG9naW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZGl2JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHJvb21EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1kaXYnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgZ2FtZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcy1jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgZW5kZ2FtZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRnYW1lLWRpdicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1waWNrZXInKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCByb29tVXNlcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20tdXNlcnMtbGlzdCcpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbmNvbnN0IHJvb21Db2RlU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLWNvZGUnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuY29uc3QgcGxheWVyQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWNvdW50JykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbmNvbnN0IGNvbG9yUGlja2VyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXBpY2tlci1jb250YWluZXInKTtcclxuY29uc3Qgc3RhcnRQcm9ncmVzc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1wcm9ncmVzcy1iYXInKTtcclxuY29uc3QgbGFzdFdpbm5lclNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdC13aW5uZXInKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbi8vIHNyYy9sb2dpbi50c1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQnV0dG9uKCkge1xyXG5cclxuICAgIGlmICh1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICByb29tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb29tQ29kZUlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDUpIHtcclxuICAgICAgICByb29tQnV0dG9uLnRleHRDb250ZW50ID0gJ0pPSU4gUk9PTSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvb21CdXR0b24udGV4dENvbnRlbnQgPSAnQ1JFQVRFIFJPT00nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUm9vbUFjdGlvbigpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcclxuICAgIGlmICghdXNlcm5hbWUpIHJldHVybjtcclxuXHJcbiAgICBjdXJyZW50UGxheWVyID0gbmV3IFBsYXllcih1c2VybmFtZSk7XHJcblxyXG4gICAgaWYgKHJvb21CdXR0b24uaW5uZXJUZXh0ID09PSAnQ1JFQVRFIFJPT00nKSB7XHJcbiAgICAgICAgY3JlYXRlUm9vbSh1c2VybmFtZUlucHV0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGpvaW5Sb29tKHJvb21Db2RlSW5wdXQudmFsdWUudG9VcHBlckNhc2UoKSwgdXNlcm5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSZWFkeVN0YXRlKCkge1xyXG5cclxuICAgIGN1cnJlbnRQbGF5ZXIuaXNSZWFkeSA9ICFjdXJyZW50UGxheWVyLmlzUmVhZHk7XHJcbiAgICBzZXRQbGF5ZXJEYXRhKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRSb29tLmNvZGUpO1xyXG4gICAgdXBkYXRlUmVhZHlCdXR0b24oY3VycmVudFBsYXllci5pc1JlYWR5KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVJlYWR5QnV0dG9uKGlzUmVhZHk6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc1JlYWR5KSB7XHJcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVkLWJ1dHRvbicpO1xyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLWJ1dHRvbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVkLWJ1dHRvbicpO1xyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuLWJ1dHRvbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Jvb21WaWV3KGRhdGE6IEpTT04pIHtcclxuICAgIC8vc2V0IHRoZSBjbGllbnQgTW9kZWwgb2YgdGhlIHJvb20gdG8gdGhlIHNlcnZlcnMgcmVzcG9uc2VcclxuICAgIGxldCByb29tSW5mbzogTWVzc2FnZVJvb20gPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSlbJ3Jvb20nXTtcclxuXHJcbiAgICBsZXQgcGxheWVyczogeyBba2V5OiBzdHJpbmddOiBQbGF5ZXIgfSA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMocm9vbUluZm8ucGxheWVycykuZm9yRWFjaCh1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYXllckRhdGEgPSByb29tSW5mby5wbGF5ZXJzW3VzZXJuYW1lXTtcclxuICAgICAgICBwbGF5ZXJzW3VzZXJuYW1lXSA9IG5ldyBQbGF5ZXIodXNlcm5hbWUsIHBsYXllckRhdGEuaXNSZWFkeSwgcGxheWVyRGF0YS5jb2xvcik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY3VycmVudFJvb20gPSBuZXcgUm9vbShyb29tSW5mby5jb2RlLFxyXG4gICAgICAgIG5ldyBQbGF5ZXIocm9vbUluZm8uaG9zdC51c2VybmFtZSwgcm9vbUluZm8uaG9zdC5pc1JlYWR5LCByb29tSW5mby5ob3N0LmNvbG9yKSxcclxuICAgICAgICBwbGF5ZXJzLFxyXG4gICAgICAgIHJvb21JbmZvLm1heFNpemUpO1xyXG5cclxuICAgIC8vc2hvdyBzdGFydEdhbWVCdXR0b24gXHJcbiAgICBpZiAoY3VycmVudFBsYXllci51c2VybmFtZSA9PT0gY3VycmVudFJvb20uaG9zdC51c2VybmFtZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0IGEgcmFuZG9tIGNvbG9yIGZvciBhIHBsYXllclxyXG4gICAgY29sb3JQaWNrZXJEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3VycmVudFBsYXllci5jb2xvcjtcclxuICAgIGNvbG9yUGlja2VyLnZhbHVlID0gY3VycmVudFBsYXllci5jb2xvcjtcclxuICAgIGxldCBjb2xvclBpY2tlckxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWxhYmVsJyk7XHJcbiAgICBjb2xvclBpY2tlckxhYmVsLnN0eWxlLmNvbG9yID0gcGlja1RleHRDb2xvckJhc2VkT25CZ0NvbG9yQWR2YW5jZWQoY29sb3JQaWNrZXIudmFsdWUsICcjRkZGRkZGJywgJyMwMDAwMDAnKTtcclxuXHJcbiAgICAvL3Nob3cgdGhlIG5ldyBlbGVtZW50XHJcbiAgICBsb2dpbkRpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgIHJvb21EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mbGV4Jyk7XHJcblxyXG5cclxuXHJcbiAgICByb29tQ29kZUlucHV0LnZhbHVlID0gY3VycmVudFJvb20uY29kZTtcclxuICAgIHJvb21Db2RlU3Bhbi5pbm5lckhUTUwgPSBjdXJyZW50Um9vbS5jb2RlO1xyXG4gICAgc2V0UGxheWVyRGF0YShjdXJyZW50UGxheWVyLCBjdXJyZW50Um9vbS5jb2RlKTtcclxuICAgIHVwZGF0ZVJvb21MaXN0KGRhdGEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvb21MaXN0KGRhdGE6IEpTT04pIHtcclxuICAgIGxldCByb29tSW5mbzogTWVzc2FnZVJvb20gPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSlbJ3Jvb20nXTtcclxuXHJcbiAgICAvLyB1cGRhdGluZyB0aGUgY3VycmVudCByb29tIHBsYXllcnMgYW5kIGhvc3RcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMocm9vbUluZm8ucGxheWVycykuZm9yRWFjaCh1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSb29tLmFkZFBsYXllcihuZXcgUGxheWVyKHVzZXJuYW1lLCBmYWxzZSwgcm9vbUluZm8ucGxheWVyc1t1c2VybmFtZV0uY29sb3IpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSb29tLnBsYXllcnNbdXNlcm5hbWVdLmNvbG9yID0gcm9vbUluZm8ucGxheWVyc1t1c2VybmFtZV0uY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5pc1JlYWR5ID0gcm9vbUluZm8ucGxheWVyc1t1c2VybmFtZV0uaXNSZWFkeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBwbGF5ZXJzIHRoYXQgYXJlIG5vIGxvbmdlciBpbiB0aGUgcm9vbVxyXG4gICAgT2JqZWN0LmtleXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCh1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyb29tSW5mby5wbGF5ZXJzLmhhc093blByb3BlcnR5KHVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50Um9vbS5yZW1vdmVQbGF5ZXIodXNlcm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgY3VycmVudFJvb20uaG9zdCA9IG5ldyBQbGF5ZXIocm9vbUluZm8uaG9zdC51c2VybmFtZSwgcm9vbUluZm8uaG9zdC5pc1JlYWR5LCByb29tSW5mby5ob3N0LmNvbG9yKTtcclxuICAgIGN1cnJlbnRSb29tLm1heFNpemUgPSByb29tSW5mby5tYXhTaXplO1xyXG5cclxuXHJcbiAgICBwbGF5ZXJDb3VudC5pbm5lckhUTUwgPSBgJHtPYmplY3Qua2V5cyhjdXJyZW50Um9vbS5wbGF5ZXJzKS5sZW5ndGh9LyR7Y3VycmVudFJvb20ubWF4U2l6ZX1gO1xyXG4gICAgcm9vbVVzZXJzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBPYmplY3QudmFsdWVzKGN1cnJlbnRSb29tLnBsYXllcnMpLmZvckVhY2goKHBsYXllcjogeyB1c2VybmFtZTogc3RyaW5nIHwgbnVtYmVyOyBpc1JlYWR5OiBib29sZWFuOyBjb2xvcjogc3RyaW5nOyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgIHBsYXllckl0ZW0udGV4dENvbnRlbnQgPSBwbGF5ZXIudXNlcm5hbWUgKyAnJztcclxuXHJcbiAgICAgICAgaWYgKHBsYXllci51c2VybmFtZSA9PT0gY3VycmVudFJvb20uaG9zdC51c2VybmFtZSkge1xyXG4gICAgICAgICAgICBwbGF5ZXJJdGVtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNyb3duXCIgc3R5bGU9XCJjb2xvcjogJHtwbGF5ZXIuY29sb3J9O1wiPjwvaT5gKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXJJdGVtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZVwiIHN0eWxlPVwiY29sb3I6ICR7cGxheWVyLmNvbG9yfTsgbWFyZ2luLWxlZnQ6IDRweFwiPjwvaT5gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXllci5pc1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHBsYXllckl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlXCIgc3R5bGU9XCJjb2xvcjogIzM3Y2I0ODtcIj48L2k+Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVySXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICcgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGVcIiBzdHlsZT1cImNvbG9yOiAjY2IzNzM3O1wiPjwvaT4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvb21Vc2Vyc0xpc3QuYXBwZW5kQ2hpbGQocGxheWVySXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Nob3cgc3RhcnRHYW1lQnV0dG9uIFxyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUgPT09IGN1cnJlbnRSb29tLmhvc3QudXNlcm5hbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGFydEJ1dHRvblByb2dyZXNzKE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZmlsdGVyKHAgPT4gcC5pc1JlYWR5KS5sZW5ndGgsIGN1cnJlbnRSb29tLm1heFNpemUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3RhcnRCdXR0b25Qcm9ncmVzcyhyZWFkeVBsYXllckNvdW50OiBudW1iZXIsIG1heFBsYXllckNvdW50OiBudW1iZXIpIHtcclxuICAgIGlmIChtYXhQbGF5ZXJDb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN0YXJ0UHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBNYXRoLmZsb29yKHJlYWR5UGxheWVyQ291bnQgLyBtYXhQbGF5ZXJDb3VudCAqIDEwMCkgKyAnJSc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFcnJvckFuaW1hdGlvbihyZWFzb246IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2cocmVhc29uKTtcclxuICAgIHJvb21CdXR0b24uY2xhc3NMaXN0LmFkZCgncmVkLWJ1dHRvbicpO1xyXG4gICAgcm9vbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd3aWdnbGUnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJvb21CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVkLWJ1dHRvbicpO1xyXG4gICAgICAgIHJvb21CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnd2lnZ2xlJyk7XHJcbiAgICB9LCA2MDApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29sb3JQaWNrZXIoKSB7XHJcbiAgICBjb2xvclBpY2tlckRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllckNvbG9yKCkge1xyXG4gICAgY3VycmVudFBsYXllci5jb2xvciA9IGNvbG9yUGlja2VyLnZhbHVlO1xyXG4gICAgbGV0IGNvbG9yUGlja2VyTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbGFiZWwnKTtcclxuICAgIGNvbG9yUGlja2VyTGFiZWwuc3R5bGUuY29sb3IgPSBwaWNrVGV4dENvbG9yQmFzZWRPbkJnQ29sb3JBZHZhbmNlZChjb2xvclBpY2tlci52YWx1ZSwgJyNGRkZGRkYnLCAnIzAwMDAwMCcpO1xyXG4gICAgc2V0UGxheWVyRGF0YShjdXJyZW50UGxheWVyLCBjdXJyZW50Um9vbS5jb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGlja1RleHRDb2xvckJhc2VkT25CZ0NvbG9yQWR2YW5jZWQoYmdDb2xvcjogc3RyaW5nLCBsaWdodENvbG9yOiBzdHJpbmcsIGRhcmtDb2xvcjogc3RyaW5nKSB7XHJcbiAgICB2YXIgY29sb3IgPSAoYmdDb2xvci5jaGFyQXQoMCkgPT09ICcjJykgPyBiZ0NvbG9yLnN1YnN0cmluZygxLCA3KSA6IGJnQ29sb3I7XHJcbiAgICB2YXIgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygwLCAyKSwgMTYpOyAvLyBoZXhUb1JcclxuICAgIHZhciBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDIsIDQpLCAxNik7IC8vIGhleFRvR1xyXG4gICAgdmFyIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNCwgNiksIDE2KTsgLy8gaGV4VG9CXHJcbiAgICB2YXIgdWljb2xvcnMgPSBbciAvIDI1NSwgZyAvIDI1NSwgYiAvIDI1NV07XHJcbiAgICB2YXIgYyA9IHVpY29sb3JzLm1hcCgoY29sKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbCA8PSAwLjAzOTI4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2wgLyAxMi45MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KChjb2wgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcclxuICAgIH0pO1xyXG4gICAgdmFyIEwgPSAoMC4yMTI2ICogY1swXSkgKyAoMC43MTUyICogY1sxXSkgKyAoMC4wNzIyICogY1syXSk7XHJcbiAgICByZXR1cm4gKEwgPiAwLjQpID8gZGFya0NvbG9yIDogbGlnaHRDb2xvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG5cclxuICAgIC8vdmVyaWZ5IHRoYXQgdGhlIHBsYXllciBzZW5kaW5nIHRoZSBzdGFydCByZXF1ZXN0IGlzIHRoZSBob3N0XHJcbiAgICBpZiAoY3VycmVudFBsYXllci51c2VybmFtZSAhPSBjdXJyZW50Um9vbS5ob3N0LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRTdGFydENvbW1hbmQoY3VycmVudFJvb20uY29kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvQmFja1RvTG9iYnkoKSB7XHJcbiAgICBzd2l0Y2hHYW1lVmlldyh7dHlwZTogJ0dBTUVfU1RBVEUnLHN0YXRlOiBHYW1lU3RhdGUuSU5fTE9CQll9KTtcclxuICAgIGN1cnJlbnRSb29tLnJlc2V0Um9vbUZvck5ld0dhbWUoKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIuc25ha2UgPSBudWxsO1xyXG4gICAgY3VycmVudFBsYXllci5pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICB1cGRhdGVSZWFkeUJ1dHRvbihjdXJyZW50UGxheWVyLmlzUmVhZHkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoR2FtZVZpZXcoZGF0YTogR2FtZVN0YXRlRGF0YSkge1xyXG4gICAgc3dpdGNoIChkYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGxvZ2luRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgICAgIHJvb21EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgcm9vbURpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZsZXgnKTtcclxuICAgICAgICBnYW1lRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgICAgIGdhbWVEaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICAgICAgLy91cGRhdGUgdGhlIGdhbWUgY2FudmFzIHRvIGZpdCB0aGUgc2NyZWVuXHJcbiAgICAgICAgdXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGxvZ2luRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgICAgIGxvZ2luRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZmxleCcpO1xyXG4gICAgICAgIHJvb21EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICAgICAgZW5kZ2FtZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICBlbmRnYW1lRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktZmxleCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGxhc3RXaW5uZXJTcGFuLmlubmVySFRNTCA9IGAke2N1cnJlbnRSb29tLmxhc3RXaW5uZXIudXNlcm5hbWV9YDtcclxuICAgICAgICAgICAgZ2FtZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICAgICAgZ2FtZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZsZXgnKTtcclxuICAgICAgICAgICAgZW5kZ2FtZURpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LWZsZXgnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlQnV0dG9uKCk7XHJcbn07XHJcblxyXG4od2luZG93IGFzIGFueSkudXBkYXRlQnV0dG9uID0gdXBkYXRlQnV0dG9uO1xyXG4od2luZG93IGFzIGFueSkuaGFuZGxlUm9vbUFjdGlvbiA9IGhhbmRsZVJvb21BY3Rpb247XHJcbih3aW5kb3cgYXMgYW55KS5oYW5kbGVSZWFkeVN0YXRlID0gaGFuZGxlUmVhZHlTdGF0ZTtcclxuKHdpbmRvdyBhcyBhbnkpLnVwZGF0ZUNvbG9yUGlja2VyID0gdXBkYXRlQ29sb3JQaWNrZXI7XHJcbih3aW5kb3cgYXMgYW55KS51cGRhdGVQbGF5ZXJDb2xvciA9IHVwZGF0ZVBsYXllckNvbG9yO1xyXG4od2luZG93IGFzIGFueSkuc3RhcnRHYW1lID0gc3RhcnRHYW1lO1xyXG4od2luZG93IGFzIGFueSkuZ29CYWNrVG9Mb2JieSA9IGdvQmFja1RvTG9iYnk7IiwiaW1wb3J0IFNuYWtlIGZyb20gXCIuLi9TbmFrZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgcHJpdmF0ZSBfdXNlcm5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgaXNSZWFkeTogYm9vbGVhbjtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgc25ha2U6IFNuYWtlIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IodXNlcm5hbWU6IHN0cmluZywgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlLCBjb2xvcj86IHN0cmluZykge1xyXG4gICAgdGhpcy5fdXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgIHRoaXMuaXNSZWFkeSA9IGlzUmVhZHk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgXCIjMDAwMDAwXCIucmVwbGFjZSgvMC9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiAofn4oTWF0aC5yYW5kb20oKSAqIDE2KSkudG9TdHJpbmcoMTYpOyB9KTtcclxuICAgIHRoaXMuc25ha2UgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgdG9KU09OKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgIGlzUmVhZHk6IHRoaXMuaXNSZWFkeSxcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3JcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgLy8gdGhpcy5pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNuYWtlID0gbnVsbDtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHYW1lU3RhdGUge1xyXG4gICAgUlVOTklORyxcclxuICAgIElOX0xPQkJZLFxyXG4gICAgRklOSVNIRURcclxufVxyXG5leHBvcnQgY2xhc3MgUm9vbSB7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiB7IFtrZXk6IHN0cmluZ106IFBsYXllcjsgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBwcml2YXRlIF9ob3N0OiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIF9jb2RlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9sYXN0V2lubmVyOiBQbGF5ZXI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgaG9zdDogUGxheWVyLCBwbGF5ZXJzPzogeyBba2V5OiBzdHJpbmddOiBQbGF5ZXI7IH0sIG1heFNpemU6IG51bWJlciA9IDUpIHtcclxuICAgICAgICB0aGlzLl9jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLl9tYXhTaXplID0gbWF4U2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQbGF5ZXIoaG9zdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wbGF5ZXJzKS5sZW5ndGggPj0gdGhpcy5fbWF4U2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wbGF5ZXJzW3BsYXllci51c2VybmFtZV0gPSBwbGF5ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVBsYXllcih1c2VybmFtZTogc3RyaW5nKXtcclxuICAgICAgICBkZWxldGUgdGhpcy5fcGxheWVyc1t1c2VybmFtZV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZXNldFJvb21Gb3JOZXdHYW1lKCl7XHJcbiAgICAgICAgLy9UT0RPIGZpeCB0aGlzIGdhbWUgc3RhdGUgYnVsbHNoaXRcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuSU5fTE9CQlk7XHJcblxyXG4gICAgICAgIC8vYWxzbyByZXNldCBhbGwgdGhlIHBsYXllcnNcclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuX3BsYXllcnMpLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXQgaG9zdChuZXdIb3N0OiBQbGF5ZXIpe1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wbGF5ZXJzKS5zb21lKHVzZXJuYW1lID0+IHVzZXJuYW1lID09PSBuZXdIb3N0LnVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ob3N0ID0gbmV3SG9zdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwbGF5ZXJzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBob3N0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb2RlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYXhTaXplKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYXhTaXplKG5ld01heFNpemU6IG51bWJlcil7XHJcbiAgICAgICAgaWYgKG5ld01heFNpemUgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IG5ld01heFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGFzdFdpbm5lcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0V2lubmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbGFzdFdpbm5lcihuZXdMYXN0V2lubmVyOiBQbGF5ZXIpe1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wbGF5ZXJzKS5zb21lKHVzZXJuYW1lID0+IHVzZXJuYW1lID09PSBuZXdMYXN0V2lubmVyLnVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0V2lubmVyID0gbmV3TGFzdFdpbm5lcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgUGFydGljbGUsIHsgc2hhcGUgfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24sIGdldFBvc2l0aW9uSW5DaXJjbGUsIGdldFJhbmRvbURpcmVjdGlvbiwgaGV4VG9SZ2IsIGhleFRvUmdiQSB9IGZyb20gJy4vUGFydGljbGVTeXN0ZW1VdGlscyc7XHJcbmltcG9ydCBFbWl0dGVyLCB7IEVtaXR0ZXJPcHRpb25zIH0gZnJvbSBcIi4vRW1pdHRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmN1bGFyRW1pdHRlciBleHRlbmRzIEVtaXR0ZXJ7XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyUmFkaXVzOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGVtaXR0ZXJSYWRpdXM6IG51bWJlcixcclxuICAgICAgICBwb3NpdGlvbjogVmVjdG9yLFxyXG4gICAgICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIGVtaXR0ZXJPcHRpb25zOiBFbWl0dGVyT3B0aW9uc1xyXG4gICAgKXtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgY2FudmFzQ3R4LCBlbWl0dGVyT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fZW1pdHRlclJhZGl1cyA9IGVtaXR0ZXJSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpY2soZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzIC09IGR0O1xyXG5cclxuICAgICAgICAvL2VtaXQgbmV3IHBhcnRpY2xlcyBpZiB0aGUgZW1pdHRlciBpcyBcImFsaXZlXCJcclxuICAgICAgICBpZiAodGhpcy5fdGlja3MgJSB0aGlzLl9lbWl0SW50ZXJ2YWwgPT09IDAgJiYgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZW1pdEFtb3VudFBlclRpY2s7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcy5wb3NpdGlvbi5jbG9uZSgpLmFkZChnZXRQb3NpdGlvbkluQ2lyY2xlKHRoaXMuX2VtaXR0ZXJSYWRpdXMsIHRoaXMuX3NwYXduUGFydGljbGVzT25FZGdlKSkgYXMgVmVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEJpYXNlZFJhbmRvbURpcmVjdGlvbih0aGlzLmVtaXREaXJlY3Rpb24sIHRoaXMuX3NwcmVhZEFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZVNpemUgKiBzY2FsZVksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVTaGFwZSxcclxuICAgICAgICAgICAgICAgICAgICB7IC4uLmhleFRvUmdiQSh0aGlzLl9jb2xvcil9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZU1heEFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb0ZhZGVDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb0ZhZGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVEaXJlY3Rpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9tb3ZlIGFsbCB0aGUgcGFydGljbGVzIGZvcndhcmQgaW4gdGltZVxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS50aWNrKGR0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3JlbW92ZSBwYXJ0aWNsZXMgdGhhdCBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGVpciBsaWZlc3BhblxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzID0gdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHBhcnRpY2xlLmFnZSA+IDApO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fdGlja3MrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYXdFbWl0dGVyWm9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBoZXhUb1JnYkEodGhpcy5fY29sb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyAyMDAwO1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCAqIHNjYWxlWCwgdGhpcy5wb3NpdGlvbi55ICogc2NhbGVZKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7Y29sb3Iucn0sJHtjb2xvci5nfSwke2NvbG9yLmJ9LCAke01hdGgubWluKDAuMiwgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSAvIHRoaXMuX3BhcnRpY2xlTWF4QWdlIC8gNSkpfSlgO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5hcmModGhpcy5wb3NpdGlvbi54ICogc2NhbGVYLCB0aGlzLnBvc2l0aW9uLnkgKiBzY2FsZVksIHRoaXMuX2VtaXR0ZXJSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmRyYXcoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbWl0VGltZShuZXdFbWl0VGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPSBuZXdFbWl0VGltZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IFBhcnRpY2xlLCB7IHNoYXBlIH0gZnJvbSBcIi4vUGFydGljbGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1pdHRlck9wdGlvbnMge1xyXG4gICAgZW1pdEludGVydmFsPzogbnVtYmVyO1xyXG4gICAgZW1pdEFtb3VudFBlclRpY2s/OiBudW1iZXI7XHJcbiAgICBwYXJ0aWNsZVNpemU/OiBudW1iZXI7XHJcbiAgICBzcGVlZD86IG51bWJlcjtcclxuICAgIHBhcnRpY2xlU2hhcGU/OiBzaGFwZTtcclxuICAgIGNvbG9yPzogc3RyaW5nO1xyXG4gICAgZG9GYWRlQ29sb3I/OiBib29sZWFuO1xyXG4gICAgZG9GYWRlU2l6ZT86IGJvb2xlYW47XHJcbiAgICBmYWRlRGlyZWN0aW9uPzogJ25vcm1hbCcgfCAncmV2ZXJzZSc7XHJcbiAgICBwYXJ0aWNsZUFnZT86IG51bWJlcjtcclxuICAgIGVtaXRUaW1lTWlsbGlzPzogbnVtYmVyO1xyXG4gICAgZHJhd0VtaXR0ZXJab25lPzogYm9vbGVhbjtcclxuICAgIGVtaXREaXJlY3Rpb24/OiBWZWN0b3I7XHJcbiAgICBzcHJlYWRBbmdsZT86IG51bWJlcjtcclxuICAgIHNwYXduUGFydGljbGVzT25FZGdlPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEVtaXR0ZXJ7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjtcclxuICAgIHB1YmxpYyBlbWl0RGlyZWN0aW9uOiBWZWN0b3I7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hbGl2ZVBhcnRpY2xlczogUGFydGljbGVbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIF9lbWl0SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfZW1pdEFtb3VudFBlclRpY2s6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfcGFydGljbGVTaGFwZTogc2hhcGU7XHJcbiAgICBwcm90ZWN0ZWQgX3BhcnRpY2xlU2l6ZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9zcGVlZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIF9kb0ZhZGVDb2xvcjogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfZmFkZURpcmVjdGlvbjogJ25vcm1hbCcgfCAncmV2ZXJzZSc7XHJcbiAgICBwcm90ZWN0ZWQgX2RvRmFkZVNpemU6IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgX3BhcnRpY2xlTWF4QWdlOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJvdGVjdGVkIF9yZW1haW5pbmdFbWl0VGltZU1pbGxpczogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9zcHJlYWRBbmdsZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF90aWNrczogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBfZHJhd0VtaXR0ZXJab25lOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIF9zcGF3blBhcnRpY2xlc09uRWRnZTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwb3NpdGlvbjogVmVjdG9yLFxyXG4gICAgICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW1pdEludGVydmFsID0gMixcclxuICAgICAgICAgICAgZW1pdEFtb3VudFBlclRpY2sgPSA1LFxyXG4gICAgICAgICAgICBwYXJ0aWNsZVNpemUgPSAxMCxcclxuICAgICAgICAgICAgc3BlZWQgPSAyLFxyXG4gICAgICAgICAgICBwYXJ0aWNsZVNoYXBlID0gJ2NpcmNsZScsXHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNmZmZmZmZmZicsXHJcbiAgICAgICAgICAgIGRvRmFkZUNvbG9yID0gdHJ1ZSxcclxuICAgICAgICAgICAgZG9GYWRlU2l6ZSA9IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGVEaXJlY3Rpb24gPSAnbm9ybWFsJyxcclxuICAgICAgICAgICAgcGFydGljbGVBZ2UgPSA1MCxcclxuICAgICAgICAgICAgZW1pdFRpbWVNaWxsaXMgPSAwLFxyXG4gICAgICAgICAgICBkcmF3RW1pdHRlclpvbmUgPSBmYWxzZSxcclxuICAgICAgICAgICAgZW1pdERpcmVjdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCksXHJcbiAgICAgICAgICAgIHNwcmVhZEFuZ2xlID0gTWF0aC5QSSoyLFxyXG4gICAgICAgICAgICBzcGF3blBhcnRpY2xlc09uRWRnZSA9IGZhbHNlLFxyXG4gICAgICAgIH06IEVtaXR0ZXJPcHRpb25zXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4ID0gY2FudmFzQ3R4O1xyXG4gICAgICAgIHRoaXMuX2VtaXRJbnRlcnZhbCA9IGVtaXRJbnRlcnZhbDtcclxuICAgICAgICB0aGlzLl9lbWl0QW1vdW50UGVyVGljayA9IGVtaXRBbW91bnRQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlU2l6ZSA9IHBhcnRpY2xlU2l6ZTtcclxuICAgICAgICB0aGlzLl9zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlU2hhcGUgPSBwYXJ0aWNsZVNoYXBlO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5fZG9GYWRlQ29sb3IgPSBkb0ZhZGVDb2xvcjtcclxuICAgICAgICB0aGlzLl9kb0ZhZGVTaXplID0gZG9GYWRlU2l6ZTtcclxuICAgICAgICB0aGlzLl9mYWRlRGlyZWN0aW9uID0gZmFkZURpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZU1heEFnZSA9IHBhcnRpY2xlQWdlO1xyXG4gICAgICAgIHRoaXMuX3NwcmVhZEFuZ2xlID0gc3ByZWFkQW5nbGU7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPSBlbWl0VGltZU1pbGxpcztcclxuICAgICAgICB0aGlzLmVtaXREaXJlY3Rpb24gPSBlbWl0RGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX2RyYXdFbWl0dGVyWm9uZSA9IGRyYXdFbWl0dGVyWm9uZTtcclxuICAgICAgICB0aGlzLl9zcGF3blBhcnRpY2xlc09uRWRnZSA9IHNwYXduUGFydGljbGVzT25FZGdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCB0aWNrKGR0OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3KCk6IHZvaWQ7XHJcblxyXG4gICAgc2V0IGVtaXRUaW1lKG5ld0VtaXRUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyA9IG5ld0VtaXRUaW1lO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgZ2V0UmdiQ29sb3IgfSBmcm9tICcuL1BhcnRpY2xlU3lzdGVtVXRpbHMnO1xyXG5leHBvcnQgdHlwZSBzaGFwZSA9ICdjaXJjbGUnIHwgJ3NxdWFyZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yO1xyXG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IFZlY3RvcjtcclxuICAgIHByaXZhdGUgX3NoYXBlOiBzaGFwZTtcclxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb2xvcjogeyByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgfTtcclxuICAgIHByaXZhdGUgX2ZhZGVDb2xvcjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2ZhZGVTaXplOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZmFkZURpcmVjdGlvbjogJ25vcm1hbCcgfCAncmV2ZXJzZSc7XHJcbiAgICBwcml2YXRlIF9hZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgX3NpemVGYWRlQW1vdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb2xvckZhZGVBbW91bnQ6IG51bWJlcjtcclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yLCB2ZWxvY2l0eTogVmVjdG9yLCBzaXplOiBudW1iZXIsIHNwZWVkOiBudW1iZXIsIHNoYXBlOiBzaGFwZSA9ICdjaXJjbGUnLCBjb2xvcjogeyByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgfSwgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGFnZTogbnVtYmVyLCBmYWRlQ29sb3I/OiBib29sZWFuLCBmYWRlU2l6ZT86IGJvb2xlYW4sIGZhZGVEaXJlY3Rpb24/OiAnbm9ybWFsJyB8ICdyZXZlcnNlJykge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9hZ2UgPSBhZ2U7XHJcbiAgICAgICAgdGhpcy5fY29sb3JGYWRlQW1vdW50ID0gY29sb3IuYSAvIHRoaXMuX2FnZTtcclxuICAgICAgICB0aGlzLl9zaXplRmFkZUFtb3VudCA9IHNpemUgLyB0aGlzLl9hZ2U7XHJcblxyXG4gICAgICAgIGlmIChmYWRlRGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0geyAuLi5nZXRSZ2JDb2xvcihjb2xvciksIGE6IDAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUgPSBzaGFwZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4ID0gY2FudmFzQ3R4O1xyXG4gICAgICAgIHRoaXMuX2ZhZGVDb2xvciA9IGZhZGVDb2xvcjtcclxuICAgICAgICB0aGlzLl9mYWRlU2l6ZSA9IGZhZGVTaXplO1xyXG4gICAgICAgIHRoaXMuX2ZhZGVEaXJlY3Rpb24gPSBmYWRlRGlyZWN0aW9uO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpY2soZHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi5hZGQodGhpcy5fdmVsb2NpdHkuY2xvbmUoKS5tdWx0aXBseUJ5U2NhbGFyKGR0ICogdGhpcy5fc3BlZWQpKTtcclxuICAgICAgICBpZiAodGhpcy5fZmFkZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mYWRlRGlyZWN0aW9uID09PSAnbm9ybWFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3IuYSAtPSB0aGlzLl9jb2xvckZhZGVBbW91bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvci5hICs9IHRoaXMuX2NvbG9yRmFkZUFtb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZmFkZVNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZhZGVEaXJlY3Rpb24gPT09ICdub3JtYWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgLT0gdGhpcy5fc2l6ZUZhZGVBbW91bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplICs9IHRoaXMuX3NpemVGYWRlQW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FnZS0tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG5cclxuICAgICAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gMjAwMDtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl9jYW52YXNDdHgubW92ZVRvKHRoaXMuX3Bvc2l0aW9uLnggKiBzY2FsZVgsIHRoaXMuX3Bvc2l0aW9uLnkgKiBzY2FsZVkpO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RoaXMuX2NvbG9yLnJ9LCR7dGhpcy5fY29sb3IuZ30sICR7dGhpcy5fY29sb3IuYn0sICR7dGhpcy5fY29sb3IuYX0pYDtcclxuICAgICAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9zaGFwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmFyYyh0aGlzLl9wb3NpdGlvbi54ICogc2NhbGVYLCB0aGlzLl9wb3NpdGlvbi55ICogc2NhbGVZLCB0aGlzLl9zaXplLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NxdWFyZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbFJlY3QoKHRoaXMuX3Bvc2l0aW9uLnggLSB0aGlzLl9zaXplKSAqIHNjYWxlWCwgKHRoaXMuX3Bvc2l0aW9uLnkgLSB0aGlzLl9zaXplKSAqIHNjYWxlWSwgdGhpcy5fc2l6ZSAqIDIsIHRoaXMuX3NpemUgKiAyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW52YXNDdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FnZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21EaXJlY3Rpb24oKTogVmVjdG9yIHtcclxuXHJcbiAgcmV0dXJuIChuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkgKiAyIC0gMSwgTWF0aC5yYW5kb20oKSAqIDIgLSAxKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJpYXNlZFJhbmRvbURpcmVjdGlvbihkaXJlY3Rpb246IFZlY3Rvciwgc3ByZWFkQW5nbGU6IG51bWJlcik6IFZlY3RvciB7XHJcbiAgY29uc3QgYW5nbGUgPSBnZXRBbmdsZShkaXJlY3Rpb24pICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3ByZWFkQW5nbGU7XHJcbiAgcmV0dXJuIGZyb21BbmdsZShhbmdsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbkluQ2lyY2xlKHJhZGl1czogbnVtYmVyLCBvbkVkZ2U6IGJvb2xlYW4pIHtcclxuICBsZXQgcG9pbnQ7XHJcbiAgZG8ge1xyXG4gICAgcG9pbnQgPSBuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkqcmFkaXVzKjIgLSByYWRpdXMsIE1hdGgucmFuZG9tKCkqcmFkaXVzKjIgLSByYWRpdXMpXHJcbiAgfSB3aGlsZSAocG9pbnQueCoqMiArIHBvaW50LnkqKjIgPiByYWRpdXMqKjIpXHJcblxyXG4gIGlmIChvbkVkZ2Upe1xyXG4gICAgcG9pbnQubm9ybWFsaXNlKCkubXVsUyhyYWRpdXMpO1xyXG4gIH1cclxuICByZXR1cm4gcG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbkluUmVjdGFuZ2xlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyICl7XHJcbiAgcmV0dXJuIG5ldyBWZWN0b3IoTWF0aC5yYW5kb20oKSAqIHdpZHRoLCBNYXRoLnJhbmRvbSgpICogaGVpZ2h0KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpIHtcclxuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gIH0gOiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2JBKGhleDogc3RyaW5nKSB7XHJcbiAgbGV0IGEgPSAwO1xyXG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KT8kL2kuZXhlYyhoZXgpO1xyXG4gIGlmKCB0eXBlb2YgcmVzdWx0WzRdID09PSBcInVuZGVmaW5lZFwiKXtcclxuICAgIGEgPSAxO1xyXG4gIH1lbHNle1xyXG4gICAgYSA9IHBhcnNlSW50KHJlc3VsdFs0XSwgMTYpLzI1NTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXHJcbiAgICBhOiBhXHJcbiAgfSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRBbmdsZSh2ZWN0b3I6IFZlY3Rvcik6IG51bWJlciB7XHJcbiAgcmV0dXJuIE1hdGguYXRhbjIodmVjdG9yLnksIHZlY3Rvci54KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUFuZ2xlKGFuZ2xlOiBudW1iZXIpOiBWZWN0b3Ige1xyXG4gIHJldHVybiBuZXcgVmVjdG9yKE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJnYkNvbG9yKGNvbG9yOiB7cjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyfSkge1xyXG4gIGNvbnN0IHsgciwgZywgYiB9ID0gY29sb3I7XHJcbiAgcmV0dXJuIHsgciwgZywgYiB9O1xyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCBQYXJ0aWNsZSwgeyBzaGFwZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcbmltcG9ydCB7IGdldEJpYXNlZFJhbmRvbURpcmVjdGlvbiwgZ2V0UG9zaXRpb25JbkNpcmNsZSwgZ2V0UG9zaXRpb25JblJlY3RhbmdsZSwgZ2V0UmFuZG9tRGlyZWN0aW9uLCBoZXhUb1JnYiwgaGV4VG9SZ2JBIH0gZnJvbSAnLi9QYXJ0aWNsZVN5c3RlbVV0aWxzJztcclxuaW1wb3J0IEVtaXR0ZXIsIHsgRW1pdHRlck9wdGlvbnMgfSBmcm9tIFwiLi9FbWl0dGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlRW1pdHRlciBleHRlbmRzIEVtaXR0ZXJ7XHJcbiAgICBwcml2YXRlIF93aWR0aDtcclxuICAgIHByaXZhdGUgX2hlaWdodDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBwb3NpdGlvbjogVmVjdG9yLFxyXG4gICAgICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIGVtaXR0ZXJPcHRpb25zOiBFbWl0dGVyT3B0aW9uc1xyXG4gICAgKXtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgY2FudmFzQ3R4LCBlbWl0dGVyT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpY2soZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzIC09IGR0O1xyXG5cclxuICAgICAgICAvL2VtaXQgbmV3IHBhcnRpY2xlcyBpZiB0aGUgZW1pdHRlciBpcyBcImFsaXZlXCJcclxuICAgICAgICBpZiAodGhpcy5fdGlja3MgJSB0aGlzLl9lbWl0SW50ZXJ2YWwgPT09IDAgJiYgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZW1pdEFtb3VudFBlclRpY2s7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcy5wb3NpdGlvbi5jbG9uZSgpLmFkZChnZXRQb3NpdGlvbkluUmVjdGFuZ2xlKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpLnN1YnRyYWN0KG5ldyBWZWN0b3IodGhpcy5fd2lkdGgvMiwgdGhpcy5faGVpZ2h0LzIpKSkgYXMgVmVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEJpYXNlZFJhbmRvbURpcmVjdGlvbih0aGlzLmVtaXREaXJlY3Rpb24sIHRoaXMuX3NwcmVhZEFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZVNpemUgKiBzY2FsZVksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVTaGFwZSxcclxuICAgICAgICAgICAgICAgICAgICB7IC4uLmhleFRvUmdiQSh0aGlzLl9jb2xvcil9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZU1heEFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb0ZhZGVDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb0ZhZGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVEaXJlY3Rpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9tb3ZlIGFsbCB0aGUgcGFydGljbGVzIGZvcndhcmQgaW4gdGltZVxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS50aWNrKGR0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3JlbW92ZSBwYXJ0aWNsZXMgdGhhdCBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGVpciBsaWZlc3BhblxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzID0gdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHBhcnRpY2xlLmFnZSA+IDApO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fdGlja3MrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYXdFbWl0dGVyWm9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gMjAwMDtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4Lm1vdmVUbygodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fd2lkdGgvMikgKiBzY2FsZVgsICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLl9oZWlnaHQvMikgKiBzY2FsZVkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbFN0eWxlID0gYHJnYmEoJHtoZXhUb1JnYih0aGlzLl9jb2xvcil9LCAke01hdGgubWluKDAuMiwgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSAvIHRoaXMuX3BhcnRpY2xlTWF4QWdlIC8gNSkpfSlgO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5yZWN0KHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3dpZHRoLzIsIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuX2hlaWdodC8yLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmRyYXcoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbWl0VGltZShuZXdFbWl0VGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPSBuZXdFbWl0VGltZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgYmFja2dyb3VuZENhbnZhcywgZ2FtZUNhbnZhcywgZ2FtZUNhbnZhc0N0eCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgUmVjdGFuZ3VsYXJFbWl0dGVyIGZyb20gXCIuLi9QYXJ0aWNsZVN5c3RlbS9SZWN0YW5ndWxhckVtaXR0ZXJcIjtcclxuaW1wb3J0IFBvd2VydXAsIHsgUG93ZXJ1cFR5cGUgfSBmcm9tIFwiLi9wb3dlcnVwXCI7XHJcbmltcG9ydCB7IFBvd2VydXBBY3Rpb24gfSBmcm9tIFwiLi4vV2ViU29ja2V0Q2xpZW50L21lc3NhZ2VUeXBlc1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVDYW52YXNTaXplIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBkcmF3R3JpZCB9IGZyb20gXCIuLi9EcmF3ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL01vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgY3VycmVudFBsYXllciB9IGZyb20gXCIuLi9NZW51TWFuYWdlci9sb2dpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG93ZXJ1cEhhbmRsZXIge1xyXG4gIHByaXZhdGUgX3Bvd2VydXBzOiB7IFtrZXk6IG51bWJlcl06IFBvd2VydXAgfSA9IHt9O1xyXG4gIHByaXZhdGUgX3dhbGxFbWl0dGVyczogUmVjdGFuZ3VsYXJFbWl0dGVyW10gPSBbXTtcclxuICBwcml2YXRlIF9wb3J0YWxXYWxscyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2NhbWVyYUxvY2sgPSBmYWxzZTtcclxuICBwcml2YXRlIF9nYW1lQ2FudmFzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImdhbWUtY2FudmFzLWNvbnRhaW5lclwiXHJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVdhbGxFbWl0dGVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplV2FsbEVtaXR0ZXJzKCkge1xyXG4gICAgbGV0IHNpemVzID0gW1xyXG4gICAgICBuZXcgVmVjdG9yKDIwMDAsIDUwKSxcclxuICAgICAgbmV3IFZlY3Rvcig1MCwgMjAwMCksXHJcbiAgICAgIG5ldyBWZWN0b3IoMjAwMCwgNTApLFxyXG4gICAgICBuZXcgVmVjdG9yKDUwLCAyMDAwKSxcclxuICAgIF07XHJcbiAgICBsZXQgZGlyZWN0aW9ucyA9IFtcclxuICAgICAgbmV3IFZlY3RvcigwLCAtMSksXHJcbiAgICAgIG5ldyBWZWN0b3IoLTEsIDApLFxyXG4gICAgICBuZXcgVmVjdG9yKDAsIDEpLFxyXG4gICAgICBuZXcgVmVjdG9yKDEsIDApLFxyXG4gICAgXTtcclxuICAgIGxldCBwb3NpdGlvbnMgPSBbXHJcbiAgICAgIG5ldyBWZWN0b3IoMTAwMCwgNTApLFxyXG4gICAgICBuZXcgVmVjdG9yKDUwLCAxMDAwKSxcclxuICAgICAgbmV3IFZlY3RvcigxMDAwLCAxOTUwKSxcclxuICAgICAgbmV3IFZlY3RvcigxOTUwLCAxMDAwKSxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICB0aGlzLl93YWxsRW1pdHRlcnMucHVzaChcclxuICAgICAgICBuZXcgUmVjdGFuZ3VsYXJFbWl0dGVyKFxyXG4gICAgICAgICAgc2l6ZXNbaV0ueCxcclxuICAgICAgICAgIHNpemVzW2ldLnksXHJcbiAgICAgICAgICBwb3NpdGlvbnNbaV0sXHJcbiAgICAgICAgICBnYW1lQ2FudmFzQ3R4LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZVNoYXBlOiBcInNxdWFyZVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjNTllZWViZmZcIixcclxuICAgICAgICAgICAgZW1pdFRpbWVNaWxsaXM6IDAsXHJcbiAgICAgICAgICAgIGVtaXREaXJlY3Rpb246IGRpcmVjdGlvbnNbaV0sXHJcbiAgICAgICAgICAgIHNwcmVhZEFuZ2xlOiBNYXRoLlBJIC8gNixcclxuICAgICAgICAgICAgc3BlZWQ6IDAuOCxcclxuICAgICAgICAgICAgcGFydGljbGVTaXplOiA4LFxyXG4gICAgICAgICAgICBwYXJ0aWNsZUFnZTogMTAwLFxyXG4gICAgICAgICAgICBlbWl0SW50ZXJ2YWw6IDEsXHJcbiAgICAgICAgICAgIGVtaXRBbW91bnRQZXJUaWNrOiA0LFxyXG4gICAgICAgICAgICBmYWRlRGlyZWN0aW9uOiBcInJldmVyc2VcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUG93ZXJ1cChwb3dlcnVwOiBQb3dlcnVwKSB7XHJcbiAgICB0aGlzLl9wb3dlcnVwc1twb3dlcnVwLmlkXSA9IHBvd2VydXA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUG93ZXJ1cChwb3dlcnVwOiBQb3dlcnVwKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fcG93ZXJ1cHNbcG93ZXJ1cC5pZF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlQb3dlcnVwKHBvd2VydXA6IFBvd2VydXAsIHBsYXllcjogUGxheWVyKSB7XHJcbiAgICBzd2l0Y2ggKHBvd2VydXAudHlwZSkge1xyXG4gICAgICBjYXNlIFBvd2VydXBUeXBlLlBvcnRhbFdhbGxzOlxyXG4gICAgICAgIHRoaXMuZmxpcFdhbGxTdGF0ZSgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmxpcFdhbGxTdGF0ZSgpO1xyXG4gICAgICAgIH0sIHBvd2VydXAuZHVyYXRpb24pO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQb3dlcnVwVHlwZS5DYW1lcmFMb2NrVG9QbGF5ZXI6XHJcbiAgICAgICAgaWYocGxheWVyLnVzZXJuYW1lID09PSBjdXJyZW50UGxheWVyLnVzZXJuYW1lKXtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW1lcmFMb2NrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy9pbmNyZWFzZSB0aGUgY2FudmFzIHJlc29sdXRpb24gaW4gb3JkZXIgdG8gZGVjcmVhc2UgdGhlIGJsdXJcclxuICAgICAgICBnYW1lQ2FudmFzLndpZHRoID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIDI7XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5oZWlnaHQgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIDI7XHJcbiAgICAgICAgYmFja2dyb3VuZENhbnZhcy53aWR0aCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAyO1xyXG4gICAgICAgIGJhY2tncm91bmRDYW52YXMuaGVpZ2h0ID0gYmFja2dyb3VuZENhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAyO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1zY3JlZW4tYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZHJhd0dyaWQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2NhbWVyYUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcy1jb250YWluZXInKS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMSkgcm90YXRlKDByYWQpIHRyYW5zbGF0ZSgwcHgsIDBweClgO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tc2NyZWVuLWJvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcclxuICAgICAgICAgIHVwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgfSwgcG93ZXJ1cC5kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZVBvd2VydXAocG93ZXJ1cCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlWm9uZXModHlwZTogUG93ZXJ1cFR5cGUsIGFtb3VudDogbnVtYmVyKXtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXcoKSB7XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuX3Bvd2VydXBzKS5mb3JFYWNoKChwb3dlcnVwKSA9PiB7XHJcbiAgICAgIHBvd2VydXAuZHJhdygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl93YWxsRW1pdHRlcnMuZm9yRWFjaCgoZW1pdHRlcikgPT4ge1xyXG4gICAgICBlbWl0dGVyLnRpY2soMSk7XHJcbiAgICAgIGVtaXR0ZXIuZHJhdygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZsaXBXYWxsU3RhdGUoKSB7XHJcbiAgICB0aGlzLl9wb3J0YWxXYWxscyA9ICF0aGlzLl9wb3J0YWxXYWxscztcclxuICAgIHRoaXMuX3dhbGxFbWl0dGVycy5mb3JFYWNoKFxyXG4gICAgICAoZW1pdHRlcikgPT4gKGVtaXR0ZXIuZW1pdFRpbWUgPSB0aGlzLl9wb3J0YWxXYWxscyA/IEluZmluaXR5IDogMClcclxuICAgICk7XHJcbiAgICB0aGlzLl9nYW1lQ2FudmFzRGl2LnN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy5fcG9ydGFsV2FsbHNcclxuICAgICAgPyBcIiMzNGM2ZGNcIlxyXG4gICAgICA6IFwiIzU1NTU1NVwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjYW1lcmFMb2NrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhbWVyYUxvY2s7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJFbWl0dGVyIGZyb20gXCIuLi9QYXJ0aWNsZVN5c3RlbS9DaXJjdWxhckVtaXR0ZXJcIjtcclxuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tIFwiLi4vUGFydGljbGVTeXN0ZW0vUGFydGljbGVTeXN0ZW1VdGlsc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlUG93ZXJ1cCB9IGZyb20gXCIuLi9XZWJTb2NrZXRDbGllbnQvbWVzc2FnZVR5cGVzXCI7XHJcblxyXG5leHBvcnQgZW51bSBQb3dlcnVwVHlwZSB7XHJcbiAgU3BlZWRVcCxcclxuICBTcGVlZERvd24sXHJcbiAgQm9tYixcclxuICBGbGlwQnV0dG9ucyxcclxuICBJbnZpc2liaWxpdHksXHJcbiAgUG9ydGFsV2FsbHMsXHJcbiAgQ2FtZXJhTG9ja1RvUGxheWVyLFxyXG59XHJcblxyXG5jb25zdCBTVkdfUEFUSFM6IHsgW2tleSBpbiBQb3dlcnVwVHlwZV06IHN0cmluZyB9ID0ge1xyXG4gIFtQb3dlcnVwVHlwZS5TcGVlZFVwXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvc3BlZWR1cC5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuU3BlZWREb3duXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvc3BlZWRkb3duLnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5Cb21iXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvYm9tYi5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuRmxpcEJ1dHRvbnNdOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy9mbGlwYnV0dG9ucy5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuSW52aXNpYmlsaXR5XTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvaW52aXNpYmlsaXR5LnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5Qb3J0YWxXYWxsc106IFwiLi4vYXNzZXRzL3Bvd2VydXBzL3BvcnRhbHdhbGxzLnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5DYW1lcmFMb2NrVG9QbGF5ZXJdOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy90ZW1wLnN2Z1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG93ZXJ1cCB7XHJcbiAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yO1xyXG4gIHByaXZhdGUgX2NhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcmFkaXVzOiBudW1iZXIgPSAzMDtcclxuICBwcml2YXRlIF90eXBlOiBQb3dlcnVwVHlwZTtcclxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfZW1pdHRlcjogQ2lyY3VsYXJFbWl0dGVyO1xyXG4gIHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHBvc2l0aW9uOiBWZWN0b3IsXHJcbiAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBQb3dlcnVwVHlwZSxcclxuICAgIGR1cmF0aW9uOiBudW1iZXJcclxuICApIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4ID0gY2FudmFzQ3R4O1xyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuX2ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5faW1nLnNyYyA9IFNWR19QQVRIU1t0aGlzLl90eXBlXTtcclxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgQ2lyY3VsYXJFbWl0dGVyKFxyXG4gICAgICB0aGlzLl9yYWRpdXMgKiAwLjYsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLFxyXG4gICAgICB0aGlzLl9jYW52YXNDdHgsXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogdGhpcy5fY29sb3IsXHJcbiAgICAgICAgcGFydGljbGVTaXplOiB0aGlzLl9yYWRpdXMgLyAyLjg1LFxyXG4gICAgICAgIHBhcnRpY2xlQWdlOiA2MCxcclxuICAgICAgICBzcGVlZDogdGhpcy5fcmFkaXVzIC8gMjAsXHJcbiAgICAgICAgZW1pdEFtb3VudFBlclRpY2s6IDMsXHJcbiAgICAgICAgc3Bhd25QYXJ0aWNsZXNPbkVkZ2U6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhdygpIHtcclxuICAgIHRoaXMuX2VtaXR0ZXIudGljaygwLjUpO1xyXG4gICAgdGhpcy5fZW1pdHRlci5kcmF3KCk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIDIwMDA7XHJcbiAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcblxyXG4gICAgdGhpcy5fY2FudmFzQ3R4Lm1vdmVUbyhcclxuICAgICAgdGhpcy5fcG9zaXRpb24ueCAqIHNjYWxlWCxcclxuICAgICAgdGhpcy5fcG9zaXRpb24ueSAqIHNjYWxlWVxyXG4gICAgKTtcclxuICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsU3R5bGUgPSB0aGlzLl9jb2xvcjtcclxuICAgIHRoaXMuX2NhbnZhc0N0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuX2NhbnZhc0N0eC5hcmMoXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnggKiBzY2FsZVgsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgKiBzY2FsZVksXHJcbiAgICAgIHRoaXMuX3JhZGl1cyAqIHNjYWxlWCxcclxuICAgICAgMCxcclxuICAgICAgMiAqIE1hdGguUElcclxuICAgICk7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguZmlsbCgpO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIHRoaXMuZHJhd1NWRygpO1xyXG4gICAgdGhpcy5fZW1pdHRlci5lbWl0VGltZSA9IEluZmluaXR5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3U1ZHKCkge1xyXG4gICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIDIwMDA7XHJcbiAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcbiAgICAvLyB0aGlzLl9jYW52YXNDdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XHJcbiAgICBjb25zdCBpbWFnZVNjYWxlRmFjdG9yID0gMC42O1xyXG5cclxuICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGhpcy5faW1nLndpZHRoIC8gdGhpcy5faW1nLmhlaWdodDtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHNjYWxlZCBkaW1lbnNpb25zIGJhc2VkIG9uIHRoZSBhc3BlY3QgcmF0aW9cclxuICAgIGxldCBkcmF3V2lkdGggPSB0aGlzLl9yYWRpdXMgKiAyICogaW1hZ2VTY2FsZUZhY3RvciAqIHNjYWxlWDtcclxuICAgIGxldCBkcmF3SGVpZ2h0ID0gKHRoaXMuX3JhZGl1cyAqIDIgKiBpbWFnZVNjYWxlRmFjdG9yICogc2NhbGVYKSAvIGFzcGVjdFJhdGlvO1xyXG5cclxuICAgIC8vIEVuc3VyZSB0aGUgaW1hZ2UgZml0cyB3aXRoaW4gdGhlIGdpdmVuIHJhZGl1c1xyXG4gICAgaWYgKGRyYXdIZWlnaHQgPiB0aGlzLl9yYWRpdXMgKiAyICogaW1hZ2VTY2FsZUZhY3RvciAqIHNjYWxlWCkge1xyXG4gICAgICBkcmF3SGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMiAqIGltYWdlU2NhbGVGYWN0b3IgKiBzY2FsZVg7XHJcbiAgICAgIGRyYXdXaWR0aCA9IGRyYXdIZWlnaHQgKiBhc3BlY3RSYXRpbztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jYW52YXNDdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLl9pbWcsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnggKiBzY2FsZVggLSBkcmF3V2lkdGggLyAyLFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi55ICogc2NhbGVZIC0gZHJhd0hlaWdodCAvIDIsXHJcbiAgICAgIGRyYXdXaWR0aCxcclxuICAgICAgZHJhd0hlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogVmVjdG9yIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0eXBlKCk6IFBvd2VydXBUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgdG9KU09OKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICBwb3NpdGlvbjogeyB4OiB0aGlzLnBvc2l0aW9uLngsIHk6IHRoaXMucG9zaXRpb24ueSB9LFxyXG4gICAgICBjb2xvcjogdGhpcy5fY29sb3IsXHJcbiAgICAgIHR5cGU6IHRoaXMuX3R5cGUsXHJcbiAgICAgIHJhZGl1czogdGhpcy5fcmFkaXVzLFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5fZHVyYXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21NZXNzYWdlUG93ZXJ1cChcclxuICAgIGpzb246IE1lc3NhZ2VQb3dlcnVwLFxyXG4gICAgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICApOiBQb3dlcnVwIHtcclxuICAgIHJldHVybiBuZXcgUG93ZXJ1cChcclxuICAgICAganNvbi5wb3dlcnVwLmlkLFxyXG4gICAgICBuZXcgVmVjdG9yKGpzb24ucG93ZXJ1cC5wb3NpdGlvbi54LCBqc29uLnBvd2VydXAucG9zaXRpb24ueSksXHJcbiAgICAgIGNhbnZhc0N0eCxcclxuICAgICAganNvbi5wb3dlcnVwLmNvbG9yLFxyXG4gICAgICBqc29uLnBvd2VydXAudHlwZSxcclxuICAgICAganNvbi5wb3dlcnVwLmR1cmF0aW9uXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU2VnbWVudCB7XG4gICAgYWJzdHJhY3QgaXNDb2xsaWRhYmxlOiBib29sZWFuO1xuICAgIGFic3RyYWN0IGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nKTogdm9pZDtcbiAgICBhYnN0cmFjdCBnZXQgZW5kQW5nbGUoKTogbnVtYmVyO1xuICAgIGFic3RyYWN0IGdldCBlbmRQb2ludCgpOiBWZWN0b3I7XG4gICAgYWJzdHJhY3QgZ2V0Q29udGludWluZ1NlZ21lbnQodHJhbnNmb3JtOiBWZWN0b3IpOiBTZWdtZW50O1xufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IEFyY1NlZ21lbnQgZnJvbSBcIi4vQXJjU2VnbWVudFwiO1xuaW1wb3J0IExpbmVTZWdtZW50IGZyb20gXCIuL0xpbmVTZWdtZW50XCI7XG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi9TZWdtZW50XCI7XG5pbXBvcnQgQ2lyY3VsYXJFbWl0dGVyIGZyb20gXCIuL1BhcnRpY2xlU3lzdGVtL0NpcmN1bGFyRW1pdHRlclwiO1xuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tIFwiLi9QYXJ0aWNsZVN5c3RlbS9QYXJ0aWNsZVN5c3RlbVV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuYWtlIHtcbiAgICBwdWJsaWMgc2VnbWVudHM6IFNlZ21lbnRbXSA9IFtdO1xuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIGlzQWxpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyB0dXJuUmFkaXVzOiBudW1iZXIgPSA2MDtcbiAgICBwcml2YXRlIF9lbWl0dGVyOiBDaXJjdWxhckVtaXR0ZXIgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIF9jYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuXG4gICAgY29uc3RydWN0b3Ioc3RhcnRQb3M6IExpbmVTZWdtZW50LCBjb2xvcjogc3RyaW5nLCBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLmFkZFNlZ21lbnQoc3RhcnRQb3MpO1xuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLl9jYW52YXNDdHggPSBjYW52YXNDdHg7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgQ2lyY3VsYXJFbWl0dGVyKDAsIHRoaXMuaGVhZC5lbmRQb2ludCwgdGhpcy5fY2FudmFzQ3R4LCB7ZW1pdEludGVydmFsOiAyLFxuICAgICAgICAgICAgZW1pdEFtb3VudFBlclRpY2s6IDMsXG4gICAgICAgICAgICBwYXJ0aWNsZVNpemU6IDcsXG4gICAgICAgICAgICBzcGVlZDogNCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLl9jb2xvcixcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWRkU2VnbWVudChzZWdtZW50OiBTZWdtZW50KSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICB9XG5cbiAgICBnZXQgaGVhZCgpOiBTZWdtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMuc2xpY2UoLTEpLnBvcCgpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyAyMDAwO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XG5cblxuICAgICAgICB0aGlzLl9jYW52YXNDdHgubGluZVdpZHRoID0gMTIgKiBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgIC8vVE9ETyBmaXggdGhpcyB0byBiZSBhIHNpbmdsZSBwYXRoXG5cbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKChzZWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgc2VnbWVudC5kcmF3KHRoaXMuX2NhbnZhc0N0eCwgdGhpcy5fY29sb3IpO1xuXG4gICAgICAgICAgICAvL2RyYXcgYSBkb3QgYXQgdGhlIGhlYWQsIHRoaXMgaXMgdXNlZnVsIGlmIHRoZSBzZWdtZW50IGlzIGludmlzaWJsZVxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZCA9PT0gc2VnbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguYXJjKHNlZ21lbnQuZW5kUG9pbnQueCAqIHNjYWxlWCwgc2VnbWVudC5lbmRQb2ludC55ICogc2NhbGVZLCAwLjUgKiBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSksIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbmtpbGwoKSB7XG4gICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG4gICAgdGhpcy5fZW1pdHRlci5wb3NpdGlvbiA9IHRoaXMuaGVhZC5lbmRQb2ludFxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdFRpbWUgPSAxMDtcbn1cblxudXBkYXRlRW1pdHRlcihkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX2VtaXR0ZXIpIHtcbiAgICAgICAgdGhpcy5fZW1pdHRlci50aWNrKGR0KTtcbiAgICAgICAgdGhpcy5fZW1pdHRlci5kcmF3KCk7XG4gICAgfVxufVxuICAgIFxufSIsImltcG9ydCB7IHVwZGF0ZUdhbWVTdGF0ZSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBEaXIgfSBmcm9tIFwiLi4vSW5wdXRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRSb29tLCBzaG93RXJyb3JBbmltYXRpb24sIHNob3dSb29tVmlldywgc3dpdGNoR2FtZVZpZXcsIHVwZGF0ZVJvb21MaXN0IH0gZnJvbSBcIi4uL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9Nb2RlbHMvUGxheWVyXCI7XHJcblxyXG5sZXQgc29ja2V0OiBXZWJTb2NrZXQ7XHJcblxyXG5mdW5jdGlvbiBpbml0V2ViU29ja2V0KCkge1xyXG4gICAgLy8gc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX06MzAwMGApO1xyXG4gICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3NzOi8vc25ha2VnYW1lLXNlcnZlci5tYXhpby5zaXRlYCk7XHJcbiAgICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBlc3RhYmxpc2hlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2UgZnJvbSBzZXJ2ZXI6JywgZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnSk9JTkVEX1JPT00nOlxyXG4gICAgICAgICAgICAgICAgc2hvd1Jvb21WaWV3KGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0pPSU5fRkFJTCc6XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3JBbmltYXRpb24oZGF0YS5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JPT01fREFUQSc6XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVSb29tTGlzdChldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdHQU1FX1NUQVRFJzpcclxuICAgICAgICAgICAgICAgIHN3aXRjaEdhbWVWaWV3KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dBTUVQTEFZX0RBVEEnOlxyXG4gICAgICAgICAgICAgICAgdXBkYXRlR2FtZVN0YXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0VSUk9SJzpcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGBFcnJvcjogJHtkYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzb2NrZXQub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzb2NrZXQub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm9vbSh1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ0NSRUFURV9ST09NJywgdXNlcm5hbWU6IHVzZXJuYW1lIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5Sb29tKHJvb21Db2RlOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnSk9JTl9ST09NJywgcm9vbUNvZGU6IHJvb21Db2RlLCB1c2VybmFtZTogdXNlcm5hbWUgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGxheWVyRGF0YShwbGF5ZXI6IFBsYXllciwgcm9vbUNvZGU6IHN0cmluZykge1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdQTEFZRVJfREFUQScsIHBsYXllcjogcGxheWVyLCByb29tQ29kZTogcm9vbUNvZGV9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kS2V5RXZlbnRUb1NlcnZlcihrZXk6IERpciwgcHJlc3NlZDogYm9vbGVhbil7XHJcbiAgICBpZiAoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ0tFWV9FVkVOVCcsIHJvb21Db2RlOiBjdXJyZW50Um9vbS5jb2RlLCB1c2VybmFtZTogY3VycmVudFBsYXllci51c2VybmFtZSwga2V5OiBrZXksIHByZXNzZWQ6IHByZXNzZWQgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZFN0YXJ0Q29tbWFuZChyb29tQ29kZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ0JFR0lOX0dBTUUnLCByb29tQ29kZTogcm9vbUNvZGV9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmluaXRXZWJTb2NrZXQoKTtcclxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgQXJjU2VnbWVudCBmcm9tIFwiLi9BcmNTZWdtZW50XCI7XG5pbXBvcnQgeyBkcmF3R3JpZCB9IGZyb20gXCIuL0RyYXdlclwiO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tIFwiLi9JbnB1dE1hbmFnZXJcIjtcbmltcG9ydCBMaW5lU2VnbWVudCBmcm9tIFwiLi9MaW5lU2VnbWVudFwiO1xuaW1wb3J0IFNuYWtlIGZyb20gXCIuL1NuYWtlXCI7XG5pbXBvcnQgQ2lyY3VsYXJFbWl0dGVyIGZyb20gXCIuL1BhcnRpY2xlU3lzdGVtL0NpcmN1bGFyRW1pdHRlclwiO1xuaW1wb3J0IHtcbiAgTWVzc2FnZUdhbWVwbGF5LFxuICBQb3dlcnVwQWN0aW9uLFxuICBtZXNzYWdlQXJjU2VnbWVudCxcbiAgbWVzc2FnZUxpbmVTZWdtZW50LFxufSBmcm9tIFwiLi9XZWJTb2NrZXRDbGllbnQvbWVzc2FnZVR5cGVzXCI7XG5pbXBvcnQgeyBjdXJyZW50UGxheWVyLCBjdXJyZW50Um9vbSB9IGZyb20gXCIuL01lbnVNYW5hZ2VyL2xvZ2luXCI7XG5pbXBvcnQgUG93ZXJ1cEhhbmRsZXIgZnJvbSBcIi4vUG93ZXJ1cFN5c3RlbS9Qb3dlcnVwSGFuZGxlclwiO1xuaW1wb3J0IFBvd2VydXAgZnJvbSBcIi4vUG93ZXJ1cFN5c3RlbS9wb3dlcnVwXCI7XG5jb25zdCBnYW1lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiZ2FtZS1jYW52YXMtY29udGFpbmVyXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG52YXIgZnBzQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mcHNDb3VudGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuZnBzQ291bnRlci5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbmZwc0NvdW50ZXIuc3R5bGUubGVmdCA9IFwiMTBweFwiO1xuZnBzQ291bnRlci5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbmxldCBwcmV2R2FtZURpdkFuZ2xlID0gMDtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnBzQ291bnRlcik7XG5leHBvcnQgdmFyIGZwcyA9IDYwO1xuXG5leHBvcnQgdmFyIGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJnYW1lLWNhbnZhc1wiXG4pIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuZXhwb3J0IHZhciBnYW1lQ2FudmFzQ3R4ID0gZ2FtZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xuXG5leHBvcnQgdmFyIGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJiYWNrZ3JvdW5kLWNhbnZhc1wiXG4pIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuZXhwb3J0IHZhciBiYWNrZ3JvdW5kQ2FudmFzQ3R4ID0gYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xuXG5iYWNrZ3JvdW5kQ2FudmFzIS53aWR0aCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5iYWNrZ3JvdW5kQ2FudmFzIS5oZWlnaHQgPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbmdhbWVDYW52YXMhLndpZHRoID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbmdhbWVDYW52YXMhLmhlaWdodCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuLy8yMDAwIC8gNjYuNjY2IH49IDMwXG5leHBvcnQgbGV0IGdyaWRTaXplID0gNjYuNjY2O1xubGV0IGlucHV0TWFuYWdlcjtcbmxldCBwb3dlcnVwSGFuZGxlcjogUG93ZXJ1cEhhbmRsZXI7XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FudmFzU2l6ZSgpIHtcbiAgZ2FtZUNhbnZhcy53aWR0aCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIGdhbWVDYW52YXMuaGVpZ2h0ID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGJhY2tncm91bmRDYW52YXMud2lkdGggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICBiYWNrZ3JvdW5kQ2FudmFzLmhlaWdodCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICBkcmF3R3JpZCgpO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICB2YXIgbXVsdCA9IGZwcyAvIDYwO1xuICBmcmFtZUNvdW50Kys7XG4gIGlmIChmcmFtZUNvdW50ICUgMTAgPT09IDApIHtcbiAgICBmcHMgPSBjYWxjdWxhdGVGUFMoKTtcbiAgICBmcHNDb3VudGVyLmlubmVyVGV4dCA9IGBGUFM6ICR7ZnBzfWA7XG4gIH1cbiAgZ2FtZUNhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCwgZ2FtZUNhbnZhcy53aWR0aCwgZ2FtZUNhbnZhcy5oZWlnaHQpO1xuXG4gIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgcGxheWVyLnNuYWtlLmRyYXcoKTtcbiAgICBwbGF5ZXIuc25ha2UudXBkYXRlRW1pdHRlcigocGVyZm9ybWFuY2Uubm93KCkgLyAxMCAtIGxhc3RUaW1lKSAvIDE1KTtcbiAgfSk7XG5cbiAgcG93ZXJ1cEhhbmRsZXIuZHJhdygpO1xufVxudmFyIGZyYW1lQ291bnQgPSAwO1xudmFyIGxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDtcbmZ1bmN0aW9uIGNhbGN1bGF0ZUZQUygpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDtcbiAgdmFyIHRpbWVEaWZmID0gY3VycmVudFRpbWUgLSBsYXN0VGltZTtcbiAgdmFyIGZwcyA9IE1hdGgucm91bmQoMTAwMCAvIHRpbWVEaWZmKTtcbiAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcbiAgcmV0dXJuIGZwcztcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlQ2FudmFzU2l6ZSk7XG5kcmF3R3JpZCgpO1xuXG5mdW5jdGlvbiBnZXRDbG9zZXN0QW5nbGUoY3VycmVudEFuZ2xlOiBudW1iZXIsIHRhcmdldEFuZ2xlOiBudW1iZXIpIHtcbiAgY29uc3QgcGkyID0gTWF0aC5QSSAqIDI7XG4gIGxldCBkZWx0YSA9ICh0YXJnZXRBbmdsZSAtIGN1cnJlbnRBbmdsZSkgJSBwaTI7XG4gIGlmIChkZWx0YSA+IE1hdGguUEkpIHtcbiAgICBkZWx0YSAtPSBwaTI7XG4gIH0gZWxzZSBpZiAoZGVsdGEgPCAtTWF0aC5QSSkge1xuICAgIGRlbHRhICs9IHBpMjtcbiAgfVxuICByZXR1cm4gY3VycmVudEFuZ2xlICsgZGVsdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHYW1lU3RhdGUoZ2FtZVN0YXRlOiBNZXNzYWdlR2FtZXBsYXkpIHtcbiAgaWYgKGN1cnJlbnRQbGF5ZXIuc25ha2UgPT09IG51bGwpIHtcbiAgICAvLyBJbml0aWFsaXplIHNuYWtlcyB0aGUgZmlyc3QgdGltZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICAgIGdhbWVTdGF0ZS5zbmFrZUhlYWRzLmZvckVhY2goKGhlYWREYXRhKSA9PiB7XG4gICAgICBsZXQgaGVhZCA9IGhlYWREYXRhLmxhc3RTZWdtZW50O1xuICAgICAgbGV0IHVzZXJuYW1lID0gaGVhZERhdGEudXNlcm5hbWU7XG5cbiAgICAgIGxldCBwb3MgPSBoZWFkLmVuZFBvaW50O1xuICAgICAgY3VycmVudFJvb20ucGxheWVyc1t1c2VybmFtZV0uc25ha2UgPSBuZXcgU25ha2UoXG4gICAgICAgIG5ldyBMaW5lU2VnbWVudChcbiAgICAgICAgICBuZXcgVmVjdG9yKHBvcy54LCBwb3MueSksXG4gICAgICAgICAgbmV3IFZlY3Rvcihwb3MueCwgcG9zLnkpLFxuICAgICAgICAgIGhlYWQuaXNDb2xsaWRhYmxlLFxuICAgICAgICAgIGhlYWQuZW5kQW5nbGVcbiAgICAgICAgKSxcbiAgICAgICAgY3VycmVudFJvb20ucGxheWVyc1t1c2VybmFtZV0uY29sb3IsXG4gICAgICAgIGdhbWVDYW52YXNDdHhcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY3VycmVudFBsYXllci5zbmFrZSA9IGN1cnJlbnRSb29tLnBsYXllcnNbY3VycmVudFBsYXllci51c2VybmFtZV0uc25ha2U7XG4gICAgaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcihcbiAgICAgIGN1cnJlbnRSb29tLnBsYXllcnNbY3VycmVudFBsYXllci51c2VybmFtZV0uc25ha2UsXG4gICAgICBbXCJBXCIsIFwiQVJST1dMRUZUXCJdLFxuICAgICAgW1wiRFwiLCBcIkFSUk9XUklHSFRcIl1cbiAgICApO1xuICAgIHBvd2VydXBIYW5kbGVyID0gbmV3IFBvd2VydXBIYW5kbGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGN1cnJlbnRVc2VybmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIHNuYWtlcyBiYXNlZCBvbiB0aGUgbmV3IGdhbWUgc3RhdGVcbiAgICBnYW1lU3RhdGUuc25ha2VIZWFkcy5mb3JFYWNoKChuZXdIZWFkRGF0YSkgPT4ge1xuICAgICAgbGV0IGhlYWQgPSBuZXdIZWFkRGF0YS5sYXN0U2VnbWVudDtcbiAgICAgIGxldCB1c2VybmFtZSA9IG5ld0hlYWREYXRhLnVzZXJuYW1lO1xuICAgICAgbGV0IGVuZFBvcyA9IGhlYWQuZW5kUG9pbnQ7XG4gICAgICBsZXQgc25ha2VUb1VwZGF0ZSA9IGN1cnJlbnRSb29tLnBsYXllcnNbdXNlcm5hbWVdLnNuYWtlO1xuXG4gICAgICBpZiAoZ2FtZVN0YXRlLnBvd2VydXBMaXN0ICE9PSBudWxsKSB7XG4gICAgICAgIC8vdXBkYXRlIHBvd2VydXBzIGxpc3RcbiAgICAgICAgZ2FtZVN0YXRlLnBvd2VydXBMaXN0LmZvckVhY2goKHBvd2VydXBJbmZvKSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChwb3dlcnVwSW5mby5hY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgUG93ZXJ1cEFjdGlvbi5SRU1PVkU6XG4gICAgICAgICAgICAgIHBvd2VydXBIYW5kbGVyLnJlbW92ZVBvd2VydXAoXG4gICAgICAgICAgICAgICAgUG93ZXJ1cC5mcm9tTWVzc2FnZVBvd2VydXAocG93ZXJ1cEluZm8sIGdhbWVDYW52YXNDdHgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb3dlcnVwQWN0aW9uLlNQQVdOOlxuICAgICAgICAgICAgICBwb3dlcnVwSGFuZGxlci5hZGRQb3dlcnVwKFxuICAgICAgICAgICAgICAgIFBvd2VydXAuZnJvbU1lc3NhZ2VQb3dlcnVwKHBvd2VydXBJbmZvLCBnYW1lQ2FudmFzQ3R4KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG93ZXJ1cEFjdGlvbi5BUFBMWTpcbiAgICAgICAgICAgICAgcG93ZXJ1cEhhbmRsZXIuYXBwbHlQb3dlcnVwKFxuICAgICAgICAgICAgICAgIFBvd2VydXAuZnJvbU1lc3NhZ2VQb3dlcnVwKHBvd2VydXBJbmZvLCBnYW1lQ2FudmFzQ3R4KSwgcG93ZXJ1cEluZm8ucGxheWVyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8va2VlcCB0cmFjayBvZiB0aGUgdXNlcm5hbWVzIHNlbnQgYnkgdGhlIHNlcnZlciBpbiB0aGUgZGF0YVxuICAgICAgY3VycmVudFVzZXJuYW1lcy5wdXNoKHVzZXJuYW1lKTtcbiAgICAgIC8vIHRyYW5zbGF0ZSgke2hlYWQuZW5kUG9pbnQueCAqIGdhbWVDYW52YXMud2lkdGggLyAyMDAwIH1weCwgJHtoZWFkLmVuZFBvaW50LnkgKiBnYW1lQ2FudmFzLndpZHRoIC8gMjAwMH1weClcblxuICAgICAgaWYgKGhlYWQuaXNOZXdUaGlzVGljaykge1xuICAgICAgICBpZiAobmV3SGVhZERhdGEuc2VnbWVudFR5cGUgPT09IFwiTGluZVNlZ21lbnRcIikge1xuICAgICAgICAgIGhlYWQgPSBoZWFkIGFzIG1lc3NhZ2VMaW5lU2VnbWVudDtcbiAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBoZWFkLnN0YXJ0UG9pbnQ7XG5cbiAgICAgICAgICBzbmFrZVRvVXBkYXRlLmFkZFNlZ21lbnQoXG4gICAgICAgICAgICBuZXcgTGluZVNlZ21lbnQoXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3Ioc3RhcnRQb3MueCwgc3RhcnRQb3MueSksXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3IoZW5kUG9zLngsIGVuZFBvcy55KSxcbiAgICAgICAgICAgICAgaGVhZC5pc0NvbGxpZGFibGUsXG4gICAgICAgICAgICAgIGhlYWQuZW5kQW5nbGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWREYXRhLnNlZ21lbnRUeXBlID09PSBcIkFyY1NlZ21lbnRcIikge1xuICAgICAgICAgIGhlYWQgPSBoZWFkIGFzIG1lc3NhZ2VBcmNTZWdtZW50O1xuICAgICAgICAgIGxldCBjZW50ZXIgPSBoZWFkLmNlbnRlcjtcbiAgICAgICAgICBzbmFrZVRvVXBkYXRlLmFkZFNlZ21lbnQoXG4gICAgICAgICAgICBuZXcgQXJjU2VnbWVudChcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcihjZW50ZXIueCwgY2VudGVyLnkpLFxuICAgICAgICAgICAgICBoZWFkLnJhZGl1cyxcbiAgICAgICAgICAgICAgaGVhZC5zdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBoZWFkLmVuZEFuZ2xlLFxuICAgICAgICAgICAgICBoZWFkLmNvdW50ZXJDbG9ja3dpc2UsXG4gICAgICAgICAgICAgIGhlYWQuaXNDb2xsaWRhYmxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ld0hlYWREYXRhLnNlZ21lbnRUeXBlID09PSBcIkxpbmVTZWdtZW50XCIpIHtcbiAgICAgICAgICBoZWFkID0gaGVhZCBhcyBtZXNzYWdlTGluZVNlZ21lbnQ7XG5cbiAgICAgICAgICBpZiAocG93ZXJ1cEhhbmRsZXIuY2FtZXJhTG9jaykge1xuICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09PSBjdXJyZW50UGxheWVyLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdBbmdsZSA9IC1oZWFkLmVuZEFuZ2xlIC0gTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICAgIGxldCBjbG9zZXN0QW5nbGUgPSBnZXRDbG9zZXN0QW5nbGUocHJldkdhbWVEaXZBbmdsZSwgbmV3QW5nbGUpO1xuICAgICAgICAgICAgICBnYW1lRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgyKSByb3RhdGUoJHtjbG9zZXN0QW5nbGV9cmFkKSB0cmFuc2xhdGUoJHtcbiAgICAgICAgICAgICAgICAoLWhlYWQuZW5kUG9pbnQueCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyAyMDAwICtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgICAgICAgIH1weCwgJHtcbiAgICAgICAgICAgICAgICAoLWhlYWQuZW5kUG9pbnQueSAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyAyMDAwICtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgICAgICAgIH1weClgO1xuICAgICAgICAgICAgICBwcmV2R2FtZURpdkFuZ2xlID0gY2xvc2VzdEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBoZWFkLnN0YXJ0UG9pbnQ7XG4gICAgICAgICAgc25ha2VUb1VwZGF0ZS5zZWdtZW50c1tzbmFrZVRvVXBkYXRlLnNlZ21lbnRzLmxlbmd0aCAtIDFdID1cbiAgICAgICAgICAgIG5ldyBMaW5lU2VnbWVudChcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcihzdGFydFBvcy54LCBzdGFydFBvcy55KSxcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcihlbmRQb3MueCwgZW5kUG9zLnkpLFxuICAgICAgICAgICAgICBoZWFkLmlzQ29sbGlkYWJsZSxcbiAgICAgICAgICAgICAgaGVhZC5lbmRBbmdsZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkRGF0YS5zZWdtZW50VHlwZSA9PT0gXCJBcmNTZWdtZW50XCIpIHtcbiAgICAgICAgICBoZWFkID0gaGVhZCBhcyBtZXNzYWdlQXJjU2VnbWVudDtcbiAgICAgICAgICBpZiAocG93ZXJ1cEhhbmRsZXIuY2FtZXJhTG9jaykge1xuICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09PSBjdXJyZW50UGxheWVyLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdBbmdsZSA9IGhlYWQuY291bnRlckNsb2Nrd2lzZVxuICAgICAgICAgICAgICAgID8gLWhlYWQuZW5kQW5nbGVcbiAgICAgICAgICAgICAgICA6IC1oZWFkLmVuZEFuZ2xlIC0gTWF0aC5QSTtcbiAgICAgICAgICAgICAgbGV0IGNsb3Nlc3RBbmdsZSA9IGdldENsb3Nlc3RBbmdsZShwcmV2R2FtZURpdkFuZ2xlLCBuZXdBbmdsZSk7XG4gICAgICAgICAgICAgIGdhbWVEaXYuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDIpIHJvdGF0ZSgke2Nsb3Nlc3RBbmdsZX1yYWQpIHRyYW5zbGF0ZSgke1xuICAgICAgICAgICAgICAgICgtaGVhZC5lbmRQb2ludC54ICogd2luZG93LmlubmVySGVpZ2h0KSAvIDIwMDAgK1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICAgICAgICAgICAgfXB4LCAke1xuICAgICAgICAgICAgICAgICgtaGVhZC5lbmRQb2ludC55ICogd2luZG93LmlubmVySGVpZ2h0KSAvIDIwMDAgK1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcbiAgICAgICAgICAgICAgfXB4KWA7XG4gICAgICAgICAgICAgIHByZXZHYW1lRGl2QW5nbGUgPSBjbG9zZXN0QW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBjZW50ZXIgPSBoZWFkLmNlbnRlcjtcbiAgICAgICAgICBzbmFrZVRvVXBkYXRlLnNlZ21lbnRzW3NuYWtlVG9VcGRhdGUuc2VnbWVudHMubGVuZ3RoIC0gMV0gPVxuICAgICAgICAgICAgbmV3IEFyY1NlZ21lbnQoXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3IoY2VudGVyLngsIGNlbnRlci55KSxcbiAgICAgICAgICAgICAgaGVhZC5yYWRpdXMsXG4gICAgICAgICAgICAgIGhlYWQuc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgaGVhZC5lbmRBbmdsZSxcbiAgICAgICAgICAgICAgaGVhZC5jb3VudGVyQ2xvY2t3aXNlLFxuICAgICAgICAgICAgICBoZWFkLmlzQ29sbGlkYWJsZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy93aGVuIGEgdXNlcm5hbWUgdGhhdCBpcyBvbiB0aGUgY2xpZW50IGxpc3QgaXMgbm8gbG9uZ2VyIHNlZW4gaW4gdGhlIGRhdGEgZnJvbSB0aGUgc2VydmVyLCBraWxsIGhpbVxuICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBpZiAoIWN1cnJlbnRVc2VybmFtZXMuaW5jbHVkZXMocGxheWVyLnVzZXJuYW1lKSAmJiBwbGF5ZXIuc25ha2UuaXNBbGl2ZSkge1xuICAgICAgICBwbGF5ZXIuc25ha2Uua2lsbCgpO1xuXG4gICAgICAgIC8vc2V0IHRoZSBsYXN0IHdpbm5lciBpZiBub29uZSBpcyBhbGl2ZSBub3dcbiAgICAgICAgaWYgKFxuICAgICAgICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZXZlcnkoXG4gICAgICAgICAgICAocGxheWVyKSA9PiAhcGxheWVyLnNuYWtlLmlzQWxpdmVcbiAgICAgICAgICApID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGN1cnJlbnRSb29tLmxhc3RXaW5uZXIgPSBwbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhbmltYXRlKCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVGhlc2UgdmFsdWVzIGFyZSB1c2VkIGJ5IHRoZSBgQWJzdHJhY3RWZWN0b3Iucm91bmRgIG1ldGhvZCB0byBpbmNyZWFzZVxuICogcGVyZm9ybWFuY2UgdnMuIHVzaW5nICBOdW1iZXIudG9GaXhlZC5cbiAqL1xudmFyIHByZWNpc2lvbiA9IFtcbiAgICAxLFxuICAgIDEwLFxuICAgIDEwMCxcbiAgICAxMDAwLFxuICAgIDEwMDAwLFxuICAgIDEwMDAwMCxcbiAgICAxMDAwMDAwLFxuICAgIDEwMDAwMDAwLFxuICAgIDEwMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAwXG5dO1xuLyoqXG4gKiBUaGUgY2xhc3MgdGhhdCBhbGwgb3RoZXIgdmVjdG9yIHJlcHJlc2VudGF0aW9ucyBhcmUgZGVyaXZlZCBmcm9tLlxuICpcbiAqIENvbnRhaW5zIHRoZSBjb3JlIGltcGxlbWVudGF0aW9uIGZvciBhbGwgbWV0aG9kcyB0aGF0IHdpbGwgYmUgZXhwb3NlZCBieVxuICogdmVjdG9yIGluc3RhbmNlcy5cbiAqXG4gKiBFeGFtcGxlIG9mIGNyZWF0aW5nIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBBYnN0cmFjdFZlY3RvciB9IGZyb20gXCIuL0Fic3RyYWN0VmVjdG9yXCJcbiAqXG4gKiBleHBvcnQgY2xhc3MgTXlDdXN0b21WZWN0b3IgZXh0ZW5kcyBBYnN0cmFjdFZlY3RvciB7XG4gKiAgY29uc3RydWN0b3IgKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gKiAgICBzdXBlcihDdXN0b21WZWN0b3JUeXBlKVxuICogIH1cbiAqIH1cbiAqIGBgYFxuICovXG52YXIgQWJzdHJhY3RWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWJzdHJhY3RWZWN0b3IoY3Rvcikge1xuICAgICAgICB0aGlzLmN0b3IgPSBjdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgYm90aCB4IGFuZCB5IGF4aXMgdmFsdWVcbiAgICAgKiBAcGFyYW0geCAgIE5ldyB4IHZhbFxuICAgICAqIEBwYXJhbSB5ICAgTmV3IHkgdmFsXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldEF4ZXMgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHRlciBmb3IgeCB0aGUgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB4IGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB5IGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHRlciBmb3IgeSBheGlzLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZlY3RvciBhcyBhIGZvcm1hdHRlZCBzdHJpbmcsIGUuZyBcIigwLCA0KVwiXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHJvdW5kKSB7XG4gICAgICAgIGlmIChyb3VuZCA9PT0gdm9pZCAwKSB7IHJvdW5kID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIoXCIgKyBNYXRoLnJvdW5kKHRoaXMueCkgKyBcIiwgXCIgKyBNYXRoLnJvdW5kKHRoaXMueSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIilcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBBcnJheSBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIFswLCA0XVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBPYmplY3QgY29udGFpbmluZyB0aGUgdmVjdG9yIGF4ZXMsIGUuZyB7IHg6IDAsIHk6IDQgfVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBwcm92aWRlZCB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdCB0aGUgcHJvdmlkZWQgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBwcm92aWRlZCB2ZWN0b3IgZXF1YWwgdG8gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdmVjLnggPT09IHRoaXMueCAmJiB2ZWMueSA9PT0gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5VmVjdG9yID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggKj0gdmVjLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFYgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5QnlWZWN0b3IodmVjKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5VmVjdG9yID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggLz0gdmVjLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZWID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlWZWN0b3Iodik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggKj0gbjtcbiAgICAgICAgdGhpcy55ICo9IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWxTID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVNjYWxhcihuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdml2ZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5U2NhbGFyID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdGhpcy54IC89IG47XG4gICAgICAgIHRoaXMueSAvPSBuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdml2ZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVNjYWxhcihuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5vcm1hbGlzZSB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKHRoaXMubWFnbml0dWRlKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9yIEFtZXJpY2FuIHNwZWxsaW5nLiBTYW1lIGFzIHVuaXQvbm9ybWFsaXNlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgc2FtZSBhcyBub3JtYWxpc2UgYW5kIG5vcm1hbGl6ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS51bml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tYWduaXR1ZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3F1cmVkIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5sZW5ndGhTcSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4geCAqIHggKyB5ICogeTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB0aGlzLnggKyB2ZWMueSAqIHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlci5cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuY3Jvc3MgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2ZWMueSAtIHRoaXMueSAqIHZlYy54O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV2ZXJzZXMgdGhpcyB2ZWN0b3IgaS5lIG11bHRpcGxpZXMgaXQgYnkgLTFcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZlY3RvciBheGVzIHZhbHVlcyB0byBhYnNvbHV0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLmFicyh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLmFicyh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFplcm9lcyB0aGUgdmVjdG9yIGkuZSBzZXRzIGFsbCBheGVzIHRvIDBcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuemVybyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLnggLSB2Lng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55IC0gdi55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmV0b3IgYnkgcHJvdmlkZWQgcmFkaWFuc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocmFkcykge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkcyk7XG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWRzKTtcbiAgICAgICAgdmFyIG94ID0gdGhpcy54O1xuICAgICAgICB2YXIgb3kgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IG94ICogY29zIC0gb3kgKiBzaW47XG4gICAgICAgIHRoaXMueSA9IG94ICogc2luICsgb3kgKiBjb3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUm91bmRzIHRoaXMgdmVjdG9yIHRvIG4gZGVjaW1hbCBwbGFjZXNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAyOyB9XG4gICAgICAgIHZhciBwID0gcHJlY2lzaW9uW25dO1xuICAgICAgICAvLyBUaGlzIHBlcmZvcm1zIHdhYWF5IGJldHRlciB0aGFuIHRvRml4ZWQgYW5kIGdpdmUgRmxvYXQzMiB0aGUgZWRnZSBhZ2Fpbi5cbiAgICAgICAgLy8gaHR0cDovL3d3dy5keW5hbWljZ3VydS5jb20vamF2YXNjcmlwdC9yb3VuZC1udW1iZXJzLXdpdGgtcHJlY2lzaW9uL1xuICAgICAgICB0aGlzLnggPSAoKDAuNSArIHRoaXMueCAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgdGhpcy55ID0gKCgwLjUgKyB0aGlzLnkgKiBwKSA8PCAwKSAvIHA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNvcHkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9O1xuICAgIHJldHVybiBBYnN0cmFjdFZlY3Rvcjtcbn0oKSk7XG5leHBvcnRzLkFic3RyYWN0VmVjdG9yID0gQWJzdHJhY3RWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BYnN0cmFjdFZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgaW4gYW4gQXJyYXlcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuQXJyYXlWZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgQXJyYXlWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFycmF5VmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFycmF5VmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgQXJyYXlWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBbeCwgeV07XG4gICAgICAgIF90aGlzLmN0b3IgPSBBcnJheVZlY3RvcjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFycmF5VmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLkFycmF5VmVjdG9yID0gQXJyYXlWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcnJheVZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgaW4gYSBGbG9hdDMyQXJyYXlcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuRmxvYXQzMlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBGbG9hdDMyVmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdDMyVmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0MzJWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBGbG9hdDMyVmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5heGVzID0gbmV3IEZsb2F0MzJBcnJheSgyKTtcbiAgICAgICAgX3RoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIF90aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQzMlZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEZsb2F0MzJWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuRmxvYXQzMlZlY3RvciA9IEZsb2F0MzJWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GbG9hdDMyVmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0FycmF5VmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0Zsb2F0MzJWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vVmVjdG9yXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlYzJELmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBhcyBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBpdHNlbGZcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgdiA9IG5ldyBWZWMyRC5WZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgVmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5feCA9IHg7XG4gICAgICAgIF90aGlzLl95ID0geTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5WZWN0b3IgPSBWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWN0b3IuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL01lbnVNYW5hZ2VyL2xvZ2luLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9