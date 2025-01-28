var crsr= document.querySelector('#cursor');
var crsrBlr= document.querySelector('#cursor-blr');

document.addEventListener('mousemove',function(dets){
    crsr.style.left=dets.x+30+"px"
    //this gives the x axis position of mouse to the crsr 
    crsr.style.top=dets.y+"px";
    //this gives the y axis position of mouse to the crsr 
    crsrBlr.style.left=dets.x-200+"px"
    //this gives the x axis position of mouse to the crsr 
    crsrBlr.style.top=dets.y-200+"px";
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
var h4all = document.querySelectorAll('#nav h4');
h4all.forEach(function(elem){
elem.addEventListener('mouseenter',function(){
    crsr.style.scale=3;
    crsr.style.border="0.1px solid #fff";
    crsr.style.backgroundColor="transparent";
    crsr.style.transition="scale 0.8s ease";
})
elem.addEventListener('mouseleave',function(){
    crsr.style.scale=1;
    crsr.style.border="0px solid #95c11e";
    crsr.style.backgroundColor="#95c11e";
    crsr.style.transition="scale 0.8s ease";
})
})
