 const imageSource = {
    bg:"img/background.png",
    logo: 'img/logo.png',
    loadingFrame:["img/load0.png","img/load1.png","img/load2.png"],
    hero:{
        live:['img/me1.png','img/me2.png'],
        death:['img/me_destroy_1.png','img/me_destroy_2.png','img/me_destroy_3.png','img/me_destroy_4.png']
    },
    bullet:"img/bullet1.png",
    e1Frame:{
        live:['img/enemy1.png'],
        death:['img/enemy1_down1.png','img/enemy1_down2.png','img/enemy1_down3.png','img/enemy1_down4.png']
    },
    e2Frame:{
        live:['img/enemy2.png'],
        death:['img/enemy2_down1.png','img/enemy2_down2.png','img/enemy2_down3.png','img/enemy2_down4.png']
    },
    e3Frame:{
        live:['img/enemy3_n1.png'],
        death:['img/enemy3_down1.png','img/enemy3_down2.png','img/enemy3_down3.png','img/enemy3_down4.png']
    },
    pause:'img/pause_nor.png'
 }

 function createSrc(src){
    let img;
    if(typeof src === "string"){
        img = new Image();
        img.src = src;
    }else{
        img = [];
        for(let i=0;i<src.length;i++){
            img[i] = new Image();
            img[i].src = src[i];
        }
    }
    return img;
 }
 

 //背景图片
 const bg =  createSrc(imageSource.bg);
 //logo
 const logo =  createSrc(imageSource.logo);
 // 加载图片
 const loadingFrame = createSrc(imageSource.loadingFrame);

 // 玩家图片资源
 const heroFrame = {
     live:createSrc(imageSource.hero.live),
     death:createSrc(imageSource.hero.death)
 };

 //子弹图片
 const bulletImg =createSrc(imageSource.bullet);

 // 敌机资源图片
 const e1Frame = {
     live:createSrc(imageSource.e1Frame.live),
     death:createSrc(imageSource.e1Frame.death)
 }
 
 const e2Frame = {
     live:createSrc(imageSource.e2Frame.live),
     death:createSrc(imageSource.e2Frame.death)
 }

 const e3Frame = {
     live:createSrc(imageSource.e3Frame.live),
     death:createSrc(imageSource.e1Frame.death)
 }


 //暂停时
 const pauseImg =createSrc(imageSource.pause);



 const SKY = {
     bg:bg,
     width:480,
     height:650,
     speed:10
 }

 const LOADING = {
     frame:loadingFrame,
     width:180,
     height:57,
     x:0,
     y:650 -57,
     speed:500
 }

 let HERO = {
     frame:heroFrame,
     width:102,
     height:126,
     speed:100,
     x:null,
     y:null
 }

 const BULLET = {
     img:bulletImg,
     width:5,
     height:11,

 }

 //敌机配置项
 const E1 ={ type:1,width:57,height:43,life:1,frame:e1Frame,minSpeed:20,maxSpeed:15,score:1};
 const E2 ={ type:2,width:69,height:99,life:3,frame:e2Frame,minSpeed:30,maxSpeed:20,score:5};
 const E3 ={ type:3,width:165,height:261,life:20,frame:e3Frame,minSpeed:50,maxSpeed:40,score:20};