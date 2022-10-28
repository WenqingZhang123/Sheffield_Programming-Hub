class Hero{
    constructor(config){
        this.frame = config.frame;
        this.width = config.width;
        this.height = config.height;
        this.x =config.x==null? (SKY.width-this.width)/2:config.x;
        this.y =config.y==null? SKY.height-this.height:config.y;
        this.img = this.frame.live[0];
        this.live = true;

        this.LastTime = new Date().getTime();
        this.speed = config.speed;

        this.frameLiveIndex = 0;
        this.frameDeathIndex = 0;

        this.LastShortTime = new Date().getTime(); //最后一次射击的时间
        this.shortInterval =200; //攻速
        this.bulletList = [];

        this.destory = false;
    }

    judge(){
        const currentTime = new Date().getTime();
        if(currentTime - this.LastTime > this.speed){
            if(this.live){
                this.img = this.frame.live[this.frameLiveIndex++ % this.frame.live.length];
                
            }else{
                this.img = this.frame.death[this.frameDeathIndex++];
                if(this.frameDeathIndex === this.frame.death.length){
                    this.destory = true;
                }
            }
            this.LastTime = currentTime;
        }
    }

    paint(context){

        context.drawImage(this.img,this.x,this.y,this.width,this.height);
    }

    shoot(){
        let currentShortTime = new Date().getTime();
        if(currentShortTime-this.LastShortTime>this.shortInterval){
            let bullet = new Bullet(BULLET,(this.x + (this.width-BULLET.width)/2),(this.y - BULLET.height));
            this.bulletList.push(bullet);
            bullet.paint(context);
            this.LastShortTime = currentShortTime;

        }
    }
    hit(o){
        let el = this.x;
        let er = this.x+this.width;
        let et = this.y;
        let eb = this.y+this.height;

       
        let ol = o.x;
        let or = o.x+o.width;
        let ot = o.y;
        let ob = o.y+o.height;

        if(ol>er || or<el || ob<et || ot>eb){
            return false;
        }else{
            return true;
        }
    

    }
    collide(){
        this.live=false;
    }
}