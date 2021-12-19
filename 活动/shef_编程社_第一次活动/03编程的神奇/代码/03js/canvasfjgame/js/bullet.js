class Bullet{
    constructor(config,x,y){
        this.img = config.img;
        this.width = config.width;
        this.height = config.height;

        this.x=x;
        this.y=y;

        this.destory = false;
    }
    move(){
        this.y -=3;
    }
    paint(context){
        context.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    outOfBounds(){
        return this.y < -this.height;
    }
    collide(){
        this.destory =true;
    }
}