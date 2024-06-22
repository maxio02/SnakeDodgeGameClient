import { Player } from "./Player";

export const enum GameState {
    RUNNING,
    IN_LOBBY,
    FINISHED
}
export class Room {
    private _players: { [key: string]: Player; } = {};
    private _maxSize: number;
    private _gameState: GameState;
    private _host: Player;
    private _code: string;
    private _lastWinner: Player;


    constructor(code: string, host: Player, players?: { [key: string]: Player; }, maxSize: number = 5) {
        this._code = code;
        this._host = host;
        this._maxSize = maxSize;

        if (players) {
            this._players = players;
        } else {
            this.addPlayer(host);
        }

    }

    public addPlayer(player: Player): boolean {

        if (Object.keys(this._players).length >= this._maxSize) {
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
        return this._maxSize;
    }

    public set maxSize(newMaxSize: number){
        if (newMaxSize > 0){
            this._maxSize = newMaxSize;
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


}