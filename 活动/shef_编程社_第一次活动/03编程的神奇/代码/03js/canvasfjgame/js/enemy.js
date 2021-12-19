class Enemy{
    constructor(config){
        this.width = config.width;
        this.height = config.height;

        this.type = config.type;
        this.x = parseInt(Math.random()*(SKY.width-this.width));
        this.y = -this.height;
        this.life = config.life;
        this.score = config.score;
        this.frame = config.frame;
        this.img = this.frame.live[0];
        this.live = true;

        this.maxSpeed = config.maxSpeed;
        this.minSpeed = config.minSpeed;

        this.deathIndex = 0;
        this.destory =false;
        this.LastTime = new Date().getTime();
        this.speed = Math.floor((this.minSpeed - this.maxSpeed + 1)*Math.random()+this.maxSpeed);
       
    }
    move(){
         const currentTime = new Date().getTime();
         if(currentTime-this.LastTime >= this.speed){
             if(this.live){
                this.y++;
                this.img = this.frame.live[0];
             }else{
                this.img = this.frame.death[this.deathIndex++];
                if(this.deathIndex===this.frame.death.length){
                    this.destory = true;
                }
            }
            this.LastTime = currentTime;
            
         }   
    }
    paint(context){
        context.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    outOfBounds(){
        return this.y > SKY.height;
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
        this.life--;
        if(this.life==0){
            this.live=false;
            score+=this.score;
        }
    }
}

