var tl = gsap.timeline()

function page1Animation(){
    tl.from("nav h2 ,  nav h4 , nav button" , {
        y:-30,
        opacity:0,
        delay:.5,
        duration:.5,
        stagger:.2
    })
    tl.from(".center-part1 h2",{
        x:-300,
        duration:.5,
        opacity:0
    })
    tl.from(".center-part1 p",{
        x:-100,
        duration:.5,
        opacity:0
    })
    tl.from(".center-part1 button",{
        duration:.5,
        opacity:0
    })
    tl.from(".center-part2 img",{
        duration:.5,
        opacity:0,
        x:200
    }, "-=1")    //here this line means that start this animation 1 second before
    tl.from(".section1bottom img",{
        opacity:0,
        y:30,
        duration:.6,
        stagger:.15
    })
}
page1Animation()

function page2Animation(){
    //to generalize the scroll triggger use it in time line
var tl2 = gsap.timeline({
    scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    start:"top 50%",
    end:"top 0",
    scrub:2
    }
})

tl2.from(".services",{
    opacity:0,
    y:30,
    duration:.2
})
tl2.from(".elem.white.left",{
    opacity:0,
    x:-300,
    duration:.5
}, "anim")    //by giving them the same name both run at same time
tl2.from(".elem.black.right",{
    opacity:0,
    x:300,
    duration:.5
},"anim")
tl2.from(".elem.black.left",{
    opacity:0,
    x:-300,
    duration:.5
}, "anim2")    //by giving them the same name both run at same time
tl2.from(".elem.white.right",{
    opacity:0,
    x:300,
    duration:.5
},"anim2")
}
page2Animation()
