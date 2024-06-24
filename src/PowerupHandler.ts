import Powerup from "./PowerupSystem/powerup";
import { PowerupAction } from "./WebSocketClient/messageTypes";

export default class PowerupHandler {

    private _powerups: { [key: number]: Powerup } = {};

    constructor() {
    }
  
    public addPowerup(powerup: Powerup) {
      this._powerups[powerup.id] = powerup;
    }
  
    public removePowerup(powerup: Powerup) {
      delete this._powerups[powerup.id];
      
    }

    public draw(){
        Object.values(this._powerups).forEach(powerup => {
            powerup.draw();
        });
    }

}