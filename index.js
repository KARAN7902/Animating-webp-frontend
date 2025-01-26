var crsr= document.querySelector('#cursor');
var crsrBlr= document.querySelector('#cursor-blr');

document.addEventListener('mousemove',function(dets){
    crsr.style.left=dets.x+"px"
    //this gives the x axis position of mouse to the crsr 
    crsr.style.top=dets.y+"px";
    //this gives the y axis position of mouse to the crsr 
    crsrBlr.style.left=dets.x-150+"px"
    //this gives the x axis position of mouse to the crsr 
    crsrBlr.style.top=dets.y-150+"px";
})
//this function work when we hover the mouse the cursor will move arround the arrow cursor-blr





gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2,
    }
})