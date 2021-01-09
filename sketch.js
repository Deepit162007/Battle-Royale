var Character1;
var Character2;
var weaponGroup, BulletGroup;

function preload(){
    image1 = loadImage('images/AUG.png');
    image2 = loadImage('images/AWM.png');
    image3= loadImage('images/DP-28.png');
    image4= loadImage('images/Gauge_Ammo.png');
    image5= loadImage('images/Gorza.png');
    image6= loadImage('images/Kar-98.png');
    image7= loadImage('images/M416.png');
    image8= loadImage('images/M762.png');
    image9= loadImage('images/MUTANT.png');
    image10= loadImage('images/Pistol.png');
    image11= loadImage('images/Scarl.png');
    image12= loadImage('images/Shotgun.png');
    image13= loadImage('images/Sniper_ammo.png');
    image14= loadImage('images/Shotgun.png');
    
}


function setup(){
canvas = createCanvas(1200,600);

Character1 = createSprite(30,550,30,80);
Character2 = createSprite(300,550,30,80);
weaponGroup= new Group();
BulletGroup = new Group();

}

function draw(){
    background(200);
    edges = createEdgeSprites();
    if(keyDown("space")){
        Character2.velocityY =-10;
    }
    Character2.velocityY = Character2.velocityY+0.8;

    
    if(keyDown("w")){
        Character1.velocityY =-10;
    }
    Character1.velocityY = Character1.velocityY+0.8;

    if(keyDown(RIGHT_ARROW)){
        Character2.x= Character2.x+5; 
    }

    if(keyDown(LEFT_ARROW)){
        Character2.x= Character2.x-5;
    }
``
    if(keyDown("D")){
        Character1.x+=5;
    }
    if(keyDown("A")){
        Character1.x-=5;
    }
    
    Character1.collide(edges[3]);       
    Character2.collide(edges[3]);    
    
    if(keyDown("Q")){
        shootBullet(Character1.x+40,Character1.y,6)
    }

    if(keyDown("M")){
        shootBullet(Character2.x-40,Character2.y,-6)
    }

    if(BulletGroup.isTouching(Character2)){
        BulletGroup.destroyEach();
        Character2.destroy();
    }

    if(BulletGroup.isTouching(Character1)){
        BulletGroup.destroyEach();
        Character1.destroy();
    }

    spawnWeapons();
    
    drawSprites();


}

function spawnWeapons(){
    if(frameCount%100===0){
        var weapon = createSprite(100,100,30,30);
        weapon.x = random(100,1000);
        weapon.y = random(50,300);
        var num = Math.round(random(1,14));
        weapon.lifetime = 80;
        switch(num){
            case 1: weapon.addImage(image1);
                    break;
            case 2: weapon.addImage(image2);
                    break;
            case 3: weapon.addImage(image3);
                    break;
            case 4: weapon.addImage(image4);
                    break;
            case 5: weapon.addImage(image5);
                    break;
            case 6: weapon.addImage(image6);
                    break;
            default:weapon.addImage(image7);
                    break;
        }
        weapon.scale = 0.6;
        weaponGroup.add(weapon);
    }
}

function shootBullet(posX,posY, velocity){
    var bullet = createSprite(posX,posY,30,5);
    bullet.velocityX = velocity;
    bullet.lifetime = 500;
    BulletGroup.add(bullet);
}



