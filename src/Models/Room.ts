import PowerupHandler from "../PowerupSystem/PowerupHandler";
import { RoomSettings } from "../WebSocketClient/messageTypes";
import { Player } from "./Player";

export const enum GameState {
    RUNNING,
    IN_LOBBY,
    FINISHED
}

export const enum joinResult {
    ROOM_DOES_NOT_EXIST,
    ROOM_FULL,
    GAME_RUNNING,
    INVALID_USERNAME,
    SUCCESS

}

export class Room {
    private _players: { [key: string]: Player; } = {};
    private _gameState: GameState;
    private _host: Player;
    private _code: string;
    private _lastWinner: Player;
    private _settings: RoomSettings;
    public powerupHandler: PowerupHandler;

    constructor(code: string, host: Player, settings: RoomSettings, players?: { [key: string]: Player; }) {
        this._code = code;
        this._host = host;
        this._settings = settings;

        if (players) {
            this._players = players;
        } else {
            this.addPlayer(host);
        }
        // this.powerupHandler = new PowerupHandler();

    }

    public addPlayer(player: Player): boolean {

        if (Object.keys(this._players).length >= this.settings.roomSize) {
            return false;
        }

        this._players[player.username] = player;
        return true;
    }

    public removePlayer(username: string){
        delete this._players[username];
    }


    public resetRoomForNewGame(){
        //TODO fix this game state bullshit
        this._gameState = GameState.IN_LOBBY;
        this.powerupHandler.reset();
        //also reset all the players
        Object.values(this._players).forEach(player => {
            player.reset();
        });
    }
    
    public set host(newHost: Player){
        if (Object.keys(this._players).some(username => username === newHost.username)) {
            this._host = newHost;
        }
    }

    public get players(){
        return this._players;
    }

    public get host(){
        return this._host;
    }

    public get code(){
        return this._code;
    }

    public get maxSize(){
        return this.settings.roomSize;
    }

    public set maxSize(newMaxSize: number){
        if (newMaxSize > 0){
            this.settings.roomSize = newMaxSize;
        }
    }

    public get lastWinner(){
        return this._lastWinner;
    }

    public set lastWinner(newLastWinner: Player){
        if (Object.keys(this._players).some(username => username === newLastWinner.username)) {
            this._lastWinner = newLastWinner;
        }
    }

    public set settings(newSettings: RoomSettings){
        this._settings = newSettings;
        this.powerupHandler = new PowerupHandler(this.settings.arenaSize);
    }

    public get settings(){
        return this._settings;
    }


}