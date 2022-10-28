class Loading{
    constructor(config){
        this.frame = config.frame;
        this.width = config.width;
        this.height = config.height;
        this.LastTime = new Date().getTime();
        this.x=config.x;
        this.y=config.y;
        this.speed = config.speed;
        this.frameIndex=0;
    }

    judge(){
        const currentTime = new Date().getTime();
        if(currentTime-this.LastTime >= this.speed){
            this.frameIndex++;
            //为使得加载完成后等待一个speed而不是立马跳到running界面，判断frame.length二不是length-1
            if( this.frameIndex=== this.frame.length){ 
                //由于此时对应index的图片已经不存在，所以要减去1
                this.frameIndex--;  
                state = RUNNING;
            }
            this.LastTime = currentTime;
        }
    }

    paint(context){
        context.drawImage(this.frame[this.frameIndex],this.x,this.y,this.width,this.height);
    }
}