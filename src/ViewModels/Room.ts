import { Player } from "./Player";

export class Room {
    private players: Player[] = [];
    private maxSize: number;
    private host: Player;
    private code: string;


    constructor(code: string, host: Player, players?: Player[], maxSize: number = 5) {
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

        if (this.players.length >= this.maxSize) {
            return false;
        }

        this.players.push(player)
        return true;
    }

    public getCode() {
        return this.code;
    }

    public getPlayers(): Player[] {
        return this.players;
    }

    public getHost(): Player {
        return this.host;
    }

    public setHost(player: Player) {
        this.host = player;
    }

    public setPlayers(players: Player[]){
        this.players = players;
    }

    public setMaxSize(newSize: number){
        this.maxSize = newSize;
    }

    public getMaxSize(){
        return this.maxSize;
    }
}