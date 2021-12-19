const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


let score = 0;
let life = 3;


//游戏运行状态
const START = 0;
const STARTING = 1;
const RUNNING = 2;
const PAUSE = 3;
const GAMEOVER = 4;

let state = START; //默认运行状态

let enemies = [];
let ENEMY_CREATE_INTERVAL = 800;
let ENEMY_CREATE_LASTTIME = new Date().getTime();

const sky = new Sky(SKY);
const loading = new Loading(LOADING);
let hero = new Hero(HERO);

function createComponent(){
    const currentTime = new Date().getTime();
    if(currentTime-ENEMY_CREATE_LASTTIME >= ENEMY_CREATE_INTERVAL){
        let ran = Math.floor(Math.random()*100);
        if(ran<60){
            enemies.push(new Enemy(E1));
        }else if(ran<90){
            enemies.push(new Enemy(E2));
        }else{
            enemies.push(new Enemy(E3));
        }
        // debugger;
        ENEMY_CREATE_LASTTIME = currentTime;
    }
}

function judgeComponent(){
    for(let i = 0;i < hero.bulletList.length;i++){
        hero.bulletList[i].move();
    }

    for(let i = 0;i < enemies.length;i++){
        enemies[i].move();
    }
    
}
function paintComponent(){
    for(let i = 0;i < hero.bulletList.length;i++){
        hero.bulletList[i].paint(context)
    }

    for(let i = 0;i < enemies.length;i++){
        enemies[i].paint(context);
    }

    context.textBaseline = 'top';
    context.font='20px 微软雅黑';
    context.textAlign = 'left';
    context.fillText('score: '+score,10,10);
    context.textAlign = 'right';
    context.fillText('life: '+life,SKY.width-10,10);

    //重置画笔
    context.textAlign = 'left';
    context.textBaseline = 'top';
    
}
function deleteComponent(){
    let newArr = [];
    let j = 0;
    for(let i = 0;i < hero.bulletList.length;i++){
        if(hero.bulletList[i].outOfBounds() || hero.bulletList[i].destory)
        continue;
        newArr[j++] = hero.bulletList[i];
    }
    hero.bulletList = newArr;
    newArr = [];
    j=0
    for(let i = 0;i < enemies.length;i++){
        if(enemies[i].outOfBounds()||enemies[i].destory)
        continue;
        newArr[j++] = enemies[i];
    }
    enemies = newArr;
    newArr = [];

    if(hero.destory){
        HERO.x = hero.x;
        HERO.y = hero.y;
        if(life === 0){
            state = GAMEOVER;
        }
        life--;
        hero = new Hero(HERO);
        
    }
}

//碰撞检测
function checkHit(){
    for(let i = 0;i<enemies.length;i++){
        if(hero.hit(enemies[i])){
            hero.collide();
            enemies[i].live = false;
        }
        for(let j=0;j<hero.bulletList.length;j++){
            
            //碰到了做一些事情
            if( enemies[i].hit(hero.bulletList[j])){
                enemies[i].collide();
                hero.bulletList[j].collide();
            }
        }
    }
}
//画面刷新器
function refresh(){
    switch(state) {
        case START:
            sky.judge();
            sky.paint(context);
            // 绘制logo
            context.drawImage(logo,(SKY.width-logo.naturalWidth)/2,(SKY.height-logo.naturalHeight)/2);
        break;
        case STARTING:
            sky.judge();
            sky.paint(context);

            loading.judge();
            loading.paint(context);

        break;
        case RUNNING:
            sky.judge();
            sky.paint(context);

            hero.judge();
            hero.paint(context);
            hero.shoot();

            createComponent()
            judgeComponent();
            paintComponent();
            deleteComponent();
            checkHit();

        break;
        case PAUSE:
            context.drawImage(pauseImg,(SKY.width-pauseImg.naturalWidth)/2,(SKY.height-pauseImg.naturalHeight)/2);
        break;
        case GAMEOVER:

            context.font='bold 24px 微软雅黑';
            context.textAlign='center';
            context.textBaseline='middle';
            
            context.fillText("GAME_OVER", SKY.width/2, SKY.height/2);
        break;
    }
    
    window.requestAnimationFrame(refresh);
}


bg.addEventListener('load',()=>{
    window.requestAnimationFrame(refresh);
})

canvas.addEventListener('click',()=>{
    if(state===START){
        state=STARTING;
        loading.LastTime = new Date().getTime();
    } 
})
canvas.addEventListener('touchstart',()=>{
    if(state===START){
        state=STARTING;
        loading.LastTime = new Date().getTime();
    } 
})

canvas.addEventListener('mousemove',(e)=>{
    hero.x = e.offsetX-hero.width/2;
    hero.y = e.offsetY-hero.height/2;
})
canvas.addEventListener('touchmove',(e)=>{
    hero.x = e.offsetX-hero.width/2;
    hero.y = e.offsetY-hero.height/2;
})

canvas.addEventListener('mouseenter',(e)=>{
    if(state == PAUSE){
        state=RUNNING;
    }
})
canvas.addEventListener('mouseleave',(e)=>{
    if(state == RUNNING){
        state=PAUSE;
    }
})




