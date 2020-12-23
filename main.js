canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_x=10;
var rover_y=10;
var car_x=10;
var car_y=110;
var rover_width=100;
var rover_height=90;
var background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
var rover_image="https://i.postimg.cc/YqdnnNX1/car1.png";
var car_image="data:image/png;base64,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";
function add(){
    background_picture=new Image();
    background_picture.onload=uploadbackground;
    background_picture.src=background_image;

    rover=new Image();
    rover.onload=rover_car;
    rover.src=rover_image;

    car=new Image();
    car.onload=car1;
    car.src=car_image;
}
function uploadbackground(){
    ctx.drawImage(background_picture,0,0,canvas.width,canvas.height);
}
function rover_car(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}
function car1(){
    ctx.drawImage(car,car_x,car_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down")
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='87'){
        w();
        console.log("w");
    }
    if(keypressed=='83'){
        s();
        console.log("s")
    }
    if(keypressed=='65'){
        a();
        console.log("a");
    }
    if(keypressed=='68'){
        d();
        console.log("d");
    }
}
function up(){
    if(rover_y >=0){
        rover_y-= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}
function down(){
    if(rover_y <=500){
        rover_y+= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}
function left(){
    if(rover_x >=0){
        rover_x-= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}
function right(){
    if(rover_y <=700){
        rover_x+= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}
function w(){
    if(car_y >=0){
        car_y-= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}
function s(){
    if(car_y <=500){
        car_y+= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}
function a(){
    if(car_x >=0){
        car_x-= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}
function d(){
    if(car_x <=700){
        car_x+= 10;
        uploadbackground();
            rover_car();
            car1();
    }
}