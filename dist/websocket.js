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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/WebSocketClient/websocket.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRCxjQUFjO0FBQ2Q7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvQXJjU2VnbWVudC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL0RyYXdlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL0xpbmVTZWdtZW50LnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvTWVudU1hbmFnZXIvbG9naW4udHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9Nb2RlbHMvUGxheWVyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvTW9kZWxzL1Jvb20udHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9QYXJ0aWNsZVN5c3RlbS9DaXJjdWxhckVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9QYXJ0aWNsZVN5c3RlbS9FbWl0dGVyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9QYXJ0aWNsZVN5c3RlbS9QYXJ0aWNsZVN5c3RlbVV0aWxzLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vUmVjdGFuZ3VsYXJFbWl0dGVyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUG93ZXJ1cFN5c3RlbS9Qb3dlcnVwSGFuZGxlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1Bvd2VydXBTeXN0ZW0vcG93ZXJ1cC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1NlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9TbmFrZS50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1dlYlNvY2tldENsaWVudC93ZWJzb2NrZXQudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9BYnN0cmFjdFZlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9BcnJheVZlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9GbG9hdDMyVmVjdG9yLmpzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL1ZlYzJELmpzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZHJhd0FyYywgZHJhd0Fycm93LCBkcmF3RG90IH0gZnJvbSBcIi4vRHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIFZlYzJEIGZyb20gJ3ZlY3RvcjJkJztcclxuaW1wb3J0IFNlZ21lbnQgZnJvbSBcIi4vU2VnbWVudFwiO1xyXG5pbXBvcnQgeyBnYW1lQ2FudmFzQ3R4IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY1NlZ21lbnQgZXh0ZW5kcyBTZWdtZW50IHtcclxuXHJcblxyXG4gICAgcHVibGljIGNlbnRlcjogVmVjMkQuVmVjdG9yO1xyXG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xyXG4gICAgcHVibGljIHN0YXJ0QW5nbGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBlbmRBbmdsZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY291bnRlckNsb2Nrd2lzZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0NvbGxpZGFibGU6IGJvb2xlYW47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNlbnRlcjogVmVjMkQuVmVjdG9yLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb3VudGVyQ2xvY2t3aXNlOiBib29sZWFuLCBpc0NvbGxpZGFibGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGU7XHJcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IGVuZEFuZ2xlO1xyXG4gICAgICAgIHRoaXMuX2NvdW50ZXJDbG9ja3dpc2UgPSBjb3VudGVyQ2xvY2t3aXNlO1xyXG4gICAgICAgIHRoaXMuaXNDb2xsaWRhYmxlID0gaXNDb2xsaWRhYmxlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBzY2FsZVggPSBjb250ZXh0LmNhbnZhcy53aWR0aCAvIDIwMDA7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gY29udGV4dC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuXHJcblxyXG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsaWRhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKHRoaXMuY2VudGVyLnggKiBzY2FsZVgsIHRoaXMuY2VudGVyLnkgKiBzY2FsZVksIHRoaXMucmFkaXVzICogTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpLCB0aGlzLnN0YXJ0QW5nbGUsIHRoaXMuZW5kQW5nbGUsIHRoaXMuX2NvdW50ZXJDbG9ja3dpc2UpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3RGVidWcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29udGV4dC5zdHJva2VTdHlsZSA9ICcjZmYwMGZmZmYnXHJcbiAgICAgICAgbGV0IHRhbmdlbnRfYW5nbGUgPSB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlID8gLSBNYXRoLlBJIDogTWF0aC5QSTtcclxuXHJcbiAgICAgICAgdGFuZ2VudF9hbmdsZSArPSB0aGlzLmVuZEFuZ2xlO1xyXG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICBkcmF3RG90KHRoaXMuY2VudGVyLngsIHRoaXMuY2VudGVyLnksIDUsICcjMDAwMDAwJyk7XHJcbiAgICAgICAgZHJhd0Fycm93KGNvbnRleHQsIG5ldyBWZWMyRC5WZWN0b3IodGhpcy5lbmRQb2ludC54LCB0aGlzLmVuZFBvaW50LnkpLCBuZXcgVmVjMkQuVmVjdG9yKHRoaXMuZW5kUG9pbnQueCArIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGFuZ2VudF9hbmdsZSksIHRoaXMuZW5kUG9pbnQueSArIHRoaXMucmFkaXVzICogTWF0aC5zaW4odGFuZ2VudF9hbmdsZSkpKTtcclxuICAgICAgICBkcmF3QXJjKHRoaXMuY2VudGVyLngsIHRoaXMuY2VudGVyLnksIHRoaXMucmFkaXVzLCAwLCAwLCBmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmRQb2ludCgpOiBWZWMyRC5WZWN0b3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMkQuVmVjdG9yKFxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlci54ICsgdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyh0aGlzLmVuZEFuZ2xlKSxcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXIueSArIHRoaXMucmFkaXVzICogTWF0aC5zaW4odGhpcy5lbmRBbmdsZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwZW5wZW5kaWN1bGFyRW5kQW5nbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvdW50ZXJDbG9ja3dpc2UgPyB0aGlzLmVuZEFuZ2xlIC0gTWF0aC5QSSAvIDIgOiB0aGlzLmVuZEFuZ2xlICsgTWF0aC5QSSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBlbnBlbmRpY3VsYXJTdGFydEFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb3VudGVyQ2xvY2t3aXNlID8gdGhpcy5zdGFydEFuZ2xlIC0gTWF0aC5QSSAvIDIgOiB0aGlzLnN0YXJ0QW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvdW50ZXJDbG9ja3dpc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXJDbG9ja3dpc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGludWluZ1NlZ21lbnQodHJhbnNmb3JtOiBWZWMyRC5WZWN0b3IpOiBTZWdtZW50IHtcclxuICAgICAgICByZXR1cm4gbmV3IEFyY1NlZ21lbnQodGhpcy5jZW50ZXIuY2xvbmUoKS5hZGQodHJhbnNmb3JtKSBhcyBWZWMyRC5WZWN0b3IsIHRoaXMucmFkaXVzLCB0aGlzLmVuZEFuZ2xlLCB0aGlzLmVuZEFuZ2xlLCB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlLCB0aGlzLmlzQ29sbGlkYWJsZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbmltcG9ydCB7IGJhY2tncm91bmRDYW52YXMsIGJhY2tncm91bmRDYW52YXNDdHgsIGdyaWRTaXplIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdHcmlkKCkge1xuXG4gICAgY29uc3Qgc2NhbGVYID0gYmFja2dyb3VuZENhbnZhc0N0eC5jYW52YXMud2lkdGggLyAyMDAwO1xuICAgIGNvbnN0IHNjYWxlWSA9IGJhY2tncm91bmRDYW52YXNDdHguY2FudmFzLmhlaWdodCAvIDIwMDA7XG5cblxuICAgIGJhY2tncm91bmRDYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsIGJhY2tncm91bmRDYW52YXMud2lkdGgsIGJhY2tncm91bmRDYW52YXMuaGVpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4zKSc7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5saW5lV2lkdGggPSAyO1xuICAgIGZvciAobGV0IHggPSBncmlkU2l6ZSAqIHNjYWxlWDsgeCA8IGJhY2tncm91bmRDYW52YXMud2lkdGg7IHggKz0gZ3JpZFNpemUgKiBzY2FsZVgpIHtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5tb3ZlVG8oeCAsIDApO1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmxpbmVUbyh4ICwgYmFja2dyb3VuZENhbnZhcy5oZWlnaHQpO1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCB5ID0gZ3JpZFNpemUgKiBzY2FsZVk7IHkgPCBiYWNrZ3JvdW5kQ2FudmFzLmhlaWdodDsgeSArPSBncmlkU2l6ZSAqIHNjYWxlWSkge1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4Lm1vdmVUbygwLCB5KTtcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5saW5lVG8oYmFja2dyb3VuZENhbnZhcy53aWR0aCwgeSk7XG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHguc3Ryb2tlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0RvdChkb3RYOiBudW1iZXIsIGRvdFk6IG51bWJlciwgZG90U2l6ZTogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5iZWdpblBhdGgoKTtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmFyYyhcbiAgICAgICAgZG90WCxcbiAgICAgICAgZG90WSxcbiAgICAgICAgZG90U2l6ZSxcbiAgICAgICAgMCxcbiAgICAgICAgMiAqIE1hdGguUEksXG4gICAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIGJhY2tncm91bmRDYW52YXNDdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5maWxsKCk7XG5cbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0FyYyhkb3RYOiBudW1iZXIsIGRvdFk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY291bnRlckNsb2Nrd2lzZTogYm9vbGVhbikge1xuICAgIGJhY2tncm91bmRDYW52YXNDdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LnN0cm9rZVN0eWxlID0gXCIjMzQ2NmFhXCI7XG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5iZWdpblBhdGgoKTtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmFyYyhkb3RYLCBkb3RZLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBjb3VudGVyQ2xvY2t3aXNlKTtcblxuICAgIGJhY2tncm91bmRDYW52YXNDdHgubGluZVdpZHRoID0gNTtcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LnN0cm9rZSgpO1xuXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5jbG9zZVBhdGgoKTtcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdBcnJvdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJvbTogVmVjdG9yLCB0bzogVmVjdG9yKSB7XG4gICAgaWYgKGZyb20ueCAhPSB0by54ICYmIGZyb20ueSAhPSB0by55KSB7XG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIodG8ueSAtIGZyb20ueSwgdG8ueCAtIGZyb20ueCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMTA7XG4gICAgICAgIGxldCBoZWFkTGVuZ3RoID0gMTA7XG4gICAgICAgIGxldCBuZXdfdG8gPSBuZXcgVmVjdG9yKHRvLngsIHRvLnkpO1xuICAgICAgICAvLyBUaGlzIG1ha2VzIGl0IHNvIHRoZSBlbmQgb2YgdGhlIGFycm93IGhlYWQgaXMgbG9jYXRlZCBhdCB0b3gsIHRveSwgZG9uJ3QgYXNrIHdoZXJlIDEuMTUgY29tZXMgZnJvbVxuICAgICAgICBuZXdfdG8ueCAtPSBNYXRoLmNvcyhhbmdsZSkgKiAoKHdpZHRoICogMS4xNSkpO1xuICAgICAgICBuZXdfdG8ueSAtPSBNYXRoLnNpbihhbmdsZSkgKiAoKHdpZHRoICogMS4xNSkpO1xuXG5cblxuICAgICAgICAvL3N0YXJ0aW5nIHBhdGggb2YgdGhlIGFycm93IGZyb20gdGhlIHN0YXJ0IHNxdWFyZSB0byB0aGUgZW5kIHNxdWFyZSBhbmQgZHJhd2luZyB0aGUgc3Ryb2tlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLngsIG5ld190by55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjYmJiYmJiXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vc3RhcnRpbmcgYSBuZXcgcGF0aCBmcm9tIHRoZSBoZWFkIG9mIHRoZSBhcnJvdyB0byBvbmUgb2YgdGhlIHNpZGVzIG9mIHRoZSBwb2ludFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8obmV3X3RvLngsIG5ld190by55KTtcbiAgICAgICAgY3R4LmxpbmVUbyhuZXdfdG8ueCAtIGhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA3KSwgbmV3X3RvLnkgLSBoZWFkTGVuZ3RoICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNykpO1xuXG4gICAgICAgIC8vcGF0aCBmcm9tIHRoZSBzaWRlIHBvaW50IG9mIHRoZSBhcnJvdywgdG8gdGhlIG90aGVyIHNpZGUgcG9pbnRcbiAgICAgICAgY3R4LmxpbmVUbyhuZXdfdG8ueCAtIGhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA3KSwgbmV3X3RvLnkgLSBoZWFkTGVuZ3RoICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNykpO1xuXG4gICAgICAgIC8vcGF0aCBmcm9tIHRoZSBzaWRlIHBvaW50IGJhY2sgdG8gdGhlIHRpcCBvZiB0aGUgYXJyb3csIGFuZCB0aGVuIGFnYWluIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIHBvaW50XG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLngsIG5ld190by55KTtcbiAgICAgICAgY3R4LmxpbmVUbyhuZXdfdG8ueCAtIGhlYWRMZW5ndGggKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA3KSwgbmV3X3RvLnkgLSBoZWFkTGVuZ3RoICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNykpO1xuXG4gICAgICAgIC8vZHJhd3MgdGhlIHBhdGhzIGNyZWF0ZWQgYWJvdmVcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjYmJiYmJiXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjYmJiYmJiXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59IiwiaW1wb3J0IFNuYWtlIGZyb20gXCIuL1NuYWtlXCI7XHJcbmltcG9ydCB7IHNlbmRLZXlFdmVudFRvU2VydmVyIH0gZnJvbSBcIi4vV2ViU29ja2V0Q2xpZW50L3dlYnNvY2tldFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gRGlye1xyXG4gIExFRlQsXHJcbiAgUklHSFRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuICBwcml2YXRlIF9rZXlNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgcHJpdmF0ZSBfc25ha2U6IFNuYWtlO1xyXG4gIHByaXZhdGUgX2xlZnRLZXlzOiBzdHJpbmdbXTtcclxuICBwcml2YXRlIF9yaWdodEtleXM6IHN0cmluZ1tdO1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcihzbmFrZTogU25ha2UsIGxlZnRLZXlzOiBzdHJpbmdbXSwgcmlnaHRLZXlzOiBzdHJpbmdbXSkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuX3NuYWtlID0gc25ha2U7XHJcbiAgICB0aGlzLl9sZWZ0S2V5cyA9IGxlZnRLZXlzLm1hcChrZXkgPT4ga2V5LnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgdGhpcy5fcmlnaHRLZXlzID0gcmlnaHRLZXlzLm1hcChrZXkgPT4ga2V5LnRvVXBwZXJDYXNlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vaWYgc25ha2UgaXMgZGVhZCwgaWdub3JlIHRoZSBrZXkgcHJlc3Nlc1xyXG4gICAgaWYoIXRoaXMuX3NuYWtlLmlzQWxpdmUpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAvL2lnbm9yZSBrZXlzIG5vdCBhc3NpZ25lZCB0byBzZWxmLCB0aGlzIHdvdWxkIHJlc3VsdCBpbiB0aGUga2V5bWFwIGhhdmluZyB1bm5lY2Vzc2FyeSBrZXlzIGFuZCB0cmlnZ2VyaW5nIHRoZSBvbmtleVVwIGV2ZW50c1xyXG4gICAgaWYoIXRoaXMuX2xlZnRLZXlzLmluY2x1ZGVzKGtleSkgJiYgIXRoaXMuX3JpZ2h0S2V5cy5pbmNsdWRlcyhrZXkpKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc3dpdGNoIG9mZiB0aGUgY3VycmVudCBkb3duIGtleSBpZiB0aGUgb3RoZXIgZGlyZWN0aW9uIGlzIHByZXNzZWRcclxuICAgIGlmICh0aGlzLl9sZWZ0S2V5cy5zb21lKGxlZnRLZXkgPT4gdGhpcy5fa2V5TWFwW2xlZnRLZXldKSAmJiB0aGlzLl9yaWdodEtleXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICB0aGlzLl9sZWZ0S2V5cy5mb3JFYWNoKGxlZnRLZXkgPT4gdGhpcy5fa2V5TWFwW2xlZnRLZXldID0gZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodEtleXMuc29tZShyaWdodEtleSA9PiB0aGlzLl9rZXlNYXBbcmlnaHRLZXldKSAmJiB0aGlzLl9sZWZ0S2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgIHRoaXMuX3JpZ2h0S2V5cy5mb3JFYWNoKHJpZ2h0S2V5ID0+IHRoaXMuX2tleU1hcFtyaWdodEtleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vcmV0dXJuIGlmIHRoZSBrZXkgaXMgYWxyYWVkeSBpbiB0aGUgbWFwLCBwcmV2ZW50cyBhdXRvY2xpY2tpbmdcclxuICAgIGVsc2UgaWYgKHRoaXMuX2tleU1hcFtrZXldKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fa2V5TWFwW2tleV0gPSB0cnVlO1xyXG5cclxuICAgIHNlbmRLZXlFdmVudFRvU2VydmVyKHRoaXMuX3JpZ2h0S2V5cy5pbmNsdWRlcyhrZXkpID8gRGlyLlJJR0hUIDogRGlyLkxFRlQsIHRydWUpO1xyXG4gIH1cclxuICBwcml2YXRlIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vaWYgc25ha2UgaXMgZGVhZCwgaWdub3JlIHRoZSBrZXkgcHJlc3Nlc1xyXG4gICAgaWYoIXRoaXMuX3NuYWtlLmlzQWxpdmUpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgLy9jaGVjayBpZiB0aGUga2V5IGlzIGluIHRoZSBrZXltYXAsIGlmIG5vdCBqdXN0IGlnbm9yZSBpdFxyXG4gICAgaWYgKCF0aGlzLl9rZXlNYXBba2V5XSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9rZXlNYXBba2V5XSA9IGZhbHNlO1xyXG5cclxuICAgIHNlbmRLZXlFdmVudFRvU2VydmVyKHRoaXMuX3JpZ2h0S2V5cy5pbmNsdWRlcyhrZXkpID8gRGlyLlJJR0hUIDogRGlyLkxFRlQsIGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IFNlZ21lbnQgZnJvbSBcIi4vU2VnbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVNlZ21lbnQgZXh0ZW5kcyBTZWdtZW50IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhcnRQb2ludDogVmVjdG9yO1xyXG4gICAgcHVibGljIGVuZFBvaW50OiBWZWN0b3I7XHJcbiAgICBwdWJsaWMgZW5kQW5nbGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpc0NvbGxpZGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0OiBWZWN0b3IsIGVuZDogVmVjdG9yLCBpc0NvbGxpZGFibGU6IGJvb2xlYW4sIGFuZ2xlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZFBvaW50ID0gZW5kO1xyXG4gICAgICAgIHRoaXMuaXNDb2xsaWRhYmxlID0gaXNDb2xsaWRhYmxlO1xyXG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSBhbmdsZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gY29udGV4dC5jYW52YXMud2lkdGggLyAyMDAwO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGNvbnRleHQuY2FudmFzLmhlaWdodCAvIDIwMDA7XHJcbiAgICAgICAgLy8gY29udGV4dC5zdHJva2VTdHlsZSA9ICcjZmYwMGZmZmYnXHJcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICBpZiAodGhpcy5pc0NvbGxpZGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8odGhpcy5zdGFydFBvaW50LnggKiBzY2FsZVgsIHRoaXMuc3RhcnRQb2ludC55ICogc2NhbGVZKTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8odGhpcy5lbmRQb2ludC54ICogc2NhbGVYLCB0aGlzLmVuZFBvaW50LnkgKiBzY2FsZVkpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodGhpcy5zdGFydFBvaW50LnggLSB0aGlzLmVuZFBvaW50LngpICoqIDIgKyAodGhpcy5zdGFydFBvaW50LnkgLSB0aGlzLmVuZFBvaW50LnkpICoqIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb250aW51aW5nU2VnbWVudCh0cmFuc2Zvcm06IFZlY3Rvcik6IFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkRW5kcG9pbnQgPSB0aGlzLmVuZFBvaW50LmNsb25lKCkuYWRkKHRyYW5zZm9ybSkgYXMgVmVjdG9yO1xyXG4gICAgICAgIHJldHVybiBuZXcgTGluZVNlZ21lbnQoXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkRW5kcG9pbnQsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkRW5kcG9pbnQsXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaWRhYmxlLFxyXG4gICAgICAgICAgICB0aGlzLmVuZEFuZ2xlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyB1cGRhdGVDYW52YXNTaXplIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9Nb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSwgUm9vbSB9IGZyb20gXCIuLi9Nb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGVEYXRhLCBNZXNzYWdlUGxheWVyLCBNZXNzYWdlUm9vbSB9IGZyb20gXCIuLi9XZWJTb2NrZXRDbGllbnQvbWVzc2FnZVR5cGVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb20sIGpvaW5Sb29tLCBzZW5kU3RhcnRDb21tYW5kLCBzZXRQbGF5ZXJEYXRhIH0gZnJvbSBcIi4uL1dlYlNvY2tldENsaWVudC93ZWJzb2NrZXRcIjtcclxuXHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRSb29tOiBSb29tIHwgbnVsbCA9IG51bGw7XHJcbmV4cG9ydCBsZXQgY3VycmVudFBsYXllcjogUGxheWVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG5jb25zdCByb29tQ29kZUlucHV0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tQ29kZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCk7XHJcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KTtcclxuY29uc3Qgcm9vbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2luQnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHJlYWR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWR5QnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IGxvZ2luRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWRpdicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCByb29tRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20tZGl2JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IGVuZGdhbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kZ2FtZS1kaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcGlja2VyJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3Qgcm9vbVVzZXJzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLXVzZXJzLWxpc3QnKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG5jb25zdCByb29tQ29kZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1jb2RlJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbmNvbnN0IHBsYXllckNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1jb3VudCcpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5jb25zdCBjb2xvclBpY2tlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1waWNrZXItY29udGFpbmVyJyk7XHJcbmNvbnN0IHN0YXJ0UHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtcHJvZ3Jlc3MtYmFyJyk7XHJcbmNvbnN0IGxhc3RXaW5uZXJTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3Qtd2lubmVyJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4vLyBzcmMvbG9naW4udHNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbigpIHtcclxuXHJcbiAgICBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvb21CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm9vbUNvZGVJbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdKT0lOIFJPT00nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb29tQnV0dG9uLnRleHRDb250ZW50ID0gJ0NSRUFURSBST09NJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJvb21BY3Rpb24oKSB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWU7XHJcbiAgICBpZiAoIXVzZXJuYW1lKSByZXR1cm47XHJcblxyXG4gICAgY3VycmVudFBsYXllciA9IG5ldyBQbGF5ZXIodXNlcm5hbWUpO1xyXG5cclxuICAgIGlmIChyb29tQnV0dG9uLmlubmVyVGV4dCA9PT0gJ0NSRUFURSBST09NJykge1xyXG4gICAgICAgIGNyZWF0ZVJvb20odXNlcm5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBqb2luUm9vbShyb29tQ29kZUlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCksIHVzZXJuYW1lSW5wdXQudmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVhZHlTdGF0ZSgpIHtcclxuXHJcbiAgICBjdXJyZW50UGxheWVyLmlzUmVhZHkgPSAhY3VycmVudFBsYXllci5pc1JlYWR5O1xyXG4gICAgc2V0UGxheWVyRGF0YShjdXJyZW50UGxheWVyLCBjdXJyZW50Um9vbS5jb2RlKTtcclxuICAgIHVwZGF0ZVJlYWR5QnV0dG9uKGN1cnJlbnRQbGF5ZXIuaXNSZWFkeSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVSZWFkeUJ1dHRvbihpc1JlYWR5OiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNSZWFkeSkge1xyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZC1idXR0b24nKTtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncmVlbi1idXR0b24nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZC1idXR0b24nKTtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbi1idXR0b24nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dSb29tVmlldyhkYXRhOiBKU09OKSB7XHJcbiAgICAvL3NldCB0aGUgY2xpZW50IE1vZGVsIG9mIHRoZSByb29tIHRvIHRoZSBzZXJ2ZXJzIHJlc3BvbnNlXHJcbiAgICBsZXQgcm9vbUluZm86IE1lc3NhZ2VSb29tID0gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKCkpWydyb29tJ107XHJcblxyXG4gICAgbGV0IHBsYXllcnM6IHsgW2tleTogc3RyaW5nXTogUGxheWVyIH0gPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKHJvb21JbmZvLnBsYXllcnMpLmZvckVhY2godXNlcm5hbWUgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXJEYXRhID0gcm9vbUluZm8ucGxheWVyc1t1c2VybmFtZV07XHJcbiAgICAgICAgcGxheWVyc1t1c2VybmFtZV0gPSBuZXcgUGxheWVyKHVzZXJuYW1lLCBwbGF5ZXJEYXRhLmlzUmVhZHksIHBsYXllckRhdGEuY29sb3IpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGN1cnJlbnRSb29tID0gbmV3IFJvb20ocm9vbUluZm8uY29kZSxcclxuICAgICAgICBuZXcgUGxheWVyKHJvb21JbmZvLmhvc3QudXNlcm5hbWUsIHJvb21JbmZvLmhvc3QuaXNSZWFkeSwgcm9vbUluZm8uaG9zdC5jb2xvciksXHJcbiAgICAgICAgcGxheWVycyxcclxuICAgICAgICByb29tSW5mby5tYXhTaXplKTtcclxuXHJcbiAgICAvL3Nob3cgc3RhcnRHYW1lQnV0dG9uIFxyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUgPT09IGN1cnJlbnRSb29tLmhvc3QudXNlcm5hbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldCBhIHJhbmRvbSBjb2xvciBmb3IgYSBwbGF5ZXJcclxuICAgIGNvbG9yUGlja2VyRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRQbGF5ZXIuY29sb3I7XHJcbiAgICBjb2xvclBpY2tlci52YWx1ZSA9IGN1cnJlbnRQbGF5ZXIuY29sb3I7XHJcbiAgICBsZXQgY29sb3JQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1sYWJlbCcpO1xyXG4gICAgY29sb3JQaWNrZXJMYWJlbC5zdHlsZS5jb2xvciA9IHBpY2tUZXh0Q29sb3JCYXNlZE9uQmdDb2xvckFkdmFuY2VkKGNvbG9yUGlja2VyLnZhbHVlLCAnI0ZGRkZGRicsICcjMDAwMDAwJyk7XHJcblxyXG4gICAgLy9zaG93IHRoZSBuZXcgZWxlbWVudFxyXG4gICAgbG9naW5EaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XHJcbiAgICByb29tRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZmxleCcpO1xyXG5cclxuXHJcblxyXG4gICAgcm9vbUNvZGVJbnB1dC52YWx1ZSA9IGN1cnJlbnRSb29tLmNvZGU7XHJcbiAgICByb29tQ29kZVNwYW4uaW5uZXJIVE1MID0gY3VycmVudFJvb20uY29kZTtcclxuICAgIHNldFBsYXllckRhdGEoY3VycmVudFBsYXllciwgY3VycmVudFJvb20uY29kZSk7XHJcbiAgICB1cGRhdGVSb29tTGlzdChkYXRhKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb29tTGlzdChkYXRhOiBKU09OKSB7XHJcbiAgICBsZXQgcm9vbUluZm86IE1lc3NhZ2VSb29tID0gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKCkpWydyb29tJ107XHJcblxyXG4gICAgLy8gdXBkYXRpbmcgdGhlIGN1cnJlbnQgcm9vbSBwbGF5ZXJzIGFuZCBob3N0XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHJvb21JbmZvLnBsYXllcnMpLmZvckVhY2godXNlcm5hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFJvb20ucGxheWVyc1t1c2VybmFtZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Um9vbS5hZGRQbGF5ZXIobmV3IFBsYXllcih1c2VybmFtZSwgZmFsc2UsIHJvb21JbmZvLnBsYXllcnNbdXNlcm5hbWVdLmNvbG9yKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5jb2xvciA9IHJvb21JbmZvLnBsYXllcnNbdXNlcm5hbWVdLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJvb20ucGxheWVyc1t1c2VybmFtZV0uaXNSZWFkeSA9IHJvb21JbmZvLnBsYXllcnNbdXNlcm5hbWVdLmlzUmVhZHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgcGxheWVycyB0aGF0IGFyZSBubyBsb25nZXIgaW4gdGhlIHJvb21cclxuICAgIE9iamVjdC5rZXlzKGN1cnJlbnRSb29tLnBsYXllcnMpLmZvckVhY2godXNlcm5hbWUgPT4ge1xyXG4gICAgICAgIGlmICghcm9vbUluZm8ucGxheWVycy5oYXNPd25Qcm9wZXJ0eSh1c2VybmFtZSkpIHtcclxuICAgICAgICAgICAgY3VycmVudFJvb20ucmVtb3ZlUGxheWVyKHVzZXJuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICAgICBcclxuICAgIGN1cnJlbnRSb29tLmhvc3QgPSBuZXcgUGxheWVyKHJvb21JbmZvLmhvc3QudXNlcm5hbWUsIHJvb21JbmZvLmhvc3QuaXNSZWFkeSwgcm9vbUluZm8uaG9zdC5jb2xvcik7XHJcbiAgICBjdXJyZW50Um9vbS5tYXhTaXplID0gcm9vbUluZm8ubWF4U2l6ZTtcclxuXHJcblxyXG4gICAgcGxheWVyQ291bnQuaW5uZXJIVE1MID0gYCR7T2JqZWN0LmtleXMoY3VycmVudFJvb20ucGxheWVycykubGVuZ3RofS8ke2N1cnJlbnRSb29tLm1heFNpemV9YDtcclxuICAgIHJvb21Vc2Vyc0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgT2JqZWN0LnZhbHVlcyhjdXJyZW50Um9vbS5wbGF5ZXJzKS5mb3JFYWNoKChwbGF5ZXI6IHsgdXNlcm5hbWU6IHN0cmluZyB8IG51bWJlcjsgaXNSZWFkeTogYm9vbGVhbjsgY29sb3I6IHN0cmluZzsgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgICAgICBwbGF5ZXJJdGVtLnRleHRDb250ZW50ID0gcGxheWVyLnVzZXJuYW1lICsgJyc7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIudXNlcm5hbWUgPT09IGN1cnJlbnRSb29tLmhvc3QudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcGxheWVySXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jcm93blwiIHN0eWxlPVwiY29sb3I6ICR7cGxheWVyLmNvbG9yfTtcIj48L2k+YClcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVySXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGVcIiBzdHlsZT1cImNvbG9yOiAke3BsYXllci5jb2xvcn07IG1hcmdpbi1sZWZ0OiA0cHhcIj48L2k+YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuaXNSZWFkeSkge1xyXG4gICAgICAgICAgICBwbGF5ZXJJdGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJyA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZVwiIHN0eWxlPVwiY29sb3I6ICMzN2NiNDg7XCI+PC9pPicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllckl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlXCIgc3R5bGU9XCJjb2xvcjogI2NiMzczNztcIj48L2k+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb29tVXNlcnNMaXN0LmFwcGVuZENoaWxkKHBsYXllckl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zaG93IHN0YXJ0R2FtZUJ1dHRvbiBcclxuICAgIGlmIChjdXJyZW50UGxheWVyLnVzZXJuYW1lID09PSBjdXJyZW50Um9vbS5ob3N0LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhcnRCdXR0b25Qcm9ncmVzcyhPYmplY3QudmFsdWVzKGN1cnJlbnRSb29tLnBsYXllcnMpLmZpbHRlcihwID0+IHAuaXNSZWFkeSkubGVuZ3RoLCBjdXJyZW50Um9vbS5tYXhTaXplKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0YXJ0QnV0dG9uUHJvZ3Jlc3MocmVhZHlQbGF5ZXJDb3VudDogbnVtYmVyLCBtYXhQbGF5ZXJDb3VudDogbnVtYmVyKSB7XHJcbiAgICBpZiAobWF4UGxheWVyQ291bnQgPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzdGFydFByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gTWF0aC5mbG9vcihyZWFkeVBsYXllckNvdW50IC8gbWF4UGxheWVyQ291bnQgKiAxMDApICsgJyUnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RXJyb3JBbmltYXRpb24ocmVhc29uOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XHJcbiAgICByb29tQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZC1idXR0b24nKTtcclxuICAgIHJvb21CdXR0b24uY2xhc3NMaXN0LmFkZCgnd2lnZ2xlJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByb29tQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZC1idXR0b24nKTtcclxuICAgICAgICByb29tQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZ2dsZScpO1xyXG4gICAgfSwgNjAwKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbG9yUGlja2VyKCkge1xyXG4gICAgY29sb3JQaWNrZXJEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJDb2xvcigpIHtcclxuICAgIGN1cnJlbnRQbGF5ZXIuY29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcclxuICAgIGxldCBjb2xvclBpY2tlckxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWxhYmVsJyk7XHJcbiAgICBjb2xvclBpY2tlckxhYmVsLnN0eWxlLmNvbG9yID0gcGlja1RleHRDb2xvckJhc2VkT25CZ0NvbG9yQWR2YW5jZWQoY29sb3JQaWNrZXIudmFsdWUsICcjRkZGRkZGJywgJyMwMDAwMDAnKTtcclxuICAgIHNldFBsYXllckRhdGEoY3VycmVudFBsYXllciwgY3VycmVudFJvb20uY29kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpY2tUZXh0Q29sb3JCYXNlZE9uQmdDb2xvckFkdmFuY2VkKGJnQ29sb3I6IHN0cmluZywgbGlnaHRDb2xvcjogc3RyaW5nLCBkYXJrQ29sb3I6IHN0cmluZykge1xyXG4gICAgdmFyIGNvbG9yID0gKGJnQ29sb3IuY2hhckF0KDApID09PSAnIycpID8gYmdDb2xvci5zdWJzdHJpbmcoMSwgNykgOiBiZ0NvbG9yO1xyXG4gICAgdmFyIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMCwgMiksIDE2KTsgLy8gaGV4VG9SXHJcbiAgICB2YXIgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygyLCA0KSwgMTYpOyAvLyBoZXhUb0dcclxuICAgIHZhciBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDQsIDYpLCAxNik7IC8vIGhleFRvQlxyXG4gICAgdmFyIHVpY29sb3JzID0gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTVdO1xyXG4gICAgdmFyIGMgPSB1aWNvbG9ycy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgIGlmIChjb2wgPD0gMC4wMzkyOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sIC8gMTIuOTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygoY29sICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XHJcbiAgICB9KTtcclxuICAgIHZhciBMID0gKDAuMjEyNiAqIGNbMF0pICsgKDAuNzE1MiAqIGNbMV0pICsgKDAuMDcyMiAqIGNbMl0pO1xyXG4gICAgcmV0dXJuIChMID4gMC40KSA/IGRhcmtDb2xvciA6IGxpZ2h0Q29sb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuXHJcbiAgICAvL3ZlcmlmeSB0aGF0IHRoZSBwbGF5ZXIgc2VuZGluZyB0aGUgc3RhcnQgcmVxdWVzdCBpcyB0aGUgaG9zdFxyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUgIT0gY3VycmVudFJvb20uaG9zdC51c2VybmFtZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kU3RhcnRDb21tYW5kKGN1cnJlbnRSb29tLmNvZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb0JhY2tUb0xvYmJ5KCkge1xyXG4gICAgc3dpdGNoR2FtZVZpZXcoe3R5cGU6ICdHQU1FX1NUQVRFJyxzdGF0ZTogR2FtZVN0YXRlLklOX0xPQkJZfSk7XHJcbiAgICBjdXJyZW50Um9vbS5yZXNldFJvb21Gb3JOZXdHYW1lKCk7XHJcbiAgICBjdXJyZW50UGxheWVyLnNuYWtlID0gbnVsbDtcclxuICAgIGN1cnJlbnRQbGF5ZXIuaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgdXBkYXRlUmVhZHlCdXR0b24oY3VycmVudFBsYXllci5pc1JlYWR5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaEdhbWVWaWV3KGRhdGE6IEdhbWVTdGF0ZURhdGEpIHtcclxuICAgIHN3aXRjaCAoZGF0YS5zdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICBsb2dpbkRpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICByb29tRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xyXG4gICAgICAgIHJvb21EaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICAgICAgZ2FtZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICBnYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZmxleCcpO1xyXG4gICAgICAgIC8vdXBkYXRlIHRoZSBnYW1lIGNhbnZhcyB0byBmaXQgdGhlIHNjcmVlblxyXG4gICAgICAgIHVwZGF0ZUNhbnZhc1NpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBsb2dpbkRpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICBsb2dpbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZsZXgnKTtcclxuICAgICAgICByb29tRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktZmxleCcpO1xyXG4gICAgICAgIGVuZGdhbWVEaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgZW5kZ2FtZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LWZsZXgnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBsYXN0V2lubmVyU3Bhbi5pbm5lckhUTUwgPSBgJHtjdXJyZW50Um9vbS5sYXN0V2lubmVyLnVzZXJuYW1lfWA7XHJcbiAgICAgICAgICAgIGdhbWVEaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgICAgIGdhbWVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICAgICAgICAgIGVuZGdhbWVEaXYuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1mbGV4Jyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZUJ1dHRvbigpO1xyXG59O1xyXG5cclxuKHdpbmRvdyBhcyBhbnkpLnVwZGF0ZUJ1dHRvbiA9IHVwZGF0ZUJ1dHRvbjtcclxuKHdpbmRvdyBhcyBhbnkpLmhhbmRsZVJvb21BY3Rpb24gPSBoYW5kbGVSb29tQWN0aW9uO1xyXG4od2luZG93IGFzIGFueSkuaGFuZGxlUmVhZHlTdGF0ZSA9IGhhbmRsZVJlYWR5U3RhdGU7XHJcbih3aW5kb3cgYXMgYW55KS51cGRhdGVDb2xvclBpY2tlciA9IHVwZGF0ZUNvbG9yUGlja2VyO1xyXG4od2luZG93IGFzIGFueSkudXBkYXRlUGxheWVyQ29sb3IgPSB1cGRhdGVQbGF5ZXJDb2xvcjtcclxuKHdpbmRvdyBhcyBhbnkpLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZTtcclxuKHdpbmRvdyBhcyBhbnkpLmdvQmFja1RvTG9iYnkgPSBnb0JhY2tUb0xvYmJ5OyIsImltcG9ydCBTbmFrZSBmcm9tIFwiLi4vU25ha2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIHByaXZhdGUgX3VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGlzUmVhZHk6IGJvb2xlYW47XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIHNuYWtlOiBTbmFrZSB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHVzZXJuYW1lOiBzdHJpbmcsIGlzUmVhZHk6IGJvb2xlYW4gPSBmYWxzZSwgY29sb3I/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3VzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB0aGlzLmlzUmVhZHkgPSBpc1JlYWR5O1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8IFwiIzAwMDAwMFwiLnJlcGxhY2UoLzAvZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gKH5+KE1hdGgucmFuZG9tKCkgKiAxNikpLnRvU3RyaW5nKDE2KTsgfSk7XHJcbiAgICB0aGlzLnNuYWtlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICBpc1JlYWR5OiB0aGlzLmlzUmVhZHksXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB1c2VybmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpIHtcclxuICAgIC8vIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zbmFrZSA9IG51bGw7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR2FtZVN0YXRlIHtcclxuICAgIFJVTk5JTkcsXHJcbiAgICBJTl9MT0JCWSxcclxuICAgIEZJTklTSEVEXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJvb20ge1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyczogeyBba2V5OiBzdHJpbmddOiBQbGF5ZXI7IH0gPSB7fTtcclxuICAgIHByaXZhdGUgX21heFNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2dhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfaG9zdDogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBfY29kZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbGFzdFdpbm5lcjogUGxheWVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcsIGhvc3Q6IFBsYXllciwgcGxheWVycz86IHsgW2tleTogc3RyaW5nXTogUGxheWVyOyB9LCBtYXhTaXplOiBudW1iZXIgPSA1KSB7XHJcbiAgICAgICAgdGhpcy5fY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IG1heFNpemU7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMgPSBwbGF5ZXJzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUGxheWVyKGhvc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGxheWVycykubGVuZ3RoID49IHRoaXMuX21heFNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcGxheWVyc1twbGF5ZXIudXNlcm5hbWVdID0gcGxheWVyO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVQbGF5ZXIodXNlcm5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3BsYXllcnNbdXNlcm5hbWVdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRSb29tRm9yTmV3R2FtZSgpe1xyXG4gICAgICAgIC8vVE9ETyBmaXggdGhpcyBnYW1lIHN0YXRlIGJ1bGxzaGl0XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gR2FtZVN0YXRlLklOX0xPQkJZO1xyXG5cclxuICAgICAgICAvL2Fsc28gcmVzZXQgYWxsIHRoZSBwbGF5ZXJzXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9wbGF5ZXJzKS5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0IGhvc3QobmV3SG9zdDogUGxheWVyKXtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGxheWVycykuc29tZSh1c2VybmFtZSA9PiB1c2VybmFtZSA9PT0gbmV3SG9zdC51c2VybmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faG9zdCA9IG5ld0hvc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcGxheWVycygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaG9zdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29kZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWF4U2l6ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWF4U2l6ZShuZXdNYXhTaXplOiBudW1iZXIpe1xyXG4gICAgICAgIGlmIChuZXdNYXhTaXplID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuX21heFNpemUgPSBuZXdNYXhTaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RXaW5uZXIoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdFdpbm5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxhc3RXaW5uZXIobmV3TGFzdFdpbm5lcjogUGxheWVyKXtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGxheWVycykuc29tZSh1c2VybmFtZSA9PiB1c2VybmFtZSA9PT0gbmV3TGFzdFdpbm5lci51c2VybmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFdpbm5lciA9IG5ld0xhc3RXaW5uZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IFBhcnRpY2xlLCB7IHNoYXBlIH0gZnJvbSBcIi4vUGFydGljbGVcIjtcclxuaW1wb3J0IHsgZ2V0Qmlhc2VkUmFuZG9tRGlyZWN0aW9uLCBnZXRQb3NpdGlvbkluQ2lyY2xlLCBnZXRSYW5kb21EaXJlY3Rpb24sIGhleFRvUmdiLCBoZXhUb1JnYkEgfSBmcm9tICcuL1BhcnRpY2xlU3lzdGVtVXRpbHMnO1xyXG5pbXBvcnQgRW1pdHRlciwgeyBFbWl0dGVyT3B0aW9ucyB9IGZyb20gXCIuL0VtaXR0ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjdWxhckVtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVye1xyXG4gICAgcHJpdmF0ZSBfZW1pdHRlclJhZGl1czogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBlbWl0dGVyUmFkaXVzOiBudW1iZXIsXHJcbiAgICAgICAgcG9zaXRpb246IFZlY3RvcixcclxuICAgICAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgICBlbWl0dGVyT3B0aW9uczogRW1pdHRlck9wdGlvbnNcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIGNhbnZhc0N0eCwgZW1pdHRlck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX2VtaXR0ZXJSYWRpdXMgPSBlbWl0dGVyUmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aWNrKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyAtPSBkdDtcclxuXHJcbiAgICAgICAgLy9lbWl0IG5ldyBwYXJ0aWNsZXMgaWYgdGhlIGVtaXR0ZXIgaXMgXCJhbGl2ZVwiXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpY2tzICUgdGhpcy5fZW1pdEludGVydmFsID09PSAwICYmIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2VtaXRBbW91bnRQZXJUaWNrOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKHRoaXMucG9zaXRpb24uY2xvbmUoKS5hZGQoZ2V0UG9zaXRpb25JbkNpcmNsZSh0aGlzLl9lbWl0dGVyUmFkaXVzLCB0aGlzLl9zcGF3blBhcnRpY2xlc09uRWRnZSkpIGFzIFZlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24odGhpcy5lbWl0RGlyZWN0aW9uLCB0aGlzLl9zcHJlYWRBbmdsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVTaXplICogc2NhbGVZLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlU2hhcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgeyAuLi5oZXhUb1JnYkEodGhpcy5fY29sb3IpfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVNYXhBZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9GYWRlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9GYWRlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWRlRGlyZWN0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vbW92ZSBhbGwgdGhlIHBhcnRpY2xlcyBmb3J3YXJkIGluIHRpbWVcclxuICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUudGljayhkdClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9yZW1vdmUgcGFydGljbGVzIHRoYXQgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlaXIgbGlmZXNwYW5cclxuICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcyA9IHRoaXMuX2FsaXZlUGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5hZ2UgPiAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3RpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICAgIGlmICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmF3RW1pdHRlclpvbmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gaGV4VG9SZ2JBKHRoaXMuX2NvbG9yKVxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gMjAwMDtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLnggKiBzY2FsZVgsIHRoaXMucG9zaXRpb24ueSAqIHNjYWxlWSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsU3R5bGUgPSBgcmdiYSgke2NvbG9yLnJ9LCR7Y29sb3IuZ30sJHtjb2xvci5ifSwgJHtNYXRoLm1pbigwLjIsICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgLyB0aGlzLl9wYXJ0aWNsZU1heEFnZSAvIDUpKX0pYDtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguYXJjKHRoaXMucG9zaXRpb24ueCAqIHNjYWxlWCwgdGhpcy5wb3NpdGlvbi55ICogc2NhbGVZLCB0aGlzLl9lbWl0dGVyUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5kcmF3KClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW1pdFRpbWUobmV3RW1pdFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID0gbmV3RW1pdFRpbWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCBQYXJ0aWNsZSwgeyBzaGFwZSB9IGZyb20gXCIuL1BhcnRpY2xlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVtaXR0ZXJPcHRpb25zIHtcclxuICAgIGVtaXRJbnRlcnZhbD86IG51bWJlcjtcclxuICAgIGVtaXRBbW91bnRQZXJUaWNrPzogbnVtYmVyO1xyXG4gICAgcGFydGljbGVTaXplPzogbnVtYmVyO1xyXG4gICAgc3BlZWQ/OiBudW1iZXI7XHJcbiAgICBwYXJ0aWNsZVNoYXBlPzogc2hhcGU7XHJcbiAgICBjb2xvcj86IHN0cmluZztcclxuICAgIGRvRmFkZUNvbG9yPzogYm9vbGVhbjtcclxuICAgIGRvRmFkZVNpemU/OiBib29sZWFuO1xyXG4gICAgZmFkZURpcmVjdGlvbj86ICdub3JtYWwnIHwgJ3JldmVyc2UnO1xyXG4gICAgcGFydGljbGVBZ2U/OiBudW1iZXI7XHJcbiAgICBlbWl0VGltZU1pbGxpcz86IG51bWJlcjtcclxuICAgIGRyYXdFbWl0dGVyWm9uZT86IGJvb2xlYW47XHJcbiAgICBlbWl0RGlyZWN0aW9uPzogVmVjdG9yO1xyXG4gICAgc3ByZWFkQW5nbGU/OiBudW1iZXI7XHJcbiAgICBzcGF3blBhcnRpY2xlc09uRWRnZT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFbWl0dGVye1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3I7XHJcbiAgICBwdWJsaWMgZW1pdERpcmVjdGlvbjogVmVjdG9yO1xyXG5cclxuICAgIHByb3RlY3RlZCBfYWxpdmVQYXJ0aWNsZXM6IFBhcnRpY2xlW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBfZW1pdEludGVydmFsOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2VtaXRBbW91bnRQZXJUaWNrOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX3BhcnRpY2xlU2hhcGU6IHNoYXBlO1xyXG4gICAgcHJvdGVjdGVkIF9wYXJ0aWNsZVNpemU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfc3BlZWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBfZG9GYWRlQ29sb3I6IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgX2ZhZGVEaXJlY3Rpb246ICdub3JtYWwnIHwgJ3JldmVyc2UnO1xyXG4gICAgcHJvdGVjdGVkIF9kb0ZhZGVTaXplOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIF9wYXJ0aWNsZU1heEFnZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9jYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByb3RlY3RlZCBfcmVtYWluaW5nRW1pdFRpbWVNaWxsaXM6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfc3ByZWFkQW5nbGU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfdGlja3M6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgX2RyYXdFbWl0dGVyWm9uZTogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfc3Bhd25QYXJ0aWNsZXNPbkVkZ2U6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcG9zaXRpb246IFZlY3RvcixcclxuICAgICAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVtaXRJbnRlcnZhbCA9IDIsXHJcbiAgICAgICAgICAgIGVtaXRBbW91bnRQZXJUaWNrID0gNSxcclxuICAgICAgICAgICAgcGFydGljbGVTaXplID0gMTAsXHJcbiAgICAgICAgICAgIHNwZWVkID0gMixcclxuICAgICAgICAgICAgcGFydGljbGVTaGFwZSA9ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICBjb2xvciA9ICcjZmZmZmZmZmYnLFxyXG4gICAgICAgICAgICBkb0ZhZGVDb2xvciA9IHRydWUsXHJcbiAgICAgICAgICAgIGRvRmFkZVNpemUgPSB0cnVlLFxyXG4gICAgICAgICAgICBmYWRlRGlyZWN0aW9uID0gJ25vcm1hbCcsXHJcbiAgICAgICAgICAgIHBhcnRpY2xlQWdlID0gNTAsXHJcbiAgICAgICAgICAgIGVtaXRUaW1lTWlsbGlzID0gMCxcclxuICAgICAgICAgICAgZHJhd0VtaXR0ZXJab25lID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGVtaXREaXJlY3Rpb24gPSBuZXcgVmVjdG9yKDAsIDApLFxyXG4gICAgICAgICAgICBzcHJlYWRBbmdsZSA9IE1hdGguUEkqMixcclxuICAgICAgICAgICAgc3Bhd25QYXJ0aWNsZXNPbkVkZ2UgPSBmYWxzZSxcclxuICAgICAgICB9OiBFbWl0dGVyT3B0aW9uc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eCA9IGNhbnZhc0N0eDtcclxuICAgICAgICB0aGlzLl9lbWl0SW50ZXJ2YWwgPSBlbWl0SW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy5fZW1pdEFtb3VudFBlclRpY2sgPSBlbWl0QW1vdW50UGVyVGljaztcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZVNpemUgPSBwYXJ0aWNsZVNpemU7XHJcbiAgICAgICAgdGhpcy5fc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZVNoYXBlID0gcGFydGljbGVTaGFwZTtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuX2RvRmFkZUNvbG9yID0gZG9GYWRlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5fZG9GYWRlU2l6ZSA9IGRvRmFkZVNpemU7XHJcbiAgICAgICAgdGhpcy5fZmFkZURpcmVjdGlvbiA9IGZhZGVEaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcGFydGljbGVNYXhBZ2UgPSBwYXJ0aWNsZUFnZTtcclxuICAgICAgICB0aGlzLl9zcHJlYWRBbmdsZSA9IHNwcmVhZEFuZ2xlO1xyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID0gZW1pdFRpbWVNaWxsaXM7XHJcbiAgICAgICAgdGhpcy5lbWl0RGlyZWN0aW9uID0gZW1pdERpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLl9kcmF3RW1pdHRlclpvbmUgPSBkcmF3RW1pdHRlclpvbmU7XHJcbiAgICAgICAgdGhpcy5fc3Bhd25QYXJ0aWNsZXNPbkVkZ2UgPSBzcGF3blBhcnRpY2xlc09uRWRnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgdGljayhkdDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZHJhdygpOiB2b2lkO1xyXG5cclxuICAgIHNldCBlbWl0VGltZShuZXdFbWl0VGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPSBuZXdFbWl0VGltZTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IGdldFJnYkNvbG9yIH0gZnJvbSAnLi9QYXJ0aWNsZVN5c3RlbVV0aWxzJztcclxuZXhwb3J0IHR5cGUgc2hhcGUgPSAnY2lyY2xlJyB8ICdzcXVhcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGUge1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IFZlY3RvcjtcclxuICAgIHByaXZhdGUgX3ZlbG9jaXR5OiBWZWN0b3I7XHJcbiAgICBwcml2YXRlIF9zaGFwZTogc2hhcGU7XHJcbiAgICBwcml2YXRlIF9zaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zcGVlZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHsgcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyIH07XHJcbiAgICBwcml2YXRlIF9mYWRlQ29sb3I6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9mYWRlU2l6ZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2ZhZGVEaXJlY3Rpb246ICdub3JtYWwnIHwgJ3JldmVyc2UnO1xyXG4gICAgcHJpdmF0ZSBfYWdlOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIF9zaXplRmFkZUFtb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY29sb3JGYWRlQW1vdW50OiBudW1iZXI7XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvciwgdmVsb2NpdHk6IFZlY3Rvciwgc2l6ZTogbnVtYmVyLCBzcGVlZDogbnVtYmVyLCBzaGFwZTogc2hhcGUgPSAnY2lyY2xlJywgY29sb3I6IHsgcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyIH0sIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBhZ2U6IG51bWJlciwgZmFkZUNvbG9yPzogYm9vbGVhbiwgZmFkZVNpemU/OiBib29sZWFuLCBmYWRlRGlyZWN0aW9uPzogJ25vcm1hbCcgfCAncmV2ZXJzZScpIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5fYWdlID0gYWdlO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yRmFkZUFtb3VudCA9IGNvbG9yLmEgLyB0aGlzLl9hZ2U7XHJcbiAgICAgICAgdGhpcy5fc2l6ZUZhZGVBbW91bnQgPSBzaXplIC8gdGhpcy5fYWdlO1xyXG5cclxuICAgICAgICBpZiAoZmFkZURpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IHsgLi4uZ2V0UmdiQ29sb3IoY29sb3IpLCBhOiAwIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuX3NoYXBlID0gc2hhcGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eCA9IGNhbnZhc0N0eDtcclxuICAgICAgICB0aGlzLl9mYWRlQ29sb3IgPSBmYWRlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5fZmFkZVNpemUgPSBmYWRlU2l6ZTtcclxuICAgICAgICB0aGlzLl9mYWRlRGlyZWN0aW9uID0gZmFkZURpcmVjdGlvbjtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aWNrKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24uYWRkKHRoaXMuX3ZlbG9jaXR5LmNsb25lKCkubXVsdGlwbHlCeVNjYWxhcihkdCAqIHRoaXMuX3NwZWVkKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZhZGVDb2xvcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZmFkZURpcmVjdGlvbiA9PT0gJ25vcm1hbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yLmEgLT0gdGhpcy5fY29sb3JGYWRlQW1vdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3IuYSArPSB0aGlzLl9jb2xvckZhZGVBbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZhZGVTaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mYWRlRGlyZWN0aW9uID09PSAnbm9ybWFsJykge1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplIC09IHRoaXMuX3NpemVGYWRlQW1vdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSArPSB0aGlzLl9zaXplRmFkZUFtb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hZ2UtLTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIDIwMDA7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4Lm1vdmVUbyh0aGlzLl9wb3NpdGlvbi54ICogc2NhbGVYLCB0aGlzLl9wb3NpdGlvbi55ICogc2NhbGVZKTtcclxuICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbFN0eWxlID0gYHJnYmEoJHt0aGlzLl9jb2xvci5yfSwke3RoaXMuX2NvbG9yLmd9LCAke3RoaXMuX2NvbG9yLmJ9LCAke3RoaXMuX2NvbG9yLmF9KWA7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fc2hhcGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5hcmModGhpcy5fcG9zaXRpb24ueCAqIHNjYWxlWCwgdGhpcy5fcG9zaXRpb24ueSAqIHNjYWxlWSwgdGhpcy5fc2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzcXVhcmUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxSZWN0KCh0aGlzLl9wb3NpdGlvbi54IC0gdGhpcy5fc2l6ZSkgKiBzY2FsZVgsICh0aGlzLl9wb3NpdGlvbi55IC0gdGhpcy5fc2l6ZSkgKiBzY2FsZVksIHRoaXMuX3NpemUgKiAyLCB0aGlzLl9zaXplICogMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hZ2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRGlyZWN0aW9uKCk6IFZlY3RvciB7XHJcblxyXG4gIHJldHVybiAobmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpICogMiAtIDEsIE1hdGgucmFuZG9tKCkgKiAyIC0gMSkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24oZGlyZWN0aW9uOiBWZWN0b3IsIHNwcmVhZEFuZ2xlOiBudW1iZXIpOiBWZWN0b3Ige1xyXG4gIGNvbnN0IGFuZ2xlID0gZ2V0QW5nbGUoZGlyZWN0aW9uKSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwcmVhZEFuZ2xlO1xyXG4gIHJldHVybiBmcm9tQW5nbGUoYW5nbGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25JbkNpcmNsZShyYWRpdXM6IG51bWJlciwgb25FZGdlOiBib29sZWFuKSB7XHJcbiAgbGV0IHBvaW50O1xyXG4gIGRvIHtcclxuICAgIHBvaW50ID0gbmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpKnJhZGl1cyoyIC0gcmFkaXVzLCBNYXRoLnJhbmRvbSgpKnJhZGl1cyoyIC0gcmFkaXVzKVxyXG4gIH0gd2hpbGUgKHBvaW50LngqKjIgKyBwb2ludC55KioyID4gcmFkaXVzKioyKVxyXG5cclxuICBpZiAob25FZGdlKXtcclxuICAgIHBvaW50Lm5vcm1hbGlzZSgpLm11bFMocmFkaXVzKTtcclxuICB9XHJcbiAgcmV0dXJuIHBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25JblJlY3RhbmdsZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciApe1xyXG4gIHJldHVybiBuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkgKiB3aWR0aCwgTWF0aC5yYW5kb20oKSAqIGhlaWdodCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleDogc3RyaW5nKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICB9IDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiQShoZXg6IHN0cmluZykge1xyXG4gIGxldCBhID0gMDtcclxuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSk/JC9pLmV4ZWMoaGV4KTtcclxuICBpZiggdHlwZW9mIHJlc3VsdFs0XSA9PT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBhID0gMTtcclxuICB9ZWxzZXtcclxuICAgIGEgPSBwYXJzZUludChyZXN1bHRbNF0sIDE2KS8yNTU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0ID8ge1xyXG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxyXG4gICAgYTogYVxyXG4gIH0gOiBudWxsO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QW5nbGUodmVjdG9yOiBWZWN0b3IpOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmF0YW4yKHZlY3Rvci55LCB2ZWN0b3IueCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21BbmdsZShhbmdsZTogbnVtYmVyKTogVmVjdG9yIHtcclxuICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZ2JDb2xvcihjb2xvcjoge3I6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlcn0pIHtcclxuICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yO1xyXG4gIHJldHVybiB7IHIsIGcsIGIgfTtcclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgUGFydGljbGUsIHsgc2hhcGUgfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24sIGdldFBvc2l0aW9uSW5DaXJjbGUsIGdldFBvc2l0aW9uSW5SZWN0YW5nbGUsIGdldFJhbmRvbURpcmVjdGlvbiwgaGV4VG9SZ2IsIGhleFRvUmdiQSB9IGZyb20gJy4vUGFydGljbGVTeXN0ZW1VdGlscyc7XHJcbmltcG9ydCBFbWl0dGVyLCB7IEVtaXR0ZXJPcHRpb25zIH0gZnJvbSBcIi4vRW1pdHRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZUVtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVye1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg7XHJcbiAgICBwcml2YXRlIF9oZWlnaHQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgcG9zaXRpb246IFZlY3RvcixcclxuICAgICAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgICBlbWl0dGVyT3B0aW9uczogRW1pdHRlck9wdGlvbnNcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIGNhbnZhc0N0eCwgZW1pdHRlck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aWNrKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyAtPSBkdDtcclxuXHJcbiAgICAgICAgLy9lbWl0IG5ldyBwYXJ0aWNsZXMgaWYgdGhlIGVtaXR0ZXIgaXMgXCJhbGl2ZVwiXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpY2tzICUgdGhpcy5fZW1pdEludGVydmFsID09PSAwICYmIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2VtaXRBbW91bnRQZXJUaWNrOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLnB1c2gobmV3IFBhcnRpY2xlKHRoaXMucG9zaXRpb24uY2xvbmUoKS5hZGQoZ2V0UG9zaXRpb25JblJlY3RhbmdsZSh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KS5zdWJ0cmFjdChuZXcgVmVjdG9yKHRoaXMuX3dpZHRoLzIsIHRoaXMuX2hlaWdodC8yKSkpIGFzIFZlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24odGhpcy5lbWl0RGlyZWN0aW9uLCB0aGlzLl9zcHJlYWRBbmdsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVTaXplICogc2NhbGVZLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlU2hhcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgeyAuLi5oZXhUb1JnYkEodGhpcy5fY29sb3IpfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVNYXhBZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9GYWRlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9GYWRlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWRlRGlyZWN0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vbW92ZSBhbGwgdGhlIHBhcnRpY2xlcyBmb3J3YXJkIGluIHRpbWVcclxuICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGUudGljayhkdClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9yZW1vdmUgcGFydGljbGVzIHRoYXQgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlaXIgbGlmZXNwYW5cclxuICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcyA9IHRoaXMuX2FsaXZlUGFydGljbGVzLmZpbHRlcihwYXJ0aWNsZSA9PiBwYXJ0aWNsZS5hZ2UgPiAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3RpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICAgIGlmICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmF3RW1pdHRlclpvbmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIDIwMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gMjAwMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5tb3ZlVG8oKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3dpZHRoLzIpICogc2NhbGVYLCAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5faGVpZ2h0LzIpICogc2NhbGVZKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7aGV4VG9SZ2IodGhpcy5fY29sb3IpfSwgJHtNYXRoLm1pbigwLjIsICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgLyB0aGlzLl9wYXJ0aWNsZU1heEFnZSAvIDUpKX0pYDtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHgucmVjdCh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLl93aWR0aC8yLCB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLl9oZWlnaHQvMiwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5kcmF3KClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW1pdFRpbWUobmV3RW1pdFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID0gbmV3RW1pdFRpbWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IGJhY2tncm91bmRDYW52YXMsIGdhbWVDYW52YXMsIGdhbWVDYW52YXNDdHggfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IFJlY3Rhbmd1bGFyRW1pdHRlciBmcm9tIFwiLi4vUGFydGljbGVTeXN0ZW0vUmVjdGFuZ3VsYXJFbWl0dGVyXCI7XHJcbmltcG9ydCBQb3dlcnVwLCB7IFBvd2VydXBUeXBlIH0gZnJvbSBcIi4vcG93ZXJ1cFwiO1xyXG5pbXBvcnQgeyBQb3dlcnVwQWN0aW9uIH0gZnJvbSBcIi4uL1dlYlNvY2tldENsaWVudC9tZXNzYWdlVHlwZXNcIjtcclxuaW1wb3J0IHsgdXBkYXRlQ2FudmFzU2l6ZSB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgZHJhd0dyaWQgfSBmcm9tIFwiLi4vRHJhd2VyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9Nb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IGN1cnJlbnRQbGF5ZXIgfSBmcm9tIFwiLi4vTWVudU1hbmFnZXIvbG9naW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvd2VydXBIYW5kbGVyIHtcclxuICBwcml2YXRlIF9wb3dlcnVwczogeyBba2V5OiBudW1iZXJdOiBQb3dlcnVwIH0gPSB7fTtcclxuICBwcml2YXRlIF93YWxsRW1pdHRlcnM6IFJlY3Rhbmd1bGFyRW1pdHRlcltdID0gW107XHJcbiAgcHJpdmF0ZSBfcG9ydGFsV2FsbHMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9jYW1lcmFMb2NrID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZ2FtZUNhbnZhc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJnYW1lLWNhbnZhcy1jb250YWluZXJcIlxyXG4gICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVXYWxsRW1pdHRlcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVdhbGxFbWl0dGVycygpIHtcclxuICAgIGxldCBzaXplcyA9IFtcclxuICAgICAgbmV3IFZlY3RvcigyMDAwLCA1MCksXHJcbiAgICAgIG5ldyBWZWN0b3IoNTAsIDIwMDApLFxyXG4gICAgICBuZXcgVmVjdG9yKDIwMDAsIDUwKSxcclxuICAgICAgbmV3IFZlY3Rvcig1MCwgMjAwMCksXHJcbiAgICBdO1xyXG4gICAgbGV0IGRpcmVjdGlvbnMgPSBbXHJcbiAgICAgIG5ldyBWZWN0b3IoMCwgLTEpLFxyXG4gICAgICBuZXcgVmVjdG9yKC0xLCAwKSxcclxuICAgICAgbmV3IFZlY3RvcigwLCAxKSxcclxuICAgICAgbmV3IFZlY3RvcigxLCAwKSxcclxuICAgIF07XHJcbiAgICBsZXQgcG9zaXRpb25zID0gW1xyXG4gICAgICBuZXcgVmVjdG9yKDEwMDAsIDUwKSxcclxuICAgICAgbmV3IFZlY3Rvcig1MCwgMTAwMCksXHJcbiAgICAgIG5ldyBWZWN0b3IoMTAwMCwgMTk1MCksXHJcbiAgICAgIG5ldyBWZWN0b3IoMTk1MCwgMTAwMCksXHJcbiAgICBdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgdGhpcy5fd2FsbEVtaXR0ZXJzLnB1c2goXHJcbiAgICAgICAgbmV3IFJlY3Rhbmd1bGFyRW1pdHRlcihcclxuICAgICAgICAgIHNpemVzW2ldLngsXHJcbiAgICAgICAgICBzaXplc1tpXS55LFxyXG4gICAgICAgICAgcG9zaXRpb25zW2ldLFxyXG4gICAgICAgICAgZ2FtZUNhbnZhc0N0eCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFydGljbGVTaGFwZTogXCJzcXVhcmVcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiIzU5ZWVlYmZmXCIsXHJcbiAgICAgICAgICAgIGVtaXRUaW1lTWlsbGlzOiAwLFxyXG4gICAgICAgICAgICBlbWl0RGlyZWN0aW9uOiBkaXJlY3Rpb25zW2ldLFxyXG4gICAgICAgICAgICBzcHJlYWRBbmdsZTogTWF0aC5QSSAvIDYsXHJcbiAgICAgICAgICAgIHNwZWVkOiAwLjgsXHJcbiAgICAgICAgICAgIHBhcnRpY2xlU2l6ZTogOCxcclxuICAgICAgICAgICAgcGFydGljbGVBZ2U6IDEwMCxcclxuICAgICAgICAgICAgZW1pdEludGVydmFsOiAxLFxyXG4gICAgICAgICAgICBlbWl0QW1vdW50UGVyVGljazogNCxcclxuICAgICAgICAgICAgZmFkZURpcmVjdGlvbjogXCJyZXZlcnNlXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvd2VydXAocG93ZXJ1cDogUG93ZXJ1cCkge1xyXG4gICAgdGhpcy5fcG93ZXJ1cHNbcG93ZXJ1cC5pZF0gPSBwb3dlcnVwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBvd2VydXAocG93ZXJ1cDogUG93ZXJ1cCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX3Bvd2VydXBzW3Bvd2VydXAuaWRdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5UG93ZXJ1cChwb3dlcnVwOiBQb3dlcnVwLCBwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgc3dpdGNoIChwb3dlcnVwLnR5cGUpIHtcclxuICAgICAgY2FzZSBQb3dlcnVwVHlwZS5Qb3J0YWxXYWxsczpcclxuICAgICAgICB0aGlzLmZsaXBXYWxsU3RhdGUoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZsaXBXYWxsU3RhdGUoKTtcclxuICAgICAgICB9LCBwb3dlcnVwLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUG93ZXJ1cFR5cGUuQ2FtZXJhTG9ja1RvUGxheWVyOlxyXG4gICAgICAgIGlmKHBsYXllci51c2VybmFtZSA9PT0gY3VycmVudFBsYXllci51c2VybmFtZSl7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FtZXJhTG9jayA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vaW5jcmVhc2UgdGhlIGNhbnZhcyByZXNvbHV0aW9uIGluIG9yZGVyIHRvIGRlY3JlYXNlIHRoZSBibHVyXHJcbiAgICAgICAgZ2FtZUNhbnZhcy53aWR0aCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAyO1xyXG4gICAgICAgIGdhbWVDYW52YXMuaGVpZ2h0ID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAyO1xyXG4gICAgICAgIGJhY2tncm91bmRDYW52YXMud2lkdGggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzLmhlaWdodCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogMjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tc2NyZWVuLWJvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGRyYXdHcmlkKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9jYW1lcmFMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMtY29udGFpbmVyJykuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDEpIHJvdGF0ZSgwcmFkKSB0cmFuc2xhdGUoMHB4LCAwcHgpYDtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXNjcmVlbi1ib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICB1cGRhdGVDYW52YXNTaXplKCk7XHJcbiAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH0sIHBvd2VydXAuZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVQb3dlcnVwKHBvd2VydXApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVpvbmVzKHR5cGU6IFBvd2VydXBUeXBlLCBhbW91bnQ6IG51bWJlcil7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9wb3dlcnVwcykuZm9yRWFjaCgocG93ZXJ1cCkgPT4ge1xyXG4gICAgICBwb3dlcnVwLmRyYXcoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fd2FsbEVtaXR0ZXJzLmZvckVhY2goKGVtaXR0ZXIpID0+IHtcclxuICAgICAgZW1pdHRlci50aWNrKDEpO1xyXG4gICAgICBlbWl0dGVyLmRyYXcoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmbGlwV2FsbFN0YXRlKCkge1xyXG4gICAgdGhpcy5fcG9ydGFsV2FsbHMgPSAhdGhpcy5fcG9ydGFsV2FsbHM7XHJcbiAgICB0aGlzLl93YWxsRW1pdHRlcnMuZm9yRWFjaChcclxuICAgICAgKGVtaXR0ZXIpID0+IChlbWl0dGVyLmVtaXRUaW1lID0gdGhpcy5fcG9ydGFsV2FsbHMgPyBJbmZpbml0eSA6IDApXHJcbiAgICApO1xyXG4gICAgdGhpcy5fZ2FtZUNhbnZhc0Rpdi5zdHlsZS5ib3JkZXJDb2xvciA9IHRoaXMuX3BvcnRhbFdhbGxzXHJcbiAgICAgID8gXCIjMzRjNmRjXCJcclxuICAgICAgOiBcIiM1NTU1NTVcIjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2FtZXJhTG9jaygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jYW1lcmFMb2NrO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IENpcmN1bGFyRW1pdHRlciBmcm9tIFwiLi4vUGFydGljbGVTeXN0ZW0vQ2lyY3VsYXJFbWl0dGVyXCI7XHJcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSBcIi4uL1BhcnRpY2xlU3lzdGVtL1BhcnRpY2xlU3lzdGVtVXRpbHNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVBvd2VydXAgfSBmcm9tIFwiLi4vV2ViU29ja2V0Q2xpZW50L21lc3NhZ2VUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gUG93ZXJ1cFR5cGUge1xyXG4gIFNwZWVkVXAsXHJcbiAgU3BlZWREb3duLFxyXG4gIEJvbWIsXHJcbiAgRmxpcEJ1dHRvbnMsXHJcbiAgSW52aXNpYmlsaXR5LFxyXG4gIFBvcnRhbFdhbGxzLFxyXG4gIENhbWVyYUxvY2tUb1BsYXllcixcclxufVxyXG5cclxuY29uc3QgU1ZHX1BBVEhTOiB7IFtrZXkgaW4gUG93ZXJ1cFR5cGVdOiBzdHJpbmcgfSA9IHtcclxuICBbUG93ZXJ1cFR5cGUuU3BlZWRVcF06IFwiLi4vYXNzZXRzL3Bvd2VydXBzL3NwZWVkdXAuc3ZnXCIsXHJcbiAgW1Bvd2VydXBUeXBlLlNwZWVkRG93bl06IFwiLi4vYXNzZXRzL3Bvd2VydXBzL3NwZWVkZG93bi5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuQm9tYl06IFwiLi4vYXNzZXRzL3Bvd2VydXBzL2JvbWIuc3ZnXCIsXHJcbiAgW1Bvd2VydXBUeXBlLkZsaXBCdXR0b25zXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvZmxpcGJ1dHRvbnMuc3ZnXCIsXHJcbiAgW1Bvd2VydXBUeXBlLkludmlzaWJpbGl0eV06IFwiLi4vYXNzZXRzL3Bvd2VydXBzL2ludmlzaWJpbGl0eS5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuUG9ydGFsV2FsbHNdOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy9wb3J0YWx3YWxscy5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuQ2FtZXJhTG9ja1RvUGxheWVyXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvdGVtcC5zdmdcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvd2VydXAge1xyXG4gIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246IFZlY3RvcjtcclxuICBwcml2YXRlIF9jYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3JhZGl1czogbnVtYmVyID0gMzA7XHJcbiAgcHJpdmF0ZSBfdHlwZTogUG93ZXJ1cFR5cGU7XHJcbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHByaXZhdGUgX2VtaXR0ZXI6IENpcmN1bGFyRW1pdHRlcjtcclxuICBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBwb3NpdGlvbjogVmVjdG9yLFxyXG4gICAgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBjb2xvcjogc3RyaW5nLFxyXG4gICAgdHlwZTogUG93ZXJ1cFR5cGUsXHJcbiAgICBkdXJhdGlvbjogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuX2NhbnZhc0N0eCA9IGNhbnZhc0N0eDtcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICB0aGlzLl9pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuX2ltZy5zcmMgPSBTVkdfUEFUSFNbdGhpcy5fdHlwZV07XHJcbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IENpcmN1bGFyRW1pdHRlcihcclxuICAgICAgdGhpcy5fcmFkaXVzICogMC42LFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbixcclxuICAgICAgdGhpcy5fY2FudmFzQ3R4LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IHRoaXMuX2NvbG9yLFxyXG4gICAgICAgIHBhcnRpY2xlU2l6ZTogdGhpcy5fcmFkaXVzIC8gMi44NSxcclxuICAgICAgICBwYXJ0aWNsZUFnZTogNjAsXHJcbiAgICAgICAgc3BlZWQ6IHRoaXMuX3JhZGl1cyAvIDIwLFxyXG4gICAgICAgIGVtaXRBbW91bnRQZXJUaWNrOiAzLFxyXG4gICAgICAgIHNwYXduUGFydGljbGVzT25FZGdlOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXcoKSB7XHJcbiAgICB0aGlzLl9lbWl0dGVyLnRpY2soMC41KTtcclxuICAgIHRoaXMuX2VtaXR0ZXIuZHJhdygpO1xyXG5cclxuICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyAyMDAwO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG5cclxuICAgIHRoaXMuX2NhbnZhc0N0eC5tb3ZlVG8oXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnggKiBzY2FsZVgsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgKiBzY2FsZVlcclxuICAgICk7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguZmlsbFN0eWxlID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguYXJjKFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi54ICogc2NhbGVYLFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi55ICogc2NhbGVZLFxyXG4gICAgICB0aGlzLl9yYWRpdXMgKiBzY2FsZVgsXHJcbiAgICAgIDAsXHJcbiAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICApO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmZpbGwoKTtcclxuICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICB0aGlzLmRyYXdTVkcoKTtcclxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdFRpbWUgPSBJbmZpbml0eTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd1NWRygpIHtcclxuICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyAyMDAwO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xyXG4gICAgLy8gdGhpcy5fY2FudmFzQ3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgY29uc3QgaW1hZ2VTY2FsZUZhY3RvciA9IDAuNjtcclxuXHJcbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRoaXMuX2ltZy53aWR0aCAvIHRoaXMuX2ltZy5oZWlnaHQ7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBzY2FsZWQgZGltZW5zaW9ucyBiYXNlZCBvbiB0aGUgYXNwZWN0IHJhdGlvXHJcbiAgICBsZXQgZHJhd1dpZHRoID0gdGhpcy5fcmFkaXVzICogMiAqIGltYWdlU2NhbGVGYWN0b3IgKiBzY2FsZVg7XHJcbiAgICBsZXQgZHJhd0hlaWdodCA9ICh0aGlzLl9yYWRpdXMgKiAyICogaW1hZ2VTY2FsZUZhY3RvciAqIHNjYWxlWCkgLyBhc3BlY3RSYXRpbztcclxuXHJcbiAgICAvLyBFbnN1cmUgdGhlIGltYWdlIGZpdHMgd2l0aGluIHRoZSBnaXZlbiByYWRpdXNcclxuICAgIGlmIChkcmF3SGVpZ2h0ID4gdGhpcy5fcmFkaXVzICogMiAqIGltYWdlU2NhbGVGYWN0b3IgKiBzY2FsZVgpIHtcclxuICAgICAgZHJhd0hlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDIgKiBpbWFnZVNjYWxlRmFjdG9yICogc2NhbGVYO1xyXG4gICAgICBkcmF3V2lkdGggPSBkcmF3SGVpZ2h0ICogYXNwZWN0UmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5faW1nLFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi54ICogc2NhbGVYIC0gZHJhd1dpZHRoIC8gMixcclxuICAgICAgdGhpcy5fcG9zaXRpb24ueSAqIHNjYWxlWSAtIGRyYXdIZWlnaHQgLyAyLFxyXG4gICAgICBkcmF3V2lkdGgsXHJcbiAgICAgIGRyYXdIZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IFZlY3RvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBQb3dlcnVwVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcclxuICB9XHJcblxyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgcG9zaXRpb246IHsgeDogdGhpcy5wb3NpdGlvbi54LCB5OiB0aGlzLnBvc2l0aW9uLnkgfSxcclxuICAgICAgY29sb3I6IHRoaXMuX2NvbG9yLFxyXG4gICAgICB0eXBlOiB0aGlzLl90eXBlLFxyXG4gICAgICByYWRpdXM6IHRoaXMuX3JhZGl1cyxcclxuICAgICAgZHVyYXRpb246IHRoaXMuX2R1cmF0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tTWVzc2FnZVBvd2VydXAoXHJcbiAgICBqc29uOiBNZXNzYWdlUG93ZXJ1cCxcclxuICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXHJcbiAgKTogUG93ZXJ1cCB7XHJcbiAgICByZXR1cm4gbmV3IFBvd2VydXAoXHJcbiAgICAgIGpzb24ucG93ZXJ1cC5pZCxcclxuICAgICAgbmV3IFZlY3Rvcihqc29uLnBvd2VydXAucG9zaXRpb24ueCwganNvbi5wb3dlcnVwLnBvc2l0aW9uLnkpLFxyXG4gICAgICBjYW52YXNDdHgsXHJcbiAgICAgIGpzb24ucG93ZXJ1cC5jb2xvcixcclxuICAgICAganNvbi5wb3dlcnVwLnR5cGUsXHJcbiAgICAgIGpzb24ucG93ZXJ1cC5kdXJhdGlvblxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFNlZ21lbnQge1xuICAgIGFic3RyYWN0IGlzQ29sbGlkYWJsZTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZyk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgZ2V0IGVuZEFuZ2xlKCk6IG51bWJlcjtcbiAgICBhYnN0cmFjdCBnZXQgZW5kUG9pbnQoKTogVmVjdG9yO1xuICAgIGFic3RyYWN0IGdldENvbnRpbnVpbmdTZWdtZW50KHRyYW5zZm9ybTogVmVjdG9yKTogU2VnbWVudDtcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcbmltcG9ydCBBcmNTZWdtZW50IGZyb20gXCIuL0FyY1NlZ21lbnRcIjtcbmltcG9ydCBMaW5lU2VnbWVudCBmcm9tIFwiLi9MaW5lU2VnbWVudFwiO1xuaW1wb3J0IFNlZ21lbnQgZnJvbSBcIi4vU2VnbWVudFwiO1xuaW1wb3J0IENpcmN1bGFyRW1pdHRlciBmcm9tIFwiLi9QYXJ0aWNsZVN5c3RlbS9DaXJjdWxhckVtaXR0ZXJcIjtcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSBcIi4vUGFydGljbGVTeXN0ZW0vUGFydGljbGVTeXN0ZW1VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSB7XG4gICAgcHVibGljIHNlZ21lbnRzOiBTZWdtZW50W10gPSBbXTtcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBpc0FsaXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgdHVyblJhZGl1czogbnVtYmVyID0gNjA7XG4gICAgcHJpdmF0ZSBfZW1pdHRlcjogQ2lyY3VsYXJFbWl0dGVyIHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cblxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0UG9zOiBMaW5lU2VnbWVudCwgY29sb3I6IHN0cmluZywgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5hZGRTZWdtZW50KHN0YXJ0UG9zKTtcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4ID0gY2FudmFzQ3R4O1xuICAgICAgICB0aGlzLl9lbWl0dGVyID0gbmV3IENpcmN1bGFyRW1pdHRlcigwLCB0aGlzLmhlYWQuZW5kUG9pbnQsIHRoaXMuX2NhbnZhc0N0eCwge2VtaXRJbnRlcnZhbDogMixcbiAgICAgICAgICAgIGVtaXRBbW91bnRQZXJUaWNrOiAzLFxuICAgICAgICAgICAgcGFydGljbGVTaXplOiA3LFxuICAgICAgICAgICAgc3BlZWQ6IDQsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5fY29sb3IsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFkZFNlZ21lbnQoc2VnbWVudDogU2VnbWVudCkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuXG4gICAgZ2V0IGhlYWQoKTogU2VnbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnNsaWNlKC0xKS5wb3AoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gMjAwMDtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyAyMDAwO1xuXG5cbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmxpbmVXaWR0aCA9IDEyICogTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICAvL1RPRE8gZml4IHRoaXMgdG8gYmUgYSBzaW5nbGUgcGF0aFxuXG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHNlZ21lbnQuZHJhdyh0aGlzLl9jYW52YXNDdHgsIHRoaXMuX2NvbG9yKTtcblxuICAgICAgICAgICAgLy9kcmF3IGEgZG90IGF0IHRoZSBoZWFkLCB0aGlzIGlzIHVzZWZ1bCBpZiB0aGUgc2VnbWVudCBpcyBpbnZpc2libGVcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWQgPT09IHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmFyYyhzZWdtZW50LmVuZFBvaW50LnggKiBzY2FsZVgsIHNlZ21lbnQuZW5kUG9pbnQueSAqIHNjYWxlWSwgMC41ICogTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5raWxsKCkge1xuICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2VtaXR0ZXIucG9zaXRpb24gPSB0aGlzLmhlYWQuZW5kUG9pbnRcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXRUaW1lID0gMTA7XG59XG5cbnVwZGF0ZUVtaXR0ZXIoZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9lbWl0dGVyKSB7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIudGljayhkdCk7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZHJhdygpO1xuICAgIH1cbn1cbiAgICBcbn0iLCJpbXBvcnQgeyB1cGRhdGVHYW1lU3RhdGUgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgRGlyIH0gZnJvbSBcIi4uL0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBjdXJyZW50UGxheWVyLCBjdXJyZW50Um9vbSwgc2hvd0Vycm9yQW5pbWF0aW9uLCBzaG93Um9vbVZpZXcsIHN3aXRjaEdhbWVWaWV3LCB1cGRhdGVSb29tTGlzdCB9IGZyb20gXCIuLi9NZW51TWFuYWdlci9sb2dpblwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vTW9kZWxzL1BsYXllclwiO1xyXG5cclxubGV0IHNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuZnVuY3Rpb24gaW5pdFdlYlNvY2tldCgpIHtcclxuICAgIC8vIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9OjMwMDBgKTtcclxuICAgIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzczovL3NuYWtlZ2FtZS1zZXJ2ZXIubWF4aW8uc2l0ZWApO1xyXG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IGNvbm5lY3Rpb24gZXN0YWJsaXNoZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIGZyb20gc2VydmVyOicsIGRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0pPSU5FRF9ST09NJzpcclxuICAgICAgICAgICAgICAgIHNob3dSb29tVmlldyhldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdKT0lOX0ZBSUwnOlxyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yQW5pbWF0aW9uKGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdST09NX0RBVEEnOlxyXG4gICAgICAgICAgICAgICAgdXBkYXRlUm9vbUxpc3QoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnR0FNRV9TVEFURSc6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hHYW1lVmlldyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdHQU1FUExBWV9EQVRBJzpcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUdhbWVTdGF0ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdFUlJPUic6XHJcbiAgICAgICAgICAgICAgICBhbGVydChgRXJyb3I6ICR7ZGF0YS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBjb25uZWN0aW9uIGNsb3NlZCcpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc29ja2V0Lm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvb20odXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdDUkVBVEVfUk9PTScsIHVzZXJuYW1lOiB1c2VybmFtZSB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luUm9vbShyb29tQ29kZTogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ0pPSU5fUk9PTScsIHJvb21Db2RlOiByb29tQ29kZSwgdXNlcm5hbWU6IHVzZXJuYW1lIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBsYXllckRhdGEocGxheWVyOiBQbGF5ZXIsIHJvb21Db2RlOiBzdHJpbmcpIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnUExBWUVSX0RBVEEnLCBwbGF5ZXI6IHBsYXllciwgcm9vbUNvZGU6IHJvb21Db2RlfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZEtleUV2ZW50VG9TZXJ2ZXIoa2V5OiBEaXIsIHByZXNzZWQ6IGJvb2xlYW4pe1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdLRVlfRVZFTlQnLCByb29tQ29kZTogY3VycmVudFJvb20uY29kZSwgdXNlcm5hbWU6IGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUsIGtleToga2V5LCBwcmVzc2VkOiBwcmVzc2VkIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRTdGFydENvbW1hbmQocm9vbUNvZGU6IHN0cmluZykge1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdCRUdJTl9HQU1FJywgcm9vbUNvZGU6IHJvb21Db2RlfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbml0V2ViU29ja2V0KCk7XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IEFyY1NlZ21lbnQgZnJvbSBcIi4vQXJjU2VnbWVudFwiO1xuaW1wb3J0IHsgZHJhd0dyaWQgfSBmcm9tIFwiLi9EcmF3ZXJcIjtcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSBcIi4vSW5wdXRNYW5hZ2VyXCI7XG5pbXBvcnQgTGluZVNlZ21lbnQgZnJvbSBcIi4vTGluZVNlZ21lbnRcIjtcbmltcG9ydCBTbmFrZSBmcm9tIFwiLi9TbmFrZVwiO1xuaW1wb3J0IENpcmN1bGFyRW1pdHRlciBmcm9tIFwiLi9QYXJ0aWNsZVN5c3RlbS9DaXJjdWxhckVtaXR0ZXJcIjtcbmltcG9ydCB7XG4gIE1lc3NhZ2VHYW1lcGxheSxcbiAgUG93ZXJ1cEFjdGlvbixcbiAgbWVzc2FnZUFyY1NlZ21lbnQsXG4gIG1lc3NhZ2VMaW5lU2VnbWVudCxcbn0gZnJvbSBcIi4vV2ViU29ja2V0Q2xpZW50L21lc3NhZ2VUeXBlc1wiO1xuaW1wb3J0IHsgY3VycmVudFBsYXllciwgY3VycmVudFJvb20gfSBmcm9tIFwiLi9NZW51TWFuYWdlci9sb2dpblwiO1xuaW1wb3J0IFBvd2VydXBIYW5kbGVyIGZyb20gXCIuL1Bvd2VydXBTeXN0ZW0vUG93ZXJ1cEhhbmRsZXJcIjtcbmltcG9ydCBQb3dlcnVwIGZyb20gXCIuL1Bvd2VydXBTeXN0ZW0vcG93ZXJ1cFwiO1xuY29uc3QgZ2FtZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImdhbWUtY2FudmFzLWNvbnRhaW5lclwiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xudmFyIGZwc0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZnBzQ291bnRlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbmZwc0NvdW50ZXIuc3R5bGUudG9wID0gXCIxMHB4XCI7XG5mcHNDb3VudGVyLnN0eWxlLmxlZnQgPSBcIjEwcHhcIjtcbmZwc0NvdW50ZXIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG5sZXQgcHJldkdhbWVEaXZBbmdsZSA9IDA7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZwc0NvdW50ZXIpO1xuZXhwb3J0IHZhciBmcHMgPSA2MDtcblxuZXhwb3J0IHZhciBnYW1lQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiZ2FtZS1jYW52YXNcIlxuKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmV4cG9ydCB2YXIgZ2FtZUNhbnZhc0N0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcblxuZXhwb3J0IHZhciBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiYmFja2dyb3VuZC1jYW52YXNcIlxuKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmV4cG9ydCB2YXIgYmFja2dyb3VuZENhbnZhc0N0eCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcblxuYmFja2dyb3VuZENhbnZhcyEud2lkdGggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuYmFja2dyb3VuZENhbnZhcyEuaGVpZ2h0ID0gYmFja2dyb3VuZENhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5nYW1lQ2FudmFzIS53aWR0aCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5nYW1lQ2FudmFzIS5oZWlnaHQgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbi8vMjAwMCAvIDY2LjY2NiB+PSAzMFxuZXhwb3J0IGxldCBncmlkU2l6ZSA9IDY2LjY2NjtcbmxldCBpbnB1dE1hbmFnZXI7XG5sZXQgcG93ZXJ1cEhhbmRsZXI6IFBvd2VydXBIYW5kbGVyO1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhbnZhc1NpemUoKSB7XG4gIGdhbWVDYW52YXMud2lkdGggPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICBnYW1lQ2FudmFzLmhlaWdodCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICBiYWNrZ3JvdW5kQ2FudmFzLndpZHRoID0gYmFja2dyb3VuZENhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgYmFja2dyb3VuZENhbnZhcy5oZWlnaHQgPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgZHJhd0dyaWQoKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgdmFyIG11bHQgPSBmcHMgLyA2MDtcbiAgZnJhbWVDb3VudCsrO1xuICBpZiAoZnJhbWVDb3VudCAlIDEwID09PSAwKSB7XG4gICAgZnBzID0gY2FsY3VsYXRlRlBTKCk7XG4gICAgZnBzQ291bnRlci5pbm5lclRleHQgPSBgRlBTOiAke2Zwc31gO1xuICB9XG4gIGdhbWVDYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsIGdhbWVDYW52YXMud2lkdGgsIGdhbWVDYW52YXMuaGVpZ2h0KTtcblxuICBPYmplY3QudmFsdWVzKGN1cnJlbnRSb29tLnBsYXllcnMpLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIHBsYXllci5zbmFrZS5kcmF3KCk7XG4gICAgcGxheWVyLnNuYWtlLnVwZGF0ZUVtaXR0ZXIoKHBlcmZvcm1hbmNlLm5vdygpIC8gMTAgLSBsYXN0VGltZSkgLyAxNSk7XG4gIH0pO1xuXG4gIHBvd2VydXBIYW5kbGVyLmRyYXcoKTtcbn1cbnZhciBmcmFtZUNvdW50ID0gMDtcbnZhciBsYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTA7XG5mdW5jdGlvbiBjYWxjdWxhdGVGUFMoKSB7XG4gIHZhciBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTA7XG4gIHZhciB0aW1lRGlmZiA9IGN1cnJlbnRUaW1lIC0gbGFzdFRpbWU7XG4gIHZhciBmcHMgPSBNYXRoLnJvdW5kKDEwMDAgLyB0aW1lRGlmZik7XG4gIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XG4gIHJldHVybiBmcHM7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZUNhbnZhc1NpemUpO1xuZHJhd0dyaWQoKTtcblxuZnVuY3Rpb24gZ2V0Q2xvc2VzdEFuZ2xlKGN1cnJlbnRBbmdsZTogbnVtYmVyLCB0YXJnZXRBbmdsZTogbnVtYmVyKSB7XG4gIGNvbnN0IHBpMiA9IE1hdGguUEkgKiAyO1xuICBsZXQgZGVsdGEgPSAodGFyZ2V0QW5nbGUgLSBjdXJyZW50QW5nbGUpICUgcGkyO1xuICBpZiAoZGVsdGEgPiBNYXRoLlBJKSB7XG4gICAgZGVsdGEgLT0gcGkyO1xuICB9IGVsc2UgaWYgKGRlbHRhIDwgLU1hdGguUEkpIHtcbiAgICBkZWx0YSArPSBwaTI7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRBbmdsZSArIGRlbHRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlR2FtZVN0YXRlKGdhbWVTdGF0ZTogTWVzc2FnZUdhbWVwbGF5KSB7XG4gIGlmIChjdXJyZW50UGxheWVyLnNuYWtlID09PSBudWxsKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBzbmFrZXMgdGhlIGZpcnN0IHRpbWUgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWRcbiAgICBnYW1lU3RhdGUuc25ha2VIZWFkcy5mb3JFYWNoKChoZWFkRGF0YSkgPT4ge1xuICAgICAgbGV0IGhlYWQgPSBoZWFkRGF0YS5sYXN0U2VnbWVudDtcbiAgICAgIGxldCB1c2VybmFtZSA9IGhlYWREYXRhLnVzZXJuYW1lO1xuXG4gICAgICBsZXQgcG9zID0gaGVhZC5lbmRQb2ludDtcbiAgICAgIGN1cnJlbnRSb29tLnBsYXllcnNbdXNlcm5hbWVdLnNuYWtlID0gbmV3IFNuYWtlKFxuICAgICAgICBuZXcgTGluZVNlZ21lbnQoXG4gICAgICAgICAgbmV3IFZlY3Rvcihwb3MueCwgcG9zLnkpLFxuICAgICAgICAgIG5ldyBWZWN0b3IocG9zLngsIHBvcy55KSxcbiAgICAgICAgICBoZWFkLmlzQ29sbGlkYWJsZSxcbiAgICAgICAgICBoZWFkLmVuZEFuZ2xlXG4gICAgICAgICksXG4gICAgICAgIGN1cnJlbnRSb29tLnBsYXllcnNbdXNlcm5hbWVdLmNvbG9yLFxuICAgICAgICBnYW1lQ2FudmFzQ3R4XG4gICAgICApO1xuICAgIH0pO1xuICAgIGN1cnJlbnRQbGF5ZXIuc25ha2UgPSBjdXJyZW50Um9vbS5wbGF5ZXJzW2N1cnJlbnRQbGF5ZXIudXNlcm5hbWVdLnNuYWtlO1xuICAgIGlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoXG4gICAgICBjdXJyZW50Um9vbS5wbGF5ZXJzW2N1cnJlbnRQbGF5ZXIudXNlcm5hbWVdLnNuYWtlLFxuICAgICAgW1wiQVwiLCBcIkFSUk9XTEVGVFwiXSxcbiAgICAgIFtcIkRcIiwgXCJBUlJPV1JJR0hUXCJdXG4gICAgKTtcbiAgICBwb3dlcnVwSGFuZGxlciA9IG5ldyBQb3dlcnVwSGFuZGxlcigpO1xuICB9IGVsc2Uge1xuICAgIGxldCBjdXJyZW50VXNlcm5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIFVwZGF0ZSBleGlzdGluZyBzbmFrZXMgYmFzZWQgb24gdGhlIG5ldyBnYW1lIHN0YXRlXG4gICAgZ2FtZVN0YXRlLnNuYWtlSGVhZHMuZm9yRWFjaCgobmV3SGVhZERhdGEpID0+IHtcbiAgICAgIGxldCBoZWFkID0gbmV3SGVhZERhdGEubGFzdFNlZ21lbnQ7XG4gICAgICBsZXQgdXNlcm5hbWUgPSBuZXdIZWFkRGF0YS51c2VybmFtZTtcbiAgICAgIGxldCBlbmRQb3MgPSBoZWFkLmVuZFBvaW50O1xuICAgICAgbGV0IHNuYWtlVG9VcGRhdGUgPSBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5zbmFrZTtcblxuICAgICAgaWYgKGdhbWVTdGF0ZS5wb3dlcnVwTGlzdCAhPT0gbnVsbCkge1xuICAgICAgICAvL3VwZGF0ZSBwb3dlcnVwcyBsaXN0XG4gICAgICAgIGdhbWVTdGF0ZS5wb3dlcnVwTGlzdC5mb3JFYWNoKChwb3dlcnVwSW5mbykgPT4ge1xuICAgICAgICAgIHN3aXRjaCAocG93ZXJ1cEluZm8uYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFBvd2VydXBBY3Rpb24uUkVNT1ZFOlxuICAgICAgICAgICAgICBwb3dlcnVwSGFuZGxlci5yZW1vdmVQb3dlcnVwKFxuICAgICAgICAgICAgICAgIFBvd2VydXAuZnJvbU1lc3NhZ2VQb3dlcnVwKHBvd2VydXBJbmZvLCBnYW1lQ2FudmFzQ3R4KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG93ZXJ1cEFjdGlvbi5TUEFXTjpcbiAgICAgICAgICAgICAgcG93ZXJ1cEhhbmRsZXIuYWRkUG93ZXJ1cChcbiAgICAgICAgICAgICAgICBQb3dlcnVwLmZyb21NZXNzYWdlUG93ZXJ1cChwb3dlcnVwSW5mbywgZ2FtZUNhbnZhc0N0eClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBvd2VydXBBY3Rpb24uQVBQTFk6XG4gICAgICAgICAgICAgIHBvd2VydXBIYW5kbGVyLmFwcGx5UG93ZXJ1cChcbiAgICAgICAgICAgICAgICBQb3dlcnVwLmZyb21NZXNzYWdlUG93ZXJ1cChwb3dlcnVwSW5mbywgZ2FtZUNhbnZhc0N0eCksIHBvd2VydXBJbmZvLnBsYXllclxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvL2tlZXAgdHJhY2sgb2YgdGhlIHVzZXJuYW1lcyBzZW50IGJ5IHRoZSBzZXJ2ZXIgaW4gdGhlIGRhdGFcbiAgICAgIGN1cnJlbnRVc2VybmFtZXMucHVzaCh1c2VybmFtZSk7XG4gICAgICAvLyB0cmFuc2xhdGUoJHtoZWFkLmVuZFBvaW50LnggKiBnYW1lQ2FudmFzLndpZHRoIC8gMjAwMCB9cHgsICR7aGVhZC5lbmRQb2ludC55ICogZ2FtZUNhbnZhcy53aWR0aCAvIDIwMDB9cHgpXG5cbiAgICAgIGlmIChoZWFkLmlzTmV3VGhpc1RpY2spIHtcbiAgICAgICAgaWYgKG5ld0hlYWREYXRhLnNlZ21lbnRUeXBlID09PSBcIkxpbmVTZWdtZW50XCIpIHtcbiAgICAgICAgICBoZWFkID0gaGVhZCBhcyBtZXNzYWdlTGluZVNlZ21lbnQ7XG4gICAgICAgICAgbGV0IHN0YXJ0UG9zID0gaGVhZC5zdGFydFBvaW50O1xuXG4gICAgICAgICAgc25ha2VUb1VwZGF0ZS5hZGRTZWdtZW50KFxuICAgICAgICAgICAgbmV3IExpbmVTZWdtZW50KFxuICAgICAgICAgICAgICBuZXcgVmVjdG9yKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpLFxuICAgICAgICAgICAgICBuZXcgVmVjdG9yKGVuZFBvcy54LCBlbmRQb3MueSksXG4gICAgICAgICAgICAgIGhlYWQuaXNDb2xsaWRhYmxlLFxuICAgICAgICAgICAgICBoZWFkLmVuZEFuZ2xlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkRGF0YS5zZWdtZW50VHlwZSA9PT0gXCJBcmNTZWdtZW50XCIpIHtcbiAgICAgICAgICBoZWFkID0gaGVhZCBhcyBtZXNzYWdlQXJjU2VnbWVudDtcbiAgICAgICAgICBsZXQgY2VudGVyID0gaGVhZC5jZW50ZXI7XG4gICAgICAgICAgc25ha2VUb1VwZGF0ZS5hZGRTZWdtZW50KFxuICAgICAgICAgICAgbmV3IEFyY1NlZ21lbnQoXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3IoY2VudGVyLngsIGNlbnRlci55KSxcbiAgICAgICAgICAgICAgaGVhZC5yYWRpdXMsXG4gICAgICAgICAgICAgIGhlYWQuc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgaGVhZC5lbmRBbmdsZSxcbiAgICAgICAgICAgICAgaGVhZC5jb3VudGVyQ2xvY2t3aXNlLFxuICAgICAgICAgICAgICBoZWFkLmlzQ29sbGlkYWJsZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXdIZWFkRGF0YS5zZWdtZW50VHlwZSA9PT0gXCJMaW5lU2VnbWVudFwiKSB7XG4gICAgICAgICAgaGVhZCA9IGhlYWQgYXMgbWVzc2FnZUxpbmVTZWdtZW50O1xuXG4gICAgICAgICAgaWYgKHBvd2VydXBIYW5kbGVyLmNhbWVyYUxvY2spIHtcbiAgICAgICAgICAgIGlmICh1c2VybmFtZSA9PT0gY3VycmVudFBsYXllci51c2VybmFtZSkge1xuICAgICAgICAgICAgICBsZXQgbmV3QW5nbGUgPSAtaGVhZC5lbmRBbmdsZSAtIE1hdGguUEkgLyAyO1xuICAgICAgICAgICAgICBsZXQgY2xvc2VzdEFuZ2xlID0gZ2V0Q2xvc2VzdEFuZ2xlKHByZXZHYW1lRGl2QW5nbGUsIG5ld0FuZ2xlKTtcbiAgICAgICAgICAgICAgZ2FtZURpdi5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMikgcm90YXRlKCR7Y2xvc2VzdEFuZ2xlfXJhZCkgdHJhbnNsYXRlKCR7XG4gICAgICAgICAgICAgICAgKC1oZWFkLmVuZFBvaW50LnggKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMjAwMCArXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgICAgICAgICB9cHgsICR7XG4gICAgICAgICAgICAgICAgKC1oZWFkLmVuZFBvaW50LnkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMjAwMCArXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgICAgICAgICB9cHgpYDtcbiAgICAgICAgICAgICAgcHJldkdhbWVEaXZBbmdsZSA9IGNsb3Nlc3RBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHN0YXJ0UG9zID0gaGVhZC5zdGFydFBvaW50O1xuICAgICAgICAgIHNuYWtlVG9VcGRhdGUuc2VnbWVudHNbc25ha2VUb1VwZGF0ZS5zZWdtZW50cy5sZW5ndGggLSAxXSA9XG4gICAgICAgICAgICBuZXcgTGluZVNlZ21lbnQoXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3Ioc3RhcnRQb3MueCwgc3RhcnRQb3MueSksXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3IoZW5kUG9zLngsIGVuZFBvcy55KSxcbiAgICAgICAgICAgICAgaGVhZC5pc0NvbGxpZGFibGUsXG4gICAgICAgICAgICAgIGhlYWQuZW5kQW5nbGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZERhdGEuc2VnbWVudFR5cGUgPT09IFwiQXJjU2VnbWVudFwiKSB7XG4gICAgICAgICAgaGVhZCA9IGhlYWQgYXMgbWVzc2FnZUFyY1NlZ21lbnQ7XG4gICAgICAgICAgaWYgKHBvd2VydXBIYW5kbGVyLmNhbWVyYUxvY2spIHtcbiAgICAgICAgICAgIGlmICh1c2VybmFtZSA9PT0gY3VycmVudFBsYXllci51c2VybmFtZSkge1xuICAgICAgICAgICAgICBsZXQgbmV3QW5nbGUgPSBoZWFkLmNvdW50ZXJDbG9ja3dpc2VcbiAgICAgICAgICAgICAgICA/IC1oZWFkLmVuZEFuZ2xlXG4gICAgICAgICAgICAgICAgOiAtaGVhZC5lbmRBbmdsZSAtIE1hdGguUEk7XG4gICAgICAgICAgICAgIGxldCBjbG9zZXN0QW5nbGUgPSBnZXRDbG9zZXN0QW5nbGUocHJldkdhbWVEaXZBbmdsZSwgbmV3QW5nbGUpO1xuICAgICAgICAgICAgICBnYW1lRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgyKSByb3RhdGUoJHtjbG9zZXN0QW5nbGV9cmFkKSB0cmFuc2xhdGUoJHtcbiAgICAgICAgICAgICAgICAoLWhlYWQuZW5kUG9pbnQueCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyAyMDAwICtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgICAgICAgIH1weCwgJHtcbiAgICAgICAgICAgICAgICAoLWhlYWQuZW5kUG9pbnQueSAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyAyMDAwICtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgICAgICAgIH1weClgO1xuICAgICAgICAgICAgICBwcmV2R2FtZURpdkFuZ2xlID0gY2xvc2VzdEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgY2VudGVyID0gaGVhZC5jZW50ZXI7XG4gICAgICAgICAgc25ha2VUb1VwZGF0ZS5zZWdtZW50c1tzbmFrZVRvVXBkYXRlLnNlZ21lbnRzLmxlbmd0aCAtIDFdID1cbiAgICAgICAgICAgIG5ldyBBcmNTZWdtZW50KFxuICAgICAgICAgICAgICBuZXcgVmVjdG9yKGNlbnRlci54LCBjZW50ZXIueSksXG4gICAgICAgICAgICAgIGhlYWQucmFkaXVzLFxuICAgICAgICAgICAgICBoZWFkLnN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGhlYWQuZW5kQW5nbGUsXG4gICAgICAgICAgICAgIGhlYWQuY291bnRlckNsb2Nrd2lzZSxcbiAgICAgICAgICAgICAgaGVhZC5pc0NvbGxpZGFibGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vd2hlbiBhIHVzZXJuYW1lIHRoYXQgaXMgb24gdGhlIGNsaWVudCBsaXN0IGlzIG5vIGxvbmdlciBzZWVuIGluIHRoZSBkYXRhIGZyb20gdGhlIHNlcnZlciwga2lsbCBoaW1cbiAgICBPYmplY3QudmFsdWVzKGN1cnJlbnRSb29tLnBsYXllcnMpLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgaWYgKCFjdXJyZW50VXNlcm5hbWVzLmluY2x1ZGVzKHBsYXllci51c2VybmFtZSkgJiYgcGxheWVyLnNuYWtlLmlzQWxpdmUpIHtcbiAgICAgICAgcGxheWVyLnNuYWtlLmtpbGwoKTtcblxuICAgICAgICAvL3NldCB0aGUgbGFzdCB3aW5uZXIgaWYgbm9vbmUgaXMgYWxpdmUgbm93XG4gICAgICAgIGlmIChcbiAgICAgICAgICBPYmplY3QudmFsdWVzKGN1cnJlbnRSb29tLnBsYXllcnMpLmV2ZXJ5KFxuICAgICAgICAgICAgKHBsYXllcikgPT4gIXBsYXllci5zbmFrZS5pc0FsaXZlXG4gICAgICAgICAgKSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBjdXJyZW50Um9vbS5sYXN0V2lubmVyID0gcGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZSgpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRoZXNlIHZhbHVlcyBhcmUgdXNlZCBieSB0aGUgYEFic3RyYWN0VmVjdG9yLnJvdW5kYCBtZXRob2QgdG8gaW5jcmVhc2VcbiAqIHBlcmZvcm1hbmNlIHZzLiB1c2luZyAgTnVtYmVyLnRvRml4ZWQuXG4gKi9cbnZhciBwcmVjaXNpb24gPSBbXG4gICAgMSxcbiAgICAxMCxcbiAgICAxMDAsXG4gICAgMTAwMCxcbiAgICAxMDAwMCxcbiAgICAxMDAwMDAsXG4gICAgMTAwMDAwMCxcbiAgICAxMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAwMFxuXTtcbi8qKlxuICogVGhlIGNsYXNzIHRoYXQgYWxsIG90aGVyIHZlY3RvciByZXByZXNlbnRhdGlvbnMgYXJlIGRlcml2ZWQgZnJvbS5cbiAqXG4gKiBDb250YWlucyB0aGUgY29yZSBpbXBsZW1lbnRhdGlvbiBmb3IgYWxsIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGV4cG9zZWQgYnlcbiAqIHZlY3RvciBpbnN0YW5jZXMuXG4gKlxuICogRXhhbXBsZSBvZiBjcmVhdGluZyBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbjpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgQWJzdHJhY3RWZWN0b3IgfSBmcm9tIFwiLi9BYnN0cmFjdFZlY3RvclwiXG4gKlxuICogZXhwb3J0IGNsYXNzIE15Q3VzdG9tVmVjdG9yIGV4dGVuZHMgQWJzdHJhY3RWZWN0b3Ige1xuICogIGNvbnN0cnVjdG9yICh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICogICAgc3VwZXIoQ3VzdG9tVmVjdG9yVHlwZSlcbiAqICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xudmFyIEFic3RyYWN0VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0VmVjdG9yKGN0b3IpIHtcbiAgICAgICAgdGhpcy5jdG9yID0gY3RvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IGJvdGggeCBhbmQgeSBheGlzIHZhbHVlXG4gICAgICogQHBhcmFtIHggICBOZXcgeCB2YWxcbiAgICAgKiBAcGFyYW0geSAgIE5ldyB5IHZhbFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRBeGVzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHggdGhlIGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHRlciBmb3IgeCBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHRlciBmb3IgeSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHkgYXhpcy5cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB2ZWN0b3IgYXMgYSBmb3JtYXR0ZWQgc3RyaW5nLCBlLmcgXCIoMCwgNClcIlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyb3VuZCkge1xuICAgICAgICBpZiAocm91bmQgPT09IHZvaWQgMCkgeyByb3VuZCA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgTWF0aC5yb3VuZCh0aGlzLngpICsgXCIsIFwiICsgTWF0aC5yb3VuZCh0aGlzLnkpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIpXCI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gQXJyYXkgY29udGFpbmluZyB0aGUgdmVjdG9yIGF4ZXMsIGUuZyBbMCwgNF1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgeyB4OiAwLCB5OiA0IH1cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgcHJvdmlkZWQgdmVjdG9yIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3VidHJhY3QgdGhlIHByb3ZpZGVkIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggLT0gdmVjLng7XG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgcHJvdmlkZWQgdmVjdG9yIGVxdWFsIHRvIHRoaXMgb25lXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ID09PSB0aGlzLnggJiYgdmVjLnkgPT09IHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54ICo9IHZlYy54O1xuICAgICAgICB0aGlzLnkgKj0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWxWID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5VmVjdG9yKHZlYyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVZlY3RvciA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC89IHZlYy54O1xuICAgICAgICB0aGlzLnkgLz0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2ViA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5VmVjdG9yKHYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5U2NhbGFyID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdGhpcy54ICo9IG47XG4gICAgICAgIHRoaXMueSAqPSBuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsUyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5QnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAvPSBuO1xuICAgICAgICB0aGlzLnkgLz0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpdmUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZTID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIobik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2UgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVNjYWxhcih0aGlzLm1hZ25pdHVkZSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvciBBbWVyaWNhbiBzcGVsbGluZy4gU2FtZSBhcyB1bml0L25vcm1hbGlzZSBmdW5jdGlvblxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHNhbWUgYXMgbm9ybWFsaXNlIGFuZCBub3JtYWxpemVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNxdXJlZCBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubGVuZ3RoU3EgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHZlYy54ICogdGhpcy54ICsgdmVjLnkgKiB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXIuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNyb3NzID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjLnkgLSB0aGlzLnkgKiB2ZWMueDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldmVyc2VzIHRoaXMgdmVjdG9yIGkuZSBtdWx0aXBsaWVzIGl0IGJ5IC0xXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2ZWN0b3IgYXhlcyB2YWx1ZXMgdG8gYWJzb2x1dGUgdmFsdWVzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5hYnModGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5hYnModGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBaZXJvZXMgdGhlIHZlY3RvciBpLmUgc2V0cyBhbGwgYXhlcyB0byAwXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnplcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54IC0gdi54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueSAtIHYueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZldG9yIGJ5IHByb3ZpZGVkIHJhZGlhbnNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHJhZHMpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZHMpO1xuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkcyk7XG4gICAgICAgIHZhciBveCA9IHRoaXMueDtcbiAgICAgICAgdmFyIG95ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnggPSBveCAqIGNvcyAtIG95ICogc2luO1xuICAgICAgICB0aGlzLnkgPSBveCAqIHNpbiArIG95ICogY29zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJvdW5kcyB0aGlzIHZlY3RvciB0byBuIGRlY2ltYWwgcGxhY2VzXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdW5kID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMjsgfVxuICAgICAgICB2YXIgcCA9IHByZWNpc2lvbltuXTtcbiAgICAgICAgLy8gVGhpcyBwZXJmb3JtcyB3YWFheSBiZXR0ZXIgdGhhbiB0b0ZpeGVkIGFuZCBnaXZlIEZsb2F0MzIgdGhlIGVkZ2UgYWdhaW4uXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZHluYW1pY2d1cnUuY29tL2phdmFzY3JpcHQvcm91bmQtbnVtYmVycy13aXRoLXByZWNpc2lvbi9cbiAgICAgICAgdGhpcy54ID0gKCgwLjUgKyB0aGlzLnggKiBwKSA8PCAwKSAvIHA7XG4gICAgICAgIHRoaXMueSA9ICgoMC41ICsgdGhpcy55ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWJzdHJhY3RWZWN0b3I7XG59KCkpO1xuZXhwb3J0cy5BYnN0cmFjdFZlY3RvciA9IEFic3RyYWN0VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJzdHJhY3RWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGFuIEFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkFycmF5VmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEFycmF5VmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBcnJheVZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcnJheVZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEFycmF5VmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5heGVzID0gW3gsIHldO1xuICAgICAgICBfdGhpcy5jdG9yID0gQXJyYXlWZWN0b3I7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBcnJheVZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5BcnJheVZlY3RvciA9IEFycmF5VmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJyYXlWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGluIGEgRmxvYXQzMkFycmF5XG4gKlxuICogYGBgXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELkZsb2F0MzJWZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgRmxvYXQzMlZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXQzMlZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdDMyVmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgRmxvYXQzMlZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IG5ldyBGbG9hdDMyQXJyYXkoMik7XG4gICAgICAgIF90aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICBfdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQzMlZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGbG9hdDMyVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLkZsb2F0MzJWZWN0b3IgPSBGbG9hdDMyVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXQzMlZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BcnJheVZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9GbG9hdDMyVmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1ZlY3RvclwiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWMyRC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgYXMgcGFydCBvZiB0aGUgaW5zdGFuY2UgaXRzZWxmXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3ggPSB4O1xuICAgICAgICBfdGhpcy5feSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuVmVjdG9yID0gVmVjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjdG9yLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9XZWJTb2NrZXRDbGllbnQvd2Vic29ja2V0LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9