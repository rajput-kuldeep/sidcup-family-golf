
let crsr = document.querySelector("#cursor");
let crsrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 200 + "px";
    crsrBlur.style.top = dets.y - 200 + "px";
})



let navlinks = document.querySelectorAll(".nav h4")
navlinks.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })

    elem.addEventListener("mouseleave", () => {
        crsr.style.scale = 1
        crsr.style.border = "1px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"

    })

})







gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "150px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -10%",
        scrub: 1.5,


    }

})
gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers:true,
        start: "top -2%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3,
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers:true,
        start: "top 110%",
        end: "top 30%",
        scrub: 3,
    }
})

gsap.from("#page4h1", {
    y: 40,
    duration: 0.4,
    scrollTrigger: {
        trigger: "#page4h1",
        scroller: "body",
        // markers:true,
        scrub: 2,
        start: "top 75%",
        end: "top 70%"
    }
})

let question1 = document.querySelector(".question-1");
let question2 = document.querySelector(".question-2");
let answer1 = document.querySelector(".answer-1")
let answer2 = document.querySelector(".answer-2")
// let rotat = document.querySelector(".question i")

// question1.addEventListener("click", function(){
//     if(answer1.style.display === "none"){
//         answer1.style.display = "block";
//     }else{
//         answer1.style.display = "none";
//     }
        
//     // rotat.style.rotate = "180deg";
// })
// question2.addEventListener("click", function(){
//     if(answer2.style.display === "none"){
//         answer2.style.display = "block";
//     }else{
//         answer2.style.display = "none";
//     }
        
//     // rotat.style.rotate = "180deg";
// })

let logo = document.querySelector("#logo-img");
console.log(logo)
logo.addEventListener("click", ()=>{
    // window.location.href = "index.html"
    alert("hello")
})


