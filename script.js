function loadingAnimation(){
var tl = gsap.timeline();
tl.from(".line h1",{
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,

});
/*<div id="loader">
        <div class="line">
            <div id="line1-part1">
                <h5>00</h5>
                <h6>- 100</h6>
            </div>
            <h1>YOUR</h1>
        </div>
        <div class="line">
            <h1>Web Experiences</h1>
        </div>
        <div class="line">
            <h1>is loading right</h1>
            <h2>Now</h2>
        </div>
*/
tl.from("#line1-part1, .line h2",{
    opacity: 0,
    onStart: function(){
        let h5timer =  document.querySelector("#line1-part1 h5");
        let grow = 0;
        setInterval(function(){
            if(grow < 100) grow++
            else grow = 100
            h5timer.innerHTML = grow
            
        },33);
    },
});
tl.to(".line h2",{
    animationName: "anime",
    opacity: 1,
})
tl.to("#loader",{
    opacity: 0,
    delay: 4,
    duration: 0.2,
});
tl.from("#page1", {
    delay:0.2,
    y: 1600,
    opacity: 0,
    duration:0.5,
    ease:Power4
})
tl.to("#loader",{
    display: "none"
})
tl.from('#nav',{
    opacity: 0,
})
tl.from("#hero1 h1,#hero2 h1 ,#hero3 h2 , #hero4 h1",{
    y: 140,
    stagger: 0.2,
})

}
function cursorAnimation(){
   
    document.addEventListener("mousemove",(val) =>{
        gsap.to("#crsr",{
            left: val.x,
            top:val.y,
        })
    })
    Shery.makeMagnet("#nav-part2 h4");
    
const cursor = document.querySelector('#crsr');
const navItems = document.querySelectorAll("#nav-part2 h4");  
navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        cursor.style.width = '4vw';
        cursor.style.height = '4vw';
    });

    item.addEventListener('mouseleave', () => {
        cursor.style.width = '2.7vw';
        cursor.style.height = '2.7vw';
    });
});

}
loadingAnimation();
// window.addEventListener("load", function() {
//     document.body.style.overflowY = "auto"; // Enable only vertical scrolling
//     document.body.style.overflowX = "hidden"; // Keep horizontal scrolling disabled
// });
cursorAnimation()



