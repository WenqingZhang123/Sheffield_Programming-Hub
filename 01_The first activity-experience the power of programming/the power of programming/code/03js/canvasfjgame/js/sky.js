class Sky{
    constructor(config){
        this.bg = config.bg;
        this.height = config.height;
        this.width = config.width;
        this.speed = config.speed;
        this.x = 0;
        this.y = 0;
        this.LastTime = new Date().getTime();
    }

    judge(){
        let currentTime = new Date().getTime();
        if(currentTime-this.LastTime >= this.speed ){
            this.y++;
            this.LastTime = currentTime;
        }
        if(this.y>=this.height) this.y=0;
    }

    paint(context){
        context.drawImage(this.bg, this.x, this.y, this.width, this.height);
        context.drawImage(this.bg, this.x, this.y-this.height, this.width, this.height);
       
    }

}