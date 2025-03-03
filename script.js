function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Sync Locomotive Scroll with ScrollTrigger
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
function loadingAnimation(){
var tl = gsap.timeline();
tl.from(".line h1",{
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,

});

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
});
tl.from("#hero1, #page2",{
    opacity: 0,
},"-=1.2");

}
function cursorAnimation(){
    let crsr = document.querySelector("#crsr");
    let vdo_cntr = document.querySelector("#video-container");
    let vdo_crsr = document.querySelector("#video-cursor");
    
    
    vdo_cntr.addEventListener("mouseenter",() => {
        crsr.style.opacity = '0';
    });
    vdo_cntr.addEventListener("mousemove", (e) => {
        let rect = vdo_cntr.getBoundingClientRect(); // Get container position
        let x = e.clientX - rect.left; // Adjust x relative to container
        let y = e.clientY - rect.top; // Adjust y relative to container
        vdo_crsr.style.transition = "none"; 
        vdo_crsr.style.left = `${x}px`;
        vdo_crsr.style.top = `${y}px`;
      });
    vdo_cntr.addEventListener("mouseleave",() => {
        crsr.style.opacity = '1';
        vdo_crsr.style.transition = "top 1s ease-out, left 1s ease-out";
        vdo_crsr.style.left = "80%";
        vdo_crsr.style.top = "-10px"; 

    });
    var vdo = document.querySelector("#video-container video");
    let img = document.querySelector("#video-container img"); // Select the image

    let isPlaying = false;
    vdo_cntr.addEventListener("click", function () {
        if (!isPlaying) {
            vdo.play()
                .then(() => {
                    vdo.style.opacity = 1;
                    img.style.opacity = 0;
                    vdo_crsr.innerHTML = `<i class="ri-pause-line"></i>`;
                    gsap.to("#video-cursor", { scale: 0.5 });
                    isPlaying = true;
                })
                .catch((error) => console.log("Error playing video:", error));
        } else {
            vdo.pause();
            vdo.style.opacity = 0;
            img.style.opacity = 1;
            vdo_crsr.innerHTML = `<i class="ri-play-fill"></i>`;
            gsap.to("#video-cursor", { scale: 1 });
            isPlaying = false;
        }
    });
    document.addEventListener("mousemove",(val) =>{
        gsap.to("#crsr",{
            left: val.x,
            top:val.y,
        })
    });
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
function shreyAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        // debug: true,

        gooey: true,
    })
}
locomotiveAnimation();
cursorAnimation();
loadingAnimation();
shreyAnimation();



document.addEventListener("mousemove",(dets) => {
    gsap.to("#flag",{
        x: dets.x,
        y: dets.y,
     
    })
});
document.querySelector("#hero3").addEventListener("mouseenter",()=>{
    gsap.to("#flag",{
        opacity: 1
    })
});
document.querySelector("#hero3").addEventListener("mouseleave",()=>{
    gsap.to("#flag",{
        opacity: 0
    })
})
function footerAnimation() {
    var footerH1 = document.querySelector("#footer h1");
    var footerH2 = document.querySelector("#footer h2");

    if (!footerH1 || !footerH2) return; // Ensure elements exist

    // Reset existing content to prevent span duplication
    var text1 = footerH1.textContent.trim();
    var text2 = footerH2.textContent.trim();

    footerH1.innerHTML = "";
    footerH2.innerHTML = "";

    var clutter = "";
    var clutter2 = "";

    text1.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
    });
    text2.split("").forEach(function (elem) {
        clutter2 += `<span>${elem}</span>`;
    });

    footerH1.innerHTML = clutter;
    footerH2.innerHTML = clutter2;

    // Ensure all spans in h2 start with opacity: 0
    gsap.set("#footer h2 span", { opacity: 0 });

    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
        gsap.to("#footer h1 span", {
            opacity: 0,
            stagger: 0.05,
            duration: 0.3
        });
        gsap.to("#footer h2 span", {
            delay: 0.3,
            opacity: 1,
            stagger: 0.05,
            duration: 0.3
        });
    });

    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
        gsap.to("#footer h2 span", {
            opacity: 0,
            stagger: 0.05,
            duration: 0.3
        });
        gsap.to("#footer h1 span", {
            opacity: 1,
            stagger: 0.05,
            duration: 0.3,
            delay: 0.3
        });
    });
}

footerAnimation()