export class Player {
    public username: string;
    public isReady: boolean;
    public color: string;
    
    constructor(username: string, isReady: boolean = false) {
        this.username = username;
        this.isReady = isReady;
        this.color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    }

    toJSON() {
        return {
          username: this.username,
          isReady: this.isReady,
          color: this.color
        };
      }

}