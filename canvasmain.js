var c = document.getElementById("myCanvas");
ctx = c.getContext("2d");

let loadImage=(src,callback)=>{
    let img=document.createElement("img");
    img.onload=()=>callback(img);
    img.src=src;
};

let imagePath=(frameNumber,animation) => {
    return "images/"+animation+"/"+frameNumber+".png";
};

let frames={
    idle:[1,2,3,4,5,6,7,8],
    kick:[1,2,3,4,5,6,7],
    punch:[1,2,3,4,5,6,7]
};

let loadImages=(callback) =>{
let images={idle:[], kick:[], punch:[]};
let imagesToLoad=0;

    ["idle","kick","punch"].forEach((animation) =>{
        let animationFrames=frames[animation];
        imagesToLoad=imagesToLoad +animationFrames.lenght;

        animationFrames.forEach((frameNumber)=>{
            let path =imagePath(frameNumber,animation);

       

        loadImage(path,(image)=>{
            images[animation][frameNumber-1]=image;
            imagesToLoad=imagesToLoad-1;

        if(imagesToLoad===0){
            callback(images);
        }

        });
    });
    });
};

let animate=(ctx,images,animation,callback)=>{
    
    images[animation].forEach((image,index)=>{
        setTimeout(()=>{
            ctx.clearRect(0,0,500,500);
            ctx.drawImage(image,0,0,500,500);
        },index*100);
    });
     setTimeout(callback, images[animation].lenght*100);
};

loadImages((images) => {
    let queueAnimation=[]

    let aux =()=>{
        let selectedAnimation;
        if (queueAnimation.lenght===0){
            selectedAnimation="idle"
        }else{
            selectedAnimation=queueAnimation.shift();
        }
        animate(ctx,images,selectedAnimation,aux);
    };

   

    aux();
    document.getElementById("kick").onclick = ()=>{
        queueAnimation=push("kick");
    };
    document.getElementById("punch").onclick = ()=>{
        queueAnimation=push("punch");
    };
    document.addEventListener("keyup",(event)=>{
        const key=event.key;

        if(key==="ArrowLeft"){
            queueAnimation.push("kick");
        }else if(key==="ArrowRight"){
            queueAnimation=push("punch");

        }

    });
    });











































































/***
let drawLines = (startX,startY,endX,endY) => {
ctx.beginPath();
ctx.moveTo(startX,startY);
ctx.lineTo(endX,endY );
ctx.stroke();

};

let drawCricle=(centerX,centerY,radius,startingAngle,endingAngles,color)=>{
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius,startingAngle,endingAngles);
    
    ctx.fillStyle=color;
    ctx.fill();
    ctx.stroke();
};
// Head
drawCricle(250,250,0,2 * Math.PI,"transparent");


/**
//Body
 drawLines(250,150,250,350);
 drawLines(250,200,150,150);
 drawLines(250,350,225,450);
 drawLines(250,350,275,450);
 

 let drawEyes=(radius,color)=>{
    drawCricle(300,200,radius,0,2*Math.PI )

 }

 */