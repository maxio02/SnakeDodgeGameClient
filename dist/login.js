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
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuManager/login */ "./src/MenuManager/login.ts");
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
        var scaleX = context.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
        var scaleY = context.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
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
        var tangent_angle = this._counterClockwise ? -Math.PI : Math.PI;
        tangent_angle += this.endAngle;
        context.lineCap = "round";
        (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawDot)(this.center.x, this.center.y, 5, '#000000');
        (0,_Drawer__WEBPACK_IMPORTED_MODULE_0__.drawArrow)(context, new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.endPoint.x, this.endPoint.y), new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.endPoint.x + this.radius * Math.cos(tangent_angle), this.endPoint.y + this.radius * Math.sin(tangent_angle)), '#bbbbbb', 12);
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
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuManager/login */ "./src/MenuManager/login.ts");



function drawGrid() {
    var scaleX = _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.canvas.width / (_MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom ? _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.settings.arenaSize : 2000);
    var scaleY = _index__WEBPACK_IMPORTED_MODULE_1__.backgroundCanvasCtx.canvas.height / (_MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom ? _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.settings.arenaSize : 2000);
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
function drawArrow(ctx, from, to, color, width) {
    if (from.x != to.x && from.y != to.y) {
        var angle = Math.atan2(to.y - from.y, to.x - from.x);
        var headLength = 10;
        var new_to = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(to.x, to.y);
        // This makes it so the end of the arrow head is located at tox, toy
        new_to.x -= Math.cos(angle) * ((width * 1.15));
        new_to.y -= Math.sin(angle) * ((width * 1.15));
        //starting path of the arrow from the start square to the end square and drawing the stroke
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(new_to.x, new_to.y);
        ctx.strokeStyle = color;
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
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.fillStyle = color;
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
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuManager/login */ "./src/MenuManager/login.ts");
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
        var scaleX = context.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.currentRoom.settings.arenaSize;
        var scaleY = context.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.currentRoom.settings.arenaSize;
        context.lineCap = "round";
        context.strokeStyle = color;
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

/***/ "./src/MenuManager/countdown.ts":
/*!**************************************!*\
  !*** ./src/MenuManager/countdown.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateCountdown: () => (/* binding */ animateCountdown),
/* harmony export */   resetCountDown: () => (/* binding */ resetCountDown)
/* harmony export */ });
var countdownThree = document.getElementById('countdown-three');
var countdownTwo = document.getElementById('countdown-two');
var countdownOne = document.getElementById('countdown-one');
var countdownGo = document.getElementById('countdown-go');
function animateCountdown() {
    setTimeout(function () {
        countdownThree.classList.add('move-left');
    }, 500);
    setTimeout(function () {
        countdownTwo.classList.add('move-top');
    }, 900);
    setTimeout(function () {
        countdownOne.classList.add('move-right');
    }, 1300);
    setTimeout(function () {
        countdownGo.classList.add('move-down');
    }, 1700);
}
function resetCountDown() {
    countdownThree.classList.remove('move-left');
    countdownTwo.classList.remove('move-top');
    countdownOne.classList.remove('move-right');
    countdownGo.classList.remove('move-down');
}


/***/ }),

/***/ "./src/MenuManager/login.ts":
/*!**********************************!*\
  !*** ./src/MenuManager/login.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeColorPickerLabelState: () => (/* binding */ changeColorPickerLabelState),
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
/* harmony import */ var _PowerupSystem_PowerupHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PowerupSystem/PowerupHandler */ "./src/PowerupSystem/PowerupHandler.ts");
/* harmony import */ var _WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../WebSocketClient/websocket */ "./src/WebSocketClient/websocket.ts");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countdown */ "./src/MenuManager/countdown.ts");






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
var settingsButton = document.getElementById('room-settings-button');
var settingsDiv = document.getElementById('settings-div');
var colorPickerLabel = document.getElementById('color-label');
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
        (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__.createRoom)(usernameInput.value);
    }
    else {
        (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__.joinRoom)(roomCodeInput.value.toUpperCase(), usernameInput.value);
    }
}
function triggerActionOnEnter(event) {
    if (event.key === 'Enter') {
        handleRoomAction();
    }
}
;
function handleReadyState() {
    currentPlayer.isReady = !currentPlayer.isReady;
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__.setPlayerData)(currentPlayer);
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
function showRoomView(roomInfo) {
    var players = {};
    Object.keys(roomInfo.players).forEach(function (username) {
        var playerData = roomInfo.players[username];
        players[username] = new _Models_Player__WEBPACK_IMPORTED_MODULE_1__.Player(username, playerData.isReady, playerData.color);
    });
    currentRoom = new _Models_Room__WEBPACK_IMPORTED_MODULE_2__.Room(roomInfo.code, new _Models_Player__WEBPACK_IMPORTED_MODULE_1__.Player(roomInfo.host.username, roomInfo.host.isReady, roomInfo.host.color), roomInfo.settings, players);
    currentRoom.powerupHandler = new _PowerupSystem_PowerupHandler__WEBPACK_IMPORTED_MODULE_3__["default"](currentRoom.settings.arenaSize);
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
    switchGameView({ type: 'GAME_STATE', state: 1 /* GameState.IN_LOBBY */ });
    roomCodeInput.value = currentRoom.code;
    roomCodeSpan.innerHTML = currentRoom.code;
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__.setPlayerData)(currentPlayer);
    updateRoomList(roomInfo);
}
function updateRoomList(roomInfo) {
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
    currentRoom.maxSize = roomInfo.settings.roomSize;
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
    //show host things
    if (currentPlayer.username === currentRoom.host.username) {
        document.getElementById('startButton').classList.remove('display-none');
        var settingsList = document.getElementById("settings-list");
        settingsList.querySelectorAll('input').forEach(function (element) {
            element.removeAttribute('disabled');
        });
    }
    // Update settings values from server
    currentRoom.settings = roomInfo.settings;
    document.querySelector('input[name="room-size"]').value = roomInfo.settings.roomSize.toString();
    document.querySelector('input[name="max-powerups"]').value = roomInfo.settings.maxPowerups.toString();
    document.querySelector('input[name="powerup-interval"]').value = roomInfo.settings.powerupInterval.toString();
    document.querySelector('input[name="self-collision"]').checked = roomInfo.settings.selfCollision;
    document.querySelector('input[name="arena-size"]').value = roomInfo.settings.arenaSize.toString();
    updateStartButtonProgress(Object.values(currentRoom.players).filter(function (p) { return p.isReady; }).length, currentRoom.maxSize);
}
function updateStartButtonProgress(readyPlayerCount, maxPlayerCount) {
    if (maxPlayerCount === 0) {
        return;
    }
    startProgressBar.style.clipPath = "inset(0 ".concat(100 - Math.floor(readyPlayerCount / maxPlayerCount * 100) + '%', " 0 0");
}
function showErrorAnimation(reason) {
    var animationElement = null;
    var message = '';
    switch (reason) {
        case 0 /* joinResult.ROOM_DOES_NOT_EXIST */:
            animationElement = roomCodeInput;
            break;
        case 1 /* joinResult.ROOM_FULL */:
            animationElement = roomButton;
            message = 'ROOM FULL';
            break;
        case 2 /* joinResult.GAME_RUNNING */:
            animationElement = roomButton;
            message = 'GAME RUNNING';
            break;
        case 3 /* joinResult.INVALID_USERNAME */:
            animationElement = usernameInput;
            break;
        case 4 /* joinResult.SUCCESS */:
    }
    animationElement.classList.add('red-button');
    animationElement.classList.add('wiggle');
    if (message !== '') {
        animationElement.innerText = message;
    }
    setTimeout(function () {
        animationElement.classList.remove('red-button');
        animationElement.classList.remove('wiggle');
        if (message !== '') {
            animationElement.innerText = 'JOIN ROOM';
        }
    }, 600);
}
function updateColorPicker() {
    colorPickerDiv.style.backgroundColor = colorPicker.value;
}
function changeColorPickerLabelState(enable) {
    if (enable) {
        colorPickerLabel.style.opacity = '100';
    }
    else {
        colorPickerLabel.style.opacity = '0';
    }
}
function updatePlayerColor() {
    currentPlayer.color = colorPicker.value;
    colorPickerLabel.style.color = pickTextColorBasedOnBgColorAdvanced(colorPicker.value, '#FFFFFF', '#000000');
    changeColorPickerLabelState(true);
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__.setPlayerData)(currentPlayer);
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
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__.sendStartCommand)();
}
function goBackToLobby() {
    switchGameView({ type: 'GAME_STATE', state: 1 /* GameState.IN_LOBBY */ });
}
function toggleSettingsDisplay() {
    settingsDiv.classList.toggle('settings-top');
    roomDiv.classList.toggle('shift-left');
}
function updateClasses(element, classesToAdd, classesToRemove) {
    var _a, _b;
    (_a = element.classList).add.apply(_a, classesToAdd);
    (_b = element.classList).remove.apply(_b, classesToRemove);
}
function switchGameView(data) {
    switch (data.state) {
        case 0:
            //update the game canvas to fit the screen
            (0,___WEBPACK_IMPORTED_MODULE_0__.updateCanvasSize)();
            updateClasses(gameDiv, ['center-menu-element'], ['right-menu-element', 'left-menu-element', 'display-none']);
            updateClasses(roomDiv, ['left-menu-element'], ['center-menu-element', 'shift-left']);
            updateClasses(settingsDiv, ['settings-top'], []);
            updateClasses(endgameDiv, ['right-menu-element'], ['center-menu-element']);
            break;
        case 1:
            updateClasses(roomDiv, ['center-menu-element'], ['right-menu-element', 'left-menu-element', 'display-none']);
            updateClasses(loginDiv, ['left-menu-element'], ['center-menu-element']);
            updateClasses(endgameDiv, ['right-menu-element'], ['center-menu-element']);
            break;
        case 2:
            updateClasses(endgameDiv, ['center-menu-element'], ['right-menu-element', 'display-none']);
            updateClasses(gameDiv, ['left-menu-element'], ['center-menu-element']);
            lastWinnerSpan.innerHTML = "".concat(currentRoom.lastWinner.username);
            currentRoom.resetRoomForNewGame();
            currentPlayer.snake = null;
            currentPlayer.isReady = false;
            updateReadyButton(currentPlayer.isReady);
            (0,_countdown__WEBPACK_IMPORTED_MODULE_5__.resetCountDown)();
            break;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    updateButton();
    usernameInput.addEventListener("keydown", triggerActionOnEnter);
    roomCodeInput.addEventListener("keydown", triggerActionOnEnter);
    if (!navigator.userAgent.toLowerCase().includes('firefox')) {
        colorPicker.onblur = function () {
            changeColorPickerLabelState(true);
        };
    }
});
function enforceMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}
function handleChangeSettings() {
    var settings = {
        roomSize: parseInt(document.querySelector('input[name="room-size"]').value),
        maxPowerups: parseInt(document.querySelector('input[name="max-powerups"]').value),
        powerupInterval: parseInt(document.querySelector('input[name="powerup-interval"]').value),
        selfCollision: document.querySelector('input[name="self-collision"]').checked,
        arenaSize: parseInt(document.querySelector('input[name="arena-size"]').value),
    };
    (0,_WebSocketClient_websocket__WEBPACK_IMPORTED_MODULE_4__.sendSettings)(settings);
}
window.updateButton = updateButton;
window.handleRoomAction = handleRoomAction;
window.handleReadyState = handleReadyState;
window.updateColorPicker = updateColorPicker;
window.updatePlayerColor = updatePlayerColor;
window.startGame = startGame;
window.goBackToLobby = goBackToLobby;
window.toggleSettingsDisplay = toggleSettingsDisplay;
window.changeColorPickerLabelState = changeColorPickerLabelState;
window.enforceMinMax = enforceMinMax;
window.sendSettingsToServer = handleChangeSettings;


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
/* harmony import */ var _PowerupSystem_PowerupHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PowerupSystem/PowerupHandler */ "./src/PowerupSystem/PowerupHandler.ts");

var Room = /** @class */ (function () {
    function Room(code, host, settings, players) {
        this._players = {};
        this._code = code;
        this._host = host;
        this._settings = settings;
        if (players) {
            this._players = players;
        }
        else {
            this.addPlayer(host);
        }
        // this.powerupHandler = new PowerupHandler();
    }
    Room.prototype.addPlayer = function (player) {
        if (Object.keys(this._players).length >= this.settings.roomSize) {
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
        this.powerupHandler.reset();
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
            return this.settings.roomSize;
        },
        set: function (newMaxSize) {
            if (newMaxSize > 0) {
                this.settings.roomSize = newMaxSize;
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
    Object.defineProperty(Room.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        set: function (newSettings) {
            this._settings = newSettings;
            this.powerupHandler = new _PowerupSystem_PowerupHandler__WEBPACK_IMPORTED_MODULE_0__["default"](this.settings.arenaSize);
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
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuManager/login */ "./src/MenuManager/login.ts");
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
            var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
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
            var scaleX = this._canvasCtx.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
            var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
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
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuManager/login */ "./src/MenuManager/login.ts");
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
        var scaleX = this._canvasCtx.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.currentRoom.settings.arenaSize;
        var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_1__.currentRoom.settings.arenaSize;
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
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MenuManager/login */ "./src/MenuManager/login.ts");
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
            var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_4__.currentRoom.settings.arenaSize;
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
            var scaleX = this._canvasCtx.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_4__.currentRoom.settings.arenaSize;
            var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_4__.currentRoom.settings.arenaSize;
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
    function PowerupHandler(arenaSize) {
        this._powerups = {};
        this._wallEmitters = [];
        this._portalWalls = false;
        this._cameraLock = false;
        this._gameCanvasDiv = document.getElementById("game-canvas-container");
        this.initializeWallEmitters(arenaSize);
    }
    PowerupHandler.prototype.initializeWallEmitters = function (arenaSize) {
        var sizes = [
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(arenaSize, 50),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(50, arenaSize),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(arenaSize, 50),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(50, arenaSize),
        ];
        var directions = [
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, -1),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(-1, 0),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 1),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(1, 0),
        ];
        var positions = [
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(arenaSize / 2, 50),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(50, arenaSize / 2),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(arenaSize / 2, arenaSize - 50),
            new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(arenaSize - 50, arenaSize / 2),
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
                this.setWallState(!this._portalWalls);
                break;
            case _powerup__WEBPACK_IMPORTED_MODULE_3__.PowerupType.CameraLockToPlayer:
                if (player.username === _MenuManager_login__WEBPACK_IMPORTED_MODULE_5__.currentPlayer.username || !_MenuManager_login__WEBPACK_IMPORTED_MODULE_5__.currentPlayer.snake.isAlive) {
                    break;
                }
                if (this._cameraLockTimeoutId) {
                    clearTimeout(this._cameraLockTimeoutId);
                }
                else {
                    //increase the canvas resolution in order to decrease the blur
                    ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.width = ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.getBoundingClientRect().width * 2;
                    ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.height = ___WEBPACK_IMPORTED_MODULE_1__.gameCanvas.getBoundingClientRect().height * 2;
                    ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.width = ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.getBoundingClientRect().width * 2;
                    ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.height = ___WEBPACK_IMPORTED_MODULE_1__.backgroundCanvas.getBoundingClientRect().height * 2;
                    (0,_Drawer__WEBPACK_IMPORTED_MODULE_4__.drawGrid)();
                }
                this._cameraLock = true;
                this._cameraLockTimeoutId = setTimeout(function () {
                    _this._cameraLock = false;
                    document.getElementById('game-canvas-container').style.transform = "scale(1) translate(0px, 0px)";
                    document.getElementById('game-canvas-container').style.rotate = '0rad';
                    setTimeout(function () {
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
    PowerupHandler.prototype.setWallState = function (isPortal) {
        this._portalWalls = isPortal;
        this._wallEmitters.forEach(function (emitter) { return (emitter.emitTime = isPortal ? Infinity : 0); });
        this._gameCanvasDiv.style.borderColor = isPortal
            ? "#34c6dc"
            : "#555555";
    };
    PowerupHandler.prototype.reset = function () {
        this._powerups = {};
        clearTimeout(this._cameraLockTimeoutId);
        this._cameraLock = false;
        document.getElementById('game-canvas-container').style.transform = null;
        this.setWallState(false);
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
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuManager/login */ "./src/MenuManager/login.ts");
var _a;



var PowerupType;
(function (PowerupType) {
    PowerupType[PowerupType["SpeedUp"] = 0] = "SpeedUp";
    PowerupType[PowerupType["SpeedDown"] = 1] = "SpeedDown";
    // Bomb,
    // FlipButtons,
    PowerupType[PowerupType["Invisibility"] = 2] = "Invisibility";
    PowerupType[PowerupType["PortalWalls"] = 3] = "PortalWalls";
    PowerupType[PowerupType["CameraLockToPlayer"] = 4] = "CameraLockToPlayer";
})(PowerupType || (PowerupType = {}));
var SVG_PATHS = (_a = {},
    _a[PowerupType.SpeedUp] = "../assets/powerups/speedup.svg",
    _a[PowerupType.SpeedDown] = "../assets/powerups/speeddown.svg",
    // [PowerupType.Bomb]: "../assets/powerups/bomb.svg",
    // [PowerupType.FlipButtons]: "../assets/powerups/flipbuttons.svg",
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
        var scaleX = this._canvasCtx.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.settings.arenaSize;
        var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.settings.arenaSize;
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
        var scaleX = this._canvasCtx.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.settings.arenaSize;
        var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.settings.arenaSize;
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
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParticleSystem_CircularEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleSystem/CircularEmitter */ "./src/ParticleSystem/CircularEmitter.ts");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer */ "./src/Drawer.ts");
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuManager/login */ "./src/MenuManager/login.ts");




var Snake = /** @class */ (function () {
    function Snake(startPos, color, canvasCtx) {
        this.segments = [];
        this.isAlive = true;
        this.turnRadius = 60;
        this._emitter = null;
        this.addSegment(startPos);
        this._color = color;
        this._canvasCtx = canvasCtx;
        this._emitter = new _ParticleSystem_CircularEmitter__WEBPACK_IMPORTED_MODULE_1__["default"](0, this.head.endPoint, this._canvasCtx, {
            emitInterval: 2,
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
        var scaleX = this._canvasCtx.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
        var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
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
    Snake.prototype.drawHeadingDir = function () {
        var scaleX = this._canvasCtx.canvas.width / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
        var scaleY = this._canvasCtx.canvas.height / _MenuManager_login__WEBPACK_IMPORTED_MODULE_3__.currentRoom.settings.arenaSize;
        var arrowLength = 170;
        var lastSegment = this.head;
        var dx = Math.cos(lastSegment.endAngle) * arrowLength;
        var dy = Math.sin(lastSegment.endAngle) * arrowLength;
        var width = 12 * Math.min(scaleX, scaleY);
        var newEnd = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy);
        (0,_Drawer__WEBPACK_IMPORTED_MODULE_2__.drawArrow)(this._canvasCtx, this.head.endPoint.clone().mulS(scaleX), newEnd.mulS(scaleX), this._color, width * 0.6);
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
/* harmony export */   sendSettings: () => (/* binding */ sendSettings),
/* harmony export */   sendStartCommand: () => (/* binding */ sendStartCommand),
/* harmony export */   setPlayerData: () => (/* binding */ setPlayerData)
/* harmony export */ });
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ "./node_modules/pako/dist/pako.esm.mjs");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuManager/login */ "./src/MenuManager/login.ts");



var socket;
function initWebSocket() {
    socket = new WebSocket("ws://".concat(window.location.hostname, ":3000"));
    // socket = new WebSocket(`wss://snakegame-server.maxio.site`);
    // 
    // socket.onopen = () => {
    //     console.log('WebSocket connection established');
    // };
    socket.binaryType = 'arraybuffer';
    socket.onmessage = function (event) {
        var JSONdata = JSON.parse((0,pako__WEBPACK_IMPORTED_MODULE_0__.inflate)(event.data, { to: "string" }));
        console.log('Message from server:', JSONdata);
        switch (JSONdata.type) {
            case 'JOINED_ROOM':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.showRoomView)(JSONdata.room);
                break;
            case 'JOIN_FAIL':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.showErrorAnimation)(JSONdata.reason);
                break;
            case 'ROOM_DATA':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.updateRoomList)(JSONdata.room);
                break;
            case 'GAME_STATE':
                (0,_MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.switchGameView)(JSONdata);
                break;
            case 'GD':
                (0,___WEBPACK_IMPORTED_MODULE_1__.updateGameState)(JSONdata);
                break;
            case 'ERROR':
                alert("Error: ".concat(JSONdata.message));
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
function setPlayerData(player) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'PLAYER_DATA', player: player, roomCode: _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.code }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
function sendKeyEventToServer(key, pressed) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'KEY_EVENT', roomCode: _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.code, username: _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentPlayer.username, key: key, pressed: pressed }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
function sendStartCommand() {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'BEGIN_GAME', roomCode: _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.code }));
    }
    else {
        console.error('WebSocket connection is not open');
    }
}
function sendSettings(settings) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'ROOM_SETTINGS', roomCode: _MenuManager_login__WEBPACK_IMPORTED_MODULE_2__.currentRoom.code, settings: settings }));
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
/* harmony import */ var _PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PowerupSystem/powerup */ "./src/PowerupSystem/powerup.ts");
/* harmony import */ var _MenuManager_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MenuManager/countdown */ "./src/MenuManager/countdown.ts");









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
function updateCanvasSize() {
    gameCanvas.width = gameCanvas.getBoundingClientRect().width * 1.5;
    gameCanvas.height = gameCanvas.getBoundingClientRect().height * 1.5;
    backgroundCanvas.width = backgroundCanvas.getBoundingClientRect().width * 1.5;
    backgroundCanvas.height = backgroundCanvas.getBoundingClientRect().height * 1.5;
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
    _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.powerupHandler.draw();
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
function lerp(a, b, f) {
    return a * (1.0 - f) + (b * f);
}
function updateGameState(gameState) {
    if (_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.snake === null) {
        // Initialize snakes the first time this function is called
        gameState.s.forEach(function (headData) {
            //this can be done because the snake always begins with a line segment
            var serverHead = headData.lS;
            var username = headData.u;
            var pos = serverHead.endPoint;
            _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[username].snake = new _Snake__WEBPACK_IMPORTED_MODULE_5__["default"](new _LineSegment__WEBPACK_IMPORTED_MODULE_4__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(parseFloat(pos.x), parseFloat(pos.y)), new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(parseFloat(pos.x), parseFloat(pos.y)), serverHead.isCollidable, parseFloat(serverHead.endAngle)), _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[username].color, gameCanvasCtx);
        });
        _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.snake = _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username].snake;
        inputManager = new _InputManager__WEBPACK_IMPORTED_MODULE_3__["default"](_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username].snake, ["A", "ARROWLEFT"], ["D", "ARROWRIGHT"]);
        (0,_MenuManager_countdown__WEBPACK_IMPORTED_MODULE_8__.animateCountdown)();
        animate();
        Object.values(_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players).forEach(function (player) {
            player.snake.drawHeadingDir();
        });
        return;
    }
    else {
        var currentUsernames_1 = [];
        // Update existing snakes based on the new game state
        if (gameState.p !== null) {
            //update powerups list
            gameState.p.forEach(function (powerupInfo) {
                switch (powerupInfo.action) {
                    case 0 /* PowerupAction.REMOVE */:
                        _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.powerupHandler.removePowerup(_PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_7__["default"].fromMessagePowerup(powerupInfo, gameCanvasCtx));
                        break;
                    case 1 /* PowerupAction.SPAWN */:
                        _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.powerupHandler.addPowerup(_PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_7__["default"].fromMessagePowerup(powerupInfo, gameCanvasCtx));
                        break;
                    case 2 /* PowerupAction.APPLY */:
                        _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.powerupHandler.applyPowerup(_PowerupSystem_powerup__WEBPACK_IMPORTED_MODULE_7__["default"].fromMessagePowerup(powerupInfo, gameCanvasCtx), powerupInfo.player);
                        break;
                }
            });
        }
        gameState.s.forEach(function (newHeadData) {
            var serverHead = newHeadData.lS;
            var username = newHeadData.u;
            var snakeToUpdate = _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.players[username].snake;
            //keep track of the usernames sent by the server in the data
            currentUsernames_1.push(username);
            // translate(${head.endPoint.x * gameCanvas.width / 2000 }px, ${head.endPoint.y * gameCanvas.width / 2000}px)
            if (serverHead.isNewThisTick) {
                if (newHeadData.sT === "L") {
                    var newLineHead = serverHead;
                    snakeToUpdate.addSegment(new _LineSegment__WEBPACK_IMPORTED_MODULE_4__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(parseFloat(newLineHead.startPoint.x), parseFloat(newLineHead.startPoint.y)), new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(parseFloat(newLineHead.endPoint.x), parseFloat(newLineHead.endPoint.y)), newLineHead.isCollidable, parseFloat(newLineHead.endAngle)));
                }
                else if (newHeadData.sT === "A") {
                    var newArcHead = serverHead;
                    var center = newArcHead.center;
                    snakeToUpdate.addSegment(new _ArcSegment__WEBPACK_IMPORTED_MODULE_1__["default"](new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(parseFloat(center.x), parseFloat(center.y)), parseFloat(newArcHead.radius), parseFloat(newArcHead.startAngle), parseFloat(newArcHead.endAngle), newArcHead.counterClockwise, newArcHead.isCollidable));
                }
            }
            else {
                if (newHeadData.sT === "L") {
                    serverHead = serverHead;
                    var clientHead = snakeToUpdate.segments[snakeToUpdate.segments.length - 1];
                    clientHead.endPoint = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(parseFloat(serverHead.endPoint.x), parseFloat(serverHead.endPoint.y));
                    //camera powerup effect stuff
                    if (_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.powerupHandler.cameraLock) {
                        if (username === _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username) {
                            var newAngle = -clientHead.endAngle - Math.PI / 2;
                            newAngle = lerp(prevGameDivAngle, newAngle, 0.15);
                            gameDiv.style.rotate = "".concat(newAngle, "rad");
                            gameDiv.style.transform = "scale(2) translate(".concat((-serverHead.endPoint.x * gameDiv.offsetHeight) / _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.settings.arenaSize +
                                gameDiv.offsetHeight / 2, "px, ").concat((-serverHead.endPoint.y * gameDiv.offsetHeight) / _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.settings.arenaSize +
                                gameDiv.offsetHeight / 2, "px)");
                            prevGameDivAngle = newAngle;
                        }
                    }
                }
                else if (newHeadData.sT === "A") {
                    serverHead = serverHead;
                    var clientHead = snakeToUpdate.segments[snakeToUpdate.segments.length - 1];
                    clientHead.endAngle = parseFloat(serverHead.endAngle);
                    //camera powerup effect stuff
                    if (_MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.powerupHandler.cameraLock) {
                        if (username === _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentPlayer.username) {
                            var newAngle = clientHead.isCounterClockwise()
                                ? -clientHead.endAngle
                                : -clientHead.endAngle - Math.PI;
                            // newAngle = newAngle % ( 2 * Math.PI );
                            newAngle = lerp(prevGameDivAngle, newAngle, 0.15);
                            gameDiv.style.rotate = "".concat(newAngle, "rad");
                            gameDiv.style.transform = "scale(2) translate(".concat((-clientHead.endPoint.x * gameDiv.offsetHeight) / _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.settings.arenaSize +
                                gameDiv.offsetHeight / 2, "px, ").concat((-clientHead.endPoint.y * gameDiv.offsetHeight) / _MenuManager_login__WEBPACK_IMPORTED_MODULE_6__.currentRoom.settings.arenaSize +
                                gameDiv.offsetHeight / 2, "px)");
                            prevGameDivAngle = newAngle;
                        }
                    }
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

/***/ }),

/***/ "./node_modules/pako/dist/pako.esm.mjs":
/*!*********************************************!*\
  !*** ./node_modules/pako/dist/pako.esm.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deflate: () => (/* binding */ Deflate_1),
/* harmony export */   Inflate: () => (/* binding */ Inflate_1),
/* harmony export */   constants: () => (/* binding */ constants_1),
/* harmony export */   "default": () => (/* binding */ pako),
/* harmony export */   deflate: () => (/* binding */ deflate_1),
/* harmony export */   deflateRaw: () => (/* binding */ deflateRaw_1),
/* harmony export */   gzip: () => (/* binding */ gzip_1),
/* harmony export */   inflate: () => (/* binding */ inflate_1),
/* harmony export */   inflateRaw: () => (/* binding */ inflateRaw_1),
/* harmony export */   ungzip: () => (/* binding */ ungzip_1)
/* harmony export */ });

/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/
/* ===========================================================================*/


//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED$1               = 4;
//const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
const Z_BINARY              = 0;
const Z_TEXT                = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1             = 2;

/*============================================================================*/


function zero$1(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES    = 2;
/* The three kinds of block type */

const MIN_MATCH$1    = 3;
const MAX_MATCH$1    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES$1  = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS$1      = 256;
/* number of literal bytes 0..255 */

const L_CODES$1       = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES$1       = 30;
/* number of distance codes */

const BL_CODES$1      = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE$1     = 2 * L_CODES$1 + 1;
/* maximum heap size */

const MAX_BITS$1      = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK   = 256;
/* end of block literal code */

const REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
const extra_lbits =   /* extra bits for each length code */
  new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);

const extra_dbits =   /* extra bits for each distance code */
  new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);

const extra_blbits =  /* extra bits for each bit length code */
  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);

const bl_order =
  new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree  = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree  = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code    = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code  = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length   = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist     = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


let static_l_desc;
let static_d_desc;
let static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



const d_code = (dist) => {

  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
const put_short = (s, w) => {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
};


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
const send_bits = (s, value, length) => {

  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
};


const send_code = (s, c, tree) => {

  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
};


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
const bi_reverse = (code, len) => {

  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
const bi_flush = (s) => {

  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
const gen_bitlen = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */

  const tree            = desc.dyn_tree;
  const max_code        = desc.max_code;
  const stree           = desc.stat_desc.static_tree;
  const has_stree       = desc.stat_desc.has_stree;
  const extra           = desc.stat_desc.extra_bits;
  const base            = desc.stat_desc.extra_base;
  const max_length      = desc.stat_desc.max_length;
  let h;              /* heap index */
  let n, m;           /* iterate over the tree elements */
  let bits;           /* bit length */
  let xbits;          /* extra bits */
  let f;              /* frequency */
  let overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Tracev((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
};


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
const gen_codes = (tree, max_code, bl_count) => {
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */

  const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
  let code = 0;              /* running code value */
  let bits;                  /* bit index */
  let n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    code = (code + bl_count[bits - 1]) << 1;
    next_code[bits] = code;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    let len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
const tr_static_init = () => {

  let n;        /* iterates over tree elements */
  let bits;     /* bit counter */
  let length;   /* length value */
  let code;     /* code value */
  let dist;     /* distance index */
  const bl_count = new Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES$1, MAX_BL_BITS);

  //static_init_done = true;
};


/* ===========================================================================
 * Initialize a new block.
 */
const init_block = (s) => {

  let n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES$1;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES$1;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES$1; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.sym_next = s.matches = 0;
};


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
const bi_windup = (s) =>
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
const smaller = (tree, n, m, depth) => {

  const _n2 = n * 2;
  const _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
};

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
const pqdownheap = (s, tree, k) => {
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */

  const v = s.heap[k];
  let j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
};


// inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
const compress_block = (s, ltree, dtree) => {
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */

  let dist;           /* distance of matched string */
  let lc;             /* match length or unmatched char (if dist == 0) */
  let sx = 0;         /* running index in sym_buf */
  let code;           /* the code to send */
  let extra;          /* number of extra bits to send */

  if (s.sym_next !== 0) {
    do {
      dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
      dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
      lc = s.pending_buf[s.sym_buf + sx++];
      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and sym_buf is ok: */
      //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");

    } while (sx < s.sym_next);
  }

  send_code(s, END_BLOCK, ltree);
};


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
const build_tree = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */

  const tree     = desc.dyn_tree;
  const stree    = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems    = desc.stat_desc.elems;
  let n, m;          /* iterate over heap elements */
  let max_code = -1; /* largest code with non zero frequency */
  let node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
};


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
const scan_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
const send_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
const build_bl_tree = (s) => {

  let max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
const send_all_trees = (s, lcodes, dcodes, blcodes) => {
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */

  let rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
const detect_data_type = (s) => {
  /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let block_mask = 0xf3ffc07f;
  let n;

  /* Check for non-textual ("block-listed") bytes. */
  for (n = 0; n <= 31; n++, block_mask >>>= 1) {
    if ((block_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("allow-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
};


let static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
const _tr_init$1 = (s) =>
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
};


/* ===========================================================================
 * Send a stored block
 */
const _tr_stored_block$1 = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  bi_windup(s);        /* align on byte boundary */
  put_short(s, stored_len);
  put_short(s, ~stored_len);
  if (stored_len) {
    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
  }
  s.pending += stored_len;
};


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
const _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */
const _tr_flush_block$1 = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  let max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->sym_next / 3));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block$1(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
};

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
const _tr_tally$1 = (s, dist, lc) => {
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */

  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

  return (s.sym_next === s.sym_end);
};

var _tr_init_1  = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1  = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;

var trees = {
	_tr_init: _tr_init_1,
	_tr_stored_block: _tr_stored_block_1,
	_tr_flush_block: _tr_flush_block_1,
	_tr_tally: _tr_tally_1,
	_tr_align: _tr_align_1
};

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
};


var adler32_1 = adler32;

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
const makeTable = () => {
  let c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
};

// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());


const crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;

  crc ^= -1;

  for (let i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
};


var crc32_1 = crc32;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var messages = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var constants$2 = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  Z_MEM_ERROR:       -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;




/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;

/*============================================================================*/


const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
const MAX_WBITS$1 = 15;
/* 32K LZ77 window */
const DEF_MEM_LEVEL = 8;


const LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
const LITERALS      = 256;
/* number of literal bytes 0..255 */
const L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
const D_CODES       = 30;
/* number of distance codes */
const BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
const HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
const MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

const PRESET_DICT = 0x20;

const INIT_STATE    =  42;    /* zlib header -> BUSY_STATE */
//#ifdef GZIP
const GZIP_STATE    =  57;    /* gzip header -> BUSY_STATE | EXTRA_STATE */
//#endif
const EXTRA_STATE   =  69;    /* gzip extra block -> NAME_STATE */
const NAME_STATE    =  73;    /* gzip file name -> COMMENT_STATE */
const COMMENT_STATE =  91;    /* gzip comment -> HCRC_STATE */
const HCRC_STATE    = 103;    /* gzip header CRC -> BUSY_STATE */
const BUSY_STATE    = 113;    /* deflate -> FINISH_STATE */
const FINISH_STATE  = 666;    /* stream complete */

const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
const BS_BLOCK_DONE     = 2; /* block flush performed */
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};

const rank = (f) => {
  return ((f) * 2) - ((f) > 4 ? 9 : 0);
};

const zero = (buf) => {
  let len = buf.length; while (--len >= 0) { buf[len] = 0; }
};

/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */
const slide_hash = (s) => {
  let n, m;
  let p;
  let wsize = s.w_size;

  n = s.hash_size;
  p = n;
  do {
    m = s.head[--p];
    s.head[p] = (m >= wsize ? m - wsize : 0);
  } while (--n);
  n = wsize;
//#ifndef FASTEST
  p = n;
  do {
    m = s.prev[--p];
    s.prev[p] = (m >= wsize ? m - wsize : 0);
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */
  } while (--n);
//#endif
};

/* eslint-disable new-cap */
let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */
const flush_pending = (strm) => {
  const s = strm.state;

  //_tr_flush_bits(s);
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out  += len;
  s.pending_out  += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending      -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};


const flush_block_only = (s, last) => {
  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};


const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
const putShortMSB = (s, b) => {

  //  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
const read_buf = (strm, buf, start, size) => {

  let len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
};


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
const longest_match = (s, cur_match) => {

  let chain_length = s.max_chain_length;      /* max hash chain length */
  let scan = s.strstart; /* current string */
  let match;                       /* matched string */
  let len;                           /* length of current match */
  let best_len = s.prev_length;              /* best match length so far */
  let nice_match = s.nice_match;             /* stop if match long enough */
  const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH;
  let scan_end1  = _win[scan + best_len - 1];
  let scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
const fill_window = (s) => {

  const _w_size = s.w_size;
  let n, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;
      if (s.insert > s.strstart) {
        s.insert = s.strstart;
      }
      slide_hash(s);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */
const deflate_stored = (s, flush) => {

  /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;

  /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */
  let len, left, have, last = 0;
  let used = s.strm.avail_in;
  do {
    /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */
    len = 65535/* MAX_STORED */;     /* maximum deflate stored block length */
    have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    if (s.strm.avail_out < have) {         /* need room for header */
      break;
    }
      /* maximum stored block length that will fit in avail_out: */
    have = s.strm.avail_out - have;
    left = s.strstart - s.block_start;  /* bytes left in window */
    if (len > left + s.strm.avail_in) {
      len = left + s.strm.avail_in;   /* limit len to the input */
    }
    if (len > have) {
      len = have;             /* limit len to the output */
    }

    /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */
    if (len < min_block && ((len === 0 && flush !== Z_FINISH$3) ||
                        flush === Z_NO_FLUSH$2 ||
                        len !== left + s.strm.avail_in)) {
      break;
    }

    /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */
    last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
    _tr_stored_block(s, 0, 0, last);

    /* Replace the lengths in the dummy stored block with len. */
    s.pending_buf[s.pending - 4] = len;
    s.pending_buf[s.pending - 3] = len >> 8;
    s.pending_buf[s.pending - 2] = ~len;
    s.pending_buf[s.pending - 1] = ~len >> 8;

    /* Write the stored block header bytes. */
    flush_pending(s.strm);

//#ifdef ZLIB_DEBUG
//    /* Update debugging counts for the data about to be copied. */
//    s->compressed_len += len << 3;
//    s->bits_sent += len << 3;
//#endif

    /* Copy uncompressed bytes from the window to next_out. */
    if (left) {
      if (left > len) {
        left = len;
      }
      //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
      s.strm.next_out += left;
      s.strm.avail_out -= left;
      s.strm.total_out += left;
      s.block_start += left;
      len -= left;
    }

    /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */
    if (len) {
      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
      s.strm.next_out += len;
      s.strm.avail_out -= len;
      s.strm.total_out += len;
    }
  } while (last === 0);

  /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */
  used -= s.strm.avail_in;    /* number of input bytes directly copied */
  if (used) {
    /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */
    if (used >= s.w_size) {  /* supplant the previous history */
      s.matches = 2;     /* clear hash */
      //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
      s.strstart = s.w_size;
      s.insert = s.strstart;
    }
    else {
      if (s.window_size - s.strstart <= used) {
        /* Slide the window down. */
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;   /* add a pending slide_hash() */
        }
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
      s.strstart += used;
      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
    }
    s.block_start = s.strstart;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* If the last block was written to next_out, then done. */
  if (last) {
    return BS_FINISH_DONE;
  }

  /* If flushing and all input has been consumed, then done. */
  if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 &&
    s.strm.avail_in === 0 && s.strstart === s.block_start) {
    return BS_BLOCK_DONE;
  }

  /* Fill the window with any remaining input. */
  have = s.window_size - s.strstart;
  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
    /* Slide the window down. */
    s.block_start -= s.w_size;
    s.strstart -= s.w_size;
    //zmemcpy(s->window, s->window + s->w_size, s->strstart);
    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
    if (s.matches < 2) {
      s.matches++;       /* add a pending slide_hash() */
    }
    have += s.w_size;      /* more space now */
    if (s.insert > s.strstart) {
      s.insert = s.strstart;
    }
  }
  if (have > s.strm.avail_in) {
    have = s.strm.avail_in;
  }
  if (have) {
    read_buf(s.strm, s.window, s.strstart, have);
    s.strstart += have;
    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */
  have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    /* maximum stored block length that will fit in pending: */
  have = s.pending_buf_size - have > 65535/* MAX_STORED */ ? 65535/* MAX_STORED */ : s.pending_buf_size - have;
  min_block = have > s.w_size ? s.w_size : have;
  left = s.strstart - s.block_start;
  if (left >= min_block ||
     ((left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 &&
     s.strm.avail_in === 0 && left <= have)) {
    len = left > have ? have : left;
    last = flush === Z_FINISH$3 && s.strm.avail_in === 0 &&
         len === left ? 1 : 0;
    _tr_stored_block(s, s.block_start, len, last);
    s.block_start += len;
    flush_pending(s.strm);
  }

  /* We've done all we can with the available input and output. */
  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};


/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
const deflate_fast = (s, flush) => {

  let hash_head;        /* head of the hash chain */
  let bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
const deflate_slow = (s, flush) => {

  let hash_head;          /* head of hash chain */
  let bflush;              /* set if current block must be flushed */

  let max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
const deflate_rle = (s, flush) => {

  let bflush;            /* set if current block must be flushed */
  let prev;              /* byte at distance one to match */
  let scan, strend;      /* scan goes up to strend for length of run */

  const _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
const deflate_huff = (s, flush) => {

  let bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {

  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

const configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
const lm_init = (s) => {

  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED$2; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.sym_buf = 0;        /* buffer for distances and literals/lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.sym_next = 0;      /* running index in sym_buf */
  this.sym_end = 0;       /* symbol table full when sym_next reaches this */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */
const deflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const s = strm.state;
  if (!s || s.strm !== strm || (s.status !== INIT_STATE &&
//#ifdef GZIP
                                s.status !== GZIP_STATE &&
//#endif
                                s.status !== EXTRA_STATE &&
                                s.status !== NAME_STATE &&
                                s.status !== COMMENT_STATE &&
                                s.status !== HCRC_STATE &&
                                s.status !== BUSY_STATE &&
                                s.status !== FINISH_STATE)) {
    return 1;
  }
  return 0;
};


const deflateResetKeep = (strm) => {

  if (deflateStateCheck(strm)) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status =
//#ifdef GZIP
    s.wrap === 2 ? GZIP_STATE :
//#endif
    s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = -2;
  _tr_init(s);
  return Z_OK$3;
};


const deflateReset = (strm) => {

  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};


const deflateSetHeader = (strm, head) => {

  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
    return Z_STREAM_ERROR$2;
  }
  strm.state.gzhead = head;
  return Z_OK$3;
};


const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {

  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED || (windowBits === 8 && wrap !== 1)) {
    return err(strm, Z_STREAM_ERROR$2);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  const s = new DeflateState();

  strm.state = s;
  s.strm = strm;
  s.status = INIT_STATE;     /* to pass state test in deflateReset() */

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->sym_buf = s->pending_buf + s->lit_bufsize;
  s.sym_buf = s.lit_bufsize;

  //s->sym_end = (s->lit_bufsize - 1) * 3;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
};

const deflateInit = (strm, level) => {

  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};


/* ========================================================================= */
const deflate$2 = (strm, flush) => {

  if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }

  const s = strm.state;

  if (!strm.output ||
      (strm.avail_in !== 0 && !strm.input) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH$3)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  }

  const old_flush = s.last_flush;
  s.last_flush = flush;

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK$3;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* Write the header */
  if (s.status === INIT_STATE && s.wrap === 0) {
    s.status = BUSY_STATE;
  }
  if (s.status === INIT_STATE) {
    /* zlib header */
    let header = (Z_DEFLATED$2 + ((s.w_bits - 8) << 4)) << 8;
    let level_flags = -1;

    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
      level_flags = 0;
    } else if (s.level < 6) {
      level_flags = 1;
    } else if (s.level === 6) {
      level_flags = 2;
    } else {
      level_flags = 3;
    }
    header |= (level_flags << 6);
    if (s.strstart !== 0) { header |= PRESET_DICT; }
    header += 31 - (header % 31);

    putShortMSB(s, header);

    /* Save the adler32 of the preset dictionary: */
    if (s.strstart !== 0) {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }
    strm.adler = 1; // adler32(0L, Z_NULL, 0);
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
//#ifdef GZIP
  if (s.status === GZIP_STATE) {
    /* gzip header */
    strm.adler = 0;  //crc32(0L, Z_NULL, 0);
    put_byte(s, 31);
    put_byte(s, 139);
    put_byte(s, 8);
    if (!s.gzhead) { // s->gzhead == Z_NULL
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, OS_CODE);
      s.status = BUSY_STATE;

      /* Compression must start with an empty pending buffer */
      flush_pending(strm);
      if (s.pending !== 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    }
    else {
      put_byte(s, (s.gzhead.text ? 1 : 0) +
                  (s.gzhead.hcrc ? 2 : 0) +
                  (!s.gzhead.extra ? 0 : 4) +
                  (!s.gzhead.name ? 0 : 8) +
                  (!s.gzhead.comment ? 0 : 16)
      );
      put_byte(s, s.gzhead.time & 0xff);
      put_byte(s, (s.gzhead.time >> 8) & 0xff);
      put_byte(s, (s.gzhead.time >> 16) & 0xff);
      put_byte(s, (s.gzhead.time >> 24) & 0xff);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, s.gzhead.os & 0xff);
      if (s.gzhead.extra && s.gzhead.extra.length) {
        put_byte(s, s.gzhead.extra.length & 0xff);
        put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
      }
      if (s.gzhead.hcrc) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
      }
      s.gzindex = 0;
      s.status = EXTRA_STATE;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
      while (s.pending + left > s.pending_buf_size) {
        let copy = s.pending_buf_size - s.pending;
        // zmemcpy(s.pending_buf + s.pending,
        //    s.gzhead.extra + s.gzindex, copy);
        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
        s.pending = s.pending_buf_size;
        //--- HCRC_UPDATE(beg) ---//
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        //---//
        s.gzindex += copy;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
        beg = 0;
        left -= copy;
      }
      // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
      //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      // zmemcpy(s->pending_buf + s->pending,
      //     s->gzhead->extra + s->gzindex, left);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
      s.pending += left;
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
    }
    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
      }
      put_byte(s, strm.adler & 0xff);
      put_byte(s, (strm.adler >> 8) & 0xff);
      strm.adler = 0; //crc32(0L, Z_NULL, 0);
    }
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
//#endif

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE)) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) :
                 s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) :
                 s.strategy === Z_RLE ? deflate_rle(s, flush) :
                 configuration_table[s.level].func(s, flush);

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK$3;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      }
      else if (flush !== Z_BLOCK$1) { /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH$1) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK$3;
      }
    }
  }

  if (flush !== Z_FINISH$3) { return Z_OK$3; }
  if (s.wrap <= 0) { return Z_STREAM_END$3; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};


const deflateEnd = (strm) => {

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }

  const status = strm.state.status;

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
const deflateSetDictionary = (strm, dictionary) => {

  let dictLength = dictionary.length;

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }

  const s = strm.state;
  const wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};


var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/

var deflate_1$2 = {
	deflateInit: deflateInit_1,
	deflateInit2: deflateInit2_1,
	deflateReset: deflateReset_1,
	deflateResetKeep: deflateResetKeep_1,
	deflateSetHeader: deflateSetHeader_1,
	deflate: deflate_2$1,
	deflateEnd: deflateEnd_1,
	deflateSetDictionary: deflateSetDictionary_1,
	deflateInfo: deflateInfo
};

const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

var assign = function (obj /*from1, from2, from3, ...*/) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// Join array of chunks to single array.
var flattenChunks = (chunks) => {
  // calculate data length
  let len = 0;

  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  }

  // join chunks
  const result = new Uint8Array(len);

  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }

  return result;
};

var common = {
	assign: assign,
	flattenChunks: flattenChunks
};

// String encode/decode helpers


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
var string2buf = (str) => {
  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }

  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new Uint8Array(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper
const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }

  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};


// convert array to string
var buf2string = (buf, max) => {
  const len = max || buf.length;

  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }

  let i, out;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  const utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    let c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    let c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max) => {

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

var strings = {
	string2buf: string2buf,
	buf2string: buf2string,
	utf8border: utf8border
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

var zstream = ZStream;

const toString$1 = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate$1(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});

  let opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;

  let status = deflate_1$2.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }

  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    let dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = deflate_1$2.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;

  if (this.ended) { return false; }

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    // Make sure avail_out > 6 to avoid repeating markers
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    status = deflate_1$2.deflate(strm, _flush_mode);

    // Ended => flush and finish
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }

    // Flush if out buffer full
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }

    // Flush if requested and has data
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate$1(input, options) {
  const deflator = new Deflate$1(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || messages[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip$1(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}


var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;

var deflate_1$1 = {
	Deflate: Deflate_1$1,
	deflate: deflate_2,
	deflateRaw: deflateRaw_1$1,
	gzip: gzip_1$1,
	constants: constants$1
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
const BAD$1 = 16209;       /* got a data error -- remain here until reset */
const TYPE$1 = 16191;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
var inffast = function inflate_fast(strm, start) {
  let _in;                    /* local strm.input */
  let last;                   /* have enough input while in < last */
  let _out;                   /* local strm.output */
  let beg;                    /* inflate()'s initial strm.output */
  let end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  let dmax;                   /* maximum distance from zlib header */
//#endif
  let wsize;                  /* window size or zero if not using window */
  let whave;                  /* valid bytes in the window */
  let wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  let s_window;               /* allocated sliding window, if wsize != 0 */
  let hold;                   /* local strm.hold */
  let bits;                   /* local strm.bits */
  let lcode;                  /* local strm.lencode */
  let dcode;                  /* local strm.distcode */
  let lmask;                  /* mask for first level of length codes */
  let dmask;                  /* mask for first level of distance codes */
  let here;                   /* retrieved table entry */
  let op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  let len;                    /* match length, unused bytes */
  let dist;                   /* match distance */
  let from;                   /* where to copy match from */
  let from_source;


  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  const state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE$1;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD$1;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;

const lbase = new Uint16Array([ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
]);

const lext = new Uint8Array([ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
]);

const dbase = new Uint16Array([ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
]);

const dext = new Uint8Array([ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
]);

const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
{
  const bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  let len = 0;               /* a code's length in bits */
  let sym = 0;               /* index of code symbols */
  let min = 0, max = 0;          /* minimum and maximum code lengths */
  let root = 0;              /* number of index bits for root table */
  let curr = 0;              /* number of index bits for current table */
  let drop = 0;              /* code bits to drop for sub-table */
  let left = 0;                   /* number of prefix codes available */
  let used = 0;              /* code entries in table used */
  let huff = 0;              /* Huffman code */
  let incr;              /* for incrementing code, index */
  let fill;              /* index for replicating entries */
  let low;               /* low bits for current root entry */
  let mask;              /* mask for low root bits */
  let next;             /* next available space in table */
  let base = null;     /* base value table to use */
//  let shoextra;    /* extra bits table to use */
  let match;                  /* use base and extra for symbol >= match */
  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  let extra = null;

  let here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES$1) {
    base = extra = work;    /* dummy value--not used */
    match = 20;

  } else if (type === LENS$1) {
    base = lbase;
    extra = lext;
    match = 257;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    match = 0;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
    (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] + 1 < match) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] >= match) {
      here_op = extra[work[sym] - match];
      here_val = base[work[sym] - match];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
        (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


var inftrees = inflate_table;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.






const CODES = 0;
const LENS = 1;
const DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES,
  Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2;


/* STATES ====================================================================*/
/* ===========================================================================*/


const    HEAD = 16180;       /* i: waiting for magic header */
const    FLAGS = 16181;      /* i: waiting for method and flags (gzip) */
const    TIME = 16182;       /* i: waiting for modification time (gzip) */
const    OS = 16183;         /* i: waiting for extra flags and operating system (gzip) */
const    EXLEN = 16184;      /* i: waiting for extra length (gzip) */
const    EXTRA = 16185;      /* i: waiting for extra bytes (gzip) */
const    NAME = 16186;       /* i: waiting for end of file name (gzip) */
const    COMMENT = 16187;    /* i: waiting for end of comment (gzip) */
const    HCRC = 16188;       /* i: waiting for header crc (gzip) */
const    DICTID = 16189;    /* i: waiting for dictionary check value */
const    DICT = 16190;      /* waiting for inflateSetDictionary() call */
const        TYPE = 16191;      /* i: waiting for type bits, including last-flag bit */
const        TYPEDO = 16192;    /* i: same, but skip check to exit inflate on new block */
const        STORED = 16193;    /* i: waiting for stored size (length and complement) */
const        COPY_ = 16194;     /* i/o: same as COPY below, but only first time in */
const        COPY = 16195;      /* i/o: waiting for input or output to copy stored block */
const        TABLE = 16196;     /* i: waiting for dynamic block table lengths */
const        LENLENS = 16197;   /* i: waiting for code length code lengths */
const        CODELENS = 16198;  /* i: waiting for length/lit and distance code lengths */
const            LEN_ = 16199;      /* i: same as LEN below, but only first time in */
const            LEN = 16200;       /* i: waiting for length/lit/eob code */
const            LENEXT = 16201;    /* i: waiting for length extra bits */
const            DIST = 16202;      /* i: waiting for distance code */
const            DISTEXT = 16203;   /* i: waiting for distance extra bits */
const            MATCH = 16204;     /* o: waiting for output space to copy string */
const            LIT = 16205;       /* o: waiting for output space to write literal */
const    CHECK = 16206;     /* i: waiting for 32-bit check value */
const    LENGTH = 16207;    /* i: waiting for 32-bit length (gzip) */
const    DONE = 16208;      /* finished check, done -- remain here until reset */
const    BAD = 16209;       /* got a data error -- remain here until reset */
const    MEM = 16210;       /* got an inflate() memory error -- remain here until reset */
const    SYNC = 16211;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_WBITS = MAX_WBITS;


const zswap32 = (q) => {

  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
};


function InflateState() {
  this.strm = null;           /* pointer back to this zlib stream */
  this.mode = 0;              /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
  this.work = new Uint16Array(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}


const inflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const state = strm.state;
  if (!state || state.strm !== strm ||
    state.mode < HEAD || state.mode > SYNC) {
    return 1;
  }
  return 0;
};


const inflateResetKeep = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.flags = -1;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK$1;
};


const inflateReset = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

};


const inflateReset2 = (strm, windowBits) => {
  let wrap;

  /* get the state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 5;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};


const inflateInit2 = (strm, windowBits) => {

  if (!strm) { return Z_STREAM_ERROR$1; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  const state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.strm = strm;
  state.window = null/*Z_NULL*/;
  state.mode = HEAD;     /* to pass state test in inflateReset2() */
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
};


const inflateInit = (strm) => {

  return inflateInit2(strm, DEF_WBITS);
};


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
let virgin = true;

let lenfix, distfix; // We have no pointers in JS, so keep tables separate


const fixedtables = (state) => {

  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);

    /* literal/length table */
    let sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inftrees(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inftrees(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
const updatewindow = (strm, src, end, copy) => {

  let dist;
  const state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new Uint8Array(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
};


const inflate$2 = (strm, flush) => {

  let state;
  let input, output;          // input/output buffers
  let next;                   /* next input INDEX */
  let put;                    /* next output INDEX */
  let have, left;             /* available input and output */
  let hold;                   /* bit buffer */
  let bits;                   /* bits in bit buffer */
  let _in, _out;              /* save starting available input and output */
  let copy;                   /* number of stored or match bytes to copy */
  let from;                   /* where to copy match bytes from */
  let from_source;
  let here = 0;               /* current decoding table entry */
  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */
  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  let len;                    /* length to copy for repeats, bits to drop */
  let ret;                    /* return code */
  const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
  let opts;

  let n; // temporary variable for NEED_BITS

  const order = /* permutation of code lengths */
    new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);


  if (inflateStateCheck(strm) || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR$1;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK$1;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          if (state.wbits === 0) {
            state.wbits = 15;
          }
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        if (len > 15 || len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }

        // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.
        state.dmax = 1 << state.wbits;
        //state.dmax = 1 << len;

        state.flags = 0;               /* indicate zlib header */
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32_1(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }
              state.head.extra.set(
                input.subarray(
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  next + copy
                ),
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if ((state.flags & 0x0200) && (state.wrap & 4)) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT$1;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          output.set(input.subarray(next, next + copy), put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inffast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if ((state.wrap & 4) && _out) {
            strm.adler = state.check =
                /*UPDATE_CHECK(state.check, put - _out, _out);*/
                (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.wrap & 4) && (state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END$1;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR$1;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR$1;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR$1;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH$1))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if ((state.wrap & 4) && _out) {
    strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR;
  }
  return ret;
};


const inflateEnd = (strm) => {

  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }

  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};


const inflateGetHeader = (strm, head) => {

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR$1; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK$1;
};


const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;

  let state;
  let dictid;
  let ret;

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK$1;
};


var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/

var inflate_1$2 = {
	inflateReset: inflateReset_1,
	inflateReset2: inflateReset2_1,
	inflateResetKeep: inflateResetKeep_1,
	inflateInit: inflateInit_1,
	inflateInit2: inflateInit2_1,
	inflate: inflate_2$1,
	inflateEnd: inflateEnd_1,
	inflateGetHeader: inflateGetHeader_1,
	inflateSetDictionary: inflateSetDictionary_1,
	inflateInfo: inflateInfo
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

var gzheader = GZheader;

const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_FINISH,
  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
} = constants$2;

/* ===========================================================================*/


/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate$1(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});

  const opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new zstream();
  this.strm.avail_out = 0;

  let status  = inflate_1$2.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }

  this.header = new gzheader();

  inflate_1$2.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;

  if (this.ended) return false;

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = inflate_1$2.inflate(strm, _flush_mode);

    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);

      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        // Replace code with more verbose
        status = Z_NEED_DICT;
      }
    }

    // Skip snyc markers if more data follows and not raw mode
    while (strm.avail_in > 0 &&
           status === Z_STREAM_END &&
           strm.state.wrap > 0 &&
           data[strm.next_in] !== 0)
    {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }

    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }

    // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.
    last_avail_out = strm.avail_out;

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END) {

        if (this.options.to === 'string') {

          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail & realign counters
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);

          this.onData(utf8str);

        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    }

    // Must repeat iteration if out buffer is full
    if (status === Z_OK && last_avail_out === 0) continue;

    // Finalize if end of stream reached.
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/
function inflate$1(input, options) {
  const inflator = new Inflate$1(options);

  inflator.push(input);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) throw inflator.msg || messages[inflator.err];

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;

var inflate_1$1 = {
	Inflate: Inflate_1$1,
	inflate: inflate_2,
	inflateRaw: inflateRaw_1$1,
	ungzip: ungzip$1,
	constants: constants
};

const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;

const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;



var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;

var pako = {
	Deflate: Deflate_1,
	deflate: deflate_1,
	deflateRaw: deflateRaw_1,
	gzip: gzip_1,
	Inflate: Inflate_1,
	inflate: inflate_1,
	inflateRaw: inflateRaw_1,
	ungzip: ungzip_1,
	constants: constants_1
};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDO1FBRzlFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxlQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFHLENBQUM7UUFDMUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QixNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0ksTUFBTTtRQUNkLENBQUM7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QUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUN2QywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLE9BQU87QUFDNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLHNEQUFzRCxhQUFhOzs7QUFHekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0EsbUNBQW1DOzs7QUFHbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjs7QUFFekM7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEIsZ0JBQWdCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwQkFBMEI7O0FBRS9DO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZTs7QUFFbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWU7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHFDQUFxQzs7QUFFN0MsUUFBUSx1Q0FBdUM7Ozs7QUFJL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlPOzs7Ozs7O1VDNXROek87VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL0FyY1NlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9EcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9MaW5lU2VnbWVudC50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL01lbnVNYW5hZ2VyL2NvdW50ZG93bi50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL01lbnVNYW5hZ2VyL2xvZ2luLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvTW9kZWxzL1BsYXllci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL01vZGVscy9Sb29tLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vQ2lyY3VsYXJFbWl0dGVyLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vRW1pdHRlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1BhcnRpY2xlU3lzdGVtL1BhcnRpY2xlLnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvUGFydGljbGVTeXN0ZW0vUGFydGljbGVTeXN0ZW1VdGlscy50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1BhcnRpY2xlU3lzdGVtL1JlY3Rhbmd1bGFyRW1pdHRlci50cyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL1Bvd2VydXBTeXN0ZW0vUG93ZXJ1cEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9Qb3dlcnVwU3lzdGVtL3Bvd2VydXAudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9TZWdtZW50LnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvU25ha2UudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9XZWJTb2NrZXRDbGllbnQvd2Vic29ja2V0LnRzIiwid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQWJzdHJhY3RWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvQXJyYXlWZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvRmxvYXQzMlZlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWMyRC5qcyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL25vZGVfbW9kdWxlcy9wYWtvL2Rpc3QvcGFrby5lc20ubWpzIiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NuYWtlX2dhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zbmFrZV9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkcmF3QXJjLCBkcmF3QXJyb3csIGRyYXdEb3QgfSBmcm9tIFwiLi9EcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgVmVjMkQgZnJvbSAndmVjdG9yMmQnO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi9TZWdtZW50XCI7XHJcbmltcG9ydCB7IGdhbWVDYW52YXNDdHggfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBjdXJyZW50Um9vbSB9IGZyb20gXCIuL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNTZWdtZW50IGV4dGVuZHMgU2VnbWVudCB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBjZW50ZXI6IFZlYzJELlZlY3RvcjtcclxuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdGFydEFuZ2xlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZW5kQW5nbGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvdW50ZXJDbG9ja3dpc2U6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNDb2xsaWRhYmxlOiBib29sZWFuO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXI6IFZlYzJELlZlY3RvciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY291bnRlckNsb2Nrd2lzZTogYm9vbGVhbiwgaXNDb2xsaWRhYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLnN0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlO1xyXG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSBlbmRBbmdsZTtcclxuICAgICAgICB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlID0gY291bnRlckNsb2Nrd2lzZTtcclxuICAgICAgICB0aGlzLmlzQ29sbGlkYWJsZSA9IGlzQ29sbGlkYWJsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSBjb250ZXh0LmNhbnZhcy53aWR0aCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQgLyBjdXJyZW50Um9vbS5zZXR0aW5ncy5hcmVuYVNpemU7XHJcblxyXG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsaWRhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKHRoaXMuY2VudGVyLnggKiBzY2FsZVgsIHRoaXMuY2VudGVyLnkgKiBzY2FsZVksIHRoaXMucmFkaXVzICogTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpLCB0aGlzLnN0YXJ0QW5nbGUsIHRoaXMuZW5kQW5nbGUsIHRoaXMuX2NvdW50ZXJDbG9ja3dpc2UpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3RGVidWcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRhbmdlbnRfYW5nbGUgPSB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlID8gLSBNYXRoLlBJIDogTWF0aC5QSTtcclxuXHJcbiAgICAgICAgdGFuZ2VudF9hbmdsZSArPSB0aGlzLmVuZEFuZ2xlO1xyXG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICBkcmF3RG90KHRoaXMuY2VudGVyLngsIHRoaXMuY2VudGVyLnksIDUsICcjMDAwMDAwJyk7XHJcbiAgICAgICAgZHJhd0Fycm93KGNvbnRleHQsIG5ldyBWZWMyRC5WZWN0b3IodGhpcy5lbmRQb2ludC54LCB0aGlzLmVuZFBvaW50LnkpLCBuZXcgVmVjMkQuVmVjdG9yKHRoaXMuZW5kUG9pbnQueCArIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGFuZ2VudF9hbmdsZSksIHRoaXMuZW5kUG9pbnQueSArIHRoaXMucmFkaXVzICogTWF0aC5zaW4odGFuZ2VudF9hbmdsZSkpLCAnI2JiYmJiYicsIDEyKTtcclxuICAgICAgICBkcmF3QXJjKHRoaXMuY2VudGVyLngsIHRoaXMuY2VudGVyLnksIHRoaXMucmFkaXVzLCAwLCAwLCBmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmRQb2ludCgpOiBWZWMyRC5WZWN0b3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMkQuVmVjdG9yKFxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlci54ICsgdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyh0aGlzLmVuZEFuZ2xlKSxcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXIueSArIHRoaXMucmFkaXVzICogTWF0aC5zaW4odGhpcy5lbmRBbmdsZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwZW5wZW5kaWN1bGFyRW5kQW5nbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvdW50ZXJDbG9ja3dpc2UgPyB0aGlzLmVuZEFuZ2xlIC0gTWF0aC5QSSAvIDIgOiB0aGlzLmVuZEFuZ2xlICsgTWF0aC5QSSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBlbnBlbmRpY3VsYXJTdGFydEFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb3VudGVyQ2xvY2t3aXNlID8gdGhpcy5zdGFydEFuZ2xlIC0gTWF0aC5QSSAvIDIgOiB0aGlzLnN0YXJ0QW5nbGUgKyBNYXRoLlBJIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvdW50ZXJDbG9ja3dpc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXJDbG9ja3dpc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGludWluZ1NlZ21lbnQodHJhbnNmb3JtOiBWZWMyRC5WZWN0b3IpOiBTZWdtZW50IHtcclxuICAgICAgICByZXR1cm4gbmV3IEFyY1NlZ21lbnQodGhpcy5jZW50ZXIuY2xvbmUoKS5hZGQodHJhbnNmb3JtKSBhcyBWZWMyRC5WZWN0b3IsIHRoaXMucmFkaXVzLCB0aGlzLmVuZEFuZ2xlLCB0aGlzLmVuZEFuZ2xlLCB0aGlzLl9jb3VudGVyQ2xvY2t3aXNlLCB0aGlzLmlzQ29sbGlkYWJsZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgYmFja2dyb3VuZENhbnZhcywgYmFja2dyb3VuZENhbnZhc0N0eCwgZ3JpZFNpemUgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBjdXJyZW50Um9vbSB9IGZyb20gXCIuL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dyaWQoKSB7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVYID0gYmFja2dyb3VuZENhbnZhc0N0eC5jYW52YXMud2lkdGggLyAoY3VycmVudFJvb20gPyBjdXJyZW50Um9vbS5zZXR0aW5ncy5hcmVuYVNpemUgOiAyMDAwKTtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGJhY2tncm91bmRDYW52YXNDdHguY2FudmFzLmhlaWdodCAvIChjdXJyZW50Um9vbSA/IGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZSA6IDIwMDApO1xyXG5cclxuXHJcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLCBiYWNrZ3JvdW5kQ2FudmFzLndpZHRoLCBiYWNrZ3JvdW5kQ2FudmFzLmhlaWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4zKSc7XHJcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICBmb3IgKGxldCB4ID0gZ3JpZFNpemUgKiBzY2FsZVg7IHggPCBiYWNrZ3JvdW5kQ2FudmFzLndpZHRoOyB4ICs9IGdyaWRTaXplICogc2NhbGVYKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4Lm1vdmVUbyh4ICwgMCk7XHJcbiAgICAgICAgYmFja2dyb3VuZENhbnZhc0N0eC5saW5lVG8oeCAsIGJhY2tncm91bmRDYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IGdyaWRTaXplICogc2NhbGVZOyB5IDwgYmFja2dyb3VuZENhbnZhcy5oZWlnaHQ7IHkgKz0gZ3JpZFNpemUgKiBzY2FsZVkpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHgubW92ZVRvKDAsIHkpO1xyXG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHgubGluZVRvKGJhY2tncm91bmRDYW52YXMud2lkdGgsIHkpO1xyXG4gICAgICAgIGJhY2tncm91bmRDYW52YXNDdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3RG90KGRvdFg6IG51bWJlciwgZG90WTogbnVtYmVyLCBkb3RTaXplOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIGJhY2tncm91bmRDYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmFyYyhcclxuICAgICAgICBkb3RYLFxyXG4gICAgICAgIGRvdFksXHJcbiAgICAgICAgZG90U2l6ZSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGJhY2tncm91bmRDYW52YXNDdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmZpbGwoKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kQ2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0FyYyhkb3RYOiBudW1iZXIsIGRvdFk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY291bnRlckNsb2Nrd2lzZTogYm9vbGVhbikge1xyXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5zdHJva2VTdHlsZSA9IFwiIzM0NjZhYVwiO1xyXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5iZWdpblBhdGgoKTtcclxuICAgIGJhY2tncm91bmRDYW52YXNDdHguYXJjKGRvdFgsIGRvdFksIHJhZGl1cywgMCwgMiAqIE1hdGguUEksIGNvdW50ZXJDbG9ja3dpc2UpO1xyXG5cclxuICAgIGJhY2tncm91bmRDYW52YXNDdHgubGluZVdpZHRoID0gNTtcclxuICAgIGJhY2tncm91bmRDYW52YXNDdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgYmFja2dyb3VuZENhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdBcnJvdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJvbTogVmVjdG9yLCB0bzogVmVjdG9yLCBjb2xvcjogc3RyaW5nLCB3aWR0aDogbnVtYmVyKSB7XHJcbiAgICBpZiAoZnJvbS54ICE9IHRvLnggJiYgZnJvbS55ICE9IHRvLnkpIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHRvLnkgLSBmcm9tLnksIHRvLnggLSBmcm9tLngpO1xyXG4gICAgICAgIGxldCBoZWFkTGVuZ3RoID0gMTA7XHJcbiAgICAgICAgbGV0IG5ld190byA9IG5ldyBWZWN0b3IodG8ueCwgdG8ueSk7XHJcbiAgICAgICAgLy8gVGhpcyBtYWtlcyBpdCBzbyB0aGUgZW5kIG9mIHRoZSBhcnJvdyBoZWFkIGlzIGxvY2F0ZWQgYXQgdG94LCB0b3lcclxuICAgICAgICBuZXdfdG8ueCAtPSBNYXRoLmNvcyhhbmdsZSkgKiAoKHdpZHRoICogMS4xNSkpO1xyXG4gICAgICAgIG5ld190by55IC09IE1hdGguc2luKGFuZ2xlKSAqICgod2lkdGggKiAxLjE1KSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9zdGFydGluZyBwYXRoIG9mIHRoZSBhcnJvdyBmcm9tIHRoZSBzdGFydCBzcXVhcmUgdG8gdGhlIGVuZCBzcXVhcmUgYW5kIGRyYXdpbmcgdGhlIHN0cm9rZVxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcclxuICAgICAgICBjdHgubGluZVRvKG5ld190by54LCBuZXdfdG8ueSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy9zdGFydGluZyBhIG5ldyBwYXRoIGZyb20gdGhlIGhlYWQgb2YgdGhlIGFycm93IHRvIG9uZSBvZiB0aGUgc2lkZXMgb2YgdGhlIHBvaW50XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8obmV3X3RvLngsIG5ld190by55KTtcclxuICAgICAgICBjdHgubGluZVRvKG5ld190by54IC0gaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDcpLCBuZXdfdG8ueSAtIGhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA3KSk7XHJcblxyXG4gICAgICAgIC8vcGF0aCBmcm9tIHRoZSBzaWRlIHBvaW50IG9mIHRoZSBhcnJvdywgdG8gdGhlIG90aGVyIHNpZGUgcG9pbnRcclxuICAgICAgICBjdHgubGluZVRvKG5ld190by54IC0gaGVhZExlbmd0aCAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDcpLCBuZXdfdG8ueSAtIGhlYWRMZW5ndGggKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA3KSk7XHJcblxyXG4gICAgICAgIC8vcGF0aCBmcm9tIHRoZSBzaWRlIHBvaW50IGJhY2sgdG8gdGhlIHRpcCBvZiB0aGUgYXJyb3csIGFuZCB0aGVuIGFnYWluIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIHBvaW50XHJcbiAgICAgICAgY3R4LmxpbmVUbyhuZXdfdG8ueCwgbmV3X3RvLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8obmV3X3RvLnggLSBoZWFkTGVuZ3RoICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNyksIG5ld190by55IC0gaGVhZExlbmd0aCAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDcpKTtcclxuXHJcbiAgICAgICAgLy9kcmF3cyB0aGUgcGF0aHMgY3JlYXRlZCBhYm92ZVxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNuYWtlIGZyb20gXCIuL1NuYWtlXCI7XHJcbmltcG9ydCB7IHNlbmRLZXlFdmVudFRvU2VydmVyIH0gZnJvbSBcIi4vV2ViU29ja2V0Q2xpZW50L3dlYnNvY2tldFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gRGlye1xyXG4gIExFRlQsXHJcbiAgUklHSFRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuICBwcml2YXRlIF9rZXlNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgcHJpdmF0ZSBfc25ha2U6IFNuYWtlO1xyXG4gIHByaXZhdGUgX2xlZnRLZXlzOiBzdHJpbmdbXTtcclxuICBwcml2YXRlIF9yaWdodEtleXM6IHN0cmluZ1tdO1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcihzbmFrZTogU25ha2UsIGxlZnRLZXlzOiBzdHJpbmdbXSwgcmlnaHRLZXlzOiBzdHJpbmdbXSkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuX3NuYWtlID0gc25ha2U7XHJcbiAgICB0aGlzLl9sZWZ0S2V5cyA9IGxlZnRLZXlzLm1hcChrZXkgPT4ga2V5LnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgdGhpcy5fcmlnaHRLZXlzID0gcmlnaHRLZXlzLm1hcChrZXkgPT4ga2V5LnRvVXBwZXJDYXNlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vaWYgc25ha2UgaXMgZGVhZCwgaWdub3JlIHRoZSBrZXkgcHJlc3Nlc1xyXG4gICAgaWYoIXRoaXMuX3NuYWtlLmlzQWxpdmUpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAvL2lnbm9yZSBrZXlzIG5vdCBhc3NpZ25lZCB0byBzZWxmLCB0aGlzIHdvdWxkIHJlc3VsdCBpbiB0aGUga2V5bWFwIGhhdmluZyB1bm5lY2Vzc2FyeSBrZXlzIGFuZCB0cmlnZ2VyaW5nIHRoZSBvbmtleVVwIGV2ZW50c1xyXG4gICAgaWYoIXRoaXMuX2xlZnRLZXlzLmluY2x1ZGVzKGtleSkgJiYgIXRoaXMuX3JpZ2h0S2V5cy5pbmNsdWRlcyhrZXkpKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc3dpdGNoIG9mZiB0aGUgY3VycmVudCBkb3duIGtleSBpZiB0aGUgb3RoZXIgZGlyZWN0aW9uIGlzIHByZXNzZWRcclxuICAgIGlmICh0aGlzLl9sZWZ0S2V5cy5zb21lKGxlZnRLZXkgPT4gdGhpcy5fa2V5TWFwW2xlZnRLZXldKSAmJiB0aGlzLl9yaWdodEtleXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICB0aGlzLl9sZWZ0S2V5cy5mb3JFYWNoKGxlZnRLZXkgPT4gdGhpcy5fa2V5TWFwW2xlZnRLZXldID0gZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodEtleXMuc29tZShyaWdodEtleSA9PiB0aGlzLl9rZXlNYXBbcmlnaHRLZXldKSAmJiB0aGlzLl9sZWZ0S2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgIHRoaXMuX3JpZ2h0S2V5cy5mb3JFYWNoKHJpZ2h0S2V5ID0+IHRoaXMuX2tleU1hcFtyaWdodEtleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vcmV0dXJuIGlmIHRoZSBrZXkgaXMgYWxyYWVkeSBpbiB0aGUgbWFwLCBwcmV2ZW50cyBhdXRvY2xpY2tpbmdcclxuICAgIGVsc2UgaWYgKHRoaXMuX2tleU1hcFtrZXldKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fa2V5TWFwW2tleV0gPSB0cnVlO1xyXG5cclxuICAgIHNlbmRLZXlFdmVudFRvU2VydmVyKHRoaXMuX3JpZ2h0S2V5cy5pbmNsdWRlcyhrZXkpID8gRGlyLlJJR0hUIDogRGlyLkxFRlQsIHRydWUpO1xyXG4gIH1cclxuICBwcml2YXRlIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vaWYgc25ha2UgaXMgZGVhZCwgaWdub3JlIHRoZSBrZXkgcHJlc3Nlc1xyXG4gICAgaWYoIXRoaXMuX3NuYWtlLmlzQWxpdmUpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgLy9jaGVjayBpZiB0aGUga2V5IGlzIGluIHRoZSBrZXltYXAsIGlmIG5vdCBqdXN0IGlnbm9yZSBpdFxyXG4gICAgaWYgKCF0aGlzLl9rZXlNYXBba2V5XSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9rZXlNYXBba2V5XSA9IGZhbHNlO1xyXG5cclxuICAgIHNlbmRLZXlFdmVudFRvU2VydmVyKHRoaXMuX3JpZ2h0S2V5cy5pbmNsdWRlcyhrZXkpID8gRGlyLlJJR0hUIDogRGlyLkxFRlQsIGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IFNlZ21lbnQgZnJvbSBcIi4vU2VnbWVudFwiO1xyXG5pbXBvcnQgeyBjdXJyZW50Um9vbSB9IGZyb20gXCIuL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lU2VnbWVudCBleHRlbmRzIFNlZ21lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGFydFBvaW50OiBWZWN0b3I7XHJcbiAgICBwdWJsaWMgZW5kUG9pbnQ6IFZlY3RvcjtcclxuICAgIHB1YmxpYyBlbmRBbmdsZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGlzQ29sbGlkYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IFZlY3RvciwgZW5kOiBWZWN0b3IsIGlzQ29sbGlkYWJsZTogYm9vbGVhbiwgYW5nbGU/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kUG9pbnQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5pc0NvbGxpZGFibGUgPSBpc0NvbGxpZGFibGU7XHJcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IGFuZ2xlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGNvbnRleHQuY2FudmFzLmhlaWdodCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuXHJcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBpZiAodGhpcy5pc0NvbGxpZGFibGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8odGhpcy5zdGFydFBvaW50LnggKiBzY2FsZVgsIHRoaXMuc3RhcnRQb2ludC55ICogc2NhbGVZKTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lVG8odGhpcy5lbmRQb2ludC54ICogc2NhbGVYLCB0aGlzLmVuZFBvaW50LnkgKiBzY2FsZVkpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodGhpcy5zdGFydFBvaW50LnggLSB0aGlzLmVuZFBvaW50LngpICoqIDIgKyAodGhpcy5zdGFydFBvaW50LnkgLSB0aGlzLmVuZFBvaW50LnkpICoqIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb250aW51aW5nU2VnbWVudCh0cmFuc2Zvcm06IFZlY3Rvcik6IFNlZ21lbnQge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkRW5kcG9pbnQgPSB0aGlzLmVuZFBvaW50LmNsb25lKCkuYWRkKHRyYW5zZm9ybSkgYXMgVmVjdG9yO1xyXG4gICAgICAgIHJldHVybiBuZXcgTGluZVNlZ21lbnQoXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkRW5kcG9pbnQsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkRW5kcG9pbnQsXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaWRhYmxlLFxyXG4gICAgICAgICAgICB0aGlzLmVuZEFuZ2xlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iLCJjb25zdCBjb3VudGRvd25UaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGRvd24tdGhyZWUnKTtcclxuY29uc3QgY291bnRkb3duVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZG93bi10d28nKTtcclxuY29uc3QgY291bnRkb3duT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZG93bi1vbmUnKTtcclxuY29uc3QgY291bnRkb3duR28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRkb3duLWdvJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZG93bigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvdW50ZG93blRocmVlLmNsYXNzTGlzdC5hZGQoJ21vdmUtbGVmdCcpO1xyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb3VudGRvd25Ud28uY2xhc3NMaXN0LmFkZCgnbW92ZS10b3AnKTtcclxuICAgIH0sIDkwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY291bnRkb3duT25lLmNsYXNzTGlzdC5hZGQoJ21vdmUtcmlnaHQnKTtcclxuICAgIH0sIDEzMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvdW50ZG93bkdvLmNsYXNzTGlzdC5hZGQoJ21vdmUtZG93bicpO1xyXG4gICAgfSwgMTcwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldENvdW50RG93bigpe1xyXG4gICAgY291bnRkb3duVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1sZWZ0Jyk7XHJcbiAgICBjb3VudGRvd25Ud28uY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS10b3AnKTtcclxuICAgIGNvdW50ZG93bk9uZS5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlLXJpZ2h0Jyk7XHJcbiAgICBjb3VudGRvd25Hby5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlLWRvd24nKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgdXBkYXRlQ2FudmFzU2l6ZSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vTW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUsIFJvb20sIGpvaW5SZXN1bHQgfSBmcm9tIFwiLi4vTW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IFBvd2VydXBIYW5kbGVyIGZyb20gXCIuLi9Qb3dlcnVwU3lzdGVtL1Bvd2VydXBIYW5kbGVyXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZURhdGEsIE1lc3NhZ2VQbGF5ZXIsIE1lc3NhZ2VSb29tLCBSb29tU2V0dGluZ3MgfSBmcm9tIFwiLi4vV2ViU29ja2V0Q2xpZW50L21lc3NhZ2VUeXBlc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb29tLCBqb2luUm9vbSwgc2VuZFNldHRpbmdzLCBzZW5kU3RhcnRDb21tYW5kLCBzZXRQbGF5ZXJEYXRhIH0gZnJvbSBcIi4uL1dlYlNvY2tldENsaWVudC93ZWJzb2NrZXRcIjtcclxuaW1wb3J0IHsgcmVzZXRDb3VudERvd24gfSBmcm9tIFwiLi9jb3VudGRvd25cIjtcclxuXHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRSb29tOiBSb29tIHwgbnVsbCA9IG51bGw7XHJcbmV4cG9ydCBsZXQgY3VycmVudFBsYXllcjogUGxheWVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG5jb25zdCByb29tQ29kZUlucHV0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tQ29kZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCk7XHJcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KTtcclxuY29uc3Qgcm9vbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2luQnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHJlYWR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWR5QnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IGxvZ2luRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWRpdicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCByb29tRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb20tZGl2JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMtY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IGVuZGdhbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kZ2FtZS1kaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcGlja2VyJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3Qgcm9vbVVzZXJzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLXVzZXJzLWxpc3QnKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xyXG5jb25zdCByb29tQ29kZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbS1jb2RlJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbmNvbnN0IHBsYXllckNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1jb3VudCcpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5jb25zdCBjb2xvclBpY2tlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1waWNrZXItY29udGFpbmVyJyk7XHJcbmNvbnN0IHN0YXJ0UHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtcHJvZ3Jlc3MtYmFyJyk7XHJcbmNvbnN0IGxhc3RXaW5uZXJTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3Qtd2lubmVyJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5jb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tLXNldHRpbmdzLWJ1dHRvbicpIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCBzZXR0aW5nc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1kaXYnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuY29uc3QgY29sb3JQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1sYWJlbCcpIGFzIEhUTUxMYWJlbEVsZW1lbnQ7XHJcbi8vIHNyYy9sb2dpbi50c1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQnV0dG9uKCkge1xyXG5cclxuICAgIGlmICh1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICByb29tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vbUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb29tQ29kZUlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDUpIHtcclxuICAgICAgICByb29tQnV0dG9uLnRleHRDb250ZW50ID0gJ0pPSU4gUk9PTSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvb21CdXR0b24udGV4dENvbnRlbnQgPSAnQ1JFQVRFIFJPT00nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUm9vbUFjdGlvbigpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcclxuICAgIGlmICghdXNlcm5hbWUpIHJldHVybjtcclxuXHJcbiAgICBjdXJyZW50UGxheWVyID0gbmV3IFBsYXllcih1c2VybmFtZSk7XHJcblxyXG4gICAgaWYgKHJvb21CdXR0b24uaW5uZXJUZXh0ID09PSAnQ1JFQVRFIFJPT00nKSB7XHJcbiAgICAgICAgY3JlYXRlUm9vbSh1c2VybmFtZUlucHV0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGpvaW5Sb29tKHJvb21Db2RlSW5wdXQudmFsdWUudG9VcHBlckNhc2UoKSwgdXNlcm5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJBY3Rpb25PbkVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgaGFuZGxlUm9vbUFjdGlvbigpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVhZHlTdGF0ZSgpIHtcclxuXHJcbiAgICBjdXJyZW50UGxheWVyLmlzUmVhZHkgPSAhY3VycmVudFBsYXllci5pc1JlYWR5O1xyXG4gICAgc2V0UGxheWVyRGF0YShjdXJyZW50UGxheWVyKTtcclxuICAgIHVwZGF0ZVJlYWR5QnV0dG9uKGN1cnJlbnRQbGF5ZXIuaXNSZWFkeSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVSZWFkeUJ1dHRvbihpc1JlYWR5OiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNSZWFkeSkge1xyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZC1idXR0b24nKTtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncmVlbi1idXR0b24nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZC1idXR0b24nKTtcclxuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbi1idXR0b24nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dSb29tVmlldyhyb29tSW5mbzogTWVzc2FnZVJvb20pIHtcclxuXHJcbiAgICBsZXQgcGxheWVyczogeyBba2V5OiBzdHJpbmddOiBQbGF5ZXIgfSA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMocm9vbUluZm8ucGxheWVycykuZm9yRWFjaCh1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYXllckRhdGEgPSByb29tSW5mby5wbGF5ZXJzW3VzZXJuYW1lXTtcclxuICAgICAgICBwbGF5ZXJzW3VzZXJuYW1lXSA9IG5ldyBQbGF5ZXIodXNlcm5hbWUsIHBsYXllckRhdGEuaXNSZWFkeSwgcGxheWVyRGF0YS5jb2xvcik7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY3VycmVudFJvb20gPSBuZXcgUm9vbShyb29tSW5mby5jb2RlLFxyXG4gICAgICAgIG5ldyBQbGF5ZXIocm9vbUluZm8uaG9zdC51c2VybmFtZSwgcm9vbUluZm8uaG9zdC5pc1JlYWR5LCByb29tSW5mby5ob3N0LmNvbG9yKSxcclxuICAgICAgICByb29tSW5mby5zZXR0aW5ncyxcclxuICAgICAgICBwbGF5ZXJzKTtcclxuXHJcbiAgICAgICAgY3VycmVudFJvb20ucG93ZXJ1cEhhbmRsZXIgPSBuZXcgUG93ZXJ1cEhhbmRsZXIoY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplKTtcclxuXHJcbiAgICAvL3Nob3cgc3RhcnRHYW1lQnV0dG9uIFxyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUgPT09IGN1cnJlbnRSb29tLmhvc3QudXNlcm5hbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldCBhIHJhbmRvbSBjb2xvciBmb3IgYSBwbGF5ZXJcclxuICAgIGNvbG9yUGlja2VyRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRQbGF5ZXIuY29sb3I7XHJcbiAgICBjb2xvclBpY2tlci52YWx1ZSA9IGN1cnJlbnRQbGF5ZXIuY29sb3I7XHJcbiAgICBsZXQgY29sb3JQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1sYWJlbCcpO1xyXG4gICAgY29sb3JQaWNrZXJMYWJlbC5zdHlsZS5jb2xvciA9IHBpY2tUZXh0Q29sb3JCYXNlZE9uQmdDb2xvckFkdmFuY2VkKGNvbG9yUGlja2VyLnZhbHVlLCAnI0ZGRkZGRicsICcjMDAwMDAwJyk7XHJcblxyXG4gICAgLy9zaG93IHRoZSBuZXcgZWxlbWVudFxyXG4gICAgc3dpdGNoR2FtZVZpZXcoe3R5cGU6ICdHQU1FX1NUQVRFJyxzdGF0ZTogR2FtZVN0YXRlLklOX0xPQkJZfSk7XHJcblxyXG5cclxuXHJcbiAgICByb29tQ29kZUlucHV0LnZhbHVlID0gY3VycmVudFJvb20uY29kZTtcclxuICAgIHJvb21Db2RlU3Bhbi5pbm5lckhUTUwgPSBjdXJyZW50Um9vbS5jb2RlO1xyXG4gICAgc2V0UGxheWVyRGF0YShjdXJyZW50UGxheWVyKTtcclxuICAgIHVwZGF0ZVJvb21MaXN0KHJvb21JbmZvKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb29tTGlzdChyb29tSW5mbzogTWVzc2FnZVJvb20pIHtcclxuXHJcbiAgICAvLyB1cGRhdGluZyB0aGUgY3VycmVudCByb29tIHBsYXllcnMgYW5kIGhvc3RcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMocm9vbUluZm8ucGxheWVycykuZm9yRWFjaCh1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSb29tLmFkZFBsYXllcihuZXcgUGxheWVyKHVzZXJuYW1lLCBmYWxzZSwgcm9vbUluZm8ucGxheWVyc1t1c2VybmFtZV0uY29sb3IpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSb29tLnBsYXllcnNbdXNlcm5hbWVdLmNvbG9yID0gcm9vbUluZm8ucGxheWVyc1t1c2VybmFtZV0uY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5pc1JlYWR5ID0gcm9vbUluZm8ucGxheWVyc1t1c2VybmFtZV0uaXNSZWFkeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBwbGF5ZXJzIHRoYXQgYXJlIG5vIGxvbmdlciBpbiB0aGUgcm9vbVxyXG4gICAgT2JqZWN0LmtleXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCh1c2VybmFtZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyb29tSW5mby5wbGF5ZXJzLmhhc093blByb3BlcnR5KHVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50Um9vbS5yZW1vdmVQbGF5ZXIodXNlcm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgY3VycmVudFJvb20uaG9zdCA9IG5ldyBQbGF5ZXIocm9vbUluZm8uaG9zdC51c2VybmFtZSwgcm9vbUluZm8uaG9zdC5pc1JlYWR5LCByb29tSW5mby5ob3N0LmNvbG9yKTtcclxuICAgIGN1cnJlbnRSb29tLm1heFNpemUgPSByb29tSW5mby5zZXR0aW5ncy5yb29tU2l6ZTtcclxuXHJcbiAgICBcclxuICAgIHBsYXllckNvdW50LmlubmVySFRNTCA9IGAke09iamVjdC5rZXlzKGN1cnJlbnRSb29tLnBsYXllcnMpLmxlbmd0aH0vJHtjdXJyZW50Um9vbS5tYXhTaXplfWA7XHJcbiAgICByb29tVXNlcnNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCgocGxheWVyOiB7IHVzZXJuYW1lOiBzdHJpbmcgfCBudW1iZXI7IGlzUmVhZHk6IGJvb2xlYW47IGNvbG9yOiBzdHJpbmc7IH0pID0+IHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICAgICAgcGxheWVySXRlbS50ZXh0Q29udGVudCA9IHBsYXllci51c2VybmFtZSArICcnO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyLnVzZXJuYW1lID09PSBjdXJyZW50Um9vbS5ob3N0LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHBsYXllckl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY3Jvd25cIiBzdHlsZT1cImNvbG9yOiAke3BsYXllci5jb2xvcn07XCI+PC9pPmApXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllckl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlXCIgc3R5bGU9XCJjb2xvcjogJHtwbGF5ZXIuY29sb3J9OyBtYXJnaW4tbGVmdDogNHB4XCI+PC9pPmApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxheWVyLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgcGxheWVySXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICcgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGVcIiBzdHlsZT1cImNvbG9yOiAjMzdjYjQ4O1wiPjwvaT4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXJJdGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJyA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZVwiIHN0eWxlPVwiY29sb3I6ICNjYjM3Mzc7XCI+PC9pPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm9vbVVzZXJzTGlzdC5hcHBlbmRDaGlsZChwbGF5ZXJJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vc2hvdyBob3N0IHRoaW5nc1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUgPT09IGN1cnJlbnRSb29tLmhvc3QudXNlcm5hbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICBsZXQgc2V0dGluZ3NMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5ncy1saXN0XCIpIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0dGluZ3NMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHNldHRpbmdzIHZhbHVlcyBmcm9tIHNlcnZlclxyXG4gICAgICAgIGN1cnJlbnRSb29tLnNldHRpbmdzID0gcm9vbUluZm8uc2V0dGluZ3M7XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyb29tLXNpemVcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IHJvb21JbmZvLnNldHRpbmdzLnJvb21TaXplLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJtYXgtcG93ZXJ1cHNcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IHJvb21JbmZvLnNldHRpbmdzLm1heFBvd2VydXBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwb3dlcnVwLWludGVydmFsXCJdJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSByb29tSW5mby5zZXR0aW5ncy5wb3dlcnVwSW50ZXJ2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNlbGYtY29sbGlzaW9uXCJdJykgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IHJvb21JbmZvLnNldHRpbmdzLnNlbGZDb2xsaXNpb247XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhcmVuYS1zaXplXCJdJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSByb29tSW5mby5zZXR0aW5ncy5hcmVuYVNpemUudG9TdHJpbmcoKTtcclxuXHJcbiAgICB1cGRhdGVTdGFydEJ1dHRvblByb2dyZXNzKE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZmlsdGVyKHAgPT4gcC5pc1JlYWR5KS5sZW5ndGgsIGN1cnJlbnRSb29tLm1heFNpemUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3RhcnRCdXR0b25Qcm9ncmVzcyhyZWFkeVBsYXllckNvdW50OiBudW1iZXIsIG1heFBsYXllckNvdW50OiBudW1iZXIpIHtcclxuICAgIGlmIChtYXhQbGF5ZXJDb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN0YXJ0UHJvZ3Jlc3NCYXIuc3R5bGUuY2xpcFBhdGggPSBgaW5zZXQoMCAkezEwMCAtIE1hdGguZmxvb3IocmVhZHlQbGF5ZXJDb3VudCAvIG1heFBsYXllckNvdW50ICogMTAwKSArICclJ30gMCAwYDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Vycm9yQW5pbWF0aW9uKHJlYXNvbjogam9pblJlc3VsdCkge1xyXG4gICAgbGV0IGFuaW1hdGlvbkVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICAgIGxldCBtZXNzYWdlID0gJyc7XHJcbiAgICBzd2l0Y2gocmVhc29uKXtcclxuICAgIGNhc2Ugam9pblJlc3VsdC5ST09NX0RPRVNfTk9UX0VYSVNUOlxyXG4gICAgICAgIGFuaW1hdGlvbkVsZW1lbnQgPSByb29tQ29kZUlucHV0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBqb2luUmVzdWx0LlJPT01fRlVMTDpcclxuICAgICAgICBhbmltYXRpb25FbGVtZW50ID0gcm9vbUJ1dHRvbjtcclxuICAgICAgICBtZXNzYWdlID0gJ1JPT00gRlVMTCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGpvaW5SZXN1bHQuR0FNRV9SVU5OSU5HOlxyXG4gICAgICAgIGFuaW1hdGlvbkVsZW1lbnQgPSByb29tQnV0dG9uO1xyXG4gICAgICAgIG1lc3NhZ2UgPSAnR0FNRSBSVU5OSU5HJztcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2Ugam9pblJlc3VsdC5JTlZBTElEX1VTRVJOQU1FOlxyXG4gICAgICAgIGFuaW1hdGlvbkVsZW1lbnQgPSB1c2VybmFtZUlucHV0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBqb2luUmVzdWx0LlNVQ0NFU1M6XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZWQtYnV0dG9uJyk7XHJcbiAgICBhbmltYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpZ2dsZScpO1xyXG4gICAgaWYobWVzc2FnZSAhPT0gJycpe1xyXG4gICAgICAgIGFuaW1hdGlvbkVsZW1lbnQuaW5uZXJUZXh0PW1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhbmltYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZC1idXR0b24nKTtcclxuICAgICAgICBhbmltYXRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dpZ2dsZScpO1xyXG4gICAgICAgIGlmKG1lc3NhZ2UgIT09ICcnKXtcclxuICAgICAgICAgICAgYW5pbWF0aW9uRWxlbWVudC5pbm5lclRleHQ9J0pPSU4gUk9PTSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgNjAwKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbG9yUGlja2VyKCkge1xyXG4gICAgY29sb3JQaWNrZXJEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29sb3JQaWNrZXJMYWJlbFN0YXRlKGVuYWJsZTogYm9vbGVhbikge1xyXG4gICAgaWYoZW5hYmxlKXtcclxuICAgICAgICBjb2xvclBpY2tlckxhYmVsLnN0eWxlLm9wYWNpdHkgPSAnMTAwJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbG9yUGlja2VyTGFiZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyQ29sb3IoKSB7XHJcbiAgICBjdXJyZW50UGxheWVyLmNvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XHJcbiAgICBjb2xvclBpY2tlckxhYmVsLnN0eWxlLmNvbG9yID0gcGlja1RleHRDb2xvckJhc2VkT25CZ0NvbG9yQWR2YW5jZWQoY29sb3JQaWNrZXIudmFsdWUsICcjRkZGRkZGJywgJyMwMDAwMDAnKTtcclxuICAgIGNoYW5nZUNvbG9yUGlja2VyTGFiZWxTdGF0ZSh0cnVlKTtcclxuICAgIHNldFBsYXllckRhdGEoY3VycmVudFBsYXllcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpY2tUZXh0Q29sb3JCYXNlZE9uQmdDb2xvckFkdmFuY2VkKGJnQ29sb3I6IHN0cmluZywgbGlnaHRDb2xvcjogc3RyaW5nLCBkYXJrQ29sb3I6IHN0cmluZykge1xyXG4gICAgdmFyIGNvbG9yID0gKGJnQ29sb3IuY2hhckF0KDApID09PSAnIycpID8gYmdDb2xvci5zdWJzdHJpbmcoMSwgNykgOiBiZ0NvbG9yO1xyXG4gICAgdmFyIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMCwgMiksIDE2KTsgLy8gaGV4VG9SXHJcbiAgICB2YXIgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygyLCA0KSwgMTYpOyAvLyBoZXhUb0dcclxuICAgIHZhciBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDQsIDYpLCAxNik7IC8vIGhleFRvQlxyXG4gICAgdmFyIHVpY29sb3JzID0gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTVdO1xyXG4gICAgdmFyIGMgPSB1aWNvbG9ycy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgIGlmIChjb2wgPD0gMC4wMzkyOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sIC8gMTIuOTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygoY29sICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XHJcbiAgICB9KTtcclxuICAgIHZhciBMID0gKDAuMjEyNiAqIGNbMF0pICsgKDAuNzE1MiAqIGNbMV0pICsgKDAuMDcyMiAqIGNbMl0pO1xyXG4gICAgcmV0dXJuIChMID4gMC40KSA/IGRhcmtDb2xvciA6IGxpZ2h0Q29sb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuXHJcbiAgICAvL3ZlcmlmeSB0aGF0IHRoZSBwbGF5ZXIgc2VuZGluZyB0aGUgc3RhcnQgcmVxdWVzdCBpcyB0aGUgaG9zdFxyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUgIT0gY3VycmVudFJvb20uaG9zdC51c2VybmFtZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNlbmRTdGFydENvbW1hbmQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29CYWNrVG9Mb2JieSgpIHtcclxuICAgIHN3aXRjaEdhbWVWaWV3KHt0eXBlOiAnR0FNRV9TVEFURScsc3RhdGU6IEdhbWVTdGF0ZS5JTl9MT0JCWX0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNldHRpbmdzRGlzcGxheSgpe1xyXG5zZXR0aW5nc0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdzZXR0aW5ncy10b3AnKTtcclxucm9vbURpdi5jbGFzc0xpc3QudG9nZ2xlKCdzaGlmdC1sZWZ0Jyk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzVG9BZGQ6IHN0cmluZ1tdLCBjbGFzc2VzVG9SZW1vdmU6IHN0cmluZ1tdKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlc1RvQWRkKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzVG9SZW1vdmUpO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hHYW1lVmlldyhkYXRhOiBHYW1lU3RhdGVEYXRhKSB7XHJcbiAgICBzd2l0Y2ggKGRhdGEuc3RhdGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgLy91cGRhdGUgdGhlIGdhbWUgY2FudmFzIHRvIGZpdCB0aGUgc2NyZWVuXHJcbiAgICAgICAgdXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIHVwZGF0ZUNsYXNzZXMoZ2FtZURpdiwgWydjZW50ZXItbWVudS1lbGVtZW50J10sIFsncmlnaHQtbWVudS1lbGVtZW50JywnbGVmdC1tZW51LWVsZW1lbnQnLCAnZGlzcGxheS1ub25lJ10pO1xyXG4gICAgICAgIHVwZGF0ZUNsYXNzZXMocm9vbURpdiwgWydsZWZ0LW1lbnUtZWxlbWVudCddLCBbJ2NlbnRlci1tZW51LWVsZW1lbnQnLCAnc2hpZnQtbGVmdCddKTtcclxuICAgICAgICB1cGRhdGVDbGFzc2VzKHNldHRpbmdzRGl2LCBbJ3NldHRpbmdzLXRvcCddLCBbXSlcclxuICAgICAgICB1cGRhdGVDbGFzc2VzKGVuZGdhbWVEaXYsIFsncmlnaHQtbWVudS1lbGVtZW50J10sIFsnY2VudGVyLW1lbnUtZWxlbWVudCddKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG5cclxuICAgICAgICB1cGRhdGVDbGFzc2VzKHJvb21EaXYsIFsnY2VudGVyLW1lbnUtZWxlbWVudCddLCBbJ3JpZ2h0LW1lbnUtZWxlbWVudCcsICdsZWZ0LW1lbnUtZWxlbWVudCcsICdkaXNwbGF5LW5vbmUnXSk7XHJcbiAgICAgICAgdXBkYXRlQ2xhc3Nlcyhsb2dpbkRpdiwgWydsZWZ0LW1lbnUtZWxlbWVudCddLCBbJ2NlbnRlci1tZW51LWVsZW1lbnQnXSk7XHJcbiAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbmRnYW1lRGl2LCBbJ3JpZ2h0LW1lbnUtZWxlbWVudCddLCBbJ2NlbnRlci1tZW51LWVsZW1lbnQnXSk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXMoZW5kZ2FtZURpdiwgWydjZW50ZXItbWVudS1lbGVtZW50J10sIFsncmlnaHQtbWVudS1lbGVtZW50JywgJ2Rpc3BsYXktbm9uZSddKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhnYW1lRGl2LCBbJ2xlZnQtbWVudS1lbGVtZW50J10sIFsnY2VudGVyLW1lbnUtZWxlbWVudCddKTtcclxuXHJcbiAgICAgICAgICAgIGxhc3RXaW5uZXJTcGFuLmlubmVySFRNTCA9IGAke2N1cnJlbnRSb29tLmxhc3RXaW5uZXIudXNlcm5hbWV9YDtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRSb29tLnJlc2V0Um9vbUZvck5ld0dhbWUoKTtcclxuICAgICAgICAgICAgY3VycmVudFBsYXllci5zbmFrZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIuaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB1cGRhdGVSZWFkeUJ1dHRvbihjdXJyZW50UGxheWVyLmlzUmVhZHkpO1xyXG4gICAgICAgICAgICByZXNldENvdW50RG93bigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdXBkYXRlQnV0dG9uKCk7XHJcbiAgICB1c2VybmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRyaWdnZXJBY3Rpb25PbkVudGVyKTtcclxuICAgIHJvb21Db2RlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdHJpZ2dlckFjdGlvbk9uRW50ZXIpO1xyXG4gICAgaWYgKCFuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2ZpcmVmb3gnKSkge1xyXG4gICAgICAgIGNvbG9yUGlja2VyLm9uYmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNoYW5nZUNvbG9yUGlja2VyTGFiZWxTdGF0ZSh0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBlbmZvcmNlTWluTWF4KGVsOiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoZWwudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICBpZiAocGFyc2VJbnQoZWwudmFsdWUpIDwgcGFyc2VJbnQoZWwubWluKSkge1xyXG4gICAgICAgIGVsLnZhbHVlID0gZWwubWluO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJzZUludChlbC52YWx1ZSkgPiBwYXJzZUludChlbC5tYXgpKSB7XHJcbiAgICAgICAgZWwudmFsdWUgPSBlbC5tYXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVNldHRpbmdzKCkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3M6IFJvb21TZXR0aW5ncyA9IHtcclxuICAgICAgICByb29tU2l6ZTogcGFyc2VJbnQoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyb29tLXNpemVcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSksXHJcbiAgICAgICAgbWF4UG93ZXJ1cHM6IHBhcnNlSW50KChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWF4LXBvd2VydXBzXCJdJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpLFxyXG4gICAgICAgIHBvd2VydXBJbnRlcnZhbDogcGFyc2VJbnQoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwb3dlcnVwLWludGVydmFsXCJdJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpLFxyXG4gICAgICAgIHNlbGZDb2xsaXNpb246IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic2VsZi1jb2xsaXNpb25cIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkLFxyXG4gICAgICAgIGFyZW5hU2l6ZTogcGFyc2VJbnQoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhcmVuYS1zaXplXCJdJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZW5kU2V0dGluZ3Moc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgXHJcbih3aW5kb3cgYXMgYW55KS51cGRhdGVCdXR0b24gPSB1cGRhdGVCdXR0b247XHJcbih3aW5kb3cgYXMgYW55KS5oYW5kbGVSb29tQWN0aW9uID0gaGFuZGxlUm9vbUFjdGlvbjtcclxuKHdpbmRvdyBhcyBhbnkpLmhhbmRsZVJlYWR5U3RhdGUgPSBoYW5kbGVSZWFkeVN0YXRlO1xyXG4od2luZG93IGFzIGFueSkudXBkYXRlQ29sb3JQaWNrZXIgPSB1cGRhdGVDb2xvclBpY2tlcjtcclxuKHdpbmRvdyBhcyBhbnkpLnVwZGF0ZVBsYXllckNvbG9yID0gdXBkYXRlUGxheWVyQ29sb3I7XHJcbih3aW5kb3cgYXMgYW55KS5zdGFydEdhbWUgPSBzdGFydEdhbWU7XHJcbih3aW5kb3cgYXMgYW55KS5nb0JhY2tUb0xvYmJ5ID0gZ29CYWNrVG9Mb2JieTtcclxuKHdpbmRvdyBhcyBhbnkpLnRvZ2dsZVNldHRpbmdzRGlzcGxheSA9IHRvZ2dsZVNldHRpbmdzRGlzcGxheTtcclxuKHdpbmRvdyBhcyBhbnkpLmNoYW5nZUNvbG9yUGlja2VyTGFiZWxTdGF0ZSA9IGNoYW5nZUNvbG9yUGlja2VyTGFiZWxTdGF0ZTtcclxuKHdpbmRvdyBhcyBhbnkpLmVuZm9yY2VNaW5NYXggPSBlbmZvcmNlTWluTWF4O1xyXG4od2luZG93IGFzIGFueSkuc2VuZFNldHRpbmdzVG9TZXJ2ZXIgPSBoYW5kbGVDaGFuZ2VTZXR0aW5nczsiLCJpbXBvcnQgU25ha2UgZnJvbSBcIi4uL1NuYWtlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICBwcml2YXRlIF91c2VybmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpc1JlYWR5OiBib29sZWFuO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBzbmFrZTogU25ha2UgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1c2VybmFtZTogc3RyaW5nLCBpc1JlYWR5OiBib29sZWFuID0gZmFsc2UsIGNvbG9yPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgdGhpcy5pc1JlYWR5ID0gaXNSZWFkeTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvciB8fCBcIiMwMDAwMDBcIi5yZXBsYWNlKC8wL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuICh+fihNYXRoLnJhbmRvbSgpICogMTYpKS50b1N0cmluZygxNik7IH0pO1xyXG4gICAgdGhpcy5zbmFrZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgaXNSZWFkeTogdGhpcy5pc1JlYWR5LFxyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAvLyB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuc25ha2UgPSBudWxsO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgUG93ZXJ1cEhhbmRsZXIgZnJvbSBcIi4uL1Bvd2VydXBTeXN0ZW0vUG93ZXJ1cEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgUm9vbVNldHRpbmdzIH0gZnJvbSBcIi4uL1dlYlNvY2tldENsaWVudC9tZXNzYWdlVHlwZXNcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHYW1lU3RhdGUge1xyXG4gICAgUlVOTklORyxcclxuICAgIElOX0xPQkJZLFxyXG4gICAgRklOSVNIRURcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gam9pblJlc3VsdCB7XHJcbiAgICBST09NX0RPRVNfTk9UX0VYSVNULFxyXG4gICAgUk9PTV9GVUxMLFxyXG4gICAgR0FNRV9SVU5OSU5HLFxyXG4gICAgSU5WQUxJRF9VU0VSTkFNRSxcclxuICAgIFNVQ0NFU1NcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tIHtcclxuICAgIHByaXZhdGUgX3BsYXllcnM6IHsgW2tleTogc3RyaW5nXTogUGxheWVyOyB9ID0ge307XHJcbiAgICBwcml2YXRlIF9nYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgX2hvc3Q6IFBsYXllcjtcclxuICAgIHByaXZhdGUgX2NvZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2xhc3RXaW5uZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgX3NldHRpbmdzOiBSb29tU2V0dGluZ3M7XHJcbiAgICBwdWJsaWMgcG93ZXJ1cEhhbmRsZXI6IFBvd2VydXBIYW5kbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgaG9zdDogUGxheWVyLCBzZXR0aW5nczogUm9vbVNldHRpbmdzLCBwbGF5ZXJzPzogeyBba2V5OiBzdHJpbmddOiBQbGF5ZXI7IH0pIHtcclxuICAgICAgICB0aGlzLl9jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLl9ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG5cclxuICAgICAgICBpZiAocGxheWVycykge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFBsYXllcihob3N0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5wb3dlcnVwSGFuZGxlciA9IG5ldyBQb3dlcnVwSGFuZGxlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wbGF5ZXJzKS5sZW5ndGggPj0gdGhpcy5zZXR0aW5ncy5yb29tU2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wbGF5ZXJzW3BsYXllci51c2VybmFtZV0gPSBwbGF5ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVBsYXllcih1c2VybmFtZTogc3RyaW5nKXtcclxuICAgICAgICBkZWxldGUgdGhpcy5fcGxheWVyc1t1c2VybmFtZV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZXNldFJvb21Gb3JOZXdHYW1lKCl7XHJcbiAgICAgICAgLy9UT0RPIGZpeCB0aGlzIGdhbWUgc3RhdGUgYnVsbHNoaXRcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuSU5fTE9CQlk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwSGFuZGxlci5yZXNldCgpO1xyXG4gICAgICAgIC8vYWxzbyByZXNldCBhbGwgdGhlIHBsYXllcnNcclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuX3BsYXllcnMpLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXQgaG9zdChuZXdIb3N0OiBQbGF5ZXIpe1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wbGF5ZXJzKS5zb21lKHVzZXJuYW1lID0+IHVzZXJuYW1lID09PSBuZXdIb3N0LnVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ob3N0ID0gbmV3SG9zdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwbGF5ZXJzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBob3N0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjb2RlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYXhTaXplKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Mucm9vbVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYXhTaXplKG5ld01heFNpemU6IG51bWJlcil7XHJcbiAgICAgICAgaWYgKG5ld01heFNpemUgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yb29tU2l6ZSA9IG5ld01heFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGFzdFdpbm5lcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0V2lubmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbGFzdFdpbm5lcihuZXdMYXN0V2lubmVyOiBQbGF5ZXIpe1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wbGF5ZXJzKS5zb21lKHVzZXJuYW1lID0+IHVzZXJuYW1lID09PSBuZXdMYXN0V2lubmVyLnVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0V2lubmVyID0gbmV3TGFzdFdpbm5lcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzZXR0aW5ncyhuZXdTZXR0aW5nczogUm9vbVNldHRpbmdzKXtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IG5ld1NldHRpbmdzO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cEhhbmRsZXIgPSBuZXcgUG93ZXJ1cEhhbmRsZXIodGhpcy5zZXR0aW5ncy5hcmVuYVNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2V0dGluZ3MoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgUGFydGljbGUsIHsgc2hhcGUgfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24sIGdldFBvc2l0aW9uSW5DaXJjbGUsIGdldFJhbmRvbURpcmVjdGlvbiwgaGV4VG9SZ2IsIGhleFRvUmdiQSB9IGZyb20gJy4vUGFydGljbGVTeXN0ZW1VdGlscyc7XHJcbmltcG9ydCBFbWl0dGVyLCB7IEVtaXR0ZXJPcHRpb25zIH0gZnJvbSBcIi4vRW1pdHRlclwiO1xyXG5pbXBvcnQgeyBjdXJyZW50Um9vbSB9IGZyb20gXCIuLi9NZW51TWFuYWdlci9sb2dpblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmN1bGFyRW1pdHRlciBleHRlbmRzIEVtaXR0ZXJ7XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyUmFkaXVzOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGVtaXR0ZXJSYWRpdXM6IG51bWJlcixcclxuICAgICAgICBwb3NpdGlvbjogVmVjdG9yLFxyXG4gICAgICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIGVtaXR0ZXJPcHRpb25zOiBFbWl0dGVyT3B0aW9uc1xyXG4gICAgKXtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgY2FudmFzQ3R4LCBlbWl0dGVyT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fZW1pdHRlclJhZGl1cyA9IGVtaXR0ZXJSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpY2soZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzIC09IGR0O1xyXG5cclxuICAgICAgICAvL2VtaXQgbmV3IHBhcnRpY2xlcyBpZiB0aGUgZW1pdHRlciBpcyBcImFsaXZlXCJcclxuICAgICAgICBpZiAodGhpcy5fdGlja3MgJSB0aGlzLl9lbWl0SW50ZXJ2YWwgPT09IDAgJiYgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9lbWl0QW1vdW50UGVyVGljazsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLnBvc2l0aW9uLmNsb25lKCkuYWRkKGdldFBvc2l0aW9uSW5DaXJjbGUodGhpcy5fZW1pdHRlclJhZGl1cywgdGhpcy5fc3Bhd25QYXJ0aWNsZXNPbkVkZ2UpKSBhcyBWZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Qmlhc2VkUmFuZG9tRGlyZWN0aW9uKHRoaXMuZW1pdERpcmVjdGlvbiwgdGhpcy5fc3ByZWFkQW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlU2l6ZSAqIHNjYWxlWSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZVNoYXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgLi4uaGV4VG9SZ2JBKHRoaXMuX2NvbG9yKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRpY2xlTWF4QWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvRmFkZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvRmFkZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFkZURpcmVjdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL21vdmUgYWxsIHRoZSBwYXJ0aWNsZXMgZm9yd2FyZCBpbiB0aW1lXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnRpY2soZHQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIHBhcnRpY2xlcyB0aGF0IGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZWlyIGxpZmVzcGFuXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMgPSB0aGlzLl9hbGl2ZVBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUuYWdlID4gMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl90aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZHJhd0VtaXR0ZXJab25lID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGhleFRvUmdiQSh0aGlzLl9jb2xvcilcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyBjdXJyZW50Um9vbS5zZXR0aW5ncy5hcmVuYVNpemU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCAqIHNjYWxlWCwgdGhpcy5wb3NpdGlvbi55ICogc2NhbGVZKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7Y29sb3Iucn0sJHtjb2xvci5nfSwke2NvbG9yLmJ9LCAke01hdGgubWluKDAuMiwgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSAvIHRoaXMuX3BhcnRpY2xlTWF4QWdlIC8gNSkpfSlgO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5hcmModGhpcy5wb3NpdGlvbi54ICogc2NhbGVYLCB0aGlzLnBvc2l0aW9uLnkgKiBzY2FsZVksIHRoaXMuX2VtaXR0ZXJSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmRyYXcoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbWl0VGltZShuZXdFbWl0VGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPSBuZXdFbWl0VGltZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IFBhcnRpY2xlLCB7IHNoYXBlIH0gZnJvbSBcIi4vUGFydGljbGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1pdHRlck9wdGlvbnMge1xyXG4gICAgZW1pdEludGVydmFsPzogbnVtYmVyO1xyXG4gICAgZW1pdEFtb3VudFBlclRpY2s/OiBudW1iZXI7XHJcbiAgICBwYXJ0aWNsZVNpemU/OiBudW1iZXI7XHJcbiAgICBzcGVlZD86IG51bWJlcjtcclxuICAgIHBhcnRpY2xlU2hhcGU/OiBzaGFwZTtcclxuICAgIGNvbG9yPzogc3RyaW5nO1xyXG4gICAgZG9GYWRlQ29sb3I/OiBib29sZWFuO1xyXG4gICAgZG9GYWRlU2l6ZT86IGJvb2xlYW47XHJcbiAgICBmYWRlRGlyZWN0aW9uPzogJ25vcm1hbCcgfCAncmV2ZXJzZSc7XHJcbiAgICBwYXJ0aWNsZUFnZT86IG51bWJlcjtcclxuICAgIGVtaXRUaW1lTWlsbGlzPzogbnVtYmVyO1xyXG4gICAgZHJhd0VtaXR0ZXJab25lPzogYm9vbGVhbjtcclxuICAgIGVtaXREaXJlY3Rpb24/OiBWZWN0b3I7XHJcbiAgICBzcHJlYWRBbmdsZT86IG51bWJlcjtcclxuICAgIHNwYXduUGFydGljbGVzT25FZGdlPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEVtaXR0ZXJ7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjtcclxuICAgIHB1YmxpYyBlbWl0RGlyZWN0aW9uOiBWZWN0b3I7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hbGl2ZVBhcnRpY2xlczogUGFydGljbGVbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIF9lbWl0SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfZW1pdEFtb3VudFBlclRpY2s6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfcGFydGljbGVTaGFwZTogc2hhcGU7XHJcbiAgICBwcm90ZWN0ZWQgX3BhcnRpY2xlU2l6ZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9zcGVlZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIF9kb0ZhZGVDb2xvcjogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfZmFkZURpcmVjdGlvbjogJ25vcm1hbCcgfCAncmV2ZXJzZSc7XHJcbiAgICBwcm90ZWN0ZWQgX2RvRmFkZVNpemU6IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgX3BhcnRpY2xlTWF4QWdlOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJvdGVjdGVkIF9yZW1haW5pbmdFbWl0VGltZU1pbGxpczogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9zcHJlYWRBbmdsZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF90aWNrczogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBfZHJhd0VtaXR0ZXJab25lOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIF9zcGF3blBhcnRpY2xlc09uRWRnZTogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwb3NpdGlvbjogVmVjdG9yLFxyXG4gICAgICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW1pdEludGVydmFsID0gMixcclxuICAgICAgICAgICAgZW1pdEFtb3VudFBlclRpY2sgPSA1LFxyXG4gICAgICAgICAgICBwYXJ0aWNsZVNpemUgPSAxMCxcclxuICAgICAgICAgICAgc3BlZWQgPSAyLFxyXG4gICAgICAgICAgICBwYXJ0aWNsZVNoYXBlID0gJ2NpcmNsZScsXHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNmZmZmZmZmZicsXHJcbiAgICAgICAgICAgIGRvRmFkZUNvbG9yID0gdHJ1ZSxcclxuICAgICAgICAgICAgZG9GYWRlU2l6ZSA9IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGVEaXJlY3Rpb24gPSAnbm9ybWFsJyxcclxuICAgICAgICAgICAgcGFydGljbGVBZ2UgPSA1MCxcclxuICAgICAgICAgICAgZW1pdFRpbWVNaWxsaXMgPSAwLFxyXG4gICAgICAgICAgICBkcmF3RW1pdHRlclpvbmUgPSBmYWxzZSxcclxuICAgICAgICAgICAgZW1pdERpcmVjdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCksXHJcbiAgICAgICAgICAgIHNwcmVhZEFuZ2xlID0gTWF0aC5QSSoyLFxyXG4gICAgICAgICAgICBzcGF3blBhcnRpY2xlc09uRWRnZSA9IGZhbHNlLFxyXG4gICAgICAgIH06IEVtaXR0ZXJPcHRpb25zXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4ID0gY2FudmFzQ3R4O1xyXG4gICAgICAgIHRoaXMuX2VtaXRJbnRlcnZhbCA9IGVtaXRJbnRlcnZhbDtcclxuICAgICAgICB0aGlzLl9lbWl0QW1vdW50UGVyVGljayA9IGVtaXRBbW91bnRQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlU2l6ZSA9IHBhcnRpY2xlU2l6ZTtcclxuICAgICAgICB0aGlzLl9zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpY2xlU2hhcGUgPSBwYXJ0aWNsZVNoYXBlO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5fZG9GYWRlQ29sb3IgPSBkb0ZhZGVDb2xvcjtcclxuICAgICAgICB0aGlzLl9kb0ZhZGVTaXplID0gZG9GYWRlU2l6ZTtcclxuICAgICAgICB0aGlzLl9mYWRlRGlyZWN0aW9uID0gZmFkZURpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLl9wYXJ0aWNsZU1heEFnZSA9IHBhcnRpY2xlQWdlO1xyXG4gICAgICAgIHRoaXMuX3NwcmVhZEFuZ2xlID0gc3ByZWFkQW5nbGU7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgPSBlbWl0VGltZU1pbGxpcztcclxuICAgICAgICB0aGlzLmVtaXREaXJlY3Rpb24gPSBlbWl0RGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX2RyYXdFbWl0dGVyWm9uZSA9IGRyYXdFbWl0dGVyWm9uZTtcclxuICAgICAgICB0aGlzLl9zcGF3blBhcnRpY2xlc09uRWRnZSA9IHNwYXduUGFydGljbGVzT25FZGdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCB0aWNrKGR0OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3KCk6IHZvaWQ7XHJcblxyXG4gICAgc2V0IGVtaXRUaW1lKG5ld0VtaXRUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyA9IG5ld0VtaXRUaW1lO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgZ2V0UmdiQ29sb3IgfSBmcm9tICcuL1BhcnRpY2xlU3lzdGVtVXRpbHMnO1xyXG5pbXBvcnQgeyBjdXJyZW50Um9vbSB9IGZyb20gXCIuLi9NZW51TWFuYWdlci9sb2dpblwiO1xyXG5leHBvcnQgdHlwZSBzaGFwZSA9ICdjaXJjbGUnIHwgJ3NxdWFyZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yO1xyXG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IFZlY3RvcjtcclxuICAgIHByaXZhdGUgX3NoYXBlOiBzaGFwZTtcclxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb2xvcjogeyByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgfTtcclxuICAgIHByaXZhdGUgX2ZhZGVDb2xvcjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2ZhZGVTaXplOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZmFkZURpcmVjdGlvbjogJ25vcm1hbCcgfCAncmV2ZXJzZSc7XHJcbiAgICBwcml2YXRlIF9hZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgX3NpemVGYWRlQW1vdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb2xvckZhZGVBbW91bnQ6IG51bWJlcjtcclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yLCB2ZWxvY2l0eTogVmVjdG9yLCBzaXplOiBudW1iZXIsIHNwZWVkOiBudW1iZXIsIHNoYXBlOiBzaGFwZSA9ICdjaXJjbGUnLCBjb2xvcjogeyByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgfSwgY2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGFnZTogbnVtYmVyLCBmYWRlQ29sb3I/OiBib29sZWFuLCBmYWRlU2l6ZT86IGJvb2xlYW4sIGZhZGVEaXJlY3Rpb24/OiAnbm9ybWFsJyB8ICdyZXZlcnNlJykge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fdmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLl9hZ2UgPSBhZ2U7XHJcbiAgICAgICAgdGhpcy5fY29sb3JGYWRlQW1vdW50ID0gY29sb3IuYSAvIHRoaXMuX2FnZTtcclxuICAgICAgICB0aGlzLl9zaXplRmFkZUFtb3VudCA9IHNpemUgLyB0aGlzLl9hZ2U7XHJcblxyXG4gICAgICAgIGlmIChmYWRlRGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0geyAuLi5nZXRSZ2JDb2xvcihjb2xvciksIGE6IDAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUgPSBzaGFwZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4ID0gY2FudmFzQ3R4O1xyXG4gICAgICAgIHRoaXMuX2ZhZGVDb2xvciA9IGZhZGVDb2xvcjtcclxuICAgICAgICB0aGlzLl9mYWRlU2l6ZSA9IGZhZGVTaXplO1xyXG4gICAgICAgIHRoaXMuX2ZhZGVEaXJlY3Rpb24gPSBmYWRlRGlyZWN0aW9uO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpY2soZHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi5hZGQodGhpcy5fdmVsb2NpdHkuY2xvbmUoKS5tdWx0aXBseUJ5U2NhbGFyKGR0ICogdGhpcy5fc3BlZWQpKTtcclxuICAgICAgICBpZiAodGhpcy5fZmFkZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mYWRlRGlyZWN0aW9uID09PSAnbm9ybWFsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3IuYSAtPSB0aGlzLl9jb2xvckZhZGVBbW91bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvci5hICs9IHRoaXMuX2NvbG9yRmFkZUFtb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZmFkZVNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZhZGVEaXJlY3Rpb24gPT09ICdub3JtYWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgLT0gdGhpcy5fc2l6ZUZhZGVBbW91bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplICs9IHRoaXMuX3NpemVGYWRlQW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FnZS0tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG5cclxuICAgICAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4Lm1vdmVUbyh0aGlzLl9wb3NpdGlvbi54ICogc2NhbGVYLCB0aGlzLl9wb3NpdGlvbi55ICogc2NhbGVZKTtcclxuICAgICAgICB0aGlzLl9jYW52YXNDdHguZmlsbFN0eWxlID0gYHJnYmEoJHt0aGlzLl9jb2xvci5yfSwke3RoaXMuX2NvbG9yLmd9LCAke3RoaXMuX2NvbG9yLmJ9LCAke3RoaXMuX2NvbG9yLmF9KWA7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fc2hhcGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5hcmModGhpcy5fcG9zaXRpb24ueCAqIHNjYWxlWCwgdGhpcy5fcG9zaXRpb24ueSAqIHNjYWxlWSwgdGhpcy5fc2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzcXVhcmUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxSZWN0KCh0aGlzLl9wb3NpdGlvbi54IC0gdGhpcy5fc2l6ZSkgKiBzY2FsZVgsICh0aGlzLl9wb3NpdGlvbi55IC0gdGhpcy5fc2l6ZSkgKiBzY2FsZVksIHRoaXMuX3NpemUgKiAyLCB0aGlzLl9zaXplICogMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hZ2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRGlyZWN0aW9uKCk6IFZlY3RvciB7XHJcblxyXG4gIHJldHVybiAobmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpICogMiAtIDEsIE1hdGgucmFuZG9tKCkgKiAyIC0gMSkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24oZGlyZWN0aW9uOiBWZWN0b3IsIHNwcmVhZEFuZ2xlOiBudW1iZXIpOiBWZWN0b3Ige1xyXG4gIGNvbnN0IGFuZ2xlID0gZ2V0QW5nbGUoZGlyZWN0aW9uKSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwcmVhZEFuZ2xlO1xyXG4gIHJldHVybiBmcm9tQW5nbGUoYW5nbGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25JbkNpcmNsZShyYWRpdXM6IG51bWJlciwgb25FZGdlOiBib29sZWFuKSB7XHJcbiAgbGV0IHBvaW50O1xyXG4gIGRvIHtcclxuICAgIHBvaW50ID0gbmV3IFZlY3RvcihNYXRoLnJhbmRvbSgpKnJhZGl1cyoyIC0gcmFkaXVzLCBNYXRoLnJhbmRvbSgpKnJhZGl1cyoyIC0gcmFkaXVzKVxyXG4gIH0gd2hpbGUgKHBvaW50LngqKjIgKyBwb2ludC55KioyID4gcmFkaXVzKioyKVxyXG5cclxuICBpZiAob25FZGdlKXtcclxuICAgIHBvaW50Lm5vcm1hbGlzZSgpLm11bFMocmFkaXVzKTtcclxuICB9XHJcbiAgcmV0dXJuIHBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25JblJlY3RhbmdsZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciApe1xyXG4gIHJldHVybiBuZXcgVmVjdG9yKE1hdGgucmFuZG9tKCkgKiB3aWR0aCwgTWF0aC5yYW5kb20oKSAqIGhlaWdodCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleDogc3RyaW5nKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICB9IDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiQShoZXg6IHN0cmluZykge1xyXG4gIGxldCBhID0gMDtcclxuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSk/JC9pLmV4ZWMoaGV4KTtcclxuICBpZiggdHlwZW9mIHJlc3VsdFs0XSA9PT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICBhID0gMTtcclxuICB9ZWxzZXtcclxuICAgIGEgPSBwYXJzZUludChyZXN1bHRbNF0sIDE2KS8yNTU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0ID8ge1xyXG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxyXG4gICAgYTogYVxyXG4gIH0gOiBudWxsO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QW5nbGUodmVjdG9yOiBWZWN0b3IpOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmF0YW4yKHZlY3Rvci55LCB2ZWN0b3IueCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21BbmdsZShhbmdsZTogbnVtYmVyKTogVmVjdG9yIHtcclxuICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZ2JDb2xvcihjb2xvcjoge3I6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlcn0pIHtcclxuICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yO1xyXG4gIHJldHVybiB7IHIsIGcsIGIgfTtcclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgUGFydGljbGUsIHsgc2hhcGUgfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBnZXRCaWFzZWRSYW5kb21EaXJlY3Rpb24sIGdldFBvc2l0aW9uSW5DaXJjbGUsIGdldFBvc2l0aW9uSW5SZWN0YW5nbGUsIGdldFJhbmRvbURpcmVjdGlvbiwgaGV4VG9SZ2IsIGhleFRvUmdiQSB9IGZyb20gJy4vUGFydGljbGVTeXN0ZW1VdGlscyc7XHJcbmltcG9ydCBFbWl0dGVyLCB7IEVtaXR0ZXJPcHRpb25zIH0gZnJvbSBcIi4vRW1pdHRlclwiO1xyXG5pbXBvcnQgeyBjdXJyZW50Um9vbSB9IGZyb20gXCIuLi9NZW51TWFuYWdlci9sb2dpblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZUVtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVye1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg7XHJcbiAgICBwcml2YXRlIF9oZWlnaHQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgcG9zaXRpb246IFZlY3RvcixcclxuICAgICAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgICBlbWl0dGVyT3B0aW9uczogRW1pdHRlck9wdGlvbnNcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIGNhbnZhc0N0eCwgZW1pdHRlck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aWNrKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoKHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzICsgdGhpcy5fcGFydGljbGVNYXhBZ2UpIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyAtPSBkdDtcclxuXHJcbiAgICAgICAgLy9lbWl0IG5ldyBwYXJ0aWNsZXMgaWYgdGhlIGVtaXR0ZXIgaXMgXCJhbGl2ZVwiXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpY2tzICUgdGhpcy5fZW1pdEludGVydmFsID09PSAwICYmIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID4gMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyBjdXJyZW50Um9vbS5zZXR0aW5ncy5hcmVuYVNpemU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZW1pdEFtb3VudFBlclRpY2s7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxpdmVQYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUodGhpcy5wb3NpdGlvbi5jbG9uZSgpLmFkZChnZXRQb3NpdGlvbkluUmVjdGFuZ2xlKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpLnN1YnRyYWN0KG5ldyBWZWN0b3IodGhpcy5fd2lkdGgvMiwgdGhpcy5faGVpZ2h0LzIpKSkgYXMgVmVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEJpYXNlZFJhbmRvbURpcmVjdGlvbih0aGlzLmVtaXREaXJlY3Rpb24sIHRoaXMuX3NwcmVhZEFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZVNpemUgKiBzY2FsZVksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFydGljbGVTaGFwZSxcclxuICAgICAgICAgICAgICAgICAgICB7IC4uLmhleFRvUmdiQSh0aGlzLl9jb2xvcil9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0aWNsZU1heEFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb0ZhZGVDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb0ZhZGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVEaXJlY3Rpb24pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9tb3ZlIGFsbCB0aGUgcGFydGljbGVzIGZvcndhcmQgaW4gdGltZVxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS50aWNrKGR0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3JlbW92ZSBwYXJ0aWNsZXMgdGhhdCBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGVpciBsaWZlc3BhblxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzID0gdGhpcy5fYWxpdmVQYXJ0aWNsZXMuZmlsdGVyKHBhcnRpY2xlID0+IHBhcnRpY2xlLmFnZSA+IDApO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fdGlja3MrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLl9yZW1haW5pbmdFbWl0VGltZU1pbGxpcyArIHRoaXMuX3BhcnRpY2xlTWF4QWdlKSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYXdFbWl0dGVyWm9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplO1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5tb3ZlVG8oKHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3dpZHRoLzIpICogc2NhbGVYLCAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5faGVpZ2h0LzIpICogc2NhbGVZKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7aGV4VG9SZ2IodGhpcy5fY29sb3IpfSwgJHtNYXRoLm1pbigwLjIsICgodGhpcy5fcmVtYWluaW5nRW1pdFRpbWVNaWxsaXMgKyB0aGlzLl9wYXJ0aWNsZU1heEFnZSkgLyB0aGlzLl9wYXJ0aWNsZU1heEFnZSAvIDUpKX0pYDtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXNDdHgucmVjdCh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLl93aWR0aC8yLCB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLl9oZWlnaHQvMiwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FsaXZlUGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5kcmF3KClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW1pdFRpbWUobmV3RW1pdFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ0VtaXRUaW1lTWlsbGlzID0gbmV3RW1pdFRpbWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcInZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IGJhY2tncm91bmRDYW52YXMsIGdhbWVDYW52YXMsIGdhbWVDYW52YXNDdHggfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IFJlY3Rhbmd1bGFyRW1pdHRlciBmcm9tIFwiLi4vUGFydGljbGVTeXN0ZW0vUmVjdGFuZ3VsYXJFbWl0dGVyXCI7XHJcbmltcG9ydCBQb3dlcnVwLCB7IFBvd2VydXBUeXBlIH0gZnJvbSBcIi4vcG93ZXJ1cFwiO1xyXG5pbXBvcnQgeyBQb3dlcnVwQWN0aW9uIH0gZnJvbSBcIi4uL1dlYlNvY2tldENsaWVudC9tZXNzYWdlVHlwZXNcIjtcclxuaW1wb3J0IHsgdXBkYXRlQ2FudmFzU2l6ZSB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgZHJhd0dyaWQgfSBmcm9tIFwiLi4vRHJhd2VyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9Nb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRSb29tIH0gZnJvbSBcIi4uL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3dlcnVwSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBfcG93ZXJ1cHM6IHsgW2tleTogbnVtYmVyXTogUG93ZXJ1cCB9ID0ge307XHJcbiAgcHJpdmF0ZSBfd2FsbEVtaXR0ZXJzOiBSZWN0YW5ndWxhckVtaXR0ZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX3BvcnRhbFdhbGxzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY2FtZXJhTG9jayA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2NhbWVyYUxvY2tUaW1lb3V0SWQ6IE5vZGVKUy5UaW1lb3V0O1xyXG4gIHByaXZhdGUgX2dhbWVDYW52YXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiZ2FtZS1jYW52YXMtY29udGFpbmVyXCJcclxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKGFyZW5hU2l6ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVXYWxsRW1pdHRlcnMoYXJlbmFTaXplKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVdhbGxFbWl0dGVycyhhcmVuYVNpemU6IG51bWJlcikge1xyXG4gICAgbGV0IHNpemVzID0gW1xyXG4gICAgICBuZXcgVmVjdG9yKGFyZW5hU2l6ZSwgNTApLFxyXG4gICAgICBuZXcgVmVjdG9yKDUwLCBhcmVuYVNpemUpLFxyXG4gICAgICBuZXcgVmVjdG9yKGFyZW5hU2l6ZSwgNTApLFxyXG4gICAgICBuZXcgVmVjdG9yKDUwLCBhcmVuYVNpemUpLFxyXG4gICAgXTtcclxuICAgIGxldCBkaXJlY3Rpb25zID0gW1xyXG4gICAgICBuZXcgVmVjdG9yKDAsIC0xKSxcclxuICAgICAgbmV3IFZlY3RvcigtMSwgMCksXHJcbiAgICAgIG5ldyBWZWN0b3IoMCwgMSksXHJcbiAgICAgIG5ldyBWZWN0b3IoMSwgMCksXHJcbiAgICBdO1xyXG4gICAgbGV0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IFZlY3RvcihhcmVuYVNpemUvMiwgNTApLFxyXG4gICAgICBuZXcgVmVjdG9yKDUwLCBhcmVuYVNpemUvMiksXHJcbiAgICAgIG5ldyBWZWN0b3IoYXJlbmFTaXplLzIsIGFyZW5hU2l6ZSAtIDUwKSxcclxuICAgICAgbmV3IFZlY3RvcihhcmVuYVNpemUgLSA1MCwgYXJlbmFTaXplLzIpLFxyXG4gICAgXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX3dhbGxFbWl0dGVycy5wdXNoKFxyXG4gICAgICAgIG5ldyBSZWN0YW5ndWxhckVtaXR0ZXIoXHJcbiAgICAgICAgICBzaXplc1tpXS54LFxyXG4gICAgICAgICAgc2l6ZXNbaV0ueSxcclxuICAgICAgICAgIHBvc2l0aW9uc1tpXSxcclxuICAgICAgICAgIGdhbWVDYW52YXNDdHgsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlU2hhcGU6IFwic3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1OWVlZWJmZlwiLFxyXG4gICAgICAgICAgICBlbWl0VGltZU1pbGxpczogMCxcclxuICAgICAgICAgICAgZW1pdERpcmVjdGlvbjogZGlyZWN0aW9uc1tpXSxcclxuICAgICAgICAgICAgc3ByZWFkQW5nbGU6IE1hdGguUEkgLyA2LFxyXG4gICAgICAgICAgICBzcGVlZDogMC44LFxyXG4gICAgICAgICAgICBwYXJ0aWNsZVNpemU6IDgsXHJcbiAgICAgICAgICAgIHBhcnRpY2xlQWdlOiAxMDAsXHJcbiAgICAgICAgICAgIGVtaXRJbnRlcnZhbDogMSxcclxuICAgICAgICAgICAgZW1pdEFtb3VudFBlclRpY2s6IDQsXHJcbiAgICAgICAgICAgIGZhZGVEaXJlY3Rpb246IFwicmV2ZXJzZVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRQb3dlcnVwKHBvd2VydXA6IFBvd2VydXApIHtcclxuICAgIHRoaXMuX3Bvd2VydXBzW3Bvd2VydXAuaWRdID0gcG93ZXJ1cDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQb3dlcnVwKHBvd2VydXA6IFBvd2VydXApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9wb3dlcnVwc1twb3dlcnVwLmlkXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBseVBvd2VydXAocG93ZXJ1cDogUG93ZXJ1cCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgIHN3aXRjaCAocG93ZXJ1cC50eXBlKSB7XHJcbiAgICAgIGNhc2UgUG93ZXJ1cFR5cGUuUG9ydGFsV2FsbHM6XHJcbiAgICAgICAgdGhpcy5zZXRXYWxsU3RhdGUoIXRoaXMuX3BvcnRhbFdhbGxzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQb3dlcnVwVHlwZS5DYW1lcmFMb2NrVG9QbGF5ZXI6XHJcbiAgICAgICAgaWYocGxheWVyLnVzZXJuYW1lID09PSBjdXJyZW50UGxheWVyLnVzZXJuYW1lIHx8ICFjdXJyZW50UGxheWVyLnNuYWtlLmlzQWxpdmUpe1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLl9jYW1lcmFMb2NrVGltZW91dElkKXtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jYW1lcmFMb2NrVGltZW91dElkKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vaW5jcmVhc2UgdGhlIGNhbnZhcyByZXNvbHV0aW9uIGluIG9yZGVyIHRvIGRlY3JlYXNlIHRoZSBibHVyXHJcbiAgICAgICAgZ2FtZUNhbnZhcy53aWR0aCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAyO1xyXG4gICAgICAgIGdhbWVDYW52YXMuaGVpZ2h0ID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAyO1xyXG4gICAgICAgIGJhY2tncm91bmRDYW52YXMud2lkdGggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kQ2FudmFzLmhlaWdodCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogMjtcclxuICAgICAgICBkcmF3R3JpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW1lcmFMb2NrID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUxvY2tUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2NhbWVyYUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcy1jb250YWluZXInKS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMSkgdHJhbnNsYXRlKDBweCwgMHB4KWA7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMtY29udGFpbmVyJykuc3R5bGUucm90YXRlID0gJzByYWQnO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB1cGRhdGVDYW52YXNTaXplKCk7XHJcbiAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH0sIHBvd2VydXAuZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVQb3dlcnVwKHBvd2VydXApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVpvbmVzKHR5cGU6IFBvd2VydXBUeXBlLCBhbW91bnQ6IG51bWJlcil7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9wb3dlcnVwcykuZm9yRWFjaCgocG93ZXJ1cCkgPT4ge1xyXG4gICAgICBwb3dlcnVwLmRyYXcoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fd2FsbEVtaXR0ZXJzLmZvckVhY2goKGVtaXR0ZXIpID0+IHtcclxuICAgICAgZW1pdHRlci50aWNrKDEpO1xyXG4gICAgICBlbWl0dGVyLmRyYXcoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRXYWxsU3RhdGUoaXNQb3J0YWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3BvcnRhbFdhbGxzID0gaXNQb3J0YWw7XHJcbiAgICB0aGlzLl93YWxsRW1pdHRlcnMuZm9yRWFjaChcclxuICAgICAgKGVtaXR0ZXIpID0+IChlbWl0dGVyLmVtaXRUaW1lID0gaXNQb3J0YWwgPyBJbmZpbml0eSA6IDApXHJcbiAgICApO1xyXG4gICAgdGhpcy5fZ2FtZUNhbnZhc0Rpdi5zdHlsZS5ib3JkZXJDb2xvciA9IGlzUG9ydGFsXHJcbiAgICAgID8gXCIjMzRjNmRjXCJcclxuICAgICAgOiBcIiM1NTU1NTVcIjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpe1xyXG4gICAgdGhpcy5fcG93ZXJ1cHMgPSB7fTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLl9jYW1lcmFMb2NrVGltZW91dElkKTtcclxuICAgIHRoaXMuX2NhbWVyYUxvY2sgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcy1jb250YWluZXInKS5zdHlsZS50cmFuc2Zvcm0gPSBudWxsO1xyXG4gICAgdGhpcy5zZXRXYWxsU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjYW1lcmFMb2NrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhbWVyYUxvY2s7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJFbWl0dGVyIGZyb20gXCIuLi9QYXJ0aWNsZVN5c3RlbS9DaXJjdWxhckVtaXR0ZXJcIjtcclxuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tIFwiLi4vUGFydGljbGVTeXN0ZW0vUGFydGljbGVTeXN0ZW1VdGlsc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlUG93ZXJ1cCB9IGZyb20gXCIuLi9XZWJTb2NrZXRDbGllbnQvbWVzc2FnZVR5cGVzXCI7XHJcbmltcG9ydCB7IGN1cnJlbnRSb29tIH0gZnJvbSBcIi4uL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgZW51bSBQb3dlcnVwVHlwZSB7XHJcbiAgU3BlZWRVcCxcclxuICBTcGVlZERvd24sXHJcbiAgLy8gQm9tYixcclxuICAvLyBGbGlwQnV0dG9ucyxcclxuICBJbnZpc2liaWxpdHksXHJcbiAgUG9ydGFsV2FsbHMsXHJcbiAgQ2FtZXJhTG9ja1RvUGxheWVyLFxyXG59XHJcblxyXG5jb25zdCBTVkdfUEFUSFM6IHsgW2tleSBpbiBQb3dlcnVwVHlwZV06IHN0cmluZyB9ID0ge1xyXG4gIFtQb3dlcnVwVHlwZS5TcGVlZFVwXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvc3BlZWR1cC5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuU3BlZWREb3duXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvc3BlZWRkb3duLnN2Z1wiLFxyXG4gIC8vIFtQb3dlcnVwVHlwZS5Cb21iXTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvYm9tYi5zdmdcIixcclxuICAvLyBbUG93ZXJ1cFR5cGUuRmxpcEJ1dHRvbnNdOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy9mbGlwYnV0dG9ucy5zdmdcIixcclxuICBbUG93ZXJ1cFR5cGUuSW52aXNpYmlsaXR5XTogXCIuLi9hc3NldHMvcG93ZXJ1cHMvaW52aXNpYmlsaXR5LnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5Qb3J0YWxXYWxsc106IFwiLi4vYXNzZXRzL3Bvd2VydXBzL3BvcnRhbHdhbGxzLnN2Z1wiLFxyXG4gIFtQb3dlcnVwVHlwZS5DYW1lcmFMb2NrVG9QbGF5ZXJdOiBcIi4uL2Fzc2V0cy9wb3dlcnVwcy90ZW1wLnN2Z1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG93ZXJ1cCB7XHJcbiAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yO1xyXG4gIHByaXZhdGUgX2NhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcmFkaXVzOiBudW1iZXIgPSAzMDtcclxuICBwcml2YXRlIF90eXBlOiBQb3dlcnVwVHlwZTtcclxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfZW1pdHRlcjogQ2lyY3VsYXJFbWl0dGVyO1xyXG4gIHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHBvc2l0aW9uOiBWZWN0b3IsXHJcbiAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBQb3dlcnVwVHlwZSxcclxuICAgIGR1cmF0aW9uOiBudW1iZXJcclxuICApIHtcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4ID0gY2FudmFzQ3R4O1xyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuX2ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5faW1nLnNyYyA9IFNWR19QQVRIU1t0aGlzLl90eXBlXTtcclxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgQ2lyY3VsYXJFbWl0dGVyKFxyXG4gICAgICB0aGlzLl9yYWRpdXMgKiAwLjYsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLFxyXG4gICAgICB0aGlzLl9jYW52YXNDdHgsXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogdGhpcy5fY29sb3IsXHJcbiAgICAgICAgcGFydGljbGVTaXplOiB0aGlzLl9yYWRpdXMgLyAyLjg1LFxyXG4gICAgICAgIHBhcnRpY2xlQWdlOiA2MCxcclxuICAgICAgICBzcGVlZDogdGhpcy5fcmFkaXVzIC8gMjAsXHJcbiAgICAgICAgZW1pdEFtb3VudFBlclRpY2s6IDMsXHJcbiAgICAgICAgc3Bhd25QYXJ0aWNsZXNPbkVkZ2U6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhdygpIHtcclxuICAgIHRoaXMuX2VtaXR0ZXIudGljaygwLjUpO1xyXG4gICAgdGhpcy5fZW1pdHRlci5kcmF3KCk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy53aWR0aCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMuaGVpZ2h0IC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplO1xyXG5cclxuICAgIHRoaXMuX2NhbnZhc0N0eC5tb3ZlVG8oXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnggKiBzY2FsZVgsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgKiBzY2FsZVlcclxuICAgICk7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguZmlsbFN0eWxlID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLl9jYW52YXNDdHguYXJjKFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi54ICogc2NhbGVYLFxyXG4gICAgICB0aGlzLl9wb3NpdGlvbi55ICogc2NhbGVZLFxyXG4gICAgICB0aGlzLl9yYWRpdXMgKiBzY2FsZVgsXHJcbiAgICAgIDAsXHJcbiAgICAgIDIgKiBNYXRoLlBJXHJcbiAgICApO1xyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmZpbGwoKTtcclxuICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICB0aGlzLmRyYXdTVkcoKTtcclxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdFRpbWUgPSBJbmZpbml0eTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd1NWRygpIHtcclxuICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyBjdXJyZW50Um9vbS5zZXR0aW5ncy5hcmVuYVNpemU7XHJcbiAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuICAgIC8vIHRoaXMuX2NhbnZhc0N0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcclxuICAgIGNvbnN0IGltYWdlU2NhbGVGYWN0b3IgPSAwLjY7XHJcblxyXG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSB0aGlzLl9pbWcud2lkdGggLyB0aGlzLl9pbWcuaGVpZ2h0O1xyXG5cclxuICAgIC8vIERldGVybWluZSB0aGUgc2NhbGVkIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlIGFzcGVjdCByYXRpb1xyXG4gICAgbGV0IGRyYXdXaWR0aCA9IHRoaXMuX3JhZGl1cyAqIDIgKiBpbWFnZVNjYWxlRmFjdG9yICogc2NhbGVYO1xyXG4gICAgbGV0IGRyYXdIZWlnaHQgPSAodGhpcy5fcmFkaXVzICogMiAqIGltYWdlU2NhbGVGYWN0b3IgKiBzY2FsZVgpIC8gYXNwZWN0UmF0aW87XHJcblxyXG4gICAgLy8gRW5zdXJlIHRoZSBpbWFnZSBmaXRzIHdpdGhpbiB0aGUgZ2l2ZW4gcmFkaXVzXHJcbiAgICBpZiAoZHJhd0hlaWdodCA+IHRoaXMuX3JhZGl1cyAqIDIgKiBpbWFnZVNjYWxlRmFjdG9yICogc2NhbGVYKSB7XHJcbiAgICAgIGRyYXdIZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyICogaW1hZ2VTY2FsZUZhY3RvciAqIHNjYWxlWDtcclxuICAgICAgZHJhd1dpZHRoID0gZHJhd0hlaWdodCAqIGFzcGVjdFJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuX2ltZyxcclxuICAgICAgdGhpcy5fcG9zaXRpb24ueCAqIHNjYWxlWCAtIGRyYXdXaWR0aCAvIDIsXHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgKiBzY2FsZVkgLSBkcmF3SGVpZ2h0IC8gMixcclxuICAgICAgZHJhd1dpZHRoLFxyXG4gICAgICBkcmF3SGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwb3NpdGlvbigpOiBWZWN0b3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByYWRpdXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogUG93ZXJ1cFR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XHJcbiAgfVxyXG5cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgIHBvc2l0aW9uOiB7IHg6IHRoaXMucG9zaXRpb24ueCwgeTogdGhpcy5wb3NpdGlvbi55IH0sXHJcbiAgICAgIGNvbG9yOiB0aGlzLl9jb2xvcixcclxuICAgICAgdHlwZTogdGhpcy5fdHlwZSxcclxuICAgICAgcmFkaXVzOiB0aGlzLl9yYWRpdXMsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLl9kdXJhdGlvblxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU1lc3NhZ2VQb3dlcnVwKFxyXG4gICAganNvbjogTWVzc2FnZVBvd2VydXAsXHJcbiAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxyXG4gICk6IFBvd2VydXAge1xyXG4gICAgcmV0dXJuIG5ldyBQb3dlcnVwKFxyXG4gICAgICBqc29uLnBvd2VydXAuaWQsXHJcbiAgICAgIG5ldyBWZWN0b3IoanNvbi5wb3dlcnVwLnBvc2l0aW9uLngsIGpzb24ucG93ZXJ1cC5wb3NpdGlvbi55KSxcclxuICAgICAgY2FudmFzQ3R4LFxyXG4gICAgICBqc29uLnBvd2VydXAuY29sb3IsXHJcbiAgICAgIGpzb24ucG93ZXJ1cC50eXBlLFxyXG4gICAgICBqc29uLnBvd2VydXAuZHVyYXRpb25cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU2VnbWVudCB7XHJcbiAgICBhYnN0cmFjdCBpc0NvbGxpZGFibGU6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBnZXQgZW5kQW5nbGUoKTogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgZ2V0IGVuZFBvaW50KCk6IFZlY3RvcjtcclxuICAgIGFic3RyYWN0IGdldENvbnRpbnVpbmdTZWdtZW50KHRyYW5zZm9ybTogVmVjdG9yKTogU2VnbWVudDtcclxufSIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCJ2ZWN0b3IyZFwiO1xyXG5pbXBvcnQgQXJjU2VnbWVudCBmcm9tIFwiLi9BcmNTZWdtZW50XCI7XHJcbmltcG9ydCBMaW5lU2VnbWVudCBmcm9tIFwiLi9MaW5lU2VnbWVudFwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwiLi9TZWdtZW50XCI7XHJcbmltcG9ydCBDaXJjdWxhckVtaXR0ZXIgZnJvbSBcIi4vUGFydGljbGVTeXN0ZW0vQ2lyY3VsYXJFbWl0dGVyXCI7XHJcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSBcIi4vUGFydGljbGVTeXN0ZW0vUGFydGljbGVTeXN0ZW1VdGlsc1wiO1xyXG5pbXBvcnQgeyBkcmF3QXJyb3cgfSBmcm9tIFwiLi9EcmF3ZXJcIjtcclxuaW1wb3J0IHsgY3VycmVudFJvb20gfSBmcm9tIFwiLi9NZW51TWFuYWdlci9sb2dpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2Uge1xyXG4gIHB1YmxpYyBzZWdtZW50czogU2VnbWVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIHR1cm5SYWRpdXM6IG51bWJlciA9IDYwO1xyXG4gIHByaXZhdGUgX2VtaXR0ZXI6IENpcmN1bGFyRW1pdHRlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHN0YXJ0UG9zOiBMaW5lU2VnbWVudCxcclxuICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICBjYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxyXG4gICkge1xyXG4gICAgdGhpcy5hZGRTZWdtZW50KHN0YXJ0UG9zKTtcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLl9jYW52YXNDdHggPSBjYW52YXNDdHg7XHJcbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IENpcmN1bGFyRW1pdHRlcihcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5oZWFkLmVuZFBvaW50LFxyXG4gICAgICB0aGlzLl9jYW52YXNDdHgsXHJcbiAgICAgIHtcclxuICAgICAgICBlbWl0SW50ZXJ2YWw6IDIsXHJcbiAgICAgICAgZW1pdEFtb3VudFBlclRpY2s6IDMsXHJcbiAgICAgICAgcGFydGljbGVTaXplOiA3LFxyXG4gICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLl9jb2xvcixcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgYWRkU2VnbWVudChzZWdtZW50OiBTZWdtZW50KSB7XHJcbiAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVhZCgpOiBTZWdtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnNsaWNlKC0xKS5wb3AoKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBjb25zdCBzY2FsZVggPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLndpZHRoIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzQ3R4LmNhbnZhcy5oZWlnaHQgLyBjdXJyZW50Um9vbS5zZXR0aW5ncy5hcmVuYVNpemU7XHJcblxyXG4gICAgdGhpcy5fY2FudmFzQ3R4LmxpbmVXaWR0aCA9IDEyICogTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgLy9UT0RPIGZpeCB0aGlzIHRvIGJlIGEgc2luZ2xlIHBhdGhcclxuXHJcbiAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHNlZ21lbnQuZHJhdyh0aGlzLl9jYW52YXNDdHgsIHRoaXMuX2NvbG9yKTtcclxuXHJcbiAgICAgIC8vZHJhdyBhIGRvdCBhdCB0aGUgaGVhZCwgdGhpcyBpcyB1c2VmdWwgaWYgdGhlIHNlZ21lbnQgaXMgaW52aXNpYmxlXHJcbiAgICAgIGlmICh0aGlzLmhlYWQgPT09IHNlZ21lbnQpIHtcclxuICAgICAgICB0aGlzLl9jYW52YXNDdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LmFyYyhcclxuICAgICAgICAgIHNlZ21lbnQuZW5kUG9pbnQueCAqIHNjYWxlWCxcclxuICAgICAgICAgIHNlZ21lbnQuZW5kUG9pbnQueSAqIHNjYWxlWSxcclxuICAgICAgICAgIDAuNSAqIE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKSxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzQ3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhc0N0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmF3SGVhZGluZ0RpcigpIHtcclxuICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX2NhbnZhc0N0eC5jYW52YXMud2lkdGggLyBjdXJyZW50Um9vbS5zZXR0aW5ncy5hcmVuYVNpemU7XHJcbiAgICBjb25zdCBzY2FsZVkgPSB0aGlzLl9jYW52YXNDdHguY2FudmFzLmhlaWdodCAvIGN1cnJlbnRSb29tLnNldHRpbmdzLmFyZW5hU2l6ZTtcclxuXHJcbiAgICBjb25zdCBhcnJvd0xlbmd0aCA9IDE3MDtcclxuICAgIGNvbnN0IGxhc3RTZWdtZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgY29uc3QgZHggPSAgTWF0aC5jb3MobGFzdFNlZ21lbnQuZW5kQW5nbGUpICogYXJyb3dMZW5ndGg7XHJcbiAgICBjb25zdCBkeSA9ICBNYXRoLnNpbihsYXN0U2VnbWVudC5lbmRBbmdsZSkgKiBhcnJvd0xlbmd0aDtcclxuICAgIGNvbnN0IHdpZHRoID0gMTIgKiBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICBjb25zdCBuZXdFbmQgPSBuZXcgVmVjdG9yKFxyXG4gICAgICBsYXN0U2VnbWVudC5lbmRQb2ludC54ICsgZHgsXHJcbiAgICAgIGxhc3RTZWdtZW50LmVuZFBvaW50LnkgKyBkeVxyXG4gICAgKTtcclxuXHJcbiAgICBkcmF3QXJyb3codGhpcy5fY2FudmFzQ3R4LCB0aGlzLmhlYWQuZW5kUG9pbnQuY2xvbmUoKS5tdWxTKHNjYWxlWCkgYXMgVmVjdG9yLCBuZXdFbmQubXVsUyhzY2FsZVgpLCB0aGlzLl9jb2xvciwgd2lkdGggKiAwLjYpO1xyXG4gIH1cclxuXHJcbiAga2lsbCgpIHtcclxuICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZW1pdHRlci5wb3NpdGlvbiA9IHRoaXMuaGVhZC5lbmRQb2ludDtcclxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdFRpbWUgPSAxMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUVtaXR0ZXIoZHQ6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX2VtaXR0ZXIpIHtcclxuICAgICAgdGhpcy5fZW1pdHRlci50aWNrKGR0KTtcclxuICAgICAgdGhpcy5fZW1pdHRlci5kcmF3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGluZmxhdGUgfSBmcm9tIFwicGFrb1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVHYW1lU3RhdGUgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgRGlyIH0gZnJvbSBcIi4uL0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBjdXJyZW50UGxheWVyLCBjdXJyZW50Um9vbSwgc2hvd0Vycm9yQW5pbWF0aW9uLCBzaG93Um9vbVZpZXcsIHN3aXRjaEdhbWVWaWV3LCB1cGRhdGVSb29tTGlzdCB9IGZyb20gXCIuLi9NZW51TWFuYWdlci9sb2dpblwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vTW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlUm9vbSwgUm9vbVNldHRpbmdzIH0gZnJvbSBcIi4vbWVzc2FnZVR5cGVzXCI7XHJcblxyXG5sZXQgc29ja2V0OiBXZWJTb2NrZXQ7XHJcblxyXG5mdW5jdGlvbiBpbml0V2ViU29ja2V0KCkge1xyXG4gICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX06MzAwMGApO1xyXG4gICAgLy8gc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3NzOi8vc25ha2VnYW1lLXNlcnZlci5tYXhpby5zaXRlYCk7XHJcbiAgICAvLyBcclxuICAgIC8vIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBjb25uZWN0aW9uIGVzdGFibGlzaGVkJyk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIHNvY2tldC5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBKU09OZGF0YSA9IEpTT04ucGFyc2UoaW5mbGF0ZShldmVudC5kYXRhIGFzIFVpbnQ4QXJyYXksIHt0bzogXCJzdHJpbmdcIn0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWVzc2FnZSBmcm9tIHNlcnZlcjonLCBKU09OZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChKU09OZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0pPSU5FRF9ST09NJzpcclxuICAgICAgICAgICAgICAgIHNob3dSb29tVmlldyhKU09OZGF0YS5yb29tIGFzIE1lc3NhZ2VSb29tKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdKT0lOX0ZBSUwnOlxyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yQW5pbWF0aW9uKEpTT05kYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUk9PTV9EQVRBJzpcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVJvb21MaXN0KEpTT05kYXRhLnJvb20gYXMgTWVzc2FnZVJvb20pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dBTUVfU1RBVEUnOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoR2FtZVZpZXcoSlNPTmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dEJzpcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUdhbWVTdGF0ZShKU09OZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnRVJST1InOlxyXG4gICAgICAgICAgICAgICAgYWxlcnQoYEVycm9yOiAke0pTT05kYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzb2NrZXQub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzb2NrZXQub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm9vbSh1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ0NSRUFURV9ST09NJywgdXNlcm5hbWU6IHVzZXJuYW1lIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGpvaW5Sb29tKHJvb21Db2RlOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnSk9JTl9ST09NJywgcm9vbUNvZGU6IHJvb21Db2RlLCB1c2VybmFtZTogdXNlcm5hbWUgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UGxheWVyRGF0YShwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdQTEFZRVJfREFUQScsIHBsYXllcjogcGxheWVyLCByb29tQ29kZTogY3VycmVudFJvb20uY29kZX0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbm90IG9wZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRLZXlFdmVudFRvU2VydmVyKGtleTogRGlyLCBwcmVzc2VkOiBib29sZWFuKXtcclxuICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XHJcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnS0VZX0VWRU5UJywgcm9vbUNvZGU6IGN1cnJlbnRSb29tLmNvZGUsIHVzZXJuYW1lOiBjdXJyZW50UGxheWVyLnVzZXJuYW1lLCBrZXk6IGtleSwgcHJlc3NlZDogcHJlc3NlZCB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kU3RhcnRDb21tYW5kKCkge1xyXG4gICAgaWYgKHNvY2tldCAmJiBzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdCRUdJTl9HQU1FJywgcm9vbUNvZGU6IGN1cnJlbnRSb29tLmNvZGV9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBjb25uZWN0aW9uIGlzIG5vdCBvcGVuJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kU2V0dGluZ3Moc2V0dGluZ3M6IFJvb21TZXR0aW5ncyl7XHJcbiAgICBpZiAoc29ja2V0ICYmIHNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ1JPT01fU0VUVElOR1MnLCByb29tQ29kZTogY3VycmVudFJvb20uY29kZSwgc2V0dGluZ3M6IHNldHRpbmdzfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW5pdFdlYlNvY2tldCgpO1xyXG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwidmVjdG9yMmRcIjtcclxuaW1wb3J0IEFyY1NlZ21lbnQgZnJvbSBcIi4vQXJjU2VnbWVudFwiO1xyXG5pbXBvcnQgeyBkcmF3R3JpZCB9IGZyb20gXCIuL0RyYXdlclwiO1xyXG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gXCIuL0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgTGluZVNlZ21lbnQgZnJvbSBcIi4vTGluZVNlZ21lbnRcIjtcclxuaW1wb3J0IFNuYWtlIGZyb20gXCIuL1NuYWtlXCI7XHJcbmltcG9ydCBDaXJjdWxhckVtaXR0ZXIgZnJvbSBcIi4vUGFydGljbGVTeXN0ZW0vQ2lyY3VsYXJFbWl0dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgRXhpc3RpbmdBcmNTZWdtZW50TWVzc2FnZSxcclxuICBFeGlzdGluZ0xpbmVTZWdtZW50TWVzc2FnZSxcclxuICBNZXNzYWdlR2FtZXBsYXksXHJcbiAgTmV3QXJjU2VnbWVudE1lc3NhZ2UsXHJcbiAgTmV3TGluZVNlZ21lbnRNZXNzYWdlLFxyXG4gIFBvd2VydXBBY3Rpb24sXHJcbn0gZnJvbSBcIi4vV2ViU29ja2V0Q2xpZW50L21lc3NhZ2VUeXBlc1wiO1xyXG5pbXBvcnQgeyBjdXJyZW50UGxheWVyLCBjdXJyZW50Um9vbSB9IGZyb20gXCIuL01lbnVNYW5hZ2VyL2xvZ2luXCI7XHJcbmltcG9ydCBQb3dlcnVwSGFuZGxlciBmcm9tIFwiLi9Qb3dlcnVwU3lzdGVtL1Bvd2VydXBIYW5kbGVyXCI7XHJcbmltcG9ydCBQb3dlcnVwIGZyb20gXCIuL1Bvd2VydXBTeXN0ZW0vcG93ZXJ1cFwiO1xyXG5pbXBvcnQgeyBhbmltYXRlQ291bnRkb3duIH0gZnJvbSBcIi4vTWVudU1hbmFnZXIvY291bnRkb3duXCI7XHJcbmNvbnN0IGdhbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImdhbWUtY2FudmFzLWNvbnRhaW5lclwiXHJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbnZhciBmcHNDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZnBzQ291bnRlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuZnBzQ291bnRlci5zdHlsZS50b3AgPSBcIjEwcHhcIjtcclxuZnBzQ291bnRlci5zdHlsZS5sZWZ0ID0gXCIxMHB4XCI7XHJcbmZwc0NvdW50ZXIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbmxldCBwcmV2R2FtZURpdkFuZ2xlID0gMDtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmcHNDb3VudGVyKTtcclxuZXhwb3J0IHZhciBmcHMgPSA2MDtcclxuXHJcbmV4cG9ydCB2YXIgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiZ2FtZS1jYW52YXNcIlxyXG4pIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5leHBvcnQgdmFyIGdhbWVDYW52YXNDdHggPSBnYW1lQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XHJcblxyXG5leHBvcnQgdmFyIGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImJhY2tncm91bmQtY2FudmFzXCJcclxuKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuZXhwb3J0IHZhciBiYWNrZ3JvdW5kQ2FudmFzQ3R4ID0gYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xyXG5cclxuYmFja2dyb3VuZENhbnZhcyEud2lkdGggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5iYWNrZ3JvdW5kQ2FudmFzIS5oZWlnaHQgPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuZ2FtZUNhbnZhcyEud2lkdGggPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5nYW1lQ2FudmFzIS5oZWlnaHQgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuLy8yMDAwIC8gNjYuNjY2IH49IDMwXHJcbmV4cG9ydCBsZXQgZ3JpZFNpemUgPSA2Ni42NjY7XHJcbmxldCBpbnB1dE1hbmFnZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYW52YXNTaXplKCkge1xyXG4gIGdhbWVDYW52YXMud2lkdGggPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogMS41O1xyXG4gIGdhbWVDYW52YXMuaGVpZ2h0ID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAxLjU7XHJcbiAgYmFja2dyb3VuZENhbnZhcy53aWR0aCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAxLjU7XHJcbiAgYmFja2dyb3VuZENhbnZhcy5oZWlnaHQgPSBiYWNrZ3JvdW5kQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIDEuNTtcclxuICBkcmF3R3JpZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gIHZhciBtdWx0ID0gZnBzIC8gNjA7XHJcbiAgZnJhbWVDb3VudCsrO1xyXG4gIGlmIChmcmFtZUNvdW50ICUgMTAgPT09IDApIHtcclxuICAgIGZwcyA9IGNhbGN1bGF0ZUZQUygpO1xyXG4gICAgZnBzQ291bnRlci5pbm5lclRleHQgPSBgRlBTOiAke2Zwc31gO1xyXG4gIH1cclxuICBnYW1lQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLCBnYW1lQ2FudmFzLndpZHRoLCBnYW1lQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcbiAgICBwbGF5ZXIuc25ha2UuZHJhdygpO1xyXG4gICAgcGxheWVyLnNuYWtlLnVwZGF0ZUVtaXR0ZXIoKHBlcmZvcm1hbmNlLm5vdygpIC8gMTAgLSBsYXN0VGltZSkgLyAxNSk7XHJcbiAgfSk7XHJcblxyXG4gIGN1cnJlbnRSb29tLnBvd2VydXBIYW5kbGVyLmRyYXcoKTtcclxufVxyXG52YXIgZnJhbWVDb3VudCA9IDA7XHJcbnZhciBsYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTA7XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUZQUygpIHtcclxuICB2YXIgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwO1xyXG4gIHZhciB0aW1lRGlmZiA9IGN1cnJlbnRUaW1lIC0gbGFzdFRpbWU7XHJcbiAgdmFyIGZwcyA9IE1hdGgucm91bmQoMTAwMCAvIHRpbWVEaWZmKTtcclxuICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gIHJldHVybiBmcHM7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZUNhbnZhc1NpemUpO1xyXG5kcmF3R3JpZCgpO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q2xvc2VzdEFuZ2xlKGN1cnJlbnRBbmdsZTogbnVtYmVyLCB0YXJnZXRBbmdsZTogbnVtYmVyKSB7XHJcbiAgY29uc3QgcGkyID0gTWF0aC5QSSAqIDI7XHJcbiAgbGV0IGRlbHRhID0gKHRhcmdldEFuZ2xlIC0gY3VycmVudEFuZ2xlKSAlIHBpMjtcclxuICBpZiAoZGVsdGEgPiBNYXRoLlBJKSB7XHJcbiAgICBkZWx0YSAtPSBwaTI7XHJcbiAgfSBlbHNlIGlmIChkZWx0YSA8IC1NYXRoLlBJKSB7XHJcbiAgICBkZWx0YSArPSBwaTI7XHJcbiAgfVxyXG4gIHJldHVybiBjdXJyZW50QW5nbGUgKyBkZWx0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKVxyXG57XHJcbiAgICByZXR1cm4gYSAqICgxLjAgLSBmKSArIChiICogZik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHYW1lU3RhdGUoZ2FtZVN0YXRlOiBNZXNzYWdlR2FtZXBsYXkpIHtcclxuICBpZiAoY3VycmVudFBsYXllci5zbmFrZSA9PT0gbnVsbCkge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBzbmFrZXMgdGhlIGZpcnN0IHRpbWUgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWRcclxuICAgIGdhbWVTdGF0ZS5zLmZvckVhY2goKGhlYWREYXRhKSA9PiB7XHJcbiAgICAgIC8vdGhpcyBjYW4gYmUgZG9uZSBiZWNhdXNlIHRoZSBzbmFrZSBhbHdheXMgYmVnaW5zIHdpdGggYSBsaW5lIHNlZ21lbnRcclxuICAgICAgbGV0IHNlcnZlckhlYWQgPSBoZWFkRGF0YS5sUyBhcyBOZXdMaW5lU2VnbWVudE1lc3NhZ2U7XHJcbiAgICAgIGxldCB1c2VybmFtZSA9IGhlYWREYXRhLnU7XHJcblxyXG4gICAgICBsZXQgcG9zID0gc2VydmVySGVhZC5lbmRQb2ludDtcclxuICAgICAgY3VycmVudFJvb20ucGxheWVyc1t1c2VybmFtZV0uc25ha2UgPSBuZXcgU25ha2UoXHJcbiAgICAgICAgbmV3IExpbmVTZWdtZW50KFxyXG4gICAgICAgICAgbmV3IFZlY3RvcihwYXJzZUZsb2F0KHBvcy54KSwgcGFyc2VGbG9hdChwb3MueSkpLFxyXG4gICAgICAgICAgbmV3IFZlY3RvcihwYXJzZUZsb2F0KHBvcy54KSwgcGFyc2VGbG9hdChwb3MueSkpLFxyXG4gICAgICAgICAgc2VydmVySGVhZC5pc0NvbGxpZGFibGUsXHJcbiAgICAgICAgICBwYXJzZUZsb2F0KHNlcnZlckhlYWQuZW5kQW5nbGUpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5jb2xvcixcclxuICAgICAgICBnYW1lQ2FudmFzQ3R4XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGN1cnJlbnRQbGF5ZXIuc25ha2UgPSBjdXJyZW50Um9vbS5wbGF5ZXJzW2N1cnJlbnRQbGF5ZXIudXNlcm5hbWVdLnNuYWtlO1xyXG4gICAgaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcihcclxuICAgICAgY3VycmVudFJvb20ucGxheWVyc1tjdXJyZW50UGxheWVyLnVzZXJuYW1lXS5zbmFrZSxcclxuICAgICAgW1wiQVwiLCBcIkFSUk9XTEVGVFwiXSxcclxuICAgICAgW1wiRFwiLCBcIkFSUk9XUklHSFRcIl1cclxuICAgICk7XHJcbiAgICBcclxuICAgIGFuaW1hdGVDb3VudGRvd24oKTtcclxuICAgIGFuaW1hdGUoKTtcclxuICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcbiAgICAgIHBsYXllci5zbmFrZS5kcmF3SGVhZGluZ0RpcigpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgICBcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGN1cnJlbnRVc2VybmFtZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAvLyBVcGRhdGUgZXhpc3Rpbmcgc25ha2VzIGJhc2VkIG9uIHRoZSBuZXcgZ2FtZSBzdGF0ZVxyXG5cclxuICAgIGlmIChnYW1lU3RhdGUucCAhPT0gbnVsbCkge1xyXG4gICAgICAvL3VwZGF0ZSBwb3dlcnVwcyBsaXN0XHJcbiAgICAgIGdhbWVTdGF0ZS5wLmZvckVhY2goKHBvd2VydXBJbmZvKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChwb3dlcnVwSW5mby5hY3Rpb24pIHtcclxuICAgICAgICAgIGNhc2UgUG93ZXJ1cEFjdGlvbi5SRU1PVkU6XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb29tLnBvd2VydXBIYW5kbGVyLnJlbW92ZVBvd2VydXAoXHJcbiAgICAgICAgICAgICAgUG93ZXJ1cC5mcm9tTWVzc2FnZVBvd2VydXAocG93ZXJ1cEluZm8sIGdhbWVDYW52YXNDdHgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBQb3dlcnVwQWN0aW9uLlNQQVdOOlxyXG4gICAgICAgICAgICBjdXJyZW50Um9vbS5wb3dlcnVwSGFuZGxlci5hZGRQb3dlcnVwKFxyXG4gICAgICAgICAgICAgIFBvd2VydXAuZnJvbU1lc3NhZ2VQb3dlcnVwKHBvd2VydXBJbmZvLCBnYW1lQ2FudmFzQ3R4KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgUG93ZXJ1cEFjdGlvbi5BUFBMWTpcclxuICAgICAgICAgICAgY3VycmVudFJvb20ucG93ZXJ1cEhhbmRsZXIuYXBwbHlQb3dlcnVwKFxyXG4gICAgICAgICAgICAgIFBvd2VydXAuZnJvbU1lc3NhZ2VQb3dlcnVwKHBvd2VydXBJbmZvLCBnYW1lQ2FudmFzQ3R4KSwgcG93ZXJ1cEluZm8ucGxheWVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZVN0YXRlLnMuZm9yRWFjaCgobmV3SGVhZERhdGEpID0+IHtcclxuICAgICAgbGV0IHNlcnZlckhlYWQgPSBuZXdIZWFkRGF0YS5sUztcclxuICAgICAgbGV0IHVzZXJuYW1lID0gbmV3SGVhZERhdGEudTtcclxuICAgICAgbGV0IHNuYWtlVG9VcGRhdGUgPSBjdXJyZW50Um9vbS5wbGF5ZXJzW3VzZXJuYW1lXS5zbmFrZTtcclxuXHJcbiAgICAgIC8va2VlcCB0cmFjayBvZiB0aGUgdXNlcm5hbWVzIHNlbnQgYnkgdGhlIHNlcnZlciBpbiB0aGUgZGF0YVxyXG4gICAgICBjdXJyZW50VXNlcm5hbWVzLnB1c2godXNlcm5hbWUpO1xyXG4gICAgICAvLyB0cmFuc2xhdGUoJHtoZWFkLmVuZFBvaW50LnggKiBnYW1lQ2FudmFzLndpZHRoIC8gMjAwMCB9cHgsICR7aGVhZC5lbmRQb2ludC55ICogZ2FtZUNhbnZhcy53aWR0aCAvIDIwMDB9cHgpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoc2VydmVySGVhZC5pc05ld1RoaXNUaWNrKSB7XHJcbiAgICAgICAgaWYgKG5ld0hlYWREYXRhLnNUID09PSBcIkxcIikge1xyXG4gICAgICAgICAgbGV0IG5ld0xpbmVIZWFkID0gIHNlcnZlckhlYWQgYXMgTmV3TGluZVNlZ21lbnRNZXNzYWdlO1xyXG5cclxuICAgICAgICAgIHNuYWtlVG9VcGRhdGUuYWRkU2VnbWVudChcclxuICAgICAgICAgICAgbmV3IExpbmVTZWdtZW50KFxyXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3IocGFyc2VGbG9hdChuZXdMaW5lSGVhZC5zdGFydFBvaW50LngpLCBwYXJzZUZsb2F0KG5ld0xpbmVIZWFkLnN0YXJ0UG9pbnQueSkpLFxyXG4gICAgICAgICAgICAgIG5ldyBWZWN0b3IocGFyc2VGbG9hdChuZXdMaW5lSGVhZC5lbmRQb2ludC54KSwgcGFyc2VGbG9hdChuZXdMaW5lSGVhZC5lbmRQb2ludC55KSksXHJcbiAgICAgICAgICAgICAgbmV3TGluZUhlYWQuaXNDb2xsaWRhYmxlLFxyXG4gICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3TGluZUhlYWQuZW5kQW5nbGUpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkRGF0YS5zVCA9PT0gXCJBXCIpIHtcclxuICAgICAgICAgIGxldCBuZXdBcmNIZWFkID0gc2VydmVySGVhZCBhcyBOZXdBcmNTZWdtZW50TWVzc2FnZTtcclxuICAgICAgICAgIGxldCBjZW50ZXIgPSBuZXdBcmNIZWFkLmNlbnRlcjtcclxuICAgICAgICAgIHNuYWtlVG9VcGRhdGUuYWRkU2VnbWVudChcclxuICAgICAgICAgICAgbmV3IEFyY1NlZ21lbnQoXHJcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcihwYXJzZUZsb2F0KGNlbnRlci54KSwgcGFyc2VGbG9hdChjZW50ZXIueSkpLFxyXG4gICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3QXJjSGVhZC5yYWRpdXMpLFxyXG4gICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3QXJjSGVhZC5zdGFydEFuZ2xlKSxcclxuICAgICAgICAgICAgICBwYXJzZUZsb2F0KG5ld0FyY0hlYWQuZW5kQW5nbGUpLFxyXG4gICAgICAgICAgICAgIG5ld0FyY0hlYWQuY291bnRlckNsb2Nrd2lzZSxcclxuICAgICAgICAgICAgICBuZXdBcmNIZWFkLmlzQ29sbGlkYWJsZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAobmV3SGVhZERhdGEuc1QgPT09IFwiTFwiKSB7XHJcbiAgICAgICAgICBzZXJ2ZXJIZWFkID0gc2VydmVySGVhZCBhcyBFeGlzdGluZ0xpbmVTZWdtZW50TWVzc2FnZTtcclxuICAgICAgICAgIGxldCBjbGllbnRIZWFkID0gc25ha2VUb1VwZGF0ZS5zZWdtZW50c1tzbmFrZVRvVXBkYXRlLnNlZ21lbnRzLmxlbmd0aCAtIDFdIGFzIExpbmVTZWdtZW50XHJcbiAgICAgICAgICBjbGllbnRIZWFkLmVuZFBvaW50ID0gbmV3IFZlY3RvcihwYXJzZUZsb2F0KHNlcnZlckhlYWQuZW5kUG9pbnQueCksIHBhcnNlRmxvYXQoc2VydmVySGVhZC5lbmRQb2ludC55KSk7XHJcblxyXG4gICAgICAgICAgLy9jYW1lcmEgcG93ZXJ1cCBlZmZlY3Qgc3R1ZmZcclxuICAgICAgICAgIGlmIChjdXJyZW50Um9vbS5wb3dlcnVwSGFuZGxlci5jYW1lcmFMb2NrKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VybmFtZSA9PT0gY3VycmVudFBsYXllci51c2VybmFtZSkge1xyXG4gICAgICAgICAgICAgIGxldCBuZXdBbmdsZSA9IC1jbGllbnRIZWFkLmVuZEFuZ2xlIC0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgICAgICAgbmV3QW5nbGUgPSBsZXJwKHByZXZHYW1lRGl2QW5nbGUsIG5ld0FuZ2xlLCAwLjE1KTtcclxuICAgICAgICAgICAgICBnYW1lRGl2LnN0eWxlLnJvdGF0ZSA9IGAke25ld0FuZ2xlfXJhZGBcclxuICAgICAgICAgICAgICBnYW1lRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgyKSB0cmFuc2xhdGUoJHtcclxuICAgICAgICAgICAgICAgICgtc2VydmVySGVhZC5lbmRQb2ludC54ICogZ2FtZURpdi5vZmZzZXRIZWlnaHQpIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplICtcclxuICAgICAgICAgICAgICAgIGdhbWVEaXYub2Zmc2V0SGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgIH1weCwgJHtcclxuICAgICAgICAgICAgICAgICgtc2VydmVySGVhZC5lbmRQb2ludC55ICogZ2FtZURpdi5vZmZzZXRIZWlnaHQpIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplICtcclxuICAgICAgICAgICAgICAgIGdhbWVEaXYub2Zmc2V0SGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgIH1weClgO1xyXG4gICAgICAgICAgICAgIHByZXZHYW1lRGl2QW5nbGUgPSBuZXdBbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZERhdGEuc1QgPT09IFwiQVwiKSB7XHJcblxyXG4gICAgICAgICAgc2VydmVySGVhZCA9IHNlcnZlckhlYWQgYXMgRXhpc3RpbmdBcmNTZWdtZW50TWVzc2FnZTtcclxuICAgICAgICAgIGxldCBjbGllbnRIZWFkID0gc25ha2VUb1VwZGF0ZS5zZWdtZW50c1tzbmFrZVRvVXBkYXRlLnNlZ21lbnRzLmxlbmd0aCAtIDFdIGFzIEFyY1NlZ21lbnRcclxuICAgICAgICAgIGNsaWVudEhlYWQuZW5kQW5nbGUgPSBwYXJzZUZsb2F0KHNlcnZlckhlYWQuZW5kQW5nbGUpO1xyXG5cclxuICAgICAgICAgIC8vY2FtZXJhIHBvd2VydXAgZWZmZWN0IHN0dWZmXHJcbiAgICAgICAgICBpZiAoY3VycmVudFJvb20ucG93ZXJ1cEhhbmRsZXIuY2FtZXJhTG9jaykge1xyXG4gICAgICAgICAgICBpZiAodXNlcm5hbWUgPT09IGN1cnJlbnRQbGF5ZXIudXNlcm5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgIGxldCBuZXdBbmdsZSA9IGNsaWVudEhlYWQuaXNDb3VudGVyQ2xvY2t3aXNlKClcclxuICAgICAgICAgICAgICAgID8gLWNsaWVudEhlYWQuZW5kQW5nbGVcclxuICAgICAgICAgICAgICAgIDogLWNsaWVudEhlYWQuZW5kQW5nbGUgLSBNYXRoLlBJO1xyXG4gICAgICAgICAgICAgIC8vIG5ld0FuZ2xlID0gbmV3QW5nbGUgJSAoIDIgKiBNYXRoLlBJICk7XHJcbiAgICAgICAgICAgICAgbmV3QW5nbGUgPSBsZXJwKHByZXZHYW1lRGl2QW5nbGUsIG5ld0FuZ2xlLCAwLjE1KTtcclxuICAgICAgICAgICAgICBnYW1lRGl2LnN0eWxlLnJvdGF0ZSA9IGAke25ld0FuZ2xlfXJhZGBcclxuICAgICAgICAgICAgICBnYW1lRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgyKSB0cmFuc2xhdGUoJHtcclxuICAgICAgICAgICAgICAgICgtY2xpZW50SGVhZC5lbmRQb2ludC54ICogZ2FtZURpdi5vZmZzZXRIZWlnaHQpIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplICtcclxuICAgICAgICAgICAgICAgIGdhbWVEaXYub2Zmc2V0SGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgIH1weCwgJHtcclxuICAgICAgICAgICAgICAgICgtY2xpZW50SGVhZC5lbmRQb2ludC55ICogZ2FtZURpdi5vZmZzZXRIZWlnaHQpIC8gY3VycmVudFJvb20uc2V0dGluZ3MuYXJlbmFTaXplICtcclxuICAgICAgICAgICAgICAgIGdhbWVEaXYub2Zmc2V0SGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgIH1weClgO1xyXG4gICAgICAgICAgICAgIHByZXZHYW1lRGl2QW5nbGUgPSBuZXdBbmdsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vd2hlbiBhIHVzZXJuYW1lIHRoYXQgaXMgb24gdGhlIGNsaWVudCBsaXN0IGlzIG5vIGxvbmdlciBzZWVuIGluIHRoZSBkYXRhIGZyb20gdGhlIHNlcnZlciwga2lsbCBoaW1cclxuICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcbiAgICAgIGlmICghY3VycmVudFVzZXJuYW1lcy5pbmNsdWRlcyhwbGF5ZXIudXNlcm5hbWUpICYmIHBsYXllci5zbmFrZS5pc0FsaXZlKSB7XHJcbiAgICAgICAgcGxheWVyLnNuYWtlLmtpbGwoKTtcclxuXHJcbiAgICAgICAgLy9zZXQgdGhlIGxhc3Qgd2lubmVyIGlmIG5vb25lIGlzIGFsaXZlIG5vd1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFJvb20ucGxheWVycykuZXZlcnkoXHJcbiAgICAgICAgICAgIChwbGF5ZXIpID0+ICFwbGF5ZXIuc25ha2UuaXNBbGl2ZVxyXG4gICAgICAgICAgKSA9PT0gdHJ1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY3VycmVudFJvb20ubGFzdFdpbm5lciA9IHBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBhbmltYXRlKCk7XHJcblxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUaGVzZSB2YWx1ZXMgYXJlIHVzZWQgYnkgdGhlIGBBYnN0cmFjdFZlY3Rvci5yb3VuZGAgbWV0aG9kIHRvIGluY3JlYXNlXG4gKiBwZXJmb3JtYW5jZSB2cy4gdXNpbmcgIE51bWJlci50b0ZpeGVkLlxuICovXG52YXIgcHJlY2lzaW9uID0gW1xuICAgIDEsXG4gICAgMTAsXG4gICAgMTAwLFxuICAgIDEwMDAsXG4gICAgMTAwMDAsXG4gICAgMTAwMDAwLFxuICAgIDEwMDAwMDAsXG4gICAgMTAwMDAwMDAsXG4gICAgMTAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAsXG4gICAgMTAwMDAwMDAwMDBcbl07XG4vKipcbiAqIFRoZSBjbGFzcyB0aGF0IGFsbCBvdGhlciB2ZWN0b3IgcmVwcmVzZW50YXRpb25zIGFyZSBkZXJpdmVkIGZyb20uXG4gKlxuICogQ29udGFpbnMgdGhlIGNvcmUgaW1wbGVtZW50YXRpb24gZm9yIGFsbCBtZXRob2RzIHRoYXQgd2lsbCBiZSBleHBvc2VkIGJ5XG4gKiB2ZWN0b3IgaW5zdGFuY2VzLlxuICpcbiAqIEV4YW1wbGUgb2YgY3JlYXRpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb246XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEFic3RyYWN0VmVjdG9yIH0gZnJvbSBcIi4vQWJzdHJhY3RWZWN0b3JcIlxuICpcbiAqIGV4cG9ydCBjbGFzcyBNeUN1c3RvbVZlY3RvciBleHRlbmRzIEFic3RyYWN0VmVjdG9yIHtcbiAqICBjb25zdHJ1Y3RvciAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAqICAgIHN1cGVyKEN1c3RvbVZlY3RvclR5cGUpXG4gKiAgfVxuICogfVxuICogYGBgXG4gKi9cbnZhciBBYnN0cmFjdFZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBYnN0cmFjdFZlY3RvcihjdG9yKSB7XG4gICAgICAgIHRoaXMuY3RvciA9IGN0b3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBib3RoIHggYW5kIHkgYXhpcyB2YWx1ZVxuICAgICAqIEBwYXJhbSB4ICAgTmV3IHggdmFsXG4gICAgICogQHBhcmFtIHkgICBOZXcgeSB2YWxcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0QXhlcyA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB4IHRoZSBheGlzIHZhbHVlXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHggYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHkgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB5IGF4aXMuXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGFzIGEgZm9ybWF0dGVkIHN0cmluZywgZS5nIFwiKDAsIDQpXCJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocm91bmQpIHtcbiAgICAgICAgaWYgKHJvdW5kID09PSB2b2lkIDApIHsgcm91bmQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIihcIiArIE1hdGgucm91bmQodGhpcy54KSArIFwiLCBcIiArIE1hdGgucm91bmQodGhpcy55KSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIHZlY3RvciBheGVzLCBlLmcgWzAsIDRdXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIE9iamVjdCBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIHsgeDogMCwgeTogNCB9XG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHByb3ZpZGVkIHZlY3RvciB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCArPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICs9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0IHRoZSBwcm92aWRlZCB2ZWN0b3IgZnJvbSB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xuICAgICAgICB0aGlzLnkgLT0gdmVjLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIHZlY3RvciBlcXVhbCB0byB0aGlzIG9uZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCA9PT0gdGhpcy54ICYmIHZlYy55ID09PSB0aGlzLnk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAqPSB2ZWMueDtcbiAgICAgICAgdGhpcy55ICo9IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsViA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVZlY3Rvcih2ZWMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlWZWN0b3IgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAvPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC89IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlYgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVZlY3Rvcih2KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeVNjYWxhciA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMueCAqPSBuO1xuICAgICAgICB0aGlzLnkgKj0gbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggLz0gbjtcbiAgICAgICAgdGhpcy55IC89IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl2aXZlIHRoaXMgdmVjdG9yIGJ5IHRoZSBwcm92aWRlZCBudW1iZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGl2UyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKG4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlTY2FsYXIodGhpcy5tYWduaXR1ZGUoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb3IgQW1lcmljYW4gc3BlbGxpbmcuIFNhbWUgYXMgdW5pdC9ub3JtYWxpc2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBzYW1lIGFzIG5vcm1hbGlzZSBhbmQgbm9ybWFsaXplXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnVuaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGlzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFnbml0dWRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzcXVyZWQgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmxlbmd0aFNxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB2ZWMueCAqIHRoaXMueCArIHZlYy55ICogdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBieSBhbm90aGVyLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jcm9zcyA9IGZ1bmN0aW9uICh2ZWMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHZlYy55IC0gdGhpcy55ICogdmVjLng7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGlzIHZlY3RvciBpLmUgbXVsdGlwbGllcyBpdCBieSAtMVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVjdG9yIGF4ZXMgdmFsdWVzIHRvIGFic29sdXRlIHZhbHVlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSB2ZWN0b3IgaS5lIHNldHMgYWxsIGF4ZXMgdG8gMFxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS56ZXJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgeCA9IHRoaXMueCAtIHYueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2Lnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZXRvciBieSBwcm92aWRlZCByYWRpYW5zXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRzKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWRzKTtcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZHMpO1xuICAgICAgICB2YXIgb3ggPSB0aGlzLng7XG4gICAgICAgIHZhciBveSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0gb3ggKiBjb3MgLSBveSAqIHNpbjtcbiAgICAgICAgdGhpcy55ID0gb3ggKiBzaW4gKyBveSAqIGNvcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSb3VuZHMgdGhpcyB2ZWN0b3IgdG8gbiBkZWNpbWFsIHBsYWNlc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDI7IH1cbiAgICAgICAgdmFyIHAgPSBwcmVjaXNpb25bbl07XG4gICAgICAgIC8vIFRoaXMgcGVyZm9ybXMgd2FhYXkgYmV0dGVyIHRoYW4gdG9GaXhlZCBhbmQgZ2l2ZSBGbG9hdDMyIHRoZSBlZGdlIGFnYWluLlxuICAgICAgICAvLyBodHRwOi8vd3d3LmR5bmFtaWNndXJ1LmNvbS9qYXZhc2NyaXB0L3JvdW5kLW51bWJlcnMtd2l0aC1wcmVjaXNpb24vXG4gICAgICAgIHRoaXMueCA9ICgoMC41ICsgdGhpcy54ICogcCkgPDwgMCkgLyBwO1xuICAgICAgICB0aGlzLnkgPSAoKDAuNSArIHRoaXMueSAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH07XG4gICAgcmV0dXJuIEFic3RyYWN0VmVjdG9yO1xufSgpKTtcbmV4cG9ydHMuQWJzdHJhY3RWZWN0b3IgPSBBYnN0cmFjdFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhbiBBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5BcnJheVZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBBcnJheVZlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXJyYXlWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXJyYXlWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBBcnJheVZlY3RvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYXhlcyA9IFt4LCB5XTtcbiAgICAgICAgX3RoaXMuY3RvciA9IEFycmF5VmVjdG9yO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5VmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQXJyYXlWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuQXJyYXlWZWN0b3IgPSBBcnJheVZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFycmF5VmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBpbiBhIEZsb2F0MzJBcnJheVxuICpcbiAqIGBgYFxuICogY29uc3QgdiA9IG5ldyBWZWMyRC5GbG9hdDMyVmVjdG9yKDIsIDUpXG4gKiBgYGBcbiAqL1xudmFyIEZsb2F0MzJWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0MzJWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXQzMlZlY3Rvcih4LCB5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIEZsb2F0MzJWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgICAgICBfdGhpcy5heGVzWzBdID0geDtcbiAgICAgICAgX3RoaXMuYXhlc1sxXSA9IHk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0MzJWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzFdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmxvYXQzMlZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5GbG9hdDMyVmVjdG9yID0gRmxvYXQzMlZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0MzJWZWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vQXJyYXlWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vRmxvYXQzMlZlY3RvclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmVjMkQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBYnN0cmFjdFZlY3Rvcl8xID0gcmVxdWlyZShcIi4vQWJzdHJhY3RWZWN0b3JcIik7XG4vKipcbiAqIEEgdmVjdG9yIHJlcHJlc2VudGF0aW9uIHRoYXQgc3RvcmVzIHRoZSBheGVzIGFzIHBhcnQgb2YgdGhlIGluc3RhbmNlIGl0c2VsZlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB2ID0gbmV3IFZlYzJELlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZlY3RvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl94ID0geDtcbiAgICAgICAgX3RoaXMuX3kgPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLlZlY3RvciA9IFZlY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlY3Rvci5qcy5tYXAiLCJcbi8qISBwYWtvIDIuMS4wIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGFrbyBAbGljZW5zZSAoTUlUIEFORCBabGliKSAqL1xuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBzcGFjZS11bmFyeS1vcHMgKi9cblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLy9jb25zdCBaX0ZJTFRFUkVEICAgICAgICAgID0gMTtcbi8vY29uc3QgWl9IVUZGTUFOX09OTFkgICAgICA9IDI7XG4vL2NvbnN0IFpfUkxFICAgICAgICAgICAgICAgPSAzO1xuY29uc3QgWl9GSVhFRCQxICAgICAgICAgICAgICAgPSA0O1xuLy9jb25zdCBaX0RFRkFVTFRfU1RSQVRFR1kgID0gMDtcblxuLyogUG9zc2libGUgdmFsdWVzIG9mIHRoZSBkYXRhX3R5cGUgZmllbGQgKHRob3VnaCBzZWUgaW5mbGF0ZSgpKSAqL1xuY29uc3QgWl9CSU5BUlkgICAgICAgICAgICAgID0gMDtcbmNvbnN0IFpfVEVYVCAgICAgICAgICAgICAgICA9IDE7XG4vL2NvbnN0IFpfQVNDSUkgICAgICAgICAgICAgPSAxOyAvLyA9IFpfVEVYVFxuY29uc3QgWl9VTktOT1dOJDEgICAgICAgICAgICAgPSAyO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmZ1bmN0aW9uIHplcm8kMShidWYpIHsgbGV0IGxlbiA9IGJ1Zi5sZW5ndGg7IHdoaWxlICgtLWxlbiA+PSAwKSB7IGJ1ZltsZW5dID0gMDsgfSB9XG5cbi8vIEZyb20genV0aWwuaFxuXG5jb25zdCBTVE9SRURfQkxPQ0sgPSAwO1xuY29uc3QgU1RBVElDX1RSRUVTID0gMTtcbmNvbnN0IERZTl9UUkVFUyAgICA9IDI7XG4vKiBUaGUgdGhyZWUga2luZHMgb2YgYmxvY2sgdHlwZSAqL1xuXG5jb25zdCBNSU5fTUFUQ0gkMSAgICA9IDM7XG5jb25zdCBNQVhfTUFUQ0gkMSAgICA9IDI1ODtcbi8qIFRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG1hdGNoIGxlbmd0aHMgKi9cblxuLy8gRnJvbSBkZWZsYXRlLmhcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW50ZXJuYWwgY29tcHJlc3Npb24gc3RhdGUuXG4gKi9cblxuY29uc3QgTEVOR1RIX0NPREVTJDEgID0gMjk7XG4vKiBudW1iZXIgb2YgbGVuZ3RoIGNvZGVzLCBub3QgY291bnRpbmcgdGhlIHNwZWNpYWwgRU5EX0JMT0NLIGNvZGUgKi9cblxuY29uc3QgTElURVJBTFMkMSAgICAgID0gMjU2O1xuLyogbnVtYmVyIG9mIGxpdGVyYWwgYnl0ZXMgMC4uMjU1ICovXG5cbmNvbnN0IExfQ09ERVMkMSAgICAgICA9IExJVEVSQUxTJDEgKyAxICsgTEVOR1RIX0NPREVTJDE7XG4vKiBudW1iZXIgb2YgTGl0ZXJhbCBvciBMZW5ndGggY29kZXMsIGluY2x1ZGluZyB0aGUgRU5EX0JMT0NLIGNvZGUgKi9cblxuY29uc3QgRF9DT0RFUyQxICAgICAgID0gMzA7XG4vKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZXMgKi9cblxuY29uc3QgQkxfQ09ERVMkMSAgICAgID0gMTk7XG4vKiBudW1iZXIgb2YgY29kZXMgdXNlZCB0byB0cmFuc2ZlciB0aGUgYml0IGxlbmd0aHMgKi9cblxuY29uc3QgSEVBUF9TSVpFJDEgICAgID0gMiAqIExfQ09ERVMkMSArIDE7XG4vKiBtYXhpbXVtIGhlYXAgc2l6ZSAqL1xuXG5jb25zdCBNQVhfQklUUyQxICAgICAgPSAxNTtcbi8qIEFsbCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JJVFMgYml0cyAqL1xuXG5jb25zdCBCdWZfc2l6ZSAgICAgID0gMTY7XG4vKiBzaXplIG9mIGJpdCBidWZmZXIgaW4gYmlfYnVmICovXG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBNQVhfQkxfQklUUyA9IDc7XG4vKiBCaXQgbGVuZ3RoIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQkxfQklUUyBiaXRzICovXG5cbmNvbnN0IEVORF9CTE9DSyAgID0gMjU2O1xuLyogZW5kIG9mIGJsb2NrIGxpdGVyYWwgY29kZSAqL1xuXG5jb25zdCBSRVBfM182ICAgICA9IDE2O1xuLyogcmVwZWF0IHByZXZpb3VzIGJpdCBsZW5ndGggMy02IHRpbWVzICgyIGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG5jb25zdCBSRVBaXzNfMTAgICA9IDE3O1xuLyogcmVwZWF0IGEgemVybyBsZW5ndGggMy0xMCB0aW1lcyAgKDMgYml0cyBvZiByZXBlYXQgY291bnQpICovXG5cbmNvbnN0IFJFUFpfMTFfMTM4ID0gMTg7XG4vKiByZXBlYXQgYSB6ZXJvIGxlbmd0aCAxMS0xMzggdGltZXMgICg3IGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1zcGFjaW5nLGFycmF5LWJyYWNrZXQtc3BhY2luZyAqL1xuY29uc3QgZXh0cmFfbGJpdHMgPSAgIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggbGVuZ3RoIGNvZGUgKi9cbiAgbmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMF0pO1xuXG5jb25zdCBleHRyYV9kYml0cyA9ICAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBkaXN0YW5jZSBjb2RlICovXG4gIG5ldyBVaW50OEFycmF5KFswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXSk7XG5cbmNvbnN0IGV4dHJhX2JsYml0cyA9ICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGJpdCBsZW5ndGggY29kZSAqL1xuICBuZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN10pO1xuXG5jb25zdCBibF9vcmRlciA9XG4gIG5ldyBVaW50OEFycmF5KFsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XSk7XG4vKiBlc2xpbnQtZW5hYmxlIGNvbW1hLXNwYWNpbmcsYXJyYXktYnJhY2tldC1zcGFjaW5nICovXG5cbi8qIFRoZSBsZW5ndGhzIG9mIHRoZSBiaXQgbGVuZ3RoIGNvZGVzIGFyZSBzZW50IGluIG9yZGVyIG9mIGRlY3JlYXNpbmdcbiAqIHByb2JhYmlsaXR5LCB0byBhdm9pZCB0cmFuc21pdHRpbmcgdGhlIGxlbmd0aHMgZm9yIHVudXNlZCBiaXQgbGVuZ3RoIGNvZGVzLlxuICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogTG9jYWwgZGF0YS4gVGhlc2UgYXJlIGluaXRpYWxpemVkIG9ubHkgb25jZS5cbiAqL1xuXG4vLyBXZSBwcmUtZmlsbCBhcnJheXMgd2l0aCAwIHRvIGF2b2lkIHVuaW5pdGlhbGl6ZWQgZ2Fwc1xuXG5jb25zdCBESVNUX0NPREVfTEVOID0gNTEyOyAvKiBzZWUgZGVmaW5pdGlvbiBvZiBhcnJheSBkaXN0X2NvZGUgYmVsb3cgKi9cblxuLy8gISEhISBVc2UgZmxhdCBhcnJheSBpbnN0ZWFkIG9mIHN0cnVjdHVyZSwgRnJlcSA9IGkqMiwgTGVuID0gaSoyKzFcbmNvbnN0IHN0YXRpY19sdHJlZSAgPSBuZXcgQXJyYXkoKExfQ09ERVMkMSArIDIpICogMik7XG56ZXJvJDEoc3RhdGljX2x0cmVlKTtcbi8qIFRoZSBzdGF0aWMgbGl0ZXJhbCB0cmVlLiBTaW5jZSB0aGUgYml0IGxlbmd0aHMgYXJlIGltcG9zZWQsIHRoZXJlIGlzIG5vXG4gKiBuZWVkIGZvciB0aGUgTF9DT0RFUyBleHRyYSBjb2RlcyB1c2VkIGR1cmluZyBoZWFwIGNvbnN0cnVjdGlvbi4gSG93ZXZlclxuICogVGhlIGNvZGVzIDI4NiBhbmQgMjg3IGFyZSBuZWVkZWQgdG8gYnVpbGQgYSBjYW5vbmljYWwgdHJlZSAoc2VlIF90cl9pbml0XG4gKiBiZWxvdykuXG4gKi9cblxuY29uc3Qgc3RhdGljX2R0cmVlICA9IG5ldyBBcnJheShEX0NPREVTJDEgKiAyKTtcbnplcm8kMShzdGF0aWNfZHRyZWUpO1xuLyogVGhlIHN0YXRpYyBkaXN0YW5jZSB0cmVlLiAoQWN0dWFsbHkgYSB0cml2aWFsIHRyZWUgc2luY2UgYWxsIGNvZGVzIHVzZVxuICogNSBiaXRzLilcbiAqL1xuXG5jb25zdCBfZGlzdF9jb2RlICAgID0gbmV3IEFycmF5KERJU1RfQ09ERV9MRU4pO1xuemVybyQxKF9kaXN0X2NvZGUpO1xuLyogRGlzdGFuY2UgY29kZXMuIFRoZSBmaXJzdCAyNTYgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGRpc3RhbmNlc1xuICogMyAuLiAyNTgsIHRoZSBsYXN0IDI1NiB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgdG9wIDggYml0cyBvZlxuICogdGhlIDE1IGJpdCBkaXN0YW5jZXMuXG4gKi9cblxuY29uc3QgX2xlbmd0aF9jb2RlICA9IG5ldyBBcnJheShNQVhfTUFUQ0gkMSAtIE1JTl9NQVRDSCQxICsgMSk7XG56ZXJvJDEoX2xlbmd0aF9jb2RlKTtcbi8qIGxlbmd0aCBjb2RlIGZvciBlYWNoIG5vcm1hbGl6ZWQgbWF0Y2ggbGVuZ3RoICgwID09IE1JTl9NQVRDSCkgKi9cblxuY29uc3QgYmFzZV9sZW5ndGggICA9IG5ldyBBcnJheShMRU5HVEhfQ09ERVMkMSk7XG56ZXJvJDEoYmFzZV9sZW5ndGgpO1xuLyogRmlyc3Qgbm9ybWFsaXplZCBsZW5ndGggZm9yIGVhY2ggY29kZSAoMCA9IE1JTl9NQVRDSCkgKi9cblxuY29uc3QgYmFzZV9kaXN0ICAgICA9IG5ldyBBcnJheShEX0NPREVTJDEpO1xuemVybyQxKGJhc2VfZGlzdCk7XG4vKiBGaXJzdCBub3JtYWxpemVkIGRpc3RhbmNlIGZvciBlYWNoIGNvZGUgKDAgPSBkaXN0YW5jZSBvZiAxKSAqL1xuXG5cbmZ1bmN0aW9uIFN0YXRpY1RyZWVEZXNjKHN0YXRpY190cmVlLCBleHRyYV9iaXRzLCBleHRyYV9iYXNlLCBlbGVtcywgbWF4X2xlbmd0aCkge1xuXG4gIHRoaXMuc3RhdGljX3RyZWUgID0gc3RhdGljX3RyZWU7ICAvKiBzdGF0aWMgdHJlZSBvciBOVUxMICovXG4gIHRoaXMuZXh0cmFfYml0cyAgID0gZXh0cmFfYml0czsgICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGNvZGUgb3IgTlVMTCAqL1xuICB0aGlzLmV4dHJhX2Jhc2UgICA9IGV4dHJhX2Jhc2U7ICAgLyogYmFzZSBpbmRleCBmb3IgZXh0cmFfYml0cyAqL1xuICB0aGlzLmVsZW1zICAgICAgICA9IGVsZW1zOyAgICAgICAgLyogbWF4IG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgdHJlZSAqL1xuICB0aGlzLm1heF9sZW5ndGggICA9IG1heF9sZW5ndGg7ICAgLyogbWF4IGJpdCBsZW5ndGggZm9yIHRoZSBjb2RlcyAqL1xuXG4gIC8vIHNob3cgaWYgYHN0YXRpY190cmVlYCBoYXMgZGF0YSBvciBkdW1teSAtIG5lZWRlZCBmb3IgbW9ub21vcnBoaWMgb2JqZWN0c1xuICB0aGlzLmhhc19zdHJlZSAgICA9IHN0YXRpY190cmVlICYmIHN0YXRpY190cmVlLmxlbmd0aDtcbn1cblxuXG5sZXQgc3RhdGljX2xfZGVzYztcbmxldCBzdGF0aWNfZF9kZXNjO1xubGV0IHN0YXRpY19ibF9kZXNjO1xuXG5cbmZ1bmN0aW9uIFRyZWVEZXNjKGR5bl90cmVlLCBzdGF0X2Rlc2MpIHtcbiAgdGhpcy5keW5fdHJlZSA9IGR5bl90cmVlOyAgICAgLyogdGhlIGR5bmFtaWMgdHJlZSAqL1xuICB0aGlzLm1heF9jb2RlID0gMDsgICAgICAgICAgICAvKiBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3kgKi9cbiAgdGhpcy5zdGF0X2Rlc2MgPSBzdGF0X2Rlc2M7ICAgLyogdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGljIHRyZWUgKi9cbn1cblxuXG5cbmNvbnN0IGRfY29kZSA9IChkaXN0KSA9PiB7XG5cbiAgcmV0dXJuIGRpc3QgPCAyNTYgPyBfZGlzdF9jb2RlW2Rpc3RdIDogX2Rpc3RfY29kZVsyNTYgKyAoZGlzdCA+Pj4gNyldO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIE91dHB1dCBhIHNob3J0IExTQiBmaXJzdCBvbiB0aGUgc3RyZWFtLlxuICogSU4gYXNzZXJ0aW9uOiB0aGVyZSBpcyBlbm91Z2ggcm9vbSBpbiBwZW5kaW5nQnVmLlxuICovXG5jb25zdCBwdXRfc2hvcnQgPSAocywgdykgPT4ge1xuLy8gICAgcHV0X2J5dGUocywgKHVjaCkoKHcpICYgMHhmZikpO1xuLy8gICAgcHV0X2J5dGUocywgKHVjaCkoKHVzaCkodykgPj4gOCkpO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9ICh3KSAmIDB4ZmY7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gKHcgPj4+IDgpICYgMHhmZjtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIGEgdmFsdWUgb24gYSBnaXZlbiBudW1iZXIgb2YgYml0cy5cbiAqIElOIGFzc2VydGlvbjogbGVuZ3RoIDw9IDE2IGFuZCB2YWx1ZSBmaXRzIGluIGxlbmd0aCBiaXRzLlxuICovXG5jb25zdCBzZW5kX2JpdHMgPSAocywgdmFsdWUsIGxlbmd0aCkgPT4ge1xuXG4gIGlmIChzLmJpX3ZhbGlkID4gKEJ1Zl9zaXplIC0gbGVuZ3RoKSkge1xuICAgIHMuYmlfYnVmIHw9ICh2YWx1ZSA8PCBzLmJpX3ZhbGlkKSAmIDB4ZmZmZjtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICAgIHMuYmlfYnVmID0gdmFsdWUgPj4gKEJ1Zl9zaXplIC0gcy5iaV92YWxpZCk7XG4gICAgcy5iaV92YWxpZCArPSBsZW5ndGggLSBCdWZfc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBzLmJpX2J1ZiB8PSAodmFsdWUgPDwgcy5iaV92YWxpZCkgJiAweGZmZmY7XG4gICAgcy5iaV92YWxpZCArPSBsZW5ndGg7XG4gIH1cbn07XG5cblxuY29uc3Qgc2VuZF9jb2RlID0gKHMsIGMsIHRyZWUpID0+IHtcblxuICBzZW5kX2JpdHMocywgdHJlZVtjICogMl0vKi5Db2RlKi8sIHRyZWVbYyAqIDIgKyAxXS8qLkxlbiovKTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBSZXZlcnNlIHRoZSBmaXJzdCBsZW4gYml0cyBvZiBhIGNvZGUsIHVzaW5nIHN0cmFpZ2h0Zm9yd2FyZCBjb2RlIChhIGZhc3RlclxuICogbWV0aG9kIHdvdWxkIHVzZSBhIHRhYmxlKVxuICogSU4gYXNzZXJ0aW9uOiAxIDw9IGxlbiA8PSAxNVxuICovXG5jb25zdCBiaV9yZXZlcnNlID0gKGNvZGUsIGxlbikgPT4ge1xuXG4gIGxldCByZXMgPSAwO1xuICBkbyB7XG4gICAgcmVzIHw9IGNvZGUgJiAxO1xuICAgIGNvZGUgPj4+PSAxO1xuICAgIHJlcyA8PD0gMTtcbiAgfSB3aGlsZSAoLS1sZW4gPiAwKTtcbiAgcmV0dXJuIHJlcyA+Pj4gMTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGbHVzaCB0aGUgYml0IGJ1ZmZlciwga2VlcGluZyBhdCBtb3N0IDcgYml0cyBpbiBpdC5cbiAqL1xuY29uc3QgYmlfZmx1c2ggPSAocykgPT4ge1xuXG4gIGlmIChzLmJpX3ZhbGlkID09PSAxNikge1xuICAgIHB1dF9zaG9ydChzLCBzLmJpX2J1Zik7XG4gICAgcy5iaV9idWYgPSAwO1xuICAgIHMuYmlfdmFsaWQgPSAwO1xuXG4gIH0gZWxzZSBpZiAocy5iaV92YWxpZCA+PSA4KSB7XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBzLmJpX2J1ZiAmIDB4ZmY7XG4gICAgcy5iaV9idWYgPj49IDg7XG4gICAgcy5iaV92YWxpZCAtPSA4O1xuICB9XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcHV0ZSB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RocyBmb3IgYSB0cmVlIGFuZCB1cGRhdGUgdGhlIHRvdGFsIGJpdCBsZW5ndGhcbiAqIGZvciB0aGUgY3VycmVudCBibG9jay5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkcyBmcmVxIGFuZCBkYWQgYXJlIHNldCwgaGVhcFtoZWFwX21heF0gYW5kXG4gKiAgICBhYm92ZSBhcmUgdGhlIHRyZWUgbm9kZXMgc29ydGVkIGJ5IGluY3JlYXNpbmcgZnJlcXVlbmN5LlxuICogT1VUIGFzc2VydGlvbnM6IHRoZSBmaWVsZCBsZW4gaXMgc2V0IHRvIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGgsIHRoZVxuICogICAgIGFycmF5IGJsX2NvdW50IGNvbnRhaW5zIHRoZSBmcmVxdWVuY2llcyBmb3IgZWFjaCBiaXQgbGVuZ3RoLlxuICogICAgIFRoZSBsZW5ndGggb3B0X2xlbiBpcyB1cGRhdGVkOyBzdGF0aWNfbGVuIGlzIGFsc28gdXBkYXRlZCBpZiBzdHJlZSBpc1xuICogICAgIG5vdCBudWxsLlxuICovXG5jb25zdCBnZW5fYml0bGVuID0gKHMsIGRlc2MpID0+IHtcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB0cmVlX2Rlc2MgKmRlc2M7ICAgIC8qIHRoZSB0cmVlIGRlc2NyaXB0b3IgKi9cblxuICBjb25zdCB0cmVlICAgICAgICAgICAgPSBkZXNjLmR5bl90cmVlO1xuICBjb25zdCBtYXhfY29kZSAgICAgICAgPSBkZXNjLm1heF9jb2RlO1xuICBjb25zdCBzdHJlZSAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcbiAgY29uc3QgaGFzX3N0cmVlICAgICAgID0gZGVzYy5zdGF0X2Rlc2MuaGFzX3N0cmVlO1xuICBjb25zdCBleHRyYSAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5leHRyYV9iaXRzO1xuICBjb25zdCBiYXNlICAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5leHRyYV9iYXNlO1xuICBjb25zdCBtYXhfbGVuZ3RoICAgICAgPSBkZXNjLnN0YXRfZGVzYy5tYXhfbGVuZ3RoO1xuICBsZXQgaDsgICAgICAgICAgICAgIC8qIGhlYXAgaW5kZXggKi9cbiAgbGV0IG4sIG07ICAgICAgICAgICAvKiBpdGVyYXRlIG92ZXIgdGhlIHRyZWUgZWxlbWVudHMgKi9cbiAgbGV0IGJpdHM7ICAgICAgICAgICAvKiBiaXQgbGVuZ3RoICovXG4gIGxldCB4Yml0czsgICAgICAgICAgLyogZXh0cmEgYml0cyAqL1xuICBsZXQgZjsgICAgICAgICAgICAgIC8qIGZyZXF1ZW5jeSAqL1xuICBsZXQgb3ZlcmZsb3cgPSAwOyAgIC8qIG51bWJlciBvZiBlbGVtZW50cyB3aXRoIGJpdCBsZW5ndGggdG9vIGxhcmdlICovXG5cbiAgZm9yIChiaXRzID0gMDsgYml0cyA8PSBNQVhfQklUUyQxOyBiaXRzKyspIHtcbiAgICBzLmJsX2NvdW50W2JpdHNdID0gMDtcbiAgfVxuXG4gIC8qIEluIGEgZmlyc3QgcGFzcywgY29tcHV0ZSB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RocyAod2hpY2ggbWF5XG4gICAqIG92ZXJmbG93IGluIHRoZSBjYXNlIG9mIHRoZSBiaXQgbGVuZ3RoIHRyZWUpLlxuICAgKi9cbiAgdHJlZVtzLmhlYXBbcy5oZWFwX21heF0gKiAyICsgMV0vKi5MZW4qLyA9IDA7IC8qIHJvb3Qgb2YgdGhlIGhlYXAgKi9cblxuICBmb3IgKGggPSBzLmhlYXBfbWF4ICsgMTsgaCA8IEhFQVBfU0laRSQxOyBoKyspIHtcbiAgICBuID0gcy5oZWFwW2hdO1xuICAgIGJpdHMgPSB0cmVlW3RyZWVbbiAqIDIgKyAxXS8qLkRhZCovICogMiArIDFdLyouTGVuKi8gKyAxO1xuICAgIGlmIChiaXRzID4gbWF4X2xlbmd0aCkge1xuICAgICAgYml0cyA9IG1heF9sZW5ndGg7XG4gICAgICBvdmVyZmxvdysrO1xuICAgIH1cbiAgICB0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IGJpdHM7XG4gICAgLyogV2Ugb3ZlcndyaXRlIHRyZWVbbl0uRGFkIHdoaWNoIGlzIG5vIGxvbmdlciBuZWVkZWQgKi9cblxuICAgIGlmIChuID4gbWF4X2NvZGUpIHsgY29udGludWU7IH0gLyogbm90IGEgbGVhZiBub2RlICovXG5cbiAgICBzLmJsX2NvdW50W2JpdHNdKys7XG4gICAgeGJpdHMgPSAwO1xuICAgIGlmIChuID49IGJhc2UpIHtcbiAgICAgIHhiaXRzID0gZXh0cmFbbiAtIGJhc2VdO1xuICAgIH1cbiAgICBmID0gdHJlZVtuICogMl0vKi5GcmVxKi87XG4gICAgcy5vcHRfbGVuICs9IGYgKiAoYml0cyArIHhiaXRzKTtcbiAgICBpZiAoaGFzX3N0cmVlKSB7XG4gICAgICBzLnN0YXRpY19sZW4gKz0gZiAqIChzdHJlZVtuICogMiArIDFdLyouTGVuKi8gKyB4Yml0cyk7XG4gICAgfVxuICB9XG4gIGlmIChvdmVyZmxvdyA9PT0gMCkgeyByZXR1cm47IH1cblxuICAvLyBUcmFjZXYoKHN0ZGVycixcIlxcbmJpdCBsZW5ndGggb3ZlcmZsb3dcXG5cIikpO1xuICAvKiBUaGlzIGhhcHBlbnMgZm9yIGV4YW1wbGUgb24gb2JqMiBhbmQgcGljIG9mIHRoZSBDYWxnYXJ5IGNvcnB1cyAqL1xuXG4gIC8qIEZpbmQgdGhlIGZpcnN0IGJpdCBsZW5ndGggd2hpY2ggY291bGQgaW5jcmVhc2U6ICovXG4gIGRvIHtcbiAgICBiaXRzID0gbWF4X2xlbmd0aCAtIDE7XG4gICAgd2hpbGUgKHMuYmxfY291bnRbYml0c10gPT09IDApIHsgYml0cy0tOyB9XG4gICAgcy5ibF9jb3VudFtiaXRzXS0tOyAgICAgIC8qIG1vdmUgb25lIGxlYWYgZG93biB0aGUgdHJlZSAqL1xuICAgIHMuYmxfY291bnRbYml0cyArIDFdICs9IDI7IC8qIG1vdmUgb25lIG92ZXJmbG93IGl0ZW0gYXMgaXRzIGJyb3RoZXIgKi9cbiAgICBzLmJsX2NvdW50W21heF9sZW5ndGhdLS07XG4gICAgLyogVGhlIGJyb3RoZXIgb2YgdGhlIG92ZXJmbG93IGl0ZW0gYWxzbyBtb3ZlcyBvbmUgc3RlcCB1cCxcbiAgICAgKiBidXQgdGhpcyBkb2VzIG5vdCBhZmZlY3QgYmxfY291bnRbbWF4X2xlbmd0aF1cbiAgICAgKi9cbiAgICBvdmVyZmxvdyAtPSAyO1xuICB9IHdoaWxlIChvdmVyZmxvdyA+IDApO1xuXG4gIC8qIE5vdyByZWNvbXB1dGUgYWxsIGJpdCBsZW5ndGhzLCBzY2FubmluZyBpbiBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cbiAgICogaCBpcyBzdGlsbCBlcXVhbCB0byBIRUFQX1NJWkUuIChJdCBpcyBzaW1wbGVyIHRvIHJlY29uc3RydWN0IGFsbFxuICAgKiBsZW5ndGhzIGluc3RlYWQgb2YgZml4aW5nIG9ubHkgdGhlIHdyb25nIG9uZXMuIFRoaXMgaWRlYSBpcyB0YWtlblxuICAgKiBmcm9tICdhcicgd3JpdHRlbiBieSBIYXJ1aGlrbyBPa3VtdXJhLilcbiAgICovXG4gIGZvciAoYml0cyA9IG1heF9sZW5ndGg7IGJpdHMgIT09IDA7IGJpdHMtLSkge1xuICAgIG4gPSBzLmJsX2NvdW50W2JpdHNdO1xuICAgIHdoaWxlIChuICE9PSAwKSB7XG4gICAgICBtID0gcy5oZWFwWy0taF07XG4gICAgICBpZiAobSA+IG1heF9jb2RlKSB7IGNvbnRpbnVlOyB9XG4gICAgICBpZiAodHJlZVttICogMiArIDFdLyouTGVuKi8gIT09IGJpdHMpIHtcbiAgICAgICAgLy8gVHJhY2V2KChzdGRlcnIsXCJjb2RlICVkIGJpdHMgJWQtPiVkXFxuXCIsIG0sIHRyZWVbbV0uTGVuLCBiaXRzKSk7XG4gICAgICAgIHMub3B0X2xlbiArPSAoYml0cyAtIHRyZWVbbSAqIDIgKyAxXS8qLkxlbiovKSAqIHRyZWVbbSAqIDJdLyouRnJlcSovO1xuICAgICAgICB0cmVlW20gKiAyICsgMV0vKi5MZW4qLyA9IGJpdHM7XG4gICAgICB9XG4gICAgICBuLS07XG4gICAgfVxuICB9XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogR2VuZXJhdGUgdGhlIGNvZGVzIGZvciBhIGdpdmVuIHRyZWUgYW5kIGJpdCBjb3VudHMgKHdoaWNoIG5lZWQgbm90IGJlXG4gKiBvcHRpbWFsKS5cbiAqIElOIGFzc2VydGlvbjogdGhlIGFycmF5IGJsX2NvdW50IGNvbnRhaW5zIHRoZSBiaXQgbGVuZ3RoIHN0YXRpc3RpY3MgZm9yXG4gKiB0aGUgZ2l2ZW4gdHJlZSBhbmQgdGhlIGZpZWxkIGxlbiBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzLlxuICogT1VUIGFzc2VydGlvbjogdGhlIGZpZWxkIGNvZGUgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cyBvZiBub25cbiAqICAgICB6ZXJvIGNvZGUgbGVuZ3RoLlxuICovXG5jb25zdCBnZW5fY29kZXMgPSAodHJlZSwgbWF4X2NvZGUsIGJsX2NvdW50KSA9PiB7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAgICAgICAgICAgICAvKiB0aGUgdHJlZSB0byBkZWNvcmF0ZSAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAgICAgICAgICAgLyogbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5ICovXG4vLyAgICB1c2hmICpibF9jb3VudDsgICAgICAgICAgICAvKiBudW1iZXIgb2YgY29kZXMgYXQgZWFjaCBiaXQgbGVuZ3RoICovXG5cbiAgY29uc3QgbmV4dF9jb2RlID0gbmV3IEFycmF5KE1BWF9CSVRTJDEgKyAxKTsgLyogbmV4dCBjb2RlIHZhbHVlIGZvciBlYWNoIGJpdCBsZW5ndGggKi9cbiAgbGV0IGNvZGUgPSAwOyAgICAgICAgICAgICAgLyogcnVubmluZyBjb2RlIHZhbHVlICovXG4gIGxldCBiaXRzOyAgICAgICAgICAgICAgICAgIC8qIGJpdCBpbmRleCAqL1xuICBsZXQgbjsgICAgICAgICAgICAgICAgICAgICAvKiBjb2RlIGluZGV4ICovXG5cbiAgLyogVGhlIGRpc3RyaWJ1dGlvbiBjb3VudHMgYXJlIGZpcnN0IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGNvZGUgdmFsdWVzXG4gICAqIHdpdGhvdXQgYml0IHJldmVyc2FsLlxuICAgKi9cbiAgZm9yIChiaXRzID0gMTsgYml0cyA8PSBNQVhfQklUUyQxOyBiaXRzKyspIHtcbiAgICBjb2RlID0gKGNvZGUgKyBibF9jb3VudFtiaXRzIC0gMV0pIDw8IDE7XG4gICAgbmV4dF9jb2RlW2JpdHNdID0gY29kZTtcbiAgfVxuICAvKiBDaGVjayB0aGF0IHRoZSBiaXQgY291bnRzIGluIGJsX2NvdW50IGFyZSBjb25zaXN0ZW50LiBUaGUgbGFzdCBjb2RlXG4gICAqIG11c3QgYmUgYWxsIG9uZXMuXG4gICAqL1xuICAvL0Fzc2VydCAoY29kZSArIGJsX2NvdW50W01BWF9CSVRTXS0xID09ICgxPDxNQVhfQklUUyktMSxcbiAgLy8gICAgICAgIFwiaW5jb25zaXN0ZW50IGJpdCBjb3VudHNcIik7XG4gIC8vVHJhY2V2KChzdGRlcnIsXCJcXG5nZW5fY29kZXM6IG1heF9jb2RlICVkIFwiLCBtYXhfY29kZSkpO1xuXG4gIGZvciAobiA9IDA7ICBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICBsZXQgbGVuID0gdHJlZVtuICogMiArIDFdLyouTGVuKi87XG4gICAgaWYgKGxlbiA9PT0gMCkgeyBjb250aW51ZTsgfVxuICAgIC8qIE5vdyByZXZlcnNlIHRoZSBiaXRzICovXG4gICAgdHJlZVtuICogMl0vKi5Db2RlKi8gPSBiaV9yZXZlcnNlKG5leHRfY29kZVtsZW5dKyssIGxlbik7XG5cbiAgICAvL1RyYWNlY3YodHJlZSAhPSBzdGF0aWNfbHRyZWUsIChzdGRlcnIsXCJcXG5uICUzZCAlYyBsICUyZCBjICU0eCAoJXgpIFwiLFxuICAgIC8vICAgICBuLCAoaXNncmFwaChuKSA/IG4gOiAnICcpLCBsZW4sIHRyZWVbbl0uQ29kZSwgbmV4dF9jb2RlW2xlbl0tMSkpO1xuICB9XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgdmFyaW91cyAnY29uc3RhbnQnIHRhYmxlcy5cbiAqL1xuY29uc3QgdHJfc3RhdGljX2luaXQgPSAoKSA9PiB7XG5cbiAgbGV0IG47ICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIHRyZWUgZWxlbWVudHMgKi9cbiAgbGV0IGJpdHM7ICAgICAvKiBiaXQgY291bnRlciAqL1xuICBsZXQgbGVuZ3RoOyAgIC8qIGxlbmd0aCB2YWx1ZSAqL1xuICBsZXQgY29kZTsgICAgIC8qIGNvZGUgdmFsdWUgKi9cbiAgbGV0IGRpc3Q7ICAgICAvKiBkaXN0YW5jZSBpbmRleCAqL1xuICBjb25zdCBibF9jb3VudCA9IG5ldyBBcnJheShNQVhfQklUUyQxICsgMSk7XG4gIC8qIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggZm9yIGFuIG9wdGltYWwgdHJlZSAqL1xuXG4gIC8vIGRvIGNoZWNrIGluIF90cl9pbml0KClcbiAgLy9pZiAoc3RhdGljX2luaXRfZG9uZSkgcmV0dXJuO1xuXG4gIC8qIEZvciBzb21lIGVtYmVkZGVkIHRhcmdldHMsIGdsb2JhbCB2YXJpYWJsZXMgYXJlIG5vdCBpbml0aWFsaXplZDogKi9cbi8qI2lmZGVmIE5PX0lOSVRfR0xPQkFMX1BPSU5URVJTXG4gIHN0YXRpY19sX2Rlc2Muc3RhdGljX3RyZWUgPSBzdGF0aWNfbHRyZWU7XG4gIHN0YXRpY19sX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2xiaXRzO1xuICBzdGF0aWNfZF9kZXNjLnN0YXRpY190cmVlID0gc3RhdGljX2R0cmVlO1xuICBzdGF0aWNfZF9kZXNjLmV4dHJhX2JpdHMgPSBleHRyYV9kYml0cztcbiAgc3RhdGljX2JsX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2JsYml0cztcbiNlbmRpZiovXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBsZW5ndGggKDAuLjI1NSkgLT4gbGVuZ3RoIGNvZGUgKDAuLjI4KSAqL1xuICBsZW5ndGggPSAwO1xuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgTEVOR1RIX0NPREVTJDEgLSAxOyBjb2RlKyspIHtcbiAgICBiYXNlX2xlbmd0aFtjb2RlXSA9IGxlbmd0aDtcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgZXh0cmFfbGJpdHNbY29kZV0pOyBuKyspIHtcbiAgICAgIF9sZW5ndGhfY29kZVtsZW5ndGgrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAobGVuZ3RoID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogbGVuZ3RoICE9IDI1NlwiKTtcbiAgLyogTm90ZSB0aGF0IHRoZSBsZW5ndGggMjU1IChtYXRjaCBsZW5ndGggMjU4KSBjYW4gYmUgcmVwcmVzZW50ZWRcbiAgICogaW4gdHdvIGRpZmZlcmVudCB3YXlzOiBjb2RlIDI4NCArIDUgYml0cyBvciBjb2RlIDI4NSwgc28gd2VcbiAgICogb3ZlcndyaXRlIGxlbmd0aF9jb2RlWzI1NV0gdG8gdXNlIHRoZSBiZXN0IGVuY29kaW5nOlxuICAgKi9cbiAgX2xlbmd0aF9jb2RlW2xlbmd0aCAtIDFdID0gY29kZTtcblxuICAvKiBJbml0aWFsaXplIHRoZSBtYXBwaW5nIGRpc3QgKDAuLjMySykgLT4gZGlzdCBjb2RlICgwLi4yOSkgKi9cbiAgZGlzdCA9IDA7XG4gIGZvciAoY29kZSA9IDA7IGNvZGUgPCAxNjsgY29kZSsrKSB7XG4gICAgYmFzZV9kaXN0W2NvZGVdID0gZGlzdDtcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgZXh0cmFfZGJpdHNbY29kZV0pOyBuKyspIHtcbiAgICAgIF9kaXN0X2NvZGVbZGlzdCsrXSA9IGNvZGU7XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0IChkaXN0ID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogZGlzdCAhPSAyNTZcIik7XG4gIGRpc3QgPj49IDc7IC8qIGZyb20gbm93IG9uLCBhbGwgZGlzdGFuY2VzIGFyZSBkaXZpZGVkIGJ5IDEyOCAqL1xuICBmb3IgKDsgY29kZSA8IERfQ09ERVMkMTsgY29kZSsrKSB7XG4gICAgYmFzZV9kaXN0W2NvZGVdID0gZGlzdCA8PCA3O1xuICAgIGZvciAobiA9IDA7IG4gPCAoMSA8PCAoZXh0cmFfZGJpdHNbY29kZV0gLSA3KSk7IG4rKykge1xuICAgICAgX2Rpc3RfY29kZVsyNTYgKyBkaXN0KytdID0gY29kZTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGRpc3QgPT0gMjU2LCBcInRyX3N0YXRpY19pbml0OiAyNTYrZGlzdCAhPSA1MTJcIik7XG5cbiAgLyogQ29uc3RydWN0IHRoZSBjb2RlcyBvZiB0aGUgc3RhdGljIGxpdGVyYWwgdHJlZSAqL1xuICBmb3IgKGJpdHMgPSAwOyBiaXRzIDw9IE1BWF9CSVRTJDE7IGJpdHMrKykge1xuICAgIGJsX2NvdW50W2JpdHNdID0gMDtcbiAgfVxuXG4gIG4gPSAwO1xuICB3aGlsZSAobiA8PSAxNDMpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNTUpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gOTtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOV0rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyNzkpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gNztcbiAgICBuKys7XG4gICAgYmxfY291bnRbN10rKztcbiAgfVxuICB3aGlsZSAobiA8PSAyODcpIHtcbiAgICBzdGF0aWNfbHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gODtcbiAgICBuKys7XG4gICAgYmxfY291bnRbOF0rKztcbiAgfVxuICAvKiBDb2RlcyAyODYgYW5kIDI4NyBkbyBub3QgZXhpc3QsIGJ1dCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGVcbiAgICogdHJlZSBjb25zdHJ1Y3Rpb24gdG8gZ2V0IGEgY2Fub25pY2FsIEh1ZmZtYW4gdHJlZSAobG9uZ2VzdCBjb2RlXG4gICAqIGFsbCBvbmVzKVxuICAgKi9cbiAgZ2VuX2NvZGVzKHN0YXRpY19sdHJlZSwgTF9DT0RFUyQxICsgMSwgYmxfY291bnQpO1xuXG4gIC8qIFRoZSBzdGF0aWMgZGlzdGFuY2UgdHJlZSBpcyB0cml2aWFsOiAqL1xuICBmb3IgKG4gPSAwOyBuIDwgRF9DT0RFUyQxOyBuKyspIHtcbiAgICBzdGF0aWNfZHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gNTtcbiAgICBzdGF0aWNfZHRyZWVbbiAqIDJdLyouQ29kZSovID0gYmlfcmV2ZXJzZShuLCA1KTtcbiAgfVxuXG4gIC8vIE5vdyBkYXRhIHJlYWR5IGFuZCB3ZSBjYW4gaW5pdCBzdGF0aWMgdHJlZXNcbiAgc3RhdGljX2xfZGVzYyA9IG5ldyBTdGF0aWNUcmVlRGVzYyhzdGF0aWNfbHRyZWUsIGV4dHJhX2xiaXRzLCBMSVRFUkFMUyQxICsgMSwgTF9DT0RFUyQxLCBNQVhfQklUUyQxKTtcbiAgc3RhdGljX2RfZGVzYyA9IG5ldyBTdGF0aWNUcmVlRGVzYyhzdGF0aWNfZHRyZWUsIGV4dHJhX2RiaXRzLCAwLCAgICAgICAgICBEX0NPREVTJDEsIE1BWF9CSVRTJDEpO1xuICBzdGF0aWNfYmxfZGVzYyA9IG5ldyBTdGF0aWNUcmVlRGVzYyhuZXcgQXJyYXkoMCksIGV4dHJhX2JsYml0cywgMCwgICAgICAgICBCTF9DT0RFUyQxLCBNQVhfQkxfQklUUyk7XG5cbiAgLy9zdGF0aWNfaW5pdF9kb25lID0gdHJ1ZTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIGEgbmV3IGJsb2NrLlxuICovXG5jb25zdCBpbml0X2Jsb2NrID0gKHMpID0+IHtcblxuICBsZXQgbjsgLyogaXRlcmF0ZXMgb3ZlciB0cmVlIGVsZW1lbnRzICovXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgdHJlZXMuICovXG4gIGZvciAobiA9IDA7IG4gPCBMX0NPREVTJDE7ICBuKyspIHsgcy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovID0gMDsgfVxuICBmb3IgKG4gPSAwOyBuIDwgRF9DT0RFUyQxOyAgbisrKSB7IHMuZHluX2R0cmVlW24gKiAyXS8qLkZyZXEqLyA9IDA7IH1cbiAgZm9yIChuID0gMDsgbiA8IEJMX0NPREVTJDE7IG4rKykgeyBzLmJsX3RyZWVbbiAqIDJdLyouRnJlcSovID0gMDsgfVxuXG4gIHMuZHluX2x0cmVlW0VORF9CTE9DSyAqIDJdLyouRnJlcSovID0gMTtcbiAgcy5vcHRfbGVuID0gcy5zdGF0aWNfbGVuID0gMDtcbiAgcy5zeW1fbmV4dCA9IHMubWF0Y2hlcyA9IDA7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggdGhlIGJpdCBidWZmZXIgYW5kIGFsaWduIHRoZSBvdXRwdXQgb24gYSBieXRlIGJvdW5kYXJ5XG4gKi9cbmNvbnN0IGJpX3dpbmR1cCA9IChzKSA9Plxue1xuICBpZiAocy5iaV92YWxpZCA+IDgpIHtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICB9IGVsc2UgaWYgKHMuYmlfdmFsaWQgPiAwKSB7XG4gICAgLy9wdXRfYnl0ZShzLCAoQnl0ZSlzLT5iaV9idWYpO1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gcy5iaV9idWY7XG4gIH1cbiAgcy5iaV9idWYgPSAwO1xuICBzLmJpX3ZhbGlkID0gMDtcbn07XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcGFyZXMgdG8gc3VidHJlZXMsIHVzaW5nIHRoZSB0cmVlIGRlcHRoIGFzIHRpZSBicmVha2VyIHdoZW5cbiAqIHRoZSBzdWJ0cmVlcyBoYXZlIGVxdWFsIGZyZXF1ZW5jeS4gVGhpcyBtaW5pbWl6ZXMgdGhlIHdvcnN0IGNhc2UgbGVuZ3RoLlxuICovXG5jb25zdCBzbWFsbGVyID0gKHRyZWUsIG4sIG0sIGRlcHRoKSA9PiB7XG5cbiAgY29uc3QgX24yID0gbiAqIDI7XG4gIGNvbnN0IF9tMiA9IG0gKiAyO1xuICByZXR1cm4gKHRyZWVbX24yXS8qLkZyZXEqLyA8IHRyZWVbX20yXS8qLkZyZXEqLyB8fFxuICAgICAgICAgKHRyZWVbX24yXS8qLkZyZXEqLyA9PT0gdHJlZVtfbTJdLyouRnJlcSovICYmIGRlcHRoW25dIDw9IGRlcHRoW21dKSk7XG59O1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFJlc3RvcmUgdGhlIGhlYXAgcHJvcGVydHkgYnkgbW92aW5nIGRvd24gdGhlIHRyZWUgc3RhcnRpbmcgYXQgbm9kZSBrLFxuICogZXhjaGFuZ2luZyBhIG5vZGUgd2l0aCB0aGUgc21hbGxlc3Qgb2YgaXRzIHR3byBzb25zIGlmIG5lY2Vzc2FyeSwgc3RvcHBpbmdcbiAqIHdoZW4gdGhlIGhlYXAgcHJvcGVydHkgaXMgcmUtZXN0YWJsaXNoZWQgKGVhY2ggZmF0aGVyIHNtYWxsZXIgdGhhbiBpdHNcbiAqIHR3byBzb25zKS5cbiAqL1xuY29uc3QgcHFkb3duaGVhcCA9IChzLCB0cmVlLCBrKSA9PiB7XG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgIC8qIHRoZSB0cmVlIHRvIHJlc3RvcmUgKi9cbi8vICAgIGludCBrOyAgICAgICAgICAgICAgIC8qIG5vZGUgdG8gbW92ZSBkb3duICovXG5cbiAgY29uc3QgdiA9IHMuaGVhcFtrXTtcbiAgbGV0IGogPSBrIDw8IDE7ICAvKiBsZWZ0IHNvbiBvZiBrICovXG4gIHdoaWxlIChqIDw9IHMuaGVhcF9sZW4pIHtcbiAgICAvKiBTZXQgaiB0byB0aGUgc21hbGxlc3Qgb2YgdGhlIHR3byBzb25zOiAqL1xuICAgIGlmIChqIDwgcy5oZWFwX2xlbiAmJlxuICAgICAgc21hbGxlcih0cmVlLCBzLmhlYXBbaiArIDFdLCBzLmhlYXBbal0sIHMuZGVwdGgpKSB7XG4gICAgICBqKys7XG4gICAgfVxuICAgIC8qIEV4aXQgaWYgdiBpcyBzbWFsbGVyIHRoYW4gYm90aCBzb25zICovXG4gICAgaWYgKHNtYWxsZXIodHJlZSwgdiwgcy5oZWFwW2pdLCBzLmRlcHRoKSkgeyBicmVhazsgfVxuXG4gICAgLyogRXhjaGFuZ2UgdiB3aXRoIHRoZSBzbWFsbGVzdCBzb24gKi9cbiAgICBzLmhlYXBba10gPSBzLmhlYXBbal07XG4gICAgayA9IGo7XG5cbiAgICAvKiBBbmQgY29udGludWUgZG93biB0aGUgdHJlZSwgc2V0dGluZyBqIHRvIHRoZSBsZWZ0IHNvbiBvZiBrICovXG4gICAgaiA8PD0gMTtcbiAgfVxuICBzLmhlYXBba10gPSB2O1xufTtcblxuXG4vLyBpbmxpbmVkIG1hbnVhbGx5XG4vLyBjb25zdCBTTUFMTEVTVCA9IDE7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCB0aGUgYmxvY2sgZGF0YSBjb21wcmVzc2VkIHVzaW5nIHRoZSBnaXZlbiBIdWZmbWFuIHRyZWVzXG4gKi9cbmNvbnN0IGNvbXByZXNzX2Jsb2NrID0gKHMsIGx0cmVlLCBkdHJlZSkgPT4ge1xuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGNvbnN0IGN0X2RhdGEgKmx0cmVlOyAvKiBsaXRlcmFsIHRyZWUgKi9cbi8vICAgIGNvbnN0IGN0X2RhdGEgKmR0cmVlOyAvKiBkaXN0YW5jZSB0cmVlICovXG5cbiAgbGV0IGRpc3Q7ICAgICAgICAgICAvKiBkaXN0YW5jZSBvZiBtYXRjaGVkIHN0cmluZyAqL1xuICBsZXQgbGM7ICAgICAgICAgICAgIC8qIG1hdGNoIGxlbmd0aCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdCA9PSAwKSAqL1xuICBsZXQgc3ggPSAwOyAgICAgICAgIC8qIHJ1bm5pbmcgaW5kZXggaW4gc3ltX2J1ZiAqL1xuICBsZXQgY29kZTsgICAgICAgICAgIC8qIHRoZSBjb2RlIHRvIHNlbmQgKi9cbiAgbGV0IGV4dHJhOyAgICAgICAgICAvKiBudW1iZXIgb2YgZXh0cmEgYml0cyB0byBzZW5kICovXG5cbiAgaWYgKHMuc3ltX25leHQgIT09IDApIHtcbiAgICBkbyB7XG4gICAgICBkaXN0ID0gcy5wZW5kaW5nX2J1ZltzLnN5bV9idWYgKyBzeCsrXSAmIDB4ZmY7XG4gICAgICBkaXN0ICs9IChzLnBlbmRpbmdfYnVmW3Muc3ltX2J1ZiArIHN4KytdICYgMHhmZikgPDwgODtcbiAgICAgIGxjID0gcy5wZW5kaW5nX2J1ZltzLnN5bV9idWYgKyBzeCsrXTtcbiAgICAgIGlmIChkaXN0ID09PSAwKSB7XG4gICAgICAgIHNlbmRfY29kZShzLCBsYywgbHRyZWUpOyAvKiBzZW5kIGEgbGl0ZXJhbCBieXRlICovXG4gICAgICAgIC8vVHJhY2Vjdihpc2dyYXBoKGxjKSwgKHN0ZGVycixcIiAnJWMnIFwiLCBsYykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSCAqL1xuICAgICAgICBjb2RlID0gX2xlbmd0aF9jb2RlW2xjXTtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGNvZGUgKyBMSVRFUkFMUyQxICsgMSwgbHRyZWUpOyAvKiBzZW5kIHRoZSBsZW5ndGggY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2xiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBsYyAtPSBiYXNlX2xlbmd0aFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgbGMsIGV4dHJhKTsgICAgICAgLyogc2VuZCB0aGUgZXh0cmEgbGVuZ3RoIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgICBkaXN0LS07IC8qIGRpc3QgaXMgbm93IHRoZSBtYXRjaCBkaXN0YW5jZSAtIDEgKi9cbiAgICAgICAgY29kZSA9IGRfY29kZShkaXN0KTtcbiAgICAgICAgLy9Bc3NlcnQgKGNvZGUgPCBEX0NPREVTLCBcImJhZCBkX2NvZGVcIik7XG5cbiAgICAgICAgc2VuZF9jb2RlKHMsIGNvZGUsIGR0cmVlKTsgICAgICAgLyogc2VuZCB0aGUgZGlzdGFuY2UgY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2RiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBkaXN0IC09IGJhc2VfZGlzdFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgZGlzdCwgZXh0cmEpOyAgIC8qIHNlbmQgdGhlIGV4dHJhIGRpc3RhbmNlIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgfSAvKiBsaXRlcmFsIG9yIG1hdGNoIHBhaXIgPyAqL1xuXG4gICAgICAvKiBDaGVjayB0aGF0IHRoZSBvdmVybGF5IGJldHdlZW4gcGVuZGluZ19idWYgYW5kIHN5bV9idWYgaXMgb2s6ICovXG4gICAgICAvL0Fzc2VydChzLT5wZW5kaW5nIDwgcy0+bGl0X2J1ZnNpemUgKyBzeCwgXCJwZW5kaW5nQnVmIG92ZXJmbG93XCIpO1xuXG4gICAgfSB3aGlsZSAoc3ggPCBzLnN5bV9uZXh0KTtcbiAgfVxuXG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIGx0cmVlKTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdHJ1Y3Qgb25lIEh1ZmZtYW4gdHJlZSBhbmQgYXNzaWducyB0aGUgY29kZSBiaXQgc3RyaW5ncyBhbmQgbGVuZ3Rocy5cbiAqIFVwZGF0ZSB0aGUgdG90YWwgYml0IGxlbmd0aCBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZCBmcmVxIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG4gKiBPVVQgYXNzZXJ0aW9uczogdGhlIGZpZWxkcyBsZW4gYW5kIGNvZGUgYXJlIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoXG4gKiAgICAgYW5kIGNvcnJlc3BvbmRpbmcgY29kZS4gVGhlIGxlbmd0aCBvcHRfbGVuIGlzIHVwZGF0ZWQ7IHN0YXRpY19sZW4gaXNcbiAqICAgICBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXMgbm90IG51bGwuIFRoZSBmaWVsZCBtYXhfY29kZSBpcyBzZXQuXG4gKi9cbmNvbnN0IGJ1aWxkX3RyZWUgPSAocywgZGVzYykgPT4ge1xuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIHRyZWVfZGVzYyAqZGVzYzsgLyogdGhlIHRyZWUgZGVzY3JpcHRvciAqL1xuXG4gIGNvbnN0IHRyZWUgICAgID0gZGVzYy5keW5fdHJlZTtcbiAgY29uc3Qgc3RyZWUgICAgPSBkZXNjLnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcbiAgY29uc3QgaGFzX3N0cmVlID0gZGVzYy5zdGF0X2Rlc2MuaGFzX3N0cmVlO1xuICBjb25zdCBlbGVtcyAgICA9IGRlc2Muc3RhdF9kZXNjLmVsZW1zO1xuICBsZXQgbiwgbTsgICAgICAgICAgLyogaXRlcmF0ZSBvdmVyIGhlYXAgZWxlbWVudHMgKi9cbiAgbGV0IG1heF9jb2RlID0gLTE7IC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuICBsZXQgbm9kZTsgICAgICAgICAgLyogbmV3IG5vZGUgYmVpbmcgY3JlYXRlZCAqL1xuXG4gIC8qIENvbnN0cnVjdCB0aGUgaW5pdGlhbCBoZWFwLCB3aXRoIGxlYXN0IGZyZXF1ZW50IGVsZW1lbnQgaW5cbiAgICogaGVhcFtTTUFMTEVTVF0uIFRoZSBzb25zIG9mIGhlYXBbbl0gYXJlIGhlYXBbMipuXSBhbmQgaGVhcFsyKm4rMV0uXG4gICAqIGhlYXBbMF0gaXMgbm90IHVzZWQuXG4gICAqL1xuICBzLmhlYXBfbGVuID0gMDtcbiAgcy5oZWFwX21heCA9IEhFQVBfU0laRSQxO1xuXG4gIGZvciAobiA9IDA7IG4gPCBlbGVtczsgbisrKSB7XG4gICAgaWYgKHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgICBzLmhlYXBbKytzLmhlYXBfbGVuXSA9IG1heF9jb2RlID0gbjtcbiAgICAgIHMuZGVwdGhbbl0gPSAwO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gMDtcbiAgICB9XG4gIH1cblxuICAvKiBUaGUgcGt6aXAgZm9ybWF0IHJlcXVpcmVzIHRoYXQgYXQgbGVhc3Qgb25lIGRpc3RhbmNlIGNvZGUgZXhpc3RzLFxuICAgKiBhbmQgdGhhdCBhdCBsZWFzdCBvbmUgYml0IHNob3VsZCBiZSBzZW50IGV2ZW4gaWYgdGhlcmUgaXMgb25seSBvbmVcbiAgICogcG9zc2libGUgY29kZS4gU28gdG8gYXZvaWQgc3BlY2lhbCBjaGVja3MgbGF0ZXIgb24gd2UgZm9yY2UgYXQgbGVhc3RcbiAgICogdHdvIGNvZGVzIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeS5cbiAgICovXG4gIHdoaWxlIChzLmhlYXBfbGVuIDwgMikge1xuICAgIG5vZGUgPSBzLmhlYXBbKytzLmhlYXBfbGVuXSA9IChtYXhfY29kZSA8IDIgPyArK21heF9jb2RlIDogMCk7XG4gICAgdHJlZVtub2RlICogMl0vKi5GcmVxKi8gPSAxO1xuICAgIHMuZGVwdGhbbm9kZV0gPSAwO1xuICAgIHMub3B0X2xlbi0tO1xuXG4gICAgaWYgKGhhc19zdHJlZSkge1xuICAgICAgcy5zdGF0aWNfbGVuIC09IHN0cmVlW25vZGUgKiAyICsgMV0vKi5MZW4qLztcbiAgICB9XG4gICAgLyogbm9kZSBpcyAwIG9yIDEgc28gaXQgZG9lcyBub3QgaGF2ZSBleHRyYSBiaXRzICovXG4gIH1cbiAgZGVzYy5tYXhfY29kZSA9IG1heF9jb2RlO1xuXG4gIC8qIFRoZSBlbGVtZW50cyBoZWFwW2hlYXBfbGVuLzIrMSAuLiBoZWFwX2xlbl0gYXJlIGxlYXZlcyBvZiB0aGUgdHJlZSxcbiAgICogZXN0YWJsaXNoIHN1Yi1oZWFwcyBvZiBpbmNyZWFzaW5nIGxlbmd0aHM6XG4gICAqL1xuICBmb3IgKG4gPSAocy5oZWFwX2xlbiA+PiAxLyppbnQgLzIqLyk7IG4gPj0gMTsgbi0tKSB7IHBxZG93bmhlYXAocywgdHJlZSwgbik7IH1cblxuICAvKiBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBieSByZXBlYXRlZGx5IGNvbWJpbmluZyB0aGUgbGVhc3QgdHdvXG4gICAqIGZyZXF1ZW50IG5vZGVzLlxuICAgKi9cbiAgbm9kZSA9IGVsZW1zOyAgICAgICAgICAgICAgLyogbmV4dCBpbnRlcm5hbCBub2RlIG9mIHRoZSB0cmVlICovXG4gIGRvIHtcbiAgICAvL3BxcmVtb3ZlKHMsIHRyZWUsIG4pOyAgLyogbiA9IG5vZGUgb2YgbGVhc3QgZnJlcXVlbmN5ICovXG4gICAgLyoqKiBwcXJlbW92ZSAqKiovXG4gICAgbiA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTtcbiAgICBzLmhlYXBbMS8qU01BTExFU1QqL10gPSBzLmhlYXBbcy5oZWFwX2xlbi0tXTtcbiAgICBwcWRvd25oZWFwKHMsIHRyZWUsIDEvKlNNQUxMRVNUKi8pO1xuICAgIC8qKiovXG5cbiAgICBtID0gcy5oZWFwWzEvKlNNQUxMRVNUKi9dOyAvKiBtID0gbm9kZSBvZiBuZXh0IGxlYXN0IGZyZXF1ZW5jeSAqL1xuXG4gICAgcy5oZWFwWy0tcy5oZWFwX21heF0gPSBuOyAvKiBrZWVwIHRoZSBub2RlcyBzb3J0ZWQgYnkgZnJlcXVlbmN5ICovXG4gICAgcy5oZWFwWy0tcy5oZWFwX21heF0gPSBtO1xuXG4gICAgLyogQ3JlYXRlIGEgbmV3IG5vZGUgZmF0aGVyIG9mIG4gYW5kIG0gKi9cbiAgICB0cmVlW25vZGUgKiAyXS8qLkZyZXEqLyA9IHRyZWVbbiAqIDJdLyouRnJlcSovICsgdHJlZVttICogMl0vKi5GcmVxKi87XG4gICAgcy5kZXB0aFtub2RlXSA9IChzLmRlcHRoW25dID49IHMuZGVwdGhbbV0gPyBzLmRlcHRoW25dIDogcy5kZXB0aFttXSkgKyAxO1xuICAgIHRyZWVbbiAqIDIgKyAxXS8qLkRhZCovID0gdHJlZVttICogMiArIDFdLyouRGFkKi8gPSBub2RlO1xuXG4gICAgLyogYW5kIGluc2VydCB0aGUgbmV3IG5vZGUgaW4gdGhlIGhlYXAgKi9cbiAgICBzLmhlYXBbMS8qU01BTExFU1QqL10gPSBub2RlKys7XG4gICAgcHFkb3duaGVhcChzLCB0cmVlLCAxLypTTUFMTEVTVCovKTtcblxuICB9IHdoaWxlIChzLmhlYXBfbGVuID49IDIpO1xuXG4gIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gcy5oZWFwWzEvKlNNQUxMRVNUKi9dO1xuXG4gIC8qIEF0IHRoaXMgcG9pbnQsIHRoZSBmaWVsZHMgZnJlcSBhbmQgZGFkIGFyZSBzZXQuIFdlIGNhbiBub3dcbiAgICogZ2VuZXJhdGUgdGhlIGJpdCBsZW5ndGhzLlxuICAgKi9cbiAgZ2VuX2JpdGxlbihzLCBkZXNjKTtcblxuICAvKiBUaGUgZmllbGQgbGVuIGlzIG5vdyBzZXQsIHdlIGNhbiBnZW5lcmF0ZSB0aGUgYml0IGNvZGVzICovXG4gIGdlbl9jb2Rlcyh0cmVlLCBtYXhfY29kZSwgcy5ibF9jb3VudCk7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2NhbiBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSB0byBkZXRlcm1pbmUgdGhlIGZyZXF1ZW5jaWVzIG9mIHRoZSBjb2Rlc1xuICogaW4gdGhlIGJpdCBsZW5ndGggdHJlZS5cbiAqL1xuY29uc3Qgc2Nhbl90cmVlID0gKHMsIHRyZWUsIG1heF9jb2RlKSA9PiB7XG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgICAvKiB0aGUgdHJlZSB0byBiZSBzY2FubmVkICovXG4vLyAgICBpbnQgbWF4X2NvZGU7ICAgIC8qIGFuZCBpdHMgbGFyZ2VzdCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuXG4gIGxldCBuOyAgICAgICAgICAgICAgICAgICAgIC8qIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHMgKi9cbiAgbGV0IHByZXZsZW4gPSAtMTsgICAgICAgICAgLyogbGFzdCBlbWl0dGVkIGxlbmd0aCAqL1xuICBsZXQgY3VybGVuOyAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBjb2RlICovXG5cbiAgbGV0IG5leHRsZW4gPSB0cmVlWzAgKiAyICsgMV0vKi5MZW4qLzsgLyogbGVuZ3RoIG9mIG5leHQgY29kZSAqL1xuXG4gIGxldCBjb3VudCA9IDA7ICAgICAgICAgICAgIC8qIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlICovXG4gIGxldCBtYXhfY291bnQgPSA3OyAgICAgICAgIC8qIG1heCByZXBlYXQgY291bnQgKi9cbiAgbGV0IG1pbl9jb3VudCA9IDQ7ICAgICAgICAgLyogbWluIHJlcGVhdCBjb3VudCAqL1xuXG4gIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgbWF4X2NvdW50ID0gMTM4O1xuICAgIG1pbl9jb3VudCA9IDM7XG4gIH1cbiAgdHJlZVsobWF4X2NvZGUgKyAxKSAqIDIgKyAxXS8qLkxlbiovID0gMHhmZmZmOyAvKiBndWFyZCAqL1xuXG4gIGZvciAobiA9IDA7IG4gPD0gbWF4X2NvZGU7IG4rKykge1xuICAgIGN1cmxlbiA9IG5leHRsZW47XG4gICAgbmV4dGxlbiA9IHRyZWVbKG4gKyAxKSAqIDIgKyAxXS8qLkxlbiovO1xuXG4gICAgaWYgKCsrY291bnQgPCBtYXhfY291bnQgJiYgY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBjb250aW51ZTtcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPCBtaW5fY291bnQpIHtcbiAgICAgIHMuYmxfdHJlZVtjdXJsZW4gKiAyXS8qLkZyZXEqLyArPSBjb3VudDtcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuICE9PSAwKSB7XG5cbiAgICAgIGlmIChjdXJsZW4gIT09IHByZXZsZW4pIHsgcy5ibF90cmVlW2N1cmxlbiAqIDJdLyouRnJlcSovKys7IH1cbiAgICAgIHMuYmxfdHJlZVtSRVBfM182ICogMl0vKi5GcmVxKi8rKztcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICAgIHMuYmxfdHJlZVtSRVBaXzNfMTAgKiAyXS8qLkZyZXEqLysrO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHMuYmxfdHJlZVtSRVBaXzExXzEzOCAqIDJdLyouRnJlcSovKys7XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuICAgIHByZXZsZW4gPSBjdXJsZW47XG5cbiAgICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgICAgbWF4X2NvdW50ID0gMTM4O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBtYXhfY291bnQgPSA2O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSB7XG4gICAgICBtYXhfY291bnQgPSA3O1xuICAgICAgbWluX2NvdW50ID0gNDtcbiAgICB9XG4gIH1cbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIGEgbGl0ZXJhbCBvciBkaXN0YW5jZSB0cmVlIGluIGNvbXByZXNzZWQgZm9ybSwgdXNpbmcgdGhlIGNvZGVzIGluXG4gKiBibF90cmVlLlxuICovXG5jb25zdCBzZW5kX3RyZWUgPSAocywgdHJlZSwgbWF4X2NvZGUpID0+IHtcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAvKiB0aGUgdHJlZSB0byBiZSBzY2FubmVkICovXG4vLyAgICBpbnQgbWF4X2NvZGU7ICAgICAgIC8qIGFuZCBpdHMgbGFyZ2VzdCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuXG4gIGxldCBuOyAgICAgICAgICAgICAgICAgICAgIC8qIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHMgKi9cbiAgbGV0IHByZXZsZW4gPSAtMTsgICAgICAgICAgLyogbGFzdCBlbWl0dGVkIGxlbmd0aCAqL1xuICBsZXQgY3VybGVuOyAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBjb2RlICovXG5cbiAgbGV0IG5leHRsZW4gPSB0cmVlWzAgKiAyICsgMV0vKi5MZW4qLzsgLyogbGVuZ3RoIG9mIG5leHQgY29kZSAqL1xuXG4gIGxldCBjb3VudCA9IDA7ICAgICAgICAgICAgIC8qIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlICovXG4gIGxldCBtYXhfY291bnQgPSA3OyAgICAgICAgIC8qIG1heCByZXBlYXQgY291bnQgKi9cbiAgbGV0IG1pbl9jb3VudCA9IDQ7ICAgICAgICAgLyogbWluIHJlcGVhdCBjb3VudCAqL1xuXG4gIC8qIHRyZWVbbWF4X2NvZGUrMV0uTGVuID0gLTE7ICovICAvKiBndWFyZCBhbHJlYWR5IHNldCAqL1xuICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgIG1heF9jb3VudCA9IDEzODtcbiAgICBtaW5fY291bnQgPSAzO1xuICB9XG5cbiAgZm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgY3VybGVuID0gbmV4dGxlbjtcbiAgICBuZXh0bGVuID0gdHJlZVsobiArIDEpICogMiArIDFdLyouTGVuKi87XG5cbiAgICBpZiAoKytjb3VudCA8IG1heF9jb3VudCAmJiBjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8IG1pbl9jb3VudCkge1xuICAgICAgZG8geyBzZW5kX2NvZGUocywgY3VybGVuLCBzLmJsX3RyZWUpOyB9IHdoaWxlICgtLWNvdW50ICE9PSAwKTtcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuICE9PSAwKSB7XG4gICAgICBpZiAoY3VybGVuICE9PSBwcmV2bGVuKSB7XG4gICAgICAgIHNlbmRfY29kZShzLCBjdXJsZW4sIHMuYmxfdHJlZSk7XG4gICAgICAgIGNvdW50LS07XG4gICAgICB9XG4gICAgICAvL0Fzc2VydChjb3VudCA+PSAzICYmIGNvdW50IDw9IDYsIFwiIDNfNj9cIik7XG4gICAgICBzZW5kX2NvZGUocywgUkVQXzNfNiwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDMsIDIpO1xuXG4gICAgfSBlbHNlIGlmIChjb3VudCA8PSAxMCkge1xuICAgICAgc2VuZF9jb2RlKHMsIFJFUFpfM18xMCwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDMsIDMpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmRfY29kZShzLCBSRVBaXzExXzEzOCwgcy5ibF90cmVlKTtcbiAgICAgIHNlbmRfYml0cyhzLCBjb3VudCAtIDExLCA3KTtcbiAgICB9XG5cbiAgICBjb3VudCA9IDA7XG4gICAgcHJldmxlbiA9IGN1cmxlbjtcbiAgICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgICAgbWF4X2NvdW50ID0gMTM4O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBtYXhfY291bnQgPSA2O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSB7XG4gICAgICBtYXhfY291bnQgPSA3O1xuICAgICAgbWluX2NvdW50ID0gNDtcbiAgICB9XG4gIH1cbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBmb3IgdGhlIGJpdCBsZW5ndGhzIGFuZCByZXR1cm4gdGhlIGluZGV4IGluXG4gKiBibF9vcmRlciBvZiB0aGUgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgdG8gc2VuZC5cbiAqL1xuY29uc3QgYnVpbGRfYmxfdHJlZSA9IChzKSA9PiB7XG5cbiAgbGV0IG1heF9ibGluZGV4OyAgLyogaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcSAqL1xuXG4gIC8qIERldGVybWluZSB0aGUgYml0IGxlbmd0aCBmcmVxdWVuY2llcyBmb3IgbGl0ZXJhbCBhbmQgZGlzdGFuY2UgdHJlZXMgKi9cbiAgc2Nhbl90cmVlKHMsIHMuZHluX2x0cmVlLCBzLmxfZGVzYy5tYXhfY29kZSk7XG4gIHNjYW5fdHJlZShzLCBzLmR5bl9kdHJlZSwgcy5kX2Rlc2MubWF4X2NvZGUpO1xuXG4gIC8qIEJ1aWxkIHRoZSBiaXQgbGVuZ3RoIHRyZWU6ICovXG4gIGJ1aWxkX3RyZWUocywgcy5ibF9kZXNjKTtcbiAgLyogb3B0X2xlbiBub3cgaW5jbHVkZXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJlZSByZXByZXNlbnRhdGlvbnMsIGV4Y2VwdFxuICAgKiB0aGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aHMgY29kZXMgYW5kIHRoZSA1KzUrNCBiaXRzIGZvciB0aGUgY291bnRzLlxuICAgKi9cblxuICAvKiBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBiaXQgbGVuZ3RoIGNvZGVzIHRvIHNlbmQuIFRoZSBwa3ppcCBmb3JtYXRcbiAgICogcmVxdWlyZXMgdGhhdCBhdCBsZWFzdCA0IGJpdCBsZW5ndGggY29kZXMgYmUgc2VudC4gKGFwcG5vdGUudHh0IHNheXNcbiAgICogMyBidXQgdGhlIGFjdHVhbCB2YWx1ZSB1c2VkIGlzIDQuKVxuICAgKi9cbiAgZm9yIChtYXhfYmxpbmRleCA9IEJMX0NPREVTJDEgLSAxOyBtYXhfYmxpbmRleCA+PSAzOyBtYXhfYmxpbmRleC0tKSB7XG4gICAgaWYgKHMuYmxfdHJlZVtibF9vcmRlclttYXhfYmxpbmRleF0gKiAyICsgMV0vKi5MZW4qLyAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8qIFVwZGF0ZSBvcHRfbGVuIHRvIGluY2x1ZGUgdGhlIGJpdCBsZW5ndGggdHJlZSBhbmQgY291bnRzICovXG4gIHMub3B0X2xlbiArPSAzICogKG1heF9ibGluZGV4ICsgMSkgKyA1ICsgNSArIDQ7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuZHluIHRyZWVzOiBkeW4gJWxkLCBzdGF0ICVsZFwiLFxuICAvLyAgICAgICAgcy0+b3B0X2xlbiwgcy0+c3RhdGljX2xlbikpO1xuXG4gIHJldHVybiBtYXhfYmxpbmRleDtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIHRoZSBoZWFkZXIgZm9yIGEgYmxvY2sgdXNpbmcgZHluYW1pYyBIdWZmbWFuIHRyZWVzOiB0aGUgY291bnRzLCB0aGVcbiAqIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGggY29kZXMsIHRoZSBsaXRlcmFsIHRyZWUgYW5kIHRoZSBkaXN0YW5jZSB0cmVlLlxuICogSU4gYXNzZXJ0aW9uOiBsY29kZXMgPj0gMjU3LCBkY29kZXMgPj0gMSwgYmxjb2RlcyA+PSA0LlxuICovXG5jb25zdCBzZW5kX2FsbF90cmVlcyA9IChzLCBsY29kZXMsIGRjb2RlcywgYmxjb2RlcykgPT4ge1xuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGludCBsY29kZXMsIGRjb2RlcywgYmxjb2RlczsgLyogbnVtYmVyIG9mIGNvZGVzIGZvciBlYWNoIHRyZWUgKi9cblxuICBsZXQgcmFuazsgICAgICAgICAgICAgICAgICAgIC8qIGluZGV4IGluIGJsX29yZGVyICovXG5cbiAgLy9Bc3NlcnQgKGxjb2RlcyA+PSAyNTcgJiYgZGNvZGVzID49IDEgJiYgYmxjb2RlcyA+PSA0LCBcIm5vdCBlbm91Z2ggY29kZXNcIik7XG4gIC8vQXNzZXJ0IChsY29kZXMgPD0gTF9DT0RFUyAmJiBkY29kZXMgPD0gRF9DT0RFUyAmJiBibGNvZGVzIDw9IEJMX0NPREVTLFxuICAvLyAgICAgICAgXCJ0b28gbWFueSBjb2Rlc1wiKTtcbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5ibCBjb3VudHM6IFwiKSk7XG4gIHNlbmRfYml0cyhzLCBsY29kZXMgLSAyNTcsIDUpOyAvKiBub3QgKzI1NSBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHQgKi9cbiAgc2VuZF9iaXRzKHMsIGRjb2RlcyAtIDEsICAgNSk7XG4gIHNlbmRfYml0cyhzLCBibGNvZGVzIC0gNCwgIDQpOyAvKiBub3QgLTMgYXMgc3RhdGVkIGluIGFwcG5vdGUudHh0ICovXG4gIGZvciAocmFuayA9IDA7IHJhbmsgPCBibGNvZGVzOyByYW5rKyspIHtcbiAgICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIGNvZGUgJTJkIFwiLCBibF9vcmRlcltyYW5rXSkpO1xuICAgIHNlbmRfYml0cyhzLCBzLmJsX3RyZWVbYmxfb3JkZXJbcmFua10gKiAyICsgMV0vKi5MZW4qLywgMyk7XG4gIH1cbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5ibCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcblxuICBzZW5kX3RyZWUocywgcy5keW5fbHRyZWUsIGxjb2RlcyAtIDEpOyAvKiBsaXRlcmFsIHRyZWUgKi9cbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5saXQgdHJlZTogc2VudCAlbGRcIiwgcy0+Yml0c19zZW50KSk7XG5cbiAgc2VuZF90cmVlKHMsIHMuZHluX2R0cmVlLCBkY29kZXMgLSAxKTsgLyogZGlzdGFuY2UgdHJlZSAqL1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmRpc3QgdHJlZTogc2VudCAlbGRcIiwgcy0+Yml0c19zZW50KSk7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ2hlY2sgaWYgdGhlIGRhdGEgdHlwZSBpcyBURVhUIG9yIEJJTkFSWSwgdXNpbmcgdGhlIGZvbGxvd2luZyBhbGdvcml0aG06XG4gKiAtIFRFWFQgaWYgdGhlIHR3byBjb25kaXRpb25zIGJlbG93IGFyZSBzYXRpc2ZpZWQ6XG4gKiAgICBhKSBUaGVyZSBhcmUgbm8gbm9uLXBvcnRhYmxlIGNvbnRyb2wgY2hhcmFjdGVycyBiZWxvbmdpbmcgdG8gdGhlXG4gKiAgICAgICBcImJsb2NrIGxpc3RcIiAoMC4uNiwgMTQuLjI1LCAyOC4uMzEpLlxuICogICAgYikgVGhlcmUgaXMgYXQgbGVhc3Qgb25lIHByaW50YWJsZSBjaGFyYWN0ZXIgYmVsb25naW5nIHRvIHRoZVxuICogICAgICAgXCJhbGxvdyBsaXN0XCIgKDkge1RBQn0sIDEwIHtMRn0sIDEzIHtDUn0sIDMyLi4yNTUpLlxuICogLSBCSU5BUlkgb3RoZXJ3aXNlLlxuICogLSBUaGUgZm9sbG93aW5nIHBhcnRpYWxseS1wb3J0YWJsZSBjb250cm9sIGNoYXJhY3RlcnMgZm9ybSBhXG4gKiAgIFwiZ3JheSBsaXN0XCIgdGhhdCBpcyBpZ25vcmVkIGluIHRoaXMgZGV0ZWN0aW9uIGFsZ29yaXRobTpcbiAqICAgKDcge0JFTH0sIDgge0JTfSwgMTEge1ZUfSwgMTIge0ZGfSwgMjYge1NVQn0sIDI3IHtFU0N9KS5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkcyBGcmVxIG9mIGR5bl9sdHJlZSBhcmUgc2V0LlxuICovXG5jb25zdCBkZXRlY3RfZGF0YV90eXBlID0gKHMpID0+IHtcbiAgLyogYmxvY2tfbWFzayBpcyB0aGUgYml0IG1hc2sgb2YgYmxvY2stbGlzdGVkIGJ5dGVzXG4gICAqIHNldCBiaXRzIDAuLjYsIDE0Li4yNSwgYW5kIDI4Li4zMVxuICAgKiAweGYzZmZjMDdmID0gYmluYXJ5IDExMTEwMDExMTExMTExMTExMTAwMDAwMDAxMTExMTExXG4gICAqL1xuICBsZXQgYmxvY2tfbWFzayA9IDB4ZjNmZmMwN2Y7XG4gIGxldCBuO1xuXG4gIC8qIENoZWNrIGZvciBub24tdGV4dHVhbCAoXCJibG9jay1saXN0ZWRcIikgYnl0ZXMuICovXG4gIGZvciAobiA9IDA7IG4gPD0gMzE7IG4rKywgYmxvY2tfbWFzayA+Pj49IDEpIHtcbiAgICBpZiAoKGJsb2NrX21hc2sgJiAxKSAmJiAocy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSkge1xuICAgICAgcmV0dXJuIFpfQklOQVJZO1xuICAgIH1cbiAgfVxuXG4gIC8qIENoZWNrIGZvciB0ZXh0dWFsIChcImFsbG93LWxpc3RlZFwiKSBieXRlcy4gKi9cbiAgaWYgKHMuZHluX2x0cmVlWzkgKiAyXS8qLkZyZXEqLyAhPT0gMCB8fCBzLmR5bl9sdHJlZVsxMCAqIDJdLyouRnJlcSovICE9PSAwIHx8XG4gICAgICBzLmR5bl9sdHJlZVsxMyAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgcmV0dXJuIFpfVEVYVDtcbiAgfVxuICBmb3IgKG4gPSAzMjsgbiA8IExJVEVSQUxTJDE7IG4rKykge1xuICAgIGlmIChzLmR5bl9sdHJlZVtuICogMl0vKi5GcmVxKi8gIT09IDApIHtcbiAgICAgIHJldHVybiBaX1RFWFQ7XG4gICAgfVxuICB9XG5cbiAgLyogVGhlcmUgYXJlIG5vIFwiYmxvY2stbGlzdGVkXCIgb3IgXCJhbGxvdy1saXN0ZWRcIiBieXRlczpcbiAgICogdGhpcyBzdHJlYW0gZWl0aGVyIGlzIGVtcHR5IG9yIGhhcyB0b2xlcmF0ZWQgKFwiZ3JheS1saXN0ZWRcIikgYnl0ZXMgb25seS5cbiAgICovXG4gIHJldHVybiBaX0JJTkFSWTtcbn07XG5cblxubGV0IHN0YXRpY19pbml0X2RvbmUgPSBmYWxzZTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSB0cmVlIGRhdGEgc3RydWN0dXJlcyBmb3IgYSBuZXcgemxpYiBzdHJlYW0uXG4gKi9cbmNvbnN0IF90cl9pbml0JDEgPSAocykgPT5cbntcblxuICBpZiAoIXN0YXRpY19pbml0X2RvbmUpIHtcbiAgICB0cl9zdGF0aWNfaW5pdCgpO1xuICAgIHN0YXRpY19pbml0X2RvbmUgPSB0cnVlO1xuICB9XG5cbiAgcy5sX2Rlc2MgID0gbmV3IFRyZWVEZXNjKHMuZHluX2x0cmVlLCBzdGF0aWNfbF9kZXNjKTtcbiAgcy5kX2Rlc2MgID0gbmV3IFRyZWVEZXNjKHMuZHluX2R0cmVlLCBzdGF0aWNfZF9kZXNjKTtcbiAgcy5ibF9kZXNjID0gbmV3IFRyZWVEZXNjKHMuYmxfdHJlZSwgc3RhdGljX2JsX2Rlc2MpO1xuXG4gIHMuYmlfYnVmID0gMDtcbiAgcy5iaV92YWxpZCA9IDA7XG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgZmlyc3QgYmxvY2sgb2YgdGhlIGZpcnN0IGZpbGU6ICovXG4gIGluaXRfYmxvY2socyk7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIHN0b3JlZCBibG9ja1xuICovXG5jb25zdCBfdHJfc3RvcmVkX2Jsb2NrJDEgPSAocywgYnVmLCBzdG9yZWRfbGVuLCBsYXN0KSA9PiB7XG4vL0RlZmxhdGVTdGF0ZSAqcztcbi8vY2hhcmYgKmJ1ZjsgICAgICAgLyogaW5wdXQgYmxvY2sgKi9cbi8vdWxnIHN0b3JlZF9sZW47ICAgLyogbGVuZ3RoIG9mIGlucHV0IGJsb2NrICovXG4vL2ludCBsYXN0OyAgICAgICAgIC8qIG9uZSBpZiB0aGlzIGlzIHRoZSBsYXN0IGJsb2NrIGZvciBhIGZpbGUgKi9cblxuICBzZW5kX2JpdHMocywgKFNUT1JFRF9CTE9DSyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTsgICAgLyogc2VuZCBibG9jayB0eXBlICovXG4gIGJpX3dpbmR1cChzKTsgICAgICAgIC8qIGFsaWduIG9uIGJ5dGUgYm91bmRhcnkgKi9cbiAgcHV0X3Nob3J0KHMsIHN0b3JlZF9sZW4pO1xuICBwdXRfc2hvcnQocywgfnN0b3JlZF9sZW4pO1xuICBpZiAoc3RvcmVkX2xlbikge1xuICAgIHMucGVuZGluZ19idWYuc2V0KHMud2luZG93LnN1YmFycmF5KGJ1ZiwgYnVmICsgc3RvcmVkX2xlbiksIHMucGVuZGluZyk7XG4gIH1cbiAgcy5wZW5kaW5nICs9IHN0b3JlZF9sZW47XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBvbmUgZW1wdHkgc3RhdGljIGJsb2NrIHRvIGdpdmUgZW5vdWdoIGxvb2thaGVhZCBmb3IgaW5mbGF0ZS5cbiAqIFRoaXMgdGFrZXMgMTAgYml0cywgb2Ygd2hpY2ggNyBtYXkgcmVtYWluIGluIHRoZSBiaXQgYnVmZmVyLlxuICovXG5jb25zdCBfdHJfYWxpZ24kMSA9IChzKSA9PiB7XG4gIHNlbmRfYml0cyhzLCBTVEFUSUNfVFJFRVMgPDwgMSwgMyk7XG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIHN0YXRpY19sdHJlZSk7XG4gIGJpX2ZsdXNoKHMpO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZyBmb3IgdGhlIGN1cnJlbnQgYmxvY2s6IGR5bmFtaWMgdHJlZXMsIHN0YXRpY1xuICogdHJlZXMgb3Igc3RvcmUsIGFuZCB3cml0ZSBvdXQgdGhlIGVuY29kZWQgYmxvY2suXG4gKi9cbmNvbnN0IF90cl9mbHVzaF9ibG9jayQxID0gKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgbGFzdCkgPT4ge1xuLy9EZWZsYXRlU3RhdGUgKnM7XG4vL2NoYXJmICpidWY7ICAgICAgIC8qIGlucHV0IGJsb2NrLCBvciBOVUxMIGlmIHRvbyBvbGQgKi9cbi8vdWxnIHN0b3JlZF9sZW47ICAgLyogbGVuZ3RoIG9mIGlucHV0IGJsb2NrICovXG4vL2ludCBsYXN0OyAgICAgICAgIC8qIG9uZSBpZiB0aGlzIGlzIHRoZSBsYXN0IGJsb2NrIGZvciBhIGZpbGUgKi9cblxuICBsZXQgb3B0X2xlbmIsIHN0YXRpY19sZW5iOyAgLyogb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBpbiBieXRlcyAqL1xuICBsZXQgbWF4X2JsaW5kZXggPSAwOyAgICAgICAgLyogaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcSAqL1xuXG4gIC8qIEJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzIHVubGVzcyBhIHN0b3JlZCBibG9jayBpcyBmb3JjZWQgKi9cbiAgaWYgKHMubGV2ZWwgPiAwKSB7XG5cbiAgICAvKiBDaGVjayBpZiB0aGUgZmlsZSBpcyBiaW5hcnkgb3IgdGV4dCAqL1xuICAgIGlmIChzLnN0cm0uZGF0YV90eXBlID09PSBaX1VOS05PV04kMSkge1xuICAgICAgcy5zdHJtLmRhdGFfdHlwZSA9IGRldGVjdF9kYXRhX3R5cGUocyk7XG4gICAgfVxuXG4gICAgLyogQ29uc3RydWN0IHRoZSBsaXRlcmFsIGFuZCBkaXN0YW5jZSB0cmVlcyAqL1xuICAgIGJ1aWxkX3RyZWUocywgcy5sX2Rlc2MpO1xuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbmxpdCBkYXRhOiBkeW4gJWxkLCBzdGF0ICVsZFwiLCBzLT5vcHRfbGVuLFxuICAgIC8vICAgICAgICBzLT5zdGF0aWNfbGVuKSk7XG5cbiAgICBidWlsZF90cmVlKHMsIHMuZF9kZXNjKTtcbiAgICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJcXG5kaXN0IGRhdGE6IGR5biAlbGQsIHN0YXQgJWxkXCIsIHMtPm9wdF9sZW4sXG4gICAgLy8gICAgICAgIHMtPnN0YXRpY19sZW4pKTtcbiAgICAvKiBBdCB0aGlzIHBvaW50LCBvcHRfbGVuIGFuZCBzdGF0aWNfbGVuIGFyZSB0aGUgdG90YWwgYml0IGxlbmd0aHMgb2ZcbiAgICAgKiB0aGUgY29tcHJlc3NlZCBibG9jayBkYXRhLCBleGNsdWRpbmcgdGhlIHRyZWUgcmVwcmVzZW50YXRpb25zLlxuICAgICAqL1xuXG4gICAgLyogQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZSBmb3IgdGhlIGFib3ZlIHR3byB0cmVlcywgYW5kIGdldCB0aGUgaW5kZXhcbiAgICAgKiBpbiBibF9vcmRlciBvZiB0aGUgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgdG8gc2VuZC5cbiAgICAgKi9cbiAgICBtYXhfYmxpbmRleCA9IGJ1aWxkX2JsX3RyZWUocyk7XG5cbiAgICAvKiBEZXRlcm1pbmUgdGhlIGJlc3QgZW5jb2RpbmcuIENvbXB1dGUgdGhlIGJsb2NrIGxlbmd0aHMgaW4gYnl0ZXMuICovXG4gICAgb3B0X2xlbmIgPSAocy5vcHRfbGVuICsgMyArIDcpID4+PiAzO1xuICAgIHN0YXRpY19sZW5iID0gKHMuc3RhdGljX2xlbiArIDMgKyA3KSA+Pj4gMztcblxuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbm9wdCAlbHUoJWx1KSBzdGF0ICVsdSglbHUpIHN0b3JlZCAlbHUgbGl0ICV1IFwiLFxuICAgIC8vICAgICAgICBvcHRfbGVuYiwgcy0+b3B0X2xlbiwgc3RhdGljX2xlbmIsIHMtPnN0YXRpY19sZW4sIHN0b3JlZF9sZW4sXG4gICAgLy8gICAgICAgIHMtPnN5bV9uZXh0IC8gMykpO1xuXG4gICAgaWYgKHN0YXRpY19sZW5iIDw9IG9wdF9sZW5iKSB7IG9wdF9sZW5iID0gc3RhdGljX2xlbmI7IH1cblxuICB9IGVsc2Uge1xuICAgIC8vIEFzc2VydChidWYgIT0gKGNoYXIqKTAsIFwibG9zdCBidWZcIik7XG4gICAgb3B0X2xlbmIgPSBzdGF0aWNfbGVuYiA9IHN0b3JlZF9sZW4gKyA1OyAvKiBmb3JjZSBhIHN0b3JlZCBibG9jayAqL1xuICB9XG5cbiAgaWYgKChzdG9yZWRfbGVuICsgNCA8PSBvcHRfbGVuYikgJiYgKGJ1ZiAhPT0gLTEpKSB7XG4gICAgLyogNDogdHdvIHdvcmRzIGZvciB0aGUgbGVuZ3RocyAqL1xuXG4gICAgLyogVGhlIHRlc3QgYnVmICE9IE5VTEwgaXMgb25seSBuZWNlc3NhcnkgaWYgTElUX0JVRlNJWkUgPiBXU0laRS5cbiAgICAgKiBPdGhlcndpc2Ugd2UgY2FuJ3QgaGF2ZSBwcm9jZXNzZWQgbW9yZSB0aGFuIFdTSVpFIGlucHV0IGJ5dGVzIHNpbmNlXG4gICAgICogdGhlIGxhc3QgYmxvY2sgZmx1c2gsIGJlY2F1c2UgY29tcHJlc3Npb24gd291bGQgaGF2ZSBiZWVuXG4gICAgICogc3VjY2Vzc2Z1bC4gSWYgTElUX0JVRlNJWkUgPD0gV1NJWkUsIGl0IGlzIG5ldmVyIHRvbyBsYXRlIHRvXG4gICAgICogdHJhbnNmb3JtIGEgYmxvY2sgaW50byBhIHN0b3JlZCBibG9jay5cbiAgICAgKi9cbiAgICBfdHJfc3RvcmVkX2Jsb2NrJDEocywgYnVmLCBzdG9yZWRfbGVuLCBsYXN0KTtcblxuICB9IGVsc2UgaWYgKHMuc3RyYXRlZ3kgPT09IFpfRklYRUQkMSB8fCBzdGF0aWNfbGVuYiA9PT0gb3B0X2xlbmIpIHtcblxuICAgIHNlbmRfYml0cyhzLCAoU1RBVElDX1RSRUVTIDw8IDEpICsgKGxhc3QgPyAxIDogMCksIDMpO1xuICAgIGNvbXByZXNzX2Jsb2NrKHMsIHN0YXRpY19sdHJlZSwgc3RhdGljX2R0cmVlKTtcblxuICB9IGVsc2Uge1xuICAgIHNlbmRfYml0cyhzLCAoRFlOX1RSRUVTIDw8IDEpICsgKGxhc3QgPyAxIDogMCksIDMpO1xuICAgIHNlbmRfYWxsX3RyZWVzKHMsIHMubF9kZXNjLm1heF9jb2RlICsgMSwgcy5kX2Rlc2MubWF4X2NvZGUgKyAxLCBtYXhfYmxpbmRleCArIDEpO1xuICAgIGNvbXByZXNzX2Jsb2NrKHMsIHMuZHluX2x0cmVlLCBzLmR5bl9kdHJlZSk7XG4gIH1cbiAgLy8gQXNzZXJ0IChzLT5jb21wcmVzc2VkX2xlbiA9PSBzLT5iaXRzX3NlbnQsIFwiYmFkIGNvbXByZXNzZWQgc2l6ZVwiKTtcbiAgLyogVGhlIGFib3ZlIGNoZWNrIGlzIG1hZGUgbW9kIDJeMzIsIGZvciBmaWxlcyBsYXJnZXIgdGhhbiA1MTIgTUJcbiAgICogYW5kIHVMb25nIGltcGxlbWVudGVkIG9uIDMyIGJpdHMuXG4gICAqL1xuICBpbml0X2Jsb2NrKHMpO1xuXG4gIGlmIChsYXN0KSB7XG4gICAgYmlfd2luZHVwKHMpO1xuICB9XG4gIC8vIFRyYWNldigoc3RkZXJyLFwiXFxuY29tcHJsZW4gJWx1KCVsdSkgXCIsIHMtPmNvbXByZXNzZWRfbGVuPj4zLFxuICAvLyAgICAgICBzLT5jb21wcmVzc2VkX2xlbi03Kmxhc3QpKTtcbn07XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2F2ZSB0aGUgbWF0Y2ggaW5mbyBhbmQgdGFsbHkgdGhlIGZyZXF1ZW5jeSBjb3VudHMuIFJldHVybiB0cnVlIGlmXG4gKiB0aGUgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQuXG4gKi9cbmNvbnN0IF90cl90YWxseSQxID0gKHMsIGRpc3QsIGxjKSA9PiB7XG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgdW5zaWduZWQgZGlzdDsgIC8qIGRpc3RhbmNlIG9mIG1hdGNoZWQgc3RyaW5nICovXG4vLyAgICB1bnNpZ25lZCBsYzsgICAgLyogbWF0Y2ggbGVuZ3RoLU1JTl9NQVRDSCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdD09MCkgKi9cblxuICBzLnBlbmRpbmdfYnVmW3Muc3ltX2J1ZiArIHMuc3ltX25leHQrK10gPSBkaXN0O1xuICBzLnBlbmRpbmdfYnVmW3Muc3ltX2J1ZiArIHMuc3ltX25leHQrK10gPSBkaXN0ID4+IDg7XG4gIHMucGVuZGluZ19idWZbcy5zeW1fYnVmICsgcy5zeW1fbmV4dCsrXSA9IGxjO1xuICBpZiAoZGlzdCA9PT0gMCkge1xuICAgIC8qIGxjIGlzIHRoZSB1bm1hdGNoZWQgY2hhciAqL1xuICAgIHMuZHluX2x0cmVlW2xjICogMl0vKi5GcmVxKi8rKztcbiAgfSBlbHNlIHtcbiAgICBzLm1hdGNoZXMrKztcbiAgICAvKiBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIICovXG4gICAgZGlzdC0tOyAgICAgICAgICAgICAvKiBkaXN0ID0gbWF0Y2ggZGlzdGFuY2UgLSAxICovXG4gICAgLy9Bc3NlcnQoKHVzaClkaXN0IDwgKHVzaClNQVhfRElTVChzKSAmJlxuICAgIC8vICAgICAgICh1c2gpbGMgPD0gKHVzaCkoTUFYX01BVENILU1JTl9NQVRDSCkgJiZcbiAgICAvLyAgICAgICAodXNoKWRfY29kZShkaXN0KSA8ICh1c2gpRF9DT0RFUywgIFwiX3RyX3RhbGx5OiBiYWQgbWF0Y2hcIik7XG5cbiAgICBzLmR5bl9sdHJlZVsoX2xlbmd0aF9jb2RlW2xjXSArIExJVEVSQUxTJDEgKyAxKSAqIDJdLyouRnJlcSovKys7XG4gICAgcy5keW5fZHRyZWVbZF9jb2RlKGRpc3QpICogMl0vKi5GcmVxKi8rKztcbiAgfVxuXG4gIHJldHVybiAocy5zeW1fbmV4dCA9PT0gcy5zeW1fZW5kKTtcbn07XG5cbnZhciBfdHJfaW5pdF8xICA9IF90cl9pbml0JDE7XG52YXIgX3RyX3N0b3JlZF9ibG9ja18xID0gX3RyX3N0b3JlZF9ibG9jayQxO1xudmFyIF90cl9mbHVzaF9ibG9ja18xICA9IF90cl9mbHVzaF9ibG9jayQxO1xudmFyIF90cl90YWxseV8xID0gX3RyX3RhbGx5JDE7XG52YXIgX3RyX2FsaWduXzEgPSBfdHJfYWxpZ24kMTtcblxudmFyIHRyZWVzID0ge1xuXHRfdHJfaW5pdDogX3RyX2luaXRfMSxcblx0X3RyX3N0b3JlZF9ibG9jazogX3RyX3N0b3JlZF9ibG9ja18xLFxuXHRfdHJfZmx1c2hfYmxvY2s6IF90cl9mbHVzaF9ibG9ja18xLFxuXHRfdHJfdGFsbHk6IF90cl90YWxseV8xLFxuXHRfdHJfYWxpZ246IF90cl9hbGlnbl8xXG59O1xuXG4vLyBOb3RlOiBhZGxlcjMyIHRha2VzIDEyJSBmb3IgbGV2ZWwgMCBhbmQgMiUgZm9yIGxldmVsIDYuXG4vLyBJdCBpc24ndCB3b3J0aCBpdCB0byBtYWtlIGFkZGl0aW9uYWwgb3B0aW1pemF0aW9ucyBhcyBpbiBvcmlnaW5hbC5cbi8vIFNtYWxsIHNpemUgaXMgcHJlZmVyYWJsZS5cblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5jb25zdCBhZGxlcjMyID0gKGFkbGVyLCBidWYsIGxlbiwgcG9zKSA9PiB7XG4gIGxldCBzMSA9IChhZGxlciAmIDB4ZmZmZikgfDAsXG4gICAgICBzMiA9ICgoYWRsZXIgPj4+IDE2KSAmIDB4ZmZmZikgfDAsXG4gICAgICBuID0gMDtcblxuICB3aGlsZSAobGVuICE9PSAwKSB7XG4gICAgLy8gU2V0IGxpbWl0IH4gdHdpY2UgbGVzcyB0aGFuIDU1NTIsIHRvIGtlZXBcbiAgICAvLyBzMiBpbiAzMS1iaXRzLCBiZWNhdXNlIHdlIGZvcmNlIHNpZ25lZCBpbnRzLlxuICAgIC8vIGluIG90aGVyIGNhc2UgJT0gd2lsbCBmYWlsLlxuICAgIG4gPSBsZW4gPiAyMDAwID8gMjAwMCA6IGxlbjtcbiAgICBsZW4gLT0gbjtcblxuICAgIGRvIHtcbiAgICAgIHMxID0gKHMxICsgYnVmW3BvcysrXSkgfDA7XG4gICAgICBzMiA9IChzMiArIHMxKSB8MDtcbiAgICB9IHdoaWxlICgtLW4pO1xuXG4gICAgczEgJT0gNjU1MjE7XG4gICAgczIgJT0gNjU1MjE7XG4gIH1cblxuICByZXR1cm4gKHMxIHwgKHMyIDw8IDE2KSkgfDA7XG59O1xuXG5cbnZhciBhZGxlcjMyXzEgPSBhZGxlcjMyO1xuXG4vLyBOb3RlOiB3ZSBjYW4ndCBnZXQgc2lnbmlmaWNhbnQgc3BlZWQgYm9vc3QgaGVyZS5cbi8vIFNvIHdyaXRlIGNvZGUgdG8gbWluaW1pemUgc2l6ZSAtIG5vIHByZWdlbmVyYXRlZCB0YWJsZXNcbi8vIGFuZCBhcnJheSB0b29scyBkZXBlbmRlbmNpZXMuXG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLy8gVXNlIG9yZGluYXJ5IGFycmF5LCBzaW5jZSB1bnR5cGVkIG1ha2VzIG5vIGJvb3N0IGhlcmVcbmNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgbGV0IGMsIHRhYmxlID0gW107XG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCAyNTY7IG4rKykge1xuICAgIGMgPSBuO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjID0gKChjICYgMSkgPyAoMHhFREI4ODMyMCBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuICAgIH1cbiAgICB0YWJsZVtuXSA9IGM7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59O1xuXG4vLyBDcmVhdGUgdGFibGUgb24gbG9hZC4gSnVzdCAyNTUgc2lnbmVkIGxvbmdzLiBOb3QgYSBwcm9ibGVtLlxuY29uc3QgY3JjVGFibGUgPSBuZXcgVWludDMyQXJyYXkobWFrZVRhYmxlKCkpO1xuXG5cbmNvbnN0IGNyYzMyID0gKGNyYywgYnVmLCBsZW4sIHBvcykgPT4ge1xuICBjb25zdCB0ID0gY3JjVGFibGU7XG4gIGNvbnN0IGVuZCA9IHBvcyArIGxlbjtcblxuICBjcmMgXj0gLTE7XG5cbiAgZm9yIChsZXQgaSA9IHBvczsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY3JjID0gKGNyYyA+Pj4gOCkgXiB0WyhjcmMgXiBidWZbaV0pICYgMHhGRl07XG4gIH1cblxuICByZXR1cm4gKGNyYyBeICgtMSkpOyAvLyA+Pj4gMDtcbn07XG5cblxudmFyIGNyYzMyXzEgPSBjcmMzMjtcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG52YXIgbWVzc2FnZXMgPSB7XG4gIDI6ICAgICAgJ25lZWQgZGljdGlvbmFyeScsICAgICAvKiBaX05FRURfRElDVCAgICAgICAyICAqL1xuICAxOiAgICAgICdzdHJlYW0gZW5kJywgICAgICAgICAgLyogWl9TVFJFQU1fRU5EICAgICAgMSAgKi9cbiAgMDogICAgICAnJywgICAgICAgICAgICAgICAgICAgIC8qIFpfT0sgICAgICAgICAgICAgIDAgICovXG4gICctMSc6ICAgJ2ZpbGUgZXJyb3InLCAgICAgICAgICAvKiBaX0VSUk5PICAgICAgICAgKC0xKSAqL1xuICAnLTInOiAgICdzdHJlYW0gZXJyb3InLCAgICAgICAgLyogWl9TVFJFQU1fRVJST1IgICgtMikgKi9cbiAgJy0zJzogICAnZGF0YSBlcnJvcicsICAgICAgICAgIC8qIFpfREFUQV9FUlJPUiAgICAoLTMpICovXG4gICctNCc6ICAgJ2luc3VmZmljaWVudCBtZW1vcnknLCAvKiBaX01FTV9FUlJPUiAgICAgKC00KSAqL1xuICAnLTUnOiAgICdidWZmZXIgZXJyb3InLCAgICAgICAgLyogWl9CVUZfRVJST1IgICAgICgtNSkgKi9cbiAgJy02JzogICAnaW5jb21wYXRpYmxlIHZlcnNpb24nIC8qIFpfVkVSU0lPTl9FUlJPUiAoLTYpICovXG59O1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbnZhciBjb25zdGFudHMkMiA9IHtcblxuICAvKiBBbGxvd2VkIGZsdXNoIHZhbHVlczsgc2VlIGRlZmxhdGUoKSBhbmQgaW5mbGF0ZSgpIGJlbG93IGZvciBkZXRhaWxzICovXG4gIFpfTk9fRkxVU0g6ICAgICAgICAgMCxcbiAgWl9QQVJUSUFMX0ZMVVNIOiAgICAxLFxuICBaX1NZTkNfRkxVU0g6ICAgICAgIDIsXG4gIFpfRlVMTF9GTFVTSDogICAgICAgMyxcbiAgWl9GSU5JU0g6ICAgICAgICAgICA0LFxuICBaX0JMT0NLOiAgICAgICAgICAgIDUsXG4gIFpfVFJFRVM6ICAgICAgICAgICAgNixcblxuICAvKiBSZXR1cm4gY29kZXMgZm9yIHRoZSBjb21wcmVzc2lvbi9kZWNvbXByZXNzaW9uIGZ1bmN0aW9ucy4gTmVnYXRpdmUgdmFsdWVzXG4gICogYXJlIGVycm9ycywgcG9zaXRpdmUgdmFsdWVzIGFyZSB1c2VkIGZvciBzcGVjaWFsIGJ1dCBub3JtYWwgZXZlbnRzLlxuICAqL1xuICBaX09LOiAgICAgICAgICAgICAgIDAsXG4gIFpfU1RSRUFNX0VORDogICAgICAgMSxcbiAgWl9ORUVEX0RJQ1Q6ICAgICAgICAyLFxuICBaX0VSUk5POiAgICAgICAgICAgLTEsXG4gIFpfU1RSRUFNX0VSUk9SOiAgICAtMixcbiAgWl9EQVRBX0VSUk9SOiAgICAgIC0zLFxuICBaX01FTV9FUlJPUjogICAgICAgLTQsXG4gIFpfQlVGX0VSUk9SOiAgICAgICAtNSxcbiAgLy9aX1ZFUlNJT05fRVJST1I6IC02LFxuXG4gIC8qIGNvbXByZXNzaW9uIGxldmVscyAqL1xuICBaX05PX0NPTVBSRVNTSU9OOiAgICAgICAgIDAsXG4gIFpfQkVTVF9TUEVFRDogICAgICAgICAgICAgMSxcbiAgWl9CRVNUX0NPTVBSRVNTSU9OOiAgICAgICA5LFxuICBaX0RFRkFVTFRfQ09NUFJFU1NJT046ICAgLTEsXG5cblxuICBaX0ZJTFRFUkVEOiAgICAgICAgICAgICAgIDEsXG4gIFpfSFVGRk1BTl9PTkxZOiAgICAgICAgICAgMixcbiAgWl9STEU6ICAgICAgICAgICAgICAgICAgICAzLFxuICBaX0ZJWEVEOiAgICAgICAgICAgICAgICAgIDQsXG4gIFpfREVGQVVMVF9TVFJBVEVHWTogICAgICAgMCxcblxuICAvKiBQb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIGRhdGFfdHlwZSBmaWVsZCAodGhvdWdoIHNlZSBpbmZsYXRlKCkpICovXG4gIFpfQklOQVJZOiAgICAgICAgICAgICAgICAgMCxcbiAgWl9URVhUOiAgICAgICAgICAgICAgICAgICAxLFxuICAvL1pfQVNDSUk6ICAgICAgICAgICAgICAgIDEsIC8vID0gWl9URVhUIChkZXByZWNhdGVkKVxuICBaX1VOS05PV046ICAgICAgICAgICAgICAgIDIsXG5cbiAgLyogVGhlIGRlZmxhdGUgY29tcHJlc3Npb24gbWV0aG9kICovXG4gIFpfREVGTEFURUQ6ICAgICAgICAgICAgICAgOFxuICAvL1pfTlVMTDogICAgICAgICAgICAgICAgIG51bGwgLy8gVXNlIC0xIG9yIG51bGwgaW5saW5lLCBkZXBlbmRpbmcgb24gdmFyIHR5cGVcbn07XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuY29uc3QgeyBfdHJfaW5pdCwgX3RyX3N0b3JlZF9ibG9jaywgX3RyX2ZsdXNoX2Jsb2NrLCBfdHJfdGFsbHksIF90cl9hbGlnbiB9ID0gdHJlZXM7XG5cblxuXG5cbi8qIFB1YmxpYyBjb25zdGFudHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5jb25zdCB7XG4gIFpfTk9fRkxVU0g6IFpfTk9fRkxVU0gkMiwgWl9QQVJUSUFMX0ZMVVNILCBaX0ZVTExfRkxVU0g6IFpfRlVMTF9GTFVTSCQxLCBaX0ZJTklTSDogWl9GSU5JU0gkMywgWl9CTE9DSzogWl9CTE9DSyQxLFxuICBaX09LOiBaX09LJDMsIFpfU1RSRUFNX0VORDogWl9TVFJFQU1fRU5EJDMsIFpfU1RSRUFNX0VSUk9SOiBaX1NUUkVBTV9FUlJPUiQyLCBaX0RBVEFfRVJST1I6IFpfREFUQV9FUlJPUiQyLCBaX0JVRl9FUlJPUjogWl9CVUZfRVJST1IkMSxcbiAgWl9ERUZBVUxUX0NPTVBSRVNTSU9OOiBaX0RFRkFVTFRfQ09NUFJFU1NJT04kMSxcbiAgWl9GSUxURVJFRCwgWl9IVUZGTUFOX09OTFksIFpfUkxFLCBaX0ZJWEVELCBaX0RFRkFVTFRfU1RSQVRFR1k6IFpfREVGQVVMVF9TVFJBVEVHWSQxLFxuICBaX1VOS05PV04sXG4gIFpfREVGTEFURUQ6IFpfREVGTEFURUQkMlxufSA9IGNvbnN0YW50cyQyO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmNvbnN0IE1BWF9NRU1fTEVWRUwgPSA5O1xuLyogTWF4aW11bSB2YWx1ZSBmb3IgbWVtTGV2ZWwgaW4gZGVmbGF0ZUluaXQyICovXG5jb25zdCBNQVhfV0JJVFMkMSA9IDE1O1xuLyogMzJLIExaNzcgd2luZG93ICovXG5jb25zdCBERUZfTUVNX0xFVkVMID0gODtcblxuXG5jb25zdCBMRU5HVEhfQ09ERVMgID0gMjk7XG4vKiBudW1iZXIgb2YgbGVuZ3RoIGNvZGVzLCBub3QgY291bnRpbmcgdGhlIHNwZWNpYWwgRU5EX0JMT0NLIGNvZGUgKi9cbmNvbnN0IExJVEVSQUxTICAgICAgPSAyNTY7XG4vKiBudW1iZXIgb2YgbGl0ZXJhbCBieXRlcyAwLi4yNTUgKi9cbmNvbnN0IExfQ09ERVMgICAgICAgPSBMSVRFUkFMUyArIDEgKyBMRU5HVEhfQ09ERVM7XG4vKiBudW1iZXIgb2YgTGl0ZXJhbCBvciBMZW5ndGggY29kZXMsIGluY2x1ZGluZyB0aGUgRU5EX0JMT0NLIGNvZGUgKi9cbmNvbnN0IERfQ09ERVMgICAgICAgPSAzMDtcbi8qIG51bWJlciBvZiBkaXN0YW5jZSBjb2RlcyAqL1xuY29uc3QgQkxfQ09ERVMgICAgICA9IDE5O1xuLyogbnVtYmVyIG9mIGNvZGVzIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGJpdCBsZW5ndGhzICovXG5jb25zdCBIRUFQX1NJWkUgICAgID0gMiAqIExfQ09ERVMgKyAxO1xuLyogbWF4aW11bSBoZWFwIHNpemUgKi9cbmNvbnN0IE1BWF9CSVRTICA9IDE1O1xuLyogQWxsIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQklUUyBiaXRzICovXG5cbmNvbnN0IE1JTl9NQVRDSCA9IDM7XG5jb25zdCBNQVhfTUFUQ0ggPSAyNTg7XG5jb25zdCBNSU5fTE9PS0FIRUFEID0gKE1BWF9NQVRDSCArIE1JTl9NQVRDSCArIDEpO1xuXG5jb25zdCBQUkVTRVRfRElDVCA9IDB4MjA7XG5cbmNvbnN0IElOSVRfU1RBVEUgICAgPSAgNDI7ICAgIC8qIHpsaWIgaGVhZGVyIC0+IEJVU1lfU1RBVEUgKi9cbi8vI2lmZGVmIEdaSVBcbmNvbnN0IEdaSVBfU1RBVEUgICAgPSAgNTc7ICAgIC8qIGd6aXAgaGVhZGVyIC0+IEJVU1lfU1RBVEUgfCBFWFRSQV9TVEFURSAqL1xuLy8jZW5kaWZcbmNvbnN0IEVYVFJBX1NUQVRFICAgPSAgNjk7ICAgIC8qIGd6aXAgZXh0cmEgYmxvY2sgLT4gTkFNRV9TVEFURSAqL1xuY29uc3QgTkFNRV9TVEFURSAgICA9ICA3MzsgICAgLyogZ3ppcCBmaWxlIG5hbWUgLT4gQ09NTUVOVF9TVEFURSAqL1xuY29uc3QgQ09NTUVOVF9TVEFURSA9ICA5MTsgICAgLyogZ3ppcCBjb21tZW50IC0+IEhDUkNfU1RBVEUgKi9cbmNvbnN0IEhDUkNfU1RBVEUgICAgPSAxMDM7ICAgIC8qIGd6aXAgaGVhZGVyIENSQyAtPiBCVVNZX1NUQVRFICovXG5jb25zdCBCVVNZX1NUQVRFICAgID0gMTEzOyAgICAvKiBkZWZsYXRlIC0+IEZJTklTSF9TVEFURSAqL1xuY29uc3QgRklOSVNIX1NUQVRFICA9IDY2NjsgICAgLyogc3RyZWFtIGNvbXBsZXRlICovXG5cbmNvbnN0IEJTX05FRURfTU9SRSAgICAgID0gMTsgLyogYmxvY2sgbm90IGNvbXBsZXRlZCwgbmVlZCBtb3JlIGlucHV0IG9yIG1vcmUgb3V0cHV0ICovXG5jb25zdCBCU19CTE9DS19ET05FICAgICA9IDI7IC8qIGJsb2NrIGZsdXNoIHBlcmZvcm1lZCAqL1xuY29uc3QgQlNfRklOSVNIX1NUQVJURUQgPSAzOyAvKiBmaW5pc2ggc3RhcnRlZCwgbmVlZCBvbmx5IG1vcmUgb3V0cHV0IGF0IG5leHQgZGVmbGF0ZSAqL1xuY29uc3QgQlNfRklOSVNIX0RPTkUgICAgPSA0OyAvKiBmaW5pc2ggZG9uZSwgYWNjZXB0IG5vIG1vcmUgaW5wdXQgb3Igb3V0cHV0ICovXG5cbmNvbnN0IE9TX0NPREUgPSAweDAzOyAvLyBVbml4IDopIC4gRG9uJ3QgZGV0ZWN0LCB1c2UgdGhpcyBkZWZhdWx0LlxuXG5jb25zdCBlcnIgPSAoc3RybSwgZXJyb3JDb2RlKSA9PiB7XG4gIHN0cm0ubXNnID0gbWVzc2FnZXNbZXJyb3JDb2RlXTtcbiAgcmV0dXJuIGVycm9yQ29kZTtcbn07XG5cbmNvbnN0IHJhbmsgPSAoZikgPT4ge1xuICByZXR1cm4gKChmKSAqIDIpIC0gKChmKSA+IDQgPyA5IDogMCk7XG59O1xuXG5jb25zdCB6ZXJvID0gKGJ1ZikgPT4ge1xuICBsZXQgbGVuID0gYnVmLmxlbmd0aDsgd2hpbGUgKC0tbGVuID49IDApIHsgYnVmW2xlbl0gPSAwOyB9XG59O1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNsaWRlIHRoZSBoYXNoIHRhYmxlIHdoZW4gc2xpZGluZyB0aGUgd2luZG93IGRvd24gKGNvdWxkIGJlIGF2b2lkZWQgd2l0aCAzMlxuICogYml0IHZhbHVlcyBhdCB0aGUgZXhwZW5zZSBvZiBtZW1vcnkgdXNhZ2UpLiBXZSBzbGlkZSBldmVuIHdoZW4gbGV2ZWwgPT0gMCB0b1xuICoga2VlcCB0aGUgaGFzaCB0YWJsZSBjb25zaXN0ZW50IGlmIHdlIHN3aXRjaCBiYWNrIHRvIGxldmVsID4gMCBsYXRlci5cbiAqL1xuY29uc3Qgc2xpZGVfaGFzaCA9IChzKSA9PiB7XG4gIGxldCBuLCBtO1xuICBsZXQgcDtcbiAgbGV0IHdzaXplID0gcy53X3NpemU7XG5cbiAgbiA9IHMuaGFzaF9zaXplO1xuICBwID0gbjtcbiAgZG8ge1xuICAgIG0gPSBzLmhlYWRbLS1wXTtcbiAgICBzLmhlYWRbcF0gPSAobSA+PSB3c2l6ZSA/IG0gLSB3c2l6ZSA6IDApO1xuICB9IHdoaWxlICgtLW4pO1xuICBuID0gd3NpemU7XG4vLyNpZm5kZWYgRkFTVEVTVFxuICBwID0gbjtcbiAgZG8ge1xuICAgIG0gPSBzLnByZXZbLS1wXTtcbiAgICBzLnByZXZbcF0gPSAobSA+PSB3c2l6ZSA/IG0gLSB3c2l6ZSA6IDApO1xuICAgIC8qIElmIG4gaXMgbm90IG9uIGFueSBoYXNoIGNoYWluLCBwcmV2W25dIGlzIGdhcmJhZ2UgYnV0XG4gICAgICogaXRzIHZhbHVlIHdpbGwgbmV2ZXIgYmUgdXNlZC5cbiAgICAgKi9cbiAgfSB3aGlsZSAoLS1uKTtcbi8vI2VuZGlmXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuZXctY2FwICovXG5sZXQgSEFTSF9aTElCID0gKHMsIHByZXYsIGRhdGEpID0+ICgocHJldiA8PCBzLmhhc2hfc2hpZnQpIF4gZGF0YSkgJiBzLmhhc2hfbWFzaztcbi8vIFRoaXMgaGFzaCBjYXVzZXMgbGVzcyBjb2xsaXNpb25zLCBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3Bha28vaXNzdWVzLzEzNVxuLy8gQnV0IGJyZWFrcyBiaW5hcnkgY29tcGF0aWJpbGl0eVxuLy9sZXQgSEFTSF9GQVNUID0gKHMsIHByZXYsIGRhdGEpID0+ICgocHJldiA8PCA4KSArIChwcmV2ID4+IDgpICsgKGRhdGEgPDwgNCkpICYgcy5oYXNoX21hc2s7XG5sZXQgSEFTSCA9IEhBU0hfWkxJQjtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGbHVzaCBhcyBtdWNoIHBlbmRpbmcgb3V0cHV0IGFzIHBvc3NpYmxlLiBBbGwgZGVmbGF0ZSgpIG91dHB1dCwgZXhjZXB0IGZvclxuICogc29tZSBkZWZsYXRlX3N0b3JlZCgpIG91dHB1dCwgZ29lcyB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gc28gc29tZVxuICogYXBwbGljYXRpb25zIG1heSB3aXNoIHRvIG1vZGlmeSBpdCB0byBhdm9pZCBhbGxvY2F0aW5nIGEgbGFyZ2VcbiAqIHN0cm0tPm5leHRfb3V0IGJ1ZmZlciBhbmQgY29weWluZyBpbnRvIGl0LiAoU2VlIGFsc28gcmVhZF9idWYoKSkuXG4gKi9cbmNvbnN0IGZsdXNoX3BlbmRpbmcgPSAoc3RybSkgPT4ge1xuICBjb25zdCBzID0gc3RybS5zdGF0ZTtcblxuICAvL190cl9mbHVzaF9iaXRzKHMpO1xuICBsZXQgbGVuID0gcy5wZW5kaW5nO1xuICBpZiAobGVuID4gc3RybS5hdmFpbF9vdXQpIHtcbiAgICBsZW4gPSBzdHJtLmF2YWlsX291dDtcbiAgfVxuICBpZiAobGVuID09PSAwKSB7IHJldHVybjsgfVxuXG4gIHN0cm0ub3V0cHV0LnNldChzLnBlbmRpbmdfYnVmLnN1YmFycmF5KHMucGVuZGluZ19vdXQsIHMucGVuZGluZ19vdXQgKyBsZW4pLCBzdHJtLm5leHRfb3V0KTtcbiAgc3RybS5uZXh0X291dCAgKz0gbGVuO1xuICBzLnBlbmRpbmdfb3V0ICArPSBsZW47XG4gIHN0cm0udG90YWxfb3V0ICs9IGxlbjtcbiAgc3RybS5hdmFpbF9vdXQgLT0gbGVuO1xuICBzLnBlbmRpbmcgICAgICAtPSBsZW47XG4gIGlmIChzLnBlbmRpbmcgPT09IDApIHtcbiAgICBzLnBlbmRpbmdfb3V0ID0gMDtcbiAgfVxufTtcblxuXG5jb25zdCBmbHVzaF9ibG9ja19vbmx5ID0gKHMsIGxhc3QpID0+IHtcbiAgX3RyX2ZsdXNoX2Jsb2NrKHMsIChzLmJsb2NrX3N0YXJ0ID49IDAgPyBzLmJsb2NrX3N0YXJ0IDogLTEpLCBzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydCwgbGFzdCk7XG4gIHMuYmxvY2tfc3RhcnQgPSBzLnN0cnN0YXJ0O1xuICBmbHVzaF9wZW5kaW5nKHMuc3RybSk7XG59O1xuXG5cbmNvbnN0IHB1dF9ieXRlID0gKHMsIGIpID0+IHtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBiO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBQdXQgYSBzaG9ydCBpbiB0aGUgcGVuZGluZyBidWZmZXIuIFRoZSAxNi1iaXQgdmFsdWUgaXMgcHV0IGluIE1TQiBvcmRlci5cbiAqIElOIGFzc2VydGlvbjogdGhlIHN0cmVhbSBzdGF0ZSBpcyBjb3JyZWN0IGFuZCB0aGVyZSBpcyBlbm91Z2ggcm9vbSBpblxuICogcGVuZGluZ19idWYuXG4gKi9cbmNvbnN0IHB1dFNob3J0TVNCID0gKHMsIGIpID0+IHtcblxuICAvLyAgcHV0X2J5dGUocywgKEJ5dGUpKGIgPj4gOCkpO1xuLy8gIHB1dF9ieXRlKHMsIChCeXRlKShiICYgMHhmZikpO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IChiID4+PiA4KSAmIDB4ZmY7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gYiAmIDB4ZmY7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmVhZCBhIG5ldyBidWZmZXIgZnJvbSB0aGUgY3VycmVudCBpbnB1dCBzdHJlYW0sIHVwZGF0ZSB0aGUgYWRsZXIzMlxuICogYW5kIHRvdGFsIG51bWJlciBvZiBieXRlcyByZWFkLiAgQWxsIGRlZmxhdGUoKSBpbnB1dCBnb2VzIHRocm91Z2hcbiAqIHRoaXMgZnVuY3Rpb24gc28gc29tZSBhcHBsaWNhdGlvbnMgbWF5IHdpc2ggdG8gbW9kaWZ5IGl0IHRvIGF2b2lkXG4gKiBhbGxvY2F0aW5nIGEgbGFyZ2Ugc3RybS0+aW5wdXQgYnVmZmVyIGFuZCBjb3B5aW5nIGZyb20gaXQuXG4gKiAoU2VlIGFsc28gZmx1c2hfcGVuZGluZygpKS5cbiAqL1xuY29uc3QgcmVhZF9idWYgPSAoc3RybSwgYnVmLCBzdGFydCwgc2l6ZSkgPT4ge1xuXG4gIGxldCBsZW4gPSBzdHJtLmF2YWlsX2luO1xuXG4gIGlmIChsZW4gPiBzaXplKSB7IGxlbiA9IHNpemU7IH1cbiAgaWYgKGxlbiA9PT0gMCkgeyByZXR1cm4gMDsgfVxuXG4gIHN0cm0uYXZhaWxfaW4gLT0gbGVuO1xuXG4gIC8vIHptZW1jcHkoYnVmLCBzdHJtLT5uZXh0X2luLCBsZW4pO1xuICBidWYuc2V0KHN0cm0uaW5wdXQuc3ViYXJyYXkoc3RybS5uZXh0X2luLCBzdHJtLm5leHRfaW4gKyBsZW4pLCBzdGFydCk7XG4gIGlmIChzdHJtLnN0YXRlLndyYXAgPT09IDEpIHtcbiAgICBzdHJtLmFkbGVyID0gYWRsZXIzMl8xKHN0cm0uYWRsZXIsIGJ1ZiwgbGVuLCBzdGFydCk7XG4gIH1cblxuICBlbHNlIGlmIChzdHJtLnN0YXRlLndyYXAgPT09IDIpIHtcbiAgICBzdHJtLmFkbGVyID0gY3JjMzJfMShzdHJtLmFkbGVyLCBidWYsIGxlbiwgc3RhcnQpO1xuICB9XG5cbiAgc3RybS5uZXh0X2luICs9IGxlbjtcbiAgc3RybS50b3RhbF9pbiArPSBsZW47XG5cbiAgcmV0dXJuIGxlbjtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZXQgbWF0Y2hfc3RhcnQgdG8gdGhlIGxvbmdlc3QgbWF0Y2ggc3RhcnRpbmcgYXQgdGhlIGdpdmVuIHN0cmluZyBhbmRcbiAqIHJldHVybiBpdHMgbGVuZ3RoLiBNYXRjaGVzIHNob3J0ZXIgb3IgZXF1YWwgdG8gcHJldl9sZW5ndGggYXJlIGRpc2NhcmRlZCxcbiAqIGluIHdoaWNoIGNhc2UgdGhlIHJlc3VsdCBpcyBlcXVhbCB0byBwcmV2X2xlbmd0aCBhbmQgbWF0Y2hfc3RhcnQgaXNcbiAqIGdhcmJhZ2UuXG4gKiBJTiBhc3NlcnRpb25zOiBjdXJfbWF0Y2ggaXMgdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW4gZm9yIHRoZSBjdXJyZW50XG4gKiAgIHN0cmluZyAoc3Ryc3RhcnQpIGFuZCBpdHMgZGlzdGFuY2UgaXMgPD0gTUFYX0RJU1QsIGFuZCBwcmV2X2xlbmd0aCA+PSAxXG4gKiBPVVQgYXNzZXJ0aW9uOiB0aGUgbWF0Y2ggbGVuZ3RoIGlzIG5vdCBncmVhdGVyIHRoYW4gcy0+bG9va2FoZWFkLlxuICovXG5jb25zdCBsb25nZXN0X21hdGNoID0gKHMsIGN1cl9tYXRjaCkgPT4ge1xuXG4gIGxldCBjaGFpbl9sZW5ndGggPSBzLm1heF9jaGFpbl9sZW5ndGg7ICAgICAgLyogbWF4IGhhc2ggY2hhaW4gbGVuZ3RoICovXG4gIGxldCBzY2FuID0gcy5zdHJzdGFydDsgLyogY3VycmVudCBzdHJpbmcgKi9cbiAgbGV0IG1hdGNoOyAgICAgICAgICAgICAgICAgICAgICAgLyogbWF0Y2hlZCBzdHJpbmcgKi9cbiAgbGV0IGxlbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBtYXRjaCAqL1xuICBsZXQgYmVzdF9sZW4gPSBzLnByZXZfbGVuZ3RoOyAgICAgICAgICAgICAgLyogYmVzdCBtYXRjaCBsZW5ndGggc28gZmFyICovXG4gIGxldCBuaWNlX21hdGNoID0gcy5uaWNlX21hdGNoOyAgICAgICAgICAgICAvKiBzdG9wIGlmIG1hdGNoIGxvbmcgZW5vdWdoICovXG4gIGNvbnN0IGxpbWl0ID0gKHMuc3Ryc3RhcnQgPiAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkgP1xuICAgICAgcy5zdHJzdGFydCAtIChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIDogMC8qTklMKi87XG5cbiAgY29uc3QgX3dpbiA9IHMud2luZG93OyAvLyBzaG9ydGN1dFxuXG4gIGNvbnN0IHdtYXNrID0gcy53X21hc2s7XG4gIGNvbnN0IHByZXYgID0gcy5wcmV2O1xuXG4gIC8qIFN0b3Agd2hlbiBjdXJfbWF0Y2ggYmVjb21lcyA8PSBsaW1pdC4gVG8gc2ltcGxpZnkgdGhlIGNvZGUsXG4gICAqIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmcgb2Ygd2luZG93IGluZGV4IDAuXG4gICAqL1xuXG4gIGNvbnN0IHN0cmVuZCA9IHMuc3Ryc3RhcnQgKyBNQVhfTUFUQ0g7XG4gIGxldCBzY2FuX2VuZDEgID0gX3dpbltzY2FuICsgYmVzdF9sZW4gLSAxXTtcbiAgbGV0IHNjYW5fZW5kICAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbl07XG5cbiAgLyogVGhlIGNvZGUgaXMgb3B0aW1pemVkIGZvciBIQVNIX0JJVFMgPj0gOCBhbmQgTUFYX01BVENILTIgbXVsdGlwbGUgb2YgMTYuXG4gICAqIEl0IGlzIGVhc3kgdG8gZ2V0IHJpZCBvZiB0aGlzIG9wdGltaXphdGlvbiBpZiBuZWNlc3NhcnkuXG4gICAqL1xuICAvLyBBc3NlcnQocy0+aGFzaF9iaXRzID49IDggJiYgTUFYX01BVENIID09IDI1OCwgXCJDb2RlIHRvbyBjbGV2ZXJcIik7XG5cbiAgLyogRG8gbm90IHdhc3RlIHRvbyBtdWNoIHRpbWUgaWYgd2UgYWxyZWFkeSBoYXZlIGEgZ29vZCBtYXRjaDogKi9cbiAgaWYgKHMucHJldl9sZW5ndGggPj0gcy5nb29kX21hdGNoKSB7XG4gICAgY2hhaW5fbGVuZ3RoID4+PSAyO1xuICB9XG4gIC8qIERvIG5vdCBsb29rIGZvciBtYXRjaGVzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBpbnB1dC4gVGhpcyBpcyBuZWNlc3NhcnlcbiAgICogdG8gbWFrZSBkZWZsYXRlIGRldGVybWluaXN0aWMuXG4gICAqL1xuICBpZiAobmljZV9tYXRjaCA+IHMubG9va2FoZWFkKSB7IG5pY2VfbWF0Y2ggPSBzLmxvb2thaGVhZDsgfVxuXG4gIC8vIEFzc2VydCgodWxnKXMtPnN0cnN0YXJ0IDw9IHMtPndpbmRvd19zaXplLU1JTl9MT09LQUhFQUQsIFwibmVlZCBsb29rYWhlYWRcIik7XG5cbiAgZG8ge1xuICAgIC8vIEFzc2VydChjdXJfbWF0Y2ggPCBzLT5zdHJzdGFydCwgXCJubyBmdXR1cmVcIik7XG4gICAgbWF0Y2ggPSBjdXJfbWF0Y2g7XG5cbiAgICAvKiBTa2lwIHRvIG5leHQgbWF0Y2ggaWYgdGhlIG1hdGNoIGxlbmd0aCBjYW5ub3QgaW5jcmVhc2VcbiAgICAgKiBvciBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGlzIGxlc3MgdGhhbiAyLiAgTm90ZSB0aGF0IHRoZSBjaGVja3MgYmVsb3dcbiAgICAgKiBmb3IgaW5zdWZmaWNpZW50IGxvb2thaGVhZCBvbmx5IG9jY3VyIG9jY2FzaW9uYWxseSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgKiByZWFzb25zLiAgVGhlcmVmb3JlIHVuaW5pdGlhbGl6ZWQgbWVtb3J5IHdpbGwgYmUgYWNjZXNzZWQsIGFuZFxuICAgICAqIGNvbmRpdGlvbmFsIGp1bXBzIHdpbGwgYmUgbWFkZSB0aGF0IGRlcGVuZCBvbiB0aG9zZSB2YWx1ZXMuXG4gICAgICogSG93ZXZlciB0aGUgbGVuZ3RoIG9mIHRoZSBtYXRjaCBpcyBsaW1pdGVkIHRvIHRoZSBsb29rYWhlYWQsIHNvXG4gICAgICogdGhlIG91dHB1dCBvZiBkZWZsYXRlIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgdW5pbml0aWFsaXplZCB2YWx1ZXMuXG4gICAgICovXG5cbiAgICBpZiAoX3dpblttYXRjaCArIGJlc3RfbGVuXSAgICAgIT09IHNjYW5fZW5kICB8fFxuICAgICAgICBfd2luW21hdGNoICsgYmVzdF9sZW4gLSAxXSAhPT0gc2Nhbl9lbmQxIHx8XG4gICAgICAgIF93aW5bbWF0Y2hdICAgICAgICAgICAgICAgICE9PSBfd2luW3NjYW5dIHx8XG4gICAgICAgIF93aW5bKyttYXRjaF0gICAgICAgICAgICAgICE9PSBfd2luW3NjYW4gKyAxXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyogVGhlIGNoZWNrIGF0IGJlc3RfbGVuLTEgY2FuIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCB3aWxsIGJlIG1hZGVcbiAgICAgKiBhZ2FpbiBsYXRlci4gKFRoaXMgaGV1cmlzdGljIGlzIG5vdCBhbHdheXMgYSB3aW4uKVxuICAgICAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY29tcGFyZSBzY2FuWzJdIGFuZCBtYXRjaFsyXSBzaW5jZSB0aGV5XG4gICAgICogYXJlIGFsd2F5cyBlcXVhbCB3aGVuIHRoZSBvdGhlciBieXRlcyBtYXRjaCwgZ2l2ZW4gdGhhdFxuICAgICAqIHRoZSBoYXNoIGtleXMgYXJlIGVxdWFsIGFuZCB0aGF0IEhBU0hfQklUUyA+PSA4LlxuICAgICAqL1xuICAgIHNjYW4gKz0gMjtcbiAgICBtYXRjaCsrO1xuICAgIC8vIEFzc2VydCgqc2NhbiA9PSAqbWF0Y2gsIFwibWF0Y2hbMl0/XCIpO1xuXG4gICAgLyogV2UgY2hlY2sgZm9yIGluc3VmZmljaWVudCBsb29rYWhlYWQgb25seSBldmVyeSA4dGggY29tcGFyaXNvbjtcbiAgICAgKiB0aGUgMjU2dGggY2hlY2sgd2lsbCBiZSBtYWRlIGF0IHN0cnN0YXJ0KzI1OC5cbiAgICAgKi9cbiAgICBkbyB7XG4gICAgICAvKmpzaGludCBub2VtcHR5OmZhbHNlKi9cbiAgICB9IHdoaWxlIChfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgc2NhbiA8IHN0cmVuZCk7XG5cbiAgICAvLyBBc3NlcnQoc2NhbiA8PSBzLT53aW5kb3crKHVuc2lnbmVkKShzLT53aW5kb3dfc2l6ZS0xKSwgXCJ3aWxkIHNjYW5cIik7XG5cbiAgICBsZW4gPSBNQVhfTUFUQ0ggLSAoc3RyZW5kIC0gc2Nhbik7XG4gICAgc2NhbiA9IHN0cmVuZCAtIE1BWF9NQVRDSDtcblxuICAgIGlmIChsZW4gPiBiZXN0X2xlbikge1xuICAgICAgcy5tYXRjaF9zdGFydCA9IGN1cl9tYXRjaDtcbiAgICAgIGJlc3RfbGVuID0gbGVuO1xuICAgICAgaWYgKGxlbiA+PSBuaWNlX21hdGNoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2Nhbl9lbmQxICA9IF93aW5bc2NhbiArIGJlc3RfbGVuIC0gMV07XG4gICAgICBzY2FuX2VuZCAgID0gX3dpbltzY2FuICsgYmVzdF9sZW5dO1xuICAgIH1cbiAgfSB3aGlsZSAoKGN1cl9tYXRjaCA9IHByZXZbY3VyX21hdGNoICYgd21hc2tdKSA+IGxpbWl0ICYmIC0tY2hhaW5fbGVuZ3RoICE9PSAwKTtcblxuICBpZiAoYmVzdF9sZW4gPD0gcy5sb29rYWhlYWQpIHtcbiAgICByZXR1cm4gYmVzdF9sZW47XG4gIH1cbiAgcmV0dXJuIHMubG9va2FoZWFkO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZpbGwgdGhlIHdpbmRvdyB3aGVuIHRoZSBsb29rYWhlYWQgYmVjb21lcyBpbnN1ZmZpY2llbnQuXG4gKiBVcGRhdGVzIHN0cnN0YXJ0IGFuZCBsb29rYWhlYWQuXG4gKlxuICogSU4gYXNzZXJ0aW9uOiBsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEXG4gKiBPVVQgYXNzZXJ0aW9uczogc3Ryc3RhcnQgPD0gd2luZG93X3NpemUtTUlOX0xPT0tBSEVBRFxuICogICAgQXQgbGVhc3Qgb25lIGJ5dGUgaGFzIGJlZW4gcmVhZCwgb3IgYXZhaWxfaW4gPT0gMDsgcmVhZHMgYXJlXG4gKiAgICBwZXJmb3JtZWQgZm9yIGF0IGxlYXN0IHR3byBieXRlcyAocmVxdWlyZWQgZm9yIHRoZSB6aXAgdHJhbnNsYXRlX2VvbFxuICogICAgb3B0aW9uIC0tIG5vdCBzdXBwb3J0ZWQgaGVyZSkuXG4gKi9cbmNvbnN0IGZpbGxfd2luZG93ID0gKHMpID0+IHtcblxuICBjb25zdCBfd19zaXplID0gcy53X3NpemU7XG4gIGxldCBuLCBtb3JlLCBzdHI7XG5cbiAgLy9Bc3NlcnQocy0+bG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCwgXCJhbHJlYWR5IGVub3VnaCBsb29rYWhlYWRcIik7XG5cbiAgZG8ge1xuICAgIG1vcmUgPSBzLndpbmRvd19zaXplIC0gcy5sb29rYWhlYWQgLSBzLnN0cnN0YXJ0O1xuXG4gICAgLy8gSlMgaW50cyBoYXZlIDMyIGJpdCwgYmxvY2sgYmVsb3cgbm90IG5lZWRlZFxuICAgIC8qIERlYWwgd2l0aCAhQCMkJSA2NEsgbGltaXQ6ICovXG4gICAgLy9pZiAoc2l6ZW9mKGludCkgPD0gMikge1xuICAgIC8vICAgIGlmIChtb3JlID09IDAgJiYgcy0+c3Ryc3RhcnQgPT0gMCAmJiBzLT5sb29rYWhlYWQgPT0gMCkge1xuICAgIC8vICAgICAgICBtb3JlID0gd3NpemU7XG4gICAgLy9cbiAgICAvLyAgfSBlbHNlIGlmIChtb3JlID09ICh1bnNpZ25lZCkoLTEpKSB7XG4gICAgLy8gICAgICAgIC8qIFZlcnkgdW5saWtlbHksIGJ1dCBwb3NzaWJsZSBvbiAxNiBiaXQgbWFjaGluZSBpZlxuICAgIC8vICAgICAgICAgKiBzdHJzdGFydCA9PSAwICYmIGxvb2thaGVhZCA9PSAxIChpbnB1dCBkb25lIGEgYnl0ZSBhdCB0aW1lKVxuICAgIC8vICAgICAgICAgKi9cbiAgICAvLyAgICAgICAgbW9yZS0tO1xuICAgIC8vICAgIH1cbiAgICAvL31cblxuXG4gICAgLyogSWYgdGhlIHdpbmRvdyBpcyBhbG1vc3QgZnVsbCBhbmQgdGhlcmUgaXMgaW5zdWZmaWNpZW50IGxvb2thaGVhZCxcbiAgICAgKiBtb3ZlIHRoZSB1cHBlciBoYWxmIHRvIHRoZSBsb3dlciBvbmUgdG8gbWFrZSByb29tIGluIHRoZSB1cHBlciBoYWxmLlxuICAgICAqL1xuICAgIGlmIChzLnN0cnN0YXJ0ID49IF93X3NpemUgKyAoX3dfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSB7XG5cbiAgICAgIHMud2luZG93LnNldChzLndpbmRvdy5zdWJhcnJheShfd19zaXplLCBfd19zaXplICsgX3dfc2l6ZSAtIG1vcmUpLCAwKTtcbiAgICAgIHMubWF0Y2hfc3RhcnQgLT0gX3dfc2l6ZTtcbiAgICAgIHMuc3Ryc3RhcnQgLT0gX3dfc2l6ZTtcbiAgICAgIC8qIHdlIG5vdyBoYXZlIHN0cnN0YXJ0ID49IE1BWF9ESVNUICovXG4gICAgICBzLmJsb2NrX3N0YXJ0IC09IF93X3NpemU7XG4gICAgICBpZiAocy5pbnNlcnQgPiBzLnN0cnN0YXJ0KSB7XG4gICAgICAgIHMuaW5zZXJ0ID0gcy5zdHJzdGFydDtcbiAgICAgIH1cbiAgICAgIHNsaWRlX2hhc2gocyk7XG4gICAgICBtb3JlICs9IF93X3NpemU7XG4gICAgfVxuICAgIGlmIChzLnN0cm0uYXZhaWxfaW4gPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8qIElmIHRoZXJlIHdhcyBubyBzbGlkaW5nOlxuICAgICAqICAgIHN0cnN0YXJ0IDw9IFdTSVpFK01BWF9ESVNULTEgJiYgbG9va2FoZWFkIDw9IE1JTl9MT09LQUhFQUQgLSAxICYmXG4gICAgICogICAgbW9yZSA9PSB3aW5kb3dfc2l6ZSAtIGxvb2thaGVhZCAtIHN0cnN0YXJ0XG4gICAgICogPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIChNSU5fTE9PS0FIRUFELTEgKyBXU0laRSArIE1BWF9ESVNULTEpXG4gICAgICogPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIDIqV1NJWkUgKyAyXG4gICAgICogSW4gdGhlIEJJR19NRU0gb3IgTU1BUCBjYXNlIChub3QgeWV0IHN1cHBvcnRlZCksXG4gICAgICogICB3aW5kb3dfc2l6ZSA9PSBpbnB1dF9zaXplICsgTUlOX0xPT0tBSEVBRCAgJiZcbiAgICAgKiAgIHN0cnN0YXJ0ICsgcy0+bG9va2FoZWFkIDw9IGlucHV0X3NpemUgPT4gbW9yZSA+PSBNSU5fTE9PS0FIRUFELlxuICAgICAqIE90aGVyd2lzZSwgd2luZG93X3NpemUgPT0gMipXU0laRSBzbyBtb3JlID49IDIuXG4gICAgICogSWYgdGhlcmUgd2FzIHNsaWRpbmcsIG1vcmUgPj0gV1NJWkUuIFNvIGluIGFsbCBjYXNlcywgbW9yZSA+PSAyLlxuICAgICAqL1xuICAgIC8vQXNzZXJ0KG1vcmUgPj0gMiwgXCJtb3JlIDwgMlwiKTtcbiAgICBuID0gcmVhZF9idWYocy5zdHJtLCBzLndpbmRvdywgcy5zdHJzdGFydCArIHMubG9va2FoZWFkLCBtb3JlKTtcbiAgICBzLmxvb2thaGVhZCArPSBuO1xuXG4gICAgLyogSW5pdGlhbGl6ZSB0aGUgaGFzaCB2YWx1ZSBub3cgdGhhdCB3ZSBoYXZlIHNvbWUgaW5wdXQ6ICovXG4gICAgaWYgKHMubG9va2FoZWFkICsgcy5pbnNlcnQgPj0gTUlOX01BVENIKSB7XG4gICAgICBzdHIgPSBzLnN0cnN0YXJ0IC0gcy5pbnNlcnQ7XG4gICAgICBzLmluc19oID0gcy53aW5kb3dbc3RyXTtcblxuICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyAxXSk7ICovXG4gICAgICBzLmluc19oID0gSEFTSChzLCBzLmluc19oLCBzLndpbmRvd1tzdHIgKyAxXSk7XG4vLyNpZiBNSU5fTUFUQ0ggIT0gM1xuLy8gICAgICAgIENhbGwgdXBkYXRlX2hhc2goKSBNSU5fTUFUQ0gtMyBtb3JlIHRpbWVzXG4vLyNlbmRpZlxuICAgICAgd2hpbGUgKHMuaW5zZXJ0KSB7XG4gICAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMtPmluc19oLCBzLT53aW5kb3dbc3RyICsgTUlOX01BVENILTFdKTsgKi9cbiAgICAgICAgcy5pbnNfaCA9IEhBU0gocywgcy5pbnNfaCwgcy53aW5kb3dbc3RyICsgTUlOX01BVENIIC0gMV0pO1xuXG4gICAgICAgIHMucHJldltzdHIgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHN0cjtcbiAgICAgICAgc3RyKys7XG4gICAgICAgIHMuaW5zZXJ0LS07XG4gICAgICAgIGlmIChzLmxvb2thaGVhZCArIHMuaW5zZXJ0IDwgTUlOX01BVENIKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyogSWYgdGhlIHdob2xlIGlucHV0IGhhcyBsZXNzIHRoYW4gTUlOX01BVENIIGJ5dGVzLCBpbnNfaCBpcyBnYXJiYWdlLFxuICAgICAqIGJ1dCB0aGlzIGlzIG5vdCBpbXBvcnRhbnQgc2luY2Ugb25seSBsaXRlcmFsIGJ5dGVzIHdpbGwgYmUgZW1pdHRlZC5cbiAgICAgKi9cblxuICB9IHdoaWxlIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgcy5zdHJtLmF2YWlsX2luICE9PSAwKTtcblxuICAvKiBJZiB0aGUgV0lOX0lOSVQgYnl0ZXMgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgY3VycmVudCBkYXRhIGhhdmUgbmV2ZXIgYmVlblxuICAgKiB3cml0dGVuLCB0aGVuIHplcm8gdGhvc2UgYnl0ZXMgaW4gb3JkZXIgdG8gYXZvaWQgbWVtb3J5IGNoZWNrIHJlcG9ydHMgb2ZcbiAgICogdGhlIHVzZSBvZiB1bmluaXRpYWxpemVkIChvciB1bmluaXRpYWxpc2VkIGFzIEp1bGlhbiB3cml0ZXMpIGJ5dGVzIGJ5XG4gICAqIHRoZSBsb25nZXN0IG1hdGNoIHJvdXRpbmVzLiAgVXBkYXRlIHRoZSBoaWdoIHdhdGVyIG1hcmsgZm9yIHRoZSBuZXh0XG4gICAqIHRpbWUgdGhyb3VnaCBoZXJlLiAgV0lOX0lOSVQgaXMgc2V0IHRvIE1BWF9NQVRDSCBzaW5jZSB0aGUgbG9uZ2VzdCBtYXRjaFxuICAgKiByb3V0aW5lcyBhbGxvdyBzY2FubmluZyB0byBzdHJzdGFydCArIE1BWF9NQVRDSCwgaWdub3JpbmcgbG9va2FoZWFkLlxuICAgKi9cbi8vICBpZiAocy5oaWdoX3dhdGVyIDwgcy53aW5kb3dfc2l6ZSkge1xuLy8gICAgY29uc3QgY3VyciA9IHMuc3Ryc3RhcnQgKyBzLmxvb2thaGVhZDtcbi8vICAgIGxldCBpbml0ID0gMDtcbi8vXG4vLyAgICBpZiAocy5oaWdoX3dhdGVyIDwgY3Vycikge1xuLy8gICAgICAvKiBQcmV2aW91cyBoaWdoIHdhdGVyIG1hcmsgYmVsb3cgY3VycmVudCBkYXRhIC0tIHplcm8gV0lOX0lOSVRcbi8vICAgICAgICogYnl0ZXMgb3IgdXAgdG8gZW5kIG9mIHdpbmRvdywgd2hpY2hldmVyIGlzIGxlc3MuXG4vLyAgICAgICAqL1xuLy8gICAgICBpbml0ID0gcy53aW5kb3dfc2l6ZSAtIGN1cnI7XG4vLyAgICAgIGlmIChpbml0ID4gV0lOX0lOSVQpXG4vLyAgICAgICAgaW5pdCA9IFdJTl9JTklUO1xuLy8gICAgICB6bWVtemVybyhzLT53aW5kb3cgKyBjdXJyLCAodW5zaWduZWQpaW5pdCk7XG4vLyAgICAgIHMtPmhpZ2hfd2F0ZXIgPSBjdXJyICsgaW5pdDtcbi8vICAgIH1cbi8vICAgIGVsc2UgaWYgKHMtPmhpZ2hfd2F0ZXIgPCAodWxnKWN1cnIgKyBXSU5fSU5JVCkge1xuLy8gICAgICAvKiBIaWdoIHdhdGVyIG1hcmsgYXQgb3IgYWJvdmUgY3VycmVudCBkYXRhLCBidXQgYmVsb3cgY3VycmVudCBkYXRhXG4vLyAgICAgICAqIHBsdXMgV0lOX0lOSVQgLS0gemVybyBvdXQgdG8gY3VycmVudCBkYXRhIHBsdXMgV0lOX0lOSVQsIG9yIHVwXG4vLyAgICAgICAqIHRvIGVuZCBvZiB3aW5kb3csIHdoaWNoZXZlciBpcyBsZXNzLlxuLy8gICAgICAgKi9cbi8vICAgICAgaW5pdCA9ICh1bGcpY3VyciArIFdJTl9JTklUIC0gcy0+aGlnaF93YXRlcjtcbi8vICAgICAgaWYgKGluaXQgPiBzLT53aW5kb3dfc2l6ZSAtIHMtPmhpZ2hfd2F0ZXIpXG4vLyAgICAgICAgaW5pdCA9IHMtPndpbmRvd19zaXplIC0gcy0+aGlnaF93YXRlcjtcbi8vICAgICAgem1lbXplcm8ocy0+d2luZG93ICsgcy0+aGlnaF93YXRlciwgKHVuc2lnbmVkKWluaXQpO1xuLy8gICAgICBzLT5oaWdoX3dhdGVyICs9IGluaXQ7XG4vLyAgICB9XG4vLyAgfVxuLy9cbi8vICBBc3NlcnQoKHVsZylzLT5zdHJzdGFydCA8PSBzLT53aW5kb3dfc2l6ZSAtIE1JTl9MT09LQUhFQUQsXG4vLyAgICBcIm5vdCBlbm91Z2ggcm9vbSBmb3Igc2VhcmNoXCIpO1xufTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5IHdpdGhvdXQgY29tcHJlc3Npb24gYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBpbnB1dCBzdHJlYW0sIHJldHVyblxuICogdGhlIGN1cnJlbnQgYmxvY2sgc3RhdGUuXG4gKlxuICogSW4gY2FzZSBkZWZsYXRlUGFyYW1zKCkgaXMgdXNlZCB0byBsYXRlciBzd2l0Y2ggdG8gYSBub24temVybyBjb21wcmVzc2lvblxuICogbGV2ZWwsIHMtPm1hdGNoZXMgKG90aGVyd2lzZSB1bnVzZWQgd2hlbiBzdG9yaW5nKSBrZWVwcyB0cmFjayBvZiB0aGUgbnVtYmVyXG4gKiBvZiBoYXNoIHRhYmxlIHNsaWRlcyB0byBwZXJmb3JtLiBJZiBzLT5tYXRjaGVzIGlzIDEsIHRoZW4gb25lIGhhc2ggdGFibGVcbiAqIHNsaWRlIHdpbGwgYmUgZG9uZSB3aGVuIHN3aXRjaGluZy4gSWYgcy0+bWF0Y2hlcyBpcyAyLCB0aGUgbWF4aW11bSB2YWx1ZVxuICogYWxsb3dlZCBoZXJlLCB0aGVuIHRoZSBoYXNoIHRhYmxlIHdpbGwgYmUgY2xlYXJlZCwgc2luY2UgdHdvIG9yIG1vcmUgc2xpZGVzXG4gKiBpcyB0aGUgc2FtZSBhcyBhIGNsZWFyLlxuICpcbiAqIGRlZmxhdGVfc3RvcmVkKCkgaXMgd3JpdHRlbiB0byBtaW5pbWl6ZSB0aGUgbnVtYmVyIG9mIHRpbWVzIGFuIGlucHV0IGJ5dGUgaXNcbiAqIGNvcGllZC4gSXQgaXMgbW9zdCBlZmZpY2llbnQgd2l0aCBsYXJnZSBpbnB1dCBhbmQgb3V0cHV0IGJ1ZmZlcnMsIHdoaWNoXG4gKiBtYXhpbWl6ZXMgdGhlIG9wcG9ydHVuaXRlcyB0byBoYXZlIGEgc2luZ2xlIGNvcHkgZnJvbSBuZXh0X2luIHRvIG5leHRfb3V0LlxuICovXG5jb25zdCBkZWZsYXRlX3N0b3JlZCA9IChzLCBmbHVzaCkgPT4ge1xuXG4gIC8qIFNtYWxsZXN0IHdvcnRoeSBibG9jayBzaXplIHdoZW4gbm90IGZsdXNoaW5nIG9yIGZpbmlzaGluZy4gQnkgZGVmYXVsdFxuICAgKiB0aGlzIGlzIDMySy4gVGhpcyBjYW4gYmUgYXMgc21hbGwgYXMgNTA3IGJ5dGVzIGZvciBtZW1MZXZlbCA9PSAxLiBGb3JcbiAgICogbGFyZ2UgaW5wdXQgYW5kIG91dHB1dCBidWZmZXJzLCB0aGUgc3RvcmVkIGJsb2NrIHNpemUgd2lsbCBiZSBsYXJnZXIuXG4gICAqL1xuICBsZXQgbWluX2Jsb2NrID0gcy5wZW5kaW5nX2J1Zl9zaXplIC0gNSA+IHMud19zaXplID8gcy53X3NpemUgOiBzLnBlbmRpbmdfYnVmX3NpemUgLSA1O1xuXG4gIC8qIENvcHkgYXMgbWFueSBtaW5fYmxvY2sgb3IgbGFyZ2VyIHN0b3JlZCBibG9ja3MgZGlyZWN0bHkgdG8gbmV4dF9vdXQgYXNcbiAgICogcG9zc2libGUuIElmIGZsdXNoaW5nLCBjb3B5IHRoZSByZW1haW5pbmcgYXZhaWxhYmxlIGlucHV0IHRvIG5leHRfb3V0IGFzXG4gICAqIHN0b3JlZCBibG9ja3MsIGlmIHRoZXJlIGlzIGVub3VnaCBzcGFjZS5cbiAgICovXG4gIGxldCBsZW4sIGxlZnQsIGhhdmUsIGxhc3QgPSAwO1xuICBsZXQgdXNlZCA9IHMuc3RybS5hdmFpbF9pbjtcbiAgZG8ge1xuICAgIC8qIFNldCBsZW4gdG8gdGhlIG1heGltdW0gc2l6ZSBibG9jayB0aGF0IHdlIGNhbiBjb3B5IGRpcmVjdGx5IHdpdGggdGhlXG4gICAgICogYXZhaWxhYmxlIGlucHV0IGRhdGEgYW5kIG91dHB1dCBzcGFjZS4gU2V0IGxlZnQgdG8gaG93IG11Y2ggb2YgdGhhdFxuICAgICAqIHdvdWxkIGJlIGNvcGllZCBmcm9tIHdoYXQncyBsZWZ0IGluIHRoZSB3aW5kb3cuXG4gICAgICovXG4gICAgbGVuID0gNjU1MzUvKiBNQVhfU1RPUkVEICovOyAgICAgLyogbWF4aW11bSBkZWZsYXRlIHN0b3JlZCBibG9jayBsZW5ndGggKi9cbiAgICBoYXZlID0gKHMuYmlfdmFsaWQgKyA0MikgPj4gMzsgICAgIC8qIG51bWJlciBvZiBoZWFkZXIgYnl0ZXMgKi9cbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA8IGhhdmUpIHsgICAgICAgICAvKiBuZWVkIHJvb20gZm9yIGhlYWRlciAqL1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICAgLyogbWF4aW11bSBzdG9yZWQgYmxvY2sgbGVuZ3RoIHRoYXQgd2lsbCBmaXQgaW4gYXZhaWxfb3V0OiAqL1xuICAgIGhhdmUgPSBzLnN0cm0uYXZhaWxfb3V0IC0gaGF2ZTtcbiAgICBsZWZ0ID0gcy5zdHJzdGFydCAtIHMuYmxvY2tfc3RhcnQ7ICAvKiBieXRlcyBsZWZ0IGluIHdpbmRvdyAqL1xuICAgIGlmIChsZW4gPiBsZWZ0ICsgcy5zdHJtLmF2YWlsX2luKSB7XG4gICAgICBsZW4gPSBsZWZ0ICsgcy5zdHJtLmF2YWlsX2luOyAgIC8qIGxpbWl0IGxlbiB0byB0aGUgaW5wdXQgKi9cbiAgICB9XG4gICAgaWYgKGxlbiA+IGhhdmUpIHtcbiAgICAgIGxlbiA9IGhhdmU7ICAgICAgICAgICAgIC8qIGxpbWl0IGxlbiB0byB0aGUgb3V0cHV0ICovXG4gICAgfVxuXG4gICAgLyogSWYgdGhlIHN0b3JlZCBibG9jayB3b3VsZCBiZSBsZXNzIHRoYW4gbWluX2Jsb2NrIGluIGxlbmd0aCwgb3IgaWZcbiAgICAgKiB1bmFibGUgdG8gY29weSBhbGwgb2YgdGhlIGF2YWlsYWJsZSBpbnB1dCB3aGVuIGZsdXNoaW5nLCB0aGVuIHRyeVxuICAgICAqIGNvcHlpbmcgdG8gdGhlIHdpbmRvdyBhbmQgdGhlIHBlbmRpbmcgYnVmZmVyIGluc3RlYWQuIEFsc28gZG9uJ3RcbiAgICAgKiB3cml0ZSBhbiBlbXB0eSBibG9jayB3aGVuIGZsdXNoaW5nIC0tIGRlZmxhdGUoKSBkb2VzIHRoYXQuXG4gICAgICovXG4gICAgaWYgKGxlbiA8IG1pbl9ibG9jayAmJiAoKGxlbiA9PT0gMCAmJiBmbHVzaCAhPT0gWl9GSU5JU0gkMykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdXNoID09PSBaX05PX0ZMVVNIJDIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAhPT0gbGVmdCArIHMuc3RybS5hdmFpbF9pbikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8qIE1ha2UgYSBkdW1teSBzdG9yZWQgYmxvY2sgaW4gcGVuZGluZyB0byBnZXQgdGhlIGhlYWRlciBieXRlcyxcbiAgICAgKiBpbmNsdWRpbmcgYW55IHBlbmRpbmcgYml0cy4gVGhpcyBhbHNvIHVwZGF0ZXMgdGhlIGRlYnVnZ2luZyBjb3VudHMuXG4gICAgICovXG4gICAgbGFzdCA9IGZsdXNoID09PSBaX0ZJTklTSCQzICYmIGxlbiA9PT0gbGVmdCArIHMuc3RybS5hdmFpbF9pbiA/IDEgOiAwO1xuICAgIF90cl9zdG9yZWRfYmxvY2socywgMCwgMCwgbGFzdCk7XG5cbiAgICAvKiBSZXBsYWNlIHRoZSBsZW5ndGhzIGluIHRoZSBkdW1teSBzdG9yZWQgYmxvY2sgd2l0aCBsZW4uICovXG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcgLSA0XSA9IGxlbjtcbiAgICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZyAtIDNdID0gbGVuID4+IDg7XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcgLSAyXSA9IH5sZW47XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcgLSAxXSA9IH5sZW4gPj4gODtcblxuICAgIC8qIFdyaXRlIHRoZSBzdG9yZWQgYmxvY2sgaGVhZGVyIGJ5dGVzLiAqL1xuICAgIGZsdXNoX3BlbmRpbmcocy5zdHJtKTtcblxuLy8jaWZkZWYgWkxJQl9ERUJVR1xuLy8gICAgLyogVXBkYXRlIGRlYnVnZ2luZyBjb3VudHMgZm9yIHRoZSBkYXRhIGFib3V0IHRvIGJlIGNvcGllZC4gKi9cbi8vICAgIHMtPmNvbXByZXNzZWRfbGVuICs9IGxlbiA8PCAzO1xuLy8gICAgcy0+Yml0c19zZW50ICs9IGxlbiA8PCAzO1xuLy8jZW5kaWZcblxuICAgIC8qIENvcHkgdW5jb21wcmVzc2VkIGJ5dGVzIGZyb20gdGhlIHdpbmRvdyB0byBuZXh0X291dC4gKi9cbiAgICBpZiAobGVmdCkge1xuICAgICAgaWYgKGxlZnQgPiBsZW4pIHtcbiAgICAgICAgbGVmdCA9IGxlbjtcbiAgICAgIH1cbiAgICAgIC8vem1lbWNweShzLT5zdHJtLT5uZXh0X291dCwgcy0+d2luZG93ICsgcy0+YmxvY2tfc3RhcnQsIGxlZnQpO1xuICAgICAgcy5zdHJtLm91dHB1dC5zZXQocy53aW5kb3cuc3ViYXJyYXkocy5ibG9ja19zdGFydCwgcy5ibG9ja19zdGFydCArIGxlZnQpLCBzLnN0cm0ubmV4dF9vdXQpO1xuICAgICAgcy5zdHJtLm5leHRfb3V0ICs9IGxlZnQ7XG4gICAgICBzLnN0cm0uYXZhaWxfb3V0IC09IGxlZnQ7XG4gICAgICBzLnN0cm0udG90YWxfb3V0ICs9IGxlZnQ7XG4gICAgICBzLmJsb2NrX3N0YXJ0ICs9IGxlZnQ7XG4gICAgICBsZW4gLT0gbGVmdDtcbiAgICB9XG5cbiAgICAvKiBDb3B5IHVuY29tcHJlc3NlZCBieXRlcyBkaXJlY3RseSBmcm9tIG5leHRfaW4gdG8gbmV4dF9vdXQsIHVwZGF0aW5nXG4gICAgICogdGhlIGNoZWNrIHZhbHVlLlxuICAgICAqL1xuICAgIGlmIChsZW4pIHtcbiAgICAgIHJlYWRfYnVmKHMuc3RybSwgcy5zdHJtLm91dHB1dCwgcy5zdHJtLm5leHRfb3V0LCBsZW4pO1xuICAgICAgcy5zdHJtLm5leHRfb3V0ICs9IGxlbjtcbiAgICAgIHMuc3RybS5hdmFpbF9vdXQgLT0gbGVuO1xuICAgICAgcy5zdHJtLnRvdGFsX291dCArPSBsZW47XG4gICAgfVxuICB9IHdoaWxlIChsYXN0ID09PSAwKTtcblxuICAvKiBVcGRhdGUgdGhlIHNsaWRpbmcgd2luZG93IHdpdGggdGhlIGxhc3Qgcy0+d19zaXplIGJ5dGVzIG9mIHRoZSBjb3BpZWRcbiAgICogZGF0YSwgb3IgYXBwZW5kIGFsbCBvZiB0aGUgY29waWVkIGRhdGEgdG8gdGhlIGV4aXN0aW5nIHdpbmRvdyBpZiBsZXNzXG4gICAqIHRoYW4gcy0+d19zaXplIGJ5dGVzIHdlcmUgY29waWVkLiBBbHNvIHVwZGF0ZSB0aGUgbnVtYmVyIG9mIGJ5dGVzIHRvXG4gICAqIGluc2VydCBpbiB0aGUgaGFzaCB0YWJsZXMsIGluIHRoZSBldmVudCB0aGF0IGRlZmxhdGVQYXJhbXMoKSBzd2l0Y2hlcyB0b1xuICAgKiBhIG5vbi16ZXJvIGNvbXByZXNzaW9uIGxldmVsLlxuICAgKi9cbiAgdXNlZCAtPSBzLnN0cm0uYXZhaWxfaW47ICAgIC8qIG51bWJlciBvZiBpbnB1dCBieXRlcyBkaXJlY3RseSBjb3BpZWQgKi9cbiAgaWYgKHVzZWQpIHtcbiAgICAvKiBJZiBhbnkgaW5wdXQgd2FzIHVzZWQsIHRoZW4gbm8gdW51c2VkIGlucHV0IHJlbWFpbnMgaW4gdGhlIHdpbmRvdyxcbiAgICAgKiB0aGVyZWZvcmUgcy0+YmxvY2tfc3RhcnQgPT0gcy0+c3Ryc3RhcnQuXG4gICAgICovXG4gICAgaWYgKHVzZWQgPj0gcy53X3NpemUpIHsgIC8qIHN1cHBsYW50IHRoZSBwcmV2aW91cyBoaXN0b3J5ICovXG4gICAgICBzLm1hdGNoZXMgPSAyOyAgICAgLyogY2xlYXIgaGFzaCAqL1xuICAgICAgLy96bWVtY3B5KHMtPndpbmRvdywgcy0+c3RybS0+bmV4dF9pbiAtIHMtPndfc2l6ZSwgcy0+d19zaXplKTtcbiAgICAgIHMud2luZG93LnNldChzLnN0cm0uaW5wdXQuc3ViYXJyYXkocy5zdHJtLm5leHRfaW4gLSBzLndfc2l6ZSwgcy5zdHJtLm5leHRfaW4pLCAwKTtcbiAgICAgIHMuc3Ryc3RhcnQgPSBzLndfc2l6ZTtcbiAgICAgIHMuaW5zZXJ0ID0gcy5zdHJzdGFydDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAocy53aW5kb3dfc2l6ZSAtIHMuc3Ryc3RhcnQgPD0gdXNlZCkge1xuICAgICAgICAvKiBTbGlkZSB0aGUgd2luZG93IGRvd24uICovXG4gICAgICAgIHMuc3Ryc3RhcnQgLT0gcy53X3NpemU7XG4gICAgICAgIC8vem1lbWNweShzLT53aW5kb3csIHMtPndpbmRvdyArIHMtPndfc2l6ZSwgcy0+c3Ryc3RhcnQpO1xuICAgICAgICBzLndpbmRvdy5zZXQocy53aW5kb3cuc3ViYXJyYXkocy53X3NpemUsIHMud19zaXplICsgcy5zdHJzdGFydCksIDApO1xuICAgICAgICBpZiAocy5tYXRjaGVzIDwgMikge1xuICAgICAgICAgIHMubWF0Y2hlcysrOyAgIC8qIGFkZCBhIHBlbmRpbmcgc2xpZGVfaGFzaCgpICovXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMuaW5zZXJ0ID4gcy5zdHJzdGFydCkge1xuICAgICAgICAgIHMuaW5zZXJ0ID0gcy5zdHJzdGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy96bWVtY3B5KHMtPndpbmRvdyArIHMtPnN0cnN0YXJ0LCBzLT5zdHJtLT5uZXh0X2luIC0gdXNlZCwgdXNlZCk7XG4gICAgICBzLndpbmRvdy5zZXQocy5zdHJtLmlucHV0LnN1YmFycmF5KHMuc3RybS5uZXh0X2luIC0gdXNlZCwgcy5zdHJtLm5leHRfaW4pLCBzLnN0cnN0YXJ0KTtcbiAgICAgIHMuc3Ryc3RhcnQgKz0gdXNlZDtcbiAgICAgIHMuaW5zZXJ0ICs9IHVzZWQgPiBzLndfc2l6ZSAtIHMuaW5zZXJ0ID8gcy53X3NpemUgLSBzLmluc2VydCA6IHVzZWQ7XG4gICAgfVxuICAgIHMuYmxvY2tfc3RhcnQgPSBzLnN0cnN0YXJ0O1xuICB9XG4gIGlmIChzLmhpZ2hfd2F0ZXIgPCBzLnN0cnN0YXJ0KSB7XG4gICAgcy5oaWdoX3dhdGVyID0gcy5zdHJzdGFydDtcbiAgfVxuXG4gIC8qIElmIHRoZSBsYXN0IGJsb2NrIHdhcyB3cml0dGVuIHRvIG5leHRfb3V0LCB0aGVuIGRvbmUuICovXG4gIGlmIChsYXN0KSB7XG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG5cbiAgLyogSWYgZmx1c2hpbmcgYW5kIGFsbCBpbnB1dCBoYXMgYmVlbiBjb25zdW1lZCwgdGhlbiBkb25lLiAqL1xuICBpZiAoZmx1c2ggIT09IFpfTk9fRkxVU0gkMiAmJiBmbHVzaCAhPT0gWl9GSU5JU0gkMyAmJlxuICAgIHMuc3RybS5hdmFpbF9pbiA9PT0gMCAmJiBzLnN0cnN0YXJ0ID09PSBzLmJsb2NrX3N0YXJ0KSB7XG4gICAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG4gIH1cblxuICAvKiBGaWxsIHRoZSB3aW5kb3cgd2l0aCBhbnkgcmVtYWluaW5nIGlucHV0LiAqL1xuICBoYXZlID0gcy53aW5kb3dfc2l6ZSAtIHMuc3Ryc3RhcnQ7XG4gIGlmIChzLnN0cm0uYXZhaWxfaW4gPiBoYXZlICYmIHMuYmxvY2tfc3RhcnQgPj0gcy53X3NpemUpIHtcbiAgICAvKiBTbGlkZSB0aGUgd2luZG93IGRvd24uICovXG4gICAgcy5ibG9ja19zdGFydCAtPSBzLndfc2l6ZTtcbiAgICBzLnN0cnN0YXJ0IC09IHMud19zaXplO1xuICAgIC8vem1lbWNweShzLT53aW5kb3csIHMtPndpbmRvdyArIHMtPndfc2l6ZSwgcy0+c3Ryc3RhcnQpO1xuICAgIHMud2luZG93LnNldChzLndpbmRvdy5zdWJhcnJheShzLndfc2l6ZSwgcy53X3NpemUgKyBzLnN0cnN0YXJ0KSwgMCk7XG4gICAgaWYgKHMubWF0Y2hlcyA8IDIpIHtcbiAgICAgIHMubWF0Y2hlcysrOyAgICAgICAvKiBhZGQgYSBwZW5kaW5nIHNsaWRlX2hhc2goKSAqL1xuICAgIH1cbiAgICBoYXZlICs9IHMud19zaXplOyAgICAgIC8qIG1vcmUgc3BhY2Ugbm93ICovXG4gICAgaWYgKHMuaW5zZXJ0ID4gcy5zdHJzdGFydCkge1xuICAgICAgcy5pbnNlcnQgPSBzLnN0cnN0YXJ0O1xuICAgIH1cbiAgfVxuICBpZiAoaGF2ZSA+IHMuc3RybS5hdmFpbF9pbikge1xuICAgIGhhdmUgPSBzLnN0cm0uYXZhaWxfaW47XG4gIH1cbiAgaWYgKGhhdmUpIHtcbiAgICByZWFkX2J1ZihzLnN0cm0sIHMud2luZG93LCBzLnN0cnN0YXJ0LCBoYXZlKTtcbiAgICBzLnN0cnN0YXJ0ICs9IGhhdmU7XG4gICAgcy5pbnNlcnQgKz0gaGF2ZSA+IHMud19zaXplIC0gcy5pbnNlcnQgPyBzLndfc2l6ZSAtIHMuaW5zZXJ0IDogaGF2ZTtcbiAgfVxuICBpZiAocy5oaWdoX3dhdGVyIDwgcy5zdHJzdGFydCkge1xuICAgIHMuaGlnaF93YXRlciA9IHMuc3Ryc3RhcnQ7XG4gIH1cblxuICAvKiBUaGVyZSB3YXMgbm90IGVub3VnaCBhdmFpbF9vdXQgdG8gd3JpdGUgYSBjb21wbGV0ZSB3b3J0aHkgb3IgZmx1c2hlZFxuICAgKiBzdG9yZWQgYmxvY2sgdG8gbmV4dF9vdXQuIFdyaXRlIGEgc3RvcmVkIGJsb2NrIHRvIHBlbmRpbmcgaW5zdGVhZCwgaWYgd2VcbiAgICogaGF2ZSBlbm91Z2ggaW5wdXQgZm9yIGEgd29ydGh5IGJsb2NrLCBvciBpZiBmbHVzaGluZyBhbmQgdGhlcmUgaXMgZW5vdWdoXG4gICAqIHJvb20gZm9yIHRoZSByZW1haW5pbmcgaW5wdXQgYXMgYSBzdG9yZWQgYmxvY2sgaW4gdGhlIHBlbmRpbmcgYnVmZmVyLlxuICAgKi9cbiAgaGF2ZSA9IChzLmJpX3ZhbGlkICsgNDIpID4+IDM7ICAgICAvKiBudW1iZXIgb2YgaGVhZGVyIGJ5dGVzICovXG4gICAgLyogbWF4aW11bSBzdG9yZWQgYmxvY2sgbGVuZ3RoIHRoYXQgd2lsbCBmaXQgaW4gcGVuZGluZzogKi9cbiAgaGF2ZSA9IHMucGVuZGluZ19idWZfc2l6ZSAtIGhhdmUgPiA2NTUzNS8qIE1BWF9TVE9SRUQgKi8gPyA2NTUzNS8qIE1BWF9TVE9SRUQgKi8gOiBzLnBlbmRpbmdfYnVmX3NpemUgLSBoYXZlO1xuICBtaW5fYmxvY2sgPSBoYXZlID4gcy53X3NpemUgPyBzLndfc2l6ZSA6IGhhdmU7XG4gIGxlZnQgPSBzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydDtcbiAgaWYgKGxlZnQgPj0gbWluX2Jsb2NrIHx8XG4gICAgICgobGVmdCB8fCBmbHVzaCA9PT0gWl9GSU5JU0gkMykgJiYgZmx1c2ggIT09IFpfTk9fRkxVU0gkMiAmJlxuICAgICBzLnN0cm0uYXZhaWxfaW4gPT09IDAgJiYgbGVmdCA8PSBoYXZlKSkge1xuICAgIGxlbiA9IGxlZnQgPiBoYXZlID8gaGF2ZSA6IGxlZnQ7XG4gICAgbGFzdCA9IGZsdXNoID09PSBaX0ZJTklTSCQzICYmIHMuc3RybS5hdmFpbF9pbiA9PT0gMCAmJlxuICAgICAgICAgbGVuID09PSBsZWZ0ID8gMSA6IDA7XG4gICAgX3RyX3N0b3JlZF9ibG9jayhzLCBzLmJsb2NrX3N0YXJ0LCBsZW4sIGxhc3QpO1xuICAgIHMuYmxvY2tfc3RhcnQgKz0gbGVuO1xuICAgIGZsdXNoX3BlbmRpbmcocy5zdHJtKTtcbiAgfVxuXG4gIC8qIFdlJ3ZlIGRvbmUgYWxsIHdlIGNhbiB3aXRoIHRoZSBhdmFpbGFibGUgaW5wdXQgYW5kIG91dHB1dC4gKi9cbiAgcmV0dXJuIGxhc3QgPyBCU19GSU5JU0hfU1RBUlRFRCA6IEJTX05FRURfTU9SRTtcbn07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wcmVzcyBhcyBtdWNoIGFzIHBvc3NpYmxlIGZyb20gdGhlIGlucHV0IHN0cmVhbSwgcmV0dXJuIHRoZSBjdXJyZW50XG4gKiBibG9jayBzdGF0ZS5cbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgcGVyZm9ybSBsYXp5IGV2YWx1YXRpb24gb2YgbWF0Y2hlcyBhbmQgaW5zZXJ0c1xuICogbmV3IHN0cmluZ3MgaW4gdGhlIGRpY3Rpb25hcnkgb25seSBmb3IgdW5tYXRjaGVkIHN0cmluZ3Mgb3IgZm9yIHNob3J0XG4gKiBtYXRjaGVzLiBJdCBpcyB1c2VkIG9ubHkgZm9yIHRoZSBmYXN0IGNvbXByZXNzaW9uIG9wdGlvbnMuXG4gKi9cbmNvbnN0IGRlZmxhdGVfZmFzdCA9IChzLCBmbHVzaCkgPT4ge1xuXG4gIGxldCBoYXNoX2hlYWQ7ICAgICAgICAvKiBoZWFkIG9mIHRoZSBoYXNoIGNoYWluICovXG4gIGxldCBiZmx1c2g7ICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcbiAgICAgKiBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCQyKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgYnJlYWs7IC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogSW5zZXJ0IHRoZSBzdHJpbmcgd2luZG93W3N0cnN0YXJ0IC4uIHN0cnN0YXJ0KzJdIGluIHRoZVxuICAgICAqIGRpY3Rpb25hcnksIGFuZCBzZXQgaGFzaF9oZWFkIHRvIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluOlxuICAgICAqL1xuICAgIGhhc2hfaGVhZCA9IDAvKk5JTCovO1xuICAgIGlmIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICBzLmluc19oID0gSEFTSChzLCBzLmluc19oLCBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pO1xuICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgLyoqKi9cbiAgICB9XG5cbiAgICAvKiBGaW5kIHRoZSBsb25nZXN0IG1hdGNoLCBkaXNjYXJkaW5nIHRob3NlIDw9IHByZXZfbGVuZ3RoLlxuICAgICAqIEF0IHRoaXMgcG9pbnQgd2UgaGF2ZSBhbHdheXMgbWF0Y2hfbGVuZ3RoIDwgTUlOX01BVENIXG4gICAgICovXG4gICAgaWYgKGhhc2hfaGVhZCAhPT0gMC8qTklMKi8gJiYgKChzLnN0cnN0YXJ0IC0gaGFzaF9oZWFkKSA8PSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkpIHtcbiAgICAgIC8qIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nXG4gICAgICAgKiBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcbiAgICAgICAqIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAgICAgICAqL1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSBsb25nZXN0X21hdGNoKHMsIGhhc2hfaGVhZCk7XG4gICAgICAvKiBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydCAqL1xuICAgIH1cbiAgICBpZiAocy5tYXRjaF9sZW5ndGggPj0gTUlOX01BVENIKSB7XG4gICAgICAvLyBjaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LCBzLm1hdGNoX3N0YXJ0LCBzLm1hdGNoX2xlbmd0aCk7IC8vIGZvciBkZWJ1ZyBvbmx5XG5cbiAgICAgIC8qKiogX3RyX3RhbGx5X2Rpc3Qocywgcy5zdHJzdGFydCAtIHMubWF0Y2hfc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gX3RyX3RhbGx5KHMsIHMuc3Ryc3RhcnQgLSBzLm1hdGNoX3N0YXJ0LCBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCk7XG5cbiAgICAgIHMubG9va2FoZWFkIC09IHMubWF0Y2hfbGVuZ3RoO1xuXG4gICAgICAvKiBJbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGhhc2ggdGFibGUgb25seSBpZiB0aGUgbWF0Y2ggbGVuZ3RoXG4gICAgICAgKiBpcyBub3QgdG9vIGxhcmdlLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuICAgICAgICovXG4gICAgICBpZiAocy5tYXRjaF9sZW5ndGggPD0gcy5tYXhfbGF6eV9tYXRjaC8qbWF4X2luc2VydF9sZW5ndGgqLyAmJiBzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGgtLTsgLyogc3RyaW5nIGF0IHN0cnN0YXJ0IGFscmVhZHkgaW4gdGFibGUgKi9cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgICAgIHMuaW5zX2ggPSBIQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSk7XG4gICAgICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICAgICAgcy5oZWFkW3MuaW5zX2hdID0gcy5zdHJzdGFydDtcbiAgICAgICAgICAvKioqL1xuICAgICAgICAgIC8qIHN0cnN0YXJ0IG5ldmVyIGV4Y2VlZHMgV1NJWkUtTUFYX01BVENILCBzbyB0aGVyZSBhcmVcbiAgICAgICAgICAgKiBhbHdheXMgTUlOX01BVENIIGJ5dGVzIGFoZWFkLlxuICAgICAgICAgICAqL1xuICAgICAgICB9IHdoaWxlICgtLXMubWF0Y2hfbGVuZ3RoICE9PSAwKTtcbiAgICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgfSBlbHNlXG4gICAgICB7XG4gICAgICAgIHMuc3Ryc3RhcnQgKz0gcy5tYXRjaF9sZW5ndGg7XG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICAgICAgcy5pbnNfaCA9IHMud2luZG93W3Muc3Ryc3RhcnRdO1xuICAgICAgICAvKiBVUERBVEVfSEFTSChzLCBzLmluc19oLCBzLndpbmRvd1tzLnN0cnN0YXJ0KzFdKTsgKi9cbiAgICAgICAgcy5pbnNfaCA9IEhBU0gocywgcy5pbnNfaCwgcy53aW5kb3dbcy5zdHJzdGFydCArIDFdKTtcblxuLy8jaWYgTUlOX01BVENIICE9IDNcbi8vICAgICAgICAgICAgICAgIENhbGwgVVBEQVRFX0hBU0goKSBNSU5fTUFUQ0gtMyBtb3JlIHRpbWVzXG4vLyNlbmRpZlxuICAgICAgICAvKiBJZiBsb29rYWhlYWQgPCBNSU5fTUFUQ0gsIGluc19oIGlzIGdhcmJhZ2UsIGJ1dCBpdCBkb2VzIG5vdFxuICAgICAgICAgKiBtYXR0ZXIgc2luY2UgaXQgd2lsbCBiZSByZWNvbXB1dGVkIGF0IG5leHQgZGVmbGF0ZSBjYWxsLlxuICAgICAgICAgKi9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogTm8gbWF0Y2gsIG91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSBfdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuXG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgIH1cbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9ICgocy5zdHJzdGFydCA8IChNSU5fTUFUQ0ggLSAxKSkgPyBzLnN0cnN0YXJ0IDogTUlOX01BVENIIC0gMSk7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gkMykge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLnN5bV9uZXh0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTYW1lIGFzIGFib3ZlLCBidXQgYWNoaWV2ZXMgYmV0dGVyIGNvbXByZXNzaW9uLiBXZSB1c2UgYSBsYXp5XG4gKiBldmFsdWF0aW9uIGZvciBtYXRjaGVzOiBhIG1hdGNoIGlzIGZpbmFsbHkgYWRvcHRlZCBvbmx5IGlmIHRoZXJlIGlzXG4gKiBubyBiZXR0ZXIgbWF0Y2ggYXQgdGhlIG5leHQgd2luZG93IHBvc2l0aW9uLlxuICovXG5jb25zdCBkZWZsYXRlX3Nsb3cgPSAocywgZmx1c2gpID0+IHtcblxuICBsZXQgaGFzaF9oZWFkOyAgICAgICAgICAvKiBoZWFkIG9mIGhhc2ggY2hhaW4gKi9cbiAgbGV0IGJmbHVzaDsgICAgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuXG4gIGxldCBtYXhfaW5zZXJ0O1xuXG4gIC8qIFByb2Nlc3MgdGhlIGlucHV0IGJsb2NrLiAqL1xuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcbiAgICAgKiBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCQyKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHsgYnJlYWs7IH0gLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICB9XG5cbiAgICAvKiBJbnNlcnQgdGhlIHN0cmluZyB3aW5kb3dbc3Ryc3RhcnQgLi4gc3Ryc3RhcnQrMl0gaW4gdGhlXG4gICAgICogZGljdGlvbmFyeSwgYW5kIHNldCBoYXNoX2hlYWQgdG8gdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW46XG4gICAgICovXG4gICAgaGFzaF9oZWFkID0gMC8qTklMKi87XG4gICAgaWYgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgIHMuaW5zX2ggPSBIQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSk7XG4gICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAvKioqL1xuICAgIH1cblxuICAgIC8qIEZpbmQgdGhlIGxvbmdlc3QgbWF0Y2gsIGRpc2NhcmRpbmcgdGhvc2UgPD0gcHJldl9sZW5ndGguXG4gICAgICovXG4gICAgcy5wcmV2X2xlbmd0aCA9IHMubWF0Y2hfbGVuZ3RoO1xuICAgIHMucHJldl9tYXRjaCA9IHMubWF0Y2hfc3RhcnQ7XG4gICAgcy5tYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuXG4gICAgaWYgKGhhc2hfaGVhZCAhPT0gMC8qTklMKi8gJiYgcy5wcmV2X2xlbmd0aCA8IHMubWF4X2xhenlfbWF0Y2ggJiZcbiAgICAgICAgcy5zdHJzdGFydCAtIGhhc2hfaGVhZCA8PSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKS8qTUFYX0RJU1QocykqLykge1xuICAgICAgLyogVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmdcbiAgICAgICAqIG9mIHdpbmRvdyBpbmRleCAwIChpbiBwYXJ0aWN1bGFyIHdlIGhhdmUgdG8gYXZvaWQgYSBtYXRjaFxuICAgICAgICogb2YgdGhlIHN0cmluZyB3aXRoIGl0c2VsZiBhdCB0aGUgc3RhcnQgb2YgdGhlIGlucHV0IGZpbGUpLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IGxvbmdlc3RfbWF0Y2gocywgaGFzaF9oZWFkKTtcbiAgICAgIC8qIGxvbmdlc3RfbWF0Y2goKSBzZXRzIG1hdGNoX3N0YXJ0ICovXG5cbiAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA8PSA1ICYmXG4gICAgICAgICAocy5zdHJhdGVneSA9PT0gWl9GSUxURVJFRCB8fCAocy5tYXRjaF9sZW5ndGggPT09IE1JTl9NQVRDSCAmJiBzLnN0cnN0YXJ0IC0gcy5tYXRjaF9zdGFydCA+IDQwOTYvKlRPT19GQVIqLykpKSB7XG5cbiAgICAgICAgLyogSWYgcHJldl9tYXRjaCBpcyBhbHNvIE1JTl9NQVRDSCwgbWF0Y2hfc3RhcnQgaXMgZ2FyYmFnZVxuICAgICAgICAgKiBidXQgd2Ugd2lsbCBpZ25vcmUgdGhlIGN1cnJlbnQgbWF0Y2ggYW55d2F5LlxuICAgICAgICAgKi9cbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBJZiB0aGVyZSB3YXMgYSBtYXRjaCBhdCB0aGUgcHJldmlvdXMgc3RlcCBhbmQgdGhlIGN1cnJlbnRcbiAgICAgKiBtYXRjaCBpcyBub3QgYmV0dGVyLCBvdXRwdXQgdGhlIHByZXZpb3VzIG1hdGNoOlxuICAgICAqL1xuICAgIGlmIChzLnByZXZfbGVuZ3RoID49IE1JTl9NQVRDSCAmJiBzLm1hdGNoX2xlbmd0aCA8PSBzLnByZXZfbGVuZ3RoKSB7XG4gICAgICBtYXhfaW5zZXJ0ID0gcy5zdHJzdGFydCArIHMubG9va2FoZWFkIC0gTUlOX01BVENIO1xuICAgICAgLyogRG8gbm90IGluc2VydCBzdHJpbmdzIGluIGhhc2ggdGFibGUgYmV5b25kIHRoaXMuICovXG5cbiAgICAgIC8vY2hlY2tfbWF0Y2gocywgcy5zdHJzdGFydC0xLCBzLnByZXZfbWF0Y2gsIHMucHJldl9sZW5ndGgpO1xuXG4gICAgICAvKioqX3RyX3RhbGx5X2Rpc3Qocywgcy5zdHJzdGFydCAtIDEgLSBzLnByZXZfbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICBzLnByZXZfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyoqKi9cbiAgICAgIGJmbHVzaCA9IF90cl90YWxseShzLCBzLnN0cnN0YXJ0IC0gMSAtIHMucHJldl9tYXRjaCwgcy5wcmV2X2xlbmd0aCAtIE1JTl9NQVRDSCk7XG4gICAgICAvKiBJbnNlcnQgaW4gaGFzaCB0YWJsZSBhbGwgc3RyaW5ncyB1cCB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaC5cbiAgICAgICAqIHN0cnN0YXJ0LTEgYW5kIHN0cnN0YXJ0IGFyZSBhbHJlYWR5IGluc2VydGVkLiBJZiB0aGVyZSBpcyBub3RcbiAgICAgICAqIGVub3VnaCBsb29rYWhlYWQsIHRoZSBsYXN0IHR3byBzdHJpbmdzIGFyZSBub3QgaW5zZXJ0ZWQgaW5cbiAgICAgICAqIHRoZSBoYXNoIHRhYmxlLlxuICAgICAgICovXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLnByZXZfbGVuZ3RoIC0gMTtcbiAgICAgIHMucHJldl9sZW5ndGggLT0gMjtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKCsrcy5zdHJzdGFydCA8PSBtYXhfaW5zZXJ0KSB7XG4gICAgICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgICAgICBzLmluc19oID0gSEFTSChzLCBzLmluc19oLCBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pO1xuICAgICAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoLS1zLnByZXZfbGVuZ3RoICE9PSAwKTtcbiAgICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcblxuICAgICAgaWYgKGJmbHVzaCkge1xuICAgICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqKi9cbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAocy5tYXRjaF9hdmFpbGFibGUpIHtcbiAgICAgIC8qIElmIHRoZXJlIHdhcyBubyBtYXRjaCBhdCB0aGUgcHJldmlvdXMgcG9zaXRpb24sIG91dHB1dCBhXG4gICAgICAgKiBzaW5nbGUgbGl0ZXJhbC4gSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYnV0IHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICAgKiBpcyBsb25nZXIsIHRydW5jYXRlIHRoZSBwcmV2aW91cyBtYXRjaCB0byBhIHNpbmdsZSBsaXRlcmFsLlxuICAgICAgICovXG4gICAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydC0xXSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IF90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0IC0gMV0pO1xuXG4gICAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAgIC8qKiogRkxVU0hfQkxPQ0tfT05MWShzLCAwKSAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICAvKioqL1xuICAgICAgfVxuICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRoZXJlIGlzIG5vIHByZXZpb3VzIG1hdGNoIHRvIGNvbXBhcmUgd2l0aCwgd2FpdCBmb3JcbiAgICAgICAqIHRoZSBuZXh0IHN0ZXAgdG8gZGVjaWRlLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDE7XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZmx1c2ggIT0gWl9OT19GTFVTSCwgXCJubyBmbHVzaD9cIik7XG4gIGlmIChzLm1hdGNoX2F2YWlsYWJsZSkge1xuICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0LTFdKSk7XG4gICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICBiZmx1c2ggPSBfdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydCAtIDFdKTtcblxuICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgfVxuICBzLmluc2VydCA9IHMuc3Ryc3RhcnQgPCBNSU5fTUFUQ0ggLSAxID8gcy5zdHJzdGFydCA6IE1JTl9NQVRDSCAtIDE7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gkMykge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLnN5bV9uZXh0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG5cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRm9yIFpfUkxFLCBzaW1wbHkgbG9vayBmb3IgcnVucyBvZiBieXRlcywgZ2VuZXJhdGUgbWF0Y2hlcyBvbmx5IG9mIGRpc3RhbmNlXG4gKiBvbmUuICBEbyBub3QgbWFpbnRhaW4gYSBoYXNoIHRhYmxlLiAgKEl0IHdpbGwgYmUgcmVnZW5lcmF0ZWQgaWYgdGhpcyBydW4gb2ZcbiAqIGRlZmxhdGUgc3dpdGNoZXMgYXdheSBmcm9tIFpfUkxFLilcbiAqL1xuY29uc3QgZGVmbGF0ZV9ybGUgPSAocywgZmx1c2gpID0+IHtcblxuICBsZXQgYmZsdXNoOyAgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuICBsZXQgcHJldjsgICAgICAgICAgICAgIC8qIGJ5dGUgYXQgZGlzdGFuY2Ugb25lIHRvIG1hdGNoICovXG4gIGxldCBzY2FuLCBzdHJlbmQ7ICAgICAgLyogc2NhbiBnb2VzIHVwIHRvIHN0cmVuZCBmb3IgbGVuZ3RoIG9mIHJ1biAqL1xuXG4gIGNvbnN0IF93aW4gPSBzLndpbmRvdztcblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIGxvbmdlc3QgcnVuLCBwbHVzIG9uZSBmb3IgdGhlIHVucm9sbGVkIGxvb3AuXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDw9IE1BWF9NQVRDSCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPD0gTUFYX01BVENIICYmIGZsdXNoID09PSBaX05PX0ZMVVNIJDIpIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkgeyBicmVhazsgfSAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgIH1cblxuICAgIC8qIFNlZSBob3cgbWFueSB0aW1lcyB0aGUgcHJldmlvdXMgYnl0ZSByZXBlYXRzICovXG4gICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgIGlmIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0ggJiYgcy5zdHJzdGFydCA+IDApIHtcbiAgICAgIHNjYW4gPSBzLnN0cnN0YXJ0IC0gMTtcbiAgICAgIHByZXYgPSBfd2luW3NjYW5dO1xuICAgICAgaWYgKHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dKSB7XG4gICAgICAgIHN0cmVuZCA9IHMuc3Ryc3RhcnQgKyBNQVhfTUFUQ0g7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvKmpzaGludCBub2VtcHR5OmZhbHNlKi9cbiAgICAgICAgfSB3aGlsZSAocHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBzY2FuIDwgc3RyZW5kKTtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBNQVhfTUFUQ0ggLSAoc3RyZW5kIC0gc2Nhbik7XG4gICAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA+IHMubG9va2FoZWFkKSB7XG4gICAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBzLmxvb2thaGVhZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9Bc3NlcnQoc2NhbiA8PSBzLT53aW5kb3crKHVJbnQpKHMtPndpbmRvd19zaXplLTEpLCBcIndpbGQgc2NhblwiKTtcbiAgICB9XG5cbiAgICAvKiBFbWl0IG1hdGNoIGlmIGhhdmUgcnVuIG9mIE1JTl9NQVRDSCBvciBsb25nZXIsIGVsc2UgZW1pdCBsaXRlcmFsICovXG4gICAgaWYgKHMubWF0Y2hfbGVuZ3RoID49IE1JTl9NQVRDSCkge1xuICAgICAgLy9jaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LCBzLnN0cnN0YXJ0IC0gMSwgcy5tYXRjaF9sZW5ndGgpO1xuXG4gICAgICAvKioqIF90cl90YWxseV9kaXN0KHMsIDEsIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSBfdHJfdGFsbHkocywgMSwgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLm1hdGNoX2xlbmd0aDtcbiAgICAgIHMuc3Ryc3RhcnQgKz0gcy5tYXRjaF9sZW5ndGg7XG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE5vIG1hdGNoLCBvdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0XSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSBfdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuXG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgIH1cbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9IDA7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gkMykge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLnN5bV9uZXh0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGb3IgWl9IVUZGTUFOX09OTFksIGRvIG5vdCBsb29rIGZvciBtYXRjaGVzLiAgRG8gbm90IG1haW50YWluIGEgaGFzaCB0YWJsZS5cbiAqIChJdCB3aWxsIGJlIHJlZ2VuZXJhdGVkIGlmIHRoaXMgcnVuIG9mIGRlZmxhdGUgc3dpdGNoZXMgYXdheSBmcm9tIEh1ZmZtYW4uKVxuICovXG5jb25zdCBkZWZsYXRlX2h1ZmYgPSAocywgZmx1c2gpID0+IHtcblxuICBsZXQgYmZsdXNoOyAgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBhIGxpdGVyYWwgdG8gd3JpdGUuICovXG4gICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgICBpZiAoZmx1c2ggPT09IFpfTk9fRkxVU0gkMikge1xuICAgICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7ICAgICAgLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBPdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnRdKSk7XG4gICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgYmZsdXNoID0gX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcbiAgICBzLmxvb2thaGVhZC0tO1xuICAgIHMuc3Ryc3RhcnQrKztcbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9IDA7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gkMykge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLnN5bV9uZXh0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufTtcblxuLyogVmFsdWVzIGZvciBtYXhfbGF6eV9tYXRjaCwgZ29vZF9tYXRjaCBhbmQgbWF4X2NoYWluX2xlbmd0aCwgZGVwZW5kaW5nIG9uXG4gKiB0aGUgZGVzaXJlZCBwYWNrIGxldmVsICgwLi45KS4gVGhlIHZhbHVlcyBnaXZlbiBiZWxvdyBoYXZlIGJlZW4gdHVuZWQgdG9cbiAqIGV4Y2x1ZGUgd29yc3QgY2FzZSBwZXJmb3JtYW5jZSBmb3IgcGF0aG9sb2dpY2FsIGZpbGVzLiBCZXR0ZXIgdmFsdWVzIG1heSBiZVxuICogZm91bmQgZm9yIHNwZWNpZmljIGZpbGVzLlxuICovXG5mdW5jdGlvbiBDb25maWcoZ29vZF9sZW5ndGgsIG1heF9sYXp5LCBuaWNlX2xlbmd0aCwgbWF4X2NoYWluLCBmdW5jKSB7XG5cbiAgdGhpcy5nb29kX2xlbmd0aCA9IGdvb2RfbGVuZ3RoO1xuICB0aGlzLm1heF9sYXp5ID0gbWF4X2xhenk7XG4gIHRoaXMubmljZV9sZW5ndGggPSBuaWNlX2xlbmd0aDtcbiAgdGhpcy5tYXhfY2hhaW4gPSBtYXhfY2hhaW47XG4gIHRoaXMuZnVuYyA9IGZ1bmM7XG59XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb25fdGFibGUgPSBbXG4gIC8qICAgICAgZ29vZCBsYXp5IG5pY2UgY2hhaW4gKi9cbiAgbmV3IENvbmZpZygwLCAwLCAwLCAwLCBkZWZsYXRlX3N0b3JlZCksICAgICAgICAgIC8qIDAgc3RvcmUgb25seSAqL1xuICBuZXcgQ29uZmlnKDQsIDQsIDgsIDQsIGRlZmxhdGVfZmFzdCksICAgICAgICAgICAgLyogMSBtYXggc3BlZWQsIG5vIGxhenkgbWF0Y2hlcyAqL1xuICBuZXcgQ29uZmlnKDQsIDUsIDE2LCA4LCBkZWZsYXRlX2Zhc3QpLCAgICAgICAgICAgLyogMiAqL1xuICBuZXcgQ29uZmlnKDQsIDYsIDMyLCAzMiwgZGVmbGF0ZV9mYXN0KSwgICAgICAgICAgLyogMyAqL1xuXG4gIG5ldyBDb25maWcoNCwgNCwgMTYsIDE2LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAgICAvKiA0IGxhenkgbWF0Y2hlcyAqL1xuICBuZXcgQ29uZmlnKDgsIDE2LCAzMiwgMzIsIGRlZmxhdGVfc2xvdyksICAgICAgICAgLyogNSAqL1xuICBuZXcgQ29uZmlnKDgsIDE2LCAxMjgsIDEyOCwgZGVmbGF0ZV9zbG93KSwgICAgICAgLyogNiAqL1xuICBuZXcgQ29uZmlnKDgsIDMyLCAxMjgsIDI1NiwgZGVmbGF0ZV9zbG93KSwgICAgICAgLyogNyAqL1xuICBuZXcgQ29uZmlnKDMyLCAxMjgsIDI1OCwgMTAyNCwgZGVmbGF0ZV9zbG93KSwgICAgLyogOCAqL1xuICBuZXcgQ29uZmlnKDMyLCAyNTgsIDI1OCwgNDA5NiwgZGVmbGF0ZV9zbG93KSAgICAgLyogOSBtYXggY29tcHJlc3Npb24gKi9cbl07XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSBcImxvbmdlc3QgbWF0Y2hcIiByb3V0aW5lcyBmb3IgYSBuZXcgemxpYiBzdHJlYW1cbiAqL1xuY29uc3QgbG1faW5pdCA9IChzKSA9PiB7XG5cbiAgcy53aW5kb3dfc2l6ZSA9IDIgKiBzLndfc2l6ZTtcblxuICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi9cbiAgemVybyhzLmhlYWQpOyAvLyBGaWxsIHdpdGggTklMICg9IDApO1xuXG4gIC8qIFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnM6XG4gICAqL1xuICBzLm1heF9sYXp5X21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5tYXhfbGF6eTtcbiAgcy5nb29kX21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5nb29kX2xlbmd0aDtcbiAgcy5uaWNlX21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5uaWNlX2xlbmd0aDtcbiAgcy5tYXhfY2hhaW5fbGVuZ3RoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5tYXhfY2hhaW47XG5cbiAgcy5zdHJzdGFydCA9IDA7XG4gIHMuYmxvY2tfc3RhcnQgPSAwO1xuICBzLmxvb2thaGVhZCA9IDA7XG4gIHMuaW5zZXJ0ID0gMDtcbiAgcy5tYXRjaF9sZW5ndGggPSBzLnByZXZfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICBzLmluc19oID0gMDtcbn07XG5cblxuZnVuY3Rpb24gRGVmbGF0ZVN0YXRlKCkge1xuICB0aGlzLnN0cm0gPSBudWxsOyAgICAgICAgICAgIC8qIHBvaW50ZXIgYmFjayB0byB0aGlzIHpsaWIgc3RyZWFtICovXG4gIHRoaXMuc3RhdHVzID0gMDsgICAgICAgICAgICAvKiBhcyB0aGUgbmFtZSBpbXBsaWVzICovXG4gIHRoaXMucGVuZGluZ19idWYgPSBudWxsOyAgICAgIC8qIG91dHB1dCBzdGlsbCBwZW5kaW5nICovXG4gIHRoaXMucGVuZGluZ19idWZfc2l6ZSA9IDA7ICAvKiBzaXplIG9mIHBlbmRpbmdfYnVmICovXG4gIHRoaXMucGVuZGluZ19vdXQgPSAwOyAgICAgICAvKiBuZXh0IHBlbmRpbmcgYnl0ZSB0byBvdXRwdXQgdG8gdGhlIHN0cmVhbSAqL1xuICB0aGlzLnBlbmRpbmcgPSAwOyAgICAgICAgICAgLyogbmIgb2YgYnl0ZXMgaW4gdGhlIHBlbmRpbmcgYnVmZmVyICovXG4gIHRoaXMud3JhcCA9IDA7ICAgICAgICAgICAgICAvKiBiaXQgMCB0cnVlIGZvciB6bGliLCBiaXQgMSB0cnVlIGZvciBnemlwICovXG4gIHRoaXMuZ3poZWFkID0gbnVsbDsgICAgICAgICAvKiBnemlwIGhlYWRlciBpbmZvcm1hdGlvbiB0byB3cml0ZSAqL1xuICB0aGlzLmd6aW5kZXggPSAwOyAgICAgICAgICAgLyogd2hlcmUgaW4gZXh0cmEsIG5hbWUsIG9yIGNvbW1lbnQgKi9cbiAgdGhpcy5tZXRob2QgPSBaX0RFRkxBVEVEJDI7IC8qIGNhbiBvbmx5IGJlIERFRkxBVEVEICovXG4gIHRoaXMubGFzdF9mbHVzaCA9IC0xOyAgIC8qIHZhbHVlIG9mIGZsdXNoIHBhcmFtIGZvciBwcmV2aW91cyBkZWZsYXRlIGNhbGwgKi9cblxuICB0aGlzLndfc2l6ZSA9IDA7ICAvKiBMWjc3IHdpbmRvdyBzaXplICgzMksgYnkgZGVmYXVsdCkgKi9cbiAgdGhpcy53X2JpdHMgPSAwOyAgLyogbG9nMih3X3NpemUpICAoOC4uMTYpICovXG4gIHRoaXMud19tYXNrID0gMDsgIC8qIHdfc2l6ZSAtIDEgKi9cblxuICB0aGlzLndpbmRvdyA9IG51bGw7XG4gIC8qIFNsaWRpbmcgd2luZG93LiBJbnB1dCBieXRlcyBhcmUgcmVhZCBpbnRvIHRoZSBzZWNvbmQgaGFsZiBvZiB0aGUgd2luZG93LFxuICAgKiBhbmQgbW92ZSB0byB0aGUgZmlyc3QgaGFsZiBsYXRlciB0byBrZWVwIGEgZGljdGlvbmFyeSBvZiBhdCBsZWFzdCB3U2l6ZVxuICAgKiBieXRlcy4gV2l0aCB0aGlzIG9yZ2FuaXphdGlvbiwgbWF0Y2hlcyBhcmUgbGltaXRlZCB0byBhIGRpc3RhbmNlIG9mXG4gICAqIHdTaXplLU1BWF9NQVRDSCBieXRlcywgYnV0IHRoaXMgZW5zdXJlcyB0aGF0IElPIGlzIGFsd2F5c1xuICAgKiBwZXJmb3JtZWQgd2l0aCBhIGxlbmd0aCBtdWx0aXBsZSBvZiB0aGUgYmxvY2sgc2l6ZS5cbiAgICovXG5cbiAgdGhpcy53aW5kb3dfc2l6ZSA9IDA7XG4gIC8qIEFjdHVhbCBzaXplIG9mIHdpbmRvdzogMip3U2l6ZSwgZXhjZXB0IHdoZW4gdGhlIHVzZXIgaW5wdXQgYnVmZmVyXG4gICAqIGlzIGRpcmVjdGx5IHVzZWQgYXMgc2xpZGluZyB3aW5kb3cuXG4gICAqL1xuXG4gIHRoaXMucHJldiA9IG51bGw7XG4gIC8qIExpbmsgdG8gb2xkZXIgc3RyaW5nIHdpdGggc2FtZSBoYXNoIGluZGV4LiBUbyBsaW1pdCB0aGUgc2l6ZSBvZiB0aGlzXG4gICAqIGFycmF5IHRvIDY0SywgdGhpcyBsaW5rIGlzIG1haW50YWluZWQgb25seSBmb3IgdGhlIGxhc3QgMzJLIHN0cmluZ3MuXG4gICAqIEFuIGluZGV4IGluIHRoaXMgYXJyYXkgaXMgdGh1cyBhIHdpbmRvdyBpbmRleCBtb2R1bG8gMzJLLlxuICAgKi9cblxuICB0aGlzLmhlYWQgPSBudWxsOyAgIC8qIEhlYWRzIG9mIHRoZSBoYXNoIGNoYWlucyBvciBOSUwuICovXG5cbiAgdGhpcy5pbnNfaCA9IDA7ICAgICAgIC8qIGhhc2ggaW5kZXggb2Ygc3RyaW5nIHRvIGJlIGluc2VydGVkICovXG4gIHRoaXMuaGFzaF9zaXplID0gMDsgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gaGFzaCB0YWJsZSAqL1xuICB0aGlzLmhhc2hfYml0cyA9IDA7ICAgLyogbG9nMihoYXNoX3NpemUpICovXG4gIHRoaXMuaGFzaF9tYXNrID0gMDsgICAvKiBoYXNoX3NpemUtMSAqL1xuXG4gIHRoaXMuaGFzaF9zaGlmdCA9IDA7XG4gIC8qIE51bWJlciBvZiBiaXRzIGJ5IHdoaWNoIGluc19oIG11c3QgYmUgc2hpZnRlZCBhdCBlYWNoIGlucHV0XG4gICAqIHN0ZXAuIEl0IG11c3QgYmUgc3VjaCB0aGF0IGFmdGVyIE1JTl9NQVRDSCBzdGVwcywgdGhlIG9sZGVzdFxuICAgKiBieXRlIG5vIGxvbmdlciB0YWtlcyBwYXJ0IGluIHRoZSBoYXNoIGtleSwgdGhhdCBpczpcbiAgICogICBoYXNoX3NoaWZ0ICogTUlOX01BVENIID49IGhhc2hfYml0c1xuICAgKi9cblxuICB0aGlzLmJsb2NrX3N0YXJ0ID0gMDtcbiAgLyogV2luZG93IHBvc2l0aW9uIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgb3V0cHV0IGJsb2NrLiBHZXRzXG4gICAqIG5lZ2F0aXZlIHdoZW4gdGhlIHdpbmRvdyBpcyBtb3ZlZCBiYWNrd2FyZHMuXG4gICAqL1xuXG4gIHRoaXMubWF0Y2hfbGVuZ3RoID0gMDsgICAgICAvKiBsZW5ndGggb2YgYmVzdCBtYXRjaCAqL1xuICB0aGlzLnByZXZfbWF0Y2ggPSAwOyAgICAgICAgLyogcHJldmlvdXMgbWF0Y2ggKi9cbiAgdGhpcy5tYXRjaF9hdmFpbGFibGUgPSAwOyAgIC8qIHNldCBpZiBwcmV2aW91cyBtYXRjaCBleGlzdHMgKi9cbiAgdGhpcy5zdHJzdGFydCA9IDA7ICAgICAgICAgIC8qIHN0YXJ0IG9mIHN0cmluZyB0byBpbnNlcnQgKi9cbiAgdGhpcy5tYXRjaF9zdGFydCA9IDA7ICAgICAgIC8qIHN0YXJ0IG9mIG1hdGNoaW5nIHN0cmluZyAqL1xuICB0aGlzLmxvb2thaGVhZCA9IDA7ICAgICAgICAgLyogbnVtYmVyIG9mIHZhbGlkIGJ5dGVzIGFoZWFkIGluIHdpbmRvdyAqL1xuXG4gIHRoaXMucHJldl9sZW5ndGggPSAwO1xuICAvKiBMZW5ndGggb2YgdGhlIGJlc3QgbWF0Y2ggYXQgcHJldmlvdXMgc3RlcC4gTWF0Y2hlcyBub3QgZ3JlYXRlciB0aGFuIHRoaXNcbiAgICogYXJlIGRpc2NhcmRlZC4gVGhpcyBpcyB1c2VkIGluIHRoZSBsYXp5IG1hdGNoIGV2YWx1YXRpb24uXG4gICAqL1xuXG4gIHRoaXMubWF4X2NoYWluX2xlbmd0aCA9IDA7XG4gIC8qIFRvIHNwZWVkIHVwIGRlZmxhdGlvbiwgaGFzaCBjaGFpbnMgYXJlIG5ldmVyIHNlYXJjaGVkIGJleW9uZCB0aGlzXG4gICAqIGxlbmd0aC4gIEEgaGlnaGVyIGxpbWl0IGltcHJvdmVzIGNvbXByZXNzaW9uIHJhdGlvIGJ1dCBkZWdyYWRlcyB0aGVcbiAgICogc3BlZWQuXG4gICAqL1xuXG4gIHRoaXMubWF4X2xhenlfbWF0Y2ggPSAwO1xuICAvKiBBdHRlbXB0IHRvIGZpbmQgYSBiZXR0ZXIgbWF0Y2ggb25seSB3aGVuIHRoZSBjdXJyZW50IG1hdGNoIGlzIHN0cmljdGx5XG4gICAqIHNtYWxsZXIgdGhhbiB0aGlzIHZhbHVlLiBUaGlzIG1lY2hhbmlzbSBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uXG4gICAqIGxldmVscyA+PSA0LlxuICAgKi9cbiAgLy8gVGhhdCdzIGFsaWFzIHRvIG1heF9sYXp5X21hdGNoLCBkb24ndCB1c2UgZGlyZWN0bHlcbiAgLy90aGlzLm1heF9pbnNlcnRfbGVuZ3RoID0gMDtcbiAgLyogSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBub3RcbiAgICogZ3JlYXRlciB0aGFuIHRoaXMgbGVuZ3RoLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuICAgKiBtYXhfaW5zZXJ0X2xlbmd0aCBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uIGxldmVscyA8PSAzLlxuICAgKi9cblxuICB0aGlzLmxldmVsID0gMDsgICAgIC8qIGNvbXByZXNzaW9uIGxldmVsICgxLi45KSAqL1xuICB0aGlzLnN0cmF0ZWd5ID0gMDsgIC8qIGZhdm9yIG9yIGZvcmNlIEh1ZmZtYW4gY29kaW5nKi9cblxuICB0aGlzLmdvb2RfbWF0Y2ggPSAwO1xuICAvKiBVc2UgYSBmYXN0ZXIgc2VhcmNoIHdoZW4gdGhlIHByZXZpb3VzIG1hdGNoIGlzIGxvbmdlciB0aGFuIHRoaXMgKi9cblxuICB0aGlzLm5pY2VfbWF0Y2ggPSAwOyAvKiBTdG9wIHNlYXJjaGluZyB3aGVuIGN1cnJlbnQgbWF0Y2ggZXhjZWVkcyB0aGlzICovXG5cbiAgICAgICAgICAgICAgLyogdXNlZCBieSB0cmVlcy5jOiAqL1xuXG4gIC8qIERpZG4ndCB1c2UgY3RfZGF0YSB0eXBlZGVmIGJlbG93IHRvIHN1cHByZXNzIGNvbXBpbGVyIHdhcm5pbmcgKi9cblxuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGR5bl9sdHJlZVtIRUFQX1NJWkVdOyAgIC8qIGxpdGVyYWwgYW5kIGxlbmd0aCB0cmVlICovXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgZHluX2R0cmVlWzIqRF9DT0RFUysxXTsgLyogZGlzdGFuY2UgdHJlZSAqL1xuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGJsX3RyZWVbMipCTF9DT0RFUysxXTsgIC8qIEh1ZmZtYW4gdHJlZSBmb3IgYml0IGxlbmd0aHMgKi9cblxuICAvLyBVc2UgZmxhdCBhcnJheSBvZiBET1VCTEUgc2l6ZSwgd2l0aCBpbnRlcmxlYXZlZCBmYXRhLFxuICAvLyBiZWNhdXNlIEpTIGRvZXMgbm90IHN1cHBvcnQgZWZmZWN0aXZlXG4gIHRoaXMuZHluX2x0cmVlICA9IG5ldyBVaW50MTZBcnJheShIRUFQX1NJWkUgKiAyKTtcbiAgdGhpcy5keW5fZHRyZWUgID0gbmV3IFVpbnQxNkFycmF5KCgyICogRF9DT0RFUyArIDEpICogMik7XG4gIHRoaXMuYmxfdHJlZSAgICA9IG5ldyBVaW50MTZBcnJheSgoMiAqIEJMX0NPREVTICsgMSkgKiAyKTtcbiAgemVybyh0aGlzLmR5bl9sdHJlZSk7XG4gIHplcm8odGhpcy5keW5fZHRyZWUpO1xuICB6ZXJvKHRoaXMuYmxfdHJlZSk7XG5cbiAgdGhpcy5sX2Rlc2MgICA9IG51bGw7ICAgICAgICAgLyogZGVzYy4gZm9yIGxpdGVyYWwgdHJlZSAqL1xuICB0aGlzLmRfZGVzYyAgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgZGlzdGFuY2UgdHJlZSAqL1xuICB0aGlzLmJsX2Rlc2MgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgYml0IGxlbmd0aCB0cmVlICovXG5cbiAgLy91c2ggYmxfY291bnRbTUFYX0JJVFMrMV07XG4gIHRoaXMuYmxfY291bnQgPSBuZXcgVWludDE2QXJyYXkoTUFYX0JJVFMgKyAxKTtcbiAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCBmb3IgYW4gb3B0aW1hbCB0cmVlICovXG5cbiAgLy9pbnQgaGVhcFsyKkxfQ09ERVMrMV07ICAgICAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHRoaXMuaGVhcCA9IG5ldyBVaW50MTZBcnJheSgyICogTF9DT0RFUyArIDEpOyAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHplcm8odGhpcy5oZWFwKTtcblxuICB0aGlzLmhlYXBfbGVuID0gMDsgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGhlYXAgKi9cbiAgdGhpcy5oZWFwX21heCA9IDA7ICAgICAgICAgICAgICAgLyogZWxlbWVudCBvZiBsYXJnZXN0IGZyZXF1ZW5jeSAqL1xuICAvKiBUaGUgc29ucyBvZiBoZWFwW25dIGFyZSBoZWFwWzIqbl0gYW5kIGhlYXBbMipuKzFdLiBoZWFwWzBdIGlzIG5vdCB1c2VkLlxuICAgKiBUaGUgc2FtZSBoZWFwIGFycmF5IGlzIHVzZWQgdG8gYnVpbGQgYWxsIHRyZWVzLlxuICAgKi9cblxuICB0aGlzLmRlcHRoID0gbmV3IFVpbnQxNkFycmF5KDIgKiBMX0NPREVTICsgMSk7IC8vdWNoIGRlcHRoWzIqTF9DT0RFUysxXTtcbiAgemVybyh0aGlzLmRlcHRoKTtcbiAgLyogRGVwdGggb2YgZWFjaCBzdWJ0cmVlIHVzZWQgYXMgdGllIGJyZWFrZXIgZm9yIHRyZWVzIG9mIGVxdWFsIGZyZXF1ZW5jeVxuICAgKi9cblxuICB0aGlzLnN5bV9idWYgPSAwOyAgICAgICAgLyogYnVmZmVyIGZvciBkaXN0YW5jZXMgYW5kIGxpdGVyYWxzL2xlbmd0aHMgKi9cblxuICB0aGlzLmxpdF9idWZzaXplID0gMDtcbiAgLyogU2l6ZSBvZiBtYXRjaCBidWZmZXIgZm9yIGxpdGVyYWxzL2xlbmd0aHMuICBUaGVyZSBhcmUgNCByZWFzb25zIGZvclxuICAgKiBsaW1pdGluZyBsaXRfYnVmc2l6ZSB0byA2NEs6XG4gICAqICAgLSBmcmVxdWVuY2llcyBjYW4gYmUga2VwdCBpbiAxNiBiaXQgY291bnRlcnNcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciB0aGUgZmlyc3QgYmxvY2ssIGFsbCBpbnB1dFxuICAgKiAgICAgZGF0YSBpcyBzdGlsbCBpbiB0aGUgd2luZG93IHNvIHdlIGNhbiBzdGlsbCBlbWl0IGEgc3RvcmVkIGJsb2NrIGV2ZW5cbiAgICogICAgIHdoZW4gaW5wdXQgY29tZXMgZnJvbSBzdGFuZGFyZCBpbnB1dC4gIChUaGlzIGNhbiBhbHNvIGJlIGRvbmUgZm9yXG4gICAqICAgICBhbGwgYmxvY2tzIGlmIGxpdF9idWZzaXplIGlzIG5vdCBncmVhdGVyIHRoYW4gMzJLLilcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciBhIGZpbGUgc21hbGxlciB0aGFuIDY0Sywgd2UgY2FuXG4gICAqICAgICBldmVuIGVtaXQgYSBzdG9yZWQgZmlsZSBpbnN0ZWFkIG9mIGEgc3RvcmVkIGJsb2NrIChzYXZpbmcgNSBieXRlcykuXG4gICAqICAgICBUaGlzIGlzIGFwcGxpY2FibGUgb25seSBmb3IgemlwIChub3QgZ3ppcCBvciB6bGliKS5cbiAgICogICAtIGNyZWF0aW5nIG5ldyBIdWZmbWFuIHRyZWVzIGxlc3MgZnJlcXVlbnRseSBtYXkgbm90IHByb3ZpZGUgZmFzdFxuICAgKiAgICAgYWRhcHRhdGlvbiB0byBjaGFuZ2VzIGluIHRoZSBpbnB1dCBkYXRhIHN0YXRpc3RpY3MuIChUYWtlIGZvclxuICAgKiAgICAgZXhhbXBsZSBhIGJpbmFyeSBmaWxlIHdpdGggcG9vcmx5IGNvbXByZXNzaWJsZSBjb2RlIGZvbGxvd2VkIGJ5XG4gICAqICAgICBhIGhpZ2hseSBjb21wcmVzc2libGUgc3RyaW5nIHRhYmxlLikgU21hbGxlciBidWZmZXIgc2l6ZXMgZ2l2ZVxuICAgKiAgICAgZmFzdCBhZGFwdGF0aW9uIGJ1dCBoYXZlIG9mIGNvdXJzZSB0aGUgb3ZlcmhlYWQgb2YgdHJhbnNtaXR0aW5nXG4gICAqICAgICB0cmVlcyBtb3JlIGZyZXF1ZW50bHkuXG4gICAqICAgLSBJIGNhbid0IGNvdW50IGFib3ZlIDRcbiAgICovXG5cbiAgdGhpcy5zeW1fbmV4dCA9IDA7ICAgICAgLyogcnVubmluZyBpbmRleCBpbiBzeW1fYnVmICovXG4gIHRoaXMuc3ltX2VuZCA9IDA7ICAgICAgIC8qIHN5bWJvbCB0YWJsZSBmdWxsIHdoZW4gc3ltX25leHQgcmVhY2hlcyB0aGlzICovXG5cbiAgdGhpcy5vcHRfbGVuID0gMDsgICAgICAgLyogYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggb3B0aW1hbCB0cmVlcyAqL1xuICB0aGlzLnN0YXRpY19sZW4gPSAwOyAgICAvKiBiaXQgbGVuZ3RoIG9mIGN1cnJlbnQgYmxvY2sgd2l0aCBzdGF0aWMgdHJlZXMgKi9cbiAgdGhpcy5tYXRjaGVzID0gMDsgICAgICAgLyogbnVtYmVyIG9mIHN0cmluZyBtYXRjaGVzIGluIGN1cnJlbnQgYmxvY2sgKi9cbiAgdGhpcy5pbnNlcnQgPSAwOyAgICAgICAgLyogYnl0ZXMgYXQgZW5kIG9mIHdpbmRvdyBsZWZ0IHRvIGluc2VydCAqL1xuXG5cbiAgdGhpcy5iaV9idWYgPSAwO1xuICAvKiBPdXRwdXQgYnVmZmVyLiBiaXRzIGFyZSBpbnNlcnRlZCBzdGFydGluZyBhdCB0aGUgYm90dG9tIChsZWFzdFxuICAgKiBzaWduaWZpY2FudCBiaXRzKS5cbiAgICovXG4gIHRoaXMuYmlfdmFsaWQgPSAwO1xuICAvKiBOdW1iZXIgb2YgdmFsaWQgYml0cyBpbiBiaV9idWYuICBBbGwgYml0cyBhYm92ZSB0aGUgbGFzdCB2YWxpZCBiaXRcbiAgICogYXJlIGFsd2F5cyB6ZXJvLlxuICAgKi9cblxuICAvLyBVc2VkIGZvciB3aW5kb3cgbWVtb3J5IGluaXQuIFdlIHNhZmVseSBpZ25vcmUgaXQgZm9yIEpTLiBUaGF0IG1ha2VzXG4gIC8vIHNlbnNlIG9ubHkgZm9yIHBvaW50ZXJzIGFuZCBtZW1vcnkgY2hlY2sgdG9vbHMuXG4gIC8vdGhpcy5oaWdoX3dhdGVyID0gMDtcbiAgLyogSGlnaCB3YXRlciBtYXJrIG9mZnNldCBpbiB3aW5kb3cgZm9yIGluaXRpYWxpemVkIGJ5dGVzIC0tIGJ5dGVzIGFib3ZlXG4gICAqIHRoaXMgYXJlIHNldCB0byB6ZXJvIGluIG9yZGVyIHRvIGF2b2lkIG1lbW9yeSBjaGVjayB3YXJuaW5ncyB3aGVuXG4gICAqIGxvbmdlc3QgbWF0Y2ggcm91dGluZXMgYWNjZXNzIGJ5dGVzIHBhc3QgdGhlIGlucHV0LiAgVGhpcyBpcyB0aGVuXG4gICAqIHVwZGF0ZWQgdG8gdGhlIG5ldyBoaWdoIHdhdGVyIG1hcmsuXG4gICAqL1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENoZWNrIGZvciBhIHZhbGlkIGRlZmxhdGUgc3RyZWFtIHN0YXRlLiBSZXR1cm4gMCBpZiBvaywgMSBpZiBub3QuXG4gKi9cbmNvbnN0IGRlZmxhdGVTdGF0ZUNoZWNrID0gKHN0cm0pID0+IHtcblxuICBpZiAoIXN0cm0pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBjb25zdCBzID0gc3RybS5zdGF0ZTtcbiAgaWYgKCFzIHx8IHMuc3RybSAhPT0gc3RybSB8fCAocy5zdGF0dXMgIT09IElOSVRfU1RBVEUgJiZcbi8vI2lmZGVmIEdaSVBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zdGF0dXMgIT09IEdaSVBfU1RBVEUgJiZcbi8vI2VuZGlmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RhdHVzICE9PSBFWFRSQV9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gTkFNRV9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gQ09NTUVOVF9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gSENSQ19TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gQlVTWV9TVEFURSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0YXR1cyAhPT0gRklOSVNIX1NUQVRFKSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuXG5jb25zdCBkZWZsYXRlUmVzZXRLZWVwID0gKHN0cm0pID0+IHtcblxuICBpZiAoZGVmbGF0ZVN0YXRlQ2hlY2soc3RybSkpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SJDIpO1xuICB9XG5cbiAgc3RybS50b3RhbF9pbiA9IHN0cm0udG90YWxfb3V0ID0gMDtcbiAgc3RybS5kYXRhX3R5cGUgPSBaX1VOS05PV047XG5cbiAgY29uc3QgcyA9IHN0cm0uc3RhdGU7XG4gIHMucGVuZGluZyA9IDA7XG4gIHMucGVuZGluZ19vdXQgPSAwO1xuXG4gIGlmIChzLndyYXAgPCAwKSB7XG4gICAgcy53cmFwID0gLXMud3JhcDtcbiAgICAvKiB3YXMgbWFkZSBuZWdhdGl2ZSBieSBkZWZsYXRlKC4uLiwgWl9GSU5JU0gpOyAqL1xuICB9XG4gIHMuc3RhdHVzID1cbi8vI2lmZGVmIEdaSVBcbiAgICBzLndyYXAgPT09IDIgPyBHWklQX1NUQVRFIDpcbi8vI2VuZGlmXG4gICAgcy53cmFwID8gSU5JVF9TVEFURSA6IEJVU1lfU1RBVEU7XG4gIHN0cm0uYWRsZXIgPSAocy53cmFwID09PSAyKSA/XG4gICAgMCAgLy8gY3JjMzIoMCwgWl9OVUxMLCAwKVxuICA6XG4gICAgMTsgLy8gYWRsZXIzMigwLCBaX05VTEwsIDApXG4gIHMubGFzdF9mbHVzaCA9IC0yO1xuICBfdHJfaW5pdChzKTtcbiAgcmV0dXJuIFpfT0skMztcbn07XG5cblxuY29uc3QgZGVmbGF0ZVJlc2V0ID0gKHN0cm0pID0+IHtcblxuICBjb25zdCByZXQgPSBkZWZsYXRlUmVzZXRLZWVwKHN0cm0pO1xuICBpZiAocmV0ID09PSBaX09LJDMpIHtcbiAgICBsbV9pbml0KHN0cm0uc3RhdGUpO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5cbmNvbnN0IGRlZmxhdGVTZXRIZWFkZXIgPSAoc3RybSwgaGVhZCkgPT4ge1xuXG4gIGlmIChkZWZsYXRlU3RhdGVDaGVjayhzdHJtKSB8fCBzdHJtLnN0YXRlLndyYXAgIT09IDIpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1IkMjtcbiAgfVxuICBzdHJtLnN0YXRlLmd6aGVhZCA9IGhlYWQ7XG4gIHJldHVybiBaX09LJDM7XG59O1xuXG5cbmNvbnN0IGRlZmxhdGVJbml0MiA9IChzdHJtLCBsZXZlbCwgbWV0aG9kLCB3aW5kb3dCaXRzLCBtZW1MZXZlbCwgc3RyYXRlZ3kpID0+IHtcblxuICBpZiAoIXN0cm0pIHsgLy8gPT09IFpfTlVMTFxuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUiQyO1xuICB9XG4gIGxldCB3cmFwID0gMTtcblxuICBpZiAobGV2ZWwgPT09IFpfREVGQVVMVF9DT01QUkVTU0lPTiQxKSB7XG4gICAgbGV2ZWwgPSA2O1xuICB9XG5cbiAgaWYgKHdpbmRvd0JpdHMgPCAwKSB7IC8qIHN1cHByZXNzIHpsaWIgd3JhcHBlciAqL1xuICAgIHdyYXAgPSAwO1xuICAgIHdpbmRvd0JpdHMgPSAtd2luZG93Qml0cztcbiAgfVxuXG4gIGVsc2UgaWYgKHdpbmRvd0JpdHMgPiAxNSkge1xuICAgIHdyYXAgPSAyOyAgICAgICAgICAgLyogd3JpdGUgZ3ppcCB3cmFwcGVyIGluc3RlYWQgKi9cbiAgICB3aW5kb3dCaXRzIC09IDE2O1xuICB9XG5cblxuICBpZiAobWVtTGV2ZWwgPCAxIHx8IG1lbUxldmVsID4gTUFYX01FTV9MRVZFTCB8fCBtZXRob2QgIT09IFpfREVGTEFURUQkMiB8fFxuICAgIHdpbmRvd0JpdHMgPCA4IHx8IHdpbmRvd0JpdHMgPiAxNSB8fCBsZXZlbCA8IDAgfHwgbGV2ZWwgPiA5IHx8XG4gICAgc3RyYXRlZ3kgPCAwIHx8IHN0cmF0ZWd5ID4gWl9GSVhFRCB8fCAod2luZG93Qml0cyA9PT0gOCAmJiB3cmFwICE9PSAxKSkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IkMik7XG4gIH1cblxuXG4gIGlmICh3aW5kb3dCaXRzID09PSA4KSB7XG4gICAgd2luZG93Qml0cyA9IDk7XG4gIH1cbiAgLyogdW50aWwgMjU2LWJ5dGUgd2luZG93IGJ1ZyBmaXhlZCAqL1xuXG4gIGNvbnN0IHMgPSBuZXcgRGVmbGF0ZVN0YXRlKCk7XG5cbiAgc3RybS5zdGF0ZSA9IHM7XG4gIHMuc3RybSA9IHN0cm07XG4gIHMuc3RhdHVzID0gSU5JVF9TVEFURTsgICAgIC8qIHRvIHBhc3Mgc3RhdGUgdGVzdCBpbiBkZWZsYXRlUmVzZXQoKSAqL1xuXG4gIHMud3JhcCA9IHdyYXA7XG4gIHMuZ3poZWFkID0gbnVsbDtcbiAgcy53X2JpdHMgPSB3aW5kb3dCaXRzO1xuICBzLndfc2l6ZSA9IDEgPDwgcy53X2JpdHM7XG4gIHMud19tYXNrID0gcy53X3NpemUgLSAxO1xuXG4gIHMuaGFzaF9iaXRzID0gbWVtTGV2ZWwgKyA3O1xuICBzLmhhc2hfc2l6ZSA9IDEgPDwgcy5oYXNoX2JpdHM7XG4gIHMuaGFzaF9tYXNrID0gcy5oYXNoX3NpemUgLSAxO1xuICBzLmhhc2hfc2hpZnQgPSB+figocy5oYXNoX2JpdHMgKyBNSU5fTUFUQ0ggLSAxKSAvIE1JTl9NQVRDSCk7XG5cbiAgcy53aW5kb3cgPSBuZXcgVWludDhBcnJheShzLndfc2l6ZSAqIDIpO1xuICBzLmhlYWQgPSBuZXcgVWludDE2QXJyYXkocy5oYXNoX3NpemUpO1xuICBzLnByZXYgPSBuZXcgVWludDE2QXJyYXkocy53X3NpemUpO1xuXG4gIC8vIERvbid0IG5lZWQgbWVtIGluaXQgbWFnaWMgZm9yIEpTLlxuICAvL3MuaGlnaF93YXRlciA9IDA7ICAvKiBub3RoaW5nIHdyaXR0ZW4gdG8gcy0+d2luZG93IHlldCAqL1xuXG4gIHMubGl0X2J1ZnNpemUgPSAxIDw8IChtZW1MZXZlbCArIDYpOyAvKiAxNksgZWxlbWVudHMgYnkgZGVmYXVsdCAqL1xuXG4gIC8qIFdlIG92ZXJsYXkgcGVuZGluZ19idWYgYW5kIHN5bV9idWYuIFRoaXMgd29ya3Mgc2luY2UgdGhlIGF2ZXJhZ2Ugc2l6ZVxuICAgKiBmb3IgbGVuZ3RoL2Rpc3RhbmNlIHBhaXJzIG92ZXIgYW55IGNvbXByZXNzZWQgYmxvY2sgaXMgYXNzdXJlZCB0byBiZSAzMVxuICAgKiBiaXRzIG9yIGxlc3MuXG4gICAqXG4gICAqIEFuYWx5c2lzOiBUaGUgbG9uZ2VzdCBmaXhlZCBjb2RlcyBhcmUgYSBsZW5ndGggY29kZSBvZiA4IGJpdHMgcGx1cyA1XG4gICAqIGV4dHJhIGJpdHMsIGZvciBsZW5ndGhzIDEzMSB0byAyNTcuIFRoZSBsb25nZXN0IGZpeGVkIGRpc3RhbmNlIGNvZGVzIGFyZVxuICAgKiA1IGJpdHMgcGx1cyAxMyBleHRyYSBiaXRzLCBmb3IgZGlzdGFuY2VzIDE2Mzg1IHRvIDMyNzY4LiBUaGUgbG9uZ2VzdFxuICAgKiBwb3NzaWJsZSBmaXhlZC1jb2RlcyBsZW5ndGgvZGlzdGFuY2UgcGFpciBpcyB0aGVuIDMxIGJpdHMgdG90YWwuXG4gICAqXG4gICAqIHN5bV9idWYgc3RhcnRzIG9uZS1mb3VydGggb2YgdGhlIHdheSBpbnRvIHBlbmRpbmdfYnVmLiBTbyB0aGVyZSBhcmVcbiAgICogdGhyZWUgYnl0ZXMgaW4gc3ltX2J1ZiBmb3IgZXZlcnkgZm91ciBieXRlcyBpbiBwZW5kaW5nX2J1Zi4gRWFjaCBzeW1ib2xcbiAgICogaW4gc3ltX2J1ZiBpcyB0aHJlZSBieXRlcyAtLSB0d28gZm9yIHRoZSBkaXN0YW5jZSBhbmQgb25lIGZvciB0aGVcbiAgICogbGl0ZXJhbC9sZW5ndGguIEFzIGVhY2ggc3ltYm9sIGlzIGNvbnN1bWVkLCB0aGUgcG9pbnRlciB0byB0aGUgbmV4dFxuICAgKiBzeW1fYnVmIHZhbHVlIHRvIHJlYWQgbW92ZXMgZm9yd2FyZCB0aHJlZSBieXRlcy4gRnJvbSB0aGF0IHN5bWJvbCwgdXAgdG9cbiAgICogMzEgYml0cyBhcmUgd3JpdHRlbiB0byBwZW5kaW5nX2J1Zi4gVGhlIGNsb3Nlc3QgdGhlIHdyaXR0ZW4gcGVuZGluZ19idWZcbiAgICogYml0cyBnZXRzIHRvIHRoZSBuZXh0IHN5bV9idWYgc3ltYm9sIHRvIHJlYWQgaXMganVzdCBiZWZvcmUgdGhlIGxhc3RcbiAgICogY29kZSBpcyB3cml0dGVuLiBBdCB0aGF0IHRpbWUsIDMxKihuLTIpIGJpdHMgaGF2ZSBiZWVuIHdyaXR0ZW4sIGp1c3RcbiAgICogYWZ0ZXIgMjQqKG4tMikgYml0cyBoYXZlIGJlZW4gY29uc3VtZWQgZnJvbSBzeW1fYnVmLiBzeW1fYnVmIHN0YXJ0cyBhdFxuICAgKiA4Km4gYml0cyBpbnRvIHBlbmRpbmdfYnVmLiAoTm90ZSB0aGF0IHRoZSBzeW1ib2wgYnVmZmVyIGZpbGxzIHdoZW4gbi0xXG4gICAqIHN5bWJvbHMgYXJlIHdyaXR0ZW4uKSBUaGUgY2xvc2VzdCB0aGUgd3JpdGluZyBnZXRzIHRvIHdoYXQgaXMgdW5yZWFkIGlzXG4gICAqIHRoZW4gbisxNCBiaXRzLiBIZXJlIG4gaXMgbGl0X2J1ZnNpemUsIHdoaWNoIGlzIDE2Mzg0IGJ5IGRlZmF1bHQsIGFuZFxuICAgKiBjYW4gcmFuZ2UgZnJvbSAxMjggdG8gMzI3NjguXG4gICAqXG4gICAqIFRoZXJlZm9yZSwgYXQgYSBtaW5pbXVtLCB0aGVyZSBhcmUgMTQyIGJpdHMgb2Ygc3BhY2UgYmV0d2VlbiB3aGF0IGlzXG4gICAqIHdyaXR0ZW4gYW5kIHdoYXQgaXMgcmVhZCBpbiB0aGUgb3ZlcmxhaW4gYnVmZmVycywgc28gdGhlIHN5bWJvbHMgY2Fubm90XG4gICAqIGJlIG92ZXJ3cml0dGVuIGJ5IHRoZSBjb21wcmVzc2VkIGRhdGEuIFRoYXQgc3BhY2UgaXMgYWN0dWFsbHkgMTM5IGJpdHMsXG4gICAqIGR1ZSB0byB0aGUgdGhyZWUtYml0IGZpeGVkLWNvZGUgYmxvY2sgaGVhZGVyLlxuICAgKlxuICAgKiBUaGF0IGNvdmVycyB0aGUgY2FzZSB3aGVyZSBlaXRoZXIgWl9GSVhFRCBpcyBzcGVjaWZpZWQsIGZvcmNpbmcgZml4ZWRcbiAgICogY29kZXMsIG9yIHdoZW4gdGhlIHVzZSBvZiBmaXhlZCBjb2RlcyBpcyBjaG9zZW4sIGJlY2F1c2UgdGhhdCBjaG9pY2VcbiAgICogcmVzdWx0cyBpbiBhIHNtYWxsZXIgY29tcHJlc3NlZCBibG9jayB0aGFuIGR5bmFtaWMgY29kZXMuIFRoYXQgbGF0dGVyXG4gICAqIGNvbmRpdGlvbiB0aGVuIGFzc3VyZXMgdGhhdCB0aGUgYWJvdmUgYW5hbHlzaXMgYWxzbyBjb3ZlcnMgYWxsIGR5bmFtaWNcbiAgICogYmxvY2tzLiBBIGR5bmFtaWMtY29kZSBibG9jayB3aWxsIG9ubHkgYmUgY2hvc2VuIHRvIGJlIGVtaXR0ZWQgaWYgaXQgaGFzXG4gICAqIGZld2VyIGJpdHMgdGhhbiBhIGZpeGVkLWNvZGUgYmxvY2sgd291bGQgZm9yIHRoZSBzYW1lIHNldCBvZiBzeW1ib2xzLlxuICAgKiBUaGVyZWZvcmUgaXRzIGF2ZXJhZ2Ugc3ltYm9sIGxlbmd0aCBpcyBhc3N1cmVkIHRvIGJlIGxlc3MgdGhhbiAzMS4gU29cbiAgICogdGhlIGNvbXByZXNzZWQgZGF0YSBmb3IgYSBkeW5hbWljIGJsb2NrIGFsc28gY2Fubm90IG92ZXJ3cml0ZSB0aGVcbiAgICogc3ltYm9scyBmcm9tIHdoaWNoIGl0IGlzIGJlaW5nIGNvbnN0cnVjdGVkLlxuICAgKi9cblxuICBzLnBlbmRpbmdfYnVmX3NpemUgPSBzLmxpdF9idWZzaXplICogNDtcbiAgcy5wZW5kaW5nX2J1ZiA9IG5ldyBVaW50OEFycmF5KHMucGVuZGluZ19idWZfc2l6ZSk7XG5cbiAgLy8gSXQgaXMgb2Zmc2V0IGZyb20gYHMucGVuZGluZ19idWZgIChzaXplIGlzIGBzLmxpdF9idWZzaXplICogMmApXG4gIC8vcy0+c3ltX2J1ZiA9IHMtPnBlbmRpbmdfYnVmICsgcy0+bGl0X2J1ZnNpemU7XG4gIHMuc3ltX2J1ZiA9IHMubGl0X2J1ZnNpemU7XG5cbiAgLy9zLT5zeW1fZW5kID0gKHMtPmxpdF9idWZzaXplIC0gMSkgKiAzO1xuICBzLnN5bV9lbmQgPSAocy5saXRfYnVmc2l6ZSAtIDEpICogMztcbiAgLyogV2UgYXZvaWQgZXF1YWxpdHkgd2l0aCBsaXRfYnVmc2l6ZSozIGJlY2F1c2Ugb2Ygd3JhcGFyb3VuZCBhdCA2NEtcbiAgICogb24gMTYgYml0IG1hY2hpbmVzIGFuZCBiZWNhdXNlIHN0b3JlZCBibG9ja3MgYXJlIHJlc3RyaWN0ZWQgdG9cbiAgICogNjRLLTEgYnl0ZXMuXG4gICAqL1xuXG4gIHMubGV2ZWwgPSBsZXZlbDtcbiAgcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICBzLm1ldGhvZCA9IG1ldGhvZDtcblxuICByZXR1cm4gZGVmbGF0ZVJlc2V0KHN0cm0pO1xufTtcblxuY29uc3QgZGVmbGF0ZUluaXQgPSAoc3RybSwgbGV2ZWwpID0+IHtcblxuICByZXR1cm4gZGVmbGF0ZUluaXQyKHN0cm0sIGxldmVsLCBaX0RFRkxBVEVEJDIsIE1BWF9XQklUUyQxLCBERUZfTUVNX0xFVkVMLCBaX0RFRkFVTFRfU1RSQVRFR1kkMSk7XG59O1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmNvbnN0IGRlZmxhdGUkMiA9IChzdHJtLCBmbHVzaCkgPT4ge1xuXG4gIGlmIChkZWZsYXRlU3RhdGVDaGVjayhzdHJtKSB8fCBmbHVzaCA+IFpfQkxPQ0skMSB8fCBmbHVzaCA8IDApIHtcbiAgICByZXR1cm4gc3RybSA/IGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUiQyKSA6IFpfU1RSRUFNX0VSUk9SJDI7XG4gIH1cblxuICBjb25zdCBzID0gc3RybS5zdGF0ZTtcblxuICBpZiAoIXN0cm0ub3V0cHV0IHx8XG4gICAgICAoc3RybS5hdmFpbF9pbiAhPT0gMCAmJiAhc3RybS5pbnB1dCkgfHxcbiAgICAgIChzLnN0YXR1cyA9PT0gRklOSVNIX1NUQVRFICYmIGZsdXNoICE9PSBaX0ZJTklTSCQzKSkge1xuICAgIHJldHVybiBlcnIoc3RybSwgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSA/IFpfQlVGX0VSUk9SJDEgOiBaX1NUUkVBTV9FUlJPUiQyKTtcbiAgfVxuXG4gIGNvbnN0IG9sZF9mbHVzaCA9IHMubGFzdF9mbHVzaDtcbiAgcy5sYXN0X2ZsdXNoID0gZmx1c2g7XG5cbiAgLyogRmx1c2ggYXMgbXVjaCBwZW5kaW5nIG91dHB1dCBhcyBwb3NzaWJsZSAqL1xuICBpZiAocy5wZW5kaW5nICE9PSAwKSB7XG4gICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIC8qIFNpbmNlIGF2YWlsX291dCBpcyAwLCBkZWZsYXRlIHdpbGwgYmUgY2FsbGVkIGFnYWluIHdpdGhcbiAgICAgICAqIG1vcmUgb3V0cHV0IHNwYWNlLCBidXQgcG9zc2libHkgd2l0aCBib3RoIHBlbmRpbmcgYW5kXG4gICAgICAgKiBhdmFpbF9pbiBlcXVhbCB0byB6ZXJvLiBUaGVyZSB3b24ndCBiZSBhbnl0aGluZyB0byBkbyxcbiAgICAgICAqIGJ1dCB0aGlzIGlzIG5vdCBhbiBlcnJvciBzaXR1YXRpb24gc28gbWFrZSBzdXJlIHdlXG4gICAgICAgKiByZXR1cm4gT0sgaW5zdGVhZCBvZiBCVUZfRVJST1IgYXQgbmV4dCBjYWxsIG9mIGRlZmxhdGU6XG4gICAgICAgKi9cbiAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgcmV0dXJuIFpfT0skMztcbiAgICB9XG5cbiAgICAvKiBNYWtlIHN1cmUgdGhlcmUgaXMgc29tZXRoaW5nIHRvIGRvIGFuZCBhdm9pZCBkdXBsaWNhdGUgY29uc2VjdXRpdmVcbiAgICAgKiBmbHVzaGVzLiBGb3IgcmVwZWF0ZWQgYW5kIHVzZWxlc3MgY2FsbHMgd2l0aCBaX0ZJTklTSCwgd2Uga2VlcFxuICAgICAqIHJldHVybmluZyBaX1NUUkVBTV9FTkQgaW5zdGVhZCBvZiBaX0JVRl9FUlJPUi5cbiAgICAgKi9cbiAgfSBlbHNlIGlmIChzdHJtLmF2YWlsX2luID09PSAwICYmIHJhbmsoZmx1c2gpIDw9IHJhbmsob2xkX2ZsdXNoKSAmJlxuICAgIGZsdXNoICE9PSBaX0ZJTklTSCQzKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX0JVRl9FUlJPUiQxKTtcbiAgfVxuXG4gIC8qIFVzZXIgbXVzdCBub3QgcHJvdmlkZSBtb3JlIGlucHV0IGFmdGVyIHRoZSBmaXJzdCBGSU5JU0g6ICovXG4gIGlmIChzLnN0YXR1cyA9PT0gRklOSVNIX1NUQVRFICYmIHN0cm0uYXZhaWxfaW4gIT09IDApIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfQlVGX0VSUk9SJDEpO1xuICB9XG5cbiAgLyogV3JpdGUgdGhlIGhlYWRlciAqL1xuICBpZiAocy5zdGF0dXMgPT09IElOSVRfU1RBVEUgJiYgcy53cmFwID09PSAwKSB7XG4gICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gSU5JVF9TVEFURSkge1xuICAgIC8qIHpsaWIgaGVhZGVyICovXG4gICAgbGV0IGhlYWRlciA9IChaX0RFRkxBVEVEJDIgKyAoKHMud19iaXRzIC0gOCkgPDwgNCkpIDw8IDg7XG4gICAgbGV0IGxldmVsX2ZsYWdzID0gLTE7XG5cbiAgICBpZiAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMikge1xuICAgICAgbGV2ZWxfZmxhZ3MgPSAwO1xuICAgIH0gZWxzZSBpZiAocy5sZXZlbCA8IDYpIHtcbiAgICAgIGxldmVsX2ZsYWdzID0gMTtcbiAgICB9IGVsc2UgaWYgKHMubGV2ZWwgPT09IDYpIHtcbiAgICAgIGxldmVsX2ZsYWdzID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV2ZWxfZmxhZ3MgPSAzO1xuICAgIH1cbiAgICBoZWFkZXIgfD0gKGxldmVsX2ZsYWdzIDw8IDYpO1xuICAgIGlmIChzLnN0cnN0YXJ0ICE9PSAwKSB7IGhlYWRlciB8PSBQUkVTRVRfRElDVDsgfVxuICAgIGhlYWRlciArPSAzMSAtIChoZWFkZXIgJSAzMSk7XG5cbiAgICBwdXRTaG9ydE1TQihzLCBoZWFkZXIpO1xuXG4gICAgLyogU2F2ZSB0aGUgYWRsZXIzMiBvZiB0aGUgcHJlc2V0IGRpY3Rpb25hcnk6ICovXG4gICAgaWYgKHMuc3Ryc3RhcnQgIT09IDApIHtcbiAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgPj4+IDE2KTtcbiAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgJiAweGZmZmYpO1xuICAgIH1cbiAgICBzdHJtLmFkbGVyID0gMTsgLy8gYWRsZXIzMigwTCwgWl9OVUxMLCAwKTtcbiAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG5cbiAgICAvKiBDb21wcmVzc2lvbiBtdXN0IHN0YXJ0IHdpdGggYW4gZW1wdHkgcGVuZGluZyBidWZmZXIgKi9cbiAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgcmV0dXJuIFpfT0skMztcbiAgICB9XG4gIH1cbi8vI2lmZGVmIEdaSVBcbiAgaWYgKHMuc3RhdHVzID09PSBHWklQX1NUQVRFKSB7XG4gICAgLyogZ3ppcCBoZWFkZXIgKi9cbiAgICBzdHJtLmFkbGVyID0gMDsgIC8vY3JjMzIoMEwsIFpfTlVMTCwgMCk7XG4gICAgcHV0X2J5dGUocywgMzEpO1xuICAgIHB1dF9ieXRlKHMsIDEzOSk7XG4gICAgcHV0X2J5dGUocywgOCk7XG4gICAgaWYgKCFzLmd6aGVhZCkgeyAvLyBzLT5nemhlYWQgPT0gWl9OVUxMXG4gICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgcHV0X2J5dGUocywgcy5sZXZlbCA9PT0gOSA/IDIgOlxuICAgICAgICAgICAgICAgICAgKHMuc3RyYXRlZ3kgPj0gWl9IVUZGTUFOX09OTFkgfHwgcy5sZXZlbCA8IDIgP1xuICAgICAgICAgICAgICAgICAgIDQgOiAwKSk7XG4gICAgICBwdXRfYnl0ZShzLCBPU19DT0RFKTtcbiAgICAgIHMuc3RhdHVzID0gQlVTWV9TVEFURTtcblxuICAgICAgLyogQ29tcHJlc3Npb24gbXVzdCBzdGFydCB3aXRoIGFuIGVtcHR5IHBlbmRpbmcgYnVmZmVyICovXG4gICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgICAgcmV0dXJuIFpfT0skMztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGV4dCA/IDEgOiAwKSArXG4gICAgICAgICAgICAgICAgICAocy5nemhlYWQuaGNyYyA/IDIgOiAwKSArXG4gICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLmV4dHJhID8gMCA6IDQpICtcbiAgICAgICAgICAgICAgICAgICghcy5nemhlYWQubmFtZSA/IDAgOiA4KSArXG4gICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLmNvbW1lbnQgPyAwIDogMTYpXG4gICAgICApO1xuICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQudGltZSAmIDB4ZmYpO1xuICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRpbWUgPj4gOCkgJiAweGZmKTtcbiAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDE2KSAmIDB4ZmYpO1xuICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRpbWUgPj4gMjQpICYgMHhmZik7XG4gICAgICBwdXRfYnl0ZShzLCBzLmxldmVsID09PSA5ID8gMiA6XG4gICAgICAgICAgICAgICAgICAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMiA/XG4gICAgICAgICAgICAgICAgICAgNCA6IDApKTtcbiAgICAgIHB1dF9ieXRlKHMsIHMuZ3poZWFkLm9zICYgMHhmZik7XG4gICAgICBpZiAocy5nemhlYWQuZXh0cmEgJiYgcy5nemhlYWQuZXh0cmEubGVuZ3RoKSB7XG4gICAgICAgIHB1dF9ieXRlKHMsIHMuZ3poZWFkLmV4dHJhLmxlbmd0aCAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQuZXh0cmEubGVuZ3RoID4+IDgpICYgMHhmZik7XG4gICAgICB9XG4gICAgICBpZiAocy5nemhlYWQuaGNyYykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzJfMShzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcsIDApO1xuICAgICAgfVxuICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgIHMuc3RhdHVzID0gRVhUUkFfU1RBVEU7XG4gICAgfVxuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gRVhUUkFfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuZXh0cmEvKiAhPSBaX05VTEwqLykge1xuICAgICAgbGV0IGJlZyA9IHMucGVuZGluZzsgICAvKiBzdGFydCBvZiBieXRlcyB0byB1cGRhdGUgY3JjICovXG4gICAgICBsZXQgbGVmdCA9IChzLmd6aGVhZC5leHRyYS5sZW5ndGggJiAweGZmZmYpIC0gcy5nemluZGV4O1xuICAgICAgd2hpbGUgKHMucGVuZGluZyArIGxlZnQgPiBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgbGV0IGNvcHkgPSBzLnBlbmRpbmdfYnVmX3NpemUgLSBzLnBlbmRpbmc7XG4gICAgICAgIC8vIHptZW1jcHkocy5wZW5kaW5nX2J1ZiArIHMucGVuZGluZyxcbiAgICAgICAgLy8gICAgcy5nemhlYWQuZXh0cmEgKyBzLmd6aW5kZXgsIGNvcHkpO1xuICAgICAgICBzLnBlbmRpbmdfYnVmLnNldChzLmd6aGVhZC5leHRyYS5zdWJhcnJheShzLmd6aW5kZXgsIHMuZ3ppbmRleCArIGNvcHkpLCBzLnBlbmRpbmcpO1xuICAgICAgICBzLnBlbmRpbmcgPSBzLnBlbmRpbmdfYnVmX3NpemU7XG4gICAgICAgIC8vLS0tIEhDUkNfVVBEQVRFKGJlZykgLS0tLy9cbiAgICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyXzEoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgICB9XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgcy5nemluZGV4ICs9IGNvcHk7XG4gICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgICAgICByZXR1cm4gWl9PSyQzO1xuICAgICAgICB9XG4gICAgICAgIGJlZyA9IDA7XG4gICAgICAgIGxlZnQgLT0gY29weTtcbiAgICAgIH1cbiAgICAgIC8vIEpTIHNwZWNpZmljOiBzLmd6aGVhZC5leHRyYSBtYXkgYmUgVHlwZWRBcnJheSBvciBBcnJheSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgLy8gICAgICAgICAgICAgIFR5cGVkQXJyYXkuc2xpY2UgYW5kIFR5cGVkQXJyYXkuZnJvbSBkb24ndCBleGlzdCBpbiBJRTEwLUlFMTFcbiAgICAgIGxldCBnemhlYWRfZXh0cmEgPSBuZXcgVWludDhBcnJheShzLmd6aGVhZC5leHRyYSk7XG4gICAgICAvLyB6bWVtY3B5KHMtPnBlbmRpbmdfYnVmICsgcy0+cGVuZGluZyxcbiAgICAgIC8vICAgICBzLT5nemhlYWQtPmV4dHJhICsgcy0+Z3ppbmRleCwgbGVmdCk7XG4gICAgICBzLnBlbmRpbmdfYnVmLnNldChnemhlYWRfZXh0cmEuc3ViYXJyYXkocy5nemluZGV4LCBzLmd6aW5kZXggKyBsZWZ0KSwgcy5wZW5kaW5nKTtcbiAgICAgIHMucGVuZGluZyArPSBsZWZ0O1xuICAgICAgLy8tLS0gSENSQ19VUERBVEUoYmVnKSAtLS0vL1xuICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMl8xKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgIH1cbiAgICAgIC8vLS0tLy9cbiAgICAgIHMuZ3ppbmRleCA9IDA7XG4gICAgfVxuICAgIHMuc3RhdHVzID0gTkFNRV9TVEFURTtcbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IE5BTUVfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQubmFtZS8qICE9IFpfTlVMTCovKSB7XG4gICAgICBsZXQgYmVnID0gcy5wZW5kaW5nOyAgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cbiAgICAgIGxldCB2YWw7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIC8vLS0tIEhDUkNfVVBEQVRFKGJlZykgLS0tLy9cbiAgICAgICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMl8xKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgICAgICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gWl9PSyQzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiZWcgPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIEpTIHNwZWNpZmljOiBsaXR0bGUgbWFnaWMgdG8gYWRkIHplcm8gdGVybWluYXRvciB0byBlbmQgb2Ygc3RyaW5nXG4gICAgICAgIGlmIChzLmd6aW5kZXggPCBzLmd6aGVhZC5uYW1lLmxlbmd0aCkge1xuICAgICAgICAgIHZhbCA9IHMuZ3poZWFkLm5hbWUuY2hhckNvZGVBdChzLmd6aW5kZXgrKykgJiAweGZmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgdmFsKTtcbiAgICAgIH0gd2hpbGUgKHZhbCAhPT0gMCk7XG4gICAgICAvLy0tLSBIQ1JDX1VQREFURShiZWcpIC0tLS8vXG4gICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyXzEoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgLy8tLS0vL1xuICAgICAgcy5nemluZGV4ID0gMDtcbiAgICB9XG4gICAgcy5zdGF0dXMgPSBDT01NRU5UX1NUQVRFO1xuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gQ09NTUVOVF9TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5jb21tZW50LyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGxldCBiZWcgPSBzLnBlbmRpbmc7ICAgLyogc3RhcnQgb2YgYnl0ZXMgdG8gdXBkYXRlIGNyYyAqL1xuICAgICAgbGV0IHZhbDtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgLy8tLS0gSENSQ19VUERBVEUoYmVnKSAtLS0vL1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyXzEoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBpZiAocy5wZW5kaW5nICE9PSAwKSB7XG4gICAgICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBaX09LJDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJlZyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSlMgc3BlY2lmaWM6IGxpdHRsZSBtYWdpYyB0byBhZGQgemVybyB0ZXJtaW5hdG9yIHRvIGVuZCBvZiBzdHJpbmdcbiAgICAgICAgaWYgKHMuZ3ppbmRleCA8IHMuZ3poZWFkLmNvbW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgdmFsID0gcy5nemhlYWQuY29tbWVudC5jaGFyQ29kZUF0KHMuZ3ppbmRleCsrKSAmIDB4ZmY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwdXRfYnl0ZShzLCB2YWwpO1xuICAgICAgfSB3aGlsZSAodmFsICE9PSAwKTtcbiAgICAgIC8vLS0tIEhDUkNfVVBEQVRFKGJlZykgLS0tLy9cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzJfMShzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICB9XG4gICAgICAvLy0tLS8vXG4gICAgfVxuICAgIHMuc3RhdHVzID0gSENSQ19TVEFURTtcbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IEhDUkNfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuaGNyYykge1xuICAgICAgaWYgKHMucGVuZGluZyArIDIgPiBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgICAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgICAgIHJldHVybiBaX09LJDM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1dF9ieXRlKHMsIHN0cm0uYWRsZXIgJiAweGZmKTtcbiAgICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDgpICYgMHhmZik7XG4gICAgICBzdHJtLmFkbGVyID0gMDsgLy9jcmMzMigwTCwgWl9OVUxMLCAwKTtcbiAgICB9XG4gICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuXG4gICAgLyogQ29tcHJlc3Npb24gbXVzdCBzdGFydCB3aXRoIGFuIGVtcHR5IHBlbmRpbmcgYnVmZmVyICovXG4gICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICBpZiAocy5wZW5kaW5nICE9PSAwKSB7XG4gICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgIHJldHVybiBaX09LJDM7XG4gICAgfVxuICB9XG4vLyNlbmRpZlxuXG4gIC8qIFN0YXJ0IGEgbmV3IGJsb2NrIG9yIGNvbnRpbnVlIHRoZSBjdXJyZW50IG9uZS5cbiAgICovXG4gIGlmIChzdHJtLmF2YWlsX2luICE9PSAwIHx8IHMubG9va2FoZWFkICE9PSAwIHx8XG4gICAgKGZsdXNoICE9PSBaX05PX0ZMVVNIJDIgJiYgcy5zdGF0dXMgIT09IEZJTklTSF9TVEFURSkpIHtcbiAgICBsZXQgYnN0YXRlID0gcy5sZXZlbCA9PT0gMCA/IGRlZmxhdGVfc3RvcmVkKHMsIGZsdXNoKSA6XG4gICAgICAgICAgICAgICAgIHMuc3RyYXRlZ3kgPT09IFpfSFVGRk1BTl9PTkxZID8gZGVmbGF0ZV9odWZmKHMsIGZsdXNoKSA6XG4gICAgICAgICAgICAgICAgIHMuc3RyYXRlZ3kgPT09IFpfUkxFID8gZGVmbGF0ZV9ybGUocywgZmx1c2gpIDpcbiAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5mdW5jKHMsIGZsdXNoKTtcblxuICAgIGlmIChic3RhdGUgPT09IEJTX0ZJTklTSF9TVEFSVEVEIHx8IGJzdGF0ZSA9PT0gQlNfRklOSVNIX0RPTkUpIHtcbiAgICAgIHMuc3RhdHVzID0gRklOSVNIX1NUQVRFO1xuICAgIH1cbiAgICBpZiAoYnN0YXRlID09PSBCU19ORUVEX01PUkUgfHwgYnN0YXRlID09PSBCU19GSU5JU0hfU1RBUlRFRCkge1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgICAvKiBhdm9pZCBCVUZfRVJST1IgbmV4dCBjYWxsLCBzZWUgYWJvdmUgKi9cbiAgICAgIH1cbiAgICAgIHJldHVybiBaX09LJDM7XG4gICAgICAvKiBJZiBmbHVzaCAhPSBaX05PX0ZMVVNIICYmIGF2YWlsX291dCA9PSAwLCB0aGUgbmV4dCBjYWxsXG4gICAgICAgKiBvZiBkZWZsYXRlIHNob3VsZCB1c2UgdGhlIHNhbWUgZmx1c2ggcGFyYW1ldGVyIHRvIG1ha2Ugc3VyZVxuICAgICAgICogdGhhdCB0aGUgZmx1c2ggaXMgY29tcGxldGUuIFNvIHdlIGRvbid0IGhhdmUgdG8gb3V0cHV0IGFuXG4gICAgICAgKiBlbXB0eSBibG9jayBoZXJlLCB0aGlzIHdpbGwgYmUgZG9uZSBhdCBuZXh0IGNhbGwuIFRoaXMgYWxzb1xuICAgICAgICogZW5zdXJlcyB0aGF0IGZvciBhIHZlcnkgc21hbGwgb3V0cHV0IGJ1ZmZlciwgd2UgZW1pdCBhdCBtb3N0XG4gICAgICAgKiBvbmUgZW1wdHkgYmxvY2suXG4gICAgICAgKi9cbiAgICB9XG4gICAgaWYgKGJzdGF0ZSA9PT0gQlNfQkxPQ0tfRE9ORSkge1xuICAgICAgaWYgKGZsdXNoID09PSBaX1BBUlRJQUxfRkxVU0gpIHtcbiAgICAgICAgX3RyX2FsaWduKHMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZmx1c2ggIT09IFpfQkxPQ0skMSkgeyAvKiBGVUxMX0ZMVVNIIG9yIFNZTkNfRkxVU0ggKi9cblxuICAgICAgICBfdHJfc3RvcmVkX2Jsb2NrKHMsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgLyogRm9yIGEgZnVsbCBmbHVzaCwgdGhpcyBlbXB0eSBibG9jayB3aWxsIGJlIHJlY29nbml6ZWRcbiAgICAgICAgICogYXMgYSBzcGVjaWFsIG1hcmtlciBieSBpbmZsYXRlX3N5bmMoKS5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9GVUxMX0ZMVVNIJDEpIHtcbiAgICAgICAgICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi8gICAgICAgICAgICAgLyogZm9yZ2V0IGhpc3RvcnkgKi9cbiAgICAgICAgICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG5cbiAgICAgICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgICAgIHMuc3Ryc3RhcnQgPSAwO1xuICAgICAgICAgICAgcy5ibG9ja19zdGFydCA9IDA7XG4gICAgICAgICAgICBzLmluc2VydCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHMubGFzdF9mbHVzaCA9IC0xOyAvKiBhdm9pZCBCVUZfRVJST1IgYXQgbmV4dCBjYWxsLCBzZWUgYWJvdmUgKi9cbiAgICAgICAgcmV0dXJuIFpfT0skMztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZmx1c2ggIT09IFpfRklOSVNIJDMpIHsgcmV0dXJuIFpfT0skMzsgfVxuICBpZiAocy53cmFwIDw9IDApIHsgcmV0dXJuIFpfU1RSRUFNX0VORCQzOyB9XG5cbiAgLyogV3JpdGUgdGhlIHRyYWlsZXIgKi9cbiAgaWYgKHMud3JhcCA9PT0gMikge1xuICAgIHB1dF9ieXRlKHMsIHN0cm0uYWRsZXIgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiA4KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDE2KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDI0KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIHN0cm0udG90YWxfaW4gJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiA4KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLnRvdGFsX2luID4+IDE2KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLnRvdGFsX2luID4+IDI0KSAmIDB4ZmYpO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgPj4+IDE2KTtcbiAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyICYgMHhmZmZmKTtcbiAgfVxuXG4gIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gIC8qIElmIGF2YWlsX291dCBpcyB6ZXJvLCB0aGUgYXBwbGljYXRpb24gd2lsbCBjYWxsIGRlZmxhdGUgYWdhaW5cbiAgICogdG8gZmx1c2ggdGhlIHJlc3QuXG4gICAqL1xuICBpZiAocy53cmFwID4gMCkgeyBzLndyYXAgPSAtcy53cmFwOyB9XG4gIC8qIHdyaXRlIHRoZSB0cmFpbGVyIG9ubHkgb25jZSEgKi9cbiAgcmV0dXJuIHMucGVuZGluZyAhPT0gMCA/IFpfT0skMyA6IFpfU1RSRUFNX0VORCQzO1xufTtcblxuXG5jb25zdCBkZWZsYXRlRW5kID0gKHN0cm0pID0+IHtcblxuICBpZiAoZGVmbGF0ZVN0YXRlQ2hlY2soc3RybSkpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1IkMjtcbiAgfVxuXG4gIGNvbnN0IHN0YXR1cyA9IHN0cm0uc3RhdGUuc3RhdHVzO1xuXG4gIHN0cm0uc3RhdGUgPSBudWxsO1xuXG4gIHJldHVybiBzdGF0dXMgPT09IEJVU1lfU1RBVEUgPyBlcnIoc3RybSwgWl9EQVRBX0VSUk9SJDIpIDogWl9PSyQzO1xufTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplcyB0aGUgY29tcHJlc3Npb24gZGljdGlvbmFyeSBmcm9tIHRoZSBnaXZlbiBieXRlXG4gKiBzZXF1ZW5jZSB3aXRob3V0IHByb2R1Y2luZyBhbnkgY29tcHJlc3NlZCBvdXRwdXQuXG4gKi9cbmNvbnN0IGRlZmxhdGVTZXREaWN0aW9uYXJ5ID0gKHN0cm0sIGRpY3Rpb25hcnkpID0+IHtcblxuICBsZXQgZGljdExlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xuXG4gIGlmIChkZWZsYXRlU3RhdGVDaGVjayhzdHJtKSkge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUiQyO1xuICB9XG5cbiAgY29uc3QgcyA9IHN0cm0uc3RhdGU7XG4gIGNvbnN0IHdyYXAgPSBzLndyYXA7XG5cbiAgaWYgKHdyYXAgPT09IDIgfHwgKHdyYXAgPT09IDEgJiYgcy5zdGF0dXMgIT09IElOSVRfU1RBVEUpIHx8IHMubG9va2FoZWFkKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SJDI7XG4gIH1cblxuICAvKiB3aGVuIHVzaW5nIHpsaWIgd3JhcHBlcnMsIGNvbXB1dGUgQWRsZXItMzIgZm9yIHByb3ZpZGVkIGRpY3Rpb25hcnkgKi9cbiAgaWYgKHdyYXAgPT09IDEpIHtcbiAgICAvKiBhZGxlcjMyKHN0cm0tPmFkbGVyLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKTsgKi9cbiAgICBzdHJtLmFkbGVyID0gYWRsZXIzMl8xKHN0cm0uYWRsZXIsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgsIDApO1xuICB9XG5cbiAgcy53cmFwID0gMDsgICAvKiBhdm9pZCBjb21wdXRpbmcgQWRsZXItMzIgaW4gcmVhZF9idWYgKi9cblxuICAvKiBpZiBkaWN0aW9uYXJ5IHdvdWxkIGZpbGwgd2luZG93LCBqdXN0IHJlcGxhY2UgdGhlIGhpc3RvcnkgKi9cbiAgaWYgKGRpY3RMZW5ndGggPj0gcy53X3NpemUpIHtcbiAgICBpZiAod3JhcCA9PT0gMCkgeyAgICAgICAgICAgIC8qIGFscmVhZHkgZW1wdHkgb3RoZXJ3aXNlICovXG4gICAgICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi9cbiAgICAgIHplcm8ocy5oZWFkKTsgLy8gRmlsbCB3aXRoIE5JTCAoPSAwKTtcbiAgICAgIHMuc3Ryc3RhcnQgPSAwO1xuICAgICAgcy5ibG9ja19zdGFydCA9IDA7XG4gICAgICBzLmluc2VydCA9IDA7XG4gICAgfVxuICAgIC8qIHVzZSB0aGUgdGFpbCAqL1xuICAgIC8vIGRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5LnNsaWNlKGRpY3RMZW5ndGggLSBzLndfc2l6ZSk7XG4gICAgbGV0IHRtcERpY3QgPSBuZXcgVWludDhBcnJheShzLndfc2l6ZSk7XG4gICAgdG1wRGljdC5zZXQoZGljdGlvbmFyeS5zdWJhcnJheShkaWN0TGVuZ3RoIC0gcy53X3NpemUsIGRpY3RMZW5ndGgpLCAwKTtcbiAgICBkaWN0aW9uYXJ5ID0gdG1wRGljdDtcbiAgICBkaWN0TGVuZ3RoID0gcy53X3NpemU7XG4gIH1cbiAgLyogaW5zZXJ0IGRpY3Rpb25hcnkgaW50byB3aW5kb3cgYW5kIGhhc2ggKi9cbiAgY29uc3QgYXZhaWwgPSBzdHJtLmF2YWlsX2luO1xuICBjb25zdCBuZXh0ID0gc3RybS5uZXh0X2luO1xuICBjb25zdCBpbnB1dCA9IHN0cm0uaW5wdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSBkaWN0TGVuZ3RoO1xuICBzdHJtLm5leHRfaW4gPSAwO1xuICBzdHJtLmlucHV0ID0gZGljdGlvbmFyeTtcbiAgZmlsbF93aW5kb3cocyk7XG4gIHdoaWxlIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICBsZXQgc3RyID0gcy5zdHJzdGFydDtcbiAgICBsZXQgbiA9IHMubG9va2FoZWFkIC0gKE1JTl9NQVRDSCAtIDEpO1xuICAgIGRvIHtcbiAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMtPmluc19oLCBzLT53aW5kb3dbc3RyICsgTUlOX01BVENILTFdKTsgKi9cbiAgICAgIHMuaW5zX2ggPSBIQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3N0ciArIE1JTl9NQVRDSCAtIDFdKTtcblxuICAgICAgcy5wcmV2W3N0ciAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcblxuICAgICAgcy5oZWFkW3MuaW5zX2hdID0gc3RyO1xuICAgICAgc3RyKys7XG4gICAgfSB3aGlsZSAoLS1uKTtcbiAgICBzLnN0cnN0YXJ0ID0gc3RyO1xuICAgIHMubG9va2FoZWFkID0gTUlOX01BVENIIC0gMTtcbiAgICBmaWxsX3dpbmRvdyhzKTtcbiAgfVxuICBzLnN0cnN0YXJ0ICs9IHMubG9va2FoZWFkO1xuICBzLmJsb2NrX3N0YXJ0ID0gcy5zdHJzdGFydDtcbiAgcy5pbnNlcnQgPSBzLmxvb2thaGVhZDtcbiAgcy5sb29rYWhlYWQgPSAwO1xuICBzLm1hdGNoX2xlbmd0aCA9IHMucHJldl9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gIHN0cm0uaW5wdXQgPSBpbnB1dDtcbiAgc3RybS5hdmFpbF9pbiA9IGF2YWlsO1xuICBzLndyYXAgPSB3cmFwO1xuICByZXR1cm4gWl9PSyQzO1xufTtcblxuXG52YXIgZGVmbGF0ZUluaXRfMSA9IGRlZmxhdGVJbml0O1xudmFyIGRlZmxhdGVJbml0Ml8xID0gZGVmbGF0ZUluaXQyO1xudmFyIGRlZmxhdGVSZXNldF8xID0gZGVmbGF0ZVJlc2V0O1xudmFyIGRlZmxhdGVSZXNldEtlZXBfMSA9IGRlZmxhdGVSZXNldEtlZXA7XG52YXIgZGVmbGF0ZVNldEhlYWRlcl8xID0gZGVmbGF0ZVNldEhlYWRlcjtcbnZhciBkZWZsYXRlXzIkMSA9IGRlZmxhdGUkMjtcbnZhciBkZWZsYXRlRW5kXzEgPSBkZWZsYXRlRW5kO1xudmFyIGRlZmxhdGVTZXREaWN0aW9uYXJ5XzEgPSBkZWZsYXRlU2V0RGljdGlvbmFyeTtcbnZhciBkZWZsYXRlSW5mbyA9ICdwYWtvIGRlZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpJztcblxuLyogTm90IGltcGxlbWVudGVkXG5tb2R1bGUuZXhwb3J0cy5kZWZsYXRlQm91bmQgPSBkZWZsYXRlQm91bmQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZsYXRlQ29weSA9IGRlZmxhdGVDb3B5O1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZUdldERpY3Rpb25hcnkgPSBkZWZsYXRlR2V0RGljdGlvbmFyeTtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVQYXJhbXMgPSBkZWZsYXRlUGFyYW1zO1xubW9kdWxlLmV4cG9ydHMuZGVmbGF0ZVBlbmRpbmcgPSBkZWZsYXRlUGVuZGluZztcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVQcmltZSA9IGRlZmxhdGVQcmltZTtcbm1vZHVsZS5leHBvcnRzLmRlZmxhdGVUdW5lID0gZGVmbGF0ZVR1bmU7XG4qL1xuXG52YXIgZGVmbGF0ZV8xJDIgPSB7XG5cdGRlZmxhdGVJbml0OiBkZWZsYXRlSW5pdF8xLFxuXHRkZWZsYXRlSW5pdDI6IGRlZmxhdGVJbml0Ml8xLFxuXHRkZWZsYXRlUmVzZXQ6IGRlZmxhdGVSZXNldF8xLFxuXHRkZWZsYXRlUmVzZXRLZWVwOiBkZWZsYXRlUmVzZXRLZWVwXzEsXG5cdGRlZmxhdGVTZXRIZWFkZXI6IGRlZmxhdGVTZXRIZWFkZXJfMSxcblx0ZGVmbGF0ZTogZGVmbGF0ZV8yJDEsXG5cdGRlZmxhdGVFbmQ6IGRlZmxhdGVFbmRfMSxcblx0ZGVmbGF0ZVNldERpY3Rpb25hcnk6IGRlZmxhdGVTZXREaWN0aW9uYXJ5XzEsXG5cdGRlZmxhdGVJbmZvOiBkZWZsYXRlSW5mb1xufTtcblxuY29uc3QgX2hhcyA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiAob2JqIC8qZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uKi8pIHtcbiAgY29uc3Qgc291cmNlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHdoaWxlIChzb3VyY2VzLmxlbmd0aCkge1xuICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgICBpZiAoIXNvdXJjZSkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNvdXJjZSArICdtdXN0IGJlIG5vbi1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHAgaW4gc291cmNlKSB7XG4gICAgICBpZiAoX2hhcyhzb3VyY2UsIHApKSB7XG4gICAgICAgIG9ialtwXSA9IHNvdXJjZVtwXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLyBKb2luIGFycmF5IG9mIGNodW5rcyB0byBzaW5nbGUgYXJyYXkuXG52YXIgZmxhdHRlbkNodW5rcyA9IChjaHVua3MpID0+IHtcbiAgLy8gY2FsY3VsYXRlIGRhdGEgbGVuZ3RoXG4gIGxldCBsZW4gPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gY2h1bmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxlbiArPSBjaHVua3NbaV0ubGVuZ3RoO1xuICB9XG5cbiAgLy8gam9pbiBjaHVua3NcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcblxuICBmb3IgKGxldCBpID0gMCwgcG9zID0gMCwgbCA9IGNodW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY2h1bmsgPSBjaHVua3NbaV07XG4gICAgcmVzdWx0LnNldChjaHVuaywgcG9zKTtcbiAgICBwb3MgKz0gY2h1bmsubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBjb21tb24gPSB7XG5cdGFzc2lnbjogYXNzaWduLFxuXHRmbGF0dGVuQ2h1bmtzOiBmbGF0dGVuQ2h1bmtzXG59O1xuXG4vLyBTdHJpbmcgZW5jb2RlL2RlY29kZSBoZWxwZXJzXG5cblxuLy8gUXVpY2sgY2hlY2sgaWYgd2UgY2FuIHVzZSBmYXN0IGFycmF5IHRvIGJpbiBzdHJpbmcgY29udmVyc2lvblxuLy9cbi8vIC0gYXBwbHkoQXJyYXkpIGNhbiBmYWlsIG9uIEFuZHJvaWQgMi4yXG4vLyAtIGFwcGx5KFVpbnQ4QXJyYXkpIGNhbiBmYWlsIG9uIGlPUyA1LjEgU2FmYXJpXG4vL1xubGV0IFNUUl9BUFBMWV9VSUFfT0sgPSB0cnVlO1xuXG50cnkgeyBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KDEpKTsgfSBjYXRjaCAoX18pIHsgU1RSX0FQUExZX1VJQV9PSyA9IGZhbHNlOyB9XG5cblxuLy8gVGFibGUgd2l0aCB1dGY4IGxlbmd0aHMgKGNhbGN1bGF0ZWQgYnkgZmlyc3QgYnl0ZSBvZiBzZXF1ZW5jZSlcbi8vIE5vdGUsIHRoYXQgNSAmIDYtYnl0ZSB2YWx1ZXMgYW5kIHNvbWUgNC1ieXRlIHZhbHVlcyBjYW4gbm90IGJlIHJlcHJlc2VudGVkIGluIEpTLFxuLy8gYmVjYXVzZSBtYXggcG9zc2libGUgY29kZXBvaW50IGlzIDB4MTBmZmZmXG5jb25zdCBfdXRmOGxlbiA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKGxldCBxID0gMDsgcSA8IDI1NjsgcSsrKSB7XG4gIF91dGY4bGVuW3FdID0gKHEgPj0gMjUyID8gNiA6IHEgPj0gMjQ4ID8gNSA6IHEgPj0gMjQwID8gNCA6IHEgPj0gMjI0ID8gMyA6IHEgPj0gMTkyID8gMiA6IDEpO1xufVxuX3V0ZjhsZW5bMjU0XSA9IF91dGY4bGVuWzI1NF0gPSAxOyAvLyBJbnZhbGlkIHNlcXVlbmNlIHN0YXJ0XG5cblxuLy8gY29udmVydCBzdHJpbmcgdG8gYXJyYXkgKHR5cGVkLCB3aGVuIHBvc3NpYmxlKVxudmFyIHN0cmluZzJidWYgPSAoc3RyKSA9PiB7XG4gIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgPT09ICdmdW5jdGlvbicgJiYgVGV4dEVuY29kZXIucHJvdG90eXBlLmVuY29kZSkge1xuICAgIHJldHVybiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyKTtcbiAgfVxuXG4gIGxldCBidWYsIGMsIGMyLCBtX3BvcywgaSwgc3RyX2xlbiA9IHN0ci5sZW5ndGgsIGJ1Zl9sZW4gPSAwO1xuXG4gIC8vIGNvdW50IGJpbmFyeSBzaXplXG4gIGZvciAobV9wb3MgPSAwOyBtX3BvcyA8IHN0cl9sZW47IG1fcG9zKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQobV9wb3MpO1xuICAgIGlmICgoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAobV9wb3MgKyAxIDwgc3RyX2xlbikpIHtcbiAgICAgIGMyID0gc3RyLmNoYXJDb2RlQXQobV9wb3MgKyAxKTtcbiAgICAgIGlmICgoYzIgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgLSAweGQ4MDApIDw8IDEwKSArIChjMiAtIDB4ZGMwMCk7XG4gICAgICAgIG1fcG9zKys7XG4gICAgICB9XG4gICAgfVxuICAgIGJ1Zl9sZW4gKz0gYyA8IDB4ODAgPyAxIDogYyA8IDB4ODAwID8gMiA6IGMgPCAweDEwMDAwID8gMyA6IDQ7XG4gIH1cblxuICAvLyBhbGxvY2F0ZSBidWZmZXJcbiAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYnVmX2xlbik7XG5cbiAgLy8gY29udmVydFxuICBmb3IgKGkgPSAwLCBtX3BvcyA9IDA7IGkgPCBidWZfbGVuOyBtX3BvcysrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zKTtcbiAgICBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiYgKG1fcG9zICsgMSA8IHN0cl9sZW4pKSB7XG4gICAgICBjMiA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zICsgMSk7XG4gICAgICBpZiAoKGMyICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKChjIC0gMHhkODAwKSA8PCAxMCkgKyAoYzIgLSAweGRjMDApO1xuICAgICAgICBtX3BvcysrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgIC8qIG9uZSBieXRlICovXG4gICAgICBidWZbaSsrXSA9IGM7XG4gICAgfSBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgIC8qIHR3byBieXRlcyAqL1xuICAgICAgYnVmW2krK10gPSAweEMwIHwgKGMgPj4+IDYpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgJiAweDNmKTtcbiAgICB9IGVsc2UgaWYgKGMgPCAweDEwMDAwKSB7XG4gICAgICAvKiB0aHJlZSBieXRlcyAqL1xuICAgICAgYnVmW2krK10gPSAweEUwIHwgKGMgPj4+IDEyKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjID4+PiA2ICYgMHgzZik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBmb3VyIGJ5dGVzICovXG4gICAgICBidWZbaSsrXSA9IDB4ZjAgfCAoYyA+Pj4gMTgpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgPj4+IDEyICYgMHgzZik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyA+Pj4gNiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgJiAweDNmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmO1xufTtcblxuLy8gSGVscGVyXG5jb25zdCBidWYyYmluc3RyaW5nID0gKGJ1ZiwgbGVuKSA9PiB7XG4gIC8vIE9uIENocm9tZSwgdGhlIGFyZ3VtZW50cyBpbiBhIGZ1bmN0aW9uIGNhbGwgdGhhdCBhcmUgYWxsb3dlZCBpcyBgNjU1MzRgLlxuICAvLyBJZiB0aGUgbGVuZ3RoIG9mIHRoZSBidWZmZXIgaXMgc21hbGxlciB0aGFuIHRoYXQsIHdlIGNhbiB1c2UgdGhpcyBvcHRpbWl6YXRpb24sXG4gIC8vIG90aGVyd2lzZSB3ZSB3aWxsIHRha2UgYSBzbG93ZXIgcGF0aC5cbiAgaWYgKGxlbiA8IDY1NTM0KSB7XG4gICAgaWYgKGJ1Zi5zdWJhcnJheSAmJiBTVFJfQVBQTFlfVUlBX09LKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBidWYubGVuZ3RoID09PSBsZW4gPyBidWYgOiBidWYuc3ViYXJyYXkoMCwgbGVuKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyBjb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xudmFyIGJ1ZjJzdHJpbmcgPSAoYnVmLCBtYXgpID0+IHtcbiAgY29uc3QgbGVuID0gbWF4IHx8IGJ1Zi5sZW5ndGg7XG5cbiAgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ2Z1bmN0aW9uJyAmJiBUZXh0RGVjb2Rlci5wcm90b3R5cGUuZGVjb2RlKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShidWYuc3ViYXJyYXkoMCwgbWF4KSk7XG4gIH1cblxuICBsZXQgaSwgb3V0O1xuXG4gIC8vIFJlc2VydmUgbWF4IHBvc3NpYmxlIGxlbmd0aCAoMiB3b3JkcyBwZXIgY2hhcilcbiAgLy8gTkI6IGJ5IHVua25vd24gcmVhc29ucywgQXJyYXkgaXMgc2lnbmlmaWNhbnRseSBmYXN0ZXIgZm9yXG4gIC8vICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5IHRoYW4gVWludDE2QXJyYXkuXG4gIGNvbnN0IHV0ZjE2YnVmID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuXG4gIGZvciAob3V0ID0gMCwgaSA9IDA7IGkgPCBsZW47KSB7XG4gICAgbGV0IGMgPSBidWZbaSsrXTtcbiAgICAvLyBxdWljayBwcm9jZXNzIGFzY2lpXG4gICAgaWYgKGMgPCAweDgwKSB7IHV0ZjE2YnVmW291dCsrXSA9IGM7IGNvbnRpbnVlOyB9XG5cbiAgICBsZXQgY19sZW4gPSBfdXRmOGxlbltjXTtcbiAgICAvLyBza2lwIDUgJiA2IGJ5dGUgY29kZXNcbiAgICBpZiAoY19sZW4gPiA0KSB7IHV0ZjE2YnVmW291dCsrXSA9IDB4ZmZmZDsgaSArPSBjX2xlbiAtIDE7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBhcHBseSBtYXNrIG9uIGZpcnN0IGJ5dGVcbiAgICBjICY9IGNfbGVuID09PSAyID8gMHgxZiA6IGNfbGVuID09PSAzID8gMHgwZiA6IDB4MDc7XG4gICAgLy8gam9pbiB0aGUgcmVzdFxuICAgIHdoaWxlIChjX2xlbiA+IDEgJiYgaSA8IGxlbikge1xuICAgICAgYyA9IChjIDw8IDYpIHwgKGJ1ZltpKytdICYgMHgzZik7XG4gICAgICBjX2xlbi0tO1xuICAgIH1cblxuICAgIC8vIHRlcm1pbmF0ZWQgYnkgZW5kIG9mIHN0cmluZz9cbiAgICBpZiAoY19sZW4gPiAxKSB7IHV0ZjE2YnVmW291dCsrXSA9IDB4ZmZmZDsgY29udGludWU7IH1cblxuICAgIGlmIChjIDwgMHgxMDAwMCkge1xuICAgICAgdXRmMTZidWZbb3V0KytdID0gYztcbiAgICB9IGVsc2Uge1xuICAgICAgYyAtPSAweDEwMDAwO1xuICAgICAgdXRmMTZidWZbb3V0KytdID0gMHhkODAwIHwgKChjID4+IDEwKSAmIDB4M2ZmKTtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IDB4ZGMwMCB8IChjICYgMHgzZmYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYyYmluc3RyaW5nKHV0ZjE2YnVmLCBvdXQpO1xufTtcblxuXG4vLyBDYWxjdWxhdGUgbWF4IHBvc3NpYmxlIHBvc2l0aW9uIGluIHV0ZjggYnVmZmVyLFxuLy8gdGhhdCB3aWxsIG5vdCBicmVhayBzZXF1ZW5jZS4gSWYgdGhhdCdzIG5vdCBwb3NzaWJsZVxuLy8gLSAodmVyeSBzbWFsbCBsaW1pdHMpIHJldHVybiBtYXggc2l6ZSBhcyBpcy5cbi8vXG4vLyBidWZbXSAtIHV0ZjggYnl0ZXMgYXJyYXlcbi8vIG1heCAgIC0gbGVuZ3RoIGxpbWl0IChtYW5kYXRvcnkpO1xudmFyIHV0Zjhib3JkZXIgPSAoYnVmLCBtYXgpID0+IHtcblxuICBtYXggPSBtYXggfHwgYnVmLmxlbmd0aDtcbiAgaWYgKG1heCA+IGJ1Zi5sZW5ndGgpIHsgbWF4ID0gYnVmLmxlbmd0aDsgfVxuXG4gIC8vIGdvIGJhY2sgZnJvbSBsYXN0IHBvc2l0aW9uLCB1bnRpbCBzdGFydCBvZiBzZXF1ZW5jZSBmb3VuZFxuICBsZXQgcG9zID0gbWF4IC0gMTtcbiAgd2hpbGUgKHBvcyA+PSAwICYmIChidWZbcG9zXSAmIDB4QzApID09PSAweDgwKSB7IHBvcy0tOyB9XG5cbiAgLy8gVmVyeSBzbWFsbCBhbmQgYnJva2VuIHNlcXVlbmNlLFxuICAvLyByZXR1cm4gbWF4LCBiZWNhdXNlIHdlIHNob3VsZCByZXR1cm4gc29tZXRoaW5nIGFueXdheS5cbiAgaWYgKHBvcyA8IDApIHsgcmV0dXJuIG1heDsgfVxuXG4gIC8vIElmIHdlIGNhbWUgdG8gc3RhcnQgb2YgYnVmZmVyIC0gdGhhdCBtZWFucyBidWZmZXIgaXMgdG9vIHNtYWxsLFxuICAvLyByZXR1cm4gbWF4IHRvby5cbiAgaWYgKHBvcyA9PT0gMCkgeyByZXR1cm4gbWF4OyB9XG5cbiAgcmV0dXJuIChwb3MgKyBfdXRmOGxlbltidWZbcG9zXV0gPiBtYXgpID8gcG9zIDogbWF4O1xufTtcblxudmFyIHN0cmluZ3MgPSB7XG5cdHN0cmluZzJidWY6IHN0cmluZzJidWYsXG5cdGJ1ZjJzdHJpbmc6IGJ1ZjJzdHJpbmcsXG5cdHV0Zjhib3JkZXI6IHV0Zjhib3JkZXJcbn07XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuZnVuY3Rpb24gWlN0cmVhbSgpIHtcbiAgLyogbmV4dCBpbnB1dCBieXRlICovXG4gIHRoaXMuaW5wdXQgPSBudWxsOyAvLyBKUyBzcGVjaWZpYywgYmVjYXVzZSB3ZSBoYXZlIG5vIHBvaW50ZXJzXG4gIHRoaXMubmV4dF9pbiA9IDA7XG4gIC8qIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUgYXQgaW5wdXQgKi9cbiAgdGhpcy5hdmFpbF9pbiA9IDA7XG4gIC8qIHRvdGFsIG51bWJlciBvZiBpbnB1dCBieXRlcyByZWFkIHNvIGZhciAqL1xuICB0aGlzLnRvdGFsX2luID0gMDtcbiAgLyogbmV4dCBvdXRwdXQgYnl0ZSBzaG91bGQgYmUgcHV0IHRoZXJlICovXG4gIHRoaXMub3V0cHV0ID0gbnVsbDsgLy8gSlMgc3BlY2lmaWMsIGJlY2F1c2Ugd2UgaGF2ZSBubyBwb2ludGVyc1xuICB0aGlzLm5leHRfb3V0ID0gMDtcbiAgLyogcmVtYWluaW5nIGZyZWUgc3BhY2UgYXQgb3V0cHV0ICovXG4gIHRoaXMuYXZhaWxfb3V0ID0gMDtcbiAgLyogdG90YWwgbnVtYmVyIG9mIGJ5dGVzIG91dHB1dCBzbyBmYXIgKi9cbiAgdGhpcy50b3RhbF9vdXQgPSAwO1xuICAvKiBsYXN0IGVycm9yIG1lc3NhZ2UsIE5VTEwgaWYgbm8gZXJyb3IgKi9cbiAgdGhpcy5tc2cgPSAnJy8qWl9OVUxMKi87XG4gIC8qIG5vdCB2aXNpYmxlIGJ5IGFwcGxpY2F0aW9ucyAqL1xuICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgLyogYmVzdCBndWVzcyBhYm91dCB0aGUgZGF0YSB0eXBlOiBiaW5hcnkgb3IgdGV4dCAqL1xuICB0aGlzLmRhdGFfdHlwZSA9IDIvKlpfVU5LTk9XTiovO1xuICAvKiBhZGxlcjMyIHZhbHVlIG9mIHRoZSB1bmNvbXByZXNzZWQgZGF0YSAqL1xuICB0aGlzLmFkbGVyID0gMDtcbn1cblxudmFyIHpzdHJlYW0gPSBaU3RyZWFtO1xuXG5jb25zdCB0b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmNvbnN0IHtcbiAgWl9OT19GTFVTSDogWl9OT19GTFVTSCQxLCBaX1NZTkNfRkxVU0gsIFpfRlVMTF9GTFVTSCwgWl9GSU5JU0g6IFpfRklOSVNIJDIsXG4gIFpfT0s6IFpfT0skMiwgWl9TVFJFQU1fRU5EOiBaX1NUUkVBTV9FTkQkMixcbiAgWl9ERUZBVUxUX0NPTVBSRVNTSU9OLFxuICBaX0RFRkFVTFRfU1RSQVRFR1ksXG4gIFpfREVGTEFURUQ6IFpfREVGTEFURUQkMVxufSA9IGNvbnN0YW50cyQyO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8qKlxuICogY2xhc3MgRGVmbGF0ZVxuICpcbiAqIEdlbmVyaWMgSlMtc3R5bGUgd3JhcHBlciBmb3IgemxpYiBjYWxscy4gSWYgeW91IGRvbid0IG5lZWRcbiAqIHN0cmVhbWluZyBiZWhhdmlvdXIgLSB1c2UgbW9yZSBzaW1wbGUgZnVuY3Rpb25zOiBbW2RlZmxhdGVdXSxcbiAqIFtbZGVmbGF0ZVJhd11dIGFuZCBbW2d6aXBdXS5cbiAqKi9cblxuLyogaW50ZXJuYWxcbiAqIERlZmxhdGUuY2h1bmtzIC0+IEFycmF5XG4gKlxuICogQ2h1bmtzIG9mIG91dHB1dCBkYXRhLCBpZiBbW0RlZmxhdGUjb25EYXRhXV0gbm90IG92ZXJyaWRkZW4uXG4gKiovXG5cbi8qKlxuICogRGVmbGF0ZS5yZXN1bHQgLT4gVWludDhBcnJheVxuICpcbiAqIENvbXByZXNzZWQgcmVzdWx0LCBnZW5lcmF0ZWQgYnkgZGVmYXVsdCBbW0RlZmxhdGUjb25EYXRhXV1cbiAqIGFuZCBbW0RlZmxhdGUjb25FbmRdXSBoYW5kbGVycy4gRmlsbGVkIGFmdGVyIHlvdSBwdXNoIGxhc3QgY2h1bmtcbiAqIChjYWxsIFtbRGVmbGF0ZSNwdXNoXV0gd2l0aCBgWl9GSU5JU0hgIC8gYHRydWVgIHBhcmFtKS5cbiAqKi9cblxuLyoqXG4gKiBEZWZsYXRlLmVyciAtPiBOdW1iZXJcbiAqXG4gKiBFcnJvciBjb2RlIGFmdGVyIGRlZmxhdGUgZmluaXNoZWQuIDAgKFpfT0spIG9uIHN1Y2Nlc3MuXG4gKiBZb3Ugd2lsbCBub3QgbmVlZCBpdCBpbiByZWFsIGxpZmUsIGJlY2F1c2UgZGVmbGF0ZSBlcnJvcnNcbiAqIGFyZSBwb3NzaWJsZSBvbmx5IG9uIHdyb25nIG9wdGlvbnMgb3IgYmFkIGBvbkRhdGFgIC8gYG9uRW5kYFxuICogY3VzdG9tIGhhbmRsZXJzLlxuICoqL1xuXG4vKipcbiAqIERlZmxhdGUubXNnIC0+IFN0cmluZ1xuICpcbiAqIEVycm9yIG1lc3NhZ2UsIGlmIFtbRGVmbGF0ZS5lcnJdXSAhPSAwXG4gKiovXG5cblxuLyoqXG4gKiBuZXcgRGVmbGF0ZShvcHRpb25zKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDcmVhdGVzIG5ldyBkZWZsYXRvciBpbnN0YW5jZSB3aXRoIHNwZWNpZmllZCBwYXJhbXMuIFRocm93cyBleGNlcHRpb25cbiAqIG9uIGJhZCBwYXJhbXMuIFN1cHBvcnRlZCBvcHRpb25zOlxuICpcbiAqIC0gYGxldmVsYFxuICogLSBgd2luZG93Qml0c2BcbiAqIC0gYG1lbUxldmVsYFxuICogLSBgc3RyYXRlZ3lgXG4gKiAtIGBkaWN0aW9uYXJ5YFxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIEFkZGl0aW9uYWwgb3B0aW9ucywgZm9yIGludGVybmFsIG5lZWRzOlxuICpcbiAqIC0gYGNodW5rU2l6ZWAgLSBzaXplIG9mIGdlbmVyYXRlZCBkYXRhIGNodW5rcyAoMTZLIGJ5IGRlZmF1bHQpXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIGRvIHJhdyBkZWZsYXRlXG4gKiAtIGBnemlwYCAoQm9vbGVhbikgLSBjcmVhdGUgZ3ppcCB3cmFwcGVyXG4gKiAtIGBoZWFkZXJgIChPYmplY3QpIC0gY3VzdG9tIGhlYWRlciBmb3IgZ3ppcFxuICogICAtIGB0ZXh0YCAoQm9vbGVhbikgLSB0cnVlIGlmIGNvbXByZXNzZWQgZGF0YSBiZWxpZXZlZCB0byBiZSB0ZXh0XG4gKiAgIC0gYHRpbWVgIChOdW1iZXIpIC0gbW9kaWZpY2F0aW9uIHRpbWUsIHVuaXggdGltZXN0YW1wXG4gKiAgIC0gYG9zYCAoTnVtYmVyKSAtIG9wZXJhdGlvbiBzeXN0ZW0gY29kZVxuICogICAtIGBleHRyYWAgKEFycmF5KSAtIGFycmF5IG9mIGJ5dGVzIHdpdGggZXh0cmEgZGF0YSAobWF4IDY1NTM2KVxuICogICAtIGBuYW1lYCAoU3RyaW5nKSAtIGZpbGUgbmFtZSAoYmluYXJ5IHN0cmluZylcbiAqICAgLSBgY29tbWVudGAgKFN0cmluZykgLSBjb21tZW50IChiaW5hcnkgc3RyaW5nKVxuICogICAtIGBoY3JjYCAoQm9vbGVhbikgLSB0cnVlIGlmIGhlYWRlciBjcmMgc2hvdWxkIGJlIGFkZGVkXG4gKlxuICogIyMjIyMgRXhhbXBsZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBwYWtvID0gcmVxdWlyZSgncGFrbycpXG4gKiAgICwgY2h1bmsxID0gbmV3IFVpbnQ4QXJyYXkoWzEsMiwzLDQsNSw2LDcsOCw5XSlcbiAqICAgLCBjaHVuazIgPSBuZXcgVWludDhBcnJheShbMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTldKTtcbiAqXG4gKiBjb25zdCBkZWZsYXRlID0gbmV3IHBha28uRGVmbGF0ZSh7IGxldmVsOiAzfSk7XG4gKlxuICogZGVmbGF0ZS5wdXNoKGNodW5rMSwgZmFsc2UpO1xuICogZGVmbGF0ZS5wdXNoKGNodW5rMiwgdHJ1ZSk7ICAvLyB0cnVlIC0+IGxhc3QgY2h1bmtcbiAqXG4gKiBpZiAoZGVmbGF0ZS5lcnIpIHsgdGhyb3cgbmV3IEVycm9yKGRlZmxhdGUuZXJyKTsgfVxuICpcbiAqIGNvbnNvbGUubG9nKGRlZmxhdGUucmVzdWx0KTtcbiAqIGBgYFxuICoqL1xuZnVuY3Rpb24gRGVmbGF0ZSQxKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gY29tbW9uLmFzc2lnbih7XG4gICAgbGV2ZWw6IFpfREVGQVVMVF9DT01QUkVTU0lPTixcbiAgICBtZXRob2Q6IFpfREVGTEFURUQkMSxcbiAgICBjaHVua1NpemU6IDE2Mzg0LFxuICAgIHdpbmRvd0JpdHM6IDE1LFxuICAgIG1lbUxldmVsOiA4LFxuICAgIHN0cmF0ZWd5OiBaX0RFRkFVTFRfU1RSQVRFR1lcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgbGV0IG9wdCA9IHRoaXMub3B0aW9ucztcblxuICBpZiAob3B0LnJhdyAmJiAob3B0LndpbmRvd0JpdHMgPiAwKSkge1xuICAgIG9wdC53aW5kb3dCaXRzID0gLW9wdC53aW5kb3dCaXRzO1xuICB9XG5cbiAgZWxzZSBpZiAob3B0Lmd6aXAgJiYgKG9wdC53aW5kb3dCaXRzID4gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgKz0gMTY7XG4gIH1cblxuICB0aGlzLmVyciAgICA9IDA7ICAgICAgLy8gZXJyb3IgY29kZSwgaWYgaGFwcGVucyAoMCA9IFpfT0spXG4gIHRoaXMubXNnICAgID0gJyc7ICAgICAvLyBlcnJvciBtZXNzYWdlXG4gIHRoaXMuZW5kZWQgID0gZmFsc2U7ICAvLyB1c2VkIHRvIGF2b2lkIG11bHRpcGxlIG9uRW5kKCkgY2FsbHNcbiAgdGhpcy5jaHVua3MgPSBbXTsgICAgIC8vIGNodW5rcyBvZiBjb21wcmVzc2VkIGRhdGFcblxuICB0aGlzLnN0cm0gPSBuZXcgenN0cmVhbSgpO1xuICB0aGlzLnN0cm0uYXZhaWxfb3V0ID0gMDtcblxuICBsZXQgc3RhdHVzID0gZGVmbGF0ZV8xJDIuZGVmbGF0ZUluaXQyKFxuICAgIHRoaXMuc3RybSxcbiAgICBvcHQubGV2ZWwsXG4gICAgb3B0Lm1ldGhvZCxcbiAgICBvcHQud2luZG93Qml0cyxcbiAgICBvcHQubWVtTGV2ZWwsXG4gICAgb3B0LnN0cmF0ZWd5XG4gICk7XG5cbiAgaWYgKHN0YXR1cyAhPT0gWl9PSyQyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzW3N0YXR1c10pO1xuICB9XG5cbiAgaWYgKG9wdC5oZWFkZXIpIHtcbiAgICBkZWZsYXRlXzEkMi5kZWZsYXRlU2V0SGVhZGVyKHRoaXMuc3RybSwgb3B0LmhlYWRlcik7XG4gIH1cblxuICBpZiAob3B0LmRpY3Rpb25hcnkpIHtcbiAgICBsZXQgZGljdDtcbiAgICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBvcHQuZGljdGlvbmFyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIElmIHdlIG5lZWQgdG8gY29tcHJlc3MgdGV4dCwgY2hhbmdlIGVuY29kaW5nIHRvIHV0ZjguXG4gICAgICBkaWN0ID0gc3RyaW5ncy5zdHJpbmcyYnVmKG9wdC5kaWN0aW9uYXJ5KTtcbiAgICB9IGVsc2UgaWYgKHRvU3RyaW5nJDEuY2FsbChvcHQuZGljdGlvbmFyeSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICAgIGRpY3QgPSBuZXcgVWludDhBcnJheShvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpY3QgPSBvcHQuZGljdGlvbmFyeTtcbiAgICB9XG5cbiAgICBzdGF0dXMgPSBkZWZsYXRlXzEkMi5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIGRpY3QpO1xuXG4gICAgaWYgKHN0YXR1cyAhPT0gWl9PSyQyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXNbc3RhdHVzXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGljdF9zZXQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRGVmbGF0ZSNwdXNoKGRhdGFbLCBmbHVzaF9tb2RlXSkgLT4gQm9vbGVhblxuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5QnVmZmVyfFN0cmluZyk6IGlucHV0IGRhdGEuIFN0cmluZ3Mgd2lsbCBiZVxuICogICBjb252ZXJ0ZWQgdG8gdXRmOCBieXRlIHNlcXVlbmNlLlxuICogLSBmbHVzaF9tb2RlIChOdW1iZXJ8Qm9vbGVhbik6IDAuLjYgZm9yIGNvcnJlc3BvbmRpbmcgWl9OT19GTFVTSC4uWl9UUkVFIG1vZGVzLlxuICogICBTZWUgY29uc3RhbnRzLiBTa2lwcGVkIG9yIGBmYWxzZWAgbWVhbnMgWl9OT19GTFVTSCwgYHRydWVgIG1lYW5zIFpfRklOSVNILlxuICpcbiAqIFNlbmRzIGlucHV0IGRhdGEgdG8gZGVmbGF0ZSBwaXBlLCBnZW5lcmF0aW5nIFtbRGVmbGF0ZSNvbkRhdGFdXSBjYWxscyB3aXRoXG4gKiBuZXcgY29tcHJlc3NlZCBjaHVua3MuIFJldHVybnMgYHRydWVgIG9uIHN1Y2Nlc3MuIFRoZSBsYXN0IGRhdGEgYmxvY2sgbXVzdFxuICogaGF2ZSBgZmx1c2hfbW9kZWAgWl9GSU5JU0ggKG9yIGB0cnVlYCkuIFRoYXQgd2lsbCBmbHVzaCBpbnRlcm5hbCBwZW5kaW5nXG4gKiBidWZmZXJzIGFuZCBjYWxsIFtbRGVmbGF0ZSNvbkVuZF1dLlxuICpcbiAqIE9uIGZhaWwgY2FsbCBbW0RlZmxhdGUjb25FbmRdXSB3aXRoIGVycm9yIGNvZGUgYW5kIHJldHVybiBmYWxzZS5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcHVzaChjaHVuaywgZmFsc2UpOyAvLyBwdXNoIG9uZSBvZiBkYXRhIGNodW5rc1xuICogLi4uXG4gKiBwdXNoKGNodW5rLCB0cnVlKTsgIC8vIHB1c2ggbGFzdCBjaHVua1xuICogYGBgXG4gKiovXG5EZWZsYXRlJDEucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSwgZmx1c2hfbW9kZSkge1xuICBjb25zdCBzdHJtID0gdGhpcy5zdHJtO1xuICBjb25zdCBjaHVua1NpemUgPSB0aGlzLm9wdGlvbnMuY2h1bmtTaXplO1xuICBsZXQgc3RhdHVzLCBfZmx1c2hfbW9kZTtcblxuICBpZiAodGhpcy5lbmRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoZmx1c2hfbW9kZSA9PT0gfn5mbHVzaF9tb2RlKSBfZmx1c2hfbW9kZSA9IGZsdXNoX21vZGU7XG4gIGVsc2UgX2ZsdXNoX21vZGUgPSBmbHVzaF9tb2RlID09PSB0cnVlID8gWl9GSU5JU0gkMiA6IFpfTk9fRkxVU0gkMTtcblxuICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBJZiB3ZSBuZWVkIHRvIGNvbXByZXNzIHRleHQsIGNoYW5nZSBlbmNvZGluZyB0byB1dGY4LlxuICAgIHN0cm0uaW5wdXQgPSBzdHJpbmdzLnN0cmluZzJidWYoZGF0YSk7XG4gIH0gZWxzZSBpZiAodG9TdHJpbmckMS5jYWxsKGRhdGEpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgc3RybS5pbnB1dCA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHN0cm0uaW5wdXQgPSBkYXRhO1xuICB9XG5cbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5hdmFpbF9pbiA9IHN0cm0uaW5wdXQubGVuZ3RoO1xuXG4gIGZvciAoOzspIHtcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHN0cm0ub3V0cHV0ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmtTaXplKTtcbiAgICAgIHN0cm0ubmV4dF9vdXQgPSAwO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSBjaHVua1NpemU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGF2YWlsX291dCA+IDYgdG8gYXZvaWQgcmVwZWF0aW5nIG1hcmtlcnNcbiAgICBpZiAoKF9mbHVzaF9tb2RlID09PSBaX1NZTkNfRkxVU0ggfHwgX2ZsdXNoX21vZGUgPT09IFpfRlVMTF9GTFVTSCkgJiYgc3RybS5hdmFpbF9vdXQgPD0gNikge1xuICAgICAgdGhpcy5vbkRhdGEoc3RybS5vdXRwdXQuc3ViYXJyYXkoMCwgc3RybS5uZXh0X291dCkpO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSAwO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc3RhdHVzID0gZGVmbGF0ZV8xJDIuZGVmbGF0ZShzdHJtLCBfZmx1c2hfbW9kZSk7XG5cbiAgICAvLyBFbmRlZCA9PiBmbHVzaCBhbmQgZmluaXNoXG4gICAgaWYgKHN0YXR1cyA9PT0gWl9TVFJFQU1fRU5EJDIpIHtcbiAgICAgIGlmIChzdHJtLm5leHRfb3V0ID4gMCkge1xuICAgICAgICB0aGlzLm9uRGF0YShzdHJtLm91dHB1dC5zdWJhcnJheSgwLCBzdHJtLm5leHRfb3V0KSk7XG4gICAgICB9XG4gICAgICBzdGF0dXMgPSBkZWZsYXRlXzEkMi5kZWZsYXRlRW5kKHRoaXMuc3RybSk7XG4gICAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0dXMgPT09IFpfT0skMjtcbiAgICB9XG5cbiAgICAvLyBGbHVzaCBpZiBvdXQgYnVmZmVyIGZ1bGxcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHRoaXMub25EYXRhKHN0cm0ub3V0cHV0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIEZsdXNoIGlmIHJlcXVlc3RlZCBhbmQgaGFzIGRhdGFcbiAgICBpZiAoX2ZsdXNoX21vZGUgPiAwICYmIHN0cm0ubmV4dF9vdXQgPiAwKSB7XG4gICAgICB0aGlzLm9uRGF0YShzdHJtLm91dHB1dC5zdWJhcnJheSgwLCBzdHJtLm5leHRfb3V0KSk7XG4gICAgICBzdHJtLmF2YWlsX291dCA9IDA7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RybS5hdmFpbF9pbiA9PT0gMCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqXG4gKiBEZWZsYXRlI29uRGF0YShjaHVuaykgLT4gVm9pZFxuICogLSBjaHVuayAoVWludDhBcnJheSk6IG91dHB1dCBkYXRhLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHN0b3JlcyBkYXRhIGJsb2NrcyBpbiBgY2h1bmtzW11gIHByb3BlcnR5IGFuZCBnbHVlXG4gKiB0aG9zZSBpbiBgb25FbmRgLiBPdmVycmlkZSB0aGlzIGhhbmRsZXIsIGlmIHlvdSBuZWVkIGFub3RoZXIgYmVoYXZpb3VyLlxuICoqL1xuRGVmbGF0ZSQxLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgdGhpcy5jaHVua3MucHVzaChjaHVuayk7XG59O1xuXG5cbi8qKlxuICogRGVmbGF0ZSNvbkVuZChzdGF0dXMpIC0+IFZvaWRcbiAqIC0gc3RhdHVzIChOdW1iZXIpOiBkZWZsYXRlIHN0YXR1cy4gMCAoWl9PSykgb24gc3VjY2VzcyxcbiAqICAgb3RoZXIgaWYgbm90LlxuICpcbiAqIENhbGxlZCBvbmNlIGFmdGVyIHlvdSB0ZWxsIGRlZmxhdGUgdGhhdCB0aGUgaW5wdXQgc3RyZWFtIGlzXG4gKiBjb21wbGV0ZSAoWl9GSU5JU0gpLiBCeSBkZWZhdWx0IC0gam9pbiBjb2xsZWN0ZWQgY2h1bmtzLFxuICogZnJlZSBtZW1vcnkgYW5kIGZpbGwgYHJlc3VsdHNgIC8gYGVycmAgcHJvcGVydGllcy5cbiAqKi9cbkRlZmxhdGUkMS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIC8vIE9uIHN1Y2Nlc3MgLSBqb2luXG4gIGlmIChzdGF0dXMgPT09IFpfT0skMikge1xuICAgIHRoaXMucmVzdWx0ID0gY29tbW9uLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpO1xuICB9XG4gIHRoaXMuY2h1bmtzID0gW107XG4gIHRoaXMuZXJyID0gc3RhdHVzO1xuICB0aGlzLm1zZyA9IHRoaXMuc3RybS5tc2c7XG59O1xuXG5cbi8qKlxuICogZGVmbGF0ZShkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXlcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcnxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDb21wcmVzcyBgZGF0YWAgd2l0aCBkZWZsYXRlIGFsZ29yaXRobSBhbmQgYG9wdGlvbnNgLlxuICpcbiAqIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAqXG4gKiAtIGxldmVsXG4gKiAtIHdpbmRvd0JpdHNcbiAqIC0gbWVtTGV2ZWxcbiAqIC0gc3RyYXRlZ3lcbiAqIC0gZGljdGlvbmFyeVxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIFN1Z2FyIChvcHRpb25zKTpcbiAqXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIHNheSB0aGF0IHdlIHdvcmsgd2l0aCByYXcgc3RyZWFtLCBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzcGVjaWZ5XG4gKiAgIG5lZ2F0aXZlIHdpbmRvd0JpdHMgaW1wbGljaXRseS5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhwYWtvLmRlZmxhdGUoZGF0YSkpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBkZWZsYXRlJDEoaW5wdXQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmbGF0b3IgPSBuZXcgRGVmbGF0ZSQxKG9wdGlvbnMpO1xuXG4gIGRlZmxhdG9yLnB1c2goaW5wdXQsIHRydWUpO1xuXG4gIC8vIFRoYXQgd2lsbCBuZXZlciBoYXBwZW5zLCBpZiB5b3UgZG9uJ3QgY2hlYXQgd2l0aCBvcHRpb25zIDopXG4gIGlmIChkZWZsYXRvci5lcnIpIHsgdGhyb3cgZGVmbGF0b3IubXNnIHx8IG1lc3NhZ2VzW2RlZmxhdG9yLmVycl07IH1cblxuICByZXR1cm4gZGVmbGF0b3IucmVzdWx0O1xufVxuXG5cbi8qKlxuICogZGVmbGF0ZVJhdyhkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXlcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcnxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBUaGUgc2FtZSBhcyBbW2RlZmxhdGVdXSwgYnV0IGNyZWF0ZXMgcmF3IGRhdGEsIHdpdGhvdXQgd3JhcHBlclxuICogKGhlYWRlciBhbmQgYWRsZXIzMiBjcmMpLlxuICoqL1xuZnVuY3Rpb24gZGVmbGF0ZVJhdyQxKGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLnJhdyA9IHRydWU7XG4gIHJldHVybiBkZWZsYXRlJDEoaW5wdXQsIG9wdGlvbnMpO1xufVxuXG5cbi8qKlxuICogZ3ppcChkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXlcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcnxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBUaGUgc2FtZSBhcyBbW2RlZmxhdGVdXSwgYnV0IGNyZWF0ZSBnemlwIHdyYXBwZXIgaW5zdGVhZCBvZlxuICogZGVmbGF0ZSBvbmUuXG4gKiovXG5mdW5jdGlvbiBnemlwJDEoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuZ3ppcCA9IHRydWU7XG4gIHJldHVybiBkZWZsYXRlJDEoaW5wdXQsIG9wdGlvbnMpO1xufVxuXG5cbnZhciBEZWZsYXRlXzEkMSA9IERlZmxhdGUkMTtcbnZhciBkZWZsYXRlXzIgPSBkZWZsYXRlJDE7XG52YXIgZGVmbGF0ZVJhd18xJDEgPSBkZWZsYXRlUmF3JDE7XG52YXIgZ3ppcF8xJDEgPSBnemlwJDE7XG52YXIgY29uc3RhbnRzJDEgPSBjb25zdGFudHMkMjtcblxudmFyIGRlZmxhdGVfMSQxID0ge1xuXHREZWZsYXRlOiBEZWZsYXRlXzEkMSxcblx0ZGVmbGF0ZTogZGVmbGF0ZV8yLFxuXHRkZWZsYXRlUmF3OiBkZWZsYXRlUmF3XzEkMSxcblx0Z3ppcDogZ3ppcF8xJDEsXG5cdGNvbnN0YW50czogY29uc3RhbnRzJDFcbn07XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLy8gU2VlIHN0YXRlIGRlZnMgZnJvbSBpbmZsYXRlLmpzXG5jb25zdCBCQUQkMSA9IDE2MjA5OyAgICAgICAvKiBnb3QgYSBkYXRhIGVycm9yIC0tIHJlbWFpbiBoZXJlIHVudGlsIHJlc2V0ICovXG5jb25zdCBUWVBFJDEgPSAxNjE5MTsgICAgICAvKiBpOiB3YWl0aW5nIGZvciB0eXBlIGJpdHMsIGluY2x1ZGluZyBsYXN0LWZsYWcgYml0ICovXG5cbi8qXG4gICBEZWNvZGUgbGl0ZXJhbCwgbGVuZ3RoLCBhbmQgZGlzdGFuY2UgY29kZXMgYW5kIHdyaXRlIG91dCB0aGUgcmVzdWx0aW5nXG4gICBsaXRlcmFsIGFuZCBtYXRjaCBieXRlcyB1bnRpbCBlaXRoZXIgbm90IGVub3VnaCBpbnB1dCBvciBvdXRwdXQgaXNcbiAgIGF2YWlsYWJsZSwgYW4gZW5kLW9mLWJsb2NrIGlzIGVuY291bnRlcmVkLCBvciBhIGRhdGEgZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gICBXaGVuIGxhcmdlIGVub3VnaCBpbnB1dCBhbmQgb3V0cHV0IGJ1ZmZlcnMgYXJlIHN1cHBsaWVkIHRvIGluZmxhdGUoKSwgZm9yXG4gICBleGFtcGxlLCBhIDE2SyBpbnB1dCBidWZmZXIgYW5kIGEgNjRLIG91dHB1dCBidWZmZXIsIG1vcmUgdGhhbiA5NSUgb2YgdGhlXG4gICBpbmZsYXRlIGV4ZWN1dGlvbiB0aW1lIGlzIHNwZW50IGluIHRoaXMgcm91dGluZS5cblxuICAgRW50cnkgYXNzdW1wdGlvbnM6XG5cbiAgICAgICAgc3RhdGUubW9kZSA9PT0gTEVOXG4gICAgICAgIHN0cm0uYXZhaWxfaW4gPj0gNlxuICAgICAgICBzdHJtLmF2YWlsX291dCA+PSAyNThcbiAgICAgICAgc3RhcnQgPj0gc3RybS5hdmFpbF9vdXRcbiAgICAgICAgc3RhdGUuYml0cyA8IDhcblxuICAgT24gcmV0dXJuLCBzdGF0ZS5tb2RlIGlzIG9uZSBvZjpcblxuICAgICAgICBMRU4gLS0gcmFuIG91dCBvZiBlbm91Z2ggb3V0cHV0IHNwYWNlIG9yIGVub3VnaCBhdmFpbGFibGUgaW5wdXRcbiAgICAgICAgVFlQRSAtLSByZWFjaGVkIGVuZCBvZiBibG9jayBjb2RlLCBpbmZsYXRlKCkgdG8gaW50ZXJwcmV0IG5leHQgYmxvY2tcbiAgICAgICAgQkFEIC0tIGVycm9yIGluIGJsb2NrIGRhdGFcblxuICAgTm90ZXM6XG5cbiAgICAtIFRoZSBtYXhpbXVtIGlucHV0IGJpdHMgdXNlZCBieSBhIGxlbmd0aC9kaXN0YW5jZSBwYWlyIGlzIDE1IGJpdHMgZm9yIHRoZVxuICAgICAgbGVuZ3RoIGNvZGUsIDUgYml0cyBmb3IgdGhlIGxlbmd0aCBleHRyYSwgMTUgYml0cyBmb3IgdGhlIGRpc3RhbmNlIGNvZGUsXG4gICAgICBhbmQgMTMgYml0cyBmb3IgdGhlIGRpc3RhbmNlIGV4dHJhLiAgVGhpcyB0b3RhbHMgNDggYml0cywgb3Igc2l4IGJ5dGVzLlxuICAgICAgVGhlcmVmb3JlIGlmIHN0cm0uYXZhaWxfaW4gPj0gNiwgdGhlbiB0aGVyZSBpcyBlbm91Z2ggaW5wdXQgdG8gYXZvaWRcbiAgICAgIGNoZWNraW5nIGZvciBhdmFpbGFibGUgaW5wdXQgd2hpbGUgZGVjb2RpbmcuXG5cbiAgICAtIFRoZSBtYXhpbXVtIGJ5dGVzIHRoYXQgYSBzaW5nbGUgbGVuZ3RoL2Rpc3RhbmNlIHBhaXIgY2FuIG91dHB1dCBpcyAyNThcbiAgICAgIGJ5dGVzLCB3aGljaCBpcyB0aGUgbWF4aW11bSBsZW5ndGggdGhhdCBjYW4gYmUgY29kZWQuICBpbmZsYXRlX2Zhc3QoKVxuICAgICAgcmVxdWlyZXMgc3RybS5hdmFpbF9vdXQgPj0gMjU4IGZvciBlYWNoIGxvb3AgdG8gYXZvaWQgY2hlY2tpbmcgZm9yXG4gICAgICBvdXRwdXQgc3BhY2UuXG4gKi9cbnZhciBpbmZmYXN0ID0gZnVuY3Rpb24gaW5mbGF0ZV9mYXN0KHN0cm0sIHN0YXJ0KSB7XG4gIGxldCBfaW47ICAgICAgICAgICAgICAgICAgICAvKiBsb2NhbCBzdHJtLmlucHV0ICovXG4gIGxldCBsYXN0OyAgICAgICAgICAgICAgICAgICAvKiBoYXZlIGVub3VnaCBpbnB1dCB3aGlsZSBpbiA8IGxhc3QgKi9cbiAgbGV0IF9vdXQ7ICAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0ub3V0cHV0ICovXG4gIGxldCBiZWc7ICAgICAgICAgICAgICAgICAgICAvKiBpbmZsYXRlKCkncyBpbml0aWFsIHN0cm0ub3V0cHV0ICovXG4gIGxldCBlbmQ7ICAgICAgICAgICAgICAgICAgICAvKiB3aGlsZSBvdXQgPCBlbmQsIGVub3VnaCBzcGFjZSBhdmFpbGFibGUgKi9cbi8vI2lmZGVmIElORkxBVEVfU1RSSUNUXG4gIGxldCBkbWF4OyAgICAgICAgICAgICAgICAgICAvKiBtYXhpbXVtIGRpc3RhbmNlIGZyb20gemxpYiBoZWFkZXIgKi9cbi8vI2VuZGlmXG4gIGxldCB3c2l6ZTsgICAgICAgICAgICAgICAgICAvKiB3aW5kb3cgc2l6ZSBvciB6ZXJvIGlmIG5vdCB1c2luZyB3aW5kb3cgKi9cbiAgbGV0IHdoYXZlOyAgICAgICAgICAgICAgICAgIC8qIHZhbGlkIGJ5dGVzIGluIHRoZSB3aW5kb3cgKi9cbiAgbGV0IHduZXh0OyAgICAgICAgICAgICAgICAgIC8qIHdpbmRvdyB3cml0ZSBpbmRleCAqL1xuICAvLyBVc2UgYHNfd2luZG93YCBpbnN0ZWFkIGB3aW5kb3dgLCBhdm9pZCBjb25mbGljdCB3aXRoIGluc3RydW1lbnRhdGlvbiB0b29sc1xuICBsZXQgc193aW5kb3c7ICAgICAgICAgICAgICAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiB3c2l6ZSAhPSAwICovXG4gIGxldCBob2xkOyAgICAgICAgICAgICAgICAgICAvKiBsb2NhbCBzdHJtLmhvbGQgKi9cbiAgbGV0IGJpdHM7ICAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0uYml0cyAqL1xuICBsZXQgbGNvZGU7ICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5sZW5jb2RlICovXG4gIGxldCBkY29kZTsgICAgICAgICAgICAgICAgICAvKiBsb2NhbCBzdHJtLmRpc3Rjb2RlICovXG4gIGxldCBsbWFzazsgICAgICAgICAgICAgICAgICAvKiBtYXNrIGZvciBmaXJzdCBsZXZlbCBvZiBsZW5ndGggY29kZXMgKi9cbiAgbGV0IGRtYXNrOyAgICAgICAgICAgICAgICAgIC8qIG1hc2sgZm9yIGZpcnN0IGxldmVsIG9mIGRpc3RhbmNlIGNvZGVzICovXG4gIGxldCBoZXJlOyAgICAgICAgICAgICAgICAgICAvKiByZXRyaWV2ZWQgdGFibGUgZW50cnkgKi9cbiAgbGV0IG9wOyAgICAgICAgICAgICAgICAgICAgIC8qIGNvZGUgYml0cywgb3BlcmF0aW9uLCBleHRyYSBiaXRzLCBvciAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogIHdpbmRvdyBwb3NpdGlvbiwgd2luZG93IGJ5dGVzIHRvIGNvcHkgKi9cbiAgbGV0IGxlbjsgICAgICAgICAgICAgICAgICAgIC8qIG1hdGNoIGxlbmd0aCwgdW51c2VkIGJ5dGVzICovXG4gIGxldCBkaXN0OyAgICAgICAgICAgICAgICAgICAvKiBtYXRjaCBkaXN0YW5jZSAqL1xuICBsZXQgZnJvbTsgICAgICAgICAgICAgICAgICAgLyogd2hlcmUgdG8gY29weSBtYXRjaCBmcm9tICovXG4gIGxldCBmcm9tX3NvdXJjZTtcblxuXG4gIGxldCBpbnB1dCwgb3V0cHV0OyAvLyBKUyBzcGVjaWZpYywgYmVjYXVzZSB3ZSBoYXZlIG5vIHBvaW50ZXJzXG5cbiAgLyogY29weSBzdGF0ZSB0byBsb2NhbCB2YXJpYWJsZXMgKi9cbiAgY29uc3Qgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICAvL2hlcmUgPSBzdGF0ZS5oZXJlO1xuICBfaW4gPSBzdHJtLm5leHRfaW47XG4gIGlucHV0ID0gc3RybS5pbnB1dDtcbiAgbGFzdCA9IF9pbiArIChzdHJtLmF2YWlsX2luIC0gNSk7XG4gIF9vdXQgPSBzdHJtLm5leHRfb3V0O1xuICBvdXRwdXQgPSBzdHJtLm91dHB1dDtcbiAgYmVnID0gX291dCAtIChzdGFydCAtIHN0cm0uYXZhaWxfb3V0KTtcbiAgZW5kID0gX291dCArIChzdHJtLmF2YWlsX291dCAtIDI1Nyk7XG4vLyNpZmRlZiBJTkZMQVRFX1NUUklDVFxuICBkbWF4ID0gc3RhdGUuZG1heDtcbi8vI2VuZGlmXG4gIHdzaXplID0gc3RhdGUud3NpemU7XG4gIHdoYXZlID0gc3RhdGUud2hhdmU7XG4gIHduZXh0ID0gc3RhdGUud25leHQ7XG4gIHNfd2luZG93ID0gc3RhdGUud2luZG93O1xuICBob2xkID0gc3RhdGUuaG9sZDtcbiAgYml0cyA9IHN0YXRlLmJpdHM7XG4gIGxjb2RlID0gc3RhdGUubGVuY29kZTtcbiAgZGNvZGUgPSBzdGF0ZS5kaXN0Y29kZTtcbiAgbG1hc2sgPSAoMSA8PCBzdGF0ZS5sZW5iaXRzKSAtIDE7XG4gIGRtYXNrID0gKDEgPDwgc3RhdGUuZGlzdGJpdHMpIC0gMTtcblxuXG4gIC8qIGRlY29kZSBsaXRlcmFscyBhbmQgbGVuZ3RoL2Rpc3RhbmNlcyB1bnRpbCBlbmQtb2YtYmxvY2sgb3Igbm90IGVub3VnaFxuICAgICBpbnB1dCBkYXRhIG9yIG91dHB1dCBzcGFjZSAqL1xuXG4gIHRvcDpcbiAgZG8ge1xuICAgIGlmIChiaXRzIDwgMTUpIHtcbiAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICBiaXRzICs9IDg7XG4gICAgICBob2xkICs9IGlucHV0W19pbisrXSA8PCBiaXRzO1xuICAgICAgYml0cyArPSA4O1xuICAgIH1cblxuICAgIGhlcmUgPSBsY29kZVtob2xkICYgbG1hc2tdO1xuXG4gICAgZG9sZW46XG4gICAgZm9yICg7OykgeyAvLyBHb3RvIGVtdWxhdGlvblxuICAgICAgb3AgPSBoZXJlID4+PiAyNC8qaGVyZS5iaXRzKi87XG4gICAgICBob2xkID4+Pj0gb3A7XG4gICAgICBiaXRzIC09IG9wO1xuICAgICAgb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZi8qaGVyZS5vcCovO1xuICAgICAgaWYgKG9wID09PSAwKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBsaXRlcmFsICovXG4gICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBoZXJlLnZhbCA+PSAweDIwICYmIGhlcmUudmFsIDwgMHg3ZiA/XG4gICAgICAgIC8vICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAnJWMnXFxuXCIgOlxuICAgICAgICAvLyAgICAgICAgXCJpbmZsYXRlOiAgICAgICAgIGxpdGVyYWwgMHglMDJ4XFxuXCIsIGhlcmUudmFsKSk7XG4gICAgICAgIG91dHB1dFtfb3V0KytdID0gaGVyZSAmIDB4ZmZmZi8qaGVyZS52YWwqLztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wICYgMTYpIHsgICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggYmFzZSAqL1xuICAgICAgICBsZW4gPSBoZXJlICYgMHhmZmZmLypoZXJlLnZhbCovO1xuICAgICAgICBvcCAmPSAxNTsgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZXh0cmEgYml0cyAqL1xuICAgICAgICBpZiAob3ApIHtcbiAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W19pbisrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZW4gKz0gaG9sZCAmICgoMSA8PCBvcCkgLSAxKTtcbiAgICAgICAgICBob2xkID4+Pj0gb3A7XG4gICAgICAgICAgYml0cyAtPSBvcDtcbiAgICAgICAgfVxuICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGxlbmd0aCAldVxcblwiLCBsZW4pKTtcbiAgICAgICAgaWYgKGJpdHMgPCAxNSkge1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIGhlcmUgPSBkY29kZVtob2xkICYgZG1hc2tdO1xuXG4gICAgICAgIGRvZGlzdDpcbiAgICAgICAgZm9yICg7OykgeyAvLyBnb3RvIGVtdWxhdGlvblxuICAgICAgICAgIG9wID0gaGVyZSA+Pj4gMjQvKmhlcmUuYml0cyovO1xuICAgICAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgICAgICBiaXRzIC09IG9wO1xuICAgICAgICAgIG9wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmYvKmhlcmUub3AqLztcblxuICAgICAgICAgIGlmIChvcCAmIDE2KSB7ICAgICAgICAgICAgICAgICAgICAgIC8qIGRpc3RhbmNlIGJhc2UgKi9cbiAgICAgICAgICAgIGRpc3QgPSBoZXJlICYgMHhmZmZmLypoZXJlLnZhbCovO1xuICAgICAgICAgICAgb3AgJj0gMTU7ICAgICAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZXh0cmEgYml0cyAqL1xuICAgICAgICAgICAgaWYgKGJpdHMgPCBvcCkge1xuICAgICAgICAgICAgICBob2xkICs9IGlucHV0W19pbisrXSA8PCBiaXRzO1xuICAgICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAgIGlmIChiaXRzIDwgb3ApIHtcbiAgICAgICAgICAgICAgICBob2xkICs9IGlucHV0W19pbisrXSA8PCBiaXRzO1xuICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzdCArPSBob2xkICYgKCgxIDw8IG9wKSAtIDEpO1xuLy8jaWZkZWYgSU5GTEFURV9TVFJJQ1RcbiAgICAgICAgICAgIGlmIChkaXN0ID4gZG1heCkge1xuICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQkMTtcbiAgICAgICAgICAgICAgYnJlYWsgdG9wO1xuICAgICAgICAgICAgfVxuLy8jZW5kaWZcbiAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgICAgICAgIGJpdHMgLT0gb3A7XG4gICAgICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGRpc3RhbmNlICV1XFxuXCIsIGRpc3QpKTtcbiAgICAgICAgICAgIG9wID0gX291dCAtIGJlZzsgICAgICAgICAgICAgICAgLyogbWF4IGRpc3RhbmNlIGluIG91dHB1dCAqL1xuICAgICAgICAgICAgaWYgKGRpc3QgPiBvcCkgeyAgICAgICAgICAgICAgICAvKiBzZWUgaWYgY29weSBmcm9tIHdpbmRvdyAqL1xuICAgICAgICAgICAgICBvcCA9IGRpc3QgLSBvcDsgICAgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYWNrIGluIHdpbmRvdyAqL1xuICAgICAgICAgICAgICBpZiAob3AgPiB3aGF2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zYW5lKSB7XG4gICAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEJDE7XG4gICAgICAgICAgICAgICAgICBicmVhayB0b3A7XG4gICAgICAgICAgICAgICAgfVxuXG4vLyAoISkgVGhpcyBibG9jayBpcyBkaXNhYmxlZCBpbiB6bGliIGRlZmF1bHRzLFxuLy8gZG9uJ3QgZW5hYmxlIGl0IGZvciBiaW5hcnkgY29tcGF0aWJpbGl0eVxuLy8jaWZkZWYgSU5GTEFURV9BTExPV19JTlZBTElEX0RJU1RBTkNFX1RPT0ZBUl9BUlJSXG4vLyAgICAgICAgICAgICAgICBpZiAobGVuIDw9IG9wIC0gd2hhdmUpIHtcbi8vICAgICAgICAgICAgICAgICAgZG8ge1xuLy8gICAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gMDtcbi8vICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1sZW4pO1xuLy8gICAgICAgICAgICAgICAgICBjb250aW51ZSB0b3A7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBsZW4gLT0gb3AgLSB3aGF2ZTtcbi8vICAgICAgICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSAwO1xuLy8gICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCA+IHdoYXZlKTtcbi8vICAgICAgICAgICAgICAgIGlmIChvcCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7XG4vLyAgICAgICAgICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuLy8gICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLWxlbik7XG4vLyAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRvcDtcbi8vICAgICAgICAgICAgICAgIH1cbi8vI2VuZGlmXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnJvbSA9IDA7IC8vIHdpbmRvdyBpbmRleFxuICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IHNfd2luZG93O1xuICAgICAgICAgICAgICBpZiAod25leHQgPT09IDApIHsgICAgICAgICAgIC8qIHZlcnkgY29tbW9uIGNhc2UgKi9cbiAgICAgICAgICAgICAgICBmcm9tICs9IHdzaXplIC0gb3A7XG4gICAgICAgICAgICAgICAgaWYgKG9wIDwgbGVuKSB7ICAgICAgICAgLyogc29tZSBmcm9tIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgICAgbGVuIC09IG9wO1xuICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IHNfd2luZG93W2Zyb20rK107XG4gICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLW9wKTtcbiAgICAgICAgICAgICAgICAgIGZyb20gPSBfb3V0IC0gZGlzdDsgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cbiAgICAgICAgICAgICAgICAgIGZyb21fc291cmNlID0gb3V0cHV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICh3bmV4dCA8IG9wKSB7ICAgICAgLyogd3JhcCBhcm91bmQgd2luZG93ICovXG4gICAgICAgICAgICAgICAgZnJvbSArPSB3c2l6ZSArIHduZXh0IC0gb3A7XG4gICAgICAgICAgICAgICAgb3AgLT0gd25leHQ7XG4gICAgICAgICAgICAgICAgaWYgKG9wIDwgbGVuKSB7ICAgICAgICAgLyogc29tZSBmcm9tIGVuZCBvZiB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgIGxlbiAtPSBvcDtcbiAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCk7XG4gICAgICAgICAgICAgICAgICBmcm9tID0gMDtcbiAgICAgICAgICAgICAgICAgIGlmICh3bmV4dCA8IGxlbikgeyAgLyogc29tZSBmcm9tIHN0YXJ0IG9mIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgICAgICBvcCA9IHduZXh0O1xuICAgICAgICAgICAgICAgICAgICBsZW4gLT0gb3A7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IHNfd2luZG93W2Zyb20rK107XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7ICAgICAgLyogcmVzdCBmcm9tIG91dHB1dCAqL1xuICAgICAgICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgIC8qIGNvbnRpZ3VvdXMgaW4gd2luZG93ICovXG4gICAgICAgICAgICAgICAgZnJvbSArPSB3bmV4dCAtIG9wO1xuICAgICAgICAgICAgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgIGxlbiAtPSBvcDtcbiAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCk7XG4gICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7ICAvKiByZXN0IGZyb20gb3V0cHV0ICovXG4gICAgICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2hpbGUgKGxlbiA+IDIpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gZnJvbV9zb3VyY2VbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBsZW4gLT0gMztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0OyAgICAgICAgICAvKiBjb3B5IGRpcmVjdCBmcm9tIG91dHB1dCAqL1xuICAgICAgICAgICAgICBkbyB7ICAgICAgICAgICAgICAgICAgICAgICAgLyogbWluaW11bSBsZW5ndGggaXMgdGhyZWUgKi9cbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gb3V0cHV0W2Zyb20rK107XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBsZW4gLT0gMztcbiAgICAgICAgICAgICAgfSB3aGlsZSAobGVuID4gMik7XG4gICAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICgob3AgJiA2NCkgPT09IDApIHsgICAgICAgICAgLyogMm5kIGxldmVsIGRpc3RhbmNlIGNvZGUgKi9cbiAgICAgICAgICAgIGhlcmUgPSBkY29kZVsoaGVyZSAmIDB4ZmZmZikvKmhlcmUudmFsKi8gKyAoaG9sZCAmICgoMSA8PCBvcCkgLSAxKSldO1xuICAgICAgICAgICAgY29udGludWUgZG9kaXN0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgY29kZSc7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEJDE7XG4gICAgICAgICAgICBicmVhayB0b3A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7IC8vIG5lZWQgdG8gZW11bGF0ZSBnb3RvIHZpYSBcImNvbnRpbnVlXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoKG9wICYgNjQpID09PSAwKSB7ICAgICAgICAgICAgICAvKiAybmQgbGV2ZWwgbGVuZ3RoIGNvZGUgKi9cbiAgICAgICAgaGVyZSA9IGxjb2RlWyhoZXJlICYgMHhmZmZmKS8qaGVyZS52YWwqLyArIChob2xkICYgKCgxIDw8IG9wKSAtIDEpKV07XG4gICAgICAgIGNvbnRpbnVlIGRvbGVuO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3AgJiAzMikgeyAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1vZi1ibG9jayAqL1xuICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGVuZCBvZiBibG9ja1xcblwiKSk7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFJDE7XG4gICAgICAgIGJyZWFrIHRvcDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGUnO1xuICAgICAgICBzdGF0ZS5tb2RlID0gQkFEJDE7XG4gICAgICAgIGJyZWFrIHRvcDtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7IC8vIG5lZWQgdG8gZW11bGF0ZSBnb3RvIHZpYSBcImNvbnRpbnVlXCJcbiAgICB9XG4gIH0gd2hpbGUgKF9pbiA8IGxhc3QgJiYgX291dCA8IGVuZCk7XG5cbiAgLyogcmV0dXJuIHVudXNlZCBieXRlcyAob24gZW50cnksIGJpdHMgPCA4LCBzbyBpbiB3b24ndCBnbyB0b28gZmFyIGJhY2spICovXG4gIGxlbiA9IGJpdHMgPj4gMztcbiAgX2luIC09IGxlbjtcbiAgYml0cyAtPSBsZW4gPDwgMztcbiAgaG9sZCAmPSAoMSA8PCBiaXRzKSAtIDE7XG5cbiAgLyogdXBkYXRlIHN0YXRlIGFuZCByZXR1cm4gKi9cbiAgc3RybS5uZXh0X2luID0gX2luO1xuICBzdHJtLm5leHRfb3V0ID0gX291dDtcbiAgc3RybS5hdmFpbF9pbiA9IChfaW4gPCBsYXN0ID8gNSArIChsYXN0IC0gX2luKSA6IDUgLSAoX2luIC0gbGFzdCkpO1xuICBzdHJtLmF2YWlsX291dCA9IChfb3V0IDwgZW5kID8gMjU3ICsgKGVuZCAtIF9vdXQpIDogMjU3IC0gKF9vdXQgLSBlbmQpKTtcbiAgc3RhdGUuaG9sZCA9IGhvbGQ7XG4gIHN0YXRlLmJpdHMgPSBiaXRzO1xuICByZXR1cm47XG59O1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmNvbnN0IE1BWEJJVFMgPSAxNTtcbmNvbnN0IEVOT1VHSF9MRU5TJDEgPSA4NTI7XG5jb25zdCBFTk9VR0hfRElTVFMkMSA9IDU5Mjtcbi8vY29uc3QgRU5PVUdIID0gKEVOT1VHSF9MRU5TK0VOT1VHSF9ESVNUUyk7XG5cbmNvbnN0IENPREVTJDEgPSAwO1xuY29uc3QgTEVOUyQxID0gMTtcbmNvbnN0IERJU1RTJDEgPSAyO1xuXG5jb25zdCBsYmFzZSA9IG5ldyBVaW50MTZBcnJheShbIC8qIExlbmd0aCBjb2RlcyAyNTcuLjI4NSBiYXNlICovXG4gIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTMsIDE1LCAxNywgMTksIDIzLCAyNywgMzEsXG4gIDM1LCA0MywgNTEsIDU5LCA2NywgODMsIDk5LCAxMTUsIDEzMSwgMTYzLCAxOTUsIDIyNywgMjU4LCAwLCAwXG5dKTtcblxuY29uc3QgbGV4dCA9IG5ldyBVaW50OEFycmF5KFsgLyogTGVuZ3RoIGNvZGVzIDI1Ny4uMjg1IGV4dHJhICovXG4gIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LFxuICAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCwgMjAsIDIxLCAyMSwgMjEsIDIxLCAxNiwgNzIsIDc4XG5dKTtcblxuY29uc3QgZGJhc2UgPSBuZXcgVWludDE2QXJyYXkoWyAvKiBEaXN0YW5jZSBjb2RlcyAwLi4yOSBiYXNlICovXG4gIDEsIDIsIDMsIDQsIDUsIDcsIDksIDEzLCAxNywgMjUsIDMzLCA0OSwgNjUsIDk3LCAxMjksIDE5MyxcbiAgMjU3LCAzODUsIDUxMywgNzY5LCAxMDI1LCAxNTM3LCAyMDQ5LCAzMDczLCA0MDk3LCA2MTQ1LFxuICA4MTkzLCAxMjI4OSwgMTYzODUsIDI0NTc3LCAwLCAwXG5dKTtcblxuY29uc3QgZGV4dCA9IG5ldyBVaW50OEFycmF5KFsgLyogRGlzdGFuY2UgY29kZXMgMC4uMjkgZXh0cmEgKi9cbiAgMTYsIDE2LCAxNiwgMTYsIDE3LCAxNywgMTgsIDE4LCAxOSwgMTksIDIwLCAyMCwgMjEsIDIxLCAyMiwgMjIsXG4gIDIzLCAyMywgMjQsIDI0LCAyNSwgMjUsIDI2LCAyNiwgMjcsIDI3LFxuICAyOCwgMjgsIDI5LCAyOSwgNjQsIDY0XG5dKTtcblxuY29uc3QgaW5mbGF0ZV90YWJsZSA9ICh0eXBlLCBsZW5zLCBsZW5zX2luZGV4LCBjb2RlcywgdGFibGUsIHRhYmxlX2luZGV4LCB3b3JrLCBvcHRzKSA9Plxue1xuICBjb25zdCBiaXRzID0gb3B0cy5iaXRzO1xuICAgICAgLy9oZXJlID0gb3B0cy5oZXJlOyAvKiB0YWJsZSBlbnRyeSBmb3IgZHVwbGljYXRpb24gKi9cblxuICBsZXQgbGVuID0gMDsgICAgICAgICAgICAgICAvKiBhIGNvZGUncyBsZW5ndGggaW4gYml0cyAqL1xuICBsZXQgc3ltID0gMDsgICAgICAgICAgICAgICAvKiBpbmRleCBvZiBjb2RlIHN5bWJvbHMgKi9cbiAgbGV0IG1pbiA9IDAsIG1heCA9IDA7ICAgICAgICAgIC8qIG1pbmltdW0gYW5kIG1heGltdW0gY29kZSBsZW5ndGhzICovXG4gIGxldCByb290ID0gMDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBpbmRleCBiaXRzIGZvciByb290IHRhYmxlICovXG4gIGxldCBjdXJyID0gMDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBpbmRleCBiaXRzIGZvciBjdXJyZW50IHRhYmxlICovXG4gIGxldCBkcm9wID0gMDsgICAgICAgICAgICAgIC8qIGNvZGUgYml0cyB0byBkcm9wIGZvciBzdWItdGFibGUgKi9cbiAgbGV0IGxlZnQgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgcHJlZml4IGNvZGVzIGF2YWlsYWJsZSAqL1xuICBsZXQgdXNlZCA9IDA7ICAgICAgICAgICAgICAvKiBjb2RlIGVudHJpZXMgaW4gdGFibGUgdXNlZCAqL1xuICBsZXQgaHVmZiA9IDA7ICAgICAgICAgICAgICAvKiBIdWZmbWFuIGNvZGUgKi9cbiAgbGV0IGluY3I7ICAgICAgICAgICAgICAvKiBmb3IgaW5jcmVtZW50aW5nIGNvZGUsIGluZGV4ICovXG4gIGxldCBmaWxsOyAgICAgICAgICAgICAgLyogaW5kZXggZm9yIHJlcGxpY2F0aW5nIGVudHJpZXMgKi9cbiAgbGV0IGxvdzsgICAgICAgICAgICAgICAvKiBsb3cgYml0cyBmb3IgY3VycmVudCByb290IGVudHJ5ICovXG4gIGxldCBtYXNrOyAgICAgICAgICAgICAgLyogbWFzayBmb3IgbG93IHJvb3QgYml0cyAqL1xuICBsZXQgbmV4dDsgICAgICAgICAgICAgLyogbmV4dCBhdmFpbGFibGUgc3BhY2UgaW4gdGFibGUgKi9cbiAgbGV0IGJhc2UgPSBudWxsOyAgICAgLyogYmFzZSB2YWx1ZSB0YWJsZSB0byB1c2UgKi9cbi8vICBsZXQgc2hvZXh0cmE7ICAgIC8qIGV4dHJhIGJpdHMgdGFibGUgdG8gdXNlICovXG4gIGxldCBtYXRjaDsgICAgICAgICAgICAgICAgICAvKiB1c2UgYmFzZSBhbmQgZXh0cmEgZm9yIHN5bWJvbCA+PSBtYXRjaCAqL1xuICBjb25zdCBjb3VudCA9IG5ldyBVaW50MTZBcnJheShNQVhCSVRTICsgMSk7IC8vW01BWEJJVFMrMV07ICAgIC8qIG51bWJlciBvZiBjb2RlcyBvZiBlYWNoIGxlbmd0aCAqL1xuICBjb25zdCBvZmZzID0gbmV3IFVpbnQxNkFycmF5KE1BWEJJVFMgKyAxKTsgLy9bTUFYQklUUysxXTsgICAgIC8qIG9mZnNldHMgaW4gdGFibGUgZm9yIGVhY2ggbGVuZ3RoICovXG4gIGxldCBleHRyYSA9IG51bGw7XG5cbiAgbGV0IGhlcmVfYml0cywgaGVyZV9vcCwgaGVyZV92YWw7XG5cbiAgLypcbiAgIFByb2Nlc3MgYSBzZXQgb2YgY29kZSBsZW5ndGhzIHRvIGNyZWF0ZSBhIGNhbm9uaWNhbCBIdWZmbWFuIGNvZGUuICBUaGVcbiAgIGNvZGUgbGVuZ3RocyBhcmUgbGVuc1swLi5jb2Rlcy0xXS4gIEVhY2ggbGVuZ3RoIGNvcnJlc3BvbmRzIHRvIHRoZVxuICAgc3ltYm9scyAwLi5jb2Rlcy0xLiAgVGhlIEh1ZmZtYW4gY29kZSBpcyBnZW5lcmF0ZWQgYnkgZmlyc3Qgc29ydGluZyB0aGVcbiAgIHN5bWJvbHMgYnkgbGVuZ3RoIGZyb20gc2hvcnQgdG8gbG9uZywgYW5kIHJldGFpbmluZyB0aGUgc3ltYm9sIG9yZGVyXG4gICBmb3IgY29kZXMgd2l0aCBlcXVhbCBsZW5ndGhzLiAgVGhlbiB0aGUgY29kZSBzdGFydHMgd2l0aCBhbGwgemVybyBiaXRzXG4gICBmb3IgdGhlIGZpcnN0IGNvZGUgb2YgdGhlIHNob3J0ZXN0IGxlbmd0aCwgYW5kIHRoZSBjb2RlcyBhcmUgaW50ZWdlclxuICAgaW5jcmVtZW50cyBmb3IgdGhlIHNhbWUgbGVuZ3RoLCBhbmQgemVyb3MgYXJlIGFwcGVuZGVkIGFzIHRoZSBsZW5ndGhcbiAgIGluY3JlYXNlcy4gIEZvciB0aGUgZGVmbGF0ZSBmb3JtYXQsIHRoZXNlIGJpdHMgYXJlIHN0b3JlZCBiYWNrd2FyZHNcbiAgIGZyb20gdGhlaXIgbW9yZSBuYXR1cmFsIGludGVnZXIgaW5jcmVtZW50IG9yZGVyaW5nLCBhbmQgc28gd2hlbiB0aGVcbiAgIGRlY29kaW5nIHRhYmxlcyBhcmUgYnVpbHQgaW4gdGhlIGxhcmdlIGxvb3AgYmVsb3csIHRoZSBpbnRlZ2VyIGNvZGVzXG4gICBhcmUgaW5jcmVtZW50ZWQgYmFja3dhcmRzLlxuXG4gICBUaGlzIHJvdXRpbmUgYXNzdW1lcywgYnV0IGRvZXMgbm90IGNoZWNrLCB0aGF0IGFsbCBvZiB0aGUgZW50cmllcyBpblxuICAgbGVuc1tdIGFyZSBpbiB0aGUgcmFuZ2UgMC4uTUFYQklUUy4gIFRoZSBjYWxsZXIgbXVzdCBhc3N1cmUgdGhpcy5cbiAgIDEuLk1BWEJJVFMgaXMgaW50ZXJwcmV0ZWQgYXMgdGhhdCBjb2RlIGxlbmd0aC4gIHplcm8gbWVhbnMgdGhhdCB0aGF0XG4gICBzeW1ib2wgZG9lcyBub3Qgb2NjdXIgaW4gdGhpcyBjb2RlLlxuXG4gICBUaGUgY29kZXMgYXJlIHNvcnRlZCBieSBjb21wdXRpbmcgYSBjb3VudCBvZiBjb2RlcyBmb3IgZWFjaCBsZW5ndGgsXG4gICBjcmVhdGluZyBmcm9tIHRoYXQgYSB0YWJsZSBvZiBzdGFydGluZyBpbmRpY2VzIGZvciBlYWNoIGxlbmd0aCBpbiB0aGVcbiAgIHNvcnRlZCB0YWJsZSwgYW5kIHRoZW4gZW50ZXJpbmcgdGhlIHN5bWJvbHMgaW4gb3JkZXIgaW4gdGhlIHNvcnRlZFxuICAgdGFibGUuICBUaGUgc29ydGVkIHRhYmxlIGlzIHdvcmtbXSwgd2l0aCB0aGF0IHNwYWNlIGJlaW5nIHByb3ZpZGVkIGJ5XG4gICB0aGUgY2FsbGVyLlxuXG4gICBUaGUgbGVuZ3RoIGNvdW50cyBhcmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMgYXMgd2VsbCwgaS5lLiBmaW5kaW5nXG4gICB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBsZW5ndGggY29kZXMsIGRldGVybWluaW5nIGlmIHRoZXJlIGFyZSBhbnlcbiAgIGNvZGVzIGF0IGFsbCwgY2hlY2tpbmcgZm9yIGEgdmFsaWQgc2V0IG9mIGxlbmd0aHMsIGFuZCBsb29raW5nIGFoZWFkXG4gICBhdCBsZW5ndGggY291bnRzIHRvIGRldGVybWluZSBzdWItdGFibGUgc2l6ZXMgd2hlbiBidWlsZGluZyB0aGVcbiAgIGRlY29kaW5nIHRhYmxlcy5cbiAgICovXG5cbiAgLyogYWNjdW11bGF0ZSBsZW5ndGhzIGZvciBjb2RlcyAoYXNzdW1lcyBsZW5zW10gYWxsIGluIDAuLk1BWEJJVFMpICovXG4gIGZvciAobGVuID0gMDsgbGVuIDw9IE1BWEJJVFM7IGxlbisrKSB7XG4gICAgY291bnRbbGVuXSA9IDA7XG4gIH1cbiAgZm9yIChzeW0gPSAwOyBzeW0gPCBjb2Rlczsgc3ltKyspIHtcbiAgICBjb3VudFtsZW5zW2xlbnNfaW5kZXggKyBzeW1dXSsrO1xuICB9XG5cbiAgLyogYm91bmQgY29kZSBsZW5ndGhzLCBmb3JjZSByb290IHRvIGJlIHdpdGhpbiBjb2RlIGxlbmd0aHMgKi9cbiAgcm9vdCA9IGJpdHM7XG4gIGZvciAobWF4ID0gTUFYQklUUzsgbWF4ID49IDE7IG1heC0tKSB7XG4gICAgaWYgKGNvdW50W21heF0gIT09IDApIHsgYnJlYWs7IH1cbiAgfVxuICBpZiAocm9vdCA+IG1heCkge1xuICAgIHJvb3QgPSBtYXg7XG4gIH1cbiAgaWYgKG1heCA9PT0gMCkgeyAgICAgICAgICAgICAgICAgICAgIC8qIG5vIHN5bWJvbHMgdG8gY29kZSBhdCBhbGwgKi9cbiAgICAvL3RhYmxlLm9wW29wdHMudGFibGVfaW5kZXhdID0gNjQ7ICAvL2hlcmUub3AgPSAodmFyIGNoYXIpNjQ7ICAgIC8qIGludmFsaWQgY29kZSBtYXJrZXIgKi9cbiAgICAvL3RhYmxlLmJpdHNbb3B0cy50YWJsZV9pbmRleF0gPSAxOyAgIC8vaGVyZS5iaXRzID0gKHZhciBjaGFyKTE7XG4gICAgLy90YWJsZS52YWxbb3B0cy50YWJsZV9pbmRleCsrXSA9IDA7ICAgLy9oZXJlLnZhbCA9ICh2YXIgc2hvcnQpMDtcbiAgICB0YWJsZVt0YWJsZV9pbmRleCsrXSA9ICgxIDw8IDI0KSB8ICg2NCA8PCAxNikgfCAwO1xuXG5cbiAgICAvL3RhYmxlLm9wW29wdHMudGFibGVfaW5kZXhdID0gNjQ7XG4gICAgLy90YWJsZS5iaXRzW29wdHMudGFibGVfaW5kZXhdID0gMTtcbiAgICAvL3RhYmxlLnZhbFtvcHRzLnRhYmxlX2luZGV4KytdID0gMDtcbiAgICB0YWJsZVt0YWJsZV9pbmRleCsrXSA9ICgxIDw8IDI0KSB8ICg2NCA8PCAxNikgfCAwO1xuXG4gICAgb3B0cy5iaXRzID0gMTtcbiAgICByZXR1cm4gMDsgICAgIC8qIG5vIHN5bWJvbHMsIGJ1dCB3YWl0IGZvciBkZWNvZGluZyB0byByZXBvcnQgZXJyb3IgKi9cbiAgfVxuICBmb3IgKG1pbiA9IDE7IG1pbiA8IG1heDsgbWluKyspIHtcbiAgICBpZiAoY291bnRbbWluXSAhPT0gMCkgeyBicmVhazsgfVxuICB9XG4gIGlmIChyb290IDwgbWluKSB7XG4gICAgcm9vdCA9IG1pbjtcbiAgfVxuXG4gIC8qIGNoZWNrIGZvciBhbiBvdmVyLXN1YnNjcmliZWQgb3IgaW5jb21wbGV0ZSBzZXQgb2YgbGVuZ3RocyAqL1xuICBsZWZ0ID0gMTtcbiAgZm9yIChsZW4gPSAxOyBsZW4gPD0gTUFYQklUUzsgbGVuKyspIHtcbiAgICBsZWZ0IDw8PSAxO1xuICAgIGxlZnQgLT0gY291bnRbbGVuXTtcbiAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9ICAgICAgICAvKiBvdmVyLXN1YnNjcmliZWQgKi9cbiAgfVxuICBpZiAobGVmdCA+IDAgJiYgKHR5cGUgPT09IENPREVTJDEgfHwgbWF4ICE9PSAxKSkge1xuICAgIHJldHVybiAtMTsgICAgICAgICAgICAgICAgICAgICAgLyogaW5jb21wbGV0ZSBzZXQgKi9cbiAgfVxuXG4gIC8qIGdlbmVyYXRlIG9mZnNldHMgaW50byBzeW1ib2wgdGFibGUgZm9yIGVhY2ggbGVuZ3RoIGZvciBzb3J0aW5nICovXG4gIG9mZnNbMV0gPSAwO1xuICBmb3IgKGxlbiA9IDE7IGxlbiA8IE1BWEJJVFM7IGxlbisrKSB7XG4gICAgb2Zmc1tsZW4gKyAxXSA9IG9mZnNbbGVuXSArIGNvdW50W2xlbl07XG4gIH1cblxuICAvKiBzb3J0IHN5bWJvbHMgYnkgbGVuZ3RoLCBieSBzeW1ib2wgb3JkZXIgd2l0aGluIGVhY2ggbGVuZ3RoICovXG4gIGZvciAoc3ltID0gMDsgc3ltIDwgY29kZXM7IHN5bSsrKSB7XG4gICAgaWYgKGxlbnNbbGVuc19pbmRleCArIHN5bV0gIT09IDApIHtcbiAgICAgIHdvcmtbb2Zmc1tsZW5zW2xlbnNfaW5kZXggKyBzeW1dXSsrXSA9IHN5bTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgQ3JlYXRlIGFuZCBmaWxsIGluIGRlY29kaW5nIHRhYmxlcy4gIEluIHRoaXMgbG9vcCwgdGhlIHRhYmxlIGJlaW5nXG4gICBmaWxsZWQgaXMgYXQgbmV4dCBhbmQgaGFzIGN1cnIgaW5kZXggYml0cy4gIFRoZSBjb2RlIGJlaW5nIHVzZWQgaXMgaHVmZlxuICAgd2l0aCBsZW5ndGggbGVuLiAgVGhhdCBjb2RlIGlzIGNvbnZlcnRlZCB0byBhbiBpbmRleCBieSBkcm9wcGluZyBkcm9wXG4gICBiaXRzIG9mZiBvZiB0aGUgYm90dG9tLiAgRm9yIGNvZGVzIHdoZXJlIGxlbiBpcyBsZXNzIHRoYW4gZHJvcCArIGN1cnIsXG4gICB0aG9zZSB0b3AgZHJvcCArIGN1cnIgLSBsZW4gYml0cyBhcmUgaW5jcmVtZW50ZWQgdGhyb3VnaCBhbGwgdmFsdWVzIHRvXG4gICBmaWxsIHRoZSB0YWJsZSB3aXRoIHJlcGxpY2F0ZWQgZW50cmllcy5cblxuICAgcm9vdCBpcyB0aGUgbnVtYmVyIG9mIGluZGV4IGJpdHMgZm9yIHRoZSByb290IHRhYmxlLiAgV2hlbiBsZW4gZXhjZWVkc1xuICAgcm9vdCwgc3ViLXRhYmxlcyBhcmUgY3JlYXRlZCBwb2ludGVkIHRvIGJ5IHRoZSByb290IGVudHJ5IHdpdGggYW4gaW5kZXhcbiAgIG9mIHRoZSBsb3cgcm9vdCBiaXRzIG9mIGh1ZmYuICBUaGlzIGlzIHNhdmVkIGluIGxvdyB0byBjaGVjayBmb3Igd2hlbiBhXG4gICBuZXcgc3ViLXRhYmxlIHNob3VsZCBiZSBzdGFydGVkLiAgZHJvcCBpcyB6ZXJvIHdoZW4gdGhlIHJvb3QgdGFibGUgaXNcbiAgIGJlaW5nIGZpbGxlZCwgYW5kIGRyb3AgaXMgcm9vdCB3aGVuIHN1Yi10YWJsZXMgYXJlIGJlaW5nIGZpbGxlZC5cblxuICAgV2hlbiBhIG5ldyBzdWItdGFibGUgaXMgbmVlZGVkLCBpdCBpcyBuZWNlc3NhcnkgdG8gbG9vayBhaGVhZCBpbiB0aGVcbiAgIGNvZGUgbGVuZ3RocyB0byBkZXRlcm1pbmUgd2hhdCBzaXplIHN1Yi10YWJsZSBpcyBuZWVkZWQuICBUaGUgbGVuZ3RoXG4gICBjb3VudHMgYXJlIHVzZWQgZm9yIHRoaXMsIGFuZCBzbyBjb3VudFtdIGlzIGRlY3JlbWVudGVkIGFzIGNvZGVzIGFyZVxuICAgZW50ZXJlZCBpbiB0aGUgdGFibGVzLlxuXG4gICB1c2VkIGtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IHRhYmxlIGVudHJpZXMgaGF2ZSBiZWVuIGFsbG9jYXRlZCBmcm9tIHRoZVxuICAgcHJvdmlkZWQgKnRhYmxlIHNwYWNlLiAgSXQgaXMgY2hlY2tlZCBmb3IgTEVOUyBhbmQgRElTVCB0YWJsZXMgYWdhaW5zdFxuICAgdGhlIGNvbnN0YW50cyBFTk9VR0hfTEVOUyBhbmQgRU5PVUdIX0RJU1RTIHRvIGd1YXJkIGFnYWluc3QgY2hhbmdlcyBpblxuICAgdGhlIGluaXRpYWwgcm9vdCB0YWJsZSBzaXplIGNvbnN0YW50cy4gIFNlZSB0aGUgY29tbWVudHMgaW4gaW5mdHJlZXMuaFxuICAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiAgIHN5bSBpbmNyZW1lbnRzIHRocm91Z2ggYWxsIHN5bWJvbHMsIGFuZCB0aGUgbG9vcCB0ZXJtaW5hdGVzIHdoZW5cbiAgIGFsbCBjb2RlcyBvZiBsZW5ndGggbWF4LCBpLmUuIGFsbCBjb2RlcywgaGF2ZSBiZWVuIHByb2Nlc3NlZC4gIFRoaXNcbiAgIHJvdXRpbmUgcGVybWl0cyBpbmNvbXBsZXRlIGNvZGVzLCBzbyBhbm90aGVyIGxvb3AgYWZ0ZXIgdGhpcyBvbmUgZmlsbHNcbiAgIGluIHRoZSByZXN0IG9mIHRoZSBkZWNvZGluZyB0YWJsZXMgd2l0aCBpbnZhbGlkIGNvZGUgbWFya2Vycy5cbiAgICovXG5cbiAgLyogc2V0IHVwIGZvciBjb2RlIHR5cGUgKi9cbiAgLy8gcG9vciBtYW4gb3B0aW1pemF0aW9uIC0gdXNlIGlmLWVsc2UgaW5zdGVhZCBvZiBzd2l0Y2gsXG4gIC8vIHRvIGF2b2lkIGRlb3B0cyBpbiBvbGQgdjhcbiAgaWYgKHR5cGUgPT09IENPREVTJDEpIHtcbiAgICBiYXNlID0gZXh0cmEgPSB3b3JrOyAgICAvKiBkdW1teSB2YWx1ZS0tbm90IHVzZWQgKi9cbiAgICBtYXRjaCA9IDIwO1xuXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gTEVOUyQxKSB7XG4gICAgYmFzZSA9IGxiYXNlO1xuICAgIGV4dHJhID0gbGV4dDtcbiAgICBtYXRjaCA9IDI1NztcblxuICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgLyogRElTVFMgKi9cbiAgICBiYXNlID0gZGJhc2U7XG4gICAgZXh0cmEgPSBkZXh0O1xuICAgIG1hdGNoID0gMDtcbiAgfVxuXG4gIC8qIGluaXRpYWxpemUgb3B0cyBmb3IgbG9vcCAqL1xuICBodWZmID0gMDsgICAgICAgICAgICAgICAgICAgLyogc3RhcnRpbmcgY29kZSAqL1xuICBzeW0gPSAwOyAgICAgICAgICAgICAgICAgICAgLyogc3RhcnRpbmcgY29kZSBzeW1ib2wgKi9cbiAgbGVuID0gbWluOyAgICAgICAgICAgICAgICAgIC8qIHN0YXJ0aW5nIGNvZGUgbGVuZ3RoICovXG4gIG5leHQgPSB0YWJsZV9pbmRleDsgICAgICAgICAgICAgIC8qIGN1cnJlbnQgdGFibGUgdG8gZmlsbCBpbiAqL1xuICBjdXJyID0gcm9vdDsgICAgICAgICAgICAgICAgLyogY3VycmVudCB0YWJsZSBpbmRleCBiaXRzICovXG4gIGRyb3AgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBjdXJyZW50IGJpdHMgdG8gZHJvcCBmcm9tIGNvZGUgZm9yIGluZGV4ICovXG4gIGxvdyA9IC0xOyAgICAgICAgICAgICAgICAgICAvKiB0cmlnZ2VyIG5ldyBzdWItdGFibGUgd2hlbiBsZW4gPiByb290ICovXG4gIHVzZWQgPSAxIDw8IHJvb3Q7ICAgICAgICAgIC8qIHVzZSByb290IHRhYmxlIGVudHJpZXMgKi9cbiAgbWFzayA9IHVzZWQgLSAxOyAgICAgICAgICAgIC8qIG1hc2sgZm9yIGNvbXBhcmluZyBsb3cgKi9cblxuICAvKiBjaGVjayBhdmFpbGFibGUgdGFibGUgc3BhY2UgKi9cbiAgaWYgKCh0eXBlID09PSBMRU5TJDEgJiYgdXNlZCA+IEVOT1VHSF9MRU5TJDEpIHx8XG4gICAgKHR5cGUgPT09IERJU1RTJDEgJiYgdXNlZCA+IEVOT1VHSF9ESVNUUyQxKSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgLyogcHJvY2VzcyBhbGwgY29kZXMgYW5kIG1ha2UgdGFibGUgZW50cmllcyAqL1xuICBmb3IgKDs7KSB7XG4gICAgLyogY3JlYXRlIHRhYmxlIGVudHJ5ICovXG4gICAgaGVyZV9iaXRzID0gbGVuIC0gZHJvcDtcbiAgICBpZiAod29ya1tzeW1dICsgMSA8IG1hdGNoKSB7XG4gICAgICBoZXJlX29wID0gMDtcbiAgICAgIGhlcmVfdmFsID0gd29ya1tzeW1dO1xuICAgIH1cbiAgICBlbHNlIGlmICh3b3JrW3N5bV0gPj0gbWF0Y2gpIHtcbiAgICAgIGhlcmVfb3AgPSBleHRyYVt3b3JrW3N5bV0gLSBtYXRjaF07XG4gICAgICBoZXJlX3ZhbCA9IGJhc2Vbd29ya1tzeW1dIC0gbWF0Y2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhlcmVfb3AgPSAzMiArIDY0OyAgICAgICAgIC8qIGVuZCBvZiBibG9jayAqL1xuICAgICAgaGVyZV92YWwgPSAwO1xuICAgIH1cblxuICAgIC8qIHJlcGxpY2F0ZSBmb3IgdGhvc2UgaW5kaWNlcyB3aXRoIGxvdyBsZW4gYml0cyBlcXVhbCB0byBodWZmICovXG4gICAgaW5jciA9IDEgPDwgKGxlbiAtIGRyb3ApO1xuICAgIGZpbGwgPSAxIDw8IGN1cnI7XG4gICAgbWluID0gZmlsbDsgICAgICAgICAgICAgICAgIC8qIHNhdmUgb2Zmc2V0IHRvIG5leHQgdGFibGUgKi9cbiAgICBkbyB7XG4gICAgICBmaWxsIC09IGluY3I7XG4gICAgICB0YWJsZVtuZXh0ICsgKGh1ZmYgPj4gZHJvcCkgKyBmaWxsXSA9IChoZXJlX2JpdHMgPDwgMjQpIHwgKGhlcmVfb3AgPDwgMTYpIHwgaGVyZV92YWwgfDA7XG4gICAgfSB3aGlsZSAoZmlsbCAhPT0gMCk7XG5cbiAgICAvKiBiYWNrd2FyZHMgaW5jcmVtZW50IHRoZSBsZW4tYml0IGNvZGUgaHVmZiAqL1xuICAgIGluY3IgPSAxIDw8IChsZW4gLSAxKTtcbiAgICB3aGlsZSAoaHVmZiAmIGluY3IpIHtcbiAgICAgIGluY3IgPj49IDE7XG4gICAgfVxuICAgIGlmIChpbmNyICE9PSAwKSB7XG4gICAgICBodWZmICY9IGluY3IgLSAxO1xuICAgICAgaHVmZiArPSBpbmNyO1xuICAgIH0gZWxzZSB7XG4gICAgICBodWZmID0gMDtcbiAgICB9XG5cbiAgICAvKiBnbyB0byBuZXh0IHN5bWJvbCwgdXBkYXRlIGNvdW50LCBsZW4gKi9cbiAgICBzeW0rKztcbiAgICBpZiAoLS1jb3VudFtsZW5dID09PSAwKSB7XG4gICAgICBpZiAobGVuID09PSBtYXgpIHsgYnJlYWs7IH1cbiAgICAgIGxlbiA9IGxlbnNbbGVuc19pbmRleCArIHdvcmtbc3ltXV07XG4gICAgfVxuXG4gICAgLyogY3JlYXRlIG5ldyBzdWItdGFibGUgaWYgbmVlZGVkICovXG4gICAgaWYgKGxlbiA+IHJvb3QgJiYgKGh1ZmYgJiBtYXNrKSAhPT0gbG93KSB7XG4gICAgICAvKiBpZiBmaXJzdCB0aW1lLCB0cmFuc2l0aW9uIHRvIHN1Yi10YWJsZXMgKi9cbiAgICAgIGlmIChkcm9wID09PSAwKSB7XG4gICAgICAgIGRyb3AgPSByb290O1xuICAgICAgfVxuXG4gICAgICAvKiBpbmNyZW1lbnQgcGFzdCBsYXN0IHRhYmxlICovXG4gICAgICBuZXh0ICs9IG1pbjsgICAgICAgICAgICAvKiBoZXJlIG1pbiBpcyAxIDw8IGN1cnIgKi9cblxuICAgICAgLyogZGV0ZXJtaW5lIGxlbmd0aCBvZiBuZXh0IHRhYmxlICovXG4gICAgICBjdXJyID0gbGVuIC0gZHJvcDtcbiAgICAgIGxlZnQgPSAxIDw8IGN1cnI7XG4gICAgICB3aGlsZSAoY3VyciArIGRyb3AgPCBtYXgpIHtcbiAgICAgICAgbGVmdCAtPSBjb3VudFtjdXJyICsgZHJvcF07XG4gICAgICAgIGlmIChsZWZ0IDw9IDApIHsgYnJlYWs7IH1cbiAgICAgICAgY3VycisrO1xuICAgICAgICBsZWZ0IDw8PSAxO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGVjayBmb3IgZW5vdWdoIHNwYWNlICovXG4gICAgICB1c2VkICs9IDEgPDwgY3VycjtcbiAgICAgIGlmICgodHlwZSA9PT0gTEVOUyQxICYmIHVzZWQgPiBFTk9VR0hfTEVOUyQxKSB8fFxuICAgICAgICAodHlwZSA9PT0gRElTVFMkMSAmJiB1c2VkID4gRU5PVUdIX0RJU1RTJDEpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICAvKiBwb2ludCBlbnRyeSBpbiByb290IHRhYmxlIHRvIHN1Yi10YWJsZSAqL1xuICAgICAgbG93ID0gaHVmZiAmIG1hc2s7XG4gICAgICAvKnRhYmxlLm9wW2xvd10gPSBjdXJyO1xuICAgICAgdGFibGUuYml0c1tsb3ddID0gcm9vdDtcbiAgICAgIHRhYmxlLnZhbFtsb3ddID0gbmV4dCAtIG9wdHMudGFibGVfaW5kZXg7Ki9cbiAgICAgIHRhYmxlW2xvd10gPSAocm9vdCA8PCAyNCkgfCAoY3VyciA8PCAxNikgfCAobmV4dCAtIHRhYmxlX2luZGV4KSB8MDtcbiAgICB9XG4gIH1cblxuICAvKiBmaWxsIGluIHJlbWFpbmluZyB0YWJsZSBlbnRyeSBpZiBjb2RlIGlzIGluY29tcGxldGUgKGd1YXJhbnRlZWQgdG8gaGF2ZVxuICAgYXQgbW9zdCBvbmUgcmVtYWluaW5nIGVudHJ5LCBzaW5jZSBpZiB0aGUgY29kZSBpcyBpbmNvbXBsZXRlLCB0aGVcbiAgIG1heGltdW0gY29kZSBsZW5ndGggdGhhdCB3YXMgYWxsb3dlZCB0byBnZXQgdGhpcyBmYXIgaXMgb25lIGJpdCkgKi9cbiAgaWYgKGh1ZmYgIT09IDApIHtcbiAgICAvL3RhYmxlLm9wW25leHQgKyBodWZmXSA9IDY0OyAgICAgICAgICAgIC8qIGludmFsaWQgY29kZSBtYXJrZXIgKi9cbiAgICAvL3RhYmxlLmJpdHNbbmV4dCArIGh1ZmZdID0gbGVuIC0gZHJvcDtcbiAgICAvL3RhYmxlLnZhbFtuZXh0ICsgaHVmZl0gPSAwO1xuICAgIHRhYmxlW25leHQgKyBodWZmXSA9ICgobGVuIC0gZHJvcCkgPDwgMjQpIHwgKDY0IDw8IDE2KSB8MDtcbiAgfVxuXG4gIC8qIHNldCByZXR1cm4gcGFyYW1ldGVycyAqL1xuICAvL29wdHMudGFibGVfaW5kZXggKz0gdXNlZDtcbiAgb3B0cy5iaXRzID0gcm9vdDtcbiAgcmV0dXJuIDA7XG59O1xuXG5cbnZhciBpbmZ0cmVlcyA9IGluZmxhdGVfdGFibGU7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuXG5cblxuXG5cbmNvbnN0IENPREVTID0gMDtcbmNvbnN0IExFTlMgPSAxO1xuY29uc3QgRElTVFMgPSAyO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuY29uc3Qge1xuICBaX0ZJTklTSDogWl9GSU5JU0gkMSwgWl9CTE9DSywgWl9UUkVFUyxcbiAgWl9PSzogWl9PSyQxLCBaX1NUUkVBTV9FTkQ6IFpfU1RSRUFNX0VORCQxLCBaX05FRURfRElDVDogWl9ORUVEX0RJQ1QkMSwgWl9TVFJFQU1fRVJST1I6IFpfU1RSRUFNX0VSUk9SJDEsIFpfREFUQV9FUlJPUjogWl9EQVRBX0VSUk9SJDEsIFpfTUVNX0VSUk9SOiBaX01FTV9FUlJPUiQxLCBaX0JVRl9FUlJPUixcbiAgWl9ERUZMQVRFRFxufSA9IGNvbnN0YW50cyQyO1xuXG5cbi8qIFNUQVRFUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmNvbnN0ICAgIEhFQUQgPSAxNjE4MDsgICAgICAgLyogaTogd2FpdGluZyBmb3IgbWFnaWMgaGVhZGVyICovXG5jb25zdCAgICBGTEFHUyA9IDE2MTgxOyAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIG1ldGhvZCBhbmQgZmxhZ3MgKGd6aXApICovXG5jb25zdCAgICBUSU1FID0gMTYxODI7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIG1vZGlmaWNhdGlvbiB0aW1lIChnemlwKSAqL1xuY29uc3QgICAgT1MgPSAxNjE4MzsgICAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBmbGFncyBhbmQgb3BlcmF0aW5nIHN5c3RlbSAoZ3ppcCkgKi9cbmNvbnN0ICAgIEVYTEVOID0gMTYxODQ7ICAgICAgLyogaTogd2FpdGluZyBmb3IgZXh0cmEgbGVuZ3RoIChnemlwKSAqL1xuY29uc3QgICAgRVhUUkEgPSAxNjE4NTsgICAgICAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBieXRlcyAoZ3ppcCkgKi9cbmNvbnN0ICAgIE5BTUUgPSAxNjE4NjsgICAgICAgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGZpbGUgbmFtZSAoZ3ppcCkgKi9cbmNvbnN0ICAgIENPTU1FTlQgPSAxNjE4NzsgICAgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGNvbW1lbnQgKGd6aXApICovXG5jb25zdCAgICBIQ1JDID0gMTYxODg7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIGhlYWRlciBjcmMgKGd6aXApICovXG5jb25zdCAgICBESUNUSUQgPSAxNjE4OTsgICAgLyogaTogd2FpdGluZyBmb3IgZGljdGlvbmFyeSBjaGVjayB2YWx1ZSAqL1xuY29uc3QgICAgRElDVCA9IDE2MTkwOyAgICAgIC8qIHdhaXRpbmcgZm9yIGluZmxhdGVTZXREaWN0aW9uYXJ5KCkgY2FsbCAqL1xuY29uc3QgICAgICAgIFRZUEUgPSAxNjE5MTsgICAgICAvKiBpOiB3YWl0aW5nIGZvciB0eXBlIGJpdHMsIGluY2x1ZGluZyBsYXN0LWZsYWcgYml0ICovXG5jb25zdCAgICAgICAgVFlQRURPID0gMTYxOTI7ICAgIC8qIGk6IHNhbWUsIGJ1dCBza2lwIGNoZWNrIHRvIGV4aXQgaW5mbGF0ZSBvbiBuZXcgYmxvY2sgKi9cbmNvbnN0ICAgICAgICBTVE9SRUQgPSAxNjE5MzsgICAgLyogaTogd2FpdGluZyBmb3Igc3RvcmVkIHNpemUgKGxlbmd0aCBhbmQgY29tcGxlbWVudCkgKi9cbmNvbnN0ICAgICAgICBDT1BZXyA9IDE2MTk0OyAgICAgLyogaS9vOiBzYW1lIGFzIENPUFkgYmVsb3csIGJ1dCBvbmx5IGZpcnN0IHRpbWUgaW4gKi9cbmNvbnN0ICAgICAgICBDT1BZID0gMTYxOTU7ICAgICAgLyogaS9vOiB3YWl0aW5nIGZvciBpbnB1dCBvciBvdXRwdXQgdG8gY29weSBzdG9yZWQgYmxvY2sgKi9cbmNvbnN0ICAgICAgICBUQUJMRSA9IDE2MTk2OyAgICAgLyogaTogd2FpdGluZyBmb3IgZHluYW1pYyBibG9jayB0YWJsZSBsZW5ndGhzICovXG5jb25zdCAgICAgICAgTEVOTEVOUyA9IDE2MTk3OyAgIC8qIGk6IHdhaXRpbmcgZm9yIGNvZGUgbGVuZ3RoIGNvZGUgbGVuZ3RocyAqL1xuY29uc3QgICAgICAgIENPREVMRU5TID0gMTYxOTg7ICAvKiBpOiB3YWl0aW5nIGZvciBsZW5ndGgvbGl0IGFuZCBkaXN0YW5jZSBjb2RlIGxlbmd0aHMgKi9cbmNvbnN0ICAgICAgICAgICAgTEVOXyA9IDE2MTk5OyAgICAgIC8qIGk6IHNhbWUgYXMgTEVOIGJlbG93LCBidXQgb25seSBmaXJzdCB0aW1lIGluICovXG5jb25zdCAgICAgICAgICAgIExFTiA9IDE2MjAwOyAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBsZW5ndGgvbGl0L2VvYiBjb2RlICovXG5jb25zdCAgICAgICAgICAgIExFTkVYVCA9IDE2MjAxOyAgICAvKiBpOiB3YWl0aW5nIGZvciBsZW5ndGggZXh0cmEgYml0cyAqL1xuY29uc3QgICAgICAgICAgICBESVNUID0gMTYyMDI7ICAgICAgLyogaTogd2FpdGluZyBmb3IgZGlzdGFuY2UgY29kZSAqL1xuY29uc3QgICAgICAgICAgICBESVNURVhUID0gMTYyMDM7ICAgLyogaTogd2FpdGluZyBmb3IgZGlzdGFuY2UgZXh0cmEgYml0cyAqL1xuY29uc3QgICAgICAgICAgICBNQVRDSCA9IDE2MjA0OyAgICAgLyogbzogd2FpdGluZyBmb3Igb3V0cHV0IHNwYWNlIHRvIGNvcHkgc3RyaW5nICovXG5jb25zdCAgICAgICAgICAgIExJVCA9IDE2MjA1OyAgICAgICAvKiBvOiB3YWl0aW5nIGZvciBvdXRwdXQgc3BhY2UgdG8gd3JpdGUgbGl0ZXJhbCAqL1xuY29uc3QgICAgQ0hFQ0sgPSAxNjIwNjsgICAgIC8qIGk6IHdhaXRpbmcgZm9yIDMyLWJpdCBjaGVjayB2YWx1ZSAqL1xuY29uc3QgICAgTEVOR1RIID0gMTYyMDc7ICAgIC8qIGk6IHdhaXRpbmcgZm9yIDMyLWJpdCBsZW5ndGggKGd6aXApICovXG5jb25zdCAgICBET05FID0gMTYyMDg7ICAgICAgLyogZmluaXNoZWQgY2hlY2ssIGRvbmUgLS0gcmVtYWluIGhlcmUgdW50aWwgcmVzZXQgKi9cbmNvbnN0ICAgIEJBRCA9IDE2MjA5OyAgICAgICAvKiBnb3QgYSBkYXRhIGVycm9yIC0tIHJlbWFpbiBoZXJlIHVudGlsIHJlc2V0ICovXG5jb25zdCAgICBNRU0gPSAxNjIxMDsgICAgICAgLyogZ290IGFuIGluZmxhdGUoKSBtZW1vcnkgZXJyb3IgLS0gcmVtYWluIGhlcmUgdW50aWwgcmVzZXQgKi9cbmNvbnN0ICAgIFNZTkMgPSAxNjIxMTsgICAgICAvKiBsb29raW5nIGZvciBzeW5jaHJvbml6YXRpb24gYnl0ZXMgdG8gcmVzdGFydCBpbmZsYXRlKCkgKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG5cbmNvbnN0IEVOT1VHSF9MRU5TID0gODUyO1xuY29uc3QgRU5PVUdIX0RJU1RTID0gNTkyO1xuLy9jb25zdCBFTk9VR0ggPSAgKEVOT1VHSF9MRU5TK0VOT1VHSF9ESVNUUyk7XG5cbmNvbnN0IE1BWF9XQklUUyA9IDE1O1xuLyogMzJLIExaNzcgd2luZG93ICovXG5jb25zdCBERUZfV0JJVFMgPSBNQVhfV0JJVFM7XG5cblxuY29uc3QgenN3YXAzMiA9IChxKSA9PiB7XG5cbiAgcmV0dXJuICAoKChxID4+PiAyNCkgJiAweGZmKSArXG4gICAgICAgICAgKChxID4+PiA4KSAmIDB4ZmYwMCkgK1xuICAgICAgICAgICgocSAmIDB4ZmYwMCkgPDwgOCkgK1xuICAgICAgICAgICgocSAmIDB4ZmYpIDw8IDI0KSk7XG59O1xuXG5cbmZ1bmN0aW9uIEluZmxhdGVTdGF0ZSgpIHtcbiAgdGhpcy5zdHJtID0gbnVsbDsgICAgICAgICAgIC8qIHBvaW50ZXIgYmFjayB0byB0aGlzIHpsaWIgc3RyZWFtICovXG4gIHRoaXMubW9kZSA9IDA7ICAgICAgICAgICAgICAvKiBjdXJyZW50IGluZmxhdGUgbW9kZSAqL1xuICB0aGlzLmxhc3QgPSBmYWxzZTsgICAgICAgICAgLyogdHJ1ZSBpZiBwcm9jZXNzaW5nIGxhc3QgYmxvY2sgKi9cbiAgdGhpcy53cmFwID0gMDsgICAgICAgICAgICAgIC8qIGJpdCAwIHRydWUgZm9yIHpsaWIsIGJpdCAxIHRydWUgZm9yIGd6aXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXQgMiB0cnVlIHRvIHZhbGlkYXRlIGNoZWNrIHZhbHVlICovXG4gIHRoaXMuaGF2ZWRpY3QgPSBmYWxzZTsgICAgICAvKiB0cnVlIGlmIGRpY3Rpb25hcnkgcHJvdmlkZWQgKi9cbiAgdGhpcy5mbGFncyA9IDA7ICAgICAgICAgICAgIC8qIGd6aXAgaGVhZGVyIG1ldGhvZCBhbmQgZmxhZ3MgKDAgaWYgemxpYiksIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSBpZiByYXcgb3Igbm8gaGVhZGVyIHlldCAqL1xuICB0aGlzLmRtYXggPSAwOyAgICAgICAgICAgICAgLyogemxpYiBoZWFkZXIgbWF4IGRpc3RhbmNlIChJTkZMQVRFX1NUUklDVCkgKi9cbiAgdGhpcy5jaGVjayA9IDA7ICAgICAgICAgICAgIC8qIHByb3RlY3RlZCBjb3B5IG9mIGNoZWNrIHZhbHVlICovXG4gIHRoaXMudG90YWwgPSAwOyAgICAgICAgICAgICAvKiBwcm90ZWN0ZWQgY29weSBvZiBvdXRwdXQgY291bnQgKi9cbiAgLy8gVE9ETzogbWF5IGJlIHt9XG4gIHRoaXMuaGVhZCA9IG51bGw7ICAgICAgICAgICAvKiB3aGVyZSB0byBzYXZlIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uICovXG5cbiAgLyogc2xpZGluZyB3aW5kb3cgKi9cbiAgdGhpcy53Yml0cyA9IDA7ICAgICAgICAgICAgIC8qIGxvZyBiYXNlIDIgb2YgcmVxdWVzdGVkIHdpbmRvdyBzaXplICovXG4gIHRoaXMud3NpemUgPSAwOyAgICAgICAgICAgICAvKiB3aW5kb3cgc2l6ZSBvciB6ZXJvIGlmIG5vdCB1c2luZyB3aW5kb3cgKi9cbiAgdGhpcy53aGF2ZSA9IDA7ICAgICAgICAgICAgIC8qIHZhbGlkIGJ5dGVzIGluIHRoZSB3aW5kb3cgKi9cbiAgdGhpcy53bmV4dCA9IDA7ICAgICAgICAgICAgIC8qIHdpbmRvdyB3cml0ZSBpbmRleCAqL1xuICB0aGlzLndpbmRvdyA9IG51bGw7ICAgICAgICAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiBuZWVkZWQgKi9cblxuICAvKiBiaXQgYWNjdW11bGF0b3IgKi9cbiAgdGhpcy5ob2xkID0gMDsgICAgICAgICAgICAgIC8qIGlucHV0IGJpdCBhY2N1bXVsYXRvciAqL1xuICB0aGlzLmJpdHMgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGJpdHMgaW4gXCJpblwiICovXG5cbiAgLyogZm9yIHN0cmluZyBhbmQgc3RvcmVkIGJsb2NrIGNvcHlpbmcgKi9cbiAgdGhpcy5sZW5ndGggPSAwOyAgICAgICAgICAgIC8qIGxpdGVyYWwgb3IgbGVuZ3RoIG9mIGRhdGEgdG8gY29weSAqL1xuICB0aGlzLm9mZnNldCA9IDA7ICAgICAgICAgICAgLyogZGlzdGFuY2UgYmFjayB0byBjb3B5IHN0cmluZyBmcm9tICovXG5cbiAgLyogZm9yIHRhYmxlIGFuZCBjb2RlIGRlY29kaW5nICovXG4gIHRoaXMuZXh0cmEgPSAwOyAgICAgICAgICAgICAvKiBleHRyYSBiaXRzIG5lZWRlZCAqL1xuXG4gIC8qIGZpeGVkIGFuZCBkeW5hbWljIGNvZGUgdGFibGVzICovXG4gIHRoaXMubGVuY29kZSA9IG51bGw7ICAgICAgICAgIC8qIHN0YXJ0aW5nIHRhYmxlIGZvciBsZW5ndGgvbGl0ZXJhbCBjb2RlcyAqL1xuICB0aGlzLmRpc3Rjb2RlID0gbnVsbDsgICAgICAgICAvKiBzdGFydGluZyB0YWJsZSBmb3IgZGlzdGFuY2UgY29kZXMgKi9cbiAgdGhpcy5sZW5iaXRzID0gMDsgICAgICAgICAgIC8qIGluZGV4IGJpdHMgZm9yIGxlbmNvZGUgKi9cbiAgdGhpcy5kaXN0Yml0cyA9IDA7ICAgICAgICAgIC8qIGluZGV4IGJpdHMgZm9yIGRpc3Rjb2RlICovXG5cbiAgLyogZHluYW1pYyB0YWJsZSBidWlsZGluZyAqL1xuICB0aGlzLm5jb2RlID0gMDsgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGUgbGVuZ3RoIGNvZGUgbGVuZ3RocyAqL1xuICB0aGlzLm5sZW4gPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy5uZGlzdCA9IDA7ICAgICAgICAgICAgIC8qIG51bWJlciBvZiBkaXN0YW5jZSBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy5oYXZlID0gMDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBjb2RlIGxlbmd0aHMgaW4gbGVuc1tdICovXG4gIHRoaXMubmV4dCA9IG51bGw7ICAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiBjb2Rlc1tdICovXG5cbiAgdGhpcy5sZW5zID0gbmV3IFVpbnQxNkFycmF5KDMyMCk7IC8qIHRlbXBvcmFyeSBzdG9yYWdlIGZvciBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy53b3JrID0gbmV3IFVpbnQxNkFycmF5KDI4OCk7IC8qIHdvcmsgYXJlYSBmb3IgY29kZSB0YWJsZSBidWlsZGluZyAqL1xuXG4gIC8qXG4gICBiZWNhdXNlIHdlIGRvbid0IGhhdmUgcG9pbnRlcnMgaW4ganMsIHdlIHVzZSBsZW5jb2RlIGFuZCBkaXN0Y29kZSBkaXJlY3RseVxuICAgYXMgYnVmZmVycyBzbyB3ZSBkb24ndCBuZWVkIGNvZGVzXG4gICovXG4gIC8vdGhpcy5jb2RlcyA9IG5ldyBJbnQzMkFycmF5KEVOT1VHSCk7ICAgICAgIC8qIHNwYWNlIGZvciBjb2RlIHRhYmxlcyAqL1xuICB0aGlzLmxlbmR5biA9IG51bGw7ICAgICAgICAgICAgICAvKiBkeW5hbWljIHRhYmxlIGZvciBsZW5ndGgvbGl0ZXJhbCBjb2RlcyAoSlMgc3BlY2lmaWMpICovXG4gIHRoaXMuZGlzdGR5biA9IG51bGw7ICAgICAgICAgICAgIC8qIGR5bmFtaWMgdGFibGUgZm9yIGRpc3RhbmNlIGNvZGVzIChKUyBzcGVjaWZpYykgKi9cbiAgdGhpcy5zYW5lID0gMDsgICAgICAgICAgICAgICAgICAgLyogaWYgZmFsc2UsIGFsbG93IGludmFsaWQgZGlzdGFuY2UgdG9vIGZhciAqL1xuICB0aGlzLmJhY2sgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBiaXRzIGJhY2sgb2YgbGFzdCB1bnByb2Nlc3NlZCBsZW5ndGgvbGl0ICovXG4gIHRoaXMud2FzID0gMDsgICAgICAgICAgICAgICAgICAgIC8qIGluaXRpYWwgbGVuZ3RoIG9mIG1hdGNoICovXG59XG5cblxuY29uc3QgaW5mbGF0ZVN0YXRlQ2hlY2sgPSAoc3RybSkgPT4ge1xuXG4gIGlmICghc3RybSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgaWYgKCFzdGF0ZSB8fCBzdGF0ZS5zdHJtICE9PSBzdHJtIHx8XG4gICAgc3RhdGUubW9kZSA8IEhFQUQgfHwgc3RhdGUubW9kZSA+IFNZTkMpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cblxuY29uc3QgaW5mbGF0ZVJlc2V0S2VlcCA9IChzdHJtKSA9PiB7XG5cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUiQxOyB9XG4gIGNvbnN0IHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgc3RybS50b3RhbF9pbiA9IHN0cm0udG90YWxfb3V0ID0gc3RhdGUudG90YWwgPSAwO1xuICBzdHJtLm1zZyA9ICcnOyAvKlpfTlVMTCovXG4gIGlmIChzdGF0ZS53cmFwKSB7ICAgICAgIC8qIHRvIHN1cHBvcnQgaWxsLWNvbmNlaXZlZCBKYXZhIHRlc3Qgc3VpdGUgKi9cbiAgICBzdHJtLmFkbGVyID0gc3RhdGUud3JhcCAmIDE7XG4gIH1cbiAgc3RhdGUubW9kZSA9IEhFQUQ7XG4gIHN0YXRlLmxhc3QgPSAwO1xuICBzdGF0ZS5oYXZlZGljdCA9IDA7XG4gIHN0YXRlLmZsYWdzID0gLTE7XG4gIHN0YXRlLmRtYXggPSAzMjc2ODtcbiAgc3RhdGUuaGVhZCA9IG51bGwvKlpfTlVMTCovO1xuICBzdGF0ZS5ob2xkID0gMDtcbiAgc3RhdGUuYml0cyA9IDA7XG4gIC8vc3RhdGUubGVuY29kZSA9IHN0YXRlLmRpc3Rjb2RlID0gc3RhdGUubmV4dCA9IHN0YXRlLmNvZGVzO1xuICBzdGF0ZS5sZW5jb2RlID0gc3RhdGUubGVuZHluID0gbmV3IEludDMyQXJyYXkoRU5PVUdIX0xFTlMpO1xuICBzdGF0ZS5kaXN0Y29kZSA9IHN0YXRlLmRpc3RkeW4gPSBuZXcgSW50MzJBcnJheShFTk9VR0hfRElTVFMpO1xuXG4gIHN0YXRlLnNhbmUgPSAxO1xuICBzdGF0ZS5iYWNrID0gLTE7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogcmVzZXRcXG5cIikpO1xuICByZXR1cm4gWl9PSyQxO1xufTtcblxuXG5jb25zdCBpbmZsYXRlUmVzZXQgPSAoc3RybSkgPT4ge1xuXG4gIGlmIChpbmZsYXRlU3RhdGVDaGVjayhzdHJtKSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1IkMTsgfVxuICBjb25zdCBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIHN0YXRlLndzaXplID0gMDtcbiAgc3RhdGUud2hhdmUgPSAwO1xuICBzdGF0ZS53bmV4dCA9IDA7XG4gIHJldHVybiBpbmZsYXRlUmVzZXRLZWVwKHN0cm0pO1xuXG59O1xuXG5cbmNvbnN0IGluZmxhdGVSZXNldDIgPSAoc3RybSwgd2luZG93Qml0cykgPT4ge1xuICBsZXQgd3JhcDtcblxuICAvKiBnZXQgdGhlIHN0YXRlICovXG4gIGlmIChpbmZsYXRlU3RhdGVDaGVjayhzdHJtKSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1IkMTsgfVxuICBjb25zdCBzdGF0ZSA9IHN0cm0uc3RhdGU7XG5cbiAgLyogZXh0cmFjdCB3cmFwIHJlcXVlc3QgZnJvbSB3aW5kb3dCaXRzIHBhcmFtZXRlciAqL1xuICBpZiAod2luZG93Qml0cyA8IDApIHtcbiAgICB3cmFwID0gMDtcbiAgICB3aW5kb3dCaXRzID0gLXdpbmRvd0JpdHM7XG4gIH1cbiAgZWxzZSB7XG4gICAgd3JhcCA9ICh3aW5kb3dCaXRzID4+IDQpICsgNTtcbiAgICBpZiAod2luZG93Qml0cyA8IDQ4KSB7XG4gICAgICB3aW5kb3dCaXRzICY9IDE1O1xuICAgIH1cbiAgfVxuXG4gIC8qIHNldCBudW1iZXIgb2Ygd2luZG93IGJpdHMsIGZyZWUgd2luZG93IGlmIGRpZmZlcmVudCAqL1xuICBpZiAod2luZG93Qml0cyAmJiAod2luZG93Qml0cyA8IDggfHwgd2luZG93Qml0cyA+IDE1KSkge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUiQxO1xuICB9XG4gIGlmIChzdGF0ZS53aW5kb3cgIT09IG51bGwgJiYgc3RhdGUud2JpdHMgIT09IHdpbmRvd0JpdHMpIHtcbiAgICBzdGF0ZS53aW5kb3cgPSBudWxsO1xuICB9XG5cbiAgLyogdXBkYXRlIHN0YXRlIGFuZCByZXNldCB0aGUgcmVzdCBvZiBpdCAqL1xuICBzdGF0ZS53cmFwID0gd3JhcDtcbiAgc3RhdGUud2JpdHMgPSB3aW5kb3dCaXRzO1xuICByZXR1cm4gaW5mbGF0ZVJlc2V0KHN0cm0pO1xufTtcblxuXG5jb25zdCBpbmZsYXRlSW5pdDIgPSAoc3RybSwgd2luZG93Qml0cykgPT4ge1xuXG4gIGlmICghc3RybSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1IkMTsgfVxuICAvL3N0cm0ubXNnID0gWl9OVUxMOyAgICAgICAgICAgICAgICAgLyogaW4gY2FzZSB3ZSByZXR1cm4gYW4gZXJyb3IgKi9cblxuICBjb25zdCBzdGF0ZSA9IG5ldyBJbmZsYXRlU3RhdGUoKTtcblxuICAvL2lmIChzdGF0ZSA9PT0gWl9OVUxMKSByZXR1cm4gWl9NRU1fRVJST1I7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogYWxsb2NhdGVkXFxuXCIpKTtcbiAgc3RybS5zdGF0ZSA9IHN0YXRlO1xuICBzdGF0ZS5zdHJtID0gc3RybTtcbiAgc3RhdGUud2luZG93ID0gbnVsbC8qWl9OVUxMKi87XG4gIHN0YXRlLm1vZGUgPSBIRUFEOyAgICAgLyogdG8gcGFzcyBzdGF0ZSB0ZXN0IGluIGluZmxhdGVSZXNldDIoKSAqL1xuICBjb25zdCByZXQgPSBpbmZsYXRlUmVzZXQyKHN0cm0sIHdpbmRvd0JpdHMpO1xuICBpZiAocmV0ICE9PSBaX09LJDEpIHtcbiAgICBzdHJtLnN0YXRlID0gbnVsbC8qWl9OVUxMKi87XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cblxuY29uc3QgaW5mbGF0ZUluaXQgPSAoc3RybSkgPT4ge1xuXG4gIHJldHVybiBpbmZsYXRlSW5pdDIoc3RybSwgREVGX1dCSVRTKTtcbn07XG5cblxuLypcbiBSZXR1cm4gc3RhdGUgd2l0aCBsZW5ndGggYW5kIGRpc3RhbmNlIGRlY29kaW5nIHRhYmxlcyBhbmQgaW5kZXggc2l6ZXMgc2V0IHRvXG4gZml4ZWQgY29kZSBkZWNvZGluZy4gIE5vcm1hbGx5IHRoaXMgcmV0dXJucyBmaXhlZCB0YWJsZXMgZnJvbSBpbmZmaXhlZC5oLlxuIElmIEJVSUxERklYRUQgaXMgZGVmaW5lZCwgdGhlbiBpbnN0ZWFkIHRoaXMgcm91dGluZSBidWlsZHMgdGhlIHRhYmxlcyB0aGVcbiBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgcmV0dXJucyB0aG9zZSB0YWJsZXMgdGhlIGZpcnN0IHRpbWUgYW5kXG4gdGhlcmVhZnRlci4gIFRoaXMgcmVkdWNlcyB0aGUgc2l6ZSBvZiB0aGUgY29kZSBieSBhYm91dCAySyBieXRlcywgaW5cbiBleGNoYW5nZSBmb3IgYSBsaXR0bGUgZXhlY3V0aW9uIHRpbWUuICBIb3dldmVyLCBCVUlMREZJWEVEIHNob3VsZCBub3QgYmVcbiB1c2VkIGZvciB0aHJlYWRlZCBhcHBsaWNhdGlvbnMsIHNpbmNlIHRoZSByZXdyaXRpbmcgb2YgdGhlIHRhYmxlcyBhbmQgdmlyZ2luXG4gbWF5IG5vdCBiZSB0aHJlYWQtc2FmZS5cbiAqL1xubGV0IHZpcmdpbiA9IHRydWU7XG5cbmxldCBsZW5maXgsIGRpc3RmaXg7IC8vIFdlIGhhdmUgbm8gcG9pbnRlcnMgaW4gSlMsIHNvIGtlZXAgdGFibGVzIHNlcGFyYXRlXG5cblxuY29uc3QgZml4ZWR0YWJsZXMgPSAoc3RhdGUpID0+IHtcblxuICAvKiBidWlsZCBmaXhlZCBodWZmbWFuIHRhYmxlcyBpZiBmaXJzdCBjYWxsIChtYXkgbm90IGJlIHRocmVhZCBzYWZlKSAqL1xuICBpZiAodmlyZ2luKSB7XG4gICAgbGVuZml4ID0gbmV3IEludDMyQXJyYXkoNTEyKTtcbiAgICBkaXN0Zml4ID0gbmV3IEludDMyQXJyYXkoMzIpO1xuXG4gICAgLyogbGl0ZXJhbC9sZW5ndGggdGFibGUgKi9cbiAgICBsZXQgc3ltID0gMDtcbiAgICB3aGlsZSAoc3ltIDwgMTQ0KSB7IHN0YXRlLmxlbnNbc3ltKytdID0gODsgfVxuICAgIHdoaWxlIChzeW0gPCAyNTYpIHsgc3RhdGUubGVuc1tzeW0rK10gPSA5OyB9XG4gICAgd2hpbGUgKHN5bSA8IDI4MCkgeyBzdGF0ZS5sZW5zW3N5bSsrXSA9IDc7IH1cbiAgICB3aGlsZSAoc3ltIDwgMjg4KSB7IHN0YXRlLmxlbnNbc3ltKytdID0gODsgfVxuXG4gICAgaW5mdHJlZXMoTEVOUywgIHN0YXRlLmxlbnMsIDAsIDI4OCwgbGVuZml4LCAgIDAsIHN0YXRlLndvcmssIHsgYml0czogOSB9KTtcblxuICAgIC8qIGRpc3RhbmNlIHRhYmxlICovXG4gICAgc3ltID0gMDtcbiAgICB3aGlsZSAoc3ltIDwgMzIpIHsgc3RhdGUubGVuc1tzeW0rK10gPSA1OyB9XG5cbiAgICBpbmZ0cmVlcyhESVNUUywgc3RhdGUubGVucywgMCwgMzIsICAgZGlzdGZpeCwgMCwgc3RhdGUud29yaywgeyBiaXRzOiA1IH0pO1xuXG4gICAgLyogZG8gdGhpcyBqdXN0IG9uY2UgKi9cbiAgICB2aXJnaW4gPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmxlbmNvZGUgPSBsZW5maXg7XG4gIHN0YXRlLmxlbmJpdHMgPSA5O1xuICBzdGF0ZS5kaXN0Y29kZSA9IGRpc3RmaXg7XG4gIHN0YXRlLmRpc3RiaXRzID0gNTtcbn07XG5cblxuLypcbiBVcGRhdGUgdGhlIHdpbmRvdyB3aXRoIHRoZSBsYXN0IHdzaXplIChub3JtYWxseSAzMkspIGJ5dGVzIHdyaXR0ZW4gYmVmb3JlXG4gcmV0dXJuaW5nLiAgSWYgd2luZG93IGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0LiAgVGhpcyBpcyBvbmx5IGNhbGxlZFxuIHdoZW4gYSB3aW5kb3cgaXMgYWxyZWFkeSBpbiB1c2UsIG9yIHdoZW4gb3V0cHV0IGhhcyBiZWVuIHdyaXR0ZW4gZHVyaW5nIHRoaXNcbiBpbmZsYXRlIGNhbGwsIGJ1dCB0aGUgZW5kIG9mIHRoZSBkZWZsYXRlIHN0cmVhbSBoYXMgbm90IGJlZW4gcmVhY2hlZCB5ZXQuXG4gSXQgaXMgYWxzbyBjYWxsZWQgdG8gY3JlYXRlIGEgd2luZG93IGZvciBkaWN0aW9uYXJ5IGRhdGEgd2hlbiBhIGRpY3Rpb25hcnlcbiBpcyBsb2FkZWQuXG5cbiBQcm92aWRpbmcgb3V0cHV0IGJ1ZmZlcnMgbGFyZ2VyIHRoYW4gMzJLIHRvIGluZmxhdGUoKSBzaG91bGQgcHJvdmlkZSBhIHNwZWVkXG4gYWR2YW50YWdlLCBzaW5jZSBvbmx5IHRoZSBsYXN0IDMySyBvZiBvdXRwdXQgaXMgY29waWVkIHRvIHRoZSBzbGlkaW5nIHdpbmRvd1xuIHVwb24gcmV0dXJuIGZyb20gaW5mbGF0ZSgpLCBhbmQgc2luY2UgYWxsIGRpc3RhbmNlcyBhZnRlciB0aGUgZmlyc3QgMzJLIG9mXG4gb3V0cHV0IHdpbGwgZmFsbCBpbiB0aGUgb3V0cHV0IGRhdGEsIG1ha2luZyBtYXRjaCBjb3BpZXMgc2ltcGxlciBhbmQgZmFzdGVyLlxuIFRoZSBhZHZhbnRhZ2UgbWF5IGJlIGRlcGVuZGVudCBvbiB0aGUgc2l6ZSBvZiB0aGUgcHJvY2Vzc29yJ3MgZGF0YSBjYWNoZXMuXG4gKi9cbmNvbnN0IHVwZGF0ZXdpbmRvdyA9IChzdHJtLCBzcmMsIGVuZCwgY29weSkgPT4ge1xuXG4gIGxldCBkaXN0O1xuICBjb25zdCBzdGF0ZSA9IHN0cm0uc3RhdGU7XG5cbiAgLyogaWYgaXQgaGFzbid0IGJlZW4gZG9uZSBhbHJlYWR5LCBhbGxvY2F0ZSBzcGFjZSBmb3IgdGhlIHdpbmRvdyAqL1xuICBpZiAoc3RhdGUud2luZG93ID09PSBudWxsKSB7XG4gICAgc3RhdGUud3NpemUgPSAxIDw8IHN0YXRlLndiaXRzO1xuICAgIHN0YXRlLnduZXh0ID0gMDtcbiAgICBzdGF0ZS53aGF2ZSA9IDA7XG5cbiAgICBzdGF0ZS53aW5kb3cgPSBuZXcgVWludDhBcnJheShzdGF0ZS53c2l6ZSk7XG4gIH1cblxuICAvKiBjb3B5IHN0YXRlLT53c2l6ZSBvciBsZXNzIG91dHB1dCBieXRlcyBpbnRvIHRoZSBjaXJjdWxhciB3aW5kb3cgKi9cbiAgaWYgKGNvcHkgPj0gc3RhdGUud3NpemUpIHtcbiAgICBzdGF0ZS53aW5kb3cuc2V0KHNyYy5zdWJhcnJheShlbmQgLSBzdGF0ZS53c2l6ZSwgZW5kKSwgMCk7XG4gICAgc3RhdGUud25leHQgPSAwO1xuICAgIHN0YXRlLndoYXZlID0gc3RhdGUud3NpemU7XG4gIH1cbiAgZWxzZSB7XG4gICAgZGlzdCA9IHN0YXRlLndzaXplIC0gc3RhdGUud25leHQ7XG4gICAgaWYgKGRpc3QgPiBjb3B5KSB7XG4gICAgICBkaXN0ID0gY29weTtcbiAgICB9XG4gICAgLy96bWVtY3B5KHN0YXRlLT53aW5kb3cgKyBzdGF0ZS0+d25leHQsIGVuZCAtIGNvcHksIGRpc3QpO1xuICAgIHN0YXRlLndpbmRvdy5zZXQoc3JjLnN1YmFycmF5KGVuZCAtIGNvcHksIGVuZCAtIGNvcHkgKyBkaXN0KSwgc3RhdGUud25leHQpO1xuICAgIGNvcHkgLT0gZGlzdDtcbiAgICBpZiAoY29weSkge1xuICAgICAgLy96bWVtY3B5KHN0YXRlLT53aW5kb3csIGVuZCAtIGNvcHksIGNvcHkpO1xuICAgICAgc3RhdGUud2luZG93LnNldChzcmMuc3ViYXJyYXkoZW5kIC0gY29weSwgZW5kKSwgMCk7XG4gICAgICBzdGF0ZS53bmV4dCA9IGNvcHk7XG4gICAgICBzdGF0ZS53aGF2ZSA9IHN0YXRlLndzaXplO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0YXRlLnduZXh0ICs9IGRpc3Q7XG4gICAgICBpZiAoc3RhdGUud25leHQgPT09IHN0YXRlLndzaXplKSB7IHN0YXRlLnduZXh0ID0gMDsgfVxuICAgICAgaWYgKHN0YXRlLndoYXZlIDwgc3RhdGUud3NpemUpIHsgc3RhdGUud2hhdmUgKz0gZGlzdDsgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn07XG5cblxuY29uc3QgaW5mbGF0ZSQyID0gKHN0cm0sIGZsdXNoKSA9PiB7XG5cbiAgbGV0IHN0YXRlO1xuICBsZXQgaW5wdXQsIG91dHB1dDsgICAgICAgICAgLy8gaW5wdXQvb3V0cHV0IGJ1ZmZlcnNcbiAgbGV0IG5leHQ7ICAgICAgICAgICAgICAgICAgIC8qIG5leHQgaW5wdXQgSU5ERVggKi9cbiAgbGV0IHB1dDsgICAgICAgICAgICAgICAgICAgIC8qIG5leHQgb3V0cHV0IElOREVYICovXG4gIGxldCBoYXZlLCBsZWZ0OyAgICAgICAgICAgICAvKiBhdmFpbGFibGUgaW5wdXQgYW5kIG91dHB1dCAqL1xuICBsZXQgaG9sZDsgICAgICAgICAgICAgICAgICAgLyogYml0IGJ1ZmZlciAqL1xuICBsZXQgYml0czsgICAgICAgICAgICAgICAgICAgLyogYml0cyBpbiBiaXQgYnVmZmVyICovXG4gIGxldCBfaW4sIF9vdXQ7ICAgICAgICAgICAgICAvKiBzYXZlIHN0YXJ0aW5nIGF2YWlsYWJsZSBpbnB1dCBhbmQgb3V0cHV0ICovXG4gIGxldCBjb3B5OyAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2Ygc3RvcmVkIG9yIG1hdGNoIGJ5dGVzIHRvIGNvcHkgKi9cbiAgbGV0IGZyb207ICAgICAgICAgICAgICAgICAgIC8qIHdoZXJlIHRvIGNvcHkgbWF0Y2ggYnl0ZXMgZnJvbSAqL1xuICBsZXQgZnJvbV9zb3VyY2U7XG4gIGxldCBoZXJlID0gMDsgICAgICAgICAgICAgICAvKiBjdXJyZW50IGRlY29kaW5nIHRhYmxlIGVudHJ5ICovXG4gIGxldCBoZXJlX2JpdHMsIGhlcmVfb3AsIGhlcmVfdmFsOyAvLyBwYWtlZCBcImhlcmVcIiBkZW5vcm1hbGl6ZWQgKEpTIHNwZWNpZmljKVxuICAvL2xldCBsYXN0OyAgICAgICAgICAgICAgICAgICAvKiBwYXJlbnQgdGFibGUgZW50cnkgKi9cbiAgbGV0IGxhc3RfYml0cywgbGFzdF9vcCwgbGFzdF92YWw7IC8vIHBha2VkIFwibGFzdFwiIGRlbm9ybWFsaXplZCAoSlMgc3BlY2lmaWMpXG4gIGxldCBsZW47ICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggdG8gY29weSBmb3IgcmVwZWF0cywgYml0cyB0byBkcm9wICovXG4gIGxldCByZXQ7ICAgICAgICAgICAgICAgICAgICAvKiByZXR1cm4gY29kZSAqL1xuICBjb25zdCBoYnVmID0gbmV3IFVpbnQ4QXJyYXkoNCk7ICAgIC8qIGJ1ZmZlciBmb3IgZ3ppcCBoZWFkZXIgY3JjIGNhbGN1bGF0aW9uICovXG4gIGxldCBvcHRzO1xuXG4gIGxldCBuOyAvLyB0ZW1wb3JhcnkgdmFyaWFibGUgZm9yIE5FRURfQklUU1xuXG4gIGNvbnN0IG9yZGVyID0gLyogcGVybXV0YXRpb24gb2YgY29kZSBsZW5ndGhzICovXG4gICAgbmV3IFVpbnQ4QXJyYXkoWyAxNiwgMTcsIDE4LCAwLCA4LCA3LCA5LCA2LCAxMCwgNSwgMTEsIDQsIDEyLCAzLCAxMywgMiwgMTQsIDEsIDE1IF0pO1xuXG5cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pIHx8ICFzdHJtLm91dHB1dCB8fFxuICAgICAgKCFzdHJtLmlucHV0ICYmIHN0cm0uYXZhaWxfaW4gIT09IDApKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SJDE7XG4gIH1cblxuICBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIGlmIChzdGF0ZS5tb2RlID09PSBUWVBFKSB7IHN0YXRlLm1vZGUgPSBUWVBFRE87IH0gICAgLyogc2tpcCBjaGVjayAqL1xuXG5cbiAgLy8tLS0gTE9BRCgpIC0tLVxuICBwdXQgPSBzdHJtLm5leHRfb3V0O1xuICBvdXRwdXQgPSBzdHJtLm91dHB1dDtcbiAgbGVmdCA9IHN0cm0uYXZhaWxfb3V0O1xuICBuZXh0ID0gc3RybS5uZXh0X2luO1xuICBpbnB1dCA9IHN0cm0uaW5wdXQ7XG4gIGhhdmUgPSBzdHJtLmF2YWlsX2luO1xuICBob2xkID0gc3RhdGUuaG9sZDtcbiAgYml0cyA9IHN0YXRlLmJpdHM7XG4gIC8vLS0tXG5cbiAgX2luID0gaGF2ZTtcbiAgX291dCA9IGxlZnQ7XG4gIHJldCA9IFpfT0skMTtcblxuICBpbmZfbGVhdmU6IC8vIGdvdG8gZW11bGF0aW9uXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKHN0YXRlLm1vZGUpIHtcbiAgICAgIGNhc2UgSEVBRDpcbiAgICAgICAgaWYgKHN0YXRlLndyYXAgPT09IDApIHtcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRURPO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDE2KTtcbiAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBpZiAoKHN0YXRlLndyYXAgJiAyKSAmJiBob2xkID09PSAweDhiMWYpIHsgIC8qIGd6aXAgaGVhZGVyICovXG4gICAgICAgICAgaWYgKHN0YXRlLndiaXRzID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZS53Yml0cyA9IDE1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZS5jaGVjayA9IDAvKmNyYzMyKDBMLCBaX05VTEwsIDApKi87XG4gICAgICAgICAgLy89PT0gQ1JDMihzdGF0ZS5jaGVjaywgaG9sZCk7XG4gICAgICAgICAgaGJ1ZlswXSA9IGhvbGQgJiAweGZmO1xuICAgICAgICAgIGhidWZbMV0gPSAoaG9sZCA+Pj4gOCkgJiAweGZmO1xuICAgICAgICAgIHN0YXRlLmNoZWNrID0gY3JjMzJfMShzdGF0ZS5jaGVjaywgaGJ1ZiwgMiwgMCk7XG4gICAgICAgICAgLy89PT0vL1xuXG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgc3RhdGUubW9kZSA9IEZMQUdTO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoc3RhdGUud3JhcCAmIDEpIHx8ICAgLyogY2hlY2sgaWYgemxpYiBoZWFkZXIgYWxsb3dlZCAqL1xuICAgICAgICAgICgoKGhvbGQgJiAweGZmKS8qQklUUyg4KSovIDw8IDgpICsgKGhvbGQgPj4gOCkpICUgMzEpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgaGVhZGVyIGNoZWNrJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoaG9sZCAmIDB4MGYpLypCSVRTKDQpKi8gIT09IFpfREVGTEFURUQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLy0tLSBEUk9QQklUUyg0KSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gNDtcbiAgICAgICAgYml0cyAtPSA0O1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIGxlbiA9IChob2xkICYgMHgwZikvKkJJVFMoNCkqLyArIDg7XG4gICAgICAgIGlmIChzdGF0ZS53Yml0cyA9PT0gMCkge1xuICAgICAgICAgIHN0YXRlLndiaXRzID0gbGVuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW4gPiAxNSB8fCBsZW4gPiBzdGF0ZS53Yml0cykge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgd2luZG93IHNpemUnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAhISEgcGFrbyBwYXRjaC4gRm9yY2UgdXNlIGBvcHRpb25zLndpbmRvd0JpdHNgIGlmIHBhc3NlZC5cbiAgICAgICAgLy8gUmVxdWlyZWQgdG8gYWx3YXlzIHVzZSBtYXggd2luZG93IHNpemUgYnkgZGVmYXVsdC5cbiAgICAgICAgc3RhdGUuZG1heCA9IDEgPDwgc3RhdGUud2JpdHM7XG4gICAgICAgIC8vc3RhdGUuZG1heCA9IDEgPDwgbGVuO1xuXG4gICAgICAgIHN0YXRlLmZsYWdzID0gMDsgICAgICAgICAgICAgICAvKiBpbmRpY2F0ZSB6bGliIGhlYWRlciAqL1xuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgemxpYiBoZWFkZXIgb2tcXG5cIikpO1xuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSAxLyphZGxlcjMyKDBMLCBaX05VTEwsIDApKi87XG4gICAgICAgIHN0YXRlLm1vZGUgPSBob2xkICYgMHgyMDAgPyBESUNUSUQgOiBUWVBFO1xuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZMQUdTOlxuICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUuZmxhZ3MgPSBob2xkO1xuICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHhmZikgIT09IFpfREVGTEFURUQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweGUwMDApIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGhlYWRlciBmbGFncyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLnRleHQgPSAoKGhvbGQgPj4gOCkgJiAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHgwMjAwKSAmJiAoc3RhdGUud3JhcCAmIDQpKSB7XG4gICAgICAgICAgLy89PT0gQ1JDMihzdGF0ZS5jaGVjaywgaG9sZCk7XG4gICAgICAgICAgaGJ1ZlswXSA9IGhvbGQgJiAweGZmO1xuICAgICAgICAgIGhidWZbMV0gPSAoaG9sZCA+Pj4gOCkgJiAweGZmO1xuICAgICAgICAgIHN0YXRlLmNoZWNrID0gY3JjMzJfMShzdGF0ZS5jaGVjaywgaGJ1ZiwgMiwgMCk7XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICB9XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5tb2RlID0gVElNRTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBUSU1FOlxuICAgICAgICAvLz09PSBORUVEQklUUygzMik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMzIpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLnRpbWUgPSBob2xkO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3RhdGUuZmxhZ3MgJiAweDAyMDApICYmIChzdGF0ZS53cmFwICYgNCkpIHtcbiAgICAgICAgICAvLz09PSBDUkM0KHN0YXRlLmNoZWNrLCBob2xkKVxuICAgICAgICAgIGhidWZbMF0gPSBob2xkICYgMHhmZjtcbiAgICAgICAgICBoYnVmWzFdID0gKGhvbGQgPj4+IDgpICYgMHhmZjtcbiAgICAgICAgICBoYnVmWzJdID0gKGhvbGQgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlszXSA9IChob2xkID4+PiAyNCkgJiAweGZmO1xuICAgICAgICAgIHN0YXRlLmNoZWNrID0gY3JjMzJfMShzdGF0ZS5jaGVjaywgaGJ1ZiwgNCwgMCk7XG4gICAgICAgICAgLy89PT1cbiAgICAgICAgfVxuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubW9kZSA9IE9TO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIE9TOlxuICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLnhmbGFncyA9IChob2xkICYgMHhmZik7XG4gICAgICAgICAgc3RhdGUuaGVhZC5vcyA9IChob2xkID4+IDgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3RhdGUuZmxhZ3MgJiAweDAyMDApICYmIChzdGF0ZS53cmFwICYgNCkpIHtcbiAgICAgICAgICAvLz09PSBDUkMyKHN0YXRlLmNoZWNrLCBob2xkKTtcbiAgICAgICAgICBoYnVmWzBdID0gaG9sZCAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMl8xKHN0YXRlLmNoZWNrLCBoYnVmLCAyLCAwKTtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgIH1cbiAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0YXRlLm1vZGUgPSBFWExFTjtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBFWExFTjpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwNDAwKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoMTYpOyAqL1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5sZW5ndGggPSBob2xkO1xuICAgICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgICBzdGF0ZS5oZWFkLmV4dHJhX2xlbiA9IGhvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoc3RhdGUuZmxhZ3MgJiAweDAyMDApICYmIChzdGF0ZS53cmFwICYgNCkpIHtcbiAgICAgICAgICAgIC8vPT09IENSQzIoc3RhdGUuY2hlY2ssIGhvbGQpO1xuICAgICAgICAgICAgaGJ1ZlswXSA9IGhvbGQgJiAweGZmO1xuICAgICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyXzEoc3RhdGUuY2hlY2ssIGhidWYsIDIsIDApO1xuICAgICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICAgIGhvbGQgPSAwO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5leHRyYSA9IG51bGwvKlpfTlVMTCovO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm1vZGUgPSBFWFRSQTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBFWFRSQTpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwNDAwKSB7XG4gICAgICAgICAgY29weSA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgICBpZiAoY29weSA+IGhhdmUpIHsgY29weSA9IGhhdmU7IH1cbiAgICAgICAgICBpZiAoY29weSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICAgICAgbGVuID0gc3RhdGUuaGVhZC5leHRyYV9sZW4gLSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmICghc3RhdGUuaGVhZC5leHRyYSkge1xuICAgICAgICAgICAgICAgIC8vIFVzZSB1bnR5cGVkIGFycmF5IGZvciBtb3JlIGNvbnZlbmllbnQgcHJvY2Vzc2luZyBsYXRlclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmEgPSBuZXcgVWludDhBcnJheShzdGF0ZS5oZWFkLmV4dHJhX2xlbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3RhdGUuaGVhZC5leHRyYS5zZXQoXG4gICAgICAgICAgICAgICAgaW5wdXQuc3ViYXJyYXkoXG4gICAgICAgICAgICAgICAgICBuZXh0LFxuICAgICAgICAgICAgICAgICAgLy8gZXh0cmEgZmllbGQgaXMgbGltaXRlZCB0byA2NTUzNiBieXRlc1xuICAgICAgICAgICAgICAgICAgLy8gLSBubyBuZWVkIGZvciBhZGRpdGlvbmFsIHNpemUgY2hlY2tcbiAgICAgICAgICAgICAgICAgIG5leHQgKyBjb3B5XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAvKmxlbiArIGNvcHkgPiBzdGF0ZS5oZWFkLmV4dHJhX21heCAtIGxlbiA/IHN0YXRlLmhlYWQuZXh0cmFfbWF4IDogY29weSwqL1xuICAgICAgICAgICAgICAgIGxlblxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAvL3ptZW1jcHkoc3RhdGUuaGVhZC5leHRyYSArIGxlbiwgbmV4dCxcbiAgICAgICAgICAgICAgLy8gICAgICAgIGxlbiArIGNvcHkgPiBzdGF0ZS5oZWFkLmV4dHJhX21heCA/XG4gICAgICAgICAgICAgIC8vICAgICAgICBzdGF0ZS5oZWFkLmV4dHJhX21heCAtIGxlbiA6IGNvcHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChzdGF0ZS5mbGFncyAmIDB4MDIwMCkgJiYgKHN0YXRlLndyYXAgJiA0KSkge1xuICAgICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyXzEoc3RhdGUuY2hlY2ssIGlucHV0LCBjb3B5LCBuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhdmUgLT0gY29weTtcbiAgICAgICAgICAgIG5leHQgKz0gY29weTtcbiAgICAgICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhdGUubGVuZ3RoKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmxlbmd0aCA9IDA7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBOQU1FO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIE5BTUU6XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDgwMCkge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGNvcHkgPSAwO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vIFRPRE86IDIgb3IgMSBieXRlcz9cbiAgICAgICAgICAgIGxlbiA9IGlucHV0W25leHQgKyBjb3B5KytdO1xuICAgICAgICAgICAgLyogdXNlIGNvbnN0YW50IGxpbWl0IGJlY2F1c2UgaW4ganMgd2Ugc2hvdWxkIG5vdCBwcmVhbGxvY2F0ZSBtZW1vcnkgKi9cbiAgICAgICAgICAgIGlmIChzdGF0ZS5oZWFkICYmIGxlbiAmJlxuICAgICAgICAgICAgICAgIChzdGF0ZS5sZW5ndGggPCA2NTUzNiAvKnN0YXRlLmhlYWQubmFtZV9tYXgqLykpIHtcbiAgICAgICAgICAgICAgc3RhdGUuaGVhZC5uYW1lICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IHdoaWxlIChsZW4gJiYgY29weSA8IGhhdmUpO1xuXG4gICAgICAgICAgaWYgKChzdGF0ZS5mbGFncyAmIDB4MDIwMCkgJiYgKHN0YXRlLndyYXAgJiA0KSkge1xuICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMl8xKHN0YXRlLmNoZWNrLCBpbnB1dCwgY29weSwgbmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhdmUgLT0gY29weTtcbiAgICAgICAgICBuZXh0ICs9IGNvcHk7XG4gICAgICAgICAgaWYgKGxlbikgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5uYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5sZW5ndGggPSAwO1xuICAgICAgICBzdGF0ZS5tb2RlID0gQ09NTUVOVDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBDT01NRU5UOlxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDEwMDApIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBjb3B5ID0gMDtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZW4gPSBpbnB1dFtuZXh0ICsgY29weSsrXTtcbiAgICAgICAgICAgIC8qIHVzZSBjb25zdGFudCBsaW1pdCBiZWNhdXNlIGluIGpzIHdlIHNob3VsZCBub3QgcHJlYWxsb2NhdGUgbWVtb3J5ICovXG4gICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAmJiBsZW4gJiZcbiAgICAgICAgICAgICAgICAoc3RhdGUubGVuZ3RoIDwgNjU1MzYgLypzdGF0ZS5oZWFkLmNvbW1fbWF4Ki8pKSB7XG4gICAgICAgICAgICAgIHN0YXRlLmhlYWQuY29tbWVudCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB3aGlsZSAobGVuICYmIGNvcHkgPCBoYXZlKTtcbiAgICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHgwMjAwKSAmJiAoc3RhdGUud3JhcCAmIDQpKSB7XG4gICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyXzEoc3RhdGUuY2hlY2ssIGlucHV0LCBjb3B5LCBuZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGF2ZSAtPSBjb3B5O1xuICAgICAgICAgIG5leHQgKz0gY29weTtcbiAgICAgICAgICBpZiAobGVuKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLmNvbW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm1vZGUgPSBIQ1JDO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIEhDUkM6XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKDE2KTsgKi9cbiAgICAgICAgICB3aGlsZSAoYml0cyA8IDE2KSB7XG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgaWYgKChzdGF0ZS53cmFwICYgNCkgJiYgaG9sZCAhPT0gKHN0YXRlLmNoZWNrICYgMHhmZmZmKSkge1xuICAgICAgICAgICAgc3RybS5tc2cgPSAnaGVhZGVyIGNyYyBtaXNtYXRjaCc7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5oY3JjID0gKChzdGF0ZS5mbGFncyA+PiA5KSAmIDEpO1xuICAgICAgICAgIHN0YXRlLmhlYWQuZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUNUSUQ6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDMyKTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSB6c3dhcDMyKGhvbGQpO1xuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubW9kZSA9IERJQ1Q7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgRElDVDpcbiAgICAgICAgaWYgKHN0YXRlLmhhdmVkaWN0ID09PSAwKSB7XG4gICAgICAgICAgLy8tLS0gUkVTVE9SRSgpIC0tLVxuICAgICAgICAgIHN0cm0ubmV4dF9vdXQgPSBwdXQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9vdXQgPSBsZWZ0O1xuICAgICAgICAgIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9pbiA9IGhhdmU7XG4gICAgICAgICAgc3RhdGUuaG9sZCA9IGhvbGQ7XG4gICAgICAgICAgc3RhdGUuYml0cyA9IGJpdHM7XG4gICAgICAgICAgLy8tLS1cbiAgICAgICAgICByZXR1cm4gWl9ORUVEX0RJQ1QkMTtcbiAgICAgICAgfVxuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSAxLyphZGxlcjMyKDBMLCBaX05VTEwsIDApKi87XG4gICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIFRZUEU6XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9CTE9DSyB8fCBmbHVzaCA9PT0gWl9UUkVFUykgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBUWVBFRE86XG4gICAgICAgIGlmIChzdGF0ZS5sYXN0KSB7XG4gICAgICAgICAgLy8tLS0gQllURUJJVFMoKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSBiaXRzICYgNztcbiAgICAgICAgICBiaXRzIC09IGJpdHMgJiA3O1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQ0hFQ0s7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0gTkVFREJJVFMoMyk7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMykge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5sYXN0ID0gKGhvbGQgJiAweDAxKS8qQklUUygxKSovO1xuICAgICAgICAvLy0tLSBEUk9QQklUUygxKSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gMTtcbiAgICAgICAgYml0cyAtPSAxO1xuICAgICAgICAvLy0tLS8vXG5cbiAgICAgICAgc3dpdGNoICgoaG9sZCAmIDB4MDMpLypCSVRTKDIpKi8pIHtcbiAgICAgICAgICBjYXNlIDA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzdG9yZWQgYmxvY2sgKi9cbiAgICAgICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgIHN0b3JlZCBibG9jayVzXFxuXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgc3RhdGUubGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IFNUT1JFRDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZpeGVkIGJsb2NrICovXG4gICAgICAgICAgICBmaXhlZHRhYmxlcyhzdGF0ZSk7XG4gICAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICBmaXhlZCBjb2RlcyBibG9jayVzXFxuXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgc3RhdGUubGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTl87ICAgICAgICAgICAgIC8qIGRlY29kZSBjb2RlcyAqL1xuICAgICAgICAgICAgaWYgKGZsdXNoID09PSBaX1RSRUVTKSB7XG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKDIpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSAyO1xuICAgICAgICAgICAgICBiaXRzIC09IDI7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZHluYW1pYyBibG9jayAqL1xuICAgICAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgZHluYW1pYyBjb2RlcyBibG9jayVzXFxuXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgc3RhdGUubGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IFRBQkxFO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBibG9jayB0eXBlJztcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoMikgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDI7XG4gICAgICAgIGJpdHMgLT0gMjtcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RPUkVEOlxuICAgICAgICAvLy0tLSBCWVRFQklUUygpIC0tLS8vIC8qIGdvIHRvIGJ5dGUgYm91bmRhcnkgKi9cbiAgICAgICAgaG9sZCA+Pj49IGJpdHMgJiA3O1xuICAgICAgICBiaXRzIC09IGJpdHMgJiA3O1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIC8vPT09IE5FRURCSVRTKDMyKTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBpZiAoKGhvbGQgJiAweGZmZmYpICE9PSAoKGhvbGQgPj4+IDE2KSBeIDB4ZmZmZikpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmxlbmd0aCA9IGhvbGQgJiAweGZmZmY7XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgc3RvcmVkIGxlbmd0aCAldVxcblwiLFxuICAgICAgICAvLyAgICAgICAgc3RhdGUubGVuZ3RoKSk7XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5tb2RlID0gQ09QWV87XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9UUkVFUykgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBDT1BZXzpcbiAgICAgICAgc3RhdGUubW9kZSA9IENPUFk7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgQ09QWTpcbiAgICAgICAgY29weSA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgaWYgKGNvcHkpIHtcbiAgICAgICAgICBpZiAoY29weSA+IGhhdmUpIHsgY29weSA9IGhhdmU7IH1cbiAgICAgICAgICBpZiAoY29weSA+IGxlZnQpIHsgY29weSA9IGxlZnQ7IH1cbiAgICAgICAgICBpZiAoY29weSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAvLy0tLSB6bWVtY3B5KHB1dCwgbmV4dCwgY29weSk7IC0tLVxuICAgICAgICAgIG91dHB1dC5zZXQoaW5wdXQuc3ViYXJyYXkobmV4dCwgbmV4dCArIGNvcHkpLCBwdXQpO1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBoYXZlIC09IGNvcHk7XG4gICAgICAgICAgbmV4dCArPSBjb3B5O1xuICAgICAgICAgIGxlZnQgLT0gY29weTtcbiAgICAgICAgICBwdXQgKz0gY29weTtcbiAgICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHN0b3JlZCBlbmRcXG5cIikpO1xuICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRBQkxFOlxuICAgICAgICAvLz09PSBORUVEQklUUygxNCk7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTQpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubmxlbiA9IChob2xkICYgMHgxZikvKkJJVFMoNSkqLyArIDI1NztcbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoNSkgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDU7XG4gICAgICAgIGJpdHMgLT0gNTtcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBzdGF0ZS5uZGlzdCA9IChob2xkICYgMHgxZikvKkJJVFMoNSkqLyArIDE7XG4gICAgICAgIC8vLS0tIERST1BCSVRTKDUpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSA1O1xuICAgICAgICBiaXRzIC09IDU7XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgc3RhdGUubmNvZGUgPSAoaG9sZCAmIDB4MGYpLypCSVRTKDQpKi8gKyA0O1xuICAgICAgICAvLy0tLSBEUk9QQklUUyg0KSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gNDtcbiAgICAgICAgYml0cyAtPSA0O1xuICAgICAgICAvLy0tLS8vXG4vLyNpZm5kZWYgUEtaSVBfQlVHX1dPUktBUk9VTkRcbiAgICAgICAgaWYgKHN0YXRlLm5sZW4gPiAyODYgfHwgc3RhdGUubmRpc3QgPiAzMCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ3RvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBzeW1ib2xzJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4vLyNlbmRpZlxuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHRhYmxlIHNpemVzIG9rXFxuXCIpKTtcbiAgICAgICAgc3RhdGUuaGF2ZSA9IDA7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBMRU5MRU5TO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTkxFTlM6XG4gICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgc3RhdGUubmNvZGUpIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygzKTtcbiAgICAgICAgICB3aGlsZSAoYml0cyA8IDMpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5sZW5zW29yZGVyW3N0YXRlLmhhdmUrK11dID0gKGhvbGQgJiAweDA3KTsvL0JJVFMoMyk7XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMoMykgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gMztcbiAgICAgICAgICBiaXRzIC09IDM7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgMTkpIHtcbiAgICAgICAgICBzdGF0ZS5sZW5zW29yZGVyW3N0YXRlLmhhdmUrK11dID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIHNlcGFyYXRlIHRhYmxlcyAmIG5vIHBvaW50ZXJzLiAyIGNvbW1lbnRlZCBsaW5lcyBiZWxvdyBub3QgbmVlZGVkLlxuICAgICAgICAvL3N0YXRlLm5leHQgPSBzdGF0ZS5jb2RlcztcbiAgICAgICAgLy9zdGF0ZS5sZW5jb2RlID0gc3RhdGUubmV4dDtcbiAgICAgICAgLy8gU3dpdGNoIHRvIHVzZSBkeW5hbWljIHRhYmxlXG4gICAgICAgIHN0YXRlLmxlbmNvZGUgPSBzdGF0ZS5sZW5keW47XG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSA3O1xuXG4gICAgICAgIG9wdHMgPSB7IGJpdHM6IHN0YXRlLmxlbmJpdHMgfTtcbiAgICAgICAgcmV0ID0gaW5mdHJlZXMoQ09ERVMsIHN0YXRlLmxlbnMsIDAsIDE5LCBzdGF0ZS5sZW5jb2RlLCAwLCBzdGF0ZS53b3JrLCBvcHRzKTtcbiAgICAgICAgc3RhdGUubGVuYml0cyA9IG9wdHMuYml0cztcblxuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBjb2RlIGxlbmd0aHMgc2V0JztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgY29kZSBsZW5ndGhzIG9rXFxuXCIpKTtcbiAgICAgICAgc3RhdGUuaGF2ZSA9IDA7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBDT0RFTEVOUztcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBDT0RFTEVOUzpcbiAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCBzdGF0ZS5ubGVuICsgc3RhdGUubmRpc3QpIHtcbiAgICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBoZXJlID0gc3RhdGUubGVuY29kZVtob2xkICYgKCgxIDw8IHN0YXRlLmxlbmJpdHMpIC0gMSldOy8qQklUUyhzdGF0ZS5sZW5iaXRzKSovXG4gICAgICAgICAgICBoZXJlX2JpdHMgPSBoZXJlID4+PiAyNDtcbiAgICAgICAgICAgIGhlcmVfb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGhlcmVfdmFsID0gaGVyZSAmIDB4ZmZmZjtcblxuICAgICAgICAgICAgaWYgKChoZXJlX2JpdHMpIDw9IGJpdHMpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIC8vLS0tIFBVTExCWVRFKCkgLS0tLy9cbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoZXJlX3ZhbCA8IDE2KSB7XG4gICAgICAgICAgICAvLy0tLSBEUk9QQklUUyhoZXJlLmJpdHMpIC0tLS8vXG4gICAgICAgICAgICBob2xkID4+Pj0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUrK10gPSBoZXJlX3ZhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGVyZV92YWwgPT09IDE2KSB7XG4gICAgICAgICAgICAgIC8vPT09IE5FRURCSVRTKGhlcmUuYml0cyArIDIpO1xuICAgICAgICAgICAgICBuID0gaGVyZV9iaXRzICsgMjtcbiAgICAgICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgICAgaWYgKHN0YXRlLmhhdmUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0JztcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxlbiA9IHN0YXRlLmxlbnNbc3RhdGUuaGF2ZSAtIDFdO1xuICAgICAgICAgICAgICBjb3B5ID0gMyArIChob2xkICYgMHgwMyk7Ly9CSVRTKDIpO1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUygyKSAtLS0vL1xuICAgICAgICAgICAgICBob2xkID4+Pj0gMjtcbiAgICAgICAgICAgICAgYml0cyAtPSAyO1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoZXJlX3ZhbCA9PT0gMTcpIHtcbiAgICAgICAgICAgICAgLy89PT0gTkVFREJJVFMoaGVyZS5iaXRzICsgMyk7XG4gICAgICAgICAgICAgIG4gPSBoZXJlX2JpdHMgKyAzO1xuICAgICAgICAgICAgICB3aGlsZSAoYml0cyA8IG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICAgICAgICBob2xkID4+Pj0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgICBiaXRzIC09IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgICBsZW4gPSAwO1xuICAgICAgICAgICAgICBjb3B5ID0gMyArIChob2xkICYgMHgwNyk7Ly9CSVRTKDMpO1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUygzKSAtLS0vL1xuICAgICAgICAgICAgICBob2xkID4+Pj0gMztcbiAgICAgICAgICAgICAgYml0cyAtPSAzO1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgLy89PT0gTkVFREJJVFMoaGVyZS5iaXRzICsgNyk7XG4gICAgICAgICAgICAgIG4gPSBoZXJlX2JpdHMgKyA3O1xuICAgICAgICAgICAgICB3aGlsZSAoYml0cyA8IG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICAgICAgICBob2xkID4+Pj0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgICBiaXRzIC09IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgICBsZW4gPSAwO1xuICAgICAgICAgICAgICBjb3B5ID0gMTEgKyAoaG9sZCAmIDB4N2YpOy8vQklUUyg3KTtcbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoNykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IDc7XG4gICAgICAgICAgICAgIGJpdHMgLT0gNztcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLmhhdmUgKyBjb3B5ID4gc3RhdGUubmxlbiArIHN0YXRlLm5kaXN0KSB7XG4gICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgYml0IGxlbmd0aCByZXBlYXQnO1xuICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjb3B5LS0pIHtcbiAgICAgICAgICAgICAgc3RhdGUubGVuc1tzdGF0ZS5oYXZlKytdID0gbGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGhhbmRsZSBlcnJvciBicmVha3MgaW4gd2hpbGUgKi9cbiAgICAgICAgaWYgKHN0YXRlLm1vZGUgPT09IEJBRCkgeyBicmVhazsgfVxuXG4gICAgICAgIC8qIGNoZWNrIGZvciBlbmQtb2YtYmxvY2sgY29kZSAoYmV0dGVyIGhhdmUgb25lKSAqL1xuICAgICAgICBpZiAoc3RhdGUubGVuc1syNTZdID09PSAwKSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBjb2RlIC0tIG1pc3NpbmcgZW5kLW9mLWJsb2NrJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogYnVpbGQgY29kZSB0YWJsZXMgLS0gbm90ZTogZG8gbm90IGNoYW5nZSB0aGUgbGVuYml0cyBvciBkaXN0Yml0c1xuICAgICAgICAgICB2YWx1ZXMgaGVyZSAoOSBhbmQgNikgd2l0aG91dCByZWFkaW5nIHRoZSBjb21tZW50cyBpbiBpbmZ0cmVlcy5oXG4gICAgICAgICAgIGNvbmNlcm5pbmcgdGhlIEVOT1VHSCBjb25zdGFudHMsIHdoaWNoIGRlcGVuZCBvbiB0aG9zZSB2YWx1ZXMgKi9cbiAgICAgICAgc3RhdGUubGVuYml0cyA9IDk7XG5cbiAgICAgICAgb3B0cyA9IHsgYml0czogc3RhdGUubGVuYml0cyB9O1xuICAgICAgICByZXQgPSBpbmZ0cmVlcyhMRU5TLCBzdGF0ZS5sZW5zLCAwLCBzdGF0ZS5ubGVuLCBzdGF0ZS5sZW5jb2RlLCAwLCBzdGF0ZS53b3JrLCBvcHRzKTtcbiAgICAgICAgLy8gV2UgaGF2ZSBzZXBhcmF0ZSB0YWJsZXMgJiBubyBwb2ludGVycy4gMiBjb21tZW50ZWQgbGluZXMgYmVsb3cgbm90IG5lZWRlZC5cbiAgICAgICAgLy8gc3RhdGUubmV4dF9pbmRleCA9IG9wdHMudGFibGVfaW5kZXg7XG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSBvcHRzLmJpdHM7XG4gICAgICAgIC8vIHN0YXRlLmxlbmNvZGUgPSBzdGF0ZS5uZXh0O1xuXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGxpdGVyYWwvbGVuZ3RocyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5kaXN0Yml0cyA9IDY7XG4gICAgICAgIC8vc3RhdGUuZGlzdGNvZGUuY29weShzdGF0ZS5jb2Rlcyk7XG4gICAgICAgIC8vIFN3aXRjaCB0byB1c2UgZHluYW1pYyB0YWJsZVxuICAgICAgICBzdGF0ZS5kaXN0Y29kZSA9IHN0YXRlLmRpc3RkeW47XG4gICAgICAgIG9wdHMgPSB7IGJpdHM6IHN0YXRlLmRpc3RiaXRzIH07XG4gICAgICAgIHJldCA9IGluZnRyZWVzKERJU1RTLCBzdGF0ZS5sZW5zLCBzdGF0ZS5ubGVuLCBzdGF0ZS5uZGlzdCwgc3RhdGUuZGlzdGNvZGUsIDAsIHN0YXRlLndvcmssIG9wdHMpO1xuICAgICAgICAvLyBXZSBoYXZlIHNlcGFyYXRlIHRhYmxlcyAmIG5vIHBvaW50ZXJzLiAyIGNvbW1lbnRlZCBsaW5lcyBiZWxvdyBub3QgbmVlZGVkLlxuICAgICAgICAvLyBzdGF0ZS5uZXh0X2luZGV4ID0gb3B0cy50YWJsZV9pbmRleDtcbiAgICAgICAgc3RhdGUuZGlzdGJpdHMgPSBvcHRzLmJpdHM7XG4gICAgICAgIC8vIHN0YXRlLmRpc3Rjb2RlID0gc3RhdGUubmV4dDtcblxuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZXMgc2V0JztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsICdpbmZsYXRlOiAgICAgICBjb2RlcyBva1xcbicpKTtcbiAgICAgICAgc3RhdGUubW9kZSA9IExFTl87XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9UUkVFUykgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBMRU5fOlxuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTjpcbiAgICAgICAgaWYgKGhhdmUgPj0gNiAmJiBsZWZ0ID49IDI1OCkge1xuICAgICAgICAgIC8vLS0tIFJFU1RPUkUoKSAtLS1cbiAgICAgICAgICBzdHJtLm5leHRfb3V0ID0gcHV0O1xuICAgICAgICAgIHN0cm0uYXZhaWxfb3V0ID0gbGVmdDtcbiAgICAgICAgICBzdHJtLm5leHRfaW4gPSBuZXh0O1xuICAgICAgICAgIHN0cm0uYXZhaWxfaW4gPSBoYXZlO1xuICAgICAgICAgIHN0YXRlLmhvbGQgPSBob2xkO1xuICAgICAgICAgIHN0YXRlLmJpdHMgPSBiaXRzO1xuICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgaW5mZmFzdChzdHJtLCBfb3V0KTtcbiAgICAgICAgICAvLy0tLSBMT0FEKCkgLS0tXG4gICAgICAgICAgcHV0ID0gc3RybS5uZXh0X291dDtcbiAgICAgICAgICBvdXRwdXQgPSBzdHJtLm91dHB1dDtcbiAgICAgICAgICBsZWZ0ID0gc3RybS5hdmFpbF9vdXQ7XG4gICAgICAgICAgbmV4dCA9IHN0cm0ubmV4dF9pbjtcbiAgICAgICAgICBpbnB1dCA9IHN0cm0uaW5wdXQ7XG4gICAgICAgICAgaGF2ZSA9IHN0cm0uYXZhaWxfaW47XG4gICAgICAgICAgaG9sZCA9IHN0YXRlLmhvbGQ7XG4gICAgICAgICAgYml0cyA9IHN0YXRlLmJpdHM7XG4gICAgICAgICAgLy8tLS1cblxuICAgICAgICAgIGlmIChzdGF0ZS5tb2RlID09PSBUWVBFKSB7XG4gICAgICAgICAgICBzdGF0ZS5iYWNrID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmJhY2sgPSAwO1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgaGVyZSA9IHN0YXRlLmxlbmNvZGVbaG9sZCAmICgoMSA8PCBzdGF0ZS5sZW5iaXRzKSAtIDEpXTsgIC8qQklUUyhzdGF0ZS5sZW5iaXRzKSovXG4gICAgICAgICAgaGVyZV9iaXRzID0gaGVyZSA+Pj4gMjQ7XG4gICAgICAgICAgaGVyZV9vcCA9IChoZXJlID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgIGhlcmVfdmFsID0gaGVyZSAmIDB4ZmZmZjtcblxuICAgICAgICAgIGlmIChoZXJlX2JpdHMgPD0gYml0cykgeyBicmVhazsgfVxuICAgICAgICAgIC8vLS0tIFBVTExCWVRFKCkgLS0tLy9cbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVyZV9vcCAmJiAoaGVyZV9vcCAmIDB4ZjApID09PSAwKSB7XG4gICAgICAgICAgbGFzdF9iaXRzID0gaGVyZV9iaXRzO1xuICAgICAgICAgIGxhc3Rfb3AgPSBoZXJlX29wO1xuICAgICAgICAgIGxhc3RfdmFsID0gaGVyZV92YWw7XG4gICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmxlbmNvZGVbbGFzdF92YWwgK1xuICAgICAgICAgICAgICAgICAgICAoKGhvbGQgJiAoKDEgPDwgKGxhc3RfYml0cyArIGxhc3Rfb3ApKSAtIDEpKS8qQklUUyhsYXN0LmJpdHMgKyBsYXN0Lm9wKSovID4+IGxhc3RfYml0cyldO1xuICAgICAgICAgICAgaGVyZV9iaXRzID0gaGVyZSA+Pj4gMjQ7XG4gICAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICAgIGlmICgobGFzdF9iaXRzICsgaGVyZV9iaXRzKSA8PSBiaXRzKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLy0tLSBEUk9QQklUUyhsYXN0LmJpdHMpIC0tLS8vXG4gICAgICAgICAgaG9sZCA+Pj49IGxhc3RfYml0cztcbiAgICAgICAgICBiaXRzIC09IGxhc3RfYml0cztcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgc3RhdGUuYmFjayArPSBsYXN0X2JpdHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gaGVyZV9iaXRzO1xuICAgICAgICBiaXRzIC09IGhlcmVfYml0cztcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBzdGF0ZS5iYWNrICs9IGhlcmVfYml0cztcbiAgICAgICAgc3RhdGUubGVuZ3RoID0gaGVyZV92YWw7XG4gICAgICAgIGlmIChoZXJlX29wID09PSAwKSB7XG4gICAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIGhlcmUudmFsID49IDB4MjAgJiYgaGVyZS52YWwgPCAweDdmID9cbiAgICAgICAgICAvLyAgICAgICAgXCJpbmZsYXRlOiAgICAgICAgIGxpdGVyYWwgJyVjJ1xcblwiIDpcbiAgICAgICAgICAvLyAgICAgICAgXCJpbmZsYXRlOiAgICAgICAgIGxpdGVyYWwgMHglMDJ4XFxuXCIsIGhlcmUudmFsKSk7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IExJVDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVyZV9vcCAmIDMyKSB7XG4gICAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBlbmQgb2YgYmxvY2tcXG5cIikpO1xuICAgICAgICAgIHN0YXRlLmJhY2sgPSAtMTtcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVyZV9vcCAmIDY0KSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmV4dHJhID0gaGVyZV9vcCAmIDE1O1xuICAgICAgICBzdGF0ZS5tb2RlID0gTEVORVhUO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTkVYVDpcbiAgICAgICAgaWYgKHN0YXRlLmV4dHJhKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoc3RhdGUuZXh0cmEpO1xuICAgICAgICAgIG4gPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICB3aGlsZSAoYml0cyA8IG4pIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5sZW5ndGggKz0gaG9sZCAmICgoMSA8PCBzdGF0ZS5leHRyYSkgLSAxKS8qQklUUyhzdGF0ZS5leHRyYSkqLztcbiAgICAgICAgICAvLy0tLSBEUk9QQklUUyhzdGF0ZS5leHRyYSkgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgYml0cyAtPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgc3RhdGUuYmFjayArPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgfVxuICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGxlbmd0aCAldVxcblwiLCBzdGF0ZS5sZW5ndGgpKTtcbiAgICAgICAgc3RhdGUud2FzID0gc3RhdGUubGVuZ3RoO1xuICAgICAgICBzdGF0ZS5tb2RlID0gRElTVDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBESVNUOlxuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgaGVyZSA9IHN0YXRlLmRpc3Rjb2RlW2hvbGQgJiAoKDEgPDwgc3RhdGUuZGlzdGJpdHMpIC0gMSldOy8qQklUUyhzdGF0ZS5kaXN0Yml0cykqL1xuICAgICAgICAgIGhlcmVfYml0cyA9IGhlcmUgPj4+IDI0O1xuICAgICAgICAgIGhlcmVfb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICBpZiAoKGhlcmVfYml0cykgPD0gYml0cykgeyBicmVhazsgfVxuICAgICAgICAgIC8vLS0tIFBVTExCWVRFKCkgLS0tLy9cbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGhlcmVfb3AgJiAweGYwKSA9PT0gMCkge1xuICAgICAgICAgIGxhc3RfYml0cyA9IGhlcmVfYml0cztcbiAgICAgICAgICBsYXN0X29wID0gaGVyZV9vcDtcbiAgICAgICAgICBsYXN0X3ZhbCA9IGhlcmVfdmFsO1xuICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5kaXN0Y29kZVtsYXN0X3ZhbCArXG4gICAgICAgICAgICAgICAgICAgICgoaG9sZCAmICgoMSA8PCAobGFzdF9iaXRzICsgbGFzdF9vcCkpIC0gMSkpLypCSVRTKGxhc3QuYml0cyArIGxhc3Qub3ApKi8gPj4gbGFzdF9iaXRzKV07XG4gICAgICAgICAgICBoZXJlX2JpdHMgPSBoZXJlID4+PiAyNDtcbiAgICAgICAgICAgIGhlcmVfb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGhlcmVfdmFsID0gaGVyZSAmIDB4ZmZmZjtcblxuICAgICAgICAgICAgaWYgKChsYXN0X2JpdHMgKyBoZXJlX2JpdHMpIDw9IGJpdHMpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIC8vLS0tIFBVTExCWVRFKCkgLS0tLy9cbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vLS0tIERST1BCSVRTKGxhc3QuYml0cykgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gbGFzdF9iaXRzO1xuICAgICAgICAgIGJpdHMgLT0gbGFzdF9iaXRzO1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBzdGF0ZS5iYWNrICs9IGxhc3RfYml0cztcbiAgICAgICAgfVxuICAgICAgICAvLy0tLSBEUk9QQklUUyhoZXJlLmJpdHMpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSBoZXJlX2JpdHM7XG4gICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIHN0YXRlLmJhY2sgKz0gaGVyZV9iaXRzO1xuICAgICAgICBpZiAoaGVyZV9vcCAmIDY0KSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZSBjb2RlJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm9mZnNldCA9IGhlcmVfdmFsO1xuICAgICAgICBzdGF0ZS5leHRyYSA9IChoZXJlX29wKSAmIDE1O1xuICAgICAgICBzdGF0ZS5tb2RlID0gRElTVEVYVDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBESVNURVhUOlxuICAgICAgICBpZiAoc3RhdGUuZXh0cmEpIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUyhzdGF0ZS5leHRyYSk7XG4gICAgICAgICAgbiA9IHN0YXRlLmV4dHJhO1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgbikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIHN0YXRlLm9mZnNldCArPSBob2xkICYgKCgxIDw8IHN0YXRlLmV4dHJhKSAtIDEpLypCSVRTKHN0YXRlLmV4dHJhKSovO1xuICAgICAgICAgIC8vLS0tIERST1BCSVRTKHN0YXRlLmV4dHJhKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICBiaXRzIC09IHN0YXRlLmV4dHJhO1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBzdGF0ZS5iYWNrICs9IHN0YXRlLmV4dHJhO1xuICAgICAgICB9XG4vLyNpZmRlZiBJTkZMQVRFX1NUUklDVFxuICAgICAgICBpZiAoc3RhdGUub2Zmc2V0ID4gc3RhdGUuZG1heCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4vLyNlbmRpZlxuICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGRpc3RhbmNlICV1XFxuXCIsIHN0YXRlLm9mZnNldCkpO1xuICAgICAgICBzdGF0ZS5tb2RlID0gTUFUQ0g7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTUFUQ0g6XG4gICAgICAgIGlmIChsZWZ0ID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICBjb3B5ID0gX291dCAtIGxlZnQ7XG4gICAgICAgIGlmIChzdGF0ZS5vZmZzZXQgPiBjb3B5KSB7ICAgICAgICAgLyogY29weSBmcm9tIHdpbmRvdyAqL1xuICAgICAgICAgIGNvcHkgPSBzdGF0ZS5vZmZzZXQgLSBjb3B5O1xuICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUud2hhdmUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zYW5lKSB7XG4gICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrJztcbiAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4vLyAoISkgVGhpcyBibG9jayBpcyBkaXNhYmxlZCBpbiB6bGliIGRlZmF1bHRzLFxuLy8gZG9uJ3QgZW5hYmxlIGl0IGZvciBiaW5hcnkgY29tcGF0aWJpbGl0eVxuLy8jaWZkZWYgSU5GTEFURV9BTExPV19JTlZBTElEX0RJU1RBTkNFX1RPT0ZBUl9BUlJSXG4vLyAgICAgICAgICBUcmFjZSgoc3RkZXJyLCBcImluZmxhdGUuYyB0b28gZmFyXFxuXCIpKTtcbi8vICAgICAgICAgIGNvcHkgLT0gc3RhdGUud2hhdmU7XG4vLyAgICAgICAgICBpZiAoY29weSA+IHN0YXRlLmxlbmd0aCkgeyBjb3B5ID0gc3RhdGUubGVuZ3RoOyB9XG4vLyAgICAgICAgICBpZiAoY29weSA+IGxlZnQpIHsgY29weSA9IGxlZnQ7IH1cbi8vICAgICAgICAgIGxlZnQgLT0gY29weTtcbi8vICAgICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xuLy8gICAgICAgICAgZG8ge1xuLy8gICAgICAgICAgICBvdXRwdXRbcHV0KytdID0gMDtcbi8vICAgICAgICAgIH0gd2hpbGUgKC0tY29weSk7XG4vLyAgICAgICAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7IHN0YXRlLm1vZGUgPSBMRU47IH1cbi8vICAgICAgICAgIGJyZWFrO1xuLy8jZW5kaWZcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvcHkgPiBzdGF0ZS53bmV4dCkge1xuICAgICAgICAgICAgY29weSAtPSBzdGF0ZS53bmV4dDtcbiAgICAgICAgICAgIGZyb20gPSBzdGF0ZS53c2l6ZSAtIGNvcHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZnJvbSA9IHN0YXRlLnduZXh0IC0gY29weTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvcHkgPiBzdGF0ZS5sZW5ndGgpIHsgY29weSA9IHN0YXRlLmxlbmd0aDsgfVxuICAgICAgICAgIGZyb21fc291cmNlID0gc3RhdGUud2luZG93O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGNvcHkgZnJvbSBvdXRwdXQgKi9cbiAgICAgICAgICBmcm9tX3NvdXJjZSA9IG91dHB1dDtcbiAgICAgICAgICBmcm9tID0gcHV0IC0gc3RhdGUub2Zmc2V0O1xuICAgICAgICAgIGNvcHkgPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvcHkgPiBsZWZ0KSB7IGNvcHkgPSBsZWZ0OyB9XG4gICAgICAgIGxlZnQgLT0gY29weTtcbiAgICAgICAgc3RhdGUubGVuZ3RoIC09IGNvcHk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBvdXRwdXRbcHV0KytdID0gZnJvbV9zb3VyY2VbZnJvbSsrXTtcbiAgICAgICAgfSB3aGlsZSAoLS1jb3B5KTtcbiAgICAgICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgeyBzdGF0ZS5tb2RlID0gTEVOOyB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSVQ6XG4gICAgICAgIGlmIChsZWZ0ID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICBvdXRwdXRbcHV0KytdID0gc3RhdGUubGVuZ3RoO1xuICAgICAgICBsZWZ0LS07XG4gICAgICAgIHN0YXRlLm1vZGUgPSBMRU47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEVDSzpcbiAgICAgICAgaWYgKHN0YXRlLndyYXApIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygzMik7XG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICAvLyBVc2UgJ3wnIGluc3RlYWQgb2YgJysnIHRvIG1ha2Ugc3VyZSB0aGF0IHJlc3VsdCBpcyBzaWduZWRcbiAgICAgICAgICAgIGhvbGQgfD0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgX291dCAtPSBsZWZ0O1xuICAgICAgICAgIHN0cm0udG90YWxfb3V0ICs9IF9vdXQ7XG4gICAgICAgICAgc3RhdGUudG90YWwgKz0gX291dDtcbiAgICAgICAgICBpZiAoKHN0YXRlLndyYXAgJiA0KSAmJiBfb3V0KSB7XG4gICAgICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPVxuICAgICAgICAgICAgICAgIC8qVVBEQVRFX0NIRUNLKHN0YXRlLmNoZWNrLCBwdXQgLSBfb3V0LCBfb3V0KTsqL1xuICAgICAgICAgICAgICAgIChzdGF0ZS5mbGFncyA/IGNyYzMyXzEoc3RhdGUuY2hlY2ssIG91dHB1dCwgX291dCwgcHV0IC0gX291dCkgOiBhZGxlcjMyXzEoc3RhdGUuY2hlY2ssIG91dHB1dCwgX291dCwgcHV0IC0gX291dCkpO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIF9vdXQgPSBsZWZ0O1xuICAgICAgICAgIC8vIE5COiBjcmMzMiBzdG9yZWQgYXMgc2lnbmVkIDMyLWJpdCBpbnQsIHpzd2FwMzIgcmV0dXJucyBzaWduZWQgdG9vXG4gICAgICAgICAgaWYgKChzdGF0ZS53cmFwICYgNCkgJiYgKHN0YXRlLmZsYWdzID8gaG9sZCA6IHpzd2FwMzIoaG9sZCkpICE9PSBzdGF0ZS5jaGVjaykge1xuICAgICAgICAgICAgc3RybS5tc2cgPSAnaW5jb3JyZWN0IGRhdGEgY2hlY2snO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICAgIGhvbGQgPSAwO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgY2hlY2sgbWF0Y2hlcyB0cmFpbGVyXFxuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOR1RIO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTkdUSDpcbiAgICAgICAgaWYgKHN0YXRlLndyYXAgJiYgc3RhdGUuZmxhZ3MpIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygzMik7XG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIGlmICgoc3RhdGUud3JhcCAmIDQpICYmIGhvbGQgIT09IChzdGF0ZS50b3RhbCAmIDB4ZmZmZmZmZmYpKSB7XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrJztcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgIGxlbmd0aCBtYXRjaGVzIHRyYWlsZXJcXG5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm1vZGUgPSBET05FO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIERPTkU6XG4gICAgICAgIHJldCA9IFpfU1RSRUFNX0VORCQxO1xuICAgICAgICBicmVhayBpbmZfbGVhdmU7XG4gICAgICBjYXNlIEJBRDpcbiAgICAgICAgcmV0ID0gWl9EQVRBX0VSUk9SJDE7XG4gICAgICAgIGJyZWFrIGluZl9sZWF2ZTtcbiAgICAgIGNhc2UgTUVNOlxuICAgICAgICByZXR1cm4gWl9NRU1fRVJST1IkMTtcbiAgICAgIGNhc2UgU1lOQzpcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SJDE7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5mX2xlYXZlIDwtIGhlcmUgaXMgcmVhbCBwbGFjZSBmb3IgXCJnb3RvIGluZl9sZWF2ZVwiLCBlbXVsYXRlZCB2aWEgXCJicmVhayBpbmZfbGVhdmVcIlxuXG4gIC8qXG4gICAgIFJldHVybiBmcm9tIGluZmxhdGUoKSwgdXBkYXRpbmcgdGhlIHRvdGFsIGNvdW50cyBhbmQgdGhlIGNoZWNrIHZhbHVlLlxuICAgICBJZiB0aGVyZSB3YXMgbm8gcHJvZ3Jlc3MgZHVyaW5nIHRoZSBpbmZsYXRlKCkgY2FsbCwgcmV0dXJuIGEgYnVmZmVyXG4gICAgIGVycm9yLiAgQ2FsbCB1cGRhdGV3aW5kb3coKSB0byBjcmVhdGUgYW5kL29yIHVwZGF0ZSB0aGUgd2luZG93IHN0YXRlLlxuICAgICBOb3RlOiBhIG1lbW9yeSBlcnJvciBmcm9tIGluZmxhdGUoKSBpcyBub24tcmVjb3ZlcmFibGUuXG4gICAqL1xuXG4gIC8vLS0tIFJFU1RPUkUoKSAtLS1cbiAgc3RybS5uZXh0X291dCA9IHB1dDtcbiAgc3RybS5hdmFpbF9vdXQgPSBsZWZ0O1xuICBzdHJtLm5leHRfaW4gPSBuZXh0O1xuICBzdHJtLmF2YWlsX2luID0gaGF2ZTtcbiAgc3RhdGUuaG9sZCA9IGhvbGQ7XG4gIHN0YXRlLmJpdHMgPSBiaXRzO1xuICAvLy0tLVxuXG4gIGlmIChzdGF0ZS53c2l6ZSB8fCAoX291dCAhPT0gc3RybS5hdmFpbF9vdXQgJiYgc3RhdGUubW9kZSA8IEJBRCAmJlxuICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tb2RlIDwgQ0hFQ0sgfHwgZmx1c2ggIT09IFpfRklOSVNIJDEpKSkge1xuICAgIGlmICh1cGRhdGV3aW5kb3coc3RybSwgc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQsIF9vdXQgLSBzdHJtLmF2YWlsX291dCkpIDtcbiAgfVxuICBfaW4gLT0gc3RybS5hdmFpbF9pbjtcbiAgX291dCAtPSBzdHJtLmF2YWlsX291dDtcbiAgc3RybS50b3RhbF9pbiArPSBfaW47XG4gIHN0cm0udG90YWxfb3V0ICs9IF9vdXQ7XG4gIHN0YXRlLnRvdGFsICs9IF9vdXQ7XG4gIGlmICgoc3RhdGUud3JhcCAmIDQpICYmIF9vdXQpIHtcbiAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSAvKlVQREFURV9DSEVDSyhzdGF0ZS5jaGVjaywgc3RybS5uZXh0X291dCAtIF9vdXQsIF9vdXQpOyovXG4gICAgICAoc3RhdGUuZmxhZ3MgPyBjcmMzMl8xKHN0YXRlLmNoZWNrLCBvdXRwdXQsIF9vdXQsIHN0cm0ubmV4dF9vdXQgLSBfb3V0KSA6IGFkbGVyMzJfMShzdGF0ZS5jaGVjaywgb3V0cHV0LCBfb3V0LCBzdHJtLm5leHRfb3V0IC0gX291dCkpO1xuICB9XG4gIHN0cm0uZGF0YV90eXBlID0gc3RhdGUuYml0cyArIChzdGF0ZS5sYXN0ID8gNjQgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tb2RlID09PSBUWVBFID8gMTI4IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAoc3RhdGUubW9kZSA9PT0gTEVOXyB8fCBzdGF0ZS5tb2RlID09PSBDT1BZXyA/IDI1NiA6IDApO1xuICBpZiAoKChfaW4gPT09IDAgJiYgX291dCA9PT0gMCkgfHwgZmx1c2ggPT09IFpfRklOSVNIJDEpICYmIHJldCA9PT0gWl9PSyQxKSB7XG4gICAgcmV0ID0gWl9CVUZfRVJST1I7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cblxuY29uc3QgaW5mbGF0ZUVuZCA9IChzdHJtKSA9PiB7XG5cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SJDE7XG4gIH1cblxuICBsZXQgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICBpZiAoc3RhdGUud2luZG93KSB7XG4gICAgc3RhdGUud2luZG93ID0gbnVsbDtcbiAgfVxuICBzdHJtLnN0YXRlID0gbnVsbDtcbiAgcmV0dXJuIFpfT0skMTtcbn07XG5cblxuY29uc3QgaW5mbGF0ZUdldEhlYWRlciA9IChzdHJtLCBoZWFkKSA9PiB7XG5cbiAgLyogY2hlY2sgc3RhdGUgKi9cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUiQxOyB9XG4gIGNvbnN0IHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgaWYgKChzdGF0ZS53cmFwICYgMikgPT09IDApIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SJDE7IH1cblxuICAvKiBzYXZlIGhlYWRlciBzdHJ1Y3R1cmUgKi9cbiAgc3RhdGUuaGVhZCA9IGhlYWQ7XG4gIGhlYWQuZG9uZSA9IGZhbHNlO1xuICByZXR1cm4gWl9PSyQxO1xufTtcblxuXG5jb25zdCBpbmZsYXRlU2V0RGljdGlvbmFyeSA9IChzdHJtLCBkaWN0aW9uYXJ5KSA9PiB7XG4gIGNvbnN0IGRpY3RMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcblxuICBsZXQgc3RhdGU7XG4gIGxldCBkaWN0aWQ7XG4gIGxldCByZXQ7XG5cbiAgLyogY2hlY2sgc3RhdGUgKi9cbiAgaWYgKGluZmxhdGVTdGF0ZUNoZWNrKHN0cm0pKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUiQxOyB9XG4gIHN0YXRlID0gc3RybS5zdGF0ZTtcblxuICBpZiAoc3RhdGUud3JhcCAhPT0gMCAmJiBzdGF0ZS5tb2RlICE9PSBESUNUKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SJDE7XG4gIH1cblxuICAvKiBjaGVjayBmb3IgY29ycmVjdCBkaWN0aW9uYXJ5IGlkZW50aWZpZXIgKi9cbiAgaWYgKHN0YXRlLm1vZGUgPT09IERJQ1QpIHtcbiAgICBkaWN0aWQgPSAxOyAvKiBhZGxlcjMyKDAsIG51bGwsIDApKi9cbiAgICAvKiBkaWN0aWQgPSBhZGxlcjMyKGRpY3RpZCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCk7ICovXG4gICAgZGljdGlkID0gYWRsZXIzMl8xKGRpY3RpZCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCwgMCk7XG4gICAgaWYgKGRpY3RpZCAhPT0gc3RhdGUuY2hlY2spIHtcbiAgICAgIHJldHVybiBaX0RBVEFfRVJST1IkMTtcbiAgICB9XG4gIH1cbiAgLyogY29weSBkaWN0aW9uYXJ5IHRvIHdpbmRvdyB1c2luZyB1cGRhdGV3aW5kb3coKSwgd2hpY2ggd2lsbCBhbWVuZCB0aGVcbiAgIGV4aXN0aW5nIGRpY3Rpb25hcnkgaWYgYXBwcm9wcmlhdGUgKi9cbiAgcmV0ID0gdXBkYXRld2luZG93KHN0cm0sIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgsIGRpY3RMZW5ndGgpO1xuICBpZiAocmV0KSB7XG4gICAgc3RhdGUubW9kZSA9IE1FTTtcbiAgICByZXR1cm4gWl9NRU1fRVJST1IkMTtcbiAgfVxuICBzdGF0ZS5oYXZlZGljdCA9IDE7XG4gIC8vIFRyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgZGljdGlvbmFyeSBzZXRcXG5cIikpO1xuICByZXR1cm4gWl9PSyQxO1xufTtcblxuXG52YXIgaW5mbGF0ZVJlc2V0XzEgPSBpbmZsYXRlUmVzZXQ7XG52YXIgaW5mbGF0ZVJlc2V0Ml8xID0gaW5mbGF0ZVJlc2V0MjtcbnZhciBpbmZsYXRlUmVzZXRLZWVwXzEgPSBpbmZsYXRlUmVzZXRLZWVwO1xudmFyIGluZmxhdGVJbml0XzEgPSBpbmZsYXRlSW5pdDtcbnZhciBpbmZsYXRlSW5pdDJfMSA9IGluZmxhdGVJbml0MjtcbnZhciBpbmZsYXRlXzIkMSA9IGluZmxhdGUkMjtcbnZhciBpbmZsYXRlRW5kXzEgPSBpbmZsYXRlRW5kO1xudmFyIGluZmxhdGVHZXRIZWFkZXJfMSA9IGluZmxhdGVHZXRIZWFkZXI7XG52YXIgaW5mbGF0ZVNldERpY3Rpb25hcnlfMSA9IGluZmxhdGVTZXREaWN0aW9uYXJ5O1xudmFyIGluZmxhdGVJbmZvID0gJ3Bha28gaW5mbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdCknO1xuXG4vKiBOb3QgaW1wbGVtZW50ZWRcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVDb2Rlc1VzZWQgPSBpbmZsYXRlQ29kZXNVc2VkO1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZUNvcHkgPSBpbmZsYXRlQ29weTtcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVHZXREaWN0aW9uYXJ5ID0gaW5mbGF0ZUdldERpY3Rpb25hcnk7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlTWFyayA9IGluZmxhdGVNYXJrO1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZVByaW1lID0gaW5mbGF0ZVByaW1lO1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZVN5bmMgPSBpbmZsYXRlU3luYztcbm1vZHVsZS5leHBvcnRzLmluZmxhdGVTeW5jUG9pbnQgPSBpbmZsYXRlU3luY1BvaW50O1xubW9kdWxlLmV4cG9ydHMuaW5mbGF0ZVVuZGVybWluZSA9IGluZmxhdGVVbmRlcm1pbmU7XG5tb2R1bGUuZXhwb3J0cy5pbmZsYXRlVmFsaWRhdGUgPSBpbmZsYXRlVmFsaWRhdGU7XG4qL1xuXG52YXIgaW5mbGF0ZV8xJDIgPSB7XG5cdGluZmxhdGVSZXNldDogaW5mbGF0ZVJlc2V0XzEsXG5cdGluZmxhdGVSZXNldDI6IGluZmxhdGVSZXNldDJfMSxcblx0aW5mbGF0ZVJlc2V0S2VlcDogaW5mbGF0ZVJlc2V0S2VlcF8xLFxuXHRpbmZsYXRlSW5pdDogaW5mbGF0ZUluaXRfMSxcblx0aW5mbGF0ZUluaXQyOiBpbmZsYXRlSW5pdDJfMSxcblx0aW5mbGF0ZTogaW5mbGF0ZV8yJDEsXG5cdGluZmxhdGVFbmQ6IGluZmxhdGVFbmRfMSxcblx0aW5mbGF0ZUdldEhlYWRlcjogaW5mbGF0ZUdldEhlYWRlcl8xLFxuXHRpbmZsYXRlU2V0RGljdGlvbmFyeTogaW5mbGF0ZVNldERpY3Rpb25hcnlfMSxcblx0aW5mbGF0ZUluZm86IGluZmxhdGVJbmZvXG59O1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmZ1bmN0aW9uIEdaaGVhZGVyKCkge1xuICAvKiB0cnVlIGlmIGNvbXByZXNzZWQgZGF0YSBiZWxpZXZlZCB0byBiZSB0ZXh0ICovXG4gIHRoaXMudGV4dCAgICAgICA9IDA7XG4gIC8qIG1vZGlmaWNhdGlvbiB0aW1lICovXG4gIHRoaXMudGltZSAgICAgICA9IDA7XG4gIC8qIGV4dHJhIGZsYWdzIChub3QgdXNlZCB3aGVuIHdyaXRpbmcgYSBnemlwIGZpbGUpICovXG4gIHRoaXMueGZsYWdzICAgICA9IDA7XG4gIC8qIG9wZXJhdGluZyBzeXN0ZW0gKi9cbiAgdGhpcy5vcyAgICAgICAgID0gMDtcbiAgLyogcG9pbnRlciB0byBleHRyYSBmaWVsZCBvciBaX05VTEwgaWYgbm9uZSAqL1xuICB0aGlzLmV4dHJhICAgICAgPSBudWxsO1xuICAvKiBleHRyYSBmaWVsZCBsZW5ndGggKHZhbGlkIGlmIGV4dHJhICE9IFpfTlVMTCkgKi9cbiAgdGhpcy5leHRyYV9sZW4gID0gMDsgLy8gQWN0dWFsbHksIHdlIGRvbid0IG5lZWQgaXQgaW4gSlMsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBsZWF2ZSBmb3IgZmV3IGNvZGUgbW9kaWZpY2F0aW9uc1xuXG4gIC8vXG4gIC8vIFNldHVwIGxpbWl0cyBpcyBub3QgbmVjZXNzYXJ5IGJlY2F1c2UgaW4ganMgd2Ugc2hvdWxkIG5vdCBwcmVhbGxvY2F0ZSBtZW1vcnlcbiAgLy8gZm9yIGluZmxhdGUgdXNlIGNvbnN0YW50IGxpbWl0IGluIDY1NTM2IGJ5dGVzXG4gIC8vXG5cbiAgLyogc3BhY2UgYXQgZXh0cmEgKG9ubHkgd2hlbiByZWFkaW5nIGhlYWRlcikgKi9cbiAgLy8gdGhpcy5leHRyYV9tYXggID0gMDtcbiAgLyogcG9pbnRlciB0byB6ZXJvLXRlcm1pbmF0ZWQgZmlsZSBuYW1lIG9yIFpfTlVMTCAqL1xuICB0aGlzLm5hbWUgICAgICAgPSAnJztcbiAgLyogc3BhY2UgYXQgbmFtZSAob25seSB3aGVuIHJlYWRpbmcgaGVhZGVyKSAqL1xuICAvLyB0aGlzLm5hbWVfbWF4ICAgPSAwO1xuICAvKiBwb2ludGVyIHRvIHplcm8tdGVybWluYXRlZCBjb21tZW50IG9yIFpfTlVMTCAqL1xuICB0aGlzLmNvbW1lbnQgICAgPSAnJztcbiAgLyogc3BhY2UgYXQgY29tbWVudCAob25seSB3aGVuIHJlYWRpbmcgaGVhZGVyKSAqL1xuICAvLyB0aGlzLmNvbW1fbWF4ICAgPSAwO1xuICAvKiB0cnVlIGlmIHRoZXJlIHdhcyBvciB3aWxsIGJlIGEgaGVhZGVyIGNyYyAqL1xuICB0aGlzLmhjcmMgICAgICAgPSAwO1xuICAvKiB0cnVlIHdoZW4gZG9uZSByZWFkaW5nIGd6aXAgaGVhZGVyIChub3QgdXNlZCB3aGVuIHdyaXRpbmcgYSBnemlwIGZpbGUpICovXG4gIHRoaXMuZG9uZSAgICAgICA9IGZhbHNlO1xufVxuXG52YXIgZ3poZWFkZXIgPSBHWmhlYWRlcjtcblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuY29uc3Qge1xuICBaX05PX0ZMVVNILCBaX0ZJTklTSCxcbiAgWl9PSywgWl9TVFJFQU1fRU5ELCBaX05FRURfRElDVCwgWl9TVFJFQU1fRVJST1IsIFpfREFUQV9FUlJPUiwgWl9NRU1fRVJST1Jcbn0gPSBjb25zdGFudHMkMjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vKipcbiAqIGNsYXNzIEluZmxhdGVcbiAqXG4gKiBHZW5lcmljIEpTLXN0eWxlIHdyYXBwZXIgZm9yIHpsaWIgY2FsbHMuIElmIHlvdSBkb24ndCBuZWVkXG4gKiBzdHJlYW1pbmcgYmVoYXZpb3VyIC0gdXNlIG1vcmUgc2ltcGxlIGZ1bmN0aW9uczogW1tpbmZsYXRlXV1cbiAqIGFuZCBbW2luZmxhdGVSYXddXS5cbiAqKi9cblxuLyogaW50ZXJuYWxcbiAqIGluZmxhdGUuY2h1bmtzIC0+IEFycmF5XG4gKlxuICogQ2h1bmtzIG9mIG91dHB1dCBkYXRhLCBpZiBbW0luZmxhdGUjb25EYXRhXV0gbm90IG92ZXJyaWRkZW4uXG4gKiovXG5cbi8qKlxuICogSW5mbGF0ZS5yZXN1bHQgLT4gVWludDhBcnJheXxTdHJpbmdcbiAqXG4gKiBVbmNvbXByZXNzZWQgcmVzdWx0LCBnZW5lcmF0ZWQgYnkgZGVmYXVsdCBbW0luZmxhdGUjb25EYXRhXV1cbiAqIGFuZCBbW0luZmxhdGUjb25FbmRdXSBoYW5kbGVycy4gRmlsbGVkIGFmdGVyIHlvdSBwdXNoIGxhc3QgY2h1bmtcbiAqIChjYWxsIFtbSW5mbGF0ZSNwdXNoXV0gd2l0aCBgWl9GSU5JU0hgIC8gYHRydWVgIHBhcmFtKS5cbiAqKi9cblxuLyoqXG4gKiBJbmZsYXRlLmVyciAtPiBOdW1iZXJcbiAqXG4gKiBFcnJvciBjb2RlIGFmdGVyIGluZmxhdGUgZmluaXNoZWQuIDAgKFpfT0spIG9uIHN1Y2Nlc3MuXG4gKiBTaG91bGQgYmUgY2hlY2tlZCBpZiBicm9rZW4gZGF0YSBwb3NzaWJsZS5cbiAqKi9cblxuLyoqXG4gKiBJbmZsYXRlLm1zZyAtPiBTdHJpbmdcbiAqXG4gKiBFcnJvciBtZXNzYWdlLCBpZiBbW0luZmxhdGUuZXJyXV0gIT0gMFxuICoqL1xuXG5cbi8qKlxuICogbmV3IEluZmxhdGUob3B0aW9ucylcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBpbmZsYXRlIG9wdGlvbnMuXG4gKlxuICogQ3JlYXRlcyBuZXcgaW5mbGF0b3IgaW5zdGFuY2Ugd2l0aCBzcGVjaWZpZWQgcGFyYW1zLiBUaHJvd3MgZXhjZXB0aW9uXG4gKiBvbiBiYWQgcGFyYW1zLiBTdXBwb3J0ZWQgb3B0aW9uczpcbiAqXG4gKiAtIGB3aW5kb3dCaXRzYFxuICogLSBgZGljdGlvbmFyeWBcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGVzZS5cbiAqXG4gKiBBZGRpdGlvbmFsIG9wdGlvbnMsIGZvciBpbnRlcm5hbCBuZWVkczpcbiAqXG4gKiAtIGBjaHVua1NpemVgIC0gc2l6ZSBvZiBnZW5lcmF0ZWQgZGF0YSBjaHVua3MgKDE2SyBieSBkZWZhdWx0KVxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBkbyByYXcgaW5mbGF0ZVxuICogLSBgdG9gIChTdHJpbmcpIC0gaWYgZXF1YWwgdG8gJ3N0cmluZycsIHRoZW4gcmVzdWx0IHdpbGwgYmUgY29udmVydGVkXG4gKiAgIGZyb20gdXRmOCB0byB1dGYxNiAoamF2YXNjcmlwdCkgc3RyaW5nLiBXaGVuIHN0cmluZyBvdXRwdXQgcmVxdWVzdGVkLFxuICogICBjaHVuayBsZW5ndGggY2FuIGRpZmZlciBmcm9tIGBjaHVua1NpemVgLCBkZXBlbmRpbmcgb24gY29udGVudC5cbiAqXG4gKiBCeSBkZWZhdWx0LCB3aGVuIG5vIG9wdGlvbnMgc2V0LCBhdXRvZGV0ZWN0IGRlZmxhdGUvZ3ppcCBkYXRhIGZvcm1hdCB2aWFcbiAqIHdyYXBwZXIgaGVhZGVyLlxuICpcbiAqICMjIyMjIEV4YW1wbGU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgcGFrbyA9IHJlcXVpcmUoJ3Bha28nKVxuICogY29uc3QgY2h1bmsxID0gbmV3IFVpbnQ4QXJyYXkoWzEsMiwzLDQsNSw2LDcsOCw5XSlcbiAqIGNvbnN0IGNodW5rMiA9IG5ldyBVaW50OEFycmF5KFsxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOV0pO1xuICpcbiAqIGNvbnN0IGluZmxhdGUgPSBuZXcgcGFrby5JbmZsYXRlKHsgbGV2ZWw6IDN9KTtcbiAqXG4gKiBpbmZsYXRlLnB1c2goY2h1bmsxLCBmYWxzZSk7XG4gKiBpbmZsYXRlLnB1c2goY2h1bmsyLCB0cnVlKTsgIC8vIHRydWUgLT4gbGFzdCBjaHVua1xuICpcbiAqIGlmIChpbmZsYXRlLmVycikgeyB0aHJvdyBuZXcgRXJyb3IoaW5mbGF0ZS5lcnIpOyB9XG4gKlxuICogY29uc29sZS5sb2coaW5mbGF0ZS5yZXN1bHQpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBJbmZsYXRlJDEob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBjb21tb24uYXNzaWduKHtcbiAgICBjaHVua1NpemU6IDEwMjQgKiA2NCxcbiAgICB3aW5kb3dCaXRzOiAxNSxcbiAgICB0bzogJydcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgY29uc3Qgb3B0ID0gdGhpcy5vcHRpb25zO1xuXG4gIC8vIEZvcmNlIHdpbmRvdyBzaXplIGZvciBgcmF3YCBkYXRhLCBpZiBub3Qgc2V0IGRpcmVjdGx5LFxuICAvLyBiZWNhdXNlIHdlIGhhdmUgbm8gaGVhZGVyIGZvciBhdXRvZGV0ZWN0LlxuICBpZiAob3B0LnJhdyAmJiAob3B0LndpbmRvd0JpdHMgPj0gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgPSAtb3B0LndpbmRvd0JpdHM7XG4gICAgaWYgKG9wdC53aW5kb3dCaXRzID09PSAwKSB7IG9wdC53aW5kb3dCaXRzID0gLTE1OyB9XG4gIH1cblxuICAvLyBJZiBgd2luZG93Qml0c2Agbm90IGRlZmluZWQgKGFuZCBtb2RlIG5vdCByYXcpIC0gc2V0IGF1dG9kZXRlY3QgZmxhZyBmb3IgZ3ppcC9kZWZsYXRlXG4gIGlmICgob3B0LndpbmRvd0JpdHMgPj0gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpICYmXG4gICAgICAhKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3dCaXRzKSkge1xuICAgIG9wdC53aW5kb3dCaXRzICs9IDMyO1xuICB9XG5cbiAgLy8gR3ppcCBoZWFkZXIgaGFzIG5vIGluZm8gYWJvdXQgd2luZG93cyBzaXplLCB3ZSBjYW4gZG8gYXV0b2RldGVjdCBvbmx5XG4gIC8vIGZvciBkZWZsYXRlLiBTbywgaWYgd2luZG93IHNpemUgbm90IHNldCwgZm9yY2UgaXQgdG8gbWF4IHdoZW4gZ3ppcCBwb3NzaWJsZVxuICBpZiAoKG9wdC53aW5kb3dCaXRzID4gMTUpICYmIChvcHQud2luZG93Qml0cyA8IDQ4KSkge1xuICAgIC8vIGJpdCAzICgxNikgLT4gZ3ppcHBlZCBkYXRhXG4gICAgLy8gYml0IDQgKDMyKSAtPiBhdXRvZGV0ZWN0IGd6aXAvZGVmbGF0ZVxuICAgIGlmICgob3B0LndpbmRvd0JpdHMgJiAxNSkgPT09IDApIHtcbiAgICAgIG9wdC53aW5kb3dCaXRzIHw9IDE1O1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuZXJyICAgID0gMDsgICAgICAvLyBlcnJvciBjb2RlLCBpZiBoYXBwZW5zICgwID0gWl9PSylcbiAgdGhpcy5tc2cgICAgPSAnJzsgICAgIC8vIGVycm9yIG1lc3NhZ2VcbiAgdGhpcy5lbmRlZCAgPSBmYWxzZTsgIC8vIHVzZWQgdG8gYXZvaWQgbXVsdGlwbGUgb25FbmQoKSBjYWxsc1xuICB0aGlzLmNodW5rcyA9IFtdOyAgICAgLy8gY2h1bmtzIG9mIGNvbXByZXNzZWQgZGF0YVxuXG4gIHRoaXMuc3RybSAgID0gbmV3IHpzdHJlYW0oKTtcbiAgdGhpcy5zdHJtLmF2YWlsX291dCA9IDA7XG5cbiAgbGV0IHN0YXR1cyAgPSBpbmZsYXRlXzEkMi5pbmZsYXRlSW5pdDIoXG4gICAgdGhpcy5zdHJtLFxuICAgIG9wdC53aW5kb3dCaXRzXG4gICk7XG5cbiAgaWYgKHN0YXR1cyAhPT0gWl9PSykge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlc1tzdGF0dXNdKTtcbiAgfVxuXG4gIHRoaXMuaGVhZGVyID0gbmV3IGd6aGVhZGVyKCk7XG5cbiAgaW5mbGF0ZV8xJDIuaW5mbGF0ZUdldEhlYWRlcih0aGlzLnN0cm0sIHRoaXMuaGVhZGVyKTtcblxuICAvLyBTZXR1cCBkaWN0aW9uYXJ5XG4gIGlmIChvcHQuZGljdGlvbmFyeSkge1xuICAgIC8vIENvbnZlcnQgZGF0YSBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIG9wdC5kaWN0aW9uYXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0LmRpY3Rpb25hcnkgPSBzdHJpbmdzLnN0cmluZzJidWYob3B0LmRpY3Rpb25hcnkpO1xuICAgIH0gZWxzZSBpZiAodG9TdHJpbmcuY2FsbChvcHQuZGljdGlvbmFyeSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICAgIG9wdC5kaWN0aW9uYXJ5ID0gbmV3IFVpbnQ4QXJyYXkob3B0LmRpY3Rpb25hcnkpO1xuICAgIH1cbiAgICBpZiAob3B0LnJhdykgeyAvL0luIHJhdyBtb2RlIHdlIG5lZWQgdG8gc2V0IHRoZSBkaWN0aW9uYXJ5IGVhcmx5XG4gICAgICBzdGF0dXMgPSBpbmZsYXRlXzEkMi5pbmZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIG9wdC5kaWN0aW9uYXJ5KTtcbiAgICAgIGlmIChzdGF0dXMgIT09IFpfT0spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzW3N0YXR1c10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEluZmxhdGUjcHVzaChkYXRhWywgZmx1c2hfbW9kZV0pIC0+IEJvb2xlYW5cbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcik6IGlucHV0IGRhdGFcbiAqIC0gZmx1c2hfbW9kZSAoTnVtYmVyfEJvb2xlYW4pOiAwLi42IGZvciBjb3JyZXNwb25kaW5nIFpfTk9fRkxVU0guLlpfVFJFRVxuICogICBmbHVzaCBtb2Rlcy4gU2VlIGNvbnN0YW50cy4gU2tpcHBlZCBvciBgZmFsc2VgIG1lYW5zIFpfTk9fRkxVU0gsXG4gKiAgIGB0cnVlYCBtZWFucyBaX0ZJTklTSC5cbiAqXG4gKiBTZW5kcyBpbnB1dCBkYXRhIHRvIGluZmxhdGUgcGlwZSwgZ2VuZXJhdGluZyBbW0luZmxhdGUjb25EYXRhXV0gY2FsbHMgd2l0aFxuICogbmV3IG91dHB1dCBjaHVua3MuIFJldHVybnMgYHRydWVgIG9uIHN1Y2Nlc3MuIElmIGVuZCBvZiBzdHJlYW0gZGV0ZWN0ZWQsXG4gKiBbW0luZmxhdGUjb25FbmRdXSB3aWxsIGJlIGNhbGxlZC5cbiAqXG4gKiBgZmx1c2hfbW9kZWAgaXMgbm90IG5lZWRlZCBmb3Igbm9ybWFsIG9wZXJhdGlvbiwgYmVjYXVzZSBlbmQgb2Ygc3RyZWFtXG4gKiBkZXRlY3RlZCBhdXRvbWF0aWNhbGx5LiBZb3UgbWF5IHRyeSB0byB1c2UgaXQgZm9yIGFkdmFuY2VkIHRoaW5ncywgYnV0XG4gKiB0aGlzIGZ1bmN0aW9uYWxpdHkgd2FzIG5vdCB0ZXN0ZWQuXG4gKlxuICogT24gZmFpbCBjYWxsIFtbSW5mbGF0ZSNvbkVuZF1dIHdpdGggZXJyb3IgY29kZSBhbmQgcmV0dXJuIGZhbHNlLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwdXNoKGNodW5rLCBmYWxzZSk7IC8vIHB1c2ggb25lIG9mIGRhdGEgY2h1bmtzXG4gKiAuLi5cbiAqIHB1c2goY2h1bmssIHRydWUpOyAgLy8gcHVzaCBsYXN0IGNodW5rXG4gKiBgYGBcbiAqKi9cbkluZmxhdGUkMS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChkYXRhLCBmbHVzaF9tb2RlKSB7XG4gIGNvbnN0IHN0cm0gPSB0aGlzLnN0cm07XG4gIGNvbnN0IGNodW5rU2l6ZSA9IHRoaXMub3B0aW9ucy5jaHVua1NpemU7XG4gIGNvbnN0IGRpY3Rpb25hcnkgPSB0aGlzLm9wdGlvbnMuZGljdGlvbmFyeTtcbiAgbGV0IHN0YXR1cywgX2ZsdXNoX21vZGUsIGxhc3RfYXZhaWxfb3V0O1xuXG4gIGlmICh0aGlzLmVuZGVkKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGZsdXNoX21vZGUgPT09IH5+Zmx1c2hfbW9kZSkgX2ZsdXNoX21vZGUgPSBmbHVzaF9tb2RlO1xuICBlbHNlIF9mbHVzaF9tb2RlID0gZmx1c2hfbW9kZSA9PT0gdHJ1ZSA/IFpfRklOSVNIIDogWl9OT19GTFVTSDtcblxuICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gIGlmICh0b1N0cmluZy5jYWxsKGRhdGEpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgc3RybS5pbnB1dCA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHN0cm0uaW5wdXQgPSBkYXRhO1xuICB9XG5cbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5hdmFpbF9pbiA9IHN0cm0uaW5wdXQubGVuZ3RoO1xuXG4gIGZvciAoOzspIHtcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHN0cm0ub3V0cHV0ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmtTaXplKTtcbiAgICAgIHN0cm0ubmV4dF9vdXQgPSAwO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSBjaHVua1NpemU7XG4gICAgfVxuXG4gICAgc3RhdHVzID0gaW5mbGF0ZV8xJDIuaW5mbGF0ZShzdHJtLCBfZmx1c2hfbW9kZSk7XG5cbiAgICBpZiAoc3RhdHVzID09PSBaX05FRURfRElDVCAmJiBkaWN0aW9uYXJ5KSB7XG4gICAgICBzdGF0dXMgPSBpbmZsYXRlXzEkMi5pbmZsYXRlU2V0RGljdGlvbmFyeShzdHJtLCBkaWN0aW9uYXJ5KTtcblxuICAgICAgaWYgKHN0YXR1cyA9PT0gWl9PSykge1xuICAgICAgICBzdGF0dXMgPSBpbmZsYXRlXzEkMi5pbmZsYXRlKHN0cm0sIF9mbHVzaF9tb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBaX0RBVEFfRVJST1IpIHtcbiAgICAgICAgLy8gUmVwbGFjZSBjb2RlIHdpdGggbW9yZSB2ZXJib3NlXG4gICAgICAgIHN0YXR1cyA9IFpfTkVFRF9ESUNUO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNraXAgc255YyBtYXJrZXJzIGlmIG1vcmUgZGF0YSBmb2xsb3dzIGFuZCBub3QgcmF3IG1vZGVcbiAgICB3aGlsZSAoc3RybS5hdmFpbF9pbiA+IDAgJiZcbiAgICAgICAgICAgc3RhdHVzID09PSBaX1NUUkVBTV9FTkQgJiZcbiAgICAgICAgICAgc3RybS5zdGF0ZS53cmFwID4gMCAmJlxuICAgICAgICAgICBkYXRhW3N0cm0ubmV4dF9pbl0gIT09IDApXG4gICAge1xuICAgICAgaW5mbGF0ZV8xJDIuaW5mbGF0ZVJlc2V0KHN0cm0pO1xuICAgICAgc3RhdHVzID0gaW5mbGF0ZV8xJDIuaW5mbGF0ZShzdHJtLCBfZmx1c2hfbW9kZSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgWl9TVFJFQU1fRVJST1I6XG4gICAgICBjYXNlIFpfREFUQV9FUlJPUjpcbiAgICAgIGNhc2UgWl9ORUVEX0RJQ1Q6XG4gICAgICBjYXNlIFpfTUVNX0VSUk9SOlxuICAgICAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUmVtZW1iZXIgcmVhbCBgYXZhaWxfb3V0YCB2YWx1ZSwgYmVjYXVzZSB3ZSBtYXkgcGF0Y2ggb3V0IGJ1ZmZlciBjb250ZW50XG4gICAgLy8gdG8gYWxpZ24gdXRmOCBzdHJpbmdzIGJvdW5kYXJpZXMuXG4gICAgbGFzdF9hdmFpbF9vdXQgPSBzdHJtLmF2YWlsX291dDtcblxuICAgIGlmIChzdHJtLm5leHRfb3V0KSB7XG4gICAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDAgfHwgc3RhdHVzID09PSBaX1NUUkVBTV9FTkQpIHtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgbGV0IG5leHRfb3V0X3V0ZjggPSBzdHJpbmdzLnV0Zjhib3JkZXIoc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQpO1xuXG4gICAgICAgICAgbGV0IHRhaWwgPSBzdHJtLm5leHRfb3V0IC0gbmV4dF9vdXRfdXRmODtcbiAgICAgICAgICBsZXQgdXRmOHN0ciA9IHN0cmluZ3MuYnVmMnN0cmluZyhzdHJtLm91dHB1dCwgbmV4dF9vdXRfdXRmOCk7XG5cbiAgICAgICAgICAvLyBtb3ZlIHRhaWwgJiByZWFsaWduIGNvdW50ZXJzXG4gICAgICAgICAgc3RybS5uZXh0X291dCA9IHRhaWw7XG4gICAgICAgICAgc3RybS5hdmFpbF9vdXQgPSBjaHVua1NpemUgLSB0YWlsO1xuICAgICAgICAgIGlmICh0YWlsKSBzdHJtLm91dHB1dC5zZXQoc3RybS5vdXRwdXQuc3ViYXJyYXkobmV4dF9vdXRfdXRmOCwgbmV4dF9vdXRfdXRmOCArIHRhaWwpLCAwKTtcblxuICAgICAgICAgIHRoaXMub25EYXRhKHV0ZjhzdHIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkRhdGEoc3RybS5vdXRwdXQubGVuZ3RoID09PSBzdHJtLm5leHRfb3V0ID8gc3RybS5vdXRwdXQgOiBzdHJtLm91dHB1dC5zdWJhcnJheSgwLCBzdHJtLm5leHRfb3V0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNdXN0IHJlcGVhdCBpdGVyYXRpb24gaWYgb3V0IGJ1ZmZlciBpcyBmdWxsXG4gICAgaWYgKHN0YXR1cyA9PT0gWl9PSyAmJiBsYXN0X2F2YWlsX291dCA9PT0gMCkgY29udGludWU7XG5cbiAgICAvLyBGaW5hbGl6ZSBpZiBlbmQgb2Ygc3RyZWFtIHJlYWNoZWQuXG4gICAgaWYgKHN0YXR1cyA9PT0gWl9TVFJFQU1fRU5EKSB7XG4gICAgICBzdGF0dXMgPSBpbmZsYXRlXzEkMi5pbmZsYXRlRW5kKHRoaXMuc3RybSk7XG4gICAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdHJtLmF2YWlsX2luID09PSAwKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG4vKipcbiAqIEluZmxhdGUjb25EYXRhKGNodW5rKSAtPiBWb2lkXG4gKiAtIGNodW5rIChVaW50OEFycmF5fFN0cmluZyk6IG91dHB1dCBkYXRhLiBXaGVuIHN0cmluZyBvdXRwdXQgcmVxdWVzdGVkLFxuICogICBlYWNoIGNodW5rIHdpbGwgYmUgc3RyaW5nLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHN0b3JlcyBkYXRhIGJsb2NrcyBpbiBgY2h1bmtzW11gIHByb3BlcnR5IGFuZCBnbHVlXG4gKiB0aG9zZSBpbiBgb25FbmRgLiBPdmVycmlkZSB0aGlzIGhhbmRsZXIsIGlmIHlvdSBuZWVkIGFub3RoZXIgYmVoYXZpb3VyLlxuICoqL1xuSW5mbGF0ZSQxLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgdGhpcy5jaHVua3MucHVzaChjaHVuayk7XG59O1xuXG5cbi8qKlxuICogSW5mbGF0ZSNvbkVuZChzdGF0dXMpIC0+IFZvaWRcbiAqIC0gc3RhdHVzIChOdW1iZXIpOiBpbmZsYXRlIHN0YXR1cy4gMCAoWl9PSykgb24gc3VjY2VzcyxcbiAqICAgb3RoZXIgaWYgbm90LlxuICpcbiAqIENhbGxlZCBlaXRoZXIgYWZ0ZXIgeW91IHRlbGwgaW5mbGF0ZSB0aGF0IHRoZSBpbnB1dCBzdHJlYW0gaXNcbiAqIGNvbXBsZXRlIChaX0ZJTklTSCkuIEJ5IGRlZmF1bHQgLSBqb2luIGNvbGxlY3RlZCBjaHVua3MsXG4gKiBmcmVlIG1lbW9yeSBhbmQgZmlsbCBgcmVzdWx0c2AgLyBgZXJyYCBwcm9wZXJ0aWVzLlxuICoqL1xuSW5mbGF0ZSQxLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgLy8gT24gc3VjY2VzcyAtIGpvaW5cbiAgaWYgKHN0YXR1cyA9PT0gWl9PSykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuY2h1bmtzLmpvaW4oJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IGNvbW1vbi5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5jaHVua3MgPSBbXTtcbiAgdGhpcy5lcnIgPSBzdGF0dXM7XG4gIHRoaXMubXNnID0gdGhpcy5zdHJtLm1zZztcbn07XG5cblxuLyoqXG4gKiBpbmZsYXRlKGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheUJ1ZmZlcik6IGlucHV0IGRhdGEgdG8gZGVjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBpbmZsYXRlIG9wdGlvbnMuXG4gKlxuICogRGVjb21wcmVzcyBgZGF0YWAgd2l0aCBpbmZsYXRlL3VuZ3ppcCBhbmQgYG9wdGlvbnNgLiBBdXRvZGV0ZWN0XG4gKiBmb3JtYXQgdmlhIHdyYXBwZXIgaGVhZGVyIGJ5IGRlZmF1bHQuIFRoYXQncyB3aHkgd2UgZG9uJ3QgcHJvdmlkZVxuICogc2VwYXJhdGUgYHVuZ3ppcGAgbWV0aG9kLlxuICpcbiAqIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAqXG4gKiAtIHdpbmRvd0JpdHNcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBTdWdhciAob3B0aW9ucyk6XG4gKlxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBzYXkgdGhhdCB3ZSB3b3JrIHdpdGggcmF3IHN0cmVhbSwgaWYgeW91IGRvbid0IHdpc2ggdG8gc3BlY2lmeVxuICogICBuZWdhdGl2ZSB3aW5kb3dCaXRzIGltcGxpY2l0bHkuXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgZnJvbSB1dGY4IHRvIHV0ZjE2IChqYXZhc2NyaXB0KSBzdHJpbmcuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsXG4gKiAgIGNodW5rIGxlbmd0aCBjYW4gZGlmZmVyIGZyb20gYGNodW5rU2l6ZWAsIGRlcGVuZGluZyBvbiBjb250ZW50LlxuICpcbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHBha28gPSByZXF1aXJlKCdwYWtvJyk7XG4gKiBjb25zdCBpbnB1dCA9IHBha28uZGVmbGF0ZShuZXcgVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKSk7XG4gKiBsZXQgb3V0cHV0O1xuICpcbiAqIHRyeSB7XG4gKiAgIG91dHB1dCA9IHBha28uaW5mbGF0ZShpbnB1dCk7XG4gKiB9IGNhdGNoIChlcnIpIHtcbiAqICAgY29uc29sZS5sb2coZXJyKTtcbiAqIH1cbiAqIGBgYFxuICoqL1xuZnVuY3Rpb24gaW5mbGF0ZSQxKGlucHV0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGluZmxhdG9yID0gbmV3IEluZmxhdGUkMShvcHRpb25zKTtcblxuICBpbmZsYXRvci5wdXNoKGlucHV0KTtcblxuICAvLyBUaGF0IHdpbGwgbmV2ZXIgaGFwcGVucywgaWYgeW91IGRvbid0IGNoZWF0IHdpdGggb3B0aW9ucyA6KVxuICBpZiAoaW5mbGF0b3IuZXJyKSB0aHJvdyBpbmZsYXRvci5tc2cgfHwgbWVzc2FnZXNbaW5mbGF0b3IuZXJyXTtcblxuICByZXR1cm4gaW5mbGF0b3IucmVzdWx0O1xufVxuXG5cbi8qKlxuICogaW5mbGF0ZVJhdyhkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXIpOiBpbnB1dCBkYXRhIHRvIGRlY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgaW5mbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbaW5mbGF0ZV1dLCBidXQgY3JlYXRlcyByYXcgZGF0YSwgd2l0aG91dCB3cmFwcGVyXG4gKiAoaGVhZGVyIGFuZCBhZGxlcjMyIGNyYykuXG4gKiovXG5mdW5jdGlvbiBpbmZsYXRlUmF3JDEoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMucmF3ID0gdHJ1ZTtcbiAgcmV0dXJuIGluZmxhdGUkMShpbnB1dCwgb3B0aW9ucyk7XG59XG5cblxuLyoqXG4gKiB1bmd6aXAoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5QnVmZmVyKTogaW5wdXQgZGF0YSB0byBkZWNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGluZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBKdXN0IHNob3J0Y3V0IHRvIFtbaW5mbGF0ZV1dLCBiZWNhdXNlIGl0IGF1dG9kZXRlY3RzIGZvcm1hdFxuICogYnkgaGVhZGVyLmNvbnRlbnQuIERvbmUgZm9yIGNvbnZlbmllbmNlLlxuICoqL1xuXG5cbnZhciBJbmZsYXRlXzEkMSA9IEluZmxhdGUkMTtcbnZhciBpbmZsYXRlXzIgPSBpbmZsYXRlJDE7XG52YXIgaW5mbGF0ZVJhd18xJDEgPSBpbmZsYXRlUmF3JDE7XG52YXIgdW5nemlwJDEgPSBpbmZsYXRlJDE7XG52YXIgY29uc3RhbnRzID0gY29uc3RhbnRzJDI7XG5cbnZhciBpbmZsYXRlXzEkMSA9IHtcblx0SW5mbGF0ZTogSW5mbGF0ZV8xJDEsXG5cdGluZmxhdGU6IGluZmxhdGVfMixcblx0aW5mbGF0ZVJhdzogaW5mbGF0ZVJhd18xJDEsXG5cdHVuZ3ppcDogdW5nemlwJDEsXG5cdGNvbnN0YW50czogY29uc3RhbnRzXG59O1xuXG5jb25zdCB7IERlZmxhdGUsIGRlZmxhdGUsIGRlZmxhdGVSYXcsIGd6aXAgfSA9IGRlZmxhdGVfMSQxO1xuXG5jb25zdCB7IEluZmxhdGUsIGluZmxhdGUsIGluZmxhdGVSYXcsIHVuZ3ppcCB9ID0gaW5mbGF0ZV8xJDE7XG5cblxuXG52YXIgRGVmbGF0ZV8xID0gRGVmbGF0ZTtcbnZhciBkZWZsYXRlXzEgPSBkZWZsYXRlO1xudmFyIGRlZmxhdGVSYXdfMSA9IGRlZmxhdGVSYXc7XG52YXIgZ3ppcF8xID0gZ3ppcDtcbnZhciBJbmZsYXRlXzEgPSBJbmZsYXRlO1xudmFyIGluZmxhdGVfMSA9IGluZmxhdGU7XG52YXIgaW5mbGF0ZVJhd18xID0gaW5mbGF0ZVJhdztcbnZhciB1bmd6aXBfMSA9IHVuZ3ppcDtcbnZhciBjb25zdGFudHNfMSA9IGNvbnN0YW50cyQyO1xuXG52YXIgcGFrbyA9IHtcblx0RGVmbGF0ZTogRGVmbGF0ZV8xLFxuXHRkZWZsYXRlOiBkZWZsYXRlXzEsXG5cdGRlZmxhdGVSYXc6IGRlZmxhdGVSYXdfMSxcblx0Z3ppcDogZ3ppcF8xLFxuXHRJbmZsYXRlOiBJbmZsYXRlXzEsXG5cdGluZmxhdGU6IGluZmxhdGVfMSxcblx0aW5mbGF0ZVJhdzogaW5mbGF0ZVJhd18xLFxuXHR1bmd6aXA6IHVuZ3ppcF8xLFxuXHRjb25zdGFudHM6IGNvbnN0YW50c18xXG59O1xuXG5leHBvcnQgeyBEZWZsYXRlXzEgYXMgRGVmbGF0ZSwgSW5mbGF0ZV8xIGFzIEluZmxhdGUsIGNvbnN0YW50c18xIGFzIGNvbnN0YW50cywgcGFrbyBhcyBkZWZhdWx0LCBkZWZsYXRlXzEgYXMgZGVmbGF0ZSwgZGVmbGF0ZVJhd18xIGFzIGRlZmxhdGVSYXcsIGd6aXBfMSBhcyBnemlwLCBpbmZsYXRlXzEgYXMgaW5mbGF0ZSwgaW5mbGF0ZVJhd18xIGFzIGluZmxhdGVSYXcsIHVuZ3ppcF8xIGFzIHVuZ3ppcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL01lbnVNYW5hZ2VyL2xvZ2luLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9