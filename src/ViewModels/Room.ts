import { Player } from "./Player";

export const enum GameState {
    RUNNING,
    IN_LOBBY,
    FINISHED
}
export class Room {
    private players: { [key: string]: Player; } = {};
    private maxSize: number;
    private gameState: GameState;
    private host: Player;
    private code: string;


    constructor(code: string, host: Player, players?: { [key: string]: Player; }, maxSize: number = 5) {
        this.code = code;
        this.host = host;
        this.maxSize = maxSize;

        if (players != undefined) {
            this.players = players;
        }
        else{
            this.addPlayer(host);
        }

    }

    public addPlayer(player: Player): boolean {

        if (Object.keys(this.players).length >= this.maxSize) {
            return false;
        }

        this.players[player.username] = player;
        return true;
    }

    public getCode() {
        return this.code;
    }

    public getPlayers(): { [key: string]: Player; } {
        return this.players;
    }

    public getHost(): Player {
        return this.host;
    }

    public setHost(player: Player) {
        this.host = player;
    }

    public setPlayers(players: { [key: string]: Player; }){
        this.players = players;
    }

    public setMaxSize(newSize: number){
        this.maxSize = newSize;
    }

    public getMaxSize(){
        return this.maxSize;
    }

    public setGameState(newGameState: GameState){
        this.gameState = newGameState;
    }

    public getGameState(){
        return this.gameState;
    }
}