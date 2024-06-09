// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//    //  lerp :0.1
// });

// video

let vdo = document.querySelector(".slider");
let slide = document.querySelector(".page")

 slide.addEventListener("mouseenter",()=>{
    vdo.play()
 })
 slide.addEventListener("mouseleave",()=>{
    vdo.pause()
 })


//first img effect

var img1 = document.querySelector("#imgbox");
var img2 = document.querySelector("#imgbox1");
var fool = document.querySelector("#hello");
let line = document.querySelector("#line")
fool.style.width = img1.offsetWidth + "px";

var leftspace = img1.offsetLeft

img1.onmousemove = function(e){
var boxvid = (e.pageX - leftspace) + "px";
  img2.style.width = boxvid;
  line.style.left = boxvid
}

//second img effect

var imge = document.querySelector("#imgboxx");
var img3 = document.querySelector("#imgbox2");
var fool1 = document.querySelector("#hello1");
var line1 = document.querySelector("#line1")

fool1.style.width = imge.offsetWidth + "px";

var leftspace1 = imge.offsetLeft
imge.onmousemove = function (el){
   var boxvid1 = (el.pageX - leftspace) + "px";
  img3.style.width = boxvid1;
  line1.style.left = boxvid1
} 

let audio = document.querySelector("audio");
let music = document.querySelector(".music");
  
music.addEventListener("click",()=>{
   audio.play()
})
music.addEventListener("dblclick",()=>{
   audio.pause()
})

let dark = document.querySelector("#dark");

function modechange(){
   document.body.classList.toggle = ".dark-theme"
}

// gsap

gsap.to(".black",{
   y:-900,
   duration:0.5,
   delay:1.7,
})

let tl = gsap.timeline()
tl.from(".yuvi",{
   y:-30,
   opacity:0,
   duration:0.5,
   delay:2,
})

tl.from(".list",{
   y:-10,
   opacity:0,
   duration:0.4,
   delay:0.2,
   stagger:1
})
tl.from(".btn",{
   y:-30,
   opacity:0,
   duration:1,
   stagger:1
})

tl.from("#span1",{
    x:-400,
    duration:0.5,
    delay:0.2
})
tl.from("#span2",{
    x:1300,
    duration:0.5,
    delay:0.1
})


gsap.to(".kid-run",{
   x:1100,
   duration:10,
   delay:1,
   repeat:-1
})
//cursor

let cursor = document.querySelector(".cursor");
let move = document.querySelector(".page");

move.addEventListener("mousemove",(dets)=>{
   gsap.to(cursor,{
      x:dets.x,
      y:dets.y
   })
})
move.addEventListener("mouseenter",(dets)=>{
   gsap.to(cursor,{
      x:dets.x,
      y:dets.y,
      opacity:1
   })
})
move.addEventListener("mouseleave",(dets)=>{
   gsap.to(cursor,{
      x:dets.x,
      y:dets.y,
      opacity:0
   })
})


// man speaker

let dlt = document.querySelector(".delete");
let container= document.querySelector(".container1")
let box = document.querySelector(".box5")
let play = document.querySelector(".play5")
let img = document.querySelector(".playbtn")
let video1 = document.querySelector(".vid");
let vdo5 = document.querySelector(".vdo");
let onImg = document.querySelector(".onimg");

let blank = true
play.addEventListener("click",()=>{
    if(!blank == false){
        video1.play()
        img.setAttribute("src","pause.jpg")
       
           blank = false
    }else{
        video1.pause()
        img.setAttribute("src","play.png")
        blank = true
    }
})

function start1(){
   if(video1.pause){
       video1.play()
      vdo5.removeChild(onImg)
   }
   else{
       video1.pause()
   }
}
box.addEventListener("mouseenter",()=>{
   play.style.opacity = 1
   dlt.style.opacity = 1
})
box.addEventListener("mouseleave",()=>{
   play.style.opacity = 0.1
   dlt.style.opacity = 0.1
})
dlt.addEventListener("click",()=>{
   container.removeChild(box)
})